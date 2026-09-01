// app.js
// Demonstrates reusing the custom isEven and logger modules

const isEven = require("./modules/isEven");
const log = require("./modules/logger");

log("Starting module demo...");

const numbers = [2, 5, 10, 7];

numbers.forEach((num) => {
  if (isEven(num)) {
    log(`${num} is Even`);
  } else {
    log(`${num} is Odd`);
  }
});

log("Module demo finished.");
