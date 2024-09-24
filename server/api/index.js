import express from "express";
import http from "http";
import { Server } from "socket.io";
import { setupSocket } from "../socket/socket.js"; 

const app = express();

const server = http.createServer(app);
const io = new Server(server);

setupSocket(io);

app.get("/", (req, res) => res.send("Express on Vercel"));
app.listen(3000, () => console.log("Server ready on port 3000."));