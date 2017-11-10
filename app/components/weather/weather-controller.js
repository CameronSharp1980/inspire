function WeatherController() {
	var wc = this;
	var weatherService = new WeatherService();

	function drawWeather(weatherData) {
		console.log("draw weather started")
		console.log("Weather Data: ", weatherData)
		var weatherElem = document.getElementById('weather')
		weatherElem.innerHTML = `<p>Current Temp: ${weatherData.main.temp}</p>`
	}

	weatherService.getWeather(drawWeather)

	// weatherService.getWeather(function (weather) {
	// 	console.log(weather);
	// 	//What can you do with this weather object?
	// })

}
