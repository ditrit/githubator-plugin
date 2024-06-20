import { DefaultConfiguration, Tag } from 'leto-modelizer-plugin-core';
import syntax from 'src/configuration/syntax';

/**
 * Githubator configuration.
 */
class GithubActionConfiguration extends DefaultConfiguration {
  /**
   * Default constructor.
   */
  constructor() {
    super({
      editor: {
        syntax,
      },
      tags: [
        new Tag({ type: 'language', value: 'Github' }),
        new Tag({ type: 'category', value: 'CI' }),
        new Tag({ type: 'category', value: 'CD' }),
      ],
      restrictiveFolder: '.github/workflows/',
      isFolderTypeDiagram: false,
      defaultFileName: 'new_workflow.yml',
      defaultFileExtension: 'yml',
      extraResources: [{
        type: 'markers',
        name: 'startLinkMarker',
      }, {
        type: 'markers',
        name: 'endLinkMarker',
      }, {
        type: 'links',
        name: 'defaultLink',
      }, {
        type: 'links',
        name: 'temporaryLink',
      }, {
        type: 'icons',
        name: 'error',
      }, {
        type: 'icons',
        name: 'menu',
      }, {
        type: 'icons',
        name: 'resize',
      }],
      container: {
        margin: 15,
        gap: 50,
      },
    });
  }
}

export default GithubActionConfiguration;
