import {
  DefaultPlugin,
} from 'leto-modelizer-plugin-core';
import GithubActionDrawer from 'src/draw/GithubActionDrawer';
import GithubActionMetadata from 'src/metadata/GithubActionMetadata';
import GithubActionParser from 'src/parser/GithubActionParser';
import GithubActionRenderer from 'src/render/GithubActionRenderer';
import { name, version } from 'package.json';
import GithubActionData from 'src/models/GithubActionData';

/**
 * GithubAction plugin.
 */
class GithubActionPlugin extends DefaultPlugin {
  /**
   * Default constructor.
   */
  constructor() {
    const pluginData = new GithubActionData({
      name,
      version,
      defaultFileName: 'new_workflow.yml',
    });

    super({
      pluginData,
      pluginDrawer: new GithubActionDrawer(pluginData),
      pluginMetadata: new GithubActionMetadata(pluginData),
      pluginParser: new GithubActionParser(pluginData),
      pluginRenderer: new GithubActionRenderer(pluginData),
    });
  }
}

export default GithubActionPlugin;
