const args = process.argv.slice(2);

const request = require('request');

request(`https://api.thecatapi.com/v1/breds/search?q=${args[0]}`, (error, response, body) => {
  // console.log(error);
  // console.log(response.statusCode);
  if (error === null && response.statusCode === 200) {
    console.log("Breed not found!");
    process.exit();
  }

  if (error === null && response.statusCode === 404) {
    console.log("Request was unsuccessful!");
    process.exit();
  }

  const data = JSON.parse(body);
  // console.log(data);
  // console.log(typeof data);
  console.log(data[0].description);
});