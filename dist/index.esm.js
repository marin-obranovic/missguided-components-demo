import React from 'react';
import classNames from 'classnames';

var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

var css = ".title-container {\n  display: flex;\n  width: 100%; }\n  .title-container.align-left {\n    justify-content: flex-start; }\n  .title-container.align-right {\n    justify-content: flex-end; }\n  .title-container.align-center {\n    justify-content: center; }\n";
n(css,{});

var PageTitle = function PageTitle(Props) {
  var text = Props.text,
      _Props$alignment = Props.alignment,
      alignment = _Props$alignment === void 0 ? "center" : _Props$alignment;
  return /*#__PURE__*/React.createElement("div", {
    className: "title-container align-".concat(alignment)
  }, /*#__PURE__*/React.createElement("h1", null, text));
};

var css$1 = ".text-container {\n  display: flex; }\n  .text-container.align-left {\n    justify-content: flex-start; }\n  .text-container.align-right {\n    justify-content: flex-end; }\n  .text-container.align-center {\n    justify-content: center; }\n  .text-container.text-bold {\n    font-weight: bold; }\n";
n(css$1,{});

var TextBlock = function TextBlock(Props) {
  var text = Props.text,
      _Props$alignment = Props.alignment,
      alignment = _Props$alignment === void 0 ? "center" : _Props$alignment,
      _Props$bold = Props.bold,
      bold = _Props$bold === void 0 ? false : _Props$bold;
  return /*#__PURE__*/React.createElement("div", {
    className: "text-container align-".concat(alignment, " ").concat(bold ? "text-bold" : "")
  }, /*#__PURE__*/React.createElement("p", null, text));
};

var css$2 = ".discount-container {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 2rem; }\n  .discount-container .firstPart {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 1rem; }\n    .discount-container .firstPart .text {\n      font-weight: bold;\n      font-size: 1.5rem;\n      margin-bottom: 1rem; }\n  .discount-container .secondPart {\n    background: #e8e8e8;\n    display: flex;\n    justify-content: space-between;\n    padding: 0.5rem 1rem 0.5rem 1rem; }\n  .discount-container.align-left {\n    justify-content: flex-start; }\n  .discount-container.align-right {\n    justify-content: flex-end; }\n  .discount-container.align-center {\n    justify-content: center; }\n  .discount-container.text-bold {\n    font-weight: bold; }\n";
n(css$2,{});

var DiscountBox = function DiscountBox(Props) {
  var text = Props.text,
      _Props$alignment = Props.alignment,
      alignment = _Props$alignment === void 0 ? "center" : _Props$alignment,
      description = Props.description,
      _Props$backgroundColo = Props.backgroundColor,
      backgroundColor = _Props$backgroundColo === void 0 ? "#fff3f1" : _Props$backgroundColo;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: backgroundColor
    },
    className: "discount-container align-".concat(alignment)
  }, /*#__PURE__*/React.createElement("div", {
    className: "firstPart"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text"
  }, text), /*#__PURE__*/React.createElement("p", {
    className: "description"
  }, description)), /*#__PURE__*/React.createElement("div", {
    className: "secondPart"
  }, /*#__PURE__*/React.createElement("div", null, "ts&cs"), /*#__PURE__*/React.createElement("div", null, "No code required")));
};

var css$3 = ".text-banner {\n  text-align: center;\n  padding: 25px; }\n\na, a:hover {\n  text-decoration: none;\n  color: black; }\n";
n(css$3,{});

var TextBanner = function TextBanner(Props) {
  var text = Props.text,
      subText = Props.subText,
      _Props$subLink = Props.subLink,
      subLink = _Props$subLink === void 0 ? "" : _Props$subLink,
      _Props$textAlignment = Props.textAlignment,
      textAlignment = _Props$textAlignment === void 0 ? "center" : _Props$textAlignment,
      _Props$bold = Props.bold,
      bold = _Props$bold === void 0 ? false : _Props$bold,
      _Props$backgroundColo = Props.backgroundColor,
      backgroundColor = _Props$backgroundColo === void 0 ? "#FFA5B8" : _Props$backgroundColo;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: backgroundColor
    },
    className: "text-banner align-".concat(textAlignment, " ").concat(bold ? "text-bold" : "")
  }, /*#__PURE__*/React.createElement("p", null, text), subText && /*#__PURE__*/React.createElement("a", {
    href: subLink
  }, subText));
};

var css$4 = ".mg-button {\n  font-family: \"Missguided\", Arial, sans-serif;\n  font-weight: 700;\n  letter-spacing: 0.4px;\n  text-transform: lowercase;\n  min-width: 100px;\n  background-color: #000;\n  color: #f7f6fa;\n  transition: background-color, 0.3s, color, 0.3s;\n  border: 1px solid #000;\n  display: inline-block;\n  font-size: 14px;\n  font-size: 0.875rem;\n  text-align: center;\n  padding: 0.9375rem 1.25rem;\n  line-height: 1;\n  width: 100%; }\n\n.mg-button:not(.inverted):not(.disabled):hover {\n  text-decoration: none;\n  background-color: #474747;\n  border-color: #474747;\n  color: #f7f6fa; }\n\n.disabled {\n  border-color: #b0b0b0;\n  background-color: #b0b0b0;\n  color: #e8e8e8; }\n\n.inverted:not(:hover) {\n  background-color: white;\n  color: #101013; }\n";
n(css$4,{});

var Button = function Button(Props) {
  var text = Props.text,
      _Props$onAction = Props.onAction,
      onAction = _Props$onAction === void 0 ? function () {} : _Props$onAction;
      Props.bold;
      var _Props$inverted = Props.inverted,
      inverted = _Props$inverted === void 0 ? false : _Props$inverted,
      _Props$disabled = Props.disabled,
      disabled = _Props$disabled === void 0 ? false : _Props$disabled;
  return /*#__PURE__*/React.createElement("button", {
    onClick: onAction,
    className: classNames({
      "mg-button": true,
      inverted: inverted,
      disabled: disabled
    })
  }, text);
};

var DiscountBoxes = function DiscountBoxes(Props) {
  var codes = Props.codes;
  return /*#__PURE__*/React.createElement("div", null, codes.map(function (code) {
    return /*#__PURE__*/React.createElement(DiscountBox, code);
  }));
};

export { Button, DiscountBox, DiscountBoxes, PageTitle, TextBanner, TextBlock };
