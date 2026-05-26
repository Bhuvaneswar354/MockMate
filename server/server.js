require('dns').setDefaultResultOrder('ipv4first');

const express = require("express");

const cors = require("cors");

const mongoose = require("mongoose");

require("dotenv").config();

const http = require("http");



const authRoutes = require("./routes/authRoutes");

const compilerRoutes = require("./routes/compilerRoutes");

const setupSocket = require("./socket");



const app = express();

const server = http.createServer(app);




// SOCKET.IO

setupSocket(server);




// MIDDLEWARE

app.use(cors());

app.use(express.json());




// DATABASE

mongoose.connect(process.env.MONGO_URI)

.then(() => {

    console.log("MongoDB Connected");

})

.catch((err) => {

    console.log(err);

});




// ROUTES

app.use("/api/auth", authRoutes);

app.use("/api/compiler", compilerRoutes);




// TEST ROUTE

app.get("/", (req, res) => {

    res.send("MockMate Server Running");

});




// PORT

const PORT = process.env.PORT || 5000;




server.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});