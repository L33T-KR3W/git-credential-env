# git-credential-env

[![Build status][build-badge]][build-href]


A git credential helper for setting git credentials from environment variables. Useful for CI deployments with Travis.


## quick example
#### global install
```bash
npm install git-credential-env -g
GIT_USER=foo
GIT_PASS=bar
git config --global credential.helper "env --username=GIT_USER --password=GIT_PASS"
```

The git username will be `foo` and the password will be `bar`, i.e. `git-credential-env` will return:

```
username=foo
password=bar
```

#### local install (recommended)
```bash
npm install git-credential-env
GIT_USER=foo
GIT_PASS=bar
git config --global credential.helper "$PWD/node_modules/.bin/git-credential-env -u=GIT_USER -p=GIT_PASS"
```

The git username will be `foo` and the password will be `bar`, i.e. `git-credential-env` will return:

```
username=foo
password=bar
```

Note that the above example uses the flag aliases `-u` for `--user` and `-p` for `--pass`;

#### arguments are optional
If `username` and/or `password` is not specified, each will be returned as nothing:
```bash
npm install git-credential-env -g
GIT_USER=foo
git config --global credential.helper "env --user=GIT_USER"
```

The git username will be `foo` and the password will be unset, i.e. `git-credential-env` will return:

```
username=foo
password=
```

However, if `username` and/or `password` is specified but not defined as an environment variable, `git-credential-env` will exit with status code 1:

```bash
npm install git-credential-env -g
GIT_USER=foo
git-credential-env --user=SOME_UNSET_ENVIRONMENT_VAR
echo $?
```

outputs:

```
1
```


## usage
```bash
Usage: git-credential-env get {OPTIONS}

Options:

  --username, -u The name of environment variable containing the git username

  --password, -p The name of environment variable containing the git password
```



[build-badge]: https://travis-ci.org/L33T-KR3W/git-credential-env.svg
[build-href]: https://travis-ci.org/L33T-KR3W/git-credential-env
