const fs = require("fs");
const path = require("path");

function exists(targetPath) {
  return fs.existsSync(targetPath);
}

function ensureDir(targetPath) {
  fs.mkdirSync(targetPath, { recursive: true });
}

function readText(targetPath) {
  return fs.readFileSync(targetPath, "utf8");
}

function writeText(targetPath, content) {
  ensureDir(path.dirname(targetPath));
  fs.writeFileSync(targetPath, content, "utf8");
}

async function writeTextSafe(targetPath, content, options = {}) {
  const { prompt, overwrite = false, label = targetPath } = options;

  if (exists(targetPath) && !overwrite) {
    if (!prompt) {
      return { written: false, skipped: true, reason: "exists" };
    }

    const shouldOverwrite = await prompt.confirm(`Arquivo existente: ${label}. Sobrescrever?`, false);
    if (!shouldOverwrite) {
      return { written: false, skipped: true, reason: "exists" };
    }
  }

  writeText(targetPath, content);
  return { written: true, skipped: false };
}

function appendUniqueLines(targetPath, lines, header) {
  const current = exists(targetPath) ? readText(targetPath) : "";
  const missing = lines.filter((line) => !current.split(/\r?\n/).includes(line));

  if (missing.length === 0) {
    return { changed: false, added: [] };
  }

  const prefix = current.trim().length > 0 ? `${current.replace(/\s*$/, "")}\n\n` : "";
  const block = `${header}\n${missing.join("\n")}\n`;
  writeText(targetPath, `${prefix}${block}`);
  return { changed: true, added: missing };
}

function listFilesRecursive(rootPath) {
  if (!exists(rootPath)) {
    return [];
  }

  const results = [];
  const entries = fs.readdirSync(rootPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(rootPath, entry.name);
    if (entry.isDirectory()) {
      results.push(...listFilesRecursive(fullPath));
    } else {
      results.push(fullPath);
    }
  }

  return results;
}

module.exports = {
  appendUniqueLines,
  ensureDir,
  exists,
  listFilesRecursive,
  readText,
  writeText,
  writeTextSafe
};
