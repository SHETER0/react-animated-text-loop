"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var AnimatedText = function AnimatedText(_ref) {
  var latter = _ref.latter,
    fontSize = _ref.fontSize,
    background = _ref.background,
    textColor = _ref.textColor,
    latters = _ref.latters,
    fontWeight = _ref.fontWeight,
    AnimationLoopTime = _ref.AnimationLoopTime,
    characterAnimationSpeed = _ref.characterAnimationSpeed,
    AnimationType = _ref.AnimationType,
    hiddenOpacity = _ref.hiddenOpacity;
  var containerRef = (0, _react.useRef)(null);
  var isAnimatingRef = (0, _react.useRef)(false);
  (0, _react.useEffect)(function () {
    if (AnimationType == "One") {
      var container = containerRef.current;
      var children = container.children;
      var animationTimeout = null;
      var animatecharacters = function animatecharacters(first) {
        isAnimatingRef.current = true;
        var delay = 50;
        var _loop = function _loop(i) {
          var FirstText = children[i].children[0];
          var SecondText = children[i].children[1];
          var CurrentcharacterAnimationStart = null;
          var CurrentcharacterAnimationEnd = null;
          setTimeout(function () {
            if (first) {
              CurrentcharacterAnimationStart = FirstText;
              CurrentcharacterAnimationStart.style.color = "#6021d5";
              children[i >= 1 ? i - 1 : 0].children[0].style.color = "#fff";
              FirstText.style.transform = "translate(0px, 45px)";
              SecondText.style.transform = "translate(0px, 0px)";
              FirstText.style.opacity = "100";
              SecondText.style.opacity = "0";
              FirstText.style.transition = "all 0.1s cubic-bezier(0.91, -0.05, 0.68, 1.32) 0s";
              SecondText.style.transition = "all 0.1s cubic-bezier(0.91, -0.05, 0.68, 1.32) 0s";
              FirstText.textContent = latters[0][i];
            } else {
              CurrentcharacterAnimationEnd = SecondText;
              CurrentcharacterAnimationEnd.style.color = "#6021d5";
              children[i >= 1 ? i - 1 : 0].children[1].style.color = "#fff";
              SecondText.textContent = latters[1][i];
              FirstText.style.opacity = "0";
              SecondText.style.opacity = "100";
              SecondText.style.transform = "translate(0px, -50px)";
              FirstText.style.transform = "translate(0px, 0px)";
              FirstText.style.transition = "all 0.1s cubic-bezier(0.91, -0.05, 0.68, 1.32) 0s";
              SecondText.style.transition = "all 0.1s cubic-bezier(0.91, -0.05, 0.68, 1.32) 0s";
            }
            if (i === children.length - 1 && !first) {
              isAnimatingRef.current = false;
              CurrentcharacterAnimationEnd.style.color = "#fff";
              animationTimeout = setTimeout(function () {
                animatecharacters(true);
              }, AnimationLoopTime);
            } else if (i === children.length - 1 && first) {
              isAnimatingRef.current = false;
              CurrentcharacterAnimationStart.style.color = "#fff";
              animationTimeout = setTimeout(function () {
                animatecharacters(false);
              }, AnimationLoopTime);
            }
          }, delay);
          delay += characterAnimationSpeed;
        };
        for (var i = 0; i < children.length; i++) {
          _loop(i);
        }
      };
      var startAnimation = function startAnimation() {
        animatecharacters(true);
      };
      startAnimation();
      return function () {
        clearTimeout(animationTimeout);
      };
    } else if (AnimationType == "Two") {
      var FirstTextUpPosition = "translate(0px, -10px)";
      var FirstTextDownPosition = "translate(0px, 100px)";
      var FirstTextCenterPosition = "translate(0px, 45px)";
      var SecondTextUpPosition = "translate(0px, -110px)";
      var SecondTextCenterPosition = "translate(0px, -50px)";
      var SecondTextDownPosition = "translate(0px, -1px)";
      var _container = containerRef.current;
      var _children = _container.children;
      var _animationTimeout = null;
      var _animatecharacters = function _animatecharacters(first) {
        isAnimatingRef.current = true;
        var delay = 50;
        var CurrentFirstAnimatioMove = "Down";
        var _loop2 = function _loop2(i) {
          var FirstText = _children[i].children[0];
          var SecondText = _children[i].children[1];
          var CurrentcharacterAnimationStart = null;
          var CurrentcharacterAnimationEnd = null;
          setTimeout(function () {
            if (first) {
              CurrentcharacterAnimationStart = FirstText;
              CurrentcharacterAnimationStart.style.color = "#6021d5";
              _children[i >= 1 ? i - 1 : 0].children[0].style.color = "#fff";
              if (CurrentFirstAnimatioMove == "Down") {
                FirstText.style.transform = FirstTextCenterPosition;
                SecondText.style.transform = SecondTextUpPosition;
                CurrentFirstAnimatioMove = "up";
              } else {
                FirstText.style.transform = FirstTextCenterPosition;
                SecondText.style.transform = SecondTextDownPosition;
                CurrentFirstAnimatioMove = "Down";
              }
              FirstText.style.opacity = "100%";
              SecondText.style.opacity = hiddenOpacity;
              FirstText.style.transition = "all 0.1s cubic-bezier(0.91, -0.05, 0.68, 1.32) 0s";
              SecondText.style.transition = "all 0.1s cubic-bezier(0.91, -0.05, 0.68, 1.32) 0s";
              FirstText.textContent = latters[0][i];
            } else {
              CurrentcharacterAnimationEnd = SecondText;
              CurrentcharacterAnimationEnd.style.color = "#6021d5";
              _children[i >= 1 ? i - 1 : 0].children[1].style.color = "#fff";
              SecondText.textContent = latters[1][i];
              FirstText.style.opacity = hiddenOpacity;
              SecondText.style.opacity = "100%";
              if (CurrentFirstAnimatioMove == "Down") {
                SecondText.style.transform = SecondTextCenterPosition;
                FirstText.style.transform = FirstTextDownPosition;
                CurrentFirstAnimatioMove = "up";
              } else {
                SecondText.style.transform = SecondTextCenterPosition;
                FirstText.style.transform = FirstTextUpPosition;
                CurrentFirstAnimatioMove = "Down";
              }
              FirstText.style.transition = "all 0.1s cubic-bezier(0.91, -0.05, 0.68, 1.32) 0s";
              SecondText.style.transition = "all 0.1s cubic-bezier(0.91, -0.05, 0.68, 1.32) 0s";
            }
            if (i === _children.length - 1 && !first) {
              isAnimatingRef.current = false;
              CurrentcharacterAnimationEnd.style.color = "#fff";
              _animationTimeout = setTimeout(function () {
                _animatecharacters(true);
              }, AnimationLoopTime);
            } else if (i === _children.length - 1 && first) {
              isAnimatingRef.current = false;
              CurrentcharacterAnimationStart.style.color = "#fff";
              _animationTimeout = setTimeout(function () {
                _animatecharacters(false);
              }, AnimationLoopTime);
            }
          }, delay);
          CurrentFirstAnimatioMove = "Down";
          delay += characterAnimationSpeed;
        };
        for (var i = 0; i < _children.length; i++) {
          _loop2(i);
        }
      };
      var _startAnimation = function _startAnimation() {
        _animatecharacters(true);
      };
      _startAnimation();
      return function () {
        clearTimeout(_animationTimeout);
      };
    }
  }, [latters]);
  if (AnimationType == "One") {
    return /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        height: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        width: "100%",
        borderRadius: 10,
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },
      ref: containerRef
    }, latters[0].split("").map(function (character, index) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: index,
        style: {
          fontWeight: fontWeight,
          fontSize: fontSize,
          color: textColor
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          transform: "translate(0px, -15px)",
          opacity: "0"
        }
      }, character), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          transform: "translate(0px, -50px)",
          opacity: "100"
        }
      }, latters[1][index]));
    }))));
  } else if (AnimationType == "Two") {
    return /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        height: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        width: "100%",
        borderRadius: 10,
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },
      ref: containerRef
    }, latters[0].split("").map(function (character, index) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: index,
        style: {
          fontWeight: fontWeight,
          fontSize: fontSize,
          color: textColor
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          transform: "translate(0px, -15px)",
          opacity: "0"
        }
      }, character), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          transform: "translate(0px, -50px)",
          opacity: "100"
        }
      }, latters[1][index]));
    }))));
  }
};
var _default = AnimatedText;
exports["default"] = _default;
