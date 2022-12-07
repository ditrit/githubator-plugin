import { DefaultMetadata } from 'leto-modelizer-plugin-core';

/**
 * Class to validate and retrieve components definitions from GithubAction metadata.
 */
class GithubActionMetadata extends DefaultMetadata {
  validate() {
    return super.validate();
  }

  /**
   * Parse all components definitions from metadata.
   */
  parse() {
    this.pluginData.definitions = {
      components: [],
    };
  }
}

export default GithubActionMetadata;
