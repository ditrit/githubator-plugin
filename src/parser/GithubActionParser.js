import { DefaultParser } from 'leto-modelizer-plugin-core';

/**
 * Class to parse and retrieve components from GithubAction files.
 */
class GithubActionParser extends DefaultParser {
  /**
   * Indicate if this parser can parse this file.
   * @param {FileInformation} [fileInformation] - File information.
   * @return {Boolean} - Boolean that indicates if this file can be parsed or not.
   */
  // eslint-disable-next-line no-unused-vars
  isParsable(fileInformation) {
    return true;
  }

  /**
   * Convert the content of files into Components.
   * @param {FileInput[]} [inputs=[]] - Data you want to parse.
   */
  // eslint-disable-next-line no-unused-vars
  parse(inputs = []) {
    this.pluginData.components = [];
    this.pluginData.parseErrors = [];
  }
}

export default GithubActionParser;
