module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 45);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__(15);

module.exports = routes().add('portfolioNew', '/portfolios/new').add('portfolio', '/portfolio/:id').add('portfolioEdit', '/portfolio/:id/edit').add('userBlogs', '/blogs/dashboard').add('blogEditor', '/blogs/new').add('blogDetail', '/blogs/:slug').add('blogEditorUpdate', '/blogs/:id/edit');

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(1);

// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(3);

// EXTERNAL MODULE: ./services/auth0.js
var auth0 = __webpack_require__(9);

// CONCATENATED MODULE: ./components/shared/Header.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var Header_Login = function Login() {
  return external_react_default.a.createElement("span", {
    onClick: auth0["a" /* default */].login,
    className: "nav-link port-navbar-link clickable"
  }, "Login");
};

var Header_Logout = function Logout() {
  return external_react_default.a.createElement("span", {
    onClick: auth0["a" /* default */].logout,
    className: "nav-link port-navbar-link clickable"
  }, "Logout");
};

var Header_Example =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Example, _React$Component);

  function Example(props) {
    var _this;

    _classCallCheck(this, Example);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Example).call(this, props));
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.toggle1 = _this.toggle1.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      isOpen: false,
      dropdownOpen: false
    };
    return _this;
  }

  _createClass(Example, [{
    key: "toggle",
    value: function toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: "toggle1",
    value: function toggle1() {
      this.setState(function (prevState) {
        return {
          dropdownOpen: !prevState.dropdownOpen
        };
      });
    }
  }, {
    key: "renderBlogMenu",
    value: function renderBlogMenu() {
      var isSiteOwner = this.props.isSiteOwner;

      if (isSiteOwner) {
        return external_react_default.a.createElement(external_reactstrap_["Dropdown"], {
          className: "port-navbar-link port-dropdown-menu",
          isOpen: this.state.dropdownOpen,
          toggle: this.toggle1
        }, external_react_default.a.createElement(external_reactstrap_["DropdownToggle"], {
          className: "port-dropdown-toggle",
          nav: true,
          caret: true
        }, "Blog"), external_react_default.a.createElement(external_reactstrap_["DropdownMenu"], null, external_react_default.a.createElement(external_reactstrap_["DropdownItem"], null, external_react_default.a.createElement(routes["Link"], {
          route: "/blogs"
        }, external_react_default.a.createElement("a", {
          className: "port-dropdown-item"
        }, "Blog"))), external_react_default.a.createElement(external_reactstrap_["DropdownItem"], null, external_react_default.a.createElement(routes["Link"], {
          route: "/blogs/new"
        }, external_react_default.a.createElement("a", {
          className: "port-dropdown-item"
        }, "Create a Blog"))), external_react_default.a.createElement(external_reactstrap_["DropdownItem"], null, external_react_default.a.createElement(routes["Link"], {
          route: "/blogs/dashboard"
        }, external_react_default.a.createElement("a", {
          className: "port-dropdown-item"
        }, "Dashboard")))));
      } else {
        return external_react_default.a.createElement(routes["Link"], {
          href: "/blogs"
        }, external_react_default.a.createElement("a", {
          className: "nav-link port-navbar-link"
        }, "Blogs"));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isAuthenticated = _this$props.isAuthenticated,
          user = _this$props.user,
          className = _this$props.className;
      var isOpen = this.state.isOpen;
      var menuOpenClass = isOpen ? 'menu-open' : 'menu-close';
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_reactstrap_["Navbar"], _defineProperty({
        color: "light",
        dark: true,
        expand: "md",
        className: "".concat(className, " port-navbar port-nav-base absolute ").concat(menuOpenClass)
      }, "color", "transparent"), external_react_default.a.createElement(external_reactstrap_["NavbarBrand"], {
        href: "/",
        className: "port-navbar-brand"
      }, "Debdut Saha"), external_react_default.a.createElement(external_reactstrap_["NavbarToggler"], {
        onClick: this.toggle
      }), external_react_default.a.createElement(external_reactstrap_["Collapse"], {
        isOpen: this.state.isOpen,
        navbar: true
      }, external_react_default.a.createElement(external_reactstrap_["Nav"], {
        className: "ml-auto",
        navbar: true
      }, external_react_default.a.createElement(external_reactstrap_["NavItem"], {
        className: "port-navbar-item"
      }, external_react_default.a.createElement(routes["Link"], {
        href: "/"
      }, external_react_default.a.createElement("a", {
        className: "nav-link port-navbar-link"
      }, "Home"))), external_react_default.a.createElement(external_reactstrap_["NavItem"], {
        className: "port-navbar-item"
      }, this.renderBlogMenu()), external_react_default.a.createElement(external_reactstrap_["NavItem"], {
        className: "port-navbar-item"
      }, external_react_default.a.createElement(routes["Link"], {
        href: "/about"
      }, external_react_default.a.createElement("a", {
        className: "nav-link port-navbar-link"
      }, "About"))), external_react_default.a.createElement(external_reactstrap_["NavItem"], {
        className: "port-navbar-item"
      }, external_react_default.a.createElement(routes["Link"], {
        href: "/cv"
      }, external_react_default.a.createElement("a", {
        className: "nav-link port-navbar-link"
      }, "Cv"))), external_react_default.a.createElement(external_reactstrap_["NavItem"], {
        className: "port-navbar-item"
      }, external_react_default.a.createElement(routes["Link"], {
        href: "/portfolios"
      }, external_react_default.a.createElement("a", {
        className: "nav-link port-navbar-link"
      }, "portfolios"))), !isAuthenticated && external_react_default.a.createElement(external_reactstrap_["NavItem"], {
        className: "port-navbar-item"
      }, external_react_default.a.createElement(routes["Link"], {
        href: "/portfolios"
      }, external_react_default.a.createElement(Header_Login, null))), isAuthenticated && external_react_default.a.createElement(external_reactstrap_["NavItem"], {
        className: "port-navbar-item"
      }, external_react_default.a.createElement(routes["Link"], {
        href: "/portfolios"
      }, external_react_default.a.createElement(Header_Logout, null)))))));
    }
  }]);

  return Example;
}(external_react_default.a.Component);


// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(12);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/layout/BaseLayout.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseLayout_BaseLayout; });
function BaseLayout_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { BaseLayout_typeof = function _typeof(obj) { return typeof obj; }; } else { BaseLayout_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return BaseLayout_typeof(obj); }

function BaseLayout_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function BaseLayout_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function BaseLayout_createClass(Constructor, protoProps, staticProps) { if (protoProps) BaseLayout_defineProperties(Constructor.prototype, protoProps); if (staticProps) BaseLayout_defineProperties(Constructor, staticProps); return Constructor; }

function BaseLayout_possibleConstructorReturn(self, call) { if (call && (BaseLayout_typeof(call) === "object" || typeof call === "function")) { return call; } return BaseLayout_assertThisInitialized(self); }

function BaseLayout_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function BaseLayout_getPrototypeOf(o) { BaseLayout_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return BaseLayout_getPrototypeOf(o); }

function BaseLayout_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) BaseLayout_setPrototypeOf(subClass, superClass); }

function BaseLayout_setPrototypeOf(o, p) { BaseLayout_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return BaseLayout_setPrototypeOf(o, p); }





var BaseLayout_BaseLayout =
/*#__PURE__*/
function (_React$Component) {
  BaseLayout_inherits(BaseLayout, _React$Component);

  function BaseLayout() {
    BaseLayout_classCallCheck(this, BaseLayout);

    return BaseLayout_possibleConstructorReturn(this, BaseLayout_getPrototypeOf(BaseLayout).apply(this, arguments));
  }

  BaseLayout_createClass(BaseLayout, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          isAuthenticated = _this$props.isAuthenticated,
          isSiteOwner = _this$props.isSiteOwner,
          title = _this$props.title,
          cannonical = _this$props.cannonical;
      var user = this.props.user;
      var headerType = this.props.headerType || 'default';
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, title), external_react_default.a.createElement("meta", {
        name: "description",
        content: "Welcome to the portfolio website of Debdut Saha.Get informed, collaborate and discover projects I was working on through the years!"
      }), external_react_default.a.createElement("meta", {
        name: "keywords",
        content: "Debdut saha portfolio,Debdut saha blogs,Debdut saha developer,Debdut saha full stack developer,Debdut saha react-native developer,Debdut saha blockchain"
      }), external_react_default.a.createElement("meta", {
        property: "og:title",
        content: "Debdut saha-developer,programmer,bloger"
      }), external_react_default.a.createElement("meta", {
        property: "og:locale",
        content: "hi_in"
      }), external_react_default.a.createElement("meta", {
        property: "og:url",
        content: "".concat("https://debdutsahaportfolio.herokuapp.com/")
      }), external_react_default.a.createElement("meta", {
        property: "og:description",
        content: "Welcome to the portfolio website of Debdut Saha."
      }), cannonical && external_react_default.a.createElement("link", {
        rel: "cannonical",
        href: "".concat("https://debdutsahaportfolio.herokuapp.com/", "/").concat(cannonical)
      }), external_react_default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.6.3/css/all.css",
        integrity: "sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/",
        crossorigin: "anonymous"
      }), external_react_default.a.createElement("link", {
        rel: "icon",
        type: "image/ico",
        href: "/static/favicon.ico"
      }), external_react_default.a.createElement("link", {
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        rel: "stylesheet"
      })), external_react_default.a.createElement("div", {
        className: "layout-container"
      }, external_react_default.a.createElement(Header_Example, {
        className: "port-nav-".concat(headerType),
        isAuthenticated: isAuthenticated,
        user: user,
        isSiteOwner: isSiteOwner
      }), external_react_default.a.createElement("main", {
        className: "cover ".concat(className)
      }, external_react_default.a.createElement("div", {
        className: "wrapper"
      }, children))));
    }
  }]);

  return BaseLayout;
}(external_react_default.a.Component);



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




var BasePage = function BasePage(props) {
  var className = props.className,
      title = props.title,
      containerClass = props.containerClass;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "base-page ".concat(className)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    className: containerClass
  }, title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "page-header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "page-header-title"
  }, title)), props.children));
};

