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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+P4":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("Bhuq");

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/HRN":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "/nHt":
/***/ (function(module, exports) {

module.exports = require("rc-upload");

/***/ }),

/***/ "/qac":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _keys = _interopRequireDefault(__webpack_require__("pLtp"));

var Api = {
  getUrl: function getUrl(url, query, encode) {
    var _q = [];

    if (query) {
      url += '?';
      (0, _keys.default)(query).sort(function (a, b) {
        return a.charCodeAt() - b.charCodeAt();
      }).map(function (key) {
        var val = encode ? encodeURIComponent(query[key]) : query[key];
        return _q.push("".concat(key, "=").concat(val));
      });
    }

    return url + _q.join('&');
  },
  convertCondition: function convertCondition(params) {
    (0, _keys.default)(params).forEach(function (item) {
      if (params[item] === '') delete params[item];
    });
    return params;
  },
  getUrlParam: function getUrlParam(url, name) {
    if (!name) {
      return null;
    }

    url = url || location.search;
    name = name.replace(/(?=[\\^$*+?.():|{}])/, '\\');
    var reg = new RegExp('(?:[?&]|^)' + name + '=([^?&#]*)', 'i');
    var match = url.match(reg);
    return !match ? null : match[1];
  },
  getAllParams: function getAllParams(url) {
    if (!url) {
      return null;
    }

    var _params = url.match(/[?|&][^=]*=[^&]*/ig);

    if (_params) {
      var params = {};

      _params.forEach(function (item) {
        var _match = item.match(/[?|&]([^=]*)=([^&]*)/);

        params[_match[1]] = decodeURIComponent(_match[2]);
      });

      return params;
    } else {
      return null;
    }
  }
};
module.exports = Api;

/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cMU6");


/***/ }),

/***/ "1Wvg":
/***/ (function(module, exports) {

module.exports = require("antd/lib/select/style");

/***/ }),

/***/ "2w/n":
/***/ (function(module, exports) {

module.exports = require("antd/lib/form/style");

/***/ }),

/***/ "3PsY":
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ }),

