# git-credential-env

[![Version][version-badge]][version-href]
[![Build status][build-badge]][build-href]


A Git credential helper for setting Git credentials from environment variables. Useful for CI deployments with [Travis CI](https://travis-ci.org), [CircleCI](https://circleci.com), and others.


## quick example
#### global install
```bash
npm install -g git-credential-env
GIT_USER=foo
GIT_PASS=bar
git config --global credential.helper "env --username=GIT_USER --password=GIT_PASS"
```

The Git credential username will be `foo` and the password will be `bar`.


#### local install (recommended)
```bash
npm install git-credential-env
GIT_USER=foo
GIT_PASS=bar
git config --global credential.helper "$PWD/node_modules/.bin/git-credential-env -u=GIT_USER -p=GIT_PASS"
```

The Git credential username will be `foo` and the password will be `bar`.

Note that the above example uses the flag aliases `-u` for `--username` and `-p` for `--password`;


## usage
```bash
Usage: git-credential-env get {OPTIONS}

Options:

  --username, -u The name of environment variable containing the git username

  --password, -p The name of environment variable containing the git password
```


[version-badge]: https://img.shields.io/npm/v/git-credential-env.svg
[version-href]: https://www.npmjs.com/package/git-credential-env

[build-badge]: https://travis-ci.org/L33T-KR3W/git-credential-env.svg
[build-href]: https://travis-ci.org/L33T-KR3W/git-credential-env
