const CryptoJS = require("crypto-js");

export function hash(pwdInput) {
  const pwdHash = CryptoJS.MD5(pwdInput).toString(CryptoJS.enc.Base64);
  return pwdHash;
}
