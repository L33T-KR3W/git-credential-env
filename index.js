module.exports = envCredential;

function envCredential(opts) {
  var username = opts.username ? process.env[opts.username] : '';
  var password = opts.password ? process.env[opts.password] : '';

  if (username === undefined) process.exit(1);
  if (password === undefined) process.exit(1);

  process.stdout.write('username=' + username + '\n');
  process.stdout.write('password=' + password + '\n');
}