BasePage.defaultProps = {
  className: '',
  containerClass: ''
};
/* harmony default export */ __webpack_exports__["a"] = (BasePage);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCookiesFromReq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return shortenText; });
var getCookiesFromReq = function getCookiesFromReq(req, cookie) {
  if (req.headers.cookie) {
    var tokenCookie = req.headers.cookie.split(';').find(function (c) {
      return c.trim().startsWith("".concat(cookie, "="));
    });

    if (!tokenCookie) {
      return undefined;
    }

    return tokenCookie.split('=')[1];
  } else {
    return undefined;
  }
};
var shortenText = function shortenText(text, maxlength) {
  if (text && text.length > maxlength) {
    return "".concat(text.substring(0, maxlength), "....");
  }

  return text;
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(auth0_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var CLIENT_ID = "2TLFjSYZgBOjK73a5EIoMTYVKsnR51py";

var Auth0 =
/*#__PURE__*/
function () {
  function Auth0() {
    _classCallCheck(this, Auth0);

    _defineProperty(this, "getJWKS",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var res, jwks;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("https://debdutsaha.auth0.com/.well-known/jwks.json");

            case 2:
              res = _context.sent;
              jwks = res.data;
              return _context.abrupt("return", jwks);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    this.auth0 = new auth0_js__WEBPACK_IMPORTED_MODULE_1___default.a.WebAuth({
      domain: 'debdutsaha.auth0.com',
      clientID: CLIENT_ID,
      redirectUri: "".concat("https://debdutsahaportfolio.herokuapp.com/", "/callback"),
      responseType: 'token id_token',
      scope: 'openid profile'
    });
    this.login = this.login.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.setSession = this.setSession.bind(this);
    this.logout = this.logout.bind(this);
  }

  _createClass(Auth0, [{
    key: "login",
    value: function login() {
      this.auth0.authorize();
    }
  }, {
    key: "handleAuthentication",
    value: function handleAuthentication() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this.auth0.parseHash(function (err, authResult) {
          if (authResult && authResult.accessToken && authResult.idToken) {
            _this.setSession(authResult);

            resolve();
          } else if (err) {
            reject();
            console.log(err);
            alert("Error: ".concat(err.error, ". Check the console for further details."));
          }
        });
      });
    }
  }, {
    key: "setSession",
    value: function setSession(authResult) {
      // Set the time that the access token will expire at
      js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('jwt', authResult.idToken); // navigate to the home route
    }
  }, {
    key: "logout",
    value: function logout() {
      js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove('jwt');
      this.auth0.logout({
        clientID: CLIENT_ID,
        returnTo: "https://debdutsahaportfolio.herokuapp.com/"
      });
    } //verify jwt web token

  }, {
    key: "verifyToken",
    value: function () {
      var _verifyToken = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(token) {
        var decodedToken, jwks, jwk, cert, verifiedToken, expiresAt;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!token) {
                  _context2.next = 21;
                  break;
                }

                decodedToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default.a.decode(token, {
                  complete: true
                });

                if (!(decodedToken == undefined)) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt("return", undefined);

              case 4:
                _context2.next = 6;
                return this.getJWKS();

              case 6:
                jwks = _context2.sent;
                jwk = jwks.keys[0]; //Build Certificate

                cert = jwk.x5c[0];
                cert = cert.match(/.{1,64}/g).join('\n');
                cert = "-----BEGIN CERTIFICATE-----\n".concat(cert, "\n-----END CERTIFICATE-----\n");

                if (!(jwk.kid === decodedToken.header.kid)) {
                  _context2.next = 21;
                  break;
                }

                _context2.prev = 12;
                verifiedToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default.a.verify(token, cert);
                expiresAt = verifiedToken.exp * 1000;
                return _context2.abrupt("return", verifiedToken && new Date().getTime() < expiresAt ? verifiedToken : undefined);

              case 18:
                _context2.prev = 18;
                _context2.t0 = _context2["catch"](12);
                return _context2.abrupt("return", undefined);

              case 21:
                return _context2.abrupt("return", undefined);

              case 22:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[12, 18]]);
      }));

      function verifyToken(_x) {
        return _verifyToken.apply(this, arguments);
      }

      return verifyToken;
    }() //signing our jwt token

  }, {
    key: "clientAuth",
    value: function () {
      var _clientAuth = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var token, verifiedToken;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                token = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.getJSON('jwt');
                _context3.next = 3;
                return this.verifyToken(token);

              case 3:
                verifiedToken = _context3.sent;
                return _context3.abrupt("return", verifiedToken);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function clientAuth() {
        return _clientAuth.apply(this, arguments);
      }

      return clientAuth;
    }()
  }, {
    key: "serverAuth",
    value: function () {
      var _serverAuth = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(req) {
        var token, verifiedToken;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_5__[/* getCookiesFromReq */ "a"])(req, 'jwt');

              case 2:
                token = _context4.sent;
                _context4.next = 5;
                return this.verifyToken(token);

              case 5:
                verifiedToken = _context4.sent;
                return _context4.abrupt("return", verifiedToken);

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function serverAuth(_x2) {
        return _serverAuth.apply(this, arguments);
      }

      return serverAuth;
    }()
  }]);

  return Auth0;
}();

