'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Scroll = require('./hook/Scroll');

var _Scroll2 = _interopRequireDefault(_Scroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ScrolledToEdge = function ScrolledToEdge(props) {
  var container = (0, _Scroll2.default)(props.onChange, props.offset);
  var firstChild = _react2.default.Children.toArray(props.children)[0];
  if (!firstChild) return null;

  return _react2.default.cloneElement(firstChild, {
    ref: container
  });
};

ScrolledToEdge.propTypes = {
  offset: _propTypes2.default.number,
  onChange: _propTypes2.default.func.isRequired
};

exports.default = ScrolledToEdge;