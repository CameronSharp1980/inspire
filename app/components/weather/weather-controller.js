function WeatherController() {
	var wc = this;
	var weatherService = new WeatherService();

	function drawWeather(weatherData) {
		// console.log("draw weather started")
		console.log("Weather Data: ", weatherData)
		var weatherElem = document.getElementById('weather')
		weatherElem.innerHTML = `
		<span class="weather-span">${weatherData.name}: </span><span class="weather-span">${weatherData.main.temp}&degF </span><span><img src="http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png"></span>
			`
	}

	weatherService.getWeather(drawWeather)

	// weatherService.getWeather(function (weather) {
	// 	console.log(weather);
	// 	//What can you do with this weather object?
	// })

}
