// index.js
const {
  fetchMyIP,
  fetchCoordsByIP,
  fetchISSFlyOverTimes,
  nextISSTimesForMyLocation,
} = require("./iss");

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log("It worked! Returned IP:", ip);
// });

// fetchCoordsByIP("42", (error, data) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   if (!data.success){
//     console.log(`It didn't work! Error: Success status was ${data.success}. Server message says: ${data.message} when fetching for IP ${data.ip}`)
//     return
//   }

//   console.log("It worked! Returned address:", data);
// });

// const coords = { latitude: "a", longitude: "-123.1207375" };
// fetchISSFlyOverTimes(coords, (error, data) => {
//   if (error) {
//     console.log("Error received: " + error.message);
//     return;
//   }

//   if (!data) {
//     console.log("Invalid coordinates");
//     return;
//   }

//   console.log(data);
// });

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }

  if (!passTimes) {
    console.log("Error getting times");
    return;
  }

  // success, print out the deets!
  for (const time of passTimes) {
    const date = new Date(time.risetime * 1000);
    console.log(`Next pass at ${date} for ${time.duration} seconds!`);
  }
});