var auth0Client = new Auth0();
/* harmony default export */ __webpack_exports__["a"] = (auth0Client);

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("auth0-js");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BasePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _layout_BaseLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




/* harmony default export */ __webpack_exports__["a"] = (function (role) {
  return function (Component) {
    return (
      /*#__PURE__*/
      function (_React$Component) {
        _inherits(withAuth, _React$Component);

        function withAuth() {
          _classCallCheck(this, withAuth);

          return _possibleConstructorReturn(this, _getPrototypeOf(withAuth).apply(this, arguments));
        }

        _createClass(withAuth, [{
          key: "renderProtectedPage",
          value: function renderProtectedPage() {
            var _this$props$auth = this.props.auth,
                isAuthenticated = _this$props$auth.isAuthenticated,
                user = _this$props$auth.user;
            var userRole = user && user["".concat("https://debdutsahaportfolio.herokuapp.com", "/role")];
            var isAuthorized = false;

            if (role) {
              if (userRole && userRole === role) {
                isAuthorized = true;
              }
            } else {
              isAuthorized = true;
            }

            if (!isAuthenticated) {
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layout_BaseLayout__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], this.props.auth, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BasePage__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Please login to display things in our Application")));
            } else if (!isAuthorized) {
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layout_BaseLayout__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], this.props.auth, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BasePage__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "you are not authorized.You dont have permission to visit this page")));
            } else {
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, this.props);
            }
          }
        }, {
          key: "render",
          value: function render() {
            return this.renderProtectedPage();
          }
        }], [{
          key: "getInitialProps",
          value: function () {
            var _getInitialProps = _asyncToGenerator(
            /*#__PURE__*/
            _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(args) {
              var pageProps;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return Component.getInitialProps;

                    case 2:
                      _context.t0 = _context.sent;

                      if (!_context.t0) {
                        _context.next = 7;
                        break;
                      }

                      _context.next = 6;
                      return Component.getInitialProps(args);

                    case 6:
                      _context.t0 = _context.sent;

                    case 7:
                      pageProps = _context.t0;
                      return _context.abrupt("return", _objectSpread({}, pageProps));

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function getInitialProps(_x) {
              return _getInitialProps.apply(this, arguments);
            }

            return getInitialProps;
          }()
        }]);

        return withAuth;
      }(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component)
    );
  };
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getSecretData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getPortfolios; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getPortfolioById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createPortfolio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return updatePortfolio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deletePortfolio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getBlogs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getBlogBySlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getUserBlogs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createBlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return updateBlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getBlogById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return deleteBlog; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_4__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var axiosInstance = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
  baseURL: 'http://localhost:3000/api/v1',
  timeout: 3000
});

var setAuthHeader = function setAuthHeader(req) {
  var token = req ? Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_3__[/* getCookiesFromReq */ "a"])(req, 'jwt') : js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.getJSON('jwt');

  if (token) {
    return {
      headers: {
        'authorization': "Bearer ".concat(token)
      }
    };
  } else {
    return undefined;
  }
};

var getSecretData =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req) {
    var url, res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = req ? "/secret" : "api/v1/secret";
            _context.next = 3;
            return axiosInstance.get("".concat(url), setAuthHeader(req)).then(function (res) {
              return res.data;
            }).catch(function (err) {
              console.warn("It is the error of axios" + err);
            });

          case 3:
            res = _context.sent;
            return _context.abrupt("return", res);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getSecretData(_x) {
    return _ref.apply(this, arguments);
  };
}();

var rejectPromise = function rejectPromise(reserror) {
  var error = {};

  if (reserror && reserror.response && reserror.response.data) {
    error = reserror.response.data;
  } else {
    error = reserror;
  }
};

var getPortfolios =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(req) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return axiosInstance.get('/portfolios', setAuthHeader(req)).then(function (response) {
              return response.data;
            }).catch(function (err) {
              return console.log("Hiii i am error");
            });

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getPortfolios(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var getPortfolioById =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(id) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return axiosInstance.get("/portfolios/".concat(id)).then(function (response) {
              return response.data;
            });

          case 2:
            return _context3.abrupt("return", _context3.sent);

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function getPortfolioById(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
var createPortfolio =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(portfolioData) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return axiosInstance.post('/portfolios', portfolioData, setAuthHeader()).then(function (response) {
              return response.data;
            }).catch(function (err) {
              return rejectPromise(err);
            });

          case 2:
            return _context4.abrupt("return", _context4.sent);

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function createPortfolio(_x4) {
    return _ref4.apply(this, arguments);
  };
}();
var updatePortfolio =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(portfolioData) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return axiosInstance.patch("/portfolios/".concat(portfolioData._id), portfolioData, setAuthHeader()).then(function (response) {
              return response.data;
            }).catch(function (err) {
              return rejectPromise(err);
            });

          case 2:
            return _context5.abrupt("return", _context5.sent);

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function updatePortfolio(_x5) {
    return _ref5.apply(this, arguments);
  };
}();
var deletePortfolio = function deletePortfolio(portfolioId) {
  return axiosInstance.delete("/portfolios/".concat(portfolioId), setAuthHeader()).then(function (response) {
    return response.data;
  });
}; //------------------Blog Actions----------------->>>>>

