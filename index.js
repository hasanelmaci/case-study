const express = require("express");
require("./src/db/mongoose");
const path = require("path")
const cors = require("cors");
const taskRouter = require("./src/routers/task");

const app = express();
app.use(cors());
const port = process.env.PORT;

app.use(express.json());

app.use(taskRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
