//Station is a array of a name, a capacity, and a venue type
const stations = [
  ["Big Bear Donair", 10, "restaurant"],
  ["Bright Lights Elementary", 50, "school"],
  ["Moose Mountain Community Centre", 45, "community centre"],
];

//One way we could solve this is by initializing a new array within our function (let goodStations = []) and push the stations that meet the requirements to it as we loop through them.
//it must have a capacity of at least 20
//and be a school or community centre.
const chooseStations = function (stations) {
  let goodStations = [];
  for (const station of stations) {
    //console.log(station);
    const capacity = station[1];
    //console.log(capacity);
    const venueType = station[2];
    //console.log(venueType);
    if (capacity >= 20 && (venueType === "school" || "community center")) {
      //console.log(station);
      goodStations.push(station[0]);
    }
  }
  return goodStations;
};

console.log(chooseStations(stations));
