import { parse as parse_input } from 'lidy-js'
let rules={"main":"workflow","workflow":{"_mapFacultative":{"name":"WorkflowName","on":{"_mapFacultative":{"push":"PushTrigger","pull_request":"PullRequestTrigger"}},"jobs":{"_mapOf":{"JobId":"Job"}}}},"WorkflowName":"string","PushTrigger":{"_map":{"branches":"PushTriggerBranches"}},"PushTriggerBranches":{"_listOf":"string"},"PullRequestTrigger":{"_map":{"types":"PullRequestTriggerTypes"}},"PullRequestTriggerTypes":{"_listOf":"string"},"Job":{"_map":{"name":"JobName","runs-on":"JobRunsOn","steps":{"_min":1,"_listOf":"Step"}},"_mapFacultative":{"needs":"JobNeeds"}},"JobId":"string","JobName":"string","JobRunsOn":"string","JobNeeds":{"_listOf":"string"},"Step":{"_oneOf":["CommandStep","ReusableStep"]},"ReusableStep":{"_map":{"uses":"StepUses"},"_mapFacultative":{"name":"StepName","with":"StepWith","env":"StepEnv"}},"CommandStep":{"_map":{"run":"StepRun"},"_mapFacultative":{"name":"StepName","env":"StepEnv"}},"StepUses":"string","StepName":"string","StepRun":"string","StepWith":{"_mapOf":{"StepMapKey":"StepMapValue"}},"StepEnv":{"_mapOf":{"StepMapKey":"StepMapValue"}},"StepMapKey":"string","StepMapValue":{"_oneOf":["int","string"]}}
export function parse(input) { 
  input.rules = rules
  return parse_input(input)
}