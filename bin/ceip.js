#!/usr/bin/env node

const { runInit } = require("../src/cli/init");
const { runDoctor } = require("../src/cli/doctor");
const { runVersion } = require("../src/cli/version");
const { logError } = require("../src/core/logger");

async function main() {
  const command = process.argv[2] || "help";
  const args = process.argv.slice(3);

  if (command === "init") {
    await runInit(args);
    return;
  }

  if (command === "doctor") {
    await runDoctor(args);
    return;
  }

  if (command === "version" || command === "--version" || command === "-v") {
    await runVersion();
    return;
  }

  printHelp();
}

function printHelp() {
  console.log(`CEIP Installer

Usage:
  ceip init       Initialize CEIP Core + Workspace in a project
  ceip doctor     Validate a CEIP project setup
  ceip version    Show CLI and workspace versions

Direct usage:
  node bin/ceip.js init
`);
}

main().catch((error) => {
  logError(error.message || String(error));
  process.exitCode = 1;
});
