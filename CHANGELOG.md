# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="2.0.0"></a>
# [2.0.0](https://github.com/tunnckocore/arr-includes/compare/v1.0.2...v2.0.0) (2016-10-26)


### Features

* **index:** returns the index of the match, true if index is 0 ([9c7a075](https://github.com/tunnckocore/arr-includes/commit/9c7a075))


### BREAKING CHANGES

* index: returns an index instead of true; it returns false only if found index is 0; always

returns positive value





## 1.0.2 - 2016-09-21
- Release v1.0.2 / npm@v1.0.2
- add missing `coveralls` to devDeps, closes #3

## 1.0.1 - 2016-09-20
- Release v1.0.1 / npm@v1.0.1
- use `lazy-cache`, closes #2
- update package.json: npm scripts
- update travis.yml
- update gitignore
- add `standard@8` and `nyc` to devDeps
- switch to use `mukla` instead of `assertit`

## 1.0.0 - 2016-03-18
- Release v1.0.0 / npm@v1.0.0
- fix "duplicate" issues reported by @codeclimate, arrrgghh!
- implement :cat2:

## 0.0.0 - 2016-03-18
- Initial commit