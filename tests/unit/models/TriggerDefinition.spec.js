import TriggerDefinition from 'src/models/TriggerDefinition';

describe('Test class: TriggerDefinition', () => {
  describe('Test constructor', () => {
    it('Check variable instantiation without any parameters in constructor', () => {
      const trigger = new TriggerDefinition();

      expect(trigger.action).toBeNull();
    });

    it('Check passing empty object to constructor', () => {
      const trigger = new TriggerDefinition({});

      expect(trigger.action).toBeNull();
    });

    it('Check passing props to constructor', () => {
      const trigger = new TriggerDefinition({
        action: 'action',
      });

      expect(trigger.action).toEqual('action');
    });
  });
});
