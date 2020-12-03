require("dotenv").config();
const { connect, setDB, findOne } = require("./lib/api/database");

// for mocking up the interface
const { sampleToday } = require("./lib/api/mockups");

const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 6000;

app.use(express.json());

// template
// app.get('/password/:userquery', async (request, response) => {
//   const { userquery } = request.params;
//   const regex = new RegExp(`.*${userquery}.*`, 'ig');
//   const query = { $or: [{ category: { $in: [regex] } }, { name: { $in: [regex] } }] };

//   try {
//       const documents = await find(process.env.DB_COLLECTION, query);
//       if (documents.length === 0) {
//           response.status(404).send('Could not find passwords.');
//           return;
//       }
//       response.json(documents);
//   } catch (err) {
//       console.log(err);
//       response.status(500).send('An internal server error occured.');
//   }
// });

app.get("/api/date/:date", async (request, response) => {
  const { date } = request.params;
  console.log(date);

  // for mocking api paths returning ready object

  try {
    response.json(sampleToday);
  } catch (error) {
    console.log(error);
    response.status(500).send("An internal server error accured");
  }
});

app.get("api/user", async (request, response) => {
  const user = request.query.user;
  const password = request.query.pwd;

  try {
    setDB(process.env.DB_NAME);
    const document = await findOne(process.env.DB_COLLECTION_USER, {
      $or: [{ personalnr: user }, { name: user }, { email: user }],
    });
    if (document.length === 0) {
      response.status(404).send("Couldn´t find user");
    }

    // testing if passwords are correct
    if (document[0].password !== password) {
      response.status(401).send("Password incorrect");
    }

    // response mockup
    const { personalnr, email, name } = document[0];
    const auth_response = {
      auth_token:
        "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.5b0YUvXu9IFCI4kqzNAfrnuA2lSMp8XtezIZTfQYH4k",
      user: { personalnr, email, name },
      errors: [],
    };
    response.json(auth_response);
  } catch (error) {
    console.log(error);
    response.status(500).send("An internal server error accured");
  }
});

// Heroku Deployment
app.use(express.static(path.join(__dirname, "client/build")));
app.use(
  "/storybook",
  express.static(path.join(__dirname, "client/storybook-static"))
);
app.get("*", (request, response) => {
  response.sendFile(path.join(__dirname, "client/build", "index.html"));
});

// Connection to database
async function run() {
  console.log("Connecting to database ...");
  await connect(process.env.DB_URL);
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
}

run();
