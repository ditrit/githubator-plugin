import { DefaultDrawer } from 'leto-modelizer-plugin-core';

/**
 * Class to draw GithubAction components.
 */
class GithubActionDrawer extends DefaultDrawer {
  constructor(pluginData, resources, events, rootId, options) {
    super(pluginData, resources, events, rootId, {
      ...options,
      minHeight: 80,
      minWidth: 110,
      margin: 5,
    });
  }
}

export default GithubActionDrawer;
