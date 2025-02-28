import { createServer } from "node:http";

export const server = createServer((request, response) => {
  if (request.url === "/hello") {
    response.statusCode = 200;
    response.end("Hello World");
  } else if (request.url === "/bye") {
    response.statusCode = 200;
    response.end("Bye World");
  } else {
    response.statusCode = 404;
    response.end("Not Found");
  }
});
