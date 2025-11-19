// GEOLOCATION 

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    document.getElementById("geo").innerHTML =
      "Geolocation is not supported by your browser.";
  }
}

function showPosition(position) {
  document.getElementById("geo").innerHTML =
    "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}

// IMAGE PREVIEW 

function openPreview(src) {
  document.getElementById("preview-img").src = src;
  document.getElementById("preview-box").style.display = "block";
}

function closePreview() {
  document.getElementById("preview-box").style.display = "none";
}
