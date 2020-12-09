function extractIDandPasswort(header) {
  const buff = Buffer.from(header.split(" ")[1], "base64");
  const [id, password] = buff.toString("utf-8").split(":");
  return { id, password };
}

module.exports = extractIDandPasswort;
