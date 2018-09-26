'use strict';

const fs = require('fs');
const test = require('tape');
const tryToCatch = require('try-to-catch');
const {reRequire}  = require('mock-require');

test('copy-symlink', async (t) => {
    const copySymlink = reRequire('..');
    const [e] = await tryToCatch(copySymlink, '/', '/abc');
    
    t.equal(e.code, 'EACCES', 'should equal');
    t.end();
});

test('copy-symlink: realpath', async (t) => {
    const {realpath} = fs;
    fs.realpath = (a, fn) => fn(null, '/hello');
    
    const copySymlink = reRequire('..');
    const [e] = await tryToCatch(copySymlink, '/', '/abc');
    
    fs.realpath = realpath;
    
    t.equal(e.path, '/hello', 'should equal');
    t.end();
});

test('copy-symlink: symlink', async (t) => {
    const {symlink} = fs;
    fs.symlink = (a, b, fn) => fn(Error('hello'));
    
    const copySymlink = reRequire('..');
    const [e] = await tryToCatch(copySymlink, '/', '/abc');
    
    fs.symlink = symlink;
    
    t.equal(e.message, 'hello', 'should equal');
    t.end();
});

