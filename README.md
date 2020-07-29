# CrimeAPI
This repo is for my project for the 2020 May JavaScript Code Louisville Session

To be able to run my project on your machine, you will need to:
1)git clone the repo onto your local machine
2)My project runs on an express server, so you will need node and express.
3)When the project is downloaded run "node server.js" to get the project running.
4)It should be running on port 2000, so "localhost: 2000" on your machine.

Type localhost:2000 into your broswers search bar, and the project should load.
When it loads, you will be able to choose a state, a year, and a type of crime from 3 drop down select bars. When choosing the 3 options of your choice, click the submit button.
This will call a function that returns the crime data you chose via an Ajax call. You can also reset the values instead of refeshing the page to look up new stats. Currently all 50 states are functional and the year range is 1995 - 2017. There are only 4 different types of crime available currently. There is also a countdown clock that counts down the days until next year, when another of crime data will be reported.


For this project, my goal is/was to make a very simple website that makes an API to the FBI's offical crime database and then display that data in an HTML file users can access.
So the requirements I chose were 
1)Retrieve data from an external API and display data in your app (such as with fetch() or with AJAX)
2)Calculate and display data based on an external factor (ex: get the current date, and display how many days remaining until some event)
3)Create a form and save the response (on click of Submit button) to an external file or API


