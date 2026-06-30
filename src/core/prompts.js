const readline = require("readline");

function createPrompt() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function question(message) {
    return new Promise((resolve) => {
      rl.question(message, (answer) => resolve(answer.trim()));
    });
  }

  async function text(label, defaultValue = "") {
    const suffix = defaultValue ? ` (${defaultValue})` : "";
    const answer = await question(`${label}${suffix}: `);
    return answer || defaultValue;
  }

  async function confirm(label, defaultValue = true) {
    const suffix = defaultValue ? "Y/n" : "y/N";
    const answer = (await question(`${label} [${suffix}]: `)).toLowerCase();

    if (!answer) {
      return defaultValue;
    }

    return ["y", "yes", "s", "sim"].includes(answer);
  }

  async function select(label, choices, defaultValue) {
    console.log(`\n${label}`);
    choices.forEach((choice, index) => {
      const marker = choice === defaultValue ? " (padrão)" : "";
      console.log(`  ${index + 1}. ${choice}${marker}`);
    });

    const answer = await question("Escolha uma opção: ");
    const index = Number(answer) - 1;

    if (Number.isInteger(index) && index >= 0 && index < choices.length) {
      return choices[index];
    }

    return defaultValue || choices[0];
  }

  async function multiSelect(label, choices, defaultValues = []) {
    console.log(`\n${label}`);
    choices.forEach((choice, index) => {
      const marker = defaultValues.includes(choice) ? " (padrão)" : "";
      console.log(`  ${index + 1}. ${choice}${marker}`);
    });
    console.log("Informe números separados por vírgula, ou deixe vazio para usar o padrão.");

    const answer = await question("Escolhas: ");
    if (!answer) {
      return defaultValues;
    }

    const selected = answer
      .split(",")
      .map((item) => Number(item.trim()) - 1)
      .filter((index) => Number.isInteger(index) && index >= 0 && index < choices.length)
      .map((index) => choices[index]);

    return Array.from(new Set(selected));
  }

  function close() {
    rl.close();
  }

  return {
    close,
    confirm,
    multiSelect,
    select,
    text
  };
}

module.exports = {
  createPrompt
};
