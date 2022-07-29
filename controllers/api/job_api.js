const router = require("express").Router();
const axios = require("axios");
//when i make a post call to /api / jobs '/' then this code will fire
router.post("/", async (req, res) => {
  try {
    const options = {
      method: "POST",
      url: "https://linkedin-jobs-search.p.rapidapi.com/",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "ee4ba4d88emsh5f022dd384ca11cp1c3043jsn048617c942bf",
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
