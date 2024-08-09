const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const ACTIONS = require("./Actions");
const compileRun = require("./utils/compileRun");

const server = http.createServer(app);

const io = new Server(server);

const userSocketMap = {};
const getAllConnectedClients = (roomId) => {
  return Array.from(io.sockets.adapter.rooms.get(roomId) || []).map(
    (socketId) => {
      return {
        socketId,
        username: userSocketMap[socketId],
      };
    }
  );
};

io.on("connection", (socket) => {
  // console.log('Socket connected', socket.id);
  socket.on(ACTIONS.JOIN, ({ roomId, username }) => {
    userSocketMap[socket.id] = username;
    socket.join(roomId);
    const clients = getAllConnectedClients(roomId);
    console.log("Joined : ", roomId, username, clients);
    // notify that new user join
    clients.forEach(({ socketId }) => {
      io.to(socketId).emit(ACTIONS.JOINED, {
        clients,
        username,
        socketId: socket.id,
      });
    });
  });

  // sync the code
  socket.on(ACTIONS.CODE_CHANGE, ({ roomId, code }) => {
    console.log("CHANGE_CODE", roomId, code)
    socket.in(roomId).emit(ACTIONS.CODE_CHANGE, { newCode: code });
  });
  // when new user join the room all the code which are there are also shows on that persons editor
  socket.on(ACTIONS.SYNC_CODE_REQ, ({ socketId }) => {
    io.to(socketId).emit(ACTIONS.SYNC_CODE_RES);
  });


  socket.on(ACTIONS.RUN_CODE, async ({ roomId, code, language }) => {
    const output = await compileRun(code, language);
    io.to(roomId).emit(ACTIONS.RUN_CODE, { output });
  })

  socket.on(ACTIONS.CHANGE_LANG, ({ roomId, language }) => {
    io.to(roomId).emit(ACTIONS.CHANGE_LANG, { language });
  })

  // leave room
  socket.on("disconnecting", () => {
    const rooms = [...socket.rooms];
    // leave all the room
    rooms.forEach((roomId) => {
      socket.in(roomId).emit(ACTIONS.DISCONNECTED, {
        socketId: socket.id,
        username: userSocketMap[socket.id],
      });
    });

    delete userSocketMap[socket.id];
    socket.leave();
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server is runnint on port ${PORT}`));
