const path = require("path");
const { buildCheckpoint, renderCheckpoint, writeCheckpoint } = require("../core/checkpoint");
const { logSuccess, logWarn, section } = require("../core/logger");

async function runCheckpoint(args = []) {
  const cwd = process.cwd();
  const checkpoint = buildCheckpoint(cwd, args);
  const content = renderCheckpoint(checkpoint);

  section("CEIP Checkpoint");
  console.log(content);

  if (checkpoint.dryRun) {
    logWarn("Dry-run habilitado. Nenhum arquivo foi alterado.");
    return;
  }

  const written = writeCheckpoint(cwd, checkpoint, content);

  if (!written) {
    logWarn("Workspace .ceip/ não encontrado. Resultado exibido apenas no terminal.");
    return;
  }

  logSuccess(`Runtime Pack salvo em ${path.relative(cwd, written.runtimePath)}`);
  logSuccess(`Review salvo em ${path.relative(cwd, written.reviewPath)}`);
  logSuccess(`Prompt salvo em ${path.relative(cwd, written.promptPath)}`);
  logSuccess(`Implementation Log atualizado em ${path.relative(cwd, written.logPath)}`);
}

module.exports = {
  runCheckpoint
};
