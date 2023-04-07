import { DefaultRender, FileInput } from 'leto-modelizer-plugin-core';
import nunjucks from 'nunjucks';
import templates from 'src/render/GithubActionTemplate';

/**
 * Class to render GithubAction files from components.
 */
class GithubActionRenderer extends DefaultRender {
  /**
   * Default constructor, initialize nunjucks library and template.
   *
   * @param {object} pluginData - Plugin data with components
   */
  constructor(pluginData) {
    super(pluginData);

    const Loader = nunjucks.Loader.extend({
      getSource(name) {
        return {
          src: templates[name],
        };
      },
    });
    const env = new nunjucks.Environment(new Loader(), {
      autoescape: false,
      trimBlocks: true,
      lstripBlocks: true,
    });
    this.template = nunjucks.compile(templates.root, env);
  }

  /**
   * Convert all provided components and links in GitHub files.
   *
   * @returns {FileInput[]} Array of generated files from components and links.
   */
  renderFiles() {
    return this.generateFilesFromComponentsMap(
      this.pluginData.components.reduce(
        (map, component) => {
          if (!map.has(component.path)) {
            map.set(component.path, [component]);
          } else {
            map.get(component.path).push(component);
          }

          return map;
        },
        new Map(),
      ),
    );
  }

  /**
   * Render files from related components.
   *
   * @param {Map<string,Component>} map - Component mapped by file name.
   * @param {string} [parentEventId=null] - Parent event id.
   * @returns {FileInput[]} Render files array.
   */
  generateFilesFromComponentsMap(map, parentEventId = null) {
    const files = [];

    map.forEach((components, path) => {
      const id = this.pluginData.emitEvent({
        parent: parentEventId,
        type: 'Render',
        action: 'write',
        status: 'running',
        files: [path],
        data: {
          global: false,
        },
      });
      const workflow = components.find(({ definition }) => definition.type === 'workflow');
      const triggers = components.filter(({ definition }) => definition.type === 'trigger');
      const steps = components.filter(({ definition }) => definition.type === 'step');
      const content = `${this.template.render({
        workflow,
        workflowName: workflow?.attributes.find(({ name }) => name === 'name'),
        triggers,
        jobs: components.filter(({ definition }) => definition.type === 'job'),
        getAttributes: (component) => component.attributes.filter(({ name }) => name !== 'workflow_id' && name !== 'job_id'),
        getTriggerAttribute: (trigger, name) => trigger.attributes
          .find((attribute) => attribute.name === name),
        getSteps: (jobId) => steps.filter((step) => step.attributes
          .some(({ name, value }) => name === 'job_id' && value === jobId)),
      }).trim()}\n`;

      files.push(new FileInput({
        path,
        content,
      }));

      this.pluginData.emitEvent({ id, status: 'success' });
    });

    return files;
  }
}

export default GithubActionRenderer;
