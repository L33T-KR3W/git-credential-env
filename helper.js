#!/usr/bin/env node

var opts = require('minimist')(process.argv.slice(2));
envCredential(opts);

function envCredential(opts) {
  // only respond to get actions
  if (!opts._.length || opts._[0].toLowerCase() !== 'get') process.exit(1);

  var username = opts.username ? process.env[opts.username] : '';
  var password = opts.password ? process.env[opts.password] : '';

  if (username === undefined) process.exit(1);
  if (password === undefined) process.exit(1);

  process.stdout.write('username=' + username + '\n');
  process.stdout.write('password=' + password + '\n');
}
