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

/***/ "/XdI":
/***/ (function(module, exports) {

module.exports = require("antd/lib/pagination/style");

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

module.exports = __webpack_require__("SCcO");


/***/ }),

/***/ "1Wvg":
/***/ (function(module, exports) {

module.exports = require("antd/lib/select/style");

/***/ }),

/***/ "27qp":
/***/ (function(module, exports) {

module.exports = require("antd/lib/popover");

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
	"preview-image": "preview-image___2tUtM",
	"previewImage": "preview-image___2tUtM",
	"remark-box": "remark-box___CFbBA",
	"remarkBox": "remark-box___CFbBA",
	"popover-setting": "popover-setting___2NF5g",
	"popoverSetting": "popover-setting___2NF5g",
	"tooltip-content": "tooltip-content___30Bhr",
	"tooltipContent": "tooltip-content___30Bhr",
	"mobile-preview": "mobile-preview___3OGNv",
	"mobilePreview": "mobile-preview___3OGNv",
	"mobile-preview-canvas": "mobile-preview-canvas___2FKCE",
	"mobilePreviewCanvas": "mobile-preview-canvas___2FKCE",
	"size-form": "size-form___1Atp0",
	"sizeForm": "size-form___1Atp0",
	"box1": "box1___24n8V",
	"box2": "box2___3YA3k",
	"phone-preview": "phone-preview___3WZlp",
	"phonePreview": "phone-preview___3WZlp",
	"phone-box": "phone-box___2ct6e",
	"phoneBox": "phone-box___2ct6e",
	"phone-box-body": "phone-box-body___SaMj9",
	"phoneBoxBody": "phone-box-body___SaMj9",
	"phone-box-body-image": "phone-box-body-image___Sv077",
	"phoneBoxBodyImage": "phone-box-body-image___Sv077",
	"phone-box-bg": "phone-box-bg___5uRK4",
	"phoneBoxBg": "phone-box-bg___5uRK4",
	"upload-image": "upload-image___3UPPe",
	"uploadImage": "upload-image___3UPPe",
	"phone-preview-main": "phone-preview-main___3E4tm",
	"phonePreviewMain": "phone-preview-main___3E4tm",
	"phone-preview-camera": "phone-preview-camera___iQphg",
	"phonePreviewCamera": "phone-preview-camera___iQphg",
	"home-footer": "home-footer___1NLQ1",
	"homeFooter": "home-footer___1NLQ1"
};

/***/ }),

/***/ "6BQ9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wa65");

/***/ }),

/***/ "7GvT":
/***/ (function(module, exports) {

module.exports = require("antd/lib/empty");

/***/ }),

