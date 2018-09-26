'use strict';

const fs = require('fs');
const {promisify} = require('util');
const swap = (f) => (a, b, fn) => f(b, a, fn);

const realpath = promisify(fs.realpath);
const symlink = promisify(swap(fs.symlink));

module.exports = async (src, dest) => {
    const path = await realpath(src);
    await symlink(dest, path);
};

