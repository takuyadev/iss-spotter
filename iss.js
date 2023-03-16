const request = require("request");
/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const fetchMyIP = function (callback) {
  // use request to fetch IP address from JSON API
  request("https://api.ipify.org?format=json", {}, (error, response, data) => {
    if (error) {
      callback(error, null);
      return;
    }
    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    callback(null, JSON.parse(data));
  });
};

const fetchCoordsByIP = (ip, callback) => {
  request(`http://ipwho.is/${ip}`, {}, (error, response, data) => {
    const res = JSON.parse(data);

    if (error) {
      callback(error, null);
      return;
    }

    callback(null, res);
  });
};

const fetchISSFlyOverTimes = function ({ latitude, longitude }, callback) {
  // ...
  request(
    `https://iss-flyover.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`,
    {},
    (error, response, data) => {
      if (error) {
        callback(error, null);
        return;
      }

      if (response.statusCode !== 200) {
        callback(null, null);
        return;
      }

      const res = JSON.parse(data);
      callback(null, res);
    }
  );
};

const nextISSTimesForMyLocation = function (callback) {
  // empty for now
};

module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };
