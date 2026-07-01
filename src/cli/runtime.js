const path = require("path");
const { buildRuntimePack, renderRuntimePack, writeRuntimePack } = require("../core/runtime");
const { logInfo, logSuccess, logWarn, section } = require("../core/logger");

async function runRuntime(command, args = []) {
  const cwd = process.cwd();
  const pack = buildRuntimePack(cwd, command, args);
  const content = renderRuntimePack(pack);

  section(pack.profile.title);
  console.log(content);

  if (pack.options.dryRun) {
    logWarn("Dry-run habilitado. Nenhum arquivo foi alterado.");
    return;
  }

  const written = writeRuntimePack(cwd, pack, content);

  if (written) {
    logSuccess(`Runtime Pack histórico salvo em ${path.relative(cwd, written.runtimeHistory.path)}`);
    if (written.runtimeCurrent.written) {
      logSuccess(`Runtime Pack atual salvo em ${path.relative(cwd, written.runtimeCurrent.path)}`);
    } else {
      logWarn(`Runtime Pack atual preservado em ${path.relative(cwd, written.runtimeCurrent.path)}. Use --force para sobrescrever com backup.`);
    }
    logSuccess(`Prompt histórico salvo em ${path.relative(cwd, written.promptHistory.path)}`);
    if (written.promptCurrent.written) {
      logSuccess(`Prompt atual salvo em ${path.relative(cwd, written.promptCurrent.path)}`);
    } else {
      logWarn(`Prompt atual preservado em ${path.relative(cwd, written.promptCurrent.path)}. Use --force para sobrescrever com backup.`);
    }
    for (const backupPath of written.backups) {
      logInfo(`Backup criado em ${path.relative(cwd, backupPath)}`);
    }
  } else {
    logWarn("Workspace .ceip/ não encontrado. Resultado exibido apenas no terminal.");
    logInfo("Execute ceip init para habilitar persistência de Runtime Packs.");
  }
}

module.exports = {
  runRuntime
};
