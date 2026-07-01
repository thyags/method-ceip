const path = require("path");
const { ensureDir, exists, readText, writeText } = require("./filesystem");

function parseExecutionArgs(args = []) {
  const options = {
    dryRun: false,
    force: false
  };
  const taskParts = [];

  for (const arg of args) {
    if (arg === "--dry-run") {
      options.dryRun = true;
      continue;
    }
    if (arg === "--force") {
      options.force = true;
      continue;
    }
    taskParts.push(arg);
  }

  return {
    options,
    task: taskParts.join(" ").trim()
  };
}

function fileStamp(date = new Date()) {
  return date.toISOString().replace(/\.\d{3}Z$/, "").replace(/[-:]/g, "").replace("T", "-");
}

function writeHistoricalArtifact(targetPath, content) {
  const finalPath = uniquePath(targetPath);
  writeText(finalPath, content);
  return {
    path: finalPath,
    written: true,
    skipped: false
  };
}

function writeCurrentArtifact(cwd, targetPath, content, options = {}) {
  const { force = false, stamp = fileStamp(), backup = true } = options;
  if (exists(targetPath) && !force) {
    return {
      path: targetPath,
      written: false,
      skipped: true,
      reason: "exists",
      backupPath: null
    };
  }

  const backupPath = exists(targetPath) && backup ? backupExistingFile(cwd, targetPath, stamp) : null;
  writeText(targetPath, content);

  return {
    path: targetPath,
    written: true,
    skipped: false,
    backupPath
  };
}

function backupExistingFile(cwd, targetPath, stamp = fileStamp()) {
  const relativePath = workspaceRelativePath(cwd, targetPath);
  const backupPath = path.join(cwd, ".ceip", "backups", stamp, relativePath);
  ensureDir(path.dirname(backupPath));
  writeText(backupPath, readText(targetPath));
  return backupPath;
}

function uniquePath(targetPath) {
  if (!exists(targetPath)) {
    return targetPath;
  }

  const parsed = path.parse(targetPath);
  for (let index = 2; index < 1000; index += 1) {
    const candidate = path.join(parsed.dir, `${parsed.name}-${index}${parsed.ext}`);
    if (!exists(candidate)) {
      return candidate;
    }
  }

  throw new Error(`Não foi possível criar caminho único para ${targetPath}`);
}

function workspaceRelativePath(cwd, targetPath) {
  const relativePath = path.relative(cwd, targetPath);
  const ceipPrefix = `.ceip${path.sep}`;
  if (relativePath.startsWith(ceipPrefix)) {
    return relativePath.slice(ceipPrefix.length);
  }
  return relativePath;
}

module.exports = {
  backupExistingFile,
  fileStamp,
  parseExecutionArgs,
  writeCurrentArtifact,
  writeHistoricalArtifact
};
