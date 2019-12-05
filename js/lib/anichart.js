(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("anichart", [], factory);
	else if(typeof exports === 'object')
		exports["anichart"] = factory();
	else
		root["anichart"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/jsmovin/bin/easing.js":
/*!********************************************!*\
  !*** ./node_modules/jsmovin/bin/easing.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EasingFactory = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// parameters extracted from https://easings.net/
var EasingFactory =
/*#__PURE__*/
function () {
  function EasingFactory() {
    _classCallCheck(this, EasingFactory);
  }

  _createClass(EasingFactory, null, [{
    key: "linear",
    value: function linear() {
      return [[[1], [1]], [[0], [0]]];
    }
  }, {
    key: "easeInSine",
    value: function easeInSine() {
      return [[[0.47], [0]], [[0.745], [0.715]]];
    }
  }, {
    key: "easeOutSine",
    value: function easeOutSine() {
      return [[[0.39], [0.575]], [[0.565], [1]]];
    }
  }, {
    key: "easeInOutSine",
    value: function easeInOutSine() {
      return [[[0.445], [0.05]], [[0.55], [0.95]]];
    }
  }, {
    key: "easeInQuad",
    value: function easeInQuad() {
      return [[[0.55], [0.085]], [[0.68], [0.53]]];
    }
  }, {
    key: "easeOutQuad",
    value: function easeOutQuad() {
      return [[[0.25], [0.46]], [[0.45], [0.94]]];
    }
  }, {
    key: "easeInOutQuad",
    value: function easeInOutQuad() {
      return [[[0.455], [0.03]], [[0.515], [0.955]]];
    }
  }, {
    key: "easeInCubic",
    value: function easeInCubic() {
      return [[[0.55], [0.055]], [[0.675], [0.19]]];
    }
  }, {
    key: "easeOutCubic",
    value: function easeOutCubic() {
      return [[[0.215], [0.61]], [[0.355], [1]]];
    }
  }, {
    key: "easeInOutCubic",
    value: function easeInOutCubic() {
      return [[[0.645], [0.045]], [[0.355], [1]]];
    }
  }, {
    key: "easeInQuart",
    value: function easeInQuart() {
      return [[[0.895], [0.03]], [[0.685], [0.22]]];
    }
  }, {
    key: "easeOutQuart",
    value: function easeOutQuart() {
      return [[[0.165], [0.84]], [[0.44], [1]]];
    }
  }, {
    key: "easeInOutQuart",
    value: function easeInOutQuart() {
      return [[[0.77], [0]], [[0.175], [1]]];
    }
  }, {
    key: "easeInQuint",
    value: function easeInQuint() {
      return [[[0.755], [0.05]], [[0.855], [0.06]]];
    }
  }, {
    key: "easeOutQuint",
    value: function easeOutQuint() {
      return [[[0.23], [1]], [[0.32], [1]]];
    }
  }, {
    key: "easeInOutQuint",
    value: function easeInOutQuint() {
      return [[[0.86], [0]], [[0.07], [1]]];
    }
  }, {
    key: "easeInExpo",
    value: function easeInExpo() {
      return [[[0.95], [0.05]], [[0.795], [0.035]]];
    }
  }, {
    key: "easeOutExpo",
    value: function easeOutExpo() {
      return [[[0.19], [1]], [[0.22], [1]]];
    }
  }, {
    key: "easeInOutExpo",
    value: function easeInOutExpo() {
      return [[[1], [0]], [[0], [1]]];
    }
  }, {
    key: "easeInCirc",
    value: function easeInCirc() {
      return [[[0.6], [0.04]], [[0.98], [0.335]]];
    }
  }, {
    key: "easeOutCirc",
    value: function easeOutCirc() {
      return [[[0.075], [0.82]], [[0.165], [1]]];
    }
  }, {
    key: "easeInOutCirc",
    value: function easeInOutCirc() {
      return [[[0.785], [0.135]], [[0.15], [0.86]]];
    }
  }, {
    key: "easeInBack",
    value: function easeInBack() {
      return [[[0.6], [-0.28]], [[0.735], [0.045]]];
    }
  }, {
    key: "easeOutBack",
    value: function easeOutBack() {
      return [[[0.175], [0.885]], [[0.32], [1.275]]];
    }
  }, {
    key: "easeInOutBack",
    value: function easeInOutBack() {
      return [[[0.68], [-0.55]], [[0.265], [1.55]]];
    }
  }]);

  return EasingFactory;
}();

exports.EasingFactory = EasingFactory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lYXNpbmcudHMiXSwibmFtZXMiOlsiRWFzaW5nRmFjdG9yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0lBSWFBLGE7Ozs7Ozs7Ozs2QkFDdUI7QUFDNUIsYUFBTyxDQUFDLENBQUMsQ0FBQyxDQUFELENBQUQsRUFBTSxDQUFDLENBQUQsQ0FBTixDQUFELEVBQWEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxFQUFNLENBQUMsQ0FBRCxDQUFOLENBQWIsQ0FBUDtBQUNIOzs7aUNBRW1DO0FBQ2hDLGFBQU8sQ0FBQyxDQUFDLENBQUMsSUFBRCxDQUFELEVBQVMsQ0FBQyxDQUFELENBQVQsQ0FBRCxFQUFnQixDQUFDLENBQUMsS0FBRCxDQUFELEVBQVUsQ0FBQyxLQUFELENBQVYsQ0FBaEIsQ0FBUDtBQUNIOzs7a0NBRW9DO0FBQ2pDLGFBQU8sQ0FBQyxDQUFDLENBQUMsSUFBRCxDQUFELEVBQVMsQ0FBQyxLQUFELENBQVQsQ0FBRCxFQUFvQixDQUFDLENBQUMsS0FBRCxDQUFELEVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBcEIsQ0FBUDtBQUNIOzs7b0NBRXNDO0FBQ25DLGFBQU8sQ0FBQyxDQUFDLENBQUMsS0FBRCxDQUFELEVBQVUsQ0FBQyxJQUFELENBQVYsQ0FBRCxFQUFvQixDQUFDLENBQUMsSUFBRCxDQUFELEVBQVMsQ0FBQyxJQUFELENBQVQsQ0FBcEIsQ0FBUDtBQUNIOzs7aUNBRW1DO0FBQ2hDLGFBQU8sQ0FBQyxDQUFDLENBQUMsSUFBRCxDQUFELEVBQVMsQ0FBQyxLQUFELENBQVQsQ0FBRCxFQUFvQixDQUFDLENBQUMsSUFBRCxDQUFELEVBQVMsQ0FBQyxJQUFELENBQVQsQ0FBcEIsQ0FBUDtBQUNIOzs7a0NBRW9DO0FBQ2pDLGFBQU8sQ0FBQyxDQUFDLENBQUMsSUFBRCxDQUFELEVBQVMsQ0FBQyxJQUFELENBQVQsQ0FBRCxFQUFtQixDQUFDLENBQUMsSUFBRCxDQUFELEVBQVMsQ0FBQyxJQUFELENBQVQsQ0FBbkIsQ0FBUDtBQUNIOzs7b0NBRXNDO0FBQ25DLGFBQU8sQ0FBQyxDQUFDLENBQUMsS0FBRCxDQUFELEVBQVUsQ0FBQyxJQUFELENBQVYsQ0FBRCxFQUFvQixDQUFDLENBQUMsS0FBRCxDQUFELEVBQVUsQ0FBQyxLQUFELENBQVYsQ0FBcEIsQ0FBUDtBQUNIOzs7a0NBRW9DO0FBQ2pDLGFBQU8sQ0FBQyxDQUFDLENBQUMsSUFBRCxDQUFELEVBQVMsQ0FBQyxLQUFELENBQVQsQ0FBRCxFQUFvQixDQUFDLENBQUMsS0FBRCxDQUFELEVBQVUsQ0FBQyxJQUFELENBQVYsQ0FBcEIsQ0FBUDtBQUNIOzs7bUNBRXFDO0FBQ2xDLGFBQU8sQ0FBQyxDQUFDLENBQUMsS0FBRCxDQUFELEVBQVUsQ0FBQyxJQUFELENBQVYsQ0FBRCxFQUFvQixDQUFDLENBQUMsS0FBRCxDQUFELEVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBcEIsQ0FBUDtBQUNIOzs7cUNBRXVDO0FBQ3BDLGFBQU8sQ0FBQyxDQUFDLENBQUMsS0FBRCxDQUFELEVBQVUsQ0FBQyxLQUFELENBQVYsQ0FBRCxFQUFxQixDQUFDLENBQUMsS0FBRCxDQUFELEVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBckIsQ0FBUDtBQUNIOzs7a0NBRW9DO0FBQ2pDLGFBQU8sQ0FBQyxDQUFDLENBQUMsS0FBRCxDQUFELEVBQVUsQ0FBQyxJQUFELENBQVYsQ0FBRCxFQUFvQixDQUFDLENBQUMsS0FBRCxDQUFELEVBQVUsQ0FBQyxJQUFELENBQVYsQ0FBcEIsQ0FBUDtBQUNIOzs7bUNBRXFDO0FBQ2xDLGFBQU8sQ0FBQyxDQUFDLENBQUMsS0FBRCxDQUFELEVBQVUsQ0FBQyxJQUFELENBQVYsQ0FBRCxFQUFvQixDQUFDLENBQUMsSUFBRCxDQUFELEVBQVMsQ0FBQyxDQUFELENBQVQsQ0FBcEIsQ0FBUDtBQUNIOzs7cUNBRXVDO0FBQ3BDLGFBQU8sQ0FBQyxDQUFDLENBQUMsSUFBRCxDQUFELEVBQVMsQ0FBQyxDQUFELENBQVQsQ0FBRCxFQUFnQixDQUFDLENBQUMsS0FBRCxDQUFELEVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBaEIsQ0FBUDtBQUNIOzs7a0NBRW9DO0FBQ2pDLGFBQU8sQ0FBQyxDQUFDLENBQUMsS0FBRCxDQUFELEVBQVUsQ0FBQyxJQUFELENBQVYsQ0FBRCxFQUFvQixDQUFDLENBQUMsS0FBRCxDQUFELEVBQVUsQ0FBQyxJQUFELENBQVYsQ0FBcEIsQ0FBUDtBQUNIOzs7bUNBRXFDO0FBQ2xDLGFBQU8sQ0FBQyxDQUFDLENBQUMsSUFBRCxDQUFELEVBQVMsQ0FBQyxDQUFELENBQVQsQ0FBRCxFQUFnQixDQUFDLENBQUMsSUFBRCxDQUFELEVBQVMsQ0FBQyxDQUFELENBQVQsQ0FBaEIsQ0FBUDtBQUNIOzs7cUNBRXVDO0FBQ3BDLGFBQU8sQ0FBQyxDQUFDLENBQUMsSUFBRCxDQUFELEVBQVMsQ0FBQyxDQUFELENBQVQsQ0FBRCxFQUFnQixDQUFDLENBQUMsSUFBRCxDQUFELEVBQVMsQ0FBQyxDQUFELENBQVQsQ0FBaEIsQ0FBUDtBQUNIOzs7aUNBRW1DO0FBQ2hDLGFBQU8sQ0FBQyxDQUFDLENBQUMsSUFBRCxDQUFELEVBQVMsQ0FBQyxJQUFELENBQVQsQ0FBRCxFQUFtQixDQUFDLENBQUMsS0FBRCxDQUFELEVBQVUsQ0FBQyxLQUFELENBQVYsQ0FBbkIsQ0FBUDtBQUNIOzs7a0NBRW9DO0FBQ2pDLGFBQU8sQ0FBQyxDQUFDLENBQUMsSUFBRCxDQUFELEVBQVMsQ0FBQyxDQUFELENBQVQsQ0FBRCxFQUFnQixDQUFDLENBQUMsSUFBRCxDQUFELEVBQVMsQ0FBQyxDQUFELENBQVQsQ0FBaEIsQ0FBUDtBQUNIOzs7b0NBRXNDO0FBQ25DLGFBQU8sQ0FBQyxDQUFDLENBQUMsQ0FBRCxDQUFELEVBQU0sQ0FBQyxDQUFELENBQU4sQ0FBRCxFQUFhLENBQUMsQ0FBQyxDQUFELENBQUQsRUFBTSxDQUFDLENBQUQsQ0FBTixDQUFiLENBQVA7QUFDSDs7O2lDQUVtQztBQUNoQyxhQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUQsQ0FBRCxFQUFRLENBQUMsSUFBRCxDQUFSLENBQUQsRUFBa0IsQ0FBQyxDQUFDLElBQUQsQ0FBRCxFQUFTLENBQUMsS0FBRCxDQUFULENBQWxCLENBQVA7QUFDSDs7O2tDQUVvQztBQUNqQyxhQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUQsQ0FBRCxFQUFVLENBQUMsSUFBRCxDQUFWLENBQUQsRUFBb0IsQ0FBQyxDQUFDLEtBQUQsQ0FBRCxFQUFVLENBQUMsQ0FBRCxDQUFWLENBQXBCLENBQVA7QUFDSDs7O29DQUVzQztBQUNuQyxhQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUQsQ0FBRCxFQUFVLENBQUMsS0FBRCxDQUFWLENBQUQsRUFBcUIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxFQUFTLENBQUMsSUFBRCxDQUFULENBQXJCLENBQVA7QUFDSDs7O2lDQUVtQztBQUNoQyxhQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUQsQ0FBRCxFQUFRLENBQUMsQ0FBQyxJQUFGLENBQVIsQ0FBRCxFQUFtQixDQUFDLENBQUMsS0FBRCxDQUFELEVBQVUsQ0FBQyxLQUFELENBQVYsQ0FBbkIsQ0FBUDtBQUNIOzs7a0NBRW9DO0FBQ2pDLGFBQU8sQ0FBQyxDQUFDLENBQUMsS0FBRCxDQUFELEVBQVUsQ0FBQyxLQUFELENBQVYsQ0FBRCxFQUFxQixDQUFDLENBQUMsSUFBRCxDQUFELEVBQVMsQ0FBQyxLQUFELENBQVQsQ0FBckIsQ0FBUDtBQUNIOzs7b0NBRXNDO0FBQ25DLGFBQU8sQ0FBQyxDQUFDLENBQUMsSUFBRCxDQUFELEVBQVMsQ0FBQyxDQUFDLElBQUYsQ0FBVCxDQUFELEVBQW9CLENBQUMsQ0FBQyxLQUFELENBQUQsRUFBVSxDQUFDLElBQUQsQ0FBVixDQUFwQixDQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYXJhbWV0ZXJzIGV4dHJhY3RlZCBmcm9tIGh0dHBzOi8vZWFzaW5ncy5uZXQvXHJcblxyXG5leHBvcnQgdHlwZSBFYXNpbmdGdW5jdGlvbiA9IG51bWJlcltdW11bXVxyXG5cclxuZXhwb3J0IGNsYXNzIEVhc2luZ0ZhY3Rvcnkge1xyXG4gICAgc3RhdGljIGxpbmVhcigpOiBFYXNpbmdGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIFtbWzFdLCBbMV1dLCBbWzBdLCBbMF1dXVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBlYXNlSW5TaW5lKCk6IEVhc2luZ0Z1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gW1tbMC40N10sIFswXV0sIFtbMC43NDVdLCBbMC43MTVdXV1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZWFzZU91dFNpbmUoKTogRWFzaW5nRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiBbW1swLjM5XSwgWzAuNTc1XV0sIFtbMC41NjVdLCBbMV1dXVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBlYXNlSW5PdXRTaW5lKCk6IEVhc2luZ0Z1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gW1tbMC40NDVdLCBbMC4wNV1dLCBbWzAuNTVdLCBbMC45NV1dXVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBlYXNlSW5RdWFkKCk6IEVhc2luZ0Z1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gW1tbMC41NV0sIFswLjA4NV1dLCBbWzAuNjhdLCBbMC41M11dXVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBlYXNlT3V0UXVhZCgpOiBFYXNpbmdGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIFtbWzAuMjVdLCBbMC40Nl1dLCBbWzAuNDVdLCBbMC45NF1dXVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBlYXNlSW5PdXRRdWFkKCk6IEVhc2luZ0Z1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gW1tbMC40NTVdLCBbMC4wM11dLCBbWzAuNTE1XSwgWzAuOTU1XV1dXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGVhc2VJbkN1YmljKCk6IEVhc2luZ0Z1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gW1tbMC41NV0sIFswLjA1NV1dLCBbWzAuNjc1XSwgWzAuMTldXV1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZWFzZU91dEN1YmljKCk6IEVhc2luZ0Z1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gW1tbMC4yMTVdLCBbMC42MV1dLCBbWzAuMzU1XSwgWzFdXV1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZWFzZUluT3V0Q3ViaWMoKTogRWFzaW5nRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiBbW1swLjY0NV0sIFswLjA0NV1dLCBbWzAuMzU1XSwgWzFdXV1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZWFzZUluUXVhcnQoKTogRWFzaW5nRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiBbW1swLjg5NV0sIFswLjAzXV0sIFtbMC42ODVdLCBbMC4yMl1dXVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBlYXNlT3V0UXVhcnQoKTogRWFzaW5nRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiBbW1swLjE2NV0sIFswLjg0XV0sIFtbMC40NF0sIFsxXV1dXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGVhc2VJbk91dFF1YXJ0KCk6IEVhc2luZ0Z1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gW1tbMC43N10sIFswXV0sIFtbMC4xNzVdLCBbMV1dXVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBlYXNlSW5RdWludCgpOiBFYXNpbmdGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIFtbWzAuNzU1XSwgWzAuMDVdXSwgW1swLjg1NV0sIFswLjA2XV1dXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGVhc2VPdXRRdWludCgpOiBFYXNpbmdGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIFtbWzAuMjNdLCBbMV1dLCBbWzAuMzJdLCBbMV1dXVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBlYXNlSW5PdXRRdWludCgpOiBFYXNpbmdGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIFtbWzAuODZdLCBbMF1dLCBbWzAuMDddLCBbMV1dXVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBlYXNlSW5FeHBvKCk6IEVhc2luZ0Z1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gW1tbMC45NV0sIFswLjA1XV0sIFtbMC43OTVdLCBbMC4wMzVdXV1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZWFzZU91dEV4cG8oKTogRWFzaW5nRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiBbW1swLjE5XSwgWzFdXSwgW1swLjIyXSwgWzFdXV1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZWFzZUluT3V0RXhwbygpOiBFYXNpbmdGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIFtbWzFdLCBbMF1dLCBbWzBdLCBbMV1dXVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBlYXNlSW5DaXJjKCk6IEVhc2luZ0Z1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gW1tbMC42XSwgWzAuMDRdXSwgW1swLjk4XSwgWzAuMzM1XV1dXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGVhc2VPdXRDaXJjKCk6IEVhc2luZ0Z1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gW1tbMC4wNzVdLCBbMC44Ml1dLCBbWzAuMTY1XSwgWzFdXV1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZWFzZUluT3V0Q2lyYygpOiBFYXNpbmdGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIFtbWzAuNzg1XSwgWzAuMTM1XV0sIFtbMC4xNV0sIFswLjg2XV1dXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGVhc2VJbkJhY2soKTogRWFzaW5nRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiBbW1swLjZdLCBbLTAuMjhdXSwgW1swLjczNV0sIFswLjA0NV1dXVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBlYXNlT3V0QmFjaygpOiBFYXNpbmdGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIFtbWzAuMTc1XSwgWzAuODg1XV0sIFtbMC4zMl0sIFsxLjI3NV1dXVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBlYXNlSW5PdXRCYWNrKCk6IEVhc2luZ0Z1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gW1tbMC42OF0sIFstMC41NV1dLCBbWzAuMjY1XSwgWzEuNTVdXV1cclxuICAgIH1cclxufSJdfQ==

/***/ }),

/***/ "./node_modules/jsmovin/bin/helper.js":
/*!********************************************!*\
  !*** ./node_modules/jsmovin/bin/helper.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateBaseTransform = calculateBaseTransform;
exports.getBoundingBox = getBoundingBox;
exports.getLeafNodes = getLeafNodes;
exports.getBaselineHeight = getBaselineHeight;
exports.encodeLineCap = encodeLineCap;
exports.encodeLineJoin = encodeLineJoin;
exports.encodeTextAnchor = encodeTextAnchor;
exports.greatestCommonDivisor = greatestCommonDivisor;
exports.leastCommonMultiple = leastCommonMultiple;

function calculateBaseTransform(dom, root) {
  // https://github.com/dagrejs/dagre-d3/issues/202
  return root.getScreenCTM().inverse().multiply(dom.getScreenCTM());
}

function getBoundingBox(dom) {
  var svgRoot = dom;

  while (true) {
    if (svgRoot.parentElement instanceof SVGGraphicsElement) {
      svgRoot = svgRoot.parentElement;
    } else {
      break;
    }
  }

  var baseBox = calculateBaseTransform(dom, svgRoot);
  var refBBox = dom.getBBox();
  var coordinate = [baseBox.e + refBBox.x, baseBox.f + refBBox.y, refBBox.width + 1, refBBox.height + 1];
  return coordinate;
}

function getLeafNodes(master) {
  // https://stackoverflow.com/questions/22289391/how-to-create-an-array-of-leaf-nodes-of-an-html-dom-using-javascript
  var nodes = Array.prototype.slice.call(master.getElementsByTagName("*"), 0);
  var leafNodes = nodes.filter(function (elem) {
    if (elem.hasChildNodes()) {
      // see if any of the child nodes are elements
      for (var i = 0; i < elem.childNodes.length; i++) {
        if (elem.childNodes[i].nodeType == 1) {
          // there is a child element, so return false to not include
          // this parent element
          return false;
        }
      }
    }

    return true;
  });
  return leafNodes;
}

function getBaselineHeight(dom) {
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  var computedStyle = getComputedStyle(dom);
  var fontSettings = computedStyle.font;
  ctx.font = fontSettings;
  var textMetrix = ctx.measureText('ypfgj█');
  return textMetrix.actualBoundingBoxDescent || 0;
}

function encodeLineCap(type) {
  switch (type) {
    case 'square':
      return 3;

    case 'butt':
      return 1;

    default:
      return 2;
  }
}

function encodeLineJoin(type) {
  switch (type) {
    case 'miter':
      return 1;

    case 'bevel':
      return 3;

    default:
      return 2;
  }
}

function encodeTextAnchor(type) {
  switch (type) {
    case 'middle':
      return 2;

    case 'end':
      return 1;

    default:
      return 0;
  }
}

function greatestCommonDivisor(x, y) {
  x = Math.abs(x);
  y = Math.abs(y);

  while (y) {
    var t = y;
    y = x % y;
    x = t;
  }

  return x;
}

function leastCommonMultiple(x, y) {
  return !x || !y ? 0 : Math.abs(x * y / greatestCommonDivisor(x, y));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9oZWxwZXIudHMiXSwibmFtZXMiOlsiY2FsY3VsYXRlQmFzZVRyYW5zZm9ybSIsImRvbSIsInJvb3QiLCJnZXRTY3JlZW5DVE0iLCJpbnZlcnNlIiwibXVsdGlwbHkiLCJnZXRCb3VuZGluZ0JveCIsInN2Z1Jvb3QiLCJwYXJlbnRFbGVtZW50IiwiU1ZHR3JhcGhpY3NFbGVtZW50IiwiYmFzZUJveCIsInJlZkJCb3giLCJnZXRCQm94IiwiY29vcmRpbmF0ZSIsImUiLCJ4IiwiZiIsInkiLCJ3aWR0aCIsImhlaWdodCIsImdldExlYWZOb2RlcyIsIm1hc3RlciIsIm5vZGVzIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImxlYWZOb2RlcyIsImZpbHRlciIsImVsZW0iLCJoYXNDaGlsZE5vZGVzIiwiaSIsImNoaWxkTm9kZXMiLCJsZW5ndGgiLCJub2RlVHlwZSIsImdldEJhc2VsaW5lSGVpZ2h0IiwiY2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY3R4IiwiZ2V0Q29udGV4dCIsImNvbXB1dGVkU3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiZm9udFNldHRpbmdzIiwiZm9udCIsInRleHRNZXRyaXgiLCJtZWFzdXJlVGV4dCIsImFjdHVhbEJvdW5kaW5nQm94RGVzY2VudCIsImVuY29kZUxpbmVDYXAiLCJ0eXBlIiwiZW5jb2RlTGluZUpvaW4iLCJlbmNvZGVUZXh0QW5jaG9yIiwiZ3JlYXRlc3RDb21tb25EaXZpc29yIiwiTWF0aCIsImFicyIsInQiLCJsZWFzdENvbW1vbk11bHRpcGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBTyxTQUFTQSxzQkFBVCxDQUFnQ0MsR0FBaEMsRUFBeURDLElBQXpELEVBQW1GO0FBQ3RGO0FBRUEsU0FBT0EsSUFBSSxDQUFDQyxZQUFMLEdBQXFCQyxPQUFyQixHQUErQkMsUUFBL0IsQ0FBd0NKLEdBQUcsQ0FBQ0Us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Q0ksU0FBSyxRQUFMO0FBQ0ksYUFBTyxDQUFQOztBQUNKLFNBQUssS0FBTDtBQUNJLGFBQU8sQ0FBUDs7QUFDSjtBQUNJLGFBQU8sQ0FBUDtBQU5SO0FBUUg7O0FBRU0sU0FBU0cscUJBQVQsQ0FBK0J0QyxDQUEvQixFQUEwQ0UsQ0FBMUMsRUFBNkQ7QUFDaEVGLEVBQUFBLENBQUMsR0FBR3VDLElBQUksQ0FBQ0MsR0FBTCxDQUFTeEMsQ0FBVCxDQUFKO0FBQ0FFLEVBQUFBLENBQUMsR0FBR3FDLElBQUksQ0FBQ0MsR0FBTCxDQUFTdEMsQ0FBVCxDQUFKOztBQUNBLFNBQU9BLENBQVAsRUFBVTtBQUNOLFFBQUl1QyxDQUFDLEdBQUd2QyxDQUFSO0FBQ0FBLElBQUFBLENBQUMsR0FBR0YsQ0FBQyxHQUFHRSxDQUFSO0FBQ0FGLElBQUFBLENBQUMsR0FBR3lDLENBQUo7QUFDSDs7QUFDRCxTQUFPekMsQ0FBUDtBQUNIOztBQUVNLFNBQVMwQyxtQkFBVCxDQUE2QjFDLENBQTdCLEVBQXdDRSxDQUF4QyxFQUEyRDtBQUM5RCxTQUFRLENBQUNGLENBQUQsSUFBTSxDQUFDRSxDQUFSLEdBQWEsQ0FBYixHQUFpQnFDLElBQUksQ0FBQ0MsR0FBTCxDQUFVeEMsQ0FBQyxHQUFHRSxDQUFMLEdBQVVvQyxxQkFBcUIsQ0FBQ3RDLENBQUQsRUFBSUUsQ0FBSixDQUF4QyxDQUF4QjtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUJhc2VUcmFuc2Zvcm0oZG9tOiBTVkdHcmFwaGljc0VsZW1lbnQsIHJvb3Q6IFNWR0dyYXBoaWNzRWxlbWVudCkge1xyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2RhZ3JlanMvZGFncmUtZDMvaXNzdWVzLzIwMlxyXG5cclxuICAgIHJldHVybiByb290LmdldFNjcmVlbkNUTSgpIS5pbnZlcnNlKCkubXVsdGlwbHkoZG9tLmdldFNjcmVlbkNUTSgpISlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJvdW5kaW5nQm94KGRvbTogU1ZHR3JhcGhpY3NFbGVtZW50KSB7XHJcbiAgICBsZXQgc3ZnUm9vdDogU1ZHR3JhcGhpY3NFbGVtZW50ID0gZG9tXHJcbiAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgIGlmIChzdmdSb290LnBhcmVudEVsZW1lbnQgaW5zdGFuY2VvZiBTVkdHcmFwaGljc0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgc3ZnUm9vdCA9IHN2Z1Jvb3QucGFyZW50RWxlbWVudFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgYmFzZUJveCA9IGNhbGN1bGF0ZUJhc2VUcmFuc2Zvcm0oZG9tLCBzdmdSb290KVxyXG4gICAgY29uc3QgcmVmQkJveCA9IGRvbS5nZXRCQm94KClcclxuICAgIGNvbnN0IGNvb3JkaW5hdGU6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdID0gW2Jhc2VCb3guZSArIHJlZkJCb3gueCwgYmFzZUJveC5mICsgcmVmQkJveC55LCByZWZCQm94LndpZHRoICsgMSwgcmVmQkJveC5oZWlnaHQgKyAxXVxyXG4gICAgcmV0dXJuIGNvb3JkaW5hdGVcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExlYWZOb2RlcyhtYXN0ZXI6IFNWR0dyYXBoaWNzRWxlbWVudCk6IFNWR0dyYXBoaWNzRWxlbWVudFtdIHtcclxuICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIyMjg5MzkxL2hvdy10by1jcmVhdGUtYW4tYXJyYXktb2YtbGVhZi1ub2Rlcy1vZi1hbi1odG1sLWRvbS11c2luZy1qYXZhc2NyaXB0XHJcblxyXG4gICAgdmFyIG5vZGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobWFzdGVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKSwgMCk7XHJcbiAgICB2YXIgbGVhZk5vZGVzID0gbm9kZXMuZmlsdGVyKGZ1bmN0aW9uIChlbGVtKSB7XHJcbiAgICAgICAgaWYgKGVsZW0uaGFzQ2hpbGROb2RlcygpKSB7XHJcbiAgICAgICAgICAgIC8vIHNlZSBpZiBhbnkgb2YgdGhlIGNoaWxkIG5vZGVzIGFyZSBlbGVtZW50c1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW0uY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW0uY2hpbGROb2Rlc1tpXS5ub2RlVHlwZSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlcmUgaXMgYSBjaGlsZCBlbGVtZW50LCBzbyByZXR1cm4gZmFsc2UgdG8gbm90IGluY2x1ZGVcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHBhcmVudCBlbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gbGVhZk5vZGVzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QmFzZWxpbmVIZWlnaHQoZG9tOiBTVkdUZXh0RWxlbWVudCkge1xyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcclxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpIVxyXG4gICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZG9tKVxyXG4gICAgY29uc3QgZm9udFNldHRpbmdzID0gY29tcHV0ZWRTdHlsZS5mb250XHJcblxyXG4gICAgY3R4LmZvbnQgPSBmb250U2V0dGluZ3NcclxuICAgIGNvbnN0IHRleHRNZXRyaXggPSBjdHgubWVhc3VyZVRleHQoJ3lwZmdq4paIJylcclxuICAgIHJldHVybiB0ZXh0TWV0cml4LmFjdHVhbEJvdW5kaW5nQm94RGVzY2VudCB8fCAwXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGVMaW5lQ2FwKHR5cGU/OiBzdHJpbmcgfCBudWxsKTogbnVtYmVyIHtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ3NxdWFyZSc6XHJcbiAgICAgICAgICAgIHJldHVybiAzXHJcbiAgICAgICAgY2FzZSAnYnV0dCc6XHJcbiAgICAgICAgICAgIHJldHVybiAxXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIDJcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZUxpbmVKb2luKHR5cGU/OiBzdHJpbmcgfCBudWxsKTogbnVtYmVyIHtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ21pdGVyJzpcclxuICAgICAgICAgICAgcmV0dXJuIDFcclxuICAgICAgICBjYXNlICdiZXZlbCc6XHJcbiAgICAgICAgICAgIHJldHVybiAzXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIDJcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZVRleHRBbmNob3IodHlwZT86IHN0cmluZyB8IG51bGwpOiBudW1iZXIge1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnbWlkZGxlJzpcclxuICAgICAgICAgICAgcmV0dXJuIDJcclxuICAgICAgICBjYXNlICdlbmQnOlxyXG4gICAgICAgICAgICByZXR1cm4gMVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiAwXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBncmVhdGVzdENvbW1vbkRpdmlzb3IoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgeCA9IE1hdGguYWJzKHgpO1xyXG4gICAgeSA9IE1hdGguYWJzKHkpO1xyXG4gICAgd2hpbGUgKHkpIHtcclxuICAgICAgICB2YXIgdCA9IHk7XHJcbiAgICAgICAgeSA9IHggJSB5O1xyXG4gICAgICAgIHggPSB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHg7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsZWFzdENvbW1vbk11bHRpcGxlKHg6IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiAoIXggfHwgIXkpID8gMCA6IE1hdGguYWJzKCh4ICogeSkgLyBncmVhdGVzdENvbW1vbkRpdmlzb3IoeCwgeSkpO1xyXG59Il19

/***/ }),

/***/ "./node_modules/jsmovin/bin/jsmovin.js":
/*!*********************************************!*\
  !*** ./node_modules/jsmovin/bin/jsmovin.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "LayerFactory", {
  enumerable: true,
  get: function get() {
    return _layer.LayerFactory;
  }
});
Object.defineProperty(exports, "EasingFactory", {
  enumerable: true,
  get: function get() {
    return _easing.EasingFactory;
  }
});
Object.defineProperty(exports, "PathMaker", {
  enumerable: true,
  get: function get() {
    return _path.PathMaker;
  }
});
exports.MaskType = exports["default"] = void 0;

var _layer = __webpack_require__(/*! ./layer */ "./node_modules/jsmovin/bin/layer.js");

var _v = _interopRequireDefault(__webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js"));

var _easing = __webpack_require__(/*! ./easing */ "./node_modules/jsmovin/bin/easing.js");

var _path = __webpack_require__(/*! ./path */ "./node_modules/jsmovin/bin/path.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var JSMovin =
/*#__PURE__*/
function () {
  /**
   * @param fps number of frames per second
   * @param width width of viewport (px)
   * @param height height of viewport (px)
   */
  function JSMovin() {
    var fps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;
    var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 800;
    var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 600;

    _classCallCheck(this, JSMovin);

    _defineProperty(this, "root", void 0);

    this.root = {
      fr: fps,
      w: width,
      h: height,
      ddd: 0,
      layers: [],
      assets: [],
      fonts: {
        list: []
      },
      ip: 0,
      op: 0
    };
  }
  /**
   * @param fps number of frames per second
   */


  _createClass(JSMovin, [{
    key: "setFrameRate",
    value: function setFrameRate(fps) {
      this.root.fr = fps;
    }
    /**
     * @param width width of viewport (px)
     * @param height height of viewport (px)
     */

  }, {
    key: "setViewport",
    value: function setViewport(width, height) {
      this.root.w = width;
      this.root.h = height;
    }
    /**
     * add a simple graphical layer
     * @param domLayerOrAssetId a SVG element DOM or JSMovinLayer or asset ID needs to be inserted
     */

  }, {
    key: "addLayer",
    value: function addLayer(domLayerOrAssetId) {
      var layer;

      if (domLayerOrAssetId instanceof SVGGraphicsElement) {
        layer = _layer.LayerFactory.hierarchy(domLayerOrAssetId, this.root.assets, this.root.fonts);
      } else if (typeof domLayerOrAssetId === 'string') {
        layer = _layer.LayerFactory.ref(domLayerOrAssetId);
      } else {
        layer = domLayerOrAssetId;
      }

      this.root.layers.splice(0, 0, layer.root);
      return layer;
    }
    /**
     * @param maskOrDom a SVG element DOM or JSMovinLayer to be the mask
     * @param layerRefOrIndex a JSMovinLayer or index of layer to be the masked layer
     * @param maskType which type of mask to use, use `MaskType.*` to specify
     */

  }, {
    key: "addMask",
    value: function addMask(maskOrDom, layerRefOrIndex) {
      var maskType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : MaskType.Alpha;
      var layerRef;
      var layerIndex;

      if (layerRefOrIndex instanceof _layer.JSMovinLayer) {
        layerRef = layerRefOrIndex;
        layerIndex = this.root.layers.indexOf(layerRef.root);
        layerRef.root.tt = maskType;
      } else {
        layerIndex = layerRefOrIndex;
        this.root.layers[layerIndex].tt = maskType;
      }

      if (layerIndex < 0) {
        throw new Error('Given layer is not a member of this JSMovin.');
      }

      var maskLayer;

      if (maskOrDom instanceof SVGGraphicsElement) {
        maskLayer = _layer.LayerFactory.hierarchy(maskOrDom, this.root.assets, this.root.fonts);
      } else {
        maskLayer = maskOrDom;
      }

      this.root.layers.splice(layerIndex, 0, maskLayer.root);
      return maskLayer;
    }
    /**
     * @param layerRefs a set of layers to be packed as an asset
     */

  }, {
    key: "makeAsset",
    value: function makeAsset(layerRefs) {
      var _this = this;

      layerRefs.forEach(function (layer, innerIndex) {
        if (layer.root.tt == 1) {
          var layerIndex = _this.root.layers.indexOf(layer.root);

          if (layerIndex > 0) {
            var mask = _this.root.layers[layerIndex - 1];

            if (innerIndex == 0 || layerRefs[innerIndex - 1].root != mask) {
              layerRefs.splice(innerIndex, 0, new _layer.JSMovinLayer(mask));
            }
          }
        }
      });
      layerRefs = layerRefs.map(function (layer, innerIndex) {
        return {
          layer: layer,
          innerIndex: innerIndex
        };
      }).sort(function (a, b) {
        var aIndex = _this.root.layers.indexOf(a.layer.root);

        var bIndex = _this.root.layers.indexOf(b.layer.root);

        return aIndex - bIndex || a.innerIndex - b.innerIndex;
      }).map(function (layerWrapper) {
        return layerWrapper.layer;
      });
      layerRefs.forEach(function (layer) {
        var layerIndex = _this.root.layers.indexOf(layer.root);

        if (layerIndex > 0) {
          _this.root.layers.splice(layerIndex, 1);
        }

        layer.root.op = 9e9;
      });
      var refId = (0, _v["default"])();
      this.root.assets.push({
        id: refId,
        layers: layerRefs.map(function (layerRef) {
          return layerRef.root;
        })
      });
      return refId;
    }
    /**
     * @param layerRefOrIndex a JSMovinLayer or index of layer to remove
     */

  }, {
    key: "removeLayer",
    value: function removeLayer(layerRefOrIndex) {
      var layerRef;
      var layerIndex;

      if (layerRefOrIndex instanceof _layer.JSMovinLayer) {
        layerRef = layerRefOrIndex;
        layerIndex = this.root.layers.indexOf(layerRef.root);
      } else {
        layerIndex = layerRefOrIndex;
      }

      this.root.layers.splice(layerIndex, 1);
    }
    /**
     * @param layerRefOrIndex a JSMovinLayer or index of mask or masked layer to remove
     */

  }, {
    key: "removeMask",
    value: function removeMask(layerRefOrIndex) {
      var layerRef;
      var layerIndex;

      if (layerRefOrIndex instanceof _layer.JSMovinLayer) {
        layerRef = layerRefOrIndex;
        layerIndex = this.root.layers.indexOf(layerRef.root);
      } else {
        layerIndex = layerRefOrIndex;
        layerRef = new _layer.JSMovinLayer(this.root.layers[layerIndex]);
      }

      if (layerRef.root.tt) {
        layerRef.root.tt = 0;
        this.root.layers.splice(layerIndex - 1, 1);
      } else if (this.root.layers[layerIndex + 1].tt) {
        this.root.layers[layerIndex + 1].tt = 0;
        this.root.layers.splice(layerIndex, 1);
      } else {
        throw new Error('The input layer is not a mask or a masked layer.');
      }
    }
    /**
     * clear all layers
     */

  }, {
    key: "clearLayers",
    value: function clearLayers() {
      this.root.layers = [];
    }
    /**
     * make all layers end at same time
     */

  }, {
    key: "uniform",
    value: function uniform() {
      var maxTime = this.root.layers.reduce(function (p, v) {
        return p < v.op ? v.op : p;
      }, 0);
      this.root.op = maxTime;
      this.root.layers.forEach(function (layer) {
        return layer.op = maxTime;
      });
    }
    /**
     * export Lottie as JavaScript Object 
     */

  }, {
    key: "toObject",
    value: function toObject() {
      this.uniform();
      return JSON.parse(this.toJSON());
    }
    /**
     * export Lottie as JSON text
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      this.uniform();
      return JSON.stringify(this.root);
    }
  }]);

  return JSMovin;
}();

exports["default"] = JSMovin;
var MaskType;
exports.MaskType = MaskType;

(function (MaskType) {
  MaskType[MaskType["Alpha"] = 1] = "Alpha";
  MaskType[MaskType["InvertAlpha"] = 2] = "InvertAlpha";
  MaskType[MaskType["Luma"] = 3] = "Luma";
  MaskType[MaskType["InvertLuma"] = 4] = "InvertLuma";
})(MaskType || (exports.MaskType = MaskType = {}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9qc21vdmluLnRzIl0sIm5hbWVzIjpbIkpTTW92aW4iLCJmcHMiLCJ3aWR0aCIsImhlaWdodCIsInJvb3QiLCJmciIsInciLCJoIiwiZGRkIiwibGF5ZXJzIiwiYXNzZXRzIiwiZm9udHMiLCJsaXN0IiwiaXAiLCJvcCIsImRvbUxheWVyT3JBc3NldElkIiwibGF5ZXIiLCJTVkdHcmFwaGljc0VsZW1lbnQiLCJMYXllckZhY3RvcnkiLCJoaWVyYXJjaHkiLCJyZWYiLCJzcGxpY2UiLCJtYXNrT3JEb20iLCJsYXllclJlZk9ySW5kZXgiLCJtYXNrVHlwZSIsIk1hc2tUeXBlIiwiQWxwaGEiLCJsYXllclJlZiIsImxheWVySW5kZXgiLCJKU01vdmluTGF5ZXIiLCJpbmRleE9mIiwidHQiLCJFcnJvciIsIm1hc2tMYXllciIsImxheWVyUmVmcyIsImZvckVhY2giLCJpbm5lckluZGV4IiwibWFzayIsIm1hcCIsInNvcnQiLCJhIiwiYiIsImFJbmRleCIsImJJbmRleCIsImxheWVyV3JhcHBlciIsInJlZklkIiwicHVzaCIsImlkIiwibWF4VGltZSIsInJlZHVjZSIsInAiLCJ2IiwidW5pZm9ybSIsIkpTT04iLCJwYXJzZSIsInRvSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUNBOztBQTBNQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBek1xQkEsTzs7O0FBR2pCOzs7OztBQUtBLHFCQUF5RTtBQUFBLFFBQTdEQyxHQUE2RCx1RUFBL0MsRUFBK0M7QUFBQSxRQUEzQ0MsS0FBMkMsdUVBQTNCLEdBQTJCO0FBQUEsUUFBdEJDLE1BQXNCLHVFQUFMLEdBQUs7O0FBQUE7O0FBQUE7O0FBQ3JFLFNBQUtDLElBQUwsR0FBWTtBQUNSQyxNQUFBQSxFQUFFLEVBQUVKLEdBREk7QUFFUkssTUFBQUEsQ0FBQyxFQUFFSixLQUZLO0FBR1JLLE1BQUFBLENBQUMsRUFBRUosTUFISztBQUlSSyxNQUFBQSxH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SUksS0FBSixDQUFVLGtEQUFWLENBQU47QUFDSDtBQUNKO0FBRUQ7Ozs7OztrQ0FHYztBQUNWLFdBQUs1QixJQUFMLENBQVVLLE1BQVYsR0FBbUIsRUFBbkI7QUFDSDtBQUVEOzs7Ozs7OEJBR1U7QUFDTixVQUFJdUMsT0FBTyxHQUFHLEtBQUs1QyxJQUFMLENBQVVLLE1BQVYsQ0FBa0J3QyxNQUFsQixDQUF5QixVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxlQUFVRCxDQUFDLEdBQUdDLENBQUMsQ0FBQ3JDLEVBQU4sR0FBWXFDLENBQUMsQ0FBQ3JDLEVBQWQsR0FBb0JvQyxDQUE5QjtBQUFBLE9BQXpCLEVBQTBELENBQTFELENBQWQ7QUFDQSxXQUFLOUMsSUFBTCxDQUFVVSxFQUFWLEdBQWVrQyxPQUFmO0FBQ0EsV0FBSzVDLElBQUwsQ0FBVUssTUFBVixDQUFrQjBCLE9BQWxCLENBQTBCLFVBQUFuQixLQUFLO0FBQUEsZUFBSUEsS0FBSyxDQUFDRixFQUFOLEdBQVdrQyxPQUFmO0FBQUEsT0FBL0I7QUFDSDtBQUVEOzs7Ozs7K0JBR1c7QUFDUCxXQUFLSSxPQUFMO0FBQ0EsYUFBT0MsSUFBSSxDQUFDQyxLQUFMLENBQVcsS0FBS0MsTUFBTCxFQUFYLENBQVA7QUFDSDtBQUVEOzs7Ozs7NkJBR1M7QUFDTCxXQUFLSCxPQUFMO0FBQ0EsYUFBT0MsSUFBSSxDQUFDRyxTQUFMLENBQWUsS0FBS3BELElBQXBCLENBQVA7QUFDSDs7Ozs7OztJQU1PcUIsUTs7O1dBQUFBLFE7QUFBQUEsRUFBQUEsUSxDQUFBQSxRO0FBQUFBLEVBQUFBLFEsQ0FBQUEsUTtBQUFBQSxFQUFBQSxRLENBQUFBLFE7QUFBQUEsRUFBQUEsUSxDQUFBQSxRO0dBQUFBLFEsd0JBQUFBLFEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbmltYXRpb24sIFNoYXBlTGF5ZXIsIFJlZmVyZW5jZUlEIH0gZnJvbSBcIi4vYW5pbWF0aW9uXCI7XHJcbmltcG9ydCB7IEpTTW92aW5MYXllciwgTGF5ZXJGYWN0b3J5IH0gZnJvbSAnLi9sYXllcidcclxuaW1wb3J0IHV1aWQgZnJvbSAndXVpZC92NCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKU01vdmluIHtcclxuICAgIHByaXZhdGUgcm9vdDogQW5pbWF0aW9uO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIGZwcyBudW1iZXIgb2YgZnJhbWVzIHBlciBzZWNvbmRcclxuICAgICAqIEBwYXJhbSB3aWR0aCB3aWR0aCBvZiB2aWV3cG9ydCAocHgpXHJcbiAgICAgKiBAcGFyYW0gaGVpZ2h0IGhlaWdodCBvZiB2aWV3cG9ydCAocHgpXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGZwczogbnVtYmVyID0gMzAsIHdpZHRoOiBudW1iZXIgPSA4MDAsIGhlaWdodDogbnVtYmVyID0gNjAwKSB7XHJcbiAgICAgICAgdGhpcy5yb290ID0ge1xyXG4gICAgICAgICAgICBmcjogZnBzLFxyXG4gICAgICAgICAgICB3OiB3aWR0aCxcclxuICAgICAgICAgICAgaDogaGVpZ2h0LFxyXG4gICAgICAgICAgICBkZGQ6IDAsXHJcbiAgICAgICAgICAgIGxheWVyczogW10sXHJcbiAgICAgICAgICAgIGFzc2V0czogW10sXHJcbiAgICAgICAgICAgIGZvbnRzOiB7XHJcbiAgICAgICAgICAgICAgICBsaXN0OiBbXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpcDogMCxcclxuICAgICAgICAgICAgb3A6IDBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gZnBzIG51bWJlciBvZiBmcmFtZXMgcGVyIHNlY29uZFxyXG4gICAgICovXHJcbiAgICBzZXRGcmFtZVJhdGUoZnBzOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnJvb3QuZnIgPSBmcHNcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB3aWR0aCB3aWR0aCBvZiB2aWV3cG9ydCAocHgpXHJcbiAgICAgKiBAcGFyYW0gaGVpZ2h0IGhlaWdodCBvZiB2aWV3cG9ydCAocHgpXHJcbiAgICAgKi9cclxuICAgIHNldFZpZXdwb3J0KHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5yb290LncgPSB3aWR0aFxyXG4gICAgICAgIHRoaXMucm9vdC5oID0gaGVpZ2h0XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGQgYSBzaW1wbGUgZ3JhcGhpY2FsIGxheWVyXHJcbiAgICAgKiBAcGFyYW0gZG9tTGF5ZXJPckFzc2V0SWQgYSBTVkcgZWxlbWVudCBET00gb3IgSlNNb3ZpbkxheWVyIG9yIGFzc2V0IElEIG5lZWRzIHRvIGJlIGluc2VydGVkXHJcbiAgICAgKi9cclxuICAgIGFkZExheWVyKGRvbUxheWVyT3JBc3NldElkOiBTVkdHcmFwaGljc0VsZW1lbnQgfCBKU01vdmluTGF5ZXIgfCBSZWZlcmVuY2VJRCk6IEpTTW92aW5MYXllciB7XHJcbiAgICAgICAgbGV0IGxheWVyOiBKU01vdmluTGF5ZXI7XHJcbiAgICAgICAgaWYgKGRvbUxheWVyT3JBc3NldElkIGluc3RhbmNlb2YgU1ZHR3JhcGhpY3NFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGxheWVyID0gTGF5ZXJGYWN0b3J5LmhpZXJhcmNoeShkb21MYXllck9yQXNzZXRJZCwgdGhpcy5yb290LmFzc2V0cyEsIHRoaXMucm9vdC5mb250cyEpXHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgKGRvbUxheWVyT3JBc3NldElkKSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgbGF5ZXIgPSBMYXllckZhY3RvcnkucmVmKGRvbUxheWVyT3JBc3NldElkKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGF5ZXIgPSBkb21MYXllck9yQXNzZXRJZFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJvb3QubGF5ZXJzIS5zcGxpY2UoMCwgMCwgbGF5ZXIucm9vdClcclxuICAgICAgICByZXR1cm4gbGF5ZXJcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBtYXNrT3JEb20gYSBTVkcgZWxlbWVudCBET00gb3IgSlNNb3ZpbkxheWVyIHRvIGJlIHRoZSBtYXNrXHJcbiAgICAgKiBAcGFyYW0gbGF5ZXJSZWZPckluZGV4IGEgSlNNb3ZpbkxheWVyIG9yIGluZGV4IG9mIGxheWVyIHRvIGJlIHRoZSBtYXNrZWQgbGF5ZXJcclxuICAgICAqIEBwYXJhbSBtYXNrVHlwZSB3aGljaCB0eXBlIG9mIG1hc2sgdG8gdXNlLCB1c2UgYE1hc2tUeXBlLipgIHRvIHNwZWNpZnlcclxuICAgICAqL1xyXG4gICAgYWRkTWFzayhtYXNrT3JEb206IEpTTW92aW5MYXllciB8IFNWR0dyYXBoaWNzRWxlbWVudCwgbGF5ZXJSZWZPckluZGV4OiBudW1iZXIgfCBKU01vdmluTGF5ZXIsIG1hc2tUeXBlOiBNYXNrVHlwZSA9IE1hc2tUeXBlLkFscGhhKSB7XHJcbiAgICAgICAgbGV0IGxheWVyUmVmOiBKU01vdmluTGF5ZXJcclxuICAgICAgICBsZXQgbGF5ZXJJbmRleDogbnVtYmVyXHJcbiAgICAgICAgaWYgKGxheWVyUmVmT3JJbmRleCBpbnN0YW5jZW9mIEpTTW92aW5MYXllcikge1xyXG4gICAgICAgICAgICBsYXllclJlZiA9IGxheWVyUmVmT3JJbmRleFxyXG4gICAgICAgICAgICBsYXllckluZGV4ID0gdGhpcy5yb290LmxheWVycyEuaW5kZXhPZihsYXllclJlZi5yb290KVxyXG4gICAgICAgICAgICBsYXllclJlZi5yb290LnR0ID0gbWFza1R5cGVcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsYXllckluZGV4ID0gbGF5ZXJSZWZPckluZGV4XHJcbiAgICAgICAgICAgIHRoaXMucm9vdC5sYXllcnMhW2xheWVySW5kZXhdLnR0ID0gbWFza1R5cGVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxheWVySW5kZXggPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignR2l2ZW4gbGF5ZXIgaXMgbm90IGEgbWVtYmVyIG9mIHRoaXMgSlNNb3Zpbi4nKVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbWFza0xheWVyOiBKU01vdmluTGF5ZXJcclxuICAgICAgICBpZiAobWFza09yRG9tIGluc3RhbmNlb2YgU1ZHR3JhcGhpY3NFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIG1hc2tMYXllciA9IExheWVyRmFjdG9yeS5oaWVyYXJjaHkobWFza09yRG9tLCB0aGlzLnJvb3QuYXNzZXRzISwgdGhpcy5yb290LmZvbnRzISlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtYXNrTGF5ZXIgPSBtYXNrT3JEb21cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yb290LmxheWVycyEuc3BsaWNlKGxheWVySW5kZXgsIDAsIG1hc2tMYXllci5yb290KVxyXG4gICAgICAgIHJldHVybiBtYXNrTGF5ZXJcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBsYXllclJlZnMgYSBzZXQgb2YgbGF5ZXJzIHRvIGJlIHBhY2tlZCBhcyBhbiBhc3NldFxyXG4gICAgICovXHJcbiAgICBtYWtlQXNzZXQobGF5ZXJSZWZzOiBKU01vdmluTGF5ZXJbXSk6IFJlZmVyZW5jZUlEIHtcclxuICAgICAgICBsYXllclJlZnMuZm9yRWFjaCgobGF5ZXIsIGlubmVySW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGxheWVyLnJvb3QudHQgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGF5ZXJJbmRleCA9IHRoaXMucm9vdC5sYXllcnMhLmluZGV4T2YobGF5ZXIucm9vdClcclxuICAgICAgICAgICAgICAgIGlmIChsYXllckluZGV4ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hc2sgPSB0aGlzLnJvb3QubGF5ZXJzIVtsYXllckluZGV4IC0gMV1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5uZXJJbmRleCA9PSAwIHx8IGxheWVyUmVmc1tpbm5lckluZGV4IC0gMV0ucm9vdCAhPSBtYXNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyUmVmcy5zcGxpY2UoaW5uZXJJbmRleCwgMCwgbmV3IEpTTW92aW5MYXllcihtYXNrIGFzIFNoYXBlTGF5ZXIpKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbGF5ZXJSZWZzID0gbGF5ZXJSZWZzLm1hcCgobGF5ZXIsIGlubmVySW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGxheWVyLFxyXG4gICAgICAgICAgICAgICAgaW5uZXJJbmRleFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBhSW5kZXggPSB0aGlzLnJvb3QubGF5ZXJzIS5pbmRleE9mKGEubGF5ZXIucm9vdClcclxuICAgICAgICAgICAgY29uc3QgYkluZGV4ID0gdGhpcy5yb290LmxheWVycyEuaW5kZXhPZihiLmxheWVyLnJvb3QpXHJcbiAgICAgICAgICAgIHJldHVybiAoYUluZGV4IC0gYkluZGV4KSB8fCAoYS5pbm5lckluZGV4IC0gYi5pbm5lckluZGV4KVxyXG4gICAgICAgIH0pLm1hcChsYXllcldyYXBwZXIgPT4gbGF5ZXJXcmFwcGVyLmxheWVyKVxyXG4gICAgICAgIGxheWVyUmVmcy5mb3JFYWNoKGxheWVyID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbGF5ZXJJbmRleCA9IHRoaXMucm9vdC5sYXllcnMhLmluZGV4T2YobGF5ZXIucm9vdClcclxuICAgICAgICAgICAgaWYgKGxheWVySW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvb3QubGF5ZXJzIS5zcGxpY2UobGF5ZXJJbmRleCwgMSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsYXllci5yb290Lm9wID0gOWU5XHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCByZWZJZCA9IHV1aWQoKVxyXG4gICAgICAgIHRoaXMucm9vdC5hc3NldHMhLnB1c2goe1xyXG4gICAgICAgICAgICBpZDogcmVmSWQsXHJcbiAgICAgICAgICAgIGxheWVyczogbGF5ZXJSZWZzLm1hcChsYXllclJlZiA9PiBsYXllclJlZi5yb290KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHJlZklkXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gbGF5ZXJSZWZPckluZGV4IGEgSlNNb3ZpbkxheWVyIG9yIGluZGV4IG9mIGxheWVyIHRvIHJlbW92ZVxyXG4gICAgICovXHJcbiAgICByZW1vdmVMYXllcihsYXllclJlZk9ySW5kZXg6IG51bWJlciB8IEpTTW92aW5MYXllcikge1xyXG4gICAgICAgIGxldCBsYXllclJlZjogSlNNb3ZpbkxheWVyXHJcbiAgICAgICAgbGV0IGxheWVySW5kZXg6IG51bWJlclxyXG4gICAgICAgIGlmIChsYXllclJlZk9ySW5kZXggaW5zdGFuY2VvZiBKU01vdmluTGF5ZXIpIHtcclxuICAgICAgICAgICAgbGF5ZXJSZWYgPSBsYXllclJlZk9ySW5kZXhcclxuICAgICAgICAgICAgbGF5ZXJJbmRleCA9IHRoaXMucm9vdC5sYXllcnMhLmluZGV4T2YobGF5ZXJSZWYucm9vdClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsYXllckluZGV4ID0gbGF5ZXJSZWZPckluZGV4XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucm9vdC5sYXllcnMhLnNwbGljZShsYXllckluZGV4LCAxKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIGxheWVyUmVmT3JJbmRleCBhIEpTTW92aW5MYXllciBvciBpbmRleCBvZiBtYXNrIG9yIG1hc2tlZCBsYXllciB0byByZW1vdmVcclxuICAgICAqL1xyXG4gICAgcmVtb3ZlTWFzayhsYXllclJlZk9ySW5kZXg6IG51bWJlciB8IEpTTW92aW5MYXllcikge1xyXG4gICAgICAgIGxldCBsYXllclJlZjogSlNNb3ZpbkxheWVyXHJcbiAgICAgICAgbGV0IGxheWVySW5kZXg6IG51bWJlclxyXG4gICAgICAgIGlmIChsYXllclJlZk9ySW5kZXggaW5zdGFuY2VvZiBKU01vdmluTGF5ZXIpIHtcclxuICAgICAgICAgICAgbGF5ZXJSZWYgPSBsYXllclJlZk9ySW5kZXhcclxuICAgICAgICAgICAgbGF5ZXJJbmRleCA9IHRoaXMucm9vdC5sYXllcnMhLmluZGV4T2YobGF5ZXJSZWYucm9vdClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsYXllckluZGV4ID0gbGF5ZXJSZWZPckluZGV4XHJcbiAgICAgICAgICAgIGxheWVyUmVmID0gbmV3IEpTTW92aW5MYXllcih0aGlzLnJvb3QubGF5ZXJzIVtsYXllckluZGV4XSBhcyBTaGFwZUxheWVyKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGF5ZXJSZWYucm9vdC50dCkge1xyXG4gICAgICAgICAgICBsYXllclJlZi5yb290LnR0ID0gMFxyXG4gICAgICAgICAgICB0aGlzLnJvb3QubGF5ZXJzIS5zcGxpY2UobGF5ZXJJbmRleCAtIDEsIDEpXHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJvb3QubGF5ZXJzIVtsYXllckluZGV4ICsgMV0udHQpIHtcclxuICAgICAgICAgICAgdGhpcy5yb290LmxheWVycyFbbGF5ZXJJbmRleCArIDFdLnR0ID0gMFxyXG4gICAgICAgICAgICB0aGlzLnJvb3QubGF5ZXJzIS5zcGxpY2UobGF5ZXJJbmRleCwgMSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBpbnB1dCBsYXllciBpcyBub3QgYSBtYXNrIG9yIGEgbWFza2VkIGxheWVyLicpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY2xlYXIgYWxsIGxheWVyc1xyXG4gICAgICovXHJcbiAgICBjbGVhckxheWVycygpIHtcclxuICAgICAgICB0aGlzLnJvb3QubGF5ZXJzID0gW11cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIG1ha2UgYWxsIGxheWVycyBlbmQgYXQgc2FtZSB0aW1lXHJcbiAgICAgKi9cclxuICAgIHVuaWZvcm0oKSB7XHJcbiAgICAgICAgbGV0IG1heFRpbWUgPSB0aGlzLnJvb3QubGF5ZXJzIS5yZWR1Y2UoKHAsIHYpID0+IHAgPCB2Lm9wISA/IHYub3AhIDogcCwgMClcclxuICAgICAgICB0aGlzLnJvb3Qub3AgPSBtYXhUaW1lXHJcbiAgICAgICAgdGhpcy5yb290LmxheWVycyEuZm9yRWFjaChsYXllciA9PiBsYXllci5vcCA9IG1heFRpbWUpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBleHBvcnQgTG90dGllIGFzIEphdmFTY3JpcHQgT2JqZWN0IFxyXG4gICAgICovXHJcbiAgICB0b09iamVjdCgpIHtcclxuICAgICAgICB0aGlzLnVuaWZvcm0oKVxyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHRoaXMudG9KU09OKCkpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBleHBvcnQgTG90dGllIGFzIEpTT04gdGV4dFxyXG4gICAgICovXHJcbiAgICB0b0pTT04oKSB7XHJcbiAgICAgICAgdGhpcy51bmlmb3JtKClcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5yb290KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBMYXllckZhY3RvcnkgfSBmcm9tICcuL2xheWVyJ1xyXG5leHBvcnQgeyBFYXNpbmdGYWN0b3J5IH0gZnJvbSAnLi9lYXNpbmcnXHJcbmV4cG9ydCB7IFBhdGhNYWtlciB9IGZyb20gJy4vcGF0aCdcclxuZXhwb3J0IGVudW0gTWFza1R5cGUge1xyXG4gICAgQWxwaGEgPSAxLFxyXG4gICAgSW52ZXJ0QWxwaGEgPSAyLFxyXG4gICAgTHVtYSA9IDMsXHJcbiAgICBJbnZlcnRMdW1hID0gNFxyXG59Il19

/***/ }),

/***/ "./node_modules/jsmovin/bin/layer.js":
/*!*******************************************!*\
  !*** ./node_modules/jsmovin/bin/layer.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LayerFactory = exports.JSMovinLayer = void 0;

var _easing = __webpack_require__(/*! ./easing */ "./node_modules/jsmovin/bin/easing.js");

var _render = __webpack_require__(/*! ./render */ "./node_modules/jsmovin/bin/render.js");

var _helper = __webpack_require__(/*! ./helper */ "./node_modules/jsmovin/bin/helper.js");

var _v = _interopRequireDefault(__webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js"));

var _path = __webpack_require__(/*! ./path */ "./node_modules/jsmovin/bin/path.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var JSMovinLayer =
/*#__PURE__*/
function () {
  _createClass(JSMovinLayer, [{
    key: "getDefaultProperty",
    value: function getDefaultProperty(key) {
      switch (key) {
        case 'a':
        case 'p':
          return JSON.parse(JSON.stringify(key == 'a' ? this.anchor : this.position));

        case 's':
          return [100, 100, 100];

        case 'o':
          return 100;

        case 'r':
          return 0;

        case 'tm':
          return {
            s: {
              k: 0
            },
            e: {
              k: 100
            },
            o: {
              k: 0
            }
          };

        default:
          return 0;
      }
    }
  }, {
    key: "convertToStaticProperty",
    value: function convertToStaticProperty(transform, key) {
      if (!transform[key]) {
        transform[key] = {
          a: 0,
          k: this.getDefaultProperty(key)
        };
      }

      if (transform[key].a == 1) {
        var staticValue = transform[key].k[0].s;
        transform[key] = {
          a: 0,
          k: staticValue
        };
      }
    }
  }, {
    key: "convertToAnimatableProperty",
    value: function convertToAnimatableProperty(transform, key) {
      if (!transform[key] || !transform[key].a) {
        if (key == 'a') {
          this.anchor = transform[key] ? transform[key].k : [0, 0, 0];
        }

        if (key == 'p') {
          this.position = transform[key] ? transform[key].k : [0, 0, 0];
        }

        transform[key] = {
          a: 1,
          k: []
        };
      }
    }
  }, {
    key: "addKeyframe",
    value: function addKeyframe(transform, key) {
      var idx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
      var time = arguments.length > 3 ? arguments[3] : undefined;
      var value = arguments.length > 4 ? arguments[4] : undefined;
      var easing = arguments.length > 5 ? arguments[5] : undefined;
      var wrap = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : true;
      var existKeyframe = transform[key].k.filter(function (x) {
        return x.t == time;
      });
      var readyToSet;

      if (existKeyframe.length) {
        readyToSet = existKeyframe[0];
      } else {
        readyToSet = {
          t: time,
          s: this.getDefaultProperty(key)
        };
        var previousKeyframeCount = transform[key].k.reduce(function (p, x) {
          return x.t < time ? p + 1 : p;
        }, 0);
        transform[key].k.splice(previousKeyframeCount, 0, readyToSet);
      }

      if (easing) {
        readyToSet.o = {
          x: easing[0][0],
          y: easing[0][1]
        };
        readyToSet.i = {
          x: easing[1][0],
          y: easing[1][1]
        };
      }

      if (idx >= 0) {
        readyToSet.s[idx] = value;
      } else {
        readyToSet.s = wrap && !(value instanceof Array) ? [value] : value;
      }
    }
  }, {
    key: "findPropertyConfig",
    value: function findPropertyConfig(key) {
      return this.root.shapes[0].it.find(function (shape) {
        return shape.ty == key;
      });
    }
  }, {
    key: "findOrInsertPropertyConfig",
    value: function findOrInsertPropertyConfig(key) {
      var find = this.findPropertyConfig(key);
      if (find) return find;
      var hasTransform = this.findPropertyConfig('tr');

      var config = _objectSpread({
        ty: key
      }, this.getDefaultProperty(key));

      if (hasTransform) {
        var groupShapes = this.root.shapes[0].it;
        groupShapes.splice(groupShapes.length - 1, 0, config);
      } else {
        this.root.shapes[0].it.push(config);
      }

      return config;
    }
  }, {
    key: "commonPropertyMapping",
    value: function commonPropertyMapping(key) {
      var base, k, index;

      switch (key) {
        case 'scaleX':
          base = this.root.ks;
          k = 's';
          index = 0;
          break;

        case 'scaleY':
          base = this.root.ks;
          k = 's';
          index = 1;
          break;

        case 'anchorX':
          base = this.root.ks;
          k = 'a';
          index = 0;
          break;

        case 'anchorY':
          base = this.root.ks;
          k = 'a';
          index = 1;
          break;

        case 'x':
          base = this.root.ks;
          k = 'p';
          index = 0;
          break;

        case 'y':
          base = this.root.ks;
          k = 'p';
          index = 1;
          break;

        case 'rotate':
          base = this.root.ks;
          k = 'r';
          index = -1;
          break;

        case 'opacity':
          base = this.root.ks;
          k = 'o';
          index = -1;
          break;

        case 'trimStart':
          base = this.findOrInsertPropertyConfig('tm');
          k = 's';
          index = -1;
          break;

        case 'trimEnd':
          base = this.findOrInsertPropertyConfig('tm');
          k = 'e';
          index = -1;
          break;

        case 'trimOffset':
          base = this.findOrInsertPropertyConfig('tm');
          k = 'o';
          index = -1;
          break;

        case 'fillColor':
          base = this.findPropertyConfig('fl');
          k = 'c';
          index = -1;
          break;

        case 'strokeColor':
          base = this.findPropertyConfig('st');
          k = 'c';
          index = -1;
          break;

        case 'strokeWidth':
          base = this.findPropertyConfig('st');
          k = 'w';
          index = -1;
          break;

        case 'shape':
          base = this.findPropertyConfig('sh');
          k = 'ks';
          index = -1;
          break;

        case 'fillOpacity':
          base = this.findPropertyConfig('fl');
          k = 'o';
          index = -1;
          break;

        case 'strokeOpacity':
          base = this.findPropertyConfig('st');
          k = 'o';
          index = -1;
          break;
      }

      return [base, k, index];
    }
  }, {
    key: "updateTimeRange",
    value: function updateTimeRange() {
      this.root.op = Math.max.apply(Math, _toConsumableArray(Object.values(this.timeRange)).concat([1]));
    }
  }]);

  function JSMovinLayer(ref) {
    _classCallCheck(this, JSMovinLayer);

    _defineProperty(this, "root", void 0);

    _defineProperty(this, "anchor", void 0);

    _defineProperty(this, "position", void 0);

    _defineProperty(this, "timeRange", {});

    this.root = ref;
    this.anchor = [0, 0, 0];
    this.position = [0, 0, 0];
  }
  /**
   * 
   * @param key the name of property to be set
   * @param value the value to be set
   */


  _createClass(JSMovinLayer, [{
    key: "setStaticProperty",
    value: function setStaticProperty(key, value) {
      this.timeRange[key] = 1;
      this.updateTimeRange();

      if (value instanceof _path.PathMaker) {
        value.uniform();
        value = value.path;
      }

      var base, k, index;

      var _this$commonPropertyM = this.commonPropertyMapping(key);

      var _this$commonPropertyM2 = _slicedToArray(_this$commonPropertyM, 3);

      base = _this$commonPropertyM2[0];
      k = _this$commonPropertyM2[1];
      index = _this$commonPropertyM2[2];

      if (!k || index === undefined) {
        switch (key) {
          case 'text':
            if (this.root.ty == 5) {
              var doc = this.root.t.d;
              doc.k = [doc.k[0]];
              doc.k[0].t = 0;
              doc.k[0].s.t = value;
            }

            break;

          default:
            console.error(key, value);
            throw new Error('Not a valid key.');
        }
      }

      if (base && k && index !== undefined) {
        this.convertToStaticProperty(base, k);
        if (index >= 0) base[k].k[index] = value;else base[k].k = value;
      }
    }
    /**
     * 
     * @param key the name of property to be set
     * @param startFrame frame number to start the animation
     * @param endFrame frame number to end the animation
     * @param startValue value to be set in start of animation
     * @param endValue value to be set in end of animation
     * @param easing easing function, default is linear
     */

  }, {
    key: "setAnimatableProperty",
    value: function setAnimatableProperty(key, startFrame, endFrame, startValue, endValue, easing) {
      if (endFrame <= startFrame) {
        throw new Error('End frame should be larger than start frame.');
      }

      this.timeRange[key] = endFrame + 1;
      this.updateTimeRange();

      if (!easing) {
        easing = _easing.EasingFactory.linear();
      }

      if (startValue instanceof _path.PathMaker || endValue instanceof _path.PathMaker) {
        [startValue, endValue].forEach(function (v) {
          return v instanceof _path.PathMaker && v.uniform();
        });

        if (startValue instanceof _path.PathMaker && endValue instanceof _path.PathMaker) {
          var startLineCount = startValue.path.v.length - 1;
          var endLineCount = endValue.path.v.length - 1;

          if (!(startLineCount <= 0 && endLineCount <= 0)) {
            if (Math.min(startLineCount, endLineCount) <= 0 && Math.max(startLineCount, endLineCount) > 0) {
              var needCopy = startLineCount <= 0 ? startValue : endValue;
              var needLength = Math.max(startLineCount, endLineCount);
              ['i', 'o', 'v'].forEach(function (key) {
                needCopy.path[key] = Array(needLength).fill(needCopy.path[key].length ? needCopy.path[key][0] : [0, 0]);
              });
            } else {
              var commonMultiple = (0, _helper.leastCommonMultiple)(startLineCount, endLineCount);
              startValue.upsample(Math.round(commonMultiple / startLineCount));
              endValue.upsample(Math.round(commonMultiple / endLineCount));
            }
          }
        }

        var _map = [startValue, endValue].map(function (v) {
          return v instanceof _path.PathMaker ? v.path : v;
        });

        var _map2 = _slicedToArray(_map, 2);

        startValue = _map2[0];
        endValue = _map2[1];
      }

      var base,
          k,
          index,
          wrap = true;

      var _this$commonPropertyM3 = this.commonPropertyMapping(key);

      var _this$commonPropertyM4 = _slicedToArray(_this$commonPropertyM3, 3);

      base = _this$commonPropertyM4[0];
      k = _this$commonPropertyM4[1];
      index = _this$commonPropertyM4[2];

      if (!k || index === undefined) {
        switch (key) {
          case 'text':
            if (this.root.ty == 5) {
              base = this.root.t;
              var textProp = base.d.k[0].s;
              var tmpStartValue = JSON.parse(JSON.stringify(textProp));
              var tmpEndValue = JSON.parse(JSON.stringify(textProp));
              tmpStartValue.t = startValue;
              tmpEndValue.t = endValue;
              startValue = tmpStartValue;
              endValue = tmpEndValue;
              k = 'd';
              index = -1;
              wrap = false;
            }

            break;

          default:
            console.error(key, startFrame, endFrame, startValue, endValue, easing);
            throw new Error('Not a valid key.');
        }
      }

      if (base && k && index !== undefined) {
        this.convertToAnimatableProperty(base, k);
        this.addKeyframe(base, k, index, startFrame, startValue, easing, wrap);
        this.addKeyframe(base, k, index, endFrame, endValue, undefined, wrap);
      }
    }
  }]);

  return JSMovinLayer;
}();

exports.JSMovinLayer = JSMovinLayer;

var LayerFactory =
/*#__PURE__*/
function () {
  function LayerFactory() {
    _classCallCheck(this, LayerFactory);
  }

  _createClass(LayerFactory, null, [{
    key: "generateTransform",
    value: function generateTransform(coordinate) {
      return {
        o: {
          a: 0,
          k: 100
        },
        r: {
          a: 0,
          k: 0
        },
        p: {
          a: 0,
          k: [coordinate[0], coordinate[1], 0]
        },
        a: {
          a: 0,
          k: [0, 0, 0]
        },
        s: {
          a: 0,
          k: [100, 100, 100]
        }
      };
    }
    /**
     * create the bounding box of svg element
     * @param dom svg element needs to calculate the bounding box
     */

  }, {
    key: "boundingBox",
    value: function boundingBox(dom) {
      var boundingBox = (0, _helper.getBoundingBox)(dom).map(function (v, i) {
        return i < 2 ? v - 1 : v + 1;
      });
      return this.rect.apply(this, _toConsumableArray(boundingBox));
    }
    /**
     * create the same shape of svg path
     * @param dom svg path element represent the shape
     */

  }, {
    key: "shape",
    value: function shape(dom) {
      var coordinate = (0, _helper.getBoundingBox)(dom);
      var layer = {
        ty: 4,
        ddd: 0,
        sr: 1,
        ao: 0,
        ks: this.generateTransform(coordinate),
        ip: 0,
        op: 1,
        st: 0,
        bm: 0,
        shapes: (0, _render.render)(dom)
      };
      return new JSMovinLayer(layer);
    }
    /**
     * create a rectangle
     * @param left left of rect
     * @param top top of rect
     * @param width width of rect
     * @param height height of rect
     */

  }, {
    key: "rect",
    value: function rect(left, top, width, height) {
      var layer = {
        ty: 4,
        ddd: 0,
        sr: 1,
        ao: 0,
        ks: this.generateTransform([left, top, width, height]),
        ip: 0,
        op: 1,
        st: 0,
        bm: 0,
        shapes: [(0, _render.renderPlainGlyph)('rect', [width, height])]
      };
      return new JSMovinLayer(layer);
    }
    /**
     * create a ellipse
     * @param cx x center of ellipse
     * @param cy y center of ellipse
     * @param rx x radius of ellipse
     * @param ry y radius of ellipse
     */

  }, {
    key: "ellipse",
    value: function ellipse(cx, cy, rx, ry) {
      var layer = {
        ty: 4,
        ddd: 0,
        sr: 1,
        ao: 0,
        ks: this.generateTransform([cx - rx, cy - ry, 2 * rx, 2 * ry]),
        ip: 0,
        op: 1,
        st: 0,
        bm: 0,
        shapes: [(0, _render.renderPlainGlyph)('ellipse', [rx, ry])]
      };
      return new JSMovinLayer(layer);
    }
    /**
     * make a layer by asset ID
     * @param id asset reference ID
     */

  }, {
    key: "ref",
    value: function ref(id) {
      var layer = new JSMovinLayer({
        ty: 0,
        ddd: 0,
        sr: 1,
        ao: 0,
        ks: this.generateTransform([0, 0, 0, 0]),
        ip: 0,
        op: 1,
        st: 0,
        bm: 0,
        w: 9e9,
        h: 9e9,
        refId: id
      });
      return layer;
    }
    /**
     * make a complex layer by an arbitrary svg element
     * @param dom svg element need to be parsed
     * @param assetList a list contains image/layer asset
     * @param fontList a list contains font asset
     */

  }, {
    key: "hierarchy",
    value: function hierarchy(dom, assetList, fontList) {
      var _this = this;

      var coordinate = (0, _helper.getBoundingBox)(dom);
      var domType;

      if (dom instanceof SVGTextElement) {
        domType = 5;
      } else if (dom instanceof SVGImageElement) {
        domType = 2;
      } else if (dom instanceof SVGGElement) {
        domType = 0;
      } else {
        domType = 4;
      }

      var layer = {
        ty: domType,
        ddd: 0,
        sr: 1,
        ao: 0,
        ks: this.generateTransform(domType == 0 ? [0, 0, 0, 0] : coordinate),
        ip: 0,
        op: 1,
        st: 0,
        bm: 0
      };

      switch (domType) {
        case 0:
          var domLeaves = (0, _helper.getLeafNodes)(dom);

          if (domLeaves.filter(function (dom) {
            return dom instanceof SVGTextElement || dom instanceof SVGImageElement;
          }).length) {
            var precompLayer = layer;
            var preCompAsset = [];
            var preCompRefId = (0, _v["default"])();
            domLeaves.forEach(function (d) {
              if (d instanceof SVGGraphicsElement && !(d instanceof SVGGElement)) {
                preCompAsset.unshift(_this.hierarchy(d, assetList, fontList));
              }
            });
            preCompAsset.forEach(function (layer) {
              layer.root.op = 9e9;
            });
            precompLayer.w = coordinate[0] + coordinate[2] + 1;
            precompLayer.h = coordinate[1] + coordinate[3] + 1;
            precompLayer.refId = preCompRefId;
            assetList.push({
              id: preCompRefId,
              layers: preCompAsset.map(function (layer) {
                return layer.root;
              })
            });
          } else {
            var _shapeLayer = layer;
            _shapeLayer.ty = 4;
            _shapeLayer.ks = this.generateTransform(coordinate);
            _shapeLayer.shapes = (0, _render.render)(dom);
          }

          break;

        case 2:
          var imageLayer = layer;

          var _renderImage = (0, _render.renderImage)(dom, assetList),
              _renderImage2 = _slicedToArray(_renderImage, 2),
              imageRefId = _renderImage2[0],
              imageAsset = _renderImage2[1];

          imageLayer.refId = imageRefId;
          if (!assetList.filter(function (a) {
            return a.id == imageRefId;
          }).length) assetList.push(imageAsset);
          break;

        case 4:
          var shapeLayer = layer;
          shapeLayer.shapes = (0, _render.render)(dom);
          break;

        case 5:
          var textLayer = layer; // move textLayer's position to text-anchor-related

          var baseLineHeight = (0, _helper.getBaselineHeight)(dom);
          var textAnchor = (0, _helper.encodeTextAnchor)(getComputedStyle(dom).textAnchor);
          var textAnchorWeight = [0, 1, 0.5][textAnchor];
          textLayer.ks.p.k = [coordinate[0] + coordinate[2] * textAnchorWeight, coordinate[1] + coordinate[3] - baseLineHeight, 0];
          textLayer.ks.o.k = ~~(parseFloat(getComputedStyle(dom).fillOpacity || '1') * 100);

          var _renderText = (0, _render.renderText)(dom, fontList),
              _renderText2 = _slicedToArray(_renderText, 2),
              textData = _renderText2[0],
              font = _renderText2[1];

          textLayer.t = textData;
          if (!fontList.list.filter(function (f) {
            return f.fName == font.fName;
          }).length) fontList.list.push(font);
          break;
      }

      var movinLayer = new JSMovinLayer(layer);
      return movinLayer;
    }
  }]);

  return LayerFactory;
}();

exports.LayerFactory = LayerFactory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sYXllci50cyJdLCJuYW1lcyI6WyJKU01vdmluTGF5ZXIiLCJrZXkiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJhbmNob3IiLCJwb3NpdGlvbiIsInMiLCJrIiwiZSIsIm8iLCJ0cmFuc2Zvcm0iLCJhIiwiZ2V0RGVmYXVsdFByb3BlcnR5Iiwic3RhdGljVmFsdWUiLCJpZHgiLCJ0aW1lIiwidmFsdWUiLCJlYXNpbmciLCJ3cmFwIiwiZXhpc3RLZXlmcmFtZSIsImZpbHRlciIsIngiLCJ0IiwicmVhZHlUb1NldCIsImxlbmd0aCIsInByZXZpb3VzS2V5ZnJhbWVDb3VudCIsInJlZHVjZSIsInAiLCJzcGxpY2UiLCJ5IiwiaSIsIkFycmF5Iiwicm9vdCIsInNoYXBlcyIsIml0IiwiZmluZCIsInNoYXBlIiwidHkiLCJmaW5kUHJvcGVydHlDb25maWciLCJoYXNUcmFuc2Zvcm0iLCJjb25maWciLCJncm91cFNoYXBlcyIsInB1c2giLCJiYXNlIiwiaW5kZXgiLCJrcyIsImZpbmRPckluc2VydFByb3BlcnR5Q29uZmlnIiwib3AiLCJNYXRoIiwibWF4IiwiT2JqZWN0IiwidmFsdWVzIiwidGltZVJhbmdlIiwicmVmIiwidXBkYXRlVGltZVJhbmdlIiwiUGF0aE1ha2VyIiwidW5pZm9ybSIsInBhdGgiLCJjb21tb25Qcm9wZXJ0eU1hcHBpbmciLCJ1bmRlZmluZWQiLCJkb2MiLCJkIiwiY29uc29sZSIsImVycm9yIiwiRXJyb3IiLCJjb252ZXJ0VG9TdGF0aWNQcm9wZXJ0eSIsInN0YXJ0RnJhbWUiLCJlbmRGcmFtZSIsInN0YXJ0VmFsdWUiLCJlbmRWYWx1ZSIsIkVhc2luZ0ZhY3RvcnkiLCJsaW5lYXIiLCJmb3JFYWNoIiwidiIsInN0YXJ0TGluZUNvdW50IiwiZW5kTGluZUNvdW50IiwibWluIiwibmVlZENvcHkiLCJuZWVkTGVuZ3RoIiwiZmlsbCIsImNvbW1vbk11bHRpcGxlIiwidXBzYW1wbGUiLCJyb3VuZCIsIm1hcCIsInRleHRQcm9wIiwidG1wU3RhcnRWYWx1ZSIsInRtcEVuZFZhbHVlIiwiY29udmVydFRvQW5pbWF0YWJsZVByb3BlcnR5IiwiYWRkS2V5ZnJhbWUiLCJMYXllckZhY3RvcnkiLCJjb29yZGluYXRlIiwiciIsImRvbSIsImJvdW5kaW5nQm94IiwicmVjdCIsImxheWVyIiwiZGRkIiwic3IiLCJhbyIsImdlbmVyYXRlVHJhbnNmb3JtIiwiaXAiLCJzdCIsImJtIiwibGVmdCIsInRvcCIsIndpZHRoIiwiaGVpZ2h0IiwiY3giLCJjeSIsInJ4IiwicnkiLCJpZCIsInciLCJoIiwicmVmSWQiLCJhc3NldExpc3QiLCJmb250TGlzdCIsImRvbVR5cGUiLCJTVkdUZXh0RWxlbWVudCIsIlNWR0ltYWdlRWxlbWVudCIsIlNWR0dFbGVtZW50IiwiZG9tTGVhdmVzIiwicHJlY29tcExheWVyIiwicHJlQ29tcEFzc2V0IiwicHJlQ29tcFJlZklkIiwiU1ZHR3JhcGhpY3NFbGVtZW50IiwidW5zaGlmdCIsImhpZXJhcmNoeSIsImxheWVycyIsInNoYXBlTGF5ZXIiLCJpbWFnZUxheWVyIiwiaW1hZ2VSZWZJZCIsImltYWdlQXNzZXQiLCJ0ZXh0TGF5ZXIiLCJiYXNlTGluZUhlaWdodCIsInRleHRBbmNob3IiLCJnZXRDb21wdXRlZFN0eWxlIiwidGV4dEFuY2hvcldlaWdodCIsInBhcnNlRmxvYXQiLCJmaWxsT3BhY2l0eSIsInRleHREYXRhIiwiZm9udCIsImxpc3QiLCJmIiwiZk5hbWUiLCJtb3ZpbkxheWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSWFBLFk7Ozs7O3VDQUtrQkMsRyxFQUFhO0FBQ3BDLGNBQVFBLEdBQVI7QUFDSSxhQUFLLEdBQUw7QUFDQSxhQUFLLEdBQUw7QUFDSSxpQkFBT0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsU0FBTCxDQUFlSCxHQUFHLElBQUksR0FBUCxHQUFhLEtB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cmFuc2Zvcm0sIEFzc2V0cywgRm9udHMsIEdyb3VwU2hhcGUsIFByZUNvbXBMYXllciwgUmVmZXJlbmNlSUQgfSBmcm9tICcuL2FuaW1hdGlvbidcclxuaW1wb3J0IHsgRWFzaW5nRnVuY3Rpb24sIEVhc2luZ0ZhY3RvcnkgfSBmcm9tICcuL2Vhc2luZydcclxuaW1wb3J0IHsgcmVuZGVyVGV4dCwgcmVuZGVyLCByZW5kZXJJbWFnZSwgcmVuZGVyUGxhaW5HbHlwaCB9IGZyb20gJy4vcmVuZGVyJztcclxuaW1wb3J0IHsgZ2V0Qm91bmRpbmdCb3gsIGdldExlYWZOb2RlcywgZ2V0QmFzZWxpbmVIZWlnaHQsIGVuY29kZVRleHRBbmNob3IsIGxlYXN0Q29tbW9uTXVsdGlwbGUgfSBmcm9tICcuL2hlbHBlcidcclxuaW1wb3J0IHV1aWQgZnJvbSAndXVpZC92NCc7XHJcbmltcG9ydCB7IFBhdGhNYWtlciB9IGZyb20gJy4vcGF0aCc7XHJcblxyXG50eXBlIFNldGFibGVLZXlzID0gXCJzY2FsZVhcIiB8IFwic2NhbGVZXCIgfCBcImFuY2hvclhcIiB8IFwiYW5jaG9yWVwiIHwgXCJ4XCIgfCBcInlcIiB8IFwicm90YXRlXCIgfCBcIm9wYWNpdHlcIiB8ICdzaGFwZScgfCAnZmlsbENvbG9yJyB8ICd0cmltU3RhcnQnIHwgJ3RyaW1FbmQnIHwgJ3RyaW1PZmZzZXQnIHwgJ3N0cm9rZUNvbG9yJyB8ICdzdHJva2VXaWR0aCcgfCAndGV4dCcgfCAnZmlsbE9wYWNpdHknIHwgJ3N0cm9rZU9wYWNpdHknXHJcblxyXG5leHBvcnQgY2xhc3MgSlNNb3ZpbkxheWVyIHtcclxuICAgIHB1YmxpYyByZWFkb25seSByb290OiBTaGFwZUxheWVyIHwgVGV4dExheWVyIHwgSW1hZ2VMYXllciB8IFByZUNvbXBMYXllcjtcclxuICAgIHByaXZhdGUgYW5jaG9yOiBudW1iZXJbXVxyXG4gICAgcHJpdmF0ZSBwb3NpdGlvbjogbnVtYmVyW11cclxuICAgIHByaXZhdGUgdGltZVJhbmdlOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge31cclxuICAgIHByaXZhdGUgZ2V0RGVmYXVsdFByb3BlcnR5KGtleTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3dpdGNoIChrZXkpIHtcclxuICAgICAgICAgICAgY2FzZSAnYSc6XHJcbiAgICAgICAgICAgIGNhc2UgJ3AnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoa2V5ID09ICdhJyA/IHRoaXMuYW5jaG9yIDogdGhpcy5wb3NpdGlvbikpXHJcbiAgICAgICAgICAgIGNhc2UgJ3MnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsxMDAsIDEwMCwgMTAwXVxyXG4gICAgICAgICAgICBjYXNlICdvJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAxMDBcclxuICAgICAgICAgICAgY2FzZSAncic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMFxyXG4gICAgICAgICAgICBjYXNlICd0bSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgazogMFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrOiAxMDBcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG86IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgazogMFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBjb252ZXJ0VG9TdGF0aWNQcm9wZXJ0eSh0cmFuc2Zvcm06IGFueSwga2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoIXRyYW5zZm9ybVtrZXldKSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybVtrZXldID0ge1xyXG4gICAgICAgICAgICAgICAgYTogMCxcclxuICAgICAgICAgICAgICAgIGs6IHRoaXMuZ2V0RGVmYXVsdFByb3BlcnR5KGtleSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHJhbnNmb3JtW2tleV0uYSA9PSAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXRpY1ZhbHVlID0gdHJhbnNmb3JtW2tleV0ua1swXS5zXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybVtrZXldID0ge1xyXG4gICAgICAgICAgICAgICAgYTogMCxcclxuICAgICAgICAgICAgICAgIGs6IHN0YXRpY1ZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGNvbnZlcnRUb0FuaW1hdGFibGVQcm9wZXJ0eSh0cmFuc2Zvcm06IGFueSwga2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoIXRyYW5zZm9ybVtrZXldIHx8ICF0cmFuc2Zvcm1ba2V5XS5hKSB7XHJcbiAgICAgICAgICAgIGlmIChrZXkgPT0gJ2EnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuY2hvciA9IHRyYW5zZm9ybVtrZXldID8gdHJhbnNmb3JtW2tleV0uayA6IFswLCAwLCAwXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChrZXkgPT0gJ3AnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gdHJhbnNmb3JtW2tleV0gPyB0cmFuc2Zvcm1ba2V5XS5rIDogWzAsIDAsIDBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHJhbnNmb3JtW2tleV0gPSB7XHJcbiAgICAgICAgICAgICAgICBhOiAxLFxyXG4gICAgICAgICAgICAgICAgazogW11cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgYWRkS2V5ZnJhbWUodHJhbnNmb3JtOiBhbnksIGtleTogc3RyaW5nLCBpZHg6IG51bWJlciA9IC0xLCB0aW1lOiBudW1iZXIsIHZhbHVlOiBBcnJheTxhbnk+LCBlYXNpbmc/OiBFYXNpbmdGdW5jdGlvbiwgd3JhcDogYm9vbGVhbiA9IHRydWUpIHtcclxuICAgICAgICBjb25zdCBleGlzdEtleWZyYW1lID0gdHJhbnNmb3JtW2tleV0uay5maWx0ZXIoKHg6IGFueSkgPT4geC50ID09IHRpbWUpIGFzIGFueVtdXHJcbiAgICAgICAgbGV0IHJlYWR5VG9TZXQ7XHJcbiAgICAgICAgaWYgKGV4aXN0S2V5ZnJhbWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJlYWR5VG9TZXQgPSBleGlzdEtleWZyYW1lWzBdXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVhZHlUb1NldCA9IHtcclxuICAgICAgICAgICAgICAgIHQ6IHRpbWUsXHJcbiAgICAgICAgICAgICAgICBzOiB0aGlzLmdldERlZmF1bHRQcm9wZXJ0eShrZXkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNLZXlmcmFtZUNvdW50ID0gdHJhbnNmb3JtW2tleV0uay5yZWR1Y2UoKHA6IG51bWJlciwgeDogYW55KSA9PiB4LnQgPCB0aW1lID8gcCArIDEgOiBwLCAwKVxyXG4gICAgICAgICAgICB0cmFuc2Zvcm1ba2V5XS5rLnNwbGljZShwcmV2aW91c0tleWZyYW1lQ291bnQsIDAsIHJlYWR5VG9TZXQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlYXNpbmcpIHtcclxuICAgICAgICAgICAgcmVhZHlUb1NldC5vID0ge1xyXG4gICAgICAgICAgICAgICAgeDogZWFzaW5nWzBdWzBdLFxyXG4gICAgICAgICAgICAgICAgeTogZWFzaW5nWzBdWzFdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVhZHlUb1NldC5pID0ge1xyXG4gICAgICAgICAgICAgICAgeDogZWFzaW5nWzFdWzBdLFxyXG4gICAgICAgICAgICAgICAgeTogZWFzaW5nWzFdWzFdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlkeCA+PSAwKSB7XHJcbiAgICAgICAgICAgIHJlYWR5VG9TZXQuc1tpZHhdID0gdmFsdWVcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZWFkeVRvU2V0LnMgPSB3cmFwICYmICEodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkgPyBbdmFsdWVdIDogdmFsdWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGZpbmRQcm9wZXJ0eUNvbmZpZyhrZXk6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiAoKHRoaXMucm9vdCBhcyBTaGFwZUxheWVyKS5zaGFwZXMhWzBdIGFzIEdyb3VwU2hhcGUpLml0IS5maW5kKHNoYXBlID0+XHJcbiAgICAgICAgICAgIHNoYXBlLnR5ID09IGtleVxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIHByaXZhdGUgZmluZE9ySW5zZXJ0UHJvcGVydHlDb25maWcoa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBmaW5kID0gdGhpcy5maW5kUHJvcGVydHlDb25maWcoa2V5KVxyXG4gICAgICAgIGlmIChmaW5kKSByZXR1cm4gZmluZFxyXG4gICAgICAgIGNvbnN0IGhhc1RyYW5zZm9ybSA9IHRoaXMuZmluZFByb3BlcnR5Q29uZmlnKCd0cicpXHJcbiAgICAgICAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgICAgICAgICB0eToga2V5LFxyXG4gICAgICAgICAgICAuLi50aGlzLmdldERlZmF1bHRQcm9wZXJ0eShrZXkpIGFzIG9iamVjdFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaGFzVHJhbnNmb3JtKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwU2hhcGVzID0gKCh0aGlzLnJvb3QgYXMgU2hhcGVMYXllcikuc2hhcGVzIVswXSBhcyBHcm91cFNoYXBlKS5pdCFcclxuICAgICAgICAgICAgZ3JvdXBTaGFwZXMuc3BsaWNlKGdyb3VwU2hhcGVzLmxlbmd0aCAtIDEsIDAsIGNvbmZpZylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAoKHRoaXMucm9vdCBhcyBTaGFwZUxheWVyKS5zaGFwZXMhWzBdIGFzIEdyb3VwU2hhcGUpLml0IS5wdXNoKGNvbmZpZylcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvbmZpZ1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBjb21tb25Qcm9wZXJ0eU1hcHBpbmcoa2V5OiBTZXRhYmxlS2V5cyk6IFthbnksIHN0cmluZyB8IHVuZGVmaW5lZCwgbnVtYmVyIHwgdW5kZWZpbmVkXSB7XHJcbiAgICAgICAgbGV0IGJhc2U6IGFueSwgazogc3RyaW5nIHwgdW5kZWZpbmVkLCBpbmRleDogbnVtYmVyIHwgdW5kZWZpbmVkXHJcbiAgICAgICAgc3dpdGNoIChrZXkpIHtcclxuICAgICAgICAgICAgY2FzZSAnc2NhbGVYJzpcclxuICAgICAgICAgICAgICAgIGJhc2UgPSB0aGlzLnJvb3Qua3NcclxuICAgICAgICAgICAgICAgIGsgPSAncydcclxuICAgICAgICAgICAgICAgIGluZGV4ID0gMFxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSAnc2NhbGVZJzpcclxuICAgICAgICAgICAgICAgIGJhc2UgPSB0aGlzLnJvb3Qua3NcclxuICAgICAgICAgICAgICAgIGsgPSAncydcclxuICAgICAgICAgICAgICAgIGluZGV4ID0gMVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSAnYW5jaG9yWCc6XHJcbiAgICAgICAgICAgICAgICBiYXNlID0gdGhpcy5yb290LmtzXHJcbiAgICAgICAgICAgICAgICBrID0gJ2EnXHJcbiAgICAgICAgICAgICAgICBpbmRleCA9IDBcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgJ2FuY2hvclknOlxyXG4gICAgICAgICAgICAgICAgYmFzZSA9IHRoaXMucm9vdC5rc1xyXG4gICAgICAgICAgICAgICAgayA9ICdhJ1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSAxXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlICd4JzpcclxuICAgICAgICAgICAgICAgIGJhc2UgPSB0aGlzLnJvb3Qua3NcclxuICAgICAgICAgICAgICAgIGsgPSAncCdcclxuICAgICAgICAgICAgICAgIGluZGV4ID0gMFxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSAneSc6XHJcbiAgICAgICAgICAgICAgICBiYXNlID0gdGhpcy5yb290LmtzXHJcbiAgICAgICAgICAgICAgICBrID0gJ3AnXHJcbiAgICAgICAgICAgICAgICBpbmRleCA9IDFcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgJ3JvdGF0ZSc6XHJcbiAgICAgICAgICAgICAgICBiYXNlID0gdGhpcy5yb290LmtzXHJcbiAgICAgICAgICAgICAgICBrID0gJ3InXHJcbiAgICAgICAgICAgICAgICBpbmRleCA9IC0xXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlICdvcGFjaXR5JzpcclxuICAgICAgICAgICAgICAgIGJhc2UgPSB0aGlzLnJvb3Qua3NcclxuICAgICAgICAgICAgICAgIGsgPSAnbydcclxuICAgICAgICAgICAgICAgIGluZGV4ID0gLTFcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgJ3RyaW1TdGFydCc6XHJcbiAgICAgICAgICAgICAgICBiYXNlID0gdGhpcy5maW5kT3JJbnNlcnRQcm9wZXJ0eUNvbmZpZygndG0nKVxyXG4gICAgICAgICAgICAgICAgayA9ICdzJ1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSAtMVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSAndHJpbUVuZCc6XHJcbiAgICAgICAgICAgICAgICBiYXNlID0gdGhpcy5maW5kT3JJbnNlcnRQcm9wZXJ0eUNvbmZpZygndG0nKVxyXG4gICAgICAgICAgICAgICAgayA9ICdlJ1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSAtMVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSAndHJpbU9mZnNldCc6XHJcbiAgICAgICAgICAgICAgICBiYXNlID0gdGhpcy5maW5kT3JJbnNlcnRQcm9wZXJ0eUNvbmZpZygndG0nKVxyXG4gICAgICAgICAgICAgICAgayA9ICdvJ1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSAtMVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSAnZmlsbENvbG9yJzpcclxuICAgICAgICAgICAgICAgIGJhc2UgPSB0aGlzLmZpbmRQcm9wZXJ0eUNvbmZpZygnZmwnKVxyXG4gICAgICAgICAgICAgICAgayA9ICdjJ1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSAtMVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSAnc3Ryb2tlQ29sb3InOlxyXG4gICAgICAgICAgICAgICAgYmFzZSA9IHRoaXMuZmluZFByb3BlcnR5Q29uZmlnKCdzdCcpXHJcbiAgICAgICAgICAgICAgICBrID0gJ2MnXHJcbiAgICAgICAgICAgICAgICBpbmRleCA9IC0xXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlICdzdHJva2VXaWR0aCc6XHJcbiAgICAgICAgICAgICAgICBiYXNlID0gdGhpcy5maW5kUHJvcGVydHlDb25maWcoJ3N0JylcclxuICAgICAgICAgICAgICAgIGsgPSAndydcclxuICAgICAgICAgICAgICAgIGluZGV4ID0gLTFcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgJ3NoYXBlJzpcclxuICAgICAgICAgICAgICAgIGJhc2UgPSB0aGlzLmZpbmRQcm9wZXJ0eUNvbmZpZygnc2gnKVxyXG4gICAgICAgICAgICAgICAgayA9ICdrcydcclxuICAgICAgICAgICAgICAgIGluZGV4ID0gLTFcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgJ2ZpbGxPcGFjaXR5JzpcclxuICAgICAgICAgICAgICAgIGJhc2UgPSB0aGlzLmZpbmRQcm9wZXJ0eUNvbmZpZygnZmwnKVxyXG4gICAgICAgICAgICAgICAgayA9ICdvJ1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSAtMVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSAnc3Ryb2tlT3BhY2l0eSc6XHJcbiAgICAgICAgICAgICAgICBiYXNlID0gdGhpcy5maW5kUHJvcGVydHlDb25maWcoJ3N0JylcclxuICAgICAgICAgICAgICAgIGsgPSAnbydcclxuICAgICAgICAgICAgICAgIGluZGV4ID0gLTFcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBbYmFzZSwgaywgaW5kZXhdXHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHVwZGF0ZVRpbWVSYW5nZSgpIHtcclxuICAgICAgICB0aGlzLnJvb3Qub3AgPSBNYXRoLm1heCguLi5PYmplY3QudmFsdWVzKHRoaXMudGltZVJhbmdlKSwgMSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihyZWY6IFNoYXBlTGF5ZXIgfCBUZXh0TGF5ZXIgfCBJbWFnZUxheWVyIHwgUHJlQ29tcExheWVyKSB7XHJcbiAgICAgICAgdGhpcy5yb290ID0gcmVmXHJcbiAgICAgICAgdGhpcy5hbmNob3IgPSBbMCwgMCwgMF1cclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gWzAsIDAsIDBdXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBrZXkgdGhlIG5hbWUgb2YgcHJvcGVydHkgdG8gYmUgc2V0XHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgdGhlIHZhbHVlIHRvIGJlIHNldFxyXG4gICAgICovXHJcbiAgICBzZXRTdGF0aWNQcm9wZXJ0eShrZXk6IFNldGFibGVLZXlzLCB2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy50aW1lUmFuZ2Vba2V5XSA9IDFcclxuICAgICAgICB0aGlzLnVwZGF0ZVRpbWVSYW5nZSgpXHJcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgUGF0aE1ha2VyKSB7XHJcbiAgICAgICAgICAgIHZhbHVlLnVuaWZvcm0oKVxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnBhdGhcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJhc2U6IGFueSwgazogc3RyaW5nIHwgdW5kZWZpbmVkLCBpbmRleDogbnVtYmVyIHwgdW5kZWZpbmVkXHJcbiAgICAgICAgW2Jhc2UsIGssIGluZGV4XSA9IHRoaXMuY29tbW9uUHJvcGVydHlNYXBwaW5nKGtleSlcclxuICAgICAgICBpZiAoIWsgfHwgaW5kZXggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAndGV4dCc6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucm9vdC50eSA9PSA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRvYyA9IHRoaXMucm9vdC50IS5kIVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2MuayA9IFtkb2MuayFbMF1dXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvYy5rWzBdLnQgPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvYy5rWzBdLnMhLnQgPSB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGtleSwgdmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgYSB2YWxpZCBrZXkuJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYmFzZSAmJiBrICYmIGluZGV4ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jb252ZXJ0VG9TdGF0aWNQcm9wZXJ0eShiYXNlLCBrKVxyXG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gMClcclxuICAgICAgICAgICAgICAgIGJhc2Vba10ua1tpbmRleF0gPSB2YWx1ZVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBiYXNlW2tdLmsgPSB2YWx1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIGtleSB0aGUgbmFtZSBvZiBwcm9wZXJ0eSB0byBiZSBzZXRcclxuICAgICAqIEBwYXJhbSBzdGFydEZyYW1lIGZyYW1lIG51bWJlciB0byBzdGFydCB0aGUgYW5pbWF0aW9uXHJcbiAgICAgKiBAcGFyYW0gZW5kRnJhbWUgZnJhbWUgbnVtYmVyIHRvIGVuZCB0aGUgYW5pbWF0aW9uXHJcbiAgICAgKiBAcGFyYW0gc3RhcnRWYWx1ZSB2YWx1ZSB0byBiZSBzZXQgaW4gc3RhcnQgb2YgYW5pbWF0aW9uXHJcbiAgICAgKiBAcGFyYW0gZW5kVmFsdWUgdmFsdWUgdG8gYmUgc2V0IGluIGVuZCBvZiBhbmltYXRpb25cclxuICAgICAqIEBwYXJhbSBlYXNpbmcgZWFzaW5nIGZ1bmN0aW9uLCBkZWZhdWx0IGlzIGxpbmVhclxyXG4gICAgICovXHJcbiAgICBzZXRBbmltYXRhYmxlUHJvcGVydHkoa2V5OiBTZXRhYmxlS2V5cywgc3RhcnRGcmFtZTogbnVtYmVyLCBlbmRGcmFtZTogbnVtYmVyLCBzdGFydFZhbHVlOiBhbnksIGVuZFZhbHVlOiBhbnksIGVhc2luZz86IEVhc2luZ0Z1bmN0aW9uKSB7XHJcbiAgICAgICAgaWYgKGVuZEZyYW1lIDw9IHN0YXJ0RnJhbWUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFbmQgZnJhbWUgc2hvdWxkIGJlIGxhcmdlciB0aGFuIHN0YXJ0IGZyYW1lLicpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGltZVJhbmdlW2tleV0gPSBlbmRGcmFtZSArIDFcclxuICAgICAgICB0aGlzLnVwZGF0ZVRpbWVSYW5nZSgpXHJcbiAgICAgICAgaWYgKCFlYXNpbmcpIHtcclxuICAgICAgICAgICAgZWFzaW5nID0gRWFzaW5nRmFjdG9yeS5saW5lYXIoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3RhcnRWYWx1ZSBpbnN0YW5jZW9mIFBhdGhNYWtlciB8fCBlbmRWYWx1ZSBpbnN0YW5jZW9mIFBhdGhNYWtlcikge1xyXG4gICAgICAgICAgICBbc3RhcnRWYWx1ZSwgZW5kVmFsdWVdLmZvckVhY2godiA9PiB2IGluc3RhbmNlb2YgUGF0aE1ha2VyICYmIHYudW5pZm9ybSgpKVxyXG4gICAgICAgICAgICBpZiAoc3RhcnRWYWx1ZSBpbnN0YW5jZW9mIFBhdGhNYWtlciAmJiBlbmRWYWx1ZSBpbnN0YW5jZW9mIFBhdGhNYWtlcikge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRMaW5lQ291bnQgPSBzdGFydFZhbHVlLnBhdGgudiEubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZW5kTGluZUNvdW50ID0gZW5kVmFsdWUucGF0aC52IS5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgICAgICBpZiAoIShzdGFydExpbmVDb3VudCA8PSAwICYmIGVuZExpbmVDb3VudCA8PSAwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLm1pbihzdGFydExpbmVDb3VudCwgZW5kTGluZUNvdW50KSA8PSAwICYmIE1hdGgubWF4KHN0YXJ0TGluZUNvdW50LCBlbmRMaW5lQ291bnQpID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmVlZENvcHkgPSBzdGFydExpbmVDb3VudCA8PSAwID8gc3RhcnRWYWx1ZSA6IGVuZFZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZWVkTGVuZ3RoID0gTWF0aC5tYXgoc3RhcnRMaW5lQ291bnQsIGVuZExpbmVDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnaScsICdvJywgJ3YnXS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZWVkQ29weS5wYXRoW2tleV0gPSBBcnJheShuZWVkTGVuZ3RoKS5maWxsKG5lZWRDb3B5LnBhdGhba2V5XS5sZW5ndGggPyBuZWVkQ29weS5wYXRoW2tleV1bMF0gOiBbMCwgMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tbW9uTXVsdGlwbGUgPSBsZWFzdENvbW1vbk11bHRpcGxlKHN0YXJ0TGluZUNvdW50LCBlbmRMaW5lQ291bnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0VmFsdWUudXBzYW1wbGUoTWF0aC5yb3VuZChjb21tb25NdWx0aXBsZSAvIHN0YXJ0TGluZUNvdW50KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kVmFsdWUudXBzYW1wbGUoTWF0aC5yb3VuZChjb21tb25NdWx0aXBsZSAvIGVuZExpbmVDb3VudCkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFtzdGFydFZhbHVlLCBlbmRWYWx1ZV0gPSBbc3RhcnRWYWx1ZSwgZW5kVmFsdWVdLm1hcCh2ID0+IHYgaW5zdGFuY2VvZiBQYXRoTWFrZXIgPyB2LnBhdGggOiB2KVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYmFzZTogYW55LCBrOiBzdHJpbmcgfCB1bmRlZmluZWQsIGluZGV4OiBudW1iZXIgfCB1bmRlZmluZWQsIHdyYXAgPSB0cnVlO1xyXG4gICAgICAgIFtiYXNlLCBrLCBpbmRleF0gPSB0aGlzLmNvbW1vblByb3BlcnR5TWFwcGluZyhrZXkpXHJcbiAgICAgICAgaWYgKCFrIHx8IGluZGV4ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChrZXkpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3RleHQnOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJvb3QudHkgPT0gNSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlID0gdGhpcy5yb290LnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHRQcm9wID0gYmFzZS5kLmtbMF0uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG1wU3RhcnRWYWx1ZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGV4dFByb3ApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG1wRW5kVmFsdWUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRleHRQcm9wKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG1wU3RhcnRWYWx1ZS50ID0gc3RhcnRWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0bXBFbmRWYWx1ZS50ID0gZW5kVmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRWYWx1ZSA9IHRtcFN0YXJ0VmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kVmFsdWUgPSB0bXBFbmRWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrID0gJ2QnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID0gLTFcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3JhcCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3Ioa2V5LCBzdGFydEZyYW1lLCBlbmRGcmFtZSwgc3RhcnRWYWx1ZSwgZW5kVmFsdWUsIGVhc2luZylcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBhIHZhbGlkIGtleS4nKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChiYXNlICYmIGsgJiYgaW5kZXggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnZlcnRUb0FuaW1hdGFibGVQcm9wZXJ0eShiYXNlLCBrKVxyXG4gICAgICAgICAgICB0aGlzLmFkZEtleWZyYW1lKGJhc2UsIGssIGluZGV4LCBzdGFydEZyYW1lLCBzdGFydFZhbHVlLCBlYXNpbmcsIHdyYXApXHJcbiAgICAgICAgICAgIHRoaXMuYWRkS2V5ZnJhbWUoYmFzZSwgaywgaW5kZXgsIGVuZEZyYW1lLCBlbmRWYWx1ZSwgdW5kZWZpbmVkLCB3cmFwKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExheWVyRmFjdG9yeSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZW5lcmF0ZVRyYW5zZm9ybShjb29yZGluYXRlOiBudW1iZXJbXSk6IFRyYW5zZm9ybSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbzoge1xyXG4gICAgICAgICAgICAgICAgYTogMCxcclxuICAgICAgICAgICAgICAgIGs6IDEwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByOiB7XHJcbiAgICAgICAgICAgICAgICBhOiAwLFxyXG4gICAgICAgICAgICAgICAgazogMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwOiB7XHJcbiAgICAgICAgICAgICAgICBhOiAwLFxyXG4gICAgICAgICAgICAgICAgazogW1xyXG4gICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZVsxXSxcclxuICAgICAgICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGE6IHtcclxuICAgICAgICAgICAgICAgIGE6IDAsXHJcbiAgICAgICAgICAgICAgICBrOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgczoge1xyXG4gICAgICAgICAgICAgICAgYTogMCxcclxuICAgICAgICAgICAgICAgIGs6IFtcclxuICAgICAgICAgICAgICAgICAgICAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgIDEwMFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY3JlYXRlIHRoZSBib3VuZGluZyBib3ggb2Ygc3ZnIGVsZW1lbnRcclxuICAgICAqIEBwYXJhbSBkb20gc3ZnIGVsZW1lbnQgbmVlZHMgdG8gY2FsY3VsYXRlIHRoZSBib3VuZGluZyBib3hcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGJvdW5kaW5nQm94KGRvbTogU1ZHR3JhcGhpY3NFbGVtZW50KSB7XHJcbiAgICAgICAgY29uc3QgYm91bmRpbmdCb3ggPSBnZXRCb3VuZGluZ0JveChkb20pLm1hcCgodiwgaSkgPT4gaSA8IDIgPyB2IC0gMSA6IHYgKyAxKSBhcyBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXVxyXG4gICAgICAgIHJldHVybiB0aGlzLnJlY3QoLi4uYm91bmRpbmdCb3gpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjcmVhdGUgdGhlIHNhbWUgc2hhcGUgb2Ygc3ZnIHBhdGhcclxuICAgICAqIEBwYXJhbSBkb20gc3ZnIHBhdGggZWxlbWVudCByZXByZXNlbnQgdGhlIHNoYXBlXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBzaGFwZShkb206IFNWR1BhdGhFbGVtZW50KSB7XHJcbiAgICAgICAgY29uc3QgY29vcmRpbmF0ZSA9IGdldEJvdW5kaW5nQm94KGRvbSlcclxuICAgICAgICBjb25zdCBsYXllcjogU2hhcGVMYXllciA9IHtcclxuICAgICAgICAgICAgdHk6IDQsXHJcbiAgICAgICAgICAgIGRkZDogMCxcclxuICAgICAgICAgICAgc3I6IDEsXHJcbiAgICAgICAgICAgIGFvOiAwLFxyXG4gICAgICAgICAgICBrczogdGhpcy5nZW5lcmF0ZVRyYW5zZm9ybShjb29yZGluYXRlKSxcclxuICAgICAgICAgICAgaXA6IDAsXHJcbiAgICAgICAgICAgIG9wOiAxLFxyXG4gICAgICAgICAgICBzdDogMCxcclxuICAgICAgICAgICAgYm06IDAsXHJcbiAgICAgICAgICAgIHNoYXBlczogcmVuZGVyKGRvbSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgSlNNb3ZpbkxheWVyKGxheWVyKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY3JlYXRlIGEgcmVjdGFuZ2xlXHJcbiAgICAgKiBAcGFyYW0gbGVmdCBsZWZ0IG9mIHJlY3RcclxuICAgICAqIEBwYXJhbSB0b3AgdG9wIG9mIHJlY3RcclxuICAgICAqIEBwYXJhbSB3aWR0aCB3aWR0aCBvZiByZWN0XHJcbiAgICAgKiBAcGFyYW0gaGVpZ2h0IGhlaWdodCBvZiByZWN0XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyByZWN0KGxlZnQ6IG51bWJlciwgdG9wOiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgbGF5ZXI6IFNoYXBlTGF5ZXIgPSB7XHJcbiAgICAgICAgICAgIHR5OiA0LFxyXG4gICAgICAgICAgICBkZGQ6IDAsXHJcbiAgICAgICAgICAgIHNyOiAxLFxyXG4gICAgICAgICAgICBhbzogMCxcclxuICAgICAgICAgICAga3M6IHRoaXMuZ2VuZXJhdGVUcmFuc2Zvcm0oW2xlZnQsIHRvcCwgd2lkdGgsIGhlaWdodF0pLFxyXG4gICAgICAgICAgICBpcDogMCxcclxuICAgICAgICAgICAgb3A6IDEsXHJcbiAgICAgICAgICAgIHN0OiAwLFxyXG4gICAgICAgICAgICBibTogMCxcclxuICAgICAgICAgICAgc2hhcGVzOiBbXHJcbiAgICAgICAgICAgICAgICByZW5kZXJQbGFpbkdseXBoKCdyZWN0JywgW3dpZHRoLCBoZWlnaHRdKVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgSlNNb3ZpbkxheWVyKGxheWVyKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY3JlYXRlIGEgZWxsaXBzZVxyXG4gICAgICogQHBhcmFtIGN4IHggY2VudGVyIG9mIGVsbGlwc2VcclxuICAgICAqIEBwYXJhbSBjeSB5IGNlbnRlciBvZiBlbGxpcHNlXHJcbiAgICAgKiBAcGFyYW0gcnggeCByYWRpdXMgb2YgZWxsaXBzZVxyXG4gICAgICogQHBhcmFtIHJ5IHkgcmFkaXVzIG9mIGVsbGlwc2VcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGVsbGlwc2UoY3g6IG51bWJlciwgY3k6IG51bWJlciwgcng6IG51bWJlciwgcnk6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGxheWVyOiBTaGFwZUxheWVyID0ge1xyXG4gICAgICAgICAgICB0eTogNCxcclxuICAgICAgICAgICAgZGRkOiAwLFxyXG4gICAgICAgICAgICBzcjogMSxcclxuICAgICAgICAgICAgYW86IDAsXHJcbiAgICAgICAgICAgIGtzOiB0aGlzLmdlbmVyYXRlVHJhbnNmb3JtKFtjeCAtIHJ4LCBjeSAtIHJ5LCAyICogcngsIDIgKiByeV0pLFxyXG4gICAgICAgICAgICBpcDogMCxcclxuICAgICAgICAgICAgb3A6IDEsXHJcbiAgICAgICAgICAgIHN0OiAwLFxyXG4gICAgICAgICAgICBibTogMCxcclxuICAgICAgICAgICAgc2hhcGVzOiBbXHJcbiAgICAgICAgICAgICAgICByZW5kZXJQbGFpbkdseXBoKCdlbGxpcHNlJywgW3J4LCByeV0pXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBKU01vdmluTGF5ZXIobGF5ZXIpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBtYWtlIGEgbGF5ZXIgYnkgYXNzZXQgSURcclxuICAgICAqIEBwYXJhbSBpZCBhc3NldCByZWZlcmVuY2UgSURcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHJlZihpZDogUmVmZXJlbmNlSUQpIHtcclxuICAgICAgICBjb25zdCBsYXllciA9IG5ldyBKU01vdmluTGF5ZXIoe1xyXG4gICAgICAgICAgICB0eTogMCxcclxuICAgICAgICAgICAgZGRkOiAwLFxyXG4gICAgICAgICAgICBzcjogMSxcclxuICAgICAgICAgICAgYW86IDAsXHJcbiAgICAgICAgICAgIGtzOiB0aGlzLmdlbmVyYXRlVHJhbnNmb3JtKFswLCAwLCAwLCAwXSksXHJcbiAgICAgICAgICAgIGlwOiAwLFxyXG4gICAgICAgICAgICBvcDogMSxcclxuICAgICAgICAgICAgc3Q6IDAsXHJcbiAgICAgICAgICAgIGJtOiAwLFxyXG4gICAgICAgICAgICB3OiA5ZTksXHJcbiAgICAgICAgICAgIGg6IDllOSxcclxuICAgICAgICAgICAgcmVmSWQ6IGlkXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gbGF5ZXJcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIG1ha2UgYSBjb21wbGV4IGxheWVyIGJ5IGFuIGFyYml0cmFyeSBzdmcgZWxlbWVudFxyXG4gICAgICogQHBhcmFtIGRvbSBzdmcgZWxlbWVudCBuZWVkIHRvIGJlIHBhcnNlZFxyXG4gICAgICogQHBhcmFtIGFzc2V0TGlzdCBhIGxpc3QgY29udGFpbnMgaW1hZ2UvbGF5ZXIgYXNzZXRcclxuICAgICAqIEBwYXJhbSBmb250TGlzdCBhIGxpc3QgY29udGFpbnMgZm9udCBhc3NldFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaGllcmFyY2h5KGRvbTogU1ZHR3JhcGhpY3NFbGVtZW50LCBhc3NldExpc3Q6IEFzc2V0cywgZm9udExpc3Q6IEZvbnRzKSB7XHJcbiAgICAgICAgY29uc3QgY29vcmRpbmF0ZSA9IGdldEJvdW5kaW5nQm94KGRvbSlcclxuICAgICAgICBsZXQgZG9tVHlwZTogMiB8IDQgfCA1IHwgMDtcclxuICAgICAgICBpZiAoZG9tIGluc3RhbmNlb2YgU1ZHVGV4dEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgZG9tVHlwZSA9IDVcclxuICAgICAgICB9IGVsc2UgaWYgKGRvbSBpbnN0YW5jZW9mIFNWR0ltYWdlRWxlbWVudCkge1xyXG4gICAgICAgICAgICBkb21UeXBlID0gMlxyXG4gICAgICAgIH0gZWxzZSBpZiAoZG9tIGluc3RhbmNlb2YgU1ZHR0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgZG9tVHlwZSA9IDBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkb21UeXBlID0gNFxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBsYXllcjogU2hhcGVMYXllciB8IEltYWdlTGF5ZXIgfCBUZXh0TGF5ZXIgfCBQcmVDb21wTGF5ZXIgPSB7XHJcbiAgICAgICAgICAgIHR5OiBkb21UeXBlLFxyXG4gICAgICAgICAgICBkZGQ6IDAsXHJcbiAgICAgICAgICAgIHNyOiAxLFxyXG4gICAgICAgICAgICBhbzogMCxcclxuICAgICAgICAgICAga3M6IHRoaXMuZ2VuZXJhdGVUcmFuc2Zvcm0oZG9tVHlwZSA9PSAwID8gWzAsIDAsIDAsIDBdIDogY29vcmRpbmF0ZSksXHJcbiAgICAgICAgICAgIGlwOiAwLFxyXG4gICAgICAgICAgICBvcDogMSxcclxuICAgICAgICAgICAgc3Q6IDAsXHJcbiAgICAgICAgICAgIGJtOiAwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaCAoZG9tVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkb21MZWF2ZXMgPSBnZXRMZWFmTm9kZXMoZG9tKVxyXG4gICAgICAgICAgICAgICAgaWYgKGRvbUxlYXZlcy5maWx0ZXIoZG9tID0+IGRvbSBpbnN0YW5jZW9mIFNWR1RleHRFbGVtZW50IHx8IGRvbSBpbnN0YW5jZW9mIFNWR0ltYWdlRWxlbWVudCkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJlY29tcExheWVyID0gbGF5ZXIgYXMgUHJlQ29tcExheWVyXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJlQ29tcEFzc2V0OiBKU01vdmluTGF5ZXJbXSA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJlQ29tcFJlZklkID0gdXVpZCgpXHJcbiAgICAgICAgICAgICAgICAgICAgZG9tTGVhdmVzLmZvckVhY2goZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkIGluc3RhbmNlb2YgU1ZHR3JhcGhpY3NFbGVtZW50ICYmICEoZCBpbnN0YW5jZW9mIFNWR0dFbGVtZW50KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlQ29tcEFzc2V0LnVuc2hpZnQodGhpcy5oaWVyYXJjaHkoZCwgYXNzZXRMaXN0LCBmb250TGlzdCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIHByZUNvbXBBc3NldC5mb3JFYWNoKGxheWVyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXIucm9vdC5vcCA9IDllOVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgcHJlY29tcExheWVyLncgPSBjb29yZGluYXRlWzBdICsgY29vcmRpbmF0ZVsyXSArIDFcclxuICAgICAgICAgICAgICAgICAgICBwcmVjb21wTGF5ZXIuaCA9IGNvb3JkaW5hdGVbMV0gKyBjb29yZGluYXRlWzNdICsgMVxyXG4gICAgICAgICAgICAgICAgICAgIHByZWNvbXBMYXllci5yZWZJZCA9IHByZUNvbXBSZWZJZFxyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0TGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHByZUNvbXBSZWZJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJzOiBwcmVDb21wQXNzZXQubWFwKGxheWVyID0+IGxheWVyLnJvb3QpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hhcGVMYXllciA9IGxheWVyIGFzIFNoYXBlTGF5ZXJcclxuICAgICAgICAgICAgICAgICAgICBzaGFwZUxheWVyLnR5ID0gNFxyXG4gICAgICAgICAgICAgICAgICAgIHNoYXBlTGF5ZXIua3MgPSB0aGlzLmdlbmVyYXRlVHJhbnNmb3JtKGNvb3JkaW5hdGUpXHJcbiAgICAgICAgICAgICAgICAgICAgc2hhcGVMYXllci5zaGFwZXMgPSByZW5kZXIoZG9tKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2VMYXllciA9IGxheWVyIGFzIEltYWdlTGF5ZXJcclxuICAgICAgICAgICAgICAgIGNvbnN0IFtpbWFnZVJlZklkLCBpbWFnZUFzc2V0XSA9IHJlbmRlckltYWdlKGRvbSBhcyBTVkdJbWFnZUVsZW1lbnQsIGFzc2V0TGlzdClcclxuICAgICAgICAgICAgICAgIGltYWdlTGF5ZXIucmVmSWQgPSBpbWFnZVJlZklkXHJcbiAgICAgICAgICAgICAgICBpZiAoIWFzc2V0TGlzdC5maWx0ZXIoYSA9PiBhLmlkID09IGltYWdlUmVmSWQpLmxlbmd0aClcclxuICAgICAgICAgICAgICAgICAgICBhc3NldExpc3QucHVzaChpbWFnZUFzc2V0KVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hhcGVMYXllciA9IGxheWVyIGFzIFNoYXBlTGF5ZXJcclxuICAgICAgICAgICAgICAgIHNoYXBlTGF5ZXIuc2hhcGVzID0gcmVuZGVyKGRvbSlcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRleHRMYXllciA9IGxheWVyIGFzIFRleHRMYXllclxyXG5cclxuICAgICAgICAgICAgICAgIC8vIG1vdmUgdGV4dExheWVyJ3MgcG9zaXRpb24gdG8gdGV4dC1hbmNob3ItcmVsYXRlZFxyXG4gICAgICAgICAgICAgICAgY29uc3QgYmFzZUxpbmVIZWlnaHQgPSBnZXRCYXNlbGluZUhlaWdodChkb20gYXMgU1ZHVGV4dEVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0QW5jaG9yID0gZW5jb2RlVGV4dEFuY2hvcihnZXRDb21wdXRlZFN0eWxlKGRvbSkudGV4dEFuY2hvcilcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRleHRBbmNob3JXZWlnaHQgPSBbMCwgMSwgMC41XVt0ZXh0QW5jaG9yXVxyXG4gICAgICAgICAgICAgICAgdGV4dExheWVyLmtzIS5wIS5rID0gW2Nvb3JkaW5hdGVbMF0gKyBjb29yZGluYXRlWzJdICogdGV4dEFuY2hvcldlaWdodCwgY29vcmRpbmF0ZVsxXSArIGNvb3JkaW5hdGVbM10gLSBiYXNlTGluZUhlaWdodCwgMF1cclxuICAgICAgICAgICAgICAgIHRleHRMYXllci5rcyEubyEuayA9IH5+KHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZShkb20pLmZpbGxPcGFjaXR5IHx8ICcxJykgKiAxMDApXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgW3RleHREYXRhLCBmb250XSA9IHJlbmRlclRleHQoZG9tIGFzIFNWR1RleHRFbGVtZW50LCBmb250TGlzdClcclxuICAgICAgICAgICAgICAgIHRleHRMYXllci50ID0gdGV4dERhdGFcclxuICAgICAgICAgICAgICAgIGlmICghZm9udExpc3QubGlzdCEuZmlsdGVyKGYgPT4gZi5mTmFtZSA9PSBmb250LmZOYW1lKS5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udExpc3QubGlzdCEucHVzaChmb250KVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbW92aW5MYXllciA9IG5ldyBKU01vdmluTGF5ZXIobGF5ZXIpXHJcbiAgICAgICAgcmV0dXJuIG1vdmluTGF5ZXJcclxuICAgIH1cclxufSJdfQ==

/***/ }),

/***/ "./node_modules/jsmovin/bin/path.js":
/*!******************************************!*\
  !*** ./node_modules/jsmovin/bin/path.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PathMaker = void 0;

var _svgPathParser = __webpack_require__(/*! svg-path-parser */ "./node_modules/svg-path-parser/index.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PathMaker =
/*#__PURE__*/
function () {
  // for discontinuous paths
  function PathMaker(pathData) {
    _classCallCheck(this, PathMaker);

    _defineProperty(this, "path", {
      c: false,
      i: [],
      o: [],
      v: []
    });

    _defineProperty(this, "currentX", 0);

    _defineProperty(this, "currentY", 0);

    _defineProperty(this, "offsetX", Infinity);

    _defineProperty(this, "offsetY", Infinity);

    _defineProperty(this, "pathReady", false);

    _defineProperty(this, "pathStart", [0, 0]);

    _defineProperty(this, "pathChain", []);

    if (pathData) {
      this.parse(pathData);
    }
  }

  _createClass(PathMaker, [{
    key: "updateXY",
    value: function updateXY(x, y) {
      this.currentX = x;
      this.currentY = y;
      this.offsetX = Math.min(this.offsetX, x);
      this.offsetY = Math.min(this.offsetY, y);
    }
  }, {
    key: "calculateBezierMinMax",
    value: function calculateBezierMinMax(p0, p1, p2, p3) {
      var a = 3 * (p3 - 3 * p2 + 3 * p1 - p0);
      var b = 6 * (p2 - 2 * p1 + p0);
      var c = 3 * (p1 - p0);
      var min = Infinity,
          max = -Infinity;

      if (b * b - 4 * a * c >= 0) {
        var sqrt = Math.sqrt(b * b - 4 * a * c);
        var roots = [1, -1].map(function (multi) {
          return (multi * sqrt - b) / 2 / a;
        });
        roots.forEach(function (root) {
          if (root > 0 && root < 1) {
            var value = Math.pow(1 - root, 3) * p0 + 3 * Math.pow(1 - root, 2) * root * p1 + 3 * (1 - root) * root * root * p2 + Math.pow(root, 3) * p3;
            min = Math.min(min, value);
            max = Math.max(max, value);
          }
        });
      }

      min = Math.min(min, p0, p3);
      max = Math.max(max, p0, p3);
      return [min, max];
    }
  }, {
    key: "calculateHighlyOrder",
    value: function calculateHighlyOrder(arr, ratio) {
      var result = [];
      arr.forEach(function (v, i, a) {
        if (i >= a.length - 1) return;
        result.push(v * (1 - ratio) + a[i + 1] * ratio);
      });
      return result;
    }
  }, {
    key: "calculateBezierSplit",
    value: function calculateBezierSplit(ratio) {
      for (var _len = arguments.length, order0 = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        order0[_key - 1] = arguments[_key];
      }

      var order1 = this.calculateHighlyOrder(order0, ratio);
      var order2 = this.calculateHighlyOrder(order1, ratio);
      var order3 = this.calculateHighlyOrder(order2, ratio);
      return [order1[0], order2[0], order3[0], order2[1], order1[2], order0[3]];
    }
  }, {
    key: "moveTo",
    value: function moveTo(x, y) {
      if (!this.pathReady) {
        this.path.c = false;
        this.path.i = [[0, 0]];
        this.path.o = [];
        this.path.v = [[x, y]];
        this.currentX = x;
        this.currentY = y;
        this.offsetX = x;
        this.offsetY = y;
        this.pathReady = true;
      } else {
        this.lineTo.apply(this, _toConsumableArray(this.pathStart));
        this.lineTo(x, y);
        this.pathChain.push(this.pathStart);
      }

      this.pathStart = [x, y];
    }
  }, {
    key: "moveToRelative",
    value: function moveToRelative(x, y) {
      this.moveTo(this.currentX + x, this.currentY + y);
    }
  }, {
    key: "lineTo",
    value: function lineTo(x, y) {
      this.path.i.push([0, 0]);
      this.path.o.push([0, 0]);
      this.path.v.push([x, y]);
      this.updateXY(x, y);
    }
  }, {
    key: "lineToRelative",
    value: function lineToRelative(x, y) {
      this.lineTo(this.currentX + x, this.currentY + y);
    }
  }, {
    key: "horizontalTo",
    value: function horizontalTo(x) {
      this.lineTo(x, this.currentY);
    }
  }, {
    key: "horizontalToRelative",
    value: function horizontalToRelative(x) {
      this.horizontalTo(this.currentX + x);
    }
  }, {
    key: "verticalTo",
    value: function verticalTo(y) {
      this.lineTo(this.currentX, y);
    }
  }, {
    key: "verticalToRelative",
    value: function verticalToRelative(y) {
      this.verticalTo(this.currentY + y);
    }
  }, {
    key: "cubicBezierCurveTo",
    value: function cubicBezierCurveTo(c1x, c1y, c2x, c2y, x, y) {
      this.path.i.push([c2x - x, c2y - y]);
      this.path.o.push([c1x - this.currentX, c1y - this.currentY]);
      this.path.v.push([x, y]);
      this.offsetX = Math.min.apply(Math, [this.offsetX].concat(_toConsumableArray(this.calculateBezierMinMax(this.currentX, c1x, c2x, x))));
      this.offsetY = Math.min.apply(Math, [this.offsetY].concat(_toConsumableArray(this.calculateBezierMinMax(this.currentY, c1y, c2y, y))));
      this.updateXY(x, y);
    }
  }, {
    key: "cubicBezierCurveToRelative",
    value: function cubicBezierCurveToRelative(c1x, c1y, c2x, c2y, x, y) {
      this.cubicBezierCurveTo(this.currentX + c1x, this.currentY + c1y, this.currentX + c2x, this.currentY + c2y, this.currentX + x, this.currentY + y);
    }
  }, {
    key: "quadraticBezierCurveTo",
    value: function quadraticBezierCurveTo(cx, cy, x, y) {
      this.path.i.push([cx - x, cy - y]);
      this.path.o.push([cx - this.currentX, cy - this.currentY]);
      this.path.v.push([x, y]);
      this.offsetX = Math.min.apply(Math, [this.offsetX].concat(_toConsumableArray(this.calculateBezierMinMax(this.currentX, cx, cx, x))));
      this.offsetY = Math.min.apply(Math, [this.offsetY].concat(_toConsumableArray(this.calculateBezierMinMax(this.currentY, cy, cy, y))));
      this.updateXY(x, y);
    }
  }, {
    key: "quadraticBezierCurveToRelative",
    value: function quadraticBezierCurveToRelative(cx, cy, x, y) {
      this.quadraticBezierCurveTo(this.currentX + cx, this.currentY + cy, this.currentX + x, this.currentY + y);
    }
  }, {
    key: "arcTo",
    value: function arcTo(rx, ry, xAxisRotation, largeArcFlag, sweepFlag, x, y) {
      var cSeries = PathMaker.a2c(this.currentX, this.currentY, rx, ry, xAxisRotation, largeArcFlag, sweepFlag, x, y);

      while (cSeries.length >= 6) {
        var iovList = cSeries.splice(0, 6);
        this.path.i.push([iovList[2] - iovList[4], iovList[3] - iovList[5]]);
        this.path.o.push([iovList[0] - this.currentX, iovList[1] - this.currentY]);
        this.path.v.push([iovList[4], iovList[5]]);
        this.offsetX = Math.min.apply(Math, [this.offsetX].concat(_toConsumableArray(this.calculateBezierMinMax(this.currentX, iovList[0], iovList[2], iovList[4]))));
        this.offsetY = Math.min.apply(Math, [this.offsetY].concat(_toConsumableArray(this.calculateBezierMinMax(this.currentY, iovList[1], iovList[3], iovList[5]))));
        this.updateXY(iovList[4], iovList[5]);
      }
    }
  }, {
    key: "arcToRelative",
    value: function arcToRelative(rx, ry, xAxisRotation, largeArcFlag, sweepFlag, x, y) {
      this.arcTo(rx, ry, xAxisRotation, largeArcFlag, sweepFlag, this.currentX + x, this.currentY + y);
    }
  }, {
    key: "closePath",
    value: function closePath() {
      this.path.c = true;
    }
  }, {
    key: "uniform",
    value: function uniform() {
      var _this = this;

      if (this.pathChain.length && !(this.currentX == this.pathStart[0] && this.currentY == this.pathStart[1])) {
        this.lineTo.apply(this, _toConsumableArray(this.pathStart));
      }

      while (this.pathChain.length) {
        var pathRef = this.pathChain.pop();
        this.lineTo.apply(this, _toConsumableArray(pathRef));
      }

      while (this.path.o.length < this.path.i.length) {
        this.path.o.push([0, 0]);
      }

      this.path.v.forEach(function (value) {
        value[0] -= _this.offsetX;
        value[1] -= _this.offsetY;
      });
      this.offsetX = 0;
      this.offsetY = 0;
    }
  }, {
    key: "parse",
    value: function parse(pathData) {
      var _this2 = this;

      var pathDataSeries = (0, _svgPathParser.parseSVG)(pathData);
      var pathDataWithType;
      pathDataSeries.forEach(function (pathDataItem) {
        switch (pathDataItem.code) {
          case 'M':
            pathDataWithType = pathDataItem;

            _this2.moveTo(pathDataWithType.x, pathDataWithType.y);

            break;

          case 'm':
            pathDataWithType = pathDataItem;

            _this2.moveToRelative(pathDataWithType.x, pathDataWithType.y);

          case 'L':
            pathDataWithType = pathDataItem;

            _this2.lineTo(pathDataWithType.x, pathDataWithType.y);

            break;

          case 'l':
            pathDataWithType = pathDataItem;

            _this2.lineToRelative(pathDataWithType.x, pathDataWithType.y);

            break;

          case 'H':
            pathDataWithType = pathDataItem;

            _this2.horizontalTo(pathDataWithType.x);

            break;

          case 'h':
            pathDataWithType = pathDataItem;

            _this2.horizontalToRelative(pathDataWithType.x);

            break;

          case 'V':
            pathDataWithType = pathDataItem;

            _this2.verticalTo(pathDataWithType.y);

            break;

          case 'v':
            pathDataWithType = pathDataItem;

            _this2.verticalToRelative(pathDataWithType.y);

            break;

          case 'C':
            pathDataWithType = pathDataItem;

            _this2.cubicBezierCurveTo(pathDataWithType.x1, pathDataWithType.y1, pathDataWithType.x2, pathDataWithType.y2, pathDataWithType.x, pathDataWithType.y);

            break;

          case 'c':
            pathDataWithType = pathDataItem;

            _this2.cubicBezierCurveToRelative(pathDataWithType.x1, pathDataWithType.y1, pathDataWithType.x2, pathDataWithType.y2, pathDataWithType.x, pathDataWithType.y);

            break;

          case 'Q':
            pathDataWithType = pathDataItem;

            _this2.quadraticBezierCurveTo(pathDataWithType.x1, pathDataWithType.y1, pathDataWithType.x, pathDataWithType.y);

            break;

          case 'q':
            pathDataWithType = pathDataItem;

            _this2.quadraticBezierCurveToRelative(pathDataWithType.x1, pathDataWithType.y1, pathDataWithType.x, pathDataWithType.y);

            break;

          case 'A':
            pathDataWithType = pathDataItem;

            _this2.arcTo(pathDataWithType.rx, pathDataWithType.ry, pathDataWithType.xAxisRotation, ~~pathDataWithType.largeArc, ~~pathDataWithType.sweep, pathDataWithType.x, pathDataWithType.y);

            break;

          case 'a':
            pathDataWithType = pathDataItem;

            _this2.arcToRelative(pathDataWithType.rx, pathDataWithType.ry, pathDataWithType.xAxisRotation, ~~pathDataWithType.largeArc, ~~pathDataWithType.sweep, pathDataWithType.x, pathDataWithType.y);

            break;

          case 'Z':
          case 'z':
            _this2.closePath();

            break;

          default:
            console.error(pathDataItem);
            throw new Error('No implementation found for this path command.');
        }
      });
    }
  }, {
    key: "upsample",
    value: function upsample(ratio) {
      var _this3 = this;

      // use De Casteljau's algorithm to do the upsampling
      // Reference: https://en.wikipedia.org/wiki/De_Casteljau%27s_algorithm
      if (!Number.isInteger(ratio)) {
        throw new Error('The upsampling ratio should be an integer.');
      }

      this.uniform();
      if (ratio <= 1) return;
      var copyPath = {
        c: this.path.c,
        i: [],
        o: [],
        v: []
      };
      this.path.v.forEach(function (v, i, a) {
        if (i <= 0) {
          copyPath.v.push(v);
          copyPath.i.push(_this3.path.i[i]);
          return;
        }

        var oArray = _this3.path.o;
        var iArray = _this3.path.i;
        var xArray = [a[i - 1][0], oArray[i - 1][0] + a[i - 1][0], iArray[i][0] + v[0], v[0]];
        var yArray = [a[i - 1][1], oArray[i - 1][1] + a[i - 1][1], iArray[i][1] + v[1], v[1]];

        for (var index = 1; index < ratio; index++) {
          var stepRatio = 1 / (ratio - index + 1);

          var xSplitArray = _this3.calculateBezierSplit.apply(_this3, [stepRatio].concat(_toConsumableArray(xArray)));

          var ySplitArray = _this3.calculateBezierSplit.apply(_this3, [stepRatio].concat(_toConsumableArray(yArray)));

          var _p0x = xArray[0],
              _p1x = xSplitArray.shift() - _p0x,
              _p3x = xSplitArray[1],
              _p2x = xSplitArray.shift() - _p3x,
              _p0y = yArray[0],
              _p1y = ySplitArray.shift() - _p0y,
              _p3y = ySplitArray[1],
              _p2y = ySplitArray.shift() - _p3y;

          copyPath.o.push([_p1x, _p1y]);
          copyPath.i.push([_p2x, _p2y]);
          copyPath.v.push([_p3x, _p3y]);
          xArray = xSplitArray;
          yArray = ySplitArray;
        }

        var p0x = xArray.shift(),
            p1x = xArray.shift() - p0x,
            p3x = xArray[1],
            p2x = xArray.shift() - p3x,
            p0y = yArray.shift(),
            p1y = yArray.shift() - p0y,
            p3y = yArray[1],
            p2y = yArray.shift() - p3y;
        copyPath.o.push([p1x, p1y]);
        copyPath.i.push([p2x, p2y]);
        copyPath.v.push([p3x, p3y]);
      });
      this.path = copyPath;
      this.uniform();
    }
  }], [{
    key: "a2c",
    value: function a2c(x1, y1, rx, ry, angle, large_arc_flag, sweep_flag, x2, y2, recursive) {
      // for more information of where this Math came from visit:
      // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
      var _120 = Math.PI * 120 / 180,
          rad = Math.PI / 180 * (+angle || 0),
          res = [],
          xy,
          rotate = function rotate(x, y, rad) {
        var X = x * Math.cos(rad) - y * Math.sin(rad),
            Y = x * Math.sin(rad) + y * Math.cos(rad);
        return {
          x: X,
          y: Y
        };
      };

      if (!rx || !ry) {
        return [x1, y1, x2, y2, x2, y2];
      }

      if (!recursive) {
        xy = rotate(x1, y1, -rad);
        x1 = xy.x;
        y1 = xy.y;
        xy = rotate(x2, y2, -rad);
        x2 = xy.x;
        y2 = xy.y;
        var cos = Math.cos(Math.PI / 180 * angle),
            sin = Math.sin(Math.PI / 180 * angle),
            x = (x1 - x2) / 2,
            y = (y1 - y2) / 2;
        var h = x * x / (rx * rx) + y * y / (ry * ry);

        if (h > 1) {
          h = Math.sqrt(h);
          rx = h * rx;
          ry = h * ry;
        }

        var rx2 = rx * rx,
            ry2 = ry * ry,
            k = (large_arc_flag == sweep_flag ? -1 : 1) * Math.sqrt(Math.abs((rx2 * ry2 - rx2 * y * y - ry2 * x * x) / (rx2 * y * y + ry2 * x * x))),
            cx = k * rx * y / ry + (x1 + x2) / 2,
            cy = k * -ry * x / rx + (y1 + y2) / 2,
            f1 = Math.asin((y1 - cy) / ry),
            f2 = Math.asin((y2 - cy) / ry);
        f1 = x1 < cx ? Math.PI - f1 : f1;
        f2 = x2 < cx ? Math.PI - f2 : f2;
        f1 < 0 && (f1 = Math.PI * 2 + f1);
        f2 < 0 && (f2 = Math.PI * 2 + f2);

        if (sweep_flag && f1 > f2) {
          f1 = f1 - Math.PI * 2;
        }

        if (!sweep_flag && f2 > f1) {
          f2 = f2 - Math.PI * 2;
        }
      } else {
        f1 = recursive[0];
        f2 = recursive[1];
        cx = recursive[2];
        cy = recursive[3];
      }

      var df = f2 - f1;

      if (Math.abs(df) > _120) {
        var f2old = f2,
            x2old = x2,
            y2old = y2;
        f2 = f1 + _120 * (sweep_flag && f2 > f1 ? 1 : -1);
        x2 = cx + rx * Math.cos(f2);
        y2 = cy + ry * Math.sin(f2);
        res = this.a2c(x2, y2, rx, ry, angle, 0, sweep_flag, x2old, y2old, [f2, f2old, cx, cy]);
      }

      df = f2 - f1;
      var c1 = Math.cos(f1),
          s1 = Math.sin(f1),
          c2 = Math.cos(f2),
          s2 = Math.sin(f2),
          t = Math.tan(df / 4),
          hx = 4 / 3 * rx * t,
          hy = 4 / 3 * ry * t,
          m1 = [x1, y1],
          m2 = [x1 + hx * s1, y1 - hy * c1],
          m3 = [x2 + hx * s2, y2 - hy * c2],
          m4 = [x2, y2];
      m2[0] = 2 * m1[0] - m2[0];
      m2[1] = 2 * m1[1] - m2[1];

      if (recursive) {
        return [m2, m3, m4].concat(res);
      } else {
        res = [m2, m3, m4].concat(res).join().split(",").map(function (x) {
          return parseFloat(x);
        });
        var newres = [];

        for (var i = 0, ii = res.length; i < ii; i++) {
          newres[i] = i % 2 ? rotate(res[i - 1], res[i], rad).y : rotate(res[i], res[i + 1], rad).x;
        }

        return newres;
      }
    }
  }]);

  return PathMaker;
}();

exports.PathMaker = PathMaker;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYXRoLnRzIl0sIm5hbWVzIjpbIlBhdGhNYWtlciIsInBhdGhEYXRhIiwiYyIsImkiLCJvIiwidiIsIkluZmluaXR5IiwicGFyc2UiLCJ4IiwieSIsImN1cnJlbnRYIiwiY3VycmVudFkiLCJvZmZzZXRYIiwiTWF0aCIsIm1pbiIsIm9mZnNldFkiLCJwMCIsInAxIiwicDIiLCJwMyIsImEiLCJiIiwibWF4Iiwic3FydCIsInJvb3RzIiwibWFwIiwibXVsdGkiLCJmb3JFYWNoIiwicm9vdCIsInZhbHVlIiwicG93IiwiYXJyIiwicmF0aW8iLCJyZXN1bHQiLCJsZW5ndGgiLCJwdXNoIiwib3JkZXIwIiwib3JkZXIxIiwiY2FsY3VsYXRlSGlnaGx5T3JkZXIiLCJvcmRlcjIiLCJvcmRlcjMiLCJwYXRoUmVhZHkiLCJwYXRoIiwibGluZVRvIiwicGF0aFN0YXJ0IiwicGF0aENoYWluIiwibW92ZVRvIiwidXBkYXRlWFkiLCJob3Jpem9udGFsVG8iLCJ2ZXJ0aWNhbFRvIiwiYzF4IiwiYzF5IiwiYzJ4IiwiYzJ5IiwiY2FsY3VsYXRlQmV6aWVyTWluTWF4IiwiY3ViaWNCZXppZXJDdXJ2ZVRvIiwiY3giLCJjeSIsInF1YWRyYXRpY0JlemllckN1cnZlVG8iLCJyeCIsInJ5IiwieEF4aXNSb3RhdGlvbiIsImxhcmdlQXJjRmxhZyIsInN3ZWVwRmxhZyIsImNTZXJpZXMiLCJhMmMiLCJpb3ZMaXN0Iiwic3BsaWNlIiwiYXJjVG8iLCJwYXRoUmVmIiwicG9wIiwicGF0aERhdGFTZXJpZXMiLCJwYXRoRGF0YVdpdGhUeXBlIiwicGF0aERhdGFJdGVtIiwiY29kZSIsIm1vdmVUb1JlbGF0aXZlIiwibGluZVRvUmVsYXRpdmUiLCJob3Jpem9udGFsVG9SZWxhdGl2ZSIsInZlcnRpY2FsVG9SZWxhdGl2ZSIsIngxIiwieTEiLCJ4MiIsInkyIiwiY3ViaWNCZXppZXJDdXJ2ZVRvUmVsYXRpdmUiLCJxdWFkcmF0aWNCZXppZXJDdXJ2ZVRvUmVsYXRpdmUiLCJsYXJnZUFyYyIsInN3ZWVwIiwiYXJjVG9SZWxhdGl2ZSIsImNsb3NlUGF0aCIsImNvbnNvbGUiLCJlcnJvciIsIkVycm9yIiwiTnVtYmVyIiwiaXNJbnRlZ2VyIiwidW5pZm9ybSIsImNvcHlQYXRoIiwib0FycmF5IiwiaUFycmF5IiwieEFycmF5IiwieUFycmF5IiwiaW5kZXgiLCJzdGVwUmF0aW8iLCJ4U3BsaXRBcnJheSIsImNhbGN1bGF0ZUJlemllclNwbGl0IiwieVNwbGl0QXJyYXkiLCJwMHgiLCJwMXgiLCJzaGlmdCIsInAzeCIsInAyeCIsInAweSIsInAxeSIsInAzeSIsInAyeSIsImFuZ2xlIiwibGFyZ2VfYXJjX2ZsYWciLCJzd2VlcF9mbGFnIiwicmVjdXJzaXZlIiwiXzEyMCIsIlBJIiwicmFkIiwicmVzIiwieHkiLCJyb3RhdGUiLCJYIiwiY29zIiwic2luIiwiWSIsImgiLCJyeDIiLCJyeTIiLCJrIiwiYWJzIiwiZjEiLCJhc2luIiwiZjIiLCJkZiIsImYyb2xkIiwieDJvbGQiLCJ5Mm9sZCIsImMxIiwiczEiLCJjMiIsInMyIiwidCIsInRhbiIsImh4IiwiaHkiLCJtMSIsIm0yIiwibTMiLCJtNCIsImNvbmNhdCIsImpvaW4iLCJzcGxpdCIsInBhcnNlRmxvYXQiLCJuZXdyZXMiLCJpaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFYUEsUzs7O0FBYVQ7QUFLQSxxQkFBWUMsUUFBWixFQUErQjtBQUFBOztBQUFBLGtDQWpCUjtBQUNuQkMsTUFBQUEsQ0FBQyxFQUFFLEtBRGdCO0FBRW5CQyxNQUFBQSxDQUFDLEVBQUUsRUFGZ0I7QUFHbkJDLE1BQUFBLENBQUMsRUFBRSxFQUhnQjtBQUluQkMsTUFBQUEsQ0FBQyxFQUFFO0FBSmdCLEtBaUJROztBQUFBLHNDQVZKLENBVUk7O0FBQUEsc0NBVEosQ0FTSTs7QUFBQSxxQ0FSTEMsUUFRSzs7QUFBQSxxQ0FQTEEsUUFPSzs7QUFBQSx1Q0FKWCxLQUlXOztBQUFBLHVDQUhPLENBQUMsQ0FBRCxFQUFJ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akIsQ0FBQztBQUFBLGlCQUFJbUosVUFBVSxDQUFDbkosQ0FBRCxDQUFkO0FBQUEsU0FBaEQsQ0FBTjtBQUNBLFlBQUlvSixNQUFNLEdBQUcsRUFBYjs7QUFDQSxhQUFLLElBQUl6SixDQUFDLEdBQUcsQ0FBUixFQUFXMEosRUFBRSxHQUFHcEMsR0FBRyxDQUFDdkYsTUFBekIsRUFBaUMvQixDQUFDLEdBQUcwSixFQUFyQyxFQUF5QzFKLENBQUMsRUFBMUMsRUFBOEM7QUFDMUN5SixVQUFBQSxNQUFNLENBQUN6SixDQUFELENBQU4sR0FBWUEsQ0FBQyxHQUFHLENBQUosR0FBUXdILE1BQU0sQ0FBQ0YsR0FBRyxDQUFDdEgsQ0FBQyxHQUFHLENBQUwsQ0FBSixFQUFhc0gsR0FBRyxDQUFDdEgsQ0FBRCxDQUFoQixFQUFxQnFILEdBQXJCLENBQU4sQ0FBZ0MvRyxDQUF4QyxHQUE0Q2tILE1BQU0sQ0FBQ0YsR0FBRyxDQUFDdEgsQ0FBRCxDQUFKLEVBQVNzSCxHQUFHLENBQUN0SCxDQUFDLEdBQUcsQ0FBTCxDQUFaLEVBQXFCcUgsR0FBckIsQ0FBTixDQUFnQ2hILENBQXhGO0FBQ0g7O0FBQ0QsZUFBT29KLE1BQVA7QUFDSDtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGF0aERlZiB9IGZyb20gJy4vYW5pbWF0aW9uJ1xyXG5pbXBvcnQgeyBwYXJzZVNWRywgTW92ZVRvQ29tbWFuZCwgTGluZVRvQ29tbWFuZCwgSG9yaXpvbnRhbExpbmVUb0NvbW1hbmQsIFZlcnRpY2FsTGluZVRvQ29tbWFuZCwgQ3VydmVUb0NvbW1hbmQsIFF1YWRyYXRpY0N1cnZlVG9Db21tYW5kLCBFbGxpcHRpY2FsQXJjQ29tbWFuZCB9IGZyb20gJ3N2Zy1wYXRoLXBhcnNlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgUGF0aE1ha2VyIHtcclxuICAgIHB1YmxpYyBwYXRoOiBQYXRoRGVmID0ge1xyXG4gICAgICAgIGM6IGZhbHNlLFxyXG4gICAgICAgIGk6IFtdLFxyXG4gICAgICAgIG86IFtdLFxyXG4gICAgICAgIHY6IFtdXHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgY3VycmVudFg6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRZOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBvZmZzZXRYOiBudW1iZXIgPSBJbmZpbml0eTtcclxuICAgIHByaXZhdGUgb2Zmc2V0WTogbnVtYmVyID0gSW5maW5pdHk7XHJcblxyXG4gICAgLy8gZm9yIGRpc2NvbnRpbnVvdXMgcGF0aHNcclxuICAgIHByaXZhdGUgcGF0aFJlYWR5ID0gZmFsc2VcclxuICAgIHByaXZhdGUgcGF0aFN0YXJ0OiBbbnVtYmVyLCBudW1iZXJdID0gWzAsIDBdXHJcbiAgICBwcml2YXRlIHBhdGhDaGFpbjogW251bWJlciwgbnVtYmVyXVtdID0gW11cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXRoRGF0YT86IHN0cmluZykge1xyXG4gICAgICAgIGlmIChwYXRoRGF0YSkge1xyXG4gICAgICAgICAgICB0aGlzLnBhcnNlKHBhdGhEYXRhKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZVhZKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50WCA9IHhcclxuICAgICAgICB0aGlzLmN1cnJlbnRZID0geVxyXG4gICAgICAgIHRoaXMub2Zmc2V0WCA9IE1hdGgubWluKHRoaXMub2Zmc2V0WCwgeClcclxuICAgICAgICB0aGlzLm9mZnNldFkgPSBNYXRoLm1pbih0aGlzLm9mZnNldFksIHkpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjYWxjdWxhdGVCZXppZXJNaW5NYXgocDA6IG51bWJlciwgcDE6IG51bWJlciwgcDI6IG51bWJlciwgcDM6IG51bWJlcik6IFtudW1iZXIsIG51bWJlcl0ge1xyXG4gICAgICAgIGNvbnN0IGEgPSAzICogKHAzIC0gMyAqIHAyICsgMyAqIHAxIC0gcDApXHJcbiAgICAgICAgY29uc3QgYiA9IDYgKiAocDIgLSAyICogcDEgKyBwMClcclxuICAgICAgICBjb25zdCBjID0gMyAqIChwMSAtIHAwKVxyXG4gICAgICAgIGxldCBtaW4gPSBJbmZpbml0eSwgbWF4ID0gLUluZmluaXR5XHJcbiAgICAgICAgaWYgKGIgKiBiIC0gNCAqIGEgKiBjID49IDApIHtcclxuICAgICAgICAgICAgY29uc3Qgc3FydCA9IE1hdGguc3FydChiICogYiAtIDQgKiBhICogYylcclxuICAgICAgICAgICAgY29uc3Qgcm9vdHMgPSBbMSwgLTFdLm1hcChtdWx0aSA9PiAobXVsdGkgKiBzcXJ0IC0gYikgLyAyIC8gYSlcclxuICAgICAgICAgICAgcm9vdHMuZm9yRWFjaChyb290ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyb290ID4gMCAmJiByb290IDwgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gTWF0aC5wb3coMSAtIHJvb3QsIDMpICogcDAgKyAzICogTWF0aC5wb3coMSAtIHJvb3QsIDIpICogcm9vdCAqIHAxICsgMyAqICgxIC0gcm9vdCkgKiByb290ICogcm9vdCAqIHAyICsgTWF0aC5wb3cocm9vdCwgMykgKiBwM1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbiA9IE1hdGgubWluKG1pbiwgdmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4ID0gTWF0aC5tYXgobWF4LCB2YWx1ZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgbWluID0gTWF0aC5taW4obWluLCBwMCwgcDMpXHJcbiAgICAgICAgbWF4ID0gTWF0aC5tYXgobWF4LCBwMCwgcDMpXHJcbiAgICAgICAgcmV0dXJuIFttaW4sIG1heF1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNhbGN1bGF0ZUhpZ2hseU9yZGVyKGFycjogbnVtYmVyW10sIHJhdGlvOiBudW1iZXIpOiBudW1iZXJbXSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdDogbnVtYmVyW10gPSBbXVxyXG4gICAgICAgIGFyci5mb3JFYWNoKCh2LCBpLCBhKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpID49IGEubGVuZ3RoIC0gMSkgcmV0dXJuXHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHYgKiAoMSAtIHJhdGlvKSArIGFbaSArIDFdICogcmF0aW8pXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjYWxjdWxhdGVCZXppZXJTcGxpdChyYXRpbzogbnVtYmVyLCAuLi5vcmRlcjA6IG51bWJlcltdKTogbnVtYmVyW10ge1xyXG4gICAgICAgIGxldCBvcmRlcjEgPSB0aGlzLmNhbGN1bGF0ZUhpZ2hseU9yZGVyKG9yZGVyMCwgcmF0aW8pXHJcbiAgICAgICAgbGV0IG9yZGVyMiA9IHRoaXMuY2FsY3VsYXRlSGlnaGx5T3JkZXIob3JkZXIxLCByYXRpbylcclxuICAgICAgICBsZXQgb3JkZXIzID0gdGhpcy5jYWxjdWxhdGVIaWdobHlPcmRlcihvcmRlcjIsIHJhdGlvKVxyXG4gICAgICAgIHJldHVybiBbb3JkZXIxWzBdLCBvcmRlcjJbMF0sIG9yZGVyM1swXSwgb3JkZXIyWzFdLCBvcmRlcjFbMl0sIG9yZGVyMFszXV1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbW92ZVRvKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBhdGhSZWFkeSkge1xyXG4gICAgICAgICAgICB0aGlzLnBhdGguYyA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMucGF0aC5pID0gW1swLCAwXV1cclxuICAgICAgICAgICAgdGhpcy5wYXRoLm8gPSBbXVxyXG4gICAgICAgICAgICB0aGlzLnBhdGgudiA9IFtbeCwgeV1dXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFggPSB4XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFkgPSB5XHJcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0WCA9IHhcclxuICAgICAgICAgICAgdGhpcy5vZmZzZXRZID0geVxyXG4gICAgICAgICAgICB0aGlzLnBhdGhSZWFkeSA9IHRydWVcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxpbmVUbyguLi50aGlzLnBhdGhTdGFydClcclxuICAgICAgICAgICAgdGhpcy5saW5lVG8oeCwgeSlcclxuICAgICAgICAgICAgdGhpcy5wYXRoQ2hhaW4ucHVzaCh0aGlzLnBhdGhTdGFydClcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wYXRoU3RhcnQgPSBbeCwgeV1cclxuICAgIH1cclxuICAgIHB1YmxpYyBtb3ZlVG9SZWxhdGl2ZSh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubW92ZVRvKHRoaXMuY3VycmVudFggKyB4LCB0aGlzLmN1cnJlbnRZICsgeSlcclxuICAgIH1cclxuICAgIHB1YmxpYyBsaW5lVG8oeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnBhdGguaSEucHVzaChbMCwgMF0pXHJcbiAgICAgICAgdGhpcy5wYXRoLm8hLnB1c2goWzAsIDBdKVxyXG4gICAgICAgIHRoaXMucGF0aC52IS5wdXNoKFt4LCB5XSlcclxuICAgICAgICB0aGlzLnVwZGF0ZVhZKHgsIHkpXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgbGluZVRvUmVsYXRpdmUoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmxpbmVUbyh0aGlzLmN1cnJlbnRYICsgeCwgdGhpcy5jdXJyZW50WSArIHkpXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaG9yaXpvbnRhbFRvKHg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubGluZVRvKHgsIHRoaXMuY3VycmVudFkpXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaG9yaXpvbnRhbFRvUmVsYXRpdmUoeDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5ob3Jpem9udGFsVG8odGhpcy5jdXJyZW50WCArIHgpXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdmVydGljYWxUbyh5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmxpbmVUbyh0aGlzLmN1cnJlbnRYLCB5KVxyXG4gICAgfVxyXG4gICAgcHVibGljIHZlcnRpY2FsVG9SZWxhdGl2ZSh5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnZlcnRpY2FsVG8odGhpcy5jdXJyZW50WSArIHkpXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgY3ViaWNCZXppZXJDdXJ2ZVRvKFxyXG4gICAgICAgIGMxeDogbnVtYmVyLFxyXG4gICAgICAgIGMxeTogbnVtYmVyLFxyXG4gICAgICAgIGMyeDogbnVtYmVyLFxyXG4gICAgICAgIGMyeTogbnVtYmVyLFxyXG4gICAgICAgIHg6IG51bWJlcixcclxuICAgICAgICB5OiBudW1iZXJcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMucGF0aC5pIS5wdXNoKFtjMnggLSB4LCBjMnkgLSB5XSlcclxuICAgICAgICB0aGlzLnBhdGgubyEucHVzaChbYzF4IC0gdGhpcy5jdXJyZW50WCwgYzF5IC0gdGhpcy5jdXJyZW50WV0pXHJcbiAgICAgICAgdGhpcy5wYXRoLnYhLnB1c2goW3gsIHldKVxyXG4gICAgICAgIHRoaXMub2Zmc2V0WCA9IE1hdGgubWluKHRoaXMub2Zmc2V0WCwgLi4udGhpcy5jYWxjdWxhdGVCZXppZXJNaW5NYXgodGhpcy5jdXJyZW50WCwgYzF4LCBjMngsIHgpKVxyXG4gICAgICAgIHRoaXMub2Zmc2V0WSA9IE1hdGgubWluKHRoaXMub2Zmc2V0WSwgLi4udGhpcy5jYWxjdWxhdGVCZXppZXJNaW5NYXgodGhpcy5jdXJyZW50WSwgYzF5LCBjMnksIHkpKVxyXG4gICAgICAgIHRoaXMudXBkYXRlWFkoeCwgeSlcclxuICAgIH1cclxuICAgIHB1YmxpYyBjdWJpY0JlemllckN1cnZlVG9SZWxhdGl2ZShcclxuICAgICAgICBjMXg6IG51bWJlcixcclxuICAgICAgICBjMXk6IG51bWJlcixcclxuICAgICAgICBjMng6IG51bWJlcixcclxuICAgICAgICBjMnk6IG51bWJlcixcclxuICAgICAgICB4OiBudW1iZXIsXHJcbiAgICAgICAgeTogbnVtYmVyXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLmN1YmljQmV6aWVyQ3VydmVUbyh0aGlzLmN1cnJlbnRYICsgYzF4LCB0aGlzLmN1cnJlbnRZICsgYzF5LCB0aGlzLmN1cnJlbnRYICsgYzJ4LCB0aGlzLmN1cnJlbnRZICsgYzJ5LCB0aGlzLmN1cnJlbnRYICsgeCwgdGhpcy5jdXJyZW50WSArIHkpXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcXVhZHJhdGljQmV6aWVyQ3VydmVUbyhjeDogbnVtYmVyLCBjeTogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucGF0aC5pIS5wdXNoKFtjeCAtIHgsIGN5IC0geV0pXHJcbiAgICAgICAgdGhpcy5wYXRoLm8hLnB1c2goW2N4IC0gdGhpcy5jdXJyZW50WCwgY3kgLSB0aGlzLmN1cnJlbnRZXSlcclxuICAgICAgICB0aGlzLnBhdGgudiEucHVzaChbeCwgeV0pXHJcbiAgICAgICAgdGhpcy5vZmZzZXRYID0gTWF0aC5taW4odGhpcy5vZmZzZXRYLCAuLi50aGlzLmNhbGN1bGF0ZUJlemllck1pbk1heCh0aGlzLmN1cnJlbnRYLCBjeCwgY3gsIHgpKVxyXG4gICAgICAgIHRoaXMub2Zmc2V0WSA9IE1hdGgubWluKHRoaXMub2Zmc2V0WSwgLi4udGhpcy5jYWxjdWxhdGVCZXppZXJNaW5NYXgodGhpcy5jdXJyZW50WSwgY3ksIGN5LCB5KSlcclxuICAgICAgICB0aGlzLnVwZGF0ZVhZKHgsIHkpXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcXVhZHJhdGljQmV6aWVyQ3VydmVUb1JlbGF0aXZlKGN4OiBudW1iZXIsIGN5OiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5xdWFkcmF0aWNCZXppZXJDdXJ2ZVRvKHRoaXMuY3VycmVudFggKyBjeCwgdGhpcy5jdXJyZW50WSArIGN5LCB0aGlzLmN1cnJlbnRYICsgeCwgdGhpcy5jdXJyZW50WSArIHkpXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYXJjVG8oXHJcbiAgICAgICAgcng6IG51bWJlcixcclxuICAgICAgICByeTogbnVtYmVyLFxyXG4gICAgICAgIHhBeGlzUm90YXRpb246IG51bWJlcixcclxuICAgICAgICBsYXJnZUFyY0ZsYWc6IG51bWJlcixcclxuICAgICAgICBzd2VlcEZsYWc6IG51bWJlcixcclxuICAgICAgICB4OiBudW1iZXIsXHJcbiAgICAgICAgeTogbnVtYmVyXHJcbiAgICApIHtcclxuICAgICAgICBjb25zdCBjU2VyaWVzID0gUGF0aE1ha2VyLmEyYyh0aGlzLmN1cnJlbnRYLCB0aGlzLmN1cnJlbnRZLCByeCwgcnksIHhBeGlzUm90YXRpb24sIGxhcmdlQXJjRmxhZywgc3dlZXBGbGFnLCB4LCB5KSBhcyBudW1iZXJbXVxyXG4gICAgICAgIHdoaWxlIChjU2VyaWVzLmxlbmd0aCA+PSA2KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlvdkxpc3QgPSBjU2VyaWVzLnNwbGljZSgwLCA2KVxyXG4gICAgICAgICAgICB0aGlzLnBhdGguaSEucHVzaChbaW92TGlzdFsyXSAtIGlvdkxpc3RbNF0sIGlvdkxpc3RbM10gLSBpb3ZMaXN0WzVdXSlcclxuICAgICAgICAgICAgdGhpcy5wYXRoLm8hLnB1c2goW2lvdkxpc3RbMF0gLSB0aGlzLmN1cnJlbnRYLCBpb3ZMaXN0WzFdIC0gdGhpcy5jdXJyZW50WV0pXHJcbiAgICAgICAgICAgIHRoaXMucGF0aC52IS5wdXNoKFtpb3ZMaXN0WzRdLCBpb3ZMaXN0WzVdXSlcclxuICAgICAgICAgICAgdGhpcy5vZmZzZXRYID0gTWF0aC5taW4odGhpcy5vZmZzZXRYLCAuLi50aGlzLmNhbGN1bGF0ZUJlemllck1pbk1heCh0aGlzLmN1cnJlbnRYLCBpb3ZMaXN0WzBdLCBpb3ZMaXN0WzJdLCBpb3ZMaXN0WzRdKSlcclxuICAgICAgICAgICAgdGhpcy5vZmZzZXRZID0gTWF0aC5taW4odGhpcy5vZmZzZXRZLCAuLi50aGlzLmNhbGN1bGF0ZUJlemllck1pbk1heCh0aGlzLmN1cnJlbnRZLCBpb3ZMaXN0WzFdLCBpb3ZMaXN0WzNdLCBpb3ZMaXN0WzVdKSlcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVYWShpb3ZMaXN0WzRdLCBpb3ZMaXN0WzVdKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBhcmNUb1JlbGF0aXZlKFxyXG4gICAgICAgIHJ4OiBudW1iZXIsXHJcbiAgICAgICAgcnk6IG51bWJlcixcclxuICAgICAgICB4QXhpc1JvdGF0aW9uOiBudW1iZXIsXHJcbiAgICAgICAgbGFyZ2VBcmNGbGFnOiBudW1iZXIsXHJcbiAgICAgICAgc3dlZXBGbGFnOiBudW1iZXIsXHJcbiAgICAgICAgeDogbnVtYmVyLFxyXG4gICAgICAgIHk6IG51bWJlclxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5hcmNUbyhyeCwgcnksIHhBeGlzUm90YXRpb24sIGxhcmdlQXJjRmxhZywgc3dlZXBGbGFnLCB0aGlzLmN1cnJlbnRYICsgeCwgdGhpcy5jdXJyZW50WSArIHkpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYTJjKHgxOiBudW1iZXIsIHkxOiBudW1iZXIsIHJ4OiBudW1iZXIsIHJ5OiBudW1iZXIsIGFuZ2xlOiBudW1iZXIsIGxhcmdlX2FyY19mbGFnOiBudW1iZXIsIHN3ZWVwX2ZsYWc6IG51bWJlciwgeDI6IG51bWJlciwgeTI6IG51bWJlciwgcmVjdXJzaXZlPzogbnVtYmVyW10pOiBudW1iZXJbXSB8IG51bWJlcltdW10ge1xyXG4gICAgICAgIC8vIGZvciBtb3JlIGluZm9ybWF0aW9uIG9mIHdoZXJlIHRoaXMgTWF0aCBjYW1lIGZyb20gdmlzaXQ6XHJcbiAgICAgICAgLy8gaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvaW1wbG5vdGUuaHRtbCNBcmNJbXBsZW1lbnRhdGlvbk5vdGVzXHJcbiAgICAgICAgdmFyIF8xMjAgPSBNYXRoLlBJICogMTIwIC8gMTgwLFxyXG4gICAgICAgICAgICByYWQgPSBNYXRoLlBJIC8gMTgwICogKCthbmdsZSB8fCAwKSxcclxuICAgICAgICAgICAgcmVzOiBudW1iZXJbXSA9IFtdLFxyXG4gICAgICAgICAgICB4eSxcclxuICAgICAgICAgICAgcm90YXRlID0gKHg6IG51bWJlciwgeTogbnVtYmVyLCByYWQ6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIFggPSB4ICogTWF0aC5jb3MocmFkKSAtIHkgKiBNYXRoLnNpbihyYWQpLFxyXG4gICAgICAgICAgICAgICAgICAgIFkgPSB4ICogTWF0aC5zaW4ocmFkKSArIHkgKiBNYXRoLmNvcyhyYWQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgeDogWCwgeTogWSB9O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGlmICghcnggfHwgIXJ5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbeDEsIHkxLCB4MiwgeTIsIHgyLCB5Ml07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcmVjdXJzaXZlKSB7XHJcbiAgICAgICAgICAgIHh5ID0gcm90YXRlKHgxLCB5MSwgLXJhZCk7XHJcbiAgICAgICAgICAgIHgxID0geHkueDtcclxuICAgICAgICAgICAgeTEgPSB4eS55O1xyXG4gICAgICAgICAgICB4eSA9IHJvdGF0ZSh4MiwgeTIsIC1yYWQpO1xyXG4gICAgICAgICAgICB4MiA9IHh5Lng7XHJcbiAgICAgICAgICAgIHkyID0geHkueTtcclxuICAgICAgICAgICAgdmFyIGNvcyA9IE1hdGguY29zKE1hdGguUEkgLyAxODAgKiBhbmdsZSksXHJcbiAgICAgICAgICAgICAgICBzaW4gPSBNYXRoLnNpbihNYXRoLlBJIC8gMTgwICogYW5nbGUpLFxyXG4gICAgICAgICAgICAgICAgeCA9ICh4MSAtIHgyKSAvIDIsXHJcbiAgICAgICAgICAgICAgICB5ID0gKHkxIC0geTIpIC8gMjtcclxuICAgICAgICAgICAgdmFyIGggPSB4ICogeCAvIChyeCAqIHJ4KSArIHkgKiB5IC8gKHJ5ICogcnkpO1xyXG4gICAgICAgICAgICBpZiAoaCA+IDEpIHtcclxuICAgICAgICAgICAgICAgIGggPSBNYXRoLnNxcnQoaCk7XHJcbiAgICAgICAgICAgICAgICByeCA9IGggKiByeDtcclxuICAgICAgICAgICAgICAgIHJ5ID0gaCAqIHJ5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciByeDIgPSByeCAqIHJ4LFxyXG4gICAgICAgICAgICAgICAgcnkyID0gcnkgKiByeSxcclxuICAgICAgICAgICAgICAgIGsgPSAobGFyZ2VfYXJjX2ZsYWcgPT0gc3dlZXBfZmxhZyA/IC0xIDogMSkgKlxyXG4gICAgICAgICAgICAgICAgICAgIE1hdGguc3FydChNYXRoLmFicygocngyICogcnkyIC0gcngyICogeSAqIHkgLSByeTIgKiB4ICogeCkgLyAocngyICogeSAqIHkgKyByeTIgKiB4ICogeCkpKSxcclxuICAgICAgICAgICAgICAgIGN4ID0gayAqIHJ4ICogeSAvIHJ5ICsgKHgxICsgeDIpIC8gMixcclxuICAgICAgICAgICAgICAgIGN5ID0gayAqIC1yeSAqIHggLyByeCArICh5MSArIHkyKSAvIDIsXHJcbiAgICAgICAgICAgICAgICBmMSA9IE1hdGguYXNpbigoeTEgLSBjeSkgLyByeSksXHJcbiAgICAgICAgICAgICAgICBmMiA9IE1hdGguYXNpbigoeTIgLSBjeSkgLyByeSk7XHJcblxyXG4gICAgICAgICAgICBmMSA9IHgxIDwgY3ggPyBNYXRoLlBJIC0gZjEgOiBmMTtcclxuICAgICAgICAgICAgZjIgPSB4MiA8IGN4ID8gTWF0aC5QSSAtIGYyIDogZjI7XHJcbiAgICAgICAgICAgIGYxIDwgMCAmJiAoZjEgPSBNYXRoLlBJICogMiArIGYxKTtcclxuICAgICAgICAgICAgZjIgPCAwICYmIChmMiA9IE1hdGguUEkgKiAyICsgZjIpO1xyXG4gICAgICAgICAgICBpZiAoc3dlZXBfZmxhZyAmJiBmMSA+IGYyKSB7XHJcbiAgICAgICAgICAgICAgICBmMSA9IGYxIC0gTWF0aC5QSSAqIDI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFzd2VlcF9mbGFnICYmIGYyID4gZjEpIHtcclxuICAgICAgICAgICAgICAgIGYyID0gZjIgLSBNYXRoLlBJICogMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGYxID0gcmVjdXJzaXZlWzBdO1xyXG4gICAgICAgICAgICBmMiA9IHJlY3Vyc2l2ZVsxXTtcclxuICAgICAgICAgICAgY3ggPSByZWN1cnNpdmVbMl07XHJcbiAgICAgICAgICAgIGN5ID0gcmVjdXJzaXZlWzNdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZGYgPSBmMiAtIGYxO1xyXG4gICAgICAgIGlmIChNYXRoLmFicyhkZikgPiBfMTIwKSB7XHJcbiAgICAgICAgICAgIHZhciBmMm9sZCA9IGYyLFxyXG4gICAgICAgICAgICAgICAgeDJvbGQgPSB4MixcclxuICAgICAgICAgICAgICAgIHkyb2xkID0geTI7XHJcbiAgICAgICAgICAgIGYyID0gZjEgKyBfMTIwICogKHN3ZWVwX2ZsYWcgJiYgZjIgPiBmMSA/IDEgOiAtMSk7XHJcbiAgICAgICAgICAgIHgyID0gY3ggKyByeCAqIE1hdGguY29zKGYyKTtcclxuICAgICAgICAgICAgeTIgPSBjeSArIHJ5ICogTWF0aC5zaW4oZjIpO1xyXG4gICAgICAgICAgICByZXMgPSB0aGlzLmEyYyh4MiwgeTIsIHJ4LCByeSwgYW5nbGUsIDAsIHN3ZWVwX2ZsYWcsIHgyb2xkLCB5Mm9sZCwgW2YyLCBmMm9sZCwgY3gsIGN5XSkgYXMgbnVtYmVyW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRmID0gZjIgLSBmMTtcclxuICAgICAgICB2YXIgYzEgPSBNYXRoLmNvcyhmMSksXHJcbiAgICAgICAgICAgIHMxID0gTWF0aC5zaW4oZjEpLFxyXG4gICAgICAgICAgICBjMiA9IE1hdGguY29zKGYyKSxcclxuICAgICAgICAgICAgczIgPSBNYXRoLnNpbihmMiksXHJcbiAgICAgICAgICAgIHQgPSBNYXRoLnRhbihkZiAvIDQpLFxyXG4gICAgICAgICAgICBoeCA9IDQgLyAzICogcnggKiB0LFxyXG4gICAgICAgICAgICBoeSA9IDQgLyAzICogcnkgKiB0LFxyXG4gICAgICAgICAgICBtMSA9IFt4MSwgeTFdLFxyXG4gICAgICAgICAgICBtMiA9IFt4MSArIGh4ICogczEsIHkxIC0gaHkgKiBjMV0sXHJcbiAgICAgICAgICAgIG0zID0gW3gyICsgaHggKiBzMiwgeTIgLSBoeSAqIGMyXSxcclxuICAgICAgICAgICAgbTQgPSBbeDIsIHkyXTtcclxuICAgICAgICBtMlswXSA9IDIgKiBtMVswXSAtIG0yWzBdO1xyXG4gICAgICAgIG0yWzFdID0gMiAqIG0xWzFdIC0gbTJbMV07XHJcbiAgICAgICAgaWYgKHJlY3Vyc2l2ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gW20yLCBtMywgbTRdLmNvbmNhdChyZXMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlcyA9IFttMiwgbTMsIG00XS5jb25jYXQocmVzKS5qb2luKCkuc3BsaXQoXCIsXCIpLm1hcCh4ID0+IHBhcnNlRmxvYXQoeCkpO1xyXG4gICAgICAgICAgICB2YXIgbmV3cmVzID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBpaSA9IHJlcy5sZW5ndGg7IGkgPCBpaTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdyZXNbaV0gPSBpICUgMiA/IHJvdGF0ZShyZXNbaSAtIDFdLCByZXNbaV0sIHJhZCkueSA6IHJvdGF0ZShyZXNbaV0sIHJlc1tpICsgMV0sIHJhZCkueDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3cmVzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xvc2VQYXRoKCkge1xyXG4gICAgICAgIHRoaXMucGF0aC5jID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1bmlmb3JtKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBhdGhDaGFpbi5sZW5ndGggJiYgISh0aGlzLmN1cnJlbnRYID09IHRoaXMucGF0aFN0YXJ0WzBdICYmIHRoaXMuY3VycmVudFkgPT0gdGhpcy5wYXRoU3RhcnRbMV0pKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGluZVRvKC4uLnRoaXMucGF0aFN0YXJ0KVxyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAodGhpcy5wYXRoQ2hhaW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhdGhSZWYgPSB0aGlzLnBhdGhDaGFpbi5wb3AoKSFcclxuICAgICAgICAgICAgdGhpcy5saW5lVG8oLi4ucGF0aFJlZilcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKHRoaXMucGF0aC5vIS5sZW5ndGggPCB0aGlzLnBhdGguaSEubGVuZ3RoKVxyXG4gICAgICAgICAgICB0aGlzLnBhdGgubyEucHVzaChbMCwgMF0pXHJcbiAgICAgICAgdGhpcy5wYXRoLnYhLmZvckVhY2godmFsdWUgPT4ge1xyXG4gICAgICAgICAgICB2YWx1ZVswXSAtPSB0aGlzLm9mZnNldFhcclxuICAgICAgICAgICAgdmFsdWVbMV0gLT0gdGhpcy5vZmZzZXRZXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLm9mZnNldFggPSAwXHJcbiAgICAgICAgdGhpcy5vZmZzZXRZID0gMFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwYXJzZShwYXRoRGF0YTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgcGF0aERhdGFTZXJpZXMgPSBwYXJzZVNWRyhwYXRoRGF0YSlcclxuICAgICAgICBsZXQgcGF0aERhdGFXaXRoVHlwZTtcclxuICAgICAgICBwYXRoRGF0YVNlcmllcy5mb3JFYWNoKHBhdGhEYXRhSXRlbSA9PiB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAocGF0aERhdGFJdGVtLmNvZGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ00nOlxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGhEYXRhV2l0aFR5cGUgPSBwYXRoRGF0YUl0ZW0gYXMgTW92ZVRvQ29tbWFuZFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZVRvKHBhdGhEYXRhV2l0aFR5cGUueCwgcGF0aERhdGFXaXRoVHlwZS55KVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBjYXNlICdtJzpcclxuICAgICAgICAgICAgICAgICAgICBwYXRoRGF0YVdpdGhUeXBlID0gcGF0aERhdGFJdGVtIGFzIE1vdmVUb0NvbW1hbmRcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVUb1JlbGF0aXZlKHBhdGhEYXRhV2l0aFR5cGUueCwgcGF0aERhdGFXaXRoVHlwZS55KVxyXG4gICAgICAgICAgICAgICAgY2FzZSAnTCc6XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aERhdGFXaXRoVHlwZSA9IHBhdGhEYXRhSXRlbSBhcyBMaW5lVG9Db21tYW5kXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saW5lVG8ocGF0aERhdGFXaXRoVHlwZS54LCBwYXRoRGF0YVdpdGhUeXBlLnkpXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2wnOlxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGhEYXRhV2l0aFR5cGUgPSBwYXRoRGF0YUl0ZW0gYXMgTGluZVRvQ29tbWFuZFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGluZVRvUmVsYXRpdmUocGF0aERhdGFXaXRoVHlwZS54LCBwYXRoRGF0YVdpdGhUeXBlLnkpXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ0gnOlxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGhEYXRhV2l0aFR5cGUgPSBwYXRoRGF0YUl0ZW0gYXMgSG9yaXpvbnRhbExpbmVUb0NvbW1hbmRcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvcml6b250YWxUbyhwYXRoRGF0YVdpdGhUeXBlLngpXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2gnOlxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGhEYXRhV2l0aFR5cGUgPSBwYXRoRGF0YUl0ZW0gYXMgSG9yaXpvbnRhbExpbmVUb0NvbW1hbmRcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvcml6b250YWxUb1JlbGF0aXZlKHBhdGhEYXRhV2l0aFR5cGUueClcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnVic6XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aERhdGFXaXRoVHlwZSA9IHBhdGhEYXRhSXRlbSBhcyBWZXJ0aWNhbExpbmVUb0NvbW1hbmRcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZlcnRpY2FsVG8ocGF0aERhdGFXaXRoVHlwZS55KVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBjYXNlICd2JzpcclxuICAgICAgICAgICAgICAgICAgICBwYXRoRGF0YVdpdGhUeXBlID0gcGF0aERhdGFJdGVtIGFzIFZlcnRpY2FsTGluZVRvQ29tbWFuZFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmVydGljYWxUb1JlbGF0aXZlKHBhdGhEYXRhV2l0aFR5cGUueSlcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnQyc6XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aERhdGFXaXRoVHlwZSA9IHBhdGhEYXRhSXRlbSBhcyBDdXJ2ZVRvQ29tbWFuZFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3ViaWNCZXppZXJDdXJ2ZVRvKHBhdGhEYXRhV2l0aFR5cGUueDEsIHBhdGhEYXRhV2l0aFR5cGUueTEsIHBhdGhEYXRhV2l0aFR5cGUueDIsIHBhdGhEYXRhV2l0aFR5cGUueTIsIHBhdGhEYXRhV2l0aFR5cGUueCwgcGF0aERhdGFXaXRoVHlwZS55KVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBjYXNlICdjJzpcclxuICAgICAgICAgICAgICAgICAgICBwYXRoRGF0YVdpdGhUeXBlID0gcGF0aERhdGFJdGVtIGFzIEN1cnZlVG9Db21tYW5kXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdWJpY0JlemllckN1cnZlVG9SZWxhdGl2ZShwYXRoRGF0YVdpdGhUeXBlLngxLCBwYXRoRGF0YVdpdGhUeXBlLnkxLCBwYXRoRGF0YVdpdGhUeXBlLngyLCBwYXRoRGF0YVdpdGhUeXBlLnkyLCBwYXRoRGF0YVdpdGhUeXBlLngsIHBhdGhEYXRhV2l0aFR5cGUueSlcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnUSc6XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aERhdGFXaXRoVHlwZSA9IHBhdGhEYXRhSXRlbSBhcyBRdWFkcmF0aWNDdXJ2ZVRvQ29tbWFuZFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucXVhZHJhdGljQmV6aWVyQ3VydmVUbyhwYXRoRGF0YVdpdGhUeXBlLngxLCBwYXRoRGF0YVdpdGhUeXBlLnkxLCBwYXRoRGF0YVdpdGhUeXBlLngsIHBhdGhEYXRhV2l0aFR5cGUueSlcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgY2FzZSAncSc6XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aERhdGFXaXRoVHlwZSA9IHBhdGhEYXRhSXRlbSBhcyBRdWFkcmF0aWNDdXJ2ZVRvQ29tbWFuZFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucXVhZHJhdGljQmV6aWVyQ3VydmVUb1JlbGF0aXZlKHBhdGhEYXRhV2l0aFR5cGUueDEsIHBhdGhEYXRhV2l0aFR5cGUueTEsIHBhdGhEYXRhV2l0aFR5cGUueCwgcGF0aERhdGFXaXRoVHlwZS55KVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBjYXNlICdBJzpcclxuICAgICAgICAgICAgICAgICAgICBwYXRoRGF0YVdpdGhUeXBlID0gcGF0aERhdGFJdGVtIGFzIEVsbGlwdGljYWxBcmNDb21tYW5kXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcmNUbyhwYXRoRGF0YVdpdGhUeXBlLnJ4LCBwYXRoRGF0YVdpdGhUeXBlLnJ5LCBwYXRoRGF0YVdpdGhUeXBlLnhBeGlzUm90YXRpb24sIH5+cGF0aERhdGFXaXRoVHlwZS5sYXJnZUFyYywgfn5wYXRoRGF0YVdpdGhUeXBlLnN3ZWVwLCBwYXRoRGF0YVdpdGhUeXBlLngsIHBhdGhEYXRhV2l0aFR5cGUueSlcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnYSc6XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aERhdGFXaXRoVHlwZSA9IHBhdGhEYXRhSXRlbSBhcyBFbGxpcHRpY2FsQXJjQ29tbWFuZFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJjVG9SZWxhdGl2ZShwYXRoRGF0YVdpdGhUeXBlLnJ4LCBwYXRoRGF0YVdpdGhUeXBlLnJ5LCBwYXRoRGF0YVdpdGhUeXBlLnhBeGlzUm90YXRpb24sIH5+cGF0aERhdGFXaXRoVHlwZS5sYXJnZUFyYywgfn5wYXRoRGF0YVdpdGhUeXBlLnN3ZWVwLCBwYXRoRGF0YVdpdGhUeXBlLngsIHBhdGhEYXRhV2l0aFR5cGUueSlcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnWic6XHJcbiAgICAgICAgICAgICAgICBjYXNlICd6JzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlUGF0aCgpXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihwYXRoRGF0YUl0ZW0pXHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBpbXBsZW1lbnRhdGlvbiBmb3VuZCBmb3IgdGhpcyBwYXRoIGNvbW1hbmQuJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwc2FtcGxlKHJhdGlvOiBudW1iZXIpIHtcclxuICAgICAgICAvLyB1c2UgRGUgQ2FzdGVsamF1J3MgYWxnb3JpdGhtIHRvIGRvIHRoZSB1cHNhbXBsaW5nXHJcbiAgICAgICAgLy8gUmVmZXJlbmNlOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9EZV9DYXN0ZWxqYXUlMjdzX2FsZ29yaXRobVxyXG5cclxuICAgICAgICBpZiAoIU51bWJlci5pc0ludGVnZXIocmF0aW8pKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHVwc2FtcGxpbmcgcmF0aW8gc2hvdWxkIGJlIGFuIGludGVnZXIuJylcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51bmlmb3JtKClcclxuICAgICAgICBpZiAocmF0aW8gPD0gMSkgcmV0dXJuXHJcbiAgICAgICAgY29uc3QgY29weVBhdGg6IFBhdGhEZWYgPSB7XHJcbiAgICAgICAgICAgIGM6IHRoaXMucGF0aC5jLFxyXG4gICAgICAgICAgICBpOiBbXSxcclxuICAgICAgICAgICAgbzogW10sXHJcbiAgICAgICAgICAgIHY6IFtdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucGF0aC52IS5mb3JFYWNoKCh2LCBpLCBhKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIGNvcHlQYXRoLnYhLnB1c2godilcclxuICAgICAgICAgICAgICAgIGNvcHlQYXRoLmkhLnB1c2godGhpcy5wYXRoLmkhW2ldKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3Qgb0FycmF5ID0gdGhpcy5wYXRoLm8hXHJcbiAgICAgICAgICAgIGNvbnN0IGlBcnJheSA9IHRoaXMucGF0aC5pIVxyXG4gICAgICAgICAgICBsZXQgeEFycmF5ID0gW2FbaSAtIDFdWzBdLCBvQXJyYXlbaSAtIDFdWzBdICsgYVtpIC0gMV1bMF0sIGlBcnJheVtpXVswXSArIHZbMF0sIHZbMF1dXHJcbiAgICAgICAgICAgIGxldCB5QXJyYXkgPSBbYVtpIC0gMV1bMV0sIG9BcnJheVtpIC0gMV1bMV0gKyBhW2kgLSAxXVsxXSwgaUFycmF5W2ldWzFdICsgdlsxXSwgdlsxXV1cclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8IHJhdGlvOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGVwUmF0aW8gPSAxIC8gKHJhdGlvIC0gaW5kZXggKyAxKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgeFNwbGl0QXJyYXkgPSB0aGlzLmNhbGN1bGF0ZUJlemllclNwbGl0KHN0ZXBSYXRpbywgLi4ueEFycmF5KVxyXG4gICAgICAgICAgICAgICAgY29uc3QgeVNwbGl0QXJyYXkgPSB0aGlzLmNhbGN1bGF0ZUJlemllclNwbGl0KHN0ZXBSYXRpbywgLi4ueUFycmF5KVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcDB4ID0geEFycmF5WzBdLCBwMXggPSB4U3BsaXRBcnJheS5zaGlmdCgpISAtIHAweCwgcDN4ID0geFNwbGl0QXJyYXlbMV0sIHAyeCA9IHhTcGxpdEFycmF5LnNoaWZ0KCkhIC0gcDN4LFxyXG4gICAgICAgICAgICAgICAgICAgIHAweSA9IHlBcnJheVswXSwgcDF5ID0geVNwbGl0QXJyYXkuc2hpZnQoKSEgLSBwMHksIHAzeSA9IHlTcGxpdEFycmF5WzFdLCBwMnkgPSB5U3BsaXRBcnJheS5zaGlmdCgpISAtIHAzeVxyXG4gICAgICAgICAgICAgICAgY29weVBhdGgubyEucHVzaChbcDF4LCBwMXldKVxyXG4gICAgICAgICAgICAgICAgY29weVBhdGguaSEucHVzaChbcDJ4LCBwMnldKVxyXG4gICAgICAgICAgICAgICAgY29weVBhdGgudiEucHVzaChbcDN4LCBwM3ldKVxyXG4gICAgICAgICAgICAgICAgeEFycmF5ID0geFNwbGl0QXJyYXlcclxuICAgICAgICAgICAgICAgIHlBcnJheSA9IHlTcGxpdEFycmF5XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgcDB4ID0geEFycmF5LnNoaWZ0KCkhLCBwMXggPSB4QXJyYXkuc2hpZnQoKSEgLSBwMHgsIHAzeCA9IHhBcnJheVsxXSwgcDJ4ID0geEFycmF5LnNoaWZ0KCkhIC0gcDN4LFxyXG4gICAgICAgICAgICAgICAgcDB5ID0geUFycmF5LnNoaWZ0KCkhLCBwMXkgPSB5QXJyYXkuc2hpZnQoKSEgLSBwMHksIHAzeSA9IHlBcnJheVsxXSwgcDJ5ID0geUFycmF5LnNoaWZ0KCkhIC0gcDN5XHJcbiAgICAgICAgICAgIGNvcHlQYXRoLm8hLnB1c2goW3AxeCwgcDF5XSlcclxuICAgICAgICAgICAgY29weVBhdGguaSEucHVzaChbcDJ4LCBwMnldKVxyXG4gICAgICAgICAgICBjb3B5UGF0aC52IS5wdXNoKFtwM3gsIHAzeV0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnBhdGggPSBjb3B5UGF0aFxyXG4gICAgICAgIHRoaXMudW5pZm9ybSgpXHJcbiAgICB9XHJcblxyXG59Il19

/***/ }),

/***/ "./node_modules/jsmovin/bin/render.js":
/*!********************************************!*\
  !*** ./node_modules/jsmovin/bin/render.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = render;
exports.renderPlainGlyph = renderPlainGlyph;
exports.renderText = renderText;
exports.renderImage = renderImage;

var _path = __webpack_require__(/*! ./path */ "./node_modules/jsmovin/bin/path.js");

var _v = _interopRequireDefault(__webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js"));

var _helper = __webpack_require__(/*! ./helper */ "./node_modules/jsmovin/bin/helper.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function render(dom, baseDom) {
  if (dom instanceof SVGTextElement || dom instanceof SVGImageElement) {
    return [];
  } else if (dom instanceof SVGGElement) {
    return renderGroup(dom, baseDom);
  } else {
    return renderGlyph(dom, baseDom);
  }
}

function addVisualEncodings(items, styles, dom, baseDom) {
  if (styles.stroke && styles.stroke !== 'none') {
    items.push({
      ty: 'st',
      c: {
        k: styles.stroke.split('(')[1].split(')')[0].split(',').slice(0, 3).map(function (raw) {
          return parseInt(raw) / 255;
        }).concat(1)
      },
      o: {
        k: parseFloat(styles.strokeOpacity || '1') * 100
      },
      w: {
        k: parseFloat(styles.strokeWidth || '1')
      },
      lc: (0, _helper.encodeLineCap)(styles.strokeLinecap),
      lj: (0, _helper.encodeLineJoin)(styles.strokeLinejoin)
    });
  }

  if (styles.fill && styles.fill !== 'none') {
    items.push({
      ty: 'fl',
      c: {
        k: styles.fill.split('(')[1].split(')')[0].split(',').slice(0, 3).map(function (raw) {
          return parseInt(raw) / 255;
        }).concat(1)
      },
      o: {
        k: parseFloat(styles.fillOpacity || '1') * 100
      }
    });
  }

  var posX = 0,
      posY = 0;

  if (dom && baseDom) {
    var baseTransform = (0, _helper.calculateBaseTransform)(dom, baseDom);
    var baseBBox = baseDom.getBBox();
    var refBBox = dom.getBBox();
    posX = baseTransform.e + refBBox.x - baseBBox.x;
    posY = baseTransform.f + refBBox.y - baseBBox.y;
  }

  items.push({
    ty: "tr",
    p: {
      k: [posX, posY]
    },
    a: {
      k: [0, 0]
    },
    s: {
      k: [100, 100]
    },
    r: {
      k: 0
    },
    o: {
      k: parseFloat(styles.opacity || '1') * 100
    },
    sk: {
      k: 0
    },
    sa: {
      k: 0
    }
  });
}

function renderGlyph(dom, baseDom) {
  var group = {
    ty: "gr",
    it: [],
    bm: 0,
    hd: false
  };

  var postActions = function postActions(pathMaker) {
    pathMaker.uniform();
    group.it.push({
      ty: 'sh',
      ks: {
        k: pathMaker.path,
        a: 0
      },
      nm: dom.id,
      hd: false
    });
    var styles = window.getComputedStyle(dom);
    addVisualEncodings(group.it, styles, dom, baseDom);
  };

  if (dom instanceof SVGCircleElement) {
    var svgLength = dom.r.baseVal;
    svgLength.convertToSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX);
    var r = svgLength.valueInSpecifiedUnits;
    var pathMaker = new _path.PathMaker();
    pathMaker.moveTo(r, 0);
    pathMaker.arcTo(r, r, 0, 1, 0, r, 2 * r);
    pathMaker.arcTo(r, r, 0, 1, 0, r, 0);
    pathMaker.closePath();
    postActions(pathMaker);
  } else if (dom instanceof SVGEllipseElement) {
    var mapKey = ['rx', 'ry'];

    var _mapKey$map = mapKey.map(function (key) {
      var svgLength = dom[key].baseVal;
      svgLength.convertToSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX);
      return svgLength.valueInSpecifiedUnits;
    }),
        _mapKey$map2 = _slicedToArray(_mapKey$map, 2),
        rx = _mapKey$map2[0],
        ry = _mapKey$map2[1];

    var _pathMaker = new _path.PathMaker();

    _pathMaker.moveTo(rx, 0);

    _pathMaker.arcTo(rx, ry, 0, 1, 0, rx, 2 * ry);

    _pathMaker.arcTo(rx, ry, 0, 1, 0, rx, 0);

    _pathMaker.closePath();

    postActions(_pathMaker);
  } else if (dom instanceof SVGLineElement) {
    var _mapKey = ['x1', 'x2', 'y1', 'y2'];

    var _mapKey$map3 = _mapKey.map(function (key) {
      var svgLength = dom[key].baseVal;
      svgLength.convertToSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX);
      return svgLength.valueInSpecifiedUnits;
    }),
        _mapKey$map4 = _slicedToArray(_mapKey$map3, 4),
        x1 = _mapKey$map4[0],
        x2 = _mapKey$map4[1],
        y1 = _mapKey$map4[2],
        y2 = _mapKey$map4[3];

    var offsetX = Math.min(x1, x2);
    var offsetY = Math.min(y1, y2);

    var _pathMaker2 = new _path.PathMaker();

    _pathMaker2.moveTo(x1 - offsetX, y1 - offsetY);

    _pathMaker2.lineTo(x2 - offsetX, y2 - offsetY);

    postActions(_pathMaker2);
  } else if (dom instanceof SVGPathElement) {
    var pathData = dom.getAttribute('d') || '';

    var _pathMaker3 = new _path.PathMaker(pathData);

    postActions(_pathMaker3);
  } else if (dom instanceof SVGPolygonElement || dom instanceof SVGPolylineElement) {
    var points = dom.points;

    if (points.length) {
      var iterablePoints = Array.prototype.slice.call(points);

      var _offsetX = iterablePoints.reduce(function (p, v) {
        return Math.min(p, v.x);
      }, 0);

      var _offsetY = iterablePoints.reduce(function (p, v) {
        return Math.min(p, v.y);
      }, 0);

      var _pathMaker4 = new _path.PathMaker();

      _pathMaker4.moveTo(points[0].x - _offsetX, points[0].y - _offsetY);

      iterablePoints.forEach(function (v, i) {
        if (i <= 0) return;

        _pathMaker4.lineTo(v.x - _offsetX, v.y - _offsetY);
      });

      if (dom instanceof SVGPolygonElement) {
        _pathMaker4.closePath();
      }

      postActions(_pathMaker4);
    }
  } else if (dom instanceof SVGRectElement) {
    var _mapKey2 = ['width', 'height'];

    var _mapKey2$map = _mapKey2.map(function (key) {
      var svgLength = dom[key].baseVal;
      svgLength.convertToSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX);
      return svgLength.valueInSpecifiedUnits;
    }),
        _mapKey2$map2 = _slicedToArray(_mapKey2$map, 2),
        width = _mapKey2$map2[0],
        height = _mapKey2$map2[1];

    var _pathMaker5 = new _path.PathMaker();

    _pathMaker5.moveTo(0, 0);

    _pathMaker5.lineTo(width, 0);

    _pathMaker5.lineTo(width, height);

    _pathMaker5.lineTo(0, height);

    _pathMaker5.closePath();

    postActions(_pathMaker5);
  } else {
    console.error(dom);
    throw new Error('No implementation found for svg graphics element.');
  }

  return [group];
}

function renderGroup(dom, baseDom) {
  var items = [];
  dom.childNodes.forEach(function (node) {
    if (node instanceof SVGGraphicsElement) {
      items = render(node, baseDom || dom).concat(items);
    }
  });
  return items;
}

function renderPlainGlyph(type, args) {
  var group = {
    ty: "gr",
    it: [{
      ty: 'sh',
      ks: {
        k: null,
        a: 0
      },
      hd: false
    }, {
      ty: 'st',
      c: {
        k: [1, 1, 1, 1]
      },
      w: {
        k: 1
      },
      o: {
        k: 100
      },
      lc: (0, _helper.encodeLineCap)('butt'),
      lj: (0, _helper.encodeLineJoin)('miter')
    }, {
      ty: 'fl',
      c: {
        k: [1, 1, 1, 1]
      },
      o: {
        k: 100
      }
    }, {
      ty: 'tr',
      p: {
        k: [0, 0]
      },
      a: {
        k: [0, 0]
      },
      s: {
        k: [100, 100]
      },
      r: {
        k: 0
      },
      o: {
        k: 100
      },
      sk: {
        k: 0
      },
      sa: {
        k: 0
      }
    }],
    bm: 0,
    hd: false
  };
  var pathMaker = new _path.PathMaker();

  switch (type) {
    case 'rect':
      pathMaker.moveTo(0, 0);
      pathMaker.lineTo(args[0], 0);
      pathMaker.lineTo(args[0], args[1]);
      pathMaker.lineTo(0, args[1]);
      pathMaker.closePath();
      break;

    case 'ellipse':
      pathMaker.moveTo(args[0], 0);
      pathMaker.arcTo(args[0], args[1], 0, 1, 0, args[0], 2 * args[1]);
      pathMaker.arcTo(args[0], args[1], 0, 1, 0, args[0], 0);
      pathMaker.closePath();
  }

  pathMaker.uniform();
  group.it[0].ks.k = pathMaker.path;
  return group;
}

function renderText(dom, fontList) {
  var computedStyle = getComputedStyle(dom);
  var fontSize = parseFloat(computedStyle.fontSize),
      fontFamily = computedStyle.fontFamily.split(',')[0].trim(),
      fontStyle = computedStyle.fontStyle,
      fontWeight = computedStyle.fontWeight,
      fontColor = (computedStyle.fill || 'rgb(0,0,0)').split('(')[1].split(')')[0].split(',').map(function (i) {
    return parseInt(i) / 255;
  }),
      textAnchor = computedStyle.textAnchor;
  var fontName = (0, _v["default"])();

  if (fontList) {
    var fontExist = fontList.list.filter(function (font) {
      return font.fFamily == fontFamily && font.fStyle == fontStyle && font.fWeight == fontWeight;
    });
    if (fontExist.length) fontName = fontExist[0].fName;
  }

  var textData = {
    d: {
      k: [{
        t: 0,
        s: {
          s: fontSize,
          f: fontName,
          t: dom.innerHTML,
          j: (0, _helper.encodeTextAnchor)(textAnchor),
          tr: 0,
          ls: 0,
          fc: fontColor
        }
      }]
    },
    p: {},
    m: {
      a: {
        k: [0, 0]
      }
    },
    a: []
  };
  var fontDef = {
    fFamily: fontFamily,
    fWeight: "".concat(fontWeight),
    fStyle: fontStyle,
    fName: fontName
  };
  return [textData, fontDef];
}

function renderImage(dom, assetList) {
  var id = (0, _v["default"])();
  var domHeightVal = dom.height.baseVal;
  domHeightVal.convertToSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX);
  var domWidthVal = dom.width.baseVal;
  domWidthVal.convertToSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX);
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  canvas.width = domWidthVal.valueInSpecifiedUnits * 3;
  canvas.height = domHeightVal.valueInSpecifiedUnits * 3;
  ctx.drawImage(dom, 0, 0, canvas.width, canvas.height);
  var dataUrl = canvas.toDataURL();

  if (assetList) {
    var assetExist = assetList.filter(function (asset) {
      return asset.p == dataUrl;
    });
    if (assetExist.length) id = assetExist[0].id;
  }

  var asset = {
    h: domHeightVal.valueInSpecifiedUnits,
    w: domWidthVal.valueInSpecifiedUnits,
    id: id,
    p: dataUrl,
    e: 1
  };
  return [id, asset];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZW5kZXIudHMiXSwibmFtZXMiOlsicmVuZGVyIiwiZG9tIiwiYmFzZURvbSIsIlNWR1RleHRFbGVtZW50IiwiU1ZHSW1hZ2VFbGVtZW50IiwiU1ZHR0VsZW1lbnQiLCJyZW5kZXJHcm91cCIsInJlbmRlckdseXBoIiwiYWRkVmlzdWFsRW5jb2RpbmdzIiwiaXRlbXMiLCJzdHlsZXMiLCJzdHJva2UiLCJwdXNoIiwidHkiLCJjIiwiayIsInNwbGl0Iiwic2xpY2UiLCJtYXAiLCJyYXciLCJwYXJzZUludCIsImNvbmNhdCIsIm8iLCJwYXJzZUZsb2F0Iiwic3Ryb2tlT3BhY2l0eSIsInciLCJzdHJva2VXaWR0aCIsImxjIiwic3Ryb2tlTGluZWNhcCIsImxqIiwic3Ryb2tlTGluZWpvaW4iLCJmaWxsIiwiZmlsbE9wYWNpdHkiLCJwb3NYIiwicG9zWSIsImJhc2VUcmFuc2Zvcm0iLCJiYXNlQkJveCIsImdldEJCb3giLCJyZWZCQm94IiwiZSIsIngiLCJmIiwieSIsInAiLCJhIiwicyIsInIiLCJvcGFjaXR5Iiwic2siLCJzYSIsImdyb3VwIiwiaXQiLCJibSIsImhkIiwicG9zdEFjdGlvbnMiLCJwYXRoTWFrZXIiLCJ1bmlmb3JtIiwia3MiLCJwYXRoIiwibm0iLCJpZCIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJTVkdDaXJjbGVFbGVtZW50Iiwic3ZnTGVuZ3RoIiwiYmFzZVZhbCIsImNvbnZlcnRUb1NwZWNpZmllZFVuaXRzIiwiU1ZHTGVuZ3RoIiwiU1ZHX0xFTkdUSFRZUEVfUFgiLCJ2YWx1ZUluU3BlY2lmaWVkVW5pdHMiLCJQYXRoTWFrZXIiLCJtb3ZlVG8iLCJhcmNUbyIsImNsb3NlUGF0aCIsIlNWR0VsbGlwc2VFbGVtZW50IiwibWFwS2V5Iiwia2V5IiwicngiLCJyeSIsIlNWR0xpbmVFbGVtZW50IiwieDEiLCJ4MiIsInkxIiwieTIiLCJvZmZzZXRYIiwiTWF0aCIsIm1pbiIsIm9mZnNldFkiLCJsaW5lVG8iLCJTVkdQYXRoRWxlbWVudCIsInBhdGhEYXRhIiwiZ2V0QXR0cmlidXRlIiwiU1ZHUG9seWdvbkVsZW1lbnQiLCJTVkdQb2x5bGluZUVsZW1lbnQiLCJwb2ludHMiLCJsZW5ndGgiLCJpdGVyYWJsZVBvaW50cyIsIkFycmF5IiwicHJvdG90eXBlIiwiY2FsbCIsInJlZHVjZSIsInYiLCJmb3JFYWNoIiwiaSIsIlNWR1JlY3RFbGVtZW50Iiwid2lkdGgiLCJoZWlnaHQiLCJjb25zb2xlIiwiZXJyb3IiLCJFcnJvciIsImNoaWxkTm9kZXMiLCJub2RlIiwiU1ZHR3JhcGhpY3NFbGVtZW50IiwicmVuZGVyUGxhaW5HbHlwaCIsInR5cGUiLCJhcmdzIiwicmVuZGVyVGV4dCIsImZvbnRMaXN0IiwiY29tcHV0ZWRTdHlsZSIsImZvbnRTaXplIiwiZm9udEZhbWlseSIsInRyaW0iLCJmb250U3R5bGUiLCJmb250V2VpZ2h0IiwiZm9udENvbG9yIiwidGV4dEFuY2hvciIsImZvbnROYW1lIiwiZm9udEV4aXN0IiwibGlzdCIsImZpbHRlciIsImZvbnQiLCJmRmFtaWx5IiwiZlN0eWxlIiwiZldlaWdodCIsImZOYW1lIiwidGV4dERhdGEiLCJkIiwidCIsImlubmVySFRNTCIsImoiLCJ0ciIsImxzIiwiZmMiLCJtIiwiZm9udERlZiIsInJlbmRlckltYWdlIiwiYXNzZXRMaXN0IiwiZG9tSGVpZ2h0VmFsIiwiZG9tV2lkdGhWYWwiLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZHJhd0ltYWdlIiwiZGF0YVVybCIsInRvRGF0YVVSTCIsImFzc2V0RXhpc3QiLCJhc3NldCIsImgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBR08sU0FBU0EsTUFBVCxDQUFnQkMsR0FBaEIsRUFBeUNDLE9BQXpDLEVBQXFGO0FBQ3hGLE1BQUlELEdBQUcsWUFBWUUsY0FBZixJQUFpQ0YsR0FBRyxZQUFZRyxlQUFwRCxFQUFxRTtBQUNq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SUEsS0FBSyxDQUFDbkgsQ0FBTixJQUFXZ0gsT0FBZjtBQUFBLEtBQXZCLENBQW5CO0FBQ0EsUUFBSUUsVUFBVSxDQUFDOUQsTUFBZixFQUNJbkMsRUFBRSxHQUFHaUcsVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFjakcsRUFBbkI7QUFDUDs7QUFDRCxNQUFNa0csS0FBSyxHQUFHO0FBQ1ZDLElBQUFBLENBQUMsRUFBRVosWUFBWSxDQUFDOUUscUJBRE47QUFFVjVDLElBQUFBLENBQUMsRUFBRTJILFdBQVcsQ0FBQy9FLHFCQUZMO0FBR1ZULElBQUFBLEVBQUUsRUFBRkEsRUFIVTtBQUlWakIsSUFBQUEsQ0FBQyxFQUFFZ0gsT0FKTztBQUtWcEgsSUFBQUEsQ0FBQyxFQUFFO0FBTE8sR0FBZDtBQU9BLFNBQU8sQ0FBQ3FCLEVBQUQsRUFBS2tHLEtBQUwsQ0FBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JvdXBTaGFwZSwgVGV4dERhdGEsIFJlZmVyZW5jZUlELCBQYXRoU2hhcGUsIEZpbGxTaGFwZSwgU3Ryb2tlU2hhcGUsIFRyYW5zZm9ybVNoYXBlLCBJbWFnZUFzc2V0LCBGb250MSwgRm9udHMsIEFzc2V0cyB9IGZyb20gJy4vYW5pbWF0aW9uJ1xyXG5pbXBvcnQgeyBQYXRoTWFrZXIgfSBmcm9tICcuL3BhdGgnXHJcbmltcG9ydCB1dWlkIGZyb20gJ3V1aWQvdjQnXHJcbmltcG9ydCB7IGNhbGN1bGF0ZUJhc2VUcmFuc2Zvcm0sIGVuY29kZUxpbmVKb2luLCBlbmNvZGVMaW5lQ2FwLCBlbmNvZGVUZXh0QW5jaG9yIH0gZnJvbSAnLi9oZWxwZXInXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihkb206IFNWR0dyYXBoaWNzRWxlbWVudCwgYmFzZURvbT86IFNWR0dyYXBoaWNzRWxlbWVudCk6IEdyb3VwU2hhcGVbXSB7XHJcbiAgICBpZiAoZG9tIGluc3RhbmNlb2YgU1ZHVGV4dEVsZW1lbnQgfHwgZG9tIGluc3RhbmNlb2YgU1ZHSW1hZ2VFbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIFtdXHJcbiAgICB9IGVsc2UgaWYgKGRvbSBpbnN0YW5jZW9mIFNWR0dFbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIHJlbmRlckdyb3VwKGRvbSwgYmFzZURvbSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHJlbmRlckdseXBoKGRvbSwgYmFzZURvbSlcclxuICAgIH1cclxufVxyXG5cclxudHlwZSBWaXN1YWxHcm91cEl0ZW0gPSBQYXRoU2hhcGUgfCBGaWxsU2hhcGUgfCBTdHJva2VTaGFwZSB8IFRyYW5zZm9ybVNoYXBlXHJcblxyXG5mdW5jdGlvbiBhZGRWaXN1YWxFbmNvZGluZ3MoaXRlbXM6IFZpc3VhbEdyb3VwSXRlbVtdLCBzdHlsZXM6IENTU1N0eWxlRGVjbGFyYXRpb24sIGRvbT86IFNWR0dyYXBoaWNzRWxlbWVudCwgYmFzZURvbT86IFNWR0dyYXBoaWNzRWxlbWVudCkge1xyXG4gICAgaWYgKHN0eWxlcy5zdHJva2UgJiYgc3R5bGVzLnN0cm9rZSAhPT0gJ25vbmUnKSB7XHJcbiAgICAgICAgaXRlbXMucHVzaCh7XHJcbiAgICAgICAgICAgIHR5OiAnc3QnLFxyXG4gICAgICAgICAgICBjOiB7XHJcbiAgICAgICAgICAgICAgICBrOiBzdHlsZXMuc3Ryb2tlIS5zcGxpdCgnKCcpWzFdLnNwbGl0KCcpJylbMF0uc3BsaXQoJywnKS5zbGljZSgwLCAzKS5tYXAoKHJhdzogc3RyaW5nKSA9PiBwYXJzZUludChyYXcpIC8gMjU1KS5jb25jYXQoMSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbzoge1xyXG4gICAgICAgICAgICAgICAgazogcGFyc2VGbG9hdChzdHlsZXMuc3Ryb2tlT3BhY2l0eSB8fCAnMScpICogMTAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHc6IHtcclxuICAgICAgICAgICAgICAgIGs6IHBhcnNlRmxvYXQoc3R5bGVzLnN0cm9rZVdpZHRoIHx8ICcxJylcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGM6IGVuY29kZUxpbmVDYXAoc3R5bGVzLnN0cm9rZUxpbmVjYXApLFxyXG4gICAgICAgICAgICBsajogZW5jb2RlTGluZUpvaW4oc3R5bGVzLnN0cm9rZUxpbmVqb2luKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBpZiAoc3R5bGVzLmZpbGwgJiYgc3R5bGVzLmZpbGwgIT09ICdub25lJykge1xyXG4gICAgICAgIGl0ZW1zLnB1c2goe1xyXG4gICAgICAgICAgICB0eTogJ2ZsJyxcclxuICAgICAgICAgICAgYzoge1xyXG4gICAgICAgICAgICAgICAgazogc3R5bGVzLmZpbGwhLnNwbGl0KCcoJylbMV0uc3BsaXQoJyknKVswXS5zcGxpdCgnLCcpLnNsaWNlKDAsIDMpLm1hcCgocmF3OiBzdHJpbmcpID0+IHBhcnNlSW50KHJhdykgLyAyNTUpLmNvbmNhdCgxKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvOiB7XHJcbiAgICAgICAgICAgICAgICBrOiBwYXJzZUZsb2F0KHN0eWxlcy5maWxsT3BhY2l0eSB8fCAnMScpICogMTAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgbGV0IHBvc1ggPSAwLCBwb3NZID0gMFxyXG4gICAgaWYgKGRvbSAmJiBiYXNlRG9tKSB7XHJcbiAgICAgICAgY29uc3QgYmFzZVRyYW5zZm9ybSA9IGNhbGN1bGF0ZUJhc2VUcmFuc2Zvcm0oZG9tLCBiYXNlRG9tKVxyXG4gICAgICAgIGNvbnN0IGJhc2VCQm94ID0gYmFzZURvbS5nZXRCQm94KClcclxuICAgICAgICBjb25zdCByZWZCQm94ID0gZG9tLmdldEJCb3goKVxyXG4gICAgICAgIHBvc1ggPSBiYXNlVHJhbnNmb3JtLmUgKyByZWZCQm94LnggLSBiYXNlQkJveC54XHJcbiAgICAgICAgcG9zWSA9IGJhc2VUcmFuc2Zvcm0uZiArIHJlZkJCb3gueSAtIGJhc2VCQm94LnlcclxuICAgIH1cclxuICAgIGl0ZW1zLnB1c2goe1xyXG4gICAgICAgIHR5OiBcInRyXCIsXHJcbiAgICAgICAgcDoge1xyXG4gICAgICAgICAgICBrOiBbXHJcbiAgICAgICAgICAgICAgICBwb3NYLFxyXG4gICAgICAgICAgICAgICAgcG9zWVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhOiB7XHJcbiAgICAgICAgICAgIGs6IFtcclxuICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHM6IHtcclxuICAgICAgICAgICAgazogW1xyXG4gICAgICAgICAgICAgICAgMTAwLFxyXG4gICAgICAgICAgICAgICAgMTAwXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHI6IHtcclxuICAgICAgICAgICAgazogMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbzoge1xyXG4gICAgICAgICAgICBrOiBwYXJzZUZsb2F0KHN0eWxlcy5vcGFjaXR5IHx8ICcxJykgKiAxMDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNrOiB7XHJcbiAgICAgICAgICAgIGs6IDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNhOiB7XHJcbiAgICAgICAgICAgIGs6IDBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyR2x5cGgoZG9tOiBTVkdHcmFwaGljc0VsZW1lbnQsIGJhc2VEb20/OiBTVkdHcmFwaGljc0VsZW1lbnQpOiBHcm91cFNoYXBlW10ge1xyXG4gICAgY29uc3QgZ3JvdXA6IEdyb3VwU2hhcGUgPSB7XHJcbiAgICAgICAgdHk6IFwiZ3JcIixcclxuICAgICAgICBpdDogW10sXHJcbiAgICAgICAgYm06IDAsXHJcbiAgICAgICAgaGQ6IGZhbHNlXHJcbiAgICB9XHJcbiAgICBjb25zdCBwb3N0QWN0aW9ucyA9IChwYXRoTWFrZXI6IFBhdGhNYWtlcikgPT4ge1xyXG4gICAgICAgIHBhdGhNYWtlci51bmlmb3JtKClcclxuICAgICAgICBncm91cC5pdCEucHVzaCh7XHJcbiAgICAgICAgICAgIHR5OiAnc2gnLFxyXG4gICAgICAgICAgICBrczoge1xyXG4gICAgICAgICAgICAgICAgazogcGF0aE1ha2VyLnBhdGgsXHJcbiAgICAgICAgICAgICAgICBhOiAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG5tOiBkb20uaWQsXHJcbiAgICAgICAgICAgIGhkOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc3Qgc3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9tKVxyXG4gICAgICAgIGFkZFZpc3VhbEVuY29kaW5ncyhncm91cC5pdCEgYXMgVmlzdWFsR3JvdXBJdGVtW10sIHN0eWxlcywgZG9tLCBiYXNlRG9tKVxyXG4gICAgfVxyXG4gICAgaWYgKGRvbSBpbnN0YW5jZW9mIFNWR0NpcmNsZUVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBzdmdMZW5ndGggPSBkb20uci5iYXNlVmFsXHJcbiAgICAgICAgc3ZnTGVuZ3RoLmNvbnZlcnRUb1NwZWNpZmllZFVuaXRzKFNWR0xlbmd0aC5TVkdfTEVOR1RIVFlQRV9QWClcclxuICAgICAgICBjb25zdCByID0gc3ZnTGVuZ3RoLnZhbHVlSW5TcGVjaWZpZWRVbml0c1xyXG4gICAgICAgIGNvbnN0IHBhdGhNYWtlciA9IG5ldyBQYXRoTWFrZXIoKVxyXG4gICAgICAgIHBhdGhNYWtlci5tb3ZlVG8ociwgMClcclxuICAgICAgICBwYXRoTWFrZXIuYXJjVG8ociwgciwgMCwgMSwgMCwgciwgMiAqIHIpXHJcbiAgICAgICAgcGF0aE1ha2VyLmFyY1RvKHIsIHIsIDAsIDEsIDAsIHIsIDApXHJcbiAgICAgICAgcGF0aE1ha2VyLmNsb3NlUGF0aCgpXHJcbiAgICAgICAgcG9zdEFjdGlvbnMocGF0aE1ha2VyKVxyXG4gICAgfSBlbHNlIGlmIChkb20gaW5zdGFuY2VvZiBTVkdFbGxpcHNlRWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IG1hcEtleTogKCdyeCcgfCAncnknKVtdID0gWydyeCcsICdyeSddXHJcbiAgICAgICAgY29uc3QgW3J4LCByeV0gPSBtYXBLZXkubWFwKGtleSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN2Z0xlbmd0aCA9IGRvbVtrZXldLmJhc2VWYWxcclxuICAgICAgICAgICAgc3ZnTGVuZ3RoLmNvbnZlcnRUb1NwZWNpZmllZFVuaXRzKFNWR0xlbmd0aC5TVkdfTEVOR1RIVFlQRV9QWClcclxuICAgICAgICAgICAgcmV0dXJuIHN2Z0xlbmd0aC52YWx1ZUluU3BlY2lmaWVkVW5pdHNcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnN0IHBhdGhNYWtlciA9IG5ldyBQYXRoTWFrZXIoKVxyXG4gICAgICAgIHBhdGhNYWtlci5tb3ZlVG8ocngsIDApXHJcbiAgICAgICAgcGF0aE1ha2VyLmFyY1RvKHJ4LCByeSwgMCwgMSwgMCwgcngsIDIgKiByeSlcclxuICAgICAgICBwYXRoTWFrZXIuYXJjVG8ocngsIHJ5LCAwLCAxLCAwLCByeCwgMClcclxuICAgICAgICBwYXRoTWFrZXIuY2xvc2VQYXRoKClcclxuICAgICAgICBwb3N0QWN0aW9ucyhwYXRoTWFrZXIpXHJcbiAgICB9IGVsc2UgaWYgKGRvbSBpbnN0YW5jZW9mIFNWR0xpbmVFbGVtZW50KSB7XHJcbiAgICAgICAgY29uc3QgbWFwS2V5OiAoJ3gxJyB8ICd4MicgfCAneTEnIHwgJ3kyJylbXSA9IFsneDEnLCAneDInLCAneTEnLCAneTInXVxyXG4gICAgICAgIGNvbnN0IFt4MSwgeDIsIHkxLCB5Ml0gPSBtYXBLZXkubWFwKGtleSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN2Z0xlbmd0aCA9IGRvbVtrZXldLmJhc2VWYWxcclxuICAgICAgICAgICAgc3ZnTGVuZ3RoLmNvbnZlcnRUb1NwZWNpZmllZFVuaXRzKFNWR0xlbmd0aC5TVkdfTEVOR1RIVFlQRV9QWClcclxuICAgICAgICAgICAgcmV0dXJuIHN2Z0xlbmd0aC52YWx1ZUluU3BlY2lmaWVkVW5pdHNcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnN0IG9mZnNldFggPSBNYXRoLm1pbih4MSwgeDIpXHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0WSA9IE1hdGgubWluKHkxLCB5MilcclxuICAgICAgICBjb25zdCBwYXRoTWFrZXIgPSBuZXcgUGF0aE1ha2VyKClcclxuICAgICAgICBwYXRoTWFrZXIubW92ZVRvKHgxIC0gb2Zmc2V0WCwgeTEgLSBvZmZzZXRZKVxyXG4gICAgICAgIHBhdGhNYWtlci5saW5lVG8oeDIgLSBvZmZzZXRYLCB5MiAtIG9mZnNldFkpXHJcbiAgICAgICAgcG9zdEFjdGlvbnMocGF0aE1ha2VyKVxyXG4gICAgfSBlbHNlIGlmIChkb20gaW5zdGFuY2VvZiBTVkdQYXRoRWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IHBhdGhEYXRhID0gZG9tLmdldEF0dHJpYnV0ZSgnZCcpIHx8ICcnXHJcbiAgICAgICAgY29uc3QgcGF0aE1ha2VyID0gbmV3IFBhdGhNYWtlcihwYXRoRGF0YSlcclxuICAgICAgICBwb3N0QWN0aW9ucyhwYXRoTWFrZXIpXHJcbiAgICB9IGVsc2UgaWYgKGRvbSBpbnN0YW5jZW9mIFNWR1BvbHlnb25FbGVtZW50IHx8IGRvbSBpbnN0YW5jZW9mIFNWR1BvbHlsaW5lRWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IHBvaW50cyA9IGRvbS5wb2ludHNcclxuICAgICAgICBpZiAocG9pbnRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVyYWJsZVBvaW50czogRE9NUG9pbnRbXSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHBvaW50cylcclxuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0WCA9IGl0ZXJhYmxlUG9pbnRzLnJlZHVjZSgocCwgdikgPT4gTWF0aC5taW4ocCwgdi54KSwgMClcclxuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0WSA9IGl0ZXJhYmxlUG9pbnRzLnJlZHVjZSgocCwgdikgPT4gTWF0aC5taW4ocCwgdi55KSwgMClcclxuICAgICAgICAgICAgY29uc3QgcGF0aE1ha2VyID0gbmV3IFBhdGhNYWtlcigpXHJcbiAgICAgICAgICAgIHBhdGhNYWtlci5tb3ZlVG8ocG9pbnRzWzBdLnggLSBvZmZzZXRYLCBwb2ludHNbMF0ueSAtIG9mZnNldFkpXHJcbiAgICAgICAgICAgIGl0ZXJhYmxlUG9pbnRzLmZvckVhY2goKHYsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpIDw9IDApIHJldHVyblxyXG4gICAgICAgICAgICAgICAgcGF0aE1ha2VyLmxpbmVUbyh2LnggLSBvZmZzZXRYLCB2LnkgLSBvZmZzZXRZKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpZiAoZG9tIGluc3RhbmNlb2YgU1ZHUG9seWdvbkVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHBhdGhNYWtlci5jbG9zZVBhdGgoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBvc3RBY3Rpb25zKHBhdGhNYWtlcilcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGRvbSBpbnN0YW5jZW9mIFNWR1JlY3RFbGVtZW50KSB7XHJcbiAgICAgICAgY29uc3QgbWFwS2V5OiAoJ3dpZHRoJyB8ICdoZWlnaHQnKVtdID0gWyd3aWR0aCcsICdoZWlnaHQnXVxyXG4gICAgICAgIGNvbnN0IFt3aWR0aCwgaGVpZ2h0XSA9IG1hcEtleS5tYXAoa2V5ID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3ZnTGVuZ3RoID0gZG9tW2tleV0uYmFzZVZhbFxyXG4gICAgICAgICAgICBzdmdMZW5ndGguY29udmVydFRvU3BlY2lmaWVkVW5pdHMoU1ZHTGVuZ3RoLlNWR19MRU5HVEhUWVBFX1BYKVxyXG4gICAgICAgICAgICByZXR1cm4gc3ZnTGVuZ3RoLnZhbHVlSW5TcGVjaWZpZWRVbml0c1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc3QgcGF0aE1ha2VyID0gbmV3IFBhdGhNYWtlcigpXHJcbiAgICAgICAgcGF0aE1ha2VyLm1vdmVUbygwLCAwKVxyXG4gICAgICAgIHBhdGhNYWtlci5saW5lVG8od2lkdGgsIDApXHJcbiAgICAgICAgcGF0aE1ha2VyLmxpbmVUbyh3aWR0aCwgaGVpZ2h0KVxyXG4gICAgICAgIHBhdGhNYWtlci5saW5lVG8oMCwgaGVpZ2h0KVxyXG4gICAgICAgIHBhdGhNYWtlci5jbG9zZVBhdGgoKVxyXG4gICAgICAgIHBvc3RBY3Rpb25zKHBhdGhNYWtlcilcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihkb20pXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBpbXBsZW1lbnRhdGlvbiBmb3VuZCBmb3Igc3ZnIGdyYXBoaWNzIGVsZW1lbnQuJylcclxuICAgIH1cclxuICAgIHJldHVybiBbZ3JvdXBdXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckdyb3VwKGRvbTogU1ZHR0VsZW1lbnQsIGJhc2VEb20/OiBTVkdHcmFwaGljc0VsZW1lbnQpOiBHcm91cFNoYXBlW10ge1xyXG4gICAgbGV0IGl0ZW1zOiBHcm91cFNoYXBlW10gPSBbXVxyXG4gICAgZG9tLmNoaWxkTm9kZXMuZm9yRWFjaChub2RlID0+IHtcclxuICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIFNWR0dyYXBoaWNzRWxlbWVudCkge1xyXG4gICAgICAgICAgICBpdGVtcyA9IHJlbmRlcihub2RlLCBiYXNlRG9tIHx8IGRvbSkuY29uY2F0KGl0ZW1zKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gaXRlbXNcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclBsYWluR2x5cGgodHlwZTogJ3JlY3QnIHwgJ2VsbGlwc2UnLCBhcmdzOiBudW1iZXJbXSk6IEdyb3VwU2hhcGUge1xyXG4gICAgY29uc3QgZ3JvdXA6IEdyb3VwU2hhcGUgPSB7XHJcbiAgICAgICAgdHk6IFwiZ3JcIixcclxuICAgICAgICBpdDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eTogJ3NoJyxcclxuICAgICAgICAgICAgICAgIGtzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgazogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBhOiAwXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaGQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHR5OiAnc3QnLFxyXG4gICAgICAgICAgICAgICAgYzoge1xyXG4gICAgICAgICAgICAgICAgICAgIGs6IFsxLCAxLCAxLCAxXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHc6IHtcclxuICAgICAgICAgICAgICAgICAgICBrOiAxXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbzoge1xyXG4gICAgICAgICAgICAgICAgICAgIGs6IDEwMFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGxjOiBlbmNvZGVMaW5lQ2FwKCdidXR0JyksXHJcbiAgICAgICAgICAgICAgICBsajogZW5jb2RlTGluZUpvaW4oJ21pdGVyJylcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHk6ICdmbCcsXHJcbiAgICAgICAgICAgICAgICBjOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgazogWzEsIDEsIDEsIDFdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbzoge1xyXG4gICAgICAgICAgICAgICAgICAgIGs6IDEwMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eTogJ3RyJyxcclxuICAgICAgICAgICAgICAgIHA6IHtcclxuICAgICAgICAgICAgICAgICAgICBrOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYToge1xyXG4gICAgICAgICAgICAgICAgICAgIGs6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgazogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDEwMFxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgazogMFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG86IHtcclxuICAgICAgICAgICAgICAgICAgICBrOiAxMDBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzazoge1xyXG4gICAgICAgICAgICAgICAgICAgIGs6IDBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzYToge1xyXG4gICAgICAgICAgICAgICAgICAgIGs6IDBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgYm06IDAsXHJcbiAgICAgICAgaGQ6IGZhbHNlXHJcbiAgICB9XHJcbiAgICBjb25zdCBwYXRoTWFrZXIgPSBuZXcgUGF0aE1ha2VyKClcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ3JlY3QnOlxyXG4gICAgICAgICAgICBwYXRoTWFrZXIubW92ZVRvKDAsIDApXHJcbiAgICAgICAgICAgIHBhdGhNYWtlci5saW5lVG8oYXJnc1swXSwgMClcclxuICAgICAgICAgICAgcGF0aE1ha2VyLmxpbmVUbyhhcmdzWzBdLCBhcmdzWzFdKVxyXG4gICAgICAgICAgICBwYXRoTWFrZXIubGluZVRvKDAsIGFyZ3NbMV0pXHJcbiAgICAgICAgICAgIHBhdGhNYWtlci5jbG9zZVBhdGgoKVxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgIGNhc2UgJ2VsbGlwc2UnOlxyXG4gICAgICAgICAgICBwYXRoTWFrZXIubW92ZVRvKGFyZ3NbMF0sIDApXHJcbiAgICAgICAgICAgIHBhdGhNYWtlci5hcmNUbyhhcmdzWzBdLCBhcmdzWzFdLCAwLCAxLCAwLCBhcmdzWzBdLCAyICogYXJnc1sxXSlcclxuICAgICAgICAgICAgcGF0aE1ha2VyLmFyY1RvKGFyZ3NbMF0sIGFyZ3NbMV0sIDAsIDEsIDAsIGFyZ3NbMF0sIDApXHJcbiAgICAgICAgICAgIHBhdGhNYWtlci5jbG9zZVBhdGgoKVxyXG4gICAgfVxyXG4gICAgcGF0aE1ha2VyLnVuaWZvcm0oKTtcclxuICAgIChncm91cC5pdCFbMF0gYXMgUGF0aFNoYXBlKS5rcyEuayA9IHBhdGhNYWtlci5wYXRoXHJcbiAgICByZXR1cm4gZ3JvdXBcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclRleHQoZG9tOiBTVkdUZXh0RWxlbWVudCwgZm9udExpc3Q/OiBGb250cyk6IFtUZXh0RGF0YSwgRm9udDFdIHtcclxuICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGRvbSlcclxuICAgIGNvbnN0IGZvbnRTaXplID0gcGFyc2VGbG9hdChjb21wdXRlZFN0eWxlLmZvbnRTaXplKSxcclxuICAgICAgICBmb250RmFtaWx5ID0gY29tcHV0ZWRTdHlsZS5mb250RmFtaWx5LnNwbGl0KCcsJylbMF0udHJpbSgpLFxyXG4gICAgICAgIGZvbnRTdHlsZSA9IGNvbXB1dGVkU3R5bGUuZm9udFN0eWxlLFxyXG4gICAgICAgIGZvbnRXZWlnaHQgPSBjb21wdXRlZFN0eWxlLmZvbnRXZWlnaHQsXHJcbiAgICAgICAgZm9udENvbG9yID0gKGNvbXB1dGVkU3R5bGUuZmlsbCB8fCAncmdiKDAsMCwwKScpLnNwbGl0KCcoJylbMV0uc3BsaXQoJyknKVswXS5zcGxpdCgnLCcpLm1hcChpID0+IHBhcnNlSW50KGkpIC8gMjU1KSxcclxuICAgICAgICB0ZXh0QW5jaG9yID0gY29tcHV0ZWRTdHlsZS50ZXh0QW5jaG9yXHJcbiAgICBsZXQgZm9udE5hbWUgPSB1dWlkKClcclxuICAgIGlmIChmb250TGlzdCkge1xyXG4gICAgICAgIGNvbnN0IGZvbnRFeGlzdCA9IGZvbnRMaXN0Lmxpc3QhLmZpbHRlcihmb250ID0+IGZvbnQuZkZhbWlseSA9PSBmb250RmFtaWx5ICYmIGZvbnQuZlN0eWxlID09IGZvbnRTdHlsZSAmJiBmb250LmZXZWlnaHQgPT0gZm9udFdlaWdodClcclxuICAgICAgICBpZiAoZm9udEV4aXN0Lmxlbmd0aClcclxuICAgICAgICAgICAgZm9udE5hbWUgPSBmb250RXhpc3RbMF0uZk5hbWUhXHJcbiAgICB9XHJcbiAgICBjb25zdCB0ZXh0RGF0YTogVGV4dERhdGEgPSB7XHJcbiAgICAgICAgZDoge1xyXG4gICAgICAgICAgICBrOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdDogMCxcclxuICAgICAgICAgICAgICAgICAgICBzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHM6IGZvbnRTaXplLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmOiBmb250TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdDogZG9tLmlubmVySFRNTCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgajogZW5jb2RlVGV4dEFuY2hvcih0ZXh0QW5jaG9yKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxzOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYzogZm9udENvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwOiB7fSxcclxuICAgICAgICBtOiB7XHJcbiAgICAgICAgICAgIGE6IHtcclxuICAgICAgICAgICAgICAgIGs6IFtcclxuICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYTogW11cclxuICAgIH1cclxuICAgIGNvbnN0IGZvbnREZWY6IEZvbnQxID0ge1xyXG4gICAgICAgIGZGYW1pbHk6IGZvbnRGYW1pbHksXHJcbiAgICAgICAgZldlaWdodDogYCR7Zm9udFdlaWdodH1gLFxyXG4gICAgICAgIGZTdHlsZTogZm9udFN0eWxlLFxyXG4gICAgICAgIGZOYW1lOiBmb250TmFtZVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFt0ZXh0RGF0YSwgZm9udERlZl1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckltYWdlKGRvbTogU1ZHSW1hZ2VFbGVtZW50LCBhc3NldExpc3Q/OiBBc3NldHMpOiBbUmVmZXJlbmNlSUQsIEltYWdlQXNzZXRdIHtcclxuICAgIGxldCBpZCA9IHV1aWQoKVxyXG4gICAgY29uc3QgZG9tSGVpZ2h0VmFsID0gZG9tLmhlaWdodC5iYXNlVmFsXHJcbiAgICBkb21IZWlnaHRWYWwuY29udmVydFRvU3BlY2lmaWVkVW5pdHMoU1ZHTGVuZ3RoLlNWR19MRU5HVEhUWVBFX1BYKVxyXG4gICAgY29uc3QgZG9tV2lkdGhWYWwgPSBkb20ud2lkdGguYmFzZVZhbFxyXG4gICAgZG9tV2lkdGhWYWwuY29udmVydFRvU3BlY2lmaWVkVW5pdHMoU1ZHTGVuZ3RoLlNWR19MRU5HVEhUWVBFX1BYKVxyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcclxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXHJcblxyXG4gICAgY2FudmFzLndpZHRoID0gZG9tV2lkdGhWYWwudmFsdWVJblNwZWNpZmllZFVuaXRzICogM1xyXG4gICAgY2FudmFzLmhlaWdodCA9IGRvbUhlaWdodFZhbC52YWx1ZUluU3BlY2lmaWVkVW5pdHMgKiAzXHJcbiAgICBjdHghLmRyYXdJbWFnZShkb20sIDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcclxuXHJcbiAgICBjb25zdCBkYXRhVXJsID0gY2FudmFzLnRvRGF0YVVSTCgpXHJcbiAgICBpZiAoYXNzZXRMaXN0KSB7XHJcbiAgICAgICAgY29uc3QgYXNzZXRFeGlzdCA9IGFzc2V0TGlzdCEuZmlsdGVyKGFzc2V0ID0+IGFzc2V0LnAgPT0gZGF0YVVybClcclxuICAgICAgICBpZiAoYXNzZXRFeGlzdC5sZW5ndGgpXHJcbiAgICAgICAgICAgIGlkID0gYXNzZXRFeGlzdFswXS5pZCFcclxuICAgIH1cclxuICAgIGNvbnN0IGFzc2V0ID0ge1xyXG4gICAgICAgIGg6IGRvbUhlaWdodFZhbC52YWx1ZUluU3BlY2lmaWVkVW5pdHMsXHJcbiAgICAgICAgdzogZG9tV2lkdGhWYWwudmFsdWVJblNwZWNpZmllZFVuaXRzLFxyXG4gICAgICAgIGlkLFxyXG4gICAgICAgIHA6IGRhdGFVcmwsXHJcbiAgICAgICAgZTogMVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtpZCwgYXNzZXRdXHJcbn0iXX0=

/***/ }),

/***/ "./node_modules/svg-path-parser/index.js":
/*!***********************************************!*\
  !*** ./node_modules/svg-path-parser/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// v1.0 exported just the parser function. To maintain backwards compatibility,
// we export additional named features as properties of that function.
var parserFunction = __webpack_require__(/*! ./parser.js */ "./node_modules/svg-path-parser/parser.js").parse;
parserFunction.parseSVG = parserFunction;
parserFunction.makeAbsolute = makeSVGPathCommandsAbsolute;
module.exports = parserFunction;

function makeSVGPathCommandsAbsolute(commands) {
	var subpathStart, prevCmd={x:0,y:0};
	var attr = {x:'x0',y:'y0',x1:'x0',y1:'y0',x2:'x0',y2:'y0'};
	commands.forEach(function(cmd) {
		if (cmd.command==='moveto') subpathStart=cmd;
		cmd.x0=prevCmd.x; cmd.y0=prevCmd.y;
		for (var a in attr) if (a in cmd) cmd[a] += cmd.relative ? cmd[attr[a]] : 0;
		if (!('x' in cmd)) cmd.x = prevCmd.x; // V
		if (!('y' in cmd)) cmd.y = prevCmd.y; // X
		cmd.relative = false;
		cmd.code = cmd.code.toUpperCase();
		if (cmd.command=='closepath') {
			cmd.x = subpathStart.x;
			cmd.y = subpathStart.y;
		}
		prevCmd = cmd;
	});
	return commands;
}


/***/ }),

/***/ "./node_modules/svg-path-parser/parser.js":
/*!************************************************!*\
  !*** ./node_modules/svg-path-parser/parser.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Generated by PEG.js 0.10.0.
 *
 * http://pegjs.org/
 */



function peg$subclass(child, parent) {
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor();
}

function peg$SyntaxError(message, expected, found, location) {
  this.message  = message;
  this.expected = expected;
  this.found    = found;
  this.location = location;
  this.name     = "SyntaxError";

  if (typeof Error.captureStackTrace === "function") {
    Error.captureStackTrace(this, peg$SyntaxError);
  }
}

peg$subclass(peg$SyntaxError, Error);

peg$SyntaxError.buildMessage = function(expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
        literal: function(expectation) {
          return "\"" + literalEscape(expectation.text) + "\"";
        },

        "class": function(expectation) {
          var escapedParts = "",
              i;

          for (i = 0; i < expectation.parts.length; i++) {
            escapedParts += expectation.parts[i] instanceof Array
              ? classEscape(expectation.parts[i][0]) + "-" + classEscape(expectation.parts[i][1])
              : classEscape(expectation.parts[i]);
          }

          return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
        },

        any: function(expectation) {
          return "any character";
        },

        end: function(expectation) {
          return "end of input";
        },

        other: function(expectation) {
          return expectation.description;
        }
      };

  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }

  function literalEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/"/g,  '\\"')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }

  function classEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/\]/g, '\\]')
      .replace(/\^/g, '\\^')
      .replace(/-/g,  '\\-')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }

  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }

  function describeExpected(expected) {
    var descriptions = new Array(expected.length),
        i, j;

    for (i = 0; i < expected.length; i++) {
      descriptions[i] = describeExpectation(expected[i]);
    }

    descriptions.sort();

    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }
      descriptions.length = j;
    }

    switch (descriptions.length) {
      case 1:
        return descriptions[0];

      case 2:
        return descriptions[0] + " or " + descriptions[1];

      default:
        return descriptions.slice(0, -1).join(", ")
          + ", or "
          + descriptions[descriptions.length - 1];
    }
  }

  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }

  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};

function peg$parse(input, options) {
  options = options !== void 0 ? options : {};

  var peg$FAILED = {},

      peg$startRuleFunctions = { svg_path: peg$parsesvg_path },
      peg$startRuleFunction  = peg$parsesvg_path,

      peg$c0 = function(data) {
          if (!data) return [];
          for (var cmds=[],i=0;i<data.length;i++) cmds=cmds.concat.apply(cmds,data[i]);
          var first=cmds[0];
          if (first && first.code=='m'){ // Per spec, first moveto is never relative
            delete first.relative;
            first.code = 'M';
          }
          return cmds;
        },
      peg$c1 = function(first, more) { return merge(first,more) },
      peg$c2 = /^[Mm]/,
      peg$c3 = peg$classExpectation(["M", "m"], false, false),
      peg$c4 = function(c, first, more) {
          var move = commands(c,[first]);
          if (more) move = move.concat(commands(c=='M' ? 'L' : 'l',more[1]));
          return move;
        },
      peg$c5 = /^[Zz]/,
      peg$c6 = peg$classExpectation(["Z", "z"], false, false),
      peg$c7 = function() { return commands('Z') },
      peg$c8 = /^[Ll]/,
      peg$c9 = peg$classExpectation(["L", "l"], false, false),
      peg$c10 = function(c, args) { return commands(c,args) },
      peg$c11 = /^[Hh]/,
      peg$c12 = peg$classExpectation(["H", "h"], false, false),
      peg$c13 = function(c, args) { return commands(c,args.map(function(x){ return {x:x}})) },
      peg$c14 = /^[Vv]/,
      peg$c15 = peg$classExpectation(["V", "v"], false, false),
      peg$c16 = function(c, args) { return commands(c,args.map(function(y){ return {y:y}})) },
      peg$c17 = /^[Cc]/,
      peg$c18 = peg$classExpectation(["C", "c"], false, false),
      peg$c19 = function(a, b, c) { return { x1:a.x, y1:a.y, x2:b.x, y2:b.y, x:c.x, y:c.y } },
      peg$c20 = /^[Ss]/,
      peg$c21 = peg$classExpectation(["S", "s"], false, false),
      peg$c22 = function(b, c) { return { x2:b.x, y2:b.y, x:c.x, y:c.y } },
      peg$c23 = /^[Qq]/,
      peg$c24 = peg$classExpectation(["Q", "q"], false, false),
      peg$c25 = function(a, b) { return { x1:a.x, y1:a.y, x:b.x, y:b.y } },
      peg$c26 = /^[Tt]/,
      peg$c27 = peg$classExpectation(["T", "t"], false, false),
      peg$c28 = /^[Aa]/,
      peg$c29 = peg$classExpectation(["A", "a"], false, false),
      peg$c30 = function(rx, ry, xrot, large, sweep, xy) { return { rx:rx, ry:ry, xAxisRotation:xrot, largeArc:large, sweep:sweep, x:xy.x, y:xy.y } },
      peg$c31 = function(x, y) { return { x:x, y:y } },
      peg$c32 = function(n) { return n*1 },
      peg$c33 = function(parts) { return parts.join('')*1 },
      peg$c34 = /^[01]/,
      peg$c35 = peg$classExpectation(["0", "1"], false, false),
      peg$c36 = function(bit) { return bit=='1' },
      peg$c37 = function() { return '' },
      peg$c38 = ",",
      peg$c39 = peg$literalExpectation(",", false),
      peg$c40 = function(parts) { return parts.join('') },
      peg$c41 = ".",
      peg$c42 = peg$literalExpectation(".", false),
      peg$c43 = /^[eE]/,
      peg$c44 = peg$classExpectation(["e", "E"], false, false),
      peg$c45 = /^[+\-]/,
      peg$c46 = peg$classExpectation(["+", "-"], false, false),
      peg$c47 = /^[0-9]/,
      peg$c48 = peg$classExpectation([["0", "9"]], false, false),
      peg$c49 = function(digits) { return digits.join('') },
      peg$c50 = /^[ \t\n\r]/,
      peg$c51 = peg$classExpectation([" ", "\t", "\n", "\r"], false, false),

      peg$currPos          = 0,
      peg$savedPos         = 0,
      peg$posDetailsCache  = [{ line: 1, column: 1 }],
      peg$maxFailPos       = 0,
      peg$maxFailExpected  = [],
      peg$silentFails      = 0,

      peg$result;

  if ("startRule" in options) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }

    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }

  function text() {
    return input.substring(peg$savedPos, peg$currPos);
  }

  function location() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }

  function expected(description, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

    throw peg$buildStructuredError(
      [peg$otherExpectation(description)],
      input.substring(peg$savedPos, peg$currPos),
      location
    );
  }

  function error(message, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

    throw peg$buildSimpleError(message, location);
  }

  function peg$literalExpectation(text, ignoreCase) {
    return { type: "literal", text: text, ignoreCase: ignoreCase };
  }

  function peg$classExpectation(parts, inverted, ignoreCase) {
    return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
  }

  function peg$anyExpectation() {
    return { type: "any" };
  }

  function peg$endExpectation() {
    return { type: "end" };
  }

  function peg$otherExpectation(description) {
    return { type: "other", description: description };
  }

  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos], p;

    if (details) {
      return details;
    } else {
      p = pos - 1;
      while (!peg$posDetailsCache[p]) {
        p--;
      }

      details = peg$posDetailsCache[p];
      details = {
        line:   details.line,
        column: details.column
      };

      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }

        p++;
      }

      peg$posDetailsCache[pos] = details;
      return details;
    }
  }

  function peg$computeLocation(startPos, endPos) {
    var startPosDetails = peg$computePosDetails(startPos),
        endPosDetails   = peg$computePosDetails(endPos);

    return {
      start: {
        offset: startPos,
        line:   startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line:   endPosDetails.line,
        column: endPosDetails.column
      }
    };
  }

  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) { return; }

    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }

    peg$maxFailExpected.push(expected);
  }

  function peg$buildSimpleError(message, location) {
    return new peg$SyntaxError(message, null, null, location);
  }

  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(
      peg$SyntaxError.buildMessage(expected, found),
      expected,
      found,
      location
    );
  }

  function peg$parsesvg_path() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parsewsp();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parsewsp();
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parsemoveTo_drawTo_commandGroups();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parsewsp();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parsewsp();
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c0(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsemoveTo_drawTo_commandGroups() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parsemoveTo_drawTo_commandGroup();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = [];
      s5 = peg$parsewsp();
      while (s5 !== peg$FAILED) {
        s4.push(s5);
        s5 = peg$parsewsp();
      }
      if (s4 !== peg$FAILED) {
        s5 = peg$parsemoveTo_drawTo_commandGroup();
        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = [];
        s5 = peg$parsewsp();
        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$parsewsp();
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parsemoveTo_drawTo_commandGroup();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c1(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsemoveTo_drawTo_commandGroup() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parsemoveto();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = [];
      s5 = peg$parsewsp();
      while (s5 !== peg$FAILED) {
        s4.push(s5);
        s5 = peg$parsewsp();
      }
      if (s4 !== peg$FAILED) {
        s5 = peg$parsedrawto_command();
        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = [];
        s5 = peg$parsewsp();
        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$parsewsp();
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parsedrawto_command();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c1(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsedrawto_command() {
    var s0;

    s0 = peg$parseclosepath();
    if (s0 === peg$FAILED) {
      s0 = peg$parselineto();
      if (s0 === peg$FAILED) {
        s0 = peg$parsehorizontal_lineto();
        if (s0 === peg$FAILED) {
          s0 = peg$parsevertical_lineto();
          if (s0 === peg$FAILED) {
            s0 = peg$parsecurveto();
            if (s0 === peg$FAILED) {
              s0 = peg$parsesmooth_curveto();
              if (s0 === peg$FAILED) {
                s0 = peg$parsequadratic_bezier_curveto();
                if (s0 === peg$FAILED) {
                  s0 = peg$parsesmooth_quadratic_bezier_curveto();
                  if (s0 === peg$FAILED) {
                    s0 = peg$parseelliptical_arc();
                  }
                }
              }
            }
          }
        }
      }
    }

    return s0;
  }

  function peg$parsemoveto() {
    var s0, s1, s2, s3, s4, s5, s6;

    s0 = peg$currPos;
    if (peg$c2.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c3); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewsp();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewsp();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsecoordinate_pair();
        if (s3 !== peg$FAILED) {
          s4 = peg$currPos;
          s5 = peg$parsecomma_wsp();
          if (s5 === peg$FAILED) {
            s5 = null;
          }
          if (s5 !== peg$FAILED) {
            s6 = peg$parselineto_argument_sequence();
            if (s6 !== peg$FAILED) {
              s5 = [s5, s6];
              s4 = s5;
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
          if (s4 === peg$FAILED) {
            s4 = null;
          }
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c4(s1, s3, s4);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseclosepath() {
    var s0, s1;

    s0 = peg$currPos;
    if (peg$c5.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c6); }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c7();
    }
    s0 = s1;

    return s0;
  }

  function peg$parselineto() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (peg$c8.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c9); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewsp();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewsp();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parselineto_argument_sequence();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c10(s1, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parselineto_argument_sequence() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parsecoordinate_pair();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parsecomma_wsp();
      if (s4 === peg$FAILED) {
        s4 = null;
      }
      if (s4 !== peg$FAILED) {
        s5 = peg$parsecoordinate_pair();
        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$parsecomma_wsp();
        if (s4 === peg$FAILED) {
          s4 = null;
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parsecoordinate_pair();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c1(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsehorizontal_lineto() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (peg$c11.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c12); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewsp();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewsp();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsecoordinate_sequence();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c13(s1, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsecoordinate_sequence() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parsenumber();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parsecomma_wsp();
      if (s4 === peg$FAILED) {
        s4 = null;
      }
      if (s4 !== peg$FAILED) {
        s5 = peg$parsenumber();
        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$parsecomma_wsp();
        if (s4 === peg$FAILED) {
          s4 = null;
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parsenumber();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c1(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsevertical_lineto() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (peg$c14.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c15); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewsp();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewsp();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsecoordinate_sequence();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c16(s1, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsecurveto() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (peg$c17.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c18); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewsp();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewsp();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsecurveto_argument_sequence();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c10(s1, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsecurveto_argument_sequence() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parsecurveto_argument();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parsecomma_wsp();
      if (s4 === peg$FAILED) {
        s4 = null;
      }
      if (s4 !== peg$FAILED) {
        s5 = peg$parsecurveto_argument();
        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$parsecomma_wsp();
        if (s4 === peg$FAILED) {
          s4 = null;
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parsecurveto_argument();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c1(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsecurveto_argument() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parsecoordinate_pair();
    if (s1 !== peg$FAILED) {
      s2 = peg$parsecomma_wsp();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsecoordinate_pair();
        if (s3 !== peg$FAILED) {
          s4 = peg$parsecomma_wsp();
          if (s4 === peg$FAILED) {
            s4 = null;
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parsecoordinate_pair();
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c19(s1, s3, s5);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsesmooth_curveto() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (peg$c20.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c21); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewsp();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewsp();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsesmooth_curveto_argument_sequence();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c10(s1, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsesmooth_curveto_argument_sequence() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parsesmooth_curveto_argument();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parsecomma_wsp();
      if (s4 === peg$FAILED) {
        s4 = null;
      }
      if (s4 !== peg$FAILED) {
        s5 = peg$parsesmooth_curveto_argument();
        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$parsecomma_wsp();
        if (s4 === peg$FAILED) {
          s4 = null;
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parsesmooth_curveto_argument();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c1(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsesmooth_curveto_argument() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parsecoordinate_pair();
    if (s1 !== peg$FAILED) {
      s2 = peg$parsecomma_wsp();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsecoordinate_pair();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c22(s1, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsequadratic_bezier_curveto() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (peg$c23.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c24); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewsp();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewsp();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsequadratic_bezier_curveto_argument_sequence();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c10(s1, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsequadratic_bezier_curveto_argument_sequence() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parsequadratic_bezier_curveto_argument();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parsecomma_wsp();
      if (s4 === peg$FAILED) {
        s4 = null;
      }
      if (s4 !== peg$FAILED) {
        s5 = peg$parsequadratic_bezier_curveto_argument();
        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$parsecomma_wsp();
        if (s4 === peg$FAILED) {
          s4 = null;
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parsequadratic_bezier_curveto_argument();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c1(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsequadratic_bezier_curveto_argument() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parsecoordinate_pair();
    if (s1 !== peg$FAILED) {
      s2 = peg$parsecomma_wsp();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsecoordinate_pair();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c25(s1, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsesmooth_quadratic_bezier_curveto() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (peg$c26.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c27); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewsp();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewsp();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsesmooth_quadratic_bezier_curveto_argument_sequence();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c10(s1, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsesmooth_quadratic_bezier_curveto_argument_sequence() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parsecoordinate_pair();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parsecomma_wsp();
      if (s4 === peg$FAILED) {
        s4 = null;
      }
      if (s4 !== peg$FAILED) {
        s5 = peg$parsecoordinate_pair();
        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$parsecomma_wsp();
        if (s4 === peg$FAILED) {
          s4 = null;
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parsecoordinate_pair();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c1(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseelliptical_arc() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (peg$c28.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c29); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewsp();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewsp();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseelliptical_arc_argument_sequence();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c10(s1, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseelliptical_arc_argument_sequence() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parseelliptical_arc_argument();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parsecomma_wsp();
      if (s4 === peg$FAILED) {
        s4 = null;
      }
      if (s4 !== peg$FAILED) {
        s5 = peg$parseelliptical_arc_argument();
        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$parsecomma_wsp();
        if (s4 === peg$FAILED) {
          s4 = null;
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parseelliptical_arc_argument();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c1(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseelliptical_arc_argument() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11;

    s0 = peg$currPos;
    s1 = peg$parsenonnegative_number();
    if (s1 !== peg$FAILED) {
      s2 = peg$parsecomma_wsp();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsenonnegative_number();
        if (s3 !== peg$FAILED) {
          s4 = peg$parsecomma_wsp();
          if (s4 === peg$FAILED) {
            s4 = null;
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parsenumber();
            if (s5 !== peg$FAILED) {
              s6 = peg$parsecomma_wsp();
              if (s6 !== peg$FAILED) {
                s7 = peg$parseflag();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parsecomma_wsp();
                  if (s8 === peg$FAILED) {
                    s8 = null;
                  }
                  if (s8 !== peg$FAILED) {
                    s9 = peg$parseflag();
                    if (s9 !== peg$FAILED) {
                      s10 = peg$parsecomma_wsp();
                      if (s10 === peg$FAILED) {
                        s10 = null;
                      }
                      if (s10 !== peg$FAILED) {
                        s11 = peg$parsecoordinate_pair();
                        if (s11 !== peg$FAILED) {
                          peg$savedPos = s0;
                          s1 = peg$c30(s1, s3, s5, s7, s9, s11);
                          s0 = s1;
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsecoordinate_pair() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parsenumber();
    if (s1 !== peg$FAILED) {
      s2 = peg$parsecomma_wsp();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsenumber();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c31(s1, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsenonnegative_number() {
    var s0, s1;

    s0 = peg$currPos;
    s1 = peg$parsefloating_point_constant();
    if (s1 === peg$FAILED) {
      s1 = peg$parsedigit_sequence();
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c32(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parsenumber() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = peg$parsesign();
    if (s2 === peg$FAILED) {
      s2 = null;
    }
    if (s2 !== peg$FAILED) {
      s3 = peg$parsefloating_point_constant();
      if (s3 !== peg$FAILED) {
        s2 = [s2, s3];
        s1 = s2;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 === peg$FAILED) {
      s1 = peg$currPos;
      s2 = peg$parsesign();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsedigit_sequence();
        if (s3 !== peg$FAILED) {
          s2 = [s2, s3];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c33(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseflag() {
    var s0, s1;

    s0 = peg$currPos;
    if (peg$c34.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c35); }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c36(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parsecomma_wsp() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parsewsp();
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parsewsp();
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parsecomma();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parsewsp();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parsewsp();
        }
        if (s3 !== peg$FAILED) {
          s1 = [s1, s2, s3];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$currPos;
      s2 = peg$parsecomma();
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parsewsp();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parsewsp();
        }
        if (s3 !== peg$FAILED) {
          s2 = [s2, s3];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c37();
      }
      s0 = s1;
    }

    return s0;
  }

  function peg$parsecomma() {
    var s0;

    if (input.charCodeAt(peg$currPos) === 44) {
      s0 = peg$c38;
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c39); }
    }

    return s0;
  }

  function peg$parsefloating_point_constant() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = peg$parsefractional_constant();
    if (s2 !== peg$FAILED) {
      s3 = peg$parseexponent();
      if (s3 === peg$FAILED) {
        s3 = null;
      }
      if (s3 !== peg$FAILED) {
        s2 = [s2, s3];
        s1 = s2;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 === peg$FAILED) {
      s1 = peg$currPos;
      s2 = peg$parsedigit_sequence();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseexponent();
        if (s3 !== peg$FAILED) {
          s2 = [s2, s3];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c40(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parsefractional_constant() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = peg$parsedigit_sequence();
    if (s2 === peg$FAILED) {
      s2 = null;
    }
    if (s2 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 46) {
        s3 = peg$c41;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c42); }
      }
      if (s3 !== peg$FAILED) {
        s4 = peg$parsedigit_sequence();
        if (s4 !== peg$FAILED) {
          s2 = [s2, s3, s4];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 === peg$FAILED) {
      s1 = peg$currPos;
      s2 = peg$parsedigit_sequence();
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 46) {
          s3 = peg$c41;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c42); }
        }
        if (s3 !== peg$FAILED) {
          s2 = [s2, s3];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c40(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseexponent() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = peg$currPos;
    if (peg$c43.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c44); }
    }
    if (s2 !== peg$FAILED) {
      s3 = peg$parsesign();
      if (s3 === peg$FAILED) {
        s3 = null;
      }
      if (s3 !== peg$FAILED) {
        s4 = peg$parsedigit_sequence();
        if (s4 !== peg$FAILED) {
          s2 = [s2, s3, s4];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c40(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parsesign() {
    var s0;

    if (peg$c45.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c46); }
    }

    return s0;
  }

  function peg$parsedigit_sequence() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    if (peg$c47.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c48); }
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        if (peg$c47.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c48); }
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c49(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parsewsp() {
    var s0, s1;

    s0 = peg$currPos;
    if (peg$c50.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c51); }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c37();
    }
    s0 = s1;

    return s0;
  }


    function merge(first,more){
      if (!more) return [first];
      for (var a=[first],i=0,l=more.length;i<l;i++) a[i+1]=more[i][1];
      return a;
    }

    var cmds = {m:'moveto',l:'lineto',h:'horizontal lineto',v:'vertical lineto',c:'curveto',s:'smooth curveto',q:'quadratic curveto',t:'smooth quadratic curveto',a:'elliptical arc',z:'closepath'};
    for (var code in cmds) cmds[code.toUpperCase()]=cmds[code];
    function commands(code,args){
      if (!args) args=[{}];
      for (var i=args.length;i--;){
        var cmd={code:code,command:cmds[code]};
        if (code==code.toLowerCase()) cmd.relative=true;
        for (var k in args[i]) cmd[k]=args[i][k];
        args[i] = cmd;
      }
      return args;
    }


  peg$result = peg$startRuleFunction();

  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }

    throw peg$buildStructuredError(
      peg$maxFailExpected,
      peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
      peg$maxFailPos < input.length
        ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
        : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
    );
  }
}

module.exports = {
  SyntaxError: peg$SyntaxError,
  parse:       peg$parse
};


/***/ }),

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "./node_modules/uuid/lib/rng-browser.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/rng-browser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "./node_modules/uuid/v4.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v4.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "./src/ActionSpec.js":
/*!***************************!*\
  !*** ./src/ActionSpec.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TimingSpec2 = _interopRequireDefault(__webpack_require__(/*! ./TimingSpec.js */ "./src/TimingSpec.js"));

var _GlobalVar = __webpack_require__(/*! ./util/GlobalVar.js */ "./src/util/GlobalVar.js");

var _jsmovin = __webpack_require__(/*! jsmovin */ "./node_modules/jsmovin/bin/jsmovin.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ActionSpec =
/*#__PURE__*/
function (_TimingSpec) {
  _inherits(ActionSpec, _TimingSpec);

  function ActionSpec() {
    var _this;

    _classCallCheck(this, ActionSpec);

    _this = _possibleConstructorReturn(this, (ActionSpec.__proto__ || Object.getPrototypeOf(ActionSpec)).call(this));
    _this.chartIdx = 0;
    _this._type = ActionSpec.actionTypes.appear;
    _this.animationType = ''; //not set by the user

    _this._easing = ActionSpec.easingType.easeLinear;
    _this._duration = 0;
    _this.startTime; //not set by the user

    _this.attribute = [];
    return _this;
  }
  /***** getters and setters *****/


  _createClass(ActionSpec, [{
    key: "initAction",

    /***** end getters and setters *****/

    /**
     * init action using json obj
     * @param {JSON obj} actionJson
     */
    value: function initAction(actionJson) {
      var _this2 = this;

      this.chartIdx = actionJson.chartIdx;
      this.type = actionJson.type; //action type

      this.animationType = actionJson.animationType; //animation type

      this.maskType = typeof actionJson.maskType === 'undefined' ? _jsmovin.MaskType.Alpha : actionJson.maskType;
      this.reference = actionJson.reference; //timingSpec reference

      this.offset = actionJson.offset; //timingSpec delay

      this.duration = actionJson.duration; //action duration

      this.easing = actionJson.easing; //attributes only take effect when type is custom

      if (typeof actionJson.attribute !== 'undefined') {
        actionJson.attribute.forEach(function (attr) {
          var tmpAttr = {
            attrName: attr.attrName,
            from: attr.from,
            to: attr.to
          };

          _this2.attribute.push(tmpAttr);
        });
      }
    }
    /**
     * translate template animations to 'custom' type with the transition on some visual attributes
     */

  }, {
    key: "type",
    set: function set(tp) {
      if (typeof tp !== 'undefined') {
        if (Object.keys(ActionSpec.actionTypes).includes(tp)) {
          this._type = tp;
        } else {
          alert('the \'type\' of action is not defined. ');
        }
      }
    },
    get: function get() {
      return this._type;
    }
  }, {
    key: "easing",
    set: function set(es) {
      if (typeof es !== 'undefined') {
        if (Object.keys(ActionSpec.easingType).includes(es)) {
          this._easing = es;
        } else {
          alert('the \'easing\' of action is not defined. ');
        }
      }
    },
    get: function get() {
      return this._easing;
    }
  }, {
    key: "duration",
    set: function set(drtn) {
      if (typeof drtn !== 'undefined') {
        if (typeof drtn === 'number') {
          this._duration = Math.floor(drtn / (1000 / _TimingSpec2.default.FRAME_RATE)) * (1000 / _TimingSpec2.default.FRAME_RATE);
        } else {
          this._duration = drtn;
        }
      }
    },
    get: function get() {
      return this._duration;
    }
  }], [{
    key: "transToVisualAttrAction",
    value: function transToVisualAttrAction(actionJson, chartIdx, changedAttrs, dataTrans) {
      var actionJsonArr = []; //generate pre-render actions

      var _loop = function _loop(i) {
        var changedAttr = changedAttrs[i];
        var fromArr = [],
            toArr = [];
        dataTrans.forEach(function (transArr, markId) {
          if (chartIdx + 1 < transArr.length) {
            if (changedAttr === 'd' || changedAttr === 'textContent' || changedAttr === 'fill' || changedAttr === 'stroke') {
              var tmpFromItem = [markId, !transArr[chartIdx][changedAttr] ? changedAttr === 'd' ? 'm0,0' : transArr[chartIdx][changedAttr] : transArr[chartIdx][changedAttr]],
                  tmpToItem = [markId, !transArr[chartIdx + 1][changedAttr] ? changedAttr === 'd' ? 'm0,0' : transArr[chartIdx + 1][changedAttr] : transArr[chartIdx + 1][changedAttr]];

              if (changedAttr === 'd') {
                var tmpFromPath = document.createElementNS('http://www.w3.org/2000/svg', 'path'),
                    tmpToPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                tmpFromPath.setAttributeNS(null, 'd', !transArr[chartIdx][changedAttr] ? 'm0,0' : transArr[chartIdx][changedAttr]);
                tmpToPath.setAttributeNS(null, 'd', !transArr[chartIdx + 1][changedAttr] ? 'm0,0' : transArr[chartIdx + 1][changedAttr]);
                var tmpFromPathLen = tmpFromPath.getTotalLength(),
                    tmpToPathLen = tmpToPath.getTotalLength();
                var stepNum = 300,
                    fromPathStepLen = tmpFromPathLen / stepNum,
                    toPathStepLen = tmpToPathLen / stepNum;
                var fromDiscritPath = [],
                    toDiscritPath = [];

                for (var _i = 0; _i < stepNum; _i++) {
                  var tmpFromPnt = tmpFromPath.getPointAtLength(fromPathStepLen * _i),
                      tmpToPnt = tmpToPath.getPointAtLength(toPathStepLen * _i);
                  fromDiscritPath.push([tmpFromPnt.x, tmpFromPnt.y]);
                  toDiscritPath.push([tmpToPnt.x, tmpToPnt.y]);
                }

                tmpFromItem.push(fromDiscritPath);
                tmpToItem.push(toDiscritPath);
              }

              fromArr.push(tmpFromItem);
              toArr.push(tmpToItem);
            } else {
              fromArr.push([markId, parseFloat(transArr[chartIdx][changedAttr])]);
              toArr.push([markId, parseFloat(transArr[chartIdx + 1][changedAttr])]); // if (changedAttr === 'width' || changedAttr === 'height' || changedAttr === 'r') {
              //     console.log(fromArr[fromArr.length - 1], fromArr[0])
              //     fromArr[fromArr.length - 1][1] = 100 * fromArr[fromArr.length - 1][1] / fromArr[0][1];
              //     toArr[toArr.length - 1][1] = 100 * toArr[toArr.length - 1][1] / toArr[0][1];
              // }
            }
          }
        });
        var preObj = {
          chartIdx: actionJson.chartIdx,
          reference: _TimingSpec2.default.timingRef.previousStart,
          offset: 0,
          duration: actionJson.type === ActionSpec.actionTypes.transition ? actionJson.duration : 0,
          type: ActionSpec.actionTargets.mark,
          animationType: ActionSpec.targetAnimationType.custom,
          attribute: [{
            attrName: changedAttr,
            from: fromArr,
            to: toArr
          }]
        };
        actionJsonArr.push(preObj);
      };

      for (var i = 0; i < changedAttrs.length; i++) {
        _loop(i);
      }

      if (actionJson.type !== ActionSpec.actionTypes.transition) {
        var tmpObj = {
          chartIdx: actionJson.chartIdx,
          reference: actionJson.reference,
          //timingSpec offset reference
          offset: actionJson.offset,
          easing: actionJson.easing,
          duration: typeof actionJson.duration === 'undefined' ? _TimingSpec2.default.FRAME_RATE : actionJson.duration,
          type: ActionSpec.actionTargets.mask
        }; // let tmpObj2;

        switch (actionJson.type) {
          case ActionSpec.actionTypes.appear:
            tmpObj.duration = 1000 / _TimingSpec2.default.FRAME_RATE;
            tmpObj.animationType = ActionSpec.targetAnimationType.fade;
            tmpObj.type = ActionSpec.actionTargets.mark;
            tmpObj.attribute = [{
              attrName: 'opacity',
              from: 1,
              to: 0
            }];
            break;

          case ActionSpec.actionTypes.fade:
            tmpObj.animationType = ActionSpec.targetAnimationType.fade;
            tmpObj.type = ActionSpec.actionTargets.mark;
            tmpObj.attribute = [{
              attrName: 'opacity',
              from: 0,
              to: 1
            }];
            break;

          case ActionSpec.actionTypes.fadeOut:
            tmpObj.animationType = ActionSpec.targetAnimationType.fade;
            tmpObj.type = ActionSpec.actionTargets.mark;
            tmpObj.attribute = [{
              attrName: 'opacity',
              from: 1,
              to: 0
            }];
            break;

          case ActionSpec.actionTypes.grow:
            tmpObj.type = ActionSpec.actionTargets.mark;
            tmpObj.animationType = ActionSpec.targetAnimationType.grow;
            tmpObj.attribute = [{
              attrName: 'trimEnd',
              from: 0,
              to: 1
            }];
            break;

          case ActionSpec.actionTypes.degrow:
            tmpObj.type = ActionSpec.actionTargets.mark;
            tmpObj.animationType = ActionSpec.targetAnimationType.grow;
            tmpObj.attribute = [{
              attrName: 'trimEnd',
              from: 1,
              to: 0
            }];
            break;

          case ActionSpec.actionTypes.wipeBottom:
            tmpObj.animationType = ActionSpec.targetAnimationType.wipe;
            tmpObj.maskType = _jsmovin.MaskType.InvertAlpha;
            tmpObj.attribute = [{
              attrName: 'scaleY',
              from: 1,
              to: 0
            }];
            break;

          case ActionSpec.actionTypes.wipeOutFromTop:
            tmpObj.animationType = ActionSpec.targetAnimationType.wipe;
            tmpObj.maskType = _jsmovin.MaskType.InvertAlpha;
            tmpObj.attribute = [{
              attrName: 'scaleY',
              from: 0,
              to: 1
            }];
            break;

          case ActionSpec.actionTypes.wipeTop:
            tmpObj.animationType = ActionSpec.targetAnimationType.wipe;
            tmpObj.maskType = _jsmovin.MaskType.Alpha;
            tmpObj.attribute = [{
              attrName: 'scaleY',
              from: 0,
              to: 1
            }];
            break;

          case ActionSpec.actionTypes.wipeOutFromBottom:
            tmpObj.animationType = ActionSpec.targetAnimationType.wipe;
            tmpObj.maskType = _jsmovin.MaskType.Alpha;
            tmpObj.attribute = [{
              attrName: 'scaleY',
              from: 1,
              to: 0
            }];
            break;

          case ActionSpec.actionTypes.wipeLeft:
            tmpObj.animationType = ActionSpec.targetAnimationType.wipe;
            tmpObj.maskType = _jsmovin.MaskType.Alpha;
            tmpObj.attribute = [{
              attrName: 'scaleX',
              from: 0,
              to: 1
            }];
            break;

          case ActionSpec.actionTypes.wipeOutFromRight:
            tmpObj.animationType = ActionSpec.targetAnimationType.wipe;
            tmpObj.maskType = _jsmovin.MaskType.Alpha;
            tmpObj.attribute = [{
              attrName: 'scaleX',
              from: 1,
              to: 0
            }];
            break;

          case ActionSpec.actionTypes.wipeRight:
            tmpObj.animationType = ActionSpec.targetAnimationType.wipe;
            tmpObj.maskType = _jsmovin.MaskType.InvertAlpha;
            tmpObj.attribute = [{
              attrName: 'scaleX',
              from: 1,
              to: 0
            }];
            break;

          case ActionSpec.actionTypes.wipeOutFromLeft:
            tmpObj.animationType = ActionSpec.targetAnimationType.wipe;
            tmpObj.maskType = _jsmovin.MaskType.InvertAlpha;
            tmpObj.attribute = [{
              attrName: 'scaleX',
              from: 0,
              to: 1
            }];
            break;

          case ActionSpec.actionTypes.circle:
            tmpObj.animationType = ActionSpec.targetAnimationType.circle;
            tmpObj.maskType = _jsmovin.MaskType.Alpha;
            tmpObj.attribute = [{
              attrName: 'scaleX',
              from: 0,
              to: 1
            }, {
              attrName: 'scaleY',
              from: 0,
              to: 1
            }];
            break;

          case ActionSpec.actionTypes.circleOut:
            tmpObj.animationType = ActionSpec.targetAnimationType.circle;
            tmpObj.maskType = _jsmovin.MaskType.Alpha;
            tmpObj.attribute = [{
              attrName: 'scaleX',
              from: 1,
              to: 0
            }, {
              attrName: 'scaleY',
              from: 1,
              to: 0
            }];
            break;

          case ActionSpec.actionTypes.wheel:
            tmpObj.animationType = ActionSpec.targetAnimationType.wheel;
            tmpObj.maskType = _jsmovin.MaskType.InvertAlpha;
            tmpObj.attribute = [{
              attrName: 'trimEnd',
              from: 1,
              to: 0
            }];
            break;

          case ActionSpec.actionTypes.wheelOut:
            tmpObj.animationType = ActionSpec.targetAnimationType.wheel;
            tmpObj.maskType = _jsmovin.MaskType.InvertAlpha;
            tmpObj.attribute = [{
              attrName: 'trimEnd',
              from: 0,
              to: 1
            }];
            break;
          // case ActionSpec.actionTypes.zoom:
          //     tmpObj.type = ActionSpec.actionTargets.mark;
          //     tmpObj.reference = TimingSpec.timingRef.previousStart;
          //     tmpObj.offset = 0;
          //     tmpObj.animationType = ActionSpec.targetAnimationType.wipe;
          //     tmpObj.attribute = {
          //         attrName: 'width',
          //         from: 0,
          //         to: 1
          //     };
          //     let tmpObj2 = {
          //         chartIdx: actionJson.chartIdx,
          //         easing: actionJson.easing,
          //         duration: typeof actionJson.duration === 'undefined' ? 300 : actionJson.duration,
          //         reference: actionJson.reference,//timingSpec offset reference
          //         offset: actionJson.offset,
          //         type: ActionSpec.actionTargets.mask,
          //         animationType: ActionSpec.targetAnimationType.wipe,
          //         attribute: {
          //             attrName: 'height',
          //             from: 1,
          //             to: 0
          //         }
          //     };
          //     actionJsonArr.push(tmpObj2);
          //     break;
          // case ActionSpec.actionTypes.custom:
          //     tmpObj.type = ActionSpec.actionTargets.mark;
          //     tmpObj.animationType = ActionSpec.targetAnimationType.custom;
          //     tmpObj.attribute = {};
          //     if (typeof actionJson.attribute !== 'undefined') {
          //         tmpObj.attribute = [{
          //             attrName: actionJson.attribute.attrName,
          //             from: actionJson.attribute.from,
          //             to: actionJson.attribute.to
          //         }]
          //     }
          //     break;
        }

        actionJsonArr.push(tmpObj);
      }

      return actionJsonArr;
    }
    /**
     * calculate the total duration of all the actions
     * @param {Array<ActionSpec>} actionArr 
     * @param {Map} durationAttrValues: key: data attr name, value Map{key: markId, value: attr value}
     */

  }, {
    key: "calActionDuration",
    value: function calActionDuration(actionArr, durationAttrValues, domMarks) {
      var wholeStart = 0,
          wholeEnd = -100000; //start time of the earliest action and end time of the lastst action

      var lastStart = 0,
          lastEnd = 0;
      var durationWithAttr = false;

      var _loop2 = function _loop2(i) {
        var tmpStartMap = void 0,
            tmpEndMap = new Map();
        tmpStartMap = actionArr[i].calOffsetTime(lastStart, lastEnd, 0, domMarks); //change to retunr value of Map
        //ignore the influence of the animation for the boundary of the mask

        if (i > 0) {
          if (actionArr[i - 1].animationType === ActionSpec.targetAnimationType.mistake) {
            tmpStartMap.forEach(function (tmpStart, markId) {
              tmpStartMap.set(markId, tmpStart - actionArr[i - 1].offset);
            });
          }
        }

        var minTmpStart = 1000000,
            maxTmpEnd = -100000;
        actionArr[i].offsetStart = new Map();
        tmpStartMap.forEach(function (tmpStart, markId) {
          var tmpEnd = 0;

          if (_typeof(actionArr[i].duration) === 'object') {
            durationWithAttr = true;
            tmpEnd = tmpStart;
          } else if (typeof actionArr[i].duration === 'number') {
            tmpEnd = tmpStart + actionArr[i].duration;
          }

          tmpEndMap.set(markId, tmpEnd);
          actionArr[i].offsetStart.set(markId, tmpStart);

          if (tmpStart < minTmpStart) {
            minTmpStart = tmpStart;
          }

          if (tmpEnd > maxTmpEnd) {
            maxTmpEnd = tmpEnd;
          }

          if (tmpStart < wholeStart) {
            wholeStart = tmpStart;
          }

          if (tmpEnd > wholeEnd) {
            wholeEnd = tmpEnd;
          }
        });
        lastStart = minTmpStart;
        lastEnd = maxTmpEnd;
      };

      for (var i = 0; i < actionArr.length; i++) {
        _loop2(i);
      }

      var tmpResultDuration = wholeEnd - wholeStart;
      var resultDurations = new Map(); //key: markId, value: duraiton of this mark

      var minValueEachAttr = new Map();

      if (durationWithAttr) {
        //add duration with the attribute values
        //find the min value for each attr
        durationAttrValues.forEach(function (attrs, markId) {
          attrs.forEach(function (attrValue, attrName) {
            if (typeof minValueEachAttr.get(attrName) === 'undefined' || attrValue[0] < minValueEachAttr.get(attrName)) {
              minValueEachAttr.set(attrName, attrValue[0]);
            }
          });
        });
        durationAttrValues.forEach(function (attrs, markId) {
          var tmpExtraDuration = 0;
          attrs.forEach(function (attrValue, attrName) {
            var minAttrValue = minValueEachAttr.get(attrName);
            tmpExtraDuration += attrValue[1] * attrValue[0] / minAttrValue;
          });
          resultDurations.set(markId, tmpResultDuration + tmpExtraDuration);
        });
      } else {
        //directly set the duration of each mark with tmpResultDuration
        durationAttrValues.forEach(function (value, markId) {
          resultDurations.set(markId, tmpResultDuration);
        });
      }

      return [resultDurations, minValueEachAttr, actionArr];
    }
  }, {
    key: "transToLottieAction",
    value: function transToLottieAction(easingName) {
      switch (easingName) {
        case ActionSpec.easingType.easeLinear:
          return _jsmovin.EasingFactory.linear();

        case ActionSpec.easingType.easeInQuad:
          return _jsmovin.EasingFactory.easeInQuad();

        case ActionSpec.easingType.easeOutQuad:
          return _jsmovin.EasingFactory.easeOutQuad();

        case ActionSpec.easingType.easeInOutQuad:
          return _jsmovin.EasingFactory.easeInOutQuad();

        case ActionSpec.easingType.easeInCubic:
          return _jsmovin.EasingFactory.easeInCubic();

        case ActionSpec.easingType.easeOutCubic:
          return _jsmovin.EasingFactory.easeOutCubic();

        case ActionSpec.easingType.easeInOutCubic:
          return _jsmovin.EasingFactory.easeInOutCubic();
      }
    }
  }]);

  return ActionSpec;
}(_TimingSpec2.default);

ActionSpec.actionTypes = {
  fade: 'fade',
  wipeBottom: 'wipe bottom',
  wipeTop: 'wipe top',
  wipeLeft: 'wipe left',
  wipeRight: 'wipe right',
  wheel: 'wheel',
  appear: 'appear',
  circle: 'circle',
  grow: 'grow',
  custom: 'custom',
  fadeOut: 'fade out',
  wipeOutFromLeft: 'wipe out from left',
  wipeOutFromTop: 'wipe out from top',
  wipeOutFromRight: 'wipe out from right',
  wipeOutFromBottom: 'wipe out from bottom',
  wheelOut: 'wheel out',
  circleOut: 'circle out',
  degrow: 'degrow',
  transition: 'magic move',
  zoom: 'zoom',
  mark: 'mask',
  mask: 'mark'
};
ActionSpec.actionTargets = {
  mark: 'mark',
  mask: 'mask'
};
ActionSpec.targetAnimationType = {
  fade: 'fade',
  wipe: 'wipe',
  move: 'move',
  wheel: 'wheel',
  circle: 'circle',
  appear: 'appear',
  grow: 'grow',
  custom: 'custom',
  mistake: 'mistake'
};
ActionSpec.easingType = {
  easeLinear: 'easeLinear',
  easeInQuad: 'easeInQuad',
  easeOutQuad: 'easeOutQuad',
  easeInOutQuad: 'easeInOutQuad',
  easeInCubic: 'easeInCubic',
  easeOutCubic: 'easeOutCubic',
  easeInOutCubic: 'easeInOutCubic',
  easeOutBounce: 'easeOutBounce'
};
var _default = ActionSpec;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/AniRenderer.js":
/*!****************************!*\
  !*** ./src/AniRenderer.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TimingSpec = _interopRequireDefault(__webpack_require__(/*! ./TimingSpec.js */ "./src/TimingSpec.js"));

var _AnimationSpec = _interopRequireDefault(__webpack_require__(/*! ./AnimationSpec.js */ "./src/AnimationSpec.js"));

var _Util = __webpack_require__(/*! ./util/Util.js */ "./src/util/Util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Renderer =
/*#__PURE__*/
function () {
  function Renderer() {
    _classCallCheck(this, Renderer);
  }
  /**
   * get the corresponding frame of current time from Animation.frames
   * and update the dom attrs according to the recorded attrs status in that frame
   * @param {number} : time in ms
   */


  _createClass(Renderer, null, [{
    key: "renderFrame",
    value: function renderFrame(ctime) {
      var frame = _AnimationSpec.default.renderFrame(ctime);

      if (typeof frame === 'undefined') {
        return false;
      }

      var _loop = function _loop(i, markStatus) {
        markStatus[1].forEach(function (singleStatus, attrName) {
          var aniId = '';

          if (singleStatus.type === 'mark') {
            aniId = 'ani' + markStatus[0];

            switch (singleStatus.attrName) {
              case 'textContent':
                if (_Util.Util.checkHTML(singleStatus.value)) {
                  var tmpDom = _Util.Util.strToDomNode(singleStatus.value);

                  document.getElementById(aniId).appendChild(tmpDom);
                } else {
                  document.getElementById(aniId).innerHTML = singleStatus.value;
                  document.getElementById(aniId).textContent = singleStatus.value;
                }

                break;

              case 'stroke-dashoffset':
                document.getElementById(aniId).setAttributeNS(null, 'stroke-dasharray', document.getElementById(aniId).getTotalLength());
                document.getElementById(aniId).setAttributeNS(null, singleStatus.attrName, singleStatus.value);
                break;

              case 'x':
              case 'y':
                document.getElementById(aniId).setAttributeNS(null, singleStatus.attrName, singleStatus.value);

                if (document.getElementById('animaskCover' + markStatus[0])) {
                  if (singleStatus.attrName === 'y' && document.getElementById(markStatus[0]).tagName === 'text') {
                    document.getElementById('animaskCover' + markStatus[0]).setAttributeNS(null, singleStatus.attrName, singleStatus.value - parseFloat(document.getElementById('animaskBg' + markStatus[0]).getAttributeNS(null, 'height')));
                  } else {
                    document.getElementById('animaskCover' + markStatus[0]).setAttributeNS(null, singleStatus.attrName, singleStatus.value);
                  }
                }

                document.getElementById(aniId).setAttributeNS(null, singleStatus.attrName, singleStatus.value);
                break;

              default:
                document.getElementById(aniId).setAttributeNS(null, singleStatus.attrName, singleStatus.value);
            } //change animaskBgmark with the mark


            var aniMarkBgId = 'animaskBg' + markStatus[0],
                currentAniMarkBBox = document.getElementById(aniId).getBBox();
            document.getElementById(aniMarkBgId).setAttributeNS(null, 'x', currentAniMarkBBox.x - 1);
            document.getElementById(aniMarkBgId).setAttributeNS(null, 'y', currentAniMarkBBox.y - 1);
            document.getElementById(aniMarkBgId).setAttributeNS(null, 'width', currentAniMarkBBox.width + 2);
            document.getElementById(aniMarkBgId).setAttributeNS(null, 'height', currentAniMarkBBox.height + 2);
          } else if (singleStatus.type === 'mask') {
            aniId = 'animask' + markStatus[0];
            /*
             *1st. check whether the mask is added 
             *2nd. check whether the mask is the right shape
             *3rd. set the attributes of the mask
             */

            var testAniMCover = document.querySelectorAll('#' + aniId + ' [id^="animaskCover"]');

            switch (singleStatus.animationType) {
              case 'fade':
              case 'move':
              case 'wipe':
              case 'custom':
                if (testAniMCover.length > 0) {
                  //already has a mask cover
                  var aniMCover = document.getElementById('animaskCover' + markStatus[0]);

                  if (aniMCover.getAttribute('maskType') !== 'rect') {
                    //current cover is not the right shape
                    aniMCover.parentNode.removeChild(aniMCover);
                    var rect = Renderer.generateMaskCover(Renderer.coverTypes.rect, markStatus[0], singleStatus.attrName, singleStatus.value);
                    document.getElementById(aniId).appendChild(rect);
                  } else {
                    document.getElementById('animaskCover' + markStatus[0]).setAttributeNS(null, singleStatus.attrName, singleStatus.value);
                  }
                } else {
                  //don't have a mask cover yet
                  var _rect = Renderer.generateMaskCover(Renderer.coverTypes.rect, markStatus[0], singleStatus.attrName, singleStatus.value);

                  document.getElementById(aniId).appendChild(_rect);
                }

                break;

              case 'circle':
              case 'wheel':
                var d = _Util.Util.arc(singleStatus.value.cx, singleStatus.value.cy, singleStatus.value.innerRadius, singleStatus.value.outterRadius - 6, singleStatus.value.startAngle, singleStatus.value.endAngle);

                if (testAniMCover.length > 0) {
                  //already has a mask cover
                  var _aniMCover = document.getElementById('animaskCover' + markStatus[0]);

                  if (_aniMCover.getAttribute('maskType') !== 'wedge') {
                    //current cover is not the right shape
                    _aniMCover.parentNode.removeChild(_aniMCover);

                    var wedge = Renderer.generateMaskCover(Renderer.coverTypes.path, markStatus[0], 'd', d);
                    document.getElementById(aniId).appendChild(wedge);
                  } else {
                    document.getElementById('animaskCover' + markStatus[0]).setAttributeNS(null, 'd', d);
                  }
                } else {
                  //don't have a mask cover yet
                  var _wedge = Renderer.generateMaskCover(Renderer.coverTypes.path, markStatus[0], 'd', d);

                  document.getElementById(aniId).appendChild(_wedge);
                }

                break;

              case 'mistake':
                if (testAniMCover.length > 0) {
                  //already has a mask cover
                  document.getElementById('animaskCover' + markStatus[0]).setAttributeNS(null, singleStatus.attrName, singleStatus.value);
                }

                break;
            }
          } else {
            console.log('this status has no type');
          }
        });
      };

      for (var i = 0, markStatus; i < frame.length | (markStatus = frame[i]); i++) {
        _loop(i, markStatus);
      }

      return true;
    }
  }, {
    key: "generateMaskCover",
    value: function generateMaskCover(coverType, markId, updateAttrName, updateAttrValue) {
      var maskCover;

      switch (coverType) {
        case Renderer.coverTypes.rect:
          maskCover = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
          maskCover.setAttributeNS(null, 'maskType', 'rect');
          maskCover.setAttributeNS(null, 'x', document.getElementById('animaskBg' + markId).getAttribute('x'));
          maskCover.setAttributeNS(null, 'y', document.getElementById('animaskBg' + markId).getAttribute('y'));
          maskCover.setAttributeNS(null, 'width', document.getElementById('animaskBg' + markId).getAttribute('width'));
          maskCover.setAttributeNS(null, 'height', document.getElementById('animaskBg' + markId).getAttribute('height'));
          break;

        case Renderer.coverTypes.path:
          maskCover = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          maskCover.setAttributeNS(null, 'maskType', 'wedge');

          if (document.getElementById(markId).getAttribute('transform')) {
            maskCover.setAttributeNS(null, 'tranform', document.getElementById(markId).getAttribute('transform'));
          }

          break;
      }

      maskCover.setAttributeNS(null, 'id', 'animaskCover' + markId);
      maskCover.setAttributeNS(null, 'fill', '#000');
      maskCover.setAttributeNS(null, 'stroke', '#000');
      maskCover.setAttributeNS(null, 'stroke-width', 4);
      if (updateAttrName !== 'stroke') maskCover.setAttributeNS(null, updateAttrName, updateAttrValue);
      return maskCover;
    }
  }, {
    key: "resetCover",
    value: function resetCover() {
      var animaskCovers = document.querySelectorAll('[id^="animaskCover"]');

      if (animaskCovers.length > 0) {
        [].forEach.call(animaskCovers, function (mc) {
          mc.parentNode.removeChild(mc);
        });
      }
    }
  }, {
    key: "play",
    value: function play() {
      var _this = this;

      var time = 0;
      var animationInterval = setInterval(function () {
        //render this frame
        time = parseInt(time / (1000 / _TimingSpec.default.FRAME_RATE)) * (1000 / _TimingSpec.default.FRAME_RATE);

        var locatedFrame = _this.renderFrame(time);

        time += 1000 / _TimingSpec.default.FRAME_RATE;

        if (time > _AnimationSpec.default.wholeEndTime || !locatedFrame) {
          clearInterval(animationInterval);
          animationInterval = 'undefined';
          time = 0;
        }
      }, 1000 / _TimingSpec.default.FRAME_RATE);
    }
  }]);

  return Renderer;
}();

Renderer.coverTypes = {
  rect: Symbol(),
  path: Symbol()
};
var _default = Renderer;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/AnimationSpec.js":
/*!******************************!*\
  !*** ./src/AnimationSpec.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ChartSpec = _interopRequireDefault(__webpack_require__(/*! ./ChartSpec.js */ "./src/ChartSpec.js"));

var _ActionSpec = _interopRequireDefault(__webpack_require__(/*! ./ActionSpec.js */ "./src/ActionSpec.js"));

var _GroupingSpec = _interopRequireDefault(__webpack_require__(/*! ./GroupingSpec.js */ "./src/GroupingSpec.js"));

var _TimingSpec2 = _interopRequireDefault(__webpack_require__(/*! ./TimingSpec.js */ "./src/TimingSpec.js"));

var _Util = __webpack_require__(/*! ./util/Util.js */ "./src/util/Util.js");

var _GlobalVar = __webpack_require__(/*! ./util/GlobalVar.js */ "./src/util/GlobalVar.js");

var _helper = __webpack_require__(/*! jsmovin/bin/helper */ "./node_modules/jsmovin/bin/helper.js");

var _jsmovin = __webpack_require__(/*! jsmovin */ "./node_modules/jsmovin/bin/jsmovin.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Animation =
/*#__PURE__*/
function (_TimingSpec) {
  _inherits(Animation, _TimingSpec);

  function Animation() {
    var _this;

    _classCallCheck(this, Animation);

    _this = _possibleConstructorReturn(this, (Animation.__proto__ || Object.getPrototypeOf(Animation)).call(this));
    _this.chartIdx;
    _this.selection;
    _this.grouping = new _GroupingSpec.default();
    _this.actions = []; //save all dom attrs of the marks selected in this animation

    _this.domMarks = new Map(); //key: markId, value: dom attrs

    _this.animationStartTime = 1000000;
    _this.animationEndTime = 0;
    return _this;
  }
  /**
   * translate from json object to Animation object
   * @param {JSON obj} animationJson 
   */


  _createClass(Animation, [{
    key: "translate",
    value: function translate(animationJson, usedChangedAttrs) {
      if (this.checkFormat(animationJson)) {
        this.chartIdx = animationJson.chartIdx;
        this.selection = animationJson.selection; //init selection

        this.reference = animationJson.reference;
        this.offset = animationJson.offset;

        if (typeof animationJson.grouping !== 'undefined') {
          //init grouping
          this.grouping.initGrouping(animationJson.grouping);
        } //translate action specs in the animation Json


        if (typeof animationJson.actions !== 'undefined') {
          //init actions
          for (var i = 0, actionJson; i < animationJson.actions.length | (actionJson = animationJson.actions[i]); i++) {
            actionJson.chartIdx = animationJson.chartIdx;

            var visAttrActionJsonArr = _ActionSpec.default.transToVisualAttrAction(actionJson, animationJson.chartIdx, usedChangedAttrs, _ChartSpec.default.dataTrans); //translate templates to no-templates


            for (var j = 0, visAttrActionJson; j < visAttrActionJsonArr.length | (visAttrActionJson = visAttrActionJsonArr[j]); j++) {
              var tmpAction = new _ActionSpec.default();
              tmpAction.initAction(visAttrActionJson);
              this.actions.push(tmpAction);
            }
          }
        }
      }
    }
    /**
     * check if the input json format is illegal
     * @param {JSON obj} animationJson 
     */

  }, {
    key: "checkFormat",
    value: function checkFormat(animationJson) {
      var keys = Object.keys(animationJson);

      if (keys.includes('selection')) {
        return true;
      }

      alert('illegal format, no \'selection\' is defined ');
      return false;
    }
    /**
     * calculate timing for each mark;
     * @param {Array} markIds : array of mark ids
     * @param {Animation} lastAnimation : last animation in order to calculate time
     */

  }, {
    key: "calAniTime",
    value: function calAniTime(markIds, lastAnimation) {
      var that = this; //check whether the durations of the actions are set with the data variables

      var durationAttrValues = new Map();

      for (var i = 0, markId; i < markIds.length | (markId = markIds[i]); i++) {
        var tmpAttrValues = new Map();

        for (var j = 0, action; j < this.actions.length | (action = this.actions[j]); j++) {
          if (_typeof(action.duration) === 'object') {
            var datum = this.domMarks.get(markId)['data-datum'];
            var value = parseFloat(datum[action.duration.field]);
            var minDuration = typeof action.duration.minDuration == 'undefined' ? 300 : action.duration.minDuration;
            tmpAttrValues.set(action.duration.field, [value, minDuration]);
          }
        }

        durationAttrValues.set(markId, tmpAttrValues);
      } //calculate the duration of all actions


      var _ActionSpec$calAction = _ActionSpec.default.calActionDuration(this.actions, durationAttrValues, this.domMarks),
          _ActionSpec$calAction2 = _slicedToArray(_ActionSpec$calAction, 3),
          actionsDurations = _ActionSpec$calAction2[0],
          minValueEachAttr = _ActionSpec$calAction2[1],
          processedActions = _ActionSpec$calAction2[2]; //order the marks according to "sort"


      var marksInOrder = this.grouping.arrangeOrder(markIds, this.domMarks);
      var markAni = new Map(); //the time specs and action specs of each mark, for now using Map, check later to see whether it is worthy to change to Array

      var groupByMap = new Map(); //record the result of groupBy. key:markId, value:group reference

      for (var _i2 = 0, _markId; _i2 < marksInOrder.length | (_markId = marksInOrder[_i2]); _i2++) {
        //record visual status of all marks
        var tmpObj = {};

        for (var _j = 0, vAttr; _j < Animation.visualAttrs.length | (vAttr = Animation.visualAttrs[_j]); _j++) {
          if (typeof this.domMarks.get(_markId)[vAttr] === 'undefined') {
            switch (vAttr) {
              case 'opacity':
                //give default opacity 1
                tmpObj[vAttr] = 1;
                break;

              case 'width':
                //use the width of the bounding box 
                tmpObj[vAttr] = this.domMarks.get(_markId)['bbWidth'];
                break;

              case 'height':
                //use the height of the bounding box 
                tmpObj[vAttr] = this.domMarks.get(_markId)['bbHeight'];
                break;

              case 'x':
                //use the position x of the bounding box 
                tmpObj[vAttr] = this.domMarks.get(_markId)['bbX'];
                break;

              case 'y':
                //use the position y of the bounding box 
                tmpObj[vAttr] = this.domMarks.get(_markId)['bbY'];
                break;

              case 'cx':
                //use the center of the bounding box 
                if (typeof this.domMarks.get(_markId)['cx'] !== 'undefined') {
                  tmpObj[vAttr] = this.domMarks.get(_markId)['cx'];
                } else {
                  tmpObj[vAttr] = this.domMarks.get(_markId)['bbX'] + this.domMarks.get(_markId)['bbWidth'] / 2;
                }

                break;

              case 'cy':
                //use the center of the bounding box 
                if (typeof this.domMarks.get(_markId)['cy'] !== 'undefined') {
                  tmpObj[vAttr] = this.domMarks.get(_markId)['cy'];
                } else {
                  tmpObj[vAttr] = this.domMarks.get(_markId)['bbY'] + this.domMarks.get(_markId)['bbHeight'] / 2;
                }

                break;

              case 'innerRadius':
                //give default inner radius 0
                if (typeof this.domMarks.get(_markId)['innerRadius'] !== 'undefined') {
                  tmpObj[vAttr] = this.domMarks.get(_markId)['innerRadius'];
                } else {
                  tmpObj[vAttr] = 0;
                }

                break;

              case 'outterRadius':
                //use half of the diagonal line of the bounding box
                if (typeof this.domMarks.get(_markId)['outterRadius'] !== 'undefined') {
                  tmpObj[vAttr] = this.domMarks.get(_markId)['outterRadius'];
                } else {
                  tmpObj[vAttr] = Math.sqrt(Math.pow(this.domMarks.get(_markId)['bbWidth'] / 2, 2) + Math.pow(this.domMarks.get(_markId)['bbHeight'] / 2, 2)) + 1;
                }

                break;

              case 'startAngle':
                if (typeof this.domMarks.get(_markId)['startAngle'] !== 'undefined') {
                  tmpObj[vAttr] = this.domMarks.get(_markId)['startAngle'];
                } else {
                  tmpObj[vAttr] = 0;
                }

                break;

              case 'endAngle':
                if (typeof this.domMarks.get(_markId)['endAngle'] !== 'undefined') {
                  tmpObj[vAttr] = this.domMarks.get(_markId)['endAngle'];
                } else {
                  tmpObj[vAttr] = Math.PI * 2;
                }

                break;
            }
          } else {
            tmpObj[vAttr] = this.domMarks.get(_markId)[vAttr];
          }

          if (tmpObj[vAttr] !== '') {
            if (typeof Animation.minStatus.get(vAttr) === 'undefined') {
              Animation.minStatus.set(vAttr, tmpObj[vAttr]);
            } else {
              if (parseFloat(Animation.minStatus.get(vAttr)) > parseFloat(tmpObj[vAttr])) {
                Animation.minStatus.set(vAttr, tmpObj[vAttr]);
              }
            }
          }
        }

        if (typeof Animation.finalStatus.get(_markId) === 'undefined') {
          Animation.finalStatus.set(_markId, []);
        }

        Animation.finalStatus.get(_markId).push(tmpObj);
        markAni.set(_markId, {
          'startTime': 0,
          //start time of this mark 
          'totalDuration': actionsDurations.get(_markId),
          //total duration of all the actions of this mark
          'actionAttrs': [] //action attributes of this mark

        });
        groupByMap.set(_markId, 'allMarks');
      }

      this.grouping.calTimeInGrouping(markAni, this.domMarks); //update time according to the time spec of animation

      var tmpAllStart = 10000;
      markAni.forEach(function (value, markId) {
        if (value.startTime < tmpAllStart) {
          tmpAllStart = value.startTime;
        }
      });
      var timeDiff = typeof lastAnimation === 'undefined' ? this.calOffsetTime(0, 0, tmpAllStart, this.domMarks) : this.calOffsetTime(lastAnimation.animationStartTime, lastAnimation.animationEndTime, tmpAllStart, this.domMarks);
      markAni.forEach(function (value, markId) {
        var tmpObj = {
          'startTime': value.startTime + timeDiff.get(markId),
          'totalDuration': value.totalDuration,
          'actionAttrs': []
        };

        if (tmpObj.startTime < that.animationStartTime) {
          that.animationStartTime = tmpObj.startTime;
        }

        if (tmpObj.startTime + tmpObj.totalDuration > that.animationEndTime) {
          that.animationEndTime = tmpObj.startTime + tmpObj.totalDuration;
        }

        for (var _i3 = 0, a; _i3 < processedActions.length | (a = processedActions[_i3]); _i3++) {
          var tmpActionSpec = new _ActionSpec.default();
          var keys = Object.keys(a);

          for (var _j2 = 0, attr; _j2 < keys.length | (attr = keys[_j2]); _j2++) {
            tmpActionSpec[attr] = a[attr];

            if (attr === '_duration' && _typeof(a[attr]) === 'object') {
              var _datum = that.domMarks.get(markId)['data-datum'];
              var minAttrValue = minValueEachAttr.get(a[attr].field);
              tmpActionSpec[attr] = a[attr].minDuration * parseFloat(_datum[a[attr].field]) / minAttrValue;
            } else if (attr === 'offsetStart') {
              tmpActionSpec[attr] = a[attr].get(markId);
            }
          } //if the animation type is custom then judge if the attribute in the action about to add is a valid property of the target mark


          if (tmpActionSpec.animationType === _ActionSpec.default.targetAnimationType.custom) {
            if (_Util.Util.checkValidProp(that.domMarks.get(markId)['tagName'], tmpActionSpec.attribute[0].attrName)) {
              tmpObj.actionAttrs.push(tmpActionSpec);
            }
          } else {
            tmpObj.actionAttrs.push(tmpActionSpec);
          }
        }

        markAni.set(markId, tmpObj);
      });
      markAni.forEach(function (value, markId) {
        //update the start time of actions 
        for (var _i4 = 0; _i4 < value.actionAttrs.length; _i4++) {
          value.actionAttrs[_i4].startTime = value.startTime + value.actionAttrs[_i4].offsetStart; //absolute start time
        }

        if (typeof Animation.allMarkAni.get(markId) === 'undefined') {
          Animation.allMarkAni.set(markId, value);
        } else {
          //merge animation specs for the same mark
          var currentStartTime = Animation.allMarkAni.get(markId).startTime;
          var currentEndTime = currentStartTime + Animation.allMarkAni.get(markId).totalDuration;
          Animation.allMarkAni.get(markId).startTime = currentStartTime < value.startTime ? currentStartTime : value.startTime;
          var tmpEndTime = value.startTime + value.totalDuration;
          currentEndTime = currentEndTime > tmpEndTime ? currentEndTime : tmpEndTime;
          Animation.allMarkAni.get(markId).totalDuration = currentEndTime - Animation.allMarkAni.get(markId).startTime;
          Animation.allMarkAni.get(markId).actionAttrs = [].concat(_toConsumableArray(Animation.allMarkAni.get(markId).actionAttrs), _toConsumableArray(value.actionAttrs));
        }
      });
    }
    /**
     * calculate timing for each action then render animation by slicing the action specs into frames
     */

  }], [{
    key: "renderAnimation",
    value: function renderAnimation() {
      var that = this;
      this.allMarkAni.forEach(function (value, markId) {
        //record the end time of the entire animation, and record the init status of each mark
        if (that.wholeEndTime < value.startTime + value.totalDuration) {
          that.wholeEndTime = value.startTime + value.totalDuration;
        } // //categorize the actions according to the attribute name in order to insert place holder actions
        // let maskActionByAttr = new Map(), markActionByAttr = new Map();
        // for (let i = 0, item; i < value.actionAttrs.length | (item = value.actionAttrs[i]); i++) {
        //     if (item.type === ActionSpec.actionTargets.mark) {
        //         if (typeof markActionByAttr.get(item.attribute.attrName) === 'undefined') {
        //             markActionByAttr.set(item.attribute.attrName, [item]);
        //         } else {
        //             markActionByAttr.get(item.attribute.attrName).push(item);
        //         }
        //     } else if (item.type === ActionSpec.actionTargets.mask) {
        //         if (typeof maskActionByAttr.get(item.attribute.attrName) === 'undefined') {
        //             maskActionByAttr.set(item.attribute.attrName, [item]);
        //         } else {
        //             maskActionByAttr.get(item.attribute.attrName).push(item);
        //         }
        //     } else {
        //         console.log('we have some action with no type !!!!!');
        //     }
        // }
        // //add extra action to fill the timeline for both mark and mask
        // maskActionByAttr.forEach(function (actionList, attrName) {
        //     //put an start action
        //     let tmpAction0 = new ActionSpec();
        //     tmpAction0.type = ActionSpec.actionTargets.mask;
        //     tmpAction0.chartIdx = actionList[0].chartIdx;
        //     tmpAction0.animationType = actionList[0].animationType;
        //     tmpAction0.startTime = 0;
        //     tmpAction0.duration = actionList[0].startTime;
        //     tmpAction0.attribute = [{
        //         'attrName': actionList[0].attribute.attrName,
        //         'from': actionList[0].attribute.from,
        //         'to': actionList[0].attribute.from
        //     }]
        //     value.actionAttrs.push(tmpAction0);
        //     for (let i = 0; i < actionList.length; i++) {
        //         let tmpAction = new ActionSpec();
        //         tmpAction.type = ActionSpec.actionTargets.mask;
        //         tmpAction.chartIdx = actionList[i].chartIdx;
        //         tmpAction.animationType = actionList[i].animationType;
        //         tmpAction.startTime = actionList[i].startTime + actionList[i].duration;
        //         if (i === actionList.length - 1) {
        //             tmpAction.duration = 'wholeEnd';
        //         } else {
        //             tmpAction.duration = actionList[i + 1].startTime - actionList[i].startTime - actionList[i].duration;
        //         }
        //         tmpAction.attribute = [{
        //             'attrName': actionList[i].attribute.attrName,
        //             'from': actionList[i].attribute.to,
        //             'to': actionList[i].attribute.to
        //         }]
        //         value.actionAttrs.push(tmpAction);
        //     }
        // })
        // markActionByAttr.forEach(function (actionList, attrName) {
        //     //put an start action
        //     let tmpAction0 = new ActionSpec();
        //     tmpAction0.type = ActionSpec.actionTargets.mark;
        //     tmpAction0.animationType = actionList[0].animationType;
        //     tmpAction0.startTime = 0;
        //     tmpAction0.duration = actionList[0].startTime;
        //     tmpAction0.attribute = [{
        //         'attrName': actionList[0].attribute.attrName,
        //         'from': actionList[0].attribute.from,
        //         'to': actionList[0].attribute.from
        //     }]
        //     value.actionAttrs.push(tmpAction0);
        //     for (let i = 0; i < actionList.length; i++) {
        //         let tmpAction = new ActionSpec();
        //         tmpAction.type = ActionSpec.actionTargets.mark;
        //         tmpAction.animationType = actionList[i].animationType;
        //         tmpAction.startTime = actionList[i].startTime + actionList[i].duration;
        //         if (i === actionList.length - 1) {
        //             tmpAction.duration = 'wholeEnd';
        //         } else {
        //             tmpAction.duration = actionList[i + 1].startTime - actionList[i].startTime - actionList[i].duration;
        //         }
        //         tmpAction.attribute = [{
        //             'attrName': actionList[i].attribute.attrName,
        //             'from': actionList[i].attribute.to,
        //             'to': actionList[i].attribute.to
        //         }]
        //         value.actionAttrs.push(tmpAction);
        //     }
        // })

      });
      console.log('The duration of the generated animation is: ' + this.wholeEndTime + 'ms'); //replace the 'wholeEnd' place holder in duration

      this.allMarkAni.forEach(function (value, a) {
        for (var i = 0, item; i < value.actionAttrs.length | (item = value.actionAttrs[i]); i++) {
          if (item.duration === 'wholeEnd') {
            item.duration = that.wholeEndTime - item.startTime;
          }
        }
      }); // console.log('all mark ani: ', this.allMarkAni);
    }
  }, {
    key: "translateToLottieChannel",
    value: function translateToLottieChannel(attrName) {
      switch (attrName) {
        case 'opacity':
          return ['opacity'];

        case 'x':
        case 'cx':
          return ['x'];

        case 'y':
        case 'cy':
          return ['y'];

        case 'r':
          return ['scaleX', 'scaleY'];

        case 'width':
          return ['scaleX'];

        case 'height':
          return ['scaleY'];

        case 'd':
        case 'x1':
        case 'x2':
        case 'y1':
        case 'y2':
          return ['shape'];

        case 'textContent':
          return ['text'];

        case 'fill':
          return ['fillColor'];

        case 'stroke':
          return ['strokeColor'];
      }
    }
  }, {
    key: "mapToLottieSpec",
    value: function mapToLottieSpec() {
      var that = this;
      this.allMarkAni.forEach(function (value, markId) {
        var _loop = function _loop(i) {
          var tmpActionSpec = value.actionAttrs[i];

          if (tmpActionSpec.duration > 0) {
            var targetMark = document.getElementById(markId); //TODO: pass dom here

            if (tmpActionSpec.type === _ActionSpec.default.actionTargets.mark) {
              //TODO: consider 'custom'
              var startFrame = Math.ceil(tmpActionSpec.startTime / (1000 / _TimingSpec2.default.FRAME_RATE));
              var endFrame = Math.ceil((tmpActionSpec.startTime + tmpActionSpec.duration) / (1000 / _TimingSpec2.default.FRAME_RATE));
              tmpActionSpec.attribute.forEach(function (attr) {
                if (tmpActionSpec.animationType === _ActionSpec.default.targetAnimationType.custom) {
                  //set anchor for r and text position changings
                  if (attr.attrName === 'r') {
                    var tmpBbox = (0, _helper.getBoundingBox)(targetMark);

                    _GlobalVar.globalVar.markLayers.get(markId).setStaticProperty('anchorX', tmpBbox[2] / 2);

                    _GlobalVar.globalVar.markLayers.get(markId).setStaticProperty('anchorY', tmpBbox[3] / 2);
                  } else if (document.getElementById(markId).tagName === 'text') {
                    _GlobalVar.globalVar.markLayers.get(markId).setStaticProperty('anchorY', 0);
                  } //translate visual channels to lottie channels


                  var lottieChannels = Animation.translateToLottieChannel(attr.attrName);

                  if (Array.isArray(attr.to)) {
                    //doing transition
                    var fromValue = 0,
                        toValue = 0;

                    for (var j = 0; j < attr.to.length; j++) {
                      if (attr.to[j][0] === markId) {
                        fromValue = attr.from[j][1];
                        toValue = attr.to[j][1];
                        break;
                      }
                    }

                    lottieChannels.forEach(function (lc) {
                      if (lc === 'shape') {
                        //transform the start d and end d to shape specification
                        var fromPosi = [0, 0],
                            toPosi = [0, 0];

                        var _Util$transDToLottieS = _Util.Util.transDToLottieSpec(fromValue);

                        var _Util$transDToLottieS2 = _slicedToArray(_Util$transDToLottieS, 2);

                        fromPosi = _Util$transDToLottieS2[0];
                        fromValue = _Util$transDToLottieS2[1];

                        var _Util$transDToLottieS3 = _Util.Util.transDToLottieSpec(toValue);

                        var _Util$transDToLottieS4 = _slicedToArray(_Util$transDToLottieS3, 2);

                        toPosi = _Util$transDToLottieS4[0];
                        toValue = _Util$transDToLottieS4[1];

                        _GlobalVar.globalVar.markLayers.get(markId).setAnimatableProperty('x', startFrame, endFrame, fromPosi[0], toPosi[0], _ActionSpec.default.transToLottieAction(tmpActionSpec.easing));

                        _GlobalVar.globalVar.markLayers.get(markId).setAnimatableProperty('y', startFrame, endFrame, fromPosi[1], toPosi[1], _ActionSpec.default.transToLottieAction(tmpActionSpec.easing));
                      } else if (lc === 'fillColor' || lc === 'strokeColor') {
                        if (fromValue && toValue && fromValue !== 'none' && toValue !== 'none') {
                          fromValue = _Util.Util.toLottieRGBA(fromValue);
                          toValue = _Util.Util.toLottieRGBA(toValue);
                        } else {
                          fromValue = toValue = [0, 0, 0, 0];
                        }
                      } else if (lc === 'opacity') {
                        fromValue *= 100;
                        toValue *= 100;
                      }

                      _GlobalVar.globalVar.markLayers.get(markId).setAnimatableProperty(lc, startFrame, endFrame, fromValue, toValue, _ActionSpec.default.transToLottieAction(tmpActionSpec.easing));
                    });
                  } else {
                    lottieChannels.forEach(function (lc) {
                      //TODO: difference from and to strategy with positions and channels like opacity
                      _GlobalVar.globalVar.markLayers.get(markId).setAnimatableProperty(lc, startFrame, endFrame, attr.from * 100, attr.to * 100, _ActionSpec.default.transToLottieAction(tmpActionSpec.easing));
                    });
                  }
                } else {
                  //if not custom, then attrName is already lottie channels
                  _GlobalVar.globalVar.markLayers.get(markId).setAnimatableProperty(attr.attrName, startFrame, endFrame, attr.from * 100, attr.to * 100, _ActionSpec.default.transToLottieAction(tmpActionSpec.easing));
                }
              });
            } else if (tmpActionSpec.type === _ActionSpec.default.actionTargets.mask) {
              var maskLayer;
              var tmpBbox = (0, _helper.getBoundingBox)(targetMark); // let r = Math.sqrt(Math.pow(tmpBbox[2] / 2, 2) + Math.pow(tmpBbox[3] / 2, 2));

              var r = that.finalStatus.get(markId)[tmpActionSpec.chartIdx]['outterRadius'];

              switch (tmpActionSpec.animationType) {
                //create rect mask
                case _ActionSpec.default.targetAnimationType.wipe:
                case _ActionSpec.default.targetAnimationType.move:
                case _ActionSpec.default.targetAnimationType.appear:
                  maskLayer = _jsmovin.LayerFactory.boundingBox(targetMark);
                  break;
                //create circle mask

                case _ActionSpec.default.targetAnimationType.circle:
                  maskLayer = _jsmovin.LayerFactory.ellipse(tmpBbox[0] + tmpBbox[2], tmpBbox[1] + tmpBbox[3], r, r);
                  maskLayer.setStaticProperty('anchorX', tmpBbox[2] / 2);
                  maskLayer.setStaticProperty('anchorY', tmpBbox[3] / 2);
                  break;
                //create circle mask with thick border

                case _ActionSpec.default.targetAnimationType.wheel:
                  var pathOffset = _Util.Util.getPathOffset(targetMark.getAttribute('d'));

                  var tmpOffsetX = that.finalStatus.get(markId)[tmpActionSpec.chartIdx]['cx'] + tmpBbox[0] - pathOffset[0];
                  var tmpOffsetY = that.finalStatus.get(markId)[tmpActionSpec.chartIdx]['cy'] + tmpBbox[1] - pathOffset[1];
                  maskLayer = _jsmovin.LayerFactory.ellipse(tmpOffsetX, tmpOffsetY, r, r);
                  var tmpStartAngle = that.finalStatus.get(markId)[tmpActionSpec.chartIdx]['startAngle'];
                  var tmpEndAngle = that.finalStatus.get(markId)[tmpActionSpec.chartIdx]['endAngle'];
                  maskLayer.setStaticProperty('trimOffset', -tmpStartAngle / Math.PI / 2 * 360 - 360 / 4);
                  tmpActionSpec.attribute[0].to = 1 - (tmpEndAngle - tmpStartAngle) % (Math.PI * 2) / (Math.PI * 2);
                  maskLayer.setStaticProperty('strokeWidth', 2 * r);
                  maskLayer.setStaticProperty('fillOpacity', 0);
                  break;
                //create path mask
              }

              var _startFrame = Math.ceil(tmpActionSpec.startTime / (1000 / _TimingSpec2.default.FRAME_RATE));

              var _endFrame = Math.ceil((tmpActionSpec.startTime + tmpActionSpec.duration) / (1000 / _TimingSpec2.default.FRAME_RATE));

              tmpActionSpec.attribute.forEach(function (attr) {
                maskLayer.setAnimatableProperty(attr.attrName, _startFrame, _endFrame, attr.from * 100, attr.to * 100, _ActionSpec.default.transToLottieAction(tmpActionSpec.easing));
              });

              _GlobalVar.globalVar.jsMovin.addMask(maskLayer, _GlobalVar.globalVar.markLayers.get(markId), tmpActionSpec.maskType); // console.log('in mask: ', tmpActionSpec.attribute);
              // let tmpBbox = getBoundingBox(document.getElementById(markId));
              // let markStr = `<svg xmlns="http://www.w3.org/2000/svg" width="2000" height="2000">
              //     <rect x="${tmpBbox[0]}" y="${tmpBbox[1]}" width="${tmpBbox[2]}" height="${tmpBbox[3]}"></rect>
              // </svg>`;
              // let parser = new DOMParser();
              // let svgMask = parser.parseFromString(markStr, "image/svg+xml").lastChild.children[0];
              // const maskLayer = LayerFactory.hierarchy(svgMask);
              // let startFrame = Math.ceil(tmpActionSpec.startTime / (1000 / TimingSpec.FRAME_RATE));
              // let endFrame = Math.ceil((tmpActionSpec.startTime + tmpActionSpec.duration) / (1000 / TimingSpec.FRAME_RATE));
              // maskLayer.setAnimatableProperty(
              //     tmpActionSpec.attribute.attrName,
              //     startFrame,
              //     endFrame,
              //     tmpActionSpec.attribute.from * 100,
              //     tmpActionSpec.attribute.to * 100,
              //     tmpActionSpec.easing
              // );
              // globalVar.jsMovin.addMask(maskLayer, globalVar.markLayers.get(markId));

            } else {
              console.error('unkonwn actions target: ', tmpActionSpec.type);
            }
          }
        };

        for (var i = 0; i < value.actionAttrs.length; i++) {
          _loop(i);
        }
      });
    }
  }, {
    key: "renderFrame",
    value: function renderFrame(timePoint) {
      var frame = []; //store the visual status of each mark at this time

      this.allMarkAni.forEach(function (value, markId) {
        var currentStatus = new Map();

        for (var i = 0, a; i < value.actionAttrs.length | (a = value.actionAttrs[i]); i++) {
          if (a.attribute.from === a.attribute.to && a.duration === 0) {
            //nothing happends in this actionspec, skip it
            continue;
          }

          var resultValue = Animation.calAttrValue(a, markId, timePoint),
              lastValue = timePoint >= 0 ? Animation.calAttrValue(a, markId, timePoint - 1) : '';

          if (resultValue !== lastValue) {
            if (a.startTime <= timePoint && a.startTime + a.duration >= timePoint) {
              //during this action
              currentStatus.set(a.attribute.attrName, {
                'type': a.type,
                'animationType': a.animationType,
                'endTime': a.startTime + a.duration,
                'attrName': a.attribute.attrName,
                'value': resultValue
              });
            } else if (a.startTime + a.duration < timePoint) {
              if (typeof currentStatus.get(a.attribute.attrName) !== 'undefined') {
                if (currentStatus.get(a.attribute.attrName).endTime < a.startTime + a.duration) {
                  currentStatus.set(a.attribute.attrName, {
                    'type': a.type,
                    'animationType': a.animationType,
                    'endTime': a.startTime + a.duration,
                    'attrName': a.attribute.attrName,
                    'value': resultValue
                  });
                }
              }
            }
          }
        }

        if (currentStatus.size > 0) {
          frame.push([markId, currentStatus]);
        }
      });
      return frame;
    }
  }, {
    key: "calAttrValue",
    value: function calAttrValue(a, markId, timePoint) {
      var resultValue,
          chartIdx = a.chartIdx;

      if (a.startTime <= timePoint && a.startTime + a.duration >= timePoint) {
        //during this action
        var percentage = parseFloat(timePoint - a.startTime) / parseFloat(a.duration);
        var ratio = this.calRatio(percentage, a.easing);

        switch (a.attribute.attrName) {
          case 'fill':
          case 'stroke':
            if (a.type === _ActionSpec.default.actionTargets.mark) {
              if (Array.isArray(a.attribute.to)) {
                var fromColor;
                var toColor;

                for (var j = 0; j < a.attribute.to.length; j++) {
                  if (a.attribute.to[j][0] === markId && typeof a.attribute.to[j][1] === 'string') {
                    fromColor = a.attribute.from[j][1];
                    toColor = a.attribute.to[j][1];
                    break;
                  }
                }

                var fromRGB = _Util.Util.color2RGB(fromColor),
                    toRGB = _Util.Util.color2RGB(toColor);

                var valueR = parseInt((toRGB[0] - fromRGB[0]) * ratio) + fromRGB[0];
                var valueG = parseInt((toRGB[1] - fromRGB[1]) * ratio) + fromRGB[1];
                var valueB = parseInt((toRGB[2] - fromRGB[2]) * ratio) + fromRGB[2];
                resultValue = 'rgb(' + valueR + ',' + valueG + ',' + valueB + ')';
              }
            }

            break;

          case 'textContent':
            if (a.type === _ActionSpec.default.actionTargets.mark) {
              if (Array.isArray(a.attribute.to)) {
                var _startValue = 0;

                for (var _j3 = 0; _j3 < a.attribute.to.length; _j3++) {
                  if (a.attribute.to[_j3][0] === markId && (!isNaN(a.attribute.to[_j3][1]) || typeof a.attribute.to[_j3][1] === 'string')) {
                    _startValue = a.attribute.to[_j3][1];
                    break;
                  }
                }

                resultValue = _startValue;
              }
            }

            break;

          case 'width':
          case 'height':
          case 'r':
            if (a.type === _ActionSpec.default.actionTargets.mark) {
              if (Array.isArray(a.attribute.to)) {
                var _startValue2 = 0;
                var _finalValue = 0;

                for (var _j4 = 0; _j4 < a.attribute.to.length; _j4++) {
                  if (a.attribute.to[_j4][0] === markId && !isNaN(a.attribute.from[_j4][1]) && !isNaN(a.attribute.to[_j4][1])) {
                    _startValue2 = a.attribute.from[_j4][1];
                    _finalValue = a.attribute.to[_j4][1];
                    break;
                  }
                }

                resultValue = _startValue2 + (_finalValue - _startValue2) * ratio;
              } else {
                var _startValue3 = 0;

                var _finalValue2 = parseFloat(this.finalStatus.get(markId)[chartIdx][a.attribute.attrName]);

                resultValue = _startValue3 - (parseFloat(a.attribute.to - a.attribute.from) * ratio + a.attribute.from) * (_startValue3 - _finalValue2);
              }
            } else {
              var _startValue4 = parseFloat(this.minStatus.get(a.attribute.attrName));

              var _finalValue3 = parseFloat(this.finalStatus.get(markId)[chartIdx][a.attribute.attrName]);

              if (_startValue4 < 0) {
                resultValue = _startValue4 + (parseFloat(a.attribute.to - a.attribute.from) * ratio + a.attribute.from) * (_finalValue3 - _startValue4);
              } else {
                resultValue = (parseFloat(a.attribute.to - a.attribute.from) * ratio + a.attribute.from) * _finalValue3;
              }
            }

            break;

          case 'y':
          case 'y1':
          case 'y2':
          case 'cy':
            if (a.type === _ActionSpec.default.actionTargets.mark) {
              if (Array.isArray(a.attribute.to)) {
                var _startValue5 = 0;
                var _finalValue4 = 0;

                for (var _j5 = 0; _j5 < a.attribute.to.length; _j5++) {
                  if (a.attribute.to[_j5][0] === markId && !isNaN(a.attribute.from[_j5][1]) && !isNaN(a.attribute.to[_j5][1])) {
                    _startValue5 = a.attribute.from[_j5][1];
                    _finalValue4 = a.attribute.to[_j5][1];
                    break;
                  }
                }

                resultValue = _startValue5 + (_finalValue4 - _startValue5) * ratio;
              } else {
                var _startValue6 = this.startY;

                var _finalValue5 = parseFloat(this.finalStatus.get(markId)[chartIdx][a.attribute.attrName]);

                resultValue = _startValue6 - (parseFloat(a.attribute.to - a.attribute.from) * ratio + a.attribute.from) * (_startValue6 - _finalValue5);
              }
            } else if (a.type === _ActionSpec.default.actionTargets.mask) {
              resultValue = parseFloat(this.finalStatus.get(markId)[chartIdx][a.attribute.attrName]) - 1 + (parseFloat(a.attribute.to - a.attribute.from) * ratio + a.attribute.from) * (parseFloat(this.finalStatus.get(markId)[chartIdx]['height']) + 2);
            }

            break;

          case 'x':
          case 'x1':
          case 'x2':
          case 'cx':
            if (a.type === _ActionSpec.default.actionTargets.mark) {
              if (Array.isArray(a.attribute.to)) {
                //changing from one status to the other
                var _startValue7 = 0;
                var _finalValue6 = 0;

                for (var _j6 = 0; _j6 < a.attribute.to.length; _j6++) {
                  if (a.attribute.to[_j6][0] === markId && !isNaN(a.attribute.from[_j6][1]) && !isNaN(a.attribute.to[_j6][1])) {
                    _startValue7 = a.attribute.from[_j6][1];
                    _finalValue6 = a.attribute.to[_j6][1];
                    break;
                  }
                }

                resultValue = _startValue7 + (_finalValue6 - _startValue7) * ratio;
              } else {
                //marks entering charts
                var _startValue8 = this.startX;

                var _finalValue7 = parseFloat(this.finalStatus.get(markId)[chartIdx][a.attribute.attrName]);

                resultValue = _startValue8 + (parseFloat(a.attribute.to - a.attribute.from) * ratio + a.attribute.from) * (_finalValue7 - _startValue8);
              }
            } else if (a.type === _ActionSpec.default.actionTargets.mask) {
              resultValue = parseFloat(this.finalStatus.get(markId)[chartIdx][a.attribute.attrName]) - 1 + (parseFloat(a.attribute.to - a.attribute.from) * ratio + a.attribute.from) * (parseFloat(this.finalStatus.get(markId)[chartIdx]['width']) + 2);
            }

            break;

          case 'startAngle':
            var startAngle = parseFloat(this.finalStatus.get(markId)[chartIdx].startAngle);
            var endAngle = parseFloat(this.finalStatus.get(markId)[chartIdx].endAngle);

            var _startAngle = startAngle < 0 ? startAngle + 2 * Math.PI : startAngle;

            var _endAngle = endAngle < 0 || _startAngle > endAngle ? endAngle + 2 * Math.PI : endAngle;

            var tmpAngle;

            if (_endAngle > _startAngle) {
              tmpAngle = _startAngle + (parseFloat(a.attribute.to - a.attribute.from) * ratio + a.attribute.from) * (_endAngle - _startAngle);
            } else {
              tmpAngle = _startAngle + (parseFloat(a.attribute.to - a.attribute.from) * ratio + a.attribute.from) * (Math.PI * 2 - _startAngle + _endAngle);
            }

            resultValue = {
              'cx': parseFloat(this.finalStatus.get(markId)[chartIdx]['cx']),
              'cy': parseFloat(this.finalStatus.get(markId)[chartIdx]['cy']),
              'innerRadius': parseFloat(this.finalStatus.get(markId)[chartIdx]['innerRadius']),
              'outterRadius': parseFloat(this.finalStatus.get(markId)[chartIdx]['outterRadius']) + 2,
              'startAngle': tmpAngle,
              'endAngle': parseFloat(this.finalStatus.get(markId)[chartIdx]['endAngle'])
            };
            break;

          case 'innerRadius':
            var startRadius = parseFloat(this.finalStatus.get(markId)[chartIdx]['innerRadius']);
            var endRadius = parseFloat(this.finalStatus.get(markId)[chartIdx]['outterRadius']);
            var tmpRadius = (parseFloat(a.attribute.to - a.attribute.from) * ratio + a.attribute.from) * (endRadius - startRadius);

            if (tmpRadius < 0) {
              resultValue = {
                'cx': parseFloat(this.finalStatus.get(markId)[chartIdx]['cx']),
                'cy': parseFloat(this.finalStatus.get(markId)[chartIdx]['cy']),
                'innerRadius': parseFloat(this.finalStatus.get(markId)[chartIdx]['innerRadius']) + 2,
                'outterRadius': parseFloat(this.finalStatus.get(markId)[chartIdx]['outterRadius']) - tmpRadius + 2,
                'startAngle': parseFloat(this.finalStatus.get(markId)[chartIdx]['startAngle']),
                'endAngle': parseFloat(this.finalStatus.get(markId)[chartIdx]['endAngle'])
              };
            } else {
              resultValue = {
                'cx': parseFloat(this.finalStatus.get(markId)[chartIdx]['cx']),
                'cy': parseFloat(this.finalStatus.get(markId)[chartIdx]['cy']),
                'innerRadius': parseFloat(this.finalStatus.get(markId)[chartIdx]['innerRadius']) + tmpRadius + 2,
                'outterRadius': parseFloat(this.finalStatus.get(markId)[chartIdx]['outterRadius']) + 2,
                'startAngle': parseFloat(this.finalStatus.get(markId)[chartIdx]['startAngle']),
                'endAngle': parseFloat(this.finalStatus.get(markId)[chartIdx]['endAngle'])
              };
            }

            break;

          case 'stroke-dashoffset':
            var startDashOffset = 0;
            var finalDashOffset = parseFloat(this.finalStatus.get(markId)[chartIdx]['stroke-dasharray']);
            resultValue = startDashOffset - (parseFloat(a.attribute.to - a.attribute.from) * ratio + a.attribute.from) * (startDashOffset - finalDashOffset);
            break;

          case 'd':
            if (a.type === _ActionSpec.default.actionTargets.mark) {
              if (Array.isArray(a.attribute.to)) {
                //changing from one status to the other
                var _startValue9 = '',
                    _finalValue8 = '',
                    startDiscretVal = '',
                    finalDiscretVal = '';

                for (var _j7 = 0; _j7 < a.attribute.to.length; _j7++) {
                  if (a.attribute.to[_j7][0] === markId && a.attribute.from[_j7][1] && a.attribute.to[_j7][1]) {
                    _startValue9 = a.attribute.from[_j7][1];
                    _finalValue8 = a.attribute.to[_j7][1];
                    startDiscretVal = a.attribute.from[_j7][2];
                    finalDiscretVal = a.attribute.to[_j7][2];
                    break;
                  }
                }

                resultValue = _Util.Util.calTransD(_startValue9, _finalValue8, ratio, startDiscretVal, finalDiscretVal);
              }
            }

            break;

          default:
            //numeric attribute values
            var startValue = parseFloat(this.minStatus.get(a.attribute.attrName));
            var finalValue = parseFloat(this.finalStatus.get(markId)[chartIdx][a.attribute.attrName]);

            if (startValue < 0) {
              resultValue = startValue + (parseFloat(a.attribute.to - a.attribute.from) * ratio + a.attribute.from) * (finalValue - startValue);
            } else {
              resultValue = (parseFloat(a.attribute.to - a.attribute.from) * ratio + a.attribute.from) * finalValue;
            }

        }
      } else if (a.startTime + a.duration < timePoint) {
        //past actions
        switch (a.attribute.attrName) {
          case 'fill':
          case 'stroke':
            if (a.type === _ActionSpec.default.actionTargets.mark) {
              if (Array.isArray(a.attribute.to)) {
                for (var _j8 = 0; _j8 < a.attribute.to.length; _j8++) {
                  if (a.attribute.to[_j8][0] === markId && typeof a.attribute.to[_j8][1] === 'string') {
                    resultValue = a.attribute.to[_j8][1];
                    break;
                  }
                }
              } else {
                resultValue = this.finalStatus.get(markId)[chartIdx][a.attribute.attrName];
              }
            }

            break;

          case 'textContent':
            if (a.type === _ActionSpec.default.actionTargets.mark) {
              if (Array.isArray(a.attribute.to)) {
                var _startValue10 = 0;

                for (var _j9 = 0; _j9 < a.attribute.to.length; _j9++) {
                  if (a.attribute.to[_j9][0] === markId && (!isNaN(a.attribute.to[_j9][1]) || typeof a.attribute.to[_j9][1] === 'string')) {
                    _startValue10 = a.attribute.to[_j9][1];
                    break;
                  }
                }

                resultValue = _startValue10;
              }
            }

            break;

          case 'width':
          case 'height':
          case 'r':
            if (a.type === _ActionSpec.default.actionTargets.mark) {
              if (Array.isArray(a.attribute.to)) {
                //changing from one status to the other
                var _finalValue9 = 0;

                for (var _j10 = 0; _j10 < a.attribute.to.length; _j10++) {
                  if (a.attribute.to[_j10][0] === markId) {
                    _finalValue9 = a.attribute.to[_j10][1];
                    break;
                  }
                }

                resultValue = _finalValue9;
              } else {
                resultValue = parseFloat(this.finalStatus.get(markId)[chartIdx][a.attribute.attrName]);
              }
            } else {
              resultValue = parseFloat(this.finalStatus.get(markId)[chartIdx][a.attribute.attrName]);
            }

            break;

          case 'y':
          case 'y1':
          case 'y2':
          case 'cy':
            if (a.type === _ActionSpec.default.actionTargets.mark) {
              if (Array.isArray(a.attribute.to)) {
                //changing from one status to the other
                var _finalValue10 = 0;

                for (var _j11 = 0; _j11 < a.attribute.to.length; _j11++) {
                  if (a.attribute.to[_j11][0] === markId) {
                    _finalValue10 = a.attribute.to[_j11][1];
                    break;
                  }
                }

                resultValue = _finalValue10;
              } else {
                resultValue = parseFloat(this.finalStatus.get(markId)[chartIdx][a.attribute.attrName]);
              }
            } else if (a.type === _ActionSpec.default.actionTargets.mask) {
              resultValue = parseFloat(this.finalStatus.get(markId)[chartIdx][a.attribute.attrName]) + parseFloat(this.finalStatus.get(markId)[chartIdx]['height']);
            }

            break;

          case 'x':
          case 'x1':
          case 'x2':
          case 'cx':
            if (a.type === _ActionSpec.default.actionTargets.mark) {
              if (Array.isArray(a.attribute.to)) {
                //changing from one status to the other
                var _finalValue11 = 0;

                for (var _j12 = 0; _j12 < a.attribute.to.length; _j12++) {
                  if (a.attribute.to[_j12][0] === markId) {
                    _finalValue11 = a.attribute.to[_j12][1];
                    break;
                  }
                }

                resultValue = _finalValue11;
              } else {
                resultValue = parseFloat(this.finalStatus.get(markId)[chartIdx][a.attribute.attrName]);
              }
            } else if (a.type === _ActionSpec.default.actionTargets.mask) {
              resultValue = parseFloat(this.finalStatus.get(markId)[chartIdx][a.attribute.attrName]) + parseFloat(this.finalStatus.get(markId)[chartIdx]['height']);
            }

            break;

          case 'startAngle':
          case 'innerRadius':
            resultValue = {
              'cx': parseFloat(this.finalStatus.get(markId)[chartIdx]['cx']),
              'cy': parseFloat(this.finalStatus.get(markId)[chartIdx]['cy']),
              'innerRadius': parseFloat(this.finalStatus.get(markId)[chartIdx]['innerRadius']),
              'outterRadius': parseFloat(this.finalStatus.get(markId)[chartIdx]['outterRadius']),
              'startAngle': parseFloat(this.finalStatus.get(markId)[chartIdx]['startAngle']),
              'endAngle': parseFloat(this.finalStatus.get(markId)[chartIdx]['endAngle'])
            };
            break;

          default:
            //numeric attribute values
            if (typeof this.finalStatus.get(markId)[chartIdx] !== 'undefined') {
              resultValue = parseFloat(this.finalStatus.get(markId)[chartIdx][a.attribute.attrName]);
            }

        }
      }

      return resultValue;
    } // static calRatio(percentage, easingType) {
    //     let ratio = 0;
    //     switch (easingType) {
    //         case ActionSpec.easingType.easeLinear:
    //             ratio = percentage;
    //             break;
    //         case ActionSpec.easingType.easeInQuad:
    //             ratio = this.easeFuncs.easeInQuad(percentage);
    //             break;
    //         case ActionSpec.easingType.easeOutQuad:
    //             ratio = this.easeFuncs.easeOutQuad(percentage);
    //             break;
    //         case ActionSpec.easingType.easeInOutQuad:
    //             ratio = this.easeFuncs.easeInOutQuad(percentage);
    //             break;
    //         case ActionSpec.easingType.easeInCubic:
    //             ratio = this.easeFuncs.easeInCubic(percentage);
    //             break;
    //         case ActionSpec.easingType.easeOutCubic:
    //             ratio = this.easeFuncs.easeOutCubic(percentage);
    //             break;
    //         case ActionSpec.easingType.easeInOutCubic:
    //             ratio = this.easeFuncs.easeInOutCubic(percentage);
    //             break;
    //         case ActionSpec.easingType.easeOutBounce:
    //             ratio = this.easeFuncs.easeOutBounce(percentage);
    //             break;
    //     }
    //     return ratio;
    // }

  }, {
    key: "resetAll",
    value: function resetAll() {
      this.wholeEndTime = 0;
      this.allMarkAni.clear();
      this.minStatus.clear();
      this.finalStatus.clear();
      this.frames.clear();
    }
  }]);

  return Animation;
}(_TimingSpec2.default);

Animation.visualAttrs = ['x', 'y', 'cx', 'cy', 'innerRadius', 'outterRadius', 'startAngle', 'endAngle', 'width', 'height', 'opacity', 'fill', 'stroke', 'content', 'stroke-dasharray', 'stroke-dashoffset'];
Animation.startY = 0; //start coord of Y

Animation.startX = 0; //start coord of X

Animation.endX = 0; //end coord of X

Animation.wholeEndTime = 0;
Animation.minStatus = new Map(); //record the min value of each attribute.

Animation.finalStatus = new Map(); //record the final visual status of each mark, eg: key:mark1, value: {opacity: 1, height: 226}

Animation.allMarkAni = new Map();
Animation.frames = new Map(); //output frames

Animation.easeFuncs = {
  easeInQuad: function easeInQuad(p) {
    return p * p;
  },
  easeOutQuad: function easeOutQuad(p) {
    return -p * (p - 2);
  },
  easeInOutQuad: function easeInOutQuad(p) {
    if (p / 2 < 1) return 1 / 2 * p * p;
    return -(--p * (p - 2) - 1) / 2;
  },
  easeInCubic: function easeInCubic(p) {
    return p * p * p;
  },
  easeOutCubic: function easeOutCubic(p) {
    return (p = p - 1) * p * p + 1;
  },
  easeInOutCubic: function easeInOutCubic(p) {
    if ((p /= 0.5) < 1) return p * p * p / 2;
    return ((p -= 2) * p * p + 2) / 2;
  },
  easeOutBounce: function easeOutBounce(p) {
    var ratio = 0;

    if (p < 1 / 2.75) {
      ratio = 7.5625 * p * p;
    } else if (p < 2 / 2.75) {
      ratio = 7.5625 * (p -= 1.5 / 2.75) * p + 0.75;
    } else if (p < 2.5 / 2.75) {
      ratio = 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375;
    } else {
      ratio = 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375;
    }

    return ratio;
  }
};
var _default = Animation;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/Canis.js":
/*!**********************!*\
  !*** ./src/Canis.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ChartSpec = _interopRequireDefault(__webpack_require__(/*! ./ChartSpec.js */ "./src/ChartSpec.js"));

var _FacetSpec = _interopRequireDefault(__webpack_require__(/*! ./FacetSpec.js */ "./src/FacetSpec.js"));

var _TimingSpec = _interopRequireDefault(__webpack_require__(/*! ./TimingSpec.js */ "./src/TimingSpec.js"));

var _AnimationSpec = _interopRequireDefault(__webpack_require__(/*! ./AnimationSpec.js */ "./src/AnimationSpec.js"));

var _Util = __webpack_require__(/*! ./util/Util.js */ "./src/util/Util.js");

var _GlobalVar = __webpack_require__(/*! ./util/GlobalVar.js */ "./src/util/GlobalVar.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Canis =
/*#__PURE__*/
function () {
  function Canis() {
    _classCallCheck(this, Canis);

    this.chartSpecs;
    this.facet;
    this._animations;
    this.chartWidth;
    this.chartHeight;
  }

  _createClass(Canis, [{
    key: "init",
    value: function init(spec) {
      var _this = this;

      this.chartSpecs = [];
      var canisObj = spec;
      canisObj.charts = _ChartSpec.default.chartPreProcessing(canisObj.charts); //deal with input charts

      for (var i = 0; i < canisObj.charts.length; i++) {
        var chartName = typeof canisObj.charts[i].id === 'undefined' ? 'chart' + i : canisObj.charts[i].id;
        var tmpChart = new _ChartSpec.default(chartName, canisObj.charts[i].source);
        this.chartSpecs.push(tmpChart);
      } //init facet


      if (canisObj.facet) {
        this.facet = new _FacetSpec.default(canisObj.facet.type, canisObj.facet.views);
      }

      _ChartSpec.default.loadCharts(this.chartSpecs, this.facet);

      _GlobalVar.globalVar.jsMovin.clearLayers(); //set viewport for jsmovin


      console.log(_ChartSpec.default.viewport.chartWidth, _ChartSpec.default.viewport.chartHeight);

      _GlobalVar.globalVar.jsMovin.setViewport(_ChartSpec.default.viewport.chartWidth, _ChartSpec.default.viewport.chartHeight);

      var svgChart = _ChartSpec.default.removeTransAndMerge();

      document.getElementById('chartContainer').innerHTML = '';
      document.getElementById('chartContainer').appendChild(svgChart);

      _ChartSpec.default.addLottieMarkLayers(svgChart); // let bBoxes = ChartSpec.getBBoxes();
      // let animateChart = ChartSpec.processAnimateChart(document.getElementById('chartContainer').innerHTML, bBoxes);
      // document.getElementById('videoContainer').innerHTML = '';
      // document.getElementById('videoContainer').appendChild(animateChart);
      //set framerate for jsmovin


      _GlobalVar.globalVar.jsMovin.setFrameRate(_TimingSpec.default.FRAME_RATE); //deal with animations


      this.animations = canisObj.animations;

      if (Array.isArray(this.animations)) {
        var lastAnimation;

        var _loop = function _loop(aniIdx) {
          var animationJson = _this.animations[aniIdx]; //use the selection in animation to select marks and record dom attrs

          var tmpContainer = document.createElement('div');
          document.body.appendChild(tmpContainer);
          tmpContainer.innerHTML = _ChartSpec.default.charts[animationJson.chartIdx].outerHTML;
          var marks = tmpContainer.querySelectorAll(animationJson.selection);
          var usedChangedAttrs = [];

          for (var _i = 0; _i < _ChartSpec.default.changedAttrs.length; _i++) {
            usedChangedAttrs.push(_ChartSpec.default.changedAttrs[_i]);
          }

          var animation = new _AnimationSpec.default();
          animation.translate(animationJson, usedChangedAttrs); //translate from json obj to Animation obj

          var markIds = []; //record all ids of selected marks

          if (marks.length > 0) {
            [].forEach.call(marks, function (mark) {
              if (mark.classList.contains('mark')) {
                var markId = mark.getAttribute('id');
                markIds.push(markId); //process path

                if (mark.tagName === 'path') {
                  //consider the linkage shape later
                  var markJSON = _Util.Util.toJSON(mark);

                  var transformedAttrs = _Util.Util.discretizePath(markJSON);

                  if (transformedAttrs) {
                    if (transformedAttrs.type === 'lines') {
                      for (var _i2 = 0; _i2 < transformedAttrs.data.length; _i2++) {
                        markJSON.attr['x' + (1 + 2 * _i2)] = transformedAttrs.data[_i2][0][0];
                        markJSON.attr['y' + (1 + 2 * _i2)] = transformedAttrs.data[_i2][0][1];
                        markJSON.attr['x' + (2 + 2 * _i2)] = transformedAttrs.data[_i2][1][0];
                        markJSON.attr['y' + (2 + 2 * _i2)] = transformedAttrs.data[_i2][1][1];
                      }
                    } else {
                      var tfAttrsDataKeys = Object.keys(transformedAttrs.data);

                      for (var _i3 = 0; _i3 < tfAttrsDataKeys.length; _i3++) {
                        var tAttr = tfAttrsDataKeys[_i3];

                        if (tAttr === 'radius') {
                          if (transformedAttrs.data[tAttr].length > 1) {
                            markJSON.attr.innerRadius = transformedAttrs.data[tAttr][0].rx + 1;
                            markJSON.attr.outterRadius = transformedAttrs.data[tAttr][1].rx - 1;
                          } else {
                            markJSON.attr.innerRadius = 0;
                            markJSON.attr.outterRadius = transformedAttrs.data[tAttr][0].rx - 1;
                          }
                        } else {
                          markJSON.attr[tAttr] = transformedAttrs.data[tAttr];
                        }
                      }
                    }

                    mark = _Util.Util.toDOM(markJSON);
                  }
                }

                var tmpDomAttrObj = {};
                var attrArr = [].concat(_toConsumableArray(mark.attributes));

                for (var _i4 = 0; _i4 < attrArr.length; _i4++) {
                  var attrName = attrArr[_i4];
                  tmpDomAttrObj[attrName.name] = mark.getAttribute(attrName.name);
                }

                var markDom = document.getElementById(markId);
                tmpDomAttrObj['bbWidth'] = markDom.getBBox().width;
                tmpDomAttrObj['bbHeight'] = markDom.getBBox().height;
                tmpDomAttrObj['bbX'] = markDom.getBBox().x;
                tmpDomAttrObj['bbY'] = markDom.getBBox().y;
                tmpDomAttrObj['content'] = mark.textContent;
                tmpDomAttrObj['id'] = markId;
                var dataDatumAttrValue = JSON.parse(mark.getAttribute('data-datum'));

                if (Array.isArray(dataDatumAttrValue)) {
                  dataDatumAttrValue = dataDatumAttrValue[0];
                }

                tmpDomAttrObj['data-datum'] = dataDatumAttrValue;
                tmpDomAttrObj['tagName'] = mark.tagName;

                if (mark.tagName === 'path' || mark.tagName === 'line') {
                  tmpDomAttrObj['stroke-dasharray'] = document.getElementById(markId).getTotalLength();
                  tmpDomAttrObj['stroke-dashoffset'] = document.getElementById(markId).getTotalLength();

                  if (mark.tagName === 'path') {
                    var discD = _Util.Util.discretizeD(mark.getAttribute('d'), '#000');

                    if (typeof discD !== 'undefined' && discD) {
                      if (discD.type === 'pies') {
                        tmpDomAttrObj['cx'] = discD.data.cx;
                        tmpDomAttrObj['cy'] = discD.data.cy;
                        tmpDomAttrObj['startAngle'] = (discD.data.clockwise ? discD.data.startAngle : discD.data.endAngle) - 1 / (Math.PI * 2);
                        tmpDomAttrObj['endAngle'] = (!discD.data.clockwise ? discD.data.startAngle : discD.data.endAngle) + Math.PI * 4 + 1 / (Math.PI * 2);

                        if (discD.data.radius.length > 1) {
                          tmpDomAttrObj['innerRadius'] = discD.data.radius[0].rx > discD.data.radius[1].rx ? discD.data.radius[1].rx : discD.data.radius[0].rx;
                          tmpDomAttrObj['outterRadius'] = discD.data.radius[0].rx > discD.data.radius[1].rx ? discD.data.radius[0].rx : discD.data.radius[1].rx;
                          tmpDomAttrObj['outterRadius']++;
                        } else {
                          tmpDomAttrObj['innerRadius'] = 0;
                          tmpDomAttrObj['outterRadius'] = discD.data.radius[0].rx + 1;
                        }
                      }
                    }
                  }
                }

                animation.domMarks.set(markId, tmpDomAttrObj);
              }
            });
          }

          animation.calAniTime(markIds, lastAnimation);
          lastAnimation = animation;
          document.body.removeChild(tmpContainer);
        };

        for (var aniIdx = 0; aniIdx < this.animations.length; aniIdx++) {
          _loop(aniIdx);
        }
      }
    }
  }, {
    key: "render",
    value: function render(callback) {
      _AnimationSpec.default.renderAnimation(); //map animation keyframes to lottie spec


      _AnimationSpec.default.mapToLottieSpec(); //export lottie JSON


      var lottieJSON = _GlobalVar.globalVar.jsMovin.toJSON();

      Canis.lottieJSON = lottieJSON;
      callback();
      return JSON.parse(lottieJSON);
    }
  }, {
    key: "animations",
    set: function set(aniJson) {
      var idxAniJson = aniJson.map(function (tmpAni) {
        tmpAni.chartIdx = 0;
        return tmpAni;
      });
      var chartNum = 0; //number of charts

      if (this.facet) {
        chartNum = this.facet.views[0].frames.length;
      } else {
        chartNum = this.chartSpecs.length;
      }

      if (chartNum > 1) {
        var _loop2 = function _loop2(i) {
          var tmpAniJson = _Util.Util.deepClone(aniJson);

          tmpAniJson[0].reference = _TimingSpec.default.timingRef.previousEnd;
          var tmpIdxAniJson = tmpAniJson.map(function (tmpAni) {
            tmpAni.chartIdx = i;
            return tmpAni;
          });
          idxAniJson.push.apply(idxAniJson, _toConsumableArray(tmpIdxAniJson));
        };

        //more than 1 input chart
        for (var i = 1; i < chartNum - 1; i++) {
          _loop2(i);
        }
      }

      this._animations = idxAniJson;
    },
    get: function get() {
      return this._animations;
    }
  }], [{
    key: "loadSpec",
    value: function loadSpec(url, callback) {
      var xhr = new XMLHttpRequest(),
          okStatus = document.location.protocol === "file:" ? 0 : 200;
      xhr.open('GET', url, false);
      xhr.overrideMimeType("text/html;charset=utf-8");
      xhr.send(null);

      if (xhr.status === okStatus) {
        var spec = xhr.responseText;
        callback(JSON.parse(spec));
      } else if (xhr.status === 404) {
        console.log('can not find ' + url + ' ! Please check the url.');
      }
    }
  }]);

  return Canis;
}();

Canis.lottieJSON = '';
var _default = Canis;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/ChartSpec.js":
/*!**************************!*\
  !*** ./src/ChartSpec.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Util = __webpack_require__(/*! ./util/Util */ "./src/util/Util.js");

var _FacetSpec = _interopRequireDefault(__webpack_require__(/*! ./FacetSpec */ "./src/FacetSpec.js"));

var _GlobalVar = __webpack_require__(/*! ./util/GlobalVar.js */ "./src/util/GlobalVar.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ChartSpec =
/*#__PURE__*/
function () {
  function ChartSpec(id, source) {
    _classCallCheck(this, ChartSpec);

    this.id = id;
    this.source = source;
  }

  _createClass(ChartSpec, null, [{
    key: "chartPreProcessing",
    value: function chartPreProcessing(chartSpecs) {
      var inputSpecs = [];

      for (var i = 0; i < chartSpecs.length; i++) {
        var inputSpec = chartSpecs[i];

        if (typeof inputSpec.start !== 'undefined' && typeof inputSpec.end !== 'undefined') {
          var startIdx = parseInt(inputSpec.start),
              endIdx = parseInt(inputSpec.end);

          if (endIdx < startIdx) {
            console.log('wrong start and end file index ');
            continue;
          } else {
            var tmpBlocks = inputSpec.source.split('/');
            var chartName = typeof inputSpec.id === 'undefined' ? tmpBlocks[tmpBlocks.length - 1] : inputSpec.id;

            for (var j = startIdx; j <= endIdx; j++) {
              inputSpecs.push({
                "id": chartName + j,
                "source": inputSpec.source + j + '.dsvg'
              });
            }
          }
        } else {
          inputSpecs.push(inputSpec);
        }
      }

      return inputSpecs;
    }
  }, {
    key: "loadCharts",
    value: function loadCharts(chartSpecs, facet) {
      var nameCharts = new Map();
      ChartSpec.charts = [];
      var nullCharts = [];
      var defaultWidth = 0;
      var defaultHeight = 0;

      for (var i = 0; i < chartSpecs.length; i++) {
        var xhr = new XMLHttpRequest(),
            okStatus = document.location.protocol === "file:" ? 0 : 200,
            svgContent = void 0;
        xhr.open('GET', chartSpecs[i].source, false);
        xhr.overrideMimeType("text/html;charset=utf-8");
        xhr.send(null);

        if (xhr.status === okStatus) {
          var tmpDiv = document.createElement('div');
          tmpDiv.innerHTML = xhr.responseText;
          svgContent = tmpDiv.children[0];
          var viewBoxNums = svgContent.getAttribute('viewBox').split(' ');
          defaultWidth = parseFloat(viewBoxNums[2]);
          defaultHeight = parseFloat(viewBoxNums[3]);
          ChartSpec.charts.push(svgContent);
          nameCharts.set(chartSpecs[i].id, ChartSpec.charts.length - 1);
        } else if (xhr.status === 404) {
          nullCharts.unshift(i);
          console.log('can not find ' + chartSpecs[i].source + ' ! Please check the url.');
        }
      } //remove the empty charts 


      for (var _i = 0; _i < nullCharts.length; _i++) {
        chartSpecs.slice(nullCharts[_i], 1);
      } //generate chart facets


      typeof facet !== 'undefined' ? ChartSpec.facetViews(nameCharts, facet) : this.viewport.setViewport(defaultWidth, defaultHeight);
    }
  }, {
    key: "removeTransAndMerge",
    value: function removeTransAndMerge() {
      for (var i = 0; i < ChartSpec.charts.length; i++) {
        ChartSpec.charts[i].setAttribute('trans', '0,0');
        ChartSpec.removeTransitions(ChartSpec.charts[i].children[0]);
      }

      var resultChart = ChartSpec.mergeCharts();
      return resultChart;
    }
  }, {
    key: "facetViews",
    value: function facetViews(nameCharts, facet) {
      if (facet.views.length > 0) {
        var chartsToCombine = [];

        for (var i = 0; i < facet.views[0].frames.length; i++) {
          var tmpRecorder = [];

          for (var j = 0; j < facet.views.length; j++) {
            var chartName = facet.views[j].frames[i];

            if (typeof nameCharts.get(chartName) !== 'undefined') {
              tmpRecorder.push(ChartSpec.charts[nameCharts.get(chartName)].cloneNode(true));
            } else {
              console.log('chart name ' + chartName + ' is undefined !');
            }
          }

          if (tmpRecorder.length === facet.views.length) {
            chartsToCombine.push(tmpRecorder);
          }
        }

        ChartSpec.combineCharts(facet.type, facet.views.length, chartsToCombine);
      }
    }
  }, {
    key: "combineCharts",
    value: function combineCharts(facetType, facetNum, chartsToCombine) {
      var resultCharts = [],
          chartMargin = 20,
          oriWidth = 0,
          oriHeight = 0;

      for (var i = 0; i < chartsToCombine.length; i++) {
        var tmpCharts = chartsToCombine[i];
        oriWidth = parseFloat(tmpCharts[0].getAttribute('width'));
        oriHeight = parseFloat(tmpCharts[0].getAttribute('height'));
        var viewBoxNums = tmpCharts[0].getAttribute('viewBox').split(' ');
        var viewBoxW = parseFloat(viewBoxNums[2]);
        var viewBoxH = parseFloat(viewBoxNums[3]);

        var chartTransForm = _Util.Util.getTransformAttrs(tmpCharts[0].children[0]); // tmpCharts[0].children[0].setAttribute('transform', 'translate(' + chartTransForm.transNums[0] + ',' + chartTransForm.transNums[1] + ') ' + 'scale(' + chartTransForm.scaleNum / facetNum + ')');


        tmpCharts[0].children[0].setAttribute('transform', 'translate(' + chartTransForm.transNums[0] + ',' + chartTransForm.transNums[1] + ')');

        switch (facetType) {
          case _FacetSpec.default.facetType.row:
            // oriHeight += chartMargin * tmpCharts.length;
            // tmpCharts[0].setAttribute('height', oriHeight);
            // tmpCharts[0].setAttribute('viewBox', '0 0 ' + viewBoxW + ' ' + (viewBoxH + chartMargin * tmpCharts.length));
            tmpCharts[0].setAttribute('height', oriHeight * tmpCharts.length);
            tmpCharts[0].setAttribute('viewBox', '0 0 ' + viewBoxW + ' ' + oriHeight * tmpCharts.length);
            break;

          case _FacetSpec.default.facetType.col:
            // oriWidth += chartMargin * tmpCharts.length;
            // tmpCharts[0].setAttribute('width', oriWidth);
            // tmpCharts[0].setAttribute('viewBox', '0 0 ' + (viewBoxW + chartMargin * tmpCharts.length) + ' ' + viewBoxH);
            tmpCharts[0].setAttribute('width', oriWidth * tmpCharts.length);
            tmpCharts[0].setAttribute('viewBox', '0 0 ' + oriWidth * tmpCharts.length + ' ' + viewBoxH);
            break;
        }

        var _loop = function _loop(j) {
          var tmpChart = tmpCharts[j];
          var tmpMarks = tmpChart.querySelectorAll('.mark');
          [].forEach.call(tmpMarks, function (m) {
            var idNum = parseInt(m.getAttribute('id').substring(4));
            m.setAttribute('id', 'mark' + (idNum + j * 100000));
            m.classList.add('facet' + j);
          });

          if (j > 0) {
            //put the marks in the following charts to the 1st chart
            var chartContentG = tmpChart.children[0];
            var chartChildren = chartContentG.children;

            for (var m = 0; m < chartChildren.length; m++) {
              var tmpDom = chartChildren[m]; // let transformAttrs = Util.getTransformAttrs(tmpDom);
              // switch (facetType) {
              //     case FacetSpec.facetType.row:
              //         tmpDom.setAttribute('transform', 'translate(' + transformAttrs.transNums[0] + ',' + (transformAttrs.transNums[1] + (viewBoxH + chartMargin) * j) + ') ' + 'scale(' + transformAttrs.scaleNum + ')');
              //         break;
              //     case FacetSpec.facetType.col:
              //         tmpDom.setAttribute('transform', 'translate(' + (transformAttrs.transNums[0] + (viewBoxW + chartMargin) * j) + ',' + transformAttrs.transNums[1] + ') ' + 'scale(' + transformAttrs.scaleNum + ')');
              //         break;
              // }

              tmpCharts[0].children[0].appendChild(tmpDom);
            }
          }
        };

        for (var j = 0; j < tmpCharts.length; j++) {
          _loop(j);
        }

        resultCharts.push(tmpCharts[0]);
      }

      ChartSpec.charts = resultCharts;
      this.viewport.setViewport(oriWidth, oriHeight);
    }
  }, {
    key: "mergeCharts",
    value: function mergeCharts() {
      var allMarks = new Set();
      var markStatus = new Map();
      var markTempletes = new Map();
      var attrNames = ['x', 'y', 'cx', 'cy', 'x1', 'y1', 'x2', 'y2', 'd', 'r', 'width', 'height', 'textContent', 'fill', 'stroke', 'opacity'];
      var nullStatus = {};

      for (var j = 0; j < attrNames.length; j++) {
        nullStatus[attrNames[j]] = null;
      }

      var _loop2 = function _loop2(i) {
        var tmpChart = ChartSpec.charts[i];
        var marks = tmpChart.querySelectorAll('.mark');

        if (marks.length > 0) {
          [].forEach.call(marks, function (m) {
            var markId = m.getAttribute('id');
            allMarks.add(markId);
            var statusObj = {}; //status of one mark in chart i

            for (var _j5 = 0; _j5 < attrNames.length; _j5++) {
              if (attrNames[_j5] === 'textContent') {
                statusObj[attrNames[_j5]] = m.innerHTML;
              } else {
                statusObj[attrNames[_j5]] = m.getAttribute(attrNames[_j5]);
              }
            }

            if (typeof markStatus.get(markId) === 'undefined') {
              markStatus.set(markId, new Array(ChartSpec.charts.length).fill(nullStatus));
            }

            markStatus.get(markId)[i] = statusObj;
            markTempletes.set(markId, m.outerHTML);
          });
        }
      };

      for (var i = 0; i < ChartSpec.charts.length; i++) {
        _loop2(i);
      } //find the changed attributes


      ChartSpec.changedAttrs = [];

      var attrNamesCopy = _Util.Util.deepClone(attrNames);

      markStatus.forEach(function (statusArr, markId) {
        for (var i = 0; i < attrNamesCopy.length; i++) {
          var flag = true;
          var compareStatus = void 0;

          for (var _j = 0; _j < statusArr.length; _j++) {
            if (typeof statusArr[_j] !== 'undefined') {
              compareStatus = statusArr[_j];
              break;
            }
          }

          for (var _j2 = 0; _j2 < statusArr.length; _j2++) {
            if (typeof statusArr[_j2] !== 'undefined') {
              if (statusArr[_j2][attrNamesCopy[i]] !== compareStatus[attrNamesCopy[i]]) {
                ChartSpec.changedAttrs.push(attrNamesCopy[i]);
                flag = false;
                break;
              }
            }
          }

          if (!flag) {
            attrNamesCopy.splice(i, 1);
            continue;
          }
        }
      }); //find different cmds if there is d in changedAttrs

      var diffCmds = new Map(); //key:cmd name, value: {cmdIdx, diffAttrIdxs}

      if (ChartSpec.changedAttrs.indexOf('d') >= 0) {
        diffCmds = _Util.Util.findDiffCmds(markStatus);
      }

      console.log('changed attributes: ', ChartSpec.changedAttrs); //add missing marks to each chart

      allMarks = Array.from(allMarks);
      ChartSpec.markDoms.clear();

      for (var i = 0; i < ChartSpec.charts.length; i++) {
        for (var _j3 = 0; _j3 < allMarks.length; _j3++) {
          if (ChartSpec.charts[i].querySelectorAll('#' + allMarks[_j3]).length === 0) {
            //chart i does not have mark j
            // console.log('chart ' + i + ' doesnt have mark' + allMarks[j]);
            var markStr = markTempletes.get(allMarks[_j3]);
            var tmpDiv = document.createElement('div');
            tmpDiv.innerHTML = markStr;
            var mark = tmpDiv.children[0];
            var statusObj = {}; //set the changed attributes to the init state

            for (var a = 0; a < ChartSpec.changedAttrs.length; a++) {
              if (ChartSpec.changedAttrs[a] === 'y' && ChartSpec.changedAttrs.indexOf('height') >= 0) {
                var markY = !mark.getAttribute('y') ? 0 : parseFloat(mark.getAttribute('y'));
                var markHeight = !mark.getAttribute('height') ? 0 : parseFloat(mark.getAttribute('height'));
                var targetValue = markY + markHeight;
                mark.setAttribute('y', targetValue);
                statusObj.y = targetValue;
              } else if (ChartSpec.changedAttrs[a] === 'd') {
                var resultD = void 0;

                if (mark.getAttribute('d')) {
                  resultD = _Util.Util.setPathDValue(mark.getAttribute('d'), true, 0, 0, diffCmds);
                }

                mark.setAttribute('d', resultD);
                statusObj.d = resultD;
              } else if (ChartSpec.changedAttrs[a] === 'textContent') {
                mark.innerHTML = '';
                statusObj.textContent = '';
              } else if (ChartSpec.changedAttrs[a] === 'fill' || ChartSpec.changedAttrs[a] === 'stroke') {
                if (typeof mark.getAttribute(ChartSpec.changedAttrs[a]) === 'undefined') {
                  mark.setAttribute(ChartSpec.changedAttrs[a], '#FFFFFF');
                }

                statusObj[ChartSpec.changedAttrs[a]] = mark.getAttribute(ChartSpec.changedAttrs[a]);
              } else {
                if (['x', 'y', 'cx', 'cy', 'x1', 'y1', 'x2', 'y2'].includes(ChartSpec.changedAttrs[a])) {
                  if (ChartSpec.changedAttrs[a] === 'x2') {
                    mark.setAttribute('x2', parseFloat(mark.getAttribute('x1')));
                    statusObj['x2'] = parseFloat(mark.getAttribute('x1'));
                  } else if (ChartSpec.changedAttrs[a] === 'y2') {
                    mark.setAttribute('y2', parseFloat(mark.getAttribute('y1')));
                    statusObj['y2'] = parseFloat(mark.getAttribute('y1'));
                  } else {
                    statusObj[ChartSpec.changedAttrs[a]] = parseFloat(mark.getAttribute(ChartSpec.changedAttrs[a]));
                  }
                } else {
                  mark.setAttribute(ChartSpec.changedAttrs[a], 0);
                  statusObj[ChartSpec.changedAttrs[a]] = 0;
                }
              }
            }

            markStr = '<svg xmlns="http://www.w3.org/2000/svg" width="500" height="500">' + mark.outerHTML + '</svg>';
            var parser = new DOMParser();
            var svgMark = parser.parseFromString(markStr, "image/svg+xml").lastChild.children[0];
            ChartSpec.charts[i].querySelector('#chartContent').appendChild(svgMark);
            markStatus.get(allMarks[_j3])[i] = statusObj;
          }
        }
      } //set data-trans of chart 0


      ChartSpec.dataTrans = new Map();

      for (var _j4 = 0; _j4 < allMarks.length; _j4++) {
        var statusArr = markStatus.get(allMarks[_j4]);
        var dataTransArr = [];

        for (var si = 0; si < statusArr.length; si++) {
          var tmpStatus = {};

          for (var _a = 0; _a < ChartSpec.changedAttrs.length; _a++) {
            if (['width', 'height', 'r'].includes(ChartSpec.changedAttrs[_a])) {
              tmpStatus[ChartSpec.changedAttrs[_a]] = 100 * statusArr[si][ChartSpec.changedAttrs[_a]] / statusArr[0][ChartSpec.changedAttrs[_a]];
            } else {
              tmpStatus[ChartSpec.changedAttrs[_a]] = statusArr[si][ChartSpec.changedAttrs[_a]];
            }
          }

          dataTransArr.push(tmpStatus); //mark status in charts
        } //copy the status of the 1st chart as the init status


        ChartSpec.dataTrans.set(allMarks[_j4], dataTransArr);
        var markDom = ChartSpec.charts[0].querySelector('#' + allMarks[_j4]);
        markDom.setAttribute('data-transition', JSON.stringify({
          "dataTrans": dataTransArr
        }, null, '\t'));
      }

      return ChartSpec.charts[0];
    }
  }, {
    key: "transToLottieFromTo",
    value: function transToLottieFromTo() {}
  }, {
    key: "getBBoxes",
    value: function getBBoxes() {
      var svg = document.getElementById('chartContainer').children[0];
      var marks = svg.querySelectorAll('[id^="mark"]');
      var bBoxes = new Map();

      if (marks.length > 0) {
        [].forEach.call(marks, function (m) {
          var markId = m.getAttribute('id');
          var bBox;

          if (m.tagName === 'text') {
            bBox = m.getBBox();
            bBox.width += 10;
          } else {
            bBox = m.getBBox();
          }

          bBoxes.set(markId, bBox);
        });
      }

      return bBoxes;
    }
  }, {
    key: "removeTransitions",
    value: function removeTransitions(t) {
      var tr = t.getAttribute('transform');
      var parentTrans = t.parentNode.getAttribute('trans').split(',');

      if (tr) {
        tr = tr.replace(/translate|scale|rotate|\s/g, function (m) {
          return m === ' ' ? '' : '@' + m;
        });
        tr = tr.replace(/(^@*)|(@*$)/g, '').split('@');
        var scaleStr = '',
            transStr = '';

        for (var i = 0; i < tr.length; i++) {
          if (tr[i].indexOf('translate') >= 0) {
            transStr = tr[i];
          } else if (tr[i].indexOf('scale') >= 0) {
            scaleStr = tr[i];
          }
        }

        var transPosiStr = transStr.replace(/translate\(| |\)/g, '').split(',');
        t.setAttribute('transform', scaleStr);

        if (t.tagName === 'g') {
          t.setAttribute('trans', parseFloat(transPosiStr[0]) + parseFloat(parentTrans[0]) + ',' + (parseFloat(transPosiStr[1]) + parseFloat(parentTrans[1])));
        } else {
          _Util.Util.transShape(t, parseFloat(transPosiStr[0]) + parseFloat(parentTrans[0]), parseFloat(transPosiStr[1]) + parseFloat(parentTrans[1]));
        }
      } else {
        if (t.tagName === 'g') {
          t.setAttribute('trans', parentTrans.join(','));
        } else {
          _Util.Util.transShape(t, parseFloat(parentTrans[0]), parseFloat(parentTrans[1]));
        }
      }

      if (t.children.length > 0) {
        for (var _i2 = 0; _i2 < t.children.length; _i2++) {
          ChartSpec.removeTransitions(t.children[_i2]);
        }
      }
    }
  }, {
    key: "addLottieMarkLayers",
    value: function addLottieMarkLayers(t) {
      if (t.tagName !== 'g' && t.tagName !== 'svg') {
        if (t.classList.contains('mark')) {
          _GlobalVar.globalVar.markLayers.set(t.getAttribute('id'), _GlobalVar.globalVar.jsMovin.addLayer(t));
        } else {
          _GlobalVar.globalVar.jsMovin.addLayer(t);
        }
      }

      if (t.children.length > 0) {
        for (var i = 0; i < t.children.length; i++) {
          ChartSpec.addLottieMarkLayers(t.children[i]);
        }
      }
    } // static getMarkBBox(svg) {
    //     let markBoundingRects = new Map();
    //     let marks = svg.querySelectorAll('[id^="mark"]');
    //     if (marks.length > 0) {
    //         [].forEach.call(marks, function (m) {
    //             if (m.tagName !== 'text') {
    //                 markBoundingRects.set(m.getAttribute('id'), m.getBBox());
    //             } else {//text tag, the bounding box coords is the bottom left corner
    //                 let bBox = m.getBBox();
    //                 bBox.y -= bBox.height;
    //                 bBox.width += 10;
    //                 markBoundingRects.set(m.getAttribute('id'), bBox);
    //             }
    //         });
    //     }
    //     return markBoundingRects;
    // }
    // static processAnimateChart(chartStr, bBoxes) {
    //     let tmpDiv = document.createElement('div');
    //     tmpDiv.innerHTML = chartStr;
    //     let aniSvg = tmpDiv.children[0];
    //     aniSvg.setAttribute('id', 'visAnimation');
    //     aniSvg.querySelector('#chartContent').setAttribute('id', 'aniChartContent');
    //     let aniMarks = aniSvg.querySelectorAll('[id^="mark"]');
    //     if (aniMarks.length > 0) {
    //         [].forEach.call(aniMarks, function (am) {
    //             let markId = am.getAttribute('id');
    //             let idIndex = markId.substring(4);
    //             am.setAttribute('id', 'ani' + markId);
    //             //create corresponding mask
    //             let mask = document.createElementNS('http://www.w3.org/2000/svg', 'mask');
    //             mask.setAttributeNS(null, 'id', 'animaskmark' + idIndex);
    //             let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    //             rect.setAttributeNS(null, 'id', 'animaskBgmark' + idIndex);
    //             rect.setAttributeNS(null, 'x', bBoxes.get(markId).x - 1);
    //             rect.setAttributeNS(null, 'y', bBoxes.get(markId).y - 1);
    //             rect.setAttributeNS(null, 'width', bBoxes.get(markId).width + 2);
    //             rect.setAttributeNS(null, 'height', bBoxes.get(markId).height + 2);
    //             rect.setAttributeNS(null, 'fill', '#fff');
    //             mask.appendChild(rect);
    //             let rect2 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    //             rect2.setAttributeNS(null, 'x', -10000);
    //             rect2.setAttributeNS(null, 'y', -10000);
    //             rect2.setAttributeNS(null, 'width', 20000);
    //             rect2.setAttributeNS(null, 'height', 20000);
    //             rect2.setAttributeNS(null, 'fill', '#fff');
    //             mask.appendChild(rect2);
    //             aniSvg.appendChild(mask);
    //             am.setAttribute('mask', 'url(#animaskmark' + idIndex + ')');
    //         });
    //     }
    //     return aniSvg;
    // }

  }]);

  return ChartSpec;
}();

ChartSpec.charts = [];
ChartSpec.changedAttrs = [];
ChartSpec.viewport = new _Util.Viewport();
ChartSpec.dataTrans = new Map();
ChartSpec.markDoms = new Map();
var _default = ChartSpec;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/FacetSpec.js":
/*!**************************!*\
  !*** ./src/FacetSpec.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FacetSpec =
/*#__PURE__*/
function () {
  function FacetSpec(type, views) {
    _classCallCheck(this, FacetSpec);

    this._type;
    this._views;
    this.views = views;
    this.type = type;
  }

  _createClass(FacetSpec, [{
    key: "type",
    set: function set(type) {
      if (typeof type !== 'undefined') {
        if (Object.keys(FacetSpec.facetType).includes(type)) {
          this._type = type;
        } else {
          console.log('the facet type has to be one of "row" or "column", setting to default value "column".');
          this._type = FacetSpec.facetType.col;
        }
      }
    },
    get: function get() {
      return this._type;
    }
  }, {
    key: "views",
    set: function set(views) {
      if (typeof views !== 'undefined') {
        //translate "range" to "frames"
        var frameViews = views.map(function (view) {
          if (typeof view.range !== 'undefined') {
            //check range 
            var regend = new RegExp("\\d+$");
            var rangeStartName = view.range[0].replace(regend, ''),
                rangeEndName = view.range[1].replace(regend, ''),
                rangeStart = view.range[0].match(regend),
                rangeEnd = view.range[1].match(regend);

            if (rangeStartName === rangeEndName) {
              view.frames = [];

              for (var i = rangeStart; i <= rangeEnd; i++) {
                view.frames.push(rangeStartName + i);
              }
            } else {
              view.frames = [view.range[0], view.range[1]];
              console.log('range start and end mismatch');
            }
          }

          return view;
        }); //find the max number of charts in views

        var maxLen = 0;

        for (var i = 0; i < frameViews.length; i++) {
          if (frameViews[i].frames.length > maxLen) {
            maxLen = frameViews[i].frames.length;
          }
        }

        for (var _i = 0; _i < frameViews.length; _i++) {
          if (frameViews[_i].frames.length < maxLen) {
            var lastItem = frameViews[_i].frames[frameViews[_i].frames.length - 1];
            var numDiff = maxLen - frameViews[_i].frames.length;

            while (numDiff > 0) {
              frameViews[_i].frames.push(lastItem);

              numDiff--;
            }
          }
        }

        this._views = frameViews;
      }
    },
    get: function get() {
      return this._views;
    }
  }]);

  return FacetSpec;
}();

FacetSpec.facetType = {
  row: 'row',
  col: 'column'
};
var _default = FacetSpec;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/GroupingSpec.js":
/*!*****************************!*\
  !*** ./src/GroupingSpec.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TimingSpec2 = _interopRequireDefault(__webpack_require__(/*! ./TimingSpec.js */ "./src/TimingSpec.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var GroupingSpec =
/*#__PURE__*/
function (_TimingSpec) {
  _inherits(GroupingSpec, _TimingSpec);

  function GroupingSpec() {
    var _this;

    _classCallCheck(this, GroupingSpec);

    _this = _possibleConstructorReturn(this, (GroupingSpec.__proto__ || Object.getPrototypeOf(GroupingSpec)).call(this));
    _this._groupBy = 'id'; //optional

    _this._reference = _TimingSpec2.default.timingRef.previousStart;
    _this._delay = 0;

    _this.sort =
    /*#__PURE__*/
    function () {
      //optional
      function _class() {
        _classCallCheck(this, _class);

        this.field;
        this.order;
        this.expr;
      }

      return _class;
    }();

    _this.grouping; //optional, another GroupingSpec object indicating more groupings

    return _this;
  }
  /***** getters and setters *****/


  _createClass(GroupingSpec, [{
    key: "initGrouping",

    /***** end getters and setters *****/

    /**
     * init nested grouping and actions using json obj
     * @param {JSON obj} groupingJson 
     */
    value: function initGrouping(groupingJson) {
      this.groupBy = groupingJson.groupBy;
      this.reference = groupingJson.reference;
      this.delay = groupingJson.delay;

      if (typeof groupingJson.sort !== 'undefined') {
        this.sort.field = groupingJson.sort.field;
        this.sort.order = groupingJson.sort.order;
        this.sort.expr = groupingJson.sort.expr;
      }

      if (typeof groupingJson.grouping !== 'undefined') {
        this.grouping = new GroupingSpec();
        this.grouping.initGrouping(groupingJson.grouping);
      } else if (typeof groupingJson.grouping === 'undefined' && groupingJson.groupBy !== 'id') {
        //didnot goruping to id, add extra grouping by id
        this.grouping = new GroupingSpec();
        this.grouping.groupBy = 'id';
      }
    }
  }, {
    key: "arrangeOrder",
    value: function arrangeOrder(markIds, domMarks) {
      var root = {};
      root.groupRef = 'root';
      root.children = [];
      root.marks = markIds;
      this.generateTree(root, domMarks);
      var orderedMarks = this.getMarkOrder(root);
      return orderedMarks;
    }
  }, {
    key: "generateTree",
    value: function generateTree(t, domMarks) {
      var groupByRef = this.groupBy;
      var nodesThisLevel = new Map();

      for (var i = 0, markId; i < t.marks.length | (markId = t.marks[i]); i++) {
        var datum = domMarks.get(markId)['data-datum']; //datum stored in the tag

        var refValue = void 0;

        if (typeof domMarks.get(markId)[groupByRef] !== 'undefined') {
          refValue = domMarks.get(markId)[groupByRef];
        } else if (typeof domMarks.get(markId)[groupByRef] === 'undefined' && typeof datum[groupByRef] !== 'undefined') {
          refValue = datum[groupByRef];
        } else {
          console.log('error: grouping by an unknown attribute');
          return;
        }

        if (typeof nodesThisLevel.get(refValue) !== 'undefined') {
          nodesThisLevel.get(refValue).marks.push(markId);
        } else {
          var tmpObj = {};
          tmpObj.groupRef = groupByRef;
          tmpObj.refValue = refValue;
          tmpObj.children = [];
          tmpObj.marks = [markId];
          nodesThisLevel.set(refValue, tmpObj);
        }
      } //order nodes of this level according to the 'sort' spec


      switch (_typeof(this.sort.order)) {
        case 'object':
          //Array
          for (var _i = 0, _refValue; _i < this.sort.order.length | (_refValue = this.sort.order[_i]); _i++) {
            if (typeof nodesThisLevel.get(_refValue) !== 'undefined') {
              t.children.push(nodesThisLevel.get(_refValue));
            }
          }

          break;

        case 'string':
          //'ascending' | 'descending'
          //check whether have come to the lowest level
          var hasSingleMark = true;
          nodesThisLevel.forEach(function (value, ref) {
            if (value.marks.length > 1) {
              hasSingleMark = false;
            }
          }); //only take effect when a specific field is specified and are on the lowest level

          if (typeof this.sort.field !== 'undefined' && hasSingleMark) {
            var orderRef = this.sort.field;
            var nodesThisLevelArr = [].concat(_toConsumableArray(nodesThisLevel));
            var orderType = this.sort.order;
            nodesThisLevelArr.sort(function (a, b) {
              var markId1 = a[1].marks[0];
              var markId2 = b[1].marks[0];
              var orderRefValue1 = '',
                  orderRefValue2 = '';
              var datum1 = domMarks.get(markId1)['data-datum'];
              var datum2 = domMarks.get(markId2)['data-datum'];

              if (typeof domMarks.get(markId1)[orderRef] !== 'undefined' && domMarks.get(markId2)[orderRef] !== 'undefined') {
                orderRefValue1 = domMarks.get(markId1)[orderRef];
                orderRefValue2 = domMarks.get(markId2)[orderRef];
              } else if (typeof domMarks.get(markId1)[orderRef] === 'undefined' && typeof datum1[orderRef] !== 'undefined' && typeof domMarks.get(markId2)[orderRef] === 'undefined' && typeof datum2[orderRef] !== 'undefined') {
                orderRefValue1 = datum1[orderRef];
                orderRefValue2 = datum2[orderRef];
              }

              if (!isNaN(parseFloat(orderRefValue1))) {
                orderRefValue1 = parseFloat(orderRefValue1);
              }

              if (!isNaN(parseFloat(orderRefValue2))) {
                orderRefValue2 = parseFloat(orderRefValue2);
              }

              if (orderType === GroupingSpec.orderTypes.ascending) {
                if (orderRefValue1 >= orderRefValue2) {
                  return 1;
                } else {
                  return -1;
                }
              } else if (orderType === GroupingSpec.orderTypes.descending) {
                if (orderRefValue2 >= orderRefValue1) {
                  return 1;
                } else {
                  return -1;
                }
              } else if (orderType === GroupingSpec.orderTypes.random) {
                return Math.random() >= 0.5 ? 1 : -1;
              }
            });

            for (var _i2 = 0, tmpNode; _i2 < nodesThisLevelArr.length | (tmpNode = nodesThisLevelArr[_i2]); _i2++) {
              t.children.push(tmpNode[1]);
            }
          } else {
            var _nodesThisLevelArr = [].concat(_toConsumableArray(nodesThisLevel));

            if (this.sort.order === GroupingSpec.orderTypes.ascending) {
              _nodesThisLevelArr.sort(function (a, b) {
                if (a[0] >= b[0]) {
                  return 1;
                } else {
                  return -1;
                }
              });
            } else if (this.sort.order === GroupingSpec.orderTypes.descending) {
              _nodesThisLevelArr.sort(function (a, b) {
                if (b[0] >= a[0]) {
                  return 1;
                } else {
                  return -1;
                }
              });
            } else if (this.sort.order === GroupingSpec.orderTypes.random) {
              _nodesThisLevelArr.sort(function (a, b) {
                return Math.random() >= 0.5 ? 1 : -1;
              });
            }

            for (var _i3 = 0, _tmpNode; _i3 < _nodesThisLevelArr.length | (_tmpNode = _nodesThisLevelArr[_i3]); _i3++) {
              t.children.push(_tmpNode[1]);
            }
          }

          break;

        default:
          nodesThisLevel.forEach(function (tmpNode, ref) {
            t.children.push(tmpNode);
          });
      }

      if (typeof this.grouping !== 'undefined') {
        for (var _i4 = 0, _tmpNode2; _i4 < t.children.length | (_tmpNode2 = t.children[_i4]); _i4++) {
          this.grouping.generateTree(_tmpNode2, domMarks);
        }
      }
    }
    /**
     * get the animation order of marks
     * @param {Object} t
     * @param {Array} arr 
     */

  }, {
    key: "getMarkOrder",
    value: function getMarkOrder(t) {
      var orderedMarks = [];

      if (t != null) {
        var queue = [];
        queue.unshift(t);

        while (queue.length != 0) {
          var item = queue.shift();
          var children = item.children;

          if (children.length <= 0) {
            orderedMarks = [].concat(_toConsumableArray(orderedMarks), _toConsumableArray(item.marks));
          } else {
            for (var i = 0; i < children.length; i++) {
              queue.push(children[i]);
            }
          }
        }
      }

      return orderedMarks;
    }
    /**
     * from bottom up, calculate the time specs of marks recursively
     * @param {GroupingSpec} groupingSpec 
     * @param {Map} markAni : key:markId, value:time & action specs of the corresponding mark
     * @param {Map} groupByM : key:markId, value:group reference
     */

  }, {
    key: "calTimeInGrouping",
    value: function calTimeInGrouping(markAni, domMarks) {
      var groupByRef = this.groupBy;
      var groupByMap = new Map(); //record the result of groupBy in this level. key:markId, value:group reference

      markAni.forEach(function (ani, markId) {
        var datum = domMarks.get(markId)['data-datum']; //datum stored in the tag

        if (typeof domMarks.get(markId)[groupByRef] !== 'undefined') {
          groupByMap.set(markId, domMarks.get(markId)[groupByRef]);
        } else if (typeof domMarks.get(markId)[groupByRef] === 'undefined' && typeof datum[groupByRef] !== 'undefined') {
          groupByMap.set(markId, datum[groupByRef]);
        } else {
          console.log('error: grouping by an unknown attribute');
        }
      });

      if (typeof this.grouping !== 'undefined') {
        this.grouping.calTimeInGrouping(markAni, domMarks); //update time with upper grouping specs

        var groupByArr = [].concat(_toConsumableArray(groupByMap));
        var currentGroupRef = '';
        var firstItemLastGroup, lastItemLastGroup;
        var currentGroup = new Array(); //record marks belong to current group

        var lastGroup = new Map();

        for (var i = 0; i < groupByArr.length; i++) {
          var markId = groupByArr[i][0];
          var groupRef = groupByArr[i][1];

          if (groupRef !== currentGroupRef) {
            //come to the end of one group
            this.updateGroupingTime(firstItemLastGroup, lastItemLastGroup, lastGroup, currentGroup, markAni);
            firstItemLastGroup = currentGroup[0];
            lastItemLastGroup = currentGroup[currentGroup.length - 1];
            lastGroup = currentGroup;
            currentGroup = [];
            currentGroupRef = groupRef;
          }

          currentGroup.push(markId);
        } //deal with the last group


        this.updateGroupingTime(firstItemLastGroup, lastItemLastGroup, lastGroup, currentGroup, markAni);
      } else {
        //has come to the lowest level
        var markAniArr = [].concat(_toConsumableArray(markAni.entries()));
        markAniArr[0][1].startTime = 0;

        for (var _i5 = 1; _i5 < markAniArr.length; _i5++) {
          var tmpStart = void 0,
              previousStartTime = markAniArr[_i5 - 1][1].startTime,
              previousEndTime = previousStartTime + markAniArr[_i5 - 1][1].totalDuration;

          switch (this.reference) {
            case _TimingSpec2.default.timingRef.previousStart:
              tmpStart = previousStartTime + this.delay;
              break;

            case _TimingSpec2.default.timingRef.previousEnd:
              tmpStart = previousEndTime + this.delay;
              break;

            case _TimingSpec2.default.timingRef.absolute:
              tmpStart = this.delay;
              break;

            default:
              tmpStart = previousStartTime + this.delay;
          }

          markAniArr[_i5][1].startTime = tmpStart;
          markAni.set(markAniArr[_i5][0], markAniArr[_i5][1]);
        }
      }
    }
  }, {
    key: "updateGroupingTime",
    value: function updateGroupingTime(firstItemLastGroup, lastItemLastGroup, lastGroup, currentGroup, markAni) {
      var maxDuration = -10000,
          maxDurationItemLastGroup;

      for (var i = 0, itemLastGroup; i < lastGroup.length | (itemLastGroup = lastGroup[i]); i++) {
        if (markAni.get(itemLastGroup).startTime + markAni.get(itemLastGroup).totalDuration > maxDuration) {
          maxDuration = markAni.get(itemLastGroup).startTime + markAni.get(itemLastGroup).totalDuration;
          maxDurationItemLastGroup = itemLastGroup;
        }
      } //update time acording to delay from the second group


      if (typeof firstItemLastGroup !== 'undefined' && typeof maxDurationItemLastGroup !== 'undefined') {
        var timeDiff = 0;

        switch (this.reference) {
          case _TimingSpec2.default.timingRef.previousStart:
            timeDiff = markAni.get(firstItemLastGroup).startTime - markAni.get(currentGroup[0]).startTime + this.delay;
            break;

          case _TimingSpec2.default.timingRef.previousEnd:
            timeDiff = markAni.get(maxDurationItemLastGroup).startTime + markAni.get(maxDurationItemLastGroup).totalDuration - markAni.get(currentGroup[0]).startTime + this.delay;
            break;

          case _TimingSpec2.default.timingRef.absolute:
            timeDiff = this.delay - markAni.get(currentGroup[0]).startTime;
            break;
        }

        for (var _i6 = 0, markId; _i6 < currentGroup.length | (markId = currentGroup[_i6]); _i6++) {
          markAni.get(markId).startTime += timeDiff;
        }
      }
    }
  }, {
    key: "groupBy",
    set: function set(gb) {
      if (typeof gb !== 'undefined') this._groupBy = gb;
    },
    get: function get() {
      return this._groupBy;
    }
  }, {
    key: "reference",
    set: function set(ref) {
      if (typeof ref !== 'undefined') {
        var tmpRefStr = _TimingSpec2.default.transRef(ref);

        if (Object.keys(_TimingSpec2.default.timingRef).includes(tmpRefStr)) {
          this._reference = ref;
        } else {
          alert('the \'reference\' of TimingSpec has to be one of \'previousStart\', \'previousEnd\' or \'absolute\'. ');
        }
      }
    },
    get: function get() {
      return this._reference;
    }
  }, {
    key: "delay",
    set: function set(dly) {
      if (typeof dly !== 'undefined') {
        if (dly >= 1000 / _TimingSpec2.default.FRAME_RATE || dly === 0) {
          this._delay = dly;
        } else {
          this._delay = 1000 / _TimingSpec2.default.FRAME_RATE;
        }
      }
    },
    get: function get() {
      return this._delay;
    }
  }]);

  return GroupingSpec;
}(_TimingSpec2.default);

GroupingSpec.orderTypes = {
  ascending: 'ascending',
  descending: 'descending',
  random: 'random'
};
var _default = GroupingSpec;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/TimingSpec.js":
/*!***************************!*\
  !*** ./src/TimingSpec.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TimingSpec =
/*#__PURE__*/
function () {
  function TimingSpec() {
    _classCallCheck(this, TimingSpec);

    this._offset = 0; //default offfset is 0

    this._reference = TimingSpec.timingRef.previousStart; //default offset reference is 'previous_start'
  }
  /***** getters and setters *****/


  _createClass(TimingSpec, [{
    key: "calOffsetTime",

    /***** end getters and setters *****/

    /**
     * add offset start time
     * @param {number} lastStart : start time of the last item
     * @param {number} lastEnd : end time of the last item
     * @param {number} allItemsStart : start time of all the items 
     * @param {Map} domMarks : key: markId, value: attrs
     */
    value: function calOffsetTime(lastStart, lastEnd) {
      var allItemsStart = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var domMarks = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new Map();

      if (domMarks.size === 0) {
        //computing action offset time, return a number
        var itemStart = 0;

        switch (this.reference) {
          case TimingSpec.timingRef.previousStart:
            itemStart = lastStart + this.offset - allItemsStart;
            break;

          case TimingSpec.timingRef.previousEnd:
            itemStart = lastEnd + this.offset - allItemsStart;
            break;

          case TimingSpec.timingRef.absolute:
            itemStart = this.offset + allItemsStart;
            break;

          default:
            itemStart = lastStart + this.offset - allItemsStart;
        }

        return itemStart;
      } else {
        //computing animation offset time, return a map
        var that = this;
        var itemsStart = new Map(); //if the offset is an object, find the min value of the field in offset

        var minAttrValue = 1000000;

        if (_typeof(this.offset) === 'object') {
          domMarks.forEach(function (attrs, markId) {
            if (minAttrValue > parseFloat(attrs['data-datum'][that.offset.field])) {
              minAttrValue = parseFloat(attrs['data-datum'][that.offset.field]);
            }
          });
        }

        domMarks.forEach(function (attrs, markId) {
          var offsetValue = 0; //judge the type of offset: number or object

          if (typeof that.offset === 'number') {
            offsetValue = that.offset;
          } else if (_typeof(that.offset) === 'object') {
            offsetValue = that.offset.minOffset * parseFloat(attrs['data-datum'][that.offset.field]) / minAttrValue;
          } else {
            offsetValue = 0;
          }

          switch (that.reference) {
            case TimingSpec.timingRef.previousStart:
              itemsStart.set(markId, lastStart + offsetValue - allItemsStart);
              break;

            case TimingSpec.timingRef.previousEnd:
              itemsStart.set(markId, lastEnd + offsetValue - allItemsStart);
              break;

            case TimingSpec.timingRef.absolute:
              itemsStart.set(markId, offsetValue + allItemsStart);
              break;

            default:
              itemsStart.set(markId, lastStart + offsetValue - allItemsStart);
          }
        });
        return itemsStart;
      }
    }
  }, {
    key: "reference",
    set: function set(offsetRef) {
      if (typeof offsetRef !== 'undefined') {
        var tmpOffsetRefStr = TimingSpec.transRef(offsetRef);

        if (Object.keys(TimingSpec.timingRef).includes(tmpOffsetRefStr)) {
          this._reference = offsetRef;
        } else {
          alert('the \'reference\' of TimingSpec has to be one of \'previousStart\', \'previousEnd\' or \'absolute\'. ');
        }
      }
    },
    get: function get() {
      return this._reference;
    }
  }, {
    key: "offset",
    set: function set(ofst) {
      if (typeof ofst !== 'undefined') {
        if (typeof ofst === 'number') {
          this._offset = Math.floor(ofst / (1000 / TimingSpec.FRAME_RATE)) * (1000 / TimingSpec.FRAME_RATE);
        } else if (_typeof(ofst) === 'object') {
          this._offset = ofst;
        }
      }
    },
    get: function get() {
      return this._offset;
    }
  }], [{
    key: "transRef",
    value: function transRef(refStr) {
      switch (refStr) {
        case this.timingRef.previousStart:
          return 'previousStart';

        case this.timingRef.previousEnd:
          return 'previousEnd';

        case this.timingRef.absolute:
          return 'absolute';
      }
    }
  }]);

  return TimingSpec;
}();

TimingSpec.FRAME_RATE = 20;
TimingSpec.timingRef = {
  previousStart: 'start with previous',
  previousEnd: 'start after previous',
  absolute: 'absolute'
};
var _default = TimingSpec;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TimingSpec = __webpack_require__(/*! ./TimingSpec.js */ "./src/TimingSpec.js");

var Animation = __webpack_require__(/*! ./AnimationSpec.js */ "./src/AnimationSpec.js");

var Canis = __webpack_require__(/*! ./Canis.js */ "./src/Canis.js");

var Renderer = __webpack_require__(/*! ./AniRenderer.js */ "./src/AniRenderer.js");

window.canis = {
  frameRate: TimingSpec.FRAME_RATE,
  duration: function duration() {
    return Animation.wholeEndTime;
  },
  // loadSpec: (url, callback) => {
  //     Canis.loadSpec(url, callback);
  // },
  renderSpec: function renderSpec(spec, callback) {
    var canisObj = new Canis();
    canisObj.init(spec);
    return canisObj.render(callback);
  },
  // play: () => {
  //     Renderer.play();
  // },
  // renderFrame: (time) => {//render frame of a specific timepoint
  //     return Renderer.renderFrame(time);
  // },
  reset: function reset() {
    Renderer.resetCover();
    Animation.resetAll();
  },
  exportJSON: function exportJSON() {
    return Canis.lottieJSON;
  },
  test: function test(spec) {
    console.log('this is a test! ', spec);
  }
};

/***/ }),

/***/ "./src/util/GlobalVar.js":
/*!*******************************!*\
  !*** ./src/util/GlobalVar.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.globalVar = void 0;

var _jsmovin = _interopRequireDefault(__webpack_require__(/*! jsmovin */ "./node_modules/jsmovin/bin/jsmovin.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import JSMovin from './jsmovin/jsmovin.bundle.js';
// import JSMovin from './jsmovin/jsmovin.js';
var globalVar = {
  jsMovin: new _jsmovin.default(),
  markLayers: new Map() // assets: 

};
exports.globalVar = globalVar;

/***/ }),

/***/ "./src/util/Util.js":
/*!**************************!*\
  !*** ./src/util/Util.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AssetTemplate = exports.Viewport = exports.Util = void 0;

var _jsmovin = __webpack_require__(/*! jsmovin */ "./node_modules/jsmovin/bin/jsmovin.js");

var _svgPathParser = __webpack_require__(/*! svg-path-parser */ "./node_modules/svg-path-parser/index.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Util =
/*#__PURE__*/
function () {
  function Util() {
    _classCallCheck(this, Util);
  }

  _createClass(Util, null, [{
    key: "deepClone",
    value: function deepClone(obj) {
      if (!obj || true == obj) //this also handles boolean as true and false
        return obj;

      var objType = _typeof(obj);

      if ("number" == objType || "string" == objType) // add your immutables here
        return obj;
      var result = Array.isArray(obj) ? [] : {};

      if (obj instanceof Map) {
        result = new Map();

        for (var i = 0; i < obj.keys().length; i++) {
          var _key = obj.keys()[i];
          result.set(_key, Util.deepClone(obj.get(_key)));
        }
      }

      for (var key in obj) {
        if (obj.hasOwnProperty(key)) result[key] = Util.deepClone(obj[key]);
      }

      return result;
    }
  }, {
    key: "formatTime",
    value: function formatTime(time) {
      var currentTimeS = parseInt(time / 1000);
      var currentTimeMS = parseInt(time % 1000 / 10);
      var currentTimeSStr = currentTimeS < 10 ? '0' + currentTimeS : '' + currentTimeS;
      var currentTimeMSStr = currentTimeMS < 10 ? '0' + currentTimeMS : '' + currentTimeMS;
      return currentTimeSStr + ':' + currentTimeMSStr;
    }
  }, {
    key: "color2RGB",
    value: function color2RGB(color) {
      if (color) {
        color = color.toLowerCase();

        if (Array.from(this.colorNames.keys()).includes(color)) {
          color = this.colorNames.get(color);
        }

        color = color.replace(/\s/g, '');

        if (color.indexOf('rgb') >= 0) {
          var tmpStr = color.substr(color.indexOf('(') + 1);
          tmpStr = tmpStr.substring(0, tmpStr.indexOf(')'));
          var rgb = tmpStr.split(',');

          if (rgb.length === 3) {
            rgb[3] = 255;
          }

          return [parseInt(rgb[0]), parseInt(rgb[1]), parseInt(rgb[2]), parseInt(rgb[3])];
        } else if (color.indexOf('#') >= 0) {
          return this.HEX2RGB(color);
        }
      }

      return "none";
    }
  }, {
    key: "HEX2RGB",
    value: function HEX2RGB(hex) {
      if (hex.charAt(0) === '#') {
        hex = hex.substr(1);
      }

      if (hex.length < 2 || hex.length > 6) {
        return false;
      }

      var values = hex.split(''),
          r,
          g,
          b,
          a = 255;

      if (hex.length === 2) {
        r = parseInt(values[0].toString() + values[1].toString(), 16);
        g = r;
        b = r;
      } else if (hex.length === 3) {
        r = parseInt(values[0].toString() + values[0].toString(), 16);
        g = parseInt(values[1].toString() + values[1].toString(), 16);
        b = parseInt(values[2].toString() + values[2].toString(), 16);
      } else if (hex.length === 6) {
        r = parseInt(values[0].toString() + values[1].toString(), 16);
        g = parseInt(values[2].toString() + values[3].toString(), 16);
        b = parseInt(values[4].toString() + values[5].toString(), 16);
      } else {
        return false;
      }

      return [r, g, b, a];
    }
  }, {
    key: "toLottieRGBA",
    value: function toLottieRGBA(color) {
      return this.color2RGB(color).map(function (c) {
        return c / 255;
      });
    }
  }, {
    key: "toJSON",
    value: function toJSON(node) {
      node = node || this;
      var obj = {
        nodeType: node.nodeType
      };

      if (node.tagName) {
        obj.tagName = node.tagName.toLowerCase();
      } else if (node.nodeName) {
        obj.nodeName = node.nodeName;
      }

      if (node.nodeValue) {
        obj.nodeValue = node.nodeValue;
      }

      var attrs = node.attributes;

      if (attrs) {
        obj.attr = {};

        for (var i = 0, attr; i < attrs.length | (attr = attrs[i]); i++) {
          obj.attr[attr.nodeName] = attr.nodeValue;
        }
      }

      return obj;
    }
  }, {
    key: "toDOM",
    value: function toDOM(obj) {
      if (typeof obj == 'string') {
        obj = JSON.parse(obj);
      }

      var node,
          nodeType = obj.nodeType;

      switch (nodeType) {
        case 1:
          //ELEMENT_NODE
          node = document.createElementNS('http://www.w3.org/2000/svg', obj.tagName);
          var attributes = obj.attr || {};

          for (var i = 0, attr; i < Object.keys(attributes).length | (attr = Object.keys(attributes)[i]); i++) {
            var attrValue = _typeof(attributes[attr]) === 'object' ? JSON.stringify(attributes[attr], null, 0) : attributes[attr];
            node.setAttributeNS(null, attr, attrValue);
          }

          break;

        case 3:
          //TEXT_NODE
          node = document.createTextNode(obj.nodeValue);
          break;

        case 8:
          //COMMENT_NODE
          node = document.createComment(obj.nodeValue);
          break;

        case 9:
          //DOCUMENT_NODE
          node = document.implementation.createDocument();
          break;

        case 10:
          //DOCUMENT_TYPE_NODE
          node = document.implementation.createDocumentType(obj.nodeName);
          break;

        case 11:
          //DOCUMENT_FRAGMENT_NODE
          node = document.createDocumentFragment();
          break;

        default:
          return node;
      }

      return node;
    }
    /**
     * @param {*} obj A parsed svg json object.
     */

  }, {
    key: "discretizePath",
    value: function discretizePath(obj) {
      // normalize attributes
      if (obj.tagName !== 'path') return null;
      var attr = obj.attr || {};
      if (!attr.d) return null;
      return Util.discretizeD(attr.d, attr.fill);
    }
  }, {
    key: "discretizeD",
    value: function discretizeD(d, fillColor) {
      var resultGroup = [],
          reg = /[MmLlHhVvZzCcSsQqTtAa][^MmLlHhVvZzCcSsQqTtAa]*/gi,
          group = undefined;

      while (group = reg.exec(d)) {
        var offset = resultGroup.reduce(function (p, c) {
          return p + c.length;
        }, 0);
        resultGroup.push(d.slice(offset, group.index));
        resultGroup.push(group[0]);
      }

      var result = resultGroup.map(function (x) {
        var command = x.slice(0, 1);
        var parameters = x.slice(1).split(/[ ,]/).filter(function (n) {
          return n.trim();
        }).map(function (n) {
          return parseFloat(n);
        });
        return command ? {
          command: command,
          parameters: parameters
        } : null;
      }).filter(function (x) {
        return x;
      }); // polyline style path

      if (result.every(function (x) {
        return 'MmLlHhVv'.includes(x.command);
      }) && !Util.convertColor(fillColor)) {
        var lines = [];
        var prev = null;
        var valid = true;
        result.forEach(function (x) {
          if (!valid) return;

          if (x.command === 'M') {
            prev = x.parameters.slice(-2);
            return;
          }

          if (!prev) return valid = false;

          if (x.command === 'm') {
            prev = prev.map(function (v, i) {
              return v + x.parameters[i];
            });
            return;
          }

          var firstPoint = prev,
              secondPoint = x.command === x.command.toLowerCase() ? prev.slice() : [0, 0];

          switch (x.command.toLowerCase()) {
            case 'l':
              secondPoint = secondPoint.map(function (v, i) {
                return v + x.parameters[i];
              });
              break;

            case 'h':
              secondPoint[0] += x.parameters[0];
              secondPoint[1] = firstPoint[1];
              break;

            case 'v':
              secondPoint[1] += x.parameters[0];
              secondPoint[0] = firstPoint[0];
              break;
          }

          if (secondPoint) {
            lines.push([firstPoint, secondPoint]);
            prev = secondPoint;
          } else {
            valid = false;
          }
        });
        if (valid) return {
          type: 'lines',
          data: lines
        };
      } // pie style path


      if (result.every(function (x) {
        return 'MmLlAaZz'.includes(x.command);
      }) && result.filter(function (x) {
        return x.command.toLowerCase() === 'a';
      }).length) {
        var circles = [];
        var _prev = null;
        var _valid = true;
        result.forEach(function (x) {
          if (!_valid) return;

          if (x.command.toLowerCase() === 'm') {
            _prev = x.parameters.slice(-2);
            return;
          }

          if (!_prev) return _valid = false;
          if (x.command.toLowerCase() === 'z') return;
          var firstPoint = _prev,
              secondPoint = x.command.toLowerCase() === x.command ? _prev.slice() : [0, 0];

          if (x.command.toLowerCase() !== 'a') {
            return _prev = secondPoint.map(function (v, i) {
              return v + x.parameters[i];
            });
          }

          secondPoint = secondPoint.map(function (v, i) {
            return v + x.parameters[i + 5];
          });
          var tmp = Util.svgArcToCenterParam.apply(null, firstPoint.concat(x.parameters.slice(0, 5)).concat(secondPoint));

          if (!isNaN(tmp.cx) && !isNaN(tmp.cy)) {
            circles.push({ ...tmp,
              rx: x.parameters[0],
              ry: x.parameters[1],
              rotate: x.parameters[2]
            });
          }

          _prev = secondPoint;
        });
        if (circles.length <= 0 || !circles.every(function (x) {
          return ['cx', 'cy'].reduce(function (p, c) {
            return p + Math.abs(x[c] - circles[0][c]);
          }, 0) < 1e-1;
        })) _valid = false;

        if (_valid) {
          var c = circles.reduce(function (p, c) {
            if (!p) return c;
            if (c.rx + c.ry > p.rx + p.ry) return c;
            return p;
          }, null);
          var attrResult = {
            type: 'pies',
            data: {
              cx: c.cx,
              cy: c.cy,
              startAngle: c.startAngle,
              endAngle: c.endAngle,
              clockwise: c.clockwise,
              radius: circles.map(function (x) {
                return {
                  rx: x.rx,
                  ry: x.ry,
                  rotate: x.rotate
                };
              })
            }
          };
          return attrResult;
        }
      } // other unhandled style path


      return null;
    }
  }, {
    key: "radian",
    value: function radian(ux, uy, vx, vy) {
      var dot = ux * vx + uy * vy;
      var mod = Math.sqrt((ux * ux + uy * uy) * (vx * vx + vy * vy));
      var rad = Math.acos(dot / mod);

      if (ux * vy - uy * vx < 0.0) {
        rad = -rad;
      }

      return rad;
    }
  }, {
    key: "svgArcToCenterParam",
    value: function svgArcToCenterParam(x1, y1, rx, ry, phi, fA, fS, x2, y2) {
      var cx, cy, startAngle, deltaAngle, endAngle;
      var PIx2 = Math.PI * 2.0;

      if (rx < 0) {
        rx = -rx;
      }

      if (ry < 0) {
        ry = -ry;
      } // if (rx == 0.0 || ry == 0.0) { // invalid arguments
      //     throw Error('rx and ry can not be 0');
      // }


      var s_phi = Math.sin(phi);
      var c_phi = Math.cos(phi);
      var hd_x = (x1 - x2) / 2.0; // half diff of x

      var hd_y = (y1 - y2) / 2.0; // half diff of y

      var hs_x = (x1 + x2) / 2.0; // half sum of x

      var hs_y = (y1 + y2) / 2.0; // half sum of y
      // F6.5.1

      var x1_ = c_phi * hd_x + s_phi * hd_y;
      var y1_ = c_phi * hd_y - s_phi * hd_x; // F.6.6 Correction of out-of-range radii
      //   Step 3: Ensure radii are large enough

      var lambda = x1_ * x1_ / (rx * rx) + y1_ * y1_ / (ry * ry);

      if (lambda > 1) {
        rx = rx * Math.sqrt(lambda);
        ry = ry * Math.sqrt(lambda);
      }

      var rxry = rx * ry;
      var rxy1_ = rx * y1_;
      var ryx1_ = ry * x1_;
      var sum_of_sq = rxy1_ * rxy1_ + ryx1_ * ryx1_; // sum of square
      // if (!sum_of_sq) {
      //     throw Error('start point can not be same as end point');
      // }

      var coe = Math.sqrt(Math.abs((rxry * rxry - sum_of_sq) / sum_of_sq));

      if (fA == fS) {
        coe = -coe;
      } // F6.5.2


      var cx_ = coe * rxy1_ / ry;
      var cy_ = -coe * ryx1_ / rx; // F6.5.3

      cx = c_phi * cx_ - s_phi * cy_ + hs_x;
      cy = s_phi * cx_ + c_phi * cy_ + hs_y;
      var xcr1 = (x1_ - cx_) / rx;
      var xcr2 = (x1_ + cx_) / rx;
      var ycr1 = (y1_ - cy_) / ry;
      var ycr2 = (y1_ + cy_) / ry; // F6.5.5

      startAngle = Util.radian(1.0, 0.0, xcr1, ycr1); // F6.5.6

      deltaAngle = Util.radian(xcr1, ycr1, -xcr2, -ycr2);

      while (deltaAngle > PIx2) {
        deltaAngle -= PIx2;
      }

      while (deltaAngle < 0.0) {
        deltaAngle += PIx2;
      }

      if (fS == false || fS == 0) {
        deltaAngle -= PIx2;
      }

      endAngle = startAngle + deltaAngle;

      while (endAngle > PIx2) {
        endAngle -= PIx2;
      }

      while (endAngle < 0.0) {
        endAngle += PIx2;
      }

      var outputObj = {
        /* cx, cy, startAngle, deltaAngle */
        cx: cx,
        cy: cy,
        startAngle: startAngle,
        deltaAngle: deltaAngle,
        endAngle: endAngle,
        clockwise: fS == true || fS == 1
      };
      return outputObj;
    }
  }, {
    key: "convertColor",
    value: function convertColor(str, fMode, tMode) {
      if (typeof str !== 'string') return str;
      if (str === 'none') return null;
      str = str.trim();
      var mr = null;

      if (tMode === undefined) {
        tMode = fMode;

        if (str.startsWith('#')) {
          fMode = 'hex';
        } else if (str.startsWith('rgb')) {
          fMode = 'rgb';
        }
      } // assume user input is valid


      switch (fMode) {
        case 'rgb':
          mr = str.split('(')[1].split(',').map(function (x) {
            return parseFloat(x);
          });
          break;

        case 'hex':
          mr = str.slice(1).match(/.{1,2}/g).map(function (x) {
            return parseInt(x, 16);
          });

        default:
          return str;
      }

      mr = mr.slice(0, 3);

      switch (tMode) {
        case 'hex':
          return '#' + mr.map(function (x) {
            return x.toString(16).padStart(2, '0');
          }).join('');

        case 'rgb':
          return "rgb(".concat(mr.join(','), ")");

        default:
          return str;
      }
    }
  }, {
    key: "polarToCartesian",
    value: function polarToCartesian(centerX, centerY, radius, angleInRadians) {
      return {
        x: Math.round((centerX + radius * Math.cos(angleInRadians)) * 100) / 100,
        y: Math.round((centerY + radius * Math.sin(angleInRadians)) * 100) / 100
      };
    }
  }, {
    key: "arc",
    value: function arc(x, y, innerRadius, outterRadius, startAngle, endAngle) {
      startAngle = startAngle < 0 ? startAngle + 2 * Math.PI : startAngle;
      endAngle = endAngle < 0 || startAngle > endAngle ? endAngle + 2 * Math.PI : endAngle; //to generate cover, make the cover a little bigger

      innerRadius = innerRadius === 0 ? 0 : innerRadius - 1;
      outterRadius += 1;
      var largeArcFlag = endAngle - startAngle <= Math.PI ? 0 : 1;
      var start1 = Util.polarToCartesian(x, y, outterRadius, endAngle);
      var end1 = Util.polarToCartesian(x, y, outterRadius, startAngle);
      var start2 = Util.polarToCartesian(x, y, innerRadius, endAngle);
      var end2 = Util.polarToCartesian(x, y, innerRadius, startAngle);
      var isRing = false;

      if (start1.x === end1.x && start1.y === end1.y) {
        //this is a ring
        end1.y -= 1;
        end2.y -= 1;
        isRing = true;
      }

      var d;

      if (!isRing) {
        d = ["M" + start1.x, start1.y, "A" + outterRadius, outterRadius, 0, largeArcFlag, 0, end1.x, end1.y, "L" + end2.x, end2.y, "A" + innerRadius, innerRadius, 0, largeArcFlag, 1, start2.x, start2.y, "L" + start1.x, start1.y + "Z"].join(",");
      } else {
        d = ["M" + start1.x, start1.y, "A" + outterRadius, outterRadius, 0, largeArcFlag, 1, end1.x, end1.y, "M" + end2.x, end2.y, "A" + innerRadius, innerRadius, 0, largeArcFlag, 0, start2.x, start2.y + "Z"].join(",");
      }

      return d;
    }
  }, {
    key: "domNodeToString",

    /**
     * turn a dom node to string
     * @param {DOM} domNode 
     */
    value: function domNodeToString(domNode) {
      var element = document.createElement("div");
      element.appendChild(domNode);
      return element.innerHTML;
    }
    /**
     * turn a string to dom node
     * @param {string} str 
     */

  }, {
    key: "strToDomNode",
    value: function strToDomNode(str) {
      var tmpDiv = document.createElement('div');
      tmpDiv.innerHTML = str.trim();
      var dom = tmpDiv.firstChild;
      return dom;
    }
  }, {
    key: "transShape",
    value: function transShape(t, tx, ty) {
      if (t.tagName !== 'path') {
        var hasPosi = false;

        if (t.getAttribute('x') || t.getAttribute('y')) {
          hasPosi = true;
          t.setAttribute('x', t.getAttribute('x') ? parseFloat(t.getAttribute('x')) + tx : tx);
          t.setAttribute('y', t.getAttribute('y') ? parseFloat(t.getAttribute('y')) + ty : ty);
        }

        if (t.getAttribute('x1') || t.getAttribute('y1') || t.getAttribute('x2') || t.getAttribute('y2')) {
          hasPosi = true;
          t.setAttribute('x1', t.getAttribute('x1') ? parseFloat(t.getAttribute('x1')) + tx : tx);
          t.setAttribute('x2', t.getAttribute('x2') ? parseFloat(t.getAttribute('x2')) + tx : tx);
          t.setAttribute('y1', t.getAttribute('y1') ? parseFloat(t.getAttribute('y1')) + ty : ty);
          t.setAttribute('y2', t.getAttribute('y2') ? parseFloat(t.getAttribute('y2')) + ty : ty);
        }

        if (t.getAttribute('cx') || t.getAttribute('cy')) {
          hasPosi = true;
          t.setAttribute('cx', t.getAttribute('cx') ? parseFloat(t.getAttribute('cx')) + tx : tx);
          t.setAttribute('cy', t.getAttribute('cy') ? parseFloat(t.getAttribute('cy')) + ty : ty);
        }

        if (!hasPosi) {
          if (t.tagName === 'circle') {
            t.setAttribute('cx', tx);
            t.setAttribute('cy', ty);
          } else {
            t.setAttribute('x', tx);
            t.setAttribute('y', ty);
          }
        }
      } else {
        if (t.getAttribute('d')) {
          var resultCmd = Util.setPathDValue(t.getAttribute('d'), false, tx, ty);
          t.setAttribute('d', resultCmd);
        }
      }
    }
  }, {
    key: "splitPath",
    value: function splitPath(d) {
      var tmpPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      tmpPath.setAttributeNS(null, 'd', d);
      var tmpPathLen = tmpPath.getTotalLength();
      var stepNum = 300,
          pathStepLen = tmpPathLen / stepNum;
      var discritPath = '';

      for (var i = 0; i < stepNum; i++) {
        var tmpPnt = tmpPath.getPointAtLength(pathStepLen * i);
        i === 0 ? discritPath += 'M' + tmpPnt.x + ',' + tmpPnt.y : discritPath += 'L' + tmpPnt.x + ',' + tmpPnt.y;
      }

      discritPath += 'Z';
      return discritPath;
    }
  }, {
    key: "getPathOffset",
    value: function getPathOffset(d) {
      var pathData = d;
      var pathDataSeries = (0, _svgPathParser.parseSVG)(pathData);
      var pathMaker = new _jsmovin.PathMaker();
      var pathDataWithType;
      pathDataSeries.forEach(function (pathDataItem) {
        switch (pathDataItem.code) {
          case 'M':
            pathDataWithType = pathDataItem;
            pathMaker.moveTo(pathDataWithType.x, pathDataWithType.y);
            break;

          case 'L':
            pathDataWithType = pathDataItem;
            pathMaker.lineTo(pathDataWithType.x, pathDataWithType.y);
            break;

          case 'l':
            pathDataWithType = pathDataItem;
            pathMaker.lineToRelative(pathDataWithType.x, pathDataWithType.y);
            break;

          case 'H':
            pathDataWithType = pathDataItem;
            pathMaker.horizontalTo(pathDataWithType.x);
            break;

          case 'h':
            pathDataWithType = pathDataItem;
            pathMaker.horizontalToRelative(pathDataWithType.x);
            break;

          case 'V':
            pathDataWithType = pathDataItem;
            pathMaker.verticalTo(pathDataWithType.y);
            break;

          case 'v':
            pathDataWithType = pathDataItem;
            pathMaker.verticalToRelative(pathDataWithType.y);
            break;

          case 'C':
            pathDataWithType = pathDataItem;
            pathMaker.cubicBezierCurveTo(pathDataWithType.x1, pathDataWithType.y1, pathDataWithType.x2, pathDataWithType.y2, pathDataWithType.x, pathDataWithType.y);
            break;

          case 'c':
            pathDataWithType = pathDataItem;
            pathMaker.cubicBezierCurveToRelative(pathDataWithType.x1, pathDataWithType.y1, pathDataWithType.x2, pathDataWithType.y2, pathDataWithType.x, pathDataWithType.y);
            break;

          case 'Q':
            pathDataWithType = pathDataItem;
            pathMaker.quadraticBezierCurveTo(pathDataWithType.x1, pathDataWithType.y1, pathDataWithType.x, pathDataWithType.y);
            break;

          case 'q':
            pathDataWithType = pathDataItem;
            pathMaker.quadraticBezierCurveToRelative(pathDataWithType.x1, pathDataWithType.y1, pathDataWithType.x, pathDataWithType.y);
            break;

          case 'A':
            pathDataWithType = pathDataItem;
            pathMaker.arcTo(pathDataWithType.rx, pathDataWithType.ry, pathDataWithType.xAxisRotation, ~~pathDataWithType.largeArc, ~~pathDataWithType.sweep, pathDataWithType.x, pathDataWithType.y);
            break;

          case 'a':
            pathDataWithType = pathDataItem;
            pathMaker.arcToRelative(pathDataWithType.rx, pathDataWithType.ry, pathDataWithType.xAxisRotation, ~~pathDataWithType.largeArc, ~~pathDataWithType.sweep, pathDataWithType.x, pathDataWithType.y);
            break;

          case 'Z':
          case 'z':
            pathMaker.closePath();
            break;

          default:
            console.error(pathDataItem);
            throw new Error('No implementation found for this path command.');
        }
      });
      return [pathMaker.offsetX, pathMaker.offsetY];
    }
  }, {
    key: "transDToLottieSpec",
    value: function transDToLottieSpec(d) {
      var posiOffset = this.getPathOffset(d);
      var pm = new _jsmovin.PathMaker(d);
      pm.uniform();
      return [posiOffset, pm];
    }
  }, {
    key: "setPathDValue",
    value: function setPathDValue(d, reset) {
      var tx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var ty = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var diffCmds = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : new Map();
      d = d.replace(/(?<=\d)\s(?=[mMlLhHvVcCsSqQtTaAzZ])/g, '').replace(/(?<=[mMlLhHvVcCsSqQtTaA])\s(?=(\d|[-+]))/g, '').replace(/\s/g, ',');
      var cmdRegExp = new RegExp(/[mMlLhHvVcCsSqQtTaAzZ][^mMlLhHvVcCsSqQtTaAzZ]*/g);
      var resultCmd = '';
      var cmds = d.match(cmdRegExp);

      if (cmds) {
        //get the position of the first move cmd if there is one
        var firstCmdName = cmds[0].substring(0, 1);
        var resetX = '0',
            resetY = '0';

        if (firstCmdName === 'm' || firstCmdName === 'M') {
          var firstCmdValues = cmds[0].substring(1).split(',');
          resetX = firstCmdValues[0];
          resetY = firstCmdValues[1];
        }

        for (var i = 0; i < cmds.length; i++) {
          var cmdName = cmds[i].substring(0, 1);
          var cmdValue = cmds[i].substring(1);
          resultCmd += cmdName;

          switch (cmdName) {
            case 'H':
              resultCmd = this.calNumTrans(resultCmd, diffCmds, i, cmdName, cmdValue, reset, resetX, tx);
              break;

            case 'h':
              resultCmd = this.calNumTrans(resultCmd, diffCmds, i, cmdName, cmdValue, reset, '0', 0);
              break;

            case 'V':
              resultCmd = this.calNumTrans(resultCmd, diffCmds, i, cmdName, cmdValue, reset, resetY, ty);
              break;

            case 'v':
              resultCmd = this.calNumTrans(resultCmd, diffCmds, i, cmdName, cmdValue, reset, '0', 0);
              break;

            case 'M':
            case 'L':
            case 'T':
            case 'C':
            case 'S':
            case 'Q':
              var nums = cmdValue.split(',');

              for (var ni = 0; ni < nums.length; ni++) {
                if (ni % 2 === 0) {
                  //x
                  resultCmd = this.calNumTrans(resultCmd, diffCmds, i, cmdName, nums[ni], reset, resetX, tx);
                } else {
                  //y
                  resultCmd = this.calNumTrans(resultCmd, diffCmds, i, cmdName, nums[ni], reset, resetY, ty);
                }

                if (ni !== nums.length - 1) {
                  resultCmd += ',';
                }
              }

              break;

            case 'm':
            case 'l':
            case 't':
            case 'c':
            case 's':
            case 'q':
              var nums2 = cmdValue.split(',');

              for (var _ni = 0; _ni < nums2.length; _ni++) {
                resultCmd = this.calNumTrans(resultCmd, diffCmds, i, cmdName, nums2[_ni], reset, '0', 0);

                if (_ni !== nums2.length - 1 && nums2[_ni] !== '') {
                  resultCmd += ',';
                }
              }

              break;

            case 'A':
              var anums = cmdValue.split(',');

              for (var _ni2 = 0; _ni2 < anums.length; _ni2++) {
                if (_ni2 === anums.length - 2) {
                  //x
                  resultCmd = this.calNumTrans(resultCmd, diffCmds, i, cmdName, anums[_ni2], reset, parseFloat(resetX) + 1, tx);
                  resultCmd += ',';
                } else if (_ni2 === anums.length - 1) {
                  //y
                  resultCmd = this.calNumTrans(resultCmd, diffCmds, i, cmdName, anums[_ni2], reset, parseFloat(resetY) + 1, ty);
                } else {
                  resultCmd += anums[_ni2] + ',';
                }
              }

              break;

            case 'a':
              var anums2 = cmdValue.split(',');

              for (var _ni3 = 0; _ni3 < anums2.length; _ni3++) {
                if (_ni3 === anums2.length - 2) {
                  //x
                  resultCmd = this.calNumTrans(resultCmd, diffCmds, i, cmdName, anums2[_ni3], reset, '1', 0);
                  resultCmd += ',';
                } else if (_ni3 === anums2.length - 1) {
                  //y
                  resultCmd = this.calNumTrans(resultCmd, diffCmds, i, cmdName, anums2[_ni3], reset, '1', 0);
                } else {
                  resultCmd += anums2[_ni3] + ',';
                }
              }

              break;

            case 'z':
            case 'Z':
              break;
          }
        }

        if (d.charAt(d.length - 1) === 'z' || d.charAt(d.length - 1) === 'Z') {
          resultCmd += 'Z';
        }
      }

      return resultCmd;
    }
  }, {
    key: "calNumTrans",
    value: function calNumTrans(resultCmd, diffCmds, currentCmdIdx, cmdName, cmdValue, reset, resetVal, tVal) {
      cmdName = cmdName.toLowerCase();

      if (reset) {
        if (typeof diffCmds.get(cmdName) !== 'undefined') {
          var diffCmdIdxs = diffCmds.get(cmdName);
          var flag = false;

          for (var j = 0; j < diffCmdIdxs.length; j++) {
            if (diffCmdIdxs[j].cmdIdx === currentCmdIdx) {
              resultCmd += resetVal;
              flag = true;
              break;
            }
          }

          if (!flag) {
            resultCmd += cmdValue;
          }
        } else {
          resultCmd += cmdValue;
        }
      } else {
        if (cmdValue.length > 0) {
          resultCmd += parseFloat(cmdValue) + tVal;
        }
      }

      return resultCmd;
    }
    /**
     * doing transition with path
     * @param {*} startD 
     * @param {*} endD 
     * @param {*} ratio 
     */

  }, {
    key: "calTransD",
    value: function calTransD(startD, endD, ratio, startDisD, endDisD) {
      startD = startD.replace(/(?<=\d)\s(?=[mMlLhHvVcCsSqQtTaAzZ])/g, '').replace(/(?<=[mMlLhHvVcCsSqQtTaA])\s(?=(\d|[-+]))/g, '').replace(/\s/g, ',');
      endD = endD.replace(/(?<=\d)\s(?=[mMlLhHvVcCsSqQtTaAzZ])/g, '').replace(/(?<=[mMlLhHvVcCsSqQtTaA])\s(?=(\d|[-+]))/g, '').replace(/\s/g, ',');
      var resultCmd = '';

      if (ratio === 0) {
        resultCmd = startD;
      } else if (ratio === 1) {
        resultCmd = endD;
      } else {
        for (var i = 0, len = startDisD.length; i < len; i++) {
          resultCmd += (i === 0 ? 'M' : 'L') + ((endDisD[i][0] - startDisD[i][0]) * ratio + startDisD[i][0]) + ',' + ((endDisD[i][1] - startDisD[i][1]) * ratio + startDisD[i][1]);
        }
      }

      if (startD.charAt(startD.length - 1) === 'z' || startD.charAt(startD.length - 1) === 'Z') {
        resultCmd += 'Z';
      }

      return resultCmd;
    }
    /** startAngle should smaller than endAngle
     * @param {number} fromStartAngle start state of start angle
     * @param {number} fromEndAngle start state of end angle
     * @param {number} toStartAngle end state of start angle
     * @param {number} toEndAngle end state of end angle
     * @param {number} ratio 0-1 float number
     * @param {Function<number,number,number>} interpolateFn customize interpolate function, input is (start, end, ratio), default is linear
     * @returns {Array<number>} [startAngle, endAngle] of given ratio
     */

  }, {
    key: "arcTransition",
    value: function arcTransition(fromStartAngle, fromEndAngle, toStartAngle, toEndAngle, ratio, interpolateFn) {
      var validAngle = function validAngle(s, e) {
        return e < s ? function () {
          throw 'startAngle should smaller than endAngle';
        }() : null;
      };

      validAngle(fromStartAngle, fromEndAngle);
      validAngle(toStartAngle, toEndAngle);

      var minimalAngle = function minimalAngle(s, e) {
        return e - Math.PI * 2 * Math.floor((e - s) / Math.PI / 2);
      }; // uniform angle domain within 2*PI


      fromEndAngle = minimalAngle(fromStartAngle, fromEndAngle);
      toStartAngle = minimalAngle(fromStartAngle, toStartAngle);
      toEndAngle = minimalAngle(toStartAngle, toEndAngle); // find the cloest domain

      toStartAngle -= Math.abs(toStartAngle - fromStartAngle) + Math.abs(toEndAngle - fromEndAngle) < 2 * Math.PI ? 0 : Math.PI * 2;
      toEndAngle = minimalAngle(toStartAngle, toEndAngle);

      var interpolate = interpolateFn || function (s, e, r) {
        return r * (e - s) + s;
      };

      return [interpolate(fromStartAngle, toStartAngle, ratio), interpolate(fromEndAngle, toEndAngle, ratio)];
    }
  }, {
    key: "findDiffCmds",
    value: function findDiffCmds(markStatus) {
      var result = new Map();
      markStatus.forEach(function (statusArr, markId) {
        var tmpDRecorder = [];

        for (var i = 0; i < statusArr.length; i++) {
          if (typeof statusArr[i] !== 'undefined') {
            tmpDRecorder.push(!statusArr[i].d ? 'm0,0' : statusArr[i].d);
          }
        }

        if (tmpDRecorder.length > 0) {
          Util.compareD(tmpDRecorder, result);
        }
      });
      return result;
    }
  }, {
    key: "compareD",
    value: function compareD(dArr, result) {
      var cmdRegExp = new RegExp(/[mlhvcsqta][^mlhvcsqtaz]*/g);
      var firstD = dArr[0];
      firstD = firstD.toLowerCase();
      firstD = firstD.replace(/(?<=\d)\s(?=[mlhvcsqtaz])/g, '').replace(/(?<=[mlhvcsqta])\s(?=(\d|[-+]))/g, '').replace(/\s/g, ',');
      var firstDCmds = firstD.match(cmdRegExp);

      for (var i = 1; i < dArr.length; i++) {
        var tmpD = dArr[i];
        tmpD = tmpD.toLowerCase();
        tmpD = tmpD.replace(/(?<=\d)\s(?=[mlhvcsqtaz])/g, '').replace(/(?<=[mlhvcsqta])\s(?=(\d|[-+]))/g, '').replace(/\s/g, ',');
        var tmpDCmds = tmpD.match(cmdRegExp);

        for (var j = 0; j < firstDCmds.length; j++) {
          if (typeof tmpDCmds[j] === 'undefined') {
            var cmdName = firstDCmds[j].substring(0, 1);

            if (typeof result.get(cmdName) === 'undefined') {
              result.set(cmdName, []);
            }

            var obj = {};
            obj.cmdIdx = j;
            obj.diffAttrIdxs = [];
            var firstDCmdValue = firstDCmds[j].substring(1);
            var firstDCmdValues = firstDCmdValue.split(',');

            for (var m = 0; m < firstDCmdValues.length; m++) {
              obj.diffAttrIdxs.push(m);
            }

            result.get(cmdName).push(obj);
          } else {
            var _cmdName = tmpDCmds[j].substring(0, 1);

            var tmpDCmdValue = tmpDCmds[j].substring(1);

            var _firstDCmdValue = firstDCmds[j].substring(1);

            if (tmpDCmdValue !== _firstDCmdValue) {
              if (typeof result.get(_cmdName) === 'undefined') {
                result.set(_cmdName, []);
              }

              var _obj = {};
              _obj.cmdIdx = j;
              _obj.diffAttrIdxs = [];
              var tmpDCmdValues = tmpDCmdValue.split(',');

              var _firstDCmdValues = _firstDCmdValue.split(',');

              for (var _m = 0; _m < tmpDCmdValues.length; _m++) {
                if (Math.floor(parseFloat(tmpDCmdValues[_m]) * 1000) !== Math.floor(parseFloat(_firstDCmdValues[_m]) * 1000)) {
                  _obj.diffAttrIdxs.push(_m);
                }
              } //check whether have already added this cmd


              var hasFlag = false;

              for (var _m2 = 0; _m2 < result.get(_cmdName).length; _m2++) {
                if (result.get(_cmdName)[_m2].cmdIdx === _obj.cmdIdx) {
                  hasFlag = true;
                  result.get(_cmdName)[_m2].diffAttrIdxs = [].concat(_toConsumableArray(new Set([].concat(_toConsumableArray(result.get(_cmdName)[_m2].diffAttrIdxs), _toConsumableArray(_obj.diffAttrIdxs)))));
                  break;
                }
              }

              if (!hasFlag) {
                result.get(_cmdName).push(_obj);
              }
            }
          }
        }
      }
    }
  }, {
    key: "getTransformAttrs",
    value: function getTransformAttrs(dom) {
      var tr = dom.getAttribute('transform');

      if (tr) {
        tr = tr.replace(/translate|scale|rotate|\s/g, function (m) {
          return m === ' ' ? '' : '@' + m;
        });
        tr = tr.replace(/(^@*)|(@*$)/g, '').split('@');
        var scaleStr = '',
            transStr = '';

        for (var i = 0; i < tr.length; i++) {
          if (tr[i].indexOf('translate') >= 0) {
            transStr = tr[i];
          } else if (tr[i].indexOf('scale') >= 0) {
            scaleStr = tr[i];
          }
        }

        var transPosiStr = ['0', '0'],
            scaleNumStr = '1';

        if (transStr !== '') {
          transPosiStr = transStr.replace(/translate\(| |\)/g, '').split(',');
        }

        if (scaleStr !== '') {
          scaleNumStr = scaleStr.replace(/scale\(| |\)/g, '');
        }

        return {
          transNums: [parseFloat(transPosiStr[0]), parseFloat(transPosiStr[1])],
          scaleNum: parseFloat(scaleNumStr)
        };
      }

      return {
        transNums: [0.0, 0.0],
        scaleNum: 1.0
      };
    }
    /**
     * check if the input prop is a valid property of the input tag
     * @param {*} tagName 
     * @param {*} propName 
     */

  }, {
    key: "checkValidProp",
    value: function checkValidProp(tagName, propName) {
      switch (tagName) {
        case 'circle':
          return ['opacity', 'cx', 'cy', 'r', 'stroke', 'stroke-width', 'fill'].includes(propName);

        case 'ellipse':
          return ['opacity', 'cx', 'cy', 'rx', 'ry', 'stroke', 'stroke-width', 'fill'].includes(propName);

        case 'image':
          return ['opacity', 'x', 'y', 'width', 'height', 'href', 'xlink:href', 'preserveAspectRatio'].includes(propName);

        case 'line':
          return ['opacity', 'x1', 'x2', 'y1', 'y2', 'stroke', 'stroke-width', 'fill'].includes(propName);

        case 'path':
          return ['opacity', 'd', 'stroke', 'stroke-width', 'fill'].includes(propName);

        case 'polygon':
        case 'polyline':
          return ['opacity', 'points', 'stroke', 'stroke-width', 'fill'].includes(propName);

        case 'rect':
          return ['opacity', 'x', 'y', 'width', 'height', 'rx', 'ry', 'stroke', 'stroke-width', 'fill'].includes(propName);

        case 'text':
          return ['opacity', 'x', 'y', 'dx', 'dy', 'textContent'].includes(propName);

        default:
          return false;
      }
    }
    /**
     * check if a string contains html tag
     */

  }, {
    key: "checkHTML",
    value: function checkHTML(str) {
      var reg = /<[^>]+>/g;
      return reg.test(str);
    }
  }]);

  return Util;
}();

exports.Util = Util;
Util.colorNames = new Map([['aliceblue', '#f0f8ff'], ['antiquewhite', '#faebd7'], ['aqua', '#00ffff'], ['aquamarine', '#7fffd4'], ['azure', '#f0ffff'], ['beige', '#f5f5dc'], ['bisque', '#ffe4c4'], ['black', '#000000'], ['blanchedalmond', '#ffebcd'], ['blue', '#0000ff'], ['blueviolet', '#8a2be2'], ['brown', '#a52a2a'], ['burlywood', '#deb887'], ['cadetblue', '#5f9ea0'], ['chartreuse', '#7fff00'], ['chocolate', '#d2691e'], ['coral', '#ff7f50'], ['cornflowerblue', '#6495ed'], ['cornsilk', '#fff8dc'], ['crimson', '#dc143c'], ['cyan', '#00ffff'], ['darkblue', '#00008b'], ['darkcyan', '#008b8b'], ['darkgoldenrod', '#b8860b'], ['darkgray', '#a9a9a9'], ['darkgrey', '#a9a9a9'], ['darkgreen', '#006400'], ['darkkhaki', '#bdb76b'], ['darkmagenta', '#8b008b'], ['darkolivegreen', '#556b2f'], ['darkorange', '#ff8c00'], ['darkorchid', '#9932cc'], ['darkred', '#8b0000'], ['darksalmon', '#e9967a'], ['darkseagreen', '#8fbc8f'], ['darkslateblue', '#483d8b'], ['darkslategray', '#2f4f4f'], ['darkslategrey', '#2f4f4f'], ['darkturquoise', '#00ced1'], ['darkviolet', '#9400d3'], ['deeppink', '#ff1493'], ['deepskyblue', '#00bfff'], ['dimgray', '#696969'], ['dimgrey', '#696969'], ['dodgerblue', '#1e90ff'], ['firebrick', '#b22222'], ['floralwhite', '#fffaf0'], ['forestgreen', '#228b22'], ['fuchsia', '#ff00ff'], ['gainsboro', '#dcdcdc'], ['ghostwhite', '#f8f8ff'], ['gold', '#ffd700'], ['goldenrod', '#daa520'], ['gray', '#808080'], ['grey', '#808080'], ['green', '#008000'], ['greenyellow', '#adff2f'], ['honeydew', '#f0fff0'], ['hotpink', '#ff69b4'], ['indianred ', '#cd5c5c'], ['indigo  ', '#4b0082'], ['ivory', '#fffff0'], ['khaki', '#f0e68c'], ['lavender', '#e6e6fa'], ['lavenderblush', '#fff0f5'], ['lawngreen', '#7cfc00'], ['lemonchiffon', '#fffacd'], ['lightblue', '#add8e6'], ['lightcoral', '#f08080'], ['lightcyan', '#e0ffff'], ['lightgoldenrodyellow', '#fafad2'], ['lightgray', '#d3d3d3'], ['lightgrey', '#d3d3d3'], ['lightgreen', '#90ee90'], ['lightpink', '#ffb6c1'], ['lightsalmon', '#ffa07a'], ['lightseagreen', '#20b2aa'], ['lightskyblue', '#87cefa'], ['lightslategray', '#778899'], ['lightslategrey', '#778899'], ['lightsteelblue', '#b0c4de'], ['lightyellow', '#ffffe0'], ['lime', '#00ff00'], ['limegreen', '#32cd32'], ['linen', '#faf0e6'], ['magenta', '#ff00ff'], ['maroon', '#800000'], ['mediumaquamarine', '#66cdaa'], ['mediumblue', '#0000cd'], ['mediumorchid', '#ba55d3'], ['mediumpurple', '#9370db'], ['mediumseagreen', '#3cb371'], ['mediumslateblue', '#7b68ee'], ['mediumspringgreen', '#00fa9a'], ['mediumturquoise', '#48d1cc'], ['mediumvioletred', '#c71585'], ['midnightblue', '#191970'], ['mintcream', '#f5fffa'], ['mistyrose', '#ffe4e1'], ['moccasin', '#ffe4b5'], ['navajowhite', '#ffdead'], ['navy', '#000080'], ['oldlace', '#fdf5e6'], ['olive', '#808000'], ['olivedrab', '#6b8e23'], ['orange', '#ffa500'], ['orangered', '#ff4500'], ['orchid', '#da70d6'], ['palegoldenrod', '#eee8aa'], ['palegreen', '#98fb98'], ['paleturquoise', '#afeeee'], ['palevioletred', '#db7093'], ['papayawhip', '#ffefd5'], ['peachpuff', '#ffdab9'], ['peru', '#cd853f'], ['pink', '#ffc0cb'], ['plum', '#dda0dd'], ['powderblue', '#b0e0e6'], ['purple', '#800080'], ['rebeccapurple', '#663399'], ['red', '#ff0000'], ['rosybrown', '#bc8f8f'], ['royalblue', '#4169e1'], ['saddlebrown', '#8b4513'], ['salmon', '#fa8072'], ['sandybrown', '#f4a460'], ['seagreen', '#2e8b57'], ['seashell', '#fff5ee'], ['sienna', '#a0522d'], ['silver', '#c0c0c0'], ['skyblue', '#87ceeb'], ['slateblue', '#6a5acd'], ['slategray', '#708090'], ['slategrey', '#708090'], ['snow', '#fffafa'], ['springgreen', '#00ff7f'], ['steelblue', '#4682b4'], ['tan', '#d2b48c'], ['teal', '#008080'], ['thistle', '#d8bfd8'], ['tomato', '#ff6347'], ['turquoise', '#40e0d0'], ['violet', '#ee82ee'], ['wheat', '#f5deb3'], ['white', '#ffffff'], ['whitesmoke', '#f5f5f5'], ['yellow', '#ffff00'], ['yellowgreen', '#9acd32']]);

var Viewport =
/*#__PURE__*/
function () {
  function Viewport() {
    _classCallCheck(this, Viewport);

    this.chartWidth = 0;
    this.chartHeight = 0;
  }

  _createClass(Viewport, [{
    key: "setViewport",
    value: function setViewport(w, h) {
      this.chartWidth = w;
      this.chartHeight = h;
    }
  }]);

  return Viewport;
}();

exports.Viewport = Viewport;

var AssetTemplate =
/*#__PURE__*/
function () {
  function AssetTemplate() {
    _classCallCheck(this, AssetTemplate);
  }

  _createClass(AssetTemplate, [{
    key: "construcor",
    value: function construcor(tagName, visualProps, animateProps, boundingBox, jsMovinLayerIdx) {
      //use to compare
      this.tagName = tagName;
      this.visualProps = visualProps;
      this.animateProps = animateProps; //use to calculate offsets and reference

      this.boundingBox = boundingBox;
      this.jsMovinLayerIdx = jsMovinLayerIdx;
    }
    /**
     * compare the new asset template with the existing tempalte 
     * @param {*} candidateAt : candidate asset template
     * @param {*} at : asset template
     */

  }], [{
    key: "compareTemplate",
    value: function compareTemplate(candidateAt, at) {
      if (candidateAt.tagName !== at.tagName) {
        return false;
      }

      if (!this.compareVisualProps(candidateAt.visualProps, at.visualProps)) {
        return false;
      }
    }
  }, {
    key: "compareVisualProps",
    value: function compareVisualProps(p1, p2) {
      var safeProps = ['x', 'y', 'width', 'height', 'r', 'opacity', 'd'];
      var allKeys = [].concat(_toConsumableArray(Object.keys(p1)), _toConsumableArray(Object.keys(p2)));
      var differentKeys = allKeys.filter(function (k) {
        typeof p1[k] === 'undefined' || typeof p2[k] === 'undefined' || p1[k] !== p2[k];
      });

      if (differentKeys.includes('d')) {
        var removeNumRegExp = new RegExp(/[0-9\.,\s]/g);
        var s1 = 'M0,0L0,0';
        var s2 = 'M 0,0 L 0,0';
        var s3 = 'M 0.5,0 L 0,0.9';
        var s4 = 'M0.5,0L0,0.9';
        console.log(s1.replace(removeNumRegExp, ''), s2.replace(removeNumRegExp, ''), s3.replace(removeNumRegExp, ''), s4.replace(removeNumRegExp, ''));
        return p1['d'].replace(removeNumRegExp, '') === p2['d'].replace(removeNumRegExp, '');
      }

      return differentKeys.every(function (k) {
        return safeProps.indexOf(k) >= 0;
      });
    }
  }]);

  return AssetTemplate;
}();

exports.AssetTemplate = AssetTemplate;

/***/ })

/******/ });
});
//# sourceMappingURL=anichart.js.map