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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

/***/ "0B1J":
/***/ (function(module, exports) {

module.exports = require("dva-no-router");

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

/***/ "374s":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return roleList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return shopMap; });
var roleList = [{
  label: '默认',
  value: 'default'
}, {
  label: '管理员',
  value: 'manager'
}, {
  label: '订单管理员',
  value: 'order'
}];
var shopMap = {
  pdd: {
    name: '拼多多'
  },
  taotao: {
    name: '淘宝'
  }
};

/***/ }),

/***/ "3PsY":
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ }),

/***/ "3ece":
/***/ (function(module, exports) {

module.exports = require("antd/lib/dropdown/style");

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cMU6");


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
	"layout-home-left": "layout-home-left___3mbMa",
	"layoutHomeLeft": "layout-home-left___3mbMa",
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
	"homeFooter": "home-footer___1NLQ1",
	"remark": "remark___3VQcR"
};

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

/***/ "Bg3c":
/***/ (function(module, exports) {

module.exports = require("antd/lib/col/style");

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "BucJ":
/***/ (function(module, exports) {

module.exports = require("antd/lib/tag/style");

/***/ }),

/***/ "COMb":
/***/ (function(module, exports) {

module.exports = {
	"avatar": "avatar___2XTi5",
	"info": "info___OzJ4B"
};

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

/***/ "GRDg":
/***/ (function(module, exports) {



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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return convertBase64UrlToBlob; });
/* concated harmony reexport MServer */__webpack_require__.d(__webpack_exports__, "a", function() { return server; });
/* unused concated harmony import Url */



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

/***/ "Kjtv":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/is-iterable");

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

/***/ "Ndzv":
/***/ (function(module, exports) {

module.exports = require("address-parse");

/***/ }),

/***/ "O40h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eVuF");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

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
          user = _this$props.user,
          onShowNotice = _this$props.onShowNotice;
      var isSub = !!user.sub;
      var isManager = isSub && user.sub.role == 'manager';
      var isOrder = isSub && user.sub.role == 'order';
      var menuList = [{
        title: '下单',
        href: '/'
      }, // {
      //     title: '图片空间',
      //     href: '/image'
      // },
      {
        title: '订单列表',
        href: '/order'
      }, {
        title: '售后订单',
        href: '/refund'
      }, {
        title: '账单列表',
        href: '/bill'
      }, {
        title: '子账号列表',
        href: '/sub'
      }, {
        title: '店铺管理',
        href: '/shop'
      }];
      var menu = [].concat(menuList);

      if (isSub) {
        if (isOrder) {
          menu = menuList.filter(function (item) {
            return ['/order', '/refund'].includes(item.href);
          });
        } else {
          menu = menuList.filter(function (item) {
            return ['/', '/order', '/refund'].includes(item.href);
          }); // if (isManager) {
          //     menu.push(menuList.find(item => item.href == '/bill'));
          // }
        }
      }

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
      })), external_react_default.a.createElement("div", null, external_react_default.a.createElement("a", {
        style: {
          marginRight: '15px'
        },
        onClick: onShowNotice
      }, "\u67E5\u770B\u516C\u544A"), external_react_default.a.createElement(dropdown_default.a, {
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
      }, isSub ? "".concat(user.username, ":").concat(user.sub.username) : user.username), external_react_default.a.createElement(icon_default.a, {
        type: "caret-down",
        className: header_style_default.a.dropdownIcon
      })))));
    }
  }]);

  return Header;
}(external_react_["Component"]);


// EXTERNAL MODULE: ./component/upload-btn/index.jsx + 1 modules
var upload_btn = __webpack_require__("pzQ+");

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

// EXTERNAL MODULE: external "antd/lib/button/style"
var button_style_ = __webpack_require__("DnGC");

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__("eGmO");
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "antd/lib/popconfirm/style"
var popconfirm_style_ = __webpack_require__("sN99");

// EXTERNAL MODULE: external "antd/lib/popconfirm"
var popconfirm_ = __webpack_require__("QghY");
var popconfirm_default = /*#__PURE__*/__webpack_require__.n(popconfirm_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__("dfwq");

// EXTERNAL MODULE: external "antd/lib/message/style"
var message_style_ = __webpack_require__("XZ83");

// EXTERNAL MODULE: external "antd/lib/message"
var message_ = __webpack_require__("3PsY");
var message_default = /*#__PURE__*/__webpack_require__.n(message_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("doui");

// EXTERNAL MODULE: external "clipboard"
var external_clipboard_ = __webpack_require__("sMIJ");
var external_clipboard_default = /*#__PURE__*/__webpack_require__.n(external_clipboard_);

// EXTERNAL MODULE: ./public/utils/index.js + 1 modules
var utils = __webpack_require__("HgRd");

// EXTERNAL MODULE: external "antd/lib/form/style"
var form_style_ = __webpack_require__("2w/n");

// EXTERNAL MODULE: external "antd/lib/form"
var form_ = __webpack_require__("foLw");
var form_default = /*#__PURE__*/__webpack_require__.n(form_);

// EXTERNAL MODULE: external "antd/lib/input/style"
var input_style_ = __webpack_require__("oRSk");

// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__("Uqqx");
var input_default = /*#__PURE__*/__webpack_require__.n(input_);

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
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  if (!src) {
    return external_react_default.a.createElement("div", {
      className: order_list_style_default.a.tableImage
    }, external_react_default.a.createElement("p", null, "\u6682\u65E0\u56FE\u7247"));
  }

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
    src: src
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
        pageSize: props.pageSize || 10,
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
      var _this$props = this.props,
          _this$props$paginatio = _this$props.pagination,
          pagination = _this$props$paginatio === void 0 ? true : _this$props$paginatio,
          _this$props$user = _this$props.user,
          user = _this$props$user === void 0 ? {} : _this$props$user;
      var colSpan = user.sub ? 7 : 9;
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
      var isSub = !!user.sub;
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
      }, external_react_default.a.createElement("th", null, "\u6253\u5370\u56FE"), external_react_default.a.createElement("th", null, "\u5546\u54C1"), !isSub ? external_react_default.a.createElement("th", null, "\u5355\u4EF7") : null, external_react_default.a.createElement("th", null, "\u8BA2\u8D27\u91CF"), external_react_default.a.createElement("th", null, "\u521B\u5EFA\u65F6\u95F4"), !isSub ? external_react_default.a.createElement("th", null, "\u4EF7\u683C") : null, external_react_default.a.createElement("th", null, "\u5FEB\u9012"), external_react_default.a.createElement("th", null, "\u8BA2\u5355\u7C7B\u578B"), external_react_default.a.createElement("th", null, "\u72B6\u6001")), external_react_default.a.createElement("tr", null, external_react_default.a.createElement("td", {
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
        }, external_react_default.a.createElement("span", null, external_react_default.a.createElement("label", null, "\u8BA2\u5355\u53F7\uFF1A"), item.order_sn), external_react_default.a.createElement("span", null, external_react_default.a.createElement("label", null, "\u521B\u5EFA\u65F6\u95F4\uFF1A"), item.createdAt), external_react_default.a.createElement("span", null, external_react_default.a.createElement("label", null, "\u6536\u4EF6\u4FE1\u606F\uFF1A"), item.consignee ? "".concat(item.consignee, "(").concat(item.mobile, ")") : '-', " ", item.province ? "".concat(item.province, " ").concat(item.city, " ").concat(item.district, " ").concat(item.address) : '-'))), [].concat(Object(toConsumableArray["a" /* default */])(item.orders.map(function (o) {
          return Object(objectSpread["a" /* default */])({}, o, {
            current_type: 'order'
          });
        })), Object(toConsumableArray["a" /* default */])(item.parts.map(function (p) {
          return Object(objectSpread["a" /* default */])({}, p, {
            current_type: 'part'
          });
        }))).map(function (order, i) {
          return external_react_default.a.createElement("tr", {
            key: "".concat(order.current_type == 'order' ? 'order' : 'part', "_").concat(order.id),
            className: order_list_style_default.a.tableBodyContent
          }, order.current_type == 'order' ? external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement("td", null, external_react_default.a.createElement(ImageHover, {
            src: order.image1,
            onClick: function onClick() {
              return _this13.handleOpenImagePreview(order.image1);
            }
          })), external_react_default.a.createElement("td", null, order.brand_name, " ", order.brand_type_name, " ", order.texture_name, " ", order.texture_attr_name || '', order.print_type === 10 ? external_react_default.a.createElement("span", {
            className: "text-warning"
          }, "(\u88F8\u58F3)") : null, item.status == 30 || item.status == 0 ? external_react_default.a.createElement("div", null, external_react_default.a.createElement(popconfirm_default.a, {
            title: "\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u4E2A\u5546\u54C1\u5417\uFF1F",
            onConfirm: function onConfirm() {
              return _this13.handleDeleteOrder(order.id);
            }
          }, external_react_default.a.createElement("a", null, "\u5220\u9664\u5546\u54C1"))) : null), !isSub ? external_react_default.a.createElement("td", null, order.price) : null, external_react_default.a.createElement("td", null, order.quantity), external_react_default.a.createElement("td", null, order.createdAt)) : external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement("td", null, "\u914D\u4EF6"), external_react_default.a.createElement("td", null, order.name, item.status == 30 ? external_react_default.a.createElement("div", null, external_react_default.a.createElement(popconfirm_default.a, {
            title: "\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u4E2A\u5546\u54C1\u5417\uFF1F",
            onConfirm: function onConfirm() {
              return _this13.handleDeletePart(order.id);
            }
          }, external_react_default.a.createElement("a", null, "\u5220\u9664\u5546\u54C1"))) : null), !isSub ? external_react_default.a.createElement("td", null, order.price) : null, external_react_default.a.createElement("td", null, order.quantity), external_react_default.a.createElement("td", null, order.createdAt)), i === 0 ? [!isSub ? external_react_default.a.createElement("td", {
            key: "amount",
            className: order_list_style_default.a.tableBodyRowSpan,
            rowSpan: item.orders.length + item.parts.length
          }, external_react_default.a.createElement("div", null, "\xA5 ", item.amount), item.post_fee ? external_react_default.a.createElement("div", null, "\u542B\u8FD0\u8D39", item.post_fee, "\u5143") : null) : null, external_react_default.a.createElement("td", {
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
          }, "(", refundStatusMap[item.refund_status].text, item.refund_type == 10 ? '-退运费' : '', ")") : null)] : null);
        }), // item.orders.map((order, i) => (
        //     <tr key={`order_${order.id}`} className={style.tableBodyContent}>
        //         <td><ImageHover src={order.image1} onClick={() => this.handleOpenImagePreview(order.image1)} /></td>
        //         <td>
        //             {order.brand_name} {order.brand_type_name} {order.texture_name} {order.texture_attr_name || ''}
        //             {order.print_type === 10 ? <span className="text-warning">(裸壳)</span> : null}
        //             {
        //                 item.status == 30 || item.status == 0 ? (
        //                     <div>
        //                         <Popconfirm
        //                             title="确定要删除这个商品吗？"
        //                             onConfirm={() => this.handleDeleteOrder(order.id)}
        //                         >
        //                             <a>删除商品</a>
        //                         </Popconfirm>
        //                     </div>
        //                 ) : null
        //             }
        //         </td>
        //         {!isSub ? <td>{order.price}</td> : null}
        //         <td>{order.quantity}</td>
        //         <td>{order.createdAt}</td>
        //         {
        //             i === 0 ? [
        //                 !isSub ? <td key="amount" className={style.tableBodyRowSpan} rowSpan={item.orders.length + item.parts.length}>
        //                     <div>¥ {item.amount}</div>
        //                     {item.post_fee ? <div>含运费{item.post_fee}元</div> : null}
        //                 </td> : null,
        //                 <td key="express" className={style.tableBodyRowSpan} rowSpan={item.orders.length + item.parts.length}>
        //                     {
        //                         item.status == 30 ? (
        //                             <Select 
        //                                 style={{ width: 120 }}
        //                                 options={expressList}
        //                                 value={item.express_id}
        //                                 fieldName={{ label: 'name', value: 'id' }}
        //                                 onChange={value => this.handleChangeExpress(item.id, value)}
        //                             />
        //                         ) : (
        //                             <div>{item.express_name || '--'}</div>
        //                         )
        //                     }
        //                 </td>,
        //                 <td key="type" className={style.tableBodyRowSpan} rowSpan={item.orders.length + item.parts.length}>
        //                     {item.type == 10 ? '充值订单' : '普通订单'}
        //                 </td>,
        //                 <td key="status" className={style.tableBodyRowSpan} rowSpan={item.orders.length + item.parts.length}>
        //                     <span className={statusMap[item.status].className}>{statusMap[item.status].text}</span>
        //                     {item.refund_status != 0 ? <span style={{ display: 'block' }} className={refundStatusMap[item.refund_status].className}>({refundStatusMap[item.refund_status].text}{item.refund_type == 10 ? '-退运费' : ''})</span> : null}
        //                 </td>,
        //             ] : null
        //         }
        //     </tr>
        // )),
        // item.parts.map((part) => (
        //     <tr key={`part_${part.id}`} className={style.tableBodyContent}>
        //         <td>配件</td>
        //         <td>
        //             {part.name}
        //             {
        //                 item.status == 30 ? (
        //                     <div>
        //                         <Popconfirm
        //                             title="确定要删除这个商品吗？"
        //                             onConfirm={() => this.handleDeletePart(part.id)}
        //                         >
        //                             <a>删除商品</a>
        //                         </Popconfirm>
        //                     </div>
        //                 ) : null
        //             }
        //         </td>
        //         {!isSub ? <td>{part.price}</td> : null}
        //         <td>{part.quantity}</td>
        //         <td>{part.createdAt}</td>
        //     </tr>
        // )),
        item.status == 30 ? external_react_default.a.createElement("tr", {
          key: "operator",
          className: order_list_style_default.a.tableBodyHead
        }, external_react_default.a.createElement("td", {
          colSpan: colSpan
        }, external_react_default.a.createElement(popconfirm_default.a, {
          title: external_react_default.a.createElement("div", null, "\u786E\u5B9A\u8981\u4ED8\u6B3E", !isSub ? external_react_default.a.createElement("span", null, external_react_default.a.createElement("span", {
            className: "text-warning"
          }, item.amount), "\u5143") : null, "\u5417\uFF1F"),
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
        }, external_react_default.a.createElement(button_default.a, null, "\u5220\u9664\u8BA2\u5355")))) : null, [10, 20, 50].includes(item.status) && item.type == 10 && item.refund_status == 0 && !(user.sub && user.sub.role == 'order') ? external_react_default.a.createElement("tr", {
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
        }, item.type == 10 && item.refund_status == 0 && !(user.sub && user.sub.role == 'order') ? external_react_default.a.createElement(popconfirm_default.a, {
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
      })))))), pager.total > 0 ? external_react_default.a.createElement(pagination_default.a, Object(esm_extends["a" /* default */])({}, pager, {
        onChange: function onChange(page) {
          document.documentElement.scrollTop = 0;

          _this13.getList(page);
        },
        showTotal: function showTotal(total) {
          return "\u5171".concat(total, "\u4E2A\u8BA2\u5355");
        },
        showQuickJumper: true
      })) : null);
    }
  }]);

  return OrderList;
}(external_react_["Component"]);

