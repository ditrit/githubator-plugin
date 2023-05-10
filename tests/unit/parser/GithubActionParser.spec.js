import fs from 'fs';
import GithubActionParser from 'src/parser/GithubActionParser';
import { FileInput, FileInformation, DefaultData } from 'leto-modelizer-plugin-core';
import completeCI from 'tests/resources/yml/completeCI';
import emptyTriggers from 'tests/resources/yml/emptyTriggers';
import GithubActionMetadata from 'src/metadata/GithubActionMetadata';

describe('Test GithubActionParser', () => {
  describe('Test function: isParsable', () => {
    it('Should return true on verySimple.yml', () => {
      const parser = new GithubActionParser();
      const file = new FileInformation({ path: '.github/workflows/verySimple.yml' });

      expect(parser.isParsable(file)).toEqual(true);
    });

    it('Should return false on misplaced file', () => {
      const parser = new GithubActionParser();
      const file = new FileInformation({ path: 'simple.yml' });

      expect(parser.isParsable(file)).toEqual(false);
    });

    it('Should return false on wrong file', () => {
      const parser = new GithubActionParser();
      const file = new FileInformation({ path: '.github/workflows/simple.tf' });

      expect(parser.isParsable(file)).toEqual(false);
    });

    it('Should return components from a .yaml file', () => {
      const parser = new GithubActionParser();
      const file = new FileInformation({ path: '.github/workflows/yamlFile.yaml' });

      expect(parser.isParsable(file)).toEqual(true);
    });
  });

  describe('Test function: getModels', () => {
    it('should return an empty array if there are no files', () => {
      const parser = new GithubActionParser();

      expect(parser.getModels([])).toEqual([]);
    });

    it('should return only parsable model', () => {
      const parser = new GithubActionParser();
      const files = [
        new FileInformation({ path: '.github/workflows/verySimple.yml' }),
        new FileInformation({ path: 'simple.yml' }),
        new FileInformation({ path: '.github/workflows/simple.tf' }),
      ];
      const parsableFiles = files.filter((file) => parser.isParsable(file));

      expect(parser.getModels(parsableFiles)).toEqual(['.github/workflows/verySimple.yml']);
    });
  });

  describe('Test function: parse', () => {
    it('Should detect empty triggers', () => {
      const pluginData = new DefaultData();
      const metadata = new GithubActionMetadata(pluginData);
      const parser = new GithubActionParser(pluginData);
      const file = new FileInput({
        path: './completeCI.yml',
        content: fs.readFileSync('tests/resources/yml/emptyTriggers.yml', 'utf8'),
      });
      metadata.parse();
      parser.parse([file]);

      expect(pluginData.components).toEqual(emptyTriggers);
    });

    it('Should set empty components without input files', () => {
      const pluginData = new DefaultData();
      const parser = new GithubActionParser(pluginData);
      parser.parse();

      expect(pluginData.components).not.toBeNull();
      expect(pluginData.components.length).toEqual(0);
    });

    it('Should set empty components with files without content', () => {
      const pluginData = new DefaultData();
      const parser = new GithubActionParser(pluginData);
      parser.parse([
        new FileInformation({ path: 'a', content: null }),
        new FileInformation({ path: 'a', content: '' }),
      ]);

      expect(pluginData.components).not.toBeNull();
      expect(pluginData.components.length).toEqual(0);
    });

    it('Parse completeCI.yml should set valid components', () => {
      const pluginData = new DefaultData();
      const metadata = new GithubActionMetadata(pluginData);
      const parser = new GithubActionParser(pluginData);
      const file = new FileInput({
        path: './completeCI.yml',
        content: fs.readFileSync('tests/resources/yml/completeCI.yml', 'utf8'),
      });
      metadata.parse();
      parser.parse([file]);

      expect(pluginData.components).toEqual(completeCI);
    });
  });
});
