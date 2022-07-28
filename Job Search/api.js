var jobSearch = document.getElementById("jobSearch");
var areaSearch = document.getElementById("area");
const options = {
  method: "POST",
  headers: {
    "content-type": "application/json",
    "X-RapidAPI-Key": "ee4ba4d88emsh5f022dd384ca11cp1c3043jsn048617c942bf",
    "X-RapidAPI-Host": "linkedin-jobs-search.p.rapidapi.com",
  },
  body: `{"search_terms":"${jobSearch.value}","location":"${area.value}","page":"1"}`,
};

var div = document.getElementById("jobs");
var btn = document.getElementById("btn1");
function jobs() {
  fetch("https://linkedin-jobs-search.p.rapidapi.com/", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
  var jobTitle = document.createElement("h2");
  var jobDescription = document.createElement("p");
  //jobTitle.setAttribute("class", "");
  //jobDescription.setAttribute("class", "");
  //jobTitle.textContent = jobtitle.content;
  //jobDescription.textContent = data.content;
  div.appendChild(jobTitle);
  div.appendChild(jobDescription);
}

function formSubmit() {
  document.getElementById("form1").addEventListener("click", function (event) {
    event.preventDefault;
    console.log(event.target);
  });
  // jobs();
}
