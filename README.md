Copy Symlink [![License][LicenseIMGURL]][LicenseURL] [![NPM version][NPMIMGURL]][NPMURL] [![Dependency Status][DependencyStatusIMGURL]][DependencyStatusURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL] [![Coverage Status][CoverageIMGURL]][CoverageURL]
=========

Copy symlink because [fs.copyFile](https://nodejs.org/dist/latest-v8.x/docs/api/fs.html#fs_fs_copyfile_src_dest_flags_callback) can't.

When you use `fs.copyFile` it gets [realpath](https://nodejs.org/dist/latest-v10.x/docs/api/fs.html#fs_fs_realpath_path_options_callback) and then copies content of a source file from `realpath`.

`copy-symlink` also gets `realpath` but then creates `symbolic link` on a new location.

## Install

```
npm i copy-symlink
```

## API

### copySymlink(src, dest)

It is a promise so you can use it this way:

```js
const copySymlink = require('copy-symlink');
const src = './symlink';
const dst = './symlink-copy';

copySymlink()
    .then(console.log)
    .catch(console.error);
```

Or using `async-await`

```js
const copySymlink = require('copy-symlink');

async () => {
   await copySymlink();
}();
```

## Related

- [fs-copy-file](https://github.com/coderaiser/fs-copy-file"fs-copy-file") - Copies src to dest.
- [fs-copy-file-sync](https://github.com/coderaiser/fs-copy-file-sync "fs-copy-file-sync") - Synchronously copies src to dest.

## License
MIT

[NPMIMGURL]:                https://img.shields.io/npm/v/copy-symlink.svg?style=flat
[BuildStatusIMGURL]:        https://img.shields.io/travis/coderaiser/copy-symlink/master.svg?style=flat
[DependencyStatusIMGURL]:   https://img.shields.io/david/coderaiser/copy-symlink.svg?style=flat
[LicenseIMGURL]:            https://img.shields.io/badge/license-MIT-317BF9.svg?style=flat
[CoverageIMGURL]:           https://coveralls.io/repos/coderaiser/copy-symlink/badge.svg?branch=master&service=github
[NPMURL]:                   https://npmjs.org/package/copy-symlink "npm"
[BuildStatusURL]:           https://travis-ci.org/coderaiser/copy-symlink  "Build Status"
[DependencyStatusURL]:      https://david-dm.org/coderaiser/copy-symlink "Dependency Status"
[LicenseURL]:               https://tldrlegal.com/license/mit-license "MIT License"
[CoverageURL]:              https://coveralls.io/github/coderaiser/copy-symlink?branch=master

