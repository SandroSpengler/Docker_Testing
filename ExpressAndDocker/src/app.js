// imports
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const router = express.Router();

const { DB_CONNECTION, PORT } = require("./Config/config");

const ApiModule = require("./Routes/api/ApiModule");

// declarations
app.use(cors());
app.enable("trust proxy");

app.get("/", (req, res) => {
  res.send("<h1>Hello World!!!</h1>");
});

app.use("/api", ApiModule);

connectWithRetry = () => {
  mongoose
    .connect(DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Working"))
    .catch((err) => {
      console.log(err.message);

      setTimeout(connectWithRetry(), 5000);
    });
};

connectWithRetry();

// start app with envoirmentvariable
app.listen(PORT);
