# git-credential-env

[![Version][version-badge]][version-href]
[![Build status][build-badge]][build-href]
[![Stability][stability-badge]][stability-href]


A Git credential helper for setting Git credentials from environment variables. Useful for CI deployments with [Travis CI](https://travis-ci.org), [CircleCI](https://circleci.com), and others.


## Quick Example

**Global Installation**
```bash
npm install -g git-credential-env
GIT_USER=foo
GIT_PASS=bar
git config credential.helper "env --username=GIT_USER --password=GIT_PASS"
```

**Local Installation** *(recommended)*
```bash
npm install git-credential-env
GIT_USER=foo
GIT_PASS=bar
git config credential.helper "$PWD/node_modules/.bin/git-credential-env --username=GIT_USER --password=GIT_PASS"
```

In both examples, the username `foo` and password `bar` will be provided as credentials when requested by Git.


## Usage
```bash
Usage: git-credential-env get {OPTIONS}

Options:

  --username, -u  The name of environment variable containing the Git username

  --password, -p  The name of environment variable containing the Git password
```


## Documentation
See the [Wiki](https://github.com/L33T-KR3W/git-credential-env/wiki) for full documentation.


[version-badge]: https://img.shields.io/npm/v/git-credential-env.svg
[version-href]: https://www.npmjs.com/package/git-credential-env

[build-badge]: https://travis-ci.org/L33T-KR3W/git-credential-env.svg
[build-href]: https://travis-ci.org/L33T-KR3W/git-credential-env

[stability-badge]: https://img.shields.io/badge/stability-locked-blue.svg
[stability-href]: https://nodejs.org/api/documentation.html#documentation_stability_index
