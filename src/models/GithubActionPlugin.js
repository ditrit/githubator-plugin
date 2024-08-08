import {
  DefaultData,
  DefaultPlugin,
} from '@ditrit/leto-modelizer-plugin-core';
import GithubActionMetadata from '../metadata/GithubActionMetadata';
import GithubActionParser from '../parser/GithubActionParser';
import GithubActionRenderer from '../render/GithubActionRenderer';
import packageInfo from '../../package.json';
import GithubActionConfiguration from './GithubActionConfiguration';

/**
 * GithubAction plugin.
 */
class GithubActionPlugin extends DefaultPlugin {
  /**
   * Default constructor.
   * @param {object} [props] - Object that contains all properties to set.
   * @param {object} [props.event] - Event manager.
   * @param {Function} [props.event.next] - Function to emit event.
   */
  constructor(props = {
    event: null,
  }) {
    const configuration = new GithubActionConfiguration();
    const pluginData = new DefaultData(configuration, {
      name: packageInfo.name,
      version: packageInfo.version,
    }, props.event);

    super({
      configuration,
      pluginData,
      pluginMetadata: new GithubActionMetadata(pluginData),
      pluginParser: new GithubActionParser(pluginData),
      pluginRenderer: new GithubActionRenderer(pluginData),
    });
  }
}

export default GithubActionPlugin;
