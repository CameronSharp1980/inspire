function WeatherService() {
	var bcw = '//bcw-getter.herokuapp.com/?url=';
	var baseUrl = 'http://api.openweathermap.org/data/2.5/weather?q=boise'
	var apiId = '&&APPID=bd82255fd0a21fa1238699b9eda2ee35'
	var unit = '&units=imperial';
	var suffix = '&degF'
	// &degF
	// var kelvin = '';
	// var imperial = '&units=imperial';
	// var celsius = '&units=metric';
	// var apiUrl = bcw + encodeURIComponent(baseUrl);

	this.getWeather = function (callWhenDone) {
		var requestUrl = baseUrl + unit + apiId
		var apiUrl = bcw + encodeURIComponent(requestUrl)
		$.get(apiUrl, function (res) {
			res = JSON.parse(res)
			localStorage.setItem('weather', JSON.stringify(res))
			// HEY FUN FACT 
			// Have you ever wanted to know the temperature measured in kelvin?
			// You should probably convert the temperature data
			res.main.temp = `${res.main.temp.toFixed(1)}${suffix}`
			// res.main.temp = (9 / 5 * (res.main.temp - 273) + 32).toFixed(1)
			switch (unit) {
				case '&units=imperial':
					unit = '&units=metric';
					suffix = '&degC';
					break;
				case '&units=metric':
					unit = '';
					suffix = '&degK';
					break;
				case '':
					unit = '&units=imperial';
					suffix = '&degF';
					break;
			}
			callWhenDone(res);
		})
	}
}