/***/ "8IBW":
/***/ (function(module, exports) {

module.exports = require("antd/lib/empty/style");

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

/***/ "AF2q":
/***/ (function(module, exports) {

module.exports = require("antd/lib/tooltip/style");

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

/***/ "CUto":
/***/ (function(module, exports) {

module.exports = require("antd/lib/cascader");

/***/ }),

/***/ "DnGC":
/***/ (function(module, exports) {

module.exports = require("antd/lib/button/style");

/***/ }),

/***/ "EJbO":
/***/ (function(module, exports) {

module.exports = require("antd/lib/checkbox/style");

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
    }

    if (option.headers) assign_default()(headers, option.headers);

    if (method == 'post' && headers['Content-Type'] == 'application/x-www-form-urlencoded') {
      data = external_qs_default.a.stringify(data);
    }

    var url = _url;

    if (!/^\/\//.test(_url)) {
      url = "".concat(envUrls.api).concat(_url);
    }

    return external_axios_default()({
      method: method,
      url: url,
      data: data,
      params: method == 'get' ? data : option.params || null,
      headers: headers,
      withCredentials: typeof option.withCredentials == 'undefined' ? true : option.withCredentials
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return convertBase64UrlToBlob; });
/* concated harmony reexport MServer */__webpack_require__.d(__webpack_exports__, "a", function() { return server; });
/* concated harmony reexport Url */__webpack_require__.d(__webpack_exports__, "b", function() { return url_default.a; });



var convertBase64UrlToBlob = function convertBase64UrlToBlob(urlData) {
  var bytes = window.atob(urlData.split(',')[1]); //去掉url的头，并转换为byte  
  //处理异常,将ascii码小于0的转换为大于0  

  var ab = new ArrayBuffer(bytes.length);
  var ia = new Uint8Array(ab);

  for (var i = 0; i < bytes.length; i++) {
    ia[i] = bytes.charCodeAt(i);
  }

  return new Blob([ab], {
    type: 'image/png'
  });
};



/***/ }),

/***/ "J3/a":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "JCEF":
/***/ (function(module, exports) {

module.exports = require("antd/lib/checkbox");

/***/ }),

/***/ "JHZV":
/***/ (function(module, exports) {

module.exports = require("antd/lib/radio/style");

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
	"local-btn": "local-btn___2xFz5",
	"localBtn": "local-btn___2xFz5",
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
var header_style = __webpack_require__("MXA3");
var header_style_default = /*#__PURE__*/__webpack_require__.n(header_style);

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
      }, {
        title: '账单列表',
        href: '/bill'
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
            active: router.pathname == item.href
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
      }, user.username), external_react_default.a.createElement(icon_default.a, {
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

// EXTERNAL MODULE: external "antd/lib/input/style"
var input_style_ = __webpack_require__("oRSk");

// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__("Uqqx");
var input_default = /*#__PURE__*/__webpack_require__.n(input_);

// CONCATENATED MODULE: ./component/upload-btn/local.jsx















var local_LocalBtn =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(LocalBtn, _Component);

  function LocalBtn(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, LocalBtn);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(LocalBtn).call(this, props));
    _this.uploadInputRef = null;
    var handles = ['handleUpload'];
    handles.forEach(function (item) {
      return _this[item] = _this[item].bind(Object(assertThisInitialized["a" /* default */])(_this));
    });
    return _this;
  }

  Object(createClass["a" /* default */])(LocalBtn, [{
    key: "handleUpload",
    value: function handleUpload() {
      this.uploadInputRef.click();
    }
  }, {
    key: "onUpload",
    value: function onUpload(file) {
      var onUpload = this.props.onUpload;
      onUpload && onUpload(file);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          text = _this$props.text,
          accept = _this$props.accept,
          style = _this$props.style,
          buttonProps = _this$props.buttonProps;
      return external_react_default.a.createElement("div", {
        className: upload_btn_style_default.a.localBtn,
        style: style
      }, external_react_default.a.createElement(input_default.a, {
        className: "hide",
        type: "file",
        ref: function ref(e) {
          return _this2.uploadInputRef = e && e.input;
        },
        accept: accept || 'image/png,image/jpg,image/jpeg',
        onChange: function onChange(e) {
          return _this2.onUpload(e.target.files[0]);
        }
      }), external_react_default.a.createElement(button_default.a, Object(esm_extends["a" /* default */])({}, buttonProps, {
        onClick: this.handleUpload
      }), text || '上传文件'));
    }
  }]);

  return LocalBtn;
}(external_react_["Component"]);


// CONCATENATED MODULE: ./component/upload-btn/index.jsx






















var upload_btn_UploadButton =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(UploadButton, _Component);

  function UploadButton(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, UploadButton);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(UploadButton).call(this, props));
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

  Object(createClass["a" /* default */])(UploadButton, [{
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

  return UploadButton;
}(external_react_["Component"]);


upload_btn_UploadButton.Local = local_LocalBtn;
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
// EXTERNAL MODULE: external "antd/lib/pagination/style"
var pagination_style_ = __webpack_require__("/XdI");

// EXTERNAL MODULE: external "antd/lib/pagination"
var pagination_ = __webpack_require__("gR/H");
var pagination_default = /*#__PURE__*/__webpack_require__.n(pagination_);

// EXTERNAL MODULE: external "antd/lib/spin/style"
var spin_style_ = __webpack_require__("UEsk");

// EXTERNAL MODULE: external "antd/lib/spin"
var spin_ = __webpack_require__("vEvA");
var spin_default = /*#__PURE__*/__webpack_require__.n(spin_);

// EXTERNAL MODULE: external "antd/lib/empty/style"
var empty_style_ = __webpack_require__("8IBW");

// EXTERNAL MODULE: external "antd/lib/empty"
var empty_ = __webpack_require__("7GvT");
var empty_default = /*#__PURE__*/__webpack_require__.n(empty_);

// EXTERNAL MODULE: external "antd/lib/popconfirm/style"
var popconfirm_style_ = __webpack_require__("sN99");

// EXTERNAL MODULE: external "antd/lib/popconfirm"
var popconfirm_ = __webpack_require__("QghY");
var popconfirm_default = /*#__PURE__*/__webpack_require__.n(popconfirm_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("p0XB");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js

function _arrayWithHoles(arr) {
  if (is_array_default()(arr)) return arr;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js
var get_iterator = __webpack_require__("XXOK");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = get_iterator_default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
// EXTERNAL MODULE: external "clipboard"
var external_clipboard_ = __webpack_require__("sMIJ");
var external_clipboard_default = /*#__PURE__*/__webpack_require__.n(external_clipboard_);

// EXTERNAL MODULE: external "antd/lib/form/style"
var form_style_ = __webpack_require__("2w/n");

// EXTERNAL MODULE: external "antd/lib/form"
var form_ = __webpack_require__("foLw");
var form_default = /*#__PURE__*/__webpack_require__.n(form_);

// CONCATENATED MODULE: ./component/dialog-update-address/index.jsx























var dialog_update_address_DialogUpdateAddress =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(DialogUpdateAddress, _Component);

  function DialogUpdateAddress(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, DialogUpdateAddress);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(DialogUpdateAddress).call(this, props));
    _this.state = {
      submit: false
    };
    var handles = ['handleSubmit'];
    handles.forEach(function (item) {
      return _this[item] = _this[item].bind(Object(assertThisInitialized["a" /* default */])(_this));
    });
    return _this;
  }

  Object(createClass["a" /* default */])(DialogUpdateAddress, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      var _this2 = this;

      e.preventDefault();
      e.stopPropagation();
      var _this$props = this.props,
          validateFields = _this$props.form.validateFields,
          onSuccess = _this$props.onSuccess,
          onCancel = _this$props.onCancel,
          editRecord = _this$props.editRecord;
      validateFields(function (err, values) {
        if (!err) {
          _this2.setState({
            submit: true
          });

          utils["a" /* MServer */].post('/order/updateaddress', Object(objectSpread["a" /* default */])({}, values, {
            id: editRecord.id
          })).then(function (res) {
            _this2.setState({
              submit: false
            });

            if (res.errcode == 0) {
              message_default.a.success('修改成功');

              onSuccess && onSuccess();
              onCancel();
            }
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var submit = this.state.submit;
      var _this$props2 = this.props,
          getFieldDecorator = _this$props2.form.getFieldDecorator,
          editRecord = _this$props2.editRecord;
      return external_react_default.a.createElement(modal_default.a, Object(esm_extends["a" /* default */])({
        title: "\u4FEE\u6539\u6536\u4EF6\u4EBA\u4FE1\u606F"
      }, this.props, {
        onOk: this.handleSubmit,
        confirmLoading: submit
      }), external_react_default.a.createElement(form_default.a, {
        className: "inline-form",
        onSubmit: this.handleSubmit
      }, external_react_default.a.createElement(form_default.a.Item, {
        label: "\u6536\u4EF6\u4EBA"
      }, getFieldDecorator('consignee', {
        rules: [{
          required: true,
          message: '请输入收件人'
        }],
        initialValue: editRecord && editRecord.consignee
      })(external_react_default.a.createElement(input_default.a, null))), external_react_default.a.createElement(form_default.a.Item, {
        label: "\u8054\u7CFB\u624B\u673A"
      }, getFieldDecorator('mobile', {
        rules: [{
          required: true,
          message: '请输入联系手机'
        }],
        initialValue: editRecord && editRecord.mobile
      })(external_react_default.a.createElement(input_default.a, null))), external_react_default.a.createElement(form_default.a.Item, {
        label: "\u7701"
      }, getFieldDecorator('province', {
        rules: [{
          required: true,
          message: '请输入省'
        }],
        initialValue: editRecord && editRecord.province
      })(external_react_default.a.createElement(input_default.a, null))), external_react_default.a.createElement(form_default.a.Item, {
        label: "\u5E02"
      }, getFieldDecorator('city', {
        rules: [{
          required: true,
          message: '请输入市'
        }],
        initialValue: editRecord && editRecord.city
      })(external_react_default.a.createElement(input_default.a, null))), external_react_default.a.createElement(form_default.a.Item, {
        label: "\u533A"
      }, getFieldDecorator('district', {
        rules: [{
          required: true,
          message: '请输入区'
        }],
        initialValue: editRecord && editRecord.district
      })(external_react_default.a.createElement(input_default.a, null))), external_react_default.a.createElement(form_default.a.Item, {
        label: "\u8BE6\u7EC6\u5730\u5740"
      }, getFieldDecorator('address', {
        rules: [{
          required: true,
          message: '请输入详细地址'
        }],
        initialValue: editRecord && editRecord.address
      })(external_react_default.a.createElement(input_default.a, null))), external_react_default.a.createElement(form_default.a.Item, {
        className: "hide"
      }, external_react_default.a.createElement(button_default.a, {
        htmlType: "submit"
      }, "\u4FDD\u5B58"))));
    }
  }]);

  return DialogUpdateAddress;
}(external_react_["Component"]);

/* harmony default export */ var dialog_update_address = (CreateModal(form_default.a.create()(dialog_update_address_DialogUpdateAddress)));
// EXTERNAL MODULE: ./component/order-list/style.less
var order_list_style = __webpack_require__("g0VI");
var order_list_style_default = /*#__PURE__*/__webpack_require__.n(order_list_style);

// CONCATENATED MODULE: ./component/order-list/index.jsx
































function ImageHover(_ref) {
  var src = _ref.src,
      onClick = _ref.onClick;

  var _useState = Object(external_react_["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  return external_react_default.a.createElement("div", {
    onMouseOver: function onMouseOver() {
      return setShow(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setShow(false);
    },
    onClick: onClick,
    className: order_list_style_default.a.tableImage
  }, external_react_default.a.createElement("img", {
    src: "".concat(src, "?imageView2/0/w/200")
  }), show ? external_react_default.a.createElement("span", null, "\u70B9\u51FB\u67E5\u770B") : null);
}

var order_list_OrderList =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(OrderList, _Component);

  function OrderList(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, OrderList);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(OrderList).call(this, props));
    _this.state = {
      list: props.list || [],
      pager: {
        current: 1,
        pageSize: 10,
        total: 0
      },
      editRecord: null,
      loading: true,
      image: null,
      expressList: []
    };
    _this.imagePreviewRef = Object(external_react_["createRef"])();
    _this.updateAddressRef = Object(external_react_["createRef"])();
    _this.condition = props.condition || {};
    return _this;
  }

  Object(createClass["a" /* default */])(OrderList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.props.list) this.getList();
      this.getExpress();
    }
  }, {
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate(prevProps) {
      if (this.props.list != prevProps.list && this.props.list != this.state.list) {
        return true;
      }

      return false;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (snapshot) this.setState({
        list: this.props.list,
        loading: false
      });
    }
  }, {
    key: "getList",
    value: function getList() {
      var _this2 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.pager.current;
      var _this$state = this.state,
          pager = _this$state.pager,
          loading = _this$state.loading;
      var action = this.props.action;
      pager.current = page;
      if (!loading) this.setState({
        loading: true,
        pager: pager
      });
      utils["a" /* MServer */].get(action || '/order/list', Object(objectSpread["a" /* default */])({
        page: page,
        pagesize: pager.pageSize
      }, this.condition)).then(function (res) {
        if (res.errcode == 0) pager.total = res.total;

        _this2.setState({
          loading: false,
          list: res.errcode == 0 ? res.data : [],
          pager: pager
        });
      });
    }
  }, {
    key: "getExpress",
    value: function getExpress() {
      var _this3 = this;

      utils["a" /* MServer */].get('/logis/list', {
        is_all: 1
      }).then(function (res) {
        if (res.errcode == 0) {
          _this3.setState({
            expressList: res.data
          });
        }
      });
    }
  }, {
    key: "reload",
    value: function reload() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$page = _ref2.page,
          page = _ref2$page === void 0 ? this.state.pager.current : _ref2$page,
          _ref2$condition = _ref2.condition,
          condition = _ref2$condition === void 0 ? {} : _ref2$condition;

      this.condition = Object(objectSpread["a" /* default */])({}, this.condition, condition);
      this.getList(page);
    }
  }, {
    key: "handleOpenImagePreview",
    value: function handleOpenImagePreview(image) {
      var _this4 = this;

      if (this.imagePreviewRef.current) {
        this.setState({
          image: image
        }, function () {
          _this4.imagePreviewRef.current.open();
        });
      }
    }
  }, {
    key: "handlePay",
    value: function handlePay(id) {
      var _this5 = this;

      utils["a" /* MServer */].post('/order/pay', {
        id: id
      }).then(function (res) {
        if (res.errcode == 0) {
          message_default.a.success('付款成功');

          _this5.getList();
        }
      });
    }
  }, {
    key: "handleClose",
    value: function handleClose(id) {
      var _this6 = this;

      utils["a" /* MServer */].post('/order/close', {
        id: id
      }).then(function (res) {
        if (res.errcode == 0) {
          message_default.a.success('关闭成功');

          _this6.getList();
        }
      });
    }
  }, {
    key: "handleDeleteTrade",
    value: function handleDeleteTrade(id) {
      var _this7 = this;

      utils["a" /* MServer */].post('/order/userdelete', {
        id: id
      }).then(function (res) {
        if (res.errcode == 0) {
          message_default.a.success('删除成功');

          _this7.getList();
        }
      });
    }
  }, {
    key: "handleUpdateAddress",
    value: function handleUpdateAddress(record) {
      var _this8 = this;

      this.setState({
        editRecord: record
      }, function () {
        if (_this8.updateAddressRef.current) _this8.updateAddressRef.current.open();
      });
    }
  }, {
    key: "handleDeleteOrder",
    value: function handleDeleteOrder(id) {
      var _this9 = this;

      utils["a" /* MServer */].post('/order/deleteorder', {
        id: id
      }).then(function (res) {
        if (res.errcode == 0) {
          message_default.a.success('删除成功');

          _this9.getList();
        }
      });
    }
  }, {
    key: "handleDeletePart",
    value: function handleDeletePart(id) {
      var _this10 = this;

      utils["a" /* MServer */].post('/order/deletepart', {
        id: id
      }).then(function (res) {
        if (res.errcode == 0) {
          message_default.a.success('删除成功');

          _this10.getList();
        }
      });
    }
  }, {
    key: "handleApplyRefund",
    value: function handleApplyRefund(id) {
      var _this11 = this;

      utils["a" /* MServer */].post('/order/applyrefund', {
        id: id
      }).then(function (res) {
        if (res.errcode == 0) {
          message_default.a.success('申请成功');

          _this11.getList();
        }
      });
    }
  }, {
    key: "handleChangeExpress",
    value: function handleChangeExpress(id, express_id) {
      var _this12 = this;

      modal_default.a.confirm({
        title: '确认要修改快递吗？',
        onOk: function onOk() {
          utils["a" /* MServer */].post('/order/changeexpress', {
            id: id,
            express_id: express_id
          }).then(function (res) {
            if (res.errcode == 0) {
              message_default.a.success('修改成功');

              _this12.getList();
            }
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this13 = this;

      var _this$state2 = this.state,
          list = _this$state2.list,
          image = _this$state2.image,
          pager = _this$state2.pager,
          loading = _this$state2.loading,
          editRecord = _this$state2.editRecord,
          expressList = _this$state2.expressList;
      var colSpan = 9;
      var statusMap = {
        0: {
          text: '待审核',
          className: 'text-warning'
        },
        10: {
          text: '等待打印',
          className: 'text-info'
        },
        20: {
          text: '已打印',
          className: 'text-success'
        },
        30: {
          text: '待付款',
          className: 'text-warning'
        },
        40: {
          text: '已关闭',
          className: 'text-gray'
        },
        50: {
          text: '待发货',
          className: 'text-warning'
        },
        60: {
          text: '已发货',
          className: 'text-success'
        }
      };
      var refundStatusMap = {
        10: {
          text: '退款中',
          className: 'text-error'
        },
        20: {
          text: '退款成功',
          className: 'text-success'
        },
        40: {
          text: '退款失败',
          className: 'text-error'
        }
      };
      return external_react_default.a.createElement("div", {
        className: order_list_style_default.a.orderTable
      }, external_react_default.a.createElement(dialog_update_address, {
        ref: this.updateAddressRef,
        editRecord: editRecord,
        onSuccess: function onSuccess() {
          return _this13.getList();
        }
      }), external_react_default.a.createElement(dialog_image_preview, {
        width: 320,
        image: image,
        ref: this.imagePreviewRef
      }), external_react_default.a.createElement(spin_default.a, {
        spinning: loading
      }, external_react_default.a.createElement("table", null, external_react_default.a.createElement("thead", null, external_react_default.a.createElement("tr", {
        className: order_list_style_default.a.tableThead
      }, external_react_default.a.createElement("th", null, "\u6253\u5370\u56FE"), external_react_default.a.createElement("th", null, "\u5546\u54C1"), external_react_default.a.createElement("th", null, "\u5355\u4EF7"), external_react_default.a.createElement("th", null, "\u8BA2\u8D27\u91CF"), external_react_default.a.createElement("th", null, "\u521B\u5EFA\u65F6\u95F4"), external_react_default.a.createElement("th", null, "\u4EF7\u683C"), external_react_default.a.createElement("th", null, "\u5FEB\u9012"), external_react_default.a.createElement("th", null, "\u8BA2\u5355\u7C7B\u578B"), external_react_default.a.createElement("th", null, "\u72B6\u6001")), external_react_default.a.createElement("tr", null, external_react_default.a.createElement("td", {
        colSpan: colSpan,
        style: {
          height: 25
        }
      }))), external_react_default.a.createElement("tbody", null, list.length ? list.map(function (item) {
        return [external_react_default.a.createElement("tr", {
          key: "head",
          className: order_list_style_default.a.tableBodyHead
        }, external_react_default.a.createElement("td", {
          colSpan: colSpan
        }, external_react_default.a.createElement("span", null, external_react_default.a.createElement("label", null, "\u8BA2\u5355\u53F7\uFF1A"), item.order_sn), external_react_default.a.createElement("span", null, external_react_default.a.createElement("label", null, "\u521B\u5EFA\u65F6\u95F4\uFF1A"), item.createdAt), external_react_default.a.createElement("span", null, external_react_default.a.createElement("label", null, "\u6536\u4EF6\u4FE1\u606F\uFF1A"), item.consignee ? "".concat(item.consignee, "(").concat(item.mobile, ")") : '-', " ", item.address ? "".concat(item.province, " ").concat(item.city, " ").concat(item.district, " ").concat(item.address) : '-'))), item.orders.map(function (order, i) {
          return external_react_default.a.createElement("tr", {
            key: "order_".concat(order.id),
            className: order_list_style_default.a.tableBodyContent
          }, external_react_default.a.createElement("td", null, external_react_default.a.createElement(ImageHover, {
            src: order.image1,
            onClick: function onClick() {
              return _this13.handleOpenImagePreview(order.image1);
            }
          })), external_react_default.a.createElement("td", null, order.brand_name, " ", order.brand_type_name, " ", order.texture_name, " ", order.texture_attr_name || '', item.status == 30 || item.status == 0 ? external_react_default.a.createElement("div", null, external_react_default.a.createElement(popconfirm_default.a, {
            title: "\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u4E2A\u5546\u54C1\u5417\uFF1F",
            onConfirm: function onConfirm() {
              return _this13.handleDeleteOrder(order.id);
            }
          }, external_react_default.a.createElement("a", null, "\u5220\u9664\u5546\u54C1"))) : null), external_react_default.a.createElement("td", null, order.price), external_react_default.a.createElement("td", null, order.quantity), external_react_default.a.createElement("td", null, order.createdAt), i === 0 ? [external_react_default.a.createElement("td", {
            key: "amount",
            className: order_list_style_default.a.tableBodyRowSpan,
            rowSpan: item.orders.length + item.parts.length
          }, external_react_default.a.createElement("div", null, "\xA5 ", item.amount), item.post_fee ? external_react_default.a.createElement("div", null, "\u542B\u8FD0\u8D39", item.post_fee, "\u5143") : null), external_react_default.a.createElement("td", {
            key: "express",
            className: order_list_style_default.a.tableBodyRowSpan,
            rowSpan: item.orders.length + item.parts.length
          }, item.status == 30 ? external_react_default.a.createElement(select_Select, {
            style: {
              width: 120
            },
            options: expressList,
            value: item.express_id,
            fieldName: {
              label: 'name',
              value: 'id'
            },
            onChange: function onChange(value) {
              return _this13.handleChangeExpress(item.id, value);
            }
          }) : external_react_default.a.createElement("div", null, item.express_name || '--')), external_react_default.a.createElement("td", {
            key: "type",
            className: order_list_style_default.a.tableBodyRowSpan,
            rowSpan: item.orders.length + item.parts.length
          }, item.type == 10 ? '充值订单' : '普通订单'), external_react_default.a.createElement("td", {
            key: "status",
            className: order_list_style_default.a.tableBodyRowSpan,
            rowSpan: item.orders.length + item.parts.length
          }, external_react_default.a.createElement("span", {
            className: statusMap[item.status].className
          }, statusMap[item.status].text), item.refund_status != 0 ? external_react_default.a.createElement("span", {
            style: {
              display: 'block'
            },
            className: refundStatusMap[item.refund_status].className
          }, "(", refundStatusMap[item.refund_status].text, ")") : null)] : null);
        }), item.parts.map(function (part) {
          return external_react_default.a.createElement("tr", {
            key: "part_".concat(part.id),
            className: order_list_style_default.a.tableBodyContent
          }, external_react_default.a.createElement("td", null, "\u914D\u4EF6"), external_react_default.a.createElement("td", null, part.name, item.status == 30 ? external_react_default.a.createElement("div", null, external_react_default.a.createElement(popconfirm_default.a, {
            title: "\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u4E2A\u5546\u54C1\u5417\uFF1F",
            onConfirm: function onConfirm() {
              return _this13.handleDeletePart(part.id);
            }
          }, external_react_default.a.createElement("a", null, "\u5220\u9664\u5546\u54C1"))) : null), external_react_default.a.createElement("td", null, part.price), external_react_default.a.createElement("td", null, part.quantity), external_react_default.a.createElement("td", null, part.createdAt));
        }), item.status == 30 ? external_react_default.a.createElement("tr", {
          key: "operator",
          className: order_list_style_default.a.tableBodyHead
        }, external_react_default.a.createElement("td", {
          colSpan: colSpan
        }, external_react_default.a.createElement(popconfirm_default.a, {
          title: external_react_default.a.createElement("div", null, "\u786E\u5B9A\u8981\u4ED8\u6B3E", external_react_default.a.createElement("span", {
            className: "text-warning"
          }, item.amount), "\u5143\u5417\uFF1F"),
          onConfirm: function onConfirm() {
            return _this13.handlePay(item.id);
          },
          placement: "rightBottom"
        }, external_react_default.a.createElement(button_default.a, {
          type: "primary"
        }, "\u4ED8\u6B3E")), external_react_default.a.createElement(popconfirm_default.a, {
          title: external_react_default.a.createElement("div", null, "\u786E\u5B9A\u8981\u5173\u95ED\u8FD9\u4E2A\u8BA2\u5355\u5417\uFF1F"),
          onConfirm: function onConfirm() {
            return _this13.handleClose(item.id);
          },
          placement: "rightBottom"
        }, external_react_default.a.createElement(button_default.a, null, "\u5173\u95ED\u8BA2\u5355")), external_react_default.a.createElement(link_default.a, {
          href: "/?type=10&order_sn=".concat(item.order_sn, "&express_id=").concat(item.express_id)
        }, external_react_default.a.createElement(button_default.a, null, "\u6DFB\u52A0\u5546\u54C1")), external_react_default.a.createElement(button_default.a, {
          onClick: function onClick() {
            return _this13.handleUpdateAddress(item);
          }
        }, "\u4FEE\u6539\u6536\u8D27\u4FE1\u606F"))) : null, item.status == 0 ? external_react_default.a.createElement("tr", {
          key: "operator",
          className: order_list_style_default.a.tableBodyHead
        }, external_react_default.a.createElement("td", {
          colSpan: colSpan
        }, external_react_default.a.createElement(popconfirm_default.a, {
          title: external_react_default.a.createElement("div", null, "\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u4E2A\u8BA2\u5355\u5417\uFF1F"),
          onConfirm: function onConfirm() {
            return _this13.handleDeleteTrade(item.id);
          },
          placement: "rightBottom"
        }, external_react_default.a.createElement(button_default.a, null, "\u5220\u9664\u8BA2\u5355")))) : null, [10, 20, 50].includes(item.status) && item.type == 10 && item.refund_status == 0 ? external_react_default.a.createElement("tr", {
          key: "operator",
          className: order_list_style_default.a.tableBodyHead
        }, external_react_default.a.createElement("td", {
          colSpan: colSpan
        }, external_react_default.a.createElement(popconfirm_default.a, {
          title: external_react_default.a.createElement("div", null, "\u786E\u5B9A\u7533\u8BF7\u9000\u6B3E\u5417\uFF1F"),
          onConfirm: function onConfirm() {
            return _this13.handleApplyRefund(item.id);
          },
          placement: "rightBottom"
        }, external_react_default.a.createElement(button_default.a, null, "\u7533\u8BF7\u9000\u6B3E")))) : null, item.status == 60 && item.logis ? external_react_default.a.createElement("tr", {
          key: "operator",
          className: order_list_style_default.a.tableBodyHead
        }, external_react_default.a.createElement("td", {
          colSpan: colSpan
        }, item.type == 10 && item.refund_status == 0 ? external_react_default.a.createElement(popconfirm_default.a, {
          title: external_react_default.a.createElement("div", null, "\u786E\u5B9A\u7533\u8BF7\u9000\u6B3E\u5417\uFF1F"),
          onConfirm: function onConfirm() {
            return _this13.handleApplyRefund(item.id);
          },
          placement: "rightBottom"
        }, external_react_default.a.createElement(button_default.a, {
          style: {
            marginRight: '15px'
          }
        }, "\u7533\u8BF7\u9000\u6B3E")) : null, "\u7269\u6D41\u4FE1\u606F\uFF1A", external_react_default.a.createElement("span", null, item.logis.express_name, " ", item.logis.express_sn, external_react_default.a.createElement("a", {
          ref: function ref(e) {
            if (e) {
              var clipboard = new external_clipboard_default.a(e, {
                text: function text() {
                  return "".concat(item.logis.express_name, " ").concat(item.logis.express_sn);
                }
              });
              clipboard.on('success', function () {
                message_default.a.success('复制成功！');
              });
            }
          },
          style: {
            marginLeft: '10px'
          }
        }, "\u70B9\u51FB\u590D\u5236")))) : null, external_react_default.a.createElement("tr", {
          key: "footer",
          className: order_list_style_default.a.tableBodyFooter
        }, external_react_default.a.createElement("td", {
          colSpan: colSpan,
          style: {
            height: 15
          }
        }))];
      }) : external_react_default.a.createElement("tr", null, external_react_default.a.createElement("td", {
        colSpan: colSpan
      }, external_react_default.a.createElement(empty_default.a, {
        image: empty_default.a.PRESENTED_IMAGE_SIMPLE
      })))))), pager.total > pager.pageSize ? external_react_default.a.createElement(pagination_default.a, Object(esm_extends["a" /* default */])({}, pager, {
        onChange: function onChange(page) {
          return _this13.getList(page);
        }
      })) : null);
    }
  }]);

  return OrderList;
}(external_react_["Component"]);


// CONCATENATED MODULE: ./component/dialog-order-detail/index.jsx













var dialog_order_detail_DialogOrderDetail =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(DialogOrderDetail, _Component);

  function DialogOrderDetail() {
    Object(classCallCheck["a" /* default */])(this, DialogOrderDetail);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(DialogOrderDetail).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(DialogOrderDetail, [{
    key: "render",
    value: function render() {
      var order_sn = this.props.order_sn;
      return external_react_default.a.createElement(modal_default.a, Object(esm_extends["a" /* default */])({}, this.props, {
        title: "\u8BA2\u5355\u8BE6\u60C5",
        width: 980,
        footer: false,
        centered: true
      }), external_react_default.a.createElement(order_list_OrderList, {
        action: "/order/userlist",
        condition: {
          order_sn: order_sn
        }
      }));
    }
  }]);

  return DialogOrderDetail;
}(external_react_["Component"]);

/* harmony default export */ var dialog_order_detail = (CreateModal(dialog_order_detail_DialogOrderDetail));
// EXTERNAL MODULE: external "antd/lib/table/style"
var table_style_ = __webpack_require__("lRur");

// EXTERNAL MODULE: external "antd/lib/table"
var table_ = __webpack_require__("Puj+");
var table_default = /*#__PURE__*/__webpack_require__.n(table_);

// CONCATENATED MODULE: ./component/table-action/index.jsx













var table_action_TableAction =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(TableAction, _Component);

  function TableAction(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, TableAction);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(TableAction).call(this, props));
    _this.state = {
      pager: {
        current: 1,
        pageSize: 10,
        total: 0
      },
      dataSource: [],
      loading: true
    };
    _this.condition = props.condition || {};
    _this.close = false;
    return _this;
  }

  Object(createClass["a" /* default */])(TableAction, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getList();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.close = true;
    }
  }, {
    key: "getList",
    value: function getList() {
      var _this2 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.pager.current;
      var _this$state = this.state,
          pager = _this$state.pager,
          loading = _this$state.loading,
          dataSource = _this$state.dataSource;
      var action = this.props.action;

      var params = Object(objectSpread["a" /* default */])({
        page: page,
        pagesize: pager.pageSize
      }, this.condition);

      if (!loading) this.setState({
        loading: true,
        pager: Object(objectSpread["a" /* default */])({}, pager, {
          current: page
        })
      });
      utils["a" /* MServer */].get(action, params).then(function (res) {
        if (!_this2.close) {
          _this2.setState({
            dataSource: res.errcode == 0 ? res.data : dataSource,
            pager: Object(objectSpread["a" /* default */])({}, pager, {
              current: page,
              total: res.errcode == 0 ? res.total : pager.total
            }),
            loading: false
          });
        }
      });
    }
  }, {
    key: "reload",
    value: function reload() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$page = _ref.page,
          page = _ref$page === void 0 ? this.state.pager.current : _ref$page,
          _ref$condition = _ref.condition,
          condition = _ref$condition === void 0 ? {} : _ref$condition;

      this.condition = Object(objectSpread["a" /* default */])({}, this.condition, condition);
      this.getList(page);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var columns = this.props.columns;
      var _this$state2 = this.state,
          dataSource = _this$state2.dataSource,
          loading = _this$state2.loading,
          pager = _this$state2.pager;
      return external_react_default.a.createElement(table_default.a, Object(esm_extends["a" /* default */])({
        rowKey: "id",
        dataSource: dataSource,
        loading: loading,
        columns: columns,
        pagination: pager.pageSize < pager.total ? Object(objectSpread["a" /* default */])({}, pager, {
          onChange: function onChange(page) {
            return _this3.getList(page);
          }
        }) : false
      }, this.props));
    }
  }]);

  return TableAction;
}(external_react_["Component"]);


// CONCATENATED MODULE: ./component/dialog-export-history/index.jsx














var dialog_export_history_DialogExportHistroy =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(DialogExportHistroy, _Component);

  function DialogExportHistroy(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, DialogExportHistroy);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(DialogExportHistroy).call(this, props));
    _this.state = {
      submit: false
    };
    return _this;
  }

  Object(createClass["a" /* default */])(DialogExportHistroy, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(modal_default.a, Object(esm_extends["a" /* default */])({}, this.props, {
        footer: false,
        centered: true
      }), external_react_default.a.createElement(table_action_TableAction, {
        action: "/order/getExportList",
        columns: [{
          key: 'count',
          dataIndex: 'count',
          title: '订单数'
        }, {
          key: 'createdAt',
          dataIndex: 'createdAt',
          title: '导出时间'
        }, {
          key: 'filename',
          dataIndex: 'filename',
          title: '操作',
          render: function render(text) {
            return external_react_default.a.createElement("div", null, external_react_default.a.createElement("a", {
              onClick: function onClick() {
                window.open("http:".concat(locale_default.a["production"].url.api, "/static/logis/").concat(text));
              }
            }, "\u4E0B\u8F7D"));
          }
        }]
      }));
    }
  }]);

  return DialogExportHistroy;
}(external_react_["Component"]);

/* harmony default export */ var dialog_export_history = (CreateModal(dialog_export_history_DialogExportHistroy));
// EXTERNAL MODULE: external "rc-color-picker"
var external_rc_color_picker_ = __webpack_require__("mfQd");
var external_rc_color_picker_default = /*#__PURE__*/__webpack_require__.n(external_rc_color_picker_);

// EXTERNAL MODULE: ./component/colorpicker/style.less
var colorpicker_style = __webpack_require__("nFMY");

// CONCATENATED MODULE: ./component/colorpicker/index.jsx


// import { useState } from 'react';


function MyColorPicker(props) {
  return external_react_default.a.createElement(external_rc_color_picker_default.a, Object(esm_extends["a" /* default */])({
    placement: "topLeft"
  }, props));
}
// EXTERNAL MODULE: external "antd/lib/input-number/style"
var input_number_style_ = __webpack_require__("mfSZ");

// EXTERNAL MODULE: external "antd/lib/input-number"
var input_number_ = __webpack_require__("GqX/");
var input_number_default = /*#__PURE__*/__webpack_require__.n(input_number_);

// CONCATENATED MODULE: ./component/input-number/index.jsx










var input_number_InputNumber =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(InputNumber, _Component);

  function InputNumber(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, InputNumber);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(InputNumber).call(this, props));
    _this.state = {
      value: props.defaultValue
    };
    return _this;
  }

  Object(createClass["a" /* default */])(InputNumber, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var value = this.state.value;
      var _onChange = this.props.onChange;
      return external_react_default.a.createElement(input_number_default.a, Object(esm_extends["a" /* default */])({
        value: value
      }, this.props, {
        onChange: function onChange(value) {
          _this2.setState({
            value: value
          });

          _onChange && _onChange(value);
        }
      }));
    }
  }]);

  return InputNumber;
}(external_react_["Component"]);


// CONCATENATED MODULE: ./component/index.js
/* concated harmony reexport Select */__webpack_require__.d(__webpack_exports__, "g", function() { return select_Select; });
/* concated harmony reexport Header */__webpack_require__.d(__webpack_exports__, "d", function() { return header_Header; });
/* concated harmony reexport UploadBtn */__webpack_require__.d(__webpack_exports__, "i", function() { return upload_btn_UploadButton; });
/* unused concated harmony import DialogImagePreview */
/* concated harmony reexport DialogOrderDetail */__webpack_require__.d(__webpack_exports__, "c", function() { return dialog_order_detail; });
/* concated harmony reexport DialogExportHistroy */__webpack_require__.d(__webpack_exports__, "b", function() { return dialog_export_history; });
/* concated harmony reexport TableAction */__webpack_require__.d(__webpack_exports__, "h", function() { return table_action_TableAction; });
/* concated harmony reexport ColorPicker */__webpack_require__.d(__webpack_exports__, "a", function() { return MyColorPicker; });
/* concated harmony reexport OrderList */__webpack_require__.d(__webpack_exports__, "f", function() { return order_list_OrderList; });
/* concated harmony reexport InputNumber */__webpack_require__.d(__webpack_exports__, "e", function() { return input_number_InputNumber; });












/***/ }),

/***/ "P7Vo":
/***/ (function(module, exports) {

module.exports = require("antd/lib/tag");

/***/ }),

/***/ "Puj+":
/***/ (function(module, exports) {

module.exports = require("antd/lib/table");

/***/ }),

/***/ "QghY":
/***/ (function(module, exports) {

module.exports = require("antd/lib/popconfirm");

/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "SCcO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_drawer_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("WYi6");
/* harmony import */ var antd_lib_drawer_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_drawer_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wvHv");
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("pLtp");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_tag_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("BucJ");
/* harmony import */ var antd_lib_tag_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tag_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("P7Vo");
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_table_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("lRur");
/* harmony import */ var antd_lib_table_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_table_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Puj+");
/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_table__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_radio_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("JHZV");
/* harmony import */ var antd_lib_radio_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_radio_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("XQdj");
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_radio__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_tooltip_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("AF2q");
/* harmony import */ var antd_lib_tooltip_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tooltip_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("z6+L");
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_popover_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("tCZL");
/* harmony import */ var antd_lib_popover_style__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popover_style__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("27qp");
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popover__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("2w/n");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("foLw");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var antd_lib_input_number_style__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("mfSZ");
/* harmony import */ var antd_lib_input_number_style__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_number_style__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var antd_lib_input_number__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("GqX/");
/* harmony import */ var antd_lib_input_number__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("EJbO");
/* harmony import */ var antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("JCEF");
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("DnGC");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("eGmO");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("oRSk");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("Uqqx");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var antd_lib_cascader_style__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("qYgU");
/* harmony import */ var antd_lib_cascader_style__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(antd_lib_cascader_style__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var antd_lib_cascader__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("CUto");
/* harmony import */ var antd_lib_cascader__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(antd_lib_cascader__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("bmdr");
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("xKsY");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("vYYK");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("zrwo");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("eVuF");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("XZ83");
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("3PsY");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__("Wa2I");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__("6BQ9");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__("AT/M");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__("Tit0");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__("X1wy");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__("OLV9");
/* harmony import */ var public_utils__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__("HgRd");
/* harmony import */ var public_theme_pages_index_less__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__("5PEn");
/* harmony import */ var public_theme_pages_index_less__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(public_theme_pages_index_less__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var config_locale__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__("mVpe");
/* harmony import */ var config_locale__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(config_locale__WEBPACK_IMPORTED_MODULE_45__);
















































var Index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_39__[/* default */ "a"])(Index, _Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_34__[/* default */ "a"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_36__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_37__[/* default */ "a"])(Index).call(this, props));
    _this.state = {
      list: [],
      image: null,
      preview: null,
      submit: false,
      color: 'tran',
      pickerColor: '#000',
      auto: false,
      importExcelData: null,
      drawer: false,
      selectedRowKeys: null,
      selectedRow: null,
      order_sn: null,
      expressList: [],
      partList: [],
      selectParts: []
    };
    var handles = ['handleSize', 'handleRotate', 'handlePreview', 'handleSubmit', 'handleUploadOrderExcel'];
    handles.forEach(function (item) {
      return _this[item] = _this[item].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_38__[/* default */ "a"])(_this));
    });
    _this.transBgRef = Object(react__WEBPACK_IMPORTED_MODULE_40__["createRef"])();
    _this.imageUploadRef = Object(react__WEBPACK_IMPORTED_MODULE_40__["createRef"])();
    _this.imageBgRef = Object(react__WEBPACK_IMPORTED_MODULE_40__["createRef"])();
    _this.imageCameraRef = Object(react__WEBPACK_IMPORTED_MODULE_40__["createRef"])();
    _this.canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_40__["createRef"])();
    _this.canvasCameraRef = Object(react__WEBPACK_IMPORTED_MODULE_40__["createRef"])();
    _this.boxRef = Object(react__WEBPACK_IMPORTED_MODULE_40__["createRef"])();
    _this.previewDialogRef = Object(react__WEBPACK_IMPORTED_MODULE_40__["createRef"])();
    _this.dragBox1 = Object(react__WEBPACK_IMPORTED_MODULE_40__["createRef"])();
    _this.dragBox2 = Object(react__WEBPACK_IMPORTED_MODULE_40__["createRef"])();
    _this.dialogDetailRef = Object(react__WEBPACK_IMPORTED_MODULE_40__["createRef"])();
    _this.sizeInputRef;
    _this.rotateInputRef;
    _this.uploadInputRef = null;
    _this.select = null; // 选择到的机型

    _this.moveOptions = {
      x: 0,
      rotate: 0
    };
    _this.hasKeyListener = false;
    _this.cateObj = {};
    _this.token = null;
    _this.submitOrderObj = {};
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_35__[/* default */ "a"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.getCates();
      this.getCanvas();
      this.getExpress();
      this.getPart();

      if (this.boxRef.current) {
        this.boxRef.current.addEventListener('dragenter', function (e) {
          e.stopPropagation();
          e.preventDefault();
        });
        this.boxRef.current.addEventListener('dragover', function (e) {
          e.stopPropagation();
          e.preventDefault();
        });
        this.boxRef.current.addEventListener('dragleave', function (e) {
          e.stopPropagation();
          e.preventDefault();
        });
        this.boxRef.current.addEventListener('drop', function (e) {
          e.stopPropagation();
          e.preventDefault();

          _this2.readFile(e.dataTransfer.files[0]);
        });
      }

      public_utils__WEBPACK_IMPORTED_MODULE_43__[/* MServer */ "a"].get('/upload/getToken').then(function (res) {
        if (res.errcode == 0) {
          _this2.token = res.data.token;
        }
      });
      var _this$props = this.props,
          router = _this$props.router,
          setFieldsValue = _this$props.form.setFieldsValue;
      var params = public_utils__WEBPACK_IMPORTED_MODULE_43__[/* Url */ "b"].getAllParams(router.asPath);
      if (!params) return;
      var setFormValue = {};

      if (params.type) {
        setFormValue.type = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_33___default()(params.type);
      }

      if (params.order_sn) {
        setFormValue.order_sn = params.order_sn;
      }

      if (params.express_id) {
        setFormValue.express_id = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_33___default()(params.express_id);
      }

      setFieldsValue(setFormValue);
    }
  }, {
    key: "getCates",
    value: function getCates() {
      var _this3 = this;

      public_utils__WEBPACK_IMPORTED_MODULE_43__[/* MServer */ "a"].get('/cate/list', {
        is_all: 1
      }).then(function (res) {
        if (res.errcode == 0) {
          var cateIds = {};
          var typeIds = {};
          var list = [];
          res.data.forEach(function (item) {
            if (typeof cateIds[item.brand_id] == 'undefined') {
              cateIds[item.brand_id] = list.length;
              list.push({
                value: item.brand_id,
                label: item.brand_name,
                children: [{
                  value: item.brand_type_id,
                  label: item.brand_type_name,
                  children: [{
                    value: item.id,
                    label: item.texture_name
                  }]
                }]
              });
              typeIds["".concat(item.brand_id, "_").concat(item.brand_type_id)] = 0;
            } else {
              if (typeof typeIds["".concat(item.brand_id, "_").concat(item.brand_type_id)] == 'undefined') {
                typeIds["".concat(item.brand_id, "_").concat(item.brand_type_id)] = list[cateIds[item.brand_id]].children.length;
                list[cateIds[item.brand_id]].children.push({
                  value: item.brand_type_id,
                  label: item.brand_type_name,
                  children: [{
                    value: item.id,
                    label: item.texture_name
                  }]
                });
              } else {
                list[cateIds[item.brand_id]].children[typeIds["".concat(item.brand_id, "_").concat(item.brand_type_id)]].children.push({
                  value: item.id,
                  label: item.texture_name
                });
              }
            }

            _this3.cateObj[item.id] = item;
          });

          _this3.setState({
            list: list
          });
        }
      });
    }
  }, {
    key: "getExpress",
    value: function getExpress() {
      var _this4 = this;

      public_utils__WEBPACK_IMPORTED_MODULE_43__[/* MServer */ "a"].get('/logis/list', {
        is_all: 1
      }).then(function (res) {
        if (res.errcode == 0) {
          _this4.setState({
            expressList: res.data
          });
        }
      });
    }
  }, {
    key: "getPart",
    value: function getPart() {
      var _this5 = this;

      public_utils__WEBPACK_IMPORTED_MODULE_43__[/* MServer */ "a"].get('/part/list', {
        is_all: 1
      }).then(function (res) {
        if (res.errcode == 0) {
          _this5.setState({
            partList: res.data
          });
        }
      });
    }
  }, {
    key: "getCanvas",
    value: function getCanvas() {
      var _this6 = this;

      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$power = _ref.power,
          power = _ref$power === void 0 ? 1 : _ref$power,
          _ref$canvas = _ref.canvas,
          canvas = _ref$canvas === void 0 ? this.canvasRef.current : _ref$canvas,
          _ref$isRes = _ref.isRes,
          isRes = _ref$isRes === void 0 ? false : _ref$isRes;

      var _this$state = this.state,
          color = _this$state.color,
          pickerColor = _this$state.pickerColor,
          auto = _this$state.auto;
      var upload = this.imageUploadRef.current;
      var bg = this.imageBgRef.current;
      var camera = this.imageCameraRef.current;
      var trans = this.transBgRef.current;
      var box = this.boxRef.current;
      if (!box) return;
      var width = 320 * power;
      var boxHeight = (box.offsetHeight - 2) * power;
      var canvasWidth = box.offsetWidth * power;
      var context = canvas.getContext('2d');
      var ratio = bg && bg.complete ? width / bg.width : 1;
      var height = bg && bg.complete ? _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_33___default()(bg.height * ratio) : boxHeight;
      var scale = auto || isRes ? 1 : 2;
      var left = (canvasWidth - width) / 2; // canvas.setAttribute('width', canvasWidth);
      // canvas.setAttribute('height', height);

      canvas.setAttribute('width', canvasWidth * scale);
      canvas.setAttribute('height', height * scale);
      canvas.setAttribute('style', 'width: 918px');
      context.scale(scale, scale);

      if (bg && bg.complete) {
        context.rect(left, 0, width, height);

        if (color == 'tran') {
          if (!isRes) {
            context.fillStyle = context.createPattern(trans, 'repeat');
            context.fill();
          }
        } else if (color == -1) {
          context.fillStyle = pickerColor;
          context.fill();
        } else {
          context.fillStyle = color;
          context.fill();
        }
      }

      if (upload && upload.complete) {
        var _this$moveOptions = this.moveOptions,
            x = _this$moveOptions.x,
            y = _this$moveOptions.y,
            size = _this$moveOptions.size,
            rotate = _this$moveOptions.rotate;

        if (typeof this.moveOptions.size === 'undefined') {
          size = this.moveOptions.size = upload.width > upload.height ? canvasWidth / upload.width * 100 : boxHeight / upload.height * 100;
          this.sizeInputRef.setState({
            inputValue: size.toFixed(2),
            value: size.toFixed(2)
          });
        }

        size = size * power / 100;

        if (!y) {
          y = this.moveOptions.y = -(upload.height * size - height) / 2;

          if (upload.width < upload.height) {
            x = this.moveOptions.x = (canvasWidth - upload.width * size) / 2;
          }
        }

        if (rotate) {
          context.translate(canvasWidth / 2, height / 2);
          context.rotate(rotate * Math.PI / 180);
          context.translate(-canvasWidth / 2, -height / 2);
        }

        if (auto) {
          var _s = height / upload.height;

          var _x = left - (upload.width * _s - width) / 2;

          context.drawImage(upload, _x, 0, upload.width * _s, upload.height * _s);
        } else {
          context.drawImage(upload, x * power, y * power, upload.width * size, upload.height * size);
        }

        if (rotate) {
          context.translate(canvasWidth / 2, height / 2);
          context.rotate(-rotate * Math.PI / 180);
          context.translate(-canvasWidth / 2, -height / 2);
        }
      }

      if (bg && bg.complete) {
        // 左侧
        var imageDataLeft = context.getImageData(0, 0, left * scale, height * scale);

        for (var i = 0; i < imageDataLeft.data.length; i += 4) {
          if (imageDataLeft.data[i + 3] == 0) {
            imageDataLeft.data[i + 0] = 255;
            imageDataLeft.data[i + 1] = 255;
            imageDataLeft.data[i + 2] = 255;
          }

          imageDataLeft.data[i + 3] = 127.5;
        }

        context.putImageData(imageDataLeft, 0, 0); // 右侧

        var imageDataRight = context.getImageData((left + width) * scale, 0, (canvasWidth - width - left) * scale, height * scale);

        for (var _i = 0; _i < imageDataRight.data.length; _i += 4) {
          if (imageDataRight.data[_i + 3] == 0) {
            imageDataRight.data[_i + 0] = 255;
            imageDataRight.data[_i + 1] = 255;
            imageDataRight.data[_i + 2] = 255;
          }

          imageDataRight.data[_i + 3] = 127.5;
        }

        context.putImageData(imageDataRight, (left + width) * scale, 0); // 背景图

        context.drawImage(bg, 0, 0, bg.width, bg.height, left, 0, width, height);
      }

      if (!isRes && camera) {
        if (camera.complete) {
          this.getCameraCanvas();
        } else {
          camera.onload = function () {
            _this6.getCameraCanvas();
          };
        }
      }
    }
  }, {
    key: "getCameraCanvas",
    value: function getCameraCanvas() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$width = _ref2.width,
          width = _ref2$width === void 0 ? 320 : _ref2$width;

      var canvas = this.canvasCameraRef.current;
      var camera = this.imageCameraRef.current;
      var box = this.boxRef.current;
      var context = canvas.getContext('2d');
      var canvasWidth = box.offsetWidth;
      var boxHeight = box.offsetHeight - 2;
      var left = (canvasWidth - width) / 2;
      var ratio = camera && camera.complete ? width / camera.width : 1;
      var height = camera && camera.complete ? _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_33___default()(camera.height * ratio) : boxHeight;
      canvas.setAttribute('width', canvasWidth);
      canvas.setAttribute('height', height);
      context.drawImage(camera, 0, 0, camera.width, camera.height, left, 0, width, height);
    }
  }, {
    key: "getPreviewImage",
    value: function getPreviewImage() {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$power = _ref3.power,
          power = _ref3$power === void 0 ? 1 : _ref3$power,
          _ref3$canvas = _ref3.canvas,
          canvas = _ref3$canvas === void 0 ? this.canvasRef.current : _ref3$canvas,
          _ref3$useCamera = _ref3.useCamera,
          useCamera = _ref3$useCamera === void 0 ? true : _ref3$useCamera,
          isRes = _ref3.isRes;

      var bg = this.imageBgRef.current;
      var camera = this.imageCameraRef.current;
      var box = this.boxRef.current;
      var context = canvas.getContext('2d');
      var width = 320 * power;
      var ratio = width / bg.width;

      var height = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_33___default()(bg.height * ratio);

      var canvasWidth = box.offsetWidth * power;
      var left = (canvasWidth - width) / 2;
      var imageData = context.getImageData(left, 0, width, height);
      var c = document.createElement('canvas');
      var ctx = c.getContext('2d');

      var _c = document.createElement('canvas');

      var _ctx = _c.getContext('2d');

      c.setAttribute('width', width);
      c.setAttribute('height', height);

      _c.setAttribute('width', width);

      _c.setAttribute('height', height);

      _ctx.drawImage(bg, 0, 0, bg.width, bg.height, 0, 0, width, height);

      var _imageData = _ctx.getImageData(0, 0, width, height);

      for (var i = 0; i < imageData.data.length; i += 4) {
        if (_imageData.data[i + 3] !== 0) {
          imageData.data[i + 3] = 0;
        } else if (imageData.data[i + 3] == 0) {
          imageData.data[i] = 0;
          imageData.data[i + 1] = 0;
          imageData.data[i + 2] = 0;
          imageData.data[i + 3] = isRes ? 0 : 255;
        }
      }

      if (useCamera && camera) {
        var canvasCamera = document.createElement('canvas');
        var ctxCamera = canvasCamera.getContext('2d');
        canvasCamera.setAttribute('width', width);
        canvasCamera.setAttribute('height', height);
        ctxCamera.drawImage(camera, 0, 0, camera.width, camera.height, 0, 0, width, height);
        var imageDataCamera = ctxCamera.getImageData(0, 0, width, height);

        for (var _i2 = 0; _i2 < imageDataCamera.data.length; _i2 += 4) {
          if (imageDataCamera.data[_i2 + 3] != 0) {
            imageData.data[_i2 + 3] = 0;
          }
        }
      }

      ctx.putImageData(imageData, 0, 0);
      return c.toDataURL('image/png');
    }
  }, {
    key: "getResultImage",
    value: function getResultImage(useCamera) {
      var bg = this.imageBgRef.current;
      var canvas = document.createElement('canvas');
      this.getCanvas({
        canvas: canvas,
        power: bg.width / 320,
        isRes: true
      });
      return this.getPreviewImage({
        power: bg.width / 320,
        canvas: canvas,
        useCamera: useCamera,
        isRes: true
      });
    }
  }, {
    key: "listenerMove",
    value: function listenerMove() {
      var _this7 = this;

      var dom = this.boxRef.current;
      var upload = this.imageUploadRef.current;
      var startPageX = null;
      var startPageY = null;
      if (this.hasKeyListener || !dom || !upload) return;

      var moveListener = function moveListener(e) {
        var preview = _this7.state.preview;
        if (preview) return;
        _this7.moveOptions.x = e.pageX - startPageX;
        _this7.moveOptions.y = e.pageY - startPageY;

        _this7.getCanvas();
      };

      this.hasKeyListener = true;
      dom.addEventListener('mousedown', function (e) {
        startPageX = e.pageX - _this7.moveOptions.x;
        startPageY = e.pageY - _this7.moveOptions.y;
        document.addEventListener('mousemove', moveListener);
      });
      document.addEventListener('mouseup', function () {
        document.removeEventListener('mousemove', moveListener);
      });
      document.addEventListener('keydown', function (e) {
        var preview = _this7.state.preview;
        if (preview) return;

        if ([87, 83, 82, 65, 68, 69].includes(e.keyCode)) {
          if (e.keyCode == 87) {
            _this7.moveOptions.y = _this7.moveOptions.y - 1;
          }

          if (e.keyCode == 83) {
            _this7.moveOptions.y = _this7.moveOptions.y + 1;
          }

          if (e.keyCode == 65) {
            _this7.moveOptions.x = _this7.moveOptions.x - 1;
          }

          if (e.keyCode == 68) {
            _this7.moveOptions.x = _this7.moveOptions.x + 1;
          }

          if (e.keyCode == 69) {
            _this7.sizeInputRef && _this7.sizeInputRef.setState({
              inputValue: (_this7.moveOptions.size + 0.2).toFixed(2),
              value: (_this7.moveOptions.size + 0.2).toFixed(2)
            });

            _this7.handleSize(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_33___default()(_this7.moveOptions.size * 100 + 20) / 100, false);
          }

          if (e.keyCode == 82) {
            _this7.sizeInputRef && _this7.sizeInputRef.setState({
              inputValue: (_this7.moveOptions.size - 0.2).toFixed(2),
              value: (_this7.moveOptions.size - 0.2).toFixed(2)
            });

            _this7.handleSize(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_33___default()(_this7.moveOptions.size * 100 - 20) / 100, false);
          }

          _this7.getCanvas();
        }
      });

      if (this.dragBox1.current) {
        var box = this.dragBox1.current;
        var sx = null;
        var size = null;

        var listener = function listener(e) {
          var current = e.clientX - sx;
          box.style.left = "".concat(current, "px");
          var diff = (current - 798) / 10;
          var value = size + diff;

          if (value >= 1) {
            _this7.sizeInputRef && _this7.sizeInputRef.setState({
              inputValue: value.toFixed(2),
              value: value.toFixed(2)
            });

            _this7.handleSize(value);
          }
        };

        box.addEventListener('mousedown', function (e) {
          e.stopPropagation();
          e.preventDefault();
          sx = e.clientX - box.offsetLeft;
          size = _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_32___default()(_this7.moveOptions.size);
          document.addEventListener('mousemove', listener);
        });
        document.addEventListener('mouseup', function (e) {
          e.stopPropagation();
          e.preventDefault();
          box.style.left = '798px';
          document.removeEventListener('mousemove', listener);
        });
      }

      if (this.dragBox2.current) {
        var _box = this.dragBox2.current;
        var _sx = null;
        var rotate = this.moveOptions.rotate;

        var _listener = function _listener(e) {
          var current = e.clientX - _sx;
          _box.style.left = "".concat(current, "px");
          var diff = current - 798;
          var value = Math.abs(rotate + diff);
          if (value > 360) value = 0;
          _this7.rotateInputRef && _this7.rotateInputRef.setState({
            inputValue: value,
            value: value
          });

          _this7.handleRotate(value);
        };

        _box.addEventListener('mousedown', function (e) {
          e.stopPropagation();
          e.preventDefault();
          _sx = e.clientX - _box.offsetLeft;
          document.addEventListener('mousemove', _listener);
        });

        document.addEventListener('mouseup', function (e) {
          e.stopPropagation();
          e.preventDefault();
          _box.style.left = '798px';
          document.removeEventListener('mousemove', _listener);
        });
      }
    }
  }, {
    key: "handleSize",
    value: function handleSize() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var isGet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var upload = this.imageUploadRef.current;
      if (!upload) return;
      if (!/^-?(0|[1-9][0-9]*)(\.[0-9]{1,})?$/.test(value)) return;
      this.moveOptions.x = this.moveOptions.x + upload.width * (this.moveOptions.size - value) / 200;
      this.moveOptions.y = this.moveOptions.y + upload.height * (this.moveOptions.size - value) / 200;
      this.moveOptions.size = value;
      isGet && this.getCanvas();
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
      var _this8 = this;

      var get = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (!this.select) {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_31___default.a.error('请先选择机型');

        return;
      }

      if (!this.state.image) {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_31___default.a.error('请先上传定制图片');

        return;
      }

      var bg = this.imageBgRef.current;
      var canvas = document.createElement('canvas');
      this.getCanvas({
        canvas: canvas,
        power: bg.width / 320,
        isRes: true
      });
      this.setState({
        preview: get ? this.getPreviewImage({
          canvas: canvas,
          power: bg.width / 320
        }) : null
      }, function () {
        if (get) _this8.getCanvas();
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      var _this9 = this;

      e.preventDefault();
      e.stopPropagation();

      if (!this.select) {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_31___default.a.error('请先选择机型');

        return;
      }

      if (!this.state.image) {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_31___default.a.error('请先上传定制图片');

        return;
      }

      var validateFields = this.props.form.validateFields;
      var _this$state2 = this.state,
          selectedRow = _this$state2.selectedRow,
          selectParts = _this$state2.selectParts,
          importExcelData = _this$state2.importExcelData;
      validateFields(function (err, values) {
        if (!err) {
          if (!_this9.token) {
            antd_lib_message__WEBPACK_IMPORTED_MODULE_31___default.a.error('网络出错了，刷新页面试试');

            return;
          }

          _this9.setState({
            submit: true
          });

          var pl = [function () {
            var formdata = new FormData();
            formdata.append('file', Object(public_utils__WEBPACK_IMPORTED_MODULE_43__[/* convertBase64UrlToBlob */ "c"])(_this9.getResultImage()), "".concat(new Date().getTime(), ".png"));
            formdata.append('token', _this9.token);
            return public_utils__WEBPACK_IMPORTED_MODULE_43__[/* MServer */ "a"].post('//upload-z0.qiniup.com', formdata, {
              withCredentials: false,
              headers: {
                'Content-Type': 'multipart/form-data'
              },
              silent: true
            }).then(function (res) {
              if (res.key) {
                return "".concat(config_locale__WEBPACK_IMPORTED_MODULE_45___default.a["production"].url.cdnUser).concat(res.key);
              } else {
                throw new Error('图片上传失败');
              }
            });
          }, function () {
            var formdata = new FormData();
            formdata.append('file', Object(public_utils__WEBPACK_IMPORTED_MODULE_43__[/* convertBase64UrlToBlob */ "c"])(_this9.getResultImage(false)), "".concat(new Date().getTime(), ".png"));
            formdata.append('token', _this9.token);
            return public_utils__WEBPACK_IMPORTED_MODULE_43__[/* MServer */ "a"].post('//upload-z0.qiniup.com', formdata, {
              withCredentials: false,
              headers: {
                'Content-Type': 'multipart/form-data'
              },
              silent: true
            }).then(function (res) {
              if (res.key) {
                return "".concat(config_locale__WEBPACK_IMPORTED_MODULE_45___default.a["production"].url.cdnUser).concat(res.key);
              } else {
                throw new Error('图片上传失败');
              }
            });
          }];

          _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_29___default.a.all(pl.map(function (item) {
            return item();
          })).then(function (res) {
            var params = {
              type: values.type,
              order_sn: values.order_sn,
              quantity: values.quantity,
              cate_id: _this9.select.id,
              image: res[0],
              image1: res[1]
            };
            if (values.texture_attr_id) params.texture_attr_id = values.texture_attr_id;
            if (values.express_id) params.express_id = values.express_id;

            if (selectParts.length) {
              params.parts = selectParts.map(function (item) {
                return {
                  id: item,
                  count: values["part_".concat(item)]
                };
              });
            }

            if (params.type == 10 && selectedRow) {
              params = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_28__[/* default */ "a"])({}, params, {
                consignee: selectedRow.consignee,
                mobile: selectedRow.mobile,
                province: selectedRow.province,
                city: selectedRow.city,
                district: selectedRow.district,
                address: selectedRow.address
              });
            }

            public_utils__WEBPACK_IMPORTED_MODULE_43__[/* MServer */ "a"].post('/order/save', params).then(function (res) {
              _this9.setState({
                submit: false
              });

              if (res.errcode == 0) {
                var catename = "".concat(_this9.select.brand_name, " ").concat(_this9.select.brand_type_name, " ").concat(_this9.select.texture_name);

                if (!_this9.submitOrderObj[values.order_sn]) {
                  _this9.submitOrderObj[values.order_sn] = {
                    count: 1,
                    obj: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"])({}, _this9.select.id, {
                      name: catename,
                      count: 1
                    })
                  };
                } else {
                  _this9.submitOrderObj[values.order_sn].count++;

                  if (!_this9.submitOrderObj[values.order_sn].obj[_this9.select.id]) {
                    _this9.submitOrderObj[values.order_sn].obj[_this9.select.id] = {
                      name: catename,
                      count: 1
                    };
                  } else {
                    _this9.submitOrderObj[values.order_sn].obj[_this9.select.id].count++;
                  }
                }

                antd_lib_modal__WEBPACK_IMPORTED_MODULE_26___default.a.confirm({
                  title: '订单已提交成功',
                  okText: '继续下单',
                  cancelText: '查看订单',
                  onOk: function onOk() {
                    values.type == 10 && importExcelData && _this9.setState({
                      drawer: true
                    });
                  },
                  onCancel: function onCancel() {
                    _this9.setState({
                      order_sn: values.order_sn
                    }, function () {
                      if (_this9.dialogDetailRef.current) _this9.dialogDetailRef.current.open();
                    });
                  }
                });
              }
            });
          }).catch(function (err) {
            antd_lib_message__WEBPACK_IMPORTED_MODULE_31___default.a.error(err.message);
          });
        }
      });
    }
  }, {
    key: "readFile",
    value: function readFile(file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      var that = this;

      reader.onload = function () {
        delete that.moveOptions.size;
        delete that.moveOptions.y;
        that.moveOptions.x = 0;
        that.setState({
          image: this.result
        }, function () {
          that.imageUploadRef.current.onload = function () {
            that.getCanvas();
            that.listenerMove();
            var preview = that.state.preview;

            if (preview) {
              that.handlePreview(true);
            }
          };
        });
      };
    }
  }, {
    key: "handleUploadOrderExcel",
    value: function handleUploadOrderExcel(file) {
      if (!file) return;
      var reader = new FileReader();
      reader.readAsBinaryString(file);
      var that = this;

      reader.onload = function () {
        var workbook = xlsx__WEBPACK_IMPORTED_MODULE_41___default.a.read(this.result, {
          type: 'binary'
        });
        var workbookJson = xlsx__WEBPACK_IMPORTED_MODULE_41___default.a.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
        var result = [];
        workbookJson.forEach(function (item, index) {
          var mobile = item['联系手机'];
          if (mobile) mobile = mobile.toString().match(/[1-9]\d*/)[0];
          var adsplit = (item['收货地址'] || item['收货地址 '] || '').trim().split(/\s+/);
          result.push({
            order_sn: item['订单编号'],
            consignee: item['收货人姓名'],
            mobile: mobile,
            province: adsplit[0],
            city: adsplit[1],
            district: adsplit[2],
            address: adsplit.slice(3).join(' '),
            seller_remark: item['订单备注'],
            buyer_remark: item['买家留言'],
            remark: item['自定义备注'],
            index: index
          });
        });
        that.setState({
          drawer: true,
          importExcelData: result
        });
      };
    }
  }, {
    key: "handleSelectRow",
    value: function handleSelectRow(selectedRow) {
      var setFieldsValue = this.props.form.setFieldsValue;
      setFieldsValue({
        order_sn: selectedRow.order_sn
      });
      this.setState({
        selectedRowKeys: selectedRow.order_sn,
        selectedRow: selectedRow,
        drawer: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this10 = this;

      var _this$state3 = this.state,
          image = _this$state3.image,
          preview = _this$state3.preview,
          submit = _this$state3.submit,
          color = _this$state3.color,
          pickerColor = _this$state3.pickerColor,
          auto = _this$state3.auto,
          list = _this$state3.list,
          importExcelData = _this$state3.importExcelData,
          drawer = _this$state3.drawer,
          selectedRowKeys = _this$state3.selectedRowKeys,
          selectedRow = _this$state3.selectedRow,
          order_sn = _this$state3.order_sn,
          expressList = _this$state3.expressList,
          partList = _this$state3.partList,
          selectParts = _this$state3.selectParts;
      var _this$props$form = this.props.form,
          getFieldDecorator = _this$props$form.getFieldDecorator,
          getFieldValue = _this$props$form.getFieldValue;
      var select = this.select;
      var rowSelection = {
        type: 'radio',
        selectedRowKeys: selectedRowKeys,
        onChange: function onChange(selectedRowKeys, selectedRows) {
          _this10.handleSelectRow(selectedRows[0]);
        }
      };
      return react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement("div", {
        className: "page-layout-center"
      }, react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement(component__WEBPACK_IMPORTED_MODULE_42__[/* DialogOrderDetail */ "c"], {
        ref: this.dialogDetailRef,
        order_sn: order_sn
      }), react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement("div", {
        className: public_theme_pages_index_less__WEBPACK_IMPORTED_MODULE_44___default.a.layoutHome
      }, react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement("div", {
        className: public_theme_pages_index_less__WEBPACK_IMPORTED_MODULE_44___default.a.layoutHomeHd
      }, react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement(antd_lib_cascader__WEBPACK_IMPORTED_MODULE_24___default.a, {
        showSearch: {
          filter: function filter(input, path) {
            if (!input) return true;
            input = input.toLowerCase();
            var labels = path.map(function (item) {
              return item.label.replace(/\s*/g, '').toLowerCase();
            }).join('');
            var inputKeys = input.split(' ');
            var has = true;

            for (var i = 0; i < inputKeys.length; i++) {
              var item = inputKeys[i];

              if (labels.indexOf(item) == -1) {
                has = false;
                break;
              }
            }

            return has;
          }
        },
        allowClear: false,
        options: list,
        style: {
          width: 320
        },
        placeholder: "\u9009\u62E9\u624B\u673A\u578B\u53F7\uFF0C\u652F\u6301\u641C\u7D22",
        onChange: function onChange(value) {
          _this10.select = _this10.cateObj[value[2]];
          public_utils__WEBPACK_IMPORTED_MODULE_43__[/* MServer */ "a"].get("/cate/catetextureattr/".concat(_this10.select.id)).then(function (res) {
            _this10.select.texture_attr = res.errcode == 0 ? res.data : [];

            _this10.forceUpdate(function () {
              if (_this10.imageBgRef.current.complete) {
                _this10.getCanvas();
              } else {
                _this10.imageBgRef.current.onload = function () {
                  _this10.getCanvas();
                };
              }
            });
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_22___default.a, {
        className: "hide",
        type: "file",
        ref: function ref(e) {
          return _this10.uploadInputRef = e && e.input;
        },
        accept: 'image/png,image/jpg,image/jpeg',
        onChange: function onChange(e) {
          return _this10.readFile(e.target.files[0]);
        }
      }), react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_20___default.a, {
        type: "primary",
        icon: "cloud-upload",
        onClick: function onClick() {
          return _this10.uploadInputRef.click();
        }
      }, "\u4E0A\u4F20\u56FE\u7247"), react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_20___default.a, {
        style: {
          marginLeft: '15px'
        },
        onClick: function onClick() {
          return _this10.handlePreview(!preview);
        }
      }, preview ? '编辑' : '预览'), react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_18___default.a, {
        style: {
          marginLeft: '15px'
        },
        disabled: !this.select || !image,
        checked: auto,
        onChange: function onChange(e) {
          _this10.setState({
            auto: e.target.checked
          }, function () {
            _this10.getCanvas();

            if (e.target.checked) {
              _this10.handlePreview(true);
            } else {
              _this10.setState({
                preview: null
              });
            }
          });
        }
      }, "\u56FE\u7247\u81EA\u9002\u5E94"), react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement(antd_lib_popover__WEBPACK_IMPORTED_MODULE_12___default.a, {
        defaultVisible: true,
        overlayClassName: public_theme_pages_index_less__WEBPACK_IMPORTED_MODULE_44___default.a.popoverSetting,
        placement: "bottomRight",
        trigger: "click",
        content: react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_14___default.a, {
          className: "inline-form"
        }, react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement("div", {
          style: {
            display: 'flex'
          }
        }, react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_14___default.a.Item, {
          label: "\u7F29\u653E",
          style: {
            flex: '1'
          }
        }, react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_16___default.a, {
          style: {
            width: 80
          },
          disabled: !!preview || auto,
          ref: function ref(e) {
            if (e) _this10.sizeInputRef = e.inputNumberRef;
          },
          onChange: function onChange(value) {
            return _this10.handleSize(value);
          },
          defaultValue: 100
        }), react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement("span", {
          style: {
            marginLeft: '10px'
          }
        }, "%")), react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_14___default.a.Item, {
          label: "\u65CB\u8F6C",
          style: {
            flex: '1'
          }
        }, react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_16___default.a, {
          style: {
            width: 80
          },
          disabled: !!preview || auto,
          ref: function ref(e) {
            if (e) _this10.rotateInputRef = e.inputNumberRef;
          },
          onChange: function onChange(value) {
            return _this10.handleRotate(value);
          },
          defaultValue: 0
        }))), react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_14___default.a.Item, {
          label: "\u80CC\u666F\u8272\u8BBE\u7F6E"
        }, react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement(component__WEBPACK_IMPORTED_MODULE_42__[/* Select */ "g"], {
          style: {
            width: 120
          },
          value: color,
          onChange: function onChange(value) {
            return _this10.setState({
              color: value
            }, function () {
              if (value != -1) {
                _this10.getCanvas();
              }
            });
          },
          options: [{
            label: '透明',
            value: 'tran'
          }, {
            label: '黑色',
            value: '#000'
          }, {
            label: '白色',
            value: '#fff'
          }, {
            label: '红色',
            value: '#ff1300'
          }, {
            label: '自定义',
            value: '-1'
          }]
        }), color == -1 ? react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement("div", {
          style: {
            display: 'inline-block',
            position: 'relative',
            top: '5px',
            left: '10px'
          }
        }, react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement(component__WEBPACK_IMPORTED_MODULE_42__[/* ColorPicker */ "a"], {
          color: pickerColor,
          onChange: function onChange(c) {
            _this10.setState({
              pickerColor: c.color
            }, _this10.getCanvas);
          }
        })) : null)))
      }, react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement("a", {
        style: {
          float: 'right',
          lineHeight: '32px'
        }
      }, "\u56FE\u7247\u64CD\u4F5C"))), react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement("div", {
        className: public_theme_pages_index_less__WEBPACK_IMPORTED_MODULE_44___default.a.layoutHomeBd
      }, react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement("div", {
        className: public_theme_pages_index_less__WEBPACK_IMPORTED_MODULE_44___default.a.mobilePreview
      }, react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement("div", {
        className: public_theme_pages_index_less__WEBPACK_IMPORTED_MODULE_44___default.a.mobilePreviewCanvas,
        ref: this.boxRef
      }, preview ? react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement("div", {
        className: public_theme_pages_index_less__WEBPACK_IMPORTED_MODULE_44___default.a.previewImage
      }, react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement("img", {
        src: preview,
        style: {
          width: 320
        }
      }))) : null, react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement("div", {
        key: "images",
        className: "hide"
      }, react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement("img", {
        ref: this.transBgRef,
        crossOrigin: "",
        src: "http://cdn-static.yikebb.com/static/images/transparent_bg.jpg"
      }), image ? react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement("img", {
        ref: this.imageUploadRef,
        crossOrigin: "",
        src: image
      }) : null, select ? react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement("img", {
        ref: this.imageBgRef,
        crossOrigin: "",
        src: "".concat(config_locale__WEBPACK_IMPORTED_MODULE_45___default.a["production"].url.cdn).concat(select.size_img)
      }) : null, select && select.camera_img ? react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement("img", {
        ref: this.imageCameraRef,
        crossOrigin: "",
        src: "".concat(config_locale__WEBPACK_IMPORTED_MODULE_45___default.a["production"].url.cdn).concat(select.camera_img)
      }) : null), react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement("canvas", {
        key: "canvas1",
        ref: this.canvasRef
      }), react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement("canvas", {
        key: "canvas2",
        ref: this.canvasCameraRef
      }), react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_10___default.a, {
        title: "\u4E0A\u4F20\u56FE\u7247\u540E\uFF0C\u62D6\u52A8\u8FDB\u884C\u653E\u5927\u7F29\u5C0F"
      }, react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement("div", {
        className: public_theme_pages_index_less__WEBPACK_IMPORTED_MODULE_44___default.a.box1,
        ref: this.dragBox1
      })), react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_10___default.a, {
        title: "\u4E0A\u4F20\u56FE\u7247\u540E\uFF0C\u62D6\u52A8\u8FDB\u884C\u65CB\u8F6C"
      }, react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement("div", {
        className: public_theme_pages_index_less__WEBPACK_IMPORTED_MODULE_44___default.a.box2,
        ref: this.dragBox2
      })))), react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement("div", {
        className: public_theme_pages_index_less__WEBPACK_IMPORTED_MODULE_44___default.a.orderConfig
      }, react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_14___default.a, {
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_14___default.a.Item, {
        label: "\u8BA2\u5355\u7C7B\u578B"
      }, getFieldDecorator('type', {
        initialValue: 0
      })(react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement(antd_lib_radio__WEBPACK_IMPORTED_MODULE_8___default.a.Group, {
        options: [{
          label: '普通订单',
          value: 0
        }, {
          label: '充值订单',
          value: 10
        }]
      }))), getFieldValue('type') == 10 ? react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_14___default.a.Item, null, react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement(component__WEBPACK_IMPORTED_MODULE_42__[/* UploadBtn */ "i"].Local, {
        accept: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",
        text: "\u5BFC\u5165\u6DD8\u5B9D\u8BA2\u5355",
        onUpload: this.handleUploadOrderExcel
      }), importExcelData ? react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_20___default.a, {
        type: "primary",
        style: {
          marginLeft: '15px'
        },
        onClick: function onClick() {
          return _this10.setState({
            drawer: true
          });
        }
      }, "\u6253\u5F00\u5BFC\u5165\u7684\u8BA2\u5355") : null, selectedRow ? react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement("div", {
        className: public_theme_pages_index_less__WEBPACK_IMPORTED_MODULE_44___default.a.remarkBox
      }, react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement("p", {
        style: {
          marginBottom: '10px',
          lineHeight: 1
        }
      }, "\u8BA2\u5355\u5907\u6CE8\uFF1A", selectedRow.seller_remark), react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement("p", {
        style: {
          marginBottom: '10px',
          lineHeight: 1
        }
      }, "\u4E70\u5BB6\u7559\u8A00\uFF1A", selectedRow.buyer_remark), react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement("p", {
        style: {
          marginBottom: '0',
          lineHeight: 1
        }
      }, "\u81EA\u5B9A\u4E49\u5907\u6CE8\uFF1A", selectedRow.remark)) : null) : null, react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_14___default.a.Item, {
        label: "\u914D\u8D27\u6807\u7B7E",
        extra: getFieldValue('order_sn') ? react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement("a", {
          className: "text-info",
          onClick: function onClick() {
            _this10.setState({
              order_sn: getFieldValue('order_sn')
            }, function () {
              _this10.dialogDetailRef.current && _this10.dialogDetailRef.current.open();
            });
          }
        }, "\u67E5\u770B\u8BA2\u5355") : null
      }, getFieldDecorator('order_sn', {
        rules: [{
          required: true,
          message: '配货标签不能为空'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_22___default.a, {
        placeholder: "\u586B\u5199\u6807\u7B7E"
      }))), react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_14___default.a.Item, {
        label: "\u8BA2\u8D27\u6570\u91CF"
      }, getFieldDecorator('quantity', {
        rules: [{
          required: true,
          message: '订货数量不能为空'
        }],
        initialValue: 1
      })(react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_16___default.a, {
        precision: 0,
        min: 1
      }))), select && select.texture_attr.length ? react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_14___default.a.Item, {
        label: "\u5C5E\u6027(\u989C\u8272)"
      }, getFieldDecorator('texture_attr_id', {
        rules: [{
          required: true,
          message: '请先选择属性'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement(component__WEBPACK_IMPORTED_MODULE_42__[/* Select */ "g"], {
        options: select.texture_attr,
        fieldName: {
          label: 'texture_attr_name',
          value: 'texture_attr_id'
        },
        placeholder: "\u9009\u62E9\u5C5E\u6027",
        style: {
          width: 180
        }
      }))) : null, getFieldValue('type') == 10 ? react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_14___default.a.Item, {
        label: "\u9009\u62E9\u7269\u6D41"
      }, getFieldDecorator('express_id', {
        rules: [{
          required: true,
          message: '请先选择物流'
        }],
        initialValue: expressList.length ? function () {
          var defaultList = expressList.filter(function (item) {
            return item.default;
          });

          if (defaultList.length) {
            return defaultList[0].id;
          }

          return undefined;
        }() : undefined
      })(react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement(component__WEBPACK_IMPORTED_MODULE_42__[/* Select */ "g"], {
        options: expressList,
        fieldName: {
          value: 'id',
          label: 'name'
        }
      }))) : null, getFieldValue('type') == 10 && partList.length ? react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement(antd_lib_table__WEBPACK_IMPORTED_MODULE_6___default.a, {
        rowKey: "id",
        dataSource: partList,
        pagination: false,
        style: {
          marginBottom: '15px'
        },
        rowSelection: {
          onChange: function onChange(selectedRowKeys) {
            _this10.setState({
              selectParts: selectedRowKeys
            });
          }
        },
        columns: [{
          key: 'name',
          dataIndex: 'name',
          title: '配件'
        }, {
          key: 'number',
          dataIndex: 'id',
          title: '购买数量',
          render: function render(id) {
            return react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_14___default.a.Item, {
              className: "no-margin"
            }, getFieldDecorator("part_".concat(id), selectParts.includes(id) ? {
              rules: [{
                required: true,
                message: '请输入赠品数量'
              }],
              initialValue: 1
            } : {
              initialValue: 1
            })(react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_16___default.a, null)));
          }
        }]
      }) : null, react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_14___default.a.Item, null, react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_20___default.a, {
        type: "primary",
        htmlType: "submit",
        loading: submit
      }, "\u63D0\u4EA4\u8BA2\u5355")))))), react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement("div", {
        style: {
          paddingTop: '15px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement(antd_lib_tag__WEBPACK_IMPORTED_MODULE_4___default.a, null, "W"), "\u4E0A\u79FB"), "\uFF0C", react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement(antd_lib_tag__WEBPACK_IMPORTED_MODULE_4___default.a, null, "S"), "\u4E0B\u79FB"), "\uFF0C", react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement(antd_lib_tag__WEBPACK_IMPORTED_MODULE_4___default.a, null, "A"), "\u5DE6\u79FB"), "\uFF0C", react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement(antd_lib_tag__WEBPACK_IMPORTED_MODULE_4___default.a, null, "D"), "\u53F3\u79FB"), "\uFF0C", react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement(antd_lib_tag__WEBPACK_IMPORTED_MODULE_4___default.a, null, "E"), "\u653E\u5927"), "\uFF0C", react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement(antd_lib_tag__WEBPACK_IMPORTED_MODULE_4___default.a, null, "R"), "\u7F29\u5C0F")), react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_1___default.a, {
        title: "\u5BFC\u5165\u6DD8\u5B9D\u8BA2\u5355",
        placement: "bottom",
        height: 720,
        bodyStyle: {
          padding: 0
        } // closable={false}
        ,
        onClose: function onClose() {
          return _this10.setState({
            drawer: false
          });
        },
        visible: drawer
      }, react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement(antd_lib_table__WEBPACK_IMPORTED_MODULE_6___default.a, {
        rowKey: "order_sn",
        rowSelection: rowSelection,
        dataSource: importExcelData,
        onRow: function onRow(row) {
          return {
            onClick: function onClick() {
              _this10.handleSelectRow(row);
            }
          };
        },
        columns: [{
          key: 'order_sn',
          dataIndex: 'order_sn',
          title: '订单编号',
          render: function render(text, record) {
            return react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement("span", null, text, _this10.submitOrderObj[record.order_sn] ? react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_10___default.a, {
              title: react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement("div", {
                className: public_theme_pages_index_less__WEBPACK_IMPORTED_MODULE_44___default.a.tooltipContent
              }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(_this10.submitOrderObj[record.order_sn].obj).map(function (item) {
                return react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement("p", {
                  key: item
                }, _this10.submitOrderObj[record.order_sn].obj[item].name, " ", _this10.submitOrderObj[record.order_sn].obj[item].count, "\u6B21");
              }))
            }, react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement("span", {
              className: "text-success"
            }, "(\u5DF2\u63D0\u4EA4", _this10.submitOrderObj[record.order_sn].count, "\u6B21)")) : null);
          }
        }, {
          key: 'consignee',
          dataIndex: 'consignee',
          title: '收件人姓名',
          render: function render(text, record) {
            return react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_22___default.a, {
              defaultValue: text,
              style: {
                width: 80
              },
              onChange: function onChange(e) {
                importExcelData[record.index].consignee = e.target.value;
              },
              onClick: function onClick(e) {
                e.preventDefault();
                e.stopPropagation();
              }
            });
          }
        }, {
          key: 'mobile',
          dataIndex: 'mobile',
          title: '联系手机',
          render: function render(text, record) {
            return react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_22___default.a, {
              defaultValue: text,
              style: {
                width: 122
              },
              onChange: function onChange(e) {
                importExcelData[record.index].mobile = e.target.value;
              },
              onClick: function onClick(e) {
                e.preventDefault();
                e.stopPropagation();
              }
            });
          }
        }, {
          key: 'province',
          dataIndex: 'province',
          title: '省',
          render: function render(text, record) {
            return react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_22___default.a, {
              defaultValue: text,
              style: {
                width: 80
              },
              onChange: function onChange(e) {
                importExcelData[record.index].province = e.target.value;
              },
              onClick: function onClick(e) {
                e.preventDefault();
                e.stopPropagation();
              }
            });
          }
        }, {
          key: 'city',
          dataIndex: 'city',
          title: '市',
          render: function render(text, record) {
            return react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_22___default.a, {
              defaultValue: text,
              style: {
                width: 80
              },
              onChange: function onChange(e) {
                importExcelData[record.index].city = e.target.value;
              },
              onClick: function onClick(e) {
                e.preventDefault();
                e.stopPropagation();
              }
            });
          }
        }, {
          key: 'district',
          dataIndex: 'district',
          title: '区',
          render: function render(text, record) {
            return react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_22___default.a, {
              defaultValue: text,
              style: {
                width: 80
              },
              onChange: function onChange(e) {
                importExcelData[record.index].district = e.target.value;
              },
              onClick: function onClick(e) {
                e.preventDefault();
                e.stopPropagation();
              }
            });
          }
        }, {
          key: 'address',
          dataIndex: 'address',
          title: '详细地址',
          render: function render(text, record) {
            return react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_22___default.a, {
              defaultValue: text,
              style: {
                width: 150
              },
              onChange: function onChange(e) {
                importExcelData[record.index].address = e.target.value;
              },
              onClick: function onClick(e) {
                e.preventDefault();
                e.stopPropagation();
              }
            });
          }
        }, {
          key: 'seller_remark',
          dataIndex: 'seller_remark',
          title: '订单备注',
          render: function render(text) {
            return react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_10___default.a, {
              title: text
            }, react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement("p", {
              style: {
                width: 80,
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis'
              }
            }, text));
          }
        }, {
          key: 'buyer_remark',
          dataIndex: 'buyer_remark',
          title: '买家留言',
          render: function render(text) {
            return react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_10___default.a, {
              title: text
            }, react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement("p", {
              style: {
                width: 80,
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis'
              }
            }, text));
          }
        }, {
          key: 'remark',
          dataIndex: 'remark',
          title: '自定义备注',
          render: function render(text) {
            return react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_10___default.a, {
              title: text
            }, react__WEBPACK_IMPORTED_MODULE_40___default.a.createElement("p", {
              style: {
                width: 80,
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis'
              }
            }, text));
          }
        }]
      })));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_40__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (antd_lib_form__WEBPACK_IMPORTED_MODULE_14___default.a.create()(Index));

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "T22j":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-float");

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

