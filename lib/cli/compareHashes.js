const bcrypt = require("bcrypt");
const inquirer = require("inquirer");

async function compare(storedPassword, plainPassword) {
  const result = await bcrypt.compare(plainPassword, storedPassword);
  return result;
}

async function askUser(question) {
  const { answer } = await inquirer.prompt([
    {
      type: "string",
      name: "answer",
      message: question,
    },
  ]);

  return answer;
}

async function comparePasswords() {
  const storedPassword = await askUser("the stored hash:");
  const plainPassword = await askUser("the plain password:");
  const answer = await compare(storedPassword, plainPassword);
  console.log(`The two passwords are equal: ${answer}`);
}

comparePasswords();