/***/ "3ece":
/***/ (function(module, exports) {

module.exports = require("antd/lib/dropdown/style");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "5PEn":
/***/ (function(module, exports) {

module.exports = {
	"layout-home": "layout-home___1ZLBK",
	"layoutHome": "layout-home___1ZLBK",
	"layout-home-hd": "layout-home-hd___1FVUV",
	"layoutHomeHd": "layout-home-hd___1FVUV",
	"layout-home-bd": "layout-home-bd___1qHr7",
	"layoutHomeBd": "layout-home-bd___1qHr7",
	"order-config": "order-config___wsgdX",
	"orderConfig": "order-config___wsgdX",
	"mobile-preview": "mobile-preview___3OGNv",
	"mobilePreview": "mobile-preview___3OGNv",
	"mobile-preview-canvas": "mobile-preview-canvas___2FKCE",
	"mobilePreviewCanvas": "mobile-preview-canvas___2FKCE",
	"size-form": "size-form___1Atp0",
	"sizeForm": "size-form___1Atp0"
};

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "9ubE":
/***/ (function(module, exports) {

module.exports = require("antd/lib/avatar");

/***/ }),

/***/ "A4pX":
/***/ (function(module, exports) {

module.exports = require("antd/lib/select");

/***/ }),

/***/ "AT/M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "BWRB":
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "BucJ":
/***/ (function(module, exports) {

module.exports = require("antd/lib/tag/style");

/***/ }),

/***/ "DnGC":
/***/ (function(module, exports) {

module.exports = require("antd/lib/button/style");

/***/ }),

/***/ "GqX/":
/***/ (function(module, exports) {

module.exports = require("antd/lib/input-number");

/***/ }),

/***/ "HgHO":
/***/ (function(module, exports) {

module.exports = require("antd/lib/dropdown");

/***/ }),

/***/ "HgRd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "antd/lib/message/style"
var style_ = __webpack_require__("XZ83");

// EXTERNAL MODULE: external "antd/lib/message"
var message_ = __webpack_require__("3PsY");
var message_default = /*#__PURE__*/__webpack_require__.n(message_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js
var object_assign = __webpack_require__("UXZV");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "qs"
var external_qs_ = __webpack_require__("eW3l");
var external_qs_default = /*#__PURE__*/__webpack_require__.n(external_qs_);

// EXTERNAL MODULE: ./config/locale.js
var locale = __webpack_require__("mVpe");
var locale_default = /*#__PURE__*/__webpack_require__.n(locale);

// EXTERNAL MODULE: ./public/utils/url.js
var utils_url = __webpack_require__("/qac");
var url_default = /*#__PURE__*/__webpack_require__.n(utils_url);

// CONCATENATED MODULE: ./public/utils/server.js







external_axios_default.a.defaults.withCredentials = true;
external_axios_default.a.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';
var methods = ['get', 'post'];
var envUrls = locale_default.a["production"].url;
var api = {};
methods.forEach(function (method) {
  api[method] = function (_url, data) {
    var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var headers = api.getDefaultHeaders();

    if (method == 'post') {
      headers['Content-Type'] = 'application/x-www-form-urlencoded';
      data = external_qs_default.a.stringify(data);
    }

    if (option.headers) assign_default()(headers, option.headers);
    var url = _url;

    if (!/^\/\//.test(_url)) {
      url = "".concat(envUrls.api).concat(_url);
    }

    return external_axios_default()({
      method: method,
      url: url,
      data: data,
      params: method == 'get' ? data : option.params || null,
      headers: headers
    }).then(function (res) {
      if (res.data.errcode !== 0) {
        if (res.data.errcode == 401) {
          location.href = '/login';
        } else {
          if (!option.silent) message_default.a.error(res.data.message);
        }
      }

      return option.response ? res : res.data;
    }).catch(function (err) {
      var _message = err.response ? err.response.data.message : err.message;

      if (!option.silent) _message.error(_message);
      return {
        errcode: 1,
        message: _message,
        error: err.response ? err.response.data : null
      };
    });
  };
});

api.getUrl = function (_url, data, encode) {
  var url = _url;
  var fullUrl = url_default.a.getUrl(url, data, encode);
  return {
    domain: envUrls.api,
    url: fullUrl,
    fullUrl: "".concat(envUrls.api).concat(fullUrl)
  };
};

api.getDefaultHeaders = function () {
  var token = localStorage.getItem('token');
  return {
    'Authorization': token ? "Bearer ".concat(token) : undefined
  };
};

/* harmony default export */ var server = (api);
// CONCATENATED MODULE: ./public/utils/index.js
/* concated harmony reexport MServer */__webpack_require__.d(__webpack_exports__, "a", function() { return server; });



/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "K47E":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "KUS5":
/***/ (function(module, exports) {

module.exports = {
	"upload-btn": "upload-btn___2ibQ0",
	"uploadBtn": "upload-btn___2ibQ0",
	"upload-btn-image": "upload-btn-image___31ISu",
	"uploadBtnImage": "upload-btn-image___31ISu",
	"icon-mask": "icon-mask___1pOre",
	"iconMask": "icon-mask___1pOre",
	"icon-btns": "icon-btns___1OP6S",
	"iconBtns": "icon-btns___1OP6S",
	"loading": "loading___3LfpB"
};

/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "MXA3":
/***/ (function(module, exports) {

module.exports = {
	"my-header": "my-header___3uNL_",
	"myHeader": "my-header___3uNL_",
	"menu-list": "menu-list___3eB4l",
	"menuList": "menu-list___3eB4l",
	"user-info": "user-info___3wdEr",
	"userInfo": "user-info___3wdEr",
	"user-text": "user-text___2X2CO",
	"userText": "user-text___2X2CO",
	"dropdown-icon": "dropdown-icon___1oKki",
	"dropdownIcon": "dropdown-icon___1oKki"
};

/***/ }),

/***/ "N9n2":
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__("SqZg");

var setPrototypeOf = __webpack_require__("vjea");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "OLV9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("kOwS");

// EXTERNAL MODULE: external "antd/lib/select/style"
var style_ = __webpack_require__("1Wvg");

// EXTERNAL MODULE: external "antd/lib/select"
var select_ = __webpack_require__("A4pX");
var select_default = /*#__PURE__*/__webpack_require__.n(select_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./component/select/index.jsx











var select_Select =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(Select, _Component);

  function Select() {
    Object(classCallCheck["a" /* default */])(this, Select);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Select).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(Select, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$options = _this$props.options,
          options = _this$props$options === void 0 ? [] : _this$props$options,
          _this$props$fieldName = _this$props.fieldName,
          fieldName = _this$props$fieldName === void 0 ? {
        label: 'label',
        value: 'value'
      } : _this$props$fieldName;
      return external_react_default.a.createElement(select_default.a, Object(esm_extends["a" /* default */])({
        showSearch: true,
        filterOption: function filterOption(input, option) {
          return option.props.children.replace(/\s*/g, '').toLowerCase().indexOf((input || '').replace(/\s*/g, '').toLowerCase()) >= 0;
        }
      }, this.props), options.map(function (item) {
        return external_react_default.a.createElement(select_default.a.Option, {
          key: item[fieldName.value],
          value: item[fieldName.value]
        }, item[fieldName.label]);
      }));
    }
  }]);

  return Select;
}(external_react_["Component"]);


// EXTERNAL MODULE: external "antd/lib/dropdown/style"
var dropdown_style_ = __webpack_require__("3ece");

// EXTERNAL MODULE: external "antd/lib/dropdown"
var dropdown_ = __webpack_require__("HgHO");
var dropdown_default = /*#__PURE__*/__webpack_require__.n(dropdown_);

// EXTERNAL MODULE: external "antd/lib/icon/style"
var icon_style_ = __webpack_require__("umso");

// EXTERNAL MODULE: external "antd/lib/icon"
var icon_ = __webpack_require__("BWRB");
var icon_default = /*#__PURE__*/__webpack_require__.n(icon_);

// EXTERNAL MODULE: external "antd/lib/avatar/style"
var avatar_style_ = __webpack_require__("UbzT");

// EXTERNAL MODULE: external "antd/lib/avatar"
var avatar_ = __webpack_require__("9ubE");
var avatar_default = /*#__PURE__*/__webpack_require__.n(avatar_);

// EXTERNAL MODULE: external "antd/lib/menu/style"
var menu_style_ = __webpack_require__("ecgk");

// EXTERNAL MODULE: external "antd/lib/menu"
var menu_ = __webpack_require__("a5Fm");
var menu_default = /*#__PURE__*/__webpack_require__.n(menu_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./component/header/style.less
var style = __webpack_require__("MXA3");
var header_style_default = /*#__PURE__*/__webpack_require__.n(style);

// CONCATENATED MODULE: ./component/header/index.jsx




















var header_Header =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(Header, _Component);

  function Header(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Header);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Header).call(this, props));
    var handles = ['handleLogout'];
    handles.forEach(function (item) {
      return _this[item] = _this[item].bind(Object(assertThisInitialized["a" /* default */])(_this));
    });
    return _this;
  }

  Object(createClass["a" /* default */])(Header, [{
    key: "handleLogout",
    value: function handleLogout() {
      var router = this.props.router;
      localStorage.removeItem('token');
      router.push('/login');
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          router = _this$props.router,
          user = _this$props.user;
      var menu = [{
        title: '下单',
        href: '/'
      }, {
        title: '订单列表',
        href: '/order'
      }];
      var userMenu = external_react_default.a.createElement(menu_default.a, {
        style: {
          width: 180
        }
      }, external_react_default.a.createElement(menu_default.a.Item, null, external_react_default.a.createElement("a", {
        onClick: this.handleLogout
      }, "\u9000\u51FA")));
      return external_react_default.a.createElement("div", {
        className: header_style_default.a.myHeader
      }, external_react_default.a.createElement("ul", {
        className: header_style_default.a.menuList
      }, menu.map(function (item) {
        return external_react_default.a.createElement("li", {
          key: item.href,
          className: external_classnames_default()({
            active: router.asPath == item.href
          })
        }, external_react_default.a.createElement(link_default.a, {
          href: item.href
        }, external_react_default.a.createElement("a", null, item.title)));
      })), external_react_default.a.createElement(dropdown_default.a, {
        overlay: userMenu
      }, external_react_default.a.createElement("a", {
        className: header_style_default.a.userInfo
      }, external_react_default.a.createElement(avatar_default.a, {
        style: {
          color: '#f56a00',
          backgroundColor: '#fde3cf'
        },
        icon: "user"
      }), external_react_default.a.createElement("span", {
        className: header_style_default.a.userText
      }, user.nickname), external_react_default.a.createElement(icon_default.a, {
        type: "caret-down",
        className: header_style_default.a.dropdownIcon
      }))));
    }
  }]);

  return Header;
}(external_react_["Component"]);


// EXTERNAL MODULE: external "antd/lib/button/style"
var button_style_ = __webpack_require__("DnGC");

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__("eGmO");
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "antd/lib/message/style"
var message_style_ = __webpack_require__("XZ83");

// EXTERNAL MODULE: external "antd/lib/message"
var message_ = __webpack_require__("3PsY");
var message_default = /*#__PURE__*/__webpack_require__.n(message_);

// EXTERNAL MODULE: external "rc-upload"
var external_rc_upload_ = __webpack_require__("/nHt");
var external_rc_upload_default = /*#__PURE__*/__webpack_require__.n(external_rc_upload_);

// EXTERNAL MODULE: ./public/utils/index.js + 1 modules
var utils = __webpack_require__("HgRd");

// EXTERNAL MODULE: ./config/locale.js
var locale = __webpack_require__("mVpe");
var locale_default = /*#__PURE__*/__webpack_require__.n(locale);

// EXTERNAL MODULE: ./component/upload-btn/style.less
var upload_btn_style = __webpack_require__("KUS5");
var upload_btn_style_default = /*#__PURE__*/__webpack_require__.n(upload_btn_style);

// CONCATENATED MODULE: ./component/upload-btn/index.jsx





















var upload_btn_UplaodButton =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(UplaodButton, _Component);

  function UplaodButton(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, UplaodButton);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(UplaodButton).call(this, props));
    _this.state = {
      upload: false,
      image: null
    };
    var handles = ['handleStart', 'handleError', 'handleSuccess', 'beforeUpload'];
    handles.forEach(function (item) {
      return _this[item] = _this[item].bind(Object(assertThisInitialized["a" /* default */])(_this));
    });
    return _this;
  }

  Object(createClass["a" /* default */])(UplaodButton, [{
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate(prevProps) {
      if (this.props.value != prevProps.value && this.props.value != this.state.image) {
        return true;
      }

      return false;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (snapshot) this.setState({
        image: this.props.value
      });
    }
  }, {
    key: "beforeUpload",
    value: function beforeUpload(file) {
      var limitSize = this.props.limitSize;

      if (limitSize && file.size > limitSize * 1024 * 1024) {
        message_default.a.error("\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7".concat(limitSize, "M\uFF01"));

        return false;
      }

      return true;
    }
  }, {
    key: "handleStart",
    value: function handleStart() {
      this.setState({
        upload: true
      });
    }
  }, {
    key: "handleError",
    value: function handleError() {
      this.setState({
        upload: false
      });
    }
  }, {
    key: "handleSuccess",
    value: function handleSuccess(res) {
      var onChange = this.props.onChange;

      if (res.errcode != 0) {
        message_default.a.error(res.message);

        this.setState({
          upload: false
        });
      } else {
        this.setState({
          image: res.filename,
          upload: false
        });
        typeof onChange == 'function' && onChange(res.filename);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _cx;

      var _this$state = this.state,
          upload = _this$state.upload,
          image = _this$state.image;
      var _this$props = this.props,
          buttonText = _this$props.buttonText,
          icon = _this$props.icon,
          action = _this$props.action,
          accept = _this$props.accept,
          buttonProps = _this$props.buttonProps,
          _this$props$show = _this$props.show,
          show = _this$props$show === void 0 ? true : _this$props$show;
      return external_react_default.a.createElement(external_rc_upload_default.a, {
        name: "files",
        withCredentials: true,
        action: utils["a" /* MServer */].getUrl(action || '/upload/userimage').fullUrl,
        accept: accept || 'image/png,image/jpg,image/jpeg',
        onStart: this.handleStart,
        onError: this.handleError,
        onSuccess: this.handleSuccess,
        beforeUpload: this.beforeUpload,
        className: upload_btn_style_default.a.uploadBtn,
        headers: utils["a" /* MServer */].getDefaultHeaders()
      }, image && show ? external_react_default.a.createElement("div", {
        className: external_classnames_default()((_cx = {}, Object(defineProperty["a" /* default */])(_cx, upload_btn_style_default.a.uploadBtnImage, true), Object(defineProperty["a" /* default */])(_cx, upload_btn_style_default.a.loading, upload), _cx)) // style={{ backgroundImage: `url(${locale[process.env.NODE_ENV].url.cdn}${image}` }}

      }, external_react_default.a.createElement("img", {
        alt: "",
        src: "".concat(locale_default.a["production"].url.cdn).concat(image)
      }), external_react_default.a.createElement("div", {
        className: upload_btn_style_default.a.iconMask
      }), external_react_default.a.createElement("div", {
        className: upload_btn_style_default.a.iconBtns
      }, external_react_default.a.createElement(icon_default.a, {
        type: upload ? 'loading' : 'edit'
      }))) : external_react_default.a.createElement(button_default.a, Object(esm_extends["a" /* default */])({
        icon: icon || 'plus',
        loading: upload
      }, buttonProps), upload ? '上传中...' : buttonText || '上传'));
    }
  }]);

  return UplaodButton;
}(external_react_["Component"]);


