fetch('https://geo.ipify.org/api/v1?apiKey=at_4RYApNLZvu4yMmr6NWmWzco7lmXVz&ipAddress=')
  .then(response => response.json())
  .then(data => initMap(data.location.lat, data.location.lng))

// This example adds a marker to indicate the position of Bondi Beach in Sydney,
// Australia.
function initMap(lat, lng) {
  const map = new google.maps.Map(document.querySelector(".map"), {
    zoom: 4,
    center: { lat, lng },
  });
  const image =
    "./images/icon-location.svg";
  const beachMarker = new google.maps.Marker({
    position: { lat, lng},
    map,
    icon: image,
  });
}