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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lYXNpbmcudHMiXSwibmFtZXMiOlsiRWFzaW5nRmFjdG9yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0lBSWFBLGE7Ozs7Ozs7Ozs2QkFDdUI7QUFDNUIsYUFBTyxDQUFDLENBQUMsQ0FBQyxDQUFELENBQUQsRUFBTSxDQUFDLENBQUQsQ0FBTixDQUFELEVBQWEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxFQUFNLENBQUMsQ0FBRCxDQUFOLENBQWIsQ0FBUDtBQUNIOzs7aUNBRW1DO0FBQ2hDLGFBQU8sQ0FBQyxDQUFDLENBQUMsSUFBRCxDQUFELEVBQVMsQ0FBQyxDQUFELENBQVQsQ0FBRCxFQUFnQixDQUFDLENBQUMsS0FBRCxDQUFELEVBQVUsQ0FBQyxLQUFELENBQVYsQ0FBaEIsQ0FBUDtBQUNIOzs7a0NBRW9DO0FBQ2pDLGFBQU8sQ0FBQyxDQUFDLENBQUMsSUFBRCxDQUFELEVBQVMsQ0FBQyxLQUFELENBQVQsQ0FBRCxFQUFvQixDQUFDLENBQUMsS0FBRCxDQUFELEVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBcEIsQ0FBUDtBQUNIOzs7b0NBRXNDO0FBQ25DLGFBQU8sQ0FBQyxDQUFDLENBQUMsS0FBRCxDQUFELEVBQVUsQ0FBQyxJQUFELENBQVYsQ0FBRCxFQUFvQixDQUFDLENBQUMsSUFBRCxDQUFELEVBQVMsQ0FBQyxJQUFELENBQVQsQ0FBcEIsQ0FBUDtBQUNIOzs7aUNBRW1DO0FBQ2hDLGFBQU8sQ0FBQyxDQUFDLENBQUMsSUFBRCxDQUFELEVBQVMsQ0FBQyxLQUFELENBQVQsQ0FBRCxFQUFvQixDQUFDLENBQUMsSUFBRCxDQUFELEVBQVMsQ0FBQyxJQUFELENBQVQsQ0FBcEIsQ0FBUDtBQUNIOzs7a0NBRW9DO0FBQ2pDLGFBQU8sQ0FBQyxDQUFDLENBQUMsSUFBRCxDQUFELEVBQVMsQ0FBQyxJQUFELENBQVQsQ0FBRCxFQUFtQixDQUFDLENBQUMsSUFBRCxDQUFELEVBQVMsQ0FBQyxJQUFELENBQVQsQ0FBbkIsQ0FBUDtB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QUFDLElBQUQsQ0FBRCxFQUFTLENBQUMsS0FBRCxDQUFULENBQWxCLENBQVA7QUFDSDs7O2tDQUVvQztBQUNqQyxhQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUQsQ0FBRCxFQUFVLENBQUMsSUFBRCxDQUFWLENBQUQsRUFBb0IsQ0FBQyxDQUFDLEtBQUQsQ0FBRCxFQUFVLENBQUMsQ0FBRCxDQUFWLENBQXBCLENBQVA7QUFDSDs7O29DQUVzQztBQUNuQyxhQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUQsQ0FBRCxFQUFVLENBQUMsS0FBRCxDQUFWLENBQUQsRUFBcUIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxFQUFTLENBQUMsSUFBRCxDQUFULENBQXJCLENBQVA7QUFDSDs7O2lDQUVtQztBQUNoQyxhQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUQsQ0FBRCxFQUFRLENBQUMsQ0FBQyxJQUFGLENBQVIsQ0FBRCxFQUFtQixDQUFDLENBQUMsS0FBRCxDQUFELEVBQVUsQ0FBQyxLQUFELENBQVYsQ0FBbkIsQ0FBUDtBQUNIOzs7a0NBRW9DO0FBQ2pDLGFBQU8sQ0FBQyxDQUFDLENBQUMsS0FBRCxDQUFELEVBQVUsQ0FBQyxLQUFELENBQVYsQ0FBRCxFQUFxQixDQUFDLENBQUMsSUFBRCxDQUFELEVBQVMsQ0FBQyxLQUFELENBQVQsQ0FBckIsQ0FBUDtBQUNIOzs7b0NBRXNDO0FBQ25DLGFBQU8sQ0FBQyxDQUFDLENBQUMsSUFBRCxDQUFELEVBQVMsQ0FBQyxDQUFDLElBQUYsQ0FBVCxDQUFELEVBQW9CLENBQUMsQ0FBQyxLQUFELENBQUQsRUFBVSxDQUFDLElBQUQsQ0FBVixDQUFwQixDQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYXJhbWV0ZXJzIGV4dHJhY3RlZCBmcm9tIGh0dHBzOi8vZWFzaW5ncy5uZXQvXHJcblxyXG5leHBvcnQgdHlwZSBFYXNpbmdGdW5jdGlvbiA9IG51bWJlcltdW11bXVxyXG5cclxuZXhwb3J0IGNsYXNzIEVhc2luZ0ZhY3Rvcnkge1xyXG4gICAgc3RhdGljIGxpbmVhcigpOiBFYXNpbmdGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIFtbWzFdLCBbMV1dLCBbWzBdLCBbMF1dXVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBlYXNlSW5TaW5lKCk6IEVhc2luZ0Z1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gW1tbMC40N10sIFswXV0sIFtbMC43NDVdLCBbMC43MTVdXV1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZWFzZU91dFNpbmUoKTogRWFzaW5nRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiBbW1swLjM5XSwgWzAuNTc1XV0sIFtbMC41NjVdLCBbMV1dXVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBlYXNlSW5PdXRTaW5lKCk6IEVhc2luZ0Z1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gW1tbMC40NDVdLCBbMC4wNV1dLCBbWzAuNTVdLCBbMC45NV1dXVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBlYXNlSW5RdWFkKCk6IEVhc2luZ0Z1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gW1tbMC41NV0sIFswLjA4NV1dLCBbWzAuNjhdLCBbMC41M11dXVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBlYXNlT3V0UXVhZCgpOiBFYXNpbmdGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIFtbWzAuMjVdLCBbMC40Nl1dLCBbWzAuNDVdLCBbMC45NF1dXVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBlYXNlSW5PdXRRdWFkKCk6IEVhc2luZ0Z1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gW1tbMC40NTVdLCBbMC4wM11dLCBbWzAuNTE1XSwgWzAuOTU1XV1dXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGVhc2VJbkN1YmljKCk6IEVhc2luZ0Z1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gW1tbMC41NV0sIFswLjA1NV1dLCBbWzAuNjc1XSwgWzAuMTldXV1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZWFzZU91dEN1YmljKCk6IEVhc2luZ0Z1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gW1tbMC4yMTVdLCBbMC42MV1dLCBbWzAuMzU1XSwgWzFdXV1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZWFzZUluT3V0Q3ViaWMoKTogRWFzaW5nRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiBbW1swLjY0NV0sIFswLjA0NV1dLCBbWzAuMzU1XSwgWzFdXV1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZWFzZUluUXVhcnQoKTogRWFzaW5nRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiBbW1swLjg5NV0sIFswLjAzXV0sIFtbMC42ODVdLCBbMC4yMl1dXVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBlYXNlT3V0UXVhcnQoKTogRWFzaW5nRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiBbW1swLjE2NV0sIFswLjg0XV0sIFtbMC40NF0sIFsxXV1dXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGVhc2VJbk91dFF1YXJ0KCk6IEVhc2luZ0Z1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gW1tbMC43N10sIFswXV0sIFtbMC4xNzVdLCBbMV1dXVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBlYXNlSW5RdWludCgpOiBFYXNpbmdGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIFtbWzAuNzU1XSwgWzAuMDVdXSwgW1swLjg1NV0sIFswLjA2XV1dXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGVhc2VPdXRRdWludCgpOiBFYXNpbmdGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIFtbWzAuMjNdLCBbMV1dLCBbWzAuMzJdLCBbMV1dXVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBlYXNlSW5PdXRRdWludCgpOiBFYXNpbmdGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIFtbWzAuODZdLCBbMF1dLCBbWzAuMDddLCBbMV1dXVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBlYXNlSW5FeHBvKCk6IEVhc2luZ0Z1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gW1tbMC45NV0sIFswLjA1XV0sIFtbMC43OTVdLCBbMC4wMzVdXV1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZWFzZU91dEV4cG8oKTogRWFzaW5nRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiBbW1swLjE5XSwgWzFdXSwgW1swLjIyXSwgWzFdXV1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZWFzZUluT3V0RXhwbygpOiBFYXNpbmdGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIFtbWzFdLCBbMF1dLCBbWzBdLCBbMV1dXVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBlYXNlSW5DaXJjKCk6IEVhc2luZ0Z1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gW1tbMC42XSwgWzAuMDRdXSwgW1swLjk4XSwgWzAuMzM1XV1dXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGVhc2VPdXRDaXJjKCk6IEVhc2luZ0Z1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gW1tbMC4wNzVdLCBbMC44Ml1dLCBbWzAuMTY1XSwgWzFdXV1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZWFzZUluT3V0Q2lyYygpOiBFYXNpbmdGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIFtbWzAuNzg1XSwgWzAuMTM1XV0sIFtbMC4xNV0sIFswLjg2XV1dXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGVhc2VJbkJhY2soKTogRWFzaW5nRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiBbW1swLjZdLCBbLTAuMjhdXSwgW1swLjczNV0sIFswLjA0NV1dXVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBlYXNlT3V0QmFjaygpOiBFYXNpbmdGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIFtbWzAuMTc1XSwgWzAuODg1XV0sIFtbMC4zMl0sIFsxLjI3NV1dXVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBlYXNlSW5PdXRCYWNrKCk6IEVhc2luZ0Z1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gW1tbMC42OF0sIFstMC41NV1dLCBbWzAuMjY1XSwgWzEuNTVdXV1cclxuICAgIH1cclxufSJdfQ==

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9oZWxwZXIudHMiXSwibmFtZXMiOlsiY2FsY3VsYXRlQmFzZVRyYW5zZm9ybSIsImRvbSIsInJvb3QiLCJnZXRTY3JlZW5DVE0iLCJpbnZlcnNlIiwibXVsdGlwbHkiLCJnZXRCb3VuZGluZ0JveCIsInN2Z1Jvb3QiLCJwYXJlbnRFbGVtZW50IiwiU1ZHR3JhcGhpY3NFbGVtZW50IiwiYmFzZUJveCIsInJlZkJCb3giLCJnZXRCQm94IiwiY29vcmRpbmF0ZSIsImUiLCJ4IiwiZiIsInkiLCJ3aWR0aCIsImhlaWdodCIsImdldExlYWZOb2RlcyIsIm1hc3RlciIsIm5vZGVzIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImxlYWZOb2RlcyIsImZpbHRlciIsImVsZW0iLCJoYXNDaGlsZE5vZGVzIiwiaSIsImNoaWxkTm9kZXMiLCJsZW5ndGgiLCJub2RlVHlwZSIsImdldEJhc2VsaW5lSGVpZ2h0IiwiY2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY3R4IiwiZ2V0Q29udGV4dCIsImNvbXB1dGVkU3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiZm9udFNldHRpbmdzIiwiZm9udCIsInRleHRNZXRyaXgiLCJtZWFzdXJlVGV4dCIsImFjdHVhbEJvdW5kaW5nQm94RGVzY2VudCIsImVuY29kZUxpbmVDYXAiLCJ0eXBlIiwiZW5jb2RlTGluZUpvaW4iLCJlbmNvZGVUZXh0QW5jaG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQU8sU0FBU0Esc0JBQVQsQ0FBZ0NDLEdBQWhDLEVBQXlEQyxJQUF6RCxFQUFtRjtBQUN0RjtBQUVBLFNBQU9BLElBQUksQ0FBQ0MsWUFBTCxHQUFxQkMsT0FBckIsR0FBK0JDLFFBQS9CLENBQXdDSixHQUFHLENBQUNFLFlBQUosRUFBeEMsQ0FBUDtBQUNIOztBQUVNLFNBQVNHLGNBQVQsQ0FBd0JMLEdBQXhCLEVBQWlEO0FBQ3BELE1B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QUFDSSxhQUFPLENBQVA7QUFOUjtBQVFIIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUJhc2VUcmFuc2Zvcm0oZG9tOiBTVkdHcmFwaGljc0VsZW1lbnQsIHJvb3Q6IFNWR0dyYXBoaWNzRWxlbWVudCkge1xyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2RhZ3JlanMvZGFncmUtZDMvaXNzdWVzLzIwMlxyXG5cclxuICAgIHJldHVybiByb290LmdldFNjcmVlbkNUTSgpIS5pbnZlcnNlKCkubXVsdGlwbHkoZG9tLmdldFNjcmVlbkNUTSgpISlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJvdW5kaW5nQm94KGRvbTogU1ZHR3JhcGhpY3NFbGVtZW50KSB7XHJcbiAgICBsZXQgc3ZnUm9vdDogU1ZHR3JhcGhpY3NFbGVtZW50ID0gZG9tXHJcbiAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgIGlmIChzdmdSb290LnBhcmVudEVsZW1lbnQgaW5zdGFuY2VvZiBTVkdHcmFwaGljc0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgc3ZnUm9vdCA9IHN2Z1Jvb3QucGFyZW50RWxlbWVudFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgYmFzZUJveCA9IGNhbGN1bGF0ZUJhc2VUcmFuc2Zvcm0oZG9tLCBzdmdSb290KVxyXG4gICAgY29uc3QgcmVmQkJveCA9IGRvbS5nZXRCQm94KClcclxuICAgIGNvbnN0IGNvb3JkaW5hdGU6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdID0gW2Jhc2VCb3guZSArIHJlZkJCb3gueCwgYmFzZUJveC5mICsgcmVmQkJveC55LCByZWZCQm94LndpZHRoICsgMSwgcmVmQkJveC5oZWlnaHQgKyAxXVxyXG4gICAgcmV0dXJuIGNvb3JkaW5hdGVcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExlYWZOb2RlcyhtYXN0ZXI6IFNWR0dyYXBoaWNzRWxlbWVudCk6IFNWR0dyYXBoaWNzRWxlbWVudFtdIHtcclxuICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIyMjg5MzkxL2hvdy10by1jcmVhdGUtYW4tYXJyYXktb2YtbGVhZi1ub2Rlcy1vZi1hbi1odG1sLWRvbS11c2luZy1qYXZhc2NyaXB0XHJcblxyXG4gICAgdmFyIG5vZGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobWFzdGVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKSwgMCk7XHJcbiAgICB2YXIgbGVhZk5vZGVzID0gbm9kZXMuZmlsdGVyKGZ1bmN0aW9uIChlbGVtKSB7XHJcbiAgICAgICAgaWYgKGVsZW0uaGFzQ2hpbGROb2RlcygpKSB7XHJcbiAgICAgICAgICAgIC8vIHNlZSBpZiBhbnkgb2YgdGhlIGNoaWxkIG5vZGVzIGFyZSBlbGVtZW50c1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW0uY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW0uY2hpbGROb2Rlc1tpXS5ub2RlVHlwZSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlcmUgaXMgYSBjaGlsZCBlbGVtZW50LCBzbyByZXR1cm4gZmFsc2UgdG8gbm90IGluY2x1ZGVcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHBhcmVudCBlbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gbGVhZk5vZGVzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QmFzZWxpbmVIZWlnaHQoZG9tOiBTVkdUZXh0RWxlbWVudCkge1xyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcclxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpIVxyXG4gICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZG9tKVxyXG4gICAgY29uc3QgZm9udFNldHRpbmdzID0gY29tcHV0ZWRTdHlsZS5mb250XHJcblxyXG4gICAgY3R4LmZvbnQgPSBmb250U2V0dGluZ3NcclxuICAgIGNvbnN0IHRleHRNZXRyaXggPSBjdHgubWVhc3VyZVRleHQoJ3lwZmdq4paIJylcclxuICAgIHJldHVybiB0ZXh0TWV0cml4LmFjdHVhbEJvdW5kaW5nQm94RGVzY2VudCB8fCAwXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGVMaW5lQ2FwKHR5cGU/OiBzdHJpbmcgfCBudWxsKTogbnVtYmVyIHtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ3NxdWFyZSc6XHJcbiAgICAgICAgICAgIHJldHVybiAzXHJcbiAgICAgICAgY2FzZSAnYnV0dCc6XHJcbiAgICAgICAgICAgIHJldHVybiAxXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIDJcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZUxpbmVKb2luKHR5cGU/OiBzdHJpbmcgfCBudWxsKTogbnVtYmVyIHtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ21pdGVyJzpcclxuICAgICAgICAgICAgcmV0dXJuIDFcclxuICAgICAgICBjYXNlICdiZXZlbCc6XHJcbiAgICAgICAgICAgIHJldHVybiAzXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIDJcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZVRleHRBbmNob3IodHlwZT86IHN0cmluZyB8IG51bGwpOiBudW1iZXIge1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnbWlkZGxlJzpcclxuICAgICAgICAgICAgcmV0dXJuIDJcclxuICAgICAgICBjYXNlICdlbmQnOlxyXG4gICAgICAgICAgICByZXR1cm4gMVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiAwXHJcbiAgICB9XHJcbn0iXX0=

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9qc21vdmluLnRzIl0sIm5hbWVzIjpbIkpTTW92aW4iLCJmcHMiLCJ3aWR0aCIsImhlaWdodCIsInJvb3QiLCJmciIsInciLCJoIiwiZGRkIiwibGF5ZXJzIiwiYXNzZXRzIiwiZm9udHMiLCJsaXN0IiwiaXAiLCJvcCIsImRvbUxheWVyT3JBc3NldElkIiwibGF5ZXIiLCJTVkdHcmFwaGljc0VsZW1lbnQiLCJMYXllckZhY3RvcnkiLCJoaWVyYXJjaHkiLCJyZWYiLCJzcGxpY2UiLCJtYXNrT3JEb20iLCJsYXllclJlZk9ySW5kZXgiLCJtYXNrVHlwZSIsIk1hc2tUeXBlIiwiQWxwaGEiLCJsYXllclJlZiIsImxheWVySW5kZXgiLCJKU01vdmluTGF5ZXIiLCJpbmRleE9mIiwidHQiLCJFcnJvciIsIm1hc2tMYXllciIsImxheWVyUmVmcyIsImZvckVhY2giLCJpbm5lckluZGV4IiwibWFzayIsIm1hcCIsInNvcnQiLCJhIiwiYiIsImFJbmRleCIsImJJbmRleCIsImxheWVyV3JhcHBlciIsInJlZklkIiwicHVzaCIsImlkIiwibWF4VGltZSIsInJlZHVjZSIsInAiLCJ2IiwidW5pZm9ybSIsIkpTT04iLCJwYXJzZSIsInRvSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUNBOztBQTBNQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBek1xQkEsTzs7O0FBR2pCOzs7OztBQUtBLHFCQUF5RTtBQUFBLFFBQTdEQyxHQUE2RCx1RUFBL0MsRUFBK0M7QUFBQSxRQUEzQ0MsS0FBMkMsdUVBQTNCLEdBQTJCO0FBQUEsUUFBdEJDLE1BQXNCLHVFQUFMLEdBQUs7O0FBQUE7O0FBQUE7O0FBQ3JFLFNBQUtDLElBQUwsR0FBWTtBQUNSQyxNQUFBQSxFQUFFLEVBQUVKLEdBREk7QUFFUkssTUFBQUEsQ0FBQyxFQUFFSixLQUZLO0FBR1JLLE1BQUFBLENBQUMsRUFBRUosTUFISztBQUlSSyxNQUFBQSxHQUFHLEVBQUUsQ0FKRztBQUtSQyxNQUFBQSxNQUFNLEVBQUUsRUFMQTtBQU1SQyxNQUFBQSxNQUFNLEVBQUUsRUFOQTtBQU9SQyxNQUFBQSxLQUFLLEVBQUU7QUFDSEMsUUFBQUEsSUFBSSxFQUFFO0FBREgsT0FQQztBQVVSQyxNQUFBQSxFQUFFLEVBQUUsQ0FWSTtBQVdSQyxNQUFBQSxFQUFFLEVBQUU7QUFYSSxLQUFaO0FBYUg7QUFFRDs7Ozs7OztpQ0FHYWIsRyxFQUFhO0FBQ3RCLFdBQUtHLElBQUwsQ0FBVUMsRUFBVixHQUFlSixHQUFmO0FBQ0g7QUFFRDs7Ozs7OztnQ0FJWUMsSyxFQUFlQyxNLEVBQWdCO0FBQ3ZDLFdBQUtDLElBQUwsQ0FBVUUsQ0FBVixHQUFjSixLQUFkO0FBQ0EsV0FBS0UsSUFBTCxDQUFVRyxDQUFWLEdBQWNKLE1BQWQ7QUFDSDtBQUVEOzs7Ozs7OzZCQUlTWSxpQixFQUFrRjtBQUN2RixVQUFJQyxLQUFKOztBQUNBLFVBQUlELGlCQUFpQixZQUFZRSxrQkFBakMsRUFBcUQ7QUFDakRELFFBQUFBLEtBQUssR0FBR0Usb0JBQWFDLFNBQWIsQ0FBdUJKLGlCQUF2QixFQUEwQyxLQUFLWCxJQUFMLENBQVVNLE1BQXBELEVBQTZELEtBQUtOLElBQUwsQ0FBVU8sS0FBdkUsQ0FBUjtBQUNILE9BRkQsTUFFTyxJQUFJLE9BQVFJLGlCQUFSLEtBQStCLFFBQW5DLEVBQTZDO0FBQ2hEQyxRQUFBQSxLQUFLLEdBQUdFLG9CQUFhRSxHQUFiLENBQWlCTCxpQkFBakIsQ0FBUjtBQUNILE9BRk0sTUFHRjtBQUNEQyxRQUFBQSxLQUFLLEdBQUdELGlCQUFSO0FBQ0g7O0FBQ0QsV0FBS1gsSUFBTCxDQUFVSyxNQUFWLENBQWtCWSxNQUFsQixDQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQkwsS0FBSyxDQUFDWixJQUFyQztBQUNBLGFBQU9ZLEtBQVA7QUFDSDtBQUVEOzs7Ozs7Ozs0QkFLUU0sUyxFQUE4Q0MsZSxFQUE2RTtBQUFBLFVBQXJDQyxRQUFxQyx1RUFBaEJDLFFBQVEsQ0FBQ0MsS0FBTztBQUMvSCxVQUFJQyxRQUFKO0FBQ0EsVUFBSUMsVUFBSjs7QUFDQSxVQUFJTCxlQUFlLFlBQVlNLG1CQUEvQixFQUE2QztBQUN6Q0YsUUFBQUEsUUFBUSxHQUFHSixlQUFYO0FBQ0FLLFFBQUFBLFVBQVUsR0FBRyxLQUFLeEIsSUFBTCxDQUFVSyxNQUFWLENBQWtCcUIsT0FBbEIsQ0FBMEJILFFBQVEsQ0FBQ3ZCLElBQW5DLENBQWI7QUFDQXVCLFFBQUFBLFFBQVEsQ0FBQ3ZCLElBQVQsQ0FBYzJCLEVBQWQsR0FBbUJQLFFBQW5CO0FBQ0gsT0FKRCxNQUlPO0FBQ0hJLFFBQUFBLFVBQVUsR0FBR0wsZUFBYjtBQUNBLGFBQUtuQixJQUFMLENBQVVLLE1BQVYsQ0FBa0JtQixVQUFsQixFQUE4QkcsRUFBOUIsR0FBbUNQLFFBQW5DO0FBQ0g7O0FBQ0QsVUFBSUksVUFBVSxHQUFHLENBQWpCLEVBQW9CO0FBQ2hCLGNBQU0sSUFBSUksS0FBSixDQUFVLDhDQUFWLENBQU47QUFDSDs7QUFDRCxVQUFJQyxTQUFKOztBQUNBLFVBQUlYLFNBQVMsWUFBWUwsa0JBQXpCLEVBQTZDO0FBQ3pDZ0IsUUFBQUEsU0FBUyxHQUFHZixvQkFBYUMsU0FBYixDQUF1QkcsU0FBdkIsRUFBa0MsS0FBS2xCLElBQUwsQ0FBVU0sTUFBNUMsRUFBcUQsS0FBS04sSUFBTCxDQUFVTyxLQUEvRCxDQUFaO0FBQ0gsT0FGRCxNQUVPO0FBQ0hzQixRQUFBQSxTQUFTLEdBQUdYLFNBQVo7QUFDSDs7QUFDRCxXQUFLbEIsSUFBTCxDQUFVSyxNQUFWLENBQWtCWSxNQUFsQixDQUF5Qk8sVUFBekIsRUFBcUMsQ0FBckMsRUFBd0NLLFNBQVMsQ0FBQzdCLElBQWxEO0FBQ0EsYUFBTzZCLFNBQVA7QUFDSDtBQUVEOzs7Ozs7OEJBR1VDLFMsRUFBd0M7QUFBQTs7QUFDOUNBLE1BQUFBLFNBQVMsQ0FBQ0MsT0FBVixDQUFrQixVQUFDbkIsS0FBRCxFQUFRb0IsVUFBUixFQUF1QjtBQUNyQyxZQUFJcEIsS0FBSyxDQUFDWixJQUFOLENBQVcyQixFQUFYLElBQWlCLENBQXJCLEVBQXdCO0FBQ3BCLGNBQU1ILFVBQVUsR0FBRyxLQUFJLENBQUN4QixJQUFMLENBQVVLLE1BQVYsQ0FBa0JxQixPQUFsQixDQUEwQmQsS0FBSyxDQUFDWixJQUFoQyxDQUFuQjs7QUFDQSxjQUFJd0IsVUFBVSxHQUFHLENBQWpCLEVBQW9CO0FBQ2hCLGdCQUFNUyxJQUFJLEdBQUcsS0FBSSxDQUFDakMsSUFBTCxDQUFVSyxNQUFWLENBQWtCbUIsVUFBVSxHQUFHLENBQS9CLENBQWI7O0FBQ0EsZ0JBQUlRLFVBQVUsSUFBSSxDQUFkLElBQW1CRixTQUFTLENBQUNFLFVBQVUsR0FBRyxDQUFkLENBQVQsQ0FBMEJoQyxJQUExQixJQUFrQ2lDLElBQXpELEVBQStEO0FBQzNESCxjQUFBQSxTQUFTLENBQUNiLE1BQVYsQ0FBaUJlLFVBQWpCLEVBQTZCLENBQTdCLEVBQWdDLElBQUlQLG1CQUFKLENBQWlCUSxJQUFqQixDQUFoQztBQUNIO0FBQ0o7QUFDSjtBQUNKLE9BVkQ7QUFXQUgsTUFBQUEsU0FBUyxHQUFHQSxTQUFTLENBQUNJLEdBQVYsQ0FBYyxVQUFDdEIsS0FBRCxFQUFRb0IsVUFBUixFQUF1QjtBQUM3QyxlQUFPO0FBQ0hwQixVQUFBQSxLQUFLLEVBQUxBLEtBREc7QUFFSG9CLFVBQUFBLFVBQVUsRUFBVkE7QUFGRyxTQUFQO0FBSUgsT0FMVyxFQUtURyxJQUxTLENBS0osVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDZCxZQUFNQyxNQUFNLEdBQUcsS0FBSSxDQUFDdEMsSUFBTCxDQUFVSyxNQUFWLENBQWtCcUIsT0FBbEIsQ0FBMEJVLENBQUMsQ0FBQ3hCLEtBQUYsQ0FBUVosSUFBbEMsQ0FBZjs7QUFDQSxZQUFNdUMsTUFBTSxHQUFHLEtBQUksQ0FBQ3ZDLElBQUwsQ0FBVUssTUFBVixDQUFrQnFCLE9BQWxCLENBQTBCVyxDQUFDLENBQUN6QixLQUFGLENBQVFaLElBQWxDLENBQWY7O0FBQ0EsZUFBUXNDLE1BQU0sR0FBR0MsTUFBVixJQUFzQkgsQ0FBQyxDQUFDSixVQUFGLEdBQWVLLENBQUMsQ0FBQ0wsVUFBOUM7QUFDSCxPQVRXLEVBU1RFLEdBVFMsQ0FTTCxVQUFBTSxZQUFZO0FBQUEsZUFBSUEsWUFBWSxDQUFDNUIsS0FBakI7QUFBQSxPQVRQLENBQVo7QUFVQWtCLE1BQUFBLFNBQVMsQ0FBQ0MsT0FBVixDQUFrQixVQUFBbkIsS0FBSyxFQUFJO0FBQ3ZCLFlBQU1ZLFVBQVUsR0FBRyxLQUFJLENBQUN4QixJQUFMLENBQVVLLE1BQVYsQ0FBa0JxQixPQUFsQixDQUEwQmQsS0FBSyxDQUFDWixJQUFoQyxDQUFuQjs7QUFDQSxZQUFJd0IsVUFBVSxHQUFHLENBQWpCLEVBQW9CO0FBQ2hCLFVBQUEsS0FBSSxDQUFDeEIsSUFBTCxDQUFVSyxNQUFWLENBQWtCWSxNQUFsQixDQUF5Qk8sVUFBekIsRUFBcUMsQ0FBckM7QUFDSDs7QUFDRFosUUFBQUEsS0FBSyxDQUFDWixJQUFOLENBQVdVLEVBQVgsR0FBZ0IsR0FBaEI7QUFDSCxPQU5EO0FBT0EsVUFBTStCLEtBQUssR0FBRyxvQkFBZDtBQUNBLFdBQUt6QyxJQUFMLENBQVVNLE1BQVYsQ0FBa0JvQyxJQUFsQixDQUF1QjtBQUNuQkMsUUFBQUEsRUFBRSxFQUFFRixLQURlO0FBRW5CcEMsUUFBQUEsTUFBTSxFQUFFeUIsU0FBUyxDQUFDSSxHQUFWLENBQWMsVUFBQVgsUUFBUTtBQUFBLGlCQUFJQSxRQUFRLENBQUN2QixJQUFiO0FBQUEsU0FBdEI7QUFGVyxPQUF2QjtBQUlBLGFBQU95QyxLQUFQO0FBQ0g7QUFFRDs7Ozs7O2dDQUdZdEIsZSxFQUF3QztBQUNoRCxVQUFJSSxRQUFKO0FBQ0EsVUFBSUMsVUFBSjs7QUFDQSxVQUFJTCxlQUFlLFlBQVlNLG1CQUEvQixFQUE2QztBQUN6Q0YsUUFBQUEsUUFBUSxHQUFHSixlQUFYO0FBQ0FLLFFBQUFBLFVBQVUsR0FBRyxLQUFLeEIsSUFBTCxDQUFVSyxNQUFWLENBQWtCcUIsT0FBbEIsQ0FBMEJILFFBQVEsQ0FBQ3ZCLElBQW5DLENBQWI7QUFDSCxPQUhELE1BR087QUFDSHdCLFFBQUFBLFVBQVUsR0FBR0wsZUFBYjtBQUNIOztBQUNELFdBQUtuQixJQUFMLENBQVVLLE1BQVYsQ0FBa0JZLE1BQWxCLENBQXlCTyxVQUF6QixFQUFxQyxDQUFyQztBQUNIO0FBRUQ7Ozs7OzsrQkFHV0wsZSxFQUF3QztBQUMvQyxVQUFJSSxRQUFKO0FBQ0EsVUFBSUMsVUFBSjs7QUFDQSxVQUFJTCxlQUFlLFlBQVlNLG1CQUEvQixFQUE2QztBQUN6Q0YsUUFBQUEsUUFBUSxHQUFHSixlQUFYO0FBQ0FLLFFBQUFBLFVBQVUsR0FBRyxLQUFLeEIsSUFBTCxDQUFVSyxNQUFWLENBQWtCcUIsT0FBbEIsQ0FBMEJILFFBQVEsQ0FBQ3ZCLElBQW5DLENBQWI7QUFDSCxPQUhELE1BR087QUFDSHdCLFFBQUFBLFVBQVUsR0FBR0wsZUFBYjtBQUNBSSxRQUFBQSxRQUFRLEdBQUcsSUFBSUUsbUJBQUosQ0FBaUIsS0FBS3pCLElBQUwsQ0FBVUssTUFBVixDQUFrQm1CLFVBQWxCLENBQWpCLENBQVg7QUFDSDs7QUFDRCxVQUFJRCxRQUFRLENBQUN2QixJQUFULENBQWMyQixFQUFsQixFQUFzQjtBQUNsQkosUUFBQUEsUUFBUSxDQUFDdkIsSUFBVCxDQUFjMkIsRUFBZCxHQUFtQixDQUFuQjtBQUNBLGFBQUszQixJQUFMLENBQVVLLE1BQVYsQ0FBa0JZLE1BQWxCLENBQXlCTyxVQUFVLEdBQUcsQ0FBdEMsRUFBeUMsQ0FBekM7QUFDSCxPQUhELE1BR08sSUFBSSxLQUFLeEIsSUFBTCxDQUFVSyxNQUFWLENBQWtCbUIsVUFBVSxHQUFHLENBQS9CLEVBQWtDRyxFQUF0QyxFQUEwQztBQUM3QyxhQUFLM0IsSUFBTCxDQUFVSyxNQUFWLENBQWtCbUIsVUFBVSxHQUFHLENBQS9CLEVBQWtDRyxFQUFsQyxHQUF1QyxDQUF2QztBQUNBLGFBQUszQixJQUFMLENBQVVLLE1BQVYsQ0FBa0JZLE1BQWxCLENBQXlCTyxVQUF6QixFQUFxQyxDQUFyQztBQUNILE9BSE0sTUFHQTtBQUNILGNBQU0sSUFBSUksS0FBSixDQUFVLGtEQUFWLENBQU47QUFDSDtBQUNKO0FBRUQ7Ozs7OztrQ0FHYztBQUNWLFdBQUs1QixJQUFMLENBQVVLLE1BQVYsR0FBbUIsRUFBbkI7QUFDSDtBQUVEOzs7Ozs7OEJBR1U7QUFDTixVQUFJdUMsT0FBTyxHQUFHLEtBQUs1QyxJQUFMLENBQVVLLE1BQVYsQ0FBa0J3QyxNQUFsQixDQUF5QixVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxlQUFVRCxDQUFDLEdBQUdDLENBQUMsQ0FBQ3JDLEVBQU4sR0FBWXFDLENBQUMsQ0FBQ3JDLEVBQWQsR0FBb0JvQyxDQUE5QjtBQUFBLE9BQXpCLEVBQTBELENBQTFELENBQWQ7QUFDQSxXQUFLOUMsSUFBTCxDQUFVVSxFQUFWLEdBQWVrQyxPQUFmO0FBQ0EsV0FBSzVDLElBQUwsQ0FBVUssTUFBVixDQUFrQjBCLE9BQWxCLENBQTBCLFVBQUFuQixLQUFLO0FBQUEsZUFBSUEsS0FBSyxDQUFDRixFQUFOLEdBQVdrQyxPQUFmO0FBQUEsT0FBL0I7QUFDSDtBQUVEOzs7Ozs7K0JBR1c7QUFDUCxXQUFLSSxPQUFMO0FBQ0EsYUFBT0MsSUFBSSxDQUFDQyxLQUFMLENBQVcsS0FBS0MsTUFBTCxFQUFYLENBQVA7QUFDSDtBQUVEOzs7Ozs7NkJBR1M7QUFDTCxXQUFLSCxPQUFMO0FBQ0EsYUFBT0MsSUFBSSxDQUFDRyxTQUFMLENBQWUsS0FBS3BELElBQXBCLENBQVA7QUFDSDs7Ozs7OztJQU1PcUIsUTs7O1dBQUFBLFE7QUFBQUEsRUFBQUEsUSxDQUFBQSxRO0FBQUFBLEVBQUFBLFEsQ0FBQUEsUTtBQUFBQSxFQUFBQSxRLENBQUFBLFE7QUFBQUEsRUFBQUEsUSxDQUFBQSxRO0dBQUFBLFEsd0JBQUFBLFEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbmltYXRpb24sIFNoYXBlTGF5ZXIsIFJlZmVyZW5jZUlEIH0gZnJvbSBcIi4vYW5pbWF0aW9uXCI7XHJcbmltcG9ydCB7IEpTTW92aW5MYXllciwgTGF5ZXJGYWN0b3J5IH0gZnJvbSAnLi9sYXllcidcclxuaW1wb3J0IHV1aWQgZnJvbSAndXVpZC92NCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKU01vdmluIHtcclxuICAgIHByaXZhdGUgcm9vdDogQW5pbWF0aW9uO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIGZwcyBudW1iZXIgb2YgZnJhbWVzIHBlciBzZWNvbmRcclxuICAgICAqIEBwYXJhbSB3aWR0aCB3aWR0aCBvZiB2aWV3cG9ydCAocHgpXHJcbiAgICAgKiBAcGFyYW0gaGVpZ2h0IGhlaWdodCBvZiB2aWV3cG9ydCAocHgpXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGZwczogbnVtYmVyID0gMzAsIHdpZHRoOiBudW1iZXIgPSA4MDAsIGhlaWdodDogbnVtYmVyID0gNjAwKSB7XHJcbiAgICAgICAgdGhpcy5yb290ID0ge1xyXG4gICAgICAgICAgICBmcjogZnBzLFxyXG4gICAgICAgICAgICB3OiB3aWR0aCxcclxuICAgICAgICAgICAgaDogaGVpZ2h0LFxyXG4gICAgICAgICAgICBkZGQ6IDAsXHJcbiAgICAgICAgICAgIGxheWVyczogW10sXHJcbiAgICAgICAgICAgIGFzc2V0czogW10sXHJcbiAgICAgICAgICAgIGZvbnRzOiB7XHJcbiAgICAgICAgICAgICAgICBsaXN0OiBbXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpcDogMCxcclxuICAgICAgICAgICAgb3A6IDBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gZnBzIG51bWJlciBvZiBmcmFtZXMgcGVyIHNlY29uZFxyXG4gICAgICovXHJcbiAgICBzZXRGcmFtZVJhdGUoZnBzOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnJvb3QuZnIgPSBmcHNcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB3aWR0aCB3aWR0aCBvZiB2aWV3cG9ydCAocHgpXHJcbiAgICAgKiBAcGFyYW0gaGVpZ2h0IGhlaWdodCBvZiB2aWV3cG9ydCAocHgpXHJcbiAgICAgKi9cclxuICAgIHNldFZpZXdwb3J0KHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5yb290LncgPSB3aWR0aFxyXG4gICAgICAgIHRoaXMucm9vdC5oID0gaGVpZ2h0XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGQgYSBzaW1wbGUgZ3JhcGhpY2FsIGxheWVyXHJcbiAgICAgKiBAcGFyYW0gZG9tTGF5ZXJPckFzc2V0SWQgYSBTVkcgZWxlbWVudCBET00gb3IgSlNNb3ZpbkxheWVyIG9yIGFzc2V0IElEIG5lZWRzIHRvIGJlIGluc2VydGVkXHJcbiAgICAgKi9cclxuICAgIGFkZExheWVyKGRvbUxheWVyT3JBc3NldElkOiBTVkdHcmFwaGljc0VsZW1lbnQgfCBKU01vdmluTGF5ZXIgfCBSZWZlcmVuY2VJRCk6IEpTTW92aW5MYXllciB7XHJcbiAgICAgICAgbGV0IGxheWVyOiBKU01vdmluTGF5ZXI7XHJcbiAgICAgICAgaWYgKGRvbUxheWVyT3JBc3NldElkIGluc3RhbmNlb2YgU1ZHR3JhcGhpY3NFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGxheWVyID0gTGF5ZXJGYWN0b3J5LmhpZXJhcmNoeShkb21MYXllck9yQXNzZXRJZCwgdGhpcy5yb290LmFzc2V0cyEsIHRoaXMucm9vdC5mb250cyEpXHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgKGRvbUxheWVyT3JBc3NldElkKSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgbGF5ZXIgPSBMYXllckZhY3RvcnkucmVmKGRvbUxheWVyT3JBc3NldElkKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGF5ZXIgPSBkb21MYXllck9yQXNzZXRJZFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJvb3QubGF5ZXJzIS5zcGxpY2UoMCwgMCwgbGF5ZXIucm9vdClcclxuICAgICAgICByZXR1cm4gbGF5ZXJcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBtYXNrT3JEb20gYSBTVkcgZWxlbWVudCBET00gb3IgSlNNb3ZpbkxheWVyIHRvIGJlIHRoZSBtYXNrXHJcbiAgICAgKiBAcGFyYW0gbGF5ZXJSZWZPckluZGV4IGEgSlNNb3ZpbkxheWVyIG9yIGluZGV4IG9mIGxheWVyIHRvIGJlIHRoZSBtYXNrZWQgbGF5ZXJcclxuICAgICAqIEBwYXJhbSBtYXNrVHlwZSB3aGljaCB0eXBlIG9mIG1hc2sgdG8gdXNlLCB1c2UgYE1hc2tUeXBlLipgIHRvIHNwZWNpZnlcclxuICAgICAqL1xyXG4gICAgYWRkTWFzayhtYXNrT3JEb206IEpTTW92aW5MYXllciB8IFNWR0dyYXBoaWNzRWxlbWVudCwgbGF5ZXJSZWZPckluZGV4OiBudW1iZXIgfCBKU01vdmluTGF5ZXIsIG1hc2tUeXBlOiBNYXNrVHlwZSA9IE1hc2tUeXBlLkFscGhhKSB7XHJcbiAgICAgICAgbGV0IGxheWVyUmVmOiBKU01vdmluTGF5ZXJcclxuICAgICAgICBsZXQgbGF5ZXJJbmRleDogbnVtYmVyXHJcbiAgICAgICAgaWYgKGxheWVyUmVmT3JJbmRleCBpbnN0YW5jZW9mIEpTTW92aW5MYXllcikge1xyXG4gICAgICAgICAgICBsYXllclJlZiA9IGxheWVyUmVmT3JJbmRleFxyXG4gICAgICAgICAgICBsYXllckluZGV4ID0gdGhpcy5yb290LmxheWVycyEuaW5kZXhPZihsYXllclJlZi5yb290KVxyXG4gICAgICAgICAgICBsYXllclJlZi5yb290LnR0ID0gbWFza1R5cGVcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsYXllckluZGV4ID0gbGF5ZXJSZWZPckluZGV4XHJcbiAgICAgICAgICAgIHRoaXMucm9vdC5sYXllcnMhW2xheWVySW5kZXhdLnR0ID0gbWFza1R5cGVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxheWVySW5kZXggPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignR2l2ZW4gbGF5ZXIgaXMgbm90IGEgbWVtYmVyIG9mIHRoaXMgSlNNb3Zpbi4nKVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbWFza0xheWVyOiBKU01vdmluTGF5ZXJcclxuICAgICAgICBpZiAobWFza09yRG9tIGluc3RhbmNlb2YgU1ZHR3JhcGhpY3NFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIG1hc2tMYXllciA9IExheWVyRmFjdG9yeS5oaWVyYXJjaHkobWFza09yRG9tLCB0aGlzLnJvb3QuYXNzZXRzISwgdGhpcy5yb290LmZvbnRzISlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtYXNrTGF5ZXIgPSBtYXNrT3JEb21cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yb290LmxheWVycyEuc3BsaWNlKGxheWVySW5kZXgsIDAsIG1hc2tMYXllci5yb290KVxyXG4gICAgICAgIHJldHVybiBtYXNrTGF5ZXJcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBsYXllclJlZnMgYSBzZXQgb2YgbGF5ZXJzIHRvIGJlIHBhY2tlZCBhcyBhbiBhc3NldFxyXG4gICAgICovXHJcbiAgICBtYWtlQXNzZXQobGF5ZXJSZWZzOiBKU01vdmluTGF5ZXJbXSk6IFJlZmVyZW5jZUlEIHtcclxuICAgICAgICBsYXllclJlZnMuZm9yRWFjaCgobGF5ZXIsIGlubmVySW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGxheWVyLnJvb3QudHQgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGF5ZXJJbmRleCA9IHRoaXMucm9vdC5sYXllcnMhLmluZGV4T2YobGF5ZXIucm9vdClcclxuICAgICAgICAgICAgICAgIGlmIChsYXllckluZGV4ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hc2sgPSB0aGlzLnJvb3QubGF5ZXJzIVtsYXllckluZGV4IC0gMV1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5uZXJJbmRleCA9PSAwIHx8IGxheWVyUmVmc1tpbm5lckluZGV4IC0gMV0ucm9vdCAhPSBtYXNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyUmVmcy5zcGxpY2UoaW5uZXJJbmRleCwgMCwgbmV3IEpTTW92aW5MYXllcihtYXNrIGFzIFNoYXBlTGF5ZXIpKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbGF5ZXJSZWZzID0gbGF5ZXJSZWZzLm1hcCgobGF5ZXIsIGlubmVySW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGxheWVyLFxyXG4gICAgICAgICAgICAgICAgaW5uZXJJbmRleFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBhSW5kZXggPSB0aGlzLnJvb3QubGF5ZXJzIS5pbmRleE9mKGEubGF5ZXIucm9vdClcclxuICAgICAgICAgICAgY29uc3QgYkluZGV4ID0gdGhpcy5yb290LmxheWVycyEuaW5kZXhPZihiLmxheWVyLnJvb3QpXHJcbiAgICAgICAgICAgIHJldHVybiAoYUluZGV4IC0gYkluZGV4KSB8fCAoYS5pbm5lckluZGV4IC0gYi5pbm5lckluZGV4KVxyXG4gICAgICAgIH0pLm1hcChsYXllcldyYXBwZXIgPT4gbGF5ZXJXcmFwcGVyLmxheWVyKVxyXG4gICAgICAgIGxheWVyUmVmcy5mb3JFYWNoKGxheWVyID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbGF5ZXJJbmRleCA9IHRoaXMucm9vdC5sYXllcnMhLmluZGV4T2YobGF5ZXIucm9vdClcclxuICAgICAgICAgICAgaWYgKGxheWVySW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvb3QubGF5ZXJzIS5zcGxpY2UobGF5ZXJJbmRleCwgMSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsYXllci5yb290Lm9wID0gOWU5XHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCByZWZJZCA9IHV1aWQoKVxyXG4gICAgICAgIHRoaXMucm9vdC5hc3NldHMhLnB1c2goe1xyXG4gICAgICAgICAgICBpZDogcmVmSWQsXHJcbiAgICAgICAgICAgIGxheWVyczogbGF5ZXJSZWZzLm1hcChsYXllclJlZiA9PiBsYXllclJlZi5yb290KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHJlZklkXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gbGF5ZXJSZWZPckluZGV4IGEgSlNNb3ZpbkxheWVyIG9yIGluZGV4IG9mIGxheWVyIHRvIHJlbW92ZVxyXG4gICAgICovXHJcbiAgICByZW1vdmVMYXllcihsYXllclJlZk9ySW5kZXg6IG51bWJlciB8IEpTTW92aW5MYXllcikge1xyXG4gICAgICAgIGxldCBsYXllclJlZjogSlNNb3ZpbkxheWVyXHJcbiAgICAgICAgbGV0IGxheWVySW5kZXg6IG51bWJlclxyXG4gICAgICAgIGlmIChsYXllclJlZk9ySW5kZXggaW5zdGFuY2VvZiBKU01vdmluTGF5ZXIpIHtcclxuICAgICAgICAgICAgbGF5ZXJSZWYgPSBsYXllclJlZk9ySW5kZXhcclxuICAgICAgICAgICAgbGF5ZXJJbmRleCA9IHRoaXMucm9vdC5sYXllcnMhLmluZGV4T2YobGF5ZXJSZWYucm9vdClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsYXllckluZGV4ID0gbGF5ZXJSZWZPckluZGV4XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucm9vdC5sYXllcnMhLnNwbGljZShsYXllckluZGV4LCAxKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIGxheWVyUmVmT3JJbmRleCBhIEpTTW92aW5MYXllciBvciBpbmRleCBvZiBtYXNrIG9yIG1hc2tlZCBsYXllciB0byByZW1vdmVcclxuICAgICAqL1xyXG4gICAgcmVtb3ZlTWFzayhsYXllclJlZk9ySW5kZXg6IG51bWJlciB8IEpTTW92aW5MYXllcikge1xyXG4gICAgICAgIGxldCBsYXllclJlZjogSlNNb3ZpbkxheWVyXHJcbiAgICAgICAgbGV0IGxheWVySW5kZXg6IG51bWJlclxyXG4gICAgICAgIGlmIChsYXllclJlZk9ySW5kZXggaW5zdGFuY2VvZiBKU01vdmluTGF5ZXIpIHtcclxuICAgICAgICAgICAgbGF5ZXJSZWYgPSBsYXllclJlZk9ySW5kZXhcclxuICAgICAgICAgICAgbGF5ZXJJbmRleCA9IHRoaXMucm9vdC5sYXllcnMhLmluZGV4T2YobGF5ZXJSZWYucm9vdClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsYXllckluZGV4ID0gbGF5ZXJSZWZPckluZGV4XHJcbiAgICAgICAgICAgIGxheWVyUmVmID0gbmV3IEpTTW92aW5MYXllcih0aGlzLnJvb3QubGF5ZXJzIVtsYXllckluZGV4XSBhcyBTaGFwZUxheWVyKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGF5ZXJSZWYucm9vdC50dCkge1xyXG4gICAgICAgICAgICBsYXllclJlZi5yb290LnR0ID0gMFxyXG4gICAgICAgICAgICB0aGlzLnJvb3QubGF5ZXJzIS5zcGxpY2UobGF5ZXJJbmRleCAtIDEsIDEpXHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJvb3QubGF5ZXJzIVtsYXllckluZGV4ICsgMV0udHQpIHtcclxuICAgICAgICAgICAgdGhpcy5yb290LmxheWVycyFbbGF5ZXJJbmRleCArIDFdLnR0ID0gMFxyXG4gICAgICAgICAgICB0aGlzLnJvb3QubGF5ZXJzIS5zcGxpY2UobGF5ZXJJbmRleCwgMSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBpbnB1dCBsYXllciBpcyBub3QgYSBtYXNrIG9yIGEgbWFza2VkIGxheWVyLicpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY2xlYXIgYWxsIGxheWVyc1xyXG4gICAgICovXHJcbiAgICBjbGVhckxheWVycygpIHtcclxuICAgICAgICB0aGlzLnJvb3QubGF5ZXJzID0gW11cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIG1ha2UgYWxsIGxheWVycyBlbmQgYXQgc2FtZSB0aW1lXHJcbiAgICAgKi9cclxuICAgIHVuaWZvcm0oKSB7XHJcbiAgICAgICAgbGV0IG1heFRpbWUgPSB0aGlzLnJvb3QubGF5ZXJzIS5yZWR1Y2UoKHAsIHYpID0+IHAgPCB2Lm9wISA/IHYub3AhIDogcCwgMClcclxuICAgICAgICB0aGlzLnJvb3Qub3AgPSBtYXhUaW1lXHJcbiAgICAgICAgdGhpcy5yb290LmxheWVycyEuZm9yRWFjaChsYXllciA9PiBsYXllci5vcCA9IG1heFRpbWUpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBleHBvcnQgTG90dGllIGFzIEphdmFTY3JpcHQgT2JqZWN0IFxyXG4gICAgICovXHJcbiAgICB0b09iamVjdCgpIHtcclxuICAgICAgICB0aGlzLnVuaWZvcm0oKVxyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHRoaXMudG9KU09OKCkpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBleHBvcnQgTG90dGllIGFzIEpTT04gdGV4dFxyXG4gICAgICovXHJcbiAgICB0b0pTT04oKSB7XHJcbiAgICAgICAgdGhpcy51bmlmb3JtKClcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5yb290KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBMYXllckZhY3RvcnkgfSBmcm9tICcuL2xheWVyJ1xyXG5leHBvcnQgeyBFYXNpbmdGYWN0b3J5IH0gZnJvbSAnLi9lYXNpbmcnXHJcbmV4cG9ydCB7IFBhdGhNYWtlciB9IGZyb20gJy4vcGF0aCdcclxuZXhwb3J0IGVudW0gTWFza1R5cGUge1xyXG4gICAgQWxwaGEgPSAxLFxyXG4gICAgSW52ZXJ0QWxwaGEgPSAyLFxyXG4gICAgTHVtYSA9IDMsXHJcbiAgICBJbnZlcnRMdW1hID0gNFxyXG59Il19

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sYXllci50cyJdLCJuYW1lcyI6WyJKU01vdmluTGF5ZXIiLCJrZXkiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJhbmNob3IiLCJwb3NpdGlvbiIsInMiLCJrIiwiZSIsIm8iLCJ0cmFuc2Zvcm0iLCJhIiwiZ2V0RGVmYXVsdFByb3BlcnR5Iiwic3RhdGljVmFsdWUiLCJpZHgiLCJ0aW1lIiwidmFsdWUiLCJlYXNpbmciLCJ3cmFwIiwiZXhpc3RLZXlmcmFtZSIsImZpbHRlciIsIngiLCJ0IiwicmVhZHlUb1NldCIsImxlbmd0aCIsInByZXZpb3VzS2V5ZnJhbWVDb3VudCIsInJlZHVjZSIsInAiLCJzcGxpY2UiLCJ5IiwiaSIsIkFycmF5Iiwicm9vdCIsInNoYXBlcyIsIml0IiwiZmluZCIsInNoYXBlIiwidHkiLCJmaW5kUHJvcGVydHlDb25maWciLCJoYXNUcmFuc2Zvcm0iLCJjb25maWciLCJncm91cFNoYXBlcyIsInB1c2giLCJiYXNlIiwiaW5kZXgiLCJrcyIsImZpbmRPckluc2VydFByb3BlcnR5Q29uZmlnIiwib3AiLCJNYXRoIiwibWF4IiwiT2JqZWN0IiwidmFsdWVzIiwidGltZVJhbmdlIiwicmVmIiwidXBkYXRlVGltZVJhbmdlIiwiY29tbW9uUHJvcGVydHlNYXBwaW5nIiwidW5kZWZpbmVkIiwiZG9jIiwiZCIsImNvbnNvbGUiLCJlcnJvciIsIkVycm9yIiwiY29udmVydFRvU3RhdGljUHJvcGVydHkiLCJzdGFydEZyYW1lIiwiZW5kRnJhbWUiLCJzdGFydFZhbHVlIiwiZW5kVmFsdWUiLCJFYXNpbmdGYWN0b3J5IiwibGluZWFyIiwidGV4dFByb3AiLCJ0bXBTdGFydFZhbHVlIiwidG1wRW5kVmFsdWUiLCJjb252ZXJ0VG9BbmltYXRhYmxlUHJvcGVydHkiLCJhZGRLZXlmcmFtZSIsIkxheWVyRmFjdG9yeSIsImNvb3JkaW5hdGUiLCJyIiwiZG9tIiwiYm91bmRpbmdCb3giLCJtYXAiLCJ2IiwicmVjdCIsImxheWVyIiwiZGRkIiwic3IiLCJhbyIsImdlbmVyYXRlVHJhbnNmb3JtIiwiaXAiLCJzdCIsImJtIiwibGVmdCIsInRvcCIsIndpZHRoIiwiaGVpZ2h0IiwiY3giLCJjeSIsInJ4IiwicnkiLCJpZCIsInciLCJoIiwicmVmSWQiLCJhc3NldExpc3QiLCJmb250TGlzdCIsImRvbVR5cGUiLCJTVkdUZXh0RWxlbWVudCIsIlNWR0ltYWdlRWxlbWVudCIsIlNWR0dFbGVtZW50IiwiZG9tTGVhdmVzIiwicHJlY29tcExheWVyIiwicHJlQ29tcEFzc2V0IiwicHJlQ29tcFJlZklkIiwiZm9yRWFjaCIsIlNWR0dyYXBoaWNzRWxlbWVudCIsInVuc2hpZnQiLCJoaWVyYXJjaHkiLCJsYXllcnMiLCJzaGFwZUxheWVyIiwiaW1hZ2VMYXllciIsImltYWdlUmVmSWQiLCJpbWFnZUFzc2V0IiwidGV4dExheWVyIiwiYmFzZUxpbmVIZWlnaHQiLCJ0ZXh0QW5jaG9yIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInRleHRBbmNob3JXZWlnaHQiLCJwYXJzZUZsb2F0IiwiZmlsbE9wYWNpdHkiLCJ0ZXh0RGF0YSIsImZvbnQiLCJsaXN0IiwiZiIsImZOYW1lIiwibW92aW5MYXllciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUlhQSxZOzs7Ozt1Q0FLa0JDLEcsRUFBYTtBQUNwQyxjQUFRQSxHQUFSO0FBQ0ksYUFBSyxHQUFMO0FBQ0EsYUFBSyxHQUFMO0FBQ0ksaUJBQU9DLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLFNBQUwsQ0FBZUgsR0FBRyxJQUFJLEdBQVAsR0FBYSxLQUFLSSxNQUFsQixHQUEyQixLQUFLQyxRQUEvQyxDQUFYLENBQVA7O0FBQ0osYUFBSyxHQUFMO0FBQ0ksaUJBQU8sQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0FBUDs7QUFDSixhQUFLLEdBQUw7QUFDSSxpQkFBTyxHQUFQOztBQUNKLGFBQUssR0FBTDtBQUNJLGlCQUFPLENBQVA7O0FBQ0osYUFBSyxJQUFMO0FBQ0ksaUJBQU87QUFDSEMsWUFBQUEsQ0FBQyxFQUFFO0FBQ0NDLGNBQUFBLENBQUMsRUFBRTtBQURKLGFBREE7QUFJSEMsWUFBQUEsQ0FBQyxFQUFFO0FBQ0NELGNBQUFBLENBQUMsRUFBRTtBQURKLGFBSkE7QUFPSEUsWUFBQUEsQ0FBQyxFQUFFO0FBQ0NGLGNBQUFBLENBQUMsRUFBRTtBQURKO0FBUEEsV0FBUDs7QUFXSjtBQUNJLGlCQUFPLENBQVA7QUF2QlI7QUF5Qkg7Ozs0Q0FDK0JHLFMsRUFBZ0JWLEcsRUFBYTtBQUN6RCxVQUFJLENBQUNVLFNBQVMsQ0FBQ1YsR0FBRCxDQUFkLEVBQXFCO0FBQ2pCVSxRQUFBQSxTQUFTLENBQUNWLEdBQUQsQ0FBVCxHQUFpQjtBQUNiVyxVQUFBQSxDQUFDLEVBQUUsQ0FEVTtBQUViSixVQUFBQSxDQUFDLEVBQUUsS0FBS0ssa0JBQUwsQ0FBd0JaLEdBQXhCO0FBRlUsU0FBakI7QUFJSDs7QUFDRCxVQUFJVSxTQUFTLENBQUNWLEdBQUQsQ0FBVCxDQUFlVyxDQUFmLElBQW9CLENBQXhCLEVBQTJCO0FBQ3ZCLFlBQU1FLFdBQVcsR0FBR0gsU0FBUyxDQUFDVixHQUFELENBQVQsQ0FBZU8sQ0FBZixDQUFpQixDQUFqQixFQUFvQkQsQ0FBeEM7QUFDQUksUUFBQUEsU0FBUyxDQUFDVixHQUFELENBQVQsR0FBaUI7QUFDYlcsVUFBQUEsQ0FBQyxFQUFFLENBRFU7QUFFYkosVUFBQUEsQ0FBQyxFQUFFTTtBQUZVLFNBQWpCO0FBSUg7QUFDSjs7O2dEQUNtQ0gsUyxFQUFnQlYsRyxFQUFhO0FBQzdELFVBQUksQ0FBQ1UsU0FBUyxDQUFDVixHQUFELENBQVYsSUFBbUIsQ0FBQ1UsU0FBUyxDQUFDVixHQUFELENBQVQsQ0FBZVcsQ0FBdkMsRUFBMEM7QUFDdEMsWUFBSVgsR0FBRyxJQUFJLEdBQVgsRUFBZ0I7QUFDWixlQUFLSSxNQUFMLEdBQWNNLFNBQVMsQ0FBQ1YsR0FBRCxDQUFULEdBQWlCVSxTQUFTLENBQUNWLEdBQUQsQ0FBVCxDQUFlTyxDQUFoQyxHQUFvQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFsRDtBQUNIOztBQUNELFlBQUlQLEdBQUcsSUFBSSxHQUFYLEVBQWdCO0FBQ1osZUFBS0ssUUFBTCxHQUFnQkssU0FBUyxDQUFDVixHQUFELENBQVQsR0FBaUJVLFNBQVMsQ0FBQ1YsR0FBRCxDQUFULENBQWVPLENBQWhDLEdBQW9DLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQXBEO0FBQ0g7O0FBQ0RHLFFBQUFBLFNBQVMsQ0FBQ1YsR0FBRCxDQUFULEdBQWlCO0FBQ2JXLFVBQUFBLENBQUMsRUFBRSxDQURVO0FBRWJKLFVBQUFBLENBQUMsRUFBRTtBQUZVLFNBQWpCO0FBSUg7QUFDSjs7O2dDQUNtQkcsUyxFQUFnQlYsRyxFQUErRztBQUFBLFVBQWxHYyxHQUFrRyx1RUFBcEYsQ0FBQyxDQUFtRjtBQUFBLFVBQWhGQyxJQUFnRjtBQUFBLFVBQWxFQyxLQUFrRTtBQUFBLFVBQS9DQyxNQUErQztBQUFBLFVBQXRCQyxJQUFzQix1RUFBTixJQUFNO0FBQy9JLFVBQU1DLGFBQWEsR0FBR1QsU0FBUyxDQUFDVixHQUFELENBQVQsQ0FBZU8sQ0FBZixDQUFpQmEsTUFBakIsQ0FBd0IsVUFBQ0MsQ0FBRDtBQUFBLGVBQVlBLENBQUMsQ0FBQ0MsQ0FBRixJQUFPUCxJQUFuQjtBQUFBLE9BQXhCLENBQXRCO0FBQ0EsVUFBSVEsVUFBSjs7QUFDQSxVQUFJSixhQUFhLENBQUNLLE1BQWxCLEVBQTBCO0FBQ3RCRCxRQUFBQSxVQUFVLEdBQUdKLGFBQWEsQ0FBQyxDQUFELENBQTFCO0FBQ0gsT0FGRCxNQUVPO0FBQ0hJLFFBQUFBLFVBQVUsR0FBRztBQUNURCxVQUFBQSxDQUFDLEVBQUVQLElBRE07QUFFVFQsVUFBQUEsQ0FBQyxFQUFFLEtBQUtNLGtCQUFMLENBQXdCWixHQUF4QjtBQUZNLFNBQWI7QUFJQSxZQUFNeUIscUJBQXFCLEdBQUdmLFNBQVMsQ0FBQ1YsR0FBRCxDQUFULENBQWVPLENBQWYsQ0FBaUJtQixNQUFqQixDQUF3QixVQUFDQyxDQUFELEVBQVlOLENBQVo7QUFBQSxpQkFBdUJBLENBQUMsQ0FBQ0MsQ0FBRixHQUFNUCxJQUFOLEdBQWFZLENBQUMsR0FBRyxDQUFqQixHQUFxQkEsQ0FBNUM7QUFBQSxTQUF4QixFQUF1RSxDQUF2RSxDQUE5QjtBQUNBakIsUUFBQUEsU0FBUyxDQUFDVixHQUFELENBQVQsQ0FBZU8sQ0FBZixDQUFpQnFCLE1BQWpCLENBQXdCSCxxQkFBeEIsRUFBK0MsQ0FBL0MsRUFBa0RGLFVBQWxEO0FBQ0g7O0FBQ0QsVUFBSU4sTUFBSixFQUFZO0FBQ1JNLFFBQUFBLFVBQVUsQ0FBQ2QsQ0FBWCxHQUFlO0FBQ1hZLFVBQUFBLENBQUMsRUFBRUosTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVLENBQVYsQ0FEUTtBQUVYWSxVQUFBQSxDQUFDLEVBQUVaLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVSxDQUFWO0FBRlEsU0FBZjtBQUlBTSxRQUFBQSxVQUFVLENBQUNPLENBQVgsR0FBZTtBQUNYVCxVQUFBQSxDQUFDLEVBQUVKLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVSxDQUFWLENBRFE7QUFFWFksVUFBQUEsQ0FBQyxFQUFFWixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUsQ0FBVjtBQUZRLFNBQWY7QUFJSDs7QUFDRCxVQUFJSCxHQUFHLElBQUksQ0FBWCxFQUFjO0FBQ1ZTLFFBQUFBLFVBQVUsQ0FBQ2pCLENBQVgsQ0FBYVEsR0FBYixJQUFvQkUsS0FBcEI7QUFDSCxPQUZELE1BRU87QUFDSE8sUUFBQUEsVUFBVSxDQUFDakIsQ0FBWCxHQUFlWSxJQUFJLElBQUksRUFBRUYsS0FBSyxZQUFZZSxLQUFuQixDQUFSLEdBQW9DLENBQUNmLEtBQUQsQ0FBcEMsR0FBOENBLEtBQTdEO0FBQ0g7QUFDSjs7O3VDQUMwQmhCLEcsRUFBYTtBQUNwQyxhQUFTLEtBQUtnQyxJQUFOLENBQTBCQyxNQUExQixDQUFrQyxDQUFsQyxDQUFELENBQXFEQyxFQUFyRCxDQUF5REMsSUFBekQsQ0FBOEQsVUFBQUMsS0FBSztBQUFBLGVBQ3RFQSxLQUFLLENBQUNDLEVBQU4sSUFBWXJDLEdBRDBEO0FBQUEsT0FBbkUsQ0FBUDtBQUdIOzs7K0NBQ2tDQSxHLEVBQWE7QUFDNUMsVUFBTW1DLElBQUksR0FBRyxLQUFLRyxrQkFBTCxDQUF3QnRDLEdBQXhCLENBQWI7QUFDQSxVQUFJbUMsSUFBSixFQUFVLE9BQU9BLElBQVA7QUFDVixVQUFNSSxZQUFZLEdBQUcsS0FBS0Qsa0JBQUwsQ0FBd0IsSUFBeEIsQ0FBckI7O0FBQ0EsVUFBTUUsTUFBTTtBQUNSSCxRQUFBQSxFQUFFLEVBQUVyQztBQURJLFNBRUwsS0FBS1ksa0JBQUwsQ0FBd0JaLEdBQXhCLENBRkssQ0FBWjs7QUFJQSxVQUFJdUMsWUFBSixFQUFrQjtBQUNkLFlBQU1FLFdBQVcsR0FBSyxLQUFLVCxJQUFOLENBQTBCQyxNQUExQixDQUFrQyxDQUFsQyxDQUFELENBQXFEQyxFQUF6RTtBQUNBTyxRQUFBQSxXQUFXLENBQUNiLE1BQVosQ0FBbUJhLFdBQVcsQ0FBQ2pCLE1BQVosR0FBcUIsQ0FBeEMsRUFBMkMsQ0FBM0MsRUFBOENnQixNQUE5QztBQUNILE9BSEQsTUFHTztBQUNELGFBQUtSLElBQU4sQ0FBMEJDLE1BQTFCLENBQWtDLENBQWxDLENBQUQsQ0FBcURDLEVBQXJELENBQXlEUSxJQUF6RCxDQUE4REYsTUFBOUQ7QUFDSDs7QUFDRCxhQUFPQSxNQUFQO0FBQ0g7OzswQ0FDNkJ4QyxHLEVBQWlFO0FBQzNGLFVBQUkyQyxJQUFKLEVBQWVwQyxDQUFmLEVBQXNDcUMsS0FBdEM7O0FBQ0EsY0FBUTVDLEdBQVI7QUFDSSxhQUFLLFFBQUw7QUFDSTJDLFVBQUFBLElBQUksR0FBRyxLQUFLWCxJQUFMLENBQVVhLEVBQWpCO0FBQ0F0QyxVQUFBQSxDQUFDLEdBQUcsR0FBSjtBQUNBcUMsVUFBQUEsS0FBSyxHQUFHLENBQVI7QUFDQTs7QUFDSixhQUFLLFFBQUw7QUFDSUQsVUFBQUEsSUFBSSxHQUFHLEtBQUtYLElBQUwsQ0FBVWEsRUFBakI7QUFDQXRDLFVBQUFBLENBQUMsR0FBRyxHQUFKO0FBQ0FxQyxVQUFBQSxLQUFLLEdBQUcsQ0FBUjtBQUNBOztBQUNKLGFBQUssU0FBTDtBQUNJRCxVQUFBQSxJQUFJLEdBQUcsS0FBS1gsSUFBTCxDQUFVYSxFQUFqQjtBQUNBdEMsVUFBQUEsQ0FBQyxHQUFHLEdBQUo7QUFDQXFDLFVBQUFBLEtBQUssR0FBRyxDQUFSO0FBQ0E7O0FBQ0osYUFBSyxTQUFMO0FBQ0lELFVBQUFBLElBQUksR0FBRyxLQUFLWCxJQUFMLENBQVVhLEVBQWpCO0FBQ0F0QyxVQUFBQSxDQUFDLEdBQUcsR0FBSjtBQUNBcUMsVUFBQUEsS0FBSyxHQUFHLENBQVI7QUFDQTs7QUFDSixhQUFLLEdBQUw7QUFDSUQsVUFBQUEsSUFBSSxHQUFHLEtBQUtYLElBQUwsQ0FBVWEsRUFBakI7QUFDQXRDLFVBQUFBLENBQUMsR0FBRyxHQUFKO0FBQ0FxQyxVQUFBQSxLQUFLLEdBQUcsQ0FBUjtBQUNBOztBQUNKLGFBQUssR0FBTDtBQUNJRCxVQUFBQSxJQUFJLEdBQUcsS0FBS1gsSUFBTCxDQUFVYSxFQUFqQjtBQUNBdEMsVUFBQUEsQ0FBQyxHQUFHLEdBQUo7QUFDQXFDLFVBQUFBLEtBQUssR0FBRyxDQUFSO0FBQ0E7O0FBQ0osYUFBSyxRQUFMO0FBQ0lELFVBQUFBLElBQUksR0FBRyxLQUFLWCxJQUFMLENBQVVhLEVBQWpCO0FBQ0F0QyxVQUFBQSxDQUFDLEdBQUcsR0FBSjtBQUNBcUMsVUFBQUEsS0FBSyxHQUFHLENBQUMsQ0FBVDtBQUNBOztBQUNKLGFBQUssU0FBTDtBQUNJRCxVQUFBQSxJQUFJLEdBQUcsS0FBS1gsSUFBTCxDQUFVYSxFQUFqQjtBQUNBdEMsVUFBQUEsQ0FBQyxHQUFHLEdBQUo7QUFDQXFDLFVBQUFBLEtBQUssR0FBRyxDQUFDLENBQVQ7QUFDQTs7QUFDSixhQUFLLFdBQUw7QUFDSUQsVUFBQUEsSUFBSSxHQUFHLEtBQUtHLDBCQUFMLENBQWdDLElBQWhDLENBQVA7QUFDQXZDLFVBQUFBLENBQUMsR0FBRyxHQUFKO0FBQ0FxQyxVQUFBQSxLQUFLLEdBQUcsQ0FBQyxDQUFUO0FBQ0E7O0FBQ0osYUFBSyxTQUFMO0FBQ0lELFVBQUFBLElBQUksR0FBRyxLQUFLRywwQkFBTCxDQUFnQyxJQUFoQyxDQUFQO0FBQ0F2QyxVQUFBQSxDQUFDLEdBQUcsR0FBSjtBQUNBcUMsVUFBQUEsS0FBSyxHQUFHLENBQUMsQ0FBVDtBQUNBOztBQUNKLGFBQUssWUFBTDtBQUNJRCxVQUFBQSxJQUFJLEdBQUcsS0FBS0csMEJBQUwsQ0FBZ0MsSUFBaEMsQ0FBUDtBQUNBdkMsVUFBQUEsQ0FBQyxHQUFHLEdBQUo7QUFDQXFDLFVBQUFBLEtBQUssR0FBRyxDQUFDLENBQVQ7QUFDQTs7QUFDSixhQUFLLFdBQUw7QUFDSUQsVUFBQUEsSUFBSSxHQUFHLEtBQUtMLGtCQUFMLENBQXdCLElBQXhCLENBQVA7QUFDQS9CLFVBQUFBLENBQUMsR0FBRyxHQUFKO0FBQ0FxQyxVQUFBQSxLQUFLLEdBQUcsQ0FBQyxDQUFUO0FBQ0E7O0FBQ0osYUFBSyxhQUFMO0FBQ0lELFVBQUFBLElBQUksR0FBRyxLQUFLTCxrQkFBTCxDQUF3QixJQUF4QixDQUFQO0FBQ0EvQixVQUFBQSxDQUFDLEdBQUcsR0FBSjtBQUNBcUMsVUFBQUEsS0FBSyxHQUFHLENBQUMsQ0FBVDtBQUNBOztBQUNKLGFBQUssYUFBTDtBQUNJRCxVQUFBQSxJQUFJLEdBQUcsS0FBS0wsa0JBQUwsQ0FBd0IsSUFBeEIsQ0FBUDtBQUNBL0IsVUFBQUEsQ0FBQyxHQUFHLEdBQUo7QUFDQXFDLFVBQUFBLEtBQUssR0FBRyxDQUFDLENBQVQ7QUFDQTs7QUFDSixhQUFLLE9BQUw7QUFDSUQsVUFBQUEsSUFBSSxHQUFHLEtBQUtMLGtCQUFMLENBQXdCLElBQXhCLENBQVA7QUFDQS9CLFVBQUFBLENBQUMsR0FBRyxJQUFKO0FBQ0FxQyxVQUFBQSxLQUFLLEdBQUcsQ0FBQyxDQUFUO0FBQ0E7O0FBQ0osYUFBSyxhQUFMO0FBQ0lELFVBQUFBLElBQUksR0FBRyxLQUFLTCxrQkFBTCxDQUF3QixJQUF4QixDQUFQO0FBQ0EvQixVQUFBQSxDQUFDLEdBQUcsR0FBSjtBQUNBcUMsVUFBQUEsS0FBSyxHQUFHLENBQUMsQ0FBVDtBQUNBOztBQUNKLGFBQUssZUFBTDtBQUNJRCxVQUFBQSxJQUFJLEdBQUcsS0FBS0wsa0JBQUwsQ0FBd0IsSUFBeEIsQ0FBUDtBQUNBL0IsVUFBQUEsQ0FBQyxHQUFHLEdBQUo7QUFDQXFDLFVBQUFBLEtBQUssR0FBRyxDQUFDLENBQVQ7QUFDQTtBQXJGUjs7QUF1RkEsYUFBTyxDQUFDRCxJQUFELEVBQU9wQyxDQUFQLEVBQVVxQyxLQUFWLENBQVA7QUFDSDs7O3NDQUN5QjtBQUN0QixXQUFLWixJQUFMLENBQVVlLEVBQVYsR0FBZUMsSUFBSSxDQUFDQyxHQUFMLE9BQUFELElBQUkscUJBQVFFLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEtBQUtDLFNBQW5CLENBQVIsVUFBdUMsQ0FBdkMsR0FBbkI7QUFDSDs7O0FBRUQsd0JBQVlDLEdBQVosRUFBcUU7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSx1Q0ExTXRCLEVBME1zQjs7QUFDakUsU0FBS3JCLElBQUwsR0FBWXFCLEdBQVo7QUFDQSxTQUFLakQsTUFBTCxHQUFjLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQWQ7QUFDQSxTQUFLQyxRQUFMLEdBQWdCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQWhCO0FBQ0g7QUFFRDs7Ozs7Ozs7O3NDQUtrQkwsRyxFQUFrQmdCLEssRUFBWTtBQUM1QyxXQUFLb0MsU0FBTCxDQUFlcEQsR0FBZixJQUFzQixDQUF0QjtBQUNBLFdBQUtzRCxlQUFMO0FBQ0EsVUFBSVgsSUFBSixFQUFlcEMsQ0FBZixFQUFzQ3FDLEtBQXRDOztBQUg0QyxrQ0FJekIsS0FBS1cscUJBQUwsQ0FBMkJ2RCxHQUEzQixDQUp5Qjs7QUFBQTs7QUFJM0MyQyxNQUFBQSxJQUoyQztBQUlyQ3BDLE1BQUFBLENBSnFDO0FBSWxDcUMsTUFBQUEsS0FKa0M7O0FBSzVDLFVBQUksQ0FBQ3JDLENBQUQsSUFBTXFDLEtBQUssS0FBS1ksU0FBcEIsRUFBK0I7QUFDM0IsZ0JBQVF4RCxHQUFSO0FBQ0ksZUFBSyxNQUFMO0FBQ0ksZ0JBQUksS0FBS2dDLElBQUwsQ0FBVUssRUFBVixJQUFnQixDQUFwQixFQUF1QjtBQUNuQixrQkFBTW9CLEdBQUcsR0FBRyxLQUFLekIsSUFBTCxDQUFVVixDQUFWLENBQWFvQyxDQUF6QjtBQUNBRCxjQUFBQSxHQUFHLENBQUNsRCxDQUFKLEdBQVEsQ0FBQ2tELEdBQUcsQ0FBQ2xELENBQUosQ0FBTyxDQUFQLENBQUQsQ0FBUjtBQUNBa0QsY0FBQUEsR0FBRyxDQUFDbEQsQ0FBSixDQUFNLENBQU4sRUFBU2UsQ0FBVCxHQUFhLENBQWI7QUFDQW1DLGNBQUFBLEdBQUcsQ0FBQ2xELENBQUosQ0FBTSxDQUFOLEVBQVNELENBQVQsQ0FBWWdCLENBQVosR0FBZ0JOLEtBQWhCO0FBQ0g7O0FBQ0Q7O0FBQ0o7QUFDSTJDLFlBQUFBLE9BQU8sQ0FBQ0MsS0FBUixDQUFjNUQsR0FBZCxFQUFtQmdCLEtBQW5CO0FBQ0Esa0JBQU0sSUFBSTZDLEtBQUosQ0FBVSxrQkFBVixDQUFOO0FBWFI7QUFhSDs7QUFDRCxVQUFJbEIsSUFBSSxJQUFJcEMsQ0FBUixJQUFhcUMsS0FBSyxLQUFLWSxTQUEzQixFQUFzQztBQUNsQyxhQUFLTSx1QkFBTCxDQUE2Qm5CLElBQTdCLEVBQW1DcEMsQ0FBbkM7QUFDQSxZQUFJcUMsS0FBSyxJQUFJLENBQWIsRUFDSUQsSUFBSSxDQUFDcEMsQ0FBRCxDQUFKLENBQVFBLENBQVIsQ0FBVXFDLEtBQVYsSUFBbUI1QixLQUFuQixDQURKLEtBR0kyQixJQUFJLENBQUNwQyxDQUFELENBQUosQ0FBUUEsQ0FBUixHQUFZUyxLQUFaO0FBQ1A7QUFDSjtBQUVEOzs7Ozs7Ozs7Ozs7MENBU3NCaEIsRyxFQUFrQitELFUsRUFBb0JDLFEsRUFBa0JDLFUsRUFBaUJDLFEsRUFBZWpELE0sRUFBeUI7QUFDbkksVUFBSStDLFFBQVEsSUFBSUQsVUFBaEIsRUFBNEI7QUFDeEIsY0FBTSxJQUFJRixLQUFKLENBQVUsOENBQVYsQ0FBTjtBQUNIOztBQUNELFdBQUtULFNBQUwsQ0FBZXBELEdBQWYsSUFBc0JnRSxRQUFRLEdBQUcsQ0FBakM7QUFDQSxXQUFLVixlQUFMOztBQUNBLFVBQUksQ0FBQ3JDLE1BQUwsRUFBYTtBQUNUQSxRQUFBQSxNQUFNLEdBQUdrRCxzQkFBY0MsTUFBZCxFQUFUO0FBQ0g7O0FBQ0QsVUFBSXpCLElBQUo7QUFBQSxVQUFlcEMsQ0FBZjtBQUFBLFVBQXNDcUMsS0FBdEM7QUFBQSxVQUFpRTFCLElBQUksR0FBRyxJQUF4RTs7QUFUbUksbUNBVWhILEtBQUtxQyxxQkFBTCxDQUEyQnZELEdBQTNCLENBVmdIOztBQUFBOztBQVVsSTJDLE1BQUFBLElBVmtJO0FBVTVIcEMsTUFBQUEsQ0FWNEg7QUFVekhxQyxNQUFBQSxLQVZ5SDs7QUFXbkksVUFBSSxDQUFDckMsQ0FBRCxJQUFNcUMsS0FBSyxLQUFLWSxTQUFwQixFQUErQjtBQUMzQixnQkFBUXhELEdBQVI7QUFDSSxlQUFLLE1BQUw7QUFDSSxnQkFBSSxLQUFLZ0MsSUFBTCxDQUFVSyxFQUFWLElBQWdCLENBQXBCLEVBQXVCO0FBQ25CTSxjQUFBQSxJQUFJLEdBQUcsS0FBS1gsSUFBTCxDQUFVVixDQUFqQjtBQUNBLGtCQUFJK0MsUUFBUSxHQUFHMUIsSUFBSSxDQUFDZSxDQUFMLENBQU9uRCxDQUFQLENBQVMsQ0FBVCxFQUFZRCxDQUEzQjtBQUNBLGtCQUFJZ0UsYUFBYSxHQUFHckUsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsU0FBTCxDQUFla0UsUUFBZixDQUFYLENBQXBCO0FBQ0Esa0JBQUlFLFdBQVcsR0FBR3RFLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLFNBQUwsQ0FBZWtFLFFBQWYsQ0FBWCxDQUFsQjtBQUNBQyxjQUFBQSxhQUFhLENBQUNoRCxDQUFkLEdBQWtCMkMsVUFBbEI7QUFDQU0sY0FBQUEsV0FBVyxDQUFDakQsQ0FBWixHQUFnQjRDLFFBQWhCO0FBQ0FELGNBQUFBLFVBQVUsR0FBR0ssYUFBYjtBQUNBSixjQUFBQSxRQUFRLEdBQUdLLFdBQVg7QUFDQWhFLGNBQUFBLENBQUMsR0FBRyxHQUFKO0FBQ0FxQyxjQUFBQSxLQUFLLEdBQUcsQ0FBQyxDQUFUO0FBQ0ExQixjQUFBQSxJQUFJLEdBQUcsS0FBUDtBQUNIOztBQUNEOztBQUNKO0FBQ0l5QyxZQUFBQSxPQUFPLENBQUNDLEtBQVIsQ0FBYzVELEdBQWQsRUFBbUIrRCxVQUFuQixFQUErQkMsUUFBL0IsRUFBeUNDLFVBQXpDLEVBQXFEQyxRQUFyRCxFQUErRGpELE1BQS9EO0FBQ0Esa0JBQU0sSUFBSTRDLEtBQUosQ0FBVSxrQkFBVixDQUFOO0FBbEJSO0FBb0JIOztBQUNELFVBQUlsQixJQUFJLElBQUlwQyxDQUFSLElBQWFxQyxLQUFLLEtBQUtZLFNBQTNCLEVBQXNDO0FBQ2xDLGFBQUtnQiwyQkFBTCxDQUFpQzdCLElBQWpDLEVBQXVDcEMsQ0FBdkM7QUFDQSxhQUFLa0UsV0FBTCxDQUFpQjlCLElBQWpCLEVBQXVCcEMsQ0FBdkIsRUFBMEJxQyxLQUExQixFQUFpQ21CLFVBQWpDLEVBQTZDRSxVQUE3QyxFQUF5RGhELE1BQXpELEVBQWlFQyxJQUFqRTtBQUNBLGFBQUt1RCxXQUFMLENBQWlCOUIsSUFBakIsRUFBdUJwQyxDQUF2QixFQUEwQnFDLEtBQTFCLEVBQWlDb0IsUUFBakMsRUFBMkNFLFFBQTNDLEVBQXFEVixTQUFyRCxFQUFnRXRDLElBQWhFO0FBQ0g7QUFDSjs7Ozs7Ozs7SUFHUXdELFk7Ozs7Ozs7OztzQ0FDd0JDLFUsRUFBaUM7QUFDOUQsYUFBTztBQUNIbEUsUUFBQUEsQ0FBQyxFQUFFO0FBQ0NFLFVBQUFBLENBQUMsRUFBRSxDQURKO0FBRUNKLFVBQUFBLENBQUMsRUFBRTtBQUZKLFNBREE7QUFLSHFFLFFBQUFBLENBQUMsRUFBRTtBQUNDakUsVUFBQUEsQ0FBQyxFQUFFLENBREo7QUFFQ0osVUFBQUEsQ0FBQyxFQUFFO0FBRkosU0FMQTtBQVNIb0IsUUFBQUEsQ0FBQyxFQUFFO0FBQ0NoQixVQUFBQSxDQUFDLEVBQUUsQ0FESjtBQUVDSixVQUFBQSxDQUFDLEVBQUUsQ0FDQ29FLFVBQVUsQ0FBQyxDQUFELENBRFgsRUFFQ0EsVUFBVSxDQUFDLENBQUQsQ0FGWCxFQUdDLENBSEQ7QUFGSixTQVRBO0FBaUJIaEUsUUFBQUEsQ0FBQyxFQUFFO0FBQ0NBLFVBQUFBLENBQUMsRUFBRSxDQURKO0FBRUNKLFVBQUFBLENBQUMsRUFBRSxDQUNDLENBREQsRUFFQyxDQUZELEVBR0MsQ0FIRDtBQUZKLFNBakJBO0FBeUJIRCxRQUFBQSxDQUFDLEVBQUU7QUFDQ0ssVUFBQUEsQ0FBQyxFQUFFLENBREo7QUFFQ0osVUFBQUEsQ0FBQyxFQUFFLENBQ0MsR0FERCxFQUVDLEdBRkQsRUFHQyxHQUhEO0FBRko7QUF6QkEsT0FBUDtBQWtDSDtBQUVEOzs7Ozs7O2dDQUltQnNFLEcsRUFBeUI7QUFDeEMsVUFBTUMsV0FBVyxHQUFHLDRCQUFlRCxHQUFmLEVBQW9CRSxHQUFwQixDQUF3QixVQUFDQyxDQUFELEVBQUlsRCxDQUFKO0FBQUEsZUFBVUEsQ0FBQyxHQUFHLENBQUosR0FBUWtELENBQUMsR0FBRyxDQUFaLEdBQWdCQSxDQUFDLEdBQUcsQ0FBOUI7QUFBQSxPQUF4QixDQUFwQjtBQUNBLGFBQU8sS0FBS0MsSUFBTCxnQ0FBYUgsV0FBYixFQUFQO0FBQ0g7QUFFRDs7Ozs7OzswQkFJYUQsRyxFQUFxQjtBQUM5QixVQUFNRixVQUFVLEdBQUcsNEJBQWVFLEdBQWYsQ0FBbkI7QUFDQSxVQUFNSyxLQUFpQixHQUFHO0FBQ3RCN0MsUUFBQUEsRUFBRSxFQUFFLENBRGtCO0FBRXRCOEMsUUFBQUEsR0FBRyxFQUFFLENBRmlCO0FBR3RCQyxRQUFBQSxFQUFFLEVBQUUsQ0FIa0I7QUFJdEJDLFFBQUFBLEVBQUUsRUFBRSxDQUprQjtBQUt0QnhDLFFBQUFBLEVBQUUsRUFBRSxLQUFLeUMsaUJBQUwsQ0FBdUJYLFVBQXZCLENBTGtCO0FBTXRCWSxRQUFBQSxFQUFFLEVBQUUsQ0FOa0I7QUFPdEJ4QyxRQUFBQSxFQUFFLEVBQUUsQ0FQa0I7QUFRdEJ5QyxRQUFBQSxFQUFFLEVBQUUsQ0FSa0I7QUFTdEJDLFFBQUFBLEVBQUUsRUFBRSxDQVRrQjtBQVV0QnhELFFBQUFBLE1BQU0sRUFBRSxvQkFBTzRDLEdBQVA7QUFWYyxPQUExQjtBQWFBLGFBQU8sSUFBSTlFLFlBQUosQ0FBaUJtRixLQUFqQixDQUFQO0FBQ0g7QUFFRDs7Ozs7Ozs7Ozt5QkFPWVEsSSxFQUFjQyxHLEVBQWFDLEssRUFBZUMsTSxFQUFnQjtBQUNsRSxVQUFNWCxLQUFpQixHQUFHO0FBQ3RCN0MsUUFBQUEsRUFBRSxFQUFFLENBRGtCO0FBRXRCOEMsUUFBQUEsR0FBRyxFQUFFLENBRmlCO0FBR3RCQyxRQUFBQSxFQUFFLEVBQUUsQ0FIa0I7QUFJdEJDLFFBQUFBLEVBQUUsRUFBRSxDQUprQjtBQUt0QnhDLFFBQUFBLEVBQUUsRUFBRSxLQUFLeUMsaUJBQUwsQ0FBdUIsQ0FBQ0ksSUFBRCxFQUFPQyxHQUFQLEVBQVlDLEtBQVosRUFBbUJDLE1BQW5CLENBQXZCLENBTGtCO0FBTXRCTixRQUFBQSxFQUFFLEVBQUUsQ0FOa0I7QUFPdEJ4QyxRQUFBQSxFQUFFLEVBQUUsQ0FQa0I7QUFRdEJ5QyxRQUFBQSxFQUFFLEVBQUUsQ0FSa0I7QUFTdEJDLFFBQUFBLEVBQUUsRUFBRSxDQVRrQjtBQVV0QnhELFFBQUFBLE1BQU0sRUFBRSxDQUNKLDhCQUFpQixNQUFqQixFQUF5QixDQUFDMkQsS0FBRCxFQUFRQyxNQUFSLENBQXpCLENBREk7QUFWYyxPQUExQjtBQWNBLGFBQU8sSUFBSTlGLFlBQUosQ0FBaUJtRixLQUFqQixDQUFQO0FBQ0g7QUFFRDs7Ozs7Ozs7Ozs0QkFPZVksRSxFQUFZQyxFLEVBQVlDLEUsRUFBWUMsRSxFQUFZO0FBQzNELFVBQU1mLEtBQWlCLEdBQUc7QUFDdEI3QyxRQUFBQSxFQUFFLEVBQUUsQ0FEa0I7QUFFdEI4QyxRQUFBQSxHQUFHLEVBQUUsQ0FGaUI7QUFHdEJDLFFBQUFBLEVBQUUsRUFBRSxDQUhrQjtBQUl0QkMsUUFBQUEsRUFBRSxFQUFFLENBSmtCO0FBS3RCeEMsUUFBQUEsRUFBRSxFQUFFLEtBQUt5QyxpQkFBTCxDQUF1QixDQUFDUSxFQUFFLEdBQUdFLEVBQU4sRUFBVUQsRUFBRSxHQUFHRSxFQUFmLEVBQW1CLElBQUlELEVBQXZCLEVBQTJCLElBQUlDLEVBQS9CLENBQXZCLENBTGtCO0FBTXRCVixRQUFBQSxFQUFFLEVBQUUsQ0FOa0I7QUFPdEJ4QyxRQUFBQSxFQUFFLEVBQUUsQ0FQa0I7QUFRdEJ5QyxRQUFBQSxFQUFFLEVBQUUsQ0FSa0I7QUFTdEJDLFFBQUFBLEVBQUUsRUFBRSxDQVRrQjtBQVV0QnhELFFBQUFBLE1BQU0sRUFBRSxDQUNKLDhCQUFpQixTQUFqQixFQUE0QixDQUFDK0QsRUFBRCxFQUFLQyxFQUFMLENBQTVCLENBREk7QUFWYyxPQUExQjtBQWNBLGFBQU8sSUFBSWxHLFlBQUosQ0FBaUJtRixLQUFqQixDQUFQO0FBQ0g7QUFFRDs7Ozs7Ozt3QkFJV2dCLEUsRUFBaUI7QUFDeEIsVUFBTWhCLEtBQUssR0FBRyxJQUFJbkYsWUFBSixDQUFpQjtBQUMzQnNDLFFBQUFBLEVBQUUsRUFBRSxDQUR1QjtBQUUzQjhDLFFBQUFBLEdBQUcsRUFBRSxDQUZzQjtBQUczQkMsUUFBQUEsRUFBRSxFQUFFLENBSHVCO0FBSTNCQyxRQUFBQSxFQUFFLEVBQUUsQ0FKdUI7QUFLM0J4QyxRQUFBQSxFQUFFLEVBQUUsS0FBS3lDLGlCQUFMLENBQXVCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixDQUF2QixDQUx1QjtBQU0zQkMsUUFBQUEsRUFBRSxFQUFFLENBTnVCO0FBTzNCeEMsUUFBQUEsRUFBRSxFQUFFLENBUHVCO0FBUTNCeUMsUUFBQUEsRUFBRSxFQUFFLENBUnVCO0FBUzNCQyxRQUFBQSxFQUFFLEVBQUUsQ0FUdUI7QUFVM0JVLFFBQUFBLENBQUMsRUFBRSxHQVZ3QjtBQVczQkMsUUFBQUEsQ0FBQyxFQUFFLEdBWHdCO0FBWTNCQyxRQUFBQSxLQUFLLEVBQUVIO0FBWm9CLE9BQWpCLENBQWQ7QUFjQSxhQUFPaEIsS0FBUDtBQUNIO0FBRUQ7Ozs7Ozs7Ozs4QkFNaUJMLEcsRUFBeUJ5QixTLEVBQW1CQyxRLEVBQWlCO0FBQUE7O0FBQzFFLFVBQU01QixVQUFVLEdBQUcsNEJBQWVFLEdBQWYsQ0FBbkI7QUFDQSxVQUFJMkIsT0FBSjs7QUFDQSxVQUFJM0IsR0FBRyxZQUFZNEIsY0FBbkIsRUFBbUM7QUFDL0JELFFBQUFBLE9BQU8sR0FBRyxDQUFWO0FBQ0gsT0FGRCxNQUVPLElBQUkzQixHQUFHLFlBQVk2QixlQUFuQixFQUFvQztBQUN2Q0YsUUFBQUEsT0FBTyxHQUFHLENBQVY7QUFDSCxPQUZNLE1BRUEsSUFBSTNCLEdBQUcsWUFBWThCLFdBQW5CLEVBQWdDO0FBQ25DSCxRQUFBQSxPQUFPLEdBQUcsQ0FBVjtBQUNILE9BRk0sTUFFQTtBQUNIQSxRQUFBQSxPQUFPLEdBQUcsQ0FBVjtBQUNIOztBQUNELFVBQU10QixLQUF5RCxHQUFHO0FBQzlEN0MsUUFBQUEsRUFBRSxFQUFFbUUsT0FEMEQ7QUFFOURyQixRQUFBQSxHQUFHLEVBQUUsQ0FGeUQ7QUFHOURDLFFBQUFBLEVBQUUsRUFBRSxDQUgwRDtBQUk5REMsUUFBQUEsRUFBRSxFQUFFLENBSjBEO0FBSzlEeEMsUUFBQUEsRUFBRSxFQUFFLEtBQUt5QyxpQkFBTCxDQUF1QmtCLE9BQU8sSUFBSSxDQUFYLEdBQWUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLENBQWYsR0FBOEI3QixVQUFyRCxDQUwwRDtBQU05RFksUUFBQUEsRUFBRSxFQUFFLENBTjBEO0FBTzlEeEMsUUFBQUEsRUFBRSxFQUFFLENBUDBEO0FBUTlEeUMsUUFBQUEsRUFBRSxFQUFFLENBUjBEO0FBUzlEQyxRQUFBQSxFQUFFLEVBQUU7QUFUMEQsT0FBbEU7O0FBV0EsY0FBUWUsT0FBUjtBQUNJLGFBQUssQ0FBTDtBQUNJLGNBQU1JLFNBQVMsR0FBRywwQkFBYS9CLEdBQWIsQ0FBbEI7O0FBQ0EsY0FBSStCLFNBQVMsQ0FBQ3hGLE1BQVYsQ0FBaUIsVUFBQXlELEdBQUc7QUFBQSxtQkFBSUEsR0FBRyxZQUFZNEIsY0FBZixJQUFpQzVCLEdBQUcsWUFBWTZCLGVBQXBEO0FBQUEsV0FBcEIsRUFBeUZsRixNQUE3RixFQUFxRztBQUNqRyxnQkFBTXFGLFlBQVksR0FBRzNCLEtBQXJCO0FBQ0EsZ0JBQU00QixZQUE0QixHQUFHLEVBQXJDO0FBQ0EsZ0JBQU1DLFlBQVksR0FBRyxvQkFBckI7QUFDQUgsWUFBQUEsU0FBUyxDQUFDSSxPQUFWLENBQWtCLFVBQUF0RCxDQUFDLEVBQUk7QUFDbkIsa0JBQUlBLENBQUMsWUFBWXVELGtCQUFiLElBQW1DLEVBQUV2RCxDQUFDLFlBQVlpRCxXQUFmLENBQXZDLEVBQW9FO0FBQ2hFRyxnQkFBQUEsWUFBWSxDQUFDSSxPQUFiLENBQXFCLEtBQUksQ0FBQ0MsU0FBTCxDQUFlekQsQ0FBZixFQUFrQjRDLFNBQWxCLEVBQTZCQyxRQUE3QixDQUFyQjtBQUNIO0FBQ0osYUFKRDtBQUtBTyxZQUFBQSxZQUFZLENBQUNFLE9BQWIsQ0FBcUIsVUFBQTlCLEtBQUssRUFBSTtBQUMxQkEsY0FBQUEsS0FBSyxDQUFDbEQsSUFBTixDQUFXZSxFQUFYLEdBQWdCLEdBQWhCO0FBQ0gsYUFGRDtBQUdBOEQsWUFBQUEsWUFBWSxDQUFDVixDQUFiLEdBQWlCeEIsVUFBVSxDQUFDLENBQUQsQ0FBVixHQUFnQkEsVUFBVSxDQUFDLENBQUQsQ0FBMUIsR0FBZ0MsQ0FBakQ7QUFDQWtDLFlBQUFBLFlBQVksQ0FBQ1QsQ0FBYixHQUFpQnpCLFVBQVUsQ0FBQyxDQUFELENBQVYsR0FBZ0JBLFVBQVUsQ0FBQyxDQUFELENBQTFCLEdBQWdDLENBQWpEO0FBQ0FrQyxZQUFBQSxZQUFZLENBQUNSLEtBQWIsR0FBcUJVLFlBQXJCO0FBQ0FULFlBQUFBLFNBQVMsQ0FBQzVELElBQVYsQ0FBZTtBQUNYd0QsY0FBQUEsRUFBRSxFQUFFYSxZQURPO0FBRVhLLGNBQUFBLE1BQU0sRUFBRU4sWUFBWSxDQUFDL0IsR0FBYixDQUFpQixVQUFBRyxLQUFLO0FBQUEsdUJBQUlBLEtBQUssQ0FBQ2xELElBQVY7QUFBQSxlQUF0QjtBQUZHLGFBQWY7QUFJSCxXQW5CRCxNQW1CTztBQUNILGdCQUFNcUYsV0FBVSxHQUFHbkMsS0FBbkI7QUFDQW1DLFlBQUFBLFdBQVUsQ0FBQ2hGLEVBQVgsR0FBZ0IsQ0FBaEI7QUFDQWdGLFlBQUFBLFdBQVUsQ0FBQ3hFLEVBQVgsR0FBZ0IsS0FBS3lDLGlCQUFMLENBQXVCWCxVQUF2QixDQUFoQjtBQUNBMEMsWUFBQUEsV0FBVSxDQUFDcEYsTUFBWCxHQUFvQixvQkFBTzRDLEdBQVAsQ0FBcEI7QUFDSDs7QUFDRDs7QUFDSixhQUFLLENBQUw7QUFDSSxjQUFNeUMsVUFBVSxHQUFHcEMsS0FBbkI7O0FBREosNkJBRXFDLHlCQUFZTCxHQUFaLEVBQW9DeUIsU0FBcEMsQ0FGckM7QUFBQTtBQUFBLGNBRVdpQixVQUZYO0FBQUEsY0FFdUJDLFVBRnZCOztBQUdJRixVQUFBQSxVQUFVLENBQUNqQixLQUFYLEdBQW1Ca0IsVUFBbkI7QUFDQSxjQUFJLENBQUNqQixTQUFTLENBQUNsRixNQUFWLENBQWlCLFVBQUFULENBQUM7QUFBQSxtQkFBSUEsQ0FBQyxDQUFDdUYsRUFBRixJQUFRcUIsVUFBWjtBQUFBLFdBQWxCLEVBQTBDL0YsTUFBL0MsRUFDSThFLFNBQVMsQ0FBQzVELElBQVYsQ0FBZThFLFVBQWY7QUFDSjs7QUFDSixhQUFLLENBQUw7QUFDSSxjQUFNSCxVQUFVLEdBQUduQyxLQUFuQjtBQUNBbUMsVUFBQUEsVUFBVSxDQUFDcEYsTUFBWCxHQUFvQixvQkFBTzRDLEdBQVAsQ0FBcEI7QUFDQTs7QUFDSixhQUFLLENBQUw7QUFDSSxjQUFNNEMsU0FBUyxHQUFHdkMsS0FBbEIsQ0FESixDQUdJOztBQUNBLGNBQU13QyxjQUFjLEdBQUcsK0JBQWtCN0MsR0FBbEIsQ0FBdkI7QUFDQSxjQUFNOEMsVUFBVSxHQUFHLDhCQUFpQkMsZ0JBQWdCLENBQUMvQyxHQUFELENBQWhCLENBQXNCOEMsVUFBdkMsQ0FBbkI7QUFDQSxjQUFNRSxnQkFBZ0IsR0FBRyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sR0FBUCxFQUFZRixVQUFaLENBQXpCO0FBQ0FGLFVBQUFBLFNBQVMsQ0FBQzVFLEVBQVYsQ0FBY2xCLENBQWQsQ0FBaUJwQixDQUFqQixHQUFxQixDQUFDb0UsVUFBVSxDQUFDLENBQUQsQ0FBVixHQUFnQkEsVUFBVSxDQUFDLENBQUQsQ0FBVixHQUFnQmtELGdCQUFqQyxFQUFtRGxELFVBQVUsQ0FBQyxDQUFELENBQVYsR0FBZ0JBLFVBQVUsQ0FBQyxDQUFELENBQTFCLEdBQWdDK0MsY0FBbkYsRUFBbUcsQ0FBbkcsQ0FBckI7QUFDQUQsVUFBQUEsU0FBUyxDQUFDNUUsRUFBVixDQUFjcEMsQ0FBZCxDQUFpQkYsQ0FBakIsR0FBcUIsQ0FBQyxFQUFFdUgsVUFBVSxDQUFDRixnQkFBZ0IsQ0FBQy9DLEdBQUQsQ0FBaEIsQ0FBc0JrRCxXQUF0QixJQUFxQyxHQUF0QyxDQUFWLEdBQXVELEdBQXpELENBQXRCOztBQVJKLDRCQVU2Qix3QkFBV2xELEdBQVgsRUFBa0MwQixRQUFsQyxDQVY3QjtBQUFBO0FBQUEsY0FVV3lCLFFBVlg7QUFBQSxjQVVxQkMsSUFWckI7O0FBV0lSLFVBQUFBLFNBQVMsQ0FBQ25HLENBQVYsR0FBYzBHLFFBQWQ7QUFDQSxjQUFJLENBQUN6QixRQUFRLENBQUMyQixJQUFULENBQWU5RyxNQUFmLENBQXNCLFVBQUErRyxDQUFDO0FBQUEsbUJBQUlBLENBQUMsQ0FBQ0MsS0FBRixJQUFXSCxJQUFJLENBQUNHLEtBQXBCO0FBQUEsV0FBdkIsRUFBa0Q1RyxNQUF2RCxFQUNJK0UsUUFBUSxDQUFDMkIsSUFBVCxDQUFleEYsSUFBZixDQUFvQnVGLElBQXBCO0FBQ0o7QUF0RFI7O0FBd0RBLFVBQU1JLFVBQVUsR0FBRyxJQUFJdEksWUFBSixDQUFpQm1GLEtBQWpCLENBQW5CO0FBQ0EsYUFBT21ELFVBQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNoYXBlTGF5ZXIsIFRleHRMYXllciwgSW1hZ2VMYXllciwgVHJhbnNmb3JtLCBBc3NldHMsIEZvbnRzLCBHcm91cFNoYXBlLCBQcmVDb21wTGF5ZXIsIFJlZmVyZW5jZUlEIH0gZnJvbSAnLi9hbmltYXRpb24nXHJcbmltcG9ydCB7IEVhc2luZ0Z1bmN0aW9uLCBFYXNpbmdGYWN0b3J5IH0gZnJvbSAnLi9lYXNpbmcnXHJcbmltcG9ydCB7IHJlbmRlclRleHQsIHJlbmRlciwgcmVuZGVySW1hZ2UsIHJlbmRlclBsYWluR2x5cGggfSBmcm9tICcuL3JlbmRlcic7XHJcbmltcG9ydCB7IGdldEJvdW5kaW5nQm94LCBnZXRMZWFmTm9kZXMsIGdldEJhc2VsaW5lSGVpZ2h0LCBlbmNvZGVUZXh0QW5jaG9yIH0gZnJvbSAnLi9oZWxwZXInXHJcbmltcG9ydCB1dWlkIGZyb20gJ3V1aWQvdjQnO1xyXG5cclxudHlwZSBTZXRhYmxlS2V5cyA9IFwic2NhbGVYXCIgfCBcInNjYWxlWVwiIHwgXCJhbmNob3JYXCIgfCBcImFuY2hvcllcIiB8IFwieFwiIHwgXCJ5XCIgfCBcInJvdGF0ZVwiIHwgXCJvcGFjaXR5XCIgfCAnc2hhcGUnIHwgJ2ZpbGxDb2xvcicgfCAndHJpbVN0YXJ0JyB8ICd0cmltRW5kJyB8ICd0cmltT2Zmc2V0JyB8ICdzdHJva2VDb2xvcicgfCAnc3Ryb2tlV2lkdGgnIHwgJ3RleHQnIHwgJ2ZpbGxPcGFjaXR5JyB8ICdzdHJva2VPcGFjaXR5J1xyXG5cclxuZXhwb3J0IGNsYXNzIEpTTW92aW5MYXllciB7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgcm9vdDogU2hhcGVMYXllciB8IFRleHRMYXllciB8IEltYWdlTGF5ZXIgfCBQcmVDb21wTGF5ZXI7XHJcbiAgICBwcml2YXRlIGFuY2hvcjogbnVtYmVyW11cclxuICAgIHByaXZhdGUgcG9zaXRpb246IG51bWJlcltdXHJcbiAgICBwcml2YXRlIHRpbWVSYW5nZTogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHt9XHJcbiAgICBwcml2YXRlIGdldERlZmF1bHRQcm9wZXJ0eShrZXk6IHN0cmluZykge1xyXG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2EnOlxyXG4gICAgICAgICAgICBjYXNlICdwJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGtleSA9PSAnYScgPyB0aGlzLmFuY2hvciA6IHRoaXMucG9zaXRpb24pKVxyXG4gICAgICAgICAgICBjYXNlICdzJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBbMTAwLCAxMDAsIDEwMF1cclxuICAgICAgICAgICAgY2FzZSAnbyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMTAwXHJcbiAgICAgICAgICAgIGNhc2UgJ3InOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDBcclxuICAgICAgICAgICAgY2FzZSAndG0nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGs6IDBcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgazogMTAwXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBvOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGs6IDBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgY29udmVydFRvU3RhdGljUHJvcGVydHkodHJhbnNmb3JtOiBhbnksIGtleTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCF0cmFuc2Zvcm1ba2V5XSkge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm1ba2V5XSA9IHtcclxuICAgICAgICAgICAgICAgIGE6IDAsXHJcbiAgICAgICAgICAgICAgICBrOiB0aGlzLmdldERlZmF1bHRQcm9wZXJ0eShrZXkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRyYW5zZm9ybVtrZXldLmEgPT0gMSkge1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0aWNWYWx1ZSA9IHRyYW5zZm9ybVtrZXldLmtbMF0uc1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm1ba2V5XSA9IHtcclxuICAgICAgICAgICAgICAgIGE6IDAsXHJcbiAgICAgICAgICAgICAgICBrOiBzdGF0aWNWYWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBjb252ZXJ0VG9BbmltYXRhYmxlUHJvcGVydHkodHJhbnNmb3JtOiBhbnksIGtleTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCF0cmFuc2Zvcm1ba2V5XSB8fCAhdHJhbnNmb3JtW2tleV0uYSkge1xyXG4gICAgICAgICAgICBpZiAoa2V5ID09ICdhJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmNob3IgPSB0cmFuc2Zvcm1ba2V5XSA/IHRyYW5zZm9ybVtrZXldLmsgOiBbMCwgMCwgMF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoa2V5ID09ICdwJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHRyYW5zZm9ybVtrZXldID8gdHJhbnNmb3JtW2tleV0uayA6IFswLCAwLCAwXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybVtrZXldID0ge1xyXG4gICAgICAgICAgICAgICAgYTogMSxcclxuICAgICAgICAgICAgICAgIGs6IFtdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGFkZEtleWZyYW1lKHRyYW5zZm9ybTogYW55LCBrZXk6IHN0cmluZywgaWR4OiBudW1iZXIgPSAtMSwgdGltZTogbnVtYmVyLCB2YWx1ZTogQXJyYXk8YW55PiwgZWFzaW5nPzogRWFzaW5nRnVuY3Rpb24sIHdyYXA6IGJvb2xlYW4gPSB0cnVlKSB7XHJcbiAgICAgICAgY29uc3QgZXhpc3RLZXlmcmFtZSA9IHRyYW5zZm9ybVtrZXldLmsuZmlsdGVyKCh4OiBhbnkpID0+IHgudCA9PSB0aW1lKSBhcyBhbnlbXVxyXG4gICAgICAgIGxldCByZWFkeVRvU2V0O1xyXG4gICAgICAgIGlmIChleGlzdEtleWZyYW1lLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZWFkeVRvU2V0ID0gZXhpc3RLZXlmcmFtZVswXVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlYWR5VG9TZXQgPSB7XHJcbiAgICAgICAgICAgICAgICB0OiB0aW1lLFxyXG4gICAgICAgICAgICAgICAgczogdGhpcy5nZXREZWZhdWx0UHJvcGVydHkoa2V5KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzS2V5ZnJhbWVDb3VudCA9IHRyYW5zZm9ybVtrZXldLmsucmVkdWNlKChwOiBudW1iZXIsIHg6IGFueSkgPT4geC50IDwgdGltZSA/IHAgKyAxIDogcCwgMClcclxuICAgICAgICAgICAgdHJhbnNmb3JtW2tleV0uay5zcGxpY2UocHJldmlvdXNLZXlmcmFtZUNvdW50LCAwLCByZWFkeVRvU2V0KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZWFzaW5nKSB7XHJcbiAgICAgICAgICAgIHJlYWR5VG9TZXQubyA9IHtcclxuICAgICAgICAgICAgICAgIHg6IGVhc2luZ1swXVswXSxcclxuICAgICAgICAgICAgICAgIHk6IGVhc2luZ1swXVsxXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlYWR5VG9TZXQuaSA9IHtcclxuICAgICAgICAgICAgICAgIHg6IGVhc2luZ1sxXVswXSxcclxuICAgICAgICAgICAgICAgIHk6IGVhc2luZ1sxXVsxXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpZHggPj0gMCkge1xyXG4gICAgICAgICAgICByZWFkeVRvU2V0LnNbaWR4XSA9IHZhbHVlXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVhZHlUb1NldC5zID0gd3JhcCAmJiAhKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpID8gW3ZhbHVlXSA6IHZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBmaW5kUHJvcGVydHlDb25maWcoa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gKCh0aGlzLnJvb3QgYXMgU2hhcGVMYXllcikuc2hhcGVzIVswXSBhcyBHcm91cFNoYXBlKS5pdCEuZmluZChzaGFwZSA9PlxyXG4gICAgICAgICAgICBzaGFwZS50eSA9PSBrZXlcclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGZpbmRPckluc2VydFByb3BlcnR5Q29uZmlnKGtleTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgZmluZCA9IHRoaXMuZmluZFByb3BlcnR5Q29uZmlnKGtleSlcclxuICAgICAgICBpZiAoZmluZCkgcmV0dXJuIGZpbmRcclxuICAgICAgICBjb25zdCBoYXNUcmFuc2Zvcm0gPSB0aGlzLmZpbmRQcm9wZXJ0eUNvbmZpZygndHInKVxyXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgdHk6IGtleSxcclxuICAgICAgICAgICAgLi4udGhpcy5nZXREZWZhdWx0UHJvcGVydHkoa2V5KSBhcyBvYmplY3RcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGhhc1RyYW5zZm9ybSkge1xyXG4gICAgICAgICAgICBjb25zdCBncm91cFNoYXBlcyA9ICgodGhpcy5yb290IGFzIFNoYXBlTGF5ZXIpLnNoYXBlcyFbMF0gYXMgR3JvdXBTaGFwZSkuaXQhXHJcbiAgICAgICAgICAgIGdyb3VwU2hhcGVzLnNwbGljZShncm91cFNoYXBlcy5sZW5ndGggLSAxLCAwLCBjb25maWcpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgKCh0aGlzLnJvb3QgYXMgU2hhcGVMYXllcikuc2hhcGVzIVswXSBhcyBHcm91cFNoYXBlKS5pdCEucHVzaChjb25maWcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb25maWdcclxuICAgIH1cclxuICAgIHByaXZhdGUgY29tbW9uUHJvcGVydHlNYXBwaW5nKGtleTogU2V0YWJsZUtleXMpOiBbYW55LCBzdHJpbmcgfCB1bmRlZmluZWQsIG51bWJlciB8IHVuZGVmaW5lZF0ge1xyXG4gICAgICAgIGxldCBiYXNlOiBhbnksIGs6IHN0cmluZyB8IHVuZGVmaW5lZCwgaW5kZXg6IG51bWJlciB8IHVuZGVmaW5lZFxyXG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3NjYWxlWCc6XHJcbiAgICAgICAgICAgICAgICBiYXNlID0gdGhpcy5yb290LmtzXHJcbiAgICAgICAgICAgICAgICBrID0gJ3MnXHJcbiAgICAgICAgICAgICAgICBpbmRleCA9IDBcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgJ3NjYWxlWSc6XHJcbiAgICAgICAgICAgICAgICBiYXNlID0gdGhpcy5yb290LmtzXHJcbiAgICAgICAgICAgICAgICBrID0gJ3MnXHJcbiAgICAgICAgICAgICAgICBpbmRleCA9IDFcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgJ2FuY2hvclgnOlxyXG4gICAgICAgICAgICAgICAgYmFzZSA9IHRoaXMucm9vdC5rc1xyXG4gICAgICAgICAgICAgICAgayA9ICdhJ1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSAwXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlICdhbmNob3JZJzpcclxuICAgICAgICAgICAgICAgIGJhc2UgPSB0aGlzLnJvb3Qua3NcclxuICAgICAgICAgICAgICAgIGsgPSAnYSdcclxuICAgICAgICAgICAgICAgIGluZGV4ID0gMVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSAneCc6XHJcbiAgICAgICAgICAgICAgICBiYXNlID0gdGhpcy5yb290LmtzXHJcbiAgICAgICAgICAgICAgICBrID0gJ3AnXHJcbiAgICAgICAgICAgICAgICBpbmRleCA9IDBcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgJ3knOlxyXG4gICAgICAgICAgICAgICAgYmFzZSA9IHRoaXMucm9vdC5rc1xyXG4gICAgICAgICAgICAgICAgayA9ICdwJ1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSAxXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlICdyb3RhdGUnOlxyXG4gICAgICAgICAgICAgICAgYmFzZSA9IHRoaXMucm9vdC5rc1xyXG4gICAgICAgICAgICAgICAgayA9ICdyJ1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSAtMVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSAnb3BhY2l0eSc6XHJcbiAgICAgICAgICAgICAgICBiYXNlID0gdGhpcy5yb290LmtzXHJcbiAgICAgICAgICAgICAgICBrID0gJ28nXHJcbiAgICAgICAgICAgICAgICBpbmRleCA9IC0xXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlICd0cmltU3RhcnQnOlxyXG4gICAgICAgICAgICAgICAgYmFzZSA9IHRoaXMuZmluZE9ySW5zZXJ0UHJvcGVydHlDb25maWcoJ3RtJylcclxuICAgICAgICAgICAgICAgIGsgPSAncydcclxuICAgICAgICAgICAgICAgIGluZGV4ID0gLTFcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgJ3RyaW1FbmQnOlxyXG4gICAgICAgICAgICAgICAgYmFzZSA9IHRoaXMuZmluZE9ySW5zZXJ0UHJvcGVydHlDb25maWcoJ3RtJylcclxuICAgICAgICAgICAgICAgIGsgPSAnZSdcclxuICAgICAgICAgICAgICAgIGluZGV4ID0gLTFcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgJ3RyaW1PZmZzZXQnOlxyXG4gICAgICAgICAgICAgICAgYmFzZSA9IHRoaXMuZmluZE9ySW5zZXJ0UHJvcGVydHlDb25maWcoJ3RtJylcclxuICAgICAgICAgICAgICAgIGsgPSAnbydcclxuICAgICAgICAgICAgICAgIGluZGV4ID0gLTFcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgJ2ZpbGxDb2xvcic6XHJcbiAgICAgICAgICAgICAgICBiYXNlID0gdGhpcy5maW5kUHJvcGVydHlDb25maWcoJ2ZsJylcclxuICAgICAgICAgICAgICAgIGsgPSAnYydcclxuICAgICAgICAgICAgICAgIGluZGV4ID0gLTFcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgJ3N0cm9rZUNvbG9yJzpcclxuICAgICAgICAgICAgICAgIGJhc2UgPSB0aGlzLmZpbmRQcm9wZXJ0eUNvbmZpZygnc3QnKVxyXG4gICAgICAgICAgICAgICAgayA9ICdjJ1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSAtMVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSAnc3Ryb2tlV2lkdGgnOlxyXG4gICAgICAgICAgICAgICAgYmFzZSA9IHRoaXMuZmluZFByb3BlcnR5Q29uZmlnKCdzdCcpXHJcbiAgICAgICAgICAgICAgICBrID0gJ3cnXHJcbiAgICAgICAgICAgICAgICBpbmRleCA9IC0xXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlICdzaGFwZSc6XHJcbiAgICAgICAgICAgICAgICBiYXNlID0gdGhpcy5maW5kUHJvcGVydHlDb25maWcoJ3NoJylcclxuICAgICAgICAgICAgICAgIGsgPSAna3MnXHJcbiAgICAgICAgICAgICAgICBpbmRleCA9IC0xXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlICdmaWxsT3BhY2l0eSc6XHJcbiAgICAgICAgICAgICAgICBiYXNlID0gdGhpcy5maW5kUHJvcGVydHlDb25maWcoJ2ZsJylcclxuICAgICAgICAgICAgICAgIGsgPSAnbydcclxuICAgICAgICAgICAgICAgIGluZGV4ID0gLTFcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgJ3N0cm9rZU9wYWNpdHknOlxyXG4gICAgICAgICAgICAgICAgYmFzZSA9IHRoaXMuZmluZFByb3BlcnR5Q29uZmlnKCdzdCcpXHJcbiAgICAgICAgICAgICAgICBrID0gJ28nXHJcbiAgICAgICAgICAgICAgICBpbmRleCA9IC0xXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gW2Jhc2UsIGssIGluZGV4XVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSB1cGRhdGVUaW1lUmFuZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5yb290Lm9wID0gTWF0aC5tYXgoLi4uT2JqZWN0LnZhbHVlcyh0aGlzLnRpbWVSYW5nZSksIDEpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocmVmOiBTaGFwZUxheWVyIHwgVGV4dExheWVyIHwgSW1hZ2VMYXllciB8IFByZUNvbXBMYXllcikge1xyXG4gICAgICAgIHRoaXMucm9vdCA9IHJlZlxyXG4gICAgICAgIHRoaXMuYW5jaG9yID0gWzAsIDAsIDBdXHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IFswLCAwLCAwXVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0ga2V5IHRoZSBuYW1lIG9mIHByb3BlcnR5IHRvIGJlIHNldFxyXG4gICAgICogQHBhcmFtIHZhbHVlIHRoZSB2YWx1ZSB0byBiZSBzZXRcclxuICAgICAqL1xyXG4gICAgc2V0U3RhdGljUHJvcGVydHkoa2V5OiBTZXRhYmxlS2V5cywgdmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMudGltZVJhbmdlW2tleV0gPSAxXHJcbiAgICAgICAgdGhpcy51cGRhdGVUaW1lUmFuZ2UoKVxyXG4gICAgICAgIGxldCBiYXNlOiBhbnksIGs6IHN0cmluZyB8IHVuZGVmaW5lZCwgaW5kZXg6IG51bWJlciB8IHVuZGVmaW5lZFxyXG4gICAgICAgIFtiYXNlLCBrLCBpbmRleF0gPSB0aGlzLmNvbW1vblByb3BlcnR5TWFwcGluZyhrZXkpXHJcbiAgICAgICAgaWYgKCFrIHx8IGluZGV4ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChrZXkpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3RleHQnOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJvb3QudHkgPT0gNSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkb2MgPSB0aGlzLnJvb3QudCEuZCFcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jLmsgPSBbZG9jLmshWzBdXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2Mua1swXS50ID0gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2Mua1swXS5zIS50ID0gdmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihrZXksIHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm90IGEgdmFsaWQga2V5LicpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJhc2UgJiYgayAmJiBpbmRleCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udmVydFRvU3RhdGljUHJvcGVydHkoYmFzZSwgaylcclxuICAgICAgICAgICAgaWYgKGluZGV4ID49IDApXHJcbiAgICAgICAgICAgICAgICBiYXNlW2tdLmtbaW5kZXhdID0gdmFsdWVcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgYmFzZVtrXS5rID0gdmFsdWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBrZXkgdGhlIG5hbWUgb2YgcHJvcGVydHkgdG8gYmUgc2V0XHJcbiAgICAgKiBAcGFyYW0gc3RhcnRGcmFtZSBmcmFtZSBudW1iZXIgdG8gc3RhcnQgdGhlIGFuaW1hdGlvblxyXG4gICAgICogQHBhcmFtIGVuZEZyYW1lIGZyYW1lIG51bWJlciB0byBlbmQgdGhlIGFuaW1hdGlvblxyXG4gICAgICogQHBhcmFtIHN0YXJ0VmFsdWUgdmFsdWUgdG8gYmUgc2V0IGluIHN0YXJ0IG9mIGFuaW1hdGlvblxyXG4gICAgICogQHBhcmFtIGVuZFZhbHVlIHZhbHVlIHRvIGJlIHNldCBpbiBlbmQgb2YgYW5pbWF0aW9uXHJcbiAgICAgKiBAcGFyYW0gZWFzaW5nIGVhc2luZyBmdW5jdGlvbiwgZGVmYXVsdCBpcyBsaW5lYXJcclxuICAgICAqL1xyXG4gICAgc2V0QW5pbWF0YWJsZVByb3BlcnR5KGtleTogU2V0YWJsZUtleXMsIHN0YXJ0RnJhbWU6IG51bWJlciwgZW5kRnJhbWU6IG51bWJlciwgc3RhcnRWYWx1ZTogYW55LCBlbmRWYWx1ZTogYW55LCBlYXNpbmc/OiBFYXNpbmdGdW5jdGlvbikge1xyXG4gICAgICAgIGlmIChlbmRGcmFtZSA8PSBzdGFydEZyYW1lKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRW5kIGZyYW1lIHNob3VsZCBiZSBsYXJnZXIgdGhhbiBzdGFydCBmcmFtZS4nKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRpbWVSYW5nZVtrZXldID0gZW5kRnJhbWUgKyAxXHJcbiAgICAgICAgdGhpcy51cGRhdGVUaW1lUmFuZ2UoKVxyXG4gICAgICAgIGlmICghZWFzaW5nKSB7XHJcbiAgICAgICAgICAgIGVhc2luZyA9IEVhc2luZ0ZhY3RvcnkubGluZWFyKClcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJhc2U6IGFueSwgazogc3RyaW5nIHwgdW5kZWZpbmVkLCBpbmRleDogbnVtYmVyIHwgdW5kZWZpbmVkLCB3cmFwID0gdHJ1ZTtcclxuICAgICAgICBbYmFzZSwgaywgaW5kZXhdID0gdGhpcy5jb21tb25Qcm9wZXJ0eU1hcHBpbmcoa2V5KVxyXG4gICAgICAgIGlmICghayB8fCBpbmRleCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICd0ZXh0JzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yb290LnR5ID09IDUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZSA9IHRoaXMucm9vdC50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0UHJvcCA9IGJhc2UuZC5rWzBdLnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRtcFN0YXJ0VmFsdWUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRleHRQcm9wKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRtcEVuZFZhbHVlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0ZXh0UHJvcCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcFN0YXJ0VmFsdWUudCA9IHN0YXJ0VmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG1wRW5kVmFsdWUudCA9IGVuZFZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0VmFsdWUgPSB0bXBTdGFydFZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZFZhbHVlID0gdG1wRW5kVmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgayA9ICdkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9IC0xXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyYXAgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGtleSwgc3RhcnRGcmFtZSwgZW5kRnJhbWUsIHN0YXJ0VmFsdWUsIGVuZFZhbHVlLCBlYXNpbmcpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgYSB2YWxpZCBrZXkuJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYmFzZSAmJiBrICYmIGluZGV4ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jb252ZXJ0VG9BbmltYXRhYmxlUHJvcGVydHkoYmFzZSwgaylcclxuICAgICAgICAgICAgdGhpcy5hZGRLZXlmcmFtZShiYXNlLCBrLCBpbmRleCwgc3RhcnRGcmFtZSwgc3RhcnRWYWx1ZSwgZWFzaW5nLCB3cmFwKVxyXG4gICAgICAgICAgICB0aGlzLmFkZEtleWZyYW1lKGJhc2UsIGssIGluZGV4LCBlbmRGcmFtZSwgZW5kVmFsdWUsIHVuZGVmaW5lZCwgd3JhcClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMYXllckZhY3Rvcnkge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2VuZXJhdGVUcmFuc2Zvcm0oY29vcmRpbmF0ZTogbnVtYmVyW10pOiBUcmFuc2Zvcm0ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG86IHtcclxuICAgICAgICAgICAgICAgIGE6IDAsXHJcbiAgICAgICAgICAgICAgICBrOiAxMDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcjoge1xyXG4gICAgICAgICAgICAgICAgYTogMCxcclxuICAgICAgICAgICAgICAgIGs6IDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcDoge1xyXG4gICAgICAgICAgICAgICAgYTogMCxcclxuICAgICAgICAgICAgICAgIGs6IFtcclxuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVbMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhOiB7XHJcbiAgICAgICAgICAgICAgICBhOiAwLFxyXG4gICAgICAgICAgICAgICAgazogW1xyXG4gICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHM6IHtcclxuICAgICAgICAgICAgICAgIGE6IDAsXHJcbiAgICAgICAgICAgICAgICBrOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgIDEwMCxcclxuICAgICAgICAgICAgICAgICAgICAxMDBcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNyZWF0ZSB0aGUgYm91bmRpbmcgYm94IG9mIHN2ZyBlbGVtZW50XHJcbiAgICAgKiBAcGFyYW0gZG9tIHN2ZyBlbGVtZW50IG5lZWRzIHRvIGNhbGN1bGF0ZSB0aGUgYm91bmRpbmcgYm94XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBib3VuZGluZ0JveChkb206IFNWR0dyYXBoaWNzRWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IGJvdW5kaW5nQm94ID0gZ2V0Qm91bmRpbmdCb3goZG9tKS5tYXAoKHYsIGkpID0+IGkgPCAyID8gdiAtIDEgOiB2ICsgMSkgYXMgW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl1cclxuICAgICAgICByZXR1cm4gdGhpcy5yZWN0KC4uLmJvdW5kaW5nQm94KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY3JlYXRlIHRoZSBzYW1lIHNoYXBlIG9mIHN2ZyBwYXRoXHJcbiAgICAgKiBAcGFyYW0gZG9tIHN2ZyBwYXRoIGVsZW1lbnQgcmVwcmVzZW50IHRoZSBzaGFwZVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgc2hhcGUoZG9tOiBTVkdQYXRoRWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGUgPSBnZXRCb3VuZGluZ0JveChkb20pXHJcbiAgICAgICAgY29uc3QgbGF5ZXI6IFNoYXBlTGF5ZXIgPSB7XHJcbiAgICAgICAgICAgIHR5OiA0LFxyXG4gICAgICAgICAgICBkZGQ6IDAsXHJcbiAgICAgICAgICAgIHNyOiAxLFxyXG4gICAgICAgICAgICBhbzogMCxcclxuICAgICAgICAgICAga3M6IHRoaXMuZ2VuZXJhdGVUcmFuc2Zvcm0oY29vcmRpbmF0ZSksXHJcbiAgICAgICAgICAgIGlwOiAwLFxyXG4gICAgICAgICAgICBvcDogMSxcclxuICAgICAgICAgICAgc3Q6IDAsXHJcbiAgICAgICAgICAgIGJtOiAwLFxyXG4gICAgICAgICAgICBzaGFwZXM6IHJlbmRlcihkb20pXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IEpTTW92aW5MYXllcihsYXllcilcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNyZWF0ZSBhIHJlY3RhbmdsZVxyXG4gICAgICogQHBhcmFtIGxlZnQgbGVmdCBvZiByZWN0XHJcbiAgICAgKiBAcGFyYW0gdG9wIHRvcCBvZiByZWN0XHJcbiAgICAgKiBAcGFyYW0gd2lkdGggd2lkdGggb2YgcmVjdFxyXG4gICAgICogQHBhcmFtIGhlaWdodCBoZWlnaHQgb2YgcmVjdFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgcmVjdChsZWZ0OiBudW1iZXIsIHRvcDogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGxheWVyOiBTaGFwZUxheWVyID0ge1xyXG4gICAgICAgICAgICB0eTogNCxcclxuICAgICAgICAgICAgZGRkOiAwLFxyXG4gICAgICAgICAgICBzcjogMSxcclxuICAgICAgICAgICAgYW86IDAsXHJcbiAgICAgICAgICAgIGtzOiB0aGlzLmdlbmVyYXRlVHJhbnNmb3JtKFtsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHRdKSxcclxuICAgICAgICAgICAgaXA6IDAsXHJcbiAgICAgICAgICAgIG9wOiAxLFxyXG4gICAgICAgICAgICBzdDogMCxcclxuICAgICAgICAgICAgYm06IDAsXHJcbiAgICAgICAgICAgIHNoYXBlczogW1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyUGxhaW5HbHlwaCgncmVjdCcsIFt3aWR0aCwgaGVpZ2h0XSlcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IEpTTW92aW5MYXllcihsYXllcilcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNyZWF0ZSBhIGVsbGlwc2VcclxuICAgICAqIEBwYXJhbSBjeCB4IGNlbnRlciBvZiBlbGxpcHNlXHJcbiAgICAgKiBAcGFyYW0gY3kgeSBjZW50ZXIgb2YgZWxsaXBzZVxyXG4gICAgICogQHBhcmFtIHJ4IHggcmFkaXVzIG9mIGVsbGlwc2VcclxuICAgICAqIEBwYXJhbSByeSB5IHJhZGl1cyBvZiBlbGxpcHNlXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBlbGxpcHNlKGN4OiBudW1iZXIsIGN5OiBudW1iZXIsIHJ4OiBudW1iZXIsIHJ5OiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBsYXllcjogU2hhcGVMYXllciA9IHtcclxuICAgICAgICAgICAgdHk6IDQsXHJcbiAgICAgICAgICAgIGRkZDogMCxcclxuICAgICAgICAgICAgc3I6IDEsXHJcbiAgICAgICAgICAgIGFvOiAwLFxyXG4gICAgICAgICAgICBrczogdGhpcy5nZW5lcmF0ZVRyYW5zZm9ybShbY3ggLSByeCwgY3kgLSByeSwgMiAqIHJ4LCAyICogcnldKSxcclxuICAgICAgICAgICAgaXA6IDAsXHJcbiAgICAgICAgICAgIG9wOiAxLFxyXG4gICAgICAgICAgICBzdDogMCxcclxuICAgICAgICAgICAgYm06IDAsXHJcbiAgICAgICAgICAgIHNoYXBlczogW1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyUGxhaW5HbHlwaCgnZWxsaXBzZScsIFtyeCwgcnldKVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgSlNNb3ZpbkxheWVyKGxheWVyKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogbWFrZSBhIGxheWVyIGJ5IGFzc2V0IElEXHJcbiAgICAgKiBAcGFyYW0gaWQgYXNzZXQgcmVmZXJlbmNlIElEXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyByZWYoaWQ6IFJlZmVyZW5jZUlEKSB7XHJcbiAgICAgICAgY29uc3QgbGF5ZXIgPSBuZXcgSlNNb3ZpbkxheWVyKHtcclxuICAgICAgICAgICAgdHk6IDAsXHJcbiAgICAgICAgICAgIGRkZDogMCxcclxuICAgICAgICAgICAgc3I6IDEsXHJcbiAgICAgICAgICAgIGFvOiAwLFxyXG4gICAgICAgICAgICBrczogdGhpcy5nZW5lcmF0ZVRyYW5zZm9ybShbMCwgMCwgMCwgMF0pLFxyXG4gICAgICAgICAgICBpcDogMCxcclxuICAgICAgICAgICAgb3A6IDEsXHJcbiAgICAgICAgICAgIHN0OiAwLFxyXG4gICAgICAgICAgICBibTogMCxcclxuICAgICAgICAgICAgdzogOWU5LFxyXG4gICAgICAgICAgICBoOiA5ZTksXHJcbiAgICAgICAgICAgIHJlZklkOiBpZFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIGxheWVyXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBtYWtlIGEgY29tcGxleCBsYXllciBieSBhbiBhcmJpdHJhcnkgc3ZnIGVsZW1lbnRcclxuICAgICAqIEBwYXJhbSBkb20gc3ZnIGVsZW1lbnQgbmVlZCB0byBiZSBwYXJzZWRcclxuICAgICAqIEBwYXJhbSBhc3NldExpc3QgYSBsaXN0IGNvbnRhaW5zIGltYWdlL2xheWVyIGFzc2V0XHJcbiAgICAgKiBAcGFyYW0gZm9udExpc3QgYSBsaXN0IGNvbnRhaW5zIGZvbnQgYXNzZXRcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGhpZXJhcmNoeShkb206IFNWR0dyYXBoaWNzRWxlbWVudCwgYXNzZXRMaXN0OiBBc3NldHMsIGZvbnRMaXN0OiBGb250cykge1xyXG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGUgPSBnZXRCb3VuZGluZ0JveChkb20pXHJcbiAgICAgICAgbGV0IGRvbVR5cGU6IDIgfCA0IHwgNSB8IDA7XHJcbiAgICAgICAgaWYgKGRvbSBpbnN0YW5jZW9mIFNWR1RleHRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGRvbVR5cGUgPSA1XHJcbiAgICAgICAgfSBlbHNlIGlmIChkb20gaW5zdGFuY2VvZiBTVkdJbWFnZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgZG9tVHlwZSA9IDJcclxuICAgICAgICB9IGVsc2UgaWYgKGRvbSBpbnN0YW5jZW9mIFNWR0dFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGRvbVR5cGUgPSAwXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZG9tVHlwZSA9IDRcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbGF5ZXI6IFNoYXBlTGF5ZXIgfCBJbWFnZUxheWVyIHwgVGV4dExheWVyIHwgUHJlQ29tcExheWVyID0ge1xyXG4gICAgICAgICAgICB0eTogZG9tVHlwZSxcclxuICAgICAgICAgICAgZGRkOiAwLFxyXG4gICAgICAgICAgICBzcjogMSxcclxuICAgICAgICAgICAgYW86IDAsXHJcbiAgICAgICAgICAgIGtzOiB0aGlzLmdlbmVyYXRlVHJhbnNmb3JtKGRvbVR5cGUgPT0gMCA/IFswLCAwLCAwLCAwXSA6IGNvb3JkaW5hdGUpLFxyXG4gICAgICAgICAgICBpcDogMCxcclxuICAgICAgICAgICAgb3A6IDEsXHJcbiAgICAgICAgICAgIHN0OiAwLFxyXG4gICAgICAgICAgICBibTogMFxyXG4gICAgICAgIH1cclxuICAgICAgICBzd2l0Y2ggKGRvbVR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgY29uc3QgZG9tTGVhdmVzID0gZ2V0TGVhZk5vZGVzKGRvbSlcclxuICAgICAgICAgICAgICAgIGlmIChkb21MZWF2ZXMuZmlsdGVyKGRvbSA9PiBkb20gaW5zdGFuY2VvZiBTVkdUZXh0RWxlbWVudCB8fCBkb20gaW5zdGFuY2VvZiBTVkdJbWFnZUVsZW1lbnQpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZWNvbXBMYXllciA9IGxheWVyIGFzIFByZUNvbXBMYXllclxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZUNvbXBBc3NldDogSlNNb3ZpbkxheWVyW10gPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZUNvbXBSZWZJZCA9IHV1aWQoKVxyXG4gICAgICAgICAgICAgICAgICAgIGRvbUxlYXZlcy5mb3JFYWNoKGQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZCBpbnN0YW5jZW9mIFNWR0dyYXBoaWNzRWxlbWVudCAmJiAhKGQgaW5zdGFuY2VvZiBTVkdHRWxlbWVudCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZUNvbXBBc3NldC51bnNoaWZ0KHRoaXMuaGllcmFyY2h5KGQsIGFzc2V0TGlzdCwgZm9udExpc3QpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBwcmVDb21wQXNzZXQuZm9yRWFjaChsYXllciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyLnJvb3Qub3AgPSA5ZTlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIHByZWNvbXBMYXllci53ID0gY29vcmRpbmF0ZVswXSArIGNvb3JkaW5hdGVbMl0gKyAxXHJcbiAgICAgICAgICAgICAgICAgICAgcHJlY29tcExheWVyLmggPSBjb29yZGluYXRlWzFdICsgY29vcmRpbmF0ZVszXSArIDFcclxuICAgICAgICAgICAgICAgICAgICBwcmVjb21wTGF5ZXIucmVmSWQgPSBwcmVDb21wUmVmSWRcclxuICAgICAgICAgICAgICAgICAgICBhc3NldExpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBwcmVDb21wUmVmSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyczogcHJlQ29tcEFzc2V0Lm1hcChsYXllciA9PiBsYXllci5yb290KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoYXBlTGF5ZXIgPSBsYXllciBhcyBTaGFwZUxheWVyXHJcbiAgICAgICAgICAgICAgICAgICAgc2hhcGVMYXllci50eSA9IDRcclxuICAgICAgICAgICAgICAgICAgICBzaGFwZUxheWVyLmtzID0gdGhpcy5nZW5lcmF0ZVRyYW5zZm9ybShjb29yZGluYXRlKVxyXG4gICAgICAgICAgICAgICAgICAgIHNoYXBlTGF5ZXIuc2hhcGVzID0gcmVuZGVyKGRvbSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlTGF5ZXIgPSBsYXllciBhcyBJbWFnZUxheWVyXHJcbiAgICAgICAgICAgICAgICBjb25zdCBbaW1hZ2VSZWZJZCwgaW1hZ2VBc3NldF0gPSByZW5kZXJJbWFnZShkb20gYXMgU1ZHSW1hZ2VFbGVtZW50LCBhc3NldExpc3QpXHJcbiAgICAgICAgICAgICAgICBpbWFnZUxheWVyLnJlZklkID0gaW1hZ2VSZWZJZFxyXG4gICAgICAgICAgICAgICAgaWYgKCFhc3NldExpc3QuZmlsdGVyKGEgPT4gYS5pZCA9PSBpbWFnZVJlZklkKS5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRMaXN0LnB1c2goaW1hZ2VBc3NldClcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNoYXBlTGF5ZXIgPSBsYXllciBhcyBTaGFwZUxheWVyXHJcbiAgICAgICAgICAgICAgICBzaGFwZUxheWVyLnNoYXBlcyA9IHJlbmRlcihkb20pXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0TGF5ZXIgPSBsYXllciBhcyBUZXh0TGF5ZXJcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBtb3ZlIHRleHRMYXllcidzIHBvc2l0aW9uIHRvIHRleHQtYW5jaG9yLXJlbGF0ZWRcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJhc2VMaW5lSGVpZ2h0ID0gZ2V0QmFzZWxpbmVIZWlnaHQoZG9tIGFzIFNWR1RleHRFbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dEFuY2hvciA9IGVuY29kZVRleHRBbmNob3IoZ2V0Q29tcHV0ZWRTdHlsZShkb20pLnRleHRBbmNob3IpXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0QW5jaG9yV2VpZ2h0ID0gWzAsIDEsIDAuNV1bdGV4dEFuY2hvcl1cclxuICAgICAgICAgICAgICAgIHRleHRMYXllci5rcyEucCEuayA9IFtjb29yZGluYXRlWzBdICsgY29vcmRpbmF0ZVsyXSAqIHRleHRBbmNob3JXZWlnaHQsIGNvb3JkaW5hdGVbMV0gKyBjb29yZGluYXRlWzNdIC0gYmFzZUxpbmVIZWlnaHQsIDBdXHJcbiAgICAgICAgICAgICAgICB0ZXh0TGF5ZXIua3MhLm8hLmsgPSB+fihwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGUoZG9tKS5maWxsT3BhY2l0eSB8fCAnMScpICogMTAwKVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IFt0ZXh0RGF0YSwgZm9udF0gPSByZW5kZXJUZXh0KGRvbSBhcyBTVkdUZXh0RWxlbWVudCwgZm9udExpc3QpXHJcbiAgICAgICAgICAgICAgICB0ZXh0TGF5ZXIudCA9IHRleHREYXRhXHJcbiAgICAgICAgICAgICAgICBpZiAoIWZvbnRMaXN0Lmxpc3QhLmZpbHRlcihmID0+IGYuZk5hbWUgPT0gZm9udC5mTmFtZSkubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRMaXN0Lmxpc3QhLnB1c2goZm9udClcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG1vdmluTGF5ZXIgPSBuZXcgSlNNb3ZpbkxheWVyKGxheWVyKVxyXG4gICAgICAgIHJldHVybiBtb3ZpbkxheWVyXHJcbiAgICB9XHJcbn0iXX0=

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
  function PathMaker() {
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
    key: "moveTo",
    value: function moveTo(x, y) {
      this.path.c = false;
      this.path.i = [[0, 0]];
      this.path.o = [];
      this.path.v = [[x, y]];
      this.currentX = x;
      this.currentY = y;
      this.offsetX = x;
      this.offsetY = y;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYXRoLnRzIl0sIm5hbWVzIjpbIlBhdGhNYWtlciIsImMiLCJpIiwibyIsInYiLCJJbmZpbml0eSIsIngiLCJ5IiwiY3VycmVudFgiLCJjdXJyZW50WSIsIm9mZnNldFgiLCJNYXRoIiwibWluIiwib2Zmc2V0WSIsInAwIiwicDEiLCJwMiIsInAzIiwiYSIsImIiLCJtYXgiLCJzcXJ0Iiwicm9vdHMiLCJtYXAiLCJtdWx0aSIsImZvckVhY2giLCJyb290IiwidmFsdWUiLCJwb3ciLCJwYXRoIiwicHVzaCIsInVwZGF0ZVhZIiwibGluZVRvIiwiaG9yaXpvbnRhbFRvIiwidmVydGljYWxUbyIsImMxeCIsImMxeSIsImMyeCIsImMyeSIsImNhbGN1bGF0ZUJlemllck1pbk1heCIsImN1YmljQmV6aWVyQ3VydmVUbyIsImN4IiwiY3kiLCJxdWFkcmF0aWNCZXppZXJDdXJ2ZVRvIiwicngiLCJyeSIsInhBeGlzUm90YXRpb24iLCJsYXJnZUFyY0ZsYWciLCJzd2VlcEZsYWciLCJjU2VyaWVzIiwiYTJjIiwibGVuZ3RoIiwiaW92TGlzdCIsInNwbGljZSIsImFyY1RvIiwieDEiLCJ5MSIsImFuZ2xlIiwibGFyZ2VfYXJjX2ZsYWciLCJzd2VlcF9mbGFnIiwieDIiLCJ5MiIsInJlY3Vyc2l2ZSIsIl8xMjAiLCJQSSIsInJhZCIsInJlcyIsInh5Iiwicm90YXRlIiwiWCIsImNvcyIsInNpbiIsIlkiLCJoIiwicngyIiwicnkyIiwiayIsImFicyIsImYxIiwiYXNpbiIsImYyIiwiZGYiLCJmMm9sZCIsIngyb2xkIiwieTJvbGQiLCJjMSIsInMxIiwiYzIiLCJzMiIsInQiLCJ0YW4iLCJoeCIsImh5IiwibTEiLCJtMiIsIm0zIiwibTQiLCJjb25jYXQiLCJqb2luIiwic3BsaXQiLCJwYXJzZUZsb2F0IiwibmV3cmVzIiwiaWkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWFBLFM7Ozs7OztrQ0FDYztBQUNuQkMsTUFBQUEsQ0FB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eUJnQyxJQUF6QixHQUFnQ0MsS0FBaEMsQ0FBc0MsR0FBdEMsRUFBMkM1RSxHQUEzQyxDQUErQyxVQUFBakIsQ0FBQztBQUFBLGlCQUFJOEYsVUFBVSxDQUFDOUYsQ0FBRCxDQUFkO0FBQUEsU0FBaEQsQ0FBTjtBQUNBLFlBQUkrRixNQUFNLEdBQUcsRUFBYjs7QUFDQSxhQUFLLElBQUluRyxDQUFDLEdBQUcsQ0FBUixFQUFXb0csRUFBRSxHQUFHcEMsR0FBRyxDQUFDZixNQUF6QixFQUFpQ2pELENBQUMsR0FBR29HLEVBQXJDLEVBQXlDcEcsQ0FBQyxFQUExQyxFQUE4QztBQUMxQ21HLFVBQUFBLE1BQU0sQ0FBQ25HLENBQUQsQ0FBTixHQUFZQSxDQUFDLEdBQUcsQ0FBSixHQUFRa0UsTUFBTSxDQUFDRixHQUFHLENBQUNoRSxDQUFDLEdBQUcsQ0FBTCxDQUFKLEVBQWFnRSxHQUFHLENBQUNoRSxDQUFELENBQWhCLEVBQXFCK0QsR0FBckIsQ0FBTixDQUFnQzFELENBQXhDLEdBQTRDNkQsTUFBTSxDQUFDRixHQUFHLENBQUNoRSxDQUFELENBQUosRUFBU2dFLEdBQUcsQ0FBQ2hFLENBQUMsR0FBRyxDQUFMLENBQVosRUFBcUIrRCxHQUFyQixDQUFOLENBQWdDM0QsQ0FBeEY7QUFDSDs7QUFDRCxlQUFPK0YsTUFBUDtBQUNIO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYXRoRGVmIH0gZnJvbSAnLi9hbmltYXRpb24nXHJcblxyXG5leHBvcnQgY2xhc3MgUGF0aE1ha2VyIHtcclxuICAgIHB1YmxpYyBwYXRoOiBQYXRoRGVmID0ge1xyXG4gICAgICAgIGM6IGZhbHNlLFxyXG4gICAgICAgIGk6IFtdLFxyXG4gICAgICAgIG86IFtdLFxyXG4gICAgICAgIHY6IFtdXHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgY3VycmVudFg6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRZOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBvZmZzZXRYOiBudW1iZXIgPSBJbmZpbml0eTtcclxuICAgIHByaXZhdGUgb2Zmc2V0WTogbnVtYmVyID0gSW5maW5pdHk7XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVYWSh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFggPSB4XHJcbiAgICAgICAgdGhpcy5jdXJyZW50WSA9IHlcclxuICAgICAgICB0aGlzLm9mZnNldFggPSBNYXRoLm1pbih0aGlzLm9mZnNldFgsIHgpXHJcbiAgICAgICAgdGhpcy5vZmZzZXRZID0gTWF0aC5taW4odGhpcy5vZmZzZXRZLCB5KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2FsY3VsYXRlQmV6aWVyTWluTWF4KHAwOiBudW1iZXIsIHAxOiBudW1iZXIsIHAyOiBudW1iZXIsIHAzOiBudW1iZXIpOiBbbnVtYmVyLCBudW1iZXJdIHtcclxuICAgICAgICBjb25zdCBhID0gMyAqIChwMyAtIDMgKiBwMiArIDMgKiBwMSAtIHAwKVxyXG4gICAgICAgIGNvbnN0IGIgPSA2ICogKHAyIC0gMiAqIHAxICsgcDApXHJcbiAgICAgICAgY29uc3QgYyA9IDMgKiAocDEgLSBwMClcclxuICAgICAgICBsZXQgbWluID0gSW5maW5pdHksIG1heCA9IC1JbmZpbml0eVxyXG4gICAgICAgIGlmIChiICogYiAtIDQgKiBhICogYyA+PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNxcnQgPSBNYXRoLnNxcnQoYiAqIGIgLSA0ICogYSAqIGMpXHJcbiAgICAgICAgICAgIGNvbnN0IHJvb3RzID0gWzEsIC0xXS5tYXAobXVsdGkgPT4gKG11bHRpICogc3FydCAtIGIpIC8gMiAvIGEpXHJcbiAgICAgICAgICAgIHJvb3RzLmZvckVhY2gocm9vdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocm9vdCA+IDAgJiYgcm9vdCA8IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IE1hdGgucG93KDEgLSByb290LCAzKSAqIHAwICsgMyAqIE1hdGgucG93KDEgLSByb290LCAyKSAqIHJvb3QgKiBwMSArIDMgKiAoMSAtIHJvb3QpICogcm9vdCAqIHJvb3QgKiBwMiArIE1hdGgucG93KHJvb3QsIDMpICogcDNcclxuICAgICAgICAgICAgICAgICAgICBtaW4gPSBNYXRoLm1pbihtaW4sIHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIG1heCA9IE1hdGgubWF4KG1heCwgdmFsdWUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1pbiA9IE1hdGgubWluKG1pbiwgcDAsIHAzKVxyXG4gICAgICAgIG1heCA9IE1hdGgubWF4KG1heCwgcDAsIHAzKVxyXG4gICAgICAgIHJldHVybiBbbWluLCBtYXhdXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1vdmVUbyh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucGF0aC5jID0gZmFsc2VcclxuICAgICAgICB0aGlzLnBhdGguaSA9IFtbMCwgMF1dXHJcbiAgICAgICAgdGhpcy5wYXRoLm8gPSBbXVxyXG4gICAgICAgIHRoaXMucGF0aC52ID0gW1t4LCB5XV1cclxuICAgICAgICB0aGlzLmN1cnJlbnRYID0geFxyXG4gICAgICAgIHRoaXMuY3VycmVudFkgPSB5XHJcbiAgICAgICAgdGhpcy5vZmZzZXRYID0geFxyXG4gICAgICAgIHRoaXMub2Zmc2V0WSA9IHlcclxuICAgIH1cclxuICAgIHB1YmxpYyBsaW5lVG8oeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnBhdGguaSEucHVzaChbMCwgMF0pXHJcbiAgICAgICAgdGhpcy5wYXRoLm8hLnB1c2goWzAsIDBdKVxyXG4gICAgICAgIHRoaXMucGF0aC52IS5wdXNoKFt4LCB5XSlcclxuICAgICAgICB0aGlzLnVwZGF0ZVhZKHgsIHkpXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgbGluZVRvUmVsYXRpdmUoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmxpbmVUbyh0aGlzLmN1cnJlbnRYICsgeCwgdGhpcy5jdXJyZW50WSArIHkpXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaG9yaXpvbnRhbFRvKHg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubGluZVRvKHgsIHRoaXMuY3VycmVudFkpXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaG9yaXpvbnRhbFRvUmVsYXRpdmUoeDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5ob3Jpem9udGFsVG8odGhpcy5jdXJyZW50WCArIHgpXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdmVydGljYWxUbyh5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmxpbmVUbyh0aGlzLmN1cnJlbnRYLCB5KVxyXG4gICAgfVxyXG4gICAgcHVibGljIHZlcnRpY2FsVG9SZWxhdGl2ZSh5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnZlcnRpY2FsVG8odGhpcy5jdXJyZW50WSArIHkpXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgY3ViaWNCZXppZXJDdXJ2ZVRvKFxyXG4gICAgICAgIGMxeDogbnVtYmVyLFxyXG4gICAgICAgIGMxeTogbnVtYmVyLFxyXG4gICAgICAgIGMyeDogbnVtYmVyLFxyXG4gICAgICAgIGMyeTogbnVtYmVyLFxyXG4gICAgICAgIHg6IG51bWJlcixcclxuICAgICAgICB5OiBudW1iZXJcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMucGF0aC5pIS5wdXNoKFtjMnggLSB4LCBjMnkgLSB5XSlcclxuICAgICAgICB0aGlzLnBhdGgubyEucHVzaChbYzF4IC0gdGhpcy5jdXJyZW50WCwgYzF5IC0gdGhpcy5jdXJyZW50WV0pXHJcbiAgICAgICAgdGhpcy5wYXRoLnYhLnB1c2goW3gsIHldKVxyXG4gICAgICAgIHRoaXMub2Zmc2V0WCA9IE1hdGgubWluKHRoaXMub2Zmc2V0WCwgLi4udGhpcy5jYWxjdWxhdGVCZXppZXJNaW5NYXgodGhpcy5jdXJyZW50WCwgYzF4LCBjMngsIHgpKVxyXG4gICAgICAgIHRoaXMub2Zmc2V0WSA9IE1hdGgubWluKHRoaXMub2Zmc2V0WSwgLi4udGhpcy5jYWxjdWxhdGVCZXppZXJNaW5NYXgodGhpcy5jdXJyZW50WSwgYzF5LCBjMnksIHkpKVxyXG4gICAgICAgIHRoaXMudXBkYXRlWFkoeCwgeSlcclxuICAgIH1cclxuICAgIHB1YmxpYyBjdWJpY0JlemllckN1cnZlVG9SZWxhdGl2ZShcclxuICAgICAgICBjMXg6IG51bWJlcixcclxuICAgICAgICBjMXk6IG51bWJlcixcclxuICAgICAgICBjMng6IG51bWJlcixcclxuICAgICAgICBjMnk6IG51bWJlcixcclxuICAgICAgICB4OiBudW1iZXIsXHJcbiAgICAgICAgeTogbnVtYmVyXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLmN1YmljQmV6aWVyQ3VydmVUbyh0aGlzLmN1cnJlbnRYICsgYzF4LCB0aGlzLmN1cnJlbnRZICsgYzF5LCB0aGlzLmN1cnJlbnRYICsgYzJ4LCB0aGlzLmN1cnJlbnRZICsgYzJ5LCB0aGlzLmN1cnJlbnRYICsgeCwgdGhpcy5jdXJyZW50WSArIHkpXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcXVhZHJhdGljQmV6aWVyQ3VydmVUbyhjeDogbnVtYmVyLCBjeTogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucGF0aC5pIS5wdXNoKFtjeCAtIHgsIGN5IC0geV0pXHJcbiAgICAgICAgdGhpcy5wYXRoLm8hLnB1c2goW2N4IC0gdGhpcy5jdXJyZW50WCwgY3kgLSB0aGlzLmN1cnJlbnRZXSlcclxuICAgICAgICB0aGlzLnBhdGgudiEucHVzaChbeCwgeV0pXHJcbiAgICAgICAgdGhpcy5vZmZzZXRYID0gTWF0aC5taW4odGhpcy5vZmZzZXRYLCAuLi50aGlzLmNhbGN1bGF0ZUJlemllck1pbk1heCh0aGlzLmN1cnJlbnRYLCBjeCwgY3gsIHgpKVxyXG4gICAgICAgIHRoaXMub2Zmc2V0WSA9IE1hdGgubWluKHRoaXMub2Zmc2V0WSwgLi4udGhpcy5jYWxjdWxhdGVCZXppZXJNaW5NYXgodGhpcy5jdXJyZW50WSwgY3ksIGN5LCB5KSlcclxuICAgICAgICB0aGlzLnVwZGF0ZVhZKHgsIHkpXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcXVhZHJhdGljQmV6aWVyQ3VydmVUb1JlbGF0aXZlKGN4OiBudW1iZXIsIGN5OiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5xdWFkcmF0aWNCZXppZXJDdXJ2ZVRvKHRoaXMuY3VycmVudFggKyBjeCwgdGhpcy5jdXJyZW50WSArIGN5LCB0aGlzLmN1cnJlbnRYICsgeCwgdGhpcy5jdXJyZW50WSArIHkpXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYXJjVG8oXHJcbiAgICAgICAgcng6IG51bWJlcixcclxuICAgICAgICByeTogbnVtYmVyLFxyXG4gICAgICAgIHhBeGlzUm90YXRpb246IG51bWJlcixcclxuICAgICAgICBsYXJnZUFyY0ZsYWc6IG51bWJlcixcclxuICAgICAgICBzd2VlcEZsYWc6IG51bWJlcixcclxuICAgICAgICB4OiBudW1iZXIsXHJcbiAgICAgICAgeTogbnVtYmVyXHJcbiAgICApIHtcclxuICAgICAgICBjb25zdCBjU2VyaWVzID0gUGF0aE1ha2VyLmEyYyh0aGlzLmN1cnJlbnRYLCB0aGlzLmN1cnJlbnRZLCByeCwgcnksIHhBeGlzUm90YXRpb24sIGxhcmdlQXJjRmxhZywgc3dlZXBGbGFnLCB4LCB5KSBhcyBudW1iZXJbXVxyXG4gICAgICAgIHdoaWxlIChjU2VyaWVzLmxlbmd0aCA+PSA2KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlvdkxpc3QgPSBjU2VyaWVzLnNwbGljZSgwLCA2KVxyXG4gICAgICAgICAgICB0aGlzLnBhdGguaSEucHVzaChbaW92TGlzdFsyXSAtIGlvdkxpc3RbNF0sIGlvdkxpc3RbM10gLSBpb3ZMaXN0WzVdXSlcclxuICAgICAgICAgICAgdGhpcy5wYXRoLm8hLnB1c2goW2lvdkxpc3RbMF0gLSB0aGlzLmN1cnJlbnRYLCBpb3ZMaXN0WzFdIC0gdGhpcy5jdXJyZW50WV0pXHJcbiAgICAgICAgICAgIHRoaXMucGF0aC52IS5wdXNoKFtpb3ZMaXN0WzRdLCBpb3ZMaXN0WzVdXSlcclxuICAgICAgICAgICAgdGhpcy5vZmZzZXRYID0gTWF0aC5taW4odGhpcy5vZmZzZXRYLCAuLi50aGlzLmNhbGN1bGF0ZUJlemllck1pbk1heCh0aGlzLmN1cnJlbnRYLCBpb3ZMaXN0WzBdLCBpb3ZMaXN0WzJdLCBpb3ZMaXN0WzRdKSlcclxuICAgICAgICAgICAgdGhpcy5vZmZzZXRZID0gTWF0aC5taW4odGhpcy5vZmZzZXRZLCAuLi50aGlzLmNhbGN1bGF0ZUJlemllck1pbk1heCh0aGlzLmN1cnJlbnRZLCBpb3ZMaXN0WzFdLCBpb3ZMaXN0WzNdLCBpb3ZMaXN0WzVdKSlcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVYWShpb3ZMaXN0WzRdLCBpb3ZMaXN0WzVdKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBhcmNUb1JlbGF0aXZlKFxyXG4gICAgICAgIHJ4OiBudW1iZXIsXHJcbiAgICAgICAgcnk6IG51bWJlcixcclxuICAgICAgICB4QXhpc1JvdGF0aW9uOiBudW1iZXIsXHJcbiAgICAgICAgbGFyZ2VBcmNGbGFnOiBudW1iZXIsXHJcbiAgICAgICAgc3dlZXBGbGFnOiBudW1iZXIsXHJcbiAgICAgICAgeDogbnVtYmVyLFxyXG4gICAgICAgIHk6IG51bWJlclxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5hcmNUbyhyeCwgcnksIHhBeGlzUm90YXRpb24sIGxhcmdlQXJjRmxhZywgc3dlZXBGbGFnLCB0aGlzLmN1cnJlbnRYICsgeCwgdGhpcy5jdXJyZW50WSArIHkpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYTJjKHgxOiBudW1iZXIsIHkxOiBudW1iZXIsIHJ4OiBudW1iZXIsIHJ5OiBudW1iZXIsIGFuZ2xlOiBudW1iZXIsIGxhcmdlX2FyY19mbGFnOiBudW1iZXIsIHN3ZWVwX2ZsYWc6IG51bWJlciwgeDI6IG51bWJlciwgeTI6IG51bWJlciwgcmVjdXJzaXZlPzogbnVtYmVyW10pOiBudW1iZXJbXSB8IG51bWJlcltdW10ge1xyXG4gICAgICAgIC8vIGZvciBtb3JlIGluZm9ybWF0aW9uIG9mIHdoZXJlIHRoaXMgTWF0aCBjYW1lIGZyb20gdmlzaXQ6XHJcbiAgICAgICAgLy8gaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvaW1wbG5vdGUuaHRtbCNBcmNJbXBsZW1lbnRhdGlvbk5vdGVzXHJcbiAgICAgICAgdmFyIF8xMjAgPSBNYXRoLlBJICogMTIwIC8gMTgwLFxyXG4gICAgICAgICAgICByYWQgPSBNYXRoLlBJIC8gMTgwICogKCthbmdsZSB8fCAwKSxcclxuICAgICAgICAgICAgcmVzOiBudW1iZXJbXSA9IFtdLFxyXG4gICAgICAgICAgICB4eSxcclxuICAgICAgICAgICAgcm90YXRlID0gKHg6IG51bWJlciwgeTogbnVtYmVyLCByYWQ6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIFggPSB4ICogTWF0aC5jb3MocmFkKSAtIHkgKiBNYXRoLnNpbihyYWQpLFxyXG4gICAgICAgICAgICAgICAgICAgIFkgPSB4ICogTWF0aC5zaW4ocmFkKSArIHkgKiBNYXRoLmNvcyhyYWQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgeDogWCwgeTogWSB9O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGlmICghcnggfHwgIXJ5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbeDEsIHkxLCB4MiwgeTIsIHgyLCB5Ml07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcmVjdXJzaXZlKSB7XHJcbiAgICAgICAgICAgIHh5ID0gcm90YXRlKHgxLCB5MSwgLXJhZCk7XHJcbiAgICAgICAgICAgIHgxID0geHkueDtcclxuICAgICAgICAgICAgeTEgPSB4eS55O1xyXG4gICAgICAgICAgICB4eSA9IHJvdGF0ZSh4MiwgeTIsIC1yYWQpO1xyXG4gICAgICAgICAgICB4MiA9IHh5Lng7XHJcbiAgICAgICAgICAgIHkyID0geHkueTtcclxuICAgICAgICAgICAgdmFyIGNvcyA9IE1hdGguY29zKE1hdGguUEkgLyAxODAgKiBhbmdsZSksXHJcbiAgICAgICAgICAgICAgICBzaW4gPSBNYXRoLnNpbihNYXRoLlBJIC8gMTgwICogYW5nbGUpLFxyXG4gICAgICAgICAgICAgICAgeCA9ICh4MSAtIHgyKSAvIDIsXHJcbiAgICAgICAgICAgICAgICB5ID0gKHkxIC0geTIpIC8gMjtcclxuICAgICAgICAgICAgdmFyIGggPSB4ICogeCAvIChyeCAqIHJ4KSArIHkgKiB5IC8gKHJ5ICogcnkpO1xyXG4gICAgICAgICAgICBpZiAoaCA+IDEpIHtcclxuICAgICAgICAgICAgICAgIGggPSBNYXRoLnNxcnQoaCk7XHJcbiAgICAgICAgICAgICAgICByeCA9IGggKiByeDtcclxuICAgICAgICAgICAgICAgIHJ5ID0gaCAqIHJ5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciByeDIgPSByeCAqIHJ4LFxyXG4gICAgICAgICAgICAgICAgcnkyID0gcnkgKiByeSxcclxuICAgICAgICAgICAgICAgIGsgPSAobGFyZ2VfYXJjX2ZsYWcgPT0gc3dlZXBfZmxhZyA/IC0xIDogMSkgKlxyXG4gICAgICAgICAgICAgICAgICAgIE1hdGguc3FydChNYXRoLmFicygocngyICogcnkyIC0gcngyICogeSAqIHkgLSByeTIgKiB4ICogeCkgLyAocngyICogeSAqIHkgKyByeTIgKiB4ICogeCkpKSxcclxuICAgICAgICAgICAgICAgIGN4ID0gayAqIHJ4ICogeSAvIHJ5ICsgKHgxICsgeDIpIC8gMixcclxuICAgICAgICAgICAgICAgIGN5ID0gayAqIC1yeSAqIHggLyByeCArICh5MSArIHkyKSAvIDIsXHJcbiAgICAgICAgICAgICAgICBmMSA9IE1hdGguYXNpbigoeTEgLSBjeSkgLyByeSksXHJcbiAgICAgICAgICAgICAgICBmMiA9IE1hdGguYXNpbigoeTIgLSBjeSkgLyByeSk7XHJcblxyXG4gICAgICAgICAgICBmMSA9IHgxIDwgY3ggPyBNYXRoLlBJIC0gZjEgOiBmMTtcclxuICAgICAgICAgICAgZjIgPSB4MiA8IGN4ID8gTWF0aC5QSSAtIGYyIDogZjI7XHJcbiAgICAgICAgICAgIGYxIDwgMCAmJiAoZjEgPSBNYXRoLlBJICogMiArIGYxKTtcclxuICAgICAgICAgICAgZjIgPCAwICYmIChmMiA9IE1hdGguUEkgKiAyICsgZjIpO1xyXG4gICAgICAgICAgICBpZiAoc3dlZXBfZmxhZyAmJiBmMSA+IGYyKSB7XHJcbiAgICAgICAgICAgICAgICBmMSA9IGYxIC0gTWF0aC5QSSAqIDI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFzd2VlcF9mbGFnICYmIGYyID4gZjEpIHtcclxuICAgICAgICAgICAgICAgIGYyID0gZjIgLSBNYXRoLlBJICogMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGYxID0gcmVjdXJzaXZlWzBdO1xyXG4gICAgICAgICAgICBmMiA9IHJlY3Vyc2l2ZVsxXTtcclxuICAgICAgICAgICAgY3ggPSByZWN1cnNpdmVbMl07XHJcbiAgICAgICAgICAgIGN5ID0gcmVjdXJzaXZlWzNdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZGYgPSBmMiAtIGYxO1xyXG4gICAgICAgIGlmIChNYXRoLmFicyhkZikgPiBfMTIwKSB7XHJcbiAgICAgICAgICAgIHZhciBmMm9sZCA9IGYyLFxyXG4gICAgICAgICAgICAgICAgeDJvbGQgPSB4MixcclxuICAgICAgICAgICAgICAgIHkyb2xkID0geTI7XHJcbiAgICAgICAgICAgIGYyID0gZjEgKyBfMTIwICogKHN3ZWVwX2ZsYWcgJiYgZjIgPiBmMSA/IDEgOiAtMSk7XHJcbiAgICAgICAgICAgIHgyID0gY3ggKyByeCAqIE1hdGguY29zKGYyKTtcclxuICAgICAgICAgICAgeTIgPSBjeSArIHJ5ICogTWF0aC5zaW4oZjIpO1xyXG4gICAgICAgICAgICByZXMgPSB0aGlzLmEyYyh4MiwgeTIsIHJ4LCByeSwgYW5nbGUsIDAsIHN3ZWVwX2ZsYWcsIHgyb2xkLCB5Mm9sZCwgW2YyLCBmMm9sZCwgY3gsIGN5XSkgYXMgbnVtYmVyW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRmID0gZjIgLSBmMTtcclxuICAgICAgICB2YXIgYzEgPSBNYXRoLmNvcyhmMSksXHJcbiAgICAgICAgICAgIHMxID0gTWF0aC5zaW4oZjEpLFxyXG4gICAgICAgICAgICBjMiA9IE1hdGguY29zKGYyKSxcclxuICAgICAgICAgICAgczIgPSBNYXRoLnNpbihmMiksXHJcbiAgICAgICAgICAgIHQgPSBNYXRoLnRhbihkZiAvIDQpLFxyXG4gICAgICAgICAgICBoeCA9IDQgLyAzICogcnggKiB0LFxyXG4gICAgICAgICAgICBoeSA9IDQgLyAzICogcnkgKiB0LFxyXG4gICAgICAgICAgICBtMSA9IFt4MSwgeTFdLFxyXG4gICAgICAgICAgICBtMiA9IFt4MSArIGh4ICogczEsIHkxIC0gaHkgKiBjMV0sXHJcbiAgICAgICAgICAgIG0zID0gW3gyICsgaHggKiBzMiwgeTIgLSBoeSAqIGMyXSxcclxuICAgICAgICAgICAgbTQgPSBbeDIsIHkyXTtcclxuICAgICAgICBtMlswXSA9IDIgKiBtMVswXSAtIG0yWzBdO1xyXG4gICAgICAgIG0yWzFdID0gMiAqIG0xWzFdIC0gbTJbMV07XHJcbiAgICAgICAgaWYgKHJlY3Vyc2l2ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gW20yLCBtMywgbTRdLmNvbmNhdChyZXMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlcyA9IFttMiwgbTMsIG00XS5jb25jYXQocmVzKS5qb2luKCkuc3BsaXQoXCIsXCIpLm1hcCh4ID0+IHBhcnNlRmxvYXQoeCkpO1xyXG4gICAgICAgICAgICB2YXIgbmV3cmVzID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBpaSA9IHJlcy5sZW5ndGg7IGkgPCBpaTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdyZXNbaV0gPSBpICUgMiA/IHJvdGF0ZShyZXNbaSAtIDFdLCByZXNbaV0sIHJhZCkueSA6IHJvdGF0ZShyZXNbaV0sIHJlc1tpICsgMV0sIHJhZCkueDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3cmVzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xvc2VQYXRoKCkge1xyXG4gICAgICAgIHRoaXMucGF0aC5jID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1bmlmb3JtKCkge1xyXG4gICAgICAgIHdoaWxlICh0aGlzLnBhdGgubyEubGVuZ3RoIDwgdGhpcy5wYXRoLmkhLmxlbmd0aClcclxuICAgICAgICAgICAgdGhpcy5wYXRoLm8hLnB1c2goWzAsIDBdKVxyXG4gICAgICAgIHRoaXMucGF0aC52IS5mb3JFYWNoKHZhbHVlID0+IHtcclxuICAgICAgICAgICAgdmFsdWVbMF0gLT0gdGhpcy5vZmZzZXRYXHJcbiAgICAgICAgICAgIHZhbHVlWzFdIC09IHRoaXMub2Zmc2V0WVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5vZmZzZXRYID0gMFxyXG4gICAgICAgIHRoaXMub2Zmc2V0WSA9IDBcclxuICAgIH1cclxufSJdfQ==

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

var _svgPathParser = __webpack_require__(/*! svg-path-parser */ "./node_modules/svg-path-parser/index.js");

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
    var pathDataSeries = (0, _svgPathParser.parseSVG)(pathData);

    var _pathMaker3 = new _path.PathMaker();

    var pathDataWithType;
    pathDataSeries.forEach(function (pathDataItem) {
      switch (pathDataItem.code) {
        case 'M':
          pathDataWithType = pathDataItem;

          _pathMaker3.moveTo(pathDataWithType.x, pathDataWithType.y);

          break;

        case 'L':
          pathDataWithType = pathDataItem;

          _pathMaker3.lineTo(pathDataWithType.x, pathDataWithType.y);

          break;

        case 'l':
          pathDataWithType = pathDataItem;

          _pathMaker3.lineToRelative(pathDataWithType.x, pathDataWithType.y);

          break;

        case 'H':
          pathDataWithType = pathDataItem;

          _pathMaker3.horizontalTo(pathDataWithType.x);

          break;

        case 'h':
          pathDataWithType = pathDataItem;

          _pathMaker3.horizontalToRelative(pathDataWithType.x);

          break;

        case 'V':
          pathDataWithType = pathDataItem;

          _pathMaker3.verticalTo(pathDataWithType.y);

          break;

        case 'v':
          pathDataWithType = pathDataItem;

          _pathMaker3.verticalToRelative(pathDataWithType.y);

          break;

        case 'C':
          pathDataWithType = pathDataItem;

          _pathMaker3.cubicBezierCurveTo(pathDataWithType.x1, pathDataWithType.y1, pathDataWithType.x2, pathDataWithType.y2, pathDataWithType.x, pathDataWithType.y);

          break;

        case 'c':
          pathDataWithType = pathDataItem;

          _pathMaker3.cubicBezierCurveToRelative(pathDataWithType.x1, pathDataWithType.y1, pathDataWithType.x2, pathDataWithType.y2, pathDataWithType.x, pathDataWithType.y);

          break;

        case 'Q':
          pathDataWithType = pathDataItem;

          _pathMaker3.quadraticBezierCurveTo(pathDataWithType.x1, pathDataWithType.y1, pathDataWithType.x, pathDataWithType.y);

          break;

        case 'q':
          pathDataWithType = pathDataItem;

          _pathMaker3.quadraticBezierCurveToRelative(pathDataWithType.x1, pathDataWithType.y1, pathDataWithType.x, pathDataWithType.y);

          break;

        case 'A':
          pathDataWithType = pathDataItem;

          _pathMaker3.arcTo(pathDataWithType.rx, pathDataWithType.ry, pathDataWithType.xAxisRotation, ~~pathDataWithType.largeArc, ~~pathDataWithType.sweep, pathDataWithType.x, pathDataWithType.y);

          break;

        case 'a':
          pathDataWithType = pathDataItem;

          _pathMaker3.arcToRelative(pathDataWithType.rx, pathDataWithType.ry, pathDataWithType.xAxisRotation, ~~pathDataWithType.largeArc, ~~pathDataWithType.sweep, pathDataWithType.x, pathDataWithType.y);

          break;

        case 'Z':
        case 'z':
          _pathMaker3.closePath();

          break;

        default:
          console.error(pathDataItem);
          throw new Error('No implementation found for this path command.');
      }
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZW5kZXIudHMiXSwibmFtZXMiOlsicmVuZGVyIiwiZG9tIiwiYmFzZURvbSIsIlNWR1RleHRFbGVtZW50IiwiU1ZHSW1hZ2VFbGVtZW50IiwiU1ZHR0VsZW1lbnQiLCJyZW5kZXJHcm91cCIsInJlbmRlckdseXBoIiwiYWRkVmlzdWFsRW5jb2RpbmdzIiwiaXRlbXMiLCJzdHlsZXMiLCJzdHJva2UiLCJwdXNoIiwidHkiLCJjIiwiayIsInNwbGl0Iiwic2xpY2UiLCJtYXAiLCJyYXciLCJwYXJzZUludCIsImNvbmNhdCIsIm8iLCJwYXJzZUZsb2F0Iiwic3Ryb2tlT3BhY2l0eSIsInciLCJzdHJva2VXaWR0aCIsImxjIiwic3Ryb2tlTGluZWNhcCIsImxqIiwic3Ryb2tlTGluZWpvaW4iLCJmaWxsIiwiZmlsbE9wYWNpdHkiLCJwb3NYIiwicG9zWSIsImJhc2VUcmFuc2Zvcm0iLCJiYXNlQkJveCIsImdldEJCb3giLCJyZWZCQm94IiwiZSIsIngiLCJmIiwieSIsInAiLCJhIiwicyIsInIiLCJvcGFjaXR5Iiwic2siLCJzYSIsImdyb3VwIiwiaXQiLCJibSIsImhkIiwicG9zdEFjdGlvbnMiLCJwYXRoTWFrZXIiLCJ1bmlmb3JtIiwia3MiLCJwYXRoIiwibm0iLCJpZCIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJTVkdDaXJjbGVFbGVtZW50Iiwic3ZnTGVuZ3RoIiwiYmFzZVZhbCIsImNvbnZlcnRUb1NwZWNpZmllZFVuaXRzIiwiU1ZHTGVuZ3RoIiwiU1ZHX0xFTkdUSFRZUEVfUFgiLCJ2YWx1ZUluU3BlY2lmaWVkVW5pdHMiLCJQYXRoTWFrZXIiLCJtb3ZlVG8iLCJhcmNUbyIsImNsb3NlUGF0aCIsIlNWR0VsbGlwc2VFbGVtZW50IiwibWFwS2V5Iiwia2V5IiwicngiLCJyeSIsIlNWR0xpbmVFbGVtZW50IiwieDEiLCJ4MiIsInkxIiwieTIiLCJvZmZzZXRYIiwiTWF0aCIsIm1pbiIsIm9mZnNldFkiLCJsaW5lVG8iLCJTVkdQYXRoRWxlbWVudCIsInBhdGhEYXRhIiwiZ2V0QXR0cmlidXRlIiwicGF0aERhdGFTZXJpZXMiLCJwYXRoRGF0YVdpdGhUeXBlIiwiZm9yRWFjaCIsInBhdGhEYXRhSXRlbSIsImNvZGUiLCJsaW5lVG9SZWxhdGl2ZSIsImhvcml6b250YWxUbyIsImhvcml6b250YWxUb1JlbGF0aXZlIiwidmVydGljYWxUbyIsInZlcnRpY2FsVG9SZWxhdGl2ZSIsImN1YmljQmV6aWVyQ3VydmVUbyIsImN1YmljQmV6aWVyQ3VydmVUb1JlbGF0aXZlIiwicXVhZHJhdGljQmV6aWVyQ3VydmVUbyIsInF1YWRyYXRpY0JlemllckN1cnZlVG9SZWxhdGl2ZSIsInhBeGlzUm90YXRpb24iLCJsYXJnZUFyYyIsInN3ZWVwIiwiYXJjVG9SZWxhdGl2ZSIsImNvbnNvbGUiLCJlcnJvciIsIkVycm9yIiwiU1ZHUG9seWdvbkVsZW1lbnQiLCJTVkdQb2x5bGluZUVsZW1lbnQiLCJwb2ludHMiLCJsZW5ndGgiLCJpdGVyYWJsZVBvaW50cyIsIkFycmF5IiwicHJvdG90eXBlIiwiY2FsbCIsInJlZHVjZSIsInYiLCJpIiwiU1ZHUmVjdEVsZW1lbnQiLCJ3aWR0aCIsImhlaWdodCIsImNoaWxkTm9kZXMiLCJub2RlIiwiU1ZHR3JhcGhpY3NFbGVtZW50IiwicmVuZGVyUGxhaW5HbHlwaCIsInR5cGUiLCJhcmdzIiwicmVuZGVyVGV4dCIsImZvbnRMaXN0IiwiY29tcHV0ZWRTdHlsZSIsImZvbnRTaXplIiwiZm9udEZhbWlseSIsInRyaW0iLCJmb250U3R5bGUiLCJmb250V2VpZ2h0IiwiZm9udENvbG9yIiwidGV4dEFuY2hvciIsImZvbnROYW1lIiwiZm9udEV4aXN0IiwibGlzdCIsImZpbHRlciIsImZvbnQiLCJmRmFtaWx5IiwiZlN0eWxlIiwiZldlaWdodCIsImZOYW1lIiwidGV4dERhdGEiLCJkIiwidCIsImlubmVySFRNTCIsImoiLCJ0ciIsImxzIiwiZmMiLCJtIiwiZm9udERlZiIsInJlbmRlckltYWdlIiwiYXNzZXRMaXN0IiwiZG9tSGVpZ2h0VmFsIiwiZG9tV2lkdGhWYWwiLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZHJhd0ltYWdlIiwiZGF0YVVybCIsInRvRGF0YVVSTCIsImFzc2V0RXhpc3QiLCJhc3NldCIsImgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBR08sU0FBU0EsTUFBVCxDQUFnQkMsR0FBaEIsRUFBeUNDLE9BQXpDLEVBQXFGO0FBQ3hGLE1BQUlELEdBQUcsWUFBWUUsY0FBZixJQUFpQ0YsR0FBRyxZQUFZRyxlQUFwRCxFQUFxRTtBQUNqRSxXQUFPLEVBQVA7QUFDSCxHQUZELE1BRU8sSUFBSUgsR0FBRyxZQUFZSSxXQUFuQixFQUFnQztBQUNuQyxXQUFPQyxXQUFXLENBQUNMLEdBQUQsRUFBTUMsT0FBTixDQUFsQjtBQUNILEdBRk0sTUFFQTtBQUNILFdBQU9LLFdBQVcsQ0FBQ04sR0FBRCxFQUFNQyxPQUFOLENBQWxCO0FBQ0g7QUFDSjs7QUFJRCxTQUFTTSxrQkFBVCxDQUE0QkMsS0FBNUIsRUFBc0RDLE1BQXRELEVBQW1GVCxHQUFuRixFQUE2R0MsT0FBN0csRUFBMkk7QUFDdkksTUFBSVEsTUFBTSxDQUFDQyxNQUFQLElBQWlCRCxNQUFNLENBQUNDLE1BQVAsS0FBa0IsTUFBdkMsRUFBK0M7QUFDM0NGLElBQUFBLEtBQUssQ0FBQ0csSUFBTixDQUFXO0FBQ1BDLE1BQUFBLEVBQUUsRUFBRSxJQURHO0FBRVBDLE1BQUFBLENBQUMsRUFBRTtBQUNDQyxRQUFBQSxDQUFDLEVBQUVMLE1BQU0sQ0FBQ0MsTUFBUCxDQUFlSyxLQUFmLENBQXFCLEdBQXJCLEVBQTBCLENBQTFCLEVBQTZCQSxLQUE3QixDQUFtQyxHQUFuQyxFQUF3QyxDQUF4QyxFQUEyQ0EsS0FBM0MsQ0FBaUQsR0FBakQsRUFBc0RDLEtBQXRELENBQTRELENBQTVELEVBQStELENBQS9ELEVBQWtFQyxHQUFsRSxDQUFz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O0FBQ0FvRyxFQUFBQSxHQUFHLENBQUVFLFNBQUwsQ0FBZTFLLEdBQWYsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsRUFBMEJxSyxNQUFNLENBQUN6QyxLQUFqQyxFQUF3Q3lDLE1BQU0sQ0FBQ3hDLE1BQS9DO0FBRUEsTUFBTThDLE9BQU8sR0FBR04sTUFBTSxDQUFDTyxTQUFQLEVBQWhCOztBQUNBLE1BQUlWLFNBQUosRUFBZTtBQUNYLFFBQU1XLFVBQVUsR0FBR1gsU0FBUyxDQUFFakIsTUFBWCxDQUFrQixVQUFBNkIsS0FBSztBQUFBLGFBQUlBLEtBQUssQ0FBQ3BJLENBQU4sSUFBV2lJLE9BQWY7QUFBQSxLQUF2QixDQUFuQjtBQUNBLFFBQUlFLFVBQVUsQ0FBQzFELE1BQWYsRUFDSXhELEVBQUUsR0FBR2tILFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY2xILEVBQW5CO0FBQ1A7O0FBQ0QsTUFBTW1ILEtBQUssR0FBRztBQUNWQyxJQUFBQSxDQUFDLEVBQUVaLFlBQVksQ0FBQy9GLHFCQUROO0FBRVY1QyxJQUFBQSxDQUFDLEVBQUU0SSxXQUFXLENBQUNoRyxxQkFGTDtBQUdWVCxJQUFBQSxFQUFFLEVBQUZBLEVBSFU7QUFJVmpCLElBQUFBLENBQUMsRUFBRWlJLE9BSk87QUFLVnJJLElBQUFBLENBQUMsRUFBRTtBQUxPLEdBQWQ7QUFPQSxTQUFPLENBQUNxQixFQUFELEVBQUttSCxLQUFMLENBQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyb3VwU2hhcGUsIFRleHREYXRhLCBSZWZlcmVuY2VJRCwgUGF0aFNoYXBlLCBGaWxsU2hhcGUsIFN0cm9rZVNoYXBlLCBUcmFuc2Zvcm1TaGFwZSwgSW1hZ2VBc3NldCwgRm9udDEsIEZvbnRzLCBBc3NldHMgfSBmcm9tICcuL2FuaW1hdGlvbidcclxuaW1wb3J0IHsgUGF0aE1ha2VyIH0gZnJvbSAnLi9wYXRoJ1xyXG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkL3Y0J1xyXG5pbXBvcnQgeyBwYXJzZVNWRywgTW92ZVRvQ29tbWFuZCwgTGluZVRvQ29tbWFuZCwgSG9yaXpvbnRhbExpbmVUb0NvbW1hbmQsIFZlcnRpY2FsTGluZVRvQ29tbWFuZCwgQ3VydmVUb0NvbW1hbmQsIFF1YWRyYXRpY0N1cnZlVG9Db21tYW5kLCBFbGxpcHRpY2FsQXJjQ29tbWFuZCB9IGZyb20gJ3N2Zy1wYXRoLXBhcnNlcidcclxuaW1wb3J0IHsgY2FsY3VsYXRlQmFzZVRyYW5zZm9ybSwgZW5jb2RlTGluZUpvaW4sIGVuY29kZUxpbmVDYXAsIGVuY29kZVRleHRBbmNob3IgfSBmcm9tICcuL2hlbHBlcidcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKGRvbTogU1ZHR3JhcGhpY3NFbGVtZW50LCBiYXNlRG9tPzogU1ZHR3JhcGhpY3NFbGVtZW50KTogR3JvdXBTaGFwZVtdIHtcclxuICAgIGlmIChkb20gaW5zdGFuY2VvZiBTVkdUZXh0RWxlbWVudCB8fCBkb20gaW5zdGFuY2VvZiBTVkdJbWFnZUVsZW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gW11cclxuICAgIH0gZWxzZSBpZiAoZG9tIGluc3RhbmNlb2YgU1ZHR0VsZW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gcmVuZGVyR3JvdXAoZG9tLCBiYXNlRG9tKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gcmVuZGVyR2x5cGgoZG9tLCBiYXNlRG9tKVxyXG4gICAgfVxyXG59XHJcblxyXG50eXBlIFZpc3VhbEdyb3VwSXRlbSA9IFBhdGhTaGFwZSB8IEZpbGxTaGFwZSB8IFN0cm9rZVNoYXBlIHwgVHJhbnNmb3JtU2hhcGVcclxuXHJcbmZ1bmN0aW9uIGFkZFZpc3VhbEVuY29kaW5ncyhpdGVtczogVmlzdWFsR3JvdXBJdGVtW10sIHN0eWxlczogQ1NTU3R5bGVEZWNsYXJhdGlvbiwgZG9tPzogU1ZHR3JhcGhpY3NFbGVtZW50LCBiYXNlRG9tPzogU1ZHR3JhcGhpY3NFbGVtZW50KSB7XHJcbiAgICBpZiAoc3R5bGVzLnN0cm9rZSAmJiBzdHlsZXMuc3Ryb2tlICE9PSAnbm9uZScpIHtcclxuICAgICAgICBpdGVtcy5wdXNoKHtcclxuICAgICAgICAgICAgdHk6ICdzdCcsXHJcbiAgICAgICAgICAgIGM6IHtcclxuICAgICAgICAgICAgICAgIGs6IHN0eWxlcy5zdHJva2UhLnNwbGl0KCcoJylbMV0uc3BsaXQoJyknKVswXS5zcGxpdCgnLCcpLnNsaWNlKDAsIDMpLm1hcCgocmF3OiBzdHJpbmcpID0+IHBhcnNlSW50KHJhdykgLyAyNTUpLmNvbmNhdCgxKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvOiB7XHJcbiAgICAgICAgICAgICAgICBrOiBwYXJzZUZsb2F0KHN0eWxlcy5zdHJva2VPcGFjaXR5IHx8ICcxJykgKiAxMDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdzoge1xyXG4gICAgICAgICAgICAgICAgazogcGFyc2VGbG9hdChzdHlsZXMuc3Ryb2tlV2lkdGggfHwgJzEnKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsYzogZW5jb2RlTGluZUNhcChzdHlsZXMuc3Ryb2tlTGluZWNhcCksXHJcbiAgICAgICAgICAgIGxqOiBlbmNvZGVMaW5lSm9pbihzdHlsZXMuc3Ryb2tlTGluZWpvaW4pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGlmIChzdHlsZXMuZmlsbCAmJiBzdHlsZXMuZmlsbCAhPT0gJ25vbmUnKSB7XHJcbiAgICAgICAgaXRlbXMucHVzaCh7XHJcbiAgICAgICAgICAgIHR5OiAnZmwnLFxyXG4gICAgICAgICAgICBjOiB7XHJcbiAgICAgICAgICAgICAgICBrOiBzdHlsZXMuZmlsbCEuc3BsaXQoJygnKVsxXS5zcGxpdCgnKScpWzBdLnNwbGl0KCcsJykuc2xpY2UoMCwgMykubWFwKChyYXc6IHN0cmluZykgPT4gcGFyc2VJbnQocmF3KSAvIDI1NSkuY29uY2F0KDEpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG86IHtcclxuICAgICAgICAgICAgICAgIGs6IHBhcnNlRmxvYXQoc3R5bGVzLmZpbGxPcGFjaXR5IHx8ICcxJykgKiAxMDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBsZXQgcG9zWCA9IDAsIHBvc1kgPSAwXHJcbiAgICBpZiAoZG9tICYmIGJhc2VEb20pIHtcclxuICAgICAgICBjb25zdCBiYXNlVHJhbnNmb3JtID0gY2FsY3VsYXRlQmFzZVRyYW5zZm9ybShkb20sIGJhc2VEb20pXHJcbiAgICAgICAgY29uc3QgYmFzZUJCb3ggPSBiYXNlRG9tLmdldEJCb3goKVxyXG4gICAgICAgIGNvbnN0IHJlZkJCb3ggPSBkb20uZ2V0QkJveCgpXHJcbiAgICAgICAgcG9zWCA9IGJhc2VUcmFuc2Zvcm0uZSArIHJlZkJCb3gueCAtIGJhc2VCQm94LnhcclxuICAgICAgICBwb3NZID0gYmFzZVRyYW5zZm9ybS5mICsgcmVmQkJveC55IC0gYmFzZUJCb3gueVxyXG4gICAgfVxyXG4gICAgaXRlbXMucHVzaCh7XHJcbiAgICAgICAgdHk6IFwidHJcIixcclxuICAgICAgICBwOiB7XHJcbiAgICAgICAgICAgIGs6IFtcclxuICAgICAgICAgICAgICAgIHBvc1gsXHJcbiAgICAgICAgICAgICAgICBwb3NZXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGE6IHtcclxuICAgICAgICAgICAgazogW1xyXG4gICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgczoge1xyXG4gICAgICAgICAgICBrOiBbXHJcbiAgICAgICAgICAgICAgICAxMDAsXHJcbiAgICAgICAgICAgICAgICAxMDBcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcjoge1xyXG4gICAgICAgICAgICBrOiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvOiB7XHJcbiAgICAgICAgICAgIGs6IHBhcnNlRmxvYXQoc3R5bGVzLm9wYWNpdHkgfHwgJzEnKSAqIDEwMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2s6IHtcclxuICAgICAgICAgICAgazogMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2E6IHtcclxuICAgICAgICAgICAgazogMFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJHbHlwaChkb206IFNWR0dyYXBoaWNzRWxlbWVudCwgYmFzZURvbT86IFNWR0dyYXBoaWNzRWxlbWVudCk6IEdyb3VwU2hhcGVbXSB7XHJcbiAgICBjb25zdCBncm91cDogR3JvdXBTaGFwZSA9IHtcclxuICAgICAgICB0eTogXCJnclwiLFxyXG4gICAgICAgIGl0OiBbXSxcclxuICAgICAgICBibTogMCxcclxuICAgICAgICBoZDogZmFsc2VcclxuICAgIH1cclxuICAgIGNvbnN0IHBvc3RBY3Rpb25zID0gKHBhdGhNYWtlcjogUGF0aE1ha2VyKSA9PiB7XHJcbiAgICAgICAgcGF0aE1ha2VyLnVuaWZvcm0oKVxyXG4gICAgICAgIGdyb3VwLml0IS5wdXNoKHtcclxuICAgICAgICAgICAgdHk6ICdzaCcsXHJcbiAgICAgICAgICAgIGtzOiB7XHJcbiAgICAgICAgICAgICAgICBrOiBwYXRoTWFrZXIucGF0aCxcclxuICAgICAgICAgICAgICAgIGE6IDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbm06IGRvbS5pZCxcclxuICAgICAgICAgICAgaGQ6IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCBzdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb20pXHJcbiAgICAgICAgYWRkVmlzdWFsRW5jb2RpbmdzKGdyb3VwLml0ISBhcyBWaXN1YWxHcm91cEl0ZW1bXSwgc3R5bGVzLCBkb20sIGJhc2VEb20pXHJcbiAgICB9XHJcbiAgICBpZiAoZG9tIGluc3RhbmNlb2YgU1ZHQ2lyY2xlRWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IHN2Z0xlbmd0aCA9IGRvbS5yLmJhc2VWYWxcclxuICAgICAgICBzdmdMZW5ndGguY29udmVydFRvU3BlY2lmaWVkVW5pdHMoU1ZHTGVuZ3RoLlNWR19MRU5HVEhUWVBFX1BYKVxyXG4gICAgICAgIGNvbnN0IHIgPSBzdmdMZW5ndGgudmFsdWVJblNwZWNpZmllZFVuaXRzXHJcbiAgICAgICAgY29uc3QgcGF0aE1ha2VyID0gbmV3IFBhdGhNYWtlcigpXHJcbiAgICAgICAgcGF0aE1ha2VyLm1vdmVUbyhyLCAwKVxyXG4gICAgICAgIHBhdGhNYWtlci5hcmNUbyhyLCByLCAwLCAxLCAwLCByLCAyICogcilcclxuICAgICAgICBwYXRoTWFrZXIuYXJjVG8ociwgciwgMCwgMSwgMCwgciwgMClcclxuICAgICAgICBwYXRoTWFrZXIuY2xvc2VQYXRoKClcclxuICAgICAgICBwb3N0QWN0aW9ucyhwYXRoTWFrZXIpXHJcbiAgICB9IGVsc2UgaWYgKGRvbSBpbnN0YW5jZW9mIFNWR0VsbGlwc2VFbGVtZW50KSB7XHJcbiAgICAgICAgY29uc3QgbWFwS2V5OiAoJ3J4JyB8ICdyeScpW10gPSBbJ3J4JywgJ3J5J11cclxuICAgICAgICBjb25zdCBbcngsIHJ5XSA9IG1hcEtleS5tYXAoa2V5ID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3ZnTGVuZ3RoID0gZG9tW2tleV0uYmFzZVZhbFxyXG4gICAgICAgICAgICBzdmdMZW5ndGguY29udmVydFRvU3BlY2lmaWVkVW5pdHMoU1ZHTGVuZ3RoLlNWR19MRU5HVEhUWVBFX1BYKVxyXG4gICAgICAgICAgICByZXR1cm4gc3ZnTGVuZ3RoLnZhbHVlSW5TcGVjaWZpZWRVbml0c1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc3QgcGF0aE1ha2VyID0gbmV3IFBhdGhNYWtlcigpXHJcbiAgICAgICAgcGF0aE1ha2VyLm1vdmVUbyhyeCwgMClcclxuICAgICAgICBwYXRoTWFrZXIuYXJjVG8ocngsIHJ5LCAwLCAxLCAwLCByeCwgMiAqIHJ5KVxyXG4gICAgICAgIHBhdGhNYWtlci5hcmNUbyhyeCwgcnksIDAsIDEsIDAsIHJ4LCAwKVxyXG4gICAgICAgIHBhdGhNYWtlci5jbG9zZVBhdGgoKVxyXG4gICAgICAgIHBvc3RBY3Rpb25zKHBhdGhNYWtlcilcclxuICAgIH0gZWxzZSBpZiAoZG9tIGluc3RhbmNlb2YgU1ZHTGluZUVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBtYXBLZXk6ICgneDEnIHwgJ3gyJyB8ICd5MScgfCAneTInKVtdID0gWyd4MScsICd4MicsICd5MScsICd5MiddXHJcbiAgICAgICAgY29uc3QgW3gxLCB4MiwgeTEsIHkyXSA9IG1hcEtleS5tYXAoa2V5ID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3ZnTGVuZ3RoID0gZG9tW2tleV0uYmFzZVZhbFxyXG4gICAgICAgICAgICBzdmdMZW5ndGguY29udmVydFRvU3BlY2lmaWVkVW5pdHMoU1ZHTGVuZ3RoLlNWR19MRU5HVEhUWVBFX1BYKVxyXG4gICAgICAgICAgICByZXR1cm4gc3ZnTGVuZ3RoLnZhbHVlSW5TcGVjaWZpZWRVbml0c1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0WCA9IE1hdGgubWluKHgxLCB4MilcclxuICAgICAgICBjb25zdCBvZmZzZXRZID0gTWF0aC5taW4oeTEsIHkyKVxyXG4gICAgICAgIGNvbnN0IHBhdGhNYWtlciA9IG5ldyBQYXRoTWFrZXIoKVxyXG4gICAgICAgIHBhdGhNYWtlci5tb3ZlVG8oeDEgLSBvZmZzZXRYLCB5MSAtIG9mZnNldFkpXHJcbiAgICAgICAgcGF0aE1ha2VyLmxpbmVUbyh4MiAtIG9mZnNldFgsIHkyIC0gb2Zmc2V0WSlcclxuICAgICAgICBwb3N0QWN0aW9ucyhwYXRoTWFrZXIpXHJcbiAgICB9IGVsc2UgaWYgKGRvbSBpbnN0YW5jZW9mIFNWR1BhdGhFbGVtZW50KSB7XHJcbiAgICAgICAgY29uc3QgcGF0aERhdGEgPSBkb20uZ2V0QXR0cmlidXRlKCdkJykgfHwgJydcclxuICAgICAgICBjb25zdCBwYXRoRGF0YVNlcmllcyA9IHBhcnNlU1ZHKHBhdGhEYXRhKVxyXG4gICAgICAgIGNvbnN0IHBhdGhNYWtlciA9IG5ldyBQYXRoTWFrZXIoKVxyXG4gICAgICAgIGxldCBwYXRoRGF0YVdpdGhUeXBlO1xyXG4gICAgICAgIHBhdGhEYXRhU2VyaWVzLmZvckVhY2gocGF0aERhdGFJdGVtID0+IHtcclxuICAgICAgICAgICAgc3dpdGNoIChwYXRoRGF0YUl0ZW0uY29kZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnTSc6XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aERhdGFXaXRoVHlwZSA9IHBhdGhEYXRhSXRlbSBhcyBNb3ZlVG9Db21tYW5kXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aE1ha2VyLm1vdmVUbyhwYXRoRGF0YVdpdGhUeXBlLngsIHBhdGhEYXRhV2l0aFR5cGUueSlcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnTCc6XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aERhdGFXaXRoVHlwZSA9IHBhdGhEYXRhSXRlbSBhcyBMaW5lVG9Db21tYW5kXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aE1ha2VyLmxpbmVUbyhwYXRoRGF0YVdpdGhUeXBlLngsIHBhdGhEYXRhV2l0aFR5cGUueSlcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnbCc6XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aERhdGFXaXRoVHlwZSA9IHBhdGhEYXRhSXRlbSBhcyBMaW5lVG9Db21tYW5kXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aE1ha2VyLmxpbmVUb1JlbGF0aXZlKHBhdGhEYXRhV2l0aFR5cGUueCwgcGF0aERhdGFXaXRoVHlwZS55KVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBjYXNlICdIJzpcclxuICAgICAgICAgICAgICAgICAgICBwYXRoRGF0YVdpdGhUeXBlID0gcGF0aERhdGFJdGVtIGFzIEhvcml6b250YWxMaW5lVG9Db21tYW5kXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aE1ha2VyLmhvcml6b250YWxUbyhwYXRoRGF0YVdpdGhUeXBlLngpXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2gnOlxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGhEYXRhV2l0aFR5cGUgPSBwYXRoRGF0YUl0ZW0gYXMgSG9yaXpvbnRhbExpbmVUb0NvbW1hbmRcclxuICAgICAgICAgICAgICAgICAgICBwYXRoTWFrZXIuaG9yaXpvbnRhbFRvUmVsYXRpdmUocGF0aERhdGFXaXRoVHlwZS54KVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBjYXNlICdWJzpcclxuICAgICAgICAgICAgICAgICAgICBwYXRoRGF0YVdpdGhUeXBlID0gcGF0aERhdGFJdGVtIGFzIFZlcnRpY2FsTGluZVRvQ29tbWFuZFxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGhNYWtlci52ZXJ0aWNhbFRvKHBhdGhEYXRhV2l0aFR5cGUueSlcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgY2FzZSAndic6XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aERhdGFXaXRoVHlwZSA9IHBhdGhEYXRhSXRlbSBhcyBWZXJ0aWNhbExpbmVUb0NvbW1hbmRcclxuICAgICAgICAgICAgICAgICAgICBwYXRoTWFrZXIudmVydGljYWxUb1JlbGF0aXZlKHBhdGhEYXRhV2l0aFR5cGUueSlcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnQyc6XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aERhdGFXaXRoVHlwZSA9IHBhdGhEYXRhSXRlbSBhcyBDdXJ2ZVRvQ29tbWFuZFxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGhNYWtlci5jdWJpY0JlemllckN1cnZlVG8ocGF0aERhdGFXaXRoVHlwZS54MSwgcGF0aERhdGFXaXRoVHlwZS55MSwgcGF0aERhdGFXaXRoVHlwZS54MiwgcGF0aERhdGFXaXRoVHlwZS55MiwgcGF0aERhdGFXaXRoVHlwZS54LCBwYXRoRGF0YVdpdGhUeXBlLnkpXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2MnOlxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGhEYXRhV2l0aFR5cGUgPSBwYXRoRGF0YUl0ZW0gYXMgQ3VydmVUb0NvbW1hbmRcclxuICAgICAgICAgICAgICAgICAgICBwYXRoTWFrZXIuY3ViaWNCZXppZXJDdXJ2ZVRvUmVsYXRpdmUocGF0aERhdGFXaXRoVHlwZS54MSwgcGF0aERhdGFXaXRoVHlwZS55MSwgcGF0aERhdGFXaXRoVHlwZS54MiwgcGF0aERhdGFXaXRoVHlwZS55MiwgcGF0aERhdGFXaXRoVHlwZS54LCBwYXRoRGF0YVdpdGhUeXBlLnkpXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ1EnOlxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGhEYXRhV2l0aFR5cGUgPSBwYXRoRGF0YUl0ZW0gYXMgUXVhZHJhdGljQ3VydmVUb0NvbW1hbmRcclxuICAgICAgICAgICAgICAgICAgICBwYXRoTWFrZXIucXVhZHJhdGljQmV6aWVyQ3VydmVUbyhwYXRoRGF0YVdpdGhUeXBlLngxLCBwYXRoRGF0YVdpdGhUeXBlLnkxLCBwYXRoRGF0YVdpdGhUeXBlLngsIHBhdGhEYXRhV2l0aFR5cGUueSlcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgY2FzZSAncSc6XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aERhdGFXaXRoVHlwZSA9IHBhdGhEYXRhSXRlbSBhcyBRdWFkcmF0aWNDdXJ2ZVRvQ29tbWFuZFxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGhNYWtlci5xdWFkcmF0aWNCZXppZXJDdXJ2ZVRvUmVsYXRpdmUocGF0aERhdGFXaXRoVHlwZS54MSwgcGF0aERhdGFXaXRoVHlwZS55MSwgcGF0aERhdGFXaXRoVHlwZS54LCBwYXRoRGF0YVdpdGhUeXBlLnkpXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ0EnOlxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGhEYXRhV2l0aFR5cGUgPSBwYXRoRGF0YUl0ZW0gYXMgRWxsaXB0aWNhbEFyY0NvbW1hbmRcclxuICAgICAgICAgICAgICAgICAgICBwYXRoTWFrZXIuYXJjVG8ocGF0aERhdGFXaXRoVHlwZS5yeCwgcGF0aERhdGFXaXRoVHlwZS5yeSwgcGF0aERhdGFXaXRoVHlwZS54QXhpc1JvdGF0aW9uLCB+fnBhdGhEYXRhV2l0aFR5cGUubGFyZ2VBcmMsIH5+cGF0aERhdGFXaXRoVHlwZS5zd2VlcCwgcGF0aERhdGFXaXRoVHlwZS54LCBwYXRoRGF0YVdpdGhUeXBlLnkpXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2EnOlxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGhEYXRhV2l0aFR5cGUgPSBwYXRoRGF0YUl0ZW0gYXMgRWxsaXB0aWNhbEFyY0NvbW1hbmRcclxuICAgICAgICAgICAgICAgICAgICBwYXRoTWFrZXIuYXJjVG9SZWxhdGl2ZShwYXRoRGF0YVdpdGhUeXBlLnJ4LCBwYXRoRGF0YVdpdGhUeXBlLnJ5LCBwYXRoRGF0YVdpdGhUeXBlLnhBeGlzUm90YXRpb24sIH5+cGF0aERhdGFXaXRoVHlwZS5sYXJnZUFyYywgfn5wYXRoRGF0YVdpdGhUeXBlLnN3ZWVwLCBwYXRoRGF0YVdpdGhUeXBlLngsIHBhdGhEYXRhV2l0aFR5cGUueSlcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnWic6XHJcbiAgICAgICAgICAgICAgICBjYXNlICd6JzpcclxuICAgICAgICAgICAgICAgICAgICBwYXRoTWFrZXIuY2xvc2VQYXRoKClcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHBhdGhEYXRhSXRlbSlcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGltcGxlbWVudGF0aW9uIGZvdW5kIGZvciB0aGlzIHBhdGggY29tbWFuZC4nKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBwb3N0QWN0aW9ucyhwYXRoTWFrZXIpXHJcbiAgICB9IGVsc2UgaWYgKGRvbSBpbnN0YW5jZW9mIFNWR1BvbHlnb25FbGVtZW50IHx8IGRvbSBpbnN0YW5jZW9mIFNWR1BvbHlsaW5lRWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IHBvaW50cyA9IGRvbS5wb2ludHNcclxuICAgICAgICBpZiAocG9pbnRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVyYWJsZVBvaW50czogRE9NUG9pbnRbXSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHBvaW50cylcclxuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0WCA9IGl0ZXJhYmxlUG9pbnRzLnJlZHVjZSgocCwgdikgPT4gTWF0aC5taW4ocCwgdi54KSwgMClcclxuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0WSA9IGl0ZXJhYmxlUG9pbnRzLnJlZHVjZSgocCwgdikgPT4gTWF0aC5taW4ocCwgdi55KSwgMClcclxuICAgICAgICAgICAgY29uc3QgcGF0aE1ha2VyID0gbmV3IFBhdGhNYWtlcigpXHJcbiAgICAgICAgICAgIHBhdGhNYWtlci5tb3ZlVG8ocG9pbnRzWzBdLnggLSBvZmZzZXRYLCBwb2ludHNbMF0ueSAtIG9mZnNldFkpXHJcbiAgICAgICAgICAgIGl0ZXJhYmxlUG9pbnRzLmZvckVhY2goKHYsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpIDw9IDApIHJldHVyblxyXG4gICAgICAgICAgICAgICAgcGF0aE1ha2VyLmxpbmVUbyh2LnggLSBvZmZzZXRYLCB2LnkgLSBvZmZzZXRZKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpZiAoZG9tIGluc3RhbmNlb2YgU1ZHUG9seWdvbkVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHBhdGhNYWtlci5jbG9zZVBhdGgoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBvc3RBY3Rpb25zKHBhdGhNYWtlcilcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGRvbSBpbnN0YW5jZW9mIFNWR1JlY3RFbGVtZW50KSB7XHJcbiAgICAgICAgY29uc3QgbWFwS2V5OiAoJ3dpZHRoJyB8ICdoZWlnaHQnKVtdID0gWyd3aWR0aCcsICdoZWlnaHQnXVxyXG4gICAgICAgIGNvbnN0IFt3aWR0aCwgaGVpZ2h0XSA9IG1hcEtleS5tYXAoa2V5ID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3ZnTGVuZ3RoID0gZG9tW2tleV0uYmFzZVZhbFxyXG4gICAgICAgICAgICBzdmdMZW5ndGguY29udmVydFRvU3BlY2lmaWVkVW5pdHMoU1ZHTGVuZ3RoLlNWR19MRU5HVEhUWVBFX1BYKVxyXG4gICAgICAgICAgICByZXR1cm4gc3ZnTGVuZ3RoLnZhbHVlSW5TcGVjaWZpZWRVbml0c1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc3QgcGF0aE1ha2VyID0gbmV3IFBhdGhNYWtlcigpXHJcbiAgICAgICAgcGF0aE1ha2VyLm1vdmVUbygwLCAwKVxyXG4gICAgICAgIHBhdGhNYWtlci5saW5lVG8od2lkdGgsIDApXHJcbiAgICAgICAgcGF0aE1ha2VyLmxpbmVUbyh3aWR0aCwgaGVpZ2h0KVxyXG4gICAgICAgIHBhdGhNYWtlci5saW5lVG8oMCwgaGVpZ2h0KVxyXG4gICAgICAgIHBhdGhNYWtlci5jbG9zZVBhdGgoKVxyXG4gICAgICAgIHBvc3RBY3Rpb25zKHBhdGhNYWtlcilcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihkb20pXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBpbXBsZW1lbnRhdGlvbiBmb3VuZCBmb3Igc3ZnIGdyYXBoaWNzIGVsZW1lbnQuJylcclxuICAgIH1cclxuICAgIHJldHVybiBbZ3JvdXBdXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckdyb3VwKGRvbTogU1ZHR0VsZW1lbnQsIGJhc2VEb20/OiBTVkdHcmFwaGljc0VsZW1lbnQpOiBHcm91cFNoYXBlW10ge1xyXG4gICAgbGV0IGl0ZW1zOiBHcm91cFNoYXBlW10gPSBbXVxyXG4gICAgZG9tLmNoaWxkTm9kZXMuZm9yRWFjaChub2RlID0+IHtcclxuICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIFNWR0dyYXBoaWNzRWxlbWVudCkge1xyXG4gICAgICAgICAgICBpdGVtcyA9IHJlbmRlcihub2RlLCBiYXNlRG9tIHx8IGRvbSkuY29uY2F0KGl0ZW1zKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gaXRlbXNcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclBsYWluR2x5cGgodHlwZTogJ3JlY3QnIHwgJ2VsbGlwc2UnLCBhcmdzOiBudW1iZXJbXSk6IEdyb3VwU2hhcGUge1xyXG4gICAgY29uc3QgZ3JvdXA6IEdyb3VwU2hhcGUgPSB7XHJcbiAgICAgICAgdHk6IFwiZ3JcIixcclxuICAgICAgICBpdDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eTogJ3NoJyxcclxuICAgICAgICAgICAgICAgIGtzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgazogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBhOiAwXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaGQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHR5OiAnc3QnLFxyXG4gICAgICAgICAgICAgICAgYzoge1xyXG4gICAgICAgICAgICAgICAgICAgIGs6IFsxLCAxLCAxLCAxXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHc6IHtcclxuICAgICAgICAgICAgICAgICAgICBrOiAxXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbzoge1xyXG4gICAgICAgICAgICAgICAgICAgIGs6IDEwMFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGxjOiBlbmNvZGVMaW5lQ2FwKCdidXR0JyksXHJcbiAgICAgICAgICAgICAgICBsajogZW5jb2RlTGluZUpvaW4oJ21pdGVyJylcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHk6ICdmbCcsXHJcbiAgICAgICAgICAgICAgICBjOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgazogWzEsIDEsIDEsIDFdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbzoge1xyXG4gICAgICAgICAgICAgICAgICAgIGs6IDEwMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eTogJ3RyJyxcclxuICAgICAgICAgICAgICAgIHA6IHtcclxuICAgICAgICAgICAgICAgICAgICBrOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYToge1xyXG4gICAgICAgICAgICAgICAgICAgIGs6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgazogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDEwMFxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgazogMFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG86IHtcclxuICAgICAgICAgICAgICAgICAgICBrOiAxMDBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzazoge1xyXG4gICAgICAgICAgICAgICAgICAgIGs6IDBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzYToge1xyXG4gICAgICAgICAgICAgICAgICAgIGs6IDBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgYm06IDAsXHJcbiAgICAgICAgaGQ6IGZhbHNlXHJcbiAgICB9XHJcbiAgICBjb25zdCBwYXRoTWFrZXIgPSBuZXcgUGF0aE1ha2VyKClcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ3JlY3QnOlxyXG4gICAgICAgICAgICBwYXRoTWFrZXIubW92ZVRvKDAsIDApXHJcbiAgICAgICAgICAgIHBhdGhNYWtlci5saW5lVG8oYXJnc1swXSwgMClcclxuICAgICAgICAgICAgcGF0aE1ha2VyLmxpbmVUbyhhcmdzWzBdLCBhcmdzWzFdKVxyXG4gICAgICAgICAgICBwYXRoTWFrZXIubGluZVRvKDAsIGFyZ3NbMV0pXHJcbiAgICAgICAgICAgIHBhdGhNYWtlci5jbG9zZVBhdGgoKVxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgIGNhc2UgJ2VsbGlwc2UnOlxyXG4gICAgICAgICAgICBwYXRoTWFrZXIubW92ZVRvKGFyZ3NbMF0sIDApXHJcbiAgICAgICAgICAgIHBhdGhNYWtlci5hcmNUbyhhcmdzWzBdLCBhcmdzWzFdLCAwLCAxLCAwLCBhcmdzWzBdLCAyICogYXJnc1sxXSlcclxuICAgICAgICAgICAgcGF0aE1ha2VyLmFyY1RvKGFyZ3NbMF0sIGFyZ3NbMV0sIDAsIDEsIDAsIGFyZ3NbMF0sIDApXHJcbiAgICAgICAgICAgIHBhdGhNYWtlci5jbG9zZVBhdGgoKVxyXG4gICAgfVxyXG4gICAgcGF0aE1ha2VyLnVuaWZvcm0oKTtcclxuICAgIChncm91cC5pdCFbMF0gYXMgUGF0aFNoYXBlKS5rcyEuayA9IHBhdGhNYWtlci5wYXRoXHJcbiAgICByZXR1cm4gZ3JvdXBcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclRleHQoZG9tOiBTVkdUZXh0RWxlbWVudCwgZm9udExpc3Q/OiBGb250cyk6IFtUZXh0RGF0YSwgRm9udDFdIHtcclxuICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGRvbSlcclxuICAgIGNvbnN0IGZvbnRTaXplID0gcGFyc2VGbG9hdChjb21wdXRlZFN0eWxlLmZvbnRTaXplKSxcclxuICAgICAgICBmb250RmFtaWx5ID0gY29tcHV0ZWRTdHlsZS5mb250RmFtaWx5LnNwbGl0KCcsJylbMF0udHJpbSgpLFxyXG4gICAgICAgIGZvbnRTdHlsZSA9IGNvbXB1dGVkU3R5bGUuZm9udFN0eWxlLFxyXG4gICAgICAgIGZvbnRXZWlnaHQgPSBjb21wdXRlZFN0eWxlLmZvbnRXZWlnaHQsXHJcbiAgICAgICAgZm9udENvbG9yID0gKGNvbXB1dGVkU3R5bGUuZmlsbCB8fCAncmdiKDAsMCwwKScpLnNwbGl0KCcoJylbMV0uc3BsaXQoJyknKVswXS5zcGxpdCgnLCcpLm1hcChpID0+IHBhcnNlSW50KGkpIC8gMjU1KSxcclxuICAgICAgICB0ZXh0QW5jaG9yID0gY29tcHV0ZWRTdHlsZS50ZXh0QW5jaG9yXHJcbiAgICBsZXQgZm9udE5hbWUgPSB1dWlkKClcclxuICAgIGlmIChmb250TGlzdCkge1xyXG4gICAgICAgIGNvbnN0IGZvbnRFeGlzdCA9IGZvbnRMaXN0Lmxpc3QhLmZpbHRlcihmb250ID0+IGZvbnQuZkZhbWlseSA9PSBmb250RmFtaWx5ICYmIGZvbnQuZlN0eWxlID09IGZvbnRTdHlsZSAmJiBmb250LmZXZWlnaHQgPT0gZm9udFdlaWdodClcclxuICAgICAgICBpZiAoZm9udEV4aXN0Lmxlbmd0aClcclxuICAgICAgICAgICAgZm9udE5hbWUgPSBmb250RXhpc3RbMF0uZk5hbWUhXHJcbiAgICB9XHJcbiAgICBjb25zdCB0ZXh0RGF0YTogVGV4dERhdGEgPSB7XHJcbiAgICAgICAgZDoge1xyXG4gICAgICAgICAgICBrOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdDogMCxcclxuICAgICAgICAgICAgICAgICAgICBzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHM6IGZvbnRTaXplLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmOiBmb250TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdDogZG9tLmlubmVySFRNTCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgajogZW5jb2RlVGV4dEFuY2hvcih0ZXh0QW5jaG9yKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxzOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYzogZm9udENvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwOiB7fSxcclxuICAgICAgICBtOiB7XHJcbiAgICAgICAgICAgIGE6IHtcclxuICAgICAgICAgICAgICAgIGs6IFtcclxuICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYTogW11cclxuICAgIH1cclxuICAgIGNvbnN0IGZvbnREZWY6IEZvbnQxID0ge1xyXG4gICAgICAgIGZGYW1pbHk6IGZvbnRGYW1pbHksXHJcbiAgICAgICAgZldlaWdodDogYCR7Zm9udFdlaWdodH1gLFxyXG4gICAgICAgIGZTdHlsZTogZm9udFN0eWxlLFxyXG4gICAgICAgIGZOYW1lOiBmb250TmFtZVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFt0ZXh0RGF0YSwgZm9udERlZl1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckltYWdlKGRvbTogU1ZHSW1hZ2VFbGVtZW50LCBhc3NldExpc3Q/OiBBc3NldHMpOiBbUmVmZXJlbmNlSUQsIEltYWdlQXNzZXRdIHtcclxuICAgIGxldCBpZCA9IHV1aWQoKVxyXG4gICAgY29uc3QgZG9tSGVpZ2h0VmFsID0gZG9tLmhlaWdodC5iYXNlVmFsXHJcbiAgICBkb21IZWlnaHRWYWwuY29udmVydFRvU3BlY2lmaWVkVW5pdHMoU1ZHTGVuZ3RoLlNWR19MRU5HVEhUWVBFX1BYKVxyXG4gICAgY29uc3QgZG9tV2lkdGhWYWwgPSBkb20ud2lkdGguYmFzZVZhbFxyXG4gICAgZG9tV2lkdGhWYWwuY29udmVydFRvU3BlY2lmaWVkVW5pdHMoU1ZHTGVuZ3RoLlNWR19MRU5HVEhUWVBFX1BYKVxyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcclxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXHJcblxyXG4gICAgY2FudmFzLndpZHRoID0gZG9tV2lkdGhWYWwudmFsdWVJblNwZWNpZmllZFVuaXRzICogM1xyXG4gICAgY2FudmFzLmhlaWdodCA9IGRvbUhlaWdodFZhbC52YWx1ZUluU3BlY2lmaWVkVW5pdHMgKiAzXHJcbiAgICBjdHghLmRyYXdJbWFnZShkb20sIDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcclxuXHJcbiAgICBjb25zdCBkYXRhVXJsID0gY2FudmFzLnRvRGF0YVVSTCgpXHJcbiAgICBpZiAoYXNzZXRMaXN0KSB7XHJcbiAgICAgICAgY29uc3QgYXNzZXRFeGlzdCA9IGFzc2V0TGlzdCEuZmlsdGVyKGFzc2V0ID0+IGFzc2V0LnAgPT0gZGF0YVVybClcclxuICAgICAgICBpZiAoYXNzZXRFeGlzdC5sZW5ndGgpXHJcbiAgICAgICAgICAgIGlkID0gYXNzZXRFeGlzdFswXS5pZCFcclxuICAgIH1cclxuICAgIGNvbnN0IGFzc2V0ID0ge1xyXG4gICAgICAgIGg6IGRvbUhlaWdodFZhbC52YWx1ZUluU3BlY2lmaWVkVW5pdHMsXHJcbiAgICAgICAgdzogZG9tV2lkdGhWYWwudmFsdWVJblNwZWNpZmllZFVuaXRzLFxyXG4gICAgICAgIGlkLFxyXG4gICAgICAgIHA6IGRhdGFVcmwsXHJcbiAgICAgICAgZTogMVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtpZCwgYXNzZXRdXHJcbn0iXX0=

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
                      } else if (lc === 'fillColor') {
                        fromValue = _Util.Util.toLotieRGBA(fromValue);
                        toValue = _Util.Util.toLotieRGBA(toValue);
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
    value: function render() {
      _AnimationSpec.default.renderAnimation(); //map animation keyframes to lottie spec


      _AnimationSpec.default.mapToLottieSpec(); //export lottie JSON


      var lottieJSON = _GlobalVar.globalVar.jsMovin.toJSON();

      Canis.lottieJSON = lottieJSON;
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
      var attrNames = ['x', 'y', 'cx', 'cy', 'x1', 'y1', 'x2', 'y2', 'd', 'r', 'width', 'height', 'textContent', 'fill', 'stroke'];
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
      } // console.log('changed attributes: ', ChartSpec.changedAttrs);
      //add missing marks to each chart


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
  renderSpec: function renderSpec(spec) {
    var canisObj = new Canis();
    canisObj.init(spec);
    return canisObj.render();
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
    key: "toLotieRGBA",
    value: function toLotieRGBA(color) {
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
      d = this.splitPath(d);
      d = d.replace(/(?<=\d)\s(?=[mMlLhHvVcCsSqQtTaAzZ])/g, '').replace(/(?<=[mMlLhHvVcCsSqQtTaA])\s(?=(\d|[-+]))/g, '').replace(/\s/g, ',');
      var cmdRegExp = new RegExp(/[mMlLhHvVcCsSqQtTaAzZ][^mMlLhHvVcCsSqQtTaAzZ]*/g);
      var cmds = d.match(cmdRegExp);
      var pm = new _jsmovin.PathMaker();

      if (cmds) {
        cmds.forEach(function (cmdStr) {
          var cmdName = cmdStr.substring(0, 1),
              cmdValue = cmdStr.substring(1);

          switch (cmdName) {
            case 'M':
            case 'm':
              pm.moveTo.apply(pm, _toConsumableArray(cmdValue.split(',').map(function (n) {
                return parseFloat(n);
              })));
              break;

            case 'H':
              pm.horizontalTo(parseFloat(cmdValue));
              break;

            case 'h':
              pm.horizontalToRelative(parseFloat(cmdValue));
              break;

            case 'V':
              pm.verticalTo(parseFloat(cmdValue));
              break;

            case 'v':
              pm.verticalToRelative(parseFloat(cmdValue));
              break;

            case 'L':
              pm.lineTo.apply(pm, _toConsumableArray(cmdValue.split(',').map(function (n) {
                return parseFloat(n);
              })));
              break;

            case 'l':
              pm.lineToRelative.apply(pm, _toConsumableArray(cmdValue.split(',').map(function (n) {
                return parseFloat(n);
              })));
              break;

            case 'C':
              pm.cubicBezierCurveTo.apply(pm, _toConsumableArray(cmdValue.split(',').map(function (n) {
                return parseFloat(n);
              })));
              break;

            case 'c':
              pm.cubicBezierCurveToRelative.apply(pm, _toConsumableArray(cmdValue.split(',').map(function (n) {
                return parseFloat(n);
              })));
              break;

            case 'Q':
              pm.quadraticBezierCurveTo.apply(pm, _toConsumableArray(cmdValue.split(',').map(function (n) {
                return parseFloat(n);
              })));
              break;

            case 'q':
              pm.quadraticBezierCurveToRelative.apply(pm, _toConsumableArray(cmdValue.split(',').map(function (n) {
                return parseFloat(n);
              })));
              break;

            case 'A':
              pm.arcTo.apply(pm, _toConsumableArray(cmdValue.split(',').map(function (n) {
                return parseFloat(n);
              })));
              break;

            case 'a':
              pm.arcToRelative.apply(pm, _toConsumableArray(cmdValue.split(',').map(function (n) {
                return parseFloat(n);
              })));
              break;
          }
        });
        pm.uniform();
        return [posiOffset, pm.path];
      }

      return [posiOffset, {}];
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
          return ['cx', 'cy', 'r', 'stroke', 'stroke-width', 'fill'].includes(propName);

        case 'ellipse':
          return ['cx', 'cy', 'rx', 'ry', 'stroke', 'stroke-width', 'fill'].includes(propName);

        case 'image':
          return ['x', 'y', 'width', 'height', 'href', 'xlink:href', 'preserveAspectRatio'].includes(propName);

        case 'line':
          return ['x1', 'x2', 'y1', 'y2', 'stroke', 'stroke-width', 'fill'].includes(propName);

        case 'path':
          return ['d', 'stroke', 'stroke-width', 'fill'].includes(propName);

        case 'polygon':
        case 'polyline':
          return ['points', 'stroke', 'stroke-width', 'fill'].includes(propName);

        case 'rect':
          return ['x', 'y', 'width', 'height', 'rx', 'ry', 'stroke', 'stroke-width', 'fill'].includes(propName);

        case 'text':
          return ['x', 'y', 'dx', 'dy', 'stroke', 'stroke-width', 'textContent'].includes(propName);

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