// EXTERNAL MODULE: external "antd/lib/modal/style"
var modal_style_ = __webpack_require__("bmdr");

// EXTERNAL MODULE: external "antd/lib/modal"
var modal_ = __webpack_require__("xKsY");
var modal_default = /*#__PURE__*/__webpack_require__.n(modal_);

// CONCATENATED MODULE: ./component/dialog/index.jsx









function CreateModal(ChildComponent) {
  var Dialog =
  /*#__PURE__*/
  function (_Component) {
    Object(inherits["a" /* default */])(Dialog, _Component);

    function Dialog(_props) {
      var _this;

      Object(classCallCheck["a" /* default */])(this, Dialog);

      _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Dialog).call(this, _props));
      _this.state = {
        el: null,
        visible: false,
        open: false
      };
      var handles = ['open', 'close', 'remove'];
      handles.forEach(function (item) {
        return _this[item] = _this[item].bind(Object(assertThisInitialized["a" /* default */])(_this));
      });
      return _this;
    }

    Object(createClass["a" /* default */])(Dialog, [{
      key: "open",
      value: function open() {
        var el = document.createElement('div');
        document.body.appendChild(el);
        this.setState({
          el: el,
          open: true,
          visible: true
        });
      }
    }, {
      key: "close",
      value: function close() {
        this.setState({
          visible: false
        });
      }
    }, {
      key: "remove",
      value: function remove() {
        var el = this.state.el;

        if (el && document.body.contains(el)) {
          document.body.removeChild(el);
        }

        this.setState({
          open: false
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this$state = this.state,
            open = _this$state.open,
            visible = _this$state.visible,
            el = _this$state.el;
        var dialogProps = {
          visible: visible,
          onCancel: this.close,
          afterClose: this.remove,
          getContainer: el,
          onOpen: this.open
        };
        return open ? external_react_default.a.createElement(ChildComponent, Object(esm_extends["a" /* default */])({}, dialogProps, this.props)) : null;
      }
    }]);

    return Dialog;
  }(external_react_["Component"]);

  return Object(external_react_["forwardRef"])(function (props, ref) {
    return external_react_default.a.createElement(Dialog, Object(esm_extends["a" /* default */])({}, props, {
      ref: ref
    }));
  });
}
// EXTERNAL MODULE: ./component/dialog-image-preview/style.less
var dialog_image_preview_style = __webpack_require__("VgUn");

// CONCATENATED MODULE: ./component/dialog-image-preview/index.jsx













var dialog_image_preview_DialogImagePreview =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(DialogImagePreview, _Component);

  function DialogImagePreview(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, DialogImagePreview);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(DialogImagePreview).call(this, props));
    _this.state = {
      submit: false
    };
    return _this;
  }

  Object(createClass["a" /* default */])(DialogImagePreview, [{
    key: "render",
    value: function render() {
      var image = this.props.image;
      return external_react_default.a.createElement(modal_default.a, Object(esm_extends["a" /* default */])({}, this.props, {
        className: "dialog-image-preview",
        footer: false,
        centered: true
      }), external_react_default.a.createElement("img", {
        src: image
      }));
    }
  }]);

  return DialogImagePreview;
}(external_react_["Component"]);

/* harmony default export */ var dialog_image_preview = (CreateModal(dialog_image_preview_DialogImagePreview));
// CONCATENATED MODULE: ./component/index.js
/* concated harmony reexport Select */__webpack_require__.d(__webpack_exports__, "c", function() { return select_Select; });
/* concated harmony reexport Header */__webpack_require__.d(__webpack_exports__, "b", function() { return header_Header; });
/* unused concated harmony import UploadBtn */
/* concated harmony reexport DialogImagePreview */__webpack_require__.d(__webpack_exports__, "a", function() { return dialog_image_preview; });






/***/ }),

