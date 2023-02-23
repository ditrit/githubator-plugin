const root = `name: {{ workflowName.value }}

{% if triggers.length > 0 %}
on:
{% for trigger in triggers %}
{% if trigger.definition.action === 'push' %}{% set branches = getTriggerAttribute(trigger, 'branches').value %}
  push:
    branches:{% for branch in branches %}

      - {{ branch }}
{% endfor %}
{% else %}{% set types = getTriggerAttribute(trigger, 'types').value %}
  pull_request:
    types: [{{ types.join(', ') }}]
{% endif %}
{% endfor %}
{% endif %}

jobs:
{% for job in jobs %}
  {{ job.id }}:
{% for attribute in getAttributes(job) %}
    {% if attribute.type === 'Array' %}
    {{attribute.name}}: [{{ attribute.value.join(', ')}}]
    {% else %}
    {{attribute.name}}: {{attribute.value }}
    {% endif %}
{% endfor %}
    steps:
{% for step in getSteps(job.id) %}
{% for attribute in getAttributes(step) %}
{% if attribute.type === 'Array' %}
{% if loop.first %}{{"- " | indent(6, true)}}{{attribute.name}}{% else %}{{attribute.name | indent(8, true)}}{% endif %}: [{{ attribute.value.join(', ')}}]
{% elif attribute.type === 'Object' %}
{% if loop.first %}{{"- " | indent(6, true)}}{{attribute.name}}{% else %}{{attribute.name | indent(8, true)}}{% endif %}:
{% for value in attribute.value %}
{{value.name | indent(10,true)}}: {% if value.type == 'Number' and value.value == null %}0{% else %}{{ value.value }}{% endif %}

{% endfor %}
{% else %}
{% if loop.first %}{{"- " | indent(6, true)}}{{attribute.name}}{% else %}{{attribute.name | indent(8, true)}}{% endif %}: {{ attribute.value }}
{% endif %}
{% endfor %}
{% endfor %}

{% endfor %}`;

export default {
  root,
};
