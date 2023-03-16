const request = require("request-promise-native");

const fetchMyIP = async () => {
  return request("https://api.ipify.org?format=json");
};

const fetchCoordsByIP = (body) => {
  return request(`http://ipwho.is/${JSON.parse(body).ip}`);
};

const fetchISSFlyOverTimes = (body) => {
  const { latitude, longitude } = JSON.parse(body);
  return request(
    `https://iss-flyover.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`
  );
};

const printPassTimes = (body) => {
  const { response } = JSON.parse(body);
  for (const time of response) {
    const date = new Date(time.risetime * 1000);
    console.log(`Next pass at ${date} for ${time.duration} seconds!`);
  }
};

const nextISSTimesForMyLocation = () => {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .catch((err) => {
      console.log("Error occured: " + err.message);
    });
};

module.exports = {
  fetchMyIP,
  fetchCoordsByIP,
  fetchISSFlyOverTimes,
  nextISSTimesForMyLocation,
  printPassTimes,
};
