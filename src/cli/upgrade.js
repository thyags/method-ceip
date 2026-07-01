const path = require("path");
const { upgradeWorkspace } = require("../core/upgrade");
const { logInfo, logSuccess, logWarn, section } = require("../core/logger");

async function runUpgrade(args = []) {
  const cwd = process.cwd();
  const result = await upgradeWorkspace(cwd, args);

  section("CEIP Upgrade");

  if (result.dryRun) {
    logWarn("Dry-run habilitado. Nenhum arquivo foi alterado.");
  }

  printGroup("Criados", result.created, logSuccess);
  printGroup("Atualizados", result.updated, logSuccess);
  printGroup("Preservados", result.skipped, logInfo);
  printGroup("Backups", result.backups, logInfo);
  printGroup("Avisos", result.warnings, logWarn);

  if (result.reportPath) {
    logSuccess(`Relatório salvo em ${path.relative(cwd, result.reportPath)}`);
  }
}

function printGroup(label, items, logger) {
  if (!items || items.length === 0) {
    return;
  }
  logger(`${label}: ${items.length}`);
  for (const item of items) {
    logger(`- ${item}`);
  }
}

module.exports = {
  runUpgrade
};
