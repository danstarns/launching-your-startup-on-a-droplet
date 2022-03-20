const app = require("./app");

async function main() {
  await app.listen();

  console.log("Server Online");
}

main();
