import { Component, ComponentAttribute } from 'leto-modelizer-plugin-core';

/**
 * Lidy listener for GitHub Action files.
 */
class GithubActionListener {
  /**
   * Default constructor.
   *
   * @param {FileInformation} fileInformation - File information.
   * @param {ComponentDefinition[]} definitions - All component definitions.
   * @param {string} workflowId - Workflow id.
   */
  constructor(fileInformation, definitions, workflowId) {
    /**
     * File information.
     *
     * @type {FileInformation}
     */
    this.fileInformation = fileInformation;
    /**
     * Array of component definitions.
     *
     * @type {ComponentDefinition[]}
     */
    this.definitions = definitions;
    /**
     * Parsed components.
     *
     * @type {Component[]}
     */
    this.components = [];
    /**
     * Current trigger.
     *
     * @type {Component}
     */
    this.currentTrigger = null;
    /**
     * Current job.
     *
     * @type {Component}
     */
    this.currentJob = null;
    /**
     * Current step.
     *
     * @type {Component}
     */
    this.currentStep = null;
    /**
     * Current step attribute.
     *
     * @type {Component}
     */
    this.currentStepAttribute = null;
    /**
     * Current key of attribute. Use only for unreferenced attribute.
     *
     * @type {string}
     */
    this.currentKey = null;
    /**
     * Current index of trigger. Use for trigger id.
     *
     * @type {number}
     */
    this.triggerIndex = 0;
    /**
     * Current index of step. Use for step id.
     *
     * @type {number}
     */
    this.stepIndex = 0;
    /**
     * Current workflow.
     *
     * @type {Component}
     */
    this.workflow = null;
    /**
     * workflow id.
     *
     * @type {string}
     */
    this.workflowId = workflowId;
  }

  /**
   * Create component except workflow type component.
   * @param {string} id - Component id.
   * @param {ComponentDefinition} definition -  Component definition.
   * @param {ComponentAttribute} [attribute] - Component attribute.
   * @return {Component} Created component with default attribute(s) and properties.
   */
  createComponent(id, definition, attribute) {
    return new Component({
      id,
      definition,
      path: this.fileInformation.path,
      attributes: [attribute],
    });
  }

  enter_workflow() {
    this.workflow = new Component({
      id: this.workflowId,
      definition: this.definitions.find(({ type }) => type === 'workflow'),
      path: this.fileInformation.path,
    });
    this.components.push(this.workflow);
  }

  exit_WorkflowName(ctx) {
    this.workflow.name = ctx.current.value;
    this.workflow.attributes.push(new ComponentAttribute({
      name: 'name',
      value: ctx.current.value,
      type: 'String',
      definition: this.workflow.definition.definedAttributes.find(({ name }) => name === 'name'),
    }));
  }

  enter_PushTrigger() {
    const definition = this.definitions.find(({ type, action }) => type === 'trigger' && action === 'push');

    this.triggerIndex += 1;
    this.currentTrigger = this.createComponent(
      `trigger_${this.triggerIndex}`,
      definition,
      new ComponentAttribute({
        name: 'workflow_id',
        value: this.workflowId,
        type: 'String',
        definition: definition.definedAttributes.find(({ name }) => name === 'workflow_id'),
      }),
    );
  }

  exit_PushTrigger() {
    this.components.push(this.currentTrigger);
    this.currentTrigger = null;
  }

  enter_PushTriggerBranches(ctx) {
    let value = [];

    if (ctx.items) {
      value = ctx.items.map((item) => item.value);
    }

    this.currentTrigger.attributes.push(new ComponentAttribute({
      name: 'branches',
      value,
      type: 'Array',
      definition: this.currentTrigger.definition.definedAttributes.find(({ name }) => name === 'branches'),
    }));
  }

  enter_PullRequestTrigger() {
    const definition = this.definitions.find(({ type, action }) => type === 'trigger' && action === 'pull_request');

    this.triggerIndex += 1;
    this.currentTrigger = this.createComponent(
      `trigger_${this.triggerIndex}`,
      definition,
      new ComponentAttribute({
        name: 'workflow_id',
        value: this.workflowId,
        type: 'String',
        definition: definition.definedAttributes.find(({ name }) => name === 'workflow_id'),
      }),
    );
  }

  exit_PullRequestTrigger() {
    this.components.push(this.currentTrigger);
    this.currentTrigger = null;
  }

  enter_PullRequestTriggerTypes(ctx) {
    let value = [];

    if (ctx.items) {
      value = ctx.items.map((item) => item.value);
    }

    this.currentTrigger.attributes.push(new ComponentAttribute({
      name: 'types',
      value,
      type: 'Array',
      definition: this.currentTrigger.definition.definedAttributes.find(({ name }) => name === 'types'),
    }));
  }

