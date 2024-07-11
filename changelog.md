# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html)

## [0.4.1] - 2024/07/11

### Fixed

- Fix cut icon of step/workflow/trigger on svg export.
- Fix wrong svg size of trigger.

## [0.4.0] - 2024/07/11

### Added

- Update models for readOnly.

## [0.3.4] - 2024/07/09

### Changed

- Update plugin-core to version 0.25.0.

## [0.3.3] - 2024/06/20

### Changed

- Update plugin-core to version 0.24.1.

## [0.3.2] - 2024/01/15

### Changed

- Update `isParsable` method so that the regex takes into account any root folder name at the start of the path.

## [0.3.1] - 2024/01/03

### Changed

- Update plugin-core to version 0.23.0.

## [0.3.0] - 2023/10/20

### Added

- Add and initialize `isFolderTypeDiagram` to `false` in `GithubActionConfiguration`.

### Changed

- Update plugin-core to version 0.22.0.

## [0.2.5] - 2023/09/11

### Changed

- Update to plugin-core version 0.21.0.

## [0.2.4] - 2023/08/30

### Changed

- Update to plugin-core version 0.20.0.

## [0.2.3] - 2023/08/16

### Changed

- Update to plugin-core version 0.19.0.

## [0.2.2] - 2023/07/21

### Changed

- Update to plugin-core version 0.18.0.

## [0.2.1] - 2023/07/05

### Changed

- Update to plugin-core version 0.17.0.

## [0.2.0] - 2023/06/06

### Added

- Add syntax colorization for monaco editor from [official syntax](https://github.com/microsoft/monaco-editor/blob/main/src/basic-languages/yaml/yaml.ts).

### Changed

- Make sure that only `.yml` file in `.github/workflow` is parsable.
- Update to plugin-core version 0.16.0.

## [0.1.1] - 2023/05/03

### Changed

- Update to plugin-core version 0.15.2.

## [0.1.0] - 2023/05/03

### Added

- Setup GitHub workflow.
- Setup default plugin structure.
- Setup first version of metadata.
- Setup first version of parser.
- Setup first version of renderer.

[0.4.1]: https://github.com/ditrit/githubator-plugin/blob/main/changelog.md#0.4.1
[0.4.0]: https://github.com/ditrit/githubator-plugin/blob/main/changelog.md#0.4.0
[0.3.4]: https://github.com/ditrit/githubator-plugin/blob/main/changelog.md#0.3.4
[0.3.3]: https://github.com/ditrit/githubator-plugin/blob/main/changelog.md#0.3.3
[0.3.2]: https://github.com/ditrit/githubator-plugin/blob/main/changelog.md#0.3.2
[0.3.1]: https://github.com/ditrit/githubator-plugin/blob/main/changelog.md#0.3.1
[0.3.0]: https://github.com/ditrit/githubator-plugin/blob/main/changelog.md#0.3.0
[0.2.5]: https://github.com/ditrit/githubator-plugin/blob/main/changelog.md#0.2.5
[0.2.4]: https://github.com/ditrit/githubator-plugin/blob/main/changelog.md#0.2.4
[0.2.3]: https://github.com/ditrit/githubator-plugin/blob/main/changelog.md#0.2.3
[0.2.2]: https://github.com/ditrit/githubator-plugin/blob/main/changelog.md#0.2.2
[0.2.1]: https://github.com/ditrit/githubator-plugin/blob/main/changelog.md#0.2.1
[0.2.0]: https://github.com/ditrit/githubator-plugin/blob/main/changelog.md#0.2.0
[0.1.1]: https://github.com/ditrit/githubator-plugin/blob/main/changelog.md#0.1.1
[0.1.0]: https://github.com/ditrit/githubator-plugin/blob/main/changelog.md#0.1.0
