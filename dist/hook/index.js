'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var useScrolledToEdge = function useScrolledToEdge(callback, offsetValue) {
  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      x = _useState2[0],
      setX = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      y = _useState4[0],
      setY = _useState4[1];

  var offset = offsetValue ? offsetValue : 0;
  var container = (0, _react.useRef)(null);

  (0, _react.useEffect)(function () {

    if (container.current != null) {
      container.current.addEventListener('scroll', handleScroll);
    } else {
      window.addEventListener('scroll', handleScroll);
    }
    window.addEventListener('resize', handleScroll);

    handleScroll();

    return function () {
      if (container.current != null) {
        container.current.removeEventListener('scroll', handleScroll);
      } else {
        window.removeEventListener('scroll', handleScroll);
      }
      window.removeEventListener('resize', handleScroll);
    };
  });

  (0, _react.useEffect)(function () {
    return callback({ x: x, y: y });
  }, [x, y]);

  var handleScroll = function handleScroll() {
    var containerHeight = document.body.scrollHeight;
    var containerWidth = document.body.scrollWidth;
    var scrollPositionX = window.scrollX;
    var scrollPositionY = window.scrollY;
    var wrapperHeight = document.body.offsetHeight;
    var wrapperWidth = document.body.offsetWidth;

    if (container.current != null) {
      containerHeight = container.current.scrollHeight;
      containerWidth = container.current.scrollWidth;
      scrollPositionX = container.current.scrollLeft;
      scrollPositionY = container.current.scrollTop;
      wrapperHeight = container.current.offsetHeight;
      wrapperWidth = container.current.offsetWidth;
    }
    if (containerWidth > wrapperWidth) {
      if (scrollPositionX <= 0 + offset) {
        setX('start');
      } else if (scrollPositionX + wrapperWidth + offset >= containerWidth - 1) {
        setX('end');
      } else {
        setX('middle');
      }
    } else {
      setX(null);
    }

    if (containerHeight > wrapperHeight) {
      if (scrollPositionY <= 0 + offset) {
        setY('start');
      } else if (scrollPositionY + wrapperHeight + offset >= containerHeight - 1) {
        setY('end');
      } else {
        setY('middle');
      }
    } else {
      setY(null);
    }
  };

  return container;
};

exports.default = useScrolledToEdge;