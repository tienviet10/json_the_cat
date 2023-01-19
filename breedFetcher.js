const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    //callback(error, body);
    if (body !== undefined && JSON.parse(body).length > 0) {
      const data = JSON.parse(body);
      callback(error, data[0].description);
    } else {
      callback(error, null);
    }
  });
};

module.exports = { fetchBreedDescription };