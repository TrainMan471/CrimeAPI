var h2 = document.querySelector('h2');
var p = document.querySelector('p');


//The code below creates a live clock that changes color every second and countdowns until next year..where more crimes will be recorded!
function digitalClock() {

  var newYearTimer = new Date("Jan 1, 2021 00:00:00").getTime();


  var countdown = setInterval(function() {


    var currentDate = new Date().getTime();


    var distance = newYearTimer - currentDate;


    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.getElementById("demo").innerHTML = `${days} days ${hours} hours
     ${minutes} minutes ${seconds} seconds until the new crime stats!`;


    if (distance < 0) {
      clearInterval(countdown);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);





}

function getRandomColor() {
  var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

function setRandomColor() {
  p.style.color = getRandomColor();
}

function timeForNewStats() {

}

setInterval(setRandomColor,1000);
setInterval(digitalClock, 500);


//The following code makes an Ajax request to the url specified, and then irritates over the data and displays in index.html
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
          const h3 = document.querySelector('h3').innerHTML = `Number of Violent Crimes According to Each Originating Agency during the year : ${year}`;
          const div = document.querySelector('div');
          const ul  = document.createElement('ul');


      ul.innerHTML =  ` <li>Originating Agency: ${crimeStats.results[i].ori}</li>
                        <li>Type of Offense: ${crimeStats.results[i].offense}</li>
                        <li>Actual ${crimeStats.results[i].offense}s committed : ${crimeStats.results[i].actual}</li>
                        <li>${crimeStats.results[i].offense}s that were cleared : ${crimeStats.results[i].cleared}</li>`;
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


//This function creates an button onclick event that lets the user choose the state, year, and type of crime they wish to view
 function askUser(){
   let state = document.getElementById('state').value;
   let year = document.getElementById('year').value;
   let actualYear = parseInt(year, 10);
   let crimeType = document.getElementById('crime').value;
   console.log(state, actualYear, crimeType);



   getApiData(state,actualYear,crimeType);

 }

//And this function lets the user reset the values
 function resetValues() {
   let state = document.getElementById('state').value = "";
   let year = document.getElementById('year').value = "";
   let crimeType = document.getElementById('crime').value = "";

   let div = document.querySelector('div');
   div.innerHTML = "";









 }









///getApiData(2017,'violent-crime');
