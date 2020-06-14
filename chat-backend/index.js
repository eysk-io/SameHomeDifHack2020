// Express initializes app to be a function handler that you can supply to an HTTP server (as seen in line 2).
// We define a route handler / that gets called when we hit our website home.
// We make the http server listen on port 3000.
var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http); // added after installing socket.io

/*
app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});*/

io.emit("some event", {
  someProperty: "some value",
  otherProperty: "other value",
}); // This will emit the event to all connected sockets

io.on("connection", function (socket) {
  socket.on("chat message", function (msg) {
    io.emit("chat message", msg);
  });
});

io.on("connection", function (socket) {
  //added to listen on connection event for incoming sockets
  console.log("a user connected");
  socket.on("chat message", function (msg) {
    console.log("message: " + msg);
  });
  socket.on("disconnect", function () {
    console.log("user disconnected");
  });
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

http.listen(3000, function () {
  console.log("listening on *:3000");
});

/* Socket.IO is composed of two parts:

A server that integrates with (or mounts on) the Node.JS HTTP Server: socket.io
A client library that loads on the browser side: socket.io-client

npm install socket.io
*/
