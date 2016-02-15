var test = require('tape');
var execSync = require('child_process').execSync;

var ENV_VARS = 'GIT_AUTH_USERNAME=yolo GIT_AUTH_PASSWORD=swag ';

test('test failure if username env var empty', function (t) {
    var cmd = ENV_VARS + './helper.js get --username=GIT_AUTH_USERNAME_WRONG';
    t.throws(execSync.bind(null, cmd));
    t.end();
});

test('test failure if password env var empty', function (t) {
    var cmd = ENV_VARS + './helper.js get --password=GIT_AUTH_PASSWORD_WRONG';
    t.throws(execSync.bind(null, cmd));
    t.end();
});

test('test failure if username and password env vars empty', function (t) {
    var cmd = ENV_VARS + './helper.js get --username=GIT_AUTH_USERNAME_WRONG --password=GIT_AUTH_PASSWORD_WRONG';
    t.throws(execSync.bind(null, cmd));
    t.end();
});

test('test success if nothing specified', function (t) {
    var cmd = ENV_VARS + './helper.js get';
    t.equal(execSyncToString(cmd), 'username=\npassword=\n');
    t.end();
});

test('test success if username specified', function (t) {
    var cmd = ENV_VARS + './helper.js get --username=GIT_AUTH_USERNAME';
    t.equal(execSyncToString(cmd), 'username=yolo\npassword=\n');
    t.end();
});

test('test success if password specified', function (t) {
    var cmd = ENV_VARS + './helper.js get --password=GIT_AUTH_PASSWORD';
    t.equal(execSyncToString(cmd), 'username=\npassword=swag\n');
    t.end();
});

test('test success if username and password specified', function (t) {
    var cmd = ENV_VARS + './helper.js get --username=GIT_AUTH_USERNAME --password=GIT_AUTH_PASSWORD';
    t.equal(execSyncToString(cmd), 'username=yolo\npassword=swag\n');
    t.end();
});

test('test success if username and password specified with alias', function (t) {
    var cmd = ENV_VARS + './helper.js get -u=GIT_AUTH_USERNAME -p=GIT_AUTH_PASSWORD';
    t.equal(execSyncToString(cmd), 'username=yolo\npassword=swag\n');
    t.end();
});

test('test success if username and password specified (reversed order)', function (t) {
    var cmd = ENV_VARS + './helper.js get --password=GIT_AUTH_PASSWORD --username=GIT_AUTH_USERNAME';
    t.equal(execSyncToString(cmd), 'username=yolo\npassword=swag\n');
    t.end();
});

test('test failure if no action', function (t) {
    var cmd = ENV_VARS + './helper.js --password=GIT_AUTH_PASSWORD --username=GIT_AUTH_USERNAME';
    t.throws(execSync.bind(null, cmd));
    t.end();
});

test('test failure if action not get', function (t) {
    var storeCmd = ENV_VARS + './helper.js store --password=GIT_AUTH_PASSWORD --username=GIT_AUTH_USERNAME';
    t.throws(execSync.bind(null, storeCmd));
    var eraseCmd = ENV_VARS + './helper.js erase --password=GIT_AUTH_PASSWORD --username=GIT_AUTH_USERNAME';
    t.throws(execSync.bind(null, eraseCmd));
    t.end();
});


function execSyncToString(cmd) {
    return String(execSync(cmd));
}
