# CrimeAPI
This repo is for my project for the 2020 May JavaScript Code Louisville Session

My goal for this project was to make a simple website that calls a third party API and displays data from that api on a webpage.It is a Crime API simple webpage that lets you choose the state, the year, and the type of crime you wish to view. When the API is called, the page will be filled with unordered list elements that list the type of offense and the number of offenses per ORI. (According to the FBI's Crime Data Explorer's Glossary of Terms, an ORI is A unique nine-character National Crime Information Center (NCIC) ORI that has been assigned to each LEA. The NCIC assigns all ORI numbers to any agency that is going to be participating in Uniform Crime Reporting.)


To be able to run my project on your machine, you will need to:


1)git clone the repo onto your local machine

2)My project runs on an express server, so you will need node and express.

3)When the project is downloaded run "node server.js" to get the project running.

4)It should be running on port 2000, so "localhost: 2000" on your machine.

5)Type localhost:2000 into your web browser and the site should load.



The requirements I chose for this project are as follows:

1)Retrieve data from an external API and display data in your app (such as with fetch() or with AJAX)

2)Create a form and save the response (on click of Submit button) to an external file or API

3)Calculate and display data based on an external factor (ex: get the current date, and display how many days remaining until some event)


I implemented these requirements into my project by adding these features to the site:

a)Allows user to select and submit parameters to be used in API lookup

b)Fetches Crime data from 3rd party API

c)Creates dynamic countdown timer to the next year



NOTES/POSSIBLE BUGS/FUTURE UPDATES:
In the future I plan to make this much more attractive looking. The HTML and CSS structure and styling are not the greatest, since I focused mainly on Javascript this course. I
also would like to add a feature that displays a state's number of crimes all at once. (For example, KY has X amount of homicides during the year 2015 etc)

When the API is called, the data is displayed lower in the page than I want it to so you will have to scroll down a bit. I created a button at the top that will let you just jump right to it instead of scrolling, until I figure out how to display the data more appropriately.