/***/ "UEsk":
/***/ (function(module, exports) {

module.exports = require("antd/lib/spin/style");

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

/***/ "WYi6":
/***/ (function(module, exports) {

module.exports = require("antd/lib/drawer/style");

/***/ }),

/***/ "Wa2I":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("T22j");

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

/***/ "X1wy":
/***/ (function(module, exports) {

module.exports = require("xlsx");

/***/ }),

/***/ "XQdj":
/***/ (function(module, exports) {

module.exports = require("antd/lib/radio");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "XXOK":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("J3/a");

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

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

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

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

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

/***/ "g0VI":
/***/ (function(module, exports) {

module.exports = {
	"order-table": "order-table___2uLF-",
	"orderTable": "order-table___2uLF-",
	"table-thead": "table-thead___k90tJ",
	"tableThead": "table-thead___k90tJ",
	"table-body-head": "table-body-head___jl6OQ",
	"tableBodyHead": "table-body-head___jl6OQ",
	"table-body-content": "table-body-content___11_wM",
	"tableBodyContent": "table-body-content___11_wM",
	"table-body-footer": "table-body-footer___2MSGv",
	"tableBodyFooter": "table-body-footer___2MSGv",
	"table-body-row-span": "table-body-row-span___3H5v3",
	"tableBodyRowSpan": "table-body-row-span___3H5v3",
	"table-image": "table-image___3e1zA",
	"tableImage": "table-image___3e1zA"
};

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "gR/H":
/***/ (function(module, exports) {

module.exports = require("antd/lib/pagination");

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

/***/ "lRur":
/***/ (function(module, exports) {

module.exports = require("antd/lib/table/style");

/***/ }),

/***/ "mVpe":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  development: {
    url: {
      api: '//localhost:7001',
      cdn: 'http://cdn-upload.yikebb.com/',
      cdnStatic: 'http://cdn-static.yikebb.com/',
      cdnUser: 'http://cdn-user.yikebb.com/'
    }
  },
  production: {
    url: {
      api: '//api.yikebb.com',
      cdn: 'http://cdn-upload.yikebb.com/',
      cdnStatic: 'http://cdn-static.yikebb.com/',
      cdnUser: 'http://cdn-user.yikebb.com/'
    }
  }
};

/***/ }),

/***/ "mfQd":
/***/ (function(module, exports) {

module.exports = require("rc-color-picker");

/***/ }),

/***/ "mfSZ":
/***/ (function(module, exports) {

module.exports = require("antd/lib/input-number/style");

/***/ }),

/***/ "nFMY":
/***/ (function(module, exports) {

module.exports = {
	"rcColorPickerSlideUpIn": "rcColorPickerSlideUpIn___3H0A8",
	"rcColorPickerSlideUpOut": "rcColorPickerSlideUpOut___1yfoo",
	"rcColorPickerSlideDownIn": "rcColorPickerSlideDownIn___V8vca",
	"rcColorPickerSlideDownOut": "rcColorPickerSlideDownOut___2b3Er"
};

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "oRSk":
/***/ (function(module, exports) {

module.exports = require("antd/lib/input/style");

/***/ }),

/***/ "p0XB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

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

/***/ "qYgU":
/***/ (function(module, exports) {

module.exports = require("antd/lib/cascader/style");

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

/***/ "sMIJ":
/***/ (function(module, exports) {

module.exports = require("clipboard");

/***/ }),

/***/ "sN99":
/***/ (function(module, exports) {

module.exports = require("antd/lib/popconfirm/style");

/***/ }),

/***/ "tCZL":
/***/ (function(module, exports) {

module.exports = require("antd/lib/popover/style");

/***/ }),

/***/ "umso":
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon/style");

/***/ }),

/***/ "vEvA":
/***/ (function(module, exports) {

module.exports = require("antd/lib/spin");

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

/***/ "wa65":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "wvHv":
/***/ (function(module, exports) {

module.exports = require("antd/lib/drawer");

/***/ }),

/***/ "xKsY":
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal");

/***/ }),

/***/ "z6+L":
/***/ (function(module, exports) {

module.exports = require("antd/lib/tooltip");

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