var getBlogs =
/*#__PURE__*/
function () {
  var _ref6 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(req) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return axiosInstance.get('/blogs').then(function (response) {
              return response.data;
            });

          case 2:
            return _context6.abrupt("return", _context6.sent);

          case 3:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function getBlogs(_x6) {
    return _ref6.apply(this, arguments);
  };
}();
var getBlogBySlug =
/*#__PURE__*/
function () {
  var _ref7 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(slug) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return axiosInstance.get("/blogs/s/".concat(slug)).then(function (response) {
              return response.data;
            });

          case 2:
            return _context7.abrupt("return", _context7.sent);

          case 3:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));

  return function getBlogBySlug(_x7) {
    return _ref7.apply(this, arguments);
  };
}();
var getUserBlogs =
/*#__PURE__*/
function () {
  var _ref8 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(req) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            return _context8.abrupt("return", axiosInstance.get('/blogs/me', setAuthHeader(req)).then(function (response) {
              return response.data;
            }));

          case 1:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this);
  }));

  return function getUserBlogs(_x8) {
    return _ref8.apply(this, arguments);
  };
}();
var createBlog = function createBlog(blogData, lockId) {
  return axiosInstance.post("/blogs?lockId=".concat(lockId), blogData, setAuthHeader()).then(function (response) {
    return response.data;
  }).catch(function (err) {
    return Promise.reject(err);
  });
};
var updateBlog = function updateBlog(blogData, blogId) {
  return axiosInstance.patch("/blogs/".concat(blogId), blogData, setAuthHeader()).then(function (response) {
    return response.data;
  }).catch(function (err) {
    return console.error(err);
  });
};
var getBlogById = function getBlogById(blogId) {
  console.log(blogId);
  return axiosInstance.get("/blogs/".concat(blogId)).then(function (response) {
    return response.data;
  });
};
var deleteBlog = function deleteBlog(blogId) {
  return axiosInstance.delete("/blogs/".concat(blogId), setAuthHeader()).then(function (response) {
    return response.data;
  }).catch(function (err) {
    return rejectPromise(err);
  });
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),
/* 16 */,
/* 17 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 18 */,
/* 19 */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-emotion");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("slate");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("slate-react");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("slate-html-serializer");

/***/ }),
/* 26 */,
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "slate-react"
var external_slate_react_ = __webpack_require__(23);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(1);

// CONCATENATED MODULE: ./components/slateEditor/ControllMenu.js



var ControllMenu_ControllMenu = function ControllMenu(props) {
  return external_react_default.a.createElement("div", {
    className: "controll-menu"
  }, external_react_default.a.createElement("h1", {
    className: "title"
  }, "Write Your Story"), external_react_default.a.createElement("div", {
    className: "status-box"
  }, props.isLoading ? "Saving" : "Saved"), external_react_default.a.createElement(external_reactstrap_["Button"], {
    disabled: props.isLoading,
    onClick: props.save,
    color: "success"
  }, "Save"));
};

/* harmony default export */ var slateEditor_ControllMenu = (ControllMenu_ControllMenu);
// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(24);
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);

// EXTERNAL MODULE: external "react-emotion"
var external_react_emotion_ = __webpack_require__(20);
var external_react_emotion_default = /*#__PURE__*/__webpack_require__.n(external_react_emotion_);

// CONCATENATED MODULE: ./components/slateEditor/components/index.js
function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  padding: 8px 7px 6px;\n  position: absolute;\n  z-index: 1;\n  top: -10000px;\n  left: -10000px;\n  margin-top: -6px;\n  opacity: 0;\n  background-color: #222;\n  border-radius: 4px;\n  transition: opacity 0.75s;"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  padding: 1px 18px 17px;\n  margin: 0 -20px;\n  border-bottom: 2px solid #eee;\n  margin-bottom: 20px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  & > * {\n    display: inline-block;\n  }\n  & > * + * {\n    margin-left: 15px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-size: 18px;\n  vertical-align: text-bottom;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Button = external_react_emotion_default()('span')(_templateObject(), function (props) {
  return props.reversed ? props.active ? 'white' : '#aaa' : props.active ? 'black' : '#ccc';
});
var Icon = external_react_emotion_default()(function (_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["className"]);

  return external_react_default.a.createElement("span", _extends({
    className: "material-icons ".concat(className)
  }, rest));
})(_templateObject2());
var Menu = external_react_emotion_default()('div')(_templateObject3());
var Toolbar = external_react_emotion_default()(Menu)(_templateObject4());
var StyledMenu = external_react_emotion_default()(Menu)(_templateObject5());
// CONCATENATED MODULE: ./components/slateEditor/renderer/index.js


var DEFAULT_NODE = 'paragraph';

var onClickMark = function onClickMark(event, type, editor) {
  event.preventDefault();
  editor.toggleMark(type);
};

var renderer_renderMarkButton = function renderMarkButton(type, icon, editor) {
  var value = editor.value;
  var isActive = value.activeMarks.some(function (mark) {
    return mark.type == type;
  });
  return external_react_default.a.createElement(Button, {
    reversed: true,
    active: isActive,
    onMouseDown: function onMouseDown(event) {
      return onClickMark(event, type, editor);
    }
  }, external_react_default.a.createElement(Icon, null, icon));
};

