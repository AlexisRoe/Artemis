const bcrypt = require("bcrypt");
const inquirer = require("inquirer");
const saltRounds = 10;

async function hash(pwdInput) {
  const pwd = await bcrypt.hash(pwdInput, saltRounds);
  return pwd;
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

async function hashingPassword() {
  const passwordToHash = await askUser("Password to hash:");
  const hashedPassword = await hash(passwordToHash);
  console.log(`Passwordhash:\n${hashedPassword}`);
}

hashingPassword();
