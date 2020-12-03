const { MongoClient } = require("mongodb");

let client;
let db;

async function connect(url) {
  client = await MongoClient.connect(url, { useUnifiedTopology: true });
}

async function findOne(name, query) {
  try {
    const result = await db.collection(name).findOne(query).toArray();
    return result;
  } catch (err) {
    console.log(err);
    return;
  }
}

// Insert: for later usage (as template)
// async function insertNewDocument(name, document) {
//     try {
//         await db.collection(name).insertOne(document);
//     } catch (err) {
//         console.log(err);
//         return;
//     }
// }

// Update : for later usage (as template)
// async function changeDocument(name, id, newValue) {
//     try {
//         await db.collection(name).updateOne({ _id: id }, { $set: { value: newValue } });
//     } catch (err) {
//         console.log(err);
//         return;
//     }
// }

async function aggregate(name, query) {
  try {
    const results = await db.collection(name).aggregate(query);
    if (!results) {
      return null;
    }
    const documents = [];
    await results.forEach((doc) => {
      documents.push(doc);
    });
    return documents;
  } catch (err) {
    console.log(err);
    return;
  }
}

function setDB(dbName) {
  db = client.db(dbName);
}

function close() {
  return client.close();
}

exports.connect = connect;
exports.close = close;
exports.setDB = setDB;
exports.findOne = findOne;
exports.aggregate = aggregate;

// exports.insertNewDocument = insertNewDocument;
// exports.changeDocument = changeDocument;