var hasBlock = function hasBlock(type, value) {
  return value.blocks.some(function (node) {
    return node.type == type;
  });
};

var renderer_renderMark = function renderMark(props, editor, next) {
  var children = props.children,
      mark = props.mark,
      attributes = props.attributes;

  switch (mark.type) {
    case 'bold':
      return external_react_default.a.createElement("strong", attributes, children);

    case 'code':
      return external_react_default.a.createElement("code", attributes, children);

    case 'italic':
      return external_react_default.a.createElement("em", attributes, children);

    case 'underlined':
      return external_react_default.a.createElement("u", attributes, children);

    default:
      return next();
  }
};
var renderer_renderNode = function renderNode(props, editor, next) {
  var attributes = props.attributes,
      children = props.children,
      node = props.node;

  switch (node.type) {
    case 'paragraph':
      return external_react_default.a.createElement("p", attributes, children);

    case 'block-quote':
      return external_react_default.a.createElement("blockquote", attributes, children);

    case 'bulleted-list':
      return external_react_default.a.createElement("ul", attributes, children);

    case 'heading-one':
      return external_react_default.a.createElement("h1", attributes, children);

    case 'heading-two':
      return external_react_default.a.createElement("h2", attributes, children);

    case 'list-item':
      return external_react_default.a.createElement("li", attributes, children);

    case 'numbered-list':
      return external_react_default.a.createElement("ol", attributes, children);

    default:
      return next();
  }
};
var renderer_renderBlockButton = function renderBlockButton(type, icon, editor) {
  var value = editor.value;
  var isActive = hasBlock(type, value);

  if (['numbered-list', 'bulleted-list'].includes(type)) {
    var _editor$value = editor.value,
        document = _editor$value.document,
        blocks = _editor$value.blocks;

    if (blocks.size > 0) {
      var parent = document.getParent(blocks.first().key);
      isActive = hasBlock('list-item', value) && parent && parent.type === type;
    }
  }

  return external_react_default.a.createElement(Button, {
    active: isActive,
    reversed: true,
    onMouseDown: function onMouseDown(event) {
      return onClickBlock(event, type, editor);
    }
  }, external_react_default.a.createElement(Icon, null, icon));
};

var onClickBlock = function onClickBlock(event, type, editor) {
  event.preventDefault();
  var value = editor.value;
  var document = value.document; // Handle everything but list buttons.

  if (type != 'bulleted-list' && type != 'numbered-list') {
    var isActive = hasBlock(type, value);
    var isList = hasBlock('list-item', value);

    if (isList) {
      editor.setBlocks(isActive ? DEFAULT_NODE : type).unwrapBlock('bulleted-list').unwrapBlock('numbered-list');
    } else {
      editor.setBlocks(isActive ? DEFAULT_NODE : type);
    }
  } else {
    // Handle the extra wrapping required for list buttons.
    var _isList = hasBlock('list-item', value);

    var isType = value.blocks.some(function (block) {
      return !!document.getClosest(block.key, function (parent) {
        return parent.type == type;
      });
    });

    if (_isList && isType) {
      editor.setBlocks(DEFAULT_NODE).unwrapBlock('bulleted-list').unwrapBlock('numbered-list');
    } else if (_isList) {
      editor.unwrapBlock(type == 'bulleted-list' ? 'numbered-list' : 'bulleted-list').wrapBlock(type);
    } else {
      editor.setBlocks('list-item').wrapBlock(type);
    }
  }
};
// CONCATENATED MODULE: ./components/slateEditor/hovermenu.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var hovermenu_HoverMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HoverMenu, _React$Component);

  function HoverMenu() {
    _classCallCheck(this, HoverMenu);

    return _possibleConstructorReturn(this, _getPrototypeOf(HoverMenu).apply(this, arguments));
  }

  _createClass(HoverMenu, [{
    key: "renderMarkButton",

    /**
     * Render.
     *
     * @return {Element}
     */
    value: function renderMarkButton(type, icon) {
      var editor = this.props.editor;
      return renderer_renderMarkButton(type, icon, editor);
    }
  }, {
    key: "renderBlockButton",
    value: function renderBlockButton(type, icon) {
      var editor = this.props.editor;
      return renderer_renderBlockButton(type, icon, editor);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          innerRef = _this$props.innerRef;
      var root = window.document.getElementById('__next');
      return external_react_dom_default.a.createPortal(external_react_default.a.createElement(StyledMenu, {
        className: className,
        innerRef: innerRef
      }, this.renderMarkButton('bold', 'format_bold'), this.renderMarkButton('italic', 'format_italic'), this.renderMarkButton('underlined', 'format_underlined'), this.renderMarkButton('code', 'code'), this.renderBlockButton('heading-one', 'looks_one'), this.renderBlockButton('heading-two', 'looks_two'), this.renderBlockButton('block-quote', 'format_quote'), this.renderBlockButton('numbered-list', 'format_list_numbered'), this.renderBlockButton('bulleted-list', 'format_list_bulleted')), root);
    }
  }]);

  return HoverMenu;
}(external_react_default.a.Component);

