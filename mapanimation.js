const accessToken =
  "pk.eyJ1IjoiY2NpYXNjaGkiLCJhIjoiY2w4MmhoaGR1MDBnaTN1bXBrd3NvN21pciJ9.X-7HbJisVdzE1aKDf56bAA";

mapboxgl.accessToken = accessToken;

const busIds = {};

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [-71.104081, 42.365554],
  zoom: 12,
});

//Adds a bus if a new one comes on the line
function addBus(bus) {
  //Make bus marker random color
  var randomColor = Math.floor(Math.random() * 16777215)
    .toString(16)
    .toUpperCase();
  const marker = new mapboxgl.Marker({ color: `#${randomColor}` })
    .setLngLat([bus.attributes.longitude, bus.attributes.latitude])
    .addTo(map);
  //Add busid and marker to dictionary for easy lookup later
  busIds[bus.id] = marker;
}

//Simple function to move a marker (bus)
function moveBus(bus, marker) {
  marker.setLngLat([bus.attributes.longitude, bus.attributes.latitude]);
}

async function updateBuses() {
  const buses = await getBusLocations();
  console.log(buses);
  //Find if bus exists ? move bus : add bus
  buses.forEach((bus) => {
    if (bus.id in busIds) {
      moveBus(bus, busIds[bus.id]);
    } else {
      addBus(bus);
    }
  });
  setTimeout(updateBuses, 15000);
}

// Request bus data from MBTA
async function getBusLocations() {
  const url = "https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip";
  const response = await fetch(url);
  const json = await response.json();
  return json.data;
}
