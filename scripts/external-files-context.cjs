const { defineContext } = require("jsxte");

/**
 * @type {import("jsxte").ContextDefinition<{
 *   register(content: string, name: string, type: string): string;
 * }>}
 */
const ExtFilesCtx = defineContext();

module.exports.ExtFilesCtx = ExtFilesCtx;
