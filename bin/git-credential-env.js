#!/usr/bin/env node

var envCredential = require('../index.js');

var opts = require('minimist')(process.argv.slice(2));
envCredential(opts);
