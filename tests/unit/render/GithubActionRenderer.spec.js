import GithubActionRenderer from 'src/render/GithubActionRenderer';
import { DefaultData, FileInput, FileInformation } from 'leto-modelizer-plugin-core';
import fs from 'fs';
import GithubActionParser from 'src/parser/GithubActionParser';
import GithubActionMetadata from 'src/metadata/GithubActionMetadata';

describe('Test GithubActionMetadata', () => {
  describe('Test method: render', () => {
    it('Should render completeCI', () => {
      const pluginData = new DefaultData();
      const metadata = new GithubActionMetadata(pluginData);
      const parser = new GithubActionParser(pluginData);
      const render = new GithubActionRenderer(pluginData);
      const fileToParse = new FileInput({
        path: './completeCI.yml',
        content: fs.readFileSync('tests/resources/yml/completeCI.yml', 'utf8'),
      });

      metadata.parse();
      parser.parse(new FileInformation({ path: './completeCI.yml' }), [fileToParse]);

      const [file] = render.render([]);

      expect(file).toEqual(fileToParse);
    });
  });
});
