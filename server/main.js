import express from "express";
import Socket from "./services/SocketService";
import Startup from "./Startup";
import DbContext from "./db/DbConfig";

//create server & socketServer
const app = express();
const socketServer = require("http").createServer(app);
const io = require("socket.io")(socketServer);
const port = process.env.PORT;

//Establish Socket
Socket.setIO(io);
Startup.ConfigureGlobalMiddleware(app);
Startup.ConfigureRoutes(app);

//Connect to AtlasDB
DbContext.connect();

//Start Server
socketServer.listen(port, () => {
  console.log("Server running on port:", port);
});
