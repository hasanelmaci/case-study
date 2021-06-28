const express = require("express");
require("./src/db/mongoose");
const cors = require("cors");
const taskRouter = require("./src/routers/task");

const app = express();
app.use(cors());
const port = process.env.PORT;

app.use(express.json());

app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
