# Weather_App
Simple weather application using HTML, CSS and JavaScript.

API's used:

	1. Geolocation API - to detect location - Geolocation Web API
	2. Weather API - to get data about weather of a location - OpenWeatherMap API

Files created:

	1. index.html - A markup file
	2. weatherApp.js - Actual work done
	3. design.css - Look and feel

**Creating the markup HTML file:**
	
	1. Link CSS file to HTML file.
	 
	2. Inside <body></body> create as many elements with respective id's as needed
       1. Location
	   2. Weather
	   3. Temperature
	   4. Feels like
	   5. Minimum and maximum temperature
	   6. Humidity
     
	3. Link JS file to HTML file.
	
	4. Markup file done.


**Creating the JS File:**

1. Getting the Location Data:
    Now, API key assigned:
    
	  1. Declared a variable and assigned the url to the API to it.
	  2. Declared another variable and assigned the API key to it.
	  
    Called the geolocation API.

2. Getting the Weather Data:
      
    1.     Declared two variables latitude and longitude and assigned the values.
    2.     Making the API request:
	         1. URL created.
	         2. Date fetched and formatted.

3. Called main function getWeather().

**Styling in CSS:**
Anything!
