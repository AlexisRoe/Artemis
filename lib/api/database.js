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

async function modifyUser(name, id, newValue) {
  try {
    await db.collection(name).updateOne(
      { _id: id },
      {
        $currentDate: {
          lastModified: true,
        },
        $set: {
          auth_token: newValue,
        },
      }
    );
  } catch (error) {
    throw new Error(error.message);
  }
}

function close() {
  return client.close();
}

exports.connect = connect;
exports.findOne = findOne;
exports.find = find;
exports.modifyUser = modifyUser;
exports.close = close;
