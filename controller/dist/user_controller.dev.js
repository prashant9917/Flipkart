"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _userSchema = _interopRequireDefault(require("../model/user-schema.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var userSignup = function userSignup(req, res) {
  var exist, user, newUser;
  return regeneratorRuntime.async(function userSignup$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(user.findOne({
            username: req.body.username
          }));

        case 3:
          exist = _context.sent;

          if (!exist) {
            _context.next = 6;
            break;
          }

          return _context.abrupt("return", res.status(401).json({
            message: 'username already exist'
          }));

        case 6:
          user = req.body;
          newUser = new _userSchema["default"](user);
          _context.next = 10;
          return regeneratorRuntime.awrap(newUser.save());

        case 10:
          res.status(200).json({
            message: user
          });
          _context.next = 16;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            message: _context.t0.message
          });

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 13]]);
};

var _default = userSignup;
exports["default"] = _default;