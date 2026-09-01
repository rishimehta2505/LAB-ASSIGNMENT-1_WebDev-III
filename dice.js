// dice.js
// A random dice generator using the crypto module (1-6)

const crypto = require("crypto");

function rollDice() {
  // crypto.randomInt(min, max) -> max is exclusive
  return crypto.randomInt(1, 7);
}

const numberOfRolls = 5;

for (let i = 1; i <= numberOfRolls; i++) {
  const result = rollDice();
  console.log(`Dice Rolled: ${result}`);
}
