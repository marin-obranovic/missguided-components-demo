'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var classNames = require('classnames');
var reactBootstrap = require('react-bootstrap');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);

var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

var css = ".title-container {\n  display: flex;\n  width: 100%;\n}\n.title-container.align-left {\n  justify-content: flex-start;\n}\n.title-container.align-right {\n  justify-content: flex-end;\n}\n.title-container.align-center {\n  justify-content: center;\n}";
n(css,{});

var Alignments;
(function (Alignments) {
    Alignments["center"] = "center";
    Alignments["left"] = "left";
    Alignments["right"] = "right";
})(Alignments || (Alignments = {}));
var PageTitle = function (Props) {
    var text = Props.text, _a = Props.alignment, alignment = _a === void 0 ? Alignments.center : _a;
    return (React__default['default'].createElement("div", { className: "title-container align-" + alignment },
        React__default['default'].createElement("h1", null, text)));
};

var css$1 = ".text-container {\n  display: flex;\n}\n.text-container.align-left {\n  justify-content: flex-start;\n}\n.text-container.align-right {\n  justify-content: flex-end;\n}\n.text-container.align-center {\n  justify-content: center;\n}\n.text-container.text-bold {\n  font-weight: bold;\n}";
n(css$1,{});

var Alignments$1;
(function (Alignments) {
    Alignments["center"] = "center";
    Alignments["left"] = "left";
    Alignments["right"] = "right";
})(Alignments$1 || (Alignments$1 = {}));
var TextBlock = function (Props) {
    var text = Props.text, _a = Props.alignment, alignment = _a === void 0 ? "center" : _a, _b = Props.bold, bold = _b === void 0 ? false : _b;
    return (React__default['default'].createElement("div", { className: "text-container align-" + alignment + " " + (bold ? "text-bold" : "") },
        React__default['default'].createElement("p", null, text)));
};

var css$2 = ".discount-container {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 2rem;\n}\n.discount-container .firstPart {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 1rem;\n}\n.discount-container .firstPart .text {\n  font-weight: bold;\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n}\n.discount-container .secondPart {\n  background: #e8e8e8;\n  display: flex;\n  justify-content: space-between;\n  padding: 0.5rem 1rem 0.5rem 1rem;\n}\n.discount-container.align-left {\n  justify-content: flex-start;\n}\n.discount-container.align-right {\n  justify-content: flex-end;\n}\n.discount-container.align-center {\n  justify-content: center;\n}\n.discount-container.text-bold {\n  font-weight: bold;\n}";
n(css$2,{});

var Alignments$2;
(function (Alignments) {
    Alignments["center"] = "center";
    Alignments["left"] = "left";
    Alignments["right"] = "right";
})(Alignments$2 || (Alignments$2 = {}));
var DiscountBox = function (Props) {
    var text = Props.text, _a = Props.alignment, alignment = _a === void 0 ? Alignments$2.center : _a, description = Props.description, _b = Props.backgroundColor, backgroundColor = _b === void 0 ? "#fff3f1" : _b;
    return (React__default['default'].createElement("div", { style: { backgroundColor: backgroundColor }, className: "discount-container align-" + alignment },
        React__default['default'].createElement("div", { className: "firstPart" },
            React__default['default'].createElement("p", { className: "text" }, text),
            React__default['default'].createElement("p", { className: "description" }, description)),
        React__default['default'].createElement("div", { className: "secondPart" },
            React__default['default'].createElement("div", null, "ts&cs"),
            React__default['default'].createElement("div", null, "No code required"))));
};

var css$3 = ".text-banner {\n  text-align: center;\n  padding: 25px;\n}\n\na, a:hover {\n  text-decoration: none;\n  color: black;\n}";
n(css$3,{});