/* harmony default export */ var order_list = (order_list_OrderList);
// EXTERNAL MODULE: ./component/dialog-order-detail/style.less
var dialog_order_detail_style = __webpack_require__("SuuO");

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
      var _this$props = this.props,
          order_sn = _this$props.order_sn,
          user = _this$props.user;
      return external_react_default.a.createElement(modal_default.a, Object(esm_extends["a" /* default */])({}, this.props, {
        title: "\u8BA2\u5355\u8BE6\u60C5",
        width: 880,
        footer: false,
        centered: true,
        className: "dialog-order-detial"
      }), external_react_default.a.createElement(order_list, {
        user: user,
        action: "/order/userlist",
        condition: {
          order_sn: order_sn
        } // pageSize={1}
        // pagination={false}
        ,
        size: "small"
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


// EXTERNAL MODULE: ./config/locale.js
var locale = __webpack_require__("mVpe");
var locale_default = /*#__PURE__*/__webpack_require__.n(locale);

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


// EXTERNAL MODULE: external "antd/lib/popover/style"
var popover_style_ = __webpack_require__("tCZL");

// EXTERNAL MODULE: external "antd/lib/popover"
var popover_ = __webpack_require__("27qp");
var popover_default = /*#__PURE__*/__webpack_require__.n(popover_);

// CONCATENATED MODULE: ./component/popover-order-detail/index.jsx





function PopoverOrderDetail(_ref) {
  var order_sn = _ref.order_sn,
      user = _ref.user;

  var _useState = Object(external_react_["useState"])(false),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  return visible ? external_react_default.a.createElement(popover_default.a, {
    overlayStyle: {
      width: 880
    },
    placement: "bottomRight",
    title: "\u8BA2\u5355\u8BE6\u60C5",
    visible: visible,
    trigger: ['click'],
    onVisibleChange: function onVisibleChange(_v) {
      return setVisible(_v);
    },
    content: visible ? external_react_default.a.createElement(order_list, {
      action: "/order/userlist",
      condition: {
        order_sn: order_sn
      },
      user: user,
      pageSize: 1,
      pagination: false
    }) : null
  }, external_react_default.a.createElement("a", {
    className: "text-info",
    onClick: function onClick() {
      return setVisible(false);
    }
  }, "\u67E5\u770B\u8BA2\u5355")) : external_react_default.a.createElement("a", {
    className: "text-info",
    onClick: function onClick() {
      return setVisible(true);
    }
  }, "\u67E5\u770B\u8BA2\u5355");
}
// EXTERNAL MODULE: ./config/constant.js
var constant = __webpack_require__("374s");

// CONCATENATED MODULE: ./component/dialog-create-sub/index.jsx
























var dialog_create_sub_DialogCreateSub =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(DialogCreateSub, _Component);

  function DialogCreateSub(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, DialogCreateSub);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(DialogCreateSub).call(this, props));
    _this.state = {
      submit: false
    };
    var handles = ['handleSubmit'];
    handles.forEach(function (item) {
      return _this[item] = _this[item].bind(Object(assertThisInitialized["a" /* default */])(_this));
    });
    return _this;
  }

  Object(createClass["a" /* default */])(DialogCreateSub, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      var _this2 = this;

      e.preventDefault();
      e.stopPropagation();
      var _this$props = this.props,
          validateFields = _this$props.form.validateFields,
          onSuccess = _this$props.onSuccess,
          onCancel = _this$props.onCancel;
      validateFields(function (err, values) {
        if (!err) {
          _this2.setState({
            submit: true
          });

          delete values.confirm_password;
          utils["a" /* MServer */].post('/user/createsub', values).then(function (res) {
            _this2.setState({
              submit: false
            });

            if (res.errcode == 0) {
              message_default.a.success('创建成功');

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
          _this$props2$form = _this$props2.form,
          getFieldDecorator = _this$props2$form.getFieldDecorator,
          getFieldValue = _this$props2$form.getFieldValue,
          user = _this$props2.user;
      return external_react_default.a.createElement(modal_default.a, Object(esm_extends["a" /* default */])({
        title: "\u521B\u5EFA\u5B50\u8D26\u53F7",
        width: 560
      }, this.props, {
        onOk: this.handleSubmit,
        confirmLoading: submit
      }), external_react_default.a.createElement(form_default.a, {
        className: "inline-form",
        onSubmit: this.handleSubmit,
        style: {
          backgroundColor: '#fff',
          border: 'none'
        }
      }, external_react_default.a.createElement(form_default.a.Item, {
        label: "\u8D26\u53F7"
      }, getFieldDecorator('username', {
        rules: [{
          required: true,
          message: '账号必填'
        }]
      })(external_react_default.a.createElement(input_default.a, {
        addonBefore: "".concat(user.username, ":"),
        placeholder: "\u8F93\u5165\u8D26\u53F7",
        maxLength: 10
      }))), external_react_default.a.createElement(form_default.a.Item, {
        label: "\u767B\u5F55\u5BC6\u7801"
      }, getFieldDecorator('password', {
        rules: [{
          required: true,
          validator: function validator(rule, value, callback) {
            var cpw = getFieldValue('confirm_password');

            if (!value) {
              callback('请输入密码');
            } else {
              if (cpw && cpw != value) {
                callback('两次密码输入不一致');
              } else {
                callback();
              }
            }
          }
        }]
      })(external_react_default.a.createElement(input_default.a.Password, {
        placeholder: "\u8F93\u5165\u5BC6\u7801"
      }))), external_react_default.a.createElement(form_default.a.Item, {
        label: "\u786E\u8BA4\u5BC6\u7801"
      }, getFieldDecorator('confirm_password', {
        rules: [{
          required: true,
          validator: function validator(rule, value, callback) {
            var pw = getFieldValue('password');

            if (!value) {
              callback('请输入确认密码');
            } else {
              if (pw && pw != value) {
                callback('两次密码输入不一致');
              } else {
                callback();
              }
            }
          }
        }]
      })(external_react_default.a.createElement(input_default.a.Password, {
        placeholder: "\u4E8C\u6B21\u8F93\u5165\u5BC6\u7801"
      }))), external_react_default.a.createElement(form_default.a.Item, {
        label: "\u9009\u62E9\u89D2\u8272"
      }, getFieldDecorator('role', {
        rules: [{
          required: true
        }],
        initialValue: 'default'
      })(external_react_default.a.createElement(select_Select, {
        options: constant["a" /* roleList */]
      }))), external_react_default.a.createElement(form_default.a.Item, {
        className: "hide"
      }, external_react_default.a.createElement(button_default.a, {
        htmlType: "submit"
      }, "\u4FDD\u5B58"))));
    }
  }]);

  return DialogCreateSub;
}(external_react_["Component"]);

/* harmony default export */ var dialog_create_sub = (CreateModal(form_default.a.create()(dialog_create_sub_DialogCreateSub)));
// CONCATENATED MODULE: ./component/dialog-reset-password/index.jsx






















var dialog_reset_password_DialogResetPassword =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(DialogResetPassword, _Component);

  function DialogResetPassword(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, DialogResetPassword);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(DialogResetPassword).call(this, props));
    _this.state = {
      submit: false
    };
    var handles = ['handleSubmit'];
    handles.forEach(function (item) {
      return _this[item] = _this[item].bind(Object(assertThisInitialized["a" /* default */])(_this));
    });
    return _this;
  }

  Object(createClass["a" /* default */])(DialogResetPassword, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      var _this2 = this;

      e.preventDefault();
      e.stopPropagation();
      var _this$props = this.props,
          validateFields = _this$props.form.validateFields,
          onSuccess = _this$props.onSuccess,
          onCancel = _this$props.onCancel,
          resetId = _this$props.resetId;
      validateFields(function (err, values) {
        if (!err) {
          _this2.setState({
            submit: true
          });

          delete values.confirm_password;
          values.id = resetId;
          utils["a" /* MServer */].post('/user/resetsubpassword', values).then(function (res) {
            _this2.setState({
              submit: false
            });

            if (res.errcode == 0) {
              message_default.a.success('重置成功');

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
      var _this$props$form = this.props.form,
          getFieldDecorator = _this$props$form.getFieldDecorator,
          getFieldValue = _this$props$form.getFieldValue;
      return external_react_default.a.createElement(modal_default.a, Object(esm_extends["a" /* default */])({
        title: "\u91CD\u7F6E\u5BC6\u7801"
      }, this.props, {
        onOk: this.handleSubmit,
        confirmLoading: submit
      }), external_react_default.a.createElement(form_default.a, {
        className: "inline-form",
        onSubmit: this.handleSubmit
      }, external_react_default.a.createElement(form_default.a.Item, {
        label: "\u767B\u5F55\u5BC6\u7801"
      }, getFieldDecorator('password', {
        rules: [{
          required: true,
          validator: function validator(rule, value, callback) {
            var cpw = getFieldValue('confirm_password');

            if (!value) {
              callback('请输入密码');
            } else {
              if (cpw && cpw != value) {
                callback('两次密码输入不一致');
              } else {
                callback();
              }
            }
          }
        }]
      })(external_react_default.a.createElement(input_default.a.Password, {
        placeholder: "\u8F93\u5165\u5BC6\u7801"
      }))), external_react_default.a.createElement(form_default.a.Item, {
        label: "\u786E\u8BA4\u5BC6\u7801"
      }, getFieldDecorator('confirm_password', {
        rules: [{
          required: true,
          validator: function validator(rule, value, callback) {
            var pw = getFieldValue('password');

            if (!value) {
              callback('请输入确认密码');
            } else {
              if (pw && pw != value) {
                callback('两次密码输入不一致');
              } else {
                callback();
              }
            }
          }
        }]
      })(external_react_default.a.createElement(input_default.a.Password, {
        placeholder: "\u4E8C\u6B21\u8F93\u5165\u5BC6\u7801"
      }))), external_react_default.a.createElement(form_default.a.Item, {
        className: "hide"
      }, external_react_default.a.createElement(button_default.a, {
        htmlType: "submit"
      }, "\u4FDD\u5B58"))));
    }
  }]);

  return DialogResetPassword;
}(external_react_["Component"]);

/* harmony default export */ var dialog_reset_password = (CreateModal(form_default.a.create()(dialog_reset_password_DialogResetPassword)));
// EXTERNAL MODULE: external "antd/lib/upload/style"
var upload_style_ = __webpack_require__("eMim");

// EXTERNAL MODULE: external "antd/lib/upload"
var upload_ = __webpack_require__("TfTO");
var upload_default = /*#__PURE__*/__webpack_require__.n(upload_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__("ln6h");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("O40h");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/promise.js
var promise = __webpack_require__("eVuF");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// EXTERNAL MODULE: ./component/dialog-upload-image/style.less
var dialog_upload_image_style = __webpack_require__("GRDg");

// CONCATENATED MODULE: ./component/dialog-upload-image/index.jsx






















function getBase64(file) {
  return new promise_default.a(function (resolve, reject) {
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
      return resolve(reader.result);
    };

    reader.onerror = function (error) {
      return reject(error);
    };
  });
}

var dialog_upload_image_DialogUploadImage =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(DialogUploadImage, _Component);

  function DialogUploadImage(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, DialogUploadImage);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(DialogUploadImage).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      previewVisible: false,
      previewImage: '',
      fileList: [// {
        //     uid: '-1',
        //     name: 'image.png',
        //     status: 'done',
        //     url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        // },
      ]
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleCancel", function () {
      return _this.setState({
        previewVisible: false
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handlePreview",
    /*#__PURE__*/
    function () {
      var _ref = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(file) {
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(!file.url && !file.preview)) {
                  _context.next = 4;
                  break;
                }

                _context.next = 3;
                return getBase64(file.originFileObj);

              case 3:
                file.preview = _context.sent;

              case 4:
                _this.setState({
                  previewImage: file.url || file.preview,
                  previewVisible: true
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleChange", function (_ref2) {
      var fileList = _ref2.fileList;
      return _this.setState({
        fileList: fileList
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(DialogUploadImage, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          previewVisible = _this$state.previewVisible,
          previewImage = _this$state.previewImage,
          fileList = _this$state.fileList;
      var uploadButton = external_react_default.a.createElement("div", null, external_react_default.a.createElement(icon_default.a, {
        type: "plus"
      }), external_react_default.a.createElement("div", {
        className: "ant-upload-text"
      }, "\u4E0A\u4F20\u56FE\u7247"));
      return external_react_default.a.createElement(modal_default.a, Object(esm_extends["a" /* default */])({}, this.props, {
        title: "\u4E0A\u4F20\u56FE\u7247",
        width: 840,
        className: "dialog-upload-image"
      }), external_react_default.a.createElement("div", {
        className: "clearfix"
      }, external_react_default.a.createElement(upload_default.a, {
        multiple: true,
        action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
        listType: "picture-card",
        fileList: fileList,
        onPreview: this.handlePreview,
        onChange: this.handleChange,
        accept: "image/png,image/jpg,image/jpeg"
      }, fileList.length >= 8 ? null : uploadButton), external_react_default.a.createElement(modal_default.a, {
        visible: previewVisible,
        footer: null,
        onCancel: this.handleCancel
      }, external_react_default.a.createElement("img", {
        alt: "example",
        style: {
          width: '100%'
        },
        src: previewImage
      }))));
    }
  }]);

  return DialogUploadImage;
}(external_react_["Component"]);

/* harmony default export */ var dialog_upload_image = (CreateModal(dialog_upload_image_DialogUploadImage));
// EXTERNAL MODULE: ./component/avatar/style.less
var avatar_style = __webpack_require__("COMb");
var component_avatar_style_default = /*#__PURE__*/__webpack_require__.n(avatar_style);

// CONCATENATED MODULE: ./component/avatar/index.jsx




function CustomAvatar(_ref) {
  var src = _ref.src,
      title = _ref.title;
  return external_react_default.a.createElement("div", {
    className: component_avatar_style_default.a.avatar
  }, external_react_default.a.createElement(avatar_default.a, {
    src: src,
    shape: "square"
  }), external_react_default.a.createElement("div", {
    className: component_avatar_style_default.a.info
  }, external_react_default.a.createElement("div", null, title)));
}
// EXTERNAL MODULE: external "antd/lib/row/style"
var row_style_ = __webpack_require__("oOiI");

// EXTERNAL MODULE: external "antd/lib/row"
var row_ = __webpack_require__("tI3Q");
var row_default = /*#__PURE__*/__webpack_require__.n(row_);

// EXTERNAL MODULE: external "antd/lib/col/style"
var col_style_ = __webpack_require__("Bg3c");

// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__("vsU0");
var col_default = /*#__PURE__*/__webpack_require__.n(col_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./component/shop-order/style.less
var shop_order_style = __webpack_require__("Pkm2");
var shop_order_style_default = /*#__PURE__*/__webpack_require__.n(shop_order_style);

// CONCATENATED MODULE: ./component/shop-order/index.jsx
























function ShopOrder(_ref) {
  var onOrder = _ref.onOrder;
  var router = Object(router_["useRouter"])();
  var pageSize = 10;
  var shop_id = router.query.shop_id;

  var _useState = Object(external_react_["useState"])([]),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      shop = _useState2[0],
      setShop = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(1),
      _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 2),
      page = _useState4[0],
      setPage = _useState4[1];

  var _useState5 = Object(external_react_["useState"])(0),
      _useState6 = Object(slicedToArray["a" /* default */])(_useState5, 2),
      total = _useState6[0],
      setTotal = _useState6[1];

  var _useState7 = Object(external_react_["useState"])([]),
      _useState8 = Object(slicedToArray["a" /* default */])(_useState7, 2),
      order = _useState8[0],
      setOrder = _useState8[1];

  var _useState9 = Object(external_react_["useState"])(),
      _useState10 = Object(slicedToArray["a" /* default */])(_useState9, 2),
      submit = _useState10[0],
      setSubmit = _useState10[1];

  var _useState11 = Object(external_react_["useState"])(shop_id ? Number(shop_id) : void 0),
      _useState12 = Object(slicedToArray["a" /* default */])(_useState11, 2),
      current = _useState12[0],
      setCurrent = _useState12[1];

  var getShopList = function getShopList() {
    utils["a" /* MServer */].get('/shop/list', {
      is_all: 1
    }).then(function (res) {
      if (res.data.length) {
        setShop(res.data);
        setCurrent(res.data[0].id);
      }
    });
  };

  var getOrderList = function getOrderList() {
    utils["a" /* MServer */].get('/shop/order/list', {
      shop_id: current,
      page: page,
      pagesize: pageSize
    }).then(function (res) {
      if (res.total) {
        setOrder(res.data);
        setTotal(res.total);
      }
    });
  };

  Object(external_react_["useEffect"])(function () {
    if (current) {
      getOrderList();
    }
  }, [current, page]);
  Object(external_react_["useEffect"])(function () {
    getShopList();
  }, []);
  return external_react_default.a.createElement("div", {
    className: shop_order_style_default.a.card
  }, external_react_default.a.createElement(form_default.a, {
    layout: "inline"
  }, external_react_default.a.createElement(form_default.a.Item, {
    label: "\u9009\u62E9\u5E97\u94FA"
  }, external_react_default.a.createElement(select_default.a, {
    placeholder: "\u9009\u62E9\u5E97\u94FA",
    style: {
      width: 160
    },
    value: current
  }, shop.map(function (item) {
    return external_react_default.a.createElement(select_default.a.Option, {
      key: item.id,
      value: item.id
    }, item.name);
  })))), order.length ? external_react_default.a.createElement(external_react_["Fragment"], null, order.map(function (item) {
    return external_react_default.a.createElement("div", {
      className: shop_order_style_default.a.order,
      key: item.order_sn
    }, external_react_default.a.createElement("div", {
      className: shop_order_style_default.a.head
    }, external_react_default.a.createElement("p", {
      style: {
        marginBottom: 4
      }
    }, "\u8BA2\u5355\u53F7\uFF1A", item.order_sn), external_react_default.a.createElement("p", {
      className: "text-secondary",
      style: {
        marginBottom: 0
      }
    }, "\u6210\u4EA4\u65F6\u95F4\uFF1A", item.trade.confirm_time, external_react_default.a.createElement(popover_default.a, {
      placement: "leftTop",
      content: external_react_default.a.createElement("div", null, external_react_default.a.createElement("p", {
        style: {
          marginBottom: 4
        }
      }, external_react_default.a.createElement("a", null, "\u6536\u4EF6\u4EBA\uFF1A"), item.trade.consignee), external_react_default.a.createElement("p", {
        style: {
          marginBottom: 4
        }
      }, external_react_default.a.createElement("a", null, "\u7535\u8BDD\uFF1A"), item.trade.mobile), external_react_default.a.createElement("p", {
        style: {
          marginBottom: 4
        }
      }, external_react_default.a.createElement("a", null, "\u5730\u5740\uFF1A"), item.trade.province, " ", item.trade.city, " ", item.trade.district, " ", item.trade.address))
    }, external_react_default.a.createElement("a", {
      style: {
        float: 'right'
      }
    }, external_react_default.a.createElement(icon_default.a, {
      type: "user"
    }))))), external_react_default.a.createElement("div", {
      className: shop_order_style_default.a.body
    }, external_react_default.a.createElement(popover_default.a, {
      placement: "leftBottom",
      content: external_react_default.a.createElement("img", {
        style: {
          width: 400
        },
        src: item.goods_img
      })
    }, external_react_default.a.createElement("a", null, external_react_default.a.createElement(CustomAvatar, {
      src: item.goods_img,
      title: item.goods_name
    }))), external_react_default.a.createElement("div", {
      className: shop_order_style_default.a.sub
    }, "\u89C4\u683C\u4FE1\u606F\uFF1A", item.goods_spec), external_react_default.a.createElement(row_default.a, {
      justify: "space-between"
    }, external_react_default.a.createElement(col_default.a, null, "\u6570\u91CF\uFF1A", item.goods_count), external_react_default.a.createElement(col_default.a, null, external_react_default.a.createElement(button_default.a, {
      type: "primary",
      loading: item.id == submit,
      onClick: function onClick() {
        setSubmit(item.id);
        onOrder && onOrder(item, function (res) {
          setSubmit(void 0);

          if (res) {
            if (page == 1) {
              getOrderList();
            } else {
              setPage(1);
            }
          }
        });
      }
    }, "\u4E0B\u5355")))), external_react_default.a.createElement("div", {
      className: shop_order_style_default.a.footer
    }, "\u5BA2\u670D\u5907\u6CE8\uFF1A", item.trade.remark));
  }), external_react_default.a.createElement(pagination_default.a, {
    style: {
      textAlign: 'center'
    },
    size: "small",
    page: page,
    total: total,
    pageSize: pageSize,
    onChange: function onChange(val) {
      return setPage(val);
    }
  })) : external_react_default.a.createElement(empty_default.a, {
    description: "\u6682\u65E0\u8BA2\u5355\u5217\u8868"
  }));
}
// CONCATENATED MODULE: ./component/custom-icon/index.jsx


/* harmony default export */ var custom_icon = (icon_default.a.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1410483_iwgvcycpz0r.js'
}));
// CONCATENATED MODULE: ./component/index.js
/* concated harmony reexport Select */__webpack_require__.d(__webpack_exports__, "l", function() { return select_Select; });
/* concated harmony reexport Header */__webpack_require__.d(__webpack_exports__, "i", function() { return header_Header; });
/* concated harmony reexport UploadBtn */__webpack_require__.d(__webpack_exports__, "o", function() { return upload_btn["a" /* default */]; });
/* unused concated harmony import DialogImagePreview */
/* concated harmony reexport DialogOrderDetail */__webpack_require__.d(__webpack_exports__, "f", function() { return dialog_order_detail; });
/* concated harmony reexport DialogExportHistroy */__webpack_require__.d(__webpack_exports__, "e", function() { return dialog_export_history; });
/* concated harmony reexport TableAction */__webpack_require__.d(__webpack_exports__, "n", function() { return table_action_TableAction; });
/* concated harmony reexport ColorPicker */__webpack_require__.d(__webpack_exports__, "b", function() { return MyColorPicker; });
/* concated harmony reexport OrderList */__webpack_require__.d(__webpack_exports__, "k", function() { return order_list; });
/* concated harmony reexport InputNumber */__webpack_require__.d(__webpack_exports__, "j", function() { return input_number_InputNumber; });
/* unused concated harmony import PopoverOrderDetail */
/* concated harmony reexport DialogCreateSub */__webpack_require__.d(__webpack_exports__, "d", function() { return dialog_create_sub; });
/* concated harmony reexport DialogResetPassword */__webpack_require__.d(__webpack_exports__, "g", function() { return dialog_reset_password; });
/* concated harmony reexport DialogUploadImage */__webpack_require__.d(__webpack_exports__, "h", function() { return dialog_upload_image; });
/* concated harmony reexport Avatar */__webpack_require__.d(__webpack_exports__, "a", function() { return CustomAvatar; });
/* concated harmony reexport ShopOrder */__webpack_require__.d(__webpack_exports__, "m", function() { return ShopOrder; });
/* concated harmony reexport CustomIcon */__webpack_require__.d(__webpack_exports__, "c", function() { return custom_icon; });



















/***/ }),

/***/ "P7Vo":
/***/ (function(module, exports) {

module.exports = require("antd/lib/tag");

/***/ }),

/***/ "Pkm2":
/***/ (function(module, exports) {

module.exports = {
	"card": "card____dMhy",
	"order": "order___PyNdN",
	"head": "head___MUcRs",
	"body": "body___1l455",
	"sub": "sub___2BLak",
	"footer": "footer___iafll"
};

/***/ }),

/***/ "Puj+":
/***/ (function(module, exports) {

module.exports = require("antd/lib/table");

/***/ }),

/***/ "QghY":
/***/ (function(module, exports) {

module.exports = require("antd/lib/popconfirm");

/***/ }),

/***/ "Qp17":
/***/ (function(module, exports) {

module.exports = require("pinyin");

/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "SuuO":
/***/ (function(module, exports) {



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

/***/ "TfTO":
/***/ (function(module, exports) {

module.exports = require("antd/lib/upload");

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

/***/ "cMU6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_drawer_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("WYi6");
/* harmony import */ var antd_lib_drawer_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_drawer_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wvHv");
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("pLtp");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_popover_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("tCZL");
/* harmony import */ var antd_lib_popover_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popover_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("27qp");
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popover__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("oRSk");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Uqqx");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_table_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("lRur");
/* harmony import */ var antd_lib_table_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_table_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("Puj+");
/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_table__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("2w/n");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("foLw");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_tag_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("BucJ");
/* harmony import */ var antd_lib_tag_style__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tag_style__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("P7Vo");
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tag__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var antd_lib_tooltip_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("AF2q");
/* harmony import */ var antd_lib_tooltip_style__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tooltip_style__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("z6+L");
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("DnGC");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("eGmO");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("EJbO");
/* harmony import */ var antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("JCEF");
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var antd_lib_radio_style__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("JHZV");
/* harmony import */ var antd_lib_radio_style__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(antd_lib_radio_style__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("XQdj");
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(antd_lib_radio__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var antd_lib_cascader_style__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("qYgU");
/* harmony import */ var antd_lib_cascader_style__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(antd_lib_cascader_style__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var antd_lib_cascader__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("CUto");
/* harmony import */ var antd_lib_cascader__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(antd_lib_cascader__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("doui");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("vYYK");
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("bmdr");
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("xKsY");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("XZ83");
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("3PsY");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("zrwo");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("ln6h");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("O40h");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__("Wa2I");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__("AT/M");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__("Tit0");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__("X1wy");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var pinyin__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__("Qp17");
/* harmony import */ var pinyin__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(pinyin__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var address_parse__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__("Ndzv");
/* harmony import */ var address_parse__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(address_parse__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var dva_no_router__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__("0B1J");
/* harmony import */ var dva_no_router__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(dva_no_router__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var config_locale__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__("mVpe");
/* harmony import */ var config_locale__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(config_locale__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__("OLV9");
/* harmony import */ var public_utils__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__("HgRd");
/* harmony import */ var public_theme_pages_index_less__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__("5PEn");
/* harmony import */ var public_theme_pages_index_less__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(public_theme_pages_index_less__WEBPACK_IMPORTED_MODULE_48__);

















































var defaultHeight = 560;

var Home =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_38__[/* default */ "a"])(Home, _Component);

  function Home(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_33__[/* default */ "a"])(this, Home);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_35__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_36__[/* default */ "a"])(Home).call(this, props));
    _this.state = {
      list: [],
      expressList: [],
      partList: [],
      selectParts: [],
      cancelAutoPart: localStorage.getItem('CANCELAUTOPART') ? localStorage.getItem('CANCELAUTOPART') == 1 : false,
      selectedRowKeys: [],
      lockTexture: '',
      selectColor: null,
      selectAttrId: null,
      textures: [],
      importExcelData: null,
      selectedRow: null,
      preview: true,
      submit: false,
      drawer: false,
      drawerTitle: '',
      checkColor: false
    };
    _this.cateObj = {};
    _this.select = null;
    _this.image = null;
    _this.imageOpt = {
      x: 0,
      y: 0,
      color: 'tran',
      size: 100,
      rotate: 0
    };
    _this.token = null;
    _this.auto = false;
    _this.cateList = [];
    _this.submitOrderObj = {};
    _this.defaultBrankSortMap = {};
    var handles = ['uploadImage', 'handleChangeSize', 'handleUploadOrderExcel', 'handleSubmit'];
    handles.forEach(function (item) {
      _this[item] = _this[item].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_37__[/* default */ "a"])(_this));
    }); // ref

    _this.moveRef = Object(react__WEBPACK_IMPORTED_MODULE_39__["createRef"])();
    _this.uploadRef = Object(react__WEBPACK_IMPORTED_MODULE_39__["createRef"])();
    _this.dragBox1 = Object(react__WEBPACK_IMPORTED_MODULE_39__["createRef"])();
    _this.dragBox2 = Object(react__WEBPACK_IMPORTED_MODULE_39__["createRef"])();
    _this.sizeInputRef = Object(react__WEBPACK_IMPORTED_MODULE_39__["createRef"])();
    _this.rotateInputRef = Object(react__WEBPACK_IMPORTED_MODULE_39__["createRef"])();
    _this.dialogDetailRef = Object(react__WEBPACK_IMPORTED_MODULE_39__["createRef"])();
    _this.sizeImageRef = Object(react__WEBPACK_IMPORTED_MODULE_39__["createRef"])();
    _this.cameraImageRef = Object(react__WEBPACK_IMPORTED_MODULE_39__["createRef"])();
    _this.cascaderRef = Object(react__WEBPACK_IMPORTED_MODULE_39__["createRef"])();
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_34__[/* default */ "a"])(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.getList();
      this.listener();
      this.getExpress();
      this.getPart();
      this.getTextureList();
      public_utils__WEBPACK_IMPORTED_MODULE_47__[/* MServer */ "a"].get('/upload/getToken').then(function (res) {
        if (res.errcode == 0) {
          _this2.token = res.data.token;
        }
      });
    }
  }, {
    key: "getImagePreview",
    value: function getImagePreview() {
      var domUpload = this.uploadRef.current;
      var imageOpt = this.imageOpt;
      domUpload.style.left = "".concat(imageOpt.x, "px");
      domUpload.style.top = "".concat(imageOpt.y, "px");
      domUpload.style.transform = "rotate(".concat(imageOpt.rotate, "deg)");
    }
  }, {
    key: "getResultImage",
    value: function getResultImage() {
      var isCamera = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var _this$imageOpt = this.imageOpt,
          x = _this$imageOpt.x,
          y = _this$imageOpt.y,
          color = _this$imageOpt.color,
          rotate = _this$imageOpt.rotate;
      var size = this.imageOpt.size;
      var imageSize = this.sizeImageRef.current;
      var imageCamera = this.cameraImageRef.current;
      var domMove = this.moveRef.current;
      var left = x - (domMove.offsetWidth - imageSize.width) / 2;
      var domUpload = this.uploadRef.current;
      var power = imageSize.naturalHeight / defaultHeight;
      size = size * power / 100;
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      canvas.setAttribute('width', imageSize.naturalWidth);
      canvas.setAttribute('height', imageSize.naturalHeight);

      if (color != 'tran') {
        context.rect(0, 0, imageSize.naturalWidth, imageSize.naturalHeight);
        context.fillStyle = color;
        context.fill();
      }

      var _x = left * power;

      var _y = y * power;

      if (rotate) {
        var transX = _x + domUpload.naturalWidth * size / 2;
        var transY = _y + domUpload.naturalHeight * size / 2;
        context.translate(transX, transY);
        context.rotate(rotate * Math.PI / 180);
        context.translate(-transX, -transY);
      }

      if (domUpload) {
        context.drawImage(domUpload, _x, _y, domUpload.naturalWidth * size, domUpload.naturalHeight * size);
      }

      var imageData = context.getImageData(0, 0, imageSize.naturalWidth, imageSize.naturalHeight);
      var imageCanvas = document.createElement('canvas');
      var ctx = imageCanvas.getContext('2d');
      imageCanvas.setAttribute('width', imageSize.naturalWidth);
      imageCanvas.setAttribute('height', imageSize.naturalHeight);
      ctx.drawImage(imageSize, 0, 0, imageSize.naturalWidth, imageSize.naturalHeight);
      var sizeData = ctx.getImageData(0, 0, imageSize.naturalWidth, imageSize.naturalHeight);

      for (var i = 0; i < sizeData.data.length; i += 4) {
        if (sizeData.data[i + 3] !== 0) {
          imageData.data[i + 3] = 0;
        }
      }

      if (isCamera) {
        var camreaCanvas = document.createElement('canvas');
        var c = camreaCanvas.getContext('2d');
        camreaCanvas.setAttribute('width', imageCamera.naturalWidth);
        camreaCanvas.setAttribute('height', imageCamera.naturalHeight);
        c.drawImage(imageCamera, 0, 0, imageCamera.naturalWidth, imageCamera.naturalHeight);
        var cameraData = c.getImageData(0, 0, imageCamera.naturalWidth, imageCamera.naturalHeight);

        for (var _i = 0; _i < cameraData.data.length; _i += 4) {
          if (cameraData.data[_i + 3] !== 0) {
            imageData.data[_i + 3] = 0;
          }
        }
      }

      context.putImageData(imageData, 0, 0);
      return canvas.toDataURL('image/png');
    }
  }, {
    key: "getExpress",
    value: function getExpress() {
      var _this3 = this;

      public_utils__WEBPACK_IMPORTED_MODULE_47__[/* MServer */ "a"].get('/logis/list', {
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
    key: "getPart",
    value: function getPart() {
      var _this4 = this;

      public_utils__WEBPACK_IMPORTED_MODULE_47__[/* MServer */ "a"].get('/part/userlist', {
        is_all: 1
      }).then(function (res) {
        if (res.errcode == 0) {
          _this4.setState({
            partList: res.data
          });
        }
      });
    }
  }, {
    key: "getTextureList",
    value: function getTextureList() {
      var _this5 = this;

      public_utils__WEBPACK_IMPORTED_MODULE_47__[/* MServer */ "a"].get('/cate/texture', {
        is_all: 1,
        sort: 'asc'
      }).then(function (res) {
        if (res.errcode == 0) {
          _this5.setState({
            textures: res.data
          });
        }
      });
    }
  }, {
    key: "listener",
    value: function listener() {
      var _this6 = this;

      var domMove = this.moveRef.current;
      var startPageX = null;
      var startPageY = null;
      domMove.addEventListener('dragenter', function (e) {
        e.stopPropagation();
        e.preventDefault();
      });
      domMove.addEventListener('dragover', function (e) {
        e.stopPropagation();
        e.preventDefault();
      });
      domMove.addEventListener('dragleave', function (e) {
        e.stopPropagation();
        e.preventDefault();
      });
      domMove.addEventListener('drop', function (e) {
        e.stopPropagation();
        e.preventDefault();

        _this6.uploadImage(e.dataTransfer.files[0]);
      });

      this.documentLister1 = function (e) {
        if (!_this6.auto && e.target.tagName != 'INPUT' && [87, 83, 82, 65, 68, 69].includes(e.keyCode)) {
          if (e.keyCode == 87) {
            _this6.imageOpt.y = _this6.imageOpt.y - 1;

            _this6.getImagePreview();
          }

          if (e.keyCode == 83) {
            _this6.imageOpt.y = _this6.imageOpt.y + 1;

            _this6.getImagePreview();
          }

          if (e.keyCode == 65) {
            _this6.imageOpt.x = _this6.imageOpt.x - 1;

            _this6.getImagePreview();
          }

          if (e.keyCode == 68) {
            _this6.imageOpt.x = _this6.imageOpt.x + 1;

            _this6.getImagePreview();
          }

          if (e.keyCode == 69) {
            _this6.handleChangeSize(_this6.imageOpt.size + 0.2);
          }

          if (e.keyCode == 82) {
            _this6.handleChangeSize(_this6.imageOpt.size - 0.2);
          }
        }
      };

      document.addEventListener('keydown', this.documentLister1);

      var moveListener = function moveListener(e) {
        var domUpload = _this6.uploadRef.current;
        if (!domUpload || _this6.auto) return;
        _this6.imageOpt.x = e.pageX - startPageX;
        _this6.imageOpt.y = e.pageY - startPageY;

        _this6.getImagePreview();
      };

      this.hasKeyListener = true;
      domMove.addEventListener('mousedown', function (e) {
        startPageX = e.pageX - _this6.imageOpt.x;
        startPageY = e.pageY - _this6.imageOpt.y;
        document.addEventListener('mousemove', moveListener);
      });

      this.documentLister2 = function () {
        document.removeEventListener('mousemove', moveListener);
      };

      document.addEventListener('mouseup', this.documentLister2);

      if (this.dragBox1.current) {
        var box = this.dragBox1.current;
        var sx = null;
        var size = null;

        var listener = function listener(e) {
          var current = e.clientX - sx;
          box.style.left = "".concat(current, "px");
          var diff = (current - 558) / 10;
          var value = size + diff;

          if (value >= 1 && _this6.image && !_this6.auto) {
            _this6.handleChangeSize(value);
          }
        };

        box.addEventListener('mousedown', function (e) {
          e.stopPropagation();
          e.preventDefault();
          sx = e.clientX - box.offsetLeft;
          size = _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_32___default()(_this6.imageOpt.size);
          document.addEventListener('mousemove', listener);
        });

        this.documentLister3 = function (e) {
          // e.stopPropagation();
          // e.preventDefault();
          box.style.left = '558px';
          document.removeEventListener('mousemove', listener);
        };

        document.addEventListener('mouseup', this.documentLister3);
      }

      if (this.dragBox2.current) {
        var _box = this.dragBox2.current;
        var _sx = null;
        var rotate = this.imageOpt.rotate;

        var _listener = function _listener(e) {
          if (!_this6.image) return;
          var current = e.clientX - _sx;
          _box.style.left = "".concat(current, "px");
          var diff = current - 558;
          var value = Math.abs(rotate + diff);
          if (value > 360) value = 0;

          if (_this6.image && !_this6.auto) {
            _this6.imageOpt.rotate = value;

            _this6.getImagePreview();

            _this6.rotateInputRef.current && _this6.rotateInputRef.current.setState({
              value: value
            });
          }
        };

        _box.addEventListener('mousedown', function (e) {
          e.stopPropagation();
          e.preventDefault();
          _sx = e.clientX - _box.offsetLeft;
          document.addEventListener('mousemove', _listener);
        });

        this.documentLister4 = function (e) {
          // e.stopPropagation();
          // e.preventDefault();
          _box.style.left = '558px';
          document.removeEventListener('mousemove', _listener);
        };

        document.addEventListener('mouseup', this.documentLister4);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (!this.documentLister1) document.removeEventListener('keydown', this.documentLister1);
      if (!this.documentLister2) document.removeEventListener('mouseup', this.documentLister2);
      if (!this.documentLister3) document.removeEventListener('mouseup', this.documentLister3);
      if (!this.documentLister4) document.removeEventListener('mouseup', this.documentLister4);
    }
  }, {
    key: "getList",
    value: function () {
      var _getList = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_31__[/* default */ "a"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_30___default.a.mark(function _callee() {
        var _this7 = this;

        var count, total, page, list, pagesize, brandList;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_30___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                count = 0;
                page = 1;
                list = [];
                pagesize = 50;

              case 4:
                if (!(count !== total)) {
                  _context.next = 9;
                  break;
                }

                _context.next = 7;
                return public_utils__WEBPACK_IMPORTED_MODULE_47__[/* MServer */ "a"].get('/cate/list', {
                  page: page,
                  pagesize: pagesize
                }).then(function (res) {
                  page++;
                  count += res.data.length;
                  total = res.total;
                  list = list.concat(res.data);
                }).catch(function () {
                  total = count;
                });

              case 7:
                _context.next = 4;
                break;

              case 9:
                this.cateList = list;
                _context.next = 12;
                return public_utils__WEBPACK_IMPORTED_MODULE_47__[/* MServer */ "a"].get('/cate/brand', {
                  is_all: 1,
                  order: 'sort'
                }).then(function (res) {
                  return res.data;
                });

              case 12:
                brandList = _context.sent;
                brandList.forEach(function (item) {
                  _this7.defaultBrankSortMap[item.id] = item.sort;
                });
                this.convertList(); // MServer.get('/cate/list', {
                //     is_all: 1
                // }).then(res => {
                //     if (res.errcode == 0) {
                //         this.cateList = res.data;
                //         return MServer.get('/cate/brand', {
                //             is_all: 1,
                //             order: 'sort',
                //         }).then(res => {
                //             if (res.errcode == 0) {
                //                 res.data.forEach(item => {
                //                     this.defaultBrankSortMap[item.id] = item.sort;
                //                 });
                //             }
                //             return true;
                //         });
                //     }
                //     return false;
                // }).then(res => {
                //     if (res) {
                //         this.convertList();
                //     }
                // });

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getList() {
        return _getList.apply(this, arguments);
      }

      return getList;
    }()
  }, {
    key: "convertList",
    value: function convertList() {
      var _this8 = this;

      var lockTexture = this.state.lockTexture;
      var cateIds = {};
      var typeIds = {};
      var list = [];
      var data = [].concat(this.cateList);

      if (lockTexture) {
        data = data.filter(function (item) {
          return item.texture_id == lockTexture;
        });
        data.forEach(function (item) {
          var lastOjb = item.stock < 1 ? {
            disabled: true,
            label: "".concat(item.brand_type_name, "(\u7F3A\u8D27)")
          } : {
            label: item.brand_type_name
          };

          if (typeof cateIds[item.brand_id] == 'undefined') {
            cateIds[item.brand_id] = list.length;
            list.push({
              value: item.brand_id,
              label: item.brand_name,
              sort: _this8.defaultBrankSortMap[item.brand_id] || 0,
              children: [Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_29__[/* default */ "a"])({
                value: item.id
              }, lastOjb)]
            });
          } else {
            list[cateIds[item.brand_id]].children.push(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_29__[/* default */ "a"])({
              value: item.id
            }, lastOjb));
          }
        });
      } else {
        data.forEach(function (item) {
          var lastOjb = item.stock < 1 ? {
            disabled: true,
            label: "".concat(item.texture_name, "(\u7F3A\u8D27)")
          } : {
            label: item.texture_name
          };

          if (typeof cateIds[item.brand_id] == 'undefined') {
            cateIds[item.brand_id] = list.length;
            list.push({
              value: item.brand_id,
              label: item.brand_name,
              sort: _this8.defaultBrankSortMap[item.brand_id] || 0,
              children: [{
                value: item.brand_type_id,
                label: item.brand_type_name,
                children: [Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_29__[/* default */ "a"])({
                  value: item.id
                }, lastOjb)]
              }]
            });
            typeIds["".concat(item.brand_id, "_").concat(item.brand_type_id)] = 0;
          } else {
            if (typeof typeIds["".concat(item.brand_id, "_").concat(item.brand_type_id)] == 'undefined') {
              typeIds["".concat(item.brand_id, "_").concat(item.brand_type_id)] = list[cateIds[item.brand_id]].children.length;
              list[cateIds[item.brand_id]].children.push({
                value: item.brand_type_id,
                label: item.brand_type_name,
                children: [Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_29__[/* default */ "a"])({
                  value: item.id
                }, lastOjb)]
              });
            } else {
              list[cateIds[item.brand_id]].children[typeIds["".concat(item.brand_id, "_").concat(item.brand_type_id)]].children.push(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_29__[/* default */ "a"])({
                value: item.id
              }, lastOjb));
            }
          }

          _this8.cateObj[item.id] = item;
        });
      }

      var sortByName = function sortByName(list) {
        return list.sort(function (a, b) {
          if (a.sort != b.sort) {
            return b.sort - a.sort;
          }

          return pinyin__WEBPACK_IMPORTED_MODULE_42___default()(a.label.trim(), {
            style: pinyin__WEBPACK_IMPORTED_MODULE_42___default.a.STYLE_FIRST_LETTER
          })[0][0].charCodeAt() - pinyin__WEBPACK_IMPORTED_MODULE_42___default()(b.label.trim(), {
            style: pinyin__WEBPACK_IMPORTED_MODULE_42___default.a.STYLE_FIRST_LETTER
          })[0][0].charCodeAt();
        });
      };

      this.setState({
        list: sortByName(list.map(function (item) {
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_29__[/* default */ "a"])({}, item, {
            children: item.children ? item.children.sort(function (a, b) {
              var text1 = a.label.trim();
              var text2 = b.label.trim();
              var noResult = true;
              var result = 0;
              var i = 0;

              while (noResult) {
                if (typeof text1[i] == 'undefined') return -1;
                if (typeof text2[i] == 'undefined') return 1;

                if (text1[i] == text2[i]) {
                  i++;
                } else {
                  result = text1[i].charCodeAt() - text2[i].charCodeAt();
                  noResult = false;
                }
              }

              return result;
            }).map(function (it) {
              return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_29__[/* default */ "a"])({}, it, {
                children: it.children ? sortByName(it.children) : undefined
              });
            }) : undefined
          });
        }))
      });
    }
  }, {
    key: "uploadImage",
    value: function uploadImage(file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      var that = this;

      reader.onload = function () {
        var img = new Image();
        img.src = that.image = this.result;

        img.onload = function () {
          that.autoImage(img);
        };
      };
    }
  }, {
    key: "autoImage",
    value: function autoImage(img) {
      var domMove = this.moveRef.current;
      var domUpload = this.uploadRef.current;
      var imageSize = this.sizeImageRef.current;

      if (!domUpload) {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_28___default.a.error('请先上传图片');

        return;
      }

      var getSpaceValue = function getSpaceValue() {
        if (!imageSize) return {
          x: 0,
          y: 0
        };
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        canvas.setAttribute('height', imageSize.width);
        canvas.setAttribute('width', imageSize.height);
        context.drawImage(imageSize, 0, 0, imageSize.width, imageSize.height);
        var imageData = context.getImageData(0, 0, imageSize.width, imageSize.height);
        var lineWidth = 0;
        var countHeight = 0;

        for (var i = 0; i < imageData.data.length; i += 4) {
          if (imageData.data[i + 3] != 0) {
            lineWidth++;

            if (lineWidth == imageSize.width) {
              lineWidth = 0;
              countHeight++;
            }
          } else {
            break;
          }
        }

        var countWidth = 0;

        for (var _i2 = imageSize.width * 80 * 4; _i2 < imageData.data.length; _i2 += 4) {
          if (imageData.data[_i2 + 3] != 0) {
            countWidth++;
          } else {
            break;
          }
        }

        return {
          x: countWidth - 2,
          y: countHeight - 2
        };
      };

      var spaceValue = getSpaceValue();
      var initHeight = defaultHeight - spaceValue.y * 2;
      var ratio = initHeight / img.naturalHeight;
      var initWidth = img.naturalWidth * ratio;

      if (imageSize) {
        if (initWidth < imageSize.offsetWidth - spaceValue.x * 2) {
          initWidth = imageSize.offsetWidth - spaceValue.x * 2;
          ratio = initWidth / img.naturalWidth;
          initHeight = img.naturalHeight * ratio;
        }
      }

      domUpload.style.height = "".concat(initHeight, "px");
      this.imageOpt.size = (ratio * 100).toFixed(2);
      this.imageOpt.x = (domMove.offsetWidth - initWidth) / 2;
      this.imageOpt.y = ((imageSize ? imageSize.offsetHeight : initHeight) - initHeight) / 2;
      this.sizeInputRef.current && this.sizeInputRef.current.setState({
        value: this.imageOpt.size
      });
      this.getImagePreview();
      this.forceUpdate();
    }
  }, {
    key: "getDefaultExpress",
    value: function getDefaultExpress() {
      var expressList = this.state.expressList;
      var defaultList = expressList.filter(function (item) {
        return item.default;
      });

      if (defaultList.length) {
        return defaultList[0].id;
      }

      return undefined;
    }
  }, {
    key: "handleChangeSize",
    value: function handleChangeSize(value) {
      var domUpload = this.uploadRef.current;
      if (!domUpload || !this) return;
      value = _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_32___default()(value);
      domUpload.style.height = "".concat(domUpload.naturalHeight * value / 100, "px");
      this.imageOpt.x = this.imageOpt.x + domUpload.naturalWidth * (this.imageOpt.size - value) / 200;
      this.imageOpt.y = this.imageOpt.y + domUpload.naturalHeight * (this.imageOpt.size - value) / 200;
      this.imageOpt.size = value;
      this.getImagePreview();
      this.sizeInputRef.current && this.sizeInputRef.current.setState({
        value: this.imageOpt.size
      });
    }
  }, {
    key: "handleUploadOrderExcel",
    value: function handleUploadOrderExcel(file) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'taobao';
      var title = arguments.length > 2 ? arguments[2] : undefined;
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
          var mobile = item['联系手机'] || item['手机'] || item['联系方式'];
          if (mobile) mobile = mobile.toString().match(/[1-9]\d*/)[0];
          var adsplit = type === 'taobao' ? (item['收货地址'] || item['收货地址 '] || '').trim().split(/\s+/) : [item['省'], item['市'], item['区'], item['街道'] || item['详细地址'] || item['收件地址']];
          result.push({
            order_sn: (item['订单编号'] || item['订单号'] || '').toString().trim(),
            consignee: (item['收货人姓名'] || item['收货人'] || item['收件人'] || '').toString().trim(),
            mobile: mobile,
            province: adsplit[0] && adsplit[0].trim(),
            city: adsplit[1] && adsplit[1].trim(),
            district: adsplit[2] && adsplit[2].trim(),
            address: adsplit.slice(3).join(' '),
            seller_remark: item['订单备注'] || item['商家备注'],
            buyer_remark: item['买家留言'],
            remark: item['自定义备注'] || item['备注'],
            index: index,
            source: type
          });
        });
        that.setState({
          drawer: true,
          drawerTitle: title,
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
    key: "handleShopOder",
    value: function handleShopOder(data, cb) {
      var _this9 = this;

      var selectParts = this.state.selectParts;
      var validateFields = this.props.form.validateFields;
      validateFields(function (err, values) {
        values = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_29__[/* default */ "a"])({}, values, {
          shop_id: data.shop_id,
          type: 10,
          order_sn: data.order_sn,
          quantity: data.goods_count,
          consignee: data.trade.consignee,
          mobile: data.trade.mobile,
          province: data.trade.province,
          city: data.trade.city,
          district: data.trade.district,
          address: data.trade.address
        });

        if (!_this9.select && !selectParts.length) {
          antd_lib_message__WEBPACK_IMPORTED_MODULE_28___default.a.error('请先选择机型或者选择一个配件');

          cb && cb(false);
          return;
        }

        if (_this9.select && !_this9.image && _this9.imageOpt.color == 'tran') {
          // message.error('请至少上传一张图片或者设置一个颜色');
          antd_lib_modal__WEBPACK_IMPORTED_MODULE_26___default.a.confirm({
            title: '确定要下单一个裸壳吗？',
            okText: '确定',
            cancelText: '取消',
            onCancel: function onCancel() {
              cb && cb(false);
            },
            onOk: function onOk() {
              return _this9.onSubmit(values, {
                print_type: 10,
                shop_id: data.shop_id
              }, cb);
            }
          });

          return;
        }

        _this9.onSubmit(values, {
          shop_id: data.shop_id
        }, cb);
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      var _this10 = this;

      e.preventDefault();
      e.stopPropagation();
      var selectParts = this.state.selectParts;
      var validateFields = this.props.form.validateFields;
      validateFields(function (err, values) {
        if (!err) {
          if (values.type == 0 && !_this10.select) {
            antd_lib_message__WEBPACK_IMPORTED_MODULE_28___default.a.error('请先选择机型');

            return;
          }

          if (values.type != 0 && !_this10.select && !selectParts.length) {
            antd_lib_message__WEBPACK_IMPORTED_MODULE_28___default.a.error('请先选择机型或者选择一个配件');

            return;
          }

          if (_this10.select && !_this10.image && _this10.imageOpt.color == 'tran') {
            // message.error('请至少上传一张图片或者设置一个颜色');
            antd_lib_modal__WEBPACK_IMPORTED_MODULE_26___default.a.confirm({
              title: '确定要下单一个裸壳吗？',
              onOk: function onOk() {
                return _this10.onSubmit(values, {
                  print_type: 10
                });
              }
            });

            return;
          }

          _this10.onSubmit(values);
        }
      });
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(values) {
      var _this11 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var cb = arguments.length > 2 ? arguments[2] : undefined;
      var isPrintEmpty = options.print_type == 10 || !this.select;

      if (!this.token && !isPrintEmpty) {
        cb && cb(false);

        antd_lib_message__WEBPACK_IMPORTED_MODULE_28___default.a.error('网络出错了，刷新页面试试');

        return;
      }

      this.setState({
        submit: true
      });

      var params = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_29__[/* default */ "a"])({
        type: values.type == 20 || !this.select ? 10 : values.type,
        order_sn: values.order_sn,
        quantity: values.quantity,
        cate_id: this.select && this.select.id
      }, options);

      if (isPrintEmpty) {
        this.postSubmit(params, values, cb);
      } else {
        var formdata = new FormData();
        formdata.append('file', Object(public_utils__WEBPACK_IMPORTED_MODULE_47__[/* convertBase64UrlToBlob */ "b"])(this.getResultImage(this.select.is_camera ? true : false)), "".concat(new Date().getTime(), ".png"));
        formdata.append('token', this.token);
        public_utils__WEBPACK_IMPORTED_MODULE_47__[/* MServer */ "a"].post('//upload-z0.qiniup.com', formdata, {
          withCredentials: false,
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          silent: true
        }).then(function (res) {
          if (res.key) {
            return "".concat(config_locale__WEBPACK_IMPORTED_MODULE_45___default.a["production"].url.cdnUser).concat(res.key);
          } else {
            cb && cb(false);
            throw new Error('图片上传失败');
          }
        }).then(function (res) {
          params = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_29__[/* default */ "a"])({}, params, {
            image1: res
          }); // if (values.texture_attr_id) params.texture_attr_id = values.texture_attr_id;

          _this11.postSubmit(params, values, cb);
        }).catch(function (err) {
          antd_lib_message__WEBPACK_IMPORTED_MODULE_28___default.a.error(err.message);

          cb && cb(false);

          _this11.setState({
            submit: false
          });
        });
      }
    }
  }, {
    key: "postSubmit",
    value: function postSubmit(params, values, cb) {
      var _this12 = this;

      var setFieldsValue = this.props.form.setFieldsValue;
      var _this$state = this.state,
          selectedRow = _this$state.selectedRow,
          selectParts = _this$state.selectParts,
          cancelAutoPart = _this$state.cancelAutoPart,
          importExcelData = _this$state.importExcelData,
          selectAttrId = _this$state.selectAttrId;

      if (this.select && selectAttrId && this.select.texture_attr.length) {
        // params.texture_attr_id = this.select.texture_attr.find(item => item.texture_attr_color === selectColor).texture_attr_id;
        params.texture_attr_id = selectAttrId;
      }

      if (values.express_id) params.express_id = values.express_id;

      if (values.type != 0 && selectParts.length) {
        params.parts = selectParts.map(function (item) {
          return {
            id: item,
            count: values["part_".concat(item)]
          };
        });
      }

      if (values.type == 20 || values.shop_id) {
        params = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_29__[/* default */ "a"])({}, params, {
          consignee: values.consignee,
          mobile: values.mobile,
          province: values.province,
          city: values.city,
          district: values.district,
          address: values.address
        });
      }

      if (values.type == 10) {
        if (!values.shop_id) {
          if (!selectedRow) {
            this.setState({
              submit: false
            });
            cb && cb(false);

            antd_lib_message__WEBPACK_IMPORTED_MODULE_28___default.a.error('未获取到收货地址');

            return;
          }

          params = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_29__[/* default */ "a"])({}, params, {
            consignee: selectedRow.consignee,
            mobile: selectedRow.mobile,
            province: selectedRow.province,
            city: selectedRow.city,
            district: selectedRow.district,
            address: selectedRow.address
          }); // if (!params.province) {
          //     this.setState({
          //         submit: false
          //     });
          //     cb && cb(false);
          //     message.error('未获取到收货地址');
          //     return;
          // }
        }
      }

      public_utils__WEBPACK_IMPORTED_MODULE_47__[/* MServer */ "a"].post('/order/save', params).then(function (res) {
        if (res.errcode == 0) {
          cb && cb(true);

          _this12.setState({
            submit: false,
            selectParts: cancelAutoPart ? [] : selectParts
          });

          if (cancelAutoPart) {
            setFieldsValue(selectParts.reduce(function (cur, next) {
              return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_29__[/* default */ "a"])({}, cur, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_24__[/* default */ "a"])({}, "part_".concat(next), 1));
            }, {}));
          }

          _this12.imageOpt.color = 'tran';
          setFieldsValue({
            quantity: 1,
            express_id: _this12.getDefaultExpress()
          });

          if (_this12.select) {
            var catename = "".concat(_this12.select.brand_name, " ").concat(_this12.select.brand_type_name, " ").concat(_this12.select.texture_name);

            if (!_this12.submitOrderObj[values.order_sn]) {
              _this12.submitOrderObj[values.order_sn] = {
                count: 1,
                obj: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_24__[/* default */ "a"])({}, _this12.select.id, {
                  name: catename,
                  count: 1
                })
              };
            } else {
              _this12.submitOrderObj[values.order_sn].count++;

              if (!_this12.submitOrderObj[values.order_sn].obj[_this12.select.id]) {
                _this12.submitOrderObj[values.order_sn].obj[_this12.select.id] = {
                  name: catename,
                  count: 1
                };
              } else {
                _this12.submitOrderObj[values.order_sn].obj[_this12.select.id].count++;
              }
            }
          }

          antd_lib_modal__WEBPACK_IMPORTED_MODULE_26___default.a.confirm({
            title: '订单已提交成功',
            okText: '继续下单',
            cancelText: '查看订单',
            onOk: function onOk() {
              values.type == 10 && importExcelData && _this12.setState({
                drawer: true
              });
            },
            onCancel: function onCancel() {
              _this12.setState({
                order_sn: values.order_sn
              }, function () {
                if (_this12.dialogDetailRef.current) _this12.dialogDetailRef.current.open();
              });
            }
          });
        } else {
          cb && cb(false);

          _this12.setState({
            submit: false
          });
        }
      }).catch(function (err) {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_28___default.a.error(err.message);

        _this12.setState({
          submit: false
        });
      });
    }
  }, {
    key: "handleAddressParse",
    value: function handleAddressParse(e) {
      var text = e.target.value;

      var _AddressParse$parse = address_parse__WEBPACK_IMPORTED_MODULE_43___default.a.parse(text),
          _AddressParse$parse2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_23__[/* default */ "a"])(_AddressParse$parse, 1),
          result = _AddressParse$parse2[0];

      var setFieldsValue = this.props.form.setFieldsValue;
      setFieldsValue({
        province: result.province,
        city: result.city,
        district: result.area,
        address: result.details,
        consignee: result.name,
        mobile: result.mobile
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this13 = this,
          _cx;

      var shop_id = this.props.router.query.shop_id;
      var select = this.select,
          image = this.image,
          imageOpt = this.imageOpt,
          auto = this.auto;
      var _this$state2 = this.state,
          list = _this$state2.list,
          preview = _this$state2.preview,
          submit = _this$state2.submit,
          expressList = _this$state2.expressList,
          partList = _this$state2.partList,
          selectParts = _this$state2.selectParts,
          cancelAutoPart = _this$state2.cancelAutoPart,
          selectColor = _this$state2.selectColor,
          textures = _this$state2.textures,
          importExcelData = _this$state2.importExcelData,
          selectedRow = _this$state2.selectedRow,
          drawer = _this$state2.drawer,
          drawerTitle = _this$state2.drawerTitle,
          selectedRowKeys = _this$state2.selectedRowKeys,
          lockTexture = _this$state2.lockTexture,
          selectAttrId = _this$state2.selectAttrId,
          checkColor = _this$state2.checkColor;
      var _this$props = this.props,
          _this$props$form = _this$props.form,
          getFieldDecorator = _this$props$form.getFieldDecorator,
          getFieldValue = _this$props$form.getFieldValue,
          user = _this$props.user;
      var defaultColors = [{
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
        value: -1
      }];
      var rowSelection = {
        type: 'radio',
        selectedRowKeys: selectedRowKeys,
        onChange: function onChange(selectedRowKeys, selectedRows) {
          _this13.handleSelectRow(selectedRows[0]);
        }
      };
      var colorSelectValue = defaultColors.map(function (item) {
        return item.value;
      }).includes(imageOpt.color) ? imageOpt.color : -1;
      return react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("div", {
        className: "page-layout-center"
      }, react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(component__WEBPACK_IMPORTED_MODULE_46__[/* DialogOrderDetail */ "f"], {
        ref: this.dialogDetailRef,
        order_sn: getFieldValue('order_sn'),
        user: user
      }), react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("div", {
        className: public_theme_pages_index_less__WEBPACK_IMPORTED_MODULE_48___default.a.layoutHome
      }, react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("div", {
        className: public_theme_pages_index_less__WEBPACK_IMPORTED_MODULE_48___default.a.layoutHomeBd
      }, react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("div", {
        className: public_theme_pages_index_less__WEBPACK_IMPORTED_MODULE_48___default.a.layoutHomeLeft
      }, react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_cascader__WEBPACK_IMPORTED_MODULE_22___default.a, {
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
        ref: this.cascaderRef,
        allowClear: false,
        options: list,
        style: {
          width: 240
        },
        placeholder: "\u9009\u62E9\u624B\u673A\u578B\u53F7\uFF0C\u652F\u6301\u641C\u7D22",
        onChange: function onChange(value) {
          _this13.select = _this13.cateObj[value[value.length - 1]];
          public_utils__WEBPACK_IMPORTED_MODULE_47__[/* MServer */ "a"].get("/cate/catetextureattr/".concat(_this13.select.id)).then(function (res) {
            _this13.select.texture_attr = [];

            if (res.errcode == 0 && res.data && res.data.length) {
              _this13.select.texture_attr = res.data;

              _this13.setState({
                selectColor: res.data[0].texture_attr_color || null,
                selectAttrId: res.data[0].texture_attr_id
              });
            } else {
              _this13.setState({
                selectAttrId: null,
                selectColor: null
              });
            }
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("div", {
        className: "card-item"
      }, react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("div", {
        className: "card-item-title"
      }, "\u9501\u5B9A\u6750\u8D28"), react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_radio__WEBPACK_IMPORTED_MODULE_20___default.a.Group, {
        value: lockTexture,
        options: [{
          label: '全部材质',
          value: ''
        }].concat(textures.map(function (item) {
          return {
            label: item.name,
            value: item.id
          };
        })),
        onChange: function onChange(e) {
          _this13.select = null;
          _this13.cascaderRef.current && _this13.cascaderRef.current.setState({
            value: []
          });

          _this13.setState({
            lockTexture: e.target.value,
            selectColor: null,
            selectAttrId: null
          }, _this13.convertList);
        }
      })), select && select.texture_attr.length ? react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("div", {
        className: "card-item"
      }, react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("div", {
        className: "card-item-title"
      }, "\u9009\u62E9\u5C5E\u6027(\u989C\u8272)"), react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_radio__WEBPACK_IMPORTED_MODULE_20___default.a.Group, {
        value: selectAttrId,
        options: select.texture_attr.map(function (item) {
          return {
            label: item.texture_attr_name,
            value: item.texture_attr_id
          };
        }),
        onChange: function onChange(e) {
          // this.select = null;
          // this.cascaderRef.current && this.cascaderRef.current.setState({ value: [] });
          // this.setState({
          //     lockTexture: e.target.value
          // }, this.convertList);
          var value = e.target.value;
          var color = select.texture_attr.find(function (item) {
            return item.texture_attr_id == value;
          }).texture_attr_color;

          _this13.setState({
            selectColor: color || null,
            selectAttrId: value
          });
        }
      })) : null, imageOpt.color == 'tran' ? react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("div", {
        className: "card-item"
      }, react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("div", {
        className: "card-item-title"
      }, "\u4E0A\u56FE\u5C0F\u52A9\u624B"), react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_18___default.a, {
        checked: checkColor,
        onChange: function onChange(e) {
          return _this13.setState({
            checkColor: e.target.checked
          });
        }
      }, "\u6821\u51C6\u900F\u660E\u5E95")) : null), react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("div", {
        className: public_theme_pages_index_less__WEBPACK_IMPORTED_MODULE_48___default.a.layoutHomeHd
      }, react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(component__WEBPACK_IMPORTED_MODULE_46__[/* UploadBtn */ "o"].Local, {
        buttonProps: {
          type: 'primary',
          icon: 'cloud-upload'
        },
        text: "\u4E0A\u4F20\u56FE\u7247",
        onUpload: this.uploadImage
      }), react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_16___default.a, {
        style: {
          marginLeft: '15px'
        },
        onClick: function onClick() {
          return _this13.setState({
            preview: !preview
          });
        }
      }, preview ? '编辑' : '预览'), react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_16___default.a, {
        style: {
          marginLeft: '15px'
        },
        onClick: function onClick() {
          return _this13.autoImage(_this13.uploadRef.current);
        }
      }, "\u521D\u59CB\u5316\u56FE\u7247"), react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_16___default.a, {
        style: {
          marginLeft: '15px'
        },
        onClick: function onClick() {
          _this13.image = null;

          _this13.forceUpdate();
        }
      }, "\u53BB\u9664\u56FE\u7247")), react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("div", {
        ref: this.moveRef,
        className: public_theme_pages_index_less__WEBPACK_IMPORTED_MODULE_48___default.a.phonePreview
      }, react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_14___default.a, {
        title: "\u4E0A\u4F20\u56FE\u7247\u540E\uFF0C\u62D6\u52A8\u8FDB\u884C\u653E\u5927\u7F29\u5C0F"
      }, react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("div", {
        className: public_theme_pages_index_less__WEBPACK_IMPORTED_MODULE_48___default.a.box1,
        ref: this.dragBox1
      })), react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_14___default.a, {
        title: "\u4E0A\u4F20\u56FE\u7247\u540E\uFF0C\u62D6\u52A8\u8FDB\u884C\u65CB\u8F6C"
      }, react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("div", {
        className: public_theme_pages_index_less__WEBPACK_IMPORTED_MODULE_48___default.a.box2,
        ref: this.dragBox2
      })), react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("img", {
        ref: this.uploadRef,
        className: public_theme_pages_index_less__WEBPACK_IMPORTED_MODULE_48___default.a.uploadImage,
        crossOrigin: "",
        src: image
      }), select ? [react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("div", {
        key: "main",
        className: public_theme_pages_index_less__WEBPACK_IMPORTED_MODULE_48___default.a.phoneBox
      }, react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_40___default()((_cx = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_24__[/* default */ "a"])(_cx, public_theme_pages_index_less__WEBPACK_IMPORTED_MODULE_48___default.a.phoneBoxBody, true), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_24__[/* default */ "a"])(_cx, "preview", preview || auto), _cx))
      }, react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("div", {
        className: "bg"
      }), react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("div", {
        className: public_theme_pages_index_less__WEBPACK_IMPORTED_MODULE_48___default.a.phoneBoxBodyImage
      }, react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("img", {
        ref: this.sizeImageRef,
        className: public_theme_pages_index_less__WEBPACK_IMPORTED_MODULE_48___default.a.phonePreviewMain,
        crossOrigin: "",
        src: "".concat(config_locale__WEBPACK_IMPORTED_MODULE_45___default.a["production"].url.cdn).concat(select.size_img)
      }), select.camera_img ? react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("img", {
        ref: this.cameraImageRef,
        className: public_theme_pages_index_less__WEBPACK_IMPORTED_MODULE_48___default.a.phonePreviewCamera,
        crossOrigin: "",
        src: "".concat(config_locale__WEBPACK_IMPORTED_MODULE_45___default.a["production"].url.cdn).concat(select.camera_img)
      }) : null), react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("div", {
        className: "bg"
      }))), react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("div", {
        key: "bg",
        className: public_theme_pages_index_less__WEBPACK_IMPORTED_MODULE_48___default.a.phoneBoxBg,
        style: imageOpt.color != 'tran' ? {
          backgroundColor: imageOpt.color == -1 ? '#000' : imageOpt.color,
          backgroundImage: 'none'
        } : selectColor ? {
          backgroundColor: selectColor,
          backgroundImage: 'none'
        } : checkColor ? {
          backgroundColor: '#000',
          backgroundImage: 'none'
        } : {}
      }, react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("div", null), react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("img", {
        style: {
          opacity: 0
        },
        className: public_theme_pages_index_less__WEBPACK_IMPORTED_MODULE_48___default.a.phonePreviewMain,
        crossOrigin: "",
        src: "".concat(config_locale__WEBPACK_IMPORTED_MODULE_45___default.a["production"].url.cdn).concat(select.size_img)
      }), react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("div", null))] : null), react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("div", {
        className: public_theme_pages_index_less__WEBPACK_IMPORTED_MODULE_48___default.a.homeFooter
      }, react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("div", {
        className: "input-group"
      }, react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("span", null, "\u7F29\u653E\uFF1A"), react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(component__WEBPACK_IMPORTED_MODULE_46__[/* InputNumber */ "j"], {
        ref: this.sizeInputRef,
        placeholder: "\u6BD4\u4F8B",
        precision: 2,
        onChange: this.handleChangeSize,
        disabled: auto
      }), react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("span", {
        style: {
          marginLeft: '10px'
        }
      }, "%")), react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("div", {
        className: "input-group"
      }, react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("span", null, "\u65CB\u8F6C\uFF1A"), react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(component__WEBPACK_IMPORTED_MODULE_46__[/* InputNumber */ "j"], {
        disabled: auto,
        ref: this.rotateInputRef,
        precision: 2,
        defaultValue: 0,
        onChange: function onChange(value) {
          _this13.imageOpt.rotate = value;

          _this13.getImagePreview();
        },
        placeholder: "\u89D2\u5EA6"
      })), react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("div", {
        className: "input-group",
        style: {
          marginRight: '20px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("span", null, "\u80CC\u666F\u8272\u8BBE\u7F6E\uFF1A"), react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(component__WEBPACK_IMPORTED_MODULE_46__[/* Select */ "l"], {
        style: {
          width: 120
        },
        value: colorSelectValue,
        onChange: function onChange(value) {
          _this13.imageOpt.color = value;

          _this13.forceUpdate();
        },
        options: defaultColors
      }), colorSelectValue == -1 ? react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("div", {
        style: {
          display: 'inline-block',
          position: 'relative',
          top: '5px',
          left: '10px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(component__WEBPACK_IMPORTED_MODULE_46__[/* ColorPicker */ "b"], {
        color: imageOpt.color == -1 ? '#000' : imageOpt.color,
        onChange: function onChange(c) {
          _this13.imageOpt.color = c.color;

          _this13.forceUpdate();
        }
      })) : null), react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("div", {
        className: public_theme_pages_index_less__WEBPACK_IMPORTED_MODULE_48___default.a.remark
      }, react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_tag__WEBPACK_IMPORTED_MODULE_12___default.a, null, "W"), "\u4E0A\u79FB"), "\uFF0C", react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_tag__WEBPACK_IMPORTED_MODULE_12___default.a, null, "S"), "\u4E0B\u79FB"), "\uFF0C", react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_tag__WEBPACK_IMPORTED_MODULE_12___default.a, null, "A"), "\u5DE6\u79FB"), "\uFF0C", react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_tag__WEBPACK_IMPORTED_MODULE_12___default.a, null, "D"), "\u53F3\u79FB"), "\uFF0C", react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_tag__WEBPACK_IMPORTED_MODULE_12___default.a, null, "E"), "\u653E\u5927"), "\uFF0C", react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_tag__WEBPACK_IMPORTED_MODULE_12___default.a, null, "R"), "\u7F29\u5C0F")))), react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("div", {
        className: public_theme_pages_index_less__WEBPACK_IMPORTED_MODULE_48___default.a.orderConfig,
        style: shop_id ? {
          padding: 0
        } : {}
      }, shop_id ? react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_10___default.a, null, react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(component__WEBPACK_IMPORTED_MODULE_46__[/* ShopOrder */ "m"], {
        onOrder: function onOrder(data, cb) {
          return _this13.handleShopOder(data, cb);
        }
      }), react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("div", {
        style: {
          padding: 20
        }
      }, react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_10___default.a.Item, {
        label: "\u9009\u62E9\u7269\u6D41"
      }, getFieldDecorator('express_id', {
        rules: [{
          required: true,
          message: '请先选择物流'
        }],
        initialValue: expressList.length ? this.getDefaultExpress() : undefined
      })(react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(component__WEBPACK_IMPORTED_MODULE_46__[/* Select */ "l"], {
        options: expressList,
        fieldName: {
          value: 'id',
          label: 'name'
        }
      }))), react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_39__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("div", {
        style: {
          marginBottom: 10
        }
      }, react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_18___default.a, {
        checked: cancelAutoPart,
        onChange: function onChange(e) {
          _this13.setState({
            cancelAutoPart: e.target.checked
          });

          localStorage.setItem('CANCELAUTOPART', e.target.checked ? 1 : 0);
        }
      }, "\u53D6\u6D88\u914D\u4EF6\u81EA\u52A8\u52FE\u9009")), react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_table__WEBPACK_IMPORTED_MODULE_8___default.a, {
        rowKey: "id",
        dataSource: partList,
        pagination: false,
        size: "small" // style={{ marginBottom: '15px' }}
        ,
        rowSelection: {
          selectedRowKeys: selectParts,
          onChange: function onChange(selectedRowKeys) {
            _this13.setState({
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
            return react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_10___default.a.Item, {
              className: "no-margin"
            }, getFieldDecorator("part_".concat(id), selectParts.includes(id) ? {
              rules: [{
                required: true,
                message: '请输入赠品数量'
              }],
              initialValue: 1
            } : {
              initialValue: 1
            })(react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(component__WEBPACK_IMPORTED_MODULE_46__[/* InputNumber */ "j"], {
              min: 1,
              max: 1000
            })));
          }
        }]
      })))) : react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_10___default.a, {
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_10___default.a.Item, {
        label: "\u8BA2\u5355\u7C7B\u578B"
      }, getFieldDecorator('type', {
        initialValue: 0
      })(react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_radio__WEBPACK_IMPORTED_MODULE_20___default.a.Group, {
        options: [{
          label: '普通订单',
          value: 0
        }, {
          label: '充值订单',
          value: 10
        }, {
          label: '手工订单',
          value: 20
        }]
      }))), getFieldValue('type') == 10 ? react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_10___default.a.Item, null, react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(component__WEBPACK_IMPORTED_MODULE_46__[/* UploadBtn */ "o"].Local, {
        accept: ".xls, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",
        text: "\u5BFC\u5165\u6DD8\u5B9D\u8BA2\u5355",
        onUpload: function onUpload(file) {
          return _this13.handleUploadOrderExcel(file, 'taobao', '导入淘宝订单');
        },
        style: {
          marginRight: 10
        }
      }), react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(component__WEBPACK_IMPORTED_MODULE_46__[/* UploadBtn */ "o"].Local, {
        accept: ".xls, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",
        text: "\u5BFC\u5165\u62FC\u591A\u591A\u8BA2\u5355",
        onUpload: function onUpload(file) {
          return _this13.handleUploadOrderExcel(file, 'pdd', '导入拼多多订单');
        }
      }), importExcelData ? react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_16___default.a, {
        type: "primary",
        onClick: function onClick() {
          return _this13.setState({
            drawer: true
          });
        }
      }, "\u6253\u5F00\u5BFC\u5165\u7684\u8BA2\u5355")) : null, selectedRow ? react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("div", {
        className: public_theme_pages_index_less__WEBPACK_IMPORTED_MODULE_48___default.a.remarkBox
      }, react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("p", {
        style: {
          marginBottom: '10px',
          lineHeight: 1
        }
      }, "\u8BA2\u5355\u5907\u6CE8\uFF1A", selectedRow.seller_remark), react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("p", {
        style: {
          marginBottom: '10px',
          lineHeight: 1
        }
      }, "\u4E70\u5BB6\u7559\u8A00\uFF1A", selectedRow.buyer_remark), react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("p", {
        style: {
          marginBottom: '0',
          lineHeight: 1
        }
      }, "\u81EA\u5B9A\u4E49\u5907\u6CE8\uFF1A", selectedRow.remark)) : null) : null, react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_10___default.a.Item, {
        label: "\u914D\u8D27\u6807\u7B7E",
        extra: getFieldValue('order_sn') ? react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("a", {
          className: "text-info",
          onClick: function onClick() {
            _this13.dialogDetailRef.current && _this13.dialogDetailRef.current.open();
          }
        }, "\u67E5\u770B\u8BA2\u5355") // <PopoverOrderDetail order_sn={getFieldValue('order_sn')} />
        : null
      }, getFieldDecorator('order_sn', {
        rules: [{
          required: true,
          message: '配货标签不能为空'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_6___default.a, {
        placeholder: "\u586B\u5199\u6807\u7B7E"
      }))), react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_10___default.a.Item, {
        label: "\u8BA2\u8D27\u6570\u91CF"
      }, getFieldDecorator('quantity', {
        rules: [{
          required: true,
          message: '订货数量不能为空'
        }],
        initialValue: 1
      })(react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(component__WEBPACK_IMPORTED_MODULE_46__[/* InputNumber */ "j"], {
        precision: 0,
        min: 1,
        max: 1000
      }))), [10, 20].includes(getFieldValue('type')) ? react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_10___default.a.Item, {
        label: "\u9009\u62E9\u7269\u6D41"
      }, getFieldDecorator('express_id', {
        rules: [{
          required: true,
          message: '请先选择物流'
        }],
        initialValue: expressList.length ? this.getDefaultExpress() : undefined
      })(react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(component__WEBPACK_IMPORTED_MODULE_46__[/* Select */ "l"], {
        options: expressList,
        fieldName: {
          value: 'id',
          label: 'name'
        }
      }))) : null, react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_10___default.a.Item, null, react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_16___default.a, {
        type: "primary",
        htmlType: "submit",
        loading: submit
      }, "\u63D0\u4EA4\u8BA2\u5355"), getFieldValue('type') == 20 ? react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_popover__WEBPACK_IMPORTED_MODULE_4___default.a, {
        trigger: ['click'],
        content: react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_6___default.a.TextArea, {
          style: {
            width: 300
          },
          onChange: function onChange(e) {
            return _this13.handleAddressParse(e);
          },
          placeholder: "\u7C98\u8D34\u5730\u5740\u667A\u80FD\u89E3\u6790\u5B8C\u6574\u5730\u5740"
        }), react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("p", {
          style: {
            width: 300,
            wordBreak: 'break-all',
            marginTop: 10,
            marginBottom: 0
          }
        }, "\u4F8B\u5982\uFF1A\u798F\u5DDE\u5E02\u798F\u6E05\u5E02\u77F3\u7AF9\u8857\u9053\u4E49\u660E\u7EFC\u5408\u697C3F 15000000000 user"))
      }, react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_16___default.a, {
        type: "danger",
        style: {
          marginLeft: 10
        }
      }, "\u667A\u80FD\u89E3\u6790\u5730\u5740")) : null), getFieldValue('type') == 20 ? react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("div", {
        className: "inline-form"
      }, react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("div", {
        className: "inline-form-item"
      }, react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_10___default.a.Item, {
        label: "\u7701"
      }, getFieldDecorator('province', {
        rules: [{
          required: true,
          message: '省份不能为空'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_6___default.a, null))), react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_10___default.a.Item, {
        label: "\u5E02"
      }, getFieldDecorator('city', {
        rules: [{
          required: true,
          message: '市不能为空'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_6___default.a, null))), react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_10___default.a.Item, {
        label: "\u533A"
      }, getFieldDecorator('district')(react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_6___default.a, null)))), react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("div", {
        className: "inline-form-item"
      }, react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_10___default.a.Item, {
        label: "\u8BE6\u7EC6\u5730\u5740"
      }, getFieldDecorator('address', {
        rules: [{
          required: true,
          message: '地址不能为空'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_6___default.a, null)))), react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("div", {
        className: "inline-form-item"
      }, react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_10___default.a.Item, {
        label: "\u6536\u8D27\u4EBA"
      }, getFieldDecorator('consignee', {
        rules: [{
          required: true,
          message: '收货人不能为空'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_6___default.a, null))), react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_10___default.a.Item, {
        label: "\u8054\u7CFB\u65B9\u5F0F"
      }, getFieldDecorator('mobile', {
        rules: [{
          required: true,
          message: '收货人不能为空'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_6___default.a, null))))) : null, [10, 20].includes(getFieldValue('type')) && partList.length ? react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_39__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("div", {
        style: {
          marginBottom: 10
        }
      }, react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_18___default.a, {
        checked: cancelAutoPart,
        onChange: function onChange(e) {
          _this13.setState({
            cancelAutoPart: e.target.checked
          });

          localStorage.setItem('CANCELAUTOPART', e.target.checked ? 1 : 0);
        }
      }, "\u53D6\u6D88\u914D\u4EF6\u81EA\u52A8\u52FE\u9009")), react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_table__WEBPACK_IMPORTED_MODULE_8___default.a, {
        rowKey: "id",
        dataSource: partList,
        pagination: false,
        size: "small" // style={{ marginBottom: '15px' }}
        ,
        rowSelection: {
          selectedRowKeys: selectParts,
          onChange: function onChange(selectedRowKeys) {
            _this13.setState({
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
            return react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_10___default.a.Item, {
              className: "no-margin"
            }, getFieldDecorator("part_".concat(id), selectParts.includes(id) ? {
              rules: [{
                required: true,
                message: '请输入赠品数量'
              }],
              initialValue: 1
            } : {
              initialValue: 1
            })(react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(component__WEBPACK_IMPORTED_MODULE_46__[/* InputNumber */ "j"], {
              min: 1,
              max: 1000
            })));
          }
        }]
      })) : null)))), react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_1___default.a, {
        title: drawerTitle,
        placement: "bottom",
        height: 720,
        bodyStyle: {
          padding: 0
        } // closable={false}
        ,
        onClose: function onClose() {
          return _this13.setState({
            drawer: false
          });
        },
        visible: drawer
      }, react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_table__WEBPACK_IMPORTED_MODULE_8___default.a, {
        rowKey: "order_sn",
        rowSelection: rowSelection,
        dataSource: importExcelData,
        onRow: function onRow(row) {
          return {
            onClick: function onClick() {
              _this13.handleSelectRow(row);
            }
          };
        },
        columns: [{
          key: 'order_sn',
          dataIndex: 'order_sn',
          title: '订单编号',
          render: function render(text, record) {
            return react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("span", null, text, _this13.submitOrderObj[record.order_sn] ? react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_14___default.a, {
              title: react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("div", {
                className: public_theme_pages_index_less__WEBPACK_IMPORTED_MODULE_48___default.a.tooltipContent
              }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(_this13.submitOrderObj[record.order_sn].obj).map(function (item) {
                return react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("p", {
                  key: item
                }, _this13.submitOrderObj[record.order_sn].obj[item].name, " ", _this13.submitOrderObj[record.order_sn].obj[item].count, "\u6B21");
              }))
            }, react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("span", {
              className: "text-success"
            }, "(\u5DF2\u63D0\u4EA4", _this13.submitOrderObj[record.order_sn].count, "\u6B21)")) : null);
          }
        }, {
          key: 'consignee',
          dataIndex: 'consignee',
          title: '收件人姓名',
          render: function render(text, record) {
            return react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_6___default.a, {
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
            return react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_6___default.a, {
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
            return react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_6___default.a, {
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
            return react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_6___default.a, {
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
            return react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_6___default.a, {
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
            return react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_6___default.a, {
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
            return react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_14___default.a, {
              title: text
            }, react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("p", {
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
            return react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_14___default.a, {
              title: text
            }, react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("p", {
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
            return react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_14___default.a, {
              title: text
            }, react__WEBPACK_IMPORTED_MODULE_39___default.a.createElement("p", {
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

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_39__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(dva_no_router__WEBPACK_IMPORTED_MODULE_44__["connect"])(function (_ref) {
  var user = _ref.user;
  return {
    user: user
  };
})(antd_lib_form__WEBPACK_IMPORTED_MODULE_10___default.a.create()(Home)));

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

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "d04V":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("r7XW");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "dfwq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("p0XB");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (is_array_default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/from.js
var from = __webpack_require__("d04V");
var from_default = /*#__PURE__*/__webpack_require__.n(from);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js
var is_iterable = __webpack_require__("yLu3");
var is_iterable_default = /*#__PURE__*/__webpack_require__.n(is_iterable);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js


function _iterableToArray(iter) {
  if (is_iterable_default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return from_default()(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _toConsumableArray; });



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

/***/ }),

/***/ "doui":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _slicedToArray; });



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

/***/ }),

/***/ "eGmO":
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "eMim":
/***/ (function(module, exports) {

module.exports = require("antd/lib/upload/style");

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

/***/ "ln6h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "mVpe":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  development: {
    url: {
      // api: '//localhost:7001',
      api: '//api.yikebb.com',
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

/***/ "oOiI":
/***/ (function(module, exports) {

module.exports = require("antd/lib/row/style");

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

/***/ "pzQ+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "antd/lib/button/style"
var style_ = __webpack_require__("DnGC");

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__("eGmO");
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("kOwS");

// EXTERNAL MODULE: external "antd/lib/icon/style"
var icon_style_ = __webpack_require__("umso");

// EXTERNAL MODULE: external "antd/lib/icon"
var icon_ = __webpack_require__("BWRB");
var icon_default = /*#__PURE__*/__webpack_require__.n(icon_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "antd/lib/message/style"
var message_style_ = __webpack_require__("XZ83");

// EXTERNAL MODULE: external "antd/lib/message"
var message_ = __webpack_require__("3PsY");
var message_default = /*#__PURE__*/__webpack_require__.n(message_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "rc-upload"
var external_rc_upload_ = __webpack_require__("/nHt");
var external_rc_upload_default = /*#__PURE__*/__webpack_require__.n(external_rc_upload_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return upload_btn_UploadButton; });






















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

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qYgU":
/***/ (function(module, exports) {

module.exports = require("antd/lib/cascader/style");

/***/ }),

/***/ "r7XW":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

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

/***/ "tI3Q":
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

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

/***/ "vsU0":
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "wvHv":
/***/ (function(module, exports) {

module.exports = require("antd/lib/drawer");

/***/ }),

/***/ "xKsY":
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal");

/***/ }),

/***/ "yLu3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Kjtv");

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