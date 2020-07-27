var h2 = document.querySelector('h2');
var p = document.querySelector('p');


//The code below creates a live clock that changes color every second.
function digitalClock() {
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  let year = today.getFullYear();
  let month = today.getMonth();
  let thisDay = today.getDay();


  if (hours > 12 ) {
    hours = hours - 12;
  }

  if (hours == 0) {
    hours = 12;
  }

  if (hours < 10) {
    hours = '0' + hours;
  }

  if (minutes < 10 ) {
    minutes = '0' + minutes;
  }

  if (seconds < 10 ) {
    seconds = '0' + seconds;
  }

  p.innerHTML = `${hours} : ${minutes} ${seconds}`;
}

function getRandomColor() {
  var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

function setRandomColor() {
  p.style.color = getRandomColor();
}

setInterval(setRandomColor,1000);
setInterval(digitalClock, 500);


//The following code makes an Ajax request to the url specified.
function getApiData(state, year, crimeType) {
var newRequest = new XMLHttpRequest();
CDE_API = `https://api.usa.gov/crime/fbi/sapi/api/summarized/state/${state}/${crimeType}/${year}/${year + 1}?API_KEY=uj7JC6XTYj9czDPySfqJrIiCc0y8uFgNHa6KkJQB`;
newRequest.open('GET', CDE_API);


//Depending on which condition is met, the request will be either parsed and put into an html file or give an error message of "request not recieved"
newRequest.onreadystatechange = function() {

      if (newRequest.readyState === 4 && newRequest.status === 200 ) {
        console.log("request a success!");

        var crimeStats = JSON.parse(newRequest.responseText);


        for (let i = 0; i <crimeStats.results.length; i++ ) {


          if (crimeStats.results[i].data_year === year) {
          const h1 = document.querySelector('h1').innerHTML = `Number of Violent Crimes According to Each Originating Agency during the year : ${year}`;
          const div = document.querySelector('div');
          const ul  = document.createElement('ul');


      ul.innerHTML =  ` <li>Originating Agency: ${crimeStats.results[i].ori}</li>
                        <li>Type of Offense: ${crimeStats.results[i].offense}</li>
                        <li>Actual Violent Crimes Committed : ${crimeStats.results[i].actual}</li>
                        <li>Violent Crimes that were cleared : ${crimeStats.results[i].cleared}</li>`;
      div.append(ul);



          }


          }
      }

      else {
        console.log("request not received yet");
      }

     }
     newRequest.send();
  }



 function askUser(){
   let state = document.getElementById('state').value;
   let year = document.getElementById('year').value;
   let actualYear = parseInt(year, 10);
   let crimeType = document.getElementById('crime').value;
   console.log(state, actualYear, crimeType);



   getApiData(state,actualYear,crimeType);

 }

 function resetValues() {
   let state = document.getElementById('state').value = "";
   let year = document.getElementById('year').value = "";
   let crimeType = document.getElementById('crime').value = "";

   let div = document.querySelector('div');
   let ul = document.querySelector('ul');
   div.remove(ul);





   



 }









///getApiData(2017,'violent-crime');
