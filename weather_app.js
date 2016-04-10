var Geo = {};
var key = "af0ba94d81149880f9d5d4a1ed5ba600";
function getLocation() {
  // Request location consent from user
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    alert("Geolocation is not supported!");
  }
};

function error() {
	alert("Location not found...");
};

function success(position) {
	//Assigns latitude and latitude to Geo object.
	Geo.lat = position.coords.latitude;
	Geo.lng = position.coords.longitude;
};
var weather = "api.openweathermap.org/data/2.5/weather?lat=" + Geo.lat + "&" + Geo.lng + "&appid=" + key;
//Pulls data from openweather api.
$.ajax({
	url: weather,
	dataType: "jsonp",
	success: function(data) {
		//Get data.
		var temp = data["main"]["temp"];
		var city = data["name"];
		var country = data["sys"]["country"];
		var icon = data["weather"]["icon"];
	}
});
//Api gives kelvin. Converts to celsius and fahrenheit.
function convert(temp) {
	if (document.getElementById("fahrenheit").checked) {
		function convertF(temp) {
			var fTemp = temp * (9/5) - 459.67;
			document.getElementById("temperatureBox").innerHTML = fTemp;
		};
	} else if (document.getElementById("celsius").checked) {
		function convertC(temp) {
			var cTemp = temp - 273.15;
			document.getElementById("temperatureBox").innerHTML = cTemp;
		};
	}
};
document.getElementById("location").innerHTML = city + " , " + country;
document.getElementById("weatherIcon").src = "http://openweathermap.org/img/w/" + icon + ".png"



