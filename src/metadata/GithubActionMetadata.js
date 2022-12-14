import {
  ComponentAttributeDefinition,
  ComponentDefinition,
  DefaultMetadata,
} from 'leto-modelizer-plugin-core';
import metadata from 'src/assets/metadata/index';
import GenericComponentDefinition from 'src/models/GenericComponentDefinition';
import TriggerDefinition from 'src/models/TriggerDefinition';

/**
 * Class to validate and retrieve component definitions from GithubAction metadata.
 */
class GithubActionMetadata extends DefaultMetadata {
  /**
   * Parse all component definitions from metadata.
   */
  parse() {
    const genericsDefinitions = this.parseGeneric();
    const notGenericsDefinitions = this.parseNotGeneric(genericsDefinitions);

    this.pluginData.definitions = {
      components: [
        ...genericsDefinitions.filter((generic) => generic.available),
        ...notGenericsDefinitions,
      ],
    };
  }

  /**
   * Parse generic definitions.
   * @return {GenericComponentDefinition[]} Generic definitions array.
   */
  parseGeneric() {
    const generics = [];

    // Generic workflow
    generics.push(new GenericComponentDefinition({
      ...metadata.generic.workflow,
    }));

    // Generic trigger
    generics.push(new GenericComponentDefinition({
      ...metadata.generic.trigger,
      definedAttributes: metadata.generic.trigger.attributes
        .map((attribute) => new ComponentAttributeDefinition({ ...attribute })),
    }));

    // Generic job
    generics.push(new GenericComponentDefinition({
      ...metadata.generic.job,
      definedAttributes: metadata.generic.job.attributes
        .map((attribute) => new ComponentAttributeDefinition({ ...attribute })),
    }));

    // Generic step
    generics.push(new GenericComponentDefinition({
      ...metadata.generic.step,
      definedAttributes: metadata.generic.step.attributes
        .map((attribute) => new ComponentAttributeDefinition({ ...attribute })),
    }));

    return generics;
  }

  /**
   * Parse not generic definitions.
   * @param {GenericComponentDefinition[]} generics - Generic definitions array.
   * @return {GenericComponentDefinition[]} Not generic definitions array.
   */
  parseNotGeneric(generics) {
    const definitions = [];

    Object.keys(metadata)
      .filter((key) => key !== 'generic')
      .flatMap((key) => metadata[key])
      .forEach((data) => {
        let definition = null;

        if (data.type === 'trigger') {
          definition = new TriggerDefinition({
            ...generics.find((def) => def.type === data.type),
          });
        } else {
          definition = new ComponentDefinition({
            ...generics.find((def) => def.type === data.type),
          });
        }

        Object.keys(data)
          .filter((key) => key !== 'attributes')
          .forEach((key) => {
            definition[key] = data[key];
          });

        data.attributes.forEach((attribute) => {
          definition.definedAttributes.push(new ComponentAttributeDefinition(attribute));
        });

        definitions.push(definition);
      });

    return definitions;
  }
}

export default GithubActionMetadata;