var Alignments$3;
(function (Alignments) {
    Alignments["center"] = "center";
    Alignments["left"] = "left";
    Alignments["right"] = "right";
})(Alignments$3 || (Alignments$3 = {}));
var TextBanner = function (Props) {
    var text = Props.text, subText = Props.subText, _a = Props.subLink, subLink = _a === void 0 ? "" : _a, _b = Props.textAlignment, textAlignment = _b === void 0 ? "center" : _b, _c = Props.bold, bold = _c === void 0 ? false : _c, _d = Props.backgroundColor, backgroundColor = _d === void 0 ? "#FFA5B8" : _d;
    return (React__default['default'].createElement("div", { style: { backgroundColor: backgroundColor }, className: "text-banner align-" + textAlignment + " " + (bold ? "text-bold" : "") },
        React__default['default'].createElement("p", null, text),
        subText && React__default['default'].createElement("a", { href: subLink }, subText)));
};

var css$4 = ".mg-button {\n  font-family: \"Missguided\", Arial, sans-serif;\n  font-weight: 700;\n  letter-spacing: 0.4px;\n  text-transform: lowercase;\n  min-width: 100px;\n  background-color: #000;\n  color: #f7f6fa;\n  transition: background-color, 0.3s, color, 0.3s;\n  border: 1px solid #000;\n  display: inline-block;\n  font-size: 14px;\n  font-size: 0.875rem;\n  text-align: center;\n  padding: 0.9375rem 1.25rem;\n  line-height: 1;\n}\n.mg-button.full-width {\n  width: 100%;\n}\n\n.mg-button:not(.inverted):not(.disabled):hover {\n  text-decoration: none;\n  background-color: #474747;\n  border-color: #474747;\n  color: #f7f6fa;\n}\n\n.disabled {\n  border-color: #b0b0b0;\n  background-color: #b0b0b0;\n  color: #e8e8e8;\n}\n\n.inverted:not(:hover) {\n  background-color: white;\n  color: #101013;\n}";
n(css$4,{});

var MgButton = function (Props) {
    var text = Props.text, _a = Props.onAction, onAction = _a === void 0 ? function () { } : _a, _b = Props.inverted, inverted = _b === void 0 ? false : _b, _c = Props.disabled, disabled = _c === void 0 ? false : _c, _d = Props.fullWidth, fullWidth = _d === void 0 ? true : _d;
    return (React__default['default'].createElement("button", { onClick: onAction, className: classNames__default['default']({
            "mg-button": true,
            inverted: inverted,
            disabled: disabled,
            "full-width": fullWidth,
        }) }, text));
};

var css$5 = ".mg-image img {\n  width: 100%;\n}";
n(css$5,{});

