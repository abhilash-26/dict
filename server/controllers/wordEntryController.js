const axios = require("axios");
const Word = require("../models/wordModel");

const saveToDb = async (req, res) => {
  try {
    console.log("running");
    const { name } = req.body;
    const result = await axios({
      method: "get",
      url: `https://od-api.oxforddictionaries.com/api/v2/entries/en-us/${name}?fields=definitions&strictMatch=false`,
      headers: {
        app_id: "87784248",
        app_key: "6f2d7d43f7c8961928d2dbd3fa70116f",
      },
    });
    const createdData = await Word.create({
      wordName: name,
      wordDefinition:
        result.data.results[0].lexicalEntries[0].entries[0].senses[0]
          .definitions[0],
    });
    console.log(result.data.results[0].lexicalEntries);
    res.json(result.data);
  } catch (error) {
    console.log(error);
  }
};

const sendWord = async (req, res) => {
  try {
    const result = await Word.find();

    res.send(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { saveToDb, sendWord };
