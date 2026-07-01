const path = require("path");
const { buildCheckpoint, renderCheckpoint, writeCheckpoint } = require("../core/checkpoint");
const { logInfo, logSuccess, logWarn, section } = require("../core/logger");

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

  logSuccess(`Runtime Pack histórico salvo em ${path.relative(cwd, written.runtimeHistory.path)}`);
  if (written.runtimeCurrent.written) {
    logSuccess(`Runtime Pack atual salvo em ${path.relative(cwd, written.runtimeCurrent.path)}`);
  } else {
    logWarn(`Runtime Pack atual preservado em ${path.relative(cwd, written.runtimeCurrent.path)}. Use --force para sobrescrever com backup.`);
  }
  logSuccess(`Review salvo em ${path.relative(cwd, written.review.path)}`);
  logSuccess(`Prompt histórico salvo em ${path.relative(cwd, written.promptHistory.path)}`);
  if (written.promptCurrent.written) {
    logSuccess(`Prompt atual salvo em ${path.relative(cwd, written.promptCurrent.path)}`);
  } else {
    logWarn(`Prompt atual preservado em ${path.relative(cwd, written.promptCurrent.path)}. Use --force para sobrescrever com backup.`);
  }
  logSuccess(`Implementation Log atualizado em ${path.relative(cwd, written.logPath)}`);
  for (const backupPath of written.backups) {
    logInfo(`Backup criado em ${path.relative(cwd, backupPath)}`);
  }
}

module.exports = {
  runCheckpoint
};
