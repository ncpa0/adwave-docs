const path = require("path");

const changeExt = (filePath, newExt) => {
  const filename = path.basename(filePath, path.extname(filePath));
  const dir = path.dirname(filePath);
  return path.join(dir, `${filename}.${newExt}`);
};

module.exports.changeExt = changeExt;