var addImageTransformations = function (image, width, type, webp) {
    var extension = image.split(".").pop();
    if (image.includes("https://media.missguided.com/i/missguided")) {
        if (type === "category")
            return webp === true
                ? image + ".webp?w=" + width + "&fmt.jpeg.interlaced=true"
                : image + "?w=" + width + "&fmt.jpeg.interlaced=true";
        if (webp === true)
            return image + ".webp?bg=rgb(254,245,240)&w=" + width + "&qlt=60&fmt.jpeg.interlaced=true&upscale=false";
        if (webp === true)
            return image + ".webp?bg=rgb(254,245,240)&w=" + width + "&qlt=60&fmt.jpeg.interlaced=true&upscale=false";
        return image + "?bg=rgb(254,245,240)&w=" + width + "&qlt=60&fmt.jpeg.interlaced=true&upscale=false";
    }
    if (image.includes("https://media.missguided.co.uk")) {
        var transformImage = function (transformation) {
            return "" + image.slice(0, 44) + transformation + image.slice(44);
        };
        switch (extension) {
            case "jpeg":
            case "jpg": {
                return type === "lower"
                    ? transformImage("w_600,q_70/")
                    : transformImage("w_" + width + ",q_70/");
            }
            case "png": {
                return type === "lower"
                    ? transformImage("w_600,q_70,b_rgb:FEF5F0/").slice(0, -3) + "jpg"
                    : transformImage("w_" + width + ",q_70/").slice(0, -3) + "jpg";
            }
            case "gif": {
                return type === "lower"
                    ? transformImage("q_30,w_300/")
                    : transformImage("q_30,w_300/");
            }
            default: {
                return "";
            }
        }
    }
    return image;
};
var MgImage = function (_a) {
    var desktop = _a.desktop, mobile = _a.mobile;
    var mobileBreakPoints = [300, 402, 491, 569, 639, 711, 756, 767];
    var desktopBreakPoints = [
        768,
        937,
        1086,
        1226,
        1353,
        1474,
        1582,
        1686,
        1792,
        1905,
    ];
    var mobileImage = mobile ? mobile : desktop;
    if (!desktop || !mobileImage) {
        return React__default['default'].createElement("img", null);
    }
    return (React__default['default'].createElement("picture", { className: "mg-image" },
        React__default['default'].createElement("source", { type: "image/webp", media: "(max-width: 767px)", sizes: "(max-width: 767px) 100vw", "data-srcset": mobileBreakPoints
                .map(function (width) {
                return addImageTransformations(mobileImage, width, true) + " " + width + "w";
            })
                .join(",\n              ") }),
        React__default['default'].createElement("source", { media: "(max-width: 767px)", sizes: "(max-width: 767px) 100vw", "data-srcset": mobileBreakPoints
                .map(function (width) {
                return addImageTransformations(mobileImage, width) + " " + width + "w";
            })
                .join(",\n              ") }),
        React__default['default'].createElement("source", { type: "image/webp", sizes: "(min-width: 768px) 100vw", "data-srcset": desktopBreakPoints
                .map(function (width) {
                return addImageTransformations(desktop, width, "main", true) + " " + width + "w";
            })
                .join(",\n              "), alt: "image failed" }),
        React__default['default'].createElement("source", { media: "(min-width: 768px)", sizes: "(min-width: 768px) 100vw", "data-srcset": desktopBreakPoints
                .map(function (width) {
                return addImageTransformations(desktop, width) + " " + width + "w";
            })
                .join(",\n              "), alt: "image failed" }),
        React__default['default'].createElement("img", { className: "lazyload", "data-expand": "-50", "data-src": addImageTransformations(desktop, "1920"), alt: "backup", src: "" + addImageTransformations(desktop, "1920") })));
};

var css$6 = ".carousel ol.carousel-indicators li {\n  width: 14px;\n  height: 14px;\n  border-radius: 18px;\n  border-bottom: unset;\n  border-top: unset;\n  background-clip: border-box;\n  background-clip: initial;\n  margin: 0 8px;\n  background-color: #404040;\n  opacity: 1;\n}\n.carousel ol.carousel-indicators li.active {\n  background-color: white;\n}\n.carousel .carousel-inner .carousel-item .carousel-caption {\n  position: absolute;\n  right: unset;\n  bottom: 50%;\n  left: unset;\n  padding-top: unset;\n  padding-bottom: unset;\n  width: 100%;\n}\n.carousel .carousel-inner .carousel-item .carousel-caption h4 {\n  margin: 20px 0;\n}\n.carousel .carousel-inner .carousel-item .carousel-caption button {\n  margin: 20px 0;\n}";
n(css$6,{});

