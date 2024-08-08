import GenericComponentDefinition from './GenericComponentDefinition';

/**
 * Trigger definition.
 */
class TriggerDefinition extends GenericComponentDefinition {
  /**
   * Default constructor.
   * @param {object} [props] - Object that contains all properties to set.
   * @param {string} [props.action] - Action name called by the trigger.
   */
  constructor(props = {
    action: null,
  }) {
    super({ ...props, category: 'trigger' });
    /**
     * Action name called by the trigger.
     * @type {string}
     */
    this.action = props.action || null;
  }
}

export default TriggerDefinition;