/***/ "P7Vo":
/***/ (function(module, exports) {

module.exports = require("antd/lib/tag");

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "UbzT":
/***/ (function(module, exports) {

module.exports = require("antd/lib/avatar/style");

/***/ }),

/***/ "Uqqx":
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "VgUn":
/***/ (function(module, exports) {



/***/ }),

/***/ "WaGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hfKm");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "XZ83":
/***/ (function(module, exports) {

module.exports = require("antd/lib/message/style");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "ZDA2":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("iZP3");

var assertThisInitialized = __webpack_require__("K47E");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "a5Fm":
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "bmdr":
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal/style");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cMU6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_tag_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("BucJ");
/* harmony import */ var antd_lib_tag_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tag_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("P7Vo");
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2w/n");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("foLw");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_input_number_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("mfSZ");
/* harmony import */ var antd_lib_input_number_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_number_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_input_number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("GqX/");
/* harmony import */ var antd_lib_input_number__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("DnGC");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("eGmO");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("oRSk");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("Uqqx");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("zrwo");
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("XZ83");
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("3PsY");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("AT/M");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("Tit0");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("OLV9");
/* harmony import */ var public_utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("HgRd");
/* harmony import */ var public_theme_pages_index_less__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("5PEn");
/* harmony import */ var public_theme_pages_index_less__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(public_theme_pages_index_less__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var config_locale__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("mVpe");
/* harmony import */ var config_locale__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(config_locale__WEBPACK_IMPORTED_MODULE_23__);


























var Index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"])(Index, _Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"])(Index).call(this, props));
    _this.state = {
      brands: [],
      brandTypes: [],
      cates: [],
      brandTypeLoading: false,
      textureLoading: false,
      image: null,
      src: null,
      submit: false
    };
    var handles = ['handleChangeBrand', 'handleChangeBrandType', 'handleChangeTexture', 'handleSize', 'handleRotate', 'handlePreview', 'handleSubmit'];
    handles.forEach(function (item) {
      return _this[item] = _this[item].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"])(_this));
    });
    _this.condition = {
      brand_id: undefined,
      brand_type_id: undefined,
      texture_id: undefined
    };
    _this.imageUploadRef = Object(react__WEBPACK_IMPORTED_MODULE_19__["createRef"])();
    _this.imageBgRef = Object(react__WEBPACK_IMPORTED_MODULE_19__["createRef"])();
    _this.imageCameraRef = Object(react__WEBPACK_IMPORTED_MODULE_19__["createRef"])();
    _this.canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_19__["createRef"])();
    _this.canvasCameraRef = Object(react__WEBPACK_IMPORTED_MODULE_19__["createRef"])();
    _this.boxRef = Object(react__WEBPACK_IMPORTED_MODULE_19__["createRef"])();
    _this.previewDialogRef = Object(react__WEBPACK_IMPORTED_MODULE_19__["createRef"])();
    _this.uploadInputRef = null;
    _this.select = null; // 选择到的机型

    _this.moveOptions = {
      x: 0,
      rotate: 0
    };
    _this.hasKeyListener = false;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getBrands();
      this.getCanvas();
    }
  }, {
    key: "getBrands",
    value: function getBrands() {
      var _this2 = this;

      public_utils__WEBPACK_IMPORTED_MODULE_21__[/* MServer */ "a"].get('/cate/brand', {
        is_all: 1
      }).then(function (res) {
        if (res.errcode == 0) {
          _this2.setState({
            brands: res.data
          });
        }
      });
    }
  }, {
    key: "getCanvas",
    value: function getCanvas() {
      var canvas = this.canvasRef.current;
      var imageUpload = this.imageUploadRef.current;
      var imageBg = this.imageBgRef.current;
      var width = 918;
      var height = imageBg && imageBg.complete ? imageBg.height : imageUpload && imageUpload.complete ? imageUpload.height : 0;
      var context = canvas.getContext('2d');
      canvas.setAttribute('width', width);
      canvas.setAttribute('height', height);

      if (imageUpload && imageUpload.complete) {
        var _this$moveOptions = this.moveOptions,
            x = _this$moveOptions.x,
            y = _this$moveOptions.y,
            size = _this$moveOptions.size,
            rotate = _this$moveOptions.rotate;

        if (!this.moveOptions.size) {
          size = this.moveOptions.size = 918 / imageUpload.width;
          this.forceUpdate();
        }

        if (!y) {
          y = this.moveOptions.y = -(imageUpload.height * size - height) / 2;
        }

        canvas.setAttribute('width', width);
        canvas.setAttribute('height', height);

        if (rotate) {
          context.translate(width / 2, height / 2);
          context.rotate(rotate * Math.PI / 180);
          context.translate(-width / 2, -height / 2);
        }

        context.drawImage(imageUpload, x, y, imageUpload.width * size, imageUpload.height * size);
      }

      if (imageBg && imageBg.complete) {
        var imageLeft = width / 2 - imageBg.width / 2; // 左侧

        var imageDataLeft = context.getImageData(0, 0, imageLeft, height);

        for (var i = 0; i < imageDataLeft.data.length; i += 4) {
          imageDataLeft.data[i + 3] = 127.5;
        }

        context.putImageData(imageDataLeft, 0, 0); // 右侧

        var imageDataRight = context.getImageData(imageLeft + imageBg.width, 0, imageBg.width, height);

        for (var _i = 0; _i < imageDataRight.data.length; _i += 4) {
          imageDataRight.data[_i + 3] = 127.5;
        }

        context.putImageData(imageDataRight, imageLeft + imageBg.width, 0); // 背景图

        var imageData;

        if (imageUpload && imageUpload.complete) {
          imageData = context.getImageData(imageLeft, 0, imageBg.width, imageBg.height);
          var imageCanvas = document.createElement('canvas');
          var ctx = imageCanvas.getContext('2d');
          imageCanvas.setAttribute('width', width);
          imageCanvas.setAttribute('height', height);
          ctx.drawImage(imageBg, 0, 0, imageBg.width, imageBg.height, imageLeft, 0, imageBg.width, imageBg.height);

          var _imageData = ctx.getImageData(imageLeft, 0, imageBg.width, imageBg.height);

          for (var _i2 = 0; _i2 < _imageData.data.length; _i2 += 4) {
            if (_imageData.data[_i2 + 3] == 0) {
              imageData.data[_i2 + 3] = 127.5;
            }
          }
        } else {
          context.drawImage(imageBg, 0, 0, imageBg.width, imageBg.height, imageLeft, 0, imageBg.width, imageBg.height);
          imageData = context.getImageData(imageLeft, 0, imageBg.width, imageBg.height);

          for (var _i3 = 0; _i3 < imageData.data.length; _i3 += 4) {
            if (imageData.data[_i3 + 3] == 0) {
              imageData.data[_i3 + 3] = 127.5;
            } else {
              imageData.data[_i3 + 3] = 0;
            }
          }
        } // context.clearRect(0, 0, canvas.width, canvas.height);


        context.putImageData(imageData, imageLeft, 0);
      }
    }
  }, {
    key: "getCameraCanvas",
    value: function getCameraCanvas() {
      var imageCamera = this.imageCameraRef.current;
      var canvas = this.canvasCameraRef.current;
      var imageBg = this.imageBgRef.current;
      var width = 918;
      var height = imageBg.height;
      var imageLeft = width / 2 - imageBg.width / 2;
      var context = canvas.getContext('2d');
      canvas.setAttribute('width', width);
      canvas.setAttribute('height', height);
      context.drawImage(imageCamera, 0, 0, imageCamera.width, height, imageLeft, 0, imageBg.width, height);
      var imageData = context.getImageData(imageLeft, 0, imageBg.width, imageBg.height);

      for (var i = 0; i < imageData.data.length; i += 4) {
        if (imageData.data[i + 3] !== 0) {
          imageData.data[i] = 0;
          imageData.data[i + 1] = 0;
          imageData.data[i + 2] = 0;
        }
      }

      context.putImageData(imageData, imageLeft, 0);
    }
  }, {
    key: "getResultImage",
    value: function getResultImage() {
      var useCamera = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var imageBg = this.imageBgRef.current;
      var imageCamera = this.imageCameraRef.current;
      var canvas = this.canvasRef.current;
      var context = canvas.getContext('2d');
      var c = document.createElement('canvas');
      var ctx = c.getContext('2d');

      var _c = document.createElement('canvas');

      var imageLeft = canvas.width / 2 - imageBg.width / 2;
      var imageData = context.getImageData(imageLeft, 0, imageBg.width, imageBg.height);
      c.setAttribute('width', imageBg.width);
      c.setAttribute('height', imageBg.height);

      _c.setAttribute('width', imageBg.width);

      _c.setAttribute('height', imageBg.height);

      var _ctx = _c.getContext('2d');

      _ctx.drawImage(imageBg, 0, 0, imageBg.width, imageBg.height);

      var _imageData = _ctx.getImageData(0, 0, imageBg.width, imageBg.height);

      for (var i = 0; i < imageData.data.length; i += 4) {
        if (_imageData.data[i + 3] === 0) {
          imageData.data[i + 3] = 0;
        } else if (imageData.data[i + 3] == 0) {
          imageData.data[i] = 0;
          imageData.data[i + 1] = 0;
          imageData.data[i + 2] = 0;
          imageData.data[i + 3] = 255;
        }
      }

      if (useCamera && imageCamera) {
        var canvasCamera = document.createElement('canvas');
        var ctxCamera = canvasCamera.getContext('2d');
        canvasCamera.setAttribute('width', imageBg.width);
        canvasCamera.setAttribute('height', imageBg.height);
        ctxCamera.drawImage(imageCamera, 0, 0, imageBg.width, imageBg.height);
        var imageDataCamera = ctxCamera.getImageData(0, 0, imageBg.width, imageBg.height);

        for (var _i4 = 0; _i4 < imageDataCamera.data.length; _i4 += 4) {
          if (imageDataCamera.data[_i4 + 3] != 0) {
            imageData.data[_i4 + 3] = 0;
          }
        }
      }

      ctx.putImageData(imageData, 0, 0);
      return c.toDataURL('image/png');
    }
  }, {
    key: "listenerMove",
    value: function listenerMove() {
      var _this3 = this;

      var dom = this.boxRef.current;
      var startPageX = null;
      var startPageY = null;
      if (this.hasKeyListener && !dom) return;

      var moveListener = function moveListener(e) {
        _this3.moveOptions.x = e.pageX - startPageX;
        _this3.moveOptions.y = e.pageY - startPageY;

        _this3.getCanvas();
      };

      this.hasKeyListener = true;
      dom.addEventListener('mousedown', function (e) {
        startPageX = e.pageX - _this3.moveOptions.x;
        startPageY = e.pageY - _this3.moveOptions.y;
        dom.addEventListener('mousemove', moveListener);
      });
      dom.addEventListener('mouseup', function () {
        dom.removeEventListener('mousemove', moveListener);
      });
      document.addEventListener('keydown', function (e) {
        if ([87, 83, 82, 65, 68, 69].includes(e.keyCode)) {
          if (e.keyCode == 87) {
            _this3.moveOptions.y = _this3.moveOptions.y - 1;
          }

          if (e.keyCode == 83) {
            _this3.moveOptions.y = _this3.moveOptions.y + 1;
          }

          if (e.keyCode == 65) {
            _this3.moveOptions.x = _this3.moveOptions.x - 1;
          }

          if (e.keyCode == 68) {
            _this3.moveOptions.x = _this3.moveOptions.x + 1;
          }

          if (e.keyCode == 69) {
            _this3.moveOptions.size = _this3.moveOptions.size + 0.2 / 100;

            _this3.forceUpdate();
          }

          if (e.keyCode == 82) {
            _this3.moveOptions.size = _this3.moveOptions.size - 0.2 / 100;

            _this3.forceUpdate();
          }

          _this3.getCanvas();
        }
      });
    }
  }, {
    key: "handleChangeBrand",
    value: function handleChangeBrand(brand_id) {
      var _this4 = this;

      this.setState({
        brandTypeLoading: true
      });
      public_utils__WEBPACK_IMPORTED_MODULE_21__[/* MServer */ "a"].get('/cate/brandType', {
        brand_id: brand_id,
        is_all: 1
      }).then(function (res) {
        _this4.condition.brand_id = brand_id;

        if (res.errcode == 0) {
          _this4.condition.texture_id = undefined;
          _this4.condition.brand_type_id = undefined;
          _this4.select = null;
        }

        _this4.setState({
          brandTypes: res.errcode == 0 ? res.data : [],
          brandTypeLoading: false
        });
      });
    }
  }, {
    key: "handleChangeBrandType",
    value: function handleChangeBrandType(brand_type_id) {
      var _this5 = this;

      this.condition.brand_type_id = brand_type_id;
      this.setState({
        textureLoading: true
      });
      public_utils__WEBPACK_IMPORTED_MODULE_21__[/* MServer */ "a"].get('/cate/brandTypeTexture', {
        brand_type_id: brand_type_id
      }).then(function (res) {
        _this5.condition.texture_id = undefined;
        _this5.select = null;

        _this5.setState({
          cates: res.errcode == 0 ? res.data : [],
          textureLoading: false
        });
      });
    }
  }, {
    key: "handleChangeTexture",
    value: function handleChangeTexture(texture_id) {
      var _this6 = this;

      var cates = this.state.cates;
      this.condition.texture_id = texture_id;

      for (var i = 0; i < cates.length; i++) {
        var item = cates[i];

        if (item.texture_id == texture_id) {
          this.select = item;
          break;
        }
      }

      this.forceUpdate(function () {
        _this6.imageBgRef.current.onload = function () {
          _this6.getCanvas();
        };

        if (_this6.imageCameraRef.current) _this6.imageCameraRef.current.onload = function () {
          _this6.getCameraCanvas();
        };
      });
    }
  }, {
    key: "handleSize",
    value: function handleSize(value) {
      this.moveOptions.size = value / 100;
      this.forceUpdate();
      this.getCanvas();
    }
  }, {
    key: "handleRotate",
    value: function handleRotate(value) {
      this.moveOptions.rotate = value;
      this.getCanvas();
    }
  }, {
    key: "handlePreview",
    value: function handlePreview() {
      var _this7 = this;

      if (!this.select) {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_12___default.a.error('请先选择机型');

        return;
      }

      if (!this.state.image) {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_12___default.a.error('请先上传定制图片');

        return;
      }

      this.setState({
        src: this.getResultImage(true)
      }, function () {
        _this7.previewDialogRef.current.open();
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      var _this8 = this;

      e.preventDefault();
      e.stopPropagation();

      if (!this.select) {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_12___default.a.error('请先选择机型');

        return;
      }

      if (!this.state.image) {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_12___default.a.error('请先上传定制图片');

        return;
      }

      var validateFields = this.props.form.validateFields;
      validateFields(function (err, values) {
        if (!err) {
          _this8.setState({
            submit: true
          });

          public_utils__WEBPACK_IMPORTED_MODULE_21__[/* MServer */ "a"].post('/order/save', Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])({}, values, {
            cate_id: _this8.select.id,
            image: _this8.getResultImage(),
            image1: _this8.getResultImage(false)
          })).then(function (res) {
            _this8.setState({
              submit: false
            });

            if (res.errcode == 0) {
              antd_lib_message__WEBPACK_IMPORTED_MODULE_12___default.a.success('提交成功');
            }
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this9 = this;

      var _this$state = this.state,
          brands = _this$state.brands,
          brandTypes = _this$state.brandTypes,
          cates = _this$state.cates,
          brandTypeLoading = _this$state.brandTypeLoading,
          textureLoading = _this$state.textureLoading,
          image = _this$state.image,
          src = _this$state.src,
          submit = _this$state.submit;
      var getFieldDecorator = this.props.form.getFieldDecorator;
      var _this$condition = this.condition,
          brand_id = _this$condition.brand_id,
          brand_type_id = _this$condition.brand_type_id,
          texture_id = _this$condition.texture_id;
      var select = this.select;
      return react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("div", {
        className: "page-layout-center"
      }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(component__WEBPACK_IMPORTED_MODULE_20__[/* DialogImagePreview */ "a"], {
        ref: this.previewDialogRef,
        image: src,
        width: this.imageBgRef.current && this.imageBgRef.current.width
      }), react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("div", {
        className: public_theme_pages_index_less__WEBPACK_IMPORTED_MODULE_22___default.a.layoutHome
      }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("div", {
        className: public_theme_pages_index_less__WEBPACK_IMPORTED_MODULE_22___default.a.layoutHomeHd
      }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(component__WEBPACK_IMPORTED_MODULE_20__[/* Select */ "c"], {
        options: brands,
        fieldName: {
          label: 'name',
          value: 'id'
        },
        placeholder: "\u9009\u62E9\u54C1\u724C",
        style: {
          width: 180
        },
        onChange: this.handleChangeBrand,
        value: brand_id
      }), react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(component__WEBPACK_IMPORTED_MODULE_20__[/* Select */ "c"], {
        options: brandTypes,
        fieldName: {
          label: 'name',
          value: 'id'
        },
        placeholder: "\u9009\u62E9\u578B\u53F7",
        style: {
          width: 180
        },
        value: brand_type_id,
        loading: brandTypeLoading,
        onChange: this.handleChangeBrandType
      }), react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(component__WEBPACK_IMPORTED_MODULE_20__[/* Select */ "c"], {
        options: cates,
        fieldName: {
          label: 'texture_name',
          value: 'texture_id'
        },
        placeholder: "\u9009\u62E9\u6750\u8D28",
        style: {
          width: 180
        },
        loading: textureLoading,
        value: texture_id,
        onChange: this.handleChangeTexture
      }), react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_9___default.a, {
        className: "hide",
        type: "file",
        ref: function ref(e) {
          return _this9.uploadInputRef = e && e.input;
        },
        accept: 'image/png,image/jpg,image/jpeg',
        onChange: function onChange(e) {
          var reader = new FileReader();
          reader.readAsDataURL(e.target.files[0]);
          var that = _this9;

          reader.onload = function () {
            that.setState({
              image: this.result
            }, function () {
              that.imageUploadRef.current.onload = function () {
                that.getCanvas();
                that.listenerMove();
              };
            });
          };
        }
      }), react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_7___default.a, {
        type: "primary",
        icon: "cloud-upload",
        onClick: function onClick() {
          return _this9.uploadInputRef.click();
        }
      }, "\u4E0A\u4F20\u56FE\u7247")), react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("div", {
        className: public_theme_pages_index_less__WEBPACK_IMPORTED_MODULE_22___default.a.layoutHomeBd
      }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("div", {
        className: public_theme_pages_index_less__WEBPACK_IMPORTED_MODULE_22___default.a.mobilePreview
      }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("div", {
        className: public_theme_pages_index_less__WEBPACK_IMPORTED_MODULE_22___default.a.mobilePreviewCanvas,
        ref: this.boxRef
      }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("div", {
        className: "hide"
      }, image ? react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("img", {
        ref: this.imageUploadRef,
        crossOrigin: "",
        className: select ? 'hide' : '',
        src: image
      }) : null, select ? react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("img", {
        ref: this.imageBgRef,
        crossOrigin: "",
        src: "".concat(config_locale__WEBPACK_IMPORTED_MODULE_23___default.a["production"].url.cdn, "/").concat(select.size_img)
      }) : null, select && select.camera_img ? react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("img", {
        ref: this.imageCameraRef,
        crossOrigin: "",
        src: "".concat(config_locale__WEBPACK_IMPORTED_MODULE_23___default.a["production"].url.cdn, "/").concat(select.camera_img)
      }) : null), react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("canvas", {
        ref: this.canvasRef
      }), react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("canvas", {
        ref: this.canvasCameraRef
      }))), react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("div", {
        className: public_theme_pages_index_less__WEBPACK_IMPORTED_MODULE_22___default.a.orderConfig
      }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: "inline-form ".concat(public_theme_pages_index_less__WEBPACK_IMPORTED_MODULE_22___default.a.sizeForm)
      }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
        label: "\u7F29\u653E"
      }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_5___default.a, {
        precision: 2,
        value: (this.moveOptions.size || 0) * 100,
        onChange: this.handleSize
      }), react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("span", {
        style: {
          marginLeft: '10px'
        }
      }, "%")), react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
        label: "\u65CB\u8F6C"
      }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_5___default.a, {
        defaultValue: 0,
        onChange: this.handleRotate
      })), react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a.Item, null, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(antd_lib_tag__WEBPACK_IMPORTED_MODULE_1___default.a, null, "W"), "\u4E0A\u79FB"), "\uFF0C", react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(antd_lib_tag__WEBPACK_IMPORTED_MODULE_1___default.a, null, "S"), "\u4E0B\u79FB"), "\uFF0C", react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(antd_lib_tag__WEBPACK_IMPORTED_MODULE_1___default.a, null, "A"), "\u5DE6\u79FB"), "\uFF0C", react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(antd_lib_tag__WEBPACK_IMPORTED_MODULE_1___default.a, null, "D"), "\u53F3\u79FB"), "\uFF0C", react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(antd_lib_tag__WEBPACK_IMPORTED_MODULE_1___default.a, null, "E"), "\u653E\u5927"), "\uFF0C", react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(antd_lib_tag__WEBPACK_IMPORTED_MODULE_1___default.a, null, "R"), "\u7F29\u5C0F"))), react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a, {
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
        label: "\u914D\u8D27\u6807\u7B7E"
      }, getFieldDecorator('order_sn', {
        rules: [{
          required: true,
          message: '配货标签不能为空'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_9___default.a, {
        placeholder: "\u586B\u5199\u6807\u7B7E"
      }))), react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
        label: "\u8BA2\u8D27\u6570\u91CF"
      }, getFieldDecorator('quantity', {
        rules: [{
          required: true,
          message: '订货数量不能为空'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_5___default.a, {
        precision: 0,
        min: 1
      }))), select && select.texture_attr.length ? react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
        label: "\u5C5E\u6027(\u989C\u8272)"
      }, getFieldDecorator('texture_attr_id', {
        rules: [{
          required: true,
          message: '请先选择属性'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(component__WEBPACK_IMPORTED_MODULE_20__[/* Select */ "c"], {
        options: select.texture_attr,
        fieldName: {
          label: 'texture_attr_name',
          value: 'texture_attr_id'
        },
        placeholder: "\u9009\u62E9\u5C5E\u6027",
        style: {
          width: 180
        }
      }))) : null, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a.Item, null, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_7___default.a, {
        type: "primary",
        htmlType: "submit",
        loading: submit
      }, "\u63D0\u4EA4\u8BA2\u5355"), react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: {
          marginLeft: '10px'
        },
        onClick: this.handlePreview
      }, "\u9884\u89C8")))))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_19__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a.create()(Index));

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__("KI45");

