const http = require("http");
const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.end("Hello World");
      break;

    case "/aboutus":
      res.end("Hello World");
      break;

    default:
      res.end(`
        <h1> OOPS !!! </h1>
        <p>You have requested for any wrong address </p>
        <a href = "/">Get back to HOME Page</a>
      `);
      break;
  }
});
server.listen(3000);