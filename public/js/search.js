var div = document.getElementById("jobs");
var btn = document.getElementById("form1");

function jobs() {
  var jobSearch = document.getElementById("jobSearch");
  var area = document.getElementById("area");

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: `{"search_terms":"${jobSearch.value}","location":"${area.value}","page":"1"}`,
  };

  fetch("/api/jobs/", options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      for (let i = 0; i < response.length; i++) {
        var jobTitle = document.createElement("h2");
        var jobDescription = document.createElement("p");
        //jobTitle.setAttribute("class", "red");
        //jobDescription.setAttribute("class", "");
        jobTitle.textContent = response[i].job_title;
        jobDescription.textContent = response[i].job_url;
        div.appendChild(jobTitle);
        div.appendChild(jobDescription);
      }
    })
    .catch((err) => console.error(err));
}

function formSubmit(event) {
  event.preventDefault();
  console.log(event.target);
  jobs();
}

btn.addEventListener("submit", formSubmit);
