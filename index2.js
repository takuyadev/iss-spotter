const { nextISSTimesForMyLocation, printPassTimes } = require("./iss_promised");

nextISSTimesForMyLocation()
  .then(printPassTimes)
  .catch((err) => console.log("error"));
