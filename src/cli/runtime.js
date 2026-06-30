const path = require("path");
const { buildRuntimePack, renderRuntimePack, writeRuntimePack } = require("../core/runtime");
const { logInfo, logSuccess, logWarn, section } = require("../core/logger");

async function runRuntime(command, args = []) {
  const cwd = process.cwd();
  const pack = buildRuntimePack(cwd, command, args);
  const content = renderRuntimePack(pack);
  const written = writeRuntimePack(cwd, pack, content);

  section(pack.profile.title);
  console.log(content);

  if (written) {
    logSuccess(`Runtime Pack salvo em ${path.relative(cwd, written.runtimePath)}`);
    logSuccess(`Prompt salvo em ${path.relative(cwd, written.promptPath)}`);
  } else {
    logWarn("Workspace .ceip/ não encontrado. Resultado exibido apenas no terminal.");
    logInfo("Execute ceip init para habilitar persistência de Runtime Packs.");
  }
}

module.exports = {
  runRuntime
};
