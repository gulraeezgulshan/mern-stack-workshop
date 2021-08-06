const express = require("express");
const mongoose = require("mongoose");
const app = express();
const tasks = require("./routes/tasks");
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Working");
});

app.use(express.json());

app.use("/api/v1/tasks", tasks);

const PORT = 5000;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => console.log(`Server is listening to port: ${PORT}`));
  })
  .catch((error) => console.log(error));
