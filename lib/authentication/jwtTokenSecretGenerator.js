function generateTokenSecret(bytes = 64) {
  return require("crypto").randomBytes(bytes).toString("hex");
}

module.exports = generateTokenSecret;