var MgCarousel = function MgCarousel(Props) {
  var _Props$items = Props.items,
      items = _Props$items === void 0 ? [] : _Props$items,
      _Props$rotationInterv = Props.rotationInterval,
      rotationInterval = _Props$rotationInterv === void 0 ? null : _Props$rotationInterv,
      _Props$controls = Props.controls,
      controls = _Props$controls === void 0 ? false : _Props$controls;
  return /*#__PURE__*/React__default['default'].createElement(reactBootstrap.Carousel, {
    fade: true,
    controls: controls,
    interval: rotationInterval
  }, items.map(function (_ref) {
    var url = _ref.url,
        _ref$imageSrc = _ref.imageSrc,
        mobile = _ref$imageSrc.mobile,
        desktop = _ref$imageSrc.desktop,
        title = _ref.title;
        _ref.subtitle;
        var button = _ref.button;
    return /*#__PURE__*/React__default['default'].createElement(reactBootstrap.Carousel.Item, null, /*#__PURE__*/React__default['default'].createElement("a", {
      href: url
    }, /*#__PURE__*/React__default['default'].createElement(MgImage, {
      desktop: desktop,
      mobile: mobile
    }), /*#__PURE__*/React__default['default'].createElement(reactBootstrap.Carousel.Caption, null, title && /*#__PURE__*/React__default['default'].createElement("h4", null, title), button && /*#__PURE__*/React__default['default'].createElement(MgButton, {
      text: button,
      fullWidth: false
    }))));
  }));
};

var css$7 = ".category-carousel {\n  display: flex;\n  overflow-x: auto;\n  justify-content: center;\n}\n.category-carousel a {\n  margin-right: 1rem;\n}\n.category-carousel img {\n  width: 120px;\n}\n@media (max-width: 660px) {\n  .category-carousel img {\n    width: 38vw;\n  }\n}\n.category-carousel::-webkit-scrollbar {\n  display: none;\n}\n.category-carousel {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}";
n(css$7,{});

var CategoryCarousel = function CategoryCarousel(props) {
  var items = props.items;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "category-carousel"
  }, items.map(function (_ref) {
    var _ref$imageSrc = _ref.imageSrc,
        desktop = _ref$imageSrc.desktop,
        mobile = _ref$imageSrc.mobile,
        text = _ref.text,
        url = _ref.url;
    return /*#__PURE__*/React__default['default'].createElement("a", {
      href: url
    }, /*#__PURE__*/React__default['default'].createElement(MgImage, {
      desktop: desktop,
      mobile: mobile
    }), /*#__PURE__*/React__default['default'].createElement("p", null, text));
  }));
};

var MgButton$1 = function (Props) {
    var text = Props.text, _a = Props.onAction, onAction = _a === void 0 ? function () { } : _a, _b = Props.inverted, inverted = _b === void 0 ? false : _b, _c = Props.disabled, disabled = _c === void 0 ? false : _c, _d = Props.fullWidth, fullWidth = _d === void 0 ? true : _d;
    return (React__default['default'].createElement("button", { onClick: onAction, className: classNames__default['default']({
            "mg-button": true,
            inverted: inverted,
            disabled: disabled,
            "full-width": fullWidth,
        }) }, text));
};

