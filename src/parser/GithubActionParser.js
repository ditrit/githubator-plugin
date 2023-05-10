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
  isParsable({ path }) {
    // Accept both yaml and yml extensions
    return /^\.github\/workflows\/.*\.ya?ml$/.test(path);
  }

  /**
   * Convert the content of files into Components.
   * @param {FileInput[]} [inputs=[]] - Data you want to parse.
   * @param {string} [parentEventId=null] - Parent event id.
   */
  parse(inputs = [], parentEventId = null) {
    this.pluginData.components = [];
    this.pluginData.parseErrors = [];

    inputs
      .filter(({ path, content }) => {
        if (content && content.trim() !== '') {
          return true;
        }

        this.pluginData.emitEvent({
          parent: parentEventId,
          type: 'Parser',
          action: 'read',
          status: 'warning',
          files: [path],
          data: {
            code: 'no_content',
            global: false,
          },
        });

        return false;
      })
      .forEach((input, index) => {
        const id = this.pluginData.emitEvent({
          parent: parentEventId,
          type: 'Parser',
          action: 'read',
          status: 'running',
          files: [input.path],
          data: {
            global: false,
          },
        });
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
        this.pluginData.emitEvent({ id, status: 'success' });
      });
  }
}

export default GithubActionParser;
