const busStops = [
  [77.13370141065725,11.025368036201053],
  [77.12032194103561,11.0250594702135],
  [77.09497357380714,11.017952938912483],
  [77.05240155294102,11.003630328588693],
  [77.03025723563567,11.00042870869229],
  [76.99695492866135,10.997395563095383],
  [76.96016105040925,10.995120892425765],
  [76.95566563573551,11.017184537710172],
];


mapboxgl.accessToken = 'pk.eyJ1Ijoic2VudGhpbGt1cHB1c3dhbXkiLCJhIjoiY2twbTlkMzBlMDQxYjJ2bXcwcG5xdnhzNCJ9.mmPcPQN_3raRRh8Q0S1kEw';


let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [77.05240155294102,11.003630328588693],
  zoom: 12,
});


var marker= new mapboxgl.Marker()
            .setLngLat([77.13370141065725,11.025368036201053])
            .addTo(map);
let counter = 0;
function move() {
  setTimeout(()=> {
    if (counter>=busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
    },1000);
}

if (typeof module !== 'undefined') {
  module.exports = { move };
}

