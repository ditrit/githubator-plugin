import GithubActionMetadata from 'src/metadata/GithubActionMetadata';
import { Component, ComponentAttribute, DefaultData } from 'leto-modelizer-plugin-core';

const pluginData = new DefaultData();
const metadata = new GithubActionMetadata(pluginData);

metadata.parse();

const workflow = pluginData.definitions.components
  .find(({ type }) => type === 'workflow');
const triggerPush = pluginData.definitions.components
  .find(({ type, action }) => type === 'trigger' && action === 'push');
const triggerPull = pluginData.definitions.components
  .find(({ type, action }) => type === 'trigger' && action === 'pull_request');
const job = pluginData.definitions.components
  .find(({ type }) => type === 'job');
const reusableStep = pluginData.definitions.components
  .find(({ type, name }) => type === 'step' && name === 'reusable-step');

export default [
  new Component({
    id: 'CI',
    name: 'CI',
    definition: workflow,
    path: './completeCI.yml',
    attributes: [new ComponentAttribute({
      name: 'name',
      value: 'CI',
      type: 'String',
      definition: workflow.definedAttributes.find(({ name }) => name === 'name'),
    })],
  }),
  new Component({
    id: 'trigger_1',
    name: 'trigger_1',
    definition: triggerPush,
    path: './completeCI.yml',
    attributes: [new ComponentAttribute({
      name: 'workflow_id',
      value: 'CI',
      type: 'String',
      definition: triggerPush.definedAttributes.find(({ name }) => name === 'workflow_id'),
    }), new ComponentAttribute({
      name: 'branches',
      value: ['main'],
      type: 'Array',
      definition: triggerPush.definedAttributes.find(({ name }) => name === 'branches'),
    })],
  }),
  new Component({
    id: 'trigger_2',
    name: 'trigger_2',
    definition: triggerPull,
    path: './completeCI.yml',
    attributes: [new ComponentAttribute({
      name: 'workflow_id',
      value: 'CI',
      type: 'String',
      definition: triggerPull.definedAttributes.find(({ name }) => name === 'workflow_id'),
    }), new ComponentAttribute({
      name: 'types',
      value: ['opened', 'synchronize', 'reopened'],
      type: 'Array',
      definition: triggerPull.definedAttributes.find(({ name }) => name === 'types'),
    })],
  }),
  new Component({
    id: 'branch-naming-rules',
    name: 'branch-naming-rules',
    definition: job,
    path: './completeCI.yml',
    attributes: [new ComponentAttribute({
      name: 'workflow_id',
      value: 'CI',
      type: 'String',
      definition: job.definedAttributes.find(({ name }) => name === 'workflow_id'),
    }), new ComponentAttribute({
      name: 'name',
      value: 'Check branch name',
      type: 'String',
      definition: job.definedAttributes.find(({ name }) => name === 'name'),
    }), new ComponentAttribute({
      name: 'runs-on',
      value: 'ubuntu-latest',
      type: 'String',
      definition: job.definedAttributes.find(({ name }) => name === 'runs-on'),
    }), new ComponentAttribute({
      name: 'first_step',
      value: 'step_1',
      type: 'String',
      definition: job.definedAttributes.find(({ name }) => name === 'first_step'),
    })],
  }),
  new Component({
    id: 'step_1',
    name: 'step_1',
    definition: reusableStep,
    path: './completeCI.yml',
    attributes: [new ComponentAttribute({
      name: 'job_id',
      value: 'branch-naming-rules',
      type: 'String',
      definition: reusableStep.definedAttributes.find(({ name }) => name === 'job_id'),
    }), new ComponentAttribute({
      name: 'next_step',
      value: [],
      type: 'Array',
      definition: triggerPull.definedAttributes.find(({ name }) => name === 'next_step'),
    }), new ComponentAttribute({
      name: 'uses',
      value: 'deepakputhraya/action-branch-name@master',
      type: 'String',
      definition: triggerPull.definedAttributes.find(({ name }) => name === 'uses'),
    }), new ComponentAttribute({
      name: 'with',
      value: [new ComponentAttribute({
        name: 'regex',
        value: '^(feature|bugfix|improvement|library|prerelease|release|hotfix)/[a-z0-9_.-]+$',
        type: 'String',
      }), new ComponentAttribute({
        name: 'allowed_prefixes',
        value: 'feature,bugfix,improvement,library,prerelease,release,hotfix',
        type: 'String',
      }), new ComponentAttribute({
        name: 'ignore',
        value: 'main,dev',
        type: 'String',
      }), new ComponentAttribute({
        name: 'min_length',
        value: 5,
        type: 'Number',
      }), new ComponentAttribute({
        name: 'max_length',
        value: 50,
        type: 'Number',
      })],
      type: 'Object',
      definition: triggerPull.definedAttributes.find(({ name }) => name === 'uses'),
    })],
  }),
  // Todo: add job check-dependencies
  // Todo: add step reusable-step
  // Todo: add step command-step SetupNode
  // Todo: add step command-step Install dependencies
  // Todo: add step command-step Run check dependencies
  // Todo: add step reusable-step  Post comment

  // Todo: add job sonarcloud
  // Todo: add step reusable-step
  // Todo: add step command-step Download line coverage report
  // Todo: add step reusable-step SonarCloud Scan
];
