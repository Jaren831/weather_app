function getLocation(data) {
	var weather = "http://api.openweathermap.org/data/2.5/weather?lat=";
	var key = "af0ba94d81149880f9d5d4a1ed5ba600";
	var lat = data.lat;
	var lon = data.lon;
	var city = data.city;
	var country = data.country;
	weather = weather + lat + "&" + "lon=" + lon + "&appid=" + key;
	document.getElementById("location").innerHTML = city + " , " + country;
	function getWeather(data) {
		var temp = data.main.temp;
		var icon = data.weather[0].icon;
		if (document.getElementById("fahrenheit").checked) {
			temp = Math.floor(temp * (9/5) - 459.67);
			document.getElementById("temperatureBox").innerHTML = temp + "\u00B0" + " F";
		} else {
			temp = Math.floor(temp - 273.15);
			document.getElementById("temperatureBox").innerHTML = temp + "\u00B0" + " C";
		}
		document.getElementById("weatherIcon").src = "http://openweathermap.org/img/w/" + icon + ".png"
	};
	$.getJSON(weather, getWeather);

};

$(document).ready(function() {
	$.getJSON("http://ip-api.com/json", getLocation);
});

$("input").click(function() {
	$.getJSON("http://ip-api.com/json", getLocation);
});
