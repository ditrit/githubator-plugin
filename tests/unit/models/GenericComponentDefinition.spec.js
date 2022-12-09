import GenericComponentDefinition from 'src/models/GenericComponentDefinition';

describe('Test class: GenericComponentDefinition', () => {
  describe('Test constructor', () => {
    it('Check variable instantiation without any parameters in constructor', () => {
      const component = new GenericComponentDefinition();

      expect(component.available).toEqual(false);
    });

    it('Check passing empty object to constructor', () => {
      const component = new GenericComponentDefinition({});

      expect(component.available).toEqual(false);
    });

    it('Check passing props to constructor', () => {
      const component = new GenericComponentDefinition({
        available: true,
      });

      expect(component.available).toEqual(true);
    });
  });
});
