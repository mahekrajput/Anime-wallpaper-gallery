function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    document.getElementById("geoResult").innerText =
      "Your browser does not support location.";
  }
}

function showPosition(position) {
  document.getElementById("geoResult").innerHTML =
    "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}
