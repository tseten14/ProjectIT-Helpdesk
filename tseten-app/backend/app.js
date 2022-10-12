var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var contactRouter = require("./routes/api/contact");
var authRouter = require("./routes/api/auth");
var seedRouter = require("./routes/api/seed");

var app = express();
const PORT = process.env.PORT || 5000; //setting port..
const server = app.listen(PORT, () => console.log("Serving on port " + PORT));
const config = require("config");
const jwt = require("jsonwebtoken");
const io = require("socket.io")(server);

const { v4: uuid } = require("uuid");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization"
  );

  // Pass to next layer of middleware
  next();
});

app.use(authRouter);
app.use(contactRouter);
app.use(seedRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: err });
});

const mongoose = require("mongoose");
mongoose
  .connect(config.get("mongoURI"), { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(console.log);

io.on("connection", (socket) => {
  //Get the chatID of the user
  chatID = socket.handshake.query.chatID;
  socket.join(chatID);

  //Leave the room if the user closes the socket
  socket.on("disconnect", () => {
    socket.leave(chatID);
  });

  //Send message to only a particular user
  socket.on("send_message", (message) => {
    receiverChatID = message.receiverChatID;
    senderChatID = message.senderChatID;
    content = message.content;

    //Send message to only that particular room
    socket.in(receiverChatID).emit("receive_message", {
      content: content,
      senderChatID: senderChatID,
      receiverChatID: receiverChatID,
    });
  });
});

module.exports = app;
