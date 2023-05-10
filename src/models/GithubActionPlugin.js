import {
  DefaultData,
  DefaultPlugin,
} from 'leto-modelizer-plugin-core';
import GithubActionDrawer from 'src/draw/GithubActionDrawer';
import GithubActionMetadata from 'src/metadata/GithubActionMetadata';
import GithubActionParser from 'src/parser/GithubActionParser';
import GithubActionRenderer from 'src/render/GithubActionRenderer';
import packageInfo from 'package.json';
import GithubActionConfiguration from 'src/models/GithubActionConfiguration';

/**
 * GithubAction plugin.
 */
class GithubActionPlugin extends DefaultPlugin {
  /**
   * Default constructor.
   *
   * @param {object} [props={}] - Object that contains all properties to set.
   * @param {object} [props.event] - Event manager.
   * @param {Function} [props.event.next] - Function to emit event.
   */
  constructor(props = {
    event: null,
  }) {
    const pluginData = new DefaultData({
      name: packageInfo.name,
      version: packageInfo.version,
      defaultFileName: 'new_workflow.yml',
    }, props.event);

    super({
      pluginData,
      pluginDrawer: new GithubActionDrawer(pluginData),
      pluginMetadata: new GithubActionMetadata(pluginData),
      pluginParser: new GithubActionParser(pluginData),
      pluginRenderer: new GithubActionRenderer(pluginData),
      configuration: new GithubActionConfiguration(),
    });
  }
}

export default GithubActionPlugin;
