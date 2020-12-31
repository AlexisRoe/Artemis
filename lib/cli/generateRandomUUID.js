const { v4: uuidv4 } = require("uuid");

async function generateRandomUUID() {
  const uuid = uuidv4();
  console.log(`your UUID:\n${uuid}`);
}

generateRandomUUID();
