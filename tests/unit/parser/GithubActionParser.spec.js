import fs from 'fs';
import GithubActionParser from 'src/parser/GithubActionParser';
import { FileInput, FileInformation, DefaultData } from 'leto-modelizer-plugin-core';
import completeCI from 'tests/resources/completeCI';

describe('Test GithubActionParser', () => {
  describe('Test functions', () => {
    describe('Test function: isParsable', () => {
      it('Should return true on simple.yml', () => {
        const parser = new GithubActionParser();
        const file = new FileInformation({ path: '.github/workflows/simple.yml' });

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
    });

    describe('Test function: parse', () => {
      it('Should set empty components on no input files', () => {
        const pluginData = new DefaultData();
        const parser = new GithubActionParser(pluginData);
        parser.parse();

        expect(pluginData.components).not.toBeNull();
        expect(pluginData.components.length).toEqual(0);
      });

      it('Parse completeCI.yml should set valid components', () => {
        const pluginData = new DefaultData();
        const parser = new GithubActionParser(pluginData);
        const file = new FileInput({
          path: './completeCI.yml',
          content: fs.readFileSync('tests/resources/yml/completeCI.yml', 'utf8'),
        });
        parser.parse([file]);

        expect(pluginData.components).toEqual(completeCI);
      });
    });
  });
});
