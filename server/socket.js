const { Server } = require("socket.io");

const setupSocket = (server) => {

  const io = new Server(server, {

    cors: {

      origin: "*",

      methods: ["GET", "POST"],

    },

  });




  io.on("connection", (socket) => {

    console.log("User Connected:", socket.id);




    // JOIN ROOM

    socket.on("join-room", (data) => {

  socket.join(data.roomId);

  socket.roomId = data.roomId;

  socket.username = data.username;

  socket.to(data.roomId).emit("user-joined", {
    socketId: socket.id,
    username: data.username,
  });

  console.log(
    `${data.username} joined room ${data.roomId}`
  );

});




    // LIVE CHAT

    socket.on("send-message", (data) => {

      socket.to(data.roomId).emit(

        "receive-message",

        data

      );

    });




    // LIVE CODE

    socket.on("send-code", (data) => {

      socket.to(data.roomId).emit(

        "receive-code",

        data.code

      );

    });




    // VIDEO SIGNALING

    socket.on("sending-signal", (data) => {

      io.to(data.userToSignal).emit(

        "user-signal",

        {

          signal: data.signal,

          callerId: data.callerId,

        }

      );

    });




    socket.on("returning-signal", (data) => {

      io.to(data.callerId).emit(

        "receiving-returned-signal",

        {

          signal: data.signal,

          id: socket.id,

        }

      );

    });




    // DISCONNECT

    socket.on("disconnect", () => {

      console.log("Disconnected:", socket.id);

    });

  });

};

module.exports = setupSocket;