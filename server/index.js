import express from "express";
import http from "http";
import { Server } from "socket.io";
import { setupSocket } from "./socket/socket.js";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

setupSocket(io);

app.get("/", (req, res) => res.send("Express on Render"));
app.get("/keepalive", (req, res) => {
  const time = new Date(Date.now()).toLocaleString();
  console.log(time, "Keep Alive Ping");
  res.send(`${time} : Hello from CrowdCode`);
});

const PORT = 8080;
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
