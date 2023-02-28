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
const commandStep = pluginData.definitions.components
  .find(({ type, name }) => type === 'step' && name === 'command-step');

export default [
  new Component({
    id: 'workflow_1',
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
    definition: triggerPush,
    path: './completeCI.yml',
    attributes: [new ComponentAttribute({
      name: 'workflow_id',
      value: 'workflow_1',
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
    definition: triggerPull,
    path: './completeCI.yml',
    attributes: [new ComponentAttribute({
      name: 'workflow_id',
      value: 'workflow_1',
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
    id: 'step_1',
    definition: reusableStep,
    path: './completeCI.yml',
    attributes: [new ComponentAttribute({
      name: 'job_id',
      value: 'branch-naming-rules',
      type: 'String',
      definition: reusableStep.definedAttributes.find(({ name }) => name === 'job_id'),
    }), new ComponentAttribute({
      name: 'uses',
      value: 'deepakputhraya/action-branch-name@master',
      type: 'String',
      definition: reusableStep.definedAttributes.find(({ name }) => name === 'uses'),
    }), new ComponentAttribute({
      name: 'with',
      value: [new ComponentAttribute({
        name: 'regex',
        value: "'^(feature|bugfix|improvement|library|prerelease|release|hotfix)\\/[a-z0-9_.-]+$'",
        type: 'String',
      }), new ComponentAttribute({
        name: 'allowed_prefixes',
        value: "'feature,bugfix,improvement,library,prerelease,release,hotfix'",
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
      definition: reusableStep.definedAttributes.find(({ name }) => name === 'with'),
    })],
  }),
  new Component({
    id: 'branch-naming-rules',
    definition: job,
    path: './completeCI.yml',
    attributes: [new ComponentAttribute({
      name: 'workflow_id',
      value: 'workflow_1',
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
    })],
  }),
  new Component({
    id: 'step_2',
    definition: reusableStep,
    path: './completeCI.yml',
    attributes: [new ComponentAttribute({
      name: 'job_id',
      value: 'check-style',
      type: 'String',
      definition: reusableStep.definedAttributes.find(({ name }) => name === 'job_id'),
    }), new ComponentAttribute({
      name: 'uses',
      value: 'actions/checkout@v3',
      type: 'String',
      definition: reusableStep.definedAttributes.find(({ name }) => name === 'uses'),
    })],
  }),
  new Component({
    id: 'step_3',
    definition: reusableStep,
    path: './completeCI.yml',
    attributes: [new ComponentAttribute({
      name: 'job_id',
      value: 'check-style',
      type: 'String',
      definition: reusableStep.definedAttributes.find(({ name }) => name === 'job_id'),
    }), new ComponentAttribute({
      name: 'name',
      value: 'Setup Node',
      type: 'String',
      definition: reusableStep.definedAttributes.find(({ name }) => name === 'name'),
    }), new ComponentAttribute({
      name: 'uses',
      value: 'actions/setup-node@v3',
      type: 'String',
      definition: reusableStep.definedAttributes.find(({ name }) => name === 'uses'),
    }), new ComponentAttribute({
      name: 'with',
      value: [new ComponentAttribute({
        name: 'node-version',
        value: '18.0',
        type: 'String',
      })],
      type: 'Object',
      definition: reusableStep.definedAttributes.find(({ name }) => name === 'with'),
    })],
  }),
  new Component({
    id: 'step_4',
    definition: commandStep,
    path: './completeCI.yml',
    attributes: [new ComponentAttribute({
      name: 'job_id',
      value: 'check-style',
      type: 'String',
      definition: commandStep.definedAttributes.find(({ name }) => name === 'job_id'),
    }), new ComponentAttribute({
      name: 'name',
      value: 'Install dependencies',
      type: 'String',
      definition: commandStep.definedAttributes.find(({ name }) => name === 'name'),
    }), new ComponentAttribute({
      name: 'run',
      value: 'npm ci',
      type: 'String',
      definition: commandStep.definedAttributes.find(({ name }) => name === 'run'),
    })],
  }),
  new Component({
    id: 'step_5',
    definition: commandStep,
    path: './completeCI.yml',
    attributes: [new ComponentAttribute({
      name: 'job_id',
      value: 'check-style',
      type: 'String',
      definition: commandStep.definedAttributes.find(({ name }) => name === 'job_id'),
    }), new ComponentAttribute({
      name: 'name',
      value: 'Check style',
      type: 'String',
      definition: commandStep.definedAttributes.find(({ name }) => name === 'name'),
    }), new ComponentAttribute({
      name: 'run',
      value: 'npm run lint',
      type: 'String',
      definition: commandStep.definedAttributes.find(({ name }) => name === 'run'),
    })],
  }),
  new Component({
    id: 'check-style',
    definition: job,
    path: './completeCI.yml',
    attributes: [new ComponentAttribute({
      name: 'workflow_id',
      value: 'workflow_1',
      type: 'String',
      definition: job.definedAttributes.find(({ name }) => name === 'workflow_id'),
    }), new ComponentAttribute({
      name: 'name',
      value: 'Code style',
      type: 'String',
      definition: job.definedAttributes.find(({ name }) => name === 'name'),
    }), new ComponentAttribute({
      name: 'runs-on',
      value: 'ubuntu-latest',
      type: 'String',
      definition: job.definedAttributes.find(({ name }) => name === 'runs-on'),
    })],
  }),
  new Component({
    id: 'step_6',
    definition: reusableStep,
    path: './completeCI.yml',
    attributes: [new ComponentAttribute({
      name: 'job_id',
      value: 'sonarcloud',
      type: 'String',
      definition: reusableStep.definedAttributes.find(({ name }) => name === 'job_id'),
    }), new ComponentAttribute({
      name: 'uses',
      value: 'actions/checkout@v3',
      type: 'String',
      definition: reusableStep.definedAttributes.find(({ name }) => name === 'uses'),
    }), new ComponentAttribute({
      name: 'with',
      value: [new ComponentAttribute({
        name: 'fetch-depth',
        value: 0,
        type: 'Number',
      })],
      type: 'Object',
      definition: reusableStep.definedAttributes.find(({ name }) => name === 'with'),
    })],
  }),
  new Component({
    id: 'step_7',
    definition: reusableStep,
    path: './completeCI.yml',
    attributes: [new ComponentAttribute({
      name: 'job_id',
      value: 'sonarcloud',
      type: 'String',
      definition: reusableStep.definedAttributes.find(({ name }) => name === 'job_id'),
    }), new ComponentAttribute({
      name: 'name',
      value: 'Download line coverage report',
      type: 'String',
      definition: reusableStep.definedAttributes.find(({ name }) => name === 'name'),
    }), new ComponentAttribute({
      name: 'uses',
      value: 'actions/download-artifact@v3',
      type: 'String',
      definition: reusableStep.definedAttributes.find(({ name }) => name === 'uses'),
    }), new ComponentAttribute({
      name: 'with',
      value: [new ComponentAttribute({
        name: 'name',
        value: 'reports-lcov-${{ github.sha }}',
        type: 'String',
      }), new ComponentAttribute({
        name: 'path',
        value: 'reports/',
        type: 'String',
      })],
      type: 'Object',
      definition: reusableStep.definedAttributes.find(({ name }) => name === 'with'),
    })],
  }),
  new Component({
    id: 'step_8',
    definition: reusableStep,
    path: './completeCI.yml',
    attributes: [new ComponentAttribute({
      name: 'job_id',
      value: 'sonarcloud',
      type: 'String',
      definition: reusableStep.definedAttributes.find(({ name }) => name === 'job_id'),
    }), new ComponentAttribute({
      name: 'name',
      value: 'SonarCloud Scan',
      type: 'String',
      definition: reusableStep.definedAttributes.find(({ name }) => name === 'name'),
    }), new ComponentAttribute({
      name: 'uses',
      value: 'sonarsource/sonarcloud-github-action@master',
      type: 'String',
      definition: reusableStep.definedAttributes.find(({ name }) => name === 'uses'),
    }), new ComponentAttribute({
      name: 'env',
      value: [new ComponentAttribute({
        name: 'GITHUB_TOKEN',
        value: '${{ secrets.GITHUB_TOKEN }}',
        type: 'String',
      }), new ComponentAttribute({
        name: 'SONAR_TOKEN',
        value: '${{ secrets.SONAR_TOKEN }}',
        type: 'String',
      })],
      type: 'Object',
      definition: reusableStep.definedAttributes.find(({ name }) => name === 'env'),
    })],
  }),
  new Component({
    id: 'sonarcloud',
    definition: job,
    path: './completeCI.yml',
    attributes: [new ComponentAttribute({
      name: 'workflow_id',
      value: 'workflow_1',
      type: 'String',
      definition: job.definedAttributes.find(({ name }) => name === 'workflow_id'),
    }), new ComponentAttribute({
      name: 'name',
      value: 'SonarCloud',
      type: 'String',
      definition: job.definedAttributes.find(({ name }) => name === 'name'),
    }), new ComponentAttribute({
      name: 'runs-on',
      value: 'ubuntu-latest',
      type: 'String',
      definition: job.definedAttributes.find(({ name }) => name === 'runs-on'),
    }), new ComponentAttribute({
      name: 'needs',
      value: ['check-style', 'unit-tests'],
      type: 'Array',
      definition: job.definedAttributes.find(({ name }) => name === 'needs'),
    })],
  }),
];
