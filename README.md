# env-credential

A git credential helper for setting git credentials from environment variables. Useful for CI deployments with Travis.

## quick example
```bash
npm install env-credential
SOME_ENV_VAR=foo
ANOTHER_ENV_VAR=bar
git config --global credential.helper "$PWD/node_modules/.bin/env-credential --username=SOME_ENV_VAR --password=ANOTHER_ENV_VAR"
```

The git username will be `foo` and the password will be `bar`, i.e. env-credential will return:

```
username=foo
password=bar
```

You can read more about git credential helpers here: http://git-scm.com/book/en/v2/Git-Tools-Credential-Storage

## usage
```
Usage: env-credential {OPTIONS}

Options:

--username
the name of environment variable containing the git username

--password
the name of environment variable containing the git password
```
