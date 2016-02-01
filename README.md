# env-credential

A git credential helper for setting git credentials from environment variables

## usage
```bash
npm install env-credential
```

```bash
SOME_ENV_VAR=foo
ANOTHER_ENV_VAR=bar
git config --global credential.helper "$PWD/node_modules/.bin/env-credential --username=SOME_ENV_VAR --password=ANOTHER_ENV_VAR"
```

The git username will be `foo` and the password will be `bar`.
