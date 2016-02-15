#!/usr/bin/env node

var opts = require('minimist')(process.argv.slice(2), {
  alias: { u: 'username', p: 'password' }
});

// only respond to get actions
if (!opts._.length || opts._[0].toLowerCase() !== 'get') process.exit(1);

// load environment variable if specified, default to empty string
var username = opts.username ? process.env[opts.username] : '';
var password = opts.password ? process.env[opts.password] : '';

// exit if specified environment variable doesn't exist
if (username === undefined || password === undefined) process.exit(1);

process.stdout.write(
  'username=' + username + '\n' +
  'password=' + password + '\n'
);
