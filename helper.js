#!/usr/bin/env node

var opts = require('minimist')(process.argv.slice(2), {
    alias: { u: 'username', p: 'password' }
});

// a `get` action is expected, otherwise exit non-zero
if (!opts._.length || opts._[0].toLowerCase() !== 'get') process.exit(1);

// load value from environment variable if specified, otherwise use blank value
var username = opts.username ? process.env[opts.username] : '';
var password = opts.password ? process.env[opts.password] : '';

// exit non-zero if a specified environment variable is not set
if (username === undefined || password === undefined) process.exit(1);

process.stdout.write(
    'username=' + username + '\n' +
    'password=' + password + '\n'
);
