const inquirer = require("inquirer");

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

async function tokenGenerator() {
  let bytes = await askUser(
    "How many bytes should be used for creating the token?\n default: 64byte >"
  );
  if (!bytes) {
    bytes = 64;
  }
  const token = require("crypto").randomBytes(bytes).toString("hex");
  console.log(`token_secret:\n${token}`);
}

tokenGenerator();
