import { DefaultConfiguration } from 'leto-modelizer-plugin-core';
import syntax from 'src/configuration/syntax';

/**
 * Githubator configuration.
 */
class GithubActionConfiguration extends DefaultConfiguration {
  /**
   * Default constructor.
   * @param {object} [props] - Object that contains all properties to set.
   */
  constructor(props) {
    super({
      ...props,
      editor: {
        ...props.editor,
        syntax,
      },
      tags: ['Github', 'CI', 'CD', 'Workflow', 'Pipeline'],
    });
  }
}

export default GithubActionConfiguration;
