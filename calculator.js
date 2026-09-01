// calculator.js
// A simple CLI-based calculator using process.argv
// Usage: node calculator.js <operation> <num1> <num2>
// Example: node calculator.js add 10 5

const operation = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

if (!operation || isNaN(num1) || isNaN(num2)) {
  console.log("Invalid input!");
  console.log("Usage: node calculator.js <add|sub|mul|div> <num1> <num2>");
  process.exit(1);
}

let result;

switch (operation) {
  case "add":
    result = num1 + num2;
    break;

  case "sub":
    result = num1 - num2;
    break;

  case "mul":
    result = num1 * num2;
    break;

  case "div":
    if (num2 === 0) {
      console.log("Error: Division by zero is not allowed.");
      process.exit(1);
    }
    result = num1 / num2;
    break;

  default:
    console.log("Invalid operation! Use: add, sub, mul, div");
    process.exit(1);
}

console.log(`Result: ${result}`);
