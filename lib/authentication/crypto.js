const bcrypt = require("bcrypt");
const saltRounds = 10;

async function comparePasswords(storedPassword, plainPassword) {
  const result = await bcrypt.compare(plainPassword, storedPassword);
  return result;
}

async function hashPassword(pwdInput) {
  const pwd = await bcrypt.hash(pwdInput, saltRounds);
  return pwd;
}

module.exports = comparePasswords;
module.exports = hashPassword;
