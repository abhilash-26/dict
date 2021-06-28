const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());

const PORT = process.env.PORT || 5005;

mongoose
  .connect(
    "mongodb+srv://roado:roado@cluster0.f297i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("database connected..."));

app.use("/app", require("./routes/index"));

if (process.env.NODE_ENV == "production") {
  app.use(express.static("webclient/build"));
}

app.listen(PORT, () => console.log(`server is up and running on port ${PORT}`));
