import { DefaultConfiguration, Tag } from 'leto-modelizer-plugin-core';
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
      tags: [
        new Tag({ type: 'language', value: 'Github' }),
        new Tag({ type: 'category', value: 'CI' }),
        new Tag({ type: 'category', value: 'CD' }),
      ],
      restrictiveFolder: '.github/workflows/',
    });
  }
}

export default GithubActionConfiguration;
