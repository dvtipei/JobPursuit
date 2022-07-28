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
    .then((response) => {
      console.log(response);
      for (let i = 0; i < response.length; i++) {
        var jobTitle = document.createElement("h2");
        var jobDescription = document.createElement("p");
        //jobTitle.setAttribute("class", "");
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

btn.addEventListener("click", formSubmit);

// const search = document.querySelector('#form1')
// search.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const response = await fetch('api', {
//         method: "POST",
//         body: JSON.stringify({
//             title: document.querySelector('#input').value
//         }),
//         headers: {
//             'Content-Type': 'applucation/json'
//         }
//     });
//     if (response.ok){
//         const data = await response.json();
//         document.write(JSON.stringify(data))
//     }else{
//         alert("fail");
//     }
// });
