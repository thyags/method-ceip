const { CLI_VERSION, WORKSPACE_VERSION } = require("../core/templates");

async function runVersion() {
  console.log(`CEIP Installer ${CLI_VERSION}`);
  console.log(`CEIP Workspace ${WORKSPACE_VERSION}`);
}

module.exports = {
  runVersion
};