  enter_JobId(ctx) {
    const definition = this.definitions.find(({ type }) => type === 'job');

    this.currentJob = this.createComponent(
      ctx.value,
      definition,
      new ComponentAttribute({
        name: 'workflow_id',
        value: this.workflowId,
        type: 'String',
        definition: definition.definedAttributes.find(({ name }) => name === 'workflow_id'),
      }),
    );
  }

  enter_JobName(ctx) {
    this.currentJob.attributes.push(new ComponentAttribute({
      name: 'name',
      value: ctx.value,
      type: 'String',
      definition: this.currentJob.definition.definedAttributes.find(({ name }) => name === 'name'),
    }));
  }

  enter_JobRunsOn(ctx) {
    this.currentJob.attributes.push(new ComponentAttribute({
      name: 'runs-on',
      value: ctx.value,
      type: 'String',
      definition: this.currentJob.definition.definedAttributes.find(({ name }) => name === 'runs-on'),
    }));
  }

  enter_JobNeeds(ctx) {
    this.currentJob.attributes.push(new ComponentAttribute({
      name: 'needs',
      value: ctx.items.map(({ value }) => value),
      type: 'Array',
      definition: this.currentJob.definition.definedAttributes.find(({ name }) => name === 'needs'),
    }));
  }

  exit_Job() {
    this.components.push(this.currentJob);
    this.currentJob = null;
  }

  enter_Step() {
    this.stepIndex += 1;
  }

  exit_Step() {
    this.components.push(this.currentStep);
    this.currentStep = null;
  }

  enter_ReusableStep() {
    const definition = this.definitions
      .find(({ type, name }) => type === 'step' && name === 'reusable-step');

    this.currentStep = this.createComponent(
      `step_${this.stepIndex}`,
      definition,
      new ComponentAttribute({
        name: 'job_id',
        value: this.currentJob.id,
        type: 'String',
        definition: definition.definedAttributes.find(({ name }) => name === 'job_id'),
      }),
    );
  }

  enter_CommandStep() {
    const definition = this.definitions
      .find(({ type, name }) => type === 'step' && name === 'command-step');

    this.currentStep = this.createComponent(
      `step_${this.stepIndex}`,
      definition,
      new ComponentAttribute({
        name: 'job_id',
        value: this.currentJob.id,
        type: 'String',
        definition: definition.definedAttributes.find(({ name }) => name === 'job_id'),
      }),
    );
  }

  enter_StepUses(ctx) {
    this.currentStep.attributes.push(new ComponentAttribute({
      name: 'uses',
      value: ctx.value,
      type: 'String',
      definition: this.currentStep.definition.definedAttributes.find(({ name }) => name === 'uses'),
    }));
  }

  enter_StepName(ctx) {
    this.currentStep.attributes.push(new ComponentAttribute({
      name: 'name',
      value: ctx.value,
      type: 'String',
      definition: this.currentStep.definition.definedAttributes.find(({ name }) => name === 'name'),
    }));
  }

  enter_StepRun(ctx) {
    this.currentStep.attributes.push(new ComponentAttribute({
      name: 'run',
      value: ctx.value,
      type: 'String',
      definition: this.currentStep.definition.definedAttributes.find(({ name }) => name === 'run'),
    }));
  }

  enter_StepWith() {
    this.currentStepAttribute = new ComponentAttribute({
      name: 'with',
      value: [],
      type: 'Object',
      definition: this.currentStep.definition.definedAttributes.find(({ name }) => name === 'with'),
    });
  }

  exit_StepWith() {
    this.currentStep.attributes.push(this.currentStepAttribute);
    this.currentStepAttribute = null;
  }

  enter_StepEnv() {
    this.currentStepAttribute = new ComponentAttribute({
      name: 'env',
      value: [],
      type: 'Object',
      definition: this.currentStep.definition.definedAttributes.find(({ name }) => name === 'env'),
    });
  }

  exit_StepEnv() {
    this.currentStep.attributes.push(this.currentStepAttribute);
    this.currentStepAttribute = null;
  }

  enter_StepMapKey(ctx) {
    this.currentKey = ctx.value;
  }

  enter_StepMapValue(ctx) {
    let type = 'String';
    let value = ctx.source;

    if (ctx.type === 'QUOTE_SINGLE') {
      value = `'${ctx.source}'`;
    } else if (/^\d+$/.test(ctx.source)) {
      type = 'Number';
      value = parseInt(ctx.source, 10);
    }

    this.currentStepAttribute.value.push(new ComponentAttribute({
      name: this.currentKey,
      value,
      type,
    }));

    this.currentKey = null;
  }
}

export default GithubActionListener;
