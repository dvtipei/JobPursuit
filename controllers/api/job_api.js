const router = require("express").Router();
const axios = require("axios");
require("dotenv").config();
//when i make a post call to /api / jobs '/' then this code will fire
router.post("/", async (req, res) => {
  try {
    const options = {
      method: "POST",
      url: "https://linkedin-jobs-search.p.rapidapi.com/",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": `dc01470c37msh860345accc525e5p135c00jsna4a6ff9fcdc8`,
        "X-RapidAPI-Host": "linkedin-jobs-search.p.rapidapi.com",
      },
      data: `{"search_terms":"${req.body.search_terms}","location":"${req.body.location}","page":"1"}`,
    };

    const response = await axios.request(options);

    res.status(200).json(response.data);
    console.log(response.data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
