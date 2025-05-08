**[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/U_QSKwKq)**

<h1>Name:Gal Drimer  ID:315871491</h1>
<p> Email: galdr@edu.jmc.ac.il</p>

<h1>Name:Samuel  ID:33786685</h1>
<p>Email: samualwa@eedu.jmc.ac.il</p>

<h1>map of the program:</h1>
<pre>
->.idea
->ex2
     ->public
       ->cities.json
       ->favicon.ico
       ->index.html
       ->logo192.png
       ->logo512.png
       ->robots.txt
     ->src
       ->components
         ->CityForm.js
         ->CityItem.js
         ->CityList.js
         ->EditCity.js
         ->NavBar.js
       ->pages
         ->About.js
         ->Favorites.js
         ->Home.js
       ->services
         ->CountryService.js
         ->WeatherService.js
       ->App.js
       ->App.test.js
       ->index.css
       ->index.js
       ->logo.svg
       ->reportWebVitals.js
       ->setupTests.js
     ->CommandList.md
     ->package.json
     ->package-lock.json
-> README.md
</pre> 

<h2>How to start the program</h2>
<p>
to run the program first time the user need to run command install npm
in the Terminal of IDEA after the folder node Modules is made he may continue

in the ex2 folder there a md file with the name CommandList there 
the user can click on command  `npm start`  to start running the program
</p>

<h2>what is this program</h2>
<p>
this is a dynamic program to run and manage a list of cities that is on
a sit. 
every city shown in alphabetical order of the name of the city by marking
a city as favorite and then going to favorite tab the user will be able 
see the weather forecast for the next 7 days in the city he chosen

the user may add new cities if he does so he 
needs to write the name of the city choose the county from the 
dropdown list enter Latitude and Longitude of the city

he can search cities by name 0f the city or the country

every city in the list can be edited by clicking on the edit button
every city can also be deleted by clicking on the delete button
also every city can be marked as favorite 

there three tabs in the top of the sit that opens when the program runs
Home , About & Favorites

Home: this is the homepage here  the list of cities can be found
the user may add delete or edit cities with the list
to edit the Home page code go to Home.js file in the pages folder

About: here is the about of the site
correctly it shows the massage:
"This React app displays a list of cities and shows 7-day 
weather forecasts for each one using public APIs"
to edit this massage there is a need to edit the code in About.js 

Favorites:here the user will find all of the cities that he marked as
favorite blow every city there is a button by click on this button
the site will show the Forecast for the next 7 days 

we get the forecast from https://www.7timer.info/
</p>

