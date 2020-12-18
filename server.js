require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const { connect } = require("./lib/api/database");

const documents = require("./lib/routes/documents");
const user = require("./lib/routes/user");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/api/documents", documents);
app.use("/api/user", user);

// Heroku Deployment
app.use(express.static(path.join(__dirname, "client/build")));
app.use(
  "/storybook",
  express.static(path.join(__dirname, "client/storybook-static"))
);
app.get("*", (request, response) => {
  response.sendFile(path.join(__dirname, "client/build", "index.html"));
});

// server
async function run() {
  console.log("Connecting to database ...");
  await connect(process.env.DB_URL);
  app.listen(process.env.PORT || 6000);
}

run();
