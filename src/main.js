import vfs from 'vinyl-fs';
import _ from 'lodash';
import {genify} from 'thunkify-wrap';
import resolve from 'resolve';

function srcInternal({files, basedir=process.cwd(), cb}) {
  try {
    const fnms = files.map((moduleName) =>
      resolve.sync(moduleName, {basedir}));

    if (cb) cb(null, vfs.src(fnms));
    else return vfs.src(fnms);
  } catch (err) {
    if (cb) cb(err);
    else throw err;
  }
}

const src = srcInternal;

export {src};
