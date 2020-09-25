'use strict';

const {
    realpath,
    symlink,
} = require('fs').promises;

module.exports = async (src, dest) => {
    const path = await realpath(src);
    await symlink(path, dest);
};

