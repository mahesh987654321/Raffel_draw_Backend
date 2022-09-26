const http = require("http");
const app = require("./app/app");


const server = http.createServer(app);
const port = process.env.PORT || 5000;
server.listen(8000, () => {
  console.log(`Server is listening port on 8000`);
});
