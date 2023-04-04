import { DefaultParser } from 'leto-modelizer-plugin-core';
import GithubActionListener from 'src/parser/GithubActionListener';
import { parse as lidyParse } from 'src/lidy/github';

/**
 * Class to parse and retrieve components from GithubAction files.
 */
class GithubActionParser extends DefaultParser {
  /**
   * Indicate if this parser can parse this file.
   * @param {FileInformation} [fileInformation] - File information.
   * @return {Boolean} - Boolean that indicates if this file can be parsed or not.
   */
  isParsable(fileInformation) {
    // TODO: rework when we can use any folder we want on leto-modelizer
    // Use: return /^\.github\/workflows\/.*\.yml$/.test(fileInformation.path);
    return /\/.*\.yml$/.test(fileInformation.path);
  }

  /**
   * Convert the content of files into Components.
   * @param {FileInput[]} [inputs=[]] - Data you want to parse.
   */
  parse(inputs = []) {
    this.pluginData.components = [];
    this.pluginData.parseErrors = [];

    inputs
      .filter(({ content }) => content !== null)
      .forEach((input, index) => {
        const listener = new GithubActionListener(
          input,
          this.pluginData.definitions.components,
          `workflow_${index + 1}`,
        );

        lidyParse({
          src_data: input.content,
          listener,
          path: input.path,
          prog: {
            errors: [],
            warnings: [],
            imports: [],
            alreadyImported: [],
            root: [],
          },
        });

        listener.components.forEach((component) => this.pluginData.components.push(component));
      });
  }
}

export default GithubActionParser;
