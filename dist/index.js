'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Scroll = require('./Scroll');

Object.defineProperty(exports, 'ScrolledToEdge', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Scroll).default;
  }
});

var _hook = require('./hook');

Object.defineProperty(exports, 'useScrolledToEdge', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_hook).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }