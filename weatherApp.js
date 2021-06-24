function weatherApp() {
    let location = document.getElementById("location");
    let temperature = document.getElementById("temperature");
    let weather = document.getElementById("weather");
    let feels_like = document.getElementById("feels_like");
    let temp_min = document.getElementById("temp_min");
    let temp_max = document.getElementById("temp_max");
    let humidity = document.getElementById("humidity");

    let weatherApi = "https://api.openweathermap.org/data/2.5/weather?";
    const weatherApiKey = "76d8b81d03c90b4303c3d8508e4dcdf5";
    
    navigator.geolocation.getCurrentPosition(success, error);
    
    function success(position) {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;

        //location.textContent = '';
        //location.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;

        /* Getting the weather info.*/
        let url = weatherApi + "lat=" + latitude + "&lon=" + longitude + "&appid=" + weatherApiKey + "&units=imperial";

        fetch(url).then (response => response.json())
                  .then (data => {
                      //console.log(data);
                      let temp = (data.main.temp - 32) * 5 / 9;
                      temperature.innerHTML = "Temperature is " + Math.round(temp) + " °C";
                      location.innerHTML = "Your Location: " + data.name;
                      weather.innerHTML = data.weather[0].main;
                      //weather.innerHTML = data.weather[0].description;
                      
                      let ftemp = (data.main.feels_like - 32) * 5 / 9;
                      feels_like.innerHTML = "Feels like " + Math.round(ftemp) + " °C.";
                      let mintemp = (data.main.temp_min - 32) * 5 / 9;
                      temp_min.innerHTML = "Today's minimum temperature: " + Math.round(mintemp) + " °C.";
                      let maxtemp = (data.main.temp_max - 32) * 5 / 9;
                      temp_max.innerHTML = "Today's maximum temperature: " + Math.round(maxtemp) + " °C.";

                      humidity.innerHTML = "Humidity: " + data.main.humidity + "%.";
                  })
    }

    function error(e) {
        location.textContent = `ERROR!(${e.code}): ${e.message}`;
        temperature.innerHTML = "Location not found!";
    }
}

weatherApp();