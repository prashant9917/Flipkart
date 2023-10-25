"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authenticateSignup = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var URL = 'http://localhost:8000/signup';

var authenticateSignup = function authenticateSignup(data) {
  return regeneratorRuntime.async(function authenticateSignup$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].post("".concat(URL), data));

        case 3:
          return _context.abrupt("return", _context.sent);

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.log('Error while calling signup api', _context.t0);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
};

exports.authenticateSignup = authenticateSignup;