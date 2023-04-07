# githubator-plugin

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ditrit_githubator-plugin&metric=alert_status)](https://sonarcloud.io/summary/overall?id=ditrit_githubator-plugin)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=ditrit_githubator-plugin&metric=reliability_rating)](https://sonarcloud.io/summary/overall?id=ditrit_githubator-plugin)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=ditrit_githubator-plugin&metric=sqale_rating)](https://sonarcloud.io/summary/overall?id=ditrit_githubator-plugin)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=ditrit_githubator-plugin&metric=security_rating)](https://sonarcloud.io/summary/overall?id=ditrit_githubator-plugin)

[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=ditrit_githubator-plugin&metric=code_smells)](https://sonarcloud.io/summary/overall?id=ditrit_githubator-plugin)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=ditrit_githubator-plugin&metric=bugs)](https://sonarcloud.io/summary/overall?id=ditrit_githubator-plugin)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=ditrit_githubator-plugin&metric=vulnerabilities)](https://sonarcloud.io/summary/overall?id=ditrit_githubator-plugin)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=ditrit_githubator-plugin&metric=sqale_index)](https://sonarcloud.io/summary/overall?id=ditrit_githubator-plugin)

[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=ditrit_githubator-plugin&metric=ncloc)](https://sonarcloud.io/summary/overall?id=ditrit_githubator-plugin)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=ditrit_githubator-plugin&metric=coverage)](https://sonarcloud.io/summary/overall?id=ditrit_githubator-plugin)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=ditrit_githubator-plugin&metric=duplicated_lines_density)](https://sonarcloud.io/summary/overall?id=ditrit_githubator-plugin)

[![](https://dcbadge.vercel.app/api/server/zkKfj9gj2C?style=flat&theme=default-inverted)](https://discord.gg/zkKfj9gj2C)

Plugin for managing GithubAction files in [Leto-Modelizer](https://github.com/ditrit/leto-modelizer).

## Build your plugin

```
npm run build
```

## Grammar compatibility

<table>
  <thead>
    <tr>
      <th colspan="2">Legends</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center">$\textcolor{green}{\textbf{\Large{✓}}}$</td>
      <td>Full support</td>
    </tr>
    <tr>
      <td align="center">$\textcolor{orange}{\textsf{〜}}$</td>
      <td>Partial support</td>
    </tr>
    <tr>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
      <td>Not supported but planned</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th colspan="6">Functionalities</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="5">Workflow</td>
      <td align="center">$\textcolor{orange}{\textsf{〜}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td colspan="4">Name</td>
      <td align="center">$\textcolor{green}{\textbf{\Large{✓}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td colspan="4">Trigger</td>
      <td align="center">$\textcolor{orange}{\textsf{〜}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">check_run</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">check_suite</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">create</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">delete</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">deployment</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">deployment_status</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">discussion</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">discussion_comment</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">fork</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">gollum</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">issue_comment</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">issues</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">label</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">merge_group</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">milestone</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">page_build</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">project</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">project_card</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">project_column</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">public</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">pull_request</td>
      <td align="center">$\textcolor{orange}{\textsf{〜}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="2">types</td>
      <td align="center">$\textcolor{green}{\textbf{\Large{✓}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="2">branches</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="2">paths</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">pull_request_review</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">pull_request_review_comment</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">pull_request_target</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">push</td>
      <td align="center">$\textcolor{orange}{\textsf{〜}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="2">branches</td>
      <td align="center">$\textcolor{green}{\textbf{\Large{✓}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="2">tags</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="2">paths</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">registry_package</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">release</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">repository_dispatch</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">schedule</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">status</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">watch</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">workflow_call</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">workflow_dispatch</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">workflow_run</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td colspan="4">Jobs</td>
      <td align="center">$\textcolor{orange}{\textsf{〜}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">name</td>
      <td align="center">$\textcolor{green}{\textbf{\Large{✓}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">permissions</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">needs</td>
      <td align="center">$\textcolor{green}{\textbf{\Large{✓}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">if</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">runs-on (as string)</td>
      <td align="center">$\textcolor{green}{\textbf{\Large{✓}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">runs-on (as array)</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">runs-on (as object)</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="2">group</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="2">labels</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">environment</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">concurrency</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">outputs</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">env</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">defaults</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">steps</td>
      <td align="center">$\textcolor{orange}{\textsf{〜}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="2">id</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="2">if</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="2">name</td>
      <td align="center">$\textcolor{green}{\textbf{\Large{✓}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="2">uses</td>
      <td align="center">$\textcolor{green}{\textbf{\Large{✓}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="2">run</td>
      <td align="center">$\textcolor{green}{\textbf{\Large{✓}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="2">shell</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="2">with</td>
      <td align="center">$\textcolor{green}{\textbf{\Large{✓}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="2">env</td>
      <td align="center">$\textcolor{green}{\textbf{\Large{✓}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="2">continue-on-error</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="2">timeout-minutes</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">timeout-minutes</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">strategy</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">continue-on-error</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">container</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">services</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">uses</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">with</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
    <tr>
      <td width="5px" padding="0"></td>
      <td width="5px" padding="0"></td>
      <td colspan="3">secrets</td>
      <td align="center">$\textcolor{red}{\textbf{\textsf{X}}}$</td>
    </tr>
  </tbody>
</table>

## Development

### Improve grammar

Githubator-plugin use [lidy-js](https://github.com/ditrit/lidy-js) as yaml parser.

Grammar are store in `src/lidy/github.yml`.

To generate parser from your grammar you can use this command:

```
npm run generate:parser
```

### How to release

We use [Semantic Versioning](https://semver.org/spec/v2.0.0.html) as guideline for the version management.

Steps to release:

- Create a new branch labeled `release/vX.Y.Z` from the latest `main`.
- Improve the version number in `package.json`, `package-lock.json` and `changelog.md`.
- Verify the content of the `changelog.md`.
- Commit the modifications with the label `Release version X.Y.Z`.
- Create a pull request on github for this branch into `main`.
- Once the pull request validated and merged, tag the `main` branch with `vX.Y.Z`
- After the tag is pushed, make the release on the tag in GitHub

### Git: Default branch

The default branch is main. Direct commit on it is forbidden.
The only way to update the application is through pull request.

Release tag are only done on the `main` branch.

### Git: Branch naming policy

`[BRANCH_TYPE]/[BRANCH_NAME]`

* `BRANCH_TYPE` is a prefix to describe the purpose of the branch. Accepted prefixes are:
    * `feature`, used for feature development
    * `bugfix`, used for bug fix
    * `improvement`, used for refacto
    * `library`, used for updating library
    * `prerelease`, used for preparing the branch for the release
    * `release`, used for releasing project
    * `hotfix`, used for applying a hotfix on main
* `BRANCH_NAME` is managed by this regex: `[a-z0-9._-]` (`_` is used as space character).
