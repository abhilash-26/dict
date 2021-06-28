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

app.listen(PORT, () => console.log(`server is up and running on port ${PORT}`));
