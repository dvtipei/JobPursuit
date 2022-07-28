const axios = require("axios");

const options = {
  method: "POST",
  url: "https://linkedin-jobs-search.p.rapidapi.com/",
  headers: {
    "content-type": "application/json",
    "X-RapidAPI-Key": "ee4ba4d88emsh5f022dd384ca11cp1c3043jsn048617c942bf",
    "X-RapidAPI-Host": "linkedin-jobs-search.p.rapidapi.com",
  },
  data: '{"search_terms":"python programmer","location":"30301","page":"1"}',
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