var _stringify = _interopRequireDefault(__webpack_require__("9Jkg"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__("bzos");

var react_1 = __importStar(__webpack_require__("cDcd"));

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var router_1 = __importStar(__webpack_require__("4Q3z"));

var utils_1 = __webpack_require__("p8BD");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (false) { var exact, warn; }

exports.default = Link;

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "eGmO":
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "eW3l":
/***/ (function(module, exports) {

module.exports = require("qs");

/***/ }),

/***/ "ecgk":
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu/style");

/***/ }),

/***/ "foLw":
/***/ (function(module, exports) {

module.exports = require("antd/lib/form");

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "kOwS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UXZV");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "mVpe":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  development: {
    url: {
      api: '//localhost:7001',
      cdn: 'http://pxyn2mfh8.bkt.clouddn.com/',
      cdnStatic: 'http://pxynkk8s9.bkt.clouddn.com/',
      cdnUser: 'http://pya5657b1.bkt.clouddn.com/'
    }
  },
  production: {
    url: {
      api: '//47.99.38.214:7001',
      cdn: 'http://pxyn2mfh8.bkt.clouddn.com/',
      cdnStatic: 'http://pxynkk8s9.bkt.clouddn.com/',
      cdnUser: 'http://pya5657b1.bkt.clouddn.com/'
    }
  }
};

/***/ }),

/***/ "mfSZ":
/***/ (function(module, exports) {

module.exports = require("antd/lib/input-number/style");

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "oRSk":
/***/ (function(module, exports) {

module.exports = require("antd/lib/input/style");

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "umso":
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon/style");

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "vjea":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "xKsY":
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "zrwo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Jo+v");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4mXO");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("pLtp");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vYYK");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ })

/******/ });