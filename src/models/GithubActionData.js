import { DefaultData, Component, ComponentAttribute } from 'leto-modelizer-plugin-core';

/**
 * Class that represents all data of a Plugin.
 */
class GithubActionData extends DefaultData {
  /**
   * Create new component.
   *
   * @param {ComponentDefinition} definition - Component definition.
   * @param {string} [folder=''] - Folder path.
   * @returns {string} Component id.
   */
  addComponent(definition, folder = '') {
    const id = this.generateComponentId(definition);
    const workflow = this.components.find(({ definition: def }) => def.type === 'workflow');
    const path = (workflow) ? workflow.path : `${folder}${this.defaultFileName}`;
    const component = new Component({
      id,
      definition,
      path,
    });

    if (definition.type === 'job' || definition.type === 'trigger') {
      component.attributes.push(new ComponentAttribute({
        name: 'workflow_id',
        value: workflow.id,
        type: 'String',
        definition: definition.definedAttributes.find(({ name }) => name === 'workflow_id'),
      }));
    }

    if (definition.type === 'job') {
      component.attributes.push(new ComponentAttribute({
        name: 'name',
        value: id,
        type: 'String',
        definition: definition.definedAttributes.find(({ name }) => name === 'name'),
      }));
    }

    this.components.push(component);

    return id;
  }
}

export default GithubActionData;