var addImageTransformations$1 = function (image, width, type, webp) {
    var extension = image.split(".").pop();
    if (image.includes("https://media.missguided.com/i/missguided")) {
        if (type === "category")
            return webp === true
                ? image + ".webp?w=" + width + "&fmt.jpeg.interlaced=true"
                : image + "?w=" + width + "&fmt.jpeg.interlaced=true";
        if (webp === true)
            return image + ".webp?bg=rgb(254,245,240)&w=" + width + "&qlt=60&fmt.jpeg.interlaced=true&upscale=false";
        if (webp === true)
            return image + ".webp?bg=rgb(254,245,240)&w=" + width + "&qlt=60&fmt.jpeg.interlaced=true&upscale=false";
        return image + "?bg=rgb(254,245,240)&w=" + width + "&qlt=60&fmt.jpeg.interlaced=true&upscale=false";
    }
    if (image.includes("https://media.missguided.co.uk")) {
        var transformImage = function (transformation) {
            return "" + image.slice(0, 44) + transformation + image.slice(44);
        };
        switch (extension) {
            case "jpeg":
            case "jpg": {
                return type === "lower"
                    ? transformImage("w_600,q_70/")
                    : transformImage("w_" + width + ",q_70/");
            }
            case "png": {
                return type === "lower"
                    ? transformImage("w_600,q_70,b_rgb:FEF5F0/").slice(0, -3) + "jpg"
                    : transformImage("w_" + width + ",q_70/").slice(0, -3) + "jpg";
            }
            case "gif": {
                return type === "lower"
                    ? transformImage("q_30,w_300/")
                    : transformImage("q_30,w_300/");
            }
            default: {
                return "";
            }
        }
    }
    return image;
};
var MgImage$1 = function (_a) {
    var desktop = _a.desktop, mobile = _a.mobile;
    var mobileBreakPoints = [300, 402, 491, 569, 639, 711, 756, 767];
    var desktopBreakPoints = [
        768,
        937,
        1086,
        1226,
        1353,
        1474,
        1582,
        1686,
        1792,
        1905,
    ];
    var mobileImage = mobile ? mobile : desktop;
    if (!desktop || !mobileImage) {
        return React__default['default'].createElement("img", null);
    }
    return (React__default['default'].createElement("picture", { className: "mg-image" },
        React__default['default'].createElement("source", { type: "image/webp", media: "(max-width: 767px)", sizes: "(max-width: 767px) 100vw", "data-srcset": mobileBreakPoints
                .map(function (width) {
                return addImageTransformations$1(mobileImage, width, true) + " " + width + "w";
            })
                .join(",\n              ") }),
        React__default['default'].createElement("source", { media: "(max-width: 767px)", sizes: "(max-width: 767px) 100vw", "data-srcset": mobileBreakPoints
                .map(function (width) {
                return addImageTransformations$1(mobileImage, width) + " " + width + "w";
            })
                .join(",\n              ") }),
        React__default['default'].createElement("source", { type: "image/webp", sizes: "(min-width: 768px) 100vw", "data-srcset": desktopBreakPoints
                .map(function (width) {
                return addImageTransformations$1(desktop, width, "main", true) + " " + width + "w";
            })
                .join(",\n              "), alt: "image failed" }),
        React__default['default'].createElement("source", { media: "(min-width: 768px)", sizes: "(min-width: 768px) 100vw", "data-srcset": desktopBreakPoints
                .map(function (width) {
                return addImageTransformations$1(desktop, width) + " " + width + "w";
            })
                .join(",\n              "), alt: "image failed" }),
        React__default['default'].createElement("img", { className: "lazyload", "data-expand": "-50", "data-src": addImageTransformations$1(desktop, "1920"), alt: "backup", src: "" + addImageTransformations$1(desktop, "1920") })));
};

var css$8 = ".image-tile a {\n  display: block;\n}";
n(css$8,{});

var ImageTile = function (Props) {
    var url = Props.url, title = Props.title, buttonText = Props.buttonText, imageUrl = Props.imageUrl;
    return (React__default['default'].createElement("div", { className: "image-tile" },
        React__default['default'].createElement("a", { href: url },
            React__default['default'].createElement(MgImage$1, { desktop: imageUrl, mobile: undefined }),
            React__default['default'].createElement("h2", { className: "text-center" }, title),
            React__default['default'].createElement(MgButton$1, { inverted: true, text: buttonText }))));
};

var DiscountBoxes = function DiscountBoxes(Props) {
  var codes = Props.codes;
  return /*#__PURE__*/React__default['default'].createElement("div", null, codes.map(function (code) {
    return /*#__PURE__*/React__default['default'].createElement(DiscountBox, code);
  }));
};

exports.CategoryCarousel = CategoryCarousel;
exports.DiscountBox = DiscountBox;
exports.DiscountBoxes = DiscountBoxes;
exports.ImageTile = ImageTile;
exports.MgButton = MgButton;
exports.MgCarousel = MgCarousel;
exports.MgImage = MgImage;
exports.PageTitle = PageTitle;
exports.TextBanner = TextBanner;
exports.TextBlock = TextBlock;