/* harmony default export */ var hovermenu = (hovermenu_HoverMenu);
// EXTERNAL MODULE: external "slate"
var external_slate_ = __webpack_require__(21);

// CONCATENATED MODULE: ./components/slateEditor/initialvalue.js

var initialValue = external_slate_["Value"].fromJSON({
  document: {
    nodes: [{
      object: 'block',
      type: 'paragraph',
      nodes: [{
        object: 'text',
        leaves: [{
          text: 'A line of text in a paragraph.'
        }]
      }]
    }]
  }
});
// EXTERNAL MODULE: external "slate-html-serializer"
var external_slate_html_serializer_ = __webpack_require__(25);
var external_slate_html_serializer_default = /*#__PURE__*/__webpack_require__.n(external_slate_html_serializer_);

// CONCATENATED MODULE: ./components/slateEditor/rules.js

var BLOCK_TAGS = {
  blockquote: 'block-quote',
  p: 'paragraph',
  ul: 'bulleted-list',
  li: 'list-item',
  ol: 'numbered-list',
  h1: 'heading-one',
  h2: 'heading-two' // Add a dictionary of mark tags.

};
var MARK_TAGS = {
  em: 'italic',
  strong: 'bold',
  u: 'underlined',
  code: 'code'
};
var rules = [{
  deserialize: function deserialize(el, next) {
    var type = BLOCK_TAGS[el.tagName.toLowerCase()];

    if (type) {
      return {
        object: 'block',
        type: type,
        nodes: next(el.childNodes)
      };
    }
  },
  serialize: function serialize(obj, children) {
    if (obj.object == 'block') {
      switch (obj.type) {
        case 'paragraph':
          return external_react_default.a.createElement("p", null, children);

        case 'block-quote':
          return external_react_default.a.createElement("blockquote", null, children);

        case 'bulleted-list':
          return external_react_default.a.createElement("ul", null, children);

        case 'heading-one':
          return external_react_default.a.createElement("h1", null, children);

        case 'heading-two':
          return external_react_default.a.createElement("h2", null, children);

        case 'list-item':
          return external_react_default.a.createElement("li", null, children);

        case 'numbered-list':
          return external_react_default.a.createElement("ol", null, children);
      }
    }
  }
}, // Add a new rule that handles marks...
{
  deserialize: function deserialize(el, next) {
    var type = MARK_TAGS[el.tagName.toLowerCase()];

    if (type) {
      return {
        object: 'mark',
        type: type,
        nodes: next(el.childNodes)
      };
    }
  },
  serialize: function serialize(obj, children) {
    if (obj.object == 'mark') {
      switch (obj.type) {
        case 'bold':
          return external_react_default.a.createElement("strong", null, children);

        case 'italic':
          return external_react_default.a.createElement("em", null, children);

        case 'underlined':
          return external_react_default.a.createElement("u", null, children);

        case 'code':
          return external_react_default.a.createElement("code", null, children);
      }
    }
  }
}];
// CONCATENATED MODULE: ./components/slateEditor/Editor.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Editor_SlateEditor; });
function Editor_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Editor_typeof = function _typeof(obj) { return typeof obj; }; } else { Editor_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Editor_typeof(obj); }

function Editor_extends() { Editor_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Editor_extends.apply(this, arguments); }

function Editor_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Editor_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Editor_createClass(Constructor, protoProps, staticProps) { if (protoProps) Editor_defineProperties(Constructor.prototype, protoProps); if (staticProps) Editor_defineProperties(Constructor, staticProps); return Constructor; }

function Editor_possibleConstructorReturn(self, call) { if (call && (Editor_typeof(call) === "object" || typeof call === "function")) { return call; } return Editor_assertThisInitialized(self); }

function Editor_getPrototypeOf(o) { Editor_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Editor_getPrototypeOf(o); }

function Editor_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Editor_setPrototypeOf(subClass, superClass); }

function Editor_setPrototypeOf(o, p) { Editor_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Editor_setPrototypeOf(o, p); }

function Editor_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var html = new external_slate_html_serializer_default.a({
  rules: rules
}); // Define our app...

