const request = require('request');
//const fs = require('fs');

let breedName = process.argv[2];

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const breed = JSON.parse(body);
    if (error) {
      callback(`Not able to fulfill request: ${error}`,null);
    } else if (breed[0]) {
      callback(null,breed[0].description);
    } else {
      console.log(`Unable to find breed: ${breedName}`);
    }
  });
};

module.exports = { fetchBreedDescription };

