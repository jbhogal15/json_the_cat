const request = require('request');
//const fs = require('fs');

let input = process.argv[2];

const breedFetcher = function(input) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${input}`, (error, response, body) => {
    const data = JSON.parse(body);
    if (error) {
      console.log('error:', error);
    } else if (data[0]) {
      console.log('body:', data[0].description);
    } else {
      console.log(`Unable to find breed: ${input}`);
    }
  });
};

console.log(breedFetcher(input));