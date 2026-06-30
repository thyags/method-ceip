function logInfo(message) {
  console.log(`info  ${message}`);
}

function logSuccess(message) {
  console.log(`ok    ${message}`);
}

function logWarn(message) {
  console.warn(`warn  ${message}`);
}

function logError(message) {
  console.error(`error ${message}`);
}

function section(title) {
  console.log(`\n${title}`);
  console.log("-".repeat(title.length));
}

module.exports = {
  logInfo,
  logSuccess,
  logWarn,
  logError,
  section
};
