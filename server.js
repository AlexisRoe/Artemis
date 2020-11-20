const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;

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
  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
}

run();
