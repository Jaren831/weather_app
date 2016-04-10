var openweatherKet = "af0ba94d81149880f9d5d4a1ed5ba600";


function getLocation() {
  // Request location consent from user
  var display = document.getElementById('weather');
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    display.innerHTML = 'Geolocation is not supported by this browser.';
  }
};
