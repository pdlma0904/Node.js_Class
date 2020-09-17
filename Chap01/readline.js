const readline = require("readline");
const { TLSSocket } = require("tls");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`what do you think of Node.js? `, (answer) => {
  console.log(`Thank you for your valuable feedback : ${answer}`);

  //rl.close();
});

rl.on("line", (input) => {
  console.log(`Received : ${input}`);
});
