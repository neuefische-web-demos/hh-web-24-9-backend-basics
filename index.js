import { server } from "./server.js";

const port = 3000;

server.listen(port, () => {
  console.log(`Server running very smoothly at http://localhost:${port}`);
});
