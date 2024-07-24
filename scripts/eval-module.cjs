const vm = require("vm");
const md = require("module");
const url = require("url");

module.exports.evalModule = async function evalModule(filename, code) {
  const ctxExports = {};
  const ctxRequire = md.createRequire(url.pathToFileURL(filename));

  const context = {
    ...global,
    process: process,
    exports: ctxExports,
    module: {
      exports: ctxExports,
      filename: filename,
      id: filename,
      parent: module.main,
      require: ctxRequire,
    },
    global: global,
    require: ctxRequire,
    console: console,
    RegExp: RegExp,
  };

  const script = new vm.Script(code);

  try {
    await script.runInNewContext(context, {
      filename: filename,
      displayErrors: true,
    });
  } catch (err) {
    console.error(err);
    throw err;
  }

  return context.module.exports;
};
