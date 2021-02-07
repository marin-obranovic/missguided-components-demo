"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DiscountBox = void 0;

var _react = _interopRequireDefault(require("react"));

require("./DiscountBox.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DiscountBox = function DiscountBox(Props) {
  var text = Props.text,
      _Props$alignment = Props.alignment,
      alignment = _Props$alignment === void 0 ? "center" : _Props$alignment,
      description = Props.description,
      _Props$backgroundColo = Props.backgroundColor,
      backgroundColor = _Props$backgroundColo === void 0 ? "#fff3f1" : _Props$backgroundColo;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: backgroundColor
    },
    className: "discount-container align-".concat(alignment)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "firstPart"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "text"
  }, text), /*#__PURE__*/_react.default.createElement("p", {
    className: "description"
  }, description)), /*#__PURE__*/_react.default.createElement("div", {
    className: "secondPart"
  }, /*#__PURE__*/_react.default.createElement("div", null, "ts&cs"), /*#__PURE__*/_react.default.createElement("div", null, "No code required")));
};

exports.DiscountBox = DiscountBox;