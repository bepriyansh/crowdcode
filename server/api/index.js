import express from "express";
import { setupSocket } from "./socket.js"; // Adjust the path as needed

const app = express();

// This is a serverless function in Vercel
const handler = (req, res) => {
    // Handle HTTP requests
    if (req.method === "GET") {
        return res.send("Express on Vercel");
    }

    res.status(405).send("Method Not Allowed");
};

app.all("*", handler);

// Setting up Socket.IO will require an HTTP server
export default (req, res) => {
    // Call the Express handler
    const expressHandler = app(req, res);

    // If the request is for WebSocket, set up Socket.IO
    if (req.headers['upgrade'] === 'websocket') {
        const httpServer = require('http').createServer(app);
        setupSocket(httpServer);

        // Handle WebSocket connections
        httpServer.emit('request', req, res);
    }

    return expressHandler;
};
