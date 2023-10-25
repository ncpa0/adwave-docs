const vm = require("vm");
const md = require("module");
const url = require("url");

module.exports.evalModule = async function evalModule(
  filename,
  code,
) {
  const ctxExports = {};
  const ctxRequire = md.createRequire(url.pathToFileURL(filename));

  const context = {
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
  };

  const script = new vm.Script(code);

  await script.runInNewContext(context, {
    filename: filename,
    displayErrors: true,
  });

  return context.module.exports;
};
