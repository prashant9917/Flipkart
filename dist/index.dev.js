"use strict";

var _express = _interopRequireDefault(require("express"));

var _db = _interopRequireDefault(require("./database/db.js"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _default = _interopRequireDefault(require("./default.js"));

var _route = _interopRequireDefault(require("./routes/route.js"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();

_dotenv["default"].config();

app.use((0, _cors["default"])());
app.use(_bodyParser["default"].json({
  extended: true
}));
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use('/', _route["default"]);
var PORT = 8000;
var USERNAME = process.env.DB_USERNAME;
var PASSWORD = process.env.BD_PASSWORD;
(0, _db["default"])(USERNAME, PASSWORD);
app.listen(PORT, function () {
  return console.log("Server is running successfully on Port ".concat(PORT));
});
(0, _default["default"])();