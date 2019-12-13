(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("canis_toolkit", [], factory);
	else if(typeof exports === 'object')
		exports["canis_toolkit"] = factory();
	else
		root["canis_toolkit"] = factory();
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

/***/ "./node_modules/babel-polyfill/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/babel-polyfill/lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

__webpack_require__(/*! core-js/shim */ "./node_modules/core-js/shim.js");

__webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");

__webpack_require__(/*! core-js/fn/regexp/escape */ "./node_modules/core-js/fn/regexp/escape.js");

if (global._babelPolyfill) {
  throw new Error("only one instance of babel-polyfill is allowed");
}
global._babelPolyfill = true;

var DEFINE_PROPERTY = "defineProperty";
function define(O, key, value) {
  O[key] || Object[DEFINE_PROPERTY](O, key, {
    writable: true,
    configurable: true,
    value: value
  });
}

define(String.prototype, "padLeft", "".padStart);
define(String.prototype, "padRight", "".padEnd);

"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
  [][key] && define(Array, key, Function.call.bind([][key]));
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/core-js/fn/regexp/escape.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/fn/regexp/escape.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/core.regexp.escape */ "./node_modules/core-js/modules/core.regexp.escape.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").RegExp.escape;


/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_a-number-value.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_a-number-value.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = function (it, msg) {
  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
  return +it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_advance-string-index.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_advance-string-index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-instance.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-copy-within.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-copy-within.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-fill.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_array-fill.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-from-iterable.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-from-iterable.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-reduce.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_array-reduce.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

module.exports = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_bind.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_bind.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/modules/_invoke.js");
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-strong.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-strong.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var $iterDefine = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var fastKey = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").fastKey;
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-to-json.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-to-json.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var from = __webpack_require__(/*! ./_array-from-iterable */ "./node_modules/core-js/modules/_array-from-iterable.js");
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-weak.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-weak.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var getWeak = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").getWeak;
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js");
var $has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_collection.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.10' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_create-property.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_create-property.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_date-to-iso-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_date-to-iso-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var getTime = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;

var lz = function (num) {
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
module.exports = (fails(function () {
  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  $toISOString.call(new Date(NaN));
})) ? function toISOString() {
  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
  var d = this;
  var y = d.getUTCFullYear();
  var m = d.getUTCMilliseconds();
  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
} : $toISOString;


/***/ }),

/***/ "./node_modules/core-js/modules/_date-to-primitive.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_date-to-primitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var NUMBER = 'number';

module.exports = function (hint) {
  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
  return toPrimitive(anObject(this), hint != NUMBER);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails-is-regexp.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_fails-is-regexp.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_fix-re-wks.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(/*! ./es6.regexp.exec */ "./node_modules/core-js/modules/es6.regexp.exec.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_flags.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_flags.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_flatten-into-array.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_flatten-into-array.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IS_CONCAT_SPREADABLE = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('isConcatSpreadable');

function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
  var element, spreadable;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      spreadable = false;
      if (isObject(element)) {
        spreadable = element[IS_CONCAT_SPREADABLE];
        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
      }

      if (spreadable && depth > 0) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
}

module.exports = flattenIntoArray;


/***/ }),

/***/ "./node_modules/core-js/modules/_for-of.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_inherit-if-required.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var setPrototypeOf = __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_invoke.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_invoke.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-regexp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-regexp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_math-expm1.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-expm1.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = (!$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17
) ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;


/***/ }),

/***/ "./node_modules/core-js/modules/_math-fround.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_math-fround.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.16 Math.fround(x)
var sign = __webpack_require__(/*! ./_math-sign */ "./node_modules/core-js/modules/_math-sign.js");
var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);

var roundTiesToEven = function (n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};

module.exports = Math.fround || function fround(x) {
  var $abs = Math.abs(x);
  var $sign = sign(x);
  var a, result;
  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs);
  // eslint-disable-next-line no-self-compare
  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_math-log1p.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-log1p.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_math-scale.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-scale.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://rwaldron.github.io/proposal-math-extensions/
module.exports = Math.scale || function scale(x, inLow, inHigh, outLow, outHigh) {
  if (
    arguments.length === 0
      // eslint-disable-next-line no-self-compare
      || x != x
      // eslint-disable-next-line no-self-compare
      || inLow != inLow
      // eslint-disable-next-line no-self-compare
      || inHigh != inHigh
      // eslint-disable-next-line no-self-compare
      || outLow != outLow
      // eslint-disable-next-line no-self-compare
      || outHigh != outHigh
  ) return NaN;
  if (x === Infinity || x === -Infinity) return x;
  return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_math-sign.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-sign.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/modules/_metadata.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_metadata.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Map = __webpack_require__(/*! ./es6.map */ "./node_modules/core-js/modules/es6.map.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('metadata');
var store = shared.store || (shared.store = new (__webpack_require__(/*! ./es6.weak-map */ "./node_modules/core-js/modules/es6.weak-map.js"))());

var getOrCreateMetadataMap = function (target, targetKey, create) {
  var targetMetadata = store.get(target);
  if (!targetMetadata) {
    if (!create) return undefined;
    store.set(target, targetMetadata = new Map());
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if (!keyMetadata) {
    if (!create) return undefined;
    targetMetadata.set(targetKey, keyMetadata = new Map());
  } return keyMetadata;
};
var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function (target, targetKey) {
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
  var keys = [];
  if (metadataMap) metadataMap.forEach(function (_, key) { keys.push(key); });
  return keys;
};
var toMetaKey = function (it) {
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};
var exp = function (O) {
  $export($export.S, 'Reflect', O);
};

module.exports = {
  store: store,
  map: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  key: toMetaKey,
  exp: exp
};


/***/ }),

/***/ "./node_modules/core-js/modules/_microtask.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_microtask.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var macrotask = __webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_new-promise-capability.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/_new-promise-capability.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-forced-pam.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-forced-pam.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Forced replacement prototype accessors methods
module.exports = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") || !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  var K = Math.random();
  // In FF throws only define methods
  // eslint-disable-next-line no-undef, no-useless-call
  __defineSetter__.call(null, K, function () { /* empty */ });
  delete __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js")[K];
});


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-sap.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-sap.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-to-array.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-to-array.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var isEnum = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_own-keys.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_own-keys.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var Reflect = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_parse-float.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_parse-float.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $parseFloat = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").parseFloat;
var $trim = __webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim;

module.exports = 1 / $parseFloat(__webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/modules/_string-ws.js") + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),

/***/ "./node_modules/core-js/modules/_parse-int.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_parse-int.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $parseInt = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").parseInt;
var $trim = __webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim;
var ws = __webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/modules/_string-ws.js");
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "./node_modules/core-js/modules/_perform.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_perform.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_promise-resolve.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_promise-resolve.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine-all.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec-abstract.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec-abstract.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/core-js/modules/_replacer.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_replacer.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (regExp, replace) {
  var replacer = replace === Object(replace) ? function (part) {
    return replace[part];
  } : replace;
  return function (it) {
    return String(it).replace(regExp, replacer);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_same-value.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_same-value.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-collection-from.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-collection-from.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-collection-of.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-collection-of.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_species-constructor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_species-constructor.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_strict-method.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_strict-method.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-context.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-context.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-html.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-html.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-pad.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-pad.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-string-pad-start-end
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var repeat = __webpack_require__(/*! ./_string-repeat */ "./node_modules/core-js/modules/_string-repeat.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function (that, maxLength, fillString, left) {
  var S = String(defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-repeat.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-repeat.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
  return res;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-trim.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-trim.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var spaces = __webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/modules/_string-ws.js");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "./node_modules/core-js/modules/_string-ws.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-ws.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/modules/_task.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_task.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/modules/_invoke.js");
var html = __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js");
var cel = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-index.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_to-index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_typed-array.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_typed-array.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js")) {
  var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
  var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
  var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
  var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
  var $typed = __webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js");
  var $buffer = __webpack_require__(/*! ./_typed-buffer */ "./node_modules/core-js/modules/_typed-buffer.js");
  var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
  var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
  var propertyDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
  var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
  var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
  var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
  var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
  var toIndex = __webpack_require__(/*! ./_to-index */ "./node_modules/core-js/modules/_to-index.js");
  var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
  var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
  var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
  var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
  var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
  var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
  var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
  var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
  var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
  var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;
  var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");
  var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
  var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
  var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js");
  var createArrayIncludes = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js");
  var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
  var ArrayIterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
  var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
  var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js");
  var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js");
  var arrayFill = __webpack_require__(/*! ./_array-fill */ "./node_modules/core-js/modules/_array-fill.js");
  var arrayCopyWithin = __webpack_require__(/*! ./_array-copy-within */ "./node_modules/core-js/modules/_array-copy-within.js");
  var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
  var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';

  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function (it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function (it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function (C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function (O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var addGetter = function (it, key, internal) {
    dP(it, key, { get: function () { return this._d[internal]; } });
  };

  var $from = function from(source /* , mapfn, thisArg */) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;
    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      } O = values;
    }
    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/* ...items */) {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);
    while (length > index) result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /* , end */) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /* , thisArg */) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /* , thisArg */) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /* , thisArg */) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /* , thisArg */) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /* , thisArg */) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /* , fromIndex */) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /* , fromIndex */) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) { // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /* , thisArg */) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;
      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      } return that;
    },
    some: function some(callbackfn /* , thisArg */) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /* , offset */) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);
    while (index < len) this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function (target, key) {
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ) {
      target[key] = desc.value;
      return target;
    } return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () { arrayToString.call({}); })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function () { /* noop */ },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function () { return this[TYPED_ARRAY]; }
  });

  // eslint-disable-next-line max-statements
  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function (that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function (that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function (that, index) {
      dP(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(1.5); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if (!isObject(data)) return new Base(toIndex(data));
        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator
      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function () { return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });

    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
      from: $from,
      of: $of
    });

    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, { slice: $slice });

    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, { toLocaleString: $toLocaleString });

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js/modules/_typed-buffer.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_typed-buffer.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $typed = __webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toIndex = __webpack_require__(/*! ./_to-index */ "./node_modules/core-js/modules/_to-index.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var arrayFill = __webpack_require__(/*! ./_array-fill */ "./node_modules/core-js/modules/_array-fill.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError;
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(value, mLen, nBytes) {
  var buffer = new Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value);
  // eslint-disable-next-line no-self-compare
  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
}
function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;
  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
}

function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}
function packI8(it) {
  return [it & 0xff];
}
function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}
function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}
function packF64(it) {
  return packIEEE754(it, 52, 8);
}
function packF32(it) {
  return packIEEE754(it, 23, 4);
}

function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
}

function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}
function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);
  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
}

if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    this._b = arrayFill.call(new Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    $ArrayBuffer(1);
  }) || !fails(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new
    new $ArrayBuffer(1.5); // eslint-disable-line no-new
    new $ArrayBuffer(NaN); // eslint-disable-line no-new
    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new BaseBuffer(toIndex(length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    }
    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;


/***/ }),

/***/ "./node_modules/core-js/modules/_typed.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_typed.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_user-agent.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_user-agent.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "./node_modules/core-js/modules/_validate-collection.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_validate-collection.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks-define.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-define.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks-ext.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-ext.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/modules/core.regexp.escape.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/core.regexp.escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/benjamingr/RexExp.escape
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $re = __webpack_require__(/*! ./_replacer */ "./node_modules/core-js/modules/_replacer.js")(/[\\^$*+?.()|[\]{}]/g, '\\$&');

$export($export.S, 'RegExp', { escape: function escape(it) { return $re(it); } });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.copy-within.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.copy-within.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'Array', { copyWithin: __webpack_require__(/*! ./_array-copy-within */ "./node_modules/core-js/modules/_array-copy-within.js") });

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('copyWithin');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.every.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.every.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $every = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(4);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.fill.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.fill.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'Array', { fill: __webpack_require__(/*! ./_array-fill */ "./node_modules/core-js/modules/_array-fill.js") });

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('fill');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.filter.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.filter.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $filter = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(2);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find-index.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find-index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $find = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")(KEY);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $find = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")(KEY);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.for-each.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.for-each.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $forEach = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(0);
var STRICT = __webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.from.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.from.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.index-of.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.index-of.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $indexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.is-array.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.is-array.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.join.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.join.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.13 Array.prototype.join(separator)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayJoin = [].join;

// fallback for not array-like strings
$export($export.P + $export.F * (__webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js") != Object || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")(arrayJoin)), 'Array', {
  join: function join(separator) {
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.last-index-of.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.last-index-of.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var $native = [].lastIndexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
    var O = toIObject(this);
    var length = toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;
    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
    return -1;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.map.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.map.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $map = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(1);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.of.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.of.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");

// WebKit Array.of isn't generic
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  function F() { /* empty */ }
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */) {
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(aLen);
    while (aLen > index) createProperty(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.reduce-right.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce-right.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $reduce = __webpack_require__(/*! ./_array-reduce */ "./node_modules/core-js/modules/_array-reduce.js");

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.reduce.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $reduce = __webpack_require__(/*! ./_array-reduce */ "./node_modules/core-js/modules/_array-reduce.js");

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.slice.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.slice.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var html = __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  if (html) arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = toLength(this.length);
    var klass = cof(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice.call(this, begin, end);
    var start = toAbsoluteIndex(begin, len);
    var upTo = toAbsoluteIndex(end, len);
    var size = toLength(upTo - start);
    var cloned = new Array(size);
    var i = 0;
    for (; i < size; i++) cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.some.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.some.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $some = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(3);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.sort.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.sort.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.species.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.species.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")('Array');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.now.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.now.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-iso-string.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-iso-string.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toISOString = __webpack_require__(/*! ./_date-to-iso-string */ "./node_modules/core-js/modules/_date-to-iso-string.js");

// PhantomJS / old WebKit has a broken implementations
$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
  toISOString: toISOString
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-json.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-json.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");

$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return new Date(NaN).toJSON() !== null
    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
}), 'Date', {
  // eslint-disable-next-line no-unused-vars
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TO_PRIMITIVE = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toPrimitive');
var proto = Date.prototype;

if (!(TO_PRIMITIVE in proto)) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(proto, TO_PRIMITIVE, __webpack_require__(/*! ./_date-to-primitive */ "./node_modules/core-js/modules/_date-to-primitive.js"));


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-string.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.bind.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.bind.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'Function', { bind: __webpack_require__(/*! ./_bind */ "./node_modules/core-js/modules/_bind.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.has-instance.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.has-instance.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var HAS_INSTANCE = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('hasInstance');
var FunctionProto = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if (!(HAS_INSTANCE in FunctionProto)) __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f(FunctionProto, HAS_INSTANCE, { value: function (O) {
  if (typeof this != 'function' || !isObject(O)) return false;
  if (!isObject(this.prototype)) return O instanceof this;
  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
  while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
  return false;
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.name.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.name.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.map.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.map.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.acosh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.acosh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.3 Math.acosh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var log1p = __webpack_require__(/*! ./_math-log1p */ "./node_modules/core-js/modules/_math-log1p.js");
var sqrt = Math.sqrt;
var $acosh = Math.acosh;

$export($export.S + $export.F * !($acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN
  && $acosh(Infinity) == Infinity
), 'Math', {
  acosh: function acosh(x) {
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? Math.log(x) + Math.LN2
      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.asinh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.asinh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.5 Math.asinh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $asinh = Math.asinh;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0
$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.atanh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.atanh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.7 Math.atanh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $atanh = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0
$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.cbrt.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.cbrt.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.9 Math.cbrt(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var sign = __webpack_require__(/*! ./_math-sign */ "./node_modules/core-js/modules/_math-sign.js");

$export($export.S, 'Math', {
  cbrt: function cbrt(x) {
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.clz32.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.clz32.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.11 Math.clz32(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.cosh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.cosh.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.12 Math.cosh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var exp = Math.exp;

$export($export.S, 'Math', {
  cosh: function cosh(x) {
    return (exp(x = +x) + exp(-x)) / 2;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.expm1.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.expm1.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.14 Math.expm1(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $expm1 = __webpack_require__(/*! ./_math-expm1 */ "./node_modules/core-js/modules/_math-expm1.js");

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.fround.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.fround.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.16 Math.fround(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { fround: __webpack_require__(/*! ./_math-fround */ "./node_modules/core-js/modules/_math-fround.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.hypot.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.hypot.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var abs = Math.abs;

$export($export.S, 'Math', {
  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;
    while (i < aLen) {
      arg = abs(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.imul.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.imul.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.18 Math.imul(x, y)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $imul = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y) {
    var UINT16 = 0xffff;
    var xn = +x;
    var yn = +y;
    var xl = UINT16 & xn;
    var yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log10.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log10.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.21 Math.log10(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log1p.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log1p.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.20 Math.log1p(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { log1p: __webpack_require__(/*! ./_math-log1p */ "./node_modules/core-js/modules/_math-log1p.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log2.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log2.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.22 Math.log2(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.sign.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.sign.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.28 Math.sign(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { sign: __webpack_require__(/*! ./_math-sign */ "./node_modules/core-js/modules/_math-sign.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.sinh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.sinh.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.30 Math.sinh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var expm1 = __webpack_require__(/*! ./_math-expm1 */ "./node_modules/core-js/modules/_math-expm1.js");
var exp = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x) {
    return Math.abs(x = +x) < 1
      ? (expm1(x) - expm1(-x)) / 2
      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.tanh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.tanh.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.33 Math.tanh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var expm1 = __webpack_require__(/*! ./_math-expm1 */ "./node_modules/core-js/modules/_math-expm1.js");
var exp = Math.exp;

$export($export.S, 'Math', {
  tanh: function tanh(x) {
    var a = expm1(x = +x);
    var b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.trunc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.trunc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.34 Math.trunc(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.constructor.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f;
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var $trim = __webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(global, NUMBER, $Number);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.epsilon.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.epsilon.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.1 Number.EPSILON
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-finite.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-finite.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.2 Number.isFinite(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var _isFinite = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-integer.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-integer.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { isInteger: __webpack_require__(/*! ./_is-integer */ "./node_modules/core-js/modules/_is-integer.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-nan.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-nan.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-safe-integer.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-safe-integer.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.5 Number.isSafeInteger(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isInteger = __webpack_require__(/*! ./_is-integer */ "./node_modules/core-js/modules/_is-integer.js");
var abs = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.max-safe-integer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.max-safe-integer.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.min-safe-integer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.min-safe-integer.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.parse-float.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.parse-float.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $parseFloat = __webpack_require__(/*! ./_parse-float */ "./node_modules/core-js/modules/_parse-float.js");
// 20.1.2.12 Number.parseFloat(string)
$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.parse-int.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.parse-int.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $parseInt = __webpack_require__(/*! ./_parse-int */ "./node_modules/core-js/modules/_parse-int.js");
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.to-fixed.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.to-fixed.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var aNumberValue = __webpack_require__(/*! ./_a-number-value */ "./node_modules/core-js/modules/_a-number-value.js");
var repeat = __webpack_require__(/*! ./_string-repeat */ "./node_modules/core-js/modules/_string-repeat.js");
var $toFixed = 1.0.toFixed;
var floor = Math.floor;
var data = [0, 0, 0, 0, 0, 0];
var ERROR = 'Number.toFixed: incorrect invocation!';
var ZERO = '0';

var multiply = function (n, c) {
  var i = -1;
  var c2 = c;
  while (++i < 6) {
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};
var divide = function (n) {
  var i = 6;
  var c = 0;
  while (--i >= 0) {
    c += data[i];
    data[i] = floor(c / n);
    c = (c % n) * 1e7;
  }
};
var numToString = function () {
  var i = 6;
  var s = '';
  while (--i >= 0) {
    if (s !== '' || i === 0 || data[i] !== 0) {
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  } return s;
};
var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

$export($export.P + $export.F * (!!$toFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits) {
    var x = aNumberValue(this, ERROR);
    var f = toInteger(fractionDigits);
    var s = '';
    var m = ZERO;
    var e, z, j, k;
    if (f < 0 || f > 20) throw RangeError(ERROR);
    // eslint-disable-next-line no-self-compare
    if (x != x) return 'NaN';
    if (x <= -1e21 || x >= 1e21) return String(x);
    if (x < 0) {
      s = '-';
      x = -x;
    }
    if (x > 1e-21) {
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = f;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }
    if (f > 0) {
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    } return m;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.to-precision.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.to-precision.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var aNumberValue = __webpack_require__(/*! ./_a-number-value */ "./node_modules/core-js/modules/_a-number-value.js");
var $toPrecision = 1.0.toPrecision;

$export($export.P + $export.F * ($fails(function () {
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !$fails(function () {
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision) {
    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.assign.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.assign.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.create.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.create.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.define-properties.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-properties.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js"), 'Object', { defineProperties: __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.define-property.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-property.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.freeze.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.freeze.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze;

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f;

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-own-property-names.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-names.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('getOwnPropertyNames', function () {
  return __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/modules/_object-gopn-ext.js").f;
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-prototype-of.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-extensible.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-extensible.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.11 Object.isExtensible(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-frozen.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-frozen.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.12 Object.isFrozen(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-sealed.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-sealed.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.13 Object.isSealed(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.10 Object.is(value1, value2)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Object', { is: __webpack_require__(/*! ./_same-value */ "./node_modules/core-js/modules/_same-value.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.prevent-extensions.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.prevent-extensions.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.15 Object.preventExtensions(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze;

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.seal.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.seal.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.17 Object.seal(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze;

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.set-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.set-prototype-of.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var test = {};
test[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.parse-float.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.parse-float.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $parseFloat = __webpack_require__(/*! ./_parse-float */ "./node_modules/core-js/modules/_parse-float.js");
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.parse-int.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.parse-int.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $parseInt = __webpack_require__(/*! ./_parse-int */ "./node_modules/core-js/modules/_parse-int.js");
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.promise.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.promise.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var task = __webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js").set;
var microtask = __webpack_require__(/*! ./_microtask */ "./node_modules/core-js/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/modules/_perform.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.apply.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.apply.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var rApply = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  rApply(function () { /* empty */ });
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.construct.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.construct.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var bind = __webpack_require__(/*! ./_bind */ "./node_modules/core-js/modules/_bind.js");
var rConstruct = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.define-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.define-property.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.delete-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.delete-property.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f;
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.enumerate.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.enumerate.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 26.1.5 Reflect.enumerate(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var Enumerate = function (iterated) {
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = [];      // keys
  var key;
  for (key in iterated) keys.push(key);
};
__webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js")(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;
  do {
    if (that._i >= keys.length) return { value: undefined, done: true };
  } while (!((key = keys[that._i++]) in that._t));
  return { value: key, done: false };
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-prototype-of.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.8 Reflect.getPrototypeOf(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var getProto = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.has.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.has.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.9 Reflect.has(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.is-extensible.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.is-extensible.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.10 Reflect.isExtensible(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.own-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.own-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Reflect', { ownKeys: __webpack_require__(/*! ./_own-keys */ "./node_modules/core-js/modules/_own-keys.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.prevent-extensions.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.12 Reflect.preventExtensions(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set-prototype-of.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var setProto = __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js");

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
    } else dP.f(receiver, propertyKey, createDesc(0, V));
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', { set: set });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.constructor.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && (!CORRECT_NEW || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  re2[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(global, 'RegExp', $RegExp);
}

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")('RegExp');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.exec.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.exec.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.flags.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.flags.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && /./g.flags != 'g') __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js")
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.match.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.match.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");

// @@match logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.replace.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.replace.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.search.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.search.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var sameValue = __webpack_require__(/*! ./_same-value */ "./node_modules/core-js/modules/_same-value.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");

// @@search logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[SEARCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative($search, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.split.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.split.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var callRegExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(/*! ./es6.regexp.flags */ "./node_modules/core-js/modules/es6.regexp.flags.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.set.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.set.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.anchor.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.anchor.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.2 String.prototype.anchor(name)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.big.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.big.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.3 String.prototype.big()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.blink.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.blink.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.4 String.prototype.blink()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.bold.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.bold.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.5 String.prototype.bold()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.code-point-at.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.code-point-at.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at(this, pos);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.ends-with.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.ends-with.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var context = __webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");
var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fixed.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fixed.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.6 String.prototype.fixed()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fontcolor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fontcolor.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.7 String.prototype.fontcolor(color)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fontsize.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fontsize.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.8 String.prototype.fontsize(size)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.from-code-point.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.from-code-point.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;
    while (aLen > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.includes.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.includes.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var context = __webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.italics.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.italics.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.9 String.prototype.italics()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.iterator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.link.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.link.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.10 String.prototype.link(url)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.raw.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.raw.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite) {
    var tpl = toIObject(callSite.raw);
    var len = toLength(tpl.length);
    var aLen = arguments.length;
    var res = [];
    var i = 0;
    while (len > i) {
      res.push(String(tpl[i++]));
      if (i < aLen) res.push(String(arguments[i]));
    } return res.join('');
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.repeat.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.repeat.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: __webpack_require__(/*! ./_string-repeat */ "./node_modules/core-js/modules/_string-repeat.js")
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.small.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.small.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.11 String.prototype.small()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.starts-with.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.starts-with.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var context = __webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.strike.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.strike.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.12 String.prototype.strike()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.sub.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sub.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.13 String.prototype.sub()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.sup.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sup.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.14 String.prototype.sup()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('sup', function (createHTML) {
  return function sup() {
    return createHTML(this, 'sup', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.trim.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.trim.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.1.3.25 String.prototype.trim()
__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js")('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.symbol.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.symbol.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var $GOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.array-buffer.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.array-buffer.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $typed = __webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js");
var buffer = __webpack_require__(/*! ./_typed-buffer */ "./node_modules/core-js/modules/_typed-buffer.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var ArrayBuffer = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").ArrayBuffer;
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var $ArrayBuffer = buffer.ArrayBuffer;
var $DataView = buffer.DataView;
var $isView = $typed.ABV && ArrayBuffer.isView;
var $slice = $ArrayBuffer.prototype.slice;
var VIEW = $typed.VIEW;
var ARRAY_BUFFER = 'ArrayBuffer';

$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it) {
    return $isView && $isView(it) || isObject(it) && VIEW in it;
  }
});

$export($export.P + $export.U + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end) {
    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
    var len = anObject(this).byteLength;
    var first = toAbsoluteIndex(start, len);
    var fin = toAbsoluteIndex(end === undefined ? len : end, len);
    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));
    var viewS = new $DataView(this);
    var viewT = new $DataView(result);
    var index = 0;
    while (first < fin) {
      viewT.setUint8(index++, viewS.getUint8(first++));
    } return result;
  }
});

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")(ARRAY_BUFFER);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.data-view.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.data-view.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.G + $export.W + $export.F * !__webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js").ABV, {
  DataView: __webpack_require__(/*! ./_typed-buffer */ "./node_modules/core-js/modules/_typed-buffer.js").DataView
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.float32-array.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.float32-array.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.float64-array.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.float64-array.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int16-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int16-array.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Int16', 2, function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int32-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int32-array.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Int32', 4, function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int8-array.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int8-array.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Int8', 1, function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint16-array.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint16-array.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint16', 2, function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint32-array.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint32-array.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint32', 4, function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint8-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint8-array.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint8', 1, function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var each = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(0);
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var assign = __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js");
var weak = __webpack_require__(/*! ./_collection-weak */ "./node_modules/core-js/modules/_collection-weak.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var NATIVE_WEAK_MAP = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-set.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-set.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var weak = __webpack_require__(/*! ./_collection-weak */ "./node_modules/core-js/modules/_collection-weak.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var WEAK_SET = 'WeakSet';

// 23.4 WeakSet Objects
__webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(WEAK_SET, function (get) {
  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value) {
    return weak.def(validate(this, WEAK_SET), value, true);
  }
}, weak, false, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.flat-map.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.flat-map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var flattenIntoArray = __webpack_require__(/*! ./_flatten-into-array */ "./node_modules/core-js/modules/_flatten-into-array.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var arraySpeciesCreate = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");

$export($export.P, 'Array', {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen, A;
    aFunction(callbackfn);
    sourceLen = toLength(O.length);
    A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
    return A;
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('flatMap');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.flatten.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.flatten.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var flattenIntoArray = __webpack_require__(/*! ./_flatten-into-array */ "./node_modules/core-js/modules/_flatten-into-array.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var arraySpeciesCreate = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");

$export($export.P, 'Array', {
  flatten: function flatten(/* depthArg = 1 */) {
    var depthArg = arguments[0];
    var O = toObject(this);
    var sourceLen = toLength(O.length);
    var A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
    return A;
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('flatten');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.includes.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.includes.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $includes = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('includes');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.asap.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/es7.asap.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var microtask = __webpack_require__(/*! ./_microtask */ "./node_modules/core-js/modules/_microtask.js")();
var process = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").process;
var isNode = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process) == 'process';

$export($export.G, {
  asap: function asap(fn) {
    var domain = isNode && process.domain;
    microtask(domain ? domain.bind(fn) : fn);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.error.is-error.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.error.is-error.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/ljharb/proposal-is-error
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");

$export($export.S, 'Error', {
  isError: function isError(it) {
    return cof(it) === 'Error';
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.global.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es7.global.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-global
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.G, { global: __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.map.from.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es7.map.from.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__(/*! ./_set-collection-from */ "./node_modules/core-js/modules/_set-collection-from.js")('Map');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.map.of.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es7.map.of.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__(/*! ./_set-collection-of */ "./node_modules/core-js/modules/_set-collection-of.js")('Map');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.map.to-json.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.map.to-json.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(/*! ./_collection-to-json */ "./node_modules/core-js/modules/_collection-to-json.js")('Map') });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.clamp.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.clamp.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  clamp: function clamp(x, lower, upper) {
    return Math.min(upper, Math.max(lower, x));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.deg-per-rad.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.deg-per-rad.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { DEG_PER_RAD: Math.PI / 180 });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.degrees.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.degrees.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var RAD_PER_DEG = 180 / Math.PI;

$export($export.S, 'Math', {
  degrees: function degrees(radians) {
    return radians * RAD_PER_DEG;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.fscale.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.fscale.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var scale = __webpack_require__(/*! ./_math-scale */ "./node_modules/core-js/modules/_math-scale.js");
var fround = __webpack_require__(/*! ./_math-fround */ "./node_modules/core-js/modules/_math-fround.js");

$export($export.S, 'Math', {
  fscale: function fscale(x, inLow, inHigh, outLow, outHigh) {
    return fround(scale(x, inLow, inHigh, outLow, outHigh));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.iaddh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.iaddh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  iaddh: function iaddh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0;
    var $x1 = x1 >>> 0;
    var $y0 = y0 >>> 0;
    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.imulh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.imulh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  imulh: function imulh(u, v) {
    var UINT16 = 0xffff;
    var $u = +u;
    var $v = +v;
    var u0 = $u & UINT16;
    var v0 = $v & UINT16;
    var u1 = $u >> 16;
    var v1 = $v >> 16;
    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.isubh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.isubh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  isubh: function isubh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0;
    var $x1 = x1 >>> 0;
    var $y0 = y0 >>> 0;
    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.rad-per-deg.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.rad-per-deg.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { RAD_PER_DEG: 180 / Math.PI });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.radians.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.radians.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var DEG_PER_RAD = Math.PI / 180;

$export($export.S, 'Math', {
  radians: function radians(degrees) {
    return degrees * DEG_PER_RAD;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.scale.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.scale.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { scale: __webpack_require__(/*! ./_math-scale */ "./node_modules/core-js/modules/_math-scale.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.signbit.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.signbit.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// http://jfbastien.github.io/papers/Math.signbit.html
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { signbit: function signbit(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) != x ? x : x == 0 ? 1 / x == Infinity : x > 0;
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.umulh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.umulh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  umulh: function umulh(u, v) {
    var UINT16 = 0xffff;
    var $u = +u;
    var $v = +v;
    var u0 = $u & UINT16;
    var v0 = $v & UINT16;
    var u1 = $u >>> 16;
    var v1 = $v >>> 16;
    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.define-getter.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.define-getter.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");

// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ "./node_modules/core-js/modules/_object-forced-pam.js"), 'Object', {
  __defineGetter__: function __defineGetter__(P, getter) {
    $defineProperty.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.define-setter.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.define-setter.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");

// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ "./node_modules/core-js/modules/_object-forced-pam.js"), 'Object', {
  __defineSetter__: function __defineSetter__(P, setter) {
    $defineProperty.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.entries.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.entries.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $entries = __webpack_require__(/*! ./_object-to-array */ "./node_modules/core-js/modules/_object-to-array.js")(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var ownKeys = __webpack_require__(/*! ./_own-keys */ "./node_modules/core-js/modules/_own-keys.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.lookup-getter.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.lookup-getter.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f;

// B.2.2.4 Object.prototype.__lookupGetter__(P)
__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ "./node_modules/core-js/modules/_object-forced-pam.js"), 'Object', {
  __lookupGetter__: function __lookupGetter__(P) {
    var O = toObject(this);
    var K = toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.get;
    } while (O = getPrototypeOf(O));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.lookup-setter.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.lookup-setter.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f;

// B.2.2.5 Object.prototype.__lookupSetter__(P)
__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ "./node_modules/core-js/modules/_object-forced-pam.js"), 'Object', {
  __lookupSetter__: function __lookupSetter__(P) {
    var O = toObject(this);
    var K = toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.set;
    } while (O = getPrototypeOf(O));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.values.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.values.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $values = __webpack_require__(/*! ./_object-to-array */ "./node_modules/core-js/modules/_object-to-array.js")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.observable.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.observable.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/zenparsing/es-observable
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var microtask = __webpack_require__(/*! ./_microtask */ "./node_modules/core-js/modules/_microtask.js")();
var OBSERVABLE = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('observable');
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var RETURN = forOf.RETURN;

var getMethod = function (fn) {
  return fn == null ? undefined : aFunction(fn);
};

var cleanupSubscription = function (subscription) {
  var cleanup = subscription._c;
  if (cleanup) {
    subscription._c = undefined;
    cleanup();
  }
};

var subscriptionClosed = function (subscription) {
  return subscription._o === undefined;
};

var closeSubscription = function (subscription) {
  if (!subscriptionClosed(subscription)) {
    subscription._o = undefined;
    cleanupSubscription(subscription);
  }
};

var Subscription = function (observer, subscriber) {
  anObject(observer);
  this._c = undefined;
  this._o = observer;
  observer = new SubscriptionObserver(this);
  try {
    var cleanup = subscriber(observer);
    var subscription = cleanup;
    if (cleanup != null) {
      if (typeof cleanup.unsubscribe === 'function') cleanup = function () { subscription.unsubscribe(); };
      else aFunction(cleanup);
      this._c = cleanup;
    }
  } catch (e) {
    observer.error(e);
    return;
  } if (subscriptionClosed(this)) cleanupSubscription(this);
};

Subscription.prototype = redefineAll({}, {
  unsubscribe: function unsubscribe() { closeSubscription(this); }
});

var SubscriptionObserver = function (subscription) {
  this._s = subscription;
};

SubscriptionObserver.prototype = redefineAll({}, {
  next: function next(value) {
    var subscription = this._s;
    if (!subscriptionClosed(subscription)) {
      var observer = subscription._o;
      try {
        var m = getMethod(observer.next);
        if (m) return m.call(observer, value);
      } catch (e) {
        try {
          closeSubscription(subscription);
        } finally {
          throw e;
        }
      }
    }
  },
  error: function error(value) {
    var subscription = this._s;
    if (subscriptionClosed(subscription)) throw value;
    var observer = subscription._o;
    subscription._o = undefined;
    try {
      var m = getMethod(observer.error);
      if (!m) throw value;
      value = m.call(observer, value);
    } catch (e) {
      try {
        cleanupSubscription(subscription);
      } finally {
        throw e;
      }
    } cleanupSubscription(subscription);
    return value;
  },
  complete: function complete(value) {
    var subscription = this._s;
    if (!subscriptionClosed(subscription)) {
      var observer = subscription._o;
      subscription._o = undefined;
      try {
        var m = getMethod(observer.complete);
        value = m ? m.call(observer, value) : undefined;
      } catch (e) {
        try {
          cleanupSubscription(subscription);
        } finally {
          throw e;
        }
      } cleanupSubscription(subscription);
      return value;
    }
  }
});

var $Observable = function Observable(subscriber) {
  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
};

redefineAll($Observable.prototype, {
  subscribe: function subscribe(observer) {
    return new Subscription(observer, this._f);
  },
  forEach: function forEach(fn) {
    var that = this;
    return new (core.Promise || global.Promise)(function (resolve, reject) {
      aFunction(fn);
      var subscription = that.subscribe({
        next: function (value) {
          try {
            return fn(value);
          } catch (e) {
            reject(e);
            subscription.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
    });
  }
});

redefineAll($Observable, {
  from: function from(x) {
    var C = typeof this === 'function' ? this : $Observable;
    var method = getMethod(anObject(x)[OBSERVABLE]);
    if (method) {
      var observable = anObject(method.call(x));
      return observable.constructor === C ? observable : new C(function (observer) {
        return observable.subscribe(observer);
      });
    }
    return new C(function (observer) {
      var done = false;
      microtask(function () {
        if (!done) {
          try {
            if (forOf(x, false, function (it) {
              observer.next(it);
              if (done) return RETURN;
            }) === RETURN) return;
          } catch (e) {
            if (done) throw e;
            observer.error(e);
            return;
          } observer.complete();
        }
      });
      return function () { done = true; };
    });
  },
  of: function of() {
    for (var i = 0, l = arguments.length, items = new Array(l); i < l;) items[i] = arguments[i++];
    return new (typeof this === 'function' ? this : $Observable)(function (observer) {
      var done = false;
      microtask(function () {
        if (!done) {
          for (var j = 0; j < items.length; ++j) {
            observer.next(items[j]);
            if (done) return;
          } observer.complete();
        }
      });
      return function () { done = true; };
    });
  }
});

hide($Observable.prototype, OBSERVABLE, function () { return this; });

$export($export.G, { Observable: $Observable });

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")('Observable');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.promise.finally.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.promise.finally.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/modules/_promise-resolve.js");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.promise.try.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.promise.try.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/modules/_perform.js");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.define-metadata.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.define-metadata.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toMetaKey = metadata.key;
var ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.delete-metadata.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.delete-metadata.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toMetaKey = metadata.key;
var getOrCreateMetadataMap = metadata.map;
var store = metadata.store;

metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
  var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
  var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
  if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
  if (metadataMap.size) return true;
  var targetMetadata = store.get(target);
  targetMetadata['delete'](targetKey);
  return !!targetMetadata.size || store['delete'](target);
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(/*! ./es6.set */ "./node_modules/core-js/modules/es6.set.js");
var from = __webpack_require__(/*! ./_array-from-iterable */ "./node_modules/core-js/modules/_array-from-iterable.js");
var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

var ordinaryMetadataKeys = function (O, P) {
  var oKeys = ordinaryOwnMetadataKeys(O, P);
  var parent = getPrototypeOf(O);
  if (parent === null) return oKeys;
  var pKeys = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

metadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-metadata.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-metadata.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ordinaryHasOwnMetadata = metadata.has;
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

var ordinaryGetMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

metadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-own-metadata.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-own-metadata.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.has-metadata.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.has-metadata.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

var ordinaryHasMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return true;
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.has-own-metadata.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.has-own-metadata.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.metadata.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.metadata.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var toMetaKey = $metadata.key;
var ordinaryDefineOwnMetadata = $metadata.set;

$metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
  return function decorator(target, targetKey) {
    ordinaryDefineOwnMetadata(
      metadataKey, metadataValue,
      (targetKey !== undefined ? anObject : aFunction)(target),
      toMetaKey(targetKey)
    );
  };
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.set.from.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es7.set.from.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__(/*! ./_set-collection-from */ "./node_modules/core-js/modules/_set-collection-from.js")('Set');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.set.of.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es7.set.of.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__(/*! ./_set-collection-of */ "./node_modules/core-js/modules/_set-collection-of.js")('Set');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.set.to-json.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.set.to-json.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(/*! ./_collection-to-json */ "./node_modules/core-js/modules/_collection-to-json.js")('Set') });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.at.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.at.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/mathiasbynens/String.prototype.at
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

$export($export.P, 'String', {
  at: function at(pos) {
    return $at(this, pos);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.match-all.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.match-all.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/String.prototype.matchAll/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var getFlags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");
var RegExpProto = RegExp.prototype;

var $RegExpStringIterator = function (regexp, string) {
  this._r = regexp;
  this._s = string;
};

__webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js")($RegExpStringIterator, 'RegExp String', function next() {
  var match = this._r.exec(this._s);
  return { value: match, done: match === null };
});

$export($export.P, 'String', {
  matchAll: function matchAll(regexp) {
    defined(this);
    if (!isRegExp(regexp)) throw TypeError(regexp + ' is not a regexp!');
    var S = String(this);
    var flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp);
    var rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
    rx.lastIndex = toLength(regexp.lastIndex);
    return new $RegExpStringIterator(rx, S);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.pad-end.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.pad-end.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $pad = __webpack_require__(/*! ./_string-pad */ "./node_modules/core-js/modules/_string-pad.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");

// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.pad-start.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.pad-start.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $pad = __webpack_require__(/*! ./_string-pad */ "./node_modules/core-js/modules/_string-pad.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");

// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.trim-left.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.trim-left.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js")('trimLeft', function ($trim) {
  return function trimLeft() {
    return $trim(this, 1);
  };
}, 'trimStart');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.trim-right.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.trim-right.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js")('trimRight', function ($trim) {
  return function trimRight() {
    return $trim(this, 2);
  };
}, 'trimEnd');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.symbol.async-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.symbol.observable.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.observable.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js")('observable');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.system.global.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.system.global.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-global
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'System', { global: __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.weak-map.from.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.weak-map.from.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
__webpack_require__(/*! ./_set-collection-from */ "./node_modules/core-js/modules/_set-collection-from.js")('WeakMap');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.weak-map.of.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.weak-map.of.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
__webpack_require__(/*! ./_set-collection-of */ "./node_modules/core-js/modules/_set-collection-of.js")('WeakMap');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.weak-set.from.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.weak-set.from.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from
__webpack_require__(/*! ./_set-collection-from */ "./node_modules/core-js/modules/_set-collection-from.js")('WeakSet');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.weak-set.of.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.weak-set.of.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of
__webpack_require__(/*! ./_set-collection-of */ "./node_modules/core-js/modules/_set-collection-of.js")('WeakSet');


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "./node_modules/core-js/modules/web.immediate.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/web.immediate.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $task = __webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js");
$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// ie9- setTimeout & setInterval additional parameters fix
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");
var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var wrap = function (set) {
  return function (fn, time /* , ...args */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : false;
    return set(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
    } : fn, time);
  };
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout: wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});


/***/ }),

/***/ "./node_modules/core-js/shim.js":
/*!**************************************!*\
  !*** ./node_modules/core-js/shim.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
__webpack_require__(/*! ./modules/es6.object.create */ "./node_modules/core-js/modules/es6.object.create.js");
__webpack_require__(/*! ./modules/es6.object.define-property */ "./node_modules/core-js/modules/es6.object.define-property.js");
__webpack_require__(/*! ./modules/es6.object.define-properties */ "./node_modules/core-js/modules/es6.object.define-properties.js");
__webpack_require__(/*! ./modules/es6.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js");
__webpack_require__(/*! ./modules/es6.object.get-prototype-of */ "./node_modules/core-js/modules/es6.object.get-prototype-of.js");
__webpack_require__(/*! ./modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");
__webpack_require__(/*! ./modules/es6.object.get-own-property-names */ "./node_modules/core-js/modules/es6.object.get-own-property-names.js");
__webpack_require__(/*! ./modules/es6.object.freeze */ "./node_modules/core-js/modules/es6.object.freeze.js");
__webpack_require__(/*! ./modules/es6.object.seal */ "./node_modules/core-js/modules/es6.object.seal.js");
__webpack_require__(/*! ./modules/es6.object.prevent-extensions */ "./node_modules/core-js/modules/es6.object.prevent-extensions.js");
__webpack_require__(/*! ./modules/es6.object.is-frozen */ "./node_modules/core-js/modules/es6.object.is-frozen.js");
__webpack_require__(/*! ./modules/es6.object.is-sealed */ "./node_modules/core-js/modules/es6.object.is-sealed.js");
__webpack_require__(/*! ./modules/es6.object.is-extensible */ "./node_modules/core-js/modules/es6.object.is-extensible.js");
__webpack_require__(/*! ./modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
__webpack_require__(/*! ./modules/es6.object.is */ "./node_modules/core-js/modules/es6.object.is.js");
__webpack_require__(/*! ./modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
__webpack_require__(/*! ./modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
__webpack_require__(/*! ./modules/es6.function.bind */ "./node_modules/core-js/modules/es6.function.bind.js");
__webpack_require__(/*! ./modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
__webpack_require__(/*! ./modules/es6.function.has-instance */ "./node_modules/core-js/modules/es6.function.has-instance.js");
__webpack_require__(/*! ./modules/es6.parse-int */ "./node_modules/core-js/modules/es6.parse-int.js");
__webpack_require__(/*! ./modules/es6.parse-float */ "./node_modules/core-js/modules/es6.parse-float.js");
__webpack_require__(/*! ./modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
__webpack_require__(/*! ./modules/es6.number.to-fixed */ "./node_modules/core-js/modules/es6.number.to-fixed.js");
__webpack_require__(/*! ./modules/es6.number.to-precision */ "./node_modules/core-js/modules/es6.number.to-precision.js");
__webpack_require__(/*! ./modules/es6.number.epsilon */ "./node_modules/core-js/modules/es6.number.epsilon.js");
__webpack_require__(/*! ./modules/es6.number.is-finite */ "./node_modules/core-js/modules/es6.number.is-finite.js");
__webpack_require__(/*! ./modules/es6.number.is-integer */ "./node_modules/core-js/modules/es6.number.is-integer.js");
__webpack_require__(/*! ./modules/es6.number.is-nan */ "./node_modules/core-js/modules/es6.number.is-nan.js");
__webpack_require__(/*! ./modules/es6.number.is-safe-integer */ "./node_modules/core-js/modules/es6.number.is-safe-integer.js");
__webpack_require__(/*! ./modules/es6.number.max-safe-integer */ "./node_modules/core-js/modules/es6.number.max-safe-integer.js");
__webpack_require__(/*! ./modules/es6.number.min-safe-integer */ "./node_modules/core-js/modules/es6.number.min-safe-integer.js");
__webpack_require__(/*! ./modules/es6.number.parse-float */ "./node_modules/core-js/modules/es6.number.parse-float.js");
__webpack_require__(/*! ./modules/es6.number.parse-int */ "./node_modules/core-js/modules/es6.number.parse-int.js");
__webpack_require__(/*! ./modules/es6.math.acosh */ "./node_modules/core-js/modules/es6.math.acosh.js");
__webpack_require__(/*! ./modules/es6.math.asinh */ "./node_modules/core-js/modules/es6.math.asinh.js");
__webpack_require__(/*! ./modules/es6.math.atanh */ "./node_modules/core-js/modules/es6.math.atanh.js");
__webpack_require__(/*! ./modules/es6.math.cbrt */ "./node_modules/core-js/modules/es6.math.cbrt.js");
__webpack_require__(/*! ./modules/es6.math.clz32 */ "./node_modules/core-js/modules/es6.math.clz32.js");
__webpack_require__(/*! ./modules/es6.math.cosh */ "./node_modules/core-js/modules/es6.math.cosh.js");
__webpack_require__(/*! ./modules/es6.math.expm1 */ "./node_modules/core-js/modules/es6.math.expm1.js");
__webpack_require__(/*! ./modules/es6.math.fround */ "./node_modules/core-js/modules/es6.math.fround.js");
__webpack_require__(/*! ./modules/es6.math.hypot */ "./node_modules/core-js/modules/es6.math.hypot.js");
__webpack_require__(/*! ./modules/es6.math.imul */ "./node_modules/core-js/modules/es6.math.imul.js");
__webpack_require__(/*! ./modules/es6.math.log10 */ "./node_modules/core-js/modules/es6.math.log10.js");
__webpack_require__(/*! ./modules/es6.math.log1p */ "./node_modules/core-js/modules/es6.math.log1p.js");
__webpack_require__(/*! ./modules/es6.math.log2 */ "./node_modules/core-js/modules/es6.math.log2.js");
__webpack_require__(/*! ./modules/es6.math.sign */ "./node_modules/core-js/modules/es6.math.sign.js");
__webpack_require__(/*! ./modules/es6.math.sinh */ "./node_modules/core-js/modules/es6.math.sinh.js");
__webpack_require__(/*! ./modules/es6.math.tanh */ "./node_modules/core-js/modules/es6.math.tanh.js");
__webpack_require__(/*! ./modules/es6.math.trunc */ "./node_modules/core-js/modules/es6.math.trunc.js");
__webpack_require__(/*! ./modules/es6.string.from-code-point */ "./node_modules/core-js/modules/es6.string.from-code-point.js");
__webpack_require__(/*! ./modules/es6.string.raw */ "./node_modules/core-js/modules/es6.string.raw.js");
__webpack_require__(/*! ./modules/es6.string.trim */ "./node_modules/core-js/modules/es6.string.trim.js");
__webpack_require__(/*! ./modules/es6.string.iterator */ "./node_modules/core-js/modules/es6.string.iterator.js");
__webpack_require__(/*! ./modules/es6.string.code-point-at */ "./node_modules/core-js/modules/es6.string.code-point-at.js");
__webpack_require__(/*! ./modules/es6.string.ends-with */ "./node_modules/core-js/modules/es6.string.ends-with.js");
__webpack_require__(/*! ./modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
__webpack_require__(/*! ./modules/es6.string.repeat */ "./node_modules/core-js/modules/es6.string.repeat.js");
__webpack_require__(/*! ./modules/es6.string.starts-with */ "./node_modules/core-js/modules/es6.string.starts-with.js");
__webpack_require__(/*! ./modules/es6.string.anchor */ "./node_modules/core-js/modules/es6.string.anchor.js");
__webpack_require__(/*! ./modules/es6.string.big */ "./node_modules/core-js/modules/es6.string.big.js");
__webpack_require__(/*! ./modules/es6.string.blink */ "./node_modules/core-js/modules/es6.string.blink.js");
__webpack_require__(/*! ./modules/es6.string.bold */ "./node_modules/core-js/modules/es6.string.bold.js");
__webpack_require__(/*! ./modules/es6.string.fixed */ "./node_modules/core-js/modules/es6.string.fixed.js");
__webpack_require__(/*! ./modules/es6.string.fontcolor */ "./node_modules/core-js/modules/es6.string.fontcolor.js");
__webpack_require__(/*! ./modules/es6.string.fontsize */ "./node_modules/core-js/modules/es6.string.fontsize.js");
__webpack_require__(/*! ./modules/es6.string.italics */ "./node_modules/core-js/modules/es6.string.italics.js");
__webpack_require__(/*! ./modules/es6.string.link */ "./node_modules/core-js/modules/es6.string.link.js");
__webpack_require__(/*! ./modules/es6.string.small */ "./node_modules/core-js/modules/es6.string.small.js");
__webpack_require__(/*! ./modules/es6.string.strike */ "./node_modules/core-js/modules/es6.string.strike.js");
__webpack_require__(/*! ./modules/es6.string.sub */ "./node_modules/core-js/modules/es6.string.sub.js");
__webpack_require__(/*! ./modules/es6.string.sup */ "./node_modules/core-js/modules/es6.string.sup.js");
__webpack_require__(/*! ./modules/es6.date.now */ "./node_modules/core-js/modules/es6.date.now.js");
__webpack_require__(/*! ./modules/es6.date.to-json */ "./node_modules/core-js/modules/es6.date.to-json.js");
__webpack_require__(/*! ./modules/es6.date.to-iso-string */ "./node_modules/core-js/modules/es6.date.to-iso-string.js");
__webpack_require__(/*! ./modules/es6.date.to-string */ "./node_modules/core-js/modules/es6.date.to-string.js");
__webpack_require__(/*! ./modules/es6.date.to-primitive */ "./node_modules/core-js/modules/es6.date.to-primitive.js");
__webpack_require__(/*! ./modules/es6.array.is-array */ "./node_modules/core-js/modules/es6.array.is-array.js");
__webpack_require__(/*! ./modules/es6.array.from */ "./node_modules/core-js/modules/es6.array.from.js");
__webpack_require__(/*! ./modules/es6.array.of */ "./node_modules/core-js/modules/es6.array.of.js");
__webpack_require__(/*! ./modules/es6.array.join */ "./node_modules/core-js/modules/es6.array.join.js");
__webpack_require__(/*! ./modules/es6.array.slice */ "./node_modules/core-js/modules/es6.array.slice.js");
__webpack_require__(/*! ./modules/es6.array.sort */ "./node_modules/core-js/modules/es6.array.sort.js");
__webpack_require__(/*! ./modules/es6.array.for-each */ "./node_modules/core-js/modules/es6.array.for-each.js");
__webpack_require__(/*! ./modules/es6.array.map */ "./node_modules/core-js/modules/es6.array.map.js");
__webpack_require__(/*! ./modules/es6.array.filter */ "./node_modules/core-js/modules/es6.array.filter.js");
__webpack_require__(/*! ./modules/es6.array.some */ "./node_modules/core-js/modules/es6.array.some.js");
__webpack_require__(/*! ./modules/es6.array.every */ "./node_modules/core-js/modules/es6.array.every.js");
__webpack_require__(/*! ./modules/es6.array.reduce */ "./node_modules/core-js/modules/es6.array.reduce.js");
__webpack_require__(/*! ./modules/es6.array.reduce-right */ "./node_modules/core-js/modules/es6.array.reduce-right.js");
__webpack_require__(/*! ./modules/es6.array.index-of */ "./node_modules/core-js/modules/es6.array.index-of.js");
__webpack_require__(/*! ./modules/es6.array.last-index-of */ "./node_modules/core-js/modules/es6.array.last-index-of.js");
__webpack_require__(/*! ./modules/es6.array.copy-within */ "./node_modules/core-js/modules/es6.array.copy-within.js");
__webpack_require__(/*! ./modules/es6.array.fill */ "./node_modules/core-js/modules/es6.array.fill.js");
__webpack_require__(/*! ./modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
__webpack_require__(/*! ./modules/es6.array.find-index */ "./node_modules/core-js/modules/es6.array.find-index.js");
__webpack_require__(/*! ./modules/es6.array.species */ "./node_modules/core-js/modules/es6.array.species.js");
__webpack_require__(/*! ./modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
__webpack_require__(/*! ./modules/es6.regexp.constructor */ "./node_modules/core-js/modules/es6.regexp.constructor.js");
__webpack_require__(/*! ./modules/es6.regexp.exec */ "./node_modules/core-js/modules/es6.regexp.exec.js");
__webpack_require__(/*! ./modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
__webpack_require__(/*! ./modules/es6.regexp.flags */ "./node_modules/core-js/modules/es6.regexp.flags.js");
__webpack_require__(/*! ./modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");
__webpack_require__(/*! ./modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
__webpack_require__(/*! ./modules/es6.regexp.search */ "./node_modules/core-js/modules/es6.regexp.search.js");
__webpack_require__(/*! ./modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
__webpack_require__(/*! ./modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
__webpack_require__(/*! ./modules/es6.map */ "./node_modules/core-js/modules/es6.map.js");
__webpack_require__(/*! ./modules/es6.set */ "./node_modules/core-js/modules/es6.set.js");
__webpack_require__(/*! ./modules/es6.weak-map */ "./node_modules/core-js/modules/es6.weak-map.js");
__webpack_require__(/*! ./modules/es6.weak-set */ "./node_modules/core-js/modules/es6.weak-set.js");
__webpack_require__(/*! ./modules/es6.typed.array-buffer */ "./node_modules/core-js/modules/es6.typed.array-buffer.js");
__webpack_require__(/*! ./modules/es6.typed.data-view */ "./node_modules/core-js/modules/es6.typed.data-view.js");
__webpack_require__(/*! ./modules/es6.typed.int8-array */ "./node_modules/core-js/modules/es6.typed.int8-array.js");
__webpack_require__(/*! ./modules/es6.typed.uint8-array */ "./node_modules/core-js/modules/es6.typed.uint8-array.js");
__webpack_require__(/*! ./modules/es6.typed.uint8-clamped-array */ "./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js");
__webpack_require__(/*! ./modules/es6.typed.int16-array */ "./node_modules/core-js/modules/es6.typed.int16-array.js");
__webpack_require__(/*! ./modules/es6.typed.uint16-array */ "./node_modules/core-js/modules/es6.typed.uint16-array.js");
__webpack_require__(/*! ./modules/es6.typed.int32-array */ "./node_modules/core-js/modules/es6.typed.int32-array.js");
__webpack_require__(/*! ./modules/es6.typed.uint32-array */ "./node_modules/core-js/modules/es6.typed.uint32-array.js");
__webpack_require__(/*! ./modules/es6.typed.float32-array */ "./node_modules/core-js/modules/es6.typed.float32-array.js");
__webpack_require__(/*! ./modules/es6.typed.float64-array */ "./node_modules/core-js/modules/es6.typed.float64-array.js");
__webpack_require__(/*! ./modules/es6.reflect.apply */ "./node_modules/core-js/modules/es6.reflect.apply.js");
__webpack_require__(/*! ./modules/es6.reflect.construct */ "./node_modules/core-js/modules/es6.reflect.construct.js");
__webpack_require__(/*! ./modules/es6.reflect.define-property */ "./node_modules/core-js/modules/es6.reflect.define-property.js");
__webpack_require__(/*! ./modules/es6.reflect.delete-property */ "./node_modules/core-js/modules/es6.reflect.delete-property.js");
__webpack_require__(/*! ./modules/es6.reflect.enumerate */ "./node_modules/core-js/modules/es6.reflect.enumerate.js");
__webpack_require__(/*! ./modules/es6.reflect.get */ "./node_modules/core-js/modules/es6.reflect.get.js");
__webpack_require__(/*! ./modules/es6.reflect.get-own-property-descriptor */ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js");
__webpack_require__(/*! ./modules/es6.reflect.get-prototype-of */ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js");
__webpack_require__(/*! ./modules/es6.reflect.has */ "./node_modules/core-js/modules/es6.reflect.has.js");
__webpack_require__(/*! ./modules/es6.reflect.is-extensible */ "./node_modules/core-js/modules/es6.reflect.is-extensible.js");
__webpack_require__(/*! ./modules/es6.reflect.own-keys */ "./node_modules/core-js/modules/es6.reflect.own-keys.js");
__webpack_require__(/*! ./modules/es6.reflect.prevent-extensions */ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js");
__webpack_require__(/*! ./modules/es6.reflect.set */ "./node_modules/core-js/modules/es6.reflect.set.js");
__webpack_require__(/*! ./modules/es6.reflect.set-prototype-of */ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js");
__webpack_require__(/*! ./modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
__webpack_require__(/*! ./modules/es7.array.flat-map */ "./node_modules/core-js/modules/es7.array.flat-map.js");
__webpack_require__(/*! ./modules/es7.array.flatten */ "./node_modules/core-js/modules/es7.array.flatten.js");
__webpack_require__(/*! ./modules/es7.string.at */ "./node_modules/core-js/modules/es7.string.at.js");
__webpack_require__(/*! ./modules/es7.string.pad-start */ "./node_modules/core-js/modules/es7.string.pad-start.js");
__webpack_require__(/*! ./modules/es7.string.pad-end */ "./node_modules/core-js/modules/es7.string.pad-end.js");
__webpack_require__(/*! ./modules/es7.string.trim-left */ "./node_modules/core-js/modules/es7.string.trim-left.js");
__webpack_require__(/*! ./modules/es7.string.trim-right */ "./node_modules/core-js/modules/es7.string.trim-right.js");
__webpack_require__(/*! ./modules/es7.string.match-all */ "./node_modules/core-js/modules/es7.string.match-all.js");
__webpack_require__(/*! ./modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
__webpack_require__(/*! ./modules/es7.symbol.observable */ "./node_modules/core-js/modules/es7.symbol.observable.js");
__webpack_require__(/*! ./modules/es7.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js");
__webpack_require__(/*! ./modules/es7.object.values */ "./node_modules/core-js/modules/es7.object.values.js");
__webpack_require__(/*! ./modules/es7.object.entries */ "./node_modules/core-js/modules/es7.object.entries.js");
__webpack_require__(/*! ./modules/es7.object.define-getter */ "./node_modules/core-js/modules/es7.object.define-getter.js");
__webpack_require__(/*! ./modules/es7.object.define-setter */ "./node_modules/core-js/modules/es7.object.define-setter.js");
__webpack_require__(/*! ./modules/es7.object.lookup-getter */ "./node_modules/core-js/modules/es7.object.lookup-getter.js");
__webpack_require__(/*! ./modules/es7.object.lookup-setter */ "./node_modules/core-js/modules/es7.object.lookup-setter.js");
__webpack_require__(/*! ./modules/es7.map.to-json */ "./node_modules/core-js/modules/es7.map.to-json.js");
__webpack_require__(/*! ./modules/es7.set.to-json */ "./node_modules/core-js/modules/es7.set.to-json.js");
__webpack_require__(/*! ./modules/es7.map.of */ "./node_modules/core-js/modules/es7.map.of.js");
__webpack_require__(/*! ./modules/es7.set.of */ "./node_modules/core-js/modules/es7.set.of.js");
__webpack_require__(/*! ./modules/es7.weak-map.of */ "./node_modules/core-js/modules/es7.weak-map.of.js");
__webpack_require__(/*! ./modules/es7.weak-set.of */ "./node_modules/core-js/modules/es7.weak-set.of.js");
__webpack_require__(/*! ./modules/es7.map.from */ "./node_modules/core-js/modules/es7.map.from.js");
__webpack_require__(/*! ./modules/es7.set.from */ "./node_modules/core-js/modules/es7.set.from.js");
__webpack_require__(/*! ./modules/es7.weak-map.from */ "./node_modules/core-js/modules/es7.weak-map.from.js");
__webpack_require__(/*! ./modules/es7.weak-set.from */ "./node_modules/core-js/modules/es7.weak-set.from.js");
__webpack_require__(/*! ./modules/es7.global */ "./node_modules/core-js/modules/es7.global.js");
__webpack_require__(/*! ./modules/es7.system.global */ "./node_modules/core-js/modules/es7.system.global.js");
__webpack_require__(/*! ./modules/es7.error.is-error */ "./node_modules/core-js/modules/es7.error.is-error.js");
__webpack_require__(/*! ./modules/es7.math.clamp */ "./node_modules/core-js/modules/es7.math.clamp.js");
__webpack_require__(/*! ./modules/es7.math.deg-per-rad */ "./node_modules/core-js/modules/es7.math.deg-per-rad.js");
__webpack_require__(/*! ./modules/es7.math.degrees */ "./node_modules/core-js/modules/es7.math.degrees.js");
__webpack_require__(/*! ./modules/es7.math.fscale */ "./node_modules/core-js/modules/es7.math.fscale.js");
__webpack_require__(/*! ./modules/es7.math.iaddh */ "./node_modules/core-js/modules/es7.math.iaddh.js");
__webpack_require__(/*! ./modules/es7.math.isubh */ "./node_modules/core-js/modules/es7.math.isubh.js");
__webpack_require__(/*! ./modules/es7.math.imulh */ "./node_modules/core-js/modules/es7.math.imulh.js");
__webpack_require__(/*! ./modules/es7.math.rad-per-deg */ "./node_modules/core-js/modules/es7.math.rad-per-deg.js");
__webpack_require__(/*! ./modules/es7.math.radians */ "./node_modules/core-js/modules/es7.math.radians.js");
__webpack_require__(/*! ./modules/es7.math.scale */ "./node_modules/core-js/modules/es7.math.scale.js");
__webpack_require__(/*! ./modules/es7.math.umulh */ "./node_modules/core-js/modules/es7.math.umulh.js");
__webpack_require__(/*! ./modules/es7.math.signbit */ "./node_modules/core-js/modules/es7.math.signbit.js");
__webpack_require__(/*! ./modules/es7.promise.finally */ "./node_modules/core-js/modules/es7.promise.finally.js");
__webpack_require__(/*! ./modules/es7.promise.try */ "./node_modules/core-js/modules/es7.promise.try.js");
__webpack_require__(/*! ./modules/es7.reflect.define-metadata */ "./node_modules/core-js/modules/es7.reflect.define-metadata.js");
__webpack_require__(/*! ./modules/es7.reflect.delete-metadata */ "./node_modules/core-js/modules/es7.reflect.delete-metadata.js");
__webpack_require__(/*! ./modules/es7.reflect.get-metadata */ "./node_modules/core-js/modules/es7.reflect.get-metadata.js");
__webpack_require__(/*! ./modules/es7.reflect.get-metadata-keys */ "./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js");
__webpack_require__(/*! ./modules/es7.reflect.get-own-metadata */ "./node_modules/core-js/modules/es7.reflect.get-own-metadata.js");
__webpack_require__(/*! ./modules/es7.reflect.get-own-metadata-keys */ "./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js");
__webpack_require__(/*! ./modules/es7.reflect.has-metadata */ "./node_modules/core-js/modules/es7.reflect.has-metadata.js");
__webpack_require__(/*! ./modules/es7.reflect.has-own-metadata */ "./node_modules/core-js/modules/es7.reflect.has-own-metadata.js");
__webpack_require__(/*! ./modules/es7.reflect.metadata */ "./node_modules/core-js/modules/es7.reflect.metadata.js");
__webpack_require__(/*! ./modules/es7.asap */ "./node_modules/core-js/modules/es7.asap.js");
__webpack_require__(/*! ./modules/es7.observable */ "./node_modules/core-js/modules/es7.observable.js");
__webpack_require__(/*! ./modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
__webpack_require__(/*! ./modules/web.immediate */ "./node_modules/core-js/modules/web.immediate.js");
__webpack_require__(/*! ./modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ./modules/_core */ "./node_modules/core-js/modules/_core.js");


/***/ }),

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lYXNpbmcudHMiXSwibmFtZXMiOlsiRWFzaW5nRmFjdG9yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0lBSWFBLGE7Ozs7Ozs7Ozs2QkFDdUI7QUFDNUIsYUFBTyxDQUFDLENBQUMsQ0FBQyxDQUFELENBQUQsRUFBTSxDQUFDLENBQUQsQ0FBTixDQUFELEVBQWEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxFQUFNLENBQUMsQ0FBRCxDQUFOLENBQWIsQ0FBUDtBQUNIOzs7aUNBRW1DO0FBQ2hDLGFBQU8sQ0FBQyxDQUFDLENBQUMsSUFBRCxDQUFELEVBQVMsQ0FBQyxDQUFELENBQVQsQ0FBRCxFQUFnQixDQUFDLENBQUMsS0FBRCxDQUFELEVBQVUsQ0FBQyxLQUFELENBQVYsQ0FBaEIsQ0FBUDtBQUNIOzs7a0NBRW9DO0FBQ2pDLGFBQU8sQ0FBQyxDQUFDLENBQUMsSUFBRCxDQUFELEVBQVMsQ0FBQyxLQUFELENBQVQsQ0FBRCxFQUFvQixDQUFDLENBQUMsS0FBRCxDQUFELEVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBcEIsQ0FBUDtBQUNIOzs7b0NBRXNDO0FBQ25DLGFBQU8sQ0FBQyxDQUFDLENBQUMsS0FBRCxDQUFELEVBQVUsQ0FBQyxJQUFELENBQVYsQ0FBRCxFQUFvQixDQUFDLENBQUMsSUFBRCxDQUFELEVBQVMsQ0FBQyxJQUFELENBQVQsQ0FBcEIsQ0FBUDtBQUNIOzs7aUNBRW1DO0FBQ2hDLGFBQU8sQ0FBQyxDQUFDLENBQUMsSUFBRCxDQUFELEVBQVMsQ0FBQyxLQUFELENBQVQsQ0FBRCxFQUFvQixDQUFDLENBQUMsSUFBRCxDQUFELEVBQVMsQ0FBQyxJQUFELENBQVQsQ0FBcEIsQ0FBUDtBQUNIOzs7a0NBRW9DO0FBQ2pDLGFBQU8sQ0FBQyxDQUFDLENBQUMsSUFBRCxDQUFELEVBQVMsQ0FBQyxJQUFELENBQVQsQ0FBRCxFQUFtQixDQUFDLENBQUMsSUFBRCxDQUFELEVBQVMsQ0FBQyxJQUFELENBQVQsQ0FBbkIsQ0FBUDtB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QUFDLElBQUQsQ0FBRCxFQUFTLENBQUMsS0FBRCxDQUFULENBQWxCLENBQVA7QUFDSDs7O2tDQUVvQztBQUNqQyxhQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUQsQ0FBRCxFQUFVLENBQUMsSUFBRCxDQUFWLENBQUQsRUFBb0IsQ0FBQyxDQUFDLEtBQUQsQ0FBRCxFQUFVLENBQUMsQ0FBRCxDQUFWLENBQXBCLENBQVA7QUFDSDs7O29DQUVzQztBQUNuQyxhQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUQsQ0FBRCxFQUFVLENBQUMsS0FBRCxDQUFWLENBQUQsRUFBcUIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxFQUFTLENBQUMsSUFBRCxDQUFULENBQXJCLENBQVA7QUFDSDs7O2lDQUVtQztBQUNoQyxhQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUQsQ0FBRCxFQUFRLENBQUMsQ0FBQyxJQUFGLENBQVIsQ0FBRCxFQUFtQixDQUFDLENBQUMsS0FBRCxDQUFELEVBQVUsQ0FBQyxLQUFELENBQVYsQ0FBbkIsQ0FBUDtBQUNIOzs7a0NBRW9DO0FBQ2pDLGFBQU8sQ0FBQyxDQUFDLENBQUMsS0FBRCxDQUFELEVBQVUsQ0FBQyxLQUFELENBQVYsQ0FBRCxFQUFxQixDQUFDLENBQUMsSUFBRCxDQUFELEVBQVMsQ0FBQyxLQUFELENBQVQsQ0FBckIsQ0FBUDtBQUNIOzs7b0NBRXNDO0FBQ25DLGFBQU8sQ0FBQyxDQUFDLENBQUMsSUFBRCxDQUFELEVBQVMsQ0FBQyxDQUFDLElBQUYsQ0FBVCxDQUFELEVBQW9CLENBQUMsQ0FBQyxLQUFELENBQUQsRUFBVSxDQUFDLElBQUQsQ0FBVixDQUFwQixDQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYXJhbWV0ZXJzIGV4dHJhY3RlZCBmcm9tIGh0dHBzOi8vZWFzaW5ncy5uZXQvXG5cbmV4cG9ydCB0eXBlIEVhc2luZ0Z1bmN0aW9uID0gbnVtYmVyW11bXVtdXG5cbmV4cG9ydCBjbGFzcyBFYXNpbmdGYWN0b3J5IHtcbiAgICBzdGF0aWMgbGluZWFyKCk6IEVhc2luZ0Z1bmN0aW9uIHtcbiAgICAgICAgcmV0dXJuIFtbWzFdLCBbMV1dLCBbWzBdLCBbMF1dXVxuICAgIH1cblxuICAgIHN0YXRpYyBlYXNlSW5TaW5lKCk6IEVhc2luZ0Z1bmN0aW9uIHtcbiAgICAgICAgcmV0dXJuIFtbWzAuNDddLCBbMF1dLCBbWzAuNzQ1XSwgWzAuNzE1XV1dXG4gICAgfVxuXG4gICAgc3RhdGljIGVhc2VPdXRTaW5lKCk6IEVhc2luZ0Z1bmN0aW9uIHtcbiAgICAgICAgcmV0dXJuIFtbWzAuMzldLCBbMC41NzVdXSwgW1swLjU2NV0sIFsxXV1dXG4gICAgfVxuXG4gICAgc3RhdGljIGVhc2VJbk91dFNpbmUoKTogRWFzaW5nRnVuY3Rpb24ge1xuICAgICAgICByZXR1cm4gW1tbMC40NDVdLCBbMC4wNV1dLCBbWzAuNTVdLCBbMC45NV1dXVxuICAgIH1cblxuICAgIHN0YXRpYyBlYXNlSW5RdWFkKCk6IEVhc2luZ0Z1bmN0aW9uIHtcbiAgICAgICAgcmV0dXJuIFtbWzAuNTVdLCBbMC4wODVdXSwgW1swLjY4XSwgWzAuNTNdXV1cbiAgICB9XG5cbiAgICBzdGF0aWMgZWFzZU91dFF1YWQoKTogRWFzaW5nRnVuY3Rpb24ge1xuICAgICAgICByZXR1cm4gW1tbMC4yNV0sIFswLjQ2XV0sIFtbMC40NV0sIFswLjk0XV1dXG4gICAgfVxuXG4gICAgc3RhdGljIGVhc2VJbk91dFF1YWQoKTogRWFzaW5nRnVuY3Rpb24ge1xuICAgICAgICByZXR1cm4gW1tbMC40NTVdLCBbMC4wM11dLCBbWzAuNTE1XSwgWzAuOTU1XV1dXG4gICAgfVxuXG4gICAgc3RhdGljIGVhc2VJbkN1YmljKCk6IEVhc2luZ0Z1bmN0aW9uIHtcbiAgICAgICAgcmV0dXJuIFtbWzAuNTVdLCBbMC4wNTVdXSwgW1swLjY3NV0sIFswLjE5XV1dXG4gICAgfVxuXG4gICAgc3RhdGljIGVhc2VPdXRDdWJpYygpOiBFYXNpbmdGdW5jdGlvbiB7XG4gICAgICAgIHJldHVybiBbW1swLjIxNV0sIFswLjYxXV0sIFtbMC4zNTVdLCBbMV1dXVxuICAgIH1cblxuICAgIHN0YXRpYyBlYXNlSW5PdXRDdWJpYygpOiBFYXNpbmdGdW5jdGlvbiB7XG4gICAgICAgIHJldHVybiBbW1swLjY0NV0sIFswLjA0NV1dLCBbWzAuMzU1XSwgWzFdXV1cbiAgICB9XG5cbiAgICBzdGF0aWMgZWFzZUluUXVhcnQoKTogRWFzaW5nRnVuY3Rpb24ge1xuICAgICAgICByZXR1cm4gW1tbMC44OTVdLCBbMC4wM11dLCBbWzAuNjg1XSwgWzAuMjJdXV1cbiAgICB9XG5cbiAgICBzdGF0aWMgZWFzZU91dFF1YXJ0KCk6IEVhc2luZ0Z1bmN0aW9uIHtcbiAgICAgICAgcmV0dXJuIFtbWzAuMTY1XSwgWzAuODRdXSwgW1swLjQ0XSwgWzFdXV1cbiAgICB9XG5cbiAgICBzdGF0aWMgZWFzZUluT3V0UXVhcnQoKTogRWFzaW5nRnVuY3Rpb24ge1xuICAgICAgICByZXR1cm4gW1tbMC43N10sIFswXV0sIFtbMC4xNzVdLCBbMV1dXVxuICAgIH1cblxuICAgIHN0YXRpYyBlYXNlSW5RdWludCgpOiBFYXNpbmdGdW5jdGlvbiB7XG4gICAgICAgIHJldHVybiBbW1swLjc1NV0sIFswLjA1XV0sIFtbMC44NTVdLCBbMC4wNl1dXVxuICAgIH1cblxuICAgIHN0YXRpYyBlYXNlT3V0UXVpbnQoKTogRWFzaW5nRnVuY3Rpb24ge1xuICAgICAgICByZXR1cm4gW1tbMC4yM10sIFsxXV0sIFtbMC4zMl0sIFsxXV1dXG4gICAgfVxuXG4gICAgc3RhdGljIGVhc2VJbk91dFF1aW50KCk6IEVhc2luZ0Z1bmN0aW9uIHtcbiAgICAgICAgcmV0dXJuIFtbWzAuODZdLCBbMF1dLCBbWzAuMDddLCBbMV1dXVxuICAgIH1cblxuICAgIHN0YXRpYyBlYXNlSW5FeHBvKCk6IEVhc2luZ0Z1bmN0aW9uIHtcbiAgICAgICAgcmV0dXJuIFtbWzAuOTVdLCBbMC4wNV1dLCBbWzAuNzk1XSwgWzAuMDM1XV1dXG4gICAgfVxuXG4gICAgc3RhdGljIGVhc2VPdXRFeHBvKCk6IEVhc2luZ0Z1bmN0aW9uIHtcbiAgICAgICAgcmV0dXJuIFtbWzAuMTldLCBbMV1dLCBbWzAuMjJdLCBbMV1dXVxuICAgIH1cblxuICAgIHN0YXRpYyBlYXNlSW5PdXRFeHBvKCk6IEVhc2luZ0Z1bmN0aW9uIHtcbiAgICAgICAgcmV0dXJuIFtbWzFdLCBbMF1dLCBbWzBdLCBbMV1dXVxuICAgIH1cblxuICAgIHN0YXRpYyBlYXNlSW5DaXJjKCk6IEVhc2luZ0Z1bmN0aW9uIHtcbiAgICAgICAgcmV0dXJuIFtbWzAuNl0sIFswLjA0XV0sIFtbMC45OF0sIFswLjMzNV1dXVxuICAgIH1cblxuICAgIHN0YXRpYyBlYXNlT3V0Q2lyYygpOiBFYXNpbmdGdW5jdGlvbiB7XG4gICAgICAgIHJldHVybiBbW1swLjA3NV0sIFswLjgyXV0sIFtbMC4xNjVdLCBbMV1dXVxuICAgIH1cblxuICAgIHN0YXRpYyBlYXNlSW5PdXRDaXJjKCk6IEVhc2luZ0Z1bmN0aW9uIHtcbiAgICAgICAgcmV0dXJuIFtbWzAuNzg1XSwgWzAuMTM1XV0sIFtbMC4xNV0sIFswLjg2XV1dXG4gICAgfVxuXG4gICAgc3RhdGljIGVhc2VJbkJhY2soKTogRWFzaW5nRnVuY3Rpb24ge1xuICAgICAgICByZXR1cm4gW1tbMC42XSwgWy0wLjI4XV0sIFtbMC43MzVdLCBbMC4wNDVdXV1cbiAgICB9XG5cbiAgICBzdGF0aWMgZWFzZU91dEJhY2soKTogRWFzaW5nRnVuY3Rpb24ge1xuICAgICAgICByZXR1cm4gW1tbMC4xNzVdLCBbMC44ODVdXSwgW1swLjMyXSwgWzEuMjc1XV1dXG4gICAgfVxuXG4gICAgc3RhdGljIGVhc2VJbk91dEJhY2soKTogRWFzaW5nRnVuY3Rpb24ge1xuICAgICAgICByZXR1cm4gW1tbMC42OF0sIFstMC41NV1dLCBbWzAuMjY1XSwgWzEuNTVdXV1cbiAgICB9XG59Il19

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9oZWxwZXIudHMiXSwibmFtZXMiOlsiY2FsY3VsYXRlQmFzZVRyYW5zZm9ybSIsImRvbSIsInJvb3QiLCJnZXRTY3JlZW5DVE0iLCJpbnZlcnNlIiwibXVsdGlwbHkiLCJnZXRCb3VuZGluZ0JveCIsInN2Z1Jvb3QiLCJwYXJlbnRFbGVtZW50IiwiU1ZHR3JhcGhpY3NFbGVtZW50IiwiYmFzZUJveCIsInJlZkJCb3giLCJnZXRCQm94IiwiY29vcmRpbmF0ZSIsImUiLCJ4IiwiZiIsInkiLCJ3aWR0aCIsImhlaWdodCIsImdldExlYWZOb2RlcyIsIm1hc3RlciIsIm5vZGVzIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImxlYWZOb2RlcyIsImZpbHRlciIsImVsZW0iLCJoYXNDaGlsZE5vZGVzIiwiaSIsImNoaWxkTm9kZXMiLCJsZW5ndGgiLCJub2RlVHlwZSIsImdldEJhc2VsaW5lSGVpZ2h0IiwiY2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY3R4IiwiZ2V0Q29udGV4dCIsImNvbXB1dGVkU3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiZm9udFNldHRpbmdzIiwiZm9udCIsInRleHRNZXRyaXgiLCJtZWFzdXJlVGV4dCIsImFjdHVhbEJvdW5kaW5nQm94RGVzY2VudCIsImVuY29kZUxpbmVDYXAiLCJ0eXBlIiwiZW5jb2RlTGluZUpvaW4iLCJlbmNvZGVUZXh0QW5jaG9yIiwiZ3JlYXRlc3RDb21tb25EaXZpc29yIiwiTWF0aCIsImFicyIsInQiLCJsZWFzdENvbW1vbk11bHRpcGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBTyxTQUFTQSxzQkFBVCxDQUFnQ0MsR0FBaEMsRUFBeURDLElBQXpELEVBQW1GO0FBQ3RGO0FBRUEsU0FBT0EsSUFBSSxDQUFDQyxZQUFMLEdBQXFCQyxPQUFyQixHQUErQkMsUUFBL0IsQ0FBd0NKLEdBQUcsQ0FBQ0Us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Q0ksU0FBSyxRQUFMO0FBQ0ksYUFBTyxDQUFQOztBQUNKLFNBQUssS0FBTDtBQUNJLGFBQU8sQ0FBUDs7QUFDSjtBQUNJLGFBQU8sQ0FBUDtBQU5SO0FBUUg7O0FBRU0sU0FBU0cscUJBQVQsQ0FBK0J0QyxDQUEvQixFQUEwQ0UsQ0FBMUMsRUFBNkQ7QUFDaEVGLEVBQUFBLENBQUMsR0FBR3VDLElBQUksQ0FBQ0MsR0FBTCxDQUFTeEMsQ0FBVCxDQUFKO0FBQ0FFLEVBQUFBLENBQUMsR0FBR3FDLElBQUksQ0FBQ0MsR0FBTCxDQUFTdEMsQ0FBVCxDQUFKOztBQUNBLFNBQU9BLENBQVAsRUFBVTtBQUNOLFFBQUl1QyxDQUFDLEdBQUd2QyxDQUFSO0FBQ0FBLElBQUFBLENBQUMsR0FBR0YsQ0FBQyxHQUFHRSxDQUFSO0FBQ0FGLElBQUFBLENBQUMsR0FBR3lDLENBQUo7QUFDSDs7QUFDRCxTQUFPekMsQ0FBUDtBQUNIOztBQUVNLFNBQVMwQyxtQkFBVCxDQUE2QjFDLENBQTdCLEVBQXdDRSxDQUF4QyxFQUEyRDtBQUM5RCxTQUFRLENBQUNGLENBQUQsSUFBTSxDQUFDRSxDQUFSLEdBQWEsQ0FBYixHQUFpQnFDLElBQUksQ0FBQ0MsR0FBTCxDQUFVeEMsQ0FBQyxHQUFHRSxDQUFMLEdBQVVvQyxxQkFBcUIsQ0FBQ3RDLENBQUQsRUFBSUUsQ0FBSixDQUF4QyxDQUF4QjtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUJhc2VUcmFuc2Zvcm0oZG9tOiBTVkdHcmFwaGljc0VsZW1lbnQsIHJvb3Q6IFNWR0dyYXBoaWNzRWxlbWVudCkge1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9kYWdyZWpzL2RhZ3JlLWQzL2lzc3Vlcy8yMDJcblxuICAgIHJldHVybiByb290LmdldFNjcmVlbkNUTSgpIS5pbnZlcnNlKCkubXVsdGlwbHkoZG9tLmdldFNjcmVlbkNUTSgpISlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJvdW5kaW5nQm94KGRvbTogU1ZHR3JhcGhpY3NFbGVtZW50KSB7XG4gICAgbGV0IHN2Z1Jvb3Q6IFNWR0dyYXBoaWNzRWxlbWVudCA9IGRvbVxuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIGlmIChzdmdSb290LnBhcmVudEVsZW1lbnQgaW5zdGFuY2VvZiBTVkdHcmFwaGljc0VsZW1lbnQpIHtcbiAgICAgICAgICAgIHN2Z1Jvb3QgPSBzdmdSb290LnBhcmVudEVsZW1lbnRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgYmFzZUJveCA9IGNhbGN1bGF0ZUJhc2VUcmFuc2Zvcm0oZG9tLCBzdmdSb290KVxuICAgIGNvbnN0IHJlZkJCb3ggPSBkb20uZ2V0QkJveCgpXG4gICAgY29uc3QgY29vcmRpbmF0ZTogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl0gPSBbYmFzZUJveC5lICsgcmVmQkJveC54LCBiYXNlQm94LmYgKyByZWZCQm94LnksIHJlZkJCb3gud2lkdGggKyAxLCByZWZCQm94LmhlaWdodCArIDFdXG4gICAgcmV0dXJuIGNvb3JkaW5hdGVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExlYWZOb2RlcyhtYXN0ZXI6IFNWR0dyYXBoaWNzRWxlbWVudCk6IFNWR0dyYXBoaWNzRWxlbWVudFtdIHtcbiAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMjI4OTM5MS9ob3ctdG8tY3JlYXRlLWFuLWFycmF5LW9mLWxlYWYtbm9kZXMtb2YtYW4taHRtbC1kb20tdXNpbmctamF2YXNjcmlwdFxuXG4gICAgdmFyIG5vZGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobWFzdGVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKSwgMCk7XG4gICAgdmFyIGxlYWZOb2RlcyA9IG5vZGVzLmZpbHRlcihmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICBpZiAoZWxlbS5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgICAgIC8vIHNlZSBpZiBhbnkgb2YgdGhlIGNoaWxkIG5vZGVzIGFyZSBlbGVtZW50c1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbS5jaGlsZE5vZGVzW2ldLm5vZGVUeXBlID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlcmUgaXMgYSBjaGlsZCBlbGVtZW50LCBzbyByZXR1cm4gZmFsc2UgdG8gbm90IGluY2x1ZGVcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBwYXJlbnQgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICAgIHJldHVybiBsZWFmTm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCYXNlbGluZUhlaWdodChkb206IFNWR1RleHRFbGVtZW50KSB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSFcbiAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShkb20pXG4gICAgY29uc3QgZm9udFNldHRpbmdzID0gY29tcHV0ZWRTdHlsZS5mb250XG5cbiAgICBjdHguZm9udCA9IGZvbnRTZXR0aW5nc1xuICAgIGNvbnN0IHRleHRNZXRyaXggPSBjdHgubWVhc3VyZVRleHQoJ3lwZmdq4paIJylcbiAgICByZXR1cm4gdGV4dE1ldHJpeC5hY3R1YWxCb3VuZGluZ0JveERlc2NlbnQgfHwgMFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlTGluZUNhcCh0eXBlPzogc3RyaW5nIHwgbnVsbCk6IG51bWJlciB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ3NxdWFyZSc6XG4gICAgICAgICAgICByZXR1cm4gM1xuICAgICAgICBjYXNlICdidXR0JzpcbiAgICAgICAgICAgIHJldHVybiAxXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gMlxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZUxpbmVKb2luKHR5cGU/OiBzdHJpbmcgfCBudWxsKTogbnVtYmVyIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnbWl0ZXInOlxuICAgICAgICAgICAgcmV0dXJuIDFcbiAgICAgICAgY2FzZSAnYmV2ZWwnOlxuICAgICAgICAgICAgcmV0dXJuIDNcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiAyXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlVGV4dEFuY2hvcih0eXBlPzogc3RyaW5nIHwgbnVsbCk6IG51bWJlciB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ21pZGRsZSc6XG4gICAgICAgICAgICByZXR1cm4gMlxuICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgcmV0dXJuIDFcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiAwXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3JlYXRlc3RDb21tb25EaXZpc29yKHg6IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICB4ID0gTWF0aC5hYnMoeCk7XG4gICAgeSA9IE1hdGguYWJzKHkpO1xuICAgIHdoaWxlICh5KSB7XG4gICAgICAgIHZhciB0ID0geTtcbiAgICAgICAgeSA9IHggJSB5O1xuICAgICAgICB4ID0gdDtcbiAgICB9XG4gICAgcmV0dXJuIHg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWFzdENvbW1vbk11bHRpcGxlKHg6IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gKCF4IHx8ICF5KSA/IDAgOiBNYXRoLmFicygoeCAqIHkpIC8gZ3JlYXRlc3RDb21tb25EaXZpc29yKHgsIHkpKTtcbn0iXX0=

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9qc21vdmluLnRzIl0sIm5hbWVzIjpbIkpTTW92aW4iLCJmcHMiLCJ3aWR0aCIsImhlaWdodCIsInJvb3QiLCJmciIsInciLCJoIiwiZGRkIiwibGF5ZXJzIiwiYXNzZXRzIiwiZm9udHMiLCJsaXN0IiwiaXAiLCJvcCIsImRvbUxheWVyT3JBc3NldElkIiwibGF5ZXIiLCJTVkdHcmFwaGljc0VsZW1lbnQiLCJMYXllckZhY3RvcnkiLCJoaWVyYXJjaHkiLCJyZWYiLCJzcGxpY2UiLCJtYXNrT3JEb20iLCJsYXllclJlZk9ySW5kZXgiLCJtYXNrVHlwZSIsIk1hc2tUeXBlIiwiQWxwaGEiLCJsYXllclJlZiIsImxheWVySW5kZXgiLCJKU01vdmluTGF5ZXIiLCJpbmRleE9mIiwidHQiLCJFcnJvciIsIm1hc2tMYXllciIsImxheWVyUmVmcyIsImZvckVhY2giLCJpbm5lckluZGV4IiwibWFzayIsIm1hcCIsInNvcnQiLCJhIiwiYiIsImFJbmRleCIsImJJbmRleCIsImxheWVyV3JhcHBlciIsInJlZklkIiwicHVzaCIsImlkIiwibWF4VGltZSIsInJlZHVjZSIsInAiLCJ2IiwidW5pZm9ybSIsIkpTT04iLCJwYXJzZSIsInRvSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUNBOztBQTBNQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBek1xQkEsTzs7O0FBR2pCOzs7OztBQUtBLHFCQUF5RTtBQUFBLFFBQTdEQyxHQUE2RCx1RUFBL0MsRUFBK0M7QUFBQSxRQUEzQ0MsS0FBMkMsdUVBQTNCLEdBQTJCO0FBQUEsUUFBdEJDLE1BQXNCLHVFQUFMLEdBQUs7O0FBQUE7O0FBQUE7O0FBQ3JFLFNBQUtDLElBQUwsR0FBWTtBQUNSQyxNQUFBQSxFQUFFLEVBQUVKLEdBREk7QUFFUkssTUFBQUEsQ0FBQyxFQUFFSixLQUZLO0FBR1JLLE1BQUFBLENBQUMsRUFBRUosTUFISztBQUlSSyxNQUFBQSxH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SUksS0FBSixDQUFVLGtEQUFWLENBQU47QUFDSDtBQUNKO0FBRUQ7Ozs7OztrQ0FHYztBQUNWLFdBQUs1QixJQUFMLENBQVVLLE1BQVYsR0FBbUIsRUFBbkI7QUFDSDtBQUVEOzs7Ozs7OEJBR1U7QUFDTixVQUFJdUMsT0FBTyxHQUFHLEtBQUs1QyxJQUFMLENBQVVLLE1BQVYsQ0FBa0J3QyxNQUFsQixDQUF5QixVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxlQUFVRCxDQUFDLEdBQUdDLENBQUMsQ0FBQ3JDLEVBQU4sR0FBWXFDLENBQUMsQ0FBQ3JDLEVBQWQsR0FBb0JvQyxDQUE5QjtBQUFBLE9BQXpCLEVBQTBELENBQTFELENBQWQ7QUFDQSxXQUFLOUMsSUFBTCxDQUFVVSxFQUFWLEdBQWVrQyxPQUFmO0FBQ0EsV0FBSzVDLElBQUwsQ0FBVUssTUFBVixDQUFrQjBCLE9BQWxCLENBQTBCLFVBQUFuQixLQUFLO0FBQUEsZUFBSUEsS0FBSyxDQUFDRixFQUFOLEdBQVdrQyxPQUFmO0FBQUEsT0FBL0I7QUFDSDtBQUVEOzs7Ozs7K0JBR1c7QUFDUCxXQUFLSSxPQUFMO0FBQ0EsYUFBT0MsSUFBSSxDQUFDQyxLQUFMLENBQVcsS0FBS0MsTUFBTCxFQUFYLENBQVA7QUFDSDtBQUVEOzs7Ozs7NkJBR1M7QUFDTCxXQUFLSCxPQUFMO0FBQ0EsYUFBT0MsSUFBSSxDQUFDRyxTQUFMLENBQWUsS0FBS3BELElBQXBCLENBQVA7QUFDSDs7Ozs7OztJQU1PcUIsUTs7O1dBQUFBLFE7QUFBQUEsRUFBQUEsUSxDQUFBQSxRO0FBQUFBLEVBQUFBLFEsQ0FBQUEsUTtBQUFBQSxFQUFBQSxRLENBQUFBLFE7QUFBQUEsRUFBQUEsUSxDQUFBQSxRO0dBQUFBLFEsd0JBQUFBLFEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbmltYXRpb24sIFNoYXBlTGF5ZXIsIFJlZmVyZW5jZUlEIH0gZnJvbSBcIi4vYW5pbWF0aW9uXCI7XG5pbXBvcnQgeyBKU01vdmluTGF5ZXIsIExheWVyRmFjdG9yeSB9IGZyb20gJy4vbGF5ZXInXG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkL3Y0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSlNNb3ZpbiB7XG4gICAgcHJpdmF0ZSByb290OiBBbmltYXRpb247XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gZnBzIG51bWJlciBvZiBmcmFtZXMgcGVyIHNlY29uZFxuICAgICAqIEBwYXJhbSB3aWR0aCB3aWR0aCBvZiB2aWV3cG9ydCAocHgpXG4gICAgICogQHBhcmFtIGhlaWdodCBoZWlnaHQgb2Ygdmlld3BvcnQgKHB4KVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGZwczogbnVtYmVyID0gMzAsIHdpZHRoOiBudW1iZXIgPSA4MDAsIGhlaWdodDogbnVtYmVyID0gNjAwKSB7XG4gICAgICAgIHRoaXMucm9vdCA9IHtcbiAgICAgICAgICAgIGZyOiBmcHMsXG4gICAgICAgICAgICB3OiB3aWR0aCxcbiAgICAgICAgICAgIGg6IGhlaWdodCxcbiAgICAgICAgICAgIGRkZDogMCxcbiAgICAgICAgICAgIGxheWVyczogW10sXG4gICAgICAgICAgICBhc3NldHM6IFtdLFxuICAgICAgICAgICAgZm9udHM6IHtcbiAgICAgICAgICAgICAgICBsaXN0OiBbXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlwOiAwLFxuICAgICAgICAgICAgb3A6IDBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBmcHMgbnVtYmVyIG9mIGZyYW1lcyBwZXIgc2Vjb25kXG4gICAgICovXG4gICAgc2V0RnJhbWVSYXRlKGZwczogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMucm9vdC5mciA9IGZwc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB3aWR0aCB3aWR0aCBvZiB2aWV3cG9ydCAocHgpXG4gICAgICogQHBhcmFtIGhlaWdodCBoZWlnaHQgb2Ygdmlld3BvcnQgKHB4KVxuICAgICAqL1xuICAgIHNldFZpZXdwb3J0KHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMucm9vdC53ID0gd2lkdGhcbiAgICAgICAgdGhpcy5yb290LmggPSBoZWlnaHRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBhZGQgYSBzaW1wbGUgZ3JhcGhpY2FsIGxheWVyXG4gICAgICogQHBhcmFtIGRvbUxheWVyT3JBc3NldElkIGEgU1ZHIGVsZW1lbnQgRE9NIG9yIEpTTW92aW5MYXllciBvciBhc3NldCBJRCBuZWVkcyB0byBiZSBpbnNlcnRlZFxuICAgICAqL1xuICAgIGFkZExheWVyKGRvbUxheWVyT3JBc3NldElkOiBTVkdHcmFwaGljc0VsZW1lbnQgfCBKU01vdmluTGF5ZXIgfCBSZWZlcmVuY2VJRCk6IEpTTW92aW5MYXllciB7XG4gICAgICAgIGxldCBsYXllcjogSlNNb3ZpbkxheWVyO1xuICAgICAgICBpZiAoZG9tTGF5ZXJPckFzc2V0SWQgaW5zdGFuY2VvZiBTVkdHcmFwaGljc0VsZW1lbnQpIHtcbiAgICAgICAgICAgIGxheWVyID0gTGF5ZXJGYWN0b3J5LmhpZXJhcmNoeShkb21MYXllck9yQXNzZXRJZCwgdGhpcy5yb290LmFzc2V0cyEsIHRoaXMucm9vdC5mb250cyEpXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIChkb21MYXllck9yQXNzZXRJZCkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBsYXllciA9IExheWVyRmFjdG9yeS5yZWYoZG9tTGF5ZXJPckFzc2V0SWQpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsYXllciA9IGRvbUxheWVyT3JBc3NldElkXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yb290LmxheWVycyEuc3BsaWNlKDAsIDAsIGxheWVyLnJvb3QpXG4gICAgICAgIHJldHVybiBsYXllclxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBtYXNrT3JEb20gYSBTVkcgZWxlbWVudCBET00gb3IgSlNNb3ZpbkxheWVyIHRvIGJlIHRoZSBtYXNrXG4gICAgICogQHBhcmFtIGxheWVyUmVmT3JJbmRleCBhIEpTTW92aW5MYXllciBvciBpbmRleCBvZiBsYXllciB0byBiZSB0aGUgbWFza2VkIGxheWVyXG4gICAgICogQHBhcmFtIG1hc2tUeXBlIHdoaWNoIHR5cGUgb2YgbWFzayB0byB1c2UsIHVzZSBgTWFza1R5cGUuKmAgdG8gc3BlY2lmeVxuICAgICAqL1xuICAgIGFkZE1hc2sobWFza09yRG9tOiBKU01vdmluTGF5ZXIgfCBTVkdHcmFwaGljc0VsZW1lbnQsIGxheWVyUmVmT3JJbmRleDogbnVtYmVyIHwgSlNNb3ZpbkxheWVyLCBtYXNrVHlwZTogTWFza1R5cGUgPSBNYXNrVHlwZS5BbHBoYSkge1xuICAgICAgICBsZXQgbGF5ZXJSZWY6IEpTTW92aW5MYXllclxuICAgICAgICBsZXQgbGF5ZXJJbmRleDogbnVtYmVyXG4gICAgICAgIGlmIChsYXllclJlZk9ySW5kZXggaW5zdGFuY2VvZiBKU01vdmluTGF5ZXIpIHtcbiAgICAgICAgICAgIGxheWVyUmVmID0gbGF5ZXJSZWZPckluZGV4XG4gICAgICAgICAgICBsYXllckluZGV4ID0gdGhpcy5yb290LmxheWVycyEuaW5kZXhPZihsYXllclJlZi5yb290KVxuICAgICAgICAgICAgbGF5ZXJSZWYucm9vdC50dCA9IG1hc2tUeXBlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsYXllckluZGV4ID0gbGF5ZXJSZWZPckluZGV4XG4gICAgICAgICAgICB0aGlzLnJvb3QubGF5ZXJzIVtsYXllckluZGV4XS50dCA9IG1hc2tUeXBlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxheWVySW5kZXggPCAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0dpdmVuIGxheWVyIGlzIG5vdCBhIG1lbWJlciBvZiB0aGlzIEpTTW92aW4uJylcbiAgICAgICAgfVxuICAgICAgICBsZXQgbWFza0xheWVyOiBKU01vdmluTGF5ZXJcbiAgICAgICAgaWYgKG1hc2tPckRvbSBpbnN0YW5jZW9mIFNWR0dyYXBoaWNzRWxlbWVudCkge1xuICAgICAgICAgICAgbWFza0xheWVyID0gTGF5ZXJGYWN0b3J5LmhpZXJhcmNoeShtYXNrT3JEb20sIHRoaXMucm9vdC5hc3NldHMhLCB0aGlzLnJvb3QuZm9udHMhKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWFza0xheWVyID0gbWFza09yRG9tXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yb290LmxheWVycyEuc3BsaWNlKGxheWVySW5kZXgsIDAsIG1hc2tMYXllci5yb290KVxuICAgICAgICByZXR1cm4gbWFza0xheWVyXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGxheWVyUmVmcyBhIHNldCBvZiBsYXllcnMgdG8gYmUgcGFja2VkIGFzIGFuIGFzc2V0XG4gICAgICovXG4gICAgbWFrZUFzc2V0KGxheWVyUmVmczogSlNNb3ZpbkxheWVyW10pOiBSZWZlcmVuY2VJRCB7XG4gICAgICAgIGxheWVyUmVmcy5mb3JFYWNoKChsYXllciwgaW5uZXJJbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGxheWVyLnJvb3QudHQgPT0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxheWVySW5kZXggPSB0aGlzLnJvb3QubGF5ZXJzIS5pbmRleE9mKGxheWVyLnJvb3QpXG4gICAgICAgICAgICAgICAgaWYgKGxheWVySW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hc2sgPSB0aGlzLnJvb3QubGF5ZXJzIVtsYXllckluZGV4IC0gMV1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlubmVySW5kZXggPT0gMCB8fCBsYXllclJlZnNbaW5uZXJJbmRleCAtIDFdLnJvb3QgIT0gbWFzaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJSZWZzLnNwbGljZShpbm5lckluZGV4LCAwLCBuZXcgSlNNb3ZpbkxheWVyKG1hc2sgYXMgU2hhcGVMYXllcikpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGxheWVyUmVmcyA9IGxheWVyUmVmcy5tYXAoKGxheWVyLCBpbm5lckluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxheWVyLFxuICAgICAgICAgICAgICAgIGlubmVySW5kZXhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgY29uc3QgYUluZGV4ID0gdGhpcy5yb290LmxheWVycyEuaW5kZXhPZihhLmxheWVyLnJvb3QpXG4gICAgICAgICAgICBjb25zdCBiSW5kZXggPSB0aGlzLnJvb3QubGF5ZXJzIS5pbmRleE9mKGIubGF5ZXIucm9vdClcbiAgICAgICAgICAgIHJldHVybiAoYUluZGV4IC0gYkluZGV4KSB8fCAoYS5pbm5lckluZGV4IC0gYi5pbm5lckluZGV4KVxuICAgICAgICB9KS5tYXAobGF5ZXJXcmFwcGVyID0+IGxheWVyV3JhcHBlci5sYXllcilcbiAgICAgICAgbGF5ZXJSZWZzLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGF5ZXJJbmRleCA9IHRoaXMucm9vdC5sYXllcnMhLmluZGV4T2YobGF5ZXIucm9vdClcbiAgICAgICAgICAgIGlmIChsYXllckluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucm9vdC5sYXllcnMhLnNwbGljZShsYXllckluZGV4LCAxKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGF5ZXIucm9vdC5vcCA9IDllOVxuICAgICAgICB9KVxuICAgICAgICBjb25zdCByZWZJZCA9IHV1aWQoKVxuICAgICAgICB0aGlzLnJvb3QuYXNzZXRzIS5wdXNoKHtcbiAgICAgICAgICAgIGlkOiByZWZJZCxcbiAgICAgICAgICAgIGxheWVyczogbGF5ZXJSZWZzLm1hcChsYXllclJlZiA9PiBsYXllclJlZi5yb290KVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gcmVmSWRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gbGF5ZXJSZWZPckluZGV4IGEgSlNNb3ZpbkxheWVyIG9yIGluZGV4IG9mIGxheWVyIHRvIHJlbW92ZVxuICAgICAqL1xuICAgIHJlbW92ZUxheWVyKGxheWVyUmVmT3JJbmRleDogbnVtYmVyIHwgSlNNb3ZpbkxheWVyKSB7XG4gICAgICAgIGxldCBsYXllclJlZjogSlNNb3ZpbkxheWVyXG4gICAgICAgIGxldCBsYXllckluZGV4OiBudW1iZXJcbiAgICAgICAgaWYgKGxheWVyUmVmT3JJbmRleCBpbnN0YW5jZW9mIEpTTW92aW5MYXllcikge1xuICAgICAgICAgICAgbGF5ZXJSZWYgPSBsYXllclJlZk9ySW5kZXhcbiAgICAgICAgICAgIGxheWVySW5kZXggPSB0aGlzLnJvb3QubGF5ZXJzIS5pbmRleE9mKGxheWVyUmVmLnJvb3QpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsYXllckluZGV4ID0gbGF5ZXJSZWZPckluZGV4XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yb290LmxheWVycyEuc3BsaWNlKGxheWVySW5kZXgsIDEpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGxheWVyUmVmT3JJbmRleCBhIEpTTW92aW5MYXllciBvciBpbmRleCBvZiBtYXNrIG9yIG1hc2tlZCBsYXllciB0byByZW1vdmVcbiAgICAgKi9cbiAgICByZW1vdmVNYXNrKGxheWVyUmVmT3JJbmRleDogbnVtYmVyIHwgSlNNb3ZpbkxheWVyKSB7XG4gICAgICAgIGxldCBsYXllclJlZjogSlNNb3ZpbkxheWVyXG4gICAgICAgIGxldCBsYXllckluZGV4OiBudW1iZXJcbiAgICAgICAgaWYgKGxheWVyUmVmT3JJbmRleCBpbnN0YW5jZW9mIEpTTW92aW5MYXllcikge1xuICAgICAgICAgICAgbGF5ZXJSZWYgPSBsYXllclJlZk9ySW5kZXhcbiAgICAgICAgICAgIGxheWVySW5kZXggPSB0aGlzLnJvb3QubGF5ZXJzIS5pbmRleE9mKGxheWVyUmVmLnJvb3QpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsYXllckluZGV4ID0gbGF5ZXJSZWZPckluZGV4XG4gICAgICAgICAgICBsYXllclJlZiA9IG5ldyBKU01vdmluTGF5ZXIodGhpcy5yb290LmxheWVycyFbbGF5ZXJJbmRleF0gYXMgU2hhcGVMYXllcilcbiAgICAgICAgfVxuICAgICAgICBpZiAobGF5ZXJSZWYucm9vdC50dCkge1xuICAgICAgICAgICAgbGF5ZXJSZWYucm9vdC50dCA9IDBcbiAgICAgICAgICAgIHRoaXMucm9vdC5sYXllcnMhLnNwbGljZShsYXllckluZGV4IC0gMSwgMSlcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJvb3QubGF5ZXJzIVtsYXllckluZGV4ICsgMV0udHQpIHtcbiAgICAgICAgICAgIHRoaXMucm9vdC5sYXllcnMhW2xheWVySW5kZXggKyAxXS50dCA9IDBcbiAgICAgICAgICAgIHRoaXMucm9vdC5sYXllcnMhLnNwbGljZShsYXllckluZGV4LCAxKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgaW5wdXQgbGF5ZXIgaXMgbm90IGEgbWFzayBvciBhIG1hc2tlZCBsYXllci4nKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogY2xlYXIgYWxsIGxheWVyc1xuICAgICAqL1xuICAgIGNsZWFyTGF5ZXJzKCkge1xuICAgICAgICB0aGlzLnJvb3QubGF5ZXJzID0gW11cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBtYWtlIGFsbCBsYXllcnMgZW5kIGF0IHNhbWUgdGltZVxuICAgICAqL1xuICAgIHVuaWZvcm0oKSB7XG4gICAgICAgIGxldCBtYXhUaW1lID0gdGhpcy5yb290LmxheWVycyEucmVkdWNlKChwLCB2KSA9PiBwIDwgdi5vcCEgPyB2Lm9wISA6IHAsIDApXG4gICAgICAgIHRoaXMucm9vdC5vcCA9IG1heFRpbWVcbiAgICAgICAgdGhpcy5yb290LmxheWVycyEuZm9yRWFjaChsYXllciA9PiBsYXllci5vcCA9IG1heFRpbWUpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZXhwb3J0IExvdHRpZSBhcyBKYXZhU2NyaXB0IE9iamVjdCBcbiAgICAgKi9cbiAgICB0b09iamVjdCgpIHtcbiAgICAgICAgdGhpcy51bmlmb3JtKClcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodGhpcy50b0pTT04oKSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBleHBvcnQgTG90dGllIGFzIEpTT04gdGV4dFxuICAgICAqL1xuICAgIHRvSlNPTigpIHtcbiAgICAgICAgdGhpcy51bmlmb3JtKClcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMucm9vdClcbiAgICB9XG59XG5cbmV4cG9ydCB7IExheWVyRmFjdG9yeSB9IGZyb20gJy4vbGF5ZXInXG5leHBvcnQgeyBFYXNpbmdGYWN0b3J5IH0gZnJvbSAnLi9lYXNpbmcnXG5leHBvcnQgeyBQYXRoTWFrZXIgfSBmcm9tICcuL3BhdGgnXG5leHBvcnQgZW51bSBNYXNrVHlwZSB7XG4gICAgQWxwaGEgPSAxLFxuICAgIEludmVydEFscGhhID0gMixcbiAgICBMdW1hID0gMyxcbiAgICBJbnZlcnRMdW1hID0gNFxufSJdfQ==

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

      this.timeRange[key] = Math.max(this.timeRange[key] || 0, endFrame + 1);
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
        this.addKeyframe(base, k, index, endFrame, endValue, _easing.EasingFactory.linear(), wrap);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sYXllci50cyJdLCJuYW1lcyI6WyJKU01vdmluTGF5ZXIiLCJrZXkiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJhbmNob3IiLCJwb3NpdGlvbiIsInMiLCJrIiwiZSIsIm8iLCJ0cmFuc2Zvcm0iLCJhIiwiZ2V0RGVmYXVsdFByb3BlcnR5Iiwic3RhdGljVmFsdWUiLCJpZHgiLCJ0aW1lIiwidmFsdWUiLCJlYXNpbmciLCJ3cmFwIiwiZXhpc3RLZXlmcmFtZSIsImZpbHRlciIsIngiLCJ0IiwicmVhZHlUb1NldCIsImxlbmd0aCIsInByZXZpb3VzS2V5ZnJhbWVDb3VudCIsInJlZHVjZSIsInAiLCJzcGxpY2UiLCJ5IiwiaSIsIkFycmF5Iiwicm9vdCIsInNoYXBlcyIsIml0IiwiZmluZCIsInNoYXBlIiwidHkiLCJmaW5kUHJvcGVydHlDb25maWciLCJoYXNUcmFuc2Zvcm0iLCJjb25maWciLCJncm91cFNoYXBlcyIsInB1c2giLCJiYXNlIiwiaW5kZXgiLCJrcyIsImZpbmRPckluc2VydFByb3BlcnR5Q29uZmlnIiwib3AiLCJNYXRoIiwibWF4IiwiT2JqZWN0IiwidmFsdWVzIiwidGltZVJhbmdlIiwicmVmIiwidXBkYXRlVGltZVJhbmdlIiwiUGF0aE1ha2VyIiwidW5pZm9ybSIsInBhdGgiLCJjb21tb25Qcm9wZXJ0eU1hcHBpbmciLCJ1bmRlZmluZWQiLCJkb2MiLCJkIiwiY29uc29sZSIsImVycm9yIiwiRXJyb3IiLCJjb252ZXJ0VG9TdGF0aWNQcm9wZXJ0eSIsInN0YXJ0RnJhbWUiLCJlbmRGcmFtZSIsInN0YXJ0VmFsdWUiLCJlbmRWYWx1ZSIsIkVhc2luZ0ZhY3RvcnkiLCJsaW5lYXIiLCJmb3JFYWNoIiwidiIsInN0YXJ0TGluZUNvdW50IiwiZW5kTGluZUNvdW50IiwibWluIiwibmVlZENvcHkiLCJuZWVkTGVuZ3RoIiwiZmlsbCIsImNvbW1vbk11bHRpcGxlIiwidXBzYW1wbGUiLCJyb3VuZCIsIm1hcCIsInRleHRQcm9wIiwidG1wU3RhcnRWYWx1ZSIsInRtcEVuZFZhbHVlIiwiY29udmVydFRvQW5pbWF0YWJsZVByb3BlcnR5IiwiYWRkS2V5ZnJhbWUiLCJMYXllckZhY3RvcnkiLCJjb29yZGluYXRlIiwiciIsImRvbSIsImJvdW5kaW5nQm94IiwicmVjdCIsImxheWVyIiwiZGRkIiwic3IiLCJhbyIsImdlbmVyYXRlVHJhbnNmb3JtIiwiaXAiLCJzdCIsImJtIiwibGVmdCIsInRvcCIsIndpZHRoIiwiaGVpZ2h0IiwiY3giLCJjeSIsInJ4IiwicnkiLCJpZCIsInciLCJoIiwicmVmSWQiLCJhc3NldExpc3QiLCJmb250TGlzdCIsImRvbVR5cGUiLCJTVkdUZXh0RWxlbWVudCIsIlNWR0ltYWdlRWxlbWVudCIsIlNWR0dFbGVtZW50IiwiZG9tTGVhdmVzIiwicHJlY29tcExheWVyIiwicHJlQ29tcEFzc2V0IiwicHJlQ29tcFJlZklkIiwiU1ZHR3JhcGhpY3NFbGVtZW50IiwidW5zaGlmdCIsImhpZXJhcmNoeSIsImxheWVycyIsInNoYXBlTGF5ZXIiLCJpbWFnZUxheWVyIiwiaW1hZ2VSZWZJZCIsImltYWdlQXNzZXQiLCJ0ZXh0TGF5ZXIiLCJiYXNlTGluZUhlaWdodCIsInRleHRBbmNob3IiLCJnZXRDb21wdXRlZFN0eWxlIiwidGV4dEFuY2hvcldlaWdodCIsInBhcnNlRmxvYXQiLCJmaWxsT3BhY2l0eSIsInRleHREYXRhIiwiZm9udCIsImxpc3QiLCJmIiwiZk5hbWUiLCJtb3ZpbkxheWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSWFBLFk7Ozs7O3VDQUtrQkMsRyxFQUFhO0FBQ3BDLGNBQVFBLEdBQVI7QUFDSSxhQUFLLEdBQUw7QUFDQSxhQUFLLEdBQUw7QUFDSSxpQkFBT0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsU0FBTCxDQUFlSCxHQUFHLElBQUksR0FBUCxHQUFhLEtB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YUFBT2tELFVBQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNoYXBlTGF5ZXIsIFRleHRMYXllciwgSW1hZ2VMYXllciwgVHJhbnNmb3JtLCBBc3NldHMsIEZvbnRzLCBHcm91cFNoYXBlLCBQcmVDb21wTGF5ZXIsIFJlZmVyZW5jZUlEIH0gZnJvbSAnLi9hbmltYXRpb24nXG5pbXBvcnQgeyBFYXNpbmdGdW5jdGlvbiwgRWFzaW5nRmFjdG9yeSB9IGZyb20gJy4vZWFzaW5nJ1xuaW1wb3J0IHsgcmVuZGVyVGV4dCwgcmVuZGVyLCByZW5kZXJJbWFnZSwgcmVuZGVyUGxhaW5HbHlwaCB9IGZyb20gJy4vcmVuZGVyJztcbmltcG9ydCB7IGdldEJvdW5kaW5nQm94LCBnZXRMZWFmTm9kZXMsIGdldEJhc2VsaW5lSGVpZ2h0LCBlbmNvZGVUZXh0QW5jaG9yLCBsZWFzdENvbW1vbk11bHRpcGxlIH0gZnJvbSAnLi9oZWxwZXInXG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkL3Y0JztcbmltcG9ydCB7IFBhdGhNYWtlciB9IGZyb20gJy4vcGF0aCc7XG5cbnR5cGUgU2V0YWJsZUtleXMgPSBcInNjYWxlWFwiIHwgXCJzY2FsZVlcIiB8IFwiYW5jaG9yWFwiIHwgXCJhbmNob3JZXCIgfCBcInhcIiB8IFwieVwiIHwgXCJyb3RhdGVcIiB8IFwib3BhY2l0eVwiIHwgJ3NoYXBlJyB8ICdmaWxsQ29sb3InIHwgJ3RyaW1TdGFydCcgfCAndHJpbUVuZCcgfCAndHJpbU9mZnNldCcgfCAnc3Ryb2tlQ29sb3InIHwgJ3N0cm9rZVdpZHRoJyB8ICd0ZXh0JyB8ICdmaWxsT3BhY2l0eScgfCAnc3Ryb2tlT3BhY2l0eSdcblxuZXhwb3J0IGNsYXNzIEpTTW92aW5MYXllciB7XG4gICAgcHVibGljIHJlYWRvbmx5IHJvb3Q6IFNoYXBlTGF5ZXIgfCBUZXh0TGF5ZXIgfCBJbWFnZUxheWVyIHwgUHJlQ29tcExheWVyO1xuICAgIHByaXZhdGUgYW5jaG9yOiBudW1iZXJbXVxuICAgIHByaXZhdGUgcG9zaXRpb246IG51bWJlcltdXG4gICAgcHJpdmF0ZSB0aW1lUmFuZ2U6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0gPSB7fVxuICAgIHByaXZhdGUgZ2V0RGVmYXVsdFByb3BlcnR5KGtleTogc3RyaW5nKSB7XG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICBjYXNlICdhJzpcbiAgICAgICAgICAgIGNhc2UgJ3AnOlxuICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGtleSA9PSAnYScgPyB0aGlzLmFuY2hvciA6IHRoaXMucG9zaXRpb24pKVxuICAgICAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsxMDAsIDEwMCwgMTAwXVxuICAgICAgICAgICAgY2FzZSAnbyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDEwMFxuICAgICAgICAgICAgY2FzZSAncic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgICAgIGNhc2UgJ3RtJzpcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrOiAwXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGs6IDEwMFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrOiAwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAwXG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBjb252ZXJ0VG9TdGF0aWNQcm9wZXJ0eSh0cmFuc2Zvcm06IGFueSwga2V5OiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCF0cmFuc2Zvcm1ba2V5XSkge1xuICAgICAgICAgICAgdHJhbnNmb3JtW2tleV0gPSB7XG4gICAgICAgICAgICAgICAgYTogMCxcbiAgICAgICAgICAgICAgICBrOiB0aGlzLmdldERlZmF1bHRQcm9wZXJ0eShrZXkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRyYW5zZm9ybVtrZXldLmEgPT0gMSkge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGljVmFsdWUgPSB0cmFuc2Zvcm1ba2V5XS5rWzBdLnNcbiAgICAgICAgICAgIHRyYW5zZm9ybVtrZXldID0ge1xuICAgICAgICAgICAgICAgIGE6IDAsXG4gICAgICAgICAgICAgICAgazogc3RhdGljVmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGNvbnZlcnRUb0FuaW1hdGFibGVQcm9wZXJ0eSh0cmFuc2Zvcm06IGFueSwga2V5OiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCF0cmFuc2Zvcm1ba2V5XSB8fCAhdHJhbnNmb3JtW2tleV0uYSkge1xuICAgICAgICAgICAgaWYgKGtleSA9PSAnYScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuY2hvciA9IHRyYW5zZm9ybVtrZXldID8gdHJhbnNmb3JtW2tleV0uayA6IFswLCAwLCAwXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGtleSA9PSAncCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gdHJhbnNmb3JtW2tleV0gPyB0cmFuc2Zvcm1ba2V5XS5rIDogWzAsIDAsIDBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cmFuc2Zvcm1ba2V5XSA9IHtcbiAgICAgICAgICAgICAgICBhOiAxLFxuICAgICAgICAgICAgICAgIGs6IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBhZGRLZXlmcmFtZSh0cmFuc2Zvcm06IGFueSwga2V5OiBzdHJpbmcsIGlkeDogbnVtYmVyID0gLTEsIHRpbWU6IG51bWJlciwgdmFsdWU6IEFycmF5PGFueT4sIGVhc2luZz86IEVhc2luZ0Z1bmN0aW9uLCB3cmFwOiBib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBleGlzdEtleWZyYW1lID0gdHJhbnNmb3JtW2tleV0uay5maWx0ZXIoKHg6IGFueSkgPT4geC50ID09IHRpbWUpIGFzIGFueVtdXG4gICAgICAgIGxldCByZWFkeVRvU2V0O1xuICAgICAgICBpZiAoZXhpc3RLZXlmcmFtZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJlYWR5VG9TZXQgPSBleGlzdEtleWZyYW1lWzBdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWFkeVRvU2V0ID0ge1xuICAgICAgICAgICAgICAgIHQ6IHRpbWUsXG4gICAgICAgICAgICAgICAgczogdGhpcy5nZXREZWZhdWx0UHJvcGVydHkoa2V5KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNLZXlmcmFtZUNvdW50ID0gdHJhbnNmb3JtW2tleV0uay5yZWR1Y2UoKHA6IG51bWJlciwgeDogYW55KSA9PiB4LnQgPCB0aW1lID8gcCArIDEgOiBwLCAwKVxuICAgICAgICAgICAgdHJhbnNmb3JtW2tleV0uay5zcGxpY2UocHJldmlvdXNLZXlmcmFtZUNvdW50LCAwLCByZWFkeVRvU2V0KVxuICAgICAgICB9XG4gICAgICAgIGlmIChlYXNpbmcpIHtcbiAgICAgICAgICAgIHJlYWR5VG9TZXQubyA9IHtcbiAgICAgICAgICAgICAgICB4OiBlYXNpbmdbMF1bMF0sXG4gICAgICAgICAgICAgICAgeTogZWFzaW5nWzBdWzFdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWFkeVRvU2V0LmkgPSB7XG4gICAgICAgICAgICAgICAgeDogZWFzaW5nWzFdWzBdLFxuICAgICAgICAgICAgICAgIHk6IGVhc2luZ1sxXVsxXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgICAgICAgcmVhZHlUb1NldC5zW2lkeF0gPSB2YWx1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVhZHlUb1NldC5zID0gd3JhcCAmJiAhKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpID8gW3ZhbHVlXSA6IHZhbHVlXG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBmaW5kUHJvcGVydHlDb25maWcoa2V5OiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuICgodGhpcy5yb290IGFzIFNoYXBlTGF5ZXIpLnNoYXBlcyFbMF0gYXMgR3JvdXBTaGFwZSkuaXQhLmZpbmQoc2hhcGUgPT5cbiAgICAgICAgICAgIHNoYXBlLnR5ID09IGtleVxuICAgICAgICApXG4gICAgfVxuICAgIHByaXZhdGUgZmluZE9ySW5zZXJ0UHJvcGVydHlDb25maWcoa2V5OiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgZmluZCA9IHRoaXMuZmluZFByb3BlcnR5Q29uZmlnKGtleSlcbiAgICAgICAgaWYgKGZpbmQpIHJldHVybiBmaW5kXG4gICAgICAgIGNvbnN0IGhhc1RyYW5zZm9ybSA9IHRoaXMuZmluZFByb3BlcnR5Q29uZmlnKCd0cicpXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgICAgICAgIHR5OiBrZXksXG4gICAgICAgICAgICAuLi50aGlzLmdldERlZmF1bHRQcm9wZXJ0eShrZXkpIGFzIG9iamVjdFxuICAgICAgICB9XG4gICAgICAgIGlmIChoYXNUcmFuc2Zvcm0pIHtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwU2hhcGVzID0gKCh0aGlzLnJvb3QgYXMgU2hhcGVMYXllcikuc2hhcGVzIVswXSBhcyBHcm91cFNoYXBlKS5pdCFcbiAgICAgICAgICAgIGdyb3VwU2hhcGVzLnNwbGljZShncm91cFNoYXBlcy5sZW5ndGggLSAxLCAwLCBjb25maWcpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAoKHRoaXMucm9vdCBhcyBTaGFwZUxheWVyKS5zaGFwZXMhWzBdIGFzIEdyb3VwU2hhcGUpLml0IS5wdXNoKGNvbmZpZylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29uZmlnXG4gICAgfVxuICAgIHByaXZhdGUgY29tbW9uUHJvcGVydHlNYXBwaW5nKGtleTogU2V0YWJsZUtleXMpOiBbYW55LCBzdHJpbmcgfCB1bmRlZmluZWQsIG51bWJlciB8IHVuZGVmaW5lZF0ge1xuICAgICAgICBsZXQgYmFzZTogYW55LCBrOiBzdHJpbmcgfCB1bmRlZmluZWQsIGluZGV4OiBudW1iZXIgfCB1bmRlZmluZWRcbiAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJ3NjYWxlWCc6XG4gICAgICAgICAgICAgICAgYmFzZSA9IHRoaXMucm9vdC5rc1xuICAgICAgICAgICAgICAgIGsgPSAncydcbiAgICAgICAgICAgICAgICBpbmRleCA9IDBcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAnc2NhbGVZJzpcbiAgICAgICAgICAgICAgICBiYXNlID0gdGhpcy5yb290LmtzXG4gICAgICAgICAgICAgICAgayA9ICdzJ1xuICAgICAgICAgICAgICAgIGluZGV4ID0gMVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICdhbmNob3JYJzpcbiAgICAgICAgICAgICAgICBiYXNlID0gdGhpcy5yb290LmtzXG4gICAgICAgICAgICAgICAgayA9ICdhJ1xuICAgICAgICAgICAgICAgIGluZGV4ID0gMFxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICdhbmNob3JZJzpcbiAgICAgICAgICAgICAgICBiYXNlID0gdGhpcy5yb290LmtzXG4gICAgICAgICAgICAgICAgayA9ICdhJ1xuICAgICAgICAgICAgICAgIGluZGV4ID0gMVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICd4JzpcbiAgICAgICAgICAgICAgICBiYXNlID0gdGhpcy5yb290LmtzXG4gICAgICAgICAgICAgICAgayA9ICdwJ1xuICAgICAgICAgICAgICAgIGluZGV4ID0gMFxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICd5JzpcbiAgICAgICAgICAgICAgICBiYXNlID0gdGhpcy5yb290LmtzXG4gICAgICAgICAgICAgICAgayA9ICdwJ1xuICAgICAgICAgICAgICAgIGluZGV4ID0gMVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICdyb3RhdGUnOlxuICAgICAgICAgICAgICAgIGJhc2UgPSB0aGlzLnJvb3Qua3NcbiAgICAgICAgICAgICAgICBrID0gJ3InXG4gICAgICAgICAgICAgICAgaW5kZXggPSAtMVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICdvcGFjaXR5JzpcbiAgICAgICAgICAgICAgICBiYXNlID0gdGhpcy5yb290LmtzXG4gICAgICAgICAgICAgICAgayA9ICdvJ1xuICAgICAgICAgICAgICAgIGluZGV4ID0gLTFcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAndHJpbVN0YXJ0JzpcbiAgICAgICAgICAgICAgICBiYXNlID0gdGhpcy5maW5kT3JJbnNlcnRQcm9wZXJ0eUNvbmZpZygndG0nKVxuICAgICAgICAgICAgICAgIGsgPSAncydcbiAgICAgICAgICAgICAgICBpbmRleCA9IC0xXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ3RyaW1FbmQnOlxuICAgICAgICAgICAgICAgIGJhc2UgPSB0aGlzLmZpbmRPckluc2VydFByb3BlcnR5Q29uZmlnKCd0bScpXG4gICAgICAgICAgICAgICAgayA9ICdlJ1xuICAgICAgICAgICAgICAgIGluZGV4ID0gLTFcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAndHJpbU9mZnNldCc6XG4gICAgICAgICAgICAgICAgYmFzZSA9IHRoaXMuZmluZE9ySW5zZXJ0UHJvcGVydHlDb25maWcoJ3RtJylcbiAgICAgICAgICAgICAgICBrID0gJ28nXG4gICAgICAgICAgICAgICAgaW5kZXggPSAtMVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICdmaWxsQ29sb3InOlxuICAgICAgICAgICAgICAgIGJhc2UgPSB0aGlzLmZpbmRQcm9wZXJ0eUNvbmZpZygnZmwnKVxuICAgICAgICAgICAgICAgIGsgPSAnYydcbiAgICAgICAgICAgICAgICBpbmRleCA9IC0xXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ3N0cm9rZUNvbG9yJzpcbiAgICAgICAgICAgICAgICBiYXNlID0gdGhpcy5maW5kUHJvcGVydHlDb25maWcoJ3N0JylcbiAgICAgICAgICAgICAgICBrID0gJ2MnXG4gICAgICAgICAgICAgICAgaW5kZXggPSAtMVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICdzdHJva2VXaWR0aCc6XG4gICAgICAgICAgICAgICAgYmFzZSA9IHRoaXMuZmluZFByb3BlcnR5Q29uZmlnKCdzdCcpXG4gICAgICAgICAgICAgICAgayA9ICd3J1xuICAgICAgICAgICAgICAgIGluZGV4ID0gLTFcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAnc2hhcGUnOlxuICAgICAgICAgICAgICAgIGJhc2UgPSB0aGlzLmZpbmRQcm9wZXJ0eUNvbmZpZygnc2gnKVxuICAgICAgICAgICAgICAgIGsgPSAna3MnXG4gICAgICAgICAgICAgICAgaW5kZXggPSAtMVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICdmaWxsT3BhY2l0eSc6XG4gICAgICAgICAgICAgICAgYmFzZSA9IHRoaXMuZmluZFByb3BlcnR5Q29uZmlnKCdmbCcpXG4gICAgICAgICAgICAgICAgayA9ICdvJ1xuICAgICAgICAgICAgICAgIGluZGV4ID0gLTFcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAnc3Ryb2tlT3BhY2l0eSc6XG4gICAgICAgICAgICAgICAgYmFzZSA9IHRoaXMuZmluZFByb3BlcnR5Q29uZmlnKCdzdCcpXG4gICAgICAgICAgICAgICAgayA9ICdvJ1xuICAgICAgICAgICAgICAgIGluZGV4ID0gLTFcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbYmFzZSwgaywgaW5kZXhdXG4gICAgfVxuICAgIHByaXZhdGUgdXBkYXRlVGltZVJhbmdlKCkge1xuICAgICAgICB0aGlzLnJvb3Qub3AgPSBNYXRoLm1heCguLi5PYmplY3QudmFsdWVzKHRoaXMudGltZVJhbmdlKSwgMSlcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihyZWY6IFNoYXBlTGF5ZXIgfCBUZXh0TGF5ZXIgfCBJbWFnZUxheWVyIHwgUHJlQ29tcExheWVyKSB7XG4gICAgICAgIHRoaXMucm9vdCA9IHJlZlxuICAgICAgICB0aGlzLmFuY2hvciA9IFswLCAwLCAwXVxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gWzAsIDAsIDBdXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIGtleSB0aGUgbmFtZSBvZiBwcm9wZXJ0eSB0byBiZSBzZXRcbiAgICAgKiBAcGFyYW0gdmFsdWUgdGhlIHZhbHVlIHRvIGJlIHNldFxuICAgICAqL1xuICAgIHNldFN0YXRpY1Byb3BlcnR5KGtleTogU2V0YWJsZUtleXMsIHZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy50aW1lUmFuZ2Vba2V5XSA9IDFcbiAgICAgICAgdGhpcy51cGRhdGVUaW1lUmFuZ2UoKVxuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBQYXRoTWFrZXIpIHtcbiAgICAgICAgICAgIHZhbHVlLnVuaWZvcm0oKVxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5wYXRoXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGJhc2U6IGFueSwgazogc3RyaW5nIHwgdW5kZWZpbmVkLCBpbmRleDogbnVtYmVyIHwgdW5kZWZpbmVkXG4gICAgICAgIFtiYXNlLCBrLCBpbmRleF0gPSB0aGlzLmNvbW1vblByb3BlcnR5TWFwcGluZyhrZXkpXG4gICAgICAgIGlmICghayB8fCBpbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yb290LnR5ID09IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRvYyA9IHRoaXMucm9vdC50IS5kIVxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jLmsgPSBbZG9jLmshWzBdXVxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jLmtbMF0udCA9IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvYy5rWzBdLnMhLnQgPSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihrZXksIHZhbHVlKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBhIHZhbGlkIGtleS4nKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChiYXNlICYmIGsgJiYgaW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5jb252ZXJ0VG9TdGF0aWNQcm9wZXJ0eShiYXNlLCBrKVxuICAgICAgICAgICAgaWYgKGluZGV4ID49IDApXG4gICAgICAgICAgICAgICAgYmFzZVtrXS5rW2luZGV4XSA9IHZhbHVlXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgYmFzZVtrXS5rID0gdmFsdWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSBrZXkgdGhlIG5hbWUgb2YgcHJvcGVydHkgdG8gYmUgc2V0XG4gICAgICogQHBhcmFtIHN0YXJ0RnJhbWUgZnJhbWUgbnVtYmVyIHRvIHN0YXJ0IHRoZSBhbmltYXRpb25cbiAgICAgKiBAcGFyYW0gZW5kRnJhbWUgZnJhbWUgbnVtYmVyIHRvIGVuZCB0aGUgYW5pbWF0aW9uXG4gICAgICogQHBhcmFtIHN0YXJ0VmFsdWUgdmFsdWUgdG8gYmUgc2V0IGluIHN0YXJ0IG9mIGFuaW1hdGlvblxuICAgICAqIEBwYXJhbSBlbmRWYWx1ZSB2YWx1ZSB0byBiZSBzZXQgaW4gZW5kIG9mIGFuaW1hdGlvblxuICAgICAqIEBwYXJhbSBlYXNpbmcgZWFzaW5nIGZ1bmN0aW9uLCBkZWZhdWx0IGlzIGxpbmVhclxuICAgICAqL1xuICAgIHNldEFuaW1hdGFibGVQcm9wZXJ0eShrZXk6IFNldGFibGVLZXlzLCBzdGFydEZyYW1lOiBudW1iZXIsIGVuZEZyYW1lOiBudW1iZXIsIHN0YXJ0VmFsdWU6IGFueSwgZW5kVmFsdWU6IGFueSwgZWFzaW5nPzogRWFzaW5nRnVuY3Rpb24pIHtcbiAgICAgICAgaWYgKGVuZEZyYW1lIDw9IHN0YXJ0RnJhbWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRW5kIGZyYW1lIHNob3VsZCBiZSBsYXJnZXIgdGhhbiBzdGFydCBmcmFtZS4nKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudGltZVJhbmdlW2tleV0gPSBNYXRoLm1heCh0aGlzLnRpbWVSYW5nZVtrZXldIHx8IDAsIGVuZEZyYW1lICsgMSlcbiAgICAgICAgdGhpcy51cGRhdGVUaW1lUmFuZ2UoKVxuICAgICAgICBpZiAoIWVhc2luZykge1xuICAgICAgICAgICAgZWFzaW5nID0gRWFzaW5nRmFjdG9yeS5saW5lYXIoKVxuICAgICAgICB9XG4gICAgICAgIGlmIChzdGFydFZhbHVlIGluc3RhbmNlb2YgUGF0aE1ha2VyIHx8IGVuZFZhbHVlIGluc3RhbmNlb2YgUGF0aE1ha2VyKSB7XG4gICAgICAgICAgICBbc3RhcnRWYWx1ZSwgZW5kVmFsdWVdLmZvckVhY2godiA9PiB2IGluc3RhbmNlb2YgUGF0aE1ha2VyICYmIHYudW5pZm9ybSgpKVxuICAgICAgICAgICAgaWYgKHN0YXJ0VmFsdWUgaW5zdGFuY2VvZiBQYXRoTWFrZXIgJiYgZW5kVmFsdWUgaW5zdGFuY2VvZiBQYXRoTWFrZXIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydExpbmVDb3VudCA9IHN0YXJ0VmFsdWUucGF0aC52IS5sZW5ndGggLSAxXG4gICAgICAgICAgICAgICAgY29uc3QgZW5kTGluZUNvdW50ID0gZW5kVmFsdWUucGF0aC52IS5sZW5ndGggLSAxXG4gICAgICAgICAgICAgICAgaWYgKCEoc3RhcnRMaW5lQ291bnQgPD0gMCAmJiBlbmRMaW5lQ291bnQgPD0gMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGgubWluKHN0YXJ0TGluZUNvdW50LCBlbmRMaW5lQ291bnQpIDw9IDAgJiYgTWF0aC5tYXgoc3RhcnRMaW5lQ291bnQsIGVuZExpbmVDb3VudCkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmVlZENvcHkgPSBzdGFydExpbmVDb3VudCA8PSAwID8gc3RhcnRWYWx1ZSA6IGVuZFZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmVlZExlbmd0aCA9IE1hdGgubWF4KHN0YXJ0TGluZUNvdW50LCBlbmRMaW5lQ291bnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgWydpJywgJ28nLCAndiddLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZWVkQ29weS5wYXRoW2tleV0gPSBBcnJheShuZWVkTGVuZ3RoKS5maWxsKG5lZWRDb3B5LnBhdGhba2V5XS5sZW5ndGggPyBuZWVkQ29weS5wYXRoW2tleV1bMF0gOiBbMCwgMF0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tbW9uTXVsdGlwbGUgPSBsZWFzdENvbW1vbk11bHRpcGxlKHN0YXJ0TGluZUNvdW50LCBlbmRMaW5lQ291bnQpXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydFZhbHVlLnVwc2FtcGxlKE1hdGgucm91bmQoY29tbW9uTXVsdGlwbGUgLyBzdGFydExpbmVDb3VudCkpXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRWYWx1ZS51cHNhbXBsZShNYXRoLnJvdW5kKGNvbW1vbk11bHRpcGxlIC8gZW5kTGluZUNvdW50KSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFtzdGFydFZhbHVlLCBlbmRWYWx1ZV0gPSBbc3RhcnRWYWx1ZSwgZW5kVmFsdWVdLm1hcCh2ID0+IHYgaW5zdGFuY2VvZiBQYXRoTWFrZXIgPyB2LnBhdGggOiB2KVxuICAgICAgICB9XG4gICAgICAgIGxldCBiYXNlOiBhbnksIGs6IHN0cmluZyB8IHVuZGVmaW5lZCwgaW5kZXg6IG51bWJlciB8IHVuZGVmaW5lZCwgd3JhcCA9IHRydWU7XG4gICAgICAgIFtiYXNlLCBrLCBpbmRleF0gPSB0aGlzLmNvbW1vblByb3BlcnR5TWFwcGluZyhrZXkpXG4gICAgICAgIGlmICghayB8fCBpbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yb290LnR5ID09IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2UgPSB0aGlzLnJvb3QudFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHRQcm9wID0gYmFzZS5kLmtbMF0uc1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRtcFN0YXJ0VmFsdWUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRleHRQcm9wKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0bXBFbmRWYWx1ZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGV4dFByb3ApKVxuICAgICAgICAgICAgICAgICAgICAgICAgdG1wU3RhcnRWYWx1ZS50ID0gc3RhcnRWYWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgdG1wRW5kVmFsdWUudCA9IGVuZFZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydFZhbHVlID0gdG1wU3RhcnRWYWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kVmFsdWUgPSB0bXBFbmRWYWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgayA9ICdkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPSAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgd3JhcCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGtleSwgc3RhcnRGcmFtZSwgZW5kRnJhbWUsIHN0YXJ0VmFsdWUsIGVuZFZhbHVlLCBlYXNpbmcpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm90IGEgdmFsaWQga2V5LicpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJhc2UgJiYgayAmJiBpbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnZlcnRUb0FuaW1hdGFibGVQcm9wZXJ0eShiYXNlLCBrKVxuICAgICAgICAgICAgdGhpcy5hZGRLZXlmcmFtZShiYXNlLCBrLCBpbmRleCwgc3RhcnRGcmFtZSwgc3RhcnRWYWx1ZSwgZWFzaW5nLCB3cmFwKVxuICAgICAgICAgICAgdGhpcy5hZGRLZXlmcmFtZShiYXNlLCBrLCBpbmRleCwgZW5kRnJhbWUsIGVuZFZhbHVlLCBFYXNpbmdGYWN0b3J5LmxpbmVhcigpLCB3cmFwKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGF5ZXJGYWN0b3J5IHtcbiAgICBwcml2YXRlIHN0YXRpYyBnZW5lcmF0ZVRyYW5zZm9ybShjb29yZGluYXRlOiBudW1iZXJbXSk6IFRyYW5zZm9ybSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvOiB7XG4gICAgICAgICAgICAgICAgYTogMCxcbiAgICAgICAgICAgICAgICBrOiAxMDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByOiB7XG4gICAgICAgICAgICAgICAgYTogMCxcbiAgICAgICAgICAgICAgICBrOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcDoge1xuICAgICAgICAgICAgICAgIGE6IDAsXG4gICAgICAgICAgICAgICAgazogW1xuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlWzBdLFxuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlWzFdLFxuICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGE6IHtcbiAgICAgICAgICAgICAgICBhOiAwLFxuICAgICAgICAgICAgICAgIGs6IFtcbiAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzOiB7XG4gICAgICAgICAgICAgICAgYTogMCxcbiAgICAgICAgICAgICAgICBrOiBbXG4gICAgICAgICAgICAgICAgICAgIDEwMCxcbiAgICAgICAgICAgICAgICAgICAgMTAwLFxuICAgICAgICAgICAgICAgICAgICAxMDBcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBjcmVhdGUgdGhlIGJvdW5kaW5nIGJveCBvZiBzdmcgZWxlbWVudFxuICAgICAqIEBwYXJhbSBkb20gc3ZnIGVsZW1lbnQgbmVlZHMgdG8gY2FsY3VsYXRlIHRoZSBib3VuZGluZyBib3hcbiAgICAgKi9cbiAgICBzdGF0aWMgYm91bmRpbmdCb3goZG9tOiBTVkdHcmFwaGljc0VsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgYm91bmRpbmdCb3ggPSBnZXRCb3VuZGluZ0JveChkb20pLm1hcCgodiwgaSkgPT4gaSA8IDIgPyB2IC0gMSA6IHYgKyAxKSBhcyBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXVxuICAgICAgICByZXR1cm4gdGhpcy5yZWN0KC4uLmJvdW5kaW5nQm94KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGNyZWF0ZSB0aGUgc2FtZSBzaGFwZSBvZiBzdmcgcGF0aFxuICAgICAqIEBwYXJhbSBkb20gc3ZnIHBhdGggZWxlbWVudCByZXByZXNlbnQgdGhlIHNoYXBlXG4gICAgICovXG4gICAgc3RhdGljIHNoYXBlKGRvbTogU1ZHUGF0aEVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgY29vcmRpbmF0ZSA9IGdldEJvdW5kaW5nQm94KGRvbSlcbiAgICAgICAgY29uc3QgbGF5ZXI6IFNoYXBlTGF5ZXIgPSB7XG4gICAgICAgICAgICB0eTogNCxcbiAgICAgICAgICAgIGRkZDogMCxcbiAgICAgICAgICAgIHNyOiAxLFxuICAgICAgICAgICAgYW86IDAsXG4gICAgICAgICAgICBrczogdGhpcy5nZW5lcmF0ZVRyYW5zZm9ybShjb29yZGluYXRlKSxcbiAgICAgICAgICAgIGlwOiAwLFxuICAgICAgICAgICAgb3A6IDEsXG4gICAgICAgICAgICBzdDogMCxcbiAgICAgICAgICAgIGJtOiAwLFxuICAgICAgICAgICAgc2hhcGVzOiByZW5kZXIoZG9tKVxuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBKU01vdmluTGF5ZXIobGF5ZXIpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogY3JlYXRlIGEgcmVjdGFuZ2xlXG4gICAgICogQHBhcmFtIGxlZnQgbGVmdCBvZiByZWN0XG4gICAgICogQHBhcmFtIHRvcCB0b3Agb2YgcmVjdFxuICAgICAqIEBwYXJhbSB3aWR0aCB3aWR0aCBvZiByZWN0XG4gICAgICogQHBhcmFtIGhlaWdodCBoZWlnaHQgb2YgcmVjdFxuICAgICAqL1xuICAgIHN0YXRpYyByZWN0KGxlZnQ6IG51bWJlciwgdG9wOiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGxheWVyOiBTaGFwZUxheWVyID0ge1xuICAgICAgICAgICAgdHk6IDQsXG4gICAgICAgICAgICBkZGQ6IDAsXG4gICAgICAgICAgICBzcjogMSxcbiAgICAgICAgICAgIGFvOiAwLFxuICAgICAgICAgICAga3M6IHRoaXMuZ2VuZXJhdGVUcmFuc2Zvcm0oW2xlZnQsIHRvcCwgd2lkdGgsIGhlaWdodF0pLFxuICAgICAgICAgICAgaXA6IDAsXG4gICAgICAgICAgICBvcDogMSxcbiAgICAgICAgICAgIHN0OiAwLFxuICAgICAgICAgICAgYm06IDAsXG4gICAgICAgICAgICBzaGFwZXM6IFtcbiAgICAgICAgICAgICAgICByZW5kZXJQbGFpbkdseXBoKCdyZWN0JywgW3dpZHRoLCBoZWlnaHRdKVxuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgSlNNb3ZpbkxheWVyKGxheWVyKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGNyZWF0ZSBhIGVsbGlwc2VcbiAgICAgKiBAcGFyYW0gY3ggeCBjZW50ZXIgb2YgZWxsaXBzZVxuICAgICAqIEBwYXJhbSBjeSB5IGNlbnRlciBvZiBlbGxpcHNlXG4gICAgICogQHBhcmFtIHJ4IHggcmFkaXVzIG9mIGVsbGlwc2VcbiAgICAgKiBAcGFyYW0gcnkgeSByYWRpdXMgb2YgZWxsaXBzZVxuICAgICAqL1xuICAgIHN0YXRpYyBlbGxpcHNlKGN4OiBudW1iZXIsIGN5OiBudW1iZXIsIHJ4OiBudW1iZXIsIHJ5OiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgbGF5ZXI6IFNoYXBlTGF5ZXIgPSB7XG4gICAgICAgICAgICB0eTogNCxcbiAgICAgICAgICAgIGRkZDogMCxcbiAgICAgICAgICAgIHNyOiAxLFxuICAgICAgICAgICAgYW86IDAsXG4gICAgICAgICAgICBrczogdGhpcy5nZW5lcmF0ZVRyYW5zZm9ybShbY3ggLSByeCwgY3kgLSByeSwgMiAqIHJ4LCAyICogcnldKSxcbiAgICAgICAgICAgIGlwOiAwLFxuICAgICAgICAgICAgb3A6IDEsXG4gICAgICAgICAgICBzdDogMCxcbiAgICAgICAgICAgIGJtOiAwLFxuICAgICAgICAgICAgc2hhcGVzOiBbXG4gICAgICAgICAgICAgICAgcmVuZGVyUGxhaW5HbHlwaCgnZWxsaXBzZScsIFtyeCwgcnldKVxuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgSlNNb3ZpbkxheWVyKGxheWVyKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIG1ha2UgYSBsYXllciBieSBhc3NldCBJRFxuICAgICAqIEBwYXJhbSBpZCBhc3NldCByZWZlcmVuY2UgSURcbiAgICAgKi9cbiAgICBzdGF0aWMgcmVmKGlkOiBSZWZlcmVuY2VJRCkge1xuICAgICAgICBjb25zdCBsYXllciA9IG5ldyBKU01vdmluTGF5ZXIoe1xuICAgICAgICAgICAgdHk6IDAsXG4gICAgICAgICAgICBkZGQ6IDAsXG4gICAgICAgICAgICBzcjogMSxcbiAgICAgICAgICAgIGFvOiAwLFxuICAgICAgICAgICAga3M6IHRoaXMuZ2VuZXJhdGVUcmFuc2Zvcm0oWzAsIDAsIDAsIDBdKSxcbiAgICAgICAgICAgIGlwOiAwLFxuICAgICAgICAgICAgb3A6IDEsXG4gICAgICAgICAgICBzdDogMCxcbiAgICAgICAgICAgIGJtOiAwLFxuICAgICAgICAgICAgdzogOWU5LFxuICAgICAgICAgICAgaDogOWU5LFxuICAgICAgICAgICAgcmVmSWQ6IGlkXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBsYXllclxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIG1ha2UgYSBjb21wbGV4IGxheWVyIGJ5IGFuIGFyYml0cmFyeSBzdmcgZWxlbWVudFxuICAgICAqIEBwYXJhbSBkb20gc3ZnIGVsZW1lbnQgbmVlZCB0byBiZSBwYXJzZWRcbiAgICAgKiBAcGFyYW0gYXNzZXRMaXN0IGEgbGlzdCBjb250YWlucyBpbWFnZS9sYXllciBhc3NldFxuICAgICAqIEBwYXJhbSBmb250TGlzdCBhIGxpc3QgY29udGFpbnMgZm9udCBhc3NldFxuICAgICAqL1xuICAgIHN0YXRpYyBoaWVyYXJjaHkoZG9tOiBTVkdHcmFwaGljc0VsZW1lbnQsIGFzc2V0TGlzdDogQXNzZXRzLCBmb250TGlzdDogRm9udHMpIHtcbiAgICAgICAgY29uc3QgY29vcmRpbmF0ZSA9IGdldEJvdW5kaW5nQm94KGRvbSlcbiAgICAgICAgbGV0IGRvbVR5cGU6IDIgfCA0IHwgNSB8IDA7XG4gICAgICAgIGlmIChkb20gaW5zdGFuY2VvZiBTVkdUZXh0RWxlbWVudCkge1xuICAgICAgICAgICAgZG9tVHlwZSA9IDVcbiAgICAgICAgfSBlbHNlIGlmIChkb20gaW5zdGFuY2VvZiBTVkdJbWFnZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGRvbVR5cGUgPSAyXG4gICAgICAgIH0gZWxzZSBpZiAoZG9tIGluc3RhbmNlb2YgU1ZHR0VsZW1lbnQpIHtcbiAgICAgICAgICAgIGRvbVR5cGUgPSAwXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb21UeXBlID0gNFxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxheWVyOiBTaGFwZUxheWVyIHwgSW1hZ2VMYXllciB8IFRleHRMYXllciB8IFByZUNvbXBMYXllciA9IHtcbiAgICAgICAgICAgIHR5OiBkb21UeXBlLFxuICAgICAgICAgICAgZGRkOiAwLFxuICAgICAgICAgICAgc3I6IDEsXG4gICAgICAgICAgICBhbzogMCxcbiAgICAgICAgICAgIGtzOiB0aGlzLmdlbmVyYXRlVHJhbnNmb3JtKGRvbVR5cGUgPT0gMCA/IFswLCAwLCAwLCAwXSA6IGNvb3JkaW5hdGUpLFxuICAgICAgICAgICAgaXA6IDAsXG4gICAgICAgICAgICBvcDogMSxcbiAgICAgICAgICAgIHN0OiAwLFxuICAgICAgICAgICAgYm06IDBcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKGRvbVR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBjb25zdCBkb21MZWF2ZXMgPSBnZXRMZWFmTm9kZXMoZG9tKVxuICAgICAgICAgICAgICAgIGlmIChkb21MZWF2ZXMuZmlsdGVyKGRvbSA9PiBkb20gaW5zdGFuY2VvZiBTVkdUZXh0RWxlbWVudCB8fCBkb20gaW5zdGFuY2VvZiBTVkdJbWFnZUVsZW1lbnQpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmVjb21wTGF5ZXIgPSBsYXllciBhcyBQcmVDb21wTGF5ZXJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJlQ29tcEFzc2V0OiBKU01vdmluTGF5ZXJbXSA9IFtdXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZUNvbXBSZWZJZCA9IHV1aWQoKVxuICAgICAgICAgICAgICAgICAgICBkb21MZWF2ZXMuZm9yRWFjaChkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkIGluc3RhbmNlb2YgU1ZHR3JhcGhpY3NFbGVtZW50ICYmICEoZCBpbnN0YW5jZW9mIFNWR0dFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZUNvbXBBc3NldC51bnNoaWZ0KHRoaXMuaGllcmFyY2h5KGQsIGFzc2V0TGlzdCwgZm9udExpc3QpKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBwcmVDb21wQXNzZXQuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllci5yb290Lm9wID0gOWU5XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHByZWNvbXBMYXllci53ID0gY29vcmRpbmF0ZVswXSArIGNvb3JkaW5hdGVbMl0gKyAxXG4gICAgICAgICAgICAgICAgICAgIHByZWNvbXBMYXllci5oID0gY29vcmRpbmF0ZVsxXSArIGNvb3JkaW5hdGVbM10gKyAxXG4gICAgICAgICAgICAgICAgICAgIHByZWNvbXBMYXllci5yZWZJZCA9IHByZUNvbXBSZWZJZFxuICAgICAgICAgICAgICAgICAgICBhc3NldExpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogcHJlQ29tcFJlZklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJzOiBwcmVDb21wQXNzZXQubWFwKGxheWVyID0+IGxheWVyLnJvb3QpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hhcGVMYXllciA9IGxheWVyIGFzIFNoYXBlTGF5ZXJcbiAgICAgICAgICAgICAgICAgICAgc2hhcGVMYXllci50eSA9IDRcbiAgICAgICAgICAgICAgICAgICAgc2hhcGVMYXllci5rcyA9IHRoaXMuZ2VuZXJhdGVUcmFuc2Zvcm0oY29vcmRpbmF0ZSlcbiAgICAgICAgICAgICAgICAgICAgc2hhcGVMYXllci5zaGFwZXMgPSByZW5kZXIoZG9tKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlTGF5ZXIgPSBsYXllciBhcyBJbWFnZUxheWVyXG4gICAgICAgICAgICAgICAgY29uc3QgW2ltYWdlUmVmSWQsIGltYWdlQXNzZXRdID0gcmVuZGVySW1hZ2UoZG9tIGFzIFNWR0ltYWdlRWxlbWVudCwgYXNzZXRMaXN0KVxuICAgICAgICAgICAgICAgIGltYWdlTGF5ZXIucmVmSWQgPSBpbWFnZVJlZklkXG4gICAgICAgICAgICAgICAgaWYgKCFhc3NldExpc3QuZmlsdGVyKGEgPT4gYS5pZCA9PSBpbWFnZVJlZklkKS5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0TGlzdC5wdXNoKGltYWdlQXNzZXQpXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBjb25zdCBzaGFwZUxheWVyID0gbGF5ZXIgYXMgU2hhcGVMYXllclxuICAgICAgICAgICAgICAgIHNoYXBlTGF5ZXIuc2hhcGVzID0gcmVuZGVyKGRvbSlcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIGNvbnN0IHRleHRMYXllciA9IGxheWVyIGFzIFRleHRMYXllclxuXG4gICAgICAgICAgICAgICAgLy8gbW92ZSB0ZXh0TGF5ZXIncyBwb3NpdGlvbiB0byB0ZXh0LWFuY2hvci1yZWxhdGVkXG4gICAgICAgICAgICAgICAgY29uc3QgYmFzZUxpbmVIZWlnaHQgPSBnZXRCYXNlbGluZUhlaWdodChkb20gYXMgU1ZHVGV4dEVsZW1lbnQpXG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dEFuY2hvciA9IGVuY29kZVRleHRBbmNob3IoZ2V0Q29tcHV0ZWRTdHlsZShkb20pLnRleHRBbmNob3IpXG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dEFuY2hvcldlaWdodCA9IFswLCAxLCAwLjVdW3RleHRBbmNob3JdXG4gICAgICAgICAgICAgICAgdGV4dExheWVyLmtzIS5wIS5rID0gW2Nvb3JkaW5hdGVbMF0gKyBjb29yZGluYXRlWzJdICogdGV4dEFuY2hvcldlaWdodCwgY29vcmRpbmF0ZVsxXSArIGNvb3JkaW5hdGVbM10gLSBiYXNlTGluZUhlaWdodCwgMF1cbiAgICAgICAgICAgICAgICB0ZXh0TGF5ZXIua3MhLm8hLmsgPSB+fihwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGUoZG9tKS5maWxsT3BhY2l0eSB8fCAnMScpICogMTAwKVxuXG4gICAgICAgICAgICAgICAgY29uc3QgW3RleHREYXRhLCBmb250XSA9IHJlbmRlclRleHQoZG9tIGFzIFNWR1RleHRFbGVtZW50LCBmb250TGlzdClcbiAgICAgICAgICAgICAgICB0ZXh0TGF5ZXIudCA9IHRleHREYXRhXG4gICAgICAgICAgICAgICAgaWYgKCFmb250TGlzdC5saXN0IS5maWx0ZXIoZiA9PiBmLmZOYW1lID09IGZvbnQuZk5hbWUpLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgZm9udExpc3QubGlzdCEucHVzaChmb250KVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW92aW5MYXllciA9IG5ldyBKU01vdmluTGF5ZXIobGF5ZXIpXG4gICAgICAgIHJldHVybiBtb3ZpbkxheWVyXG4gICAgfVxufSJdfQ==

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYXRoLnRzIl0sIm5hbWVzIjpbIlBhdGhNYWtlciIsInBhdGhEYXRhIiwiYyIsImkiLCJvIiwidiIsIkluZmluaXR5IiwicGFyc2UiLCJ4IiwieSIsImN1cnJlbnRYIiwiY3VycmVudFkiLCJvZmZzZXRYIiwiTWF0aCIsIm1pbiIsIm9mZnNldFkiLCJwMCIsInAxIiwicDIiLCJwMyIsImEiLCJiIiwibWF4Iiwic3FydCIsInJvb3RzIiwibWFwIiwibXVsdGkiLCJmb3JFYWNoIiwicm9vdCIsInZhbHVlIiwicG93IiwiYXJyIiwicmF0aW8iLCJyZXN1bHQiLCJsZW5ndGgiLCJwdXNoIiwib3JkZXIwIiwib3JkZXIxIiwiY2FsY3VsYXRlSGlnaGx5T3JkZXIiLCJvcmRlcjIiLCJvcmRlcjMiLCJwYXRoUmVhZHkiLCJwYXRoIiwibGluZVRvIiwicGF0aFN0YXJ0IiwicGF0aENoYWluIiwibW92ZVRvIiwidXBkYXRlWFkiLCJob3Jpem9udGFsVG8iLCJ2ZXJ0aWNhbFRvIiwiYzF4IiwiYzF5IiwiYzJ4IiwiYzJ5IiwiY2FsY3VsYXRlQmV6aWVyTWluTWF4IiwiY3ViaWNCZXppZXJDdXJ2ZVRvIiwiY3giLCJjeSIsInF1YWRyYXRpY0JlemllckN1cnZlVG8iLCJyeCIsInJ5IiwieEF4aXNSb3RhdGlvbiIsImxhcmdlQXJjRmxhZyIsInN3ZWVwRmxhZyIsImNTZXJpZXMiLCJhMmMiLCJpb3ZMaXN0Iiwic3BsaWNlIiwiYXJjVG8iLCJwYXRoUmVmIiwicG9wIiwicGF0aERhdGFTZXJpZXMiLCJwYXRoRGF0YVdpdGhUeXBlIiwicGF0aERhdGFJdGVtIiwiY29kZSIsIm1vdmVUb1JlbGF0aXZlIiwibGluZVRvUmVsYXRpdmUiLCJob3Jpem9udGFsVG9SZWxhdGl2ZSIsInZlcnRpY2FsVG9SZWxhdGl2ZSIsIngxIiwieTEiLCJ4MiIsInkyIiwiY3ViaWNCZXppZXJDdXJ2ZVRvUmVsYXRpdmUiLCJxdWFkcmF0aWNCZXppZXJDdXJ2ZVRvUmVsYXRpdmUiLCJsYXJnZUFyYyIsInN3ZWVwIiwiYXJjVG9SZWxhdGl2ZSIsImNsb3NlUGF0aCIsImNvbnNvbGUiLCJlcnJvciIsIkVycm9yIiwiTnVtYmVyIiwiaXNJbnRlZ2VyIiwidW5pZm9ybSIsImNvcHlQYXRoIiwib0FycmF5IiwiaUFycmF5IiwieEFycmF5IiwieUFycmF5IiwiaW5kZXgiLCJzdGVwUmF0aW8iLCJ4U3BsaXRBcnJheSIsImNhbGN1bGF0ZUJlemllclNwbGl0IiwieVNwbGl0QXJyYXkiLCJwMHgiLCJwMXgiLCJzaGlmdCIsInAzeCIsInAyeCIsInAweSIsInAxeSIsInAzeSIsInAyeSIsImFuZ2xlIiwibGFyZ2VfYXJjX2ZsYWciLCJzd2VlcF9mbGFnIiwicmVjdXJzaXZlIiwiXzEyMCIsIlBJIiwicmFkIiwicmVzIiwieHkiLCJyb3RhdGUiLCJYIiwiY29zIiwic2luIiwiWSIsImgiLCJyeDIiLCJyeTIiLCJrIiwiYWJzIiwiZjEiLCJhc2luIiwiZjIiLCJkZiIsImYyb2xkIiwieDJvbGQiLCJ5Mm9sZCIsImMxIiwiczEiLCJjMiIsInMyIiwidCIsInRhbiIsImh4IiwiaHkiLCJtMSIsIm0yIiwibTMiLCJtNCIsImNvbmNhdCIsImpvaW4iLCJzcGxpdCIsInBhcnNlRmxvYXQiLCJuZXdyZXMiLCJpaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFYUEsUzs7O0FBYVQ7QUFLQSxxQkFBWUMsUUFBWixFQUErQjtBQUFBOztBQUFBLGtDQWpCUjtBQUNuQkMsTUFBQUEsQ0FBQyxFQUFFLEtBRGdCO0FBRW5CQyxNQUFBQSxDQUFDLEVBQUUsRUFGZ0I7QUFHbkJDLE1BQUFBLENBQUMsRUFBRSxFQUhnQjtBQUluQkMsTUFBQUEsQ0FBQyxFQUFFO0FBSmdCLEtBaUJROztBQUFBLHNDQVZKLENBVUk7O0FBQUEsc0NBVEosQ0FTSTs7QUFBQSxxQ0FSTEMsUUFRSzs7QUFBQSxxQ0FQTEEsUUFPSzs7QUFBQSx1Q0FKWCxLQUlXOztBQUFBLHVDQUhPLENBQUMsQ0FBRCxFQUFJ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akIsQ0FBQztBQUFBLGlCQUFJbUosVUFBVSxDQUFDbkosQ0FBRCxDQUFkO0FBQUEsU0FBaEQsQ0FBTjtBQUNBLFlBQUlvSixNQUFNLEdBQUcsRUFBYjs7QUFDQSxhQUFLLElBQUl6SixDQUFDLEdBQUcsQ0FBUixFQUFXMEosRUFBRSxHQUFHcEMsR0FBRyxDQUFDdkYsTUFBekIsRUFBaUMvQixDQUFDLEdBQUcwSixFQUFyQyxFQUF5QzFKLENBQUMsRUFBMUMsRUFBOEM7QUFDMUN5SixVQUFBQSxNQUFNLENBQUN6SixDQUFELENBQU4sR0FBWUEsQ0FBQyxHQUFHLENBQUosR0FBUXdILE1BQU0sQ0FBQ0YsR0FBRyxDQUFDdEgsQ0FBQyxHQUFHLENBQUwsQ0FBSixFQUFhc0gsR0FBRyxDQUFDdEgsQ0FBRCxDQUFoQixFQUFxQnFILEdBQXJCLENBQU4sQ0FBZ0MvRyxDQUF4QyxHQUE0Q2tILE1BQU0sQ0FBQ0YsR0FBRyxDQUFDdEgsQ0FBRCxDQUFKLEVBQVNzSCxHQUFHLENBQUN0SCxDQUFDLEdBQUcsQ0FBTCxDQUFaLEVBQXFCcUgsR0FBckIsQ0FBTixDQUFnQ2hILENBQXhGO0FBQ0g7O0FBQ0QsZUFBT29KLE1BQVA7QUFDSDtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGF0aERlZiB9IGZyb20gJy4vYW5pbWF0aW9uJ1xuaW1wb3J0IHsgcGFyc2VTVkcsIE1vdmVUb0NvbW1hbmQsIExpbmVUb0NvbW1hbmQsIEhvcml6b250YWxMaW5lVG9Db21tYW5kLCBWZXJ0aWNhbExpbmVUb0NvbW1hbmQsIEN1cnZlVG9Db21tYW5kLCBRdWFkcmF0aWNDdXJ2ZVRvQ29tbWFuZCwgRWxsaXB0aWNhbEFyY0NvbW1hbmQgfSBmcm9tICdzdmctcGF0aC1wYXJzZXInO1xuXG5leHBvcnQgY2xhc3MgUGF0aE1ha2VyIHtcbiAgICBwdWJsaWMgcGF0aDogUGF0aERlZiA9IHtcbiAgICAgICAgYzogZmFsc2UsXG4gICAgICAgIGk6IFtdLFxuICAgICAgICBvOiBbXSxcbiAgICAgICAgdjogW11cbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBjdXJyZW50WDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGN1cnJlbnRZOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgb2Zmc2V0WDogbnVtYmVyID0gSW5maW5pdHk7XG4gICAgcHJpdmF0ZSBvZmZzZXRZOiBudW1iZXIgPSBJbmZpbml0eTtcblxuICAgIC8vIGZvciBkaXNjb250aW51b3VzIHBhdGhzXG4gICAgcHJpdmF0ZSBwYXRoUmVhZHkgPSBmYWxzZVxuICAgIHByaXZhdGUgcGF0aFN0YXJ0OiBbbnVtYmVyLCBudW1iZXJdID0gWzAsIDBdXG4gICAgcHJpdmF0ZSBwYXRoQ2hhaW46IFtudW1iZXIsIG51bWJlcl1bXSA9IFtdXG5cbiAgICBjb25zdHJ1Y3RvcihwYXRoRGF0YT86IHN0cmluZykge1xuICAgICAgICBpZiAocGF0aERhdGEpIHtcbiAgICAgICAgICAgIHRoaXMucGFyc2UocGF0aERhdGEpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVhZKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFggPSB4XG4gICAgICAgIHRoaXMuY3VycmVudFkgPSB5XG4gICAgICAgIHRoaXMub2Zmc2V0WCA9IE1hdGgubWluKHRoaXMub2Zmc2V0WCwgeClcbiAgICAgICAgdGhpcy5vZmZzZXRZID0gTWF0aC5taW4odGhpcy5vZmZzZXRZLCB5KVxuICAgIH1cblxuICAgIHByaXZhdGUgY2FsY3VsYXRlQmV6aWVyTWluTWF4KHAwOiBudW1iZXIsIHAxOiBudW1iZXIsIHAyOiBudW1iZXIsIHAzOiBudW1iZXIpOiBbbnVtYmVyLCBudW1iZXJdIHtcbiAgICAgICAgY29uc3QgYSA9IDMgKiAocDMgLSAzICogcDIgKyAzICogcDEgLSBwMClcbiAgICAgICAgY29uc3QgYiA9IDYgKiAocDIgLSAyICogcDEgKyBwMClcbiAgICAgICAgY29uc3QgYyA9IDMgKiAocDEgLSBwMClcbiAgICAgICAgbGV0IG1pbiA9IEluZmluaXR5LCBtYXggPSAtSW5maW5pdHlcbiAgICAgICAgaWYgKGIgKiBiIC0gNCAqIGEgKiBjID49IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHNxcnQgPSBNYXRoLnNxcnQoYiAqIGIgLSA0ICogYSAqIGMpXG4gICAgICAgICAgICBjb25zdCByb290cyA9IFsxLCAtMV0ubWFwKG11bHRpID0+IChtdWx0aSAqIHNxcnQgLSBiKSAvIDIgLyBhKVxuICAgICAgICAgICAgcm9vdHMuZm9yRWFjaChyb290ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocm9vdCA+IDAgJiYgcm9vdCA8IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBNYXRoLnBvdygxIC0gcm9vdCwgMykgKiBwMCArIDMgKiBNYXRoLnBvdygxIC0gcm9vdCwgMikgKiByb290ICogcDEgKyAzICogKDEgLSByb290KSAqIHJvb3QgKiByb290ICogcDIgKyBNYXRoLnBvdyhyb290LCAzKSAqIHAzXG4gICAgICAgICAgICAgICAgICAgIG1pbiA9IE1hdGgubWluKG1pbiwgdmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIG1heCA9IE1hdGgubWF4KG1heCwgdmFsdWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBtaW4gPSBNYXRoLm1pbihtaW4sIHAwLCBwMylcbiAgICAgICAgbWF4ID0gTWF0aC5tYXgobWF4LCBwMCwgcDMpXG4gICAgICAgIHJldHVybiBbbWluLCBtYXhdXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjYWxjdWxhdGVIaWdobHlPcmRlcihhcnI6IG51bWJlcltdLCByYXRpbzogbnVtYmVyKTogbnVtYmVyW10ge1xuICAgICAgICBsZXQgcmVzdWx0OiBudW1iZXJbXSA9IFtdXG4gICAgICAgIGFyci5mb3JFYWNoKCh2LCBpLCBhKSA9PiB7XG4gICAgICAgICAgICBpZiAoaSA+PSBhLmxlbmd0aCAtIDEpIHJldHVyblxuICAgICAgICAgICAgcmVzdWx0LnB1c2godiAqICgxIC0gcmF0aW8pICsgYVtpICsgMV0gKiByYXRpbylcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cblxuICAgIHByaXZhdGUgY2FsY3VsYXRlQmV6aWVyU3BsaXQocmF0aW86IG51bWJlciwgLi4ub3JkZXIwOiBudW1iZXJbXSk6IG51bWJlcltdIHtcbiAgICAgICAgbGV0IG9yZGVyMSA9IHRoaXMuY2FsY3VsYXRlSGlnaGx5T3JkZXIob3JkZXIwLCByYXRpbylcbiAgICAgICAgbGV0IG9yZGVyMiA9IHRoaXMuY2FsY3VsYXRlSGlnaGx5T3JkZXIob3JkZXIxLCByYXRpbylcbiAgICAgICAgbGV0IG9yZGVyMyA9IHRoaXMuY2FsY3VsYXRlSGlnaGx5T3JkZXIob3JkZXIyLCByYXRpbylcbiAgICAgICAgcmV0dXJuIFtvcmRlcjFbMF0sIG9yZGVyMlswXSwgb3JkZXIzWzBdLCBvcmRlcjJbMV0sIG9yZGVyMVsyXSwgb3JkZXIwWzNdXVxuICAgIH1cblxuICAgIHB1YmxpYyBtb3ZlVG8oeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLnBhdGhSZWFkeSkge1xuICAgICAgICAgICAgdGhpcy5wYXRoLmMgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5wYXRoLmkgPSBbWzAsIDBdXVxuICAgICAgICAgICAgdGhpcy5wYXRoLm8gPSBbXVxuICAgICAgICAgICAgdGhpcy5wYXRoLnYgPSBbW3gsIHldXVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50WCA9IHhcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFkgPSB5XG4gICAgICAgICAgICB0aGlzLm9mZnNldFggPSB4XG4gICAgICAgICAgICB0aGlzLm9mZnNldFkgPSB5XG4gICAgICAgICAgICB0aGlzLnBhdGhSZWFkeSA9IHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubGluZVRvKC4uLnRoaXMucGF0aFN0YXJ0KVxuICAgICAgICAgICAgdGhpcy5saW5lVG8oeCwgeSlcbiAgICAgICAgICAgIHRoaXMucGF0aENoYWluLnB1c2godGhpcy5wYXRoU3RhcnQpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wYXRoU3RhcnQgPSBbeCwgeV1cbiAgICB9XG4gICAgcHVibGljIG1vdmVUb1JlbGF0aXZlKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMubW92ZVRvKHRoaXMuY3VycmVudFggKyB4LCB0aGlzLmN1cnJlbnRZICsgeSlcbiAgICB9XG4gICAgcHVibGljIGxpbmVUbyh4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgICAgICB0aGlzLnBhdGguaSEucHVzaChbMCwgMF0pXG4gICAgICAgIHRoaXMucGF0aC5vIS5wdXNoKFswLCAwXSlcbiAgICAgICAgdGhpcy5wYXRoLnYhLnB1c2goW3gsIHldKVxuICAgICAgICB0aGlzLnVwZGF0ZVhZKHgsIHkpXG4gICAgfVxuICAgIHB1YmxpYyBsaW5lVG9SZWxhdGl2ZSh4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgICAgICB0aGlzLmxpbmVUbyh0aGlzLmN1cnJlbnRYICsgeCwgdGhpcy5jdXJyZW50WSArIHkpXG4gICAgfVxuICAgIHB1YmxpYyBob3Jpem9udGFsVG8oeDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMubGluZVRvKHgsIHRoaXMuY3VycmVudFkpXG4gICAgfVxuICAgIHB1YmxpYyBob3Jpem9udGFsVG9SZWxhdGl2ZSh4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5ob3Jpem9udGFsVG8odGhpcy5jdXJyZW50WCArIHgpXG4gICAgfVxuICAgIHB1YmxpYyB2ZXJ0aWNhbFRvKHk6IG51bWJlcikge1xuICAgICAgICB0aGlzLmxpbmVUbyh0aGlzLmN1cnJlbnRYLCB5KVxuICAgIH1cbiAgICBwdWJsaWMgdmVydGljYWxUb1JlbGF0aXZlKHk6IG51bWJlcikge1xuICAgICAgICB0aGlzLnZlcnRpY2FsVG8odGhpcy5jdXJyZW50WSArIHkpXG4gICAgfVxuICAgIHB1YmxpYyBjdWJpY0JlemllckN1cnZlVG8oXG4gICAgICAgIGMxeDogbnVtYmVyLFxuICAgICAgICBjMXk6IG51bWJlcixcbiAgICAgICAgYzJ4OiBudW1iZXIsXG4gICAgICAgIGMyeTogbnVtYmVyLFxuICAgICAgICB4OiBudW1iZXIsXG4gICAgICAgIHk6IG51bWJlclxuICAgICkge1xuICAgICAgICB0aGlzLnBhdGguaSEucHVzaChbYzJ4IC0geCwgYzJ5IC0geV0pXG4gICAgICAgIHRoaXMucGF0aC5vIS5wdXNoKFtjMXggLSB0aGlzLmN1cnJlbnRYLCBjMXkgLSB0aGlzLmN1cnJlbnRZXSlcbiAgICAgICAgdGhpcy5wYXRoLnYhLnB1c2goW3gsIHldKVxuICAgICAgICB0aGlzLm9mZnNldFggPSBNYXRoLm1pbih0aGlzLm9mZnNldFgsIC4uLnRoaXMuY2FsY3VsYXRlQmV6aWVyTWluTWF4KHRoaXMuY3VycmVudFgsIGMxeCwgYzJ4LCB4KSlcbiAgICAgICAgdGhpcy5vZmZzZXRZID0gTWF0aC5taW4odGhpcy5vZmZzZXRZLCAuLi50aGlzLmNhbGN1bGF0ZUJlemllck1pbk1heCh0aGlzLmN1cnJlbnRZLCBjMXksIGMyeSwgeSkpXG4gICAgICAgIHRoaXMudXBkYXRlWFkoeCwgeSlcbiAgICB9XG4gICAgcHVibGljIGN1YmljQmV6aWVyQ3VydmVUb1JlbGF0aXZlKFxuICAgICAgICBjMXg6IG51bWJlcixcbiAgICAgICAgYzF5OiBudW1iZXIsXG4gICAgICAgIGMyeDogbnVtYmVyLFxuICAgICAgICBjMnk6IG51bWJlcixcbiAgICAgICAgeDogbnVtYmVyLFxuICAgICAgICB5OiBudW1iZXJcbiAgICApIHtcbiAgICAgICAgdGhpcy5jdWJpY0JlemllckN1cnZlVG8odGhpcy5jdXJyZW50WCArIGMxeCwgdGhpcy5jdXJyZW50WSArIGMxeSwgdGhpcy5jdXJyZW50WCArIGMyeCwgdGhpcy5jdXJyZW50WSArIGMyeSwgdGhpcy5jdXJyZW50WCArIHgsIHRoaXMuY3VycmVudFkgKyB5KVxuICAgIH1cbiAgICBwdWJsaWMgcXVhZHJhdGljQmV6aWVyQ3VydmVUbyhjeDogbnVtYmVyLCBjeTogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgICAgICB0aGlzLnBhdGguaSEucHVzaChbY3ggLSB4LCBjeSAtIHldKVxuICAgICAgICB0aGlzLnBhdGgubyEucHVzaChbY3ggLSB0aGlzLmN1cnJlbnRYLCBjeSAtIHRoaXMuY3VycmVudFldKVxuICAgICAgICB0aGlzLnBhdGgudiEucHVzaChbeCwgeV0pXG4gICAgICAgIHRoaXMub2Zmc2V0WCA9IE1hdGgubWluKHRoaXMub2Zmc2V0WCwgLi4udGhpcy5jYWxjdWxhdGVCZXppZXJNaW5NYXgodGhpcy5jdXJyZW50WCwgY3gsIGN4LCB4KSlcbiAgICAgICAgdGhpcy5vZmZzZXRZID0gTWF0aC5taW4odGhpcy5vZmZzZXRZLCAuLi50aGlzLmNhbGN1bGF0ZUJlemllck1pbk1heCh0aGlzLmN1cnJlbnRZLCBjeSwgY3ksIHkpKVxuICAgICAgICB0aGlzLnVwZGF0ZVhZKHgsIHkpXG4gICAgfVxuICAgIHB1YmxpYyBxdWFkcmF0aWNCZXppZXJDdXJ2ZVRvUmVsYXRpdmUoY3g6IG51bWJlciwgY3k6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5xdWFkcmF0aWNCZXppZXJDdXJ2ZVRvKHRoaXMuY3VycmVudFggKyBjeCwgdGhpcy5jdXJyZW50WSArIGN5LCB0aGlzLmN1cnJlbnRYICsgeCwgdGhpcy5jdXJyZW50WSArIHkpXG4gICAgfVxuICAgIHB1YmxpYyBhcmNUbyhcbiAgICAgICAgcng6IG51bWJlcixcbiAgICAgICAgcnk6IG51bWJlcixcbiAgICAgICAgeEF4aXNSb3RhdGlvbjogbnVtYmVyLFxuICAgICAgICBsYXJnZUFyY0ZsYWc6IG51bWJlcixcbiAgICAgICAgc3dlZXBGbGFnOiBudW1iZXIsXG4gICAgICAgIHg6IG51bWJlcixcbiAgICAgICAgeTogbnVtYmVyXG4gICAgKSB7XG4gICAgICAgIGNvbnN0IGNTZXJpZXMgPSBQYXRoTWFrZXIuYTJjKHRoaXMuY3VycmVudFgsIHRoaXMuY3VycmVudFksIHJ4LCByeSwgeEF4aXNSb3RhdGlvbiwgbGFyZ2VBcmNGbGFnLCBzd2VlcEZsYWcsIHgsIHkpIGFzIG51bWJlcltdXG4gICAgICAgIHdoaWxlIChjU2VyaWVzLmxlbmd0aCA+PSA2KSB7XG4gICAgICAgICAgICBjb25zdCBpb3ZMaXN0ID0gY1Nlcmllcy5zcGxpY2UoMCwgNilcbiAgICAgICAgICAgIHRoaXMucGF0aC5pIS5wdXNoKFtpb3ZMaXN0WzJdIC0gaW92TGlzdFs0XSwgaW92TGlzdFszXSAtIGlvdkxpc3RbNV1dKVxuICAgICAgICAgICAgdGhpcy5wYXRoLm8hLnB1c2goW2lvdkxpc3RbMF0gLSB0aGlzLmN1cnJlbnRYLCBpb3ZMaXN0WzFdIC0gdGhpcy5jdXJyZW50WV0pXG4gICAgICAgICAgICB0aGlzLnBhdGgudiEucHVzaChbaW92TGlzdFs0XSwgaW92TGlzdFs1XV0pXG4gICAgICAgICAgICB0aGlzLm9mZnNldFggPSBNYXRoLm1pbih0aGlzLm9mZnNldFgsIC4uLnRoaXMuY2FsY3VsYXRlQmV6aWVyTWluTWF4KHRoaXMuY3VycmVudFgsIGlvdkxpc3RbMF0sIGlvdkxpc3RbMl0sIGlvdkxpc3RbNF0pKVxuICAgICAgICAgICAgdGhpcy5vZmZzZXRZID0gTWF0aC5taW4odGhpcy5vZmZzZXRZLCAuLi50aGlzLmNhbGN1bGF0ZUJlemllck1pbk1heCh0aGlzLmN1cnJlbnRZLCBpb3ZMaXN0WzFdLCBpb3ZMaXN0WzNdLCBpb3ZMaXN0WzVdKSlcbiAgICAgICAgICAgIHRoaXMudXBkYXRlWFkoaW92TGlzdFs0XSwgaW92TGlzdFs1XSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgYXJjVG9SZWxhdGl2ZShcbiAgICAgICAgcng6IG51bWJlcixcbiAgICAgICAgcnk6IG51bWJlcixcbiAgICAgICAgeEF4aXNSb3RhdGlvbjogbnVtYmVyLFxuICAgICAgICBsYXJnZUFyY0ZsYWc6IG51bWJlcixcbiAgICAgICAgc3dlZXBGbGFnOiBudW1iZXIsXG4gICAgICAgIHg6IG51bWJlcixcbiAgICAgICAgeTogbnVtYmVyXG4gICAgKSB7XG4gICAgICAgIHRoaXMuYXJjVG8ocngsIHJ5LCB4QXhpc1JvdGF0aW9uLCBsYXJnZUFyY0ZsYWcsIHN3ZWVwRmxhZywgdGhpcy5jdXJyZW50WCArIHgsIHRoaXMuY3VycmVudFkgKyB5KVxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGEyYyh4MTogbnVtYmVyLCB5MTogbnVtYmVyLCByeDogbnVtYmVyLCByeTogbnVtYmVyLCBhbmdsZTogbnVtYmVyLCBsYXJnZV9hcmNfZmxhZzogbnVtYmVyLCBzd2VlcF9mbGFnOiBudW1iZXIsIHgyOiBudW1iZXIsIHkyOiBudW1iZXIsIHJlY3Vyc2l2ZT86IG51bWJlcltdKTogbnVtYmVyW10gfCBudW1iZXJbXVtdIHtcbiAgICAgICAgLy8gZm9yIG1vcmUgaW5mb3JtYXRpb24gb2Ygd2hlcmUgdGhpcyBNYXRoIGNhbWUgZnJvbSB2aXNpdDpcbiAgICAgICAgLy8gaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvaW1wbG5vdGUuaHRtbCNBcmNJbXBsZW1lbnRhdGlvbk5vdGVzXG4gICAgICAgIHZhciBfMTIwID0gTWF0aC5QSSAqIDEyMCAvIDE4MCxcbiAgICAgICAgICAgIHJhZCA9IE1hdGguUEkgLyAxODAgKiAoK2FuZ2xlIHx8IDApLFxuICAgICAgICAgICAgcmVzOiBudW1iZXJbXSA9IFtdLFxuICAgICAgICAgICAgeHksXG4gICAgICAgICAgICByb3RhdGUgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIsIHJhZDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIFggPSB4ICogTWF0aC5jb3MocmFkKSAtIHkgKiBNYXRoLnNpbihyYWQpLFxuICAgICAgICAgICAgICAgICAgICBZID0geCAqIE1hdGguc2luKHJhZCkgKyB5ICogTWF0aC5jb3MocmFkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4geyB4OiBYLCB5OiBZIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICBpZiAoIXJ4IHx8ICFyeSkge1xuICAgICAgICAgICAgcmV0dXJuIFt4MSwgeTEsIHgyLCB5MiwgeDIsIHkyXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXJlY3Vyc2l2ZSkge1xuICAgICAgICAgICAgeHkgPSByb3RhdGUoeDEsIHkxLCAtcmFkKTtcbiAgICAgICAgICAgIHgxID0geHkueDtcbiAgICAgICAgICAgIHkxID0geHkueTtcbiAgICAgICAgICAgIHh5ID0gcm90YXRlKHgyLCB5MiwgLXJhZCk7XG4gICAgICAgICAgICB4MiA9IHh5Lng7XG4gICAgICAgICAgICB5MiA9IHh5Lnk7XG4gICAgICAgICAgICB2YXIgY29zID0gTWF0aC5jb3MoTWF0aC5QSSAvIDE4MCAqIGFuZ2xlKSxcbiAgICAgICAgICAgICAgICBzaW4gPSBNYXRoLnNpbihNYXRoLlBJIC8gMTgwICogYW5nbGUpLFxuICAgICAgICAgICAgICAgIHggPSAoeDEgLSB4MikgLyAyLFxuICAgICAgICAgICAgICAgIHkgPSAoeTEgLSB5MikgLyAyO1xuICAgICAgICAgICAgdmFyIGggPSB4ICogeCAvIChyeCAqIHJ4KSArIHkgKiB5IC8gKHJ5ICogcnkpO1xuICAgICAgICAgICAgaWYgKGggPiAxKSB7XG4gICAgICAgICAgICAgICAgaCA9IE1hdGguc3FydChoKTtcbiAgICAgICAgICAgICAgICByeCA9IGggKiByeDtcbiAgICAgICAgICAgICAgICByeSA9IGggKiByeTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciByeDIgPSByeCAqIHJ4LFxuICAgICAgICAgICAgICAgIHJ5MiA9IHJ5ICogcnksXG4gICAgICAgICAgICAgICAgayA9IChsYXJnZV9hcmNfZmxhZyA9PSBzd2VlcF9mbGFnID8gLTEgOiAxKSAqXG4gICAgICAgICAgICAgICAgICAgIE1hdGguc3FydChNYXRoLmFicygocngyICogcnkyIC0gcngyICogeSAqIHkgLSByeTIgKiB4ICogeCkgLyAocngyICogeSAqIHkgKyByeTIgKiB4ICogeCkpKSxcbiAgICAgICAgICAgICAgICBjeCA9IGsgKiByeCAqIHkgLyByeSArICh4MSArIHgyKSAvIDIsXG4gICAgICAgICAgICAgICAgY3kgPSBrICogLXJ5ICogeCAvIHJ4ICsgKHkxICsgeTIpIC8gMixcbiAgICAgICAgICAgICAgICBmMSA9IE1hdGguYXNpbigoeTEgLSBjeSkgLyByeSksXG4gICAgICAgICAgICAgICAgZjIgPSBNYXRoLmFzaW4oKHkyIC0gY3kpIC8gcnkpO1xuXG4gICAgICAgICAgICBmMSA9IHgxIDwgY3ggPyBNYXRoLlBJIC0gZjEgOiBmMTtcbiAgICAgICAgICAgIGYyID0geDIgPCBjeCA/IE1hdGguUEkgLSBmMiA6IGYyO1xuICAgICAgICAgICAgZjEgPCAwICYmIChmMSA9IE1hdGguUEkgKiAyICsgZjEpO1xuICAgICAgICAgICAgZjIgPCAwICYmIChmMiA9IE1hdGguUEkgKiAyICsgZjIpO1xuICAgICAgICAgICAgaWYgKHN3ZWVwX2ZsYWcgJiYgZjEgPiBmMikge1xuICAgICAgICAgICAgICAgIGYxID0gZjEgLSBNYXRoLlBJICogMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghc3dlZXBfZmxhZyAmJiBmMiA+IGYxKSB7XG4gICAgICAgICAgICAgICAgZjIgPSBmMiAtIE1hdGguUEkgKiAyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZjEgPSByZWN1cnNpdmVbMF07XG4gICAgICAgICAgICBmMiA9IHJlY3Vyc2l2ZVsxXTtcbiAgICAgICAgICAgIGN4ID0gcmVjdXJzaXZlWzJdO1xuICAgICAgICAgICAgY3kgPSByZWN1cnNpdmVbM107XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRmID0gZjIgLSBmMTtcbiAgICAgICAgaWYgKE1hdGguYWJzKGRmKSA+IF8xMjApIHtcbiAgICAgICAgICAgIHZhciBmMm9sZCA9IGYyLFxuICAgICAgICAgICAgICAgIHgyb2xkID0geDIsXG4gICAgICAgICAgICAgICAgeTJvbGQgPSB5MjtcbiAgICAgICAgICAgIGYyID0gZjEgKyBfMTIwICogKHN3ZWVwX2ZsYWcgJiYgZjIgPiBmMSA/IDEgOiAtMSk7XG4gICAgICAgICAgICB4MiA9IGN4ICsgcnggKiBNYXRoLmNvcyhmMik7XG4gICAgICAgICAgICB5MiA9IGN5ICsgcnkgKiBNYXRoLnNpbihmMik7XG4gICAgICAgICAgICByZXMgPSB0aGlzLmEyYyh4MiwgeTIsIHJ4LCByeSwgYW5nbGUsIDAsIHN3ZWVwX2ZsYWcsIHgyb2xkLCB5Mm9sZCwgW2YyLCBmMm9sZCwgY3gsIGN5XSkgYXMgbnVtYmVyW107XG4gICAgICAgIH1cbiAgICAgICAgZGYgPSBmMiAtIGYxO1xuICAgICAgICB2YXIgYzEgPSBNYXRoLmNvcyhmMSksXG4gICAgICAgICAgICBzMSA9IE1hdGguc2luKGYxKSxcbiAgICAgICAgICAgIGMyID0gTWF0aC5jb3MoZjIpLFxuICAgICAgICAgICAgczIgPSBNYXRoLnNpbihmMiksXG4gICAgICAgICAgICB0ID0gTWF0aC50YW4oZGYgLyA0KSxcbiAgICAgICAgICAgIGh4ID0gNCAvIDMgKiByeCAqIHQsXG4gICAgICAgICAgICBoeSA9IDQgLyAzICogcnkgKiB0LFxuICAgICAgICAgICAgbTEgPSBbeDEsIHkxXSxcbiAgICAgICAgICAgIG0yID0gW3gxICsgaHggKiBzMSwgeTEgLSBoeSAqIGMxXSxcbiAgICAgICAgICAgIG0zID0gW3gyICsgaHggKiBzMiwgeTIgLSBoeSAqIGMyXSxcbiAgICAgICAgICAgIG00ID0gW3gyLCB5Ml07XG4gICAgICAgIG0yWzBdID0gMiAqIG0xWzBdIC0gbTJbMF07XG4gICAgICAgIG0yWzFdID0gMiAqIG0xWzFdIC0gbTJbMV07XG4gICAgICAgIGlmIChyZWN1cnNpdmUpIHtcbiAgICAgICAgICAgIHJldHVybiBbbTIsIG0zLCBtNF0uY29uY2F0KHJlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXMgPSBbbTIsIG0zLCBtNF0uY29uY2F0KHJlcykuam9pbigpLnNwbGl0KFwiLFwiKS5tYXAoeCA9PiBwYXJzZUZsb2F0KHgpKTtcbiAgICAgICAgICAgIHZhciBuZXdyZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBpaSA9IHJlcy5sZW5ndGg7IGkgPCBpaTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbmV3cmVzW2ldID0gaSAlIDIgPyByb3RhdGUocmVzW2kgLSAxXSwgcmVzW2ldLCByYWQpLnkgOiByb3RhdGUocmVzW2ldLCByZXNbaSArIDFdLCByYWQpLng7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3cmVzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGNsb3NlUGF0aCgpIHtcbiAgICAgICAgdGhpcy5wYXRoLmMgPSB0cnVlXG4gICAgfVxuXG4gICAgcHVibGljIHVuaWZvcm0oKSB7XG4gICAgICAgIGlmICh0aGlzLnBhdGhDaGFpbi5sZW5ndGggJiYgISh0aGlzLmN1cnJlbnRYID09IHRoaXMucGF0aFN0YXJ0WzBdICYmIHRoaXMuY3VycmVudFkgPT0gdGhpcy5wYXRoU3RhcnRbMV0pKSB7XG4gICAgICAgICAgICB0aGlzLmxpbmVUbyguLi50aGlzLnBhdGhTdGFydClcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAodGhpcy5wYXRoQ2hhaW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBwYXRoUmVmID0gdGhpcy5wYXRoQ2hhaW4ucG9wKCkhXG4gICAgICAgICAgICB0aGlzLmxpbmVUbyguLi5wYXRoUmVmKVxuICAgICAgICB9XG4gICAgICAgIHdoaWxlICh0aGlzLnBhdGgubyEubGVuZ3RoIDwgdGhpcy5wYXRoLmkhLmxlbmd0aClcbiAgICAgICAgICAgIHRoaXMucGF0aC5vIS5wdXNoKFswLCAwXSlcbiAgICAgICAgdGhpcy5wYXRoLnYhLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgICAgdmFsdWVbMF0gLT0gdGhpcy5vZmZzZXRYXG4gICAgICAgICAgICB2YWx1ZVsxXSAtPSB0aGlzLm9mZnNldFlcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5vZmZzZXRYID0gMFxuICAgICAgICB0aGlzLm9mZnNldFkgPSAwXG4gICAgfVxuXG4gICAgcHVibGljIHBhcnNlKHBhdGhEYXRhOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgcGF0aERhdGFTZXJpZXMgPSBwYXJzZVNWRyhwYXRoRGF0YSlcbiAgICAgICAgbGV0IHBhdGhEYXRhV2l0aFR5cGU7XG4gICAgICAgIHBhdGhEYXRhU2VyaWVzLmZvckVhY2gocGF0aERhdGFJdGVtID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAocGF0aERhdGFJdGVtLmNvZGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdNJzpcbiAgICAgICAgICAgICAgICAgICAgcGF0aERhdGFXaXRoVHlwZSA9IHBhdGhEYXRhSXRlbSBhcyBNb3ZlVG9Db21tYW5kXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZVRvKHBhdGhEYXRhV2l0aFR5cGUueCwgcGF0aERhdGFXaXRoVHlwZS55KVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgJ20nOlxuICAgICAgICAgICAgICAgICAgICBwYXRoRGF0YVdpdGhUeXBlID0gcGF0aERhdGFJdGVtIGFzIE1vdmVUb0NvbW1hbmRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlVG9SZWxhdGl2ZShwYXRoRGF0YVdpdGhUeXBlLngsIHBhdGhEYXRhV2l0aFR5cGUueSlcbiAgICAgICAgICAgICAgICBjYXNlICdMJzpcbiAgICAgICAgICAgICAgICAgICAgcGF0aERhdGFXaXRoVHlwZSA9IHBhdGhEYXRhSXRlbSBhcyBMaW5lVG9Db21tYW5kXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGluZVRvKHBhdGhEYXRhV2l0aFR5cGUueCwgcGF0aERhdGFXaXRoVHlwZS55KVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgJ2wnOlxuICAgICAgICAgICAgICAgICAgICBwYXRoRGF0YVdpdGhUeXBlID0gcGF0aERhdGFJdGVtIGFzIExpbmVUb0NvbW1hbmRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saW5lVG9SZWxhdGl2ZShwYXRoRGF0YVdpdGhUeXBlLngsIHBhdGhEYXRhV2l0aFR5cGUueSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlICdIJzpcbiAgICAgICAgICAgICAgICAgICAgcGF0aERhdGFXaXRoVHlwZSA9IHBhdGhEYXRhSXRlbSBhcyBIb3Jpem9udGFsTGluZVRvQ29tbWFuZFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvcml6b250YWxUbyhwYXRoRGF0YVdpdGhUeXBlLngpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAnaCc6XG4gICAgICAgICAgICAgICAgICAgIHBhdGhEYXRhV2l0aFR5cGUgPSBwYXRoRGF0YUl0ZW0gYXMgSG9yaXpvbnRhbExpbmVUb0NvbW1hbmRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ob3Jpem9udGFsVG9SZWxhdGl2ZShwYXRoRGF0YVdpdGhUeXBlLngpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAnVic6XG4gICAgICAgICAgICAgICAgICAgIHBhdGhEYXRhV2l0aFR5cGUgPSBwYXRoRGF0YUl0ZW0gYXMgVmVydGljYWxMaW5lVG9Db21tYW5kXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmVydGljYWxUbyhwYXRoRGF0YVdpdGhUeXBlLnkpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAndic6XG4gICAgICAgICAgICAgICAgICAgIHBhdGhEYXRhV2l0aFR5cGUgPSBwYXRoRGF0YUl0ZW0gYXMgVmVydGljYWxMaW5lVG9Db21tYW5kXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmVydGljYWxUb1JlbGF0aXZlKHBhdGhEYXRhV2l0aFR5cGUueSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlICdDJzpcbiAgICAgICAgICAgICAgICAgICAgcGF0aERhdGFXaXRoVHlwZSA9IHBhdGhEYXRhSXRlbSBhcyBDdXJ2ZVRvQ29tbWFuZFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1YmljQmV6aWVyQ3VydmVUbyhwYXRoRGF0YVdpdGhUeXBlLngxLCBwYXRoRGF0YVdpdGhUeXBlLnkxLCBwYXRoRGF0YVdpdGhUeXBlLngyLCBwYXRoRGF0YVdpdGhUeXBlLnkyLCBwYXRoRGF0YVdpdGhUeXBlLngsIHBhdGhEYXRhV2l0aFR5cGUueSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlICdjJzpcbiAgICAgICAgICAgICAgICAgICAgcGF0aERhdGFXaXRoVHlwZSA9IHBhdGhEYXRhSXRlbSBhcyBDdXJ2ZVRvQ29tbWFuZFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1YmljQmV6aWVyQ3VydmVUb1JlbGF0aXZlKHBhdGhEYXRhV2l0aFR5cGUueDEsIHBhdGhEYXRhV2l0aFR5cGUueTEsIHBhdGhEYXRhV2l0aFR5cGUueDIsIHBhdGhEYXRhV2l0aFR5cGUueTIsIHBhdGhEYXRhV2l0aFR5cGUueCwgcGF0aERhdGFXaXRoVHlwZS55KVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgJ1EnOlxuICAgICAgICAgICAgICAgICAgICBwYXRoRGF0YVdpdGhUeXBlID0gcGF0aERhdGFJdGVtIGFzIFF1YWRyYXRpY0N1cnZlVG9Db21tYW5kXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucXVhZHJhdGljQmV6aWVyQ3VydmVUbyhwYXRoRGF0YVdpdGhUeXBlLngxLCBwYXRoRGF0YVdpdGhUeXBlLnkxLCBwYXRoRGF0YVdpdGhUeXBlLngsIHBhdGhEYXRhV2l0aFR5cGUueSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlICdxJzpcbiAgICAgICAgICAgICAgICAgICAgcGF0aERhdGFXaXRoVHlwZSA9IHBhdGhEYXRhSXRlbSBhcyBRdWFkcmF0aWNDdXJ2ZVRvQ29tbWFuZFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnF1YWRyYXRpY0JlemllckN1cnZlVG9SZWxhdGl2ZShwYXRoRGF0YVdpdGhUeXBlLngxLCBwYXRoRGF0YVdpdGhUeXBlLnkxLCBwYXRoRGF0YVdpdGhUeXBlLngsIHBhdGhEYXRhV2l0aFR5cGUueSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlICdBJzpcbiAgICAgICAgICAgICAgICAgICAgcGF0aERhdGFXaXRoVHlwZSA9IHBhdGhEYXRhSXRlbSBhcyBFbGxpcHRpY2FsQXJjQ29tbWFuZFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFyY1RvKHBhdGhEYXRhV2l0aFR5cGUucngsIHBhdGhEYXRhV2l0aFR5cGUucnksIHBhdGhEYXRhV2l0aFR5cGUueEF4aXNSb3RhdGlvbiwgfn5wYXRoRGF0YVdpdGhUeXBlLmxhcmdlQXJjLCB+fnBhdGhEYXRhV2l0aFR5cGUuc3dlZXAsIHBhdGhEYXRhV2l0aFR5cGUueCwgcGF0aERhdGFXaXRoVHlwZS55KVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgJ2EnOlxuICAgICAgICAgICAgICAgICAgICBwYXRoRGF0YVdpdGhUeXBlID0gcGF0aERhdGFJdGVtIGFzIEVsbGlwdGljYWxBcmNDb21tYW5kXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJjVG9SZWxhdGl2ZShwYXRoRGF0YVdpdGhUeXBlLnJ4LCBwYXRoRGF0YVdpdGhUeXBlLnJ5LCBwYXRoRGF0YVdpdGhUeXBlLnhBeGlzUm90YXRpb24sIH5+cGF0aERhdGFXaXRoVHlwZS5sYXJnZUFyYywgfn5wYXRoRGF0YVdpdGhUeXBlLnN3ZWVwLCBwYXRoRGF0YVdpdGhUeXBlLngsIHBhdGhEYXRhV2l0aFR5cGUueSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlICdaJzpcbiAgICAgICAgICAgICAgICBjYXNlICd6JzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZVBhdGgoKVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocGF0aERhdGFJdGVtKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGltcGxlbWVudGF0aW9uIGZvdW5kIGZvciB0aGlzIHBhdGggY29tbWFuZC4nKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHB1YmxpYyB1cHNhbXBsZShyYXRpbzogbnVtYmVyKSB7XG4gICAgICAgIC8vIHVzZSBEZSBDYXN0ZWxqYXUncyBhbGdvcml0aG0gdG8gZG8gdGhlIHVwc2FtcGxpbmdcbiAgICAgICAgLy8gUmVmZXJlbmNlOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9EZV9DYXN0ZWxqYXUlMjdzX2FsZ29yaXRobVxuXG4gICAgICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihyYXRpbykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHVwc2FtcGxpbmcgcmF0aW8gc2hvdWxkIGJlIGFuIGludGVnZXIuJylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVuaWZvcm0oKVxuICAgICAgICBpZiAocmF0aW8gPD0gMSkgcmV0dXJuXG4gICAgICAgIGNvbnN0IGNvcHlQYXRoOiBQYXRoRGVmID0ge1xuICAgICAgICAgICAgYzogdGhpcy5wYXRoLmMsXG4gICAgICAgICAgICBpOiBbXSxcbiAgICAgICAgICAgIG86IFtdLFxuICAgICAgICAgICAgdjogW11cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhdGgudiEuZm9yRWFjaCgodiwgaSwgYSkgPT4ge1xuICAgICAgICAgICAgaWYgKGkgPD0gMCkge1xuICAgICAgICAgICAgICAgIGNvcHlQYXRoLnYhLnB1c2godilcbiAgICAgICAgICAgICAgICBjb3B5UGF0aC5pIS5wdXNoKHRoaXMucGF0aC5pIVtpXSlcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG9BcnJheSA9IHRoaXMucGF0aC5vIVxuICAgICAgICAgICAgY29uc3QgaUFycmF5ID0gdGhpcy5wYXRoLmkhXG4gICAgICAgICAgICBsZXQgeEFycmF5ID0gW2FbaSAtIDFdWzBdLCBvQXJyYXlbaSAtIDFdWzBdICsgYVtpIC0gMV1bMF0sIGlBcnJheVtpXVswXSArIHZbMF0sIHZbMF1dXG4gICAgICAgICAgICBsZXQgeUFycmF5ID0gW2FbaSAtIDFdWzFdLCBvQXJyYXlbaSAtIDFdWzFdICsgYVtpIC0gMV1bMV0sIGlBcnJheVtpXVsxXSArIHZbMV0sIHZbMV1dXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDwgcmF0aW87IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGVwUmF0aW8gPSAxIC8gKHJhdGlvIC0gaW5kZXggKyAxKVxuICAgICAgICAgICAgICAgIGNvbnN0IHhTcGxpdEFycmF5ID0gdGhpcy5jYWxjdWxhdGVCZXppZXJTcGxpdChzdGVwUmF0aW8sIC4uLnhBcnJheSlcbiAgICAgICAgICAgICAgICBjb25zdCB5U3BsaXRBcnJheSA9IHRoaXMuY2FsY3VsYXRlQmV6aWVyU3BsaXQoc3RlcFJhdGlvLCAuLi55QXJyYXkpXG4gICAgICAgICAgICAgICAgY29uc3QgcDB4ID0geEFycmF5WzBdLCBwMXggPSB4U3BsaXRBcnJheS5zaGlmdCgpISAtIHAweCwgcDN4ID0geFNwbGl0QXJyYXlbMV0sIHAyeCA9IHhTcGxpdEFycmF5LnNoaWZ0KCkhIC0gcDN4LFxuICAgICAgICAgICAgICAgICAgICBwMHkgPSB5QXJyYXlbMF0sIHAxeSA9IHlTcGxpdEFycmF5LnNoaWZ0KCkhIC0gcDB5LCBwM3kgPSB5U3BsaXRBcnJheVsxXSwgcDJ5ID0geVNwbGl0QXJyYXkuc2hpZnQoKSEgLSBwM3lcbiAgICAgICAgICAgICAgICBjb3B5UGF0aC5vIS5wdXNoKFtwMXgsIHAxeV0pXG4gICAgICAgICAgICAgICAgY29weVBhdGguaSEucHVzaChbcDJ4LCBwMnldKVxuICAgICAgICAgICAgICAgIGNvcHlQYXRoLnYhLnB1c2goW3AzeCwgcDN5XSlcbiAgICAgICAgICAgICAgICB4QXJyYXkgPSB4U3BsaXRBcnJheVxuICAgICAgICAgICAgICAgIHlBcnJheSA9IHlTcGxpdEFycmF5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwMHggPSB4QXJyYXkuc2hpZnQoKSEsIHAxeCA9IHhBcnJheS5zaGlmdCgpISAtIHAweCwgcDN4ID0geEFycmF5WzFdLCBwMnggPSB4QXJyYXkuc2hpZnQoKSEgLSBwM3gsXG4gICAgICAgICAgICAgICAgcDB5ID0geUFycmF5LnNoaWZ0KCkhLCBwMXkgPSB5QXJyYXkuc2hpZnQoKSEgLSBwMHksIHAzeSA9IHlBcnJheVsxXSwgcDJ5ID0geUFycmF5LnNoaWZ0KCkhIC0gcDN5XG4gICAgICAgICAgICBjb3B5UGF0aC5vIS5wdXNoKFtwMXgsIHAxeV0pXG4gICAgICAgICAgICBjb3B5UGF0aC5pIS5wdXNoKFtwMngsIHAyeV0pXG4gICAgICAgICAgICBjb3B5UGF0aC52IS5wdXNoKFtwM3gsIHAzeV0pXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMucGF0aCA9IGNvcHlQYXRoXG4gICAgICAgIHRoaXMudW5pZm9ybSgpXG4gICAgfVxuXG59Il19

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
      posY = 0,
      opacity = 100;

  if (dom && baseDom) {
    var baseTransform = (0, _helper.calculateBaseTransform)(dom, baseDom);
    var baseBBox = baseDom.getBBox();
    var refBBox = dom.getBBox();
    posX = baseTransform.e + refBBox.x - baseBBox.x;
    posY = baseTransform.f + refBBox.y - baseBBox.y;
    opacity = parseFloat(styles.opacity || '1') * 100;
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
      k: opacity
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZW5kZXIudHMiXSwibmFtZXMiOlsicmVuZGVyIiwiZG9tIiwiYmFzZURvbSIsIlNWR1RleHRFbGVtZW50IiwiU1ZHSW1hZ2VFbGVtZW50IiwiU1ZHR0VsZW1lbnQiLCJyZW5kZXJHcm91cCIsInJlbmRlckdseXBoIiwiYWRkVmlzdWFsRW5jb2RpbmdzIiwiaXRlbXMiLCJzdHlsZXMiLCJzdHJva2UiLCJwdXNoIiwidHkiLCJjIiwiayIsInNwbGl0Iiwic2xpY2UiLCJtYXAiLCJyYXciLCJwYXJzZUludCIsImNvbmNhdCIsIm8iLCJwYXJzZUZsb2F0Iiwic3Ryb2tlT3BhY2l0eSIsInciLCJzdHJva2VXaWR0aCIsImxjIiwic3Ryb2tlTGluZWNhcCIsImxqIiwic3Ryb2tlTGluZWpvaW4iLCJmaWxsIiwiZmlsbE9wYWNpdHkiLCJwb3NYIiwicG9zWSIsIm9wYWNpdHkiLCJiYXNlVHJhbnNmb3JtIiwiYmFzZUJCb3giLCJnZXRCQm94IiwicmVmQkJveCIsImUiLCJ4IiwiZiIsInkiLCJwIiwiYSIsInMiLCJyIiwic2siLCJzYSIsImdyb3VwIiwiaXQiLCJibSIsImhkIiwicG9zdEFjdGlvbnMiLCJwYXRoTWFrZXIiLCJ1bmlmb3JtIiwia3MiLCJwYXRoIiwibm0iLCJpZCIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJTVkdDaXJjbGVFbGVtZW50Iiwic3ZnTGVuZ3RoIiwiYmFzZVZhbCIsImNvbnZlcnRUb1NwZWNpZmllZFVuaXRzIiwiU1ZHTGVuZ3RoIiwiU1ZHX0xFTkdUSFRZUEVfUFgiLCJ2YWx1ZUluU3BlY2lmaWVkVW5pdHMiLCJQYXRoTWFrZXIiLCJtb3ZlVG8iLCJhcmNUbyIsImNsb3NlUGF0aCIsIlNWR0VsbGlwc2VFbGVtZW50IiwibWFwS2V5Iiwia2V5IiwicngiLCJyeSIsIlNWR0xpbmVFbGVtZW50IiwieDEiLCJ4MiIsInkxIiwieTIiLCJvZmZzZXRYIiwiTWF0aCIsIm1pbiIsIm9mZnNldFkiLCJsaW5lVG8iLCJTVkdQYXRoRWxlbWVudCIsInBhdGhEYXRhIiwiZ2V0QXR0cmlidXRlIiwiU1ZHUG9seWdvbkVsZW1lbnQiLCJTVkdQb2x5bGluZUVsZW1lbnQiLCJwb2ludHMiLCJsZW5ndGgiLCJpdGVyYWJsZVBvaW50cyIsIkFycmF5IiwicHJvdG90eXBlIiwiY2FsbCIsInJlZHVjZSIsInYiLCJmb3JFYWNoIiwiaSIsIlNWR1JlY3RFbGVtZW50Iiwid2lkdGgiLCJoZWlnaHQiLCJjb25zb2xlIiwiZXJyb3IiLCJFcnJvciIsImNoaWxkTm9kZXMiLCJub2RlIiwiU1ZHR3JhcGhpY3NFbGVtZW50IiwicmVuZGVyUGxhaW5HbHlwaCIsInR5cGUiLCJhcmdzIiwicmVuZGVyVGV4dCIsImZvbnRMaXN0IiwiY29tcHV0ZWRTdHlsZSIsImZvbnRTaXplIiwiZm9udEZhbWlseSIsInRyaW0iLCJmb250U3R5bGUiLCJmb250V2VpZ2h0IiwiZm9udENvbG9yIiwidGV4dEFuY2hvciIsImZvbnROYW1lIiwiZm9udEV4aXN0IiwibGlzdCIsImZpbHRlciIsImZvbnQiLCJmRmFtaWx5IiwiZlN0eWxlIiwiZldlaWdodCIsImZOYW1lIiwidGV4dERhdGEiLCJkIiwidCIsImlubmVySFRNTCIsImoiLCJ0ciIsImxzIiwiZmMiLCJtIiwiZm9udERlZiIsInJlbmRlckltYWdlIiwiYXNzZXRMaXN0IiwiZG9tSGVpZ2h0VmFsIiwiZG9tV2lkdGhWYWwiLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZHJhd0ltYWdlIiwiZGF0YVVybCIsInRvRGF0YVVSTCIsImFzc2V0RXhpc3QiLCJhc3NldCIsImgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBR08sU0FBU0EsTUFBVCxDQUFnQkMsR0FBaEIsRUFBeUNDLE9BQXpDLEVBQXFGO0FBQ3hGLE1BQUlELEdBQUcsWUFBWUUsY0FBZixJQUFpQ0YsR0FBRyxZQUFZRyxlQUFwRCxFQUFxRTtBQUNqRSxXQUFPLEVBQVA7QUFDSCxHQUZELE1BRU8sSUFBSUgsR0FBRyxZQUFZSSxXQUFuQixFQUFnQztBQUNuQyxXQUFPQyxXQUFXLENBQUNMLEdBQUQsRUFBTUMsT0FBTixDQUFsQjtBQUNILEdBRk0sTUFFQTtBQUNILFdBQU9LLFdBQVcsQ0FBQ04sR0FBRCxFQUFNQyxPQUFOLENBQWxCO0FBQ0g7QUFDSjs7QUFJRCxTQUFTTSxrQkFBVCxDQUE0QkMsS0FBNUIsRUFBc0RDLE1BQXRELEVBQW1GVCxHQUFuRixFQUE2R0MsT0FBN0csRUFBMkk7QUFDdkksTUFBSVEsTUFBTSxDQUFDQyxNQUFQLElBQWlCRCxNQUFNLENBQUNDLE1BQVAsS0FBa0IsTUFBdkMsRUFBK0M7QUFDM0NGLElBQUFBLEtBQUssQ0FBQ0csSUFBTixDQUFXO0FBQ1BDLE1BQUFBLEVBQUUsRUFBRSxJQURHO0FBRVBDLE1BQUFBLENBQUMsRUFBRTtBQUNDQyxRQUFBQSxDQUFDLEVBQUVMLE1BQU0sQ0FBQ0MsTUFBUCxDQUFlSyxLQUFmLENBQXFCLEdBQXJCLEVBQTBCLENBQTFCLEVBQTZCQSxLQUE3QixDQUFtQyxHQUFuQyxFQUF3QyxDQUF4QyxFQUEyQ0EsS0FBM0MsQ0FBaUQsR0FBakQsRUFBc0RDLEtBQXRELENBQTRELENBQTVELEVBQStELENBQS9ELEVBQWtFQyxHQUFsRSxDQUFzRSxVQUFDQyxHQUFEO0FBQUEsaUJBQWlCQyxRQUFRLENBQUNELEdBQUQsQ0FBUixHQUFnQixHQUFqQztBQUFBLFNBQXRFLEVBQTRHRSxNQUE1RyxDQUFtSCxDQUFuSDtBQURKLE9BRkk7QUFLUEMsTUFBQUEsQ0FBQyxFQUFFO0FBQ0NQLFFBQUFBLENBQUMsRUFBRVEsVUFBVSxDQUFDYixNQUFNLENBQUNjLGFBQVAsSUFBd0IsR0FBekIsQ0FBVixHQUEwQztBQUQ5QyxPQUxJO0FBUVBDLE1BQUFBLENBQUMsRUFBRTtBQUNDVixRQUFBQSxDQUFDLEVBQUVRLFVBQVUsQ0FBQ2IsTUFBTSxDQUFDZ0IsV0FBUCxJQUFzQixHQUF2QjtBQURkLE9BUkk7QUFXUEMsTUFBQUEsRUFBRSxFQUFFLDJCQUFjakIsTUFBTSxDQUFDa0IsYUFBckIsQ0FYRztBQVlQQyxNQUFBQSxFQUFFLEVBQUUsNEJBQWVuQixNQUFNLENBQUNvQixjQUF0QjtBQVpHLEtBQVg7QUFjSDs7QUFDRCxNQUFJcEIsTUFBTSxDQUFDcUIsSUFBUCxJQUFlckIsTUFBTSxDQUFDcUIsSUFBUCxLQUFnQixNQUFuQyxFQUEyQztBQUN2Q3RCLElBQUFBLEtBQUssQ0FBQ0csSUFBTixDQUFXO0FBQ1BDLE1BQUFBLEVBQUUsRUFBRSxJQURHO0FBRVBDLE1BQUFBLENBQUMsRUFBRTtBQUNDQyxRQUFBQSxDQUFDLEVBQUVMLE1BQU0sQ0FBQ3FCLElBQVAsQ0FBYWYsS0FBYixDQUFtQixHQUFuQixFQUF3QixDQUF4QixFQUEyQkEsS0FBM0IsQ0FBaUMsR0FBakMsRUFBc0MsQ0FBdEMsRUFBeUNBLEtBQXpDLENBQStDLEdBQS9DLEVBQW9EQyxLQUFwRCxDQUEwRCxDQUExRCxFQUE2RCxDQUE3RCxFQUFnRUMsR0FBaEUsQ0FBb0UsVUFBQ0MsR0FBRDtBQUFBLGlCQUFpQkMsUUFBUSxDQUFDRCxHQUFELENBQVIsR0FBZ0IsR0FBakM7QUFBQSxTQUFwRSxFQUEwR0UsTUFBMUcsQ0FBaUgsQ0FBakg7QUFESixPQUZJO0FBS1BDLE1BQUFBLENBQUMsRUFBRTtBQUNDUCxRQUFBQSxDQUFDLEVBQUVRLFVBQVUsQ0FBQ2IsTUFBTSxDQUFDc0IsV0FBUCxJQUFzQixHQUF2QixDQUFWLEdBQXdDO0FBRDVDO0FBTEksS0FBWDtBQVNIOztBQUNELE1BQUlDLElBQUksR0FBRyxDQUFYO0FBQUEsTUFBY0MsSUFBSSxHQUFHLENBQXJCO0FBQUEsTUFBd0JDLE9BQU8sR0FBRyxHQUFsQzs7QUFDQSxNQUFJbEMsR0FBRyxJQUFJQyxPQUFYLEVBQW9CO0FBQ2hCLFFBQU1rQyxhQUFhLEdBQUcsb0NBQXVCbkMsR0FBdkIsRUFBNEJDLE9BQTVCLENBQXRCO0FBQ0EsUUFBTW1DLFFBQVEsR0FBR25DLE9BQU8sQ0FBQ29DLE9BQVIsRUFBakI7QUFDQSxRQUFNQyxPQUFPLEdBQUd0QyxHQUFHLENBQUNxQyxPQUFKLEVBQWhCO0FBQ0FMLElBQUFBLElBQUksR0FBR0csYUFBYSxDQUFDSSxDQUFkLEdBQWtCRCxPQUFPLENBQUNFLENBQTFCLEdBQThCSixRQUFRLENBQUNJLENBQTlDO0FBQ0FQLElBQUFBLElBQUksR0FBR0UsYUFBYSxDQUFDTSxDQUFkLEdBQWtCSCxPQUFPLENBQUNJLENBQTFCLEdBQThCTixRQUFRLENBQUNNLENBQTlDO0FBQ0FSLElBQUFBLE9BQU8sR0FBR1osVUFBVSxDQUFDYixNQUFNLENBQUN5QixPQUFQLElBQWtCLEdBQW5CLENBQVYsR0FBb0MsR0FBOUM7QUFDSDs7QUFDRDFCLEVBQUFBLEtBQUssQ0FBQ0csSUFBTixDQUFXO0FBQ1BDLElBQUFBLEVBQUUsRUFBRSxJQURHO0FBRVArQixJQUFBQSxDQUFDLEVBQUU7QUFDQzdCLE1BQUFBLENBQUMsRUFBRSxDQUNDa0IsSUFERCxFQUVDQyxJQUZEO0FBREosS0FGSTtBQVFQVyxJQUFBQSxDQUFDLEVBQUU7QUFDQzlCLE1BQUFBLENBQUMsRUFBRSxDQUNDLENBREQsRUFFQyxDQUZEO0FBREosS0FSSTtBQWNQK0IsSUFBQUEsQ0FBQyxFQUFFO0FBQ0MvQixNQUFBQSxDQUFDLEVBQUUsQ0FDQyxHQURELEVBRUMsR0FGRDtBQURKLEtBZEk7QUFvQlBnQyxJQUFBQSxDQUFDLEVBQUU7QUFDQ2hDLE1BQUFBLENBQUMsRUFBRTtBQURKLEtBcEJJO0FBdUJQTyxJQUFBQSxDQUFDLEVBQUU7QUFDQ1AsTUFBQUEsQ0FBQyxFQUFFb0I7QUFESixLQXZCSTtBQTBCUGEsSUFBQUEsRUFBRSxFQUFFO0FBQ0FqQyxNQUFBQSxDQUFDLEVBQUU7QUFESCxLQTFCRztBQTZCUGtDLElBQUFBLEVBQUUsRUFBRTtBQUNBbEMsTUFBQUEsQ0FBQyxFQUFFO0FBREg7QUE3QkcsR0FBWDtBQWtDSDs7QUFFRCxTQUFTUixXQUFULENBQXFCTixHQUFyQixFQUE4Q0MsT0FBOUMsRUFBMEY7QUFDdEYsTUFBTWdELEtBQWlCLEdBQUc7QUFDdEJyQyxJQUFBQSxFQUFFLEVBQUUsSUFEa0I7QUFFdEJzQyxJQUFBQSxFQUFFLEVBQUUsRUFGa0I7QUFHdEJDLElBQUFBLEVBQUUsRUFBRSxDQUhrQjtBQUl0QkMsSUFBQUEsRUFBRSxFQUFFO0FBSmtCLEdBQTFCOztBQU1BLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLFNBQUQsRUFBMEI7QUFDMUNBLElBQUFBLFNBQVMsQ0FBQ0MsT0FBVjtBQUNBTixJQUFBQSxLQUFLLENBQUNDLEVBQU4sQ0FBVXZDLElBQVYsQ0FBZTtBQUNYQyxNQUFBQSxFQUFFLEVBQUUsSUFETztBQUVYNEMsTUFBQUEsRUFBRSxFQUFFO0FBQ0ExQyxRQUFBQSxDQUFDLEVBQUV3QyxTQUFTLENBQUNHLElBRGI7QUFFQWIsUUFBQUEsQ0FBQyxFQUFFO0FBRkgsT0FGTztBQU1YYyxNQUFBQSxFQUFFLEVBQUUxRCxHQUFHLENBQUMyRCxFQU5HO0FBT1hQLE1BQUFBLEVBQUUsRUFBRTtBQVBPLEtBQWY7QUFTQSxRQUFNM0MsTUFBTSxHQUFHbUQsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QjdELEdBQXhCLENBQWY7QUFDQU8sSUFBQUEsa0JBQWtCLENBQUMwQyxLQUFLLENBQUNDLEVBQVAsRUFBaUN6QyxNQUFqQyxFQUF5Q1QsR0FBekMsRUFBOENDLE9BQTlDLENBQWxCO0FBQ0gsR0FiRDs7QUFjQSxNQUFJRCxHQUFHLFlBQVk4RCxnQkFBbkIsRUFBcUM7QUFDakMsUUFBTUMsU0FBUyxHQUFHL0QsR0FBRyxDQUFDOEMsQ0FBSixDQUFNa0IsT0FBeEI7QUFDQUQsSUFBQUEsU0FBUyxDQUFDRSx1QkFBVixDQUFrQ0MsU0FBUyxDQUFDQyxpQkFBNUM7QUFDQSxRQUFNckIsQ0FBQyxHQUFHaUIsU0FBUyxDQUFDSyxxQkFBcEI7QUFDQSxRQUFNZCxTQUFTLEdBQUcsSUFBSWUsZUFBSixFQUFsQjtBQUNBZixJQUFBQSxTQUFTLENBQUNnQixNQUFWLENBQWlCeEIsQ0FBakIsRUFBb0IsQ0FBcEI7QUFDQVEsSUFBQUEsU0FBUyxDQUFDaUIsS0FBVixDQUFnQnpCLENBQWhCLEVBQW1CQSxDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQkEsQ0FBL0IsRUFBa0MsSUFBSUEsQ0FBdEM7QUFDQVEsSUFBQUEsU0FBUyxDQUFDaUIsS0FBVixDQUFnQnpCLENBQWhCLEVBQW1CQSxDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQkEsQ0FBL0IsRUFBa0MsQ0FBbEM7QUFDQVEsSUFBQUEsU0FBUyxDQUFDa0IsU0FBVjtBQUNBbkIsSUFBQUEsV0FBVyxDQUFDQyxTQUFELENBQVg7QUFDSCxHQVZELE1BVU8sSUFBSXRELEdBQUcsWUFBWXlFLGlCQUFuQixFQUFzQztBQUN6QyxRQUFNQyxNQUF1QixHQUFHLENBQUMsSUFBRCxFQUFPLElBQVAsQ0FBaEM7O0FBRHlDLHNCQUV4QkEsTUFBTSxDQUFDekQsR0FBUCxDQUFXLFVBQUEwRCxHQUFHLEVBQUk7QUFDL0IsVUFBTVosU0FBUyxHQUFHL0QsR0FBRyxDQUFDMkUsR0FBRCxDQUFILENBQVNYLE9BQTNCO0FBQ0FELE1BQUFBLFNBQVMsQ0FBQ0UsdUJBQVYsQ0FBa0NDLFNBQVMsQ0FBQ0MsaUJBQTVDO0FBQ0EsYUFBT0osU0FBUyxDQUFDSyxxQkFBakI7QUFDSCxLQUpnQixDQUZ3QjtBQUFBO0FBQUEsUUFFbENRLEVBRmtDO0FBQUEsUUFFOUJDLEVBRjhCOztBQU96QyxRQUFNdkIsVUFBUyxHQUFHLElBQUllLGVBQUosRUFBbEI7O0FBQ0FmLElBQUFBLFVBQVMsQ0FBQ2dCLE1BQVYsQ0FBaUJNLEVBQWpCLEVBQXFCLENBQXJCOztBQUNBdEIsSUFBQUEsVUFBUyxDQUFDaUIsS0FBVixDQUFnQkssRUFBaEIsRUFBb0JDLEVBQXBCLEVBQXdCLENBQXhCLEVBQTJCLENBQTNCLEVBQThCLENBQTlCLEVBQWlDRCxFQUFqQyxFQUFxQyxJQUFJQyxFQUF6Qzs7QUFDQXZCLElBQUFBLFVBQVMsQ0FBQ2lCLEtBQVYsQ0FBZ0JLLEVBQWhCLEVBQW9CQyxFQUFwQixFQUF3QixDQUF4QixFQUEyQixDQUEzQixFQUE4QixDQUE5QixFQUFpQ0QsRUFBakMsRUFBcUMsQ0FBckM7O0FBQ0F0QixJQUFBQSxVQUFTLENBQUNrQixTQUFWOztBQUNBbkIsSUFBQUEsV0FBVyxDQUFDQyxVQUFELENBQVg7QUFDSCxHQWJNLE1BYUEsSUFBSXRELEdBQUcsWUFBWThFLGNBQW5CLEVBQW1DO0FBQ3RDLFFBQU1KLE9BQXFDLEdBQUcsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsQ0FBOUM7O0FBRHNDLHVCQUViQSxPQUFNLENBQUN6RCxHQUFQLENBQVcsVUFBQTBELEdBQUcsRUFBSTtBQUN2QyxVQUFNWixTQUFTLEdBQUcvRCxHQUFHLENBQUMyRSxHQUFELENBQUgsQ0FBU1gsT0FBM0I7QUFDQUQsTUFBQUEsU0FBUyxDQUFDRSx1QkFBVixDQUFrQ0MsU0FBUyxDQUFDQyxpQkFBNUM7QUFDQSxhQUFPSixTQUFTLENBQUNLLHFCQUFqQjtBQUNILEtBSndCLENBRmE7QUFBQTtBQUFBLFFBRS9CVyxFQUYrQjtBQUFBLFFBRTNCQyxFQUYyQjtBQUFBLFFBRXZCQyxFQUZ1QjtBQUFBLFFBRW5CQyxFQUZtQjs7QUFPdEMsUUFBTUMsT0FBTyxHQUFHQyxJQUFJLENBQUNDLEdBQUwsQ0FBU04sRUFBVCxFQUFhQyxFQUFiLENBQWhCO0FBQ0EsUUFBTU0sT0FBTyxHQUFHRixJQUFJLENBQUNDLEdBQUwsQ0FBU0osRUFBVCxFQUFhQyxFQUFiLENBQWhCOztBQUNBLFFBQU01QixXQUFTLEdBQUcsSUFBSWUsZUFBSixFQUFsQjs7QUFDQWYsSUFBQUEsV0FBUyxDQUFDZ0IsTUFBVixDQUFpQlMsRUFBRSxHQUFHSSxPQUF0QixFQUErQkYsRUFBRSxHQUFHSyxPQUFwQzs7QUFDQWhDLElBQUFBLFdBQVMsQ0FBQ2lDLE1BQVYsQ0FBaUJQLEVBQUUsR0FBR0csT0FBdEIsRUFBK0JELEVBQUUsR0FBR0ksT0FBcEM7O0FBQ0FqQyxJQUFBQSxXQUFXLENBQUNDLFdBQUQsQ0FBWDtBQUNILEdBYk0sTUFhQSxJQUFJdEQsR0FBRyxZQUFZd0YsY0FBbkIsRUFBbUM7QUFDdEMsUUFBTUMsUUFBUSxHQUFHekYsR0FBRyxDQUFDMEYsWUFBSixDQUFpQixHQUFqQixLQUF5QixFQUExQzs7QUFDQSxRQUFNcEMsV0FBUyxHQUFHLElBQUllLGVBQUosQ0FBY29CLFFBQWQsQ0FBbEI7O0FBQ0FwQyxJQUFBQSxXQUFXLENBQUNDLFdBQUQsQ0FBWDtBQUNILEdBSk0sTUFJQSxJQUFJdEQsR0FBRyxZQUFZMkYsaUJBQWYsSUFBb0MzRixHQUFHLFlBQVk0RixrQkFBdkQsRUFBMkU7QUFDOUUsUUFBTUMsTUFBTSxHQUFHN0YsR0FBRyxDQUFDNkYsTUFBbkI7O0FBQ0EsUUFBSUEsTUFBTSxDQUFDQyxNQUFYLEVBQW1CO0FBQ2YsVUFBTUMsY0FBMEIsR0FBR0MsS0FBSyxDQUFDQyxTQUFOLENBQWdCakYsS0FBaEIsQ0FBc0JrRixJQUF0QixDQUEyQkwsTUFBM0IsQ0FBbkM7O0FBQ0EsVUFBTVYsUUFBTyxHQUFHWSxjQUFjLENBQUNJLE1BQWYsQ0FBc0IsVUFBQ3hELENBQUQsRUFBSXlELENBQUo7QUFBQSxlQUFVaEIsSUFBSSxDQUFDQyxHQUFMLENBQVMxQyxDQUFULEVBQVl5RCxDQUFDLENBQUM1RCxDQUFkLENBQVY7QUFBQSxPQUF0QixFQUFrRCxDQUFsRCxDQUFoQjs7QUFDQSxVQUFNOEMsUUFBTyxHQUFHUyxjQUFjLENBQUNJLE1BQWYsQ0FBc0IsVUFBQ3hELENBQUQsRUFBSXlELENBQUo7QUFBQSxlQUFVaEIsSUFBSSxDQUFDQyxHQUFMLENBQVMxQyxDQUFULEVBQVl5RCxDQUFDLENBQUMxRCxDQUFkLENBQVY7QUFBQSxPQUF0QixFQUFrRCxDQUFsRCxDQUFoQjs7QUFDQSxVQUFNWSxXQUFTLEdBQUcsSUFBSWUsZUFBSixFQUFsQjs7QUFDQWYsTUFBQUEsV0FBUyxDQUFDZ0IsTUFBVixDQUFpQnVCLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVXJELENBQVYsR0FBYzJDLFFBQS9CLEVBQXdDVSxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVuRCxDQUFWLEdBQWM0QyxRQUF0RDs7QUFDQVMsTUFBQUEsY0FBYyxDQUFDTSxPQUFmLENBQXVCLFVBQUNELENBQUQsRUFBSUUsQ0FBSixFQUFVO0FBQzdCLFlBQUlBLENBQUMsSUFBSSxDQUFULEVBQVk7O0FBQ1poRCxRQUFBQSxXQUFTLENBQUNpQyxNQUFWLENBQWlCYSxDQUFDLENBQUM1RCxDQUFGLEdBQU0yQyxRQUF2QixFQUFnQ2lCLENBQUMsQ0FBQzFELENBQUYsR0FBTTRDLFFBQXRDO0FBQ0gsT0FIRDs7QUFJQSxVQUFJdEYsR0FBRyxZQUFZMkYsaUJBQW5CLEVBQXNDO0FBQ2xDckMsUUFBQUEsV0FBUyxDQUFDa0IsU0FBVjtBQUNIOztBQUNEbkIsTUFBQUEsV0FBVyxDQUFDQyxXQUFELENBQVg7QUFDSDtBQUNKLEdBakJNLE1BaUJBLElBQUl0RCxHQUFHLFlBQVl1RyxjQUFuQixFQUFtQztBQUN0QyxRQUFNN0IsUUFBOEIsR0FBRyxDQUFDLE9BQUQsRUFBVSxRQUFWLENBQXZDOztBQURzQyx1QkFFZEEsUUFBTSxDQUFDekQsR0FBUCxDQUFXLFVBQUEwRCxHQUFHLEVBQUk7QUFDdEMsVUFBTVosU0FBUyxHQUFHL0QsR0FBRyxDQUFDMkUsR0FBRCxDQUFILENBQVNYLE9BQTNCO0FBQ0FELE1BQUFBLFNBQVMsQ0FBQ0UsdUJBQVYsQ0FBa0NDLFNBQVMsQ0FBQ0MsaUJBQTVDO0FBQ0EsYUFBT0osU0FBUyxDQUFDSyxxQkFBakI7QUFDSCxLQUp1QixDQUZjO0FBQUE7QUFBQSxRQUUvQm9DLEtBRitCO0FBQUEsUUFFeEJDLE1BRndCOztBQU90QyxRQUFNbkQsV0FBUyxHQUFHLElBQUllLGVBQUosRUFBbEI7O0FBQ0FmLElBQUFBLFdBQVMsQ0FBQ2dCLE1BQVYsQ0FBaUIsQ0FBakIsRUFBb0IsQ0FBcEI7O0FBQ0FoQixJQUFBQSxXQUFTLENBQUNpQyxNQUFWLENBQWlCaUIsS0FBakIsRUFBd0IsQ0FBeEI7O0FBQ0FsRCxJQUFBQSxXQUFTLENBQUNpQyxNQUFWLENBQWlCaUIsS0FBakIsRUFBd0JDLE1BQXhCOztBQUNBbkQsSUFBQUEsV0FBUyxDQUFDaUMsTUFBVixDQUFpQixDQUFqQixFQUFvQmtCLE1BQXBCOztBQUNBbkQsSUFBQUEsV0FBUyxDQUFDa0IsU0FBVjs7QUFDQW5CLElBQUFBLFdBQVcsQ0FBQ0MsV0FBRCxDQUFYO0FBQ0gsR0FkTSxNQWNBO0FBQ0hvRCxJQUFBQSxPQUFPLENBQUNDLEtBQVIsQ0FBYzNHLEdBQWQ7QUFDQSxVQUFNLElBQUk0RyxLQUFKLENBQVUsbURBQVYsQ0FBTjtBQUNIOztBQUNELFNBQU8sQ0FBQzNELEtBQUQsQ0FBUDtBQUNIOztBQUVELFNBQVM1QyxXQUFULENBQXFCTCxHQUFyQixFQUF1Q0MsT0FBdkMsRUFBbUY7QUFDL0UsTUFBSU8sS0FBbUIsR0FBRyxFQUExQjtBQUNBUixFQUFBQSxHQUFHLENBQUM2RyxVQUFKLENBQWVSLE9BQWYsQ0FBdUIsVUFBQVMsSUFBSSxFQUFJO0FBQzNCLFFBQUlBLElBQUksWUFBWUMsa0JBQXBCLEVBQXdDO0FBQ3BDdkcsTUFBQUEsS0FBSyxHQUFHVCxNQUFNLENBQUMrRyxJQUFELEVBQU83RyxPQUFPLElBQUlELEdBQWxCLENBQU4sQ0FBNkJvQixNQUE3QixDQUFvQ1osS0FBcEMsQ0FBUjtBQUNIO0FBQ0osR0FKRDtBQUtBLFNBQU9BLEtBQVA7QUFDSDs7QUFFTSxTQUFTd0csZ0JBQVQsQ0FBMEJDLElBQTFCLEVBQW9EQyxJQUFwRCxFQUFnRjtBQUNuRixNQUFNakUsS0FBaUIsR0FBRztBQUN0QnJDLElBQUFBLEVBQUUsRUFBRSxJQURrQjtBQUV0QnNDLElBQUFBLEVBQUUsRUFBRSxDQUNBO0FBQ0l0QyxNQUFBQSxFQUFFLEVBQUUsSUFEUjtBQUVJNEMsTUFBQUEsRUFBRSxFQUFFO0FBQ0ExQyxRQUFBQSxDQUFDLEVBQUUsSUFESDtBQUVBOEIsUUFBQUEsQ0FBQyxFQUFFO0FBRkgsT0FGUjtBQU1JUSxNQUFBQSxFQUFFLEVBQUU7QUFOUixLQURBLEVBU0E7QUFDSXhDLE1BQUFBLEVBQUUsRUFBRSxJQURSO0FBRUlDLE1BQUFBLENBQUMsRUFBRTtBQUNDQyxRQUFBQSxDQUFDLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWO0FBREosT0FGUDtBQUtJVSxNQUFBQSxDQUFDLEVBQUU7QUFDQ1YsUUFBQUEsQ0FBQyxFQUFFO0FBREosT0FMUDtBQVFJTyxNQUFBQSxDQUFDLEVBQUU7QUFDQ1AsUUFBQUEsQ0FBQyxFQUFFO0FBREosT0FSUDtBQVdJWSxNQUFBQSxFQUFFLEVBQUUsMkJBQWMsTUFBZCxDQVhSO0FBWUlFLE1BQUFBLEVBQUUsRUFBRSw0QkFBZSxPQUFmO0FBWlIsS0FUQSxFQXVCQTtBQUNJaEIsTUFBQUEsRUFBRSxFQUFFLElBRFI7QUFFSUMsTUFBQUEsQ0FBQyxFQUFFO0FBQ0NDLFFBQUFBLENBQUMsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVY7QUFESixPQUZQO0FBS0lPLE1BQUFBLENBQUMsRUFBRTtBQUNDUCxRQUFBQSxDQUFDLEVBQUU7QUFESjtBQUxQLEtBdkJBLEVBZ0NBO0FBQ0lGLE1BQUFBLEVBQUUsRUFBRSxJQURSO0FBRUkrQixNQUFBQSxDQUFDLEVBQUU7QUFDQzdCLFFBQUFBLENBQUMsRUFBRSxDQUNDLENBREQsRUFFQyxDQUZEO0FBREosT0FGUDtBQVFJOEIsTUFBQUEsQ0FBQyxFQUFFO0FBQ0M5QixRQUFBQSxDQUFDLEVBQUUsQ0FDQyxDQURELEVBRUMsQ0FGRDtBQURKLE9BUlA7QUFjSStCLE1BQUFBLENBQUMsRUFBRTtBQUNDL0IsUUFBQUEsQ0FBQyxFQUFFLENBQ0MsR0FERCxFQUVDLEdBRkQ7QUFESixPQWRQO0FBb0JJZ0MsTUFBQUEsQ0FBQyxFQUFFO0FBQ0NoQyxRQUFBQSxDQUFDLEVBQUU7QUFESixPQXBCUDtBQXVCSU8sTUFBQUEsQ0FBQyxFQUFFO0FBQ0NQLFFBQUFBLENBQUMsRUFBRTtBQURKLE9BdkJQO0FBMEJJaUMsTUFBQUEsRUFBRSxFQUFFO0FBQ0FqQyxRQUFBQSxDQUFDLEVBQUU7QUFESCxPQTFCUjtBQTZCSWtDLE1BQUFBLEVBQUUsRUFBRTtBQUNBbEMsUUFBQUEsQ0FBQyxFQUFFO0FBREg7QUE3QlIsS0FoQ0EsQ0FGa0I7QUFvRXRCcUMsSUFBQUEsRUFBRSxFQUFFLENBcEVrQjtBQXFFdEJDLElBQUFBLEVBQUUsRUFBRTtBQXJFa0IsR0FBMUI7QUF1RUEsTUFBTUUsU0FBUyxHQUFHLElBQUllLGVBQUosRUFBbEI7O0FBQ0EsVUFBUTRDLElBQVI7QUFDSSxTQUFLLE1BQUw7QUFDSTNELE1BQUFBLFNBQVMsQ0FBQ2dCLE1BQVYsQ0FBaUIsQ0FBakIsRUFBb0IsQ0FBcEI7QUFDQWhCLE1BQUFBLFNBQVMsQ0FBQ2lDLE1BQVYsQ0FBaUIyQixJQUFJLENBQUMsQ0FBRCxDQUFyQixFQUEwQixDQUExQjtBQUNBNUQsTUFBQUEsU0FBUyxDQUFDaUMsTUFBVixDQUFpQjJCLElBQUksQ0FBQyxDQUFELENBQXJCLEVBQTBCQSxJQUFJLENBQUMsQ0FBRCxDQUE5QjtBQUNBNUQsTUFBQUEsU0FBUyxDQUFDaUMsTUFBVixDQUFpQixDQUFqQixFQUFvQjJCLElBQUksQ0FBQyxDQUFELENBQXhCO0FBQ0E1RCxNQUFBQSxTQUFTLENBQUNrQixTQUFWO0FBQ0E7O0FBQ0osU0FBSyxTQUFMO0FBQ0lsQixNQUFBQSxTQUFTLENBQUNnQixNQUFWLENBQWlCNEMsSUFBSSxDQUFDLENBQUQsQ0FBckIsRUFBMEIsQ0FBMUI7QUFDQTVELE1BQUFBLFNBQVMsQ0FBQ2lCLEtBQVYsQ0FBZ0IyQyxJQUFJLENBQUMsQ0FBRCxDQUFwQixFQUF5QkEsSUFBSSxDQUFDLENBQUQsQ0FBN0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsRUFBd0MsQ0FBeEMsRUFBMkNBLElBQUksQ0FBQyxDQUFELENBQS9DLEVBQW9ELElBQUlBLElBQUksQ0FBQyxDQUFELENBQTVEO0FBQ0E1RCxNQUFBQSxTQUFTLENBQUNpQixLQUFWLENBQWdCMkMsSUFBSSxDQUFDLENBQUQsQ0FBcEIsRUFBeUJBLElBQUksQ0FBQyxDQUFELENBQTdCLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLEVBQXdDLENBQXhDLEVBQTJDQSxJQUFJLENBQUMsQ0FBRCxDQUEvQyxFQUFvRCxDQUFwRDtBQUNBNUQsTUFBQUEsU0FBUyxDQUFDa0IsU0FBVjtBQVpSOztBQWNBbEIsRUFBQUEsU0FBUyxDQUFDQyxPQUFWO0FBQ0NOLEVBQUFBLEtBQUssQ0FBQ0MsRUFBTixDQUFVLENBQVYsQ0FBRCxDQUE0Qk0sRUFBNUIsQ0FBZ0MxQyxDQUFoQyxHQUFvQ3dDLFNBQVMsQ0FBQ0csSUFBOUM7QUFDQSxTQUFPUixLQUFQO0FBQ0g7O0FBRU0sU0FBU2tFLFVBQVQsQ0FBb0JuSCxHQUFwQixFQUF5Q29ILFFBQXpDLEVBQThFO0FBQ2pGLE1BQU1DLGFBQWEsR0FBR3hELGdCQUFnQixDQUFDN0QsR0FBRCxDQUF0QztBQUNBLE1BQU1zSCxRQUFRLEdBQUdoRyxVQUFVLENBQUMrRixhQUFhLENBQUNDLFFBQWYsQ0FBM0I7QUFBQSxNQUNJQyxVQUFVLEdBQUdGLGFBQWEsQ0FBQ0UsVUFBZCxDQUF5QnhHLEtBQXpCLENBQStCLEdBQS9CLEVBQW9DLENBQXBDLEVBQXVDeUcsSUFBdkMsRUFEakI7QUFBQSxNQUVJQyxTQUFTLEdBQUdKLGFBQWEsQ0FBQ0ksU0FGOUI7QUFBQSxNQUdJQyxVQUFVLEdBQUdMLGFBQWEsQ0FBQ0ssVUFIL0I7QUFBQSxNQUlJQyxTQUFTLEdBQUcsQ0FBQ04sYUFBYSxDQUFDdkYsSUFBZCxJQUFzQixZQUF2QixFQUFxQ2YsS0FBckMsQ0FBMkMsR0FBM0MsRUFBZ0QsQ0FBaEQsRUFBbURBLEtBQW5ELENBQXlELEdBQXpELEVBQThELENBQTlELEVBQWlFQSxLQUFqRSxDQUF1RSxHQUF2RSxFQUE0RUUsR0FBNUUsQ0FBZ0YsVUFBQXFGLENBQUM7QUFBQSxXQUFJbkYsUUFBUSxDQUFDbUYsQ0FBRCxDQUFSLEdBQWMsR0FBbEI7QUFBQSxHQUFqRixDQUpoQjtBQUFBLE1BS0lzQixVQUFVLEdBQUdQLGFBQWEsQ0FBQ08sVUFML0I7QUFNQSxNQUFJQyxRQUFRLEdBQUcsb0JBQWY7O0FBQ0EsTUFBSVQsUUFBSixFQUFjO0FBQ1YsUUFBTVUsU0FBUyxHQUFHVixRQUFRLENBQUNXLElBQVQsQ0FBZUMsTUFBZixDQUFzQixVQUFBQyxJQUFJO0FBQUEsYUFBSUEsSUFBSSxDQUFDQyxPQUFMLElBQWdCWCxVQUFoQixJQUE4QlUsSUFBSSxDQUFDRSxNQUFMLElBQWVWLFNBQTdDLElBQTBEUSxJQUFJLENBQUNHLE9BQUwsSUFBZ0JWLFVBQTlFO0FBQUEsS0FBMUIsQ0FBbEI7QUFDQSxRQUFJSSxTQUFTLENBQUNoQyxNQUFkLEVBQ0krQixRQUFRLEdBQUdDLFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYU8sS0FBeEI7QUFDUDs7QUFDRCxNQUFNQyxRQUFrQixHQUFHO0FBQ3ZCQyxJQUFBQSxDQUFDLEVBQUU7QUFDQ3pILE1BQUFBLENBQUMsRUFBRSxDQUNDO0FBQ0kwSCxRQUFBQSxDQUFDLEVBQUUsQ0FEUDtBQUVJM0YsUUFBQUEsQ0FBQyxFQUFFO0FBQ0NBLFVBQUFBLENBQUMsRUFBRXlFLFFBREo7QUFFQzdFLFVBQUFBLENBQUMsRUFBRW9GLFFBRko7QUFHQ1csVUFBQUEsQ0FBQyxFQUFFeEksR0FBRyxDQUFDeUksU0FIUjtBQUlDQyxVQUFBQSxDQUFDLEVBQUUsOEJBQWlCZCxVQUFqQixDQUpKO0FBS0NlLFVBQUFBLEVBQUUsRUFBRSxDQUxMO0FBTUNDLFVBQUFBLEVBQUUsRUFBRSxDQU5MO0FBT0NDLFVBQUFBLEVBQUUsRUFBRWxCO0FBUEw7QUFGUCxPQUREO0FBREosS0FEb0I7QUFpQnZCaEYsSUFBQUEsQ0FBQyxFQUFFLEVBakJvQjtBQWtCdkJtRyxJQUFBQSxDQUFDLEVBQUU7QUFDQ2xHLE1BQUFBLENBQUMsRUFBRTtBQUNDOUIsUUFBQUEsQ0FBQyxFQUFFLENBQ0MsQ0FERCxFQUVDLENBRkQ7QUFESjtBQURKLEtBbEJvQjtBQTBCdkI4QixJQUFBQSxDQUFDLEVBQUU7QUExQm9CLEdBQTNCO0FBNEJBLE1BQU1tRyxPQUFjLEdBQUc7QUFDbkJiLElBQUFBLE9BQU8sRUFBRVgsVUFEVTtBQUVuQmEsSUFBQUEsT0FBTyxZQUFLVixVQUFMLENBRlk7QUFHbkJTLElBQUFBLE1BQU0sRUFBRVYsU0FIVztBQUluQlksSUFBQUEsS0FBSyxFQUFFUjtBQUpZLEdBQXZCO0FBTUEsU0FBTyxDQUFDUyxRQUFELEVBQVdTLE9BQVgsQ0FBUDtBQUNIOztBQUVNLFNBQVNDLFdBQVQsQ0FBcUJoSixHQUFyQixFQUEyQ2lKLFNBQTNDLEVBQTBGO0FBQzdGLE1BQUl0RixFQUFFLEdBQUcsb0JBQVQ7QUFDQSxNQUFNdUYsWUFBWSxHQUFHbEosR0FBRyxDQUFDeUcsTUFBSixDQUFXekMsT0FBaEM7QUFDQWtGLEVBQUFBLFlBQVksQ0FBQ2pGLHVCQUFiLENBQXFDQyxTQUFTLENBQUNDLGlCQUEvQztBQUNBLE1BQU1nRixXQUFXLEdBQUduSixHQUFHLENBQUN3RyxLQUFKLENBQVV4QyxPQUE5QjtBQUNBbUYsRUFBQUEsV0FBVyxDQUFDbEYsdUJBQVosQ0FBb0NDLFNBQVMsQ0FBQ0MsaUJBQTlDO0FBQ0EsTUFBTWlGLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWY7QUFDQSxNQUFNQyxHQUFHLEdBQUdILE1BQU0sQ0FBQ0ksVUFBUCxDQUFrQixJQUFsQixDQUFaO0FBRUFKLEVBQUFBLE1BQU0sQ0FBQzVDLEtBQVAsR0FBZTJDLFdBQVcsQ0FBQy9FLHFCQUFaLEdBQW9DLENBQW5EO0FBQ0FnRixFQUFBQSxNQUFNLENBQUMzQyxNQUFQLEdBQWdCeUMsWUFBWSxDQUFDOUUscUJBQWIsR0FBcUMsQ0FBckQ7QUFDQW1GLEVBQUFBLEdBQUcsQ0FBRUUsU0FBTCxDQUFlekosR0FBZixFQUFvQixDQUFwQixFQUF1QixDQUF2QixFQUEwQm9KLE1BQU0sQ0FBQzVDLEtBQWpDLEVBQXdDNEMsTUFBTSxDQUFDM0MsTUFBL0M7QUFFQSxNQUFNaUQsT0FBTyxHQUFHTixNQUFNLENBQUNPLFNBQVAsRUFBaEI7O0FBQ0EsTUFBSVYsU0FBSixFQUFlO0FBQ1gsUUFBTVcsVUFBVSxHQUFHWCxTQUFTLENBQUVqQixNQUFYLENBQWtCLFVBQUE2QixLQUFLO0FBQUEsYUFBSUEsS0FBSyxDQUFDbEgsQ0FBTixJQUFXK0csT0FBZjtBQUFBLEtBQXZCLENBQW5CO0FBQ0EsUUFBSUUsVUFBVSxDQUFDOUQsTUFBZixFQUNJbkMsRUFBRSxHQUFHaUcsVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFjakcsRUFBbkI7QUFDUDs7QUFDRCxNQUFNa0csS0FBSyxHQUFHO0FBQ1ZDLElBQUFBLENBQUMsRUFBRVosWUFBWSxDQUFDOUUscUJBRE47QUFFVjVDLElBQUFBLENBQUMsRUFBRTJILFdBQVcsQ0FBQy9FLHFCQUZMO0FBR1ZULElBQUFBLEVBQUUsRUFBRkEsRUFIVTtBQUlWaEIsSUFBQUEsQ0FBQyxFQUFFK0csT0FKTztBQUtWbkgsSUFBQUEsQ0FBQyxFQUFFO0FBTE8sR0FBZDtBQU9BLFNBQU8sQ0FBQ29CLEVBQUQsRUFBS2tHLEtBQUwsQ0FBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JvdXBTaGFwZSwgVGV4dERhdGEsIFJlZmVyZW5jZUlELCBQYXRoU2hhcGUsIEZpbGxTaGFwZSwgU3Ryb2tlU2hhcGUsIFRyYW5zZm9ybVNoYXBlLCBJbWFnZUFzc2V0LCBGb250MSwgRm9udHMsIEFzc2V0cyB9IGZyb20gJy4vYW5pbWF0aW9uJ1xuaW1wb3J0IHsgUGF0aE1ha2VyIH0gZnJvbSAnLi9wYXRoJ1xuaW1wb3J0IHV1aWQgZnJvbSAndXVpZC92NCdcbmltcG9ydCB7IGNhbGN1bGF0ZUJhc2VUcmFuc2Zvcm0sIGVuY29kZUxpbmVKb2luLCBlbmNvZGVMaW5lQ2FwLCBlbmNvZGVUZXh0QW5jaG9yIH0gZnJvbSAnLi9oZWxwZXInXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihkb206IFNWR0dyYXBoaWNzRWxlbWVudCwgYmFzZURvbT86IFNWR0dyYXBoaWNzRWxlbWVudCk6IEdyb3VwU2hhcGVbXSB7XG4gICAgaWYgKGRvbSBpbnN0YW5jZW9mIFNWR1RleHRFbGVtZW50IHx8IGRvbSBpbnN0YW5jZW9mIFNWR0ltYWdlRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gW11cbiAgICB9IGVsc2UgaWYgKGRvbSBpbnN0YW5jZW9mIFNWR0dFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiByZW5kZXJHcm91cChkb20sIGJhc2VEb20pXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlbmRlckdseXBoKGRvbSwgYmFzZURvbSlcbiAgICB9XG59XG5cbnR5cGUgVmlzdWFsR3JvdXBJdGVtID0gUGF0aFNoYXBlIHwgRmlsbFNoYXBlIHwgU3Ryb2tlU2hhcGUgfCBUcmFuc2Zvcm1TaGFwZVxuXG5mdW5jdGlvbiBhZGRWaXN1YWxFbmNvZGluZ3MoaXRlbXM6IFZpc3VhbEdyb3VwSXRlbVtdLCBzdHlsZXM6IENTU1N0eWxlRGVjbGFyYXRpb24sIGRvbT86IFNWR0dyYXBoaWNzRWxlbWVudCwgYmFzZURvbT86IFNWR0dyYXBoaWNzRWxlbWVudCkge1xuICAgIGlmIChzdHlsZXMuc3Ryb2tlICYmIHN0eWxlcy5zdHJva2UgIT09ICdub25lJykge1xuICAgICAgICBpdGVtcy5wdXNoKHtcbiAgICAgICAgICAgIHR5OiAnc3QnLFxuICAgICAgICAgICAgYzoge1xuICAgICAgICAgICAgICAgIGs6IHN0eWxlcy5zdHJva2UhLnNwbGl0KCcoJylbMV0uc3BsaXQoJyknKVswXS5zcGxpdCgnLCcpLnNsaWNlKDAsIDMpLm1hcCgocmF3OiBzdHJpbmcpID0+IHBhcnNlSW50KHJhdykgLyAyNTUpLmNvbmNhdCgxKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG86IHtcbiAgICAgICAgICAgICAgICBrOiBwYXJzZUZsb2F0KHN0eWxlcy5zdHJva2VPcGFjaXR5IHx8ICcxJykgKiAxMDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB3OiB7XG4gICAgICAgICAgICAgICAgazogcGFyc2VGbG9hdChzdHlsZXMuc3Ryb2tlV2lkdGggfHwgJzEnKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxjOiBlbmNvZGVMaW5lQ2FwKHN0eWxlcy5zdHJva2VMaW5lY2FwKSxcbiAgICAgICAgICAgIGxqOiBlbmNvZGVMaW5lSm9pbihzdHlsZXMuc3Ryb2tlTGluZWpvaW4pXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGlmIChzdHlsZXMuZmlsbCAmJiBzdHlsZXMuZmlsbCAhPT0gJ25vbmUnKSB7XG4gICAgICAgIGl0ZW1zLnB1c2goe1xuICAgICAgICAgICAgdHk6ICdmbCcsXG4gICAgICAgICAgICBjOiB7XG4gICAgICAgICAgICAgICAgazogc3R5bGVzLmZpbGwhLnNwbGl0KCcoJylbMV0uc3BsaXQoJyknKVswXS5zcGxpdCgnLCcpLnNsaWNlKDAsIDMpLm1hcCgocmF3OiBzdHJpbmcpID0+IHBhcnNlSW50KHJhdykgLyAyNTUpLmNvbmNhdCgxKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG86IHtcbiAgICAgICAgICAgICAgICBrOiBwYXJzZUZsb2F0KHN0eWxlcy5maWxsT3BhY2l0eSB8fCAnMScpICogMTAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGxldCBwb3NYID0gMCwgcG9zWSA9IDAsIG9wYWNpdHkgPSAxMDBcbiAgICBpZiAoZG9tICYmIGJhc2VEb20pIHtcbiAgICAgICAgY29uc3QgYmFzZVRyYW5zZm9ybSA9IGNhbGN1bGF0ZUJhc2VUcmFuc2Zvcm0oZG9tLCBiYXNlRG9tKVxuICAgICAgICBjb25zdCBiYXNlQkJveCA9IGJhc2VEb20uZ2V0QkJveCgpXG4gICAgICAgIGNvbnN0IHJlZkJCb3ggPSBkb20uZ2V0QkJveCgpXG4gICAgICAgIHBvc1ggPSBiYXNlVHJhbnNmb3JtLmUgKyByZWZCQm94LnggLSBiYXNlQkJveC54XG4gICAgICAgIHBvc1kgPSBiYXNlVHJhbnNmb3JtLmYgKyByZWZCQm94LnkgLSBiYXNlQkJveC55XG4gICAgICAgIG9wYWNpdHkgPSBwYXJzZUZsb2F0KHN0eWxlcy5vcGFjaXR5IHx8ICcxJykgKiAxMDBcbiAgICB9XG4gICAgaXRlbXMucHVzaCh7XG4gICAgICAgIHR5OiBcInRyXCIsXG4gICAgICAgIHA6IHtcbiAgICAgICAgICAgIGs6IFtcbiAgICAgICAgICAgICAgICBwb3NYLFxuICAgICAgICAgICAgICAgIHBvc1lcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgYToge1xuICAgICAgICAgICAgazogW1xuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBzOiB7XG4gICAgICAgICAgICBrOiBbXG4gICAgICAgICAgICAgICAgMTAwLFxuICAgICAgICAgICAgICAgIDEwMFxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICByOiB7XG4gICAgICAgICAgICBrOiAwXG4gICAgICAgIH0sXG4gICAgICAgIG86IHtcbiAgICAgICAgICAgIGs6IG9wYWNpdHlcbiAgICAgICAgfSxcbiAgICAgICAgc2s6IHtcbiAgICAgICAgICAgIGs6IDBcbiAgICAgICAgfSxcbiAgICAgICAgc2E6IHtcbiAgICAgICAgICAgIGs6IDBcbiAgICAgICAgfVxuICAgIH0pXG5cbn1cblxuZnVuY3Rpb24gcmVuZGVyR2x5cGgoZG9tOiBTVkdHcmFwaGljc0VsZW1lbnQsIGJhc2VEb20/OiBTVkdHcmFwaGljc0VsZW1lbnQpOiBHcm91cFNoYXBlW10ge1xuICAgIGNvbnN0IGdyb3VwOiBHcm91cFNoYXBlID0ge1xuICAgICAgICB0eTogXCJnclwiLFxuICAgICAgICBpdDogW10sXG4gICAgICAgIGJtOiAwLFxuICAgICAgICBoZDogZmFsc2VcbiAgICB9XG4gICAgY29uc3QgcG9zdEFjdGlvbnMgPSAocGF0aE1ha2VyOiBQYXRoTWFrZXIpID0+IHtcbiAgICAgICAgcGF0aE1ha2VyLnVuaWZvcm0oKVxuICAgICAgICBncm91cC5pdCEucHVzaCh7XG4gICAgICAgICAgICB0eTogJ3NoJyxcbiAgICAgICAgICAgIGtzOiB7XG4gICAgICAgICAgICAgICAgazogcGF0aE1ha2VyLnBhdGgsXG4gICAgICAgICAgICAgICAgYTogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5tOiBkb20uaWQsXG4gICAgICAgICAgICBoZDogZmFsc2VcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3Qgc3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9tKVxuICAgICAgICBhZGRWaXN1YWxFbmNvZGluZ3MoZ3JvdXAuaXQhIGFzIFZpc3VhbEdyb3VwSXRlbVtdLCBzdHlsZXMsIGRvbSwgYmFzZURvbSlcbiAgICB9XG4gICAgaWYgKGRvbSBpbnN0YW5jZW9mIFNWR0NpcmNsZUVsZW1lbnQpIHtcbiAgICAgICAgY29uc3Qgc3ZnTGVuZ3RoID0gZG9tLnIuYmFzZVZhbFxuICAgICAgICBzdmdMZW5ndGguY29udmVydFRvU3BlY2lmaWVkVW5pdHMoU1ZHTGVuZ3RoLlNWR19MRU5HVEhUWVBFX1BYKVxuICAgICAgICBjb25zdCByID0gc3ZnTGVuZ3RoLnZhbHVlSW5TcGVjaWZpZWRVbml0c1xuICAgICAgICBjb25zdCBwYXRoTWFrZXIgPSBuZXcgUGF0aE1ha2VyKClcbiAgICAgICAgcGF0aE1ha2VyLm1vdmVUbyhyLCAwKVxuICAgICAgICBwYXRoTWFrZXIuYXJjVG8ociwgciwgMCwgMSwgMCwgciwgMiAqIHIpXG4gICAgICAgIHBhdGhNYWtlci5hcmNUbyhyLCByLCAwLCAxLCAwLCByLCAwKVxuICAgICAgICBwYXRoTWFrZXIuY2xvc2VQYXRoKClcbiAgICAgICAgcG9zdEFjdGlvbnMocGF0aE1ha2VyKVxuICAgIH0gZWxzZSBpZiAoZG9tIGluc3RhbmNlb2YgU1ZHRWxsaXBzZUVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgbWFwS2V5OiAoJ3J4JyB8ICdyeScpW10gPSBbJ3J4JywgJ3J5J11cbiAgICAgICAgY29uc3QgW3J4LCByeV0gPSBtYXBLZXkubWFwKGtleSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdmdMZW5ndGggPSBkb21ba2V5XS5iYXNlVmFsXG4gICAgICAgICAgICBzdmdMZW5ndGguY29udmVydFRvU3BlY2lmaWVkVW5pdHMoU1ZHTGVuZ3RoLlNWR19MRU5HVEhUWVBFX1BYKVxuICAgICAgICAgICAgcmV0dXJuIHN2Z0xlbmd0aC52YWx1ZUluU3BlY2lmaWVkVW5pdHNcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgcGF0aE1ha2VyID0gbmV3IFBhdGhNYWtlcigpXG4gICAgICAgIHBhdGhNYWtlci5tb3ZlVG8ocngsIDApXG4gICAgICAgIHBhdGhNYWtlci5hcmNUbyhyeCwgcnksIDAsIDEsIDAsIHJ4LCAyICogcnkpXG4gICAgICAgIHBhdGhNYWtlci5hcmNUbyhyeCwgcnksIDAsIDEsIDAsIHJ4LCAwKVxuICAgICAgICBwYXRoTWFrZXIuY2xvc2VQYXRoKClcbiAgICAgICAgcG9zdEFjdGlvbnMocGF0aE1ha2VyKVxuICAgIH0gZWxzZSBpZiAoZG9tIGluc3RhbmNlb2YgU1ZHTGluZUVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgbWFwS2V5OiAoJ3gxJyB8ICd4MicgfCAneTEnIHwgJ3kyJylbXSA9IFsneDEnLCAneDInLCAneTEnLCAneTInXVxuICAgICAgICBjb25zdCBbeDEsIHgyLCB5MSwgeTJdID0gbWFwS2V5Lm1hcChrZXkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3ZnTGVuZ3RoID0gZG9tW2tleV0uYmFzZVZhbFxuICAgICAgICAgICAgc3ZnTGVuZ3RoLmNvbnZlcnRUb1NwZWNpZmllZFVuaXRzKFNWR0xlbmd0aC5TVkdfTEVOR1RIVFlQRV9QWClcbiAgICAgICAgICAgIHJldHVybiBzdmdMZW5ndGgudmFsdWVJblNwZWNpZmllZFVuaXRzXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IG9mZnNldFggPSBNYXRoLm1pbih4MSwgeDIpXG4gICAgICAgIGNvbnN0IG9mZnNldFkgPSBNYXRoLm1pbih5MSwgeTIpXG4gICAgICAgIGNvbnN0IHBhdGhNYWtlciA9IG5ldyBQYXRoTWFrZXIoKVxuICAgICAgICBwYXRoTWFrZXIubW92ZVRvKHgxIC0gb2Zmc2V0WCwgeTEgLSBvZmZzZXRZKVxuICAgICAgICBwYXRoTWFrZXIubGluZVRvKHgyIC0gb2Zmc2V0WCwgeTIgLSBvZmZzZXRZKVxuICAgICAgICBwb3N0QWN0aW9ucyhwYXRoTWFrZXIpXG4gICAgfSBlbHNlIGlmIChkb20gaW5zdGFuY2VvZiBTVkdQYXRoRWxlbWVudCkge1xuICAgICAgICBjb25zdCBwYXRoRGF0YSA9IGRvbS5nZXRBdHRyaWJ1dGUoJ2QnKSB8fCAnJ1xuICAgICAgICBjb25zdCBwYXRoTWFrZXIgPSBuZXcgUGF0aE1ha2VyKHBhdGhEYXRhKVxuICAgICAgICBwb3N0QWN0aW9ucyhwYXRoTWFrZXIpXG4gICAgfSBlbHNlIGlmIChkb20gaW5zdGFuY2VvZiBTVkdQb2x5Z29uRWxlbWVudCB8fCBkb20gaW5zdGFuY2VvZiBTVkdQb2x5bGluZUVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgcG9pbnRzID0gZG9tLnBvaW50c1xuICAgICAgICBpZiAocG9pbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgaXRlcmFibGVQb2ludHM6IERPTVBvaW50W10gPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChwb2ludHMpXG4gICAgICAgICAgICBjb25zdCBvZmZzZXRYID0gaXRlcmFibGVQb2ludHMucmVkdWNlKChwLCB2KSA9PiBNYXRoLm1pbihwLCB2LngpLCAwKVxuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0WSA9IGl0ZXJhYmxlUG9pbnRzLnJlZHVjZSgocCwgdikgPT4gTWF0aC5taW4ocCwgdi55KSwgMClcbiAgICAgICAgICAgIGNvbnN0IHBhdGhNYWtlciA9IG5ldyBQYXRoTWFrZXIoKVxuICAgICAgICAgICAgcGF0aE1ha2VyLm1vdmVUbyhwb2ludHNbMF0ueCAtIG9mZnNldFgsIHBvaW50c1swXS55IC0gb2Zmc2V0WSlcbiAgICAgICAgICAgIGl0ZXJhYmxlUG9pbnRzLmZvckVhY2goKHYsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaSA8PSAwKSByZXR1cm5cbiAgICAgICAgICAgICAgICBwYXRoTWFrZXIubGluZVRvKHYueCAtIG9mZnNldFgsIHYueSAtIG9mZnNldFkpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaWYgKGRvbSBpbnN0YW5jZW9mIFNWR1BvbHlnb25FbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgcGF0aE1ha2VyLmNsb3NlUGF0aCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwb3N0QWN0aW9ucyhwYXRoTWFrZXIpXG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGRvbSBpbnN0YW5jZW9mIFNWR1JlY3RFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IG1hcEtleTogKCd3aWR0aCcgfCAnaGVpZ2h0JylbXSA9IFsnd2lkdGgnLCAnaGVpZ2h0J11cbiAgICAgICAgY29uc3QgW3dpZHRoLCBoZWlnaHRdID0gbWFwS2V5Lm1hcChrZXkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3ZnTGVuZ3RoID0gZG9tW2tleV0uYmFzZVZhbFxuICAgICAgICAgICAgc3ZnTGVuZ3RoLmNvbnZlcnRUb1NwZWNpZmllZFVuaXRzKFNWR0xlbmd0aC5TVkdfTEVOR1RIVFlQRV9QWClcbiAgICAgICAgICAgIHJldHVybiBzdmdMZW5ndGgudmFsdWVJblNwZWNpZmllZFVuaXRzXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IHBhdGhNYWtlciA9IG5ldyBQYXRoTWFrZXIoKVxuICAgICAgICBwYXRoTWFrZXIubW92ZVRvKDAsIDApXG4gICAgICAgIHBhdGhNYWtlci5saW5lVG8od2lkdGgsIDApXG4gICAgICAgIHBhdGhNYWtlci5saW5lVG8od2lkdGgsIGhlaWdodClcbiAgICAgICAgcGF0aE1ha2VyLmxpbmVUbygwLCBoZWlnaHQpXG4gICAgICAgIHBhdGhNYWtlci5jbG9zZVBhdGgoKVxuICAgICAgICBwb3N0QWN0aW9ucyhwYXRoTWFrZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihkb20pXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gaW1wbGVtZW50YXRpb24gZm91bmQgZm9yIHN2ZyBncmFwaGljcyBlbGVtZW50LicpXG4gICAgfVxuICAgIHJldHVybiBbZ3JvdXBdXG59XG5cbmZ1bmN0aW9uIHJlbmRlckdyb3VwKGRvbTogU1ZHR0VsZW1lbnQsIGJhc2VEb20/OiBTVkdHcmFwaGljc0VsZW1lbnQpOiBHcm91cFNoYXBlW10ge1xuICAgIGxldCBpdGVtczogR3JvdXBTaGFwZVtdID0gW11cbiAgICBkb20uY2hpbGROb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIFNWR0dyYXBoaWNzRWxlbWVudCkge1xuICAgICAgICAgICAgaXRlbXMgPSByZW5kZXIobm9kZSwgYmFzZURvbSB8fCBkb20pLmNvbmNhdChpdGVtcylcbiAgICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGl0ZW1zXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJQbGFpbkdseXBoKHR5cGU6ICdyZWN0JyB8ICdlbGxpcHNlJywgYXJnczogbnVtYmVyW10pOiBHcm91cFNoYXBlIHtcbiAgICBjb25zdCBncm91cDogR3JvdXBTaGFwZSA9IHtcbiAgICAgICAgdHk6IFwiZ3JcIixcbiAgICAgICAgaXQ6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eTogJ3NoJyxcbiAgICAgICAgICAgICAgICBrczoge1xuICAgICAgICAgICAgICAgICAgICBrOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBhOiAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBoZDogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHk6ICdzdCcsXG4gICAgICAgICAgICAgICAgYzoge1xuICAgICAgICAgICAgICAgICAgICBrOiBbMSwgMSwgMSwgMV1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHc6IHtcbiAgICAgICAgICAgICAgICAgICAgazogMVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbzoge1xuICAgICAgICAgICAgICAgICAgICBrOiAxMDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGxjOiBlbmNvZGVMaW5lQ2FwKCdidXR0JyksXG4gICAgICAgICAgICAgICAgbGo6IGVuY29kZUxpbmVKb2luKCdtaXRlcicpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5OiAnZmwnLFxuICAgICAgICAgICAgICAgIGM6IHtcbiAgICAgICAgICAgICAgICAgICAgazogWzEsIDEsIDEsIDFdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvOiB7XG4gICAgICAgICAgICAgICAgICAgIGs6IDEwMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHk6ICd0cicsXG4gICAgICAgICAgICAgICAgcDoge1xuICAgICAgICAgICAgICAgICAgICBrOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhOiB7XG4gICAgICAgICAgICAgICAgICAgIGs6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHM6IHtcbiAgICAgICAgICAgICAgICAgICAgazogW1xuICAgICAgICAgICAgICAgICAgICAgICAgMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgMTAwXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHI6IHtcbiAgICAgICAgICAgICAgICAgICAgazogMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbzoge1xuICAgICAgICAgICAgICAgICAgICBrOiAxMDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNrOiB7XG4gICAgICAgICAgICAgICAgICAgIGs6IDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNhOiB7XG4gICAgICAgICAgICAgICAgICAgIGs6IDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIGJtOiAwLFxuICAgICAgICBoZDogZmFsc2VcbiAgICB9XG4gICAgY29uc3QgcGF0aE1ha2VyID0gbmV3IFBhdGhNYWtlcigpXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ3JlY3QnOlxuICAgICAgICAgICAgcGF0aE1ha2VyLm1vdmVUbygwLCAwKVxuICAgICAgICAgICAgcGF0aE1ha2VyLmxpbmVUbyhhcmdzWzBdLCAwKVxuICAgICAgICAgICAgcGF0aE1ha2VyLmxpbmVUbyhhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgcGF0aE1ha2VyLmxpbmVUbygwLCBhcmdzWzFdKVxuICAgICAgICAgICAgcGF0aE1ha2VyLmNsb3NlUGF0aCgpXG4gICAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdlbGxpcHNlJzpcbiAgICAgICAgICAgIHBhdGhNYWtlci5tb3ZlVG8oYXJnc1swXSwgMClcbiAgICAgICAgICAgIHBhdGhNYWtlci5hcmNUbyhhcmdzWzBdLCBhcmdzWzFdLCAwLCAxLCAwLCBhcmdzWzBdLCAyICogYXJnc1sxXSlcbiAgICAgICAgICAgIHBhdGhNYWtlci5hcmNUbyhhcmdzWzBdLCBhcmdzWzFdLCAwLCAxLCAwLCBhcmdzWzBdLCAwKVxuICAgICAgICAgICAgcGF0aE1ha2VyLmNsb3NlUGF0aCgpXG4gICAgfVxuICAgIHBhdGhNYWtlci51bmlmb3JtKCk7XG4gICAgKGdyb3VwLml0IVswXSBhcyBQYXRoU2hhcGUpLmtzIS5rID0gcGF0aE1ha2VyLnBhdGhcbiAgICByZXR1cm4gZ3JvdXBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclRleHQoZG9tOiBTVkdUZXh0RWxlbWVudCwgZm9udExpc3Q/OiBGb250cyk6IFtUZXh0RGF0YSwgRm9udDFdIHtcbiAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShkb20pXG4gICAgY29uc3QgZm9udFNpemUgPSBwYXJzZUZsb2F0KGNvbXB1dGVkU3R5bGUuZm9udFNpemUpLFxuICAgICAgICBmb250RmFtaWx5ID0gY29tcHV0ZWRTdHlsZS5mb250RmFtaWx5LnNwbGl0KCcsJylbMF0udHJpbSgpLFxuICAgICAgICBmb250U3R5bGUgPSBjb21wdXRlZFN0eWxlLmZvbnRTdHlsZSxcbiAgICAgICAgZm9udFdlaWdodCA9IGNvbXB1dGVkU3R5bGUuZm9udFdlaWdodCxcbiAgICAgICAgZm9udENvbG9yID0gKGNvbXB1dGVkU3R5bGUuZmlsbCB8fCAncmdiKDAsMCwwKScpLnNwbGl0KCcoJylbMV0uc3BsaXQoJyknKVswXS5zcGxpdCgnLCcpLm1hcChpID0+IHBhcnNlSW50KGkpIC8gMjU1KSxcbiAgICAgICAgdGV4dEFuY2hvciA9IGNvbXB1dGVkU3R5bGUudGV4dEFuY2hvclxuICAgIGxldCBmb250TmFtZSA9IHV1aWQoKVxuICAgIGlmIChmb250TGlzdCkge1xuICAgICAgICBjb25zdCBmb250RXhpc3QgPSBmb250TGlzdC5saXN0IS5maWx0ZXIoZm9udCA9PiBmb250LmZGYW1pbHkgPT0gZm9udEZhbWlseSAmJiBmb250LmZTdHlsZSA9PSBmb250U3R5bGUgJiYgZm9udC5mV2VpZ2h0ID09IGZvbnRXZWlnaHQpXG4gICAgICAgIGlmIChmb250RXhpc3QubGVuZ3RoKVxuICAgICAgICAgICAgZm9udE5hbWUgPSBmb250RXhpc3RbMF0uZk5hbWUhXG4gICAgfVxuICAgIGNvbnN0IHRleHREYXRhOiBUZXh0RGF0YSA9IHtcbiAgICAgICAgZDoge1xuICAgICAgICAgICAgazogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdDogMCxcbiAgICAgICAgICAgICAgICAgICAgczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgczogZm9udFNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICBmOiBmb250TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHQ6IGRvbS5pbm5lckhUTUwsXG4gICAgICAgICAgICAgICAgICAgICAgICBqOiBlbmNvZGVUZXh0QW5jaG9yKHRleHRBbmNob3IpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHI6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBsczogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZjOiBmb250Q29sb3JcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgcDoge30sXG4gICAgICAgIG06IHtcbiAgICAgICAgICAgIGE6IHtcbiAgICAgICAgICAgICAgICBrOiBbXG4gICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGE6IFtdXG4gICAgfVxuICAgIGNvbnN0IGZvbnREZWY6IEZvbnQxID0ge1xuICAgICAgICBmRmFtaWx5OiBmb250RmFtaWx5LFxuICAgICAgICBmV2VpZ2h0OiBgJHtmb250V2VpZ2h0fWAsXG4gICAgICAgIGZTdHlsZTogZm9udFN0eWxlLFxuICAgICAgICBmTmFtZTogZm9udE5hbWVcbiAgICB9XG4gICAgcmV0dXJuIFt0ZXh0RGF0YSwgZm9udERlZl1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckltYWdlKGRvbTogU1ZHSW1hZ2VFbGVtZW50LCBhc3NldExpc3Q/OiBBc3NldHMpOiBbUmVmZXJlbmNlSUQsIEltYWdlQXNzZXRdIHtcbiAgICBsZXQgaWQgPSB1dWlkKClcbiAgICBjb25zdCBkb21IZWlnaHRWYWwgPSBkb20uaGVpZ2h0LmJhc2VWYWxcbiAgICBkb21IZWlnaHRWYWwuY29udmVydFRvU3BlY2lmaWVkVW5pdHMoU1ZHTGVuZ3RoLlNWR19MRU5HVEhUWVBFX1BYKVxuICAgIGNvbnN0IGRvbVdpZHRoVmFsID0gZG9tLndpZHRoLmJhc2VWYWxcbiAgICBkb21XaWR0aFZhbC5jb252ZXJ0VG9TcGVjaWZpZWRVbml0cyhTVkdMZW5ndGguU1ZHX0xFTkdUSFRZUEVfUFgpXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuXG4gICAgY2FudmFzLndpZHRoID0gZG9tV2lkdGhWYWwudmFsdWVJblNwZWNpZmllZFVuaXRzICogM1xuICAgIGNhbnZhcy5oZWlnaHQgPSBkb21IZWlnaHRWYWwudmFsdWVJblNwZWNpZmllZFVuaXRzICogM1xuICAgIGN0eCEuZHJhd0ltYWdlKGRvbSwgMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxuXG4gICAgY29uc3QgZGF0YVVybCA9IGNhbnZhcy50b0RhdGFVUkwoKVxuICAgIGlmIChhc3NldExpc3QpIHtcbiAgICAgICAgY29uc3QgYXNzZXRFeGlzdCA9IGFzc2V0TGlzdCEuZmlsdGVyKGFzc2V0ID0+IGFzc2V0LnAgPT0gZGF0YVVybClcbiAgICAgICAgaWYgKGFzc2V0RXhpc3QubGVuZ3RoKVxuICAgICAgICAgICAgaWQgPSBhc3NldEV4aXN0WzBdLmlkIVxuICAgIH1cbiAgICBjb25zdCBhc3NldCA9IHtcbiAgICAgICAgaDogZG9tSGVpZ2h0VmFsLnZhbHVlSW5TcGVjaWZpZWRVbml0cyxcbiAgICAgICAgdzogZG9tV2lkdGhWYWwudmFsdWVJblNwZWNpZmllZFVuaXRzLFxuICAgICAgICBpZCxcbiAgICAgICAgcDogZGF0YVVybCxcbiAgICAgICAgZTogMVxuICAgIH1cbiAgICByZXR1cm4gW2lkLCBhc3NldF1cbn0iXX0=

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof global.process === "object" && global.process.domain) {
      invoke = global.process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

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

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


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
        console.log('animation ref: ', animationJson.reference);
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
      });
      console.log('all mark ani: ', this.allMarkAni);
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
            // if (markId === 'mark11')
            //     console.log(tmpActionSpec)

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
                        // console.log(markId, toValue, typeof toValue);
                        fromValue *= 100;
                        toValue *= 100;
                      } // if (markId === 'mark11' && lc==='opacity') {
                      //     fromValue = 0;
                      //     console.log(markId, lc, startFrame, endFrame, fromValue, toValue);
                      // }


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

              _GlobalVar.globalVar.jsMovin.addMask(maskLayer, _GlobalVar.globalVar.markLayers.get(markId), tmpActionSpec.maskType);
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

__webpack_require__(/*! babel-polyfill */ "./node_modules/babel-polyfill/lib/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
    key: "preprocessCharts",
    value: function preprocessCharts(spec) {
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
      return [canisObj, svgChart];
    }
  }, {
    key: "init",
    value: function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(spec) {
        var _this = this;

        var _ref2, _ref3, canisObj, svgChart, lastAnimation, _loop, aniIdx;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.preprocessCharts(spec);

              case 2:
                _ref2 = _context.sent;
                _ref3 = _slicedToArray(_ref2, 2);
                canisObj = _ref3[0];
                svgChart = _ref3[1];

                _ChartSpec.default.addLottieMarkLayers(svgChart); // let bBoxes = ChartSpec.getBBoxes();
                // let animateChart = ChartSpec.processAnimateChart(document.getElementById('chartContainer').innerHTML, bBoxes);
                // document.getElementById('videoContainer').innerHTML = '';
                // document.getElementById('videoContainer').appendChild(animateChart);
                //set framerate for jsmovin


                _GlobalVar.globalVar.jsMovin.setFrameRate(_TimingSpec.default.FRAME_RATE); //deal with animations


                this.animations = canisObj.animations;

                if (Array.isArray(this.animations)) {
                  _loop = function _loop(aniIdx) {
                    var animationJson = _this.animations[aniIdx]; //use the selection in animation to select marks and record dom attrs

                    var tmpContainer = document.createElement('div');
                    document.body.appendChild(tmpContainer);
                    tmpContainer.innerHTML = _ChartSpec.default.charts[animationJson.chartIdx].outerHTML;
                    var marks = tmpContainer.querySelectorAll(animationJson.selection);
                    var usedChangedAttrs = [];

                    for (var i = 0; i < _ChartSpec.default.changedAttrs.length; i++) {
                      usedChangedAttrs.push(_ChartSpec.default.changedAttrs[i]);
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

                  for (aniIdx = 0; aniIdx < this.animations.length; aniIdx++) {
                    _loop(aniIdx);
                  }
                }

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init(_x) {
        return _ref.apply(this, arguments);
      }

      return init;
    }()
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
          oriHeight = 0,
          widthAfterFacet = oriWidth,
          heightAfterFacet = oriHeight;

      for (var i = 0; i < chartsToCombine.length; i++) {
        var tmpCharts = chartsToCombine[i];
        oriWidth = parseFloat(tmpCharts[0].getAttribute('width'));
        oriHeight = parseFloat(tmpCharts[0].getAttribute('height'));
        widthAfterFacet = oriWidth;
        heightAfterFacet = oriHeight;
        var viewBoxNums = tmpCharts[0].getAttribute('viewBox').split(' ');
        var viewBoxW = parseFloat(viewBoxNums[2]);
        var viewBoxH = parseFloat(viewBoxNums[3]);

        var chartTransForm = _Util.Util.getTransformAttrs(tmpCharts[0].children[0]);

        tmpCharts[0].children[0].setAttribute('transform', 'translate(' + chartTransForm.transNums[0] + ',' + chartTransForm.transNums[1] + ')');

        switch (facetType) {
          case _FacetSpec.default.facetType.row:
            heightAfterFacet *= tmpCharts.length;
            tmpCharts[0].setAttribute('height', oriHeight * tmpCharts.length);
            tmpCharts[0].setAttribute('viewBox', '0 0 ' + viewBoxW + ' ' + oriHeight * tmpCharts.length);
            break;

          case _FacetSpec.default.facetType.col:
            widthAfterFacet *= tmpCharts.length;
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
              var tmpDom = chartChildren[m];

              var transformAttrs = _Util.Util.getTransformAttrs(tmpDom);

              switch (facetType) {
                case _FacetSpec.default.facetType.row:
                  tmpDom.setAttribute('transform', 'translate(' + transformAttrs.transNums[0] + ',' + (transformAttrs.transNums[1] + (oriHeight + chartMargin) * j) + ') ' + 'scale(' + transformAttrs.scaleNum + ')');
                  break;

                case _FacetSpec.default.facetType.col:
                  tmpDom.setAttribute('transform', 'translate(' + (transformAttrs.transNums[0] + (oriWidth + chartMargin) * j) + ',' + transformAttrs.transNums[1] + ') ' + 'scale(' + transformAttrs.scaleNum + ')');
                  break;
              }

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
      this.viewport.setViewport(widthAfterFacet, heightAfterFacet);
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
      } // console.log('changed attributes: ', ChartSpec.changedAttrs);
      //add missing marks to each chart


      allMarks = Array.from(allMarks);
      ChartSpec.markDoms.clear();

      for (var i = 0; i < ChartSpec.charts.length; i++) {
        for (var _j3 = 0; _j3 < allMarks.length; _j3++) {
          if (ChartSpec.charts[i].querySelectorAll('#' + allMarks[_j3]).length === 0) {
            //chart i does not have mark j
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
  renderSpec: function renderSpec(spec, callback) {
    var canisObj = new Canis();
    return canisObj.init(spec).then(function () {
      return canisObj.render(callback);
    });
  },
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
                  resultCmd += ' ';
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
                  resultCmd += ' ';
                }
              }

              break;

            case 'A':
              var anums = cmdValue.split(',');

              for (var _ni2 = 0; _ni2 < anums.length; _ni2++) {
                if (_ni2 === anums.length - 2) {
                  //x
                  resultCmd = this.calNumTrans(resultCmd, diffCmds, i, cmdName, anums[_ni2], reset, parseFloat(resetX) + 1, tx);
                  resultCmd += ' ';
                } else if (_ni2 === anums.length - 1) {
                  //y
                  resultCmd = this.calNumTrans(resultCmd, diffCmds, i, cmdName, anums[_ni2], reset, parseFloat(resetY) + 1, ty);
                } else {
                  resultCmd += anums[_ni2] + ' ';
                }
              }

              break;

            case 'a':
              var anums2 = cmdValue.split(',');

              for (var _ni3 = 0; _ni3 < anums2.length; _ni3++) {
                if (_ni3 === anums2.length - 2) {
                  //x
                  resultCmd = this.calNumTrans(resultCmd, diffCmds, i, cmdName, anums2[_ni3], reset, '1', 0);
                  resultCmd += ' ';
                } else if (_ni3 === anums2.length - 1) {
                  //y
                  resultCmd = this.calNumTrans(resultCmd, diffCmds, i, cmdName, anums2[_ni3], reset, '1', 0);
                } else {
                  resultCmd += anums2[_ni3] + ' ';
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
          return ['x', 'y', 'width', 'height', 'href', 'xlink:href', 'preserveAspectRatio'].includes(propName);

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
        var s4 = 'M0.5,0L0,0.9'; // console.log(s1.replace(removeNumRegExp, ''), s2.replace(removeNumRegExp, ''), s3.replace(removeNumRegExp, ''), s4.replace(removeNumRegExp, ''));

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
//# sourceMappingURL=canis_toolkit.js.map