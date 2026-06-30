const fs = require("fs");
const path = require("path");
const { exists } = require("./filesystem");
const { getRemoteUrl, isGitAvailable, isInsideGitRepo } = require("./git");

function detectProject(cwd) {
  const gitAvailable = isGitAvailable();
  const insideGit = gitAvailable && isInsideGitRepo(cwd);
  const remoteUrl = insideGit ? getRemoteUrl(cwd) : "";

  return {
    cwd,
    projectName: path.basename(cwd),
    gitAvailable,
    insideGit,
    remoteUrl,
    hasCeipWorkspace: exists(path.join(cwd, ".ceip")),
    hasCeipCoreSubmodule: exists(path.join(cwd, ".cloudsix", "method")),
    hasAgentsFile: exists(path.join(cwd, "AGENTS.md")),
    stack: detectStack(cwd)
  };
}

function detectStack(cwd) {
  const stack = {
    detected: false,
    languages: [],
    frameworks: [],
    databases: [],
    frontend: [],
    backend: [],
    infrastructure: [],
    testing: [],
    observability: []
  };

  addFromFile(stack, cwd);
  stack.detected = Object.keys(stack)
    .filter((key) => key !== "detected")
    .some((key) => stack[key].length > 0);

  return stack;
}

function addFromFile(stack, cwd) {
  const indicators = [
    ["package.json", () => detectPackageJson(stack, path.join(cwd, "package.json"))],
    ["composer.json", () => add(stack, "languages", "PHP")],
    ["requirements.txt", () => add(stack, "languages", "Python")],
    ["pyproject.toml", () => add(stack, "languages", "Python")],
    ["pom.xml", () => add(stack, "languages", "Java")],
    ["build.gradle", () => add(stack, "languages", "Java/Kotlin")],
    ["go.mod", () => add(stack, "languages", "Go")],
    ["Cargo.toml", () => add(stack, "languages", "Rust")],
    ["docker-compose.yml", () => add(stack, "infrastructure", "Docker Compose")],
    ["Dockerfile", () => add(stack, "infrastructure", "Docker")]
  ];

  for (const [fileName, handler] of indicators) {
    if (exists(path.join(cwd, fileName))) {
      handler();
    }
  }

  const csproj = fs.readdirSync(cwd).some((entry) => entry.endsWith(".csproj"));
  if (csproj) {
    add(stack, "languages", ".NET");
  }
}

function detectPackageJson(stack, packagePath) {
  add(stack, "languages", "JavaScript/TypeScript");

  try {
    const pkg = JSON.parse(fs.readFileSync(packagePath, "utf8"));
    const deps = {
      ...pkg.dependencies,
      ...pkg.devDependencies
    };
    const names = Object.keys(deps || {});

    const frameworkIndicators = [
      ["react", "React", "frontend"],
      ["vue", "Vue", "frontend"],
      ["@angular/core", "Angular", "frontend"],
      ["next", "Next.js", "frontend"],
      ["nuxt", "Nuxt", "frontend"],
      ["express", "Express", "backend"],
      ["fastify", "Fastify", "backend"],
      ["nestjs", "NestJS", "backend"],
      ["@nestjs/core", "NestJS", "backend"],
      ["prisma", "Prisma", "databases"],
      ["typeorm", "TypeORM", "databases"],
      ["sequelize", "Sequelize", "databases"],
      ["mongoose", "Mongoose", "databases"],
      ["jest", "Jest", "testing"],
      ["vitest", "Vitest", "testing"],
      ["playwright", "Playwright", "testing"],
      ["cypress", "Cypress", "testing"],
      ["@sentry/node", "Sentry", "observability"]
    ];

    for (const [dep, label, bucket] of frameworkIndicators) {
      if (names.includes(dep)) {
        add(stack, bucket, label);
        if (bucket === "frontend" || bucket === "backend") {
          add(stack, "frameworks", label);
        }
      }
    }

    const databaseIndicators = [
      ["pg", "PostgreSQL"],
      ["mysql2", "MySQL"],
      ["mysql", "MySQL"],
      ["mongodb", "MongoDB"],
      ["redis", "Redis"],
      ["sqlite3", "SQLite"],
      ["better-sqlite3", "SQLite"]
    ];

    for (const [dep, label] of databaseIndicators) {
      if (names.includes(dep)) {
        add(stack, "databases", label);
      }
    }
  } catch (_error) {
    add(stack, "frameworks", "not_identified");
  }
}

function add(stack, key, value) {
  if (!stack[key].includes(value)) {
    stack[key].push(value);
  }
}

module.exports = {
  detectProject
};
