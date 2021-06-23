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

        location.textContent = '';
        location.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    }

    function error(e) {
        location.textContent = `ERROR!(${e.code}): ${e.message}`;
    }
}

weatherApp();
