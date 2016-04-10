var getLocation = function(data) {
	var key = "af0ba94d81149880f9d5d4a1ed5ba600";
	var lat = data.lat;
	var lon = data.lon;
	var city = data.city;
	var country = data.country;
	var weather = "api.openweathermap.org/data/2.5/weather?lat=" + lat + "&" + lng + "&appid=" + key;
	getWeather = function(data) {
		var temp = data.main.temp;
		var icon = data.weather.icon;
		document.getElementById("weatherIcon").src = "http://openweathermap.org/img/w/" + icon + ".png"
		document.getElementById("temperatureBox").innerHTML = temp;
	};
	document.getElementById("location").innerHTML = city + " , " + country;
	$.getJSON(weather, getWeather);
};

$(document).ready(function() {
	$.getJSON("http://ip-api.com/json", getLocation);
});