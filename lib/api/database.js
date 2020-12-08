const { MongoClient } = require("mongodb");

let client;
let db;

async function connect(url) {
  client = await MongoClient.connect(url, { useUnifiedTopology: true });
  db = client.db(process.env.DB_NAME);
}

async function findOne(name, query) {
  return await db.collection(name).findOne(query);
}

async function find(name, query) {
  const results = await db.collection(name).find(query).toArray();
  return results;
}

function close() {
  return client.close();
}

exports.connect = connect;
exports.findOne = findOne;
exports.find = find;
exports.close = close;
