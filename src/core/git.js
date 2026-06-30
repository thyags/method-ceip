const { execFileSync } = require("child_process");

function runGit(args, cwd) {
  return execFileSync("git", args, {
    cwd,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"]
  }).trim();
}

function isGitAvailable() {
  try {
    runGit(["--version"], process.cwd());
    return true;
  } catch (_error) {
    return false;
  }
}

function isInsideGitRepo(cwd) {
  try {
    return runGit(["rev-parse", "--is-inside-work-tree"], cwd) === "true";
  } catch (_error) {
    return false;
  }
}

function getRemoteUrl(cwd) {
  try {
    return runGit(["config", "--get", "remote.origin.url"], cwd);
  } catch (_error) {
    return "";
  }
}

function addSubmodule(cwd, url, targetPath) {
  runGit(["submodule", "add", url, targetPath], cwd);
}

module.exports = {
  addSubmodule,
  getRemoteUrl,
  isGitAvailable,
  isInsideGitRepo
};
