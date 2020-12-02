const CryptoJS = require("crypto-js");
const inquirer = require("inquirer");

function hash(pwdInput) {
  const pwdHash = CryptoJS.MD5(pwdInput).toString(CryptoJS.enc.Base64);
  return pwdHash;
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
