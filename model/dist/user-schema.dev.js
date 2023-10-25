"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var userSchema = new _mongoose["default"].Schema({
  firstname: {
    type: String,
    require: true,
    trim: true,
    min: 5,
    max: 20
  },
  lastname: {
    type: String,
    require: true,
    trim: true,
    min: 5,
    max: 20
  },
  username: {
    type: String,
    require: true,
    trim: true,
    unique: true,
    index: true,
    lowercase: true
  },
  email: {
    type: String,
    require: true,
    trim: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    require: true
  },
  phone: {
    type: String,
    require: true
  }
});

var user = _mongoose["default"].model('user', userSchema);

var _default = user;
exports["default"] = _default;