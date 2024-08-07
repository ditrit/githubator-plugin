import GithubActionMetadata from 'src/metadata/GithubActionMetadata';
import { Component, ComponentAttribute, DefaultData } from '@ditrit/leto-modelizer-plugin-core';

const pluginData = new DefaultData();
const metadata = new GithubActionMetadata(pluginData);

metadata.parse();

const workflow = pluginData.definitions.components
  .find(({ category }) => category === 'workflow');
const triggerPush = pluginData.definitions.components
  .find(({ category, action }) => category === 'trigger' && action === 'push');
const triggerPull = pluginData.definitions.components
  .find(({ category, action }) => category === 'trigger' && action === 'pull_request');

export default [
  new Component({
    id: 'workflow_1',
    name: 'Empty trigger',
    definition: workflow,
    path: './completeCI.yml',
    attributes: [new ComponentAttribute({
      name: 'name',
      value: 'Empty trigger',
      type: 'String',
      definition: workflow.definedAttributes.find(({ name }) => name === 'name'),
    })],
  }),
  new Component({
    id: 'trigger_1',
    definition: triggerPush,
    path: './completeCI.yml',
    attributes: [new ComponentAttribute({
      name: 'workflow_id',
      value: 'workflow_1',
      type: 'String',
      definition: triggerPush.definedAttributes.find(({ name }) => name === 'workflow_id'),
    }), new ComponentAttribute({
      name: 'branches',
      value: [],
      type: 'Array',
      definition: triggerPush.definedAttributes.find(({ name }) => name === 'branches'),
    })],
  }),
  new Component({
    id: 'trigger_2',
    definition: triggerPull,
    path: './completeCI.yml',
    attributes: [new ComponentAttribute({
      name: 'workflow_id',
      value: 'workflow_1',
      type: 'String',
      definition: triggerPull.definedAttributes.find(({ name }) => name === 'workflow_id'),
    }), new ComponentAttribute({
      name: 'types',
      value: [],
      type: 'Array',
      definition: triggerPull.definedAttributes.find(({ name }) => name === 'types'),
    })],
  }),
];