var Editor_SlateEditor =
/*#__PURE__*/
function (_React$Component) {
  Editor_inherits(SlateEditor, _React$Component);

  // Set the initial value when the app is first constructed.
  function SlateEditor(_props) {
    var _this;

    Editor_classCallCheck(this, SlateEditor);

    _this = Editor_possibleConstructorReturn(this, Editor_getPrototypeOf(SlateEditor).call(this, _props));

    _defineProperty(Editor_assertThisInitialized(Editor_assertThisInitialized(_this)), "state", {
      value: external_slate_["Value"].create(),
      isloaded: false
    });

    _defineProperty(Editor_assertThisInitialized(Editor_assertThisInitialized(_this)), "onChange", function (_ref) {
      var value = _ref.value;

      _this.setState({
        value: value
      });
    });

    _defineProperty(Editor_assertThisInitialized(Editor_assertThisInitialized(_this)), "updateMenu", function () {
      var menu = _this.menu;
      if (!menu) return;
      var value = _this.state.value;
      var fragment = value.fragment,
          selection = value.selection;

      if (selection.isBlurred || selection.isCollapsed || fragment.text === '') {
        menu.removeAttribute('style');
        return;
      }

      var native = window.getSelection();
      var range = native.getRangeAt(0);
      var rect = range.getBoundingClientRect();
      menu.style.opacity = 1;
      menu.style.top = "".concat(rect.top + window.pageYOffset - menu.offsetHeight, "px");
      menu.style.left = "".concat(rect.left + window.pageXOffset - menu.offsetWidth / 2 + rect.width / 2, "px");
    });

    _defineProperty(Editor_assertThisInitialized(Editor_assertThisInitialized(_this)), "renderEditor", function (props, editor, next) {
      var children = next();
      var isLoading = props.isLoading;
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(slateEditor_ControllMenu, {
        isLoading: isLoading,
        save: function save() {
          _this.save();
        }
      }), children, external_react_default.a.createElement(hovermenu, {
        innerRef: function innerRef(menu) {
          return _this.menu = menu;
        },
        editor: editor
      }));
    });

    _this.onKeyDown = _this.onKeyDown.bind(Editor_assertThisInitialized(Editor_assertThisInitialized(_this)));
    return _this;
  }

  Editor_createClass(SlateEditor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var value = this.props.initialValue ? external_slate_["Value"].fromJSON(html.deserialize(this.props.initialValue)) : initialValue;
      this.updateMenu();
      this.setState({
        value: value
      });
      this.setState({
        isloaded: true
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.updateMenu();
    } // On change, update the app's React state with the new editor value.

  }, {
    key: "onKeyDown",
    value: function onKeyDown(event, change, next) {
      var isLoading = this.props.isLoading;

      if (!isLoading && event.which == 83 && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        this.save();
        return;
      }

      next();
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      var value = this.state.value;
      var firstBlock = value.document.getBlocks().get(0);
      var secondBlock = value.document.getBlocks().get(1);
      var title = firstBlock && firstBlock.text ? firstBlock.text : "No Title";
      var subtitle = secondBlock && secondBlock.text ? secondBlock.text : "No Title";
      return {
        title: title,
        subtitle: subtitle
      };
    }
  }, {
    key: "save",
    value: function save() {
      var value = this.state.value;
      var _this$props = this.props,
          save = _this$props.save,
          isLoading = _this$props.isLoading;
      var headingValues = this.getTitle();
      var text = html.serialize(value);
      !isLoading && save(text, headingValues);
    } // Render the editor.

  }, {
    key: "render",
    value: function render() {
      var isloaded = this.state.isloaded;
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, isloaded && external_react_default.a.createElement(external_slate_react_["Editor"], Editor_extends({}, this.props, {
        placeholder: "Enter you blog story.....",
        value: this.state.value,
        onChange: this.onChange,
        renderNode: renderer_renderNode,
        renderEditor: this.renderEditor,
        renderMark: renderer_renderMark,
        onKeyDown: this.onKeyDown
      })));
    }
  }]);

  return SlateEditor;
}(external_react_default.a.Component);



/***/ }),
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(46);


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout_BaseLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _components_BasePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _components_hoc_withAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var _components_slateEditor_Editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_7__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }










var BlogEditorUpdate =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BlogEditorUpdate, _React$Component);

  _createClass(BlogEditorUpdate, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var query, blogId, blog;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
                blogId = query.id;
                blog = {};
                _context.prev = 3;
                _context.next = 6;
                return Object(_actions__WEBPACK_IMPORTED_MODULE_6__[/* getBlogById */ "e"])(blogId);

              case 6:
                blog = _context.sent;
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](3);
                console.warn("Here is the error" + _context.t0);

              case 12:
                return _context.abrupt("return", {
                  blog: blog
                });

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 9]]);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function BlogEditorUpdate(props) {
    var _this;

    _classCallCheck(this, BlogEditorUpdate);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BlogEditorUpdate).call(this, props));
    _this.state = {
      isSaving: false
    };
    _this.updateBlog = _this.updateBlog.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(BlogEditorUpdate, [{
    key: "updateBlog",
    value: function updateBlog(story, heading) {
      var _this2 = this;

      var blog = this.props.blog;
      var updatedBlog = {};
      debugger;
      updatedBlog.title = heading.title;
      updatedBlog.subTitle = heading.subtitle;
      updatedBlog.story = story;
      this.setState({
        isSaving: true
      });

      Object(_actions__WEBPACK_IMPORTED_MODULE_6__[/* updateBlog */ "l"])(updatedBlog, blog._id).then(function (updatedBlog) {
        react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].success('Blog Updated Successfully');

        _this2.setState({
          isSaving: false
        });
      }).catch(function (err) {
        _this2.setState({
          isSaving: false
        });

        var message = err.message || 'Server Error';
        react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].error(message);
        console.error(err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var isSaving = this.state.isSaving;
      var blog = this.props.blog;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout_BaseLayout__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], this.props.auth, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_BasePage__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
        containerClass: "editor-wrapper",
        className: "blog-editor-page"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_slateEditor_Editor__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
        isLoading: isSaving,
        initialValue: blog.story,
        save: this.updateBlog
      })));
    }
  }]);

  return BlogEditorUpdate;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_hoc_withAuth__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])('admin')(BlogEditorUpdate));

/***/ })
/******/ ]);