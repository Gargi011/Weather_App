function weatherApp() {
    let location = document.getElementById("location");
    let temperature = document.getElementById("temperature");
    let weather = document.getElementById("weather");

    let api = "https://api.openweathermap.org/data/2.5/weather?";
    const apiKey = "76d8b81d03c90b4303c3d8508e4dcdf5";

    navigator.geolocation.getCurrentPosition(success, error);

    function success(position) {
        //console.log(position);
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;

        //location.textContent = '';
        //location.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
        
        /* Getting the weather info.*/
        let url = weatherApi + "lat=" + latitude + "&lon=" + longitude + "&appid=" + weatherApiKey + "&units=imperial";

        fetch(url).then (response => response.json())
                  .then (data => {
                      console.log(data);
                      let temp = (data.main.temp - 32) * 5 / 9;
                      temperature.innerHTML = "Temperature is: " + Math.round(temp) + " °C";
                      location.innerHTML = "Your Location: " + data.name;
                      weather.innerHTML = "The weather is: " + data.weather[0].main;
                  })
    }

    function error(e) {
        location.textContent = `ERROR!(${e.code}): ${e.message}`;
        temperature.innerHTML = "Location not found!";
    }
}

weatherApp();
