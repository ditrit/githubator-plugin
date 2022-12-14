import { ComponentDefinition } from 'leto-modelizer-plugin-core';

/**
 * Trigger definition.
 */
class TriggerDefinition extends ComponentDefinition {
  /**
   * Default constructor.
   * @param {Object} [props] - Object that contains all properties to set.
   * @param {String} [props.action] - Action name called by the trigger.
   */
  constructor(props = {
    action: null,
  }) {
    super(props);
    /**
     * Action name called by the trigger.
     * @type {String}
     */
    this.action = props.action || null;
  }
}

export default TriggerDefinition;
