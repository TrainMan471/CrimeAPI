const div = document.querySelector('div');
const li = document.createElement('li');
div.appendChild(li);
console.log("Hello this works!");

var newRequest = new XMLHttpRequest();
CDE_API = 'https://api.usa.gov/crime/fbi/sapi/api/summarized/state/KY/violent-crime/2017/2018?API_KEY=uj7JC6XTYj9czDPySfqJrIiCc0y8uFgNHa6KkJQB';
newRequest.open('GET', CDE_API);

newRequest.onreadystatechange = function() {

      if (newRequest.readyState === 4 && newRequest.status === 200 ) {

        var crimeStats = JSON.parse(newRequest.responseText);
      //  var statusHTML = '<ul class="bulledted">';

        console.log(crimeStats);


      }
      else {
        console.log("request not received yet");
      }

}
newRequest.send();
console.log(newRequest);
