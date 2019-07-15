"use strict";


//use api OpenWeatherMap - openweathermap.org
searchButton.addEventListener( 'click', searchWeather );

function searchWeather() {
    loadingText.style.display = 'block';
    weatherContainer.style.display = 'none';

    // console.log(searchCity.value);
   
    let cityName = searchCity.value;

    if(cityName.trim().length === 0 ){
        return alert('To get a weather prediction for your city please enter a city name')
    }
    const http = new XMLHttpRequest();

    const apiKey = '059d1c6c58a9c610eb13f5f33a76e0cf'; 
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;
    const method = 'GET';

    http.open(method, url);
    http.onreadystatechange = () => {
        if(http.readyState == XMLHttpRequest.DONE && http.status === 200){
            let data = JSON.parse(http.responseText);
            // let weatherData = new Weather(cityName, data.weather[0].description.toUpperCase());
            let weatherData = new Weather(cityName, data.weather[0].description);
            weatherData.temp = data.main.temp;
            console.log(weatherData);
            updateWeather(weatherData);
        } else if (http.readyState === XMLHttpRequest.Done) {
                alert('Something went wrong');
        } 
    };
    http.send();
}


function updateWeather(weatherData) {
    weatherCity.textContent = weatherData.cityName;
    weatherDesc.textContent = weatherData.desc;
    weatherTemp.textContent = weatherData.temp  + '  ˚C ';
    loadingText.style.display = 'none';
    weatherContainer.style.display = 'block';

    tempSwitch.addEventListener( 'click', toggleTemp );

    //toggle temp unit
    function toggleTemp(){
        if(tempUnitToggle.checked === false){
            weatherTemp.textContent = weatherData.temp + '  ˚C ';
        } else {
            weatherTemp.textContent = (weatherData.temp * 1.8 +32).toFixed(2) + ' ˚F';
        }
    }
}

