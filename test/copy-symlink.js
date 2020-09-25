'use strict';

const fs = require('fs');
const test = require('supertape');
const tryToCatch = require('try-to-catch');
const {reRequire}  = require('mock-require');

test('copy-symlink', async (t) => {
    const copySymlink = reRequire('..');
    const [e] = await tryToCatch(copySymlink, '/', '/abc');
    
    t.equal(e.code, 'EACCES', 'should equal');
    t.end();
});

test('copy-symlink: realpath', async (t) => {
    const {realpath} = fs.promises;
    fs.promises.realpath = () => '/hello';
    
    const copySymlink = reRequire('..');
    const [e] = await tryToCatch(copySymlink, '/', '/abc');
    
    fs.promises.realpath = realpath;
    
    t.equal(e.path, '/hello', 'should equal');
    t.end();
});

test('copy-symlink: symlink', async (t) => {
    const {symlink} = fs.promises;
    fs.promises.symlink = () => {throw Error('hello');};
    
    const copySymlink = reRequire('..');
    const [e] = await tryToCatch(copySymlink, '/', '/abc');
    
    fs.promises.symlink = symlink;
    
    t.equal(e.message, 'hello', 'should equal');
    t.end();
});

