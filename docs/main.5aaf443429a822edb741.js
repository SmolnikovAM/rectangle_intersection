/******/ (function(modules) { // webpackBootstrap
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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/style/subjx.css":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src??ref--5-2!./src/style/subjx.css ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".dg-wrapper {\n  position: static;\n  width: 0;\n  height: 0;\n  -ms-user-select: none;\n      user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -o-user-select: none;\n}\n.dg-controls {\n  display: inline-block;\n  box-sizing: border-box;\n  top: 0;\n  left: 0;\n  z-index: 2147483647;\n  border: 1px dashed #32b5fe;\n  cursor: move;\n}\n.dg-hdl {\n  cursor: pointer;\n  border-radius: 10px;\n  width: 10px;\n  height: 10px;\n  background-color: #fff;\n  border: 1px solid #32b5fe;\n  margin-top: -6px;\n  margin-left: -6px;\n}\n.dg,\n.dg-controls,\n.dg-hdl {\n  position: absolute;\n}\n.dg-hdl-t {\n  top: 0;\n}\n.dg-hdl-m {\n  top: 50%;\n}\n.dg-hdl-b {\n  top: 100%;\n}\n.dg-hdl-l {\n  left: 0;\n}\n.dg-hdl-c {\n  left: 50%;\n}\n.dg-hdl-r {\n  left: 100%;\n}\n.dg-rotator {\n  top: -25px;\n  left: 50%;\n}\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n}\n.draggable {\n  position: absolute;\n  left: 12.5%;\n  top: 12.5%;\n  width: 100px;\n  height: 7.5vw;\n  background-color: yellow;\n}\n.dg-rotator {\n  display: none;\n}\n.container {\n  /* overflow: hidden; */\n  border: 1px solid red;\n  width: 8.2vw;\n  height: 8.2vw;\n\n  position: relative;\n  left: 19.3vw;\n  top: 13.8vw;\n\n  -webkit-transform: rotate(-7.7deg);\n\n          transform: rotate(-7.7deg);\n}\n#default {\n  width: 55%;\n  position: absolute;\n}\n.dg-controls {\n  top: 0px;\n  left: 0.00148718px;\n  width: 55%;\n  height: 154px;\n}\n.draggable {\n  width: 8.2vw;\n  height: 8.2vw;\n  top: 0px;\n  left: 0.00148718px;\n}\n\n@media (max-width: 1024px) {\n  #default {\n    width: 100%;\n    position: absolute;\n  }\n  .container {\n    width: 14.6vw;\n    height: 15.3vw;\n    left: 35.2vw;\n    top: 25vw;\n  }\n}\n", "",{"version":3,"sources":["subjx.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,QAAQ;EACR,SAAS;EACT,qBAAiB;MAAjB,iBAAiB;EACjB,yBAAyB;EACzB,sBAAsB;EACtB,oBAAoB;AACtB;AACA;EACE,qBAAqB;EACrB,sBAAsB;EACtB,MAAM;EACN,OAAO;EACP,mBAAmB;EACnB,0BAA0B;EAC1B,YAAY;AACd;AACA;EACE,eAAe;EACf,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,yBAAyB;EACzB,gBAAgB;EAChB,iBAAiB;AACnB;AACA;;;EAGE,kBAAkB;AACpB;AACA;EACE,MAAM;AACR;AACA;EACE,QAAQ;AACV;AACA;EACE,SAAS;AACX;AACA;EACE,OAAO;AACT;AACA;EACE,SAAS;AACX;AACA;EACE,UAAU;AACZ;AACA;EACE,UAAU;EACV,SAAS;AACX;AACA;;EAEE,SAAS;EACT,UAAU;EACV,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,UAAU;EACV,YAAY;EACZ,aAAa;EACb,wBAAwB;AAC1B;AACA;EACE,aAAa;AACf;AACA;EACE,sBAAsB;EACtB,qBAAqB;EACrB,YAAY;EACZ,aAAa;;EAEb,kBAAkB;EAClB,YAAY;EACZ,WAAW;;EAEX,kCAA0B;;UAA1B,0BAA0B;AAC5B;AACA;EACE,UAAU;EACV,kBAAkB;AACpB;AACA;EACE,QAAQ;EACR,kBAAkB;EAClB,UAAU;EACV,aAAa;AACf;AACA;EACE,YAAY;EACZ,aAAa;EACb,QAAQ;EACR,kBAAkB;AACpB;;AAEA;EACE;IACE,WAAW;IACX,kBAAkB;EACpB;EACA;IACE,aAAa;IACb,cAAc;IACd,YAAY;IACZ,SAAS;EACX;AACF","file":"subjx.css","sourcesContent":[".dg-wrapper {\n  position: static;\n  width: 0;\n  height: 0;\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -o-user-select: none;\n}\n.dg-controls {\n  display: inline-block;\n  box-sizing: border-box;\n  top: 0;\n  left: 0;\n  z-index: 2147483647;\n  border: 1px dashed #32b5fe;\n  cursor: move;\n}\n.dg-hdl {\n  cursor: pointer;\n  border-radius: 10px;\n  width: 10px;\n  height: 10px;\n  background-color: #fff;\n  border: 1px solid #32b5fe;\n  margin-top: -6px;\n  margin-left: -6px;\n}\n.dg,\n.dg-controls,\n.dg-hdl {\n  position: absolute;\n}\n.dg-hdl-t {\n  top: 0;\n}\n.dg-hdl-m {\n  top: 50%;\n}\n.dg-hdl-b {\n  top: 100%;\n}\n.dg-hdl-l {\n  left: 0;\n}\n.dg-hdl-c {\n  left: 50%;\n}\n.dg-hdl-r {\n  left: 100%;\n}\n.dg-rotator {\n  top: -25px;\n  left: 50%;\n}\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n}\n.draggable {\n  position: absolute;\n  left: 12.5%;\n  top: 12.5%;\n  width: 100px;\n  height: 7.5vw;\n  background-color: yellow;\n}\n.dg-rotator {\n  display: none;\n}\n.container {\n  /* overflow: hidden; */\n  border: 1px solid red;\n  width: 8.2vw;\n  height: 8.2vw;\n\n  position: relative;\n  left: 19.3vw;\n  top: 13.8vw;\n\n  transform: rotate(-7.7deg);\n}\n#default {\n  width: 55%;\n  position: absolute;\n}\n.dg-controls {\n  top: 0px;\n  left: 0.00148718px;\n  width: 55%;\n  height: 154px;\n}\n.draggable {\n  width: 8.2vw;\n  height: 8.2vw;\n  top: 0px;\n  left: 0.00148718px;\n}\n\n@media (max-width: 1024px) {\n  #default {\n    width: 100%;\n    position: absolute;\n  }\n  .container {\n    width: 14.6vw;\n    height: 15.3vw;\n    left: 35.2vw;\n    top: 25vw;\n  }\n}\n"]}]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/helper/domHelper.js":
/*!*********************************!*\
  !*** ./src/helper/domHelper.js ***!
  \*********************************/
/*! exports provided: getCoordsOfTowRects, $ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCoordsOfTowRects", function() { return getCoordsOfTowRects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$", function() { return $; });
function getCoordsOfTowRects(_ref) {
  var container = _ref.container,
      element = _ref.element,
      delta = _ref.delta;
  var cHeight = container.offsetHeight;
  var cWidth = container.offsetWidth;
  var imgHeight = element.offsetHeight;
  var imgWidth = element.offsetWidth;
  var imgLeft = element.offsetLeft;
  var imgTop = element.offsetTop;
  var rect1 = [[imgLeft, imgTop], [imgLeft + imgWidth, imgTop], [imgLeft + imgWidth, imgTop + imgHeight], [imgLeft, imgTop + imgHeight]];
  var DELTA = delta || 1;
  var rect2 = [[0 + DELTA, 0 + DELTA], [cWidth - DELTA, 0 + DELTA], [cWidth - DELTA, cHeight - DELTA], [0 + DELTA, cHeight - DELTA]];
  return {
    rect1: rect1,
    rect2: rect2
  };
}
var $ = function $() {
  var _document;

  return (_document = document).querySelector.apply(_document, arguments);
};

/***/ }),

/***/ "./src/images/boxes/first.png":
/*!************************************!*\
  !*** ./src/images/boxes/first.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/boxes/first.png";

/***/ }),

/***/ "./src/images/test.jpg":
/*!*****************************!*\
  !*** ./src/images/test.jpg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/test.jpg";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_subjx_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/subjx.css */ "./src/style/subjx.css");
/* harmony import */ var _style_subjx_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_subjx_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_test_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/test.jpg */ "./src/images/test.jpg");
/* harmony import */ var _images_test_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_test_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_boxes_first_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/boxes/first.png */ "./src/images/boxes/first.png");
/* harmony import */ var _images_boxes_first_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_boxes_first_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_subjx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/subjx */ "./src/lib/subjx.js");
/* harmony import */ var _lib_subjx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib_subjx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helper_domHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helper/domHelper */ "./src/helper/domHelper.js");
/* harmony import */ var _intersection_intersection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./intersection/intersection */ "./src/intersection/intersection.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var dgImage = Object(_helper_domHelper__WEBPACK_IMPORTED_MODULE_4__["$"])("#test-image");
var defaultImage = Object(_helper_domHelper__WEBPACK_IMPORTED_MODULE_4__["$"])("#default");
var container = Object(_helper_domHelper__WEBPACK_IMPORTED_MODULE_4__["$"])(".container");
dgImage.src = _images_test_jpg__WEBPACK_IMPORTED_MODULE_1___default.a;
defaultImage.src = _images_boxes_first_png__WEBPACK_IMPORTED_MODULE_2___default.a;
var CONTAINER_BORDER = 4;
var dragOptions = {
  each: {
    move: true,
    resize: true
  },
  snap: {
    x: 1,
    y: 1
  }
};

function setDefaultSize() {
  var dgControls = Object(_helper_domHelper__WEBPACK_IMPORTED_MODULE_4__["$"])(".dg-controls");
  [dgImage, dgControls].forEach(function (el) {
    if (!el) return;
    var dgElement = el;
    dgElement.style.left = "".concat(0 + CONTAINER_BORDER, "px");
    dgElement.style.top = "".concat(0 + CONTAINER_BORDER, "px");
    dgElement.style.height = "".concat(container.offsetHeight - 2 * CONTAINER_BORDER, "px");
    dgElement.style.width = "".concat(container.offsetWidth - 2 * CONTAINER_BORDER, "px");
  });
}

function checkRightPosition() {
  var _getCoordsOfTowRects = Object(_helper_domHelper__WEBPACK_IMPORTED_MODULE_4__["getCoordsOfTowRects"])({
    container: container,
    element: dgImage,
    delta: 10
  }),
      rect1 = _getCoordsOfTowRects.rect1,
      rect2 = _getCoordsOfTowRects.rect2;

  if (Object(_intersection_intersection__WEBPACK_IMPORTED_MODULE_5__["default"])(rect1, rect2)) return;
  setDefaultSize();
}

window.addEventListener("load", function () {
  var transformBox = window.Subjx(dgImage);
  setDefaultSize();
  transformBox.drag(_objectSpread({}, dragOptions, {
    drop: checkRightPosition
  }));
});
window.addEventListener("resize", function () {
  checkRightPosition();
});

/***/ }),

/***/ "./src/intersection/intersection.js":
/*!******************************************!*\
  !*** ./src/intersection/intersection.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isRectIntersection; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function getVector(end, start) {
  var _end = _slicedToArray(end, 2),
      x1 = _end[0],
      y1 = _end[1];

  var _start = _slicedToArray(start, 2),
      x2 = _start[0],
      y2 = _start[1];

  return [x1 - x2, y1 - y2];
}

function getVectorDotProduct(vector1, vector2) {
  var _vector = _slicedToArray(vector1, 2),
      x1 = _vector[0],
      y1 = _vector[1];

  var _vector2 = _slicedToArray(vector2, 2),
      x2 = _vector2[0],
      y2 = _vector2[1];

  return x1 * x2 + y2 * y1;
}

function rotate90Vector(vector) {
  var _vector3 = _slicedToArray(vector, 2),
      x = _vector3[0],
      y = _vector3[1];

  return [-y, x];
}

function getRectProduct(rect, edge, line) {
  return rect.map(function (point) {
    if (point[0] === edge[0] && point[0] === edge[1]) return 0;
    var line2 = getVector(edge, point);
    return getVectorDotProduct(line2, line);
  });
}

var SIGN_FUNCTIONS = [function (x) {
  return x >= 0;
}, function (x) {
  return x <= 0;
}];
function isRectIntersection(rect1, rect2) {
  var vectors = rect1.map(function (point1, i, rect) {
    var j = (i + 1) % rect.length;
    var point2 = rect[j];
    var vector = getVector(point1, point2);
    var line = rotate90Vector(vector);
    return {
      line: line,
      edge: point2
    };
  });
  return vectors.every(function (vector) {
    var line = vector.line,
        edge = vector.edge;

    var _map = [rect1, rect2].map(function (rect) {
      return getRectProduct(rect, edge, line);
    }),
        _map2 = _slicedToArray(_map, 2),
        res1 = _map2[0],
        res2 = _map2[1];

    var _map3 = [res1, res2].map(function (res) {
      return SIGN_FUNCTIONS.map(function (f) {
        return res.every(f);
      });
    }),
        _map4 = _slicedToArray(_map3, 2),
        res1Sign = _map4[0],
        res2Sign = _map4[1];

    if (res1Sign[0] && res2Sign[1] || res1Sign[1] && res2Sign[0]) return false;
    return true;
  });
}

/***/ }),

/***/ "./src/lib/subjx.js":
/*!**************************!*\
  !*** ./src/lib/subjx.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

window.Subjx = function (r) {
  var n = {};

  function o(t) {
    if (n[t]) return n[t].exports;
    var e = n[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return r[t].call(e.exports, e, e.exports, o), e.l = !0, e.exports;
  }

  return o.m = r, o.c = n, o.d = function (t, e, r) {
    o.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: r
    });
  }, o.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, o.t = function (e, t) {
    if (1 & t && (e = o(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var r = Object.create(null);
    if (o.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var n in e) {
      o.d(r, n, function (t) {
        return e[t];
      }.bind(null, n));
    }
    return r;
  }, o.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t["default"];
    } : function () {
      return t;
    };
    return o.d(e, "a", e), e;
  }, o.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, o.p = "", o(o.s = 1);
}([function (t, e, r) {}, function (t, e, r) {
  "use strict";

  r.r(e);
  r(0);

  var z = requestAnimationFrame || mozRequestAnimationFrame || webkitRequestAnimationFrame || msRequestAnimationFrame || function (t) {
    return setTimeout(t, 1e3 / 60);
  },
      a = cancelAnimationFrame || mozCancelAnimationFrame || function (t) {
    clearTimeout(t);
  },
      o = (Array.prototype.forEach, Array.prototype.slice),
      i = Array.prototype.map,
      s = console.warn;

  function d(t) {
    return null != t;
  }

  function X(t) {
    return null == t;
  }

  function f(t) {
    return "function" == typeof t;
  }

  function c(t, e) {
    for (var r = 0; r < e.length; r++) {
      var n = e[r];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
    }
  }

  var u = function () {
    function t() {
      !function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }(this, t), this.observers = {};
    }

    var e, r, n;
    return e = t, (r = [{
      key: "subscribe",
      value: function value(t, e) {
        var r = this.observers;
        X(r[t]) && Object.defineProperty(r, t, {
          value: []
        }), r[t].push(e);
      }
    }, {
      key: "unsubscribe",
      value: function value(e) {
        this.observers = this.observers.filter(function (t) {
          return t !== e;
        });
      }
    }, {
      key: "notify",
      value: function value(e, r, n) {
        X(this.observers[e]) || this.observers[e].forEach(function (t) {
          if (r !== t) switch (e) {
            case "onmove":
              t.onMove(n);
              break;

            case "onrotate":
              t.onRotate(n);
              break;

            case "onresize":
              t.onResize(n);
              break;

            case "onapply":
              t.onApply(n);
              break;

            case "onrefreshstate":
              t.onRefreshState(n);
          }
        });
      }
    }]) && c(e.prototype, r), n && c(e, n), t;
  }();

  function l(t) {
    return (l = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
    })(t);
  }

  function n(t, e) {
    for (var r = 0; r < e.length; r++) {
      var n = e[r];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
    }
  }

  var h = function () {
    function a(t) {
      if (function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }(this, a), !t) return this;

      if ("string" == typeof t) {
        var e = document.querySelectorAll(t);
        this.length = e.length;

        for (var r = 0; r < this.length; r++) {
          this[r] = e[r];
        }
      } else if (1 === t.nodeType || t === document) this[0] = t, this.length = 1;else if (t instanceof Subjx || "object" === l(t)) {
        this.length = t.length;

        for (var n = 0; n < this.length; n++) {
          this[n] = t[n];
        }
      } else if (Array.isArray(t)) for (var o = this.length = 0; o < this.length; o++) {
        1 === t.nodeType && (this[o] = t[o], this.length++);
      }

      return this;
    }

    var t, e, r;
    return t = a, (e = [{
      key: "css",
      value: function value(t) {
        return function (r) {
          var t = {
            setStyle: function setStyle(t) {
              return function (t, e) {
                var r = t.length;

                for (; r--;) {
                  for (var n in e) {
                    t[r].style[n] = e[n];
                  }
                }

                return t.style;
              }(this, t);
            },
            getStyle: function getStyle() {
              return function (t) {
                var e = t.length;

                for (; e--;) {
                  return t[e].currentStyle ? t[e].currentStyle[r] : document.defaultView && document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(t[e], "")[r] : t[e].style[r];
                }
              }(this);
            }
          };
          {
            if ("string" == typeof r) return t.getStyle.apply(this, o.call(arguments, 1));
            if ("object" === l(r) || !r) return t.setStyle.apply(this, arguments);
            s("Method ".concat(r, " does not exist"));
          }
          return !1;
        }.call(this, t);
      }
    }, {
      key: "find",
      value: function value(t) {
        return function (t) {
          var e = this.length;

          for (; e--;) {
            return O(this[e].querySelectorAll(t));
          }
        }.call(this, t);
      }
    }, {
      key: "each",
      value: function value(t) {
        return function (e) {
          for (var r = o.call(this, 0), t = function t(_t2) {
            e.call(r[_t2]);
          }, n = r.length - 1; 0 <= n; --n) {
            t(n);
          }

          return this;
        }.call(this, t);
      }
    }, {
      key: "on",
      value: function value() {
        return function () {
          var t = this.length;

          for (; t--;) {
            this[t].events || (this[t].events = {}, this[t].events[arguments[0]] = []), 2 === arguments.length ? document.addEventListener ? this[t].addEventListener(arguments[0], arguments[1], !1) : document.attachEvent ? this[t].attachEvent("on".concat(arguments[0]), arguments[1]) : this[t]["on".concat(arguments[0])] = arguments[1] : 3 === arguments.length && "string" == typeof arguments[1] && p(this[t], arguments[0], arguments[1], arguments[2], !0);
          }

          return this;
        }.apply(this, arguments);
      }
    }, {
      key: "off",
      value: function value() {
        return function () {
          var t = this.length;

          for (; t--;) {
            this[t].events || (this[t].events = {}, this[t].events[arguments[0]] = []), 2 === arguments.length ? document.removeEventListener ? this[t].removeEventListener(arguments[0], arguments[1], !1) : document.detachEvent ? this[t].detachEvent("on".concat(arguments[0]), arguments[1]) : this[t]["on".concat(arguments[0])] = null : 3 === arguments.length && "string" == typeof arguments[1] && p(this[t], arguments[0], arguments[1], arguments[2], !1);
          }

          return this;
        }.apply(this, arguments);
      }
    }, {
      key: "is",
      value: function value(t) {
        return function (t) {
          var e = O(t),
              r = this.length;

          for (; r--;) {
            if (this[r] === e[r]) return !0;
          }

          return !1;
        }.call(this, t);
      }
    }]) && n(t.prototype, e), r && n(t, r), a;
  }();

  function p(t, e, r, n, o) {
    var a = function a(t) {
      for (var e = t.target; e && e !== this;) {
        e.matches(r) && n.call(e, t), e = e.parentNode;
      }
    };

    !0 === o ? document.addEventListener ? t.addEventListener(e, a, !1) : document.attachEvent ? t.attachEvent("on".concat(e), a) : t["on".concat(e)] = a : document.removeEventListener ? t.removeEventListener(e, a, !1) : document.detachEvent ? t.detachEvent("on".concat(e), a) : t["on".concat(e)] = null;
  }

  function O(t) {
    return new h(t);
  }

  function S(t) {
    return t.getBoundingClientRect();
  }

  function b(t) {
    return t.css("-webkit-transform") || t.css("-moz-transform") || t.css("-ms-transform") || t.css("-o-transform") || t.css("transform") || "none";
  }

  function Y(t) {
    var e = {};

    for (var r in t = t.match(/(\w+\((\-?\d+\.?\d*e?\-?\d*(?:,|\s)?)+\))+/g)) {
      var n = t[r].match(/[\w\.\-]+/g);
      e[n.shift()] = n.map(function (t) {
        return Number(t);
      });
    }

    return e;
  }

  function E(t) {
    var e = b(t).match(/-?\d+\.?\d+|-?\d+/g);
    return e ? e.map(function (t) {
      return parseFloat(t);
    }) : [1, 0, 0, 1, 0, 0];
  }

  function y(e, t) {
    if (t) {
      if (e.classList) {
        if (!(-1 < t.indexOf(" "))) return e.classList.add(t);
        t.split(/\s+/).forEach(function (t) {
          return e.classList.add(t);
        });
      }

      return e;
    }
  }

  var v = /px|em|%|ex|ch|rem|vh|vw|vmin|vmax|mm|cm|in|pt|pc|deg/,
      g = Math.PI / 180,
      pt = 180 / Math.PI;

  function Gt(t) {
    var e = t.x,
        r = t.y,
        n = t.centerX,
        o = t.centerY,
        a = t.angle,
        i = t.newCenterX,
        s = t.newCenterY,
        c = R(n, o, e, r, a, !1, !1),
        u = R(i, s, e, r, a, !1, !1),
        l = e - (c.left - u.left),
        h = r - (c.top - u.top);
    return {
      resX: m(l),
      resY: m(h)
    };
  }

  function j(t, e) {
    if (0 === e) return t;
    var r = T(t, e);
    return r - t < e ? r : void 0;
  }

  function T(t, e) {
    return 0 === e ? t : e * Math.round(t / e);
  }

  function N(t, e, r, n, o, a, i) {
    var s = t + parseFloat(r) / 2,
        c = e + parseFloat(n) / 2,
        u = t - s,
        l = e - c,
        h = Math.atan2(l, u) + o,
        f = Math.sqrt(Math.pow(parseFloat(r) / 2, 2) + Math.pow(parseFloat(n) / 2, 2)),
        p = Math.cos(h),
        d = Math.sin(h),
        b = c + f * (d = !0 === i ? -d : d);
    return {
      left: m(s + f * (p = !0 === a ? -p : p)),
      top: m(b)
    };
  }

  function R(t, e, r, n, o, a, i) {
    var s = Math.cos(o),
        c = Math.sin(o),
        u = (s = !0 === a ? -s : s) * (n - e) - (c = !0 === i ? -c : c) * (r - t) + e;
    return {
      left: m(s * (r - t) + c * (n - e) + t),
      top: m(u)
    };
  }

  function P(t, e) {
    return /px/.test(t) ? t : /%/.test(t) ? "".concat(parseFloat(t) * parseFloat(e) / 100, "px") : void 0;
  }

  function _(t, e, r) {
    return /px/.test(r) ? t : /%/.test(r) ? "".concat(100 * parseFloat(t) / parseFloat(e), "%") : void 0;
  }

  function C(t) {
    return t.match(v)[0];
  }

  function m(t) {
    return Number(t.toFixed(6));
  }

  function w(t, e) {
    for (var r = 0; r < e.length; r++) {
      var n = e[r];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
    }
  }

  var x = function () {
    function r(t, e) {
      if (function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }(this, r), this.constructor === r) throw new TypeError("Cannot construct Subject instances directly");
      this.el = t, this.storage = null, this.Ob = e, this._onMouseDown = this._onMouseDown.bind(this), this._onTouchStart = this._onTouchStart.bind(this), this._onMouseMove = this._onMouseMove.bind(this), this._onTouchMove = this._onTouchMove.bind(this), this._onMouseUp = this._onMouseUp.bind(this), this._onTouchEnd = this._onTouchEnd.bind(this);
    }

    var t, e, n;
    return t = r, (e = [{
      key: "enable",
      value: function value(t) {
        X(this.storage) ? (this._load(t), this._init(this.el)) : warn("Already enabled");
      }
    }, {
      key: "disable",
      value: function value() {
        var t = this.storage,
            e = this.el;
        X(t) || (!function (e, t) {
          if (t) {
            if (e.classList) {
              if (!(-1 < t.indexOf(" "))) return e.classList.remove(t);
              t.split(/\s+/).forEach(function (t) {
                return e.classList.remove(t);
              });
            }
          }
        }(e, "dg-drag"), this._destroy(), delete this.storage);
      }
    }, {
      key: "_load",
      value: function value(t) {
        (function (e) {
          y(this.el, "dg-drag");
          var t = {
            x: 10,
            y: 10,
            angle: 10 * g
          },
              r = {
            move: !1,
            resize: !1,
            rotate: !1
          };

          if (d(e)) {
            if (d(e.snap)) {
              var n = e.snap,
                  o = n.x,
                  a = n.y,
                  i = n.angle;
              t.x = X(o) ? 10 : o, t.y = X(a) ? 10 : a, t.angle = X(i) ? 10 * g : i * g;
            }

            if (d(e.each)) {
              var s = e.each,
                  c = s.move,
                  u = s.resize,
                  l = s.rotate;
              r.move = c || !1, r.resize = u || !1, r.rotate = l || !1;
            }
          }

          var h = this.Ob;
          (r.move || r.resize || r.rotate) && (h.subscribe("onrefreshstate", this), h.subscribe("onapply", this));
          r.move && h.subscribe("onmove", this);
          r.resize && h.subscribe("onresize", this);
          r.rotate && h.subscribe("onrotate", this);
          this.storage = {
            drop: e && f(e.drop) ? function (t) {
              e.drop(t, this.el);
            } : function () {},
            snap: t,
            each: r
          };
        }).call(this, t);
      }
    }, {
      key: "_draw",
      value: function value() {
        var L = this;
        !function t() {
          var e = L.storage;

          if (e.frame = z(t), e.doDraw) {
            e.doDraw = !1;
            var r = e.handle,
                n = e.handles,
                o = e.cx,
                a = e.cy,
                i = e.ch,
                s = e.cw,
                c = e.refang,
                u = e.pressang,
                l = e.pageX,
                h = e.pageY,
                f = e.center,
                p = e.snap,
                d = e.parentScale,
                b = e.doDrag,
                y = e.doResize,
                v = e.doRotate,
                g = d[0],
                m = d[1],
                w = e.each,
                x = w.move,
                _ = w.resize,
                k = w.rotate;

            if (y) {
              var M,
                  A,
                  E,
                  O,
                  S,
                  j = null,
                  T = null;
              if (r.is(n.br) || r.is(n.mr)) O = ((h = (S = R(o, a, l, h, c, !1, !1)).top) - a) / m, E = ((l = S.left) - o) / g, r.is(n.br) && (T = O + i), j = E + s, A = M = !1;else if (r.is(n.tl) || r.is(n.ml)) O = -((h = (S = R(o, a, l, h, c, !1, !1)).top) - a) / m, j = (E = -((l = S.left) - o) / g) + s, r.is(n.tl) && (T = O + i), A = M = !0;else if (r.is(n.tr) || r.is(n.tc)) {
                var X = r.is(n.tr),
                    Y = r.is(n.tc);
                O = -((h = (S = R(o, a, l, h, c, X, !1)).top) - a) / m, E = -((l = S.left) - o) / g, X && (O = -O), T = O + i, X && (j = E + s), M = Y, A = !0;
              } else if (r.is(n.bl) || r.is(n.bc)) {
                var N = r.is(n.bl);
                h = (S = R(o, a, l, h, c, !1, N)).top, E = -((l = S.left) - o) / g, T = (O = (h - a) / m) + i, N && (j = E + s), M = N, A = !1;
              }
              L._resize(j, T, M, A, E, O), _ && L.Ob.notify("onresize", L, {
                width: j,
                height: T,
                x: E,
                y: O,
                revX: M,
                revY: A,
                snap: p
              });
            }

            if (b) {
              var P = (h - a) / m,
                  C = (l - o) / g;
              L._drag(P, C), x && L.Ob.notify("onmove", L, {
                diffTop: P,
                diffLeft: C
              });
            }

            if (v) {
              var D = Math.atan2(h - f.y, l - f.x) - u;
              L._rotate(D), k && L.Ob.notify("onrotate", L, {
                radians: D
              });
            }
          }
        }();
      }
    }, {
      key: "_start",
      value: function value(t) {
        t.stopImmediatePropagation && t.stopImmediatePropagation();

        var e = this.storage,
            r = this._compute(t);

        e.pageX = t.pageX, e.pageY = t.pageY, e.cx = t.pageX, e.cy = t.pageY, e.ctrlKey = t.ctrlKey, Object.keys(r).forEach(function (t) {
          e[t] = r[t];
        });
        var n = r.onRightEdge,
            o = r.onBottomEdge,
            a = r.onTopEdge,
            i = r.onLeftEdge,
            s = r.handle,
            c = r.factor,
            u = r.revX,
            l = r.revY,
            h = n || o || a || i,
            f = s.is(e.handles.rotator);
        e.doResize = h, e.doDrag = !f && !h, e.doRotate = f, this.Ob && this.Ob.notify("onrefreshstate", this, {
          factor: c,
          revX: u,
          revY: l,
          onTopEdge: a,
          onLeftEdge: i,
          onRightEdge: n,
          onBottomEdge: o
        }), this._draw();
      }
    }, {
      key: "_moving",
      value: function value(t) {
        t.preventDefault && t.preventDefault();
        var e = this.storage;
        e.pageX = t.pageX, e.pageY = t.pageY, e.doDraw = !0;
      }
    }, {
      key: "_end",
      value: function value(t) {
        t.stopImmediatePropagation && t.stopImmediatePropagation();
        var e = this.storage,
            r = e.doResize ? "resize" : e.doDrag ? "drag" : "rotate";
        e.doResize = !1, e.doDrag = !1, e.doRotate = !1, e.doDraw = !1, this._apply(r), this.Ob && this.Ob.notify("onapply", this, r), a(e.frame), e.drop.call(this, t);
      }
    }, {
      key: "_onMouseDown",
      value: function value(t) {
        this._start(t), O(document).on("mousemove", this._onMouseMove).on("mouseup", this._onMouseUp);
      }
    }, {
      key: "_onTouchStart",
      value: function value(t) {
        this._start(t.touches[0]), O(document).on("touchmove", this._onTouchMove).on("touchend", this._onTouchEnd);
      }
    }, {
      key: "_onMouseMove",
      value: function value(t) {
        this._moving(t, this.el);
      }
    }, {
      key: "_onTouchMove",
      value: function value(t) {
        this._moving(t.touches[0], this.el);
      }
    }, {
      key: "_onMouseUp",
      value: function value(t) {
        this._end(t, this.el), O(document).off("mousemove", this._onMouseMove).off("mouseup", this._onMouseUp);
      }
    }, {
      key: "_onTouchEnd",
      value: function value(t) {
        0 === t.touches.length && this._end(t.changedTouches[0], this.el), O(document).off("touchmove", this._onTouchMove).off("touchend", this._onTouchEnd);
      }
    }, {
      key: "onMove",
      value: function value(t) {
        this._drag(t.diffTop, t.diffLeft);
      }
    }, {
      key: "onRotate",
      value: function value(t) {
        this._rotate(t.radians);
      }
    }, {
      key: "onResize",
      value: function value(t) {
        var e = null !== t.width ? this.storage.cw + t.x : null,
            r = null !== t.height ? this.storage.ch + t.y : null;

        this._resize(e, r, t.revX, t.revY);
      }
    }, {
      key: "onApply",
      value: function value(t) {
        this._apply(t);
      }
    }]) && w(t.prototype, e), n && w(t, n), r;
  }();

  function k(t) {
    return (k = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
    })(t);
  }

  function M(t) {
    return function (t) {
      if (Array.isArray(t)) {
        for (var e = 0, r = new Array(t.length); e < t.length; e++) {
          r[e] = t[e];
        }

        return r;
      }
    }(t) || function (t) {
      if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
    }(t) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }();
  }

  function A(t, e) {
    for (var r = 0; r < e.length; r++) {
      var n = e[r];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
    }
  }

  function D(t, e) {
    return !e || "object" !== k(e) && "function" != typeof e ? function (t) {
      if (void 0 !== t) return t;
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }(t) : e;
  }

  function L(t) {
    return (L = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    })(t);
  }

  function B(t, e) {
    return (B = Object.setPrototypeOf || function (t, e) {
      return t.__proto__ = e, t;
    })(t, e);
  }

  var F = function (t) {
    function o(t, e, r) {
      var n;
      return function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }(this, o), (n = D(this, L(o).call(this, t, r))).enable(e), n;
    }

    var e, r, n;
    return function (t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), e && B(t, e);
    }(o, x), e = o, (r = [{
      key: "_init",
      value: function value(t, e) {
        (function (t) {
          var e = document.createElement("div");
          y(e, "dg-wrapper"), t.parentNode.insertBefore(e, t);
          var r = e,
              n = O(t),
              o = n.css("width"),
              a = n.css("height"),
              i = n.css("top"),
              s = n.css("left"),
              c = O(r.parentNode),
              u = {
            top: i,
            left: s,
            width: P(o, c.css("width")),
            height: P(a, c.css("height")),
            transform: b(n)
          },
              l = document.createElement("div");
          l.innerHTML = '<div class="dg-hdl dg-rotator"></div>        <div class="dg-hdl dg-hdl-t dg-hdl-l dg-hdl-tl"></div>        <div class="dg-hdl dg-hdl-t dg-hdl-r dg-hdl-tr"></div>        <div class="dg-hdl dg-hdl-b dg-hdl-r dg-hdl-br"></div>        <div class="dg-hdl dg-hdl-b dg-hdl-l dg-hdl-bl"></div>        <div class="dg-hdl dg-hdl-t dg-hdl-c dg-hdl-tc"></div>        <div class="dg-hdl dg-hdl-b dg-hdl-c dg-hdl-bc"></div>        <div class="dg-hdl dg-hdl-m dg-hdl-l dg-hdl-ml"></div>        <div class="dg-hdl dg-hdl-m dg-hdl-r dg-hdl-mr"></div>', y(l, "dg-controls"), r.appendChild(l);
          var h = O(l);
          h.css(u);
          var f = O(r);
          Object.assign(this.storage, {
            controls: l,
            handles: {
              tl: f.find(".dg-hdl-tl"),
              tr: f.find(".dg-hdl-tr"),
              br: f.find(".dg-hdl-br"),
              bl: f.find(".dg-hdl-bl"),
              tc: f.find(".dg-hdl-tc"),
              bc: f.find(".dg-hdl-bc"),
              ml: f.find(".dg-hdl-ml"),
              mr: f.find(".dg-hdl-mr"),
              rotator: f.find(".dg-rotator")
            },
            parent: c
          }), h.on("mousedown", this._onMouseDown).on("touchstart", this._onTouchStart);
        }).call(this, t, e);
      }
    }, {
      key: "_destroy",
      value: function value(t) {
        (function () {
          var t = this.storage.controls;
          O(t).off("mousedown", this._onMouseDown).off("touchstart", this._onTouchStart), this.el.parentNode.removeChild(t.parentNode);
        }).call(this, t);
      }
    }, {
      key: "_drag",
      value: function value() {
        q.call.apply(q, [this].concat(Array.prototype.slice.call(arguments)));
      }
    }, {
      key: "_rotate",
      value: function value() {
        V.call.apply(V, [this].concat(Array.prototype.slice.call(arguments)));
      }
    }, {
      key: "_resize",
      value: function value() {
        U.call.apply(U, [this].concat(Array.prototype.slice.call(arguments)));
      }
    }, {
      key: "_compute",
      value: function value() {
        return I.call.apply(I, [this].concat(Array.prototype.slice.call(arguments)));
      }
    }, {
      key: "_apply",
      value: function value() {
        var t = this.storage,
            e = O(this.el),
            r = t.cached,
            n = t.parent,
            o = t.dimens,
            a = t.controls;

        if (r) {
          var i = M(r),
              s = i[4],
              c = i[5];
          i[4] = 0, i[5] = 0;
          var u = H(i),
              l = n.css("width"),
              h = n.css("height"),
              f = parseFloat(P(e.css("left"), l)),
              p = parseFloat(P(e.css("top"), h));
          u.left = _(f + s + "px", l, o.left), u.top = _(p + c + "px", h, o.top), e.css(u), O(a).css(u), this.storage.cached = null;
        }
      }
    }, {
      key: "onRefreshState",
      value: function value(t) {
        var e = this.storage,
            r = function (t, e, r) {
          var n = this.storage,
              o = n.controls,
              a = n.handles,
              i = n.parent,
              s = n.snap,
              c = S(a.tl[0]),
              u = S(a.tr[0]),
              l = Math.atan2(u.top - c.top, u.left - c.left) * t,
              h = parseFloat(P(o.style.width, i.css("width"))),
              f = parseFloat(P(o.style.height, i.css("height"))),
              p = E(O(o)),
              d = N(p[4], p[5], h, f, l, e, r),
              b = O(this.el),
              y = this.el.style;
          return {
            transform: p,
            parentTransform: E(i),
            left: T(p[4], s.x),
            top: T(p[5], s.y),
            coordX: d.left,
            coordY: d.top,
            refang: l,
            cw: h,
            ch: f,
            dimens: {
              top: C(y.top || b.css("top")),
              left: C(y.left || b.css("left")),
              width: C(y.width || b.css("width")),
              height: C(y.height || b.css("height"))
            }
          };
        }.call(this, t.factor, t.revX, t.revY);

        Object.keys(r).forEach(function (t) {
          e[t] = r[t];
        });
      }
    }]) && A(e.prototype, r), n && A(e, n), o;
  }();

  function I(t) {
    var e = this.el,
        r = this.storage,
        n = r.handles,
        o = r.controls,
        a = r.parent,
        i = r.snap,
        s = O(t.target),
        c = 1,
        u = s.is(n.tl) || s.is(n.ml) || s.is(n.bl) || s.is(n.tc),
        l = s.is(n.tl) || s.is(n.tr) || s.is(n.tc) || s.is(n.ml);
    (s.is(n.tr) || s.is(n.bl)) && (c = -1);

    var h = S(n.tl[0]),
        f = S(n.tr[0]),
        p = Math.atan2(f.top - h.top, f.left - h.left) * c,
        d = parseFloat(P(o.style.width, a.css("width"))),
        b = parseFloat(P(o.style.height, a.css("height"))),
        y = E(O(o)),
        v = N(y[4], y[5], d, b, p, u, l),
        g = S(o),
        m = g.left + d / 2,
        w = g.top + b / 2,
        x = Math.atan2(t.pageY - w, t.pageX - m),
        _ = O(e),
        k = e.style,
        M = {
      top: C(k.top || _.css("top")),
      left: C(k.left || _.css("left")),
      width: C(k.width || _.css("width")),
      height: C(k.height || _.css("height"))
    },
        A = E(a);

    return {
      parentScale: [A[0], A[3]],
      transform: y,
      cw: d,
      ch: b,
      center: {
        x: m,
        y: w
      },
      left: T(y[4], i.x),
      top: T(y[5], i.y),
      coordY: v.top,
      coordX: v.left,
      factor: c,
      pressang: x,
      refang: p,
      revX: u,
      revY: l,
      handle: s,
      onTopEdge: s.is(n.tl) || s.is(n.tc) || s.is(n.tr),
      onLeftEdge: s.is(n.tl) || s.is(n.ml) || s.is(n.bl),
      onRightEdge: s.is(n.tr) || s.is(n.mr) || s.is(n.br),
      onBottomEdge: s.is(n.br) || s.is(n.bc) || s.is(n.bl),
      dimens: M
    };
  }

  function U(t, e, r, n) {
    var o = this.el,
        a = this.storage,
        i = a.controls,
        s = a.snap,
        c = a.left,
        u = a.top,
        l = a.coordX,
        h = a.coordY,
        f = a.refang,
        p = a.dimens,
        d = a.parent,
        b = a.transform,
        y = i.style;
    null !== t && (y.width = "".concat(j(t, s.x), "px")), null !== e && (y.height = "".concat(j(e, s.y), "px"));
    var v = N(c, u, y.width, y.height, f, r, n),
        g = u - (v.top - h),
        m = c - (v.left - l),
        w = M(b);
    w[4] = m, w[5] = g;
    var x = H(w);
    O(i).css(x), x.width = _(y.width, d.css("width"), p.width), x.height = _(y.height, d.css("height"), p.height), O(o).css(x), a.cached = w;
  }

  function q(t, e) {
    var r = this.el,
        n = this.storage,
        o = n.controls,
        a = n.transform,
        i = n.snap,
        s = M(a);
    s[4] = j(a[4] + e, i.x), s[5] = j(a[5] + t, i.y);
    var c = H(s);
    O(o).css(c), O(r).css(c), n.cached = s;
  }

  function V(t) {
    var e = this.el,
        r = this.storage,
        n = r.controls,
        o = r.transform,
        a = r.refang,
        i = r.snap,
        s = M(o),
        c = j(a + t, i.angle);
    s[0] = m(Math.cos(c)), s[1] = m(Math.sin(c)), s[2] = -m(Math.sin(c)), s[3] = m(Math.cos(c));
    var u = H(s);
    O(n).css(u), O(e).css(u), r.cached = s;
  }

  function H(t) {
    var e = "matrix(".concat(t.join(), ")");
    return {
      transform: e,
      webkitTranform: e,
      mozTransform: e,
      msTransform: e,
      otransform: e
    };
  }

  function $t(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function (t) {
        return Object.getOwnPropertyDescriptor(r, t).enumerable;
      }))), n.forEach(function (t) {
        K(e, t, r[t]);
      });
    }

    return e;
  }

  function K(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = r, t;
  }

  function Jt(t, e) {
    return function (t) {
      if (Array.isArray(t)) return t;
    }(t) || function (t, e) {
      var r = [],
          n = !0,
          o = !1,
          a = void 0;

      try {
        for (var i, s = t[Symbol.iterator](); !(n = (i = s.next()).done) && (r.push(i.value), !e || r.length !== e); n = !0) {
          ;
        }
      } catch (t) {
        o = !0, a = t;
      } finally {
        try {
          n || null == s["return"] || s["return"]();
        } finally {
          if (o) throw a;
        }
      }

      return r;
    }(t, e) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }();
  }

  var Q = /([achlmqstvz])([^achlmqstvz]*)/gi,
      Z = /\s*,\s*|\s+/g;

  function Wt(t) {
    for (var e = Q.lastIndex = 0, r = []; e = Q.exec(t);) {
      var n = e[1],
          o = n.toUpperCase();
      r.push({
        relative: n !== o,
        key: o,
        cmd: n,
        value: e[2].trim().split(Z).map(function (t) {
          if (!isNaN(t)) return Number(t);
        })
      });
    }

    return r;
  }

  function te(t, e, r, n) {
    return t + e * (Math.abs(t - r) / n);
  }

  function ee(t, e, r) {
    return t + e * (t / r);
  }

  function re(t) {
    return !0 === t ? -1 : 1;
  }

  function dt(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function (t) {
        return Object.getOwnPropertyDescriptor(r, t).enumerable;
      }))), n.forEach(function (t) {
        G(e, t, r[t]);
      });
    }

    return e;
  }

  function G(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = r, t;
  }

  function $(t) {
    return ($ = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
    })(t);
  }

  function J(t, e) {
    for (var r = 0; r < e.length; r++) {
      var n = e[r];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
    }
  }

  function W(t, e) {
    return !e || "object" !== $(e) && "function" != typeof e ? function (t) {
      if (void 0 !== t) return t;
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }(t) : e;
  }

  function tt(t) {
    return (tt = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    })(t);
  }

  function et(t, e) {
    return (et = Object.setPrototypeOf || function (t, e) {
      return t.__proto__ = e, t;
    })(t, e);
  }

  var rt = 25,
      nt = /[+-]?\d+(\.\d+)?/g,
      ot = /translate\(.*\)(.*)translate\(.*\)|$/,
      at = function (t) {
    function o(t, e, r) {
      var n;
      return function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }(this, o), (n = W(this, tt(o).call(this, t, r))).enable(e), n;
    }

    var e, r, n;
    return function (t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), e && et(t, e);
    }(o, x), e = o, (r = [{
      key: "_init",
      value: function value(t, e) {
        (function (t) {
          var s = lt("g");
          t.parentNode.appendChild(s);
          var e = t.getBBox(),
              r = e.width,
              n = e.height,
              o = e.x,
              a = e.y,
              c = t.getAttribute("transform") || "translate(0 0)",
              i = lt("rect");
          [["width", r], ["height", n], ["x", o], ["y", a], ["fill", "transparent"], ["stroke", "#00a8ff"], ["stroke-dasharray", "3 3"], ["transform", c]].forEach(function (t) {
            i.setAttribute(t[0], t[1]);
          });
          var u = lt("g");
          u.appendChild(i), s.appendChild(u);
          var l = {
            tl: [o, a],
            tr: [o + r, a],
            br: [o + r, a + n],
            bl: [o, a + n],
            tc: [o + r / 2, a],
            bc: [o + r / 2, a + n],
            ml: [o, a + n / 2],
            mr: [o + r, a + n / 2],
            rotator: [o + r / 2, a - rt]
          };
          Object.keys(l).forEach(function (t) {
            var e,
                r,
                n,
                o,
                a,
                i = l[t];
            l[t] = (e = i[0], r = i[1], n = c, o = lt("circle"), a = {
              cx: e,
              cy: r,
              r: 6,
              fill: "white",
              stroke: "#00a8ff",
              transform: n
            }, Object.keys(a).map(function (t) {
              o.setAttribute(t, a[t]);
            }), o), s.appendChild(lt("g").appendChild(l[t]).parentNode);
          }), Object.assign(this.storage, {
            wrapper: s,
            box: i,
            handles: l,
            parent: s.parentNode
          }), O(s).on("mousedown", this._onMouseDown).on("touchstart", this._onTouchStart);
        }).call(this, t, e);
      }
    }, {
      key: "_destroy",
      value: function value(t) {
        (function () {
          var t = this.storage.wrapper;
          O(t).off("mousedown", this._onMouseDown).off("touchstart", this._onTouchStart), this.el.parentNode.removeChild(t);
        }).call(this, t);
      }
    }, {
      key: "_drag",
      value: function value() {
        ct.call.apply(ct, [this].concat(Array.prototype.slice.call(arguments)));
      }
    }, {
      key: "_rotate",
      value: function value() {
        ut.call.apply(ut, [this].concat(Array.prototype.slice.call(arguments)));
      }
    }, {
      key: "_resize",
      value: function value() {
        st.call.apply(st, [this].concat(Array.prototype.slice.call(arguments)));
      }
    }, {
      key: "_compute",
      value: function value() {
        return it.call.apply(it, [this].concat(Array.prototype.slice.call(arguments)));
      }
    }, {
      key: "_apply",
      value: function value(t) {
        var e = this,
            r = this.storage,
            n = r.box,
            o = r.handles,
            a = r.refang,
            i = r.factor,
            s = r.wrapper,
            c = r.cached,
            u = r.transform,
            l = Y(s.getAttribute("transform") || "translate(0 0)").translate,
            h = n.getBBox(),
            f = h.x,
            p = h.y,
            d = h.width,
            b = h.height,
            y = l[0],
            v = l[1],
            g = f + y,
            m = p + v,
            w = g + d / 2,
            x = m + b / 2;

        if ("rotate" !== t && ht(n, o, {
          x: g,
          y: m,
          width: d,
          height: b,
          angle: a * i
        }), "drag" === t) {
          if (0 === y && 0 === v) return;
          s.removeAttribute("transform");
          var _ = [];
          "g" === this.el.tagName.toLowerCase() ? (this.el.childNodes.forEach(function (t) {
            1 === t.nodeType && _.push(t);
          }), this.el.removeAttribute("transform")) : _.push(this.el), _.forEach(function (t) {
            !function (e, t) {
              var r = t.x,
                  n = t.y,
                  o = t.angle,
                  a = t.centerX,
                  i = t.centerY,
                  s = [["transform", "rotate(".concat(o, " ").concat(a, " ").concat(i, ")")]];

              switch (e.tagName.toLowerCase()) {
                case "text":
                case "rect":
                  var c = Number(e.getAttribute("x")) + r,
                      u = Number(e.getAttribute("y")) + n;
                  s.push(["x", c], ["y", u]);
                  break;

                case "circle":
                case "ellipse":
                  var l = Number(e.getAttribute("cx")) + r,
                      h = Number(e.getAttribute("cy")) + n;
                  s.push(["cx", l], ["cy", h]);
                  break;

                case "line":
                  var f = Number(e.getAttribute("x1")) + r,
                      p = Number(e.getAttribute("y1")) + n,
                      d = Number(e.getAttribute("x2")) + r,
                      b = Number(e.getAttribute("y2")) + n;
                  s.push(["x1", f], ["y1", p], ["x2", d], ["y2", b]);
                  break;

                case "polygon":
                case "polyline":
                  var y = bt(e.getAttribute("points")),
                      v = y.map(function (t) {
                    return t[0] = Number(t[0]) + r, t[1] = Number(t[1]) + n, t.join(" ");
                  }).join(" ");
                  s.push(["points", v]);
                  break;

                case "path":
                  var g = e.getAttribute("d");
                  s.push(["d", function (t) {
                    for (var e = t.path, r = t.x, n = t.y, o = Wt(e), a = "", i = !0, s = 0, c = o.length; s < c; s++) {
                      var u = o[s],
                          l = u.value,
                          h = u.key,
                          f = u.relative;

                      switch (h) {
                        case "M":
                          if (f && !i) break;
                          l[0] = l[0] + r, l[1] = l[1] + n;
                          break;

                        case "A":
                          if (f) break;
                          l[5] = l[5] + r, l[6] = l[6] + n;
                          break;

                        case "C":
                          if (f) break;
                          l[0] = l[0] + r, l[1] = l[1] + n, l[2] = l[2] + r, l[3] = l[3] + n, l[4] = l[4] + r, l[5] = l[5] + n;
                          break;

                        case "H":
                          if (f) break;
                          l[0] = l[0] + r;
                          break;

                        case "V":
                          if (f) break;
                          l[0] = l[0] + n;
                          break;

                        case "L":
                        case "T":
                          if (f) break;
                          l[0] = l[0] + r, l[1] = l[1] + n;
                          break;

                        case "Q":
                        case "S":
                          if (f) break;
                          l[0] = l[0] + r, l[1] = l[1] + n, l[2] = l[2] + r, l[3] = l[3] + n;
                          break;

                        case "Z":
                          l[0] = "";
                      }

                      a += u.cmd + u.value.join(",") + " ", i = !1;
                    }

                    return a;
                  }({
                    path: g,
                    x: r,
                    y: n
                  })]);
              }

              s.forEach(function (t) {
                e.setAttribute(t[0], t[1]);
              });
            }(t, {
              x: y,
              y: v,
              angle: a * i * pt,
              centerX: w,
              centerY: x
            });
          });
        }

        if ("resize" === t) {
          if (X(c)) return;
          var k = [],
              M = c.revX,
              A = c.revY,
              E = c.scaleX,
              O = c.scaleY,
              S = c.diffX,
              j = c.diffY,
              T = !1;
          "g" === this.el.tagName.toLowerCase() ? (this.el.childNodes.forEach(function (t) {
            1 === t.nodeType && k.push(t);
          }), T = !0) : k.push(this.el), k.forEach(function (t) {
            !function (e, t) {
              var r = t.scaleX,
                  n = t.scaleY,
                  o = t.diffX,
                  a = t.diffY,
                  i = t.revX,
                  s = t.revY,
                  c = t.angle,
                  u = t.centerX,
                  l = t.centerY,
                  h = t.bBox,
                  f = t.store,
                  p = f.onRightEdge,
                  d = f.onLeftEdge,
                  b = f.onTopEdge,
                  y = f.onBottomEdge,
                  v = f.center,
                  g = h.x,
                  m = h.y,
                  w = h.width,
                  x = h.height,
                  _ = 0,
                  k = 0;
              p && (_ = g);
              d && (_ = g + w);
              b && (k = m + x);
              y && (k = m);
              var M = {
                centerX: v.left,
                centerY: v.top,
                newCenterX: u,
                newCenterY: l,
                angle: c
              },
                  A = [["transform", "rotate(".concat(c * pt, " ").concat(u, " ").concat(l, ")")]];

              switch (e.tagName.toLowerCase()) {
                case "text":
                  var E = Number(e.getAttribute("x")),
                      O = Number(e.getAttribute("y")),
                      S = Gt(dt({
                    x: te(E, o, _, w),
                    y: te(O, a, k, x)
                  }, M)),
                      j = S.resX,
                      T = S.resY;
                  A.push(["x", j + (r < 0 ? w : 0)], ["y", T + (n < 0 ? x : 0)]);
                  break;

                case "circle":
                  var X = Number(e.getAttribute("r")),
                      Y = Number(e.getAttribute("cx")),
                      N = Number(e.getAttribute("cy")),
                      P = X * (Math.abs(r) + Math.abs(n)) / 2,
                      C = Gt(dt({
                    x: te(Y, o, _, w),
                    y: te(N, a, k, x)
                  }, M)),
                      D = C.resX,
                      L = C.resY;
                  A.push(["r", P], ["cx", D], ["cy", L]);
                  break;

                case "rect":
                  var z = Number(e.getAttribute("width")),
                      R = Number(e.getAttribute("height")),
                      B = Number(e.getAttribute("x")),
                      F = Number(e.getAttribute("y")),
                      I = Gt(dt({
                    x: te(B, o, _, w),
                    y: te(F, a, k, x)
                  }, M)),
                      U = I.resX,
                      q = I.resY,
                      V = z * Math.abs(r),
                      H = R * Math.abs(n);
                  A.push(["x", U - (r < 0 ? V : 0)], ["y", q - (n < 0 ? H : 0)], ["width", V], ["height", H]);
                  break;

                case "ellipse":
                  var K = Number(e.getAttribute("rx")),
                      Q = Number(e.getAttribute("ry")),
                      Z = Number(e.getAttribute("cx")),
                      G = Number(e.getAttribute("cy")),
                      $ = Gt(dt({
                    x: te(Z, o, _, w),
                    y: te(G, a, k, x)
                  }, M)),
                      J = $.resX,
                      W = $.resY;
                  A.push(["rx", K * Math.abs(r)], ["ry", Q * Math.abs(n)], ["cx", J], ["cy", W]);
                  break;

                case "line":
                  var tt = Number(e.getAttribute("x1")),
                      et = Number(e.getAttribute("y1")),
                      rt = Number(e.getAttribute("x2")),
                      nt = Number(e.getAttribute("y2")),
                      ot = Gt(dt({
                    x: te(tt, o, _, w),
                    y: te(et, a, k, x)
                  }, M)),
                      at = ot.resX,
                      it = ot.resY,
                      st = Gt(dt({
                    x: te(rt, o, _, w),
                    y: te(nt, a, k, x)
                  }, M)),
                      ct = st.resX,
                      ut = st.resY;
                  A.push(["x1", at], ["y1", it], ["x2", ct], ["y2", ut]);
                  break;

                case "polygon":
                case "polyline":
                  var lt = bt(e.getAttribute("points")),
                      ht = lt.map(function (t) {
                    var e = Gt(dt({
                      x: te(Number(t[0]), o, _, w),
                      y: te(Number(t[1]), a, k, x)
                    }, M)),
                        r = e.resX,
                        n = e.resY;
                    return t[0] = r, t[1] = n, t.join(" ");
                  }).join(" ");
                  A.push(["points", ht]);
                  break;

                case "path":
                  var ft = e.getAttribute("d");
                  A.push(["d", function (t) {
                    for (var e = t.bBox, r = t.path, n = t.baseData, o = t.dx, a = t.dy, i = t.revX, s = t.revY, c = t.fixedX, u = t.fixedY, l = Wt(r), h = e.width, f = e.height, p = "", d = [], b = !0, y = 0, v = l.length; y < v; y++) {
                      var g = l[y],
                          m = g.value,
                          w = g.key,
                          x = g.relative;

                      switch (w) {
                        case "A":
                          var _ = Jt(m, 7),
                              k = _[0],
                              M = _[1],
                              A = _[2],
                              E = _[3],
                              O = _[4],
                              S = _[5],
                              j = _[6],
                              T = re(i),
                              X = re(s),
                              Y = [],
                              N = k + o * T * (k / h),
                              P = M + a * X * (M / f);

                          if (Y.push(N, P, A, E, O), x) Y.push(ee(S, o * T, h), ee(j, a * X, f));else {
                            var C = Gt($t({
                              x: te(S, o, c, h),
                              y: te(j, a, u, f)
                            }, n)),
                                D = C.resX,
                                L = C.resY;
                            Y.push(D, L);
                          }
                          d.push(Y);
                          break;

                        case "C":
                          var z = Jt(m, 6),
                              R = z[0],
                              B = z[1],
                              F = z[2],
                              I = z[3],
                              U = z[4],
                              q = z[5];

                          if (x) {
                            var V = re(i),
                                H = re(s);
                            d.push([ee(R, o * V, h), ee(B, a * H, f), ee(F, o * V, h), ee(I, a * H, f), ee(U, o * V, h), ee(q, a * H, f)]);
                          } else {
                            var K = s && u < B || !s && B < u ? -1 : 1,
                                Q = i && c < F || !i && F < c ? -1 : 1,
                                Z = s && u < I || !s && I < u ? -1 : 1,
                                G = Gt($t({
                              x: te(R, o * (i && c < R || !i && R < c ? -1 : 1), c, h),
                              y: te(B, a * K, u, f)
                            }, n)),
                                $ = G.resX,
                                J = G.resY,
                                W = Gt($t({
                              x: te(F, o * Q, c, h),
                              y: te(I, a * Z, u, f)
                            }, n)),
                                tt = W.resX,
                                et = W.resY,
                                rt = Gt($t({
                              x: te(U, o, c, h),
                              y: te(q, a, u, f)
                            }, n)),
                                nt = rt.resX,
                                ot = rt.resY;
                            d.push([$, J, tt, et, nt, ot]);
                          }

                          break;

                        case "H":
                          if (x) {
                            var at = re(i);
                            d.push([ee(m[0], o * at, h)]);
                          } else {
                            var it = Gt($t({
                              x: te(m[0], o, c, h),
                              y: 0
                            }, n)).resX;
                            d.push([it]);
                          }

                          break;

                        case "V":
                          if (x) {
                            var st = re(s);
                            d.push([ee(m[0], a * st, f)]);
                          } else {
                            var ct = Gt($t({
                              x: 0,
                              y: te(m[0], a, u, f)
                            }, n)).resY;
                            d.push([ct]);
                          }

                          break;

                        case "T":
                        case "L":
                          if (x) {
                            var ut = re(i),
                                lt = re(s);
                            d.push([ee(m[0], o * ut, h), ee(m[1], a * lt, f)]);
                          } else {
                            var ht = Gt($t({
                              x: te(m[0], o, c, h),
                              y: te(m[1], a, u, f)
                            }, n)),
                                ft = ht.resX,
                                pt = ht.resY;
                            d.push([ft, pt]);
                          }

                          break;

                        case "M":
                          var dt = Jt(m, 2),
                              bt = dt[0],
                              yt = dt[1];

                          if (x && !b) {
                            var vt = re(i),
                                gt = re(s);
                            d.push([ee(bt, o * vt, h), ee(yt, a * gt, f)]);
                          } else {
                            var mt = Gt($t({
                              x: te(bt, o, c, h),
                              y: te(yt, a, u, f)
                            }, n)),
                                wt = mt.resX,
                                xt = mt.resY;
                            d.push([wt, xt]);
                          }

                          break;

                        case "Q":
                          var _t = Jt(m, 4),
                              kt = _t[0],
                              Mt = _t[1],
                              At = _t[2],
                              Et = _t[3];

                          if (x) {
                            var Ot = re(i),
                                St = re(s);
                            d.push([ee(kt, o * Ot, h), ee(Mt, a * St, f), ee(At, o * Ot, h), ee(Et, a * St, f)]);
                          } else {
                            var jt = s && u < Mt || !s && Mt < u ? -1 : 1,
                                Tt = Gt($t({
                              x: te(kt, o * (i && c < kt || !i && kt < c ? -1 : 1), c, h),
                              y: te(Mt, a * jt, u, f)
                            }, n)),
                                Xt = Tt.resX,
                                Yt = Tt.resY,
                                Nt = Gt($t({
                              x: te(At, o, c, h),
                              y: te(Et, a, u, f)
                            }, n)),
                                Pt = Nt.resX,
                                Ct = Nt.resY;
                            d.push([Xt, Yt, Pt, Ct]);
                          }

                          break;

                        case "S":
                          var Dt = Jt(m, 4),
                              Lt = Dt[0],
                              zt = Dt[1],
                              Rt = Dt[2],
                              Bt = Dt[3];

                          if (x) {
                            var Ft = re(i),
                                It = re(s);
                            d.push([ee(Lt, o * Ft, h), ee(zt, a * It, f), ee(Rt, o * Ft, h), ee(Bt, a * It, f)]);
                          } else {
                            var Ut = s && u < zt || !s && zt < u ? -1 : 1,
                                qt = Gt($t({
                              x: te(Lt, o * (i && c < Lt || !i && Lt < c ? -1 : 1), c, h),
                              y: te(zt, a * Ut, u, f)
                            }, n)),
                                Vt = qt.resX,
                                Ht = qt.resY,
                                Kt = Gt($t({
                              x: te(Rt, o, c, h),
                              y: te(Bt, a, u, f)
                            }, n)),
                                Qt = Kt.resX,
                                Zt = Kt.resY;
                            d.push([Vt, Ht, Qt, Zt]);
                          }

                          break;

                        case "Z":
                          d.push([""]);
                      }

                      p += g.cmd + d[y].join(",") + " ", b = !1;
                    }

                    return p;
                  }({
                    bBox: h,
                    path: ft,
                    baseData: M,
                    dx: o,
                    dy: a,
                    revX: i,
                    revY: s,
                    fixedX: _,
                    fixedY: k
                  })]);
              }

              A.forEach(function (t) {
                e.setAttribute(t[0], t[1]);
              });
            }(t, {
              scaleX: E,
              scaleY: O,
              diffX: S * re(M),
              diffY: j * re(A),
              revX: M,
              revY: A,
              angle: a * i,
              factor: i,
              centerX: w,
              centerY: x,
              bBox: !0 === T ? u.bBox : t.getBBox(),
              store: e.storage
            });
          }), this.storage.cached = null;
        }
      }
    }, {
      key: "onRefreshState",
      value: function value(e) {
        var r = this.storage,
            n = function (t) {
          var e = t.factor,
              r = t.revX,
              n = t.revY,
              o = this.storage,
              a = o.box,
              i = o.handles,
              s = o.snap,
              c = S(i.tl),
              u = S(i.tr),
              l = Math.atan2(u.y - c.y, u.x - c.x) * e,
              h = a.getBBox(),
              f = h.width,
              p = h.height,
              d = h.x,
              b = h.y,
              y = N(d, b, f, p, l, r, n),
              v = S(a);
          return {
            transform: {
              orig: this.el.getAttribute("transform"),
              value: a.getAttribute("transform"),
              scaleX: r ? f + d : d,
              scaleY: n ? p + b : b,
              bBox: h
            },
            cw: f,
            ch: p,
            center: {
              x: v.left + f / 2,
              y: v.top + p / 2,
              left: d + f / 2,
              top: b + p / 2
            },
            left: T(d, s.x),
            top: T(b, s.y),
            coordX: y.left,
            coordY: y.top,
            factor: e,
            refang: l
          };
        }.call(this, e);

        Object.keys(e).forEach(function (t) {
          r[t] = e[t];
        }), Object.keys(n).forEach(function (t) {
          r[t] = n[t];
        });
      }
    }]) && J(e.prototype, r), n && J(e, n), o;
  }();

  function it(t) {
    var e = this.storage,
        r = e.box,
        n = e.handles,
        o = e.snap,
        a = e.parent,
        i = O(t.target),
        s = 1,
        c = i.is(n.tl) || i.is(n.ml) || i.is(n.bl) || i.is(n.tc),
        u = i.is(n.tl) || i.is(n.tr) || i.is(n.tc) || i.is(n.ml);
    (i.is(n.tr) || i.is(n.bl)) && (s = -1);

    var l = S(n.tl),
        h = S(n.tr),
        f = Math.atan2(h.top - l.top, h.left - l.left) * s,
        p = r.getBBox(),
        d = p.width,
        b = p.height,
        y = p.x,
        v = p.y,
        g = N(y, v, d, b, f, c, u),
        m = S(r),
        w = m.left + d / 2,
        x = m.top + b / 2,
        _ = Math.atan2(t.pageY - x, t.pageX - w),
        k = i.is(n.tl) || i.is(n.tc) || i.is(n.tr),
        M = i.is(n.tl) || i.is(n.ml) || i.is(n.bl),
        A = i.is(n.tr) || i.is(n.mr) || i.is(n.br),
        E = i.is(n.br) || i.is(n.bc) || i.is(n.bl);

    return {
      transform: {
        orig: this.el.getAttribute("transform"),
        value: r.getAttribute("transform"),
        scaleX: c ? d + y : y,
        scaleY: u ? b + v : v,
        bBox: p
      },
      parentScale: Y(a.getAttribute("transform") || "scale(1 1)").scale,
      cw: d,
      ch: b,
      center: {
        x: m.left + d / 2,
        y: m.top + b / 2,
        left: y + d / 2,
        top: v + b / 2
      },
      left: T(y, o.x),
      top: T(v, o.y),
      coordX: g.left,
      coordY: g.top,
      factor: s,
      pressang: _,
      refang: f,
      revX: c,
      revY: u,
      handle: i,
      onTopEdge: k,
      onLeftEdge: M,
      onRightEdge: A,
      onBottomEdge: E
    };
  }

  function st(t, e, r, n) {
    var o = this.storage,
        a = o.box,
        i = o.handles,
        s = o.snap,
        c = o.left,
        u = o.top,
        l = o.coordX,
        h = o.coordY,
        f = o.refang,
        p = o.factor,
        d = o.cw,
        b = o.ch,
        y = o.transform,
        v = this.el,
        g = Number(a.getAttribute("width")),
        m = Number(a.getAttribute("height"));

    if (null !== t && (g = j(t, s.x)), null !== e && (m = j(e, s.y)), !(Math.abs(g) < 2 || Math.abs(m) < 2)) {
      var w = N(c, u, g, m, f, r, n),
          x = u - (w.top - h);
      ht(a, i, {
        x: c - (w.left - l),
        y: x,
        width: g,
        height: m,
        angle: f * p
      });

      var _ = g / d,
          k = m / b;

      this.storage.cached = {
        scaleX: _,
        scaleY: k,
        diffX: g - d,
        diffY: m - b,
        revX: r,
        revY: n
      };
      var M = y.scaleX,
          A = y.scaleY,
          E = "translate(".concat(M, " ").concat(A, ") scale(").concat(_, " ").concat(k, ") translate(").concat(-M, " ").concat(-A, ")");
      if ("g" === v.tagName.toLowerCase()) v.childNodes.forEach(function (t) {
        if (1 === t.nodeType) {
          var e = t.getAttribute("transform") || "";
          t.setAttribute("transform", e.replace(ot, E));
        }
      });else {
        var O = v.getAttribute("transform") || "";
        v.setAttribute("transform", O.replace(ot, E));
      }
    }
  }

  function ct(t, e) {
    var r = this.storage,
        n = r.snap,
        o = r.transform,
        a = r.wrapper,
        i = o.orig || "",
        s = j(e, n.x),
        c = j(t, n.y),
        u = "translate(".concat(s, " ").concat(c, ")"),
        l = i.replace(/translate\(.+\)|^/, u);
    a.setAttribute("transform", u), this.el.setAttribute("transform", l);
  }

  function ut(t) {
    var e = this.storage,
        r = e.refang,
        n = e.snap,
        o = e.center,
        a = e.box,
        i = e.handles,
        s = j(r + t, n.angle),
        c = "rotate(".concat(s * pt, " ").concat(o.left, " ").concat(o.top, ")");
    a.setAttribute("transform", c), Object.keys(i).forEach(function (t) {
      i[t].setAttribute("transform", c);
    }), "g" === this.el.tagName.toLowerCase() ? this.el.childNodes.forEach(function (t) {
      1 === t.nodeType && t.setAttribute("transform", c);
    }) : this.el.setAttribute("transform", c);
  }

  function lt(t) {
    return document.createElementNS("http://www.w3.org/2000/svg", t);
  }

  function ht(e, r, t) {
    var n = t.x,
        o = t.y,
        a = t.width,
        i = t.height,
        s = t.angle,
        c = a / 2,
        u = i / 2,
        l = "rotate(".concat(s * pt, " ").concat(n + c, " ").concat(o + u, ")"),
        h = {
      tl: [n, o],
      ml: [n, o + u],
      bl: [n, o + i],
      tc: [n + c, o],
      tr: [n + a, o],
      mr: [n + a, o + u],
      br: [n + a, o + i],
      bc: [n + c, o + i],
      rotator: [n + c, o - rt + (i < 0 ? i : 0)]
    },
        f = {
      x: n += a < 0 ? a : 0,
      y: o += i < 0 ? i : 0,
      width: Math.abs(a),
      height: Math.abs(i),
      transform: l
    };
    Object.keys(f).forEach(function (t) {
      e.setAttribute(t, f[t]);
    }), Object.keys(r).forEach(function (t) {
      var e = r[t];
      e.setAttribute("cx", h[t][0]), e.setAttribute("cy", h[t][1]), e.setAttribute("transform", l);
    });
  }

  function bt(t) {
    return t.match(nt).reduce(function (t, e, r, n) {
      return r % 2 == 0 && t.push(n.slice(r, r + 2)), t;
    }, []);
  }

  function ft(t) {
    return (ft = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
    })(t);
  }

  function yt(t, e) {
    for (var r = 0; r < e.length; r++) {
      var n = e[r];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
    }
  }

  var vt = function () {
    function r(t, e) {
      !function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }(this, r), this.el = t, this.options = e || {}, this.storage = null, this._onMouseDown = this._onMouseDown.bind(this), this._onTouchStart = this._onTouchStart.bind(this), this._onMouseMove = this._onMouseMove.bind(this), this._onTouchMove = this._onTouchMove.bind(this), this._onMouseUp = this._onMouseUp.bind(this), this._onTouchEnd = this._onTouchEnd.bind(this), this.enable();
    }

    var t, e, n;
    return t = r, (e = [{
      key: "enable",
      value: function value() {
        X(this.storage) ? this._init() : s("Already enabled");
      }
    }, {
      key: "disable",
      value: function value() {
        (function () {
          if (X(this.storage)) return;
          O(this.el).off("mousedown", this._onMouseDown).off("touchstart", this._onTouchStart), delete this.storage;
        }).call(this);
      }
    }, {
      key: "_init",
      value: function value() {
        (function () {
          var t = O(this.el),
              e = this.options,
              r = e.style,
              p = e.drop,
              n = e.appendTo,
              o = e.stack,
              a = {
            width: t.css("width"),
            height: t.css("height"),
            margin: 0,
            padding: 0,
            position: "absolute"
          };
          X(r) ? (a.border = "#32B5FE 1px dashed", a.background = "transparent", a.transform = "none") : "object" === ft(r) && (a = function (o) {
            for (var t = 1; t < arguments.length; t++) {
              var a = null != arguments[t] ? arguments[t] : {},
                  e = Object.keys(a);
              "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(a).filter(function (t) {
                return Object.getOwnPropertyDescriptor(a, t).enumerable;
              }))), e.forEach(function (t) {
                var e, r, n;
                e = o, n = a[r = t], r in e ? Object.defineProperty(e, r, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                }) : e[r] = n;
              });
            }

            return o;
          }({}, r));

          var i = function i() {};

          f(p) && (i = function i(t) {
            var e,
                r,
                n,
                o,
                a,
                i,
                s,
                c,
                u = this.storage,
                l = u.clone,
                h = u.stack,
                f = !0;
            d(h) && (e = h, r = S(l), n = r.top, o = r.left, a = S(e), i = a.top, s = a.left, c = O(e), f = !(n < i || n > i + c.css("height") || o < s || o > s + c.css("width"))), f && p.call(this, t, this.el, l);
          });
          var s = {
            onDrop: i,
            options: this.options,
            css: a,
            parent: O(n || "body")[0],
            stack: O(o)[0]
          };
          this.storage = s, t.on("mousedown", this._onMouseDown).on("touchstart", this._onTouchStart);
        }).call(this);
      }
    }, {
      key: "_draw",
      value: function value(t) {
        (function (c) {
          var u = this;
          !function t() {
            var e = u.storage;
            e.frameId = z(t);
            var r = e.doDraw,
                n = e.pageX,
                o = e.pageY,
                a = e.cx,
                i = e.cy;
            if (!r) return;
            e.doDraw = !1;
            var s = "translate(".concat(n - a, "px, ").concat(o - i, "px)");
            O(c).css({
              transform: s,
              webkitTranform: s,
              mozTransform: s,
              msTransform: s,
              otransform: s
            });
          }();
        }).call(this, t);
      }
    }, {
      key: "_onMouseDown",
      value: function value(t) {
        gt.call(this, t), O(document).on("mousemove", this._onMouseMove).on("mouseup", this._onMouseUp);
      }
    }, {
      key: "_onMouseMove",
      value: function value(t) {
        mt.call(this, t);
      }
    }, {
      key: "_onMouseUp",
      value: function value(t) {
        wt.call(this, t), O(document).off("mousemove", this._onMouseMove).off("mouseup", this._onMouseUp);
      }
    }, {
      key: "_onTouchStart",
      value: function value(t) {
        gt.call(this, t.touches[0]), O(document).on("touchmove", this._onTouchMove).on("touchend", this._onTouchEnd);
      }
    }, {
      key: "_onTouchMove",
      value: function value(t) {
        mt.call(this, t.touches[0]);
      }
    }, {
      key: "_onTouchEnd",
      value: function value(t) {
        0 === t.touches.length && wt.call(this, t.changedTouches[0]), O(document).off("touchmove", this._onTouchMove).off("touchend", this._onTouchEnd);
      }
    }]) && yt(t.prototype, e), n && yt(t, n), r;
  }();

  function gt(t) {
    t.stopImmediatePropagation && t.stopImmediatePropagation();
    var e = this.storage,
        r = this.el,
        n = e.options,
        o = e.parent,
        a = e.css,
        i = "clone" === n.style ? r.cloneNode(!0) : document.createElement("div"),
        s = S(o);
    a.left = "".concat(t.pageX - s.left, "px"), a.top = "".concat(t.pageY - s.top, "px"), O(i).css(a), e.pageX = t.pageX, e.pageY = t.pageY, e.cx = t.pageX, e.cy = t.pageY, e.clone = i, O(o)[0].appendChild(i), this._draw(i);
  }

  function mt(t) {
    t.preventDefault && t.preventDefault();
    var e = this.storage;
    e.pageX = t.pageX, e.pageY = t.pageY, e.doDraw = !0, e.doMove = !0;
  }

  function wt(t) {
    t.stopImmediatePropagation && t.stopImmediatePropagation();
    var e = this.storage,
        r = e.clone,
        n = e.frameId,
        o = e.onDrop;
    e.doDraw = !1, a(n), X(r) || (o.call(this, t), r.parentNode.removeChild(r), delete e.clone);
  }

  function xt(t) {
    return (xt = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
    })(t);
  }

  function _t(t, e) {
    for (var r = 0; r < e.length; r++) {
      var n = e[r];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
    }
  }

  function kt(t, e) {
    return !e || "object" !== xt(e) && "function" != typeof e ? function (t) {
      if (void 0 !== t) return t;
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }(t) : e;
  }

  function Mt(t) {
    return (Mt = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    })(t);
  }

  function At(t, e) {
    return (At = Object.setPrototypeOf || function (t, e) {
      return t.__proto__ = e, t;
    })(t, e);
  }
  /* @license
   * Move/Rotate/Resize tool
   * Released under the MIT license, 2018-2019
   * nichollascarter@gmail.com
  */


  var Et = function (t) {
    function e(t) {
      return function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }(this, e), kt(this, Mt(e).call(this, t));
    }

    var r, n, o;
    return function (t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), e && At(t, e);
    }(e, h), r = e, (n = [{
      key: "drag",
      value: function value(t) {
        return function (e) {
          if (this.length) {
            var r = new u();
            return i.call(this, function (t) {
              return t instanceof SVGElement ? new at(t, e, r) : new F(t, e, r);
            });
          }
        }.call(this, t);
      }
    }, {
      key: "clone",
      value: function value(t) {
        return function (e) {
          if (this.length) return i.call(this, function (t) {
            return new vt(t, e);
          });
        }.call(this, t);
      }
    }]) && _t(r.prototype, n), o && _t(r, o), e;
  }();

  e["default"] = function (t) {
    return new Et(t);
  };
}])["default"];

/***/ }),

/***/ "./src/style/subjx.css":
/*!*****************************!*\
  !*** ./src/style/subjx.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../node_modules/postcss-loader/src??ref--5-2!./subjx.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/style/subjx.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlL3N1Ymp4LmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXIvZG9tSGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvYm94ZXMvZmlyc3QucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvdGVzdC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbnRlcnNlY3Rpb24vaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vU3Viangvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly9TdWJqeC9zcmMvanMvY29yZS91dGlsL3V0aWwuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly9TdWJqeC9zcmMvanMvY29yZS9vYnNlcnZlci9PYnNlcnZlci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovL1N1Ymp4L3NyYy9qcy9jb3JlL2hlbHBlci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovL1N1Ymp4L3NyYy9qcy9jb3JlL3V0aWwvY3NzLXV0aWwuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly9TdWJqeC9zcmMvanMvY29yZS90cmFuc2Zvcm0vY29tbW9uLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vU3Viangvc3JjL2pzL2NvcmUvdHJhbnNmb3JtL3N1YmplY3QuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly9TdWJqeC9zcmMvanMvY29yZS90cmFuc2Zvcm0vaHRtbC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovL1N1Ymp4L3NyYy9qcy9jb3JlL3RyYW5zZm9ybS9zdmcvcGF0aC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovL1N1Ymp4L3NyYy9qcy9jb3JlL3RyYW5zZm9ybS9zdmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly9TdWJqeC9zcmMvanMvY29yZS90cmFuc2Zvcm0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly9TdWJqeC9zcmMvanMvY29yZS9jbG9uZS9jbG9uZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovL1N1Ymp4L3NyYy9qcy9jb3JlL2Nsb25lL2luZGV4LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vU3Viangvc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS9zdWJqeC5jc3M/ZjJiNCJdLCJuYW1lcyI6WyJnZXRDb29yZHNPZlRvd1JlY3RzIiwiY29udGFpbmVyIiwiZWxlbWVudCIsImRlbHRhIiwiY0hlaWdodCIsIm9mZnNldEhlaWdodCIsImNXaWR0aCIsIm9mZnNldFdpZHRoIiwiaW1nSGVpZ2h0IiwiaW1nV2lkdGgiLCJpbWdMZWZ0Iiwib2Zmc2V0TGVmdCIsImltZ1RvcCIsIm9mZnNldFRvcCIsInJlY3QxIiwiREVMVEEiLCJyZWN0MiIsIiQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJkZ0ltYWdlIiwiZGVmYXVsdEltYWdlIiwic3JjIiwiZHJhZ2dhYmxlVGVzdEltYWdlRmlsZSIsImRlZmF1bHRJbWFnZUZpbGUiLCJDT05UQUlORVJfQk9SREVSIiwiZHJhZ09wdGlvbnMiLCJlYWNoIiwibW92ZSIsInJlc2l6ZSIsInNuYXAiLCJ4IiwieSIsInNldERlZmF1bHRTaXplIiwiZGdDb250cm9scyIsImZvckVhY2giLCJlbCIsImRnRWxlbWVudCIsInN0eWxlIiwibGVmdCIsInRvcCIsImhlaWdodCIsIndpZHRoIiwiY2hlY2tSaWdodFBvc2l0aW9uIiwiaXNSZWN0SW50ZXJzZWN0aW9uIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRyYW5zZm9ybUJveCIsIlN1Ymp4IiwiZHJhZyIsImRyb3AiLCJnZXRWZWN0b3IiLCJlbmQiLCJzdGFydCIsIngxIiwieTEiLCJ4MiIsInkyIiwiZ2V0VmVjdG9yRG90UHJvZHVjdCIsInZlY3RvcjEiLCJ2ZWN0b3IyIiwicm90YXRlOTBWZWN0b3IiLCJ2ZWN0b3IiLCJnZXRSZWN0UHJvZHVjdCIsInJlY3QiLCJlZGdlIiwibGluZSIsIm1hcCIsInBvaW50IiwibGluZTIiLCJTSUdOX0ZVTkNUSU9OUyIsInZlY3RvcnMiLCJwb2ludDEiLCJpIiwiaiIsImxlbmd0aCIsInBvaW50MiIsImV2ZXJ5IiwicmVzMSIsInJlczIiLCJyZXMiLCJmIiwicmVzMVNpZ24iLCJyZXMyU2lnbiIsImwiLCJleHBvcnRzIiwibW9kdWxlcyIsIm1vZHVsZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJPYmplY3QiLCJlbnVtZXJhYmxlIiwidmFsdWUiLCJiaW5kIiwicmVxdWVzdEFuaW1GcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2V0VGltZW91dCIsImNhbmNlbEFuaW1GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwibW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJyZXF1ZXN0SUQiLCJjbGVhclRpbWVvdXQiLCJhcnJTbGljZSIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJhcnJNYXAiLCJ3YXJuIiwiY29uc29sZSIsImlzRGVmIiwidmFsIiwiaXNVbmRlZiIsImlzRnVuYyIsIk9ic2VydmFibGUiLCJfY2xhc3NDYWxsQ2hlY2siLCJ0aGlzIiwib2JzZXJ2ZXJzIiwiZXZlbnROYW1lIiwic3ViIiwib2JzIiwiZGVmaW5lUHJvcGVydHkiLCJwdXNoIiwiZmlsdGVyIiwic3Vic2NyaWJlciIsInNvdXJjZSIsImRhdGEiLCJvYnNlcnZlciIsIm9uTW92ZSIsIm9uUm90YXRlIiwib25SZXNpemUiLCJvbkFwcGx5Iiwib25SZWZyZXNoU3RhdGUiLCJIZWxwZXJfIiwicGFyYW1zIiwiaGVscGVyX2NsYXNzQ2FsbENoZWNrIiwic2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY291bnQiLCJub2RlVHlwZSIsIl90eXBlb2YiLCJpc0FycmF5IiwicHJvcGVydHkiLCJwcm9wIiwibWV0aG9kcyIsInNldFN0eWxlIiwib3B0aW9ucyIsIm9iaiIsImxlbiIsIl9zZXRTdHlsZSIsImdldFN0eWxlIiwiY3VycmVudFN0eWxlIiwiZGVmYXVsdFZpZXciLCJnZXRDb21wdXRlZFN0eWxlIiwiX2dldFN0eWxlIiwiYXBwbHkiLCJjYWxsIiwiYXJndW1lbnRzIiwibm9kZSIsInNlbCIsIkhlbHBlciIsImZuIiwiYXJyIiwiX2xvb3AiLCJpbmRleCIsImV2ZW50cyIsImF0dGFjaEV2ZW50IiwibGlzdGVuZXJEZWxlZ2F0ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkZXRhY2hFdmVudCIsIl9zZWwiLCJldnQiLCJoYW5kbGVyIiwiYWN0IiwiZG9pdCIsImV2ZW50IiwidCIsInRhcmdldCIsIm1hdGNoZXMiLCJwYXJlbnROb2RlIiwiZ2V0T2Zmc2V0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZ2V0VHJhbnNmb3JtIiwiY3NzIiwicGFyc2VUcmFuc2Zvcm0iLCJhIiwiYiIsIm1hdGNoIiwiYyIsInNoaWZ0IiwiTnVtYmVyIiwiaXRlbSIsInBhcnNlTWF0cml4IiwidHJhbnNmb3JtIiwicGFyc2VGbG9hdCIsImFkZENsYXNzIiwiY2xzIiwiY2xhc3NMaXN0IiwiaW5kZXhPZiIsImFkZCIsInNwbGl0IiwiY2wiLCJ1bml0UkUiLCJSQUQiLCJNYXRoIiwiUEkiLCJERUciLCJyZWNhbGNQb2ludCIsImNlbnRlclgiLCJjZW50ZXJZIiwiYW5nbGUiLCJuZXdDZW50ZXJYIiwibmV3Q2VudGVyWSIsIm9sZENvb3JkcyIsImdldFJvdGF0ZWRQb2ludCIsImNvb3JkcyIsIm54IiwibnkiLCJyZXNYIiwiZmxvYXRUb0ZpeGVkIiwicmVzWSIsInNuYXBUb0dyaWQiLCJyZXN1bHQiLCJzbmFwQ2FuZGlkYXRlIiwiZ3JpZFNpemUiLCJyb3VuZCIsInJvdGF0ZWRUb3BMZWZ0Iiwicm90YXRpb25BbmdsZSIsInJldlgiLCJyZXZZIiwiY3giLCJjeSIsImR4IiwiZHkiLCJyb3RhdGVkVG9wTGVmdEFuZ2xlIiwiYXRhbjIiLCJyYWRpdXMiLCJzcXJ0IiwicG93IiwiY29zIiwic2luIiwicnkiLCJ0b1BYIiwicGFyZW50IiwidGVzdCIsImZyb21QWCIsInRvVW5pdCIsImdldFVuaXREaW1lbnNpb24iLCJ0b0ZpeGVkIiwiU3ViamVjdCIsInN1YmplY3RfY2xhc3NDYWxsQ2hlY2siLCJjb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsInN0b3JhZ2UiLCJPYiIsIl9vbk1vdXNlRG93biIsIl9vblRvdWNoU3RhcnQiLCJfb25Nb3VzZU1vdmUiLCJfb25Ub3VjaE1vdmUiLCJfb25Nb3VzZVVwIiwiX29uVG91Y2hFbmQiLCJfbG9hZCIsIl9pbml0IiwicmVtb3ZlIiwicmVtb3ZlQ2xhc3MiLCJfZGVzdHJveSIsInJvdGF0ZSIsInN1YnNjcmliZSIsImUiLCJjdHgiLCJhbmltYXRlIiwic3RvcmUiLCJmcmFtZSIsImRvRHJhdyIsImhhbmRsZSIsImhhbmRsZXMiLCJjaCIsImN3IiwicmVmYW5nIiwicHJlc3NhbmciLCJwYWdlWCIsInBhZ2VZIiwiY2VudGVyIiwicGFyZW50U2NhbGUiLCJkb0RyYWciLCJkb1Jlc2l6ZSIsImRvUm90YXRlIiwic2NhbGVYIiwic2NhbGVZIiwibW92ZUVhY2giLCJyZXNpemVFYWNoIiwicm90YXRlRWFjaCIsInBvcyIsImlzIiwiYnIiLCJtciIsInRsIiwibWwiLCJ0ciIsInRjIiwiZG94IiwiZG95IiwiYmwiLCJiYyIsIl9yZXNpemUiLCJub3RpZnkiLCJkaWZmVG9wIiwiZGlmZkxlZnQiLCJfZHJhZyIsInJhZGlhbnMiLCJfcm90YXRlIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwiY29tcHV0ZWQiLCJfY29tcHV0ZSIsImN0cmxLZXkiLCJrZXlzIiwib25SaWdodEVkZ2UiLCJvbkJvdHRvbUVkZ2UiLCJvblRvcEVkZ2UiLCJvbkxlZnRFZGdlIiwiZmFjdG9yIiwicm90YXRvciIsIl9kcmF3IiwicHJldmVudERlZmF1bHQiLCJhY3Rpb24iLCJfYXBwbHkiLCJfc3RhcnQiLCJvbiIsInRvdWNoZXMiLCJfbW92aW5nIiwiX2VuZCIsIm9mZiIsImNoYW5nZWRUb3VjaGVzIiwidyIsImgiLCJhY3Rpb25OYW1lIiwiaHRtbF9EcmFnZ2FibGUiLCJzdWJqZWN0X1N1YmplY3QiLCJrZXkiLCJjcmVhdGVFbGVtZW50IiwiX3BhcmVudCIsImNvbnRyb2xzIiwiaW5uZXJIVE1MIiwiX2NvbnRyb2xzIiwiX2NvbnRhaW5lciIsImFzc2lnbiIsImZpbmQiLCJwcm9jZXNzTW92ZSIsImN0cmxzIiwicHJvY2Vzc1JvdGF0ZSIsInByb2Nlc3NSZXNpemUiLCJfY29tcHV0ZTIiLCJkaW1lbnMiLCJtYXRyaXgiLCJjYWNoZWQiLCJwSCIsIl9lbCIsInJlY2FsYyIsInRyX29mZiIsIl90aGlzJHN0b3JhZ2UiLCJzdHlsZUxpc3QiLCJjb29yZFgiLCJ0bF9vZmYiLCJvZmZzZXRfIiwiY2VudGVyX3giLCJjZW50ZXJfeSIsImNvb3JkWSIsInJlZnJlc2hTdGF0ZSIsInJlc3VsdFkiLCJjb25jYXQiLCJtYXRyaXhUb0NTUyIsImpvaW4iLCJ3ZWJraXRUcmFuZm9ybSIsIm1velRyYW5zZm9ybSIsImNtZCIsInNlcFJFIiwidXBDbWQiLCJyZWxhdGl2ZSIsInBhdGgiLCJsYXN0SW5kZXgiLCJpc05hTiIsInNlcmlhbGl6ZWQiLCJnZXRGYWN0b3IiLCJkaWZmIiwiTUlOX1NJWkUiLCJmbG9hdFJFIiwidHJhbnNsYXRlUkUiLCJEcmFnZ2FibGVTVkciLCJhcHBlbmRDaGlsZCIsImdldEF0dHJpYnV0ZSIsImF0dHJzIiwiYm94Iiwic2V0QXR0cmlidXRlIiwiZ3JvdXAiLCJ3cmFwcGVyIiwiY3JlYXRlU1ZHIiwiY3JlYXRlSGFuZGxlciIsIml0ZW1zIiwiciIsImZpbGwiLCJhcHBseVRyYW5zbGF0ZSIsInRyYW5zbGF0ZSIsImdldEJCb3giLCJuZXdXaWR0aCIsIm5ld0hlaWdodCIsInJlc3VsdFgiLCJhcHBseVRyYW5zZm9ybVRvSGFuZGxlcyIsImVscyIsInJlbW92ZUF0dHJpYnV0ZSIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsInJlc1gxIiwicmVzWDIiLCJfcmVzWCIsInJlc1kxIiwicG9pbnRzIiwicGFyc2VQb2ludHMiLCJ2YWx1ZXMiLCJmaXJzdENvbW1hbmQiLCJzdHIiLCJkaWZmWCIsImlzR3JvdXAiLCJjaGlsZE5vZGVzIiwiZGlmZlkiLCJiQm94IiwiYm94WCIsImJveFkiLCJib3hXIiwiYm94SCIsImZpeGVkWCIsImZpeGVkWSIsImJhc2VEYXRhIiwic2V0Q29vcmQiLCJfcmVjYWxjUG9pbnQiLCJfcmVjYWxjUG9pbnQyIiwiX3Jlc1gyIiwiYWJzIiwiX3giLCJfcmVzWTMiLCJfcmVjYWxjUG9pbnQzIiwicngiLCJfcmVjYWxjUG9pbnQ0IiwiX3Jlc1g0IiwicmVzWDFfIiwicmVzWTFfIiwiX3JlY2FsY1BvaW50NSIsInJlc1kyIiwicmVzWTJfIiwiX3JlY2FsY1BvaW50NiIsInJlc1gyXyIsIl9yZWNhbGNQb2ludDciLCJwYXJzZVBhdGgiLCJmYWN0b3JYIiwiZmFjdG9yWSIsIl92YWx1ZXMiLCJuZXdSeCIsIm5ld1J5Iiwic2V0UmVsYXRpdmVDb29yZCIsIl9wYXJhbXMiLCJsYXJnZV9hcmNfZmxhZyIsIl9zbGljZWRUb0FycmF5IiwiX3ZhbHVlczIiLCJfeSIsImZhY3RvclgxIiwiZmFjdG9yWTIiLCJfb2JqZWN0U3ByZWFkIiwicmVzWTMiLCJfcmVzWSIsIl9yZXNZMiIsIl94MiIsIl92YWx1ZXMzIiwiX3g0IiwiX3ZhbHVlczQiLCJfeTQiLCJfZmFjdG9yWTUiLCJfcmVjYWxjUG9pbnQ5IiwiX3JlY2FsY1BvaW50MTAiLCJfcmVzWTUiLCJfeDYiLCJfdmFsdWVzNSIsIl95NiIsIl9mYWN0b3JZNyIsIl9yZWNhbGNQb2ludDExIiwiX3JlY2FsY1BvaW50MTIiLCJfcmVzWTciLCJfcmVzWDYiLCJjX2xlZnQiLCJjX3RvcCIsImJveE9mZnNldCIsIm9yaWciLCJfdGhpcyRzdG9yYWdlMiIsIl90aGlzJHN0b3JhZ2U0IiwicHRYIiwic2NhbGVTdHJpbmciLCJvbGRUcmFuc2Zvcm0iLCJ0cmFuc2Zvcm1TdHJpbmciLCJuZXdUcmFuc2Zvcm0iLCJvcmlnaW5UcmFuc2Zvcm0iLCJoZGwiLCJjcmVhdGVFbGVtZW50TlMiLCJoYWxmSGVpZ2h0IiwiaGFsZldpZHRoIiwiYm94QXR0cnMiLCJwdHMiLCJhcnJheSIsIkNsb25lIiwiY2xvbmVfY2xhc3NDYWxsQ2hlY2siLCJlbmFibGUiLCJhTGVmdCIsImJUb3AiLCJhcHBlbmRUbyIsIm1hcmdpbiIsInBhZGRpbmciLCJwb3NpdGlvbiIsIl9jdHgkb3B0aW9ucyIsImJvcmRlciIsImJhY2tncm91bmQiLCJvbkRyb3AiLCJjbG9uZV90eXBlb2YiLCJjbG9uZSIsIl9nZXRPZmZzZXQiLCJfZ2V0T2Zmc2V0MiIsImJMZWZ0IiwiX2IiLCJzdGFjayIsIl9jbG9uZSIsImFUb3AiLCJtc1RyYW5zZm9ybSIsIm90cmFuc2Zvcm0iLCJfbW92ZSIsInJlbW92ZUNoaWxkIiwiZnJhbWVJZCIsImpzX2NsYXNzQ2FsbENoZWNrIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztB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RTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0EsS0FBSyxLQUF3QyxFQUFFLEVBRTdDOztBQUVGLFFBQVEsc0JBQWlCO0FBQ3pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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QUFBQSxnRUVuUGhCO0FBQUE7QUFBQTtBQUFBLFFGbVBnQkEsR0VuUGhCLENGbVBnQkE7QUVuUGhCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7QUFNd0I7QUFBQTtBQUFBO0FBQUE7QUFLaEJDLE9BTGdCLENBS0h4WCxJQUxHLEVBS1Q3RyxDQUxTLEdBS1RBLDZCQUxTO0FBS1RBOztBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQSxpQkFHQThkLENBSEE5ZCxFQUdBOGQsTUFBWTtBQUN0QjNMLGlCQURzQjtBQUN0QkE7QUFBQUEsZUhMUTtBQUNKLGNBTkQ5TixXQU1DLEVBTkRBO0FBT0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRlEsQ0FFUixJQUZRLENBRVIsSUFGUSxFQUVSLENBRlEsQ0dLUjhOO0FISEE7QUdFc0IsS0FBWjJMLEVBVkt4WTtBQUFBQTtBQWNMM0M7QUFDWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVczQyxJQUFYLENBQWlCdUYsSUFBakI7QUFBQTtBQWZnQkQsS0FVTHdZLE1BS1gsa0JBUlc5ZCxFQVFYLGFBUldBLEVBUVgsQ0FSV0E7QUFRWCxHQWJvQjs7QUFhcEI7QUFBQTtBQUFBO0FBQUEsQ2J3REosQzs7Ozs7Ozs7Ozs7O0FjakZBLGNBQWMsbUJBQU8sQ0FBQyxrT0FBNEg7O0FBRWxKLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxzR0FBbUQ7O0FBRXhFOztBQUVBLEdBQUcsS0FBVSxFQUFFLEUiLCJmaWxlIjoibWFpbi41YWFmNDQzNDI5YTgyMmVkYjc0MS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikodHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5kZy13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiBzdGF0aWM7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi5kZy1jb250cm9scyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDIxNDc0ODM2NDc7XFxuICBib3JkZXI6IDFweCBkYXNoZWQgIzMyYjVmZTtcXG4gIGN1cnNvcjogbW92ZTtcXG59XFxuLmRnLWhkbCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgd2lkdGg6IDEwcHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzMyYjVmZTtcXG4gIG1hcmdpbi10b3A6IC02cHg7XFxuICBtYXJnaW4tbGVmdDogLTZweDtcXG59XFxuLmRnLFxcbi5kZy1jb250cm9scyxcXG4uZGctaGRsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuLmRnLWhkbC10IHtcXG4gIHRvcDogMDtcXG59XFxuLmRnLWhkbC1tIHtcXG4gIHRvcDogNTAlO1xcbn1cXG4uZGctaGRsLWIge1xcbiAgdG9wOiAxMDAlO1xcbn1cXG4uZGctaGRsLWwge1xcbiAgbGVmdDogMDtcXG59XFxuLmRnLWhkbC1jIHtcXG4gIGxlZnQ6IDUwJTtcXG59XFxuLmRnLWhkbC1yIHtcXG4gIGxlZnQ6IDEwMCU7XFxufVxcbi5kZy1yb3RhdG9yIHtcXG4gIHRvcDogLTI1cHg7XFxuICBsZWZ0OiA1MCU7XFxufVxcbmh0bWwsXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uZHJhZ2dhYmxlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDEyLjUlO1xcbiAgdG9wOiAxMi41JTtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogNy41dnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufVxcbi5kZy1yb3RhdG9yIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5jb250YWluZXIge1xcbiAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG4gIHdpZHRoOiA4LjJ2dztcXG4gIGhlaWdodDogOC4ydnc7XFxuXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiAxOS4zdnc7XFxuICB0b3A6IDEzLjh2dztcXG5cXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTcuN2RlZyk7XFxuXFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC03LjdkZWcpO1xcbn1cXG4jZGVmYXVsdCB7XFxuICB3aWR0aDogNTUlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG4uZGctY29udHJvbHMge1xcbiAgdG9wOiAwcHg7XFxuICBsZWZ0OiAwLjAwMTQ4NzE4cHg7XFxuICB3aWR0aDogNTUlO1xcbiAgaGVpZ2h0OiAxNTRweDtcXG59XFxuLmRyYWdnYWJsZSB7XFxuICB3aWR0aDogOC4ydnc7XFxuICBoZWlnaHQ6IDguMnZ3O1xcbiAgdG9wOiAwcHg7XFxuICBsZWZ0OiAwLjAwMTQ4NzE4cHg7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gICNkZWZhdWx0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIH1cXG4gIC5jb250YWluZXIge1xcbiAgICB3aWR0aDogMTQuNnZ3O1xcbiAgICBoZWlnaHQ6IDE1LjN2dztcXG4gICAgbGVmdDogMzUuMnZ3O1xcbiAgICB0b3A6IDI1dnc7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcInN1Ymp4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixRQUFRO0VBQ1IsU0FBUztFQUNULHFCQUFpQjtNQUFqQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsTUFBTTtFQUNOLE9BQU87RUFDUCxtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUNBOzs7RUFHRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLE1BQU07QUFDUjtBQUNBO0VBQ0UsUUFBUTtBQUNWO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLE9BQU87QUFDVDtBQUNBO0VBQ0UsU0FBUztBQUNYO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7QUFDQTs7RUFFRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7RUFDYix3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osYUFBYTs7RUFFYixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7O0VBRVgsa0NBQTBCOztVQUExQiwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7QUFDZjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixRQUFRO0VBQ1Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsY0FBYztJQUNkLFlBQVk7SUFDWixTQUFTO0VBQ1g7QUFDRlwiLFwiZmlsZVwiOlwic3VianguY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5kZy13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiBzdGF0aWM7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtby11c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuLmRnLWNvbnRyb2xzIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMjE0NzQ4MzY0NztcXG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjMzJiNWZlO1xcbiAgY3Vyc29yOiBtb3ZlO1xcbn1cXG4uZGctaGRsIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB3aWR0aDogMTBweDtcXG4gIGhlaWdodDogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMzJiNWZlO1xcbiAgbWFyZ2luLXRvcDogLTZweDtcXG4gIG1hcmdpbi1sZWZ0OiAtNnB4O1xcbn1cXG4uZGcsXFxuLmRnLWNvbnRyb2xzLFxcbi5kZy1oZGwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG4uZGctaGRsLXQge1xcbiAgdG9wOiAwO1xcbn1cXG4uZGctaGRsLW0ge1xcbiAgdG9wOiA1MCU7XFxufVxcbi5kZy1oZGwtYiB7XFxuICB0b3A6IDEwMCU7XFxufVxcbi5kZy1oZGwtbCB7XFxuICBsZWZ0OiAwO1xcbn1cXG4uZGctaGRsLWMge1xcbiAgbGVmdDogNTAlO1xcbn1cXG4uZGctaGRsLXIge1xcbiAgbGVmdDogMTAwJTtcXG59XFxuLmRnLXJvdGF0b3Ige1xcbiAgdG9wOiAtMjVweDtcXG4gIGxlZnQ6IDUwJTtcXG59XFxuaHRtbCxcXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5kcmFnZ2FibGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMTIuNSU7XFxuICB0b3A6IDEyLjUlO1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiA3LjV2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG59XFxuLmRnLXJvdGF0b3Ige1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmNvbnRhaW5lciB7XFxuICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgd2lkdGg6IDguMnZ3O1xcbiAgaGVpZ2h0OiA4LjJ2dztcXG5cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IDE5LjN2dztcXG4gIHRvcDogMTMuOHZ3O1xcblxcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTcuN2RlZyk7XFxufVxcbiNkZWZhdWx0IHtcXG4gIHdpZHRoOiA1NSU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbi5kZy1jb250cm9scyB7XFxuICB0b3A6IDBweDtcXG4gIGxlZnQ6IDAuMDAxNDg3MThweDtcXG4gIHdpZHRoOiA1NSU7XFxuICBoZWlnaHQ6IDE1NHB4O1xcbn1cXG4uZHJhZ2dhYmxlIHtcXG4gIHdpZHRoOiA4LjJ2dztcXG4gIGhlaWdodDogOC4ydnc7XFxuICB0b3A6IDBweDtcXG4gIGxlZnQ6IDAuMDAxNDg3MThweDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xcbiAgI2RlZmF1bHQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgfVxcbiAgLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxNC42dnc7XFxuICAgIGhlaWdodDogMTUuM3Z3O1xcbiAgICBsZWZ0OiAzNS4ydnc7XFxuICAgIHRvcDogMjV2dztcXG4gIH1cXG59XFxuXCJdfV0pO1xuXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gJ0BtZWRpYSAnICsgaXRlbVsyXSArICd7JyArIGNvbnRlbnQgKyAnfSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgIH1cbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tpXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gJygnICsgaXRlbVsyXSArICcpIGFuZCAoJyArIG1lZGlhUXVlcnkgKyAnKSc7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLyc7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG4gIHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldENvb3Jkc09mVG93UmVjdHMoeyBjb250YWluZXIsIGVsZW1lbnQsIGRlbHRhIH0pIHtcbiAgY29uc3QgY0hlaWdodCA9IGNvbnRhaW5lci5vZmZzZXRIZWlnaHQ7XG4gIGNvbnN0IGNXaWR0aCA9IGNvbnRhaW5lci5vZmZzZXRXaWR0aDtcbiAgY29uc3QgaW1nSGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gIGNvbnN0IGltZ1dpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgY29uc3QgaW1nTGVmdCA9IGVsZW1lbnQub2Zmc2V0TGVmdDtcbiAgY29uc3QgaW1nVG9wID0gZWxlbWVudC5vZmZzZXRUb3A7XG5cbiAgY29uc3QgcmVjdDEgPSBbXG4gICAgW2ltZ0xlZnQsIGltZ1RvcF0sXG4gICAgW2ltZ0xlZnQgKyBpbWdXaWR0aCwgaW1nVG9wXSxcbiAgICBbaW1nTGVmdCArIGltZ1dpZHRoLCBpbWdUb3AgKyBpbWdIZWlnaHRdLFxuICAgIFtpbWdMZWZ0LCBpbWdUb3AgKyBpbWdIZWlnaHRdXG4gIF07XG5cbiAgY29uc3QgREVMVEEgPSBkZWx0YSB8fCAxO1xuICBjb25zdCByZWN0MiA9IFtcbiAgICBbMCArIERFTFRBLCAwICsgREVMVEFdLFxuICAgIFtjV2lkdGggLSBERUxUQSwgMCArIERFTFRBXSxcbiAgICBbY1dpZHRoIC0gREVMVEEsIGNIZWlnaHQgLSBERUxUQV0sXG4gICAgWzAgKyBERUxUQSwgY0hlaWdodCAtIERFTFRBXVxuICBdO1xuXG4gIHJldHVybiB7IHJlY3QxLCByZWN0MiB9O1xufVxuXG5leHBvcnQgY29uc3QgJCA9ICguLi5hcmdzKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKC4uLmFyZ3MpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2ltYWdlcy9ib3hlcy9maXJzdC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvaW1hZ2VzL3Rlc3QuanBnXCI7IiwiaW1wb3J0IFwiLi9zdHlsZS9zdWJqeC5jc3NcIjtcbmltcG9ydCBkcmFnZ2FibGVUZXN0SW1hZ2VGaWxlIGZyb20gXCIuL2ltYWdlcy90ZXN0LmpwZ1wiO1xuaW1wb3J0IGRlZmF1bHRJbWFnZUZpbGUgZnJvbSBcIi4vaW1hZ2VzL2JveGVzL2ZpcnN0LnBuZ1wiO1xuaW1wb3J0IFwiLi9saWIvc3VianhcIjtcblxuaW1wb3J0IHsgJCwgZ2V0Q29vcmRzT2ZUb3dSZWN0cyB9IGZyb20gXCIuL2hlbHBlci9kb21IZWxwZXJcIjtcbmltcG9ydCBpc1JlY3RJbnRlcnNlY3Rpb24gZnJvbSBcIi4vaW50ZXJzZWN0aW9uL2ludGVyc2VjdGlvblwiO1xuXG5jb25zdCBkZ0ltYWdlID0gJChcIiN0ZXN0LWltYWdlXCIpO1xuY29uc3QgZGVmYXVsdEltYWdlID0gJChcIiNkZWZhdWx0XCIpO1xuY29uc3QgY29udGFpbmVyID0gJChcIi5jb250YWluZXJcIik7XG5cbmRnSW1hZ2Uuc3JjID0gZHJhZ2dhYmxlVGVzdEltYWdlRmlsZTtcbmRlZmF1bHRJbWFnZS5zcmMgPSBkZWZhdWx0SW1hZ2VGaWxlO1xuXG5jb25zdCBDT05UQUlORVJfQk9SREVSID0gNDtcblxuY29uc3QgZHJhZ09wdGlvbnMgPSB7XG4gIGVhY2g6IHtcbiAgICBtb3ZlOiB0cnVlLFxuICAgIHJlc2l6ZTogdHJ1ZVxuICB9LFxuICBzbmFwOiB7XG4gICAgeDogMSxcbiAgICB5OiAxXG4gIH1cbn07XG5cbmZ1bmN0aW9uIHNldERlZmF1bHRTaXplKCkge1xuICBjb25zdCBkZ0NvbnRyb2xzID0gJChcIi5kZy1jb250cm9sc1wiKTtcbiAgW2RnSW1hZ2UsIGRnQ29udHJvbHNdLmZvckVhY2goZWwgPT4ge1xuICAgIGlmICghZWwpIHJldHVybjtcbiAgICBjb25zdCBkZ0VsZW1lbnQgPSBlbDtcbiAgICBkZ0VsZW1lbnQuc3R5bGUubGVmdCA9IGAkezAgKyBDT05UQUlORVJfQk9SREVSfXB4YDtcbiAgICBkZ0VsZW1lbnQuc3R5bGUudG9wID0gYCR7MCArIENPTlRBSU5FUl9CT1JERVJ9cHhgO1xuICAgIGRnRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHtjb250YWluZXIub2Zmc2V0SGVpZ2h0IC1cbiAgICAgIDIgKiBDT05UQUlORVJfQk9SREVSfXB4YDtcbiAgICBkZ0VsZW1lbnQuc3R5bGUud2lkdGggPSBgJHtjb250YWluZXIub2Zmc2V0V2lkdGggLSAyICogQ09OVEFJTkVSX0JPUkRFUn1weGA7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjaGVja1JpZ2h0UG9zaXRpb24oKSB7XG4gIGNvbnN0IHsgcmVjdDEsIHJlY3QyIH0gPSBnZXRDb29yZHNPZlRvd1JlY3RzKHtcbiAgICBjb250YWluZXIsXG4gICAgZWxlbWVudDogZGdJbWFnZSxcbiAgICBkZWx0YTogMTBcbiAgfSk7XG4gIGlmIChpc1JlY3RJbnRlcnNlY3Rpb24ocmVjdDEsIHJlY3QyKSkgcmV0dXJuO1xuICBzZXREZWZhdWx0U2l6ZSgpO1xufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuICBjb25zdCB0cmFuc2Zvcm1Cb3ggPSB3aW5kb3cuU3ViangoZGdJbWFnZSk7XG4gIHNldERlZmF1bHRTaXplKCk7XG4gIHRyYW5zZm9ybUJveC5kcmFnKHsgLi4uZHJhZ09wdGlvbnMsIGRyb3A6IGNoZWNrUmlnaHRQb3NpdGlvbiB9KTtcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gIGNoZWNrUmlnaHRQb3NpdGlvbigpO1xufSk7XG4iLCJmdW5jdGlvbiBnZXRWZWN0b3IoZW5kLCBzdGFydCkge1xuICBjb25zdCBbeDEsIHkxXSA9IGVuZDtcbiAgY29uc3QgW3gyLCB5Ml0gPSBzdGFydDtcbiAgcmV0dXJuIFt4MSAtIHgyLCB5MSAtIHkyXTtcbn1cblxuZnVuY3Rpb24gZ2V0VmVjdG9yRG90UHJvZHVjdCh2ZWN0b3IxLCB2ZWN0b3IyKSB7XG4gIGNvbnN0IFt4MSwgeTFdID0gdmVjdG9yMTtcbiAgY29uc3QgW3gyLCB5Ml0gPSB2ZWN0b3IyO1xuICByZXR1cm4geDEgKiB4MiArIHkyICogeTE7XG59XG5cbmZ1bmN0aW9uIHJvdGF0ZTkwVmVjdG9yKHZlY3Rvcikge1xuICBjb25zdCBbeCwgeV0gPSB2ZWN0b3I7XG4gIHJldHVybiBbLXksIHhdO1xufVxuXG5mdW5jdGlvbiBnZXRSZWN0UHJvZHVjdChyZWN0LCBlZGdlLCBsaW5lKSB7XG4gIHJldHVybiByZWN0Lm1hcChwb2ludCA9PiB7XG4gICAgaWYgKHBvaW50WzBdID09PSBlZGdlWzBdICYmIHBvaW50WzBdID09PSBlZGdlWzFdKSByZXR1cm4gMDtcbiAgICBjb25zdCBsaW5lMiA9IGdldFZlY3RvcihlZGdlLCBwb2ludCk7XG4gICAgcmV0dXJuIGdldFZlY3RvckRvdFByb2R1Y3QobGluZTIsIGxpbmUpO1xuICB9KTtcbn1cblxuY29uc3QgU0lHTl9GVU5DVElPTlMgPSBbeCA9PiB4ID49IDAsIHggPT4geCA8PSAwXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNSZWN0SW50ZXJzZWN0aW9uKHJlY3QxLCByZWN0Mikge1xuICBjb25zdCB2ZWN0b3JzID0gcmVjdDEubWFwKChwb2ludDEsIGksIHJlY3QpID0+IHtcbiAgICBjb25zdCBqID0gKGkgKyAxKSAlIHJlY3QubGVuZ3RoO1xuICAgIGNvbnN0IHBvaW50MiA9IHJlY3Rbal07XG4gICAgY29uc3QgdmVjdG9yID0gZ2V0VmVjdG9yKHBvaW50MSwgcG9pbnQyKTtcbiAgICBjb25zdCBsaW5lID0gcm90YXRlOTBWZWN0b3IodmVjdG9yKTtcbiAgICByZXR1cm4geyBsaW5lLCBlZGdlOiBwb2ludDIgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIHZlY3RvcnMuZXZlcnkodmVjdG9yID0+IHtcbiAgICBjb25zdCB7IGxpbmUsIGVkZ2UgfSA9IHZlY3RvcjtcbiAgICBjb25zdCBbcmVzMSwgcmVzMl0gPSBbcmVjdDEsIHJlY3QyXS5tYXAocmVjdCA9PlxuICAgICAgZ2V0UmVjdFByb2R1Y3QocmVjdCwgZWRnZSwgbGluZSlcbiAgICApO1xuXG4gICAgY29uc3QgW3JlczFTaWduLCByZXMyU2lnbl0gPSBbcmVzMSwgcmVzMl0ubWFwKHJlcyA9PlxuICAgICAgU0lHTl9GVU5DVElPTlMubWFwKGYgPT4gcmVzLmV2ZXJ5KGYpKVxuICAgICk7XG5cbiAgICBpZiAoKHJlczFTaWduWzBdICYmIHJlczJTaWduWzFdKSB8fCAocmVzMVNpZ25bMV0gJiYgcmVzMlNpZ25bMF0pKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9KTtcbn1cbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcbiIsImV4cG9ydCBjb25zdCByZXF1ZXN0QW5pbUZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgICAgbW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgICAgd2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgICAgbXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgICBmdW5jdGlvbihmKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGYsIDEwMDAgLyA2MCk7XHJcbiAgICAgICAgfTtcclxuXHJcbmV4cG9ydCBjb25zdCBjYW5jZWxBbmltRnJhbWUgPSBjYW5jZWxBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICAgIG1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgICAgZnVuY3Rpb24ocmVxdWVzdElEKSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChyZXF1ZXN0SUQpO1xyXG4gICAgICAgIH07XHJcblxyXG5leHBvcnQgY29uc3QgZm9yRWFjaCA9IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLFxyXG4gICAgICAgIGFyclNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLFxyXG4gICAgICAgIGFyck1hcCA9IEFycmF5LnByb3RvdHlwZS5tYXAsXHJcbiAgICAgICAgd2FybiA9IGNvbnNvbGUud2FybjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0RlZih2YWwpIHtcclxuICAgIHJldHVybiB2YWwgIT09IHVuZGVmaW5lZCAmJiB2YWwgIT09IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1VuZGVmKHZhbCkge1xyXG4gICAgcmV0dXJuIHZhbCA9PT0gdW5kZWZpbmVkIHx8IHZhbCA9PT0gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRnVuYyh2YWwpIHtcclxuICAgIHJldHVybiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nO1xyXG59IiwiaW1wb3J0IHsgaXNVbmRlZiB9IGZyb20gXCIuLi91dGlsL3V0aWxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9ic2VydmFibGUge1xyXG4gIFxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSB7fTtcclxuICAgIH1cclxuICBcclxuICAgIHN1YnNjcmliZShldmVudE5hbWUsIHN1Yikge1xyXG5cclxuICAgICAgICBjb25zdCBvYnMgPSB0aGlzLm9ic2VydmVycztcclxuICAgICBcclxuICAgICAgICBpZiAoaXNVbmRlZihvYnNbZXZlbnROYW1lXSkpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9icywgZXZlbnROYW1lLCB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogW11cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvYnNbZXZlbnROYW1lXS5wdXNoKHN1Yik7XHJcbiAgICB9XHJcbiAgXHJcbiAgICB1bnN1YnNjcmliZShmKSB7XHJcbiAgICAgICB0aGlzLm9ic2VydmVycyA9IHRoaXMub2JzZXJ2ZXJzLmZpbHRlcihzdWJzY3JpYmVyID0+IHN1YnNjcmliZXIgIT09IGYpO1xyXG4gICAgfVxyXG5cclxuICAgIG5vdGlmeShldmVudE5hbWUsIHNvdXJjZSwgZGF0YSkge1xyXG4gICAgICAgIGlmIChpc1VuZGVmKHRoaXMub2JzZXJ2ZXJzW2V2ZW50TmFtZV0pKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzW2V2ZW50TmFtZV0uZm9yRWFjaChvYnNlcnZlciA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzb3VyY2UgPT09IG9ic2VydmVyKSByZXR1cm47XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZXZlbnROYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdvbm1vdmUnOlxyXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm9uTW92ZShkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnb25yb3RhdGUnOlxyXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm9uUm90YXRlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBjYXNlICdvbnJlc2l6ZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIub25SZXNpemUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ29uYXBwbHknOlxyXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm9uQXBwbHkoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ29ucmVmcmVzaHN0YXRlJzpcclxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5vblJlZnJlc2hTdGF0ZShkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtcclxuICAgIGFyclNsaWNlLFxyXG4gICAgd2FyblxyXG59IGZyb20gJy4vdXRpbC91dGlsJ1xyXG5cclxuZXhwb3J0IGNsYXNzIEhlbHBlcl8ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtcykge1xyXG5cclxuICAgICAgICBpZiAoIXBhcmFtcykgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgcGFyYW1zID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICBsZXQgc2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHBhcmFtcyk7XHJcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoID0gc2VsZWN0b3IubGVuZ3RoO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjb3VudCA9IDA7IGNvdW50IDwgdGhpcy5sZW5ndGg7IGNvdW50KyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXNbY291bnRdID0gc2VsZWN0b3JbY291bnRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChwYXJhbXMubm9kZVR5cGUgPT09IDEgfHwgcGFyYW1zID09PSBkb2N1bWVudCkge1xyXG4gICAgICAgICAgICB0aGlzWzBdID0gcGFyYW1zO1xyXG4gICAgICAgICAgICB0aGlzLmxlbmd0aCA9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwYXJhbXMgaW5zdGFuY2VvZiBTdWJqeCB8fCB0eXBlb2YgcGFyYW1zID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICB0aGlzLmxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNvdW50ID0gMDsgY291bnQgPCB0aGlzLmxlbmd0aDsgY291bnQrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpc1tjb3VudF0gPSBwYXJhbXNbY291bnRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHBhcmFtcykpIHtcclxuICAgICAgICAgICAgdGhpcy5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjb3VudCA9IDA7IGNvdW50IDwgdGhpcy5sZW5ndGg7IGNvdW50KyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJhbXMubm9kZVR5cGUgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzW2NvdW50XSA9IHBhcmFtc1tjb3VudF07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZW5ndGgrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBjc3MocHJvcGVydHkpIHtcclxuICAgICAgICByZXR1cm4gX2Nzcy5jYWxsKHRoaXMsIHByb3BlcnR5KTtcclxuICAgIH1cclxuICAgIGZpbmQobm9kZSkge1xyXG4gICAgICAgIHJldHVybiBfZmluZC5jYWxsKHRoaXMsIG5vZGUpO1xyXG4gICAgfVxyXG4gICAgZWFjaChmbikge1xyXG4gICAgICAgIHJldHVybiBfZWFjaC5jYWxsKHRoaXMsIGZuKTtcclxuICAgIH1cclxuICAgIG9uKCkge1xyXG4gICAgICAgIHJldHVybiBfb24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgIH1cclxuICAgIG9mZigpIHtcclxuICAgICAgICByZXR1cm4gX29mZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgfVxyXG4gICAgaXMoc2VsZWN0b3IpIHtcclxuICAgICAgICByZXR1cm4gX2lzLmNhbGwodGhpcywgc2VsZWN0b3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBfY3NzKHByb3ApIHtcclxuXHJcbiAgICBjb25zdCBtZXRob2RzID0ge1xyXG4gICAgICAgIHNldFN0eWxlKG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9zZXRTdHlsZSh0aGlzLCBvcHRpb25zKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBnZXRTdHlsZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9nZXRTdHlsZSh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmICh0eXBlb2YgcHJvcCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICByZXR1cm4gbWV0aG9kcy5nZXRTdHlsZS5hcHBseSh0aGlzLCBhcnJTbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcHJvcCA9PT0gJ29iamVjdCcgfHwgIXByb3ApIHtcclxuICAgICAgICByZXR1cm4gbWV0aG9kcy5zZXRTdHlsZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB3YXJuKGBNZXRob2QgJHtwcm9wfSBkb2VzIG5vdCBleGlzdGApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBfZ2V0U3R5bGUob2JqKSB7XHJcblxyXG4gICAgICAgIGxldCBsZW4gPSBvYmoubGVuZ3RoO1xyXG5cclxuICAgICAgICB3aGlsZSAobGVuLS0pIHtcclxuICAgICAgICAgICAgaWYgKG9ialtsZW5dLmN1cnJlbnRTdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9ialtsZW5dLmN1cnJlbnRTdHlsZVtwcm9wXTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5kZWZhdWx0VmlldyAmJiBkb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShvYmpbbGVuXSwgJycpW3Byb3BdO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9ialtsZW5dLnN0eWxlW3Byb3BdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIF9zZXRTdHlsZShvYmosIG9wdGlvbnMpIHtcclxuXHJcbiAgICAgICAgbGV0IGxlbiA9IG9iai5sZW5ndGg7XHJcblxyXG4gICAgICAgIHdoaWxlIChsZW4tLSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBwcm9wZXJ0eSBpbiBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBvYmpbbGVuXS5zdHlsZVtwcm9wZXJ0eV0gPSBvcHRpb25zW3Byb3BlcnR5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JqLnN0eWxlO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBfZWFjaChmbikge1xyXG5cclxuICAgIGNvbnN0IGFyciA9IGFyclNsaWNlLmNhbGwodGhpcywgMCk7XHJcblxyXG4gICAgZm9yIChsZXQgaW5kZXggPSBhcnIubGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgLS1pbmRleCkge1xyXG4gICAgICAgIGxldCBmdW5jID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhcnJbaW5kZXhdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZm4uY2FsbChmdW5jKCkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9maW5kKHNlbCkge1xyXG5cclxuICAgIGxldCBsZW4gPSB0aGlzLmxlbmd0aCxcclxuICAgICAgICBzZWxlY3RvcjtcclxuXHJcbiAgICB3aGlsZSAobGVuLS0pIHtcclxuICAgICAgICBzZWxlY3RvciA9IHRoaXNbbGVuXS5xdWVyeVNlbGVjdG9yQWxsKHNlbCk7XHJcbiAgICAgICAgcmV0dXJuIEhlbHBlcihzZWxlY3Rvcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9vbigpIHtcclxuXHJcbiAgICBsZXQgbGVuID0gdGhpcy5sZW5ndGg7XHJcblxyXG4gICAgd2hpbGUgKGxlbi0tKSB7XHJcblxyXG4gICAgICAgIGlmICghdGhpc1tsZW5dLmV2ZW50cykge1xyXG4gICAgICAgICAgICB0aGlzW2xlbl0uZXZlbnRzID0ge307XHJcbiAgICAgICAgICAgIHRoaXNbbGVuXS5ldmVudHNbYXJndW1lbnRzWzBdXSA9IFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzW2xlbl0uYWRkRXZlbnRMaXN0ZW5lcihhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmF0dGFjaEV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzW2xlbl0uYXR0YWNoRXZlbnQoYG9uJHthcmd1bWVudHNbMF19YCwgYXJndW1lbnRzWzFdKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXNbbGVuXVtgb24ke2FyZ3VtZW50c1swXX1gXSA9IGFyZ3VtZW50c1sxXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMgJiYgdHlwZW9mKGFyZ3VtZW50c1sxXSkgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIGxpc3RlbmVyRGVsZWdhdGUodGhpc1tsZW5dLCBhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxufVxyXG5cclxuZnVuY3Rpb24gX29mZigpIHtcclxuXHJcbiAgICBsZXQgbGVuID0gdGhpcy5sZW5ndGg7XHJcblxyXG4gICAgd2hpbGUgKGxlbi0tKSB7XHJcblxyXG4gICAgICAgIGlmICghdGhpc1tsZW5dLmV2ZW50cykge1xyXG4gICAgICAgICAgICB0aGlzW2xlbl0uZXZlbnRzID0ge307XHJcbiAgICAgICAgICAgIHRoaXNbbGVuXS5ldmVudHNbYXJndW1lbnRzWzBdXSA9IFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXNbbGVuXS5yZW1vdmVFdmVudExpc3RlbmVyKGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuZGV0YWNoRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXNbbGVuXS5kZXRhY2hFdmVudChgb24ke2FyZ3VtZW50c1swXX1gLCBhcmd1bWVudHNbMV0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpc1tsZW5dW2BvbiR7YXJndW1lbnRzWzBdfWBdID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMgJiYgdHlwZW9mKGFyZ3VtZW50c1sxXSkgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIGxpc3RlbmVyRGVsZWdhdGUodGhpc1tsZW5dLCBhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfaXMoc2VsZWN0b3IpIHtcclxuXHJcbiAgICBjb25zdCBfc2VsID0gSGVscGVyKHNlbGVjdG9yKTtcclxuICAgIGxldCBsZW4gPSB0aGlzLmxlbmd0aDtcclxuXHJcbiAgICB3aGlsZSAobGVuLS0pIHtcclxuICAgICAgICBpZiAodGhpc1tsZW5dID09PSBfc2VsW2xlbl0pIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsaXN0ZW5lckRlbGVnYXRlKGVsLCBldnQsIHNlbCwgaGFuZGxlciwgYWN0KSB7XHJcblxyXG4gICAgY29uc3QgZG9pdCA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IHQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgd2hpbGUgKHQgJiYgdCAhPT0gdGhpcykge1xyXG4gICAgICAgICAgICBpZiAodC5tYXRjaGVzKHNlbCkpIHtcclxuICAgICAgICAgICAgICAgIGhhbmRsZXIuY2FsbCh0LCBldmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdCA9IHQucGFyZW50Tm9kZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChhY3QgPT09IHRydWUpIHtcclxuICAgICAgICBpZiAoZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xyXG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2dCwgZG9pdCwgZmFsc2UpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuYXR0YWNoRXZlbnQpIHtcclxuICAgICAgICAgICAgZWwuYXR0YWNoRXZlbnQoYG9uJHtldnR9YCwgZG9pdCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWxbYG9uJHtldnR9YF0gPSBkb2l0O1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnQsIGRvaXQsIGZhbHNlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmRldGFjaEV2ZW50KSB7XHJcbiAgICAgICAgICAgIGVsLmRldGFjaEV2ZW50KGBvbiR7ZXZ0fWAsIGRvaXQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsW2BvbiR7ZXZ0fWBdID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBIZWxwZXIocGFyYW1zKSB7XHJcbiAgICByZXR1cm4gbmV3IEhlbHBlcl8ocGFyYW1zKTtcclxufSIsImV4cG9ydCBmdW5jdGlvbiBnZXRPZmZzZXQobm9kZSkge1xyXG4gICAgcmV0dXJuIG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUcmFuc2Zvcm0oZWwpIHtcclxuICAgIGNvbnN0IHRyYW5zZm9ybSA9IGVsLmNzcygnLXdlYmtpdC10cmFuc2Zvcm0nKSB8fFxyXG4gICAgICAgIGVsLmNzcygnLW1vei10cmFuc2Zvcm0nKSB8fFxyXG4gICAgICAgIGVsLmNzcygnLW1zLXRyYW5zZm9ybScpIHx8XHJcbiAgICAgICAgZWwuY3NzKCctby10cmFuc2Zvcm0nKSB8fFxyXG4gICAgICAgIGVsLmNzcygndHJhbnNmb3JtJykgfHxcclxuICAgICAgICAnbm9uZSc7XHJcbiAgICByZXR1cm4gdHJhbnNmb3JtO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUcmFuc2Zvcm0oYSkge1xyXG4gICAgY29uc3QgYiA9IHt9O1xyXG5cclxuICAgIGZvciAobGV0IGkgaW4gYSA9IGEubWF0Y2goLyhcXHcrXFwoKFxcLT9cXGQrXFwuP1xcZCplP1xcLT9cXGQqKD86LHxcXHMpPykrXFwpKSsvZykpIHtcclxuICAgICAgICBjb25zdCBjID0gYVtpXS5tYXRjaCgvW1xcd1xcLlxcLV0rL2cpO1xyXG4gICAgICAgIGJbYy5zaGlmdCgpXSA9IGMubWFwKGl0ZW0gPT4geyByZXR1cm4gTnVtYmVyKGl0ZW0pOyB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VNYXRyaXgoZWwpIHtcclxuICAgIC8vIG1hdHJpeChzY2FsZVgoKSxza2V3WSgpLHNrZXdYKCksc2NhbGVZKCksdHJhbnNsYXRlWCgpLHRyYW5zbGF0ZVkoKSlcclxuICAgIGNvbnN0IHRyYW5zZm9ybSA9IGdldFRyYW5zZm9ybShlbCkubWF0Y2goLy0/XFxkK1xcLj9cXGQrfC0/XFxkKy9nKTtcclxuXHJcbiAgICBpZiAodHJhbnNmb3JtKSB7XHJcbiAgICAgICAgcmV0dXJuIHRyYW5zZm9ybS5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gWzEsIDAsIDAsIDEsIDAsIDBdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2xhc3Mobm9kZSwgY2xzKSB7XHJcbiAgICBpZiAoIWNscykgcmV0dXJuO1xyXG5cclxuICAgIGlmIChub2RlLmNsYXNzTGlzdCkge1xyXG4gICAgICAgIGlmIChjbHMuaW5kZXhPZignICcpID4gLTEpIHtcclxuICAgICAgICAgICAgY2xzLnNwbGl0KC9cXHMrLykuZm9yRWFjaChmdW5jdGlvbihjbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUuY2xhc3NMaXN0LmFkZChjbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBub2RlLmNsYXNzTGlzdC5hZGQoY2xzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbm9kZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKG5vZGUsIGNscykge1xyXG4gICAgaWYgKCFjbHMpIHJldHVybjtcclxuXHJcbiAgICBpZiAobm9kZS5jbGFzc0xpc3QpIHtcclxuICAgICAgICBpZiAoY2xzLmluZGV4T2YoJyAnKSA+IC0xKSB7XHJcbiAgICAgICAgICAgIGNscy5zcGxpdCgvXFxzKy8pLmZvckVhY2goZnVuY3Rpb24oY2wpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBub2RlLmNsYXNzTGlzdC5yZW1vdmUoY2wpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbm9kZS5jbGFzc0xpc3QucmVtb3ZlKGNscyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5vZGU7XHJcbn0iLCJleHBvcnQgY29uc3QgdW5pdFJFID0gL3B4fGVtfCV8ZXh8Y2h8cmVtfHZofHZ3fHZtaW58dm1heHxtbXxjbXxpbnxwdHxwY3xkZWcvO1xyXG5leHBvcnQgY29uc3QgUkFEID0gTWF0aC5QSSAvIDE4MDtcclxuZXhwb3J0IGNvbnN0IERFRyA9IDE4MCAvIE1hdGguUEk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVjYWxjUG9pbnQocGFyYW1zKSB7XHJcblxyXG4gICAgY29uc3QgeyBcclxuICAgICAgICB4LCBcclxuICAgICAgICB5LCBcclxuICAgICAgICBjZW50ZXJYLFxyXG4gICAgICAgIGNlbnRlclksXHJcbiAgICAgICAgYW5nbGUsXHJcbiAgICAgICAgbmV3Q2VudGVyWCxcclxuICAgICAgICBuZXdDZW50ZXJZXHJcbiAgICB9ID0gcGFyYW1zO1xyXG5cclxuICAgIGNvbnN0IG9sZENvb3JkcyA9IGdldFJvdGF0ZWRQb2ludChcclxuICAgICAgICBjZW50ZXJYLFxyXG4gICAgICAgIGNlbnRlclksXHJcbiAgICAgICAgeCxcclxuICAgICAgICB5LFxyXG4gICAgICAgIGFuZ2xlLFxyXG4gICAgICAgIGZhbHNlLFxyXG4gICAgICAgIGZhbHNlXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGNvb3JkcyA9IGdldFJvdGF0ZWRQb2ludChcclxuICAgICAgICBuZXdDZW50ZXJYLFxyXG4gICAgICAgIG5ld0NlbnRlclksXHJcbiAgICAgICAgeCxcclxuICAgICAgICB5LFxyXG4gICAgICAgIGFuZ2xlLFxyXG4gICAgICAgIGZhbHNlLFxyXG4gICAgICAgIGZhbHNlXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IG54ID0geCAtIChvbGRDb29yZHMubGVmdCAtIGNvb3Jkcy5sZWZ0KSxcclxuICAgICAgICBueSA9IHkgLSAob2xkQ29vcmRzLnRvcCAtIGNvb3Jkcy50b3ApO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVzWDogZmxvYXRUb0ZpeGVkKG54KSxcclxuICAgICAgICByZXNZOiBmbG9hdFRvRml4ZWQobnkpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzbmFwVG9HcmlkKHZhbHVlLCBzbmFwKSB7XHJcbiAgICBcclxuICAgIGlmIChzbmFwID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBzbmFwQ2FuZGlkYXRlKHZhbHVlLCBzbmFwKTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdCAtIHZhbHVlIDwgc25hcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNuYXBDYW5kaWRhdGUodmFsdWUsIGdyaWRTaXplKSB7XHJcbiAgICBpZiAoZ3JpZFNpemUgPT09IDApIHJldHVybiB2YWx1ZTtcclxuICAgIHJldHVybiBncmlkU2l6ZSAqIE1hdGgucm91bmQodmFsdWUgLyBncmlkU2l6ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVkVG9wTGVmdChcclxuICAgIHgsIFxyXG4gICAgeSwgXHJcbiAgICB3aWR0aCwgXHJcbiAgICBoZWlnaHQsIFxyXG4gICAgcm90YXRpb25BbmdsZSwgXHJcbiAgICByZXZYLCBcclxuICAgIHJldllcclxuKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgIGNvbnN0IGN4ID0geCArIHBhcnNlRmxvYXQod2lkdGgpIC8gMixcclxuICAgICAgICBjeSA9IHkgKyBwYXJzZUZsb2F0KGhlaWdodCkgLyAyO1xyXG5cclxuICAgIGNvbnN0IGR4ID0geCAtIGN4LFxyXG4gICAgICAgIGR5ID0geSAtIGN5O1xyXG5cclxuICAgIGNvbnN0IG9yaWdpbmFsVG9wTGVmdEFuZ2xlID0gTWF0aC5hdGFuMihkeSwgZHgpO1xyXG5cclxuICAgIGNvbnN0IHJvdGF0ZWRUb3BMZWZ0QW5nbGUgPSBvcmlnaW5hbFRvcExlZnRBbmdsZSArIHJvdGF0aW9uQW5nbGU7XHJcblxyXG4gICAgY29uc3QgcmFkaXVzID0gTWF0aC5zcXJ0KE1hdGgucG93KHBhcnNlRmxvYXQod2lkdGgpIC8gMiwgMikgKyBNYXRoLnBvdyhwYXJzZUZsb2F0KGhlaWdodCkgLyAyLCAyKSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgbGV0IGNvcyA9IE1hdGguY29zKHJvdGF0ZWRUb3BMZWZ0QW5nbGUpLCBcclxuICAgICAgICBzaW4gPSBNYXRoLnNpbihyb3RhdGVkVG9wTGVmdEFuZ2xlKTtcclxuXHJcbiAgICBjb3MgPSByZXZYID09PSB0cnVlID8gLWNvcyA6IGNvcztcclxuICAgIHNpbiA9IHJldlkgPT09IHRydWUgPyAtc2luIDogc2luO1xyXG5cclxuICAgIGNvbnN0IHJ4ID0gY3ggKyByYWRpdXMgKiBjb3MsXHJcbiAgICAgICAgcnkgPSBjeSArIHJhZGl1cyAqIHNpbjtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGxlZnQ6IGZsb2F0VG9GaXhlZChyeCksXHJcbiAgICAgICAgdG9wOiBmbG9hdFRvRml4ZWQocnkpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3RhdGVkUG9pbnQoXHJcbiAgICBjeCwgXHJcbiAgICBjeSwgXHJcbiAgICB4LCBcclxuICAgIHksIFxyXG4gICAgYW5nbGUsIFxyXG4gICAgcmV2WCwgXHJcbiAgICByZXZZXHJcbikge1xyXG5cclxuICAgIGxldCBjb3MgPSBNYXRoLmNvcyhhbmdsZSksXHJcbiAgICAgICAgc2luID0gTWF0aC5zaW4oYW5nbGUpO1xyXG5cclxuICAgIGNvcyA9IHJldlggPT09IHRydWUgPyAtY29zIDogY29zO1xyXG4gICAgc2luID0gcmV2WSA9PT0gdHJ1ZSA/IC1zaW4gOiBzaW47XHJcblxyXG4gICAgbGV0IG54ID0gKGNvcyAqICh4IC0gY3gpKSArIChzaW4gKiAoeSAtIGN5KSkgKyBjeCxcclxuICAgICAgICBueSA9IChjb3MgKiAoeSAtIGN5KSkgLSAoc2luICogKHggLSBjeCkpICsgY3k7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBsZWZ0OiBmbG9hdFRvRml4ZWQobngpLFxyXG4gICAgICAgIHRvcDogZmxvYXRUb0ZpeGVkKG55KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9QWCh2YWx1ZSwgcGFyZW50KSB7XHJcbiAgICBpZiAoL3B4Ly50ZXN0KHZhbHVlKSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuICAgIGlmICgvJS8udGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICByZXR1cm4gYCR7cGFyc2VGbG9hdCh2YWx1ZSkgKiBwYXJzZUZsb2F0KHBhcmVudCkgLyAxMDB9cHhgO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZnJvbVBYKHZhbHVlLCBwYXJlbnQsIHRvVW5pdCkge1xyXG4gICAgaWYgKC9weC8udGVzdCh0b1VuaXQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gICAgaWYgKC8lLy50ZXN0KHRvVW5pdCkpIHtcclxuICAgICAgICByZXR1cm4gYCR7cGFyc2VGbG9hdCh2YWx1ZSkgKiAxMDAgLyBwYXJzZUZsb2F0KHBhcmVudCl9JWA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRVbml0RGltZW5zaW9uKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdmFsdWUubWF0Y2godW5pdFJFKVswXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZsb2F0VG9GaXhlZCh2YWwpIHtcclxuICAgIHJldHVybiBOdW1iZXIodmFsLnRvRml4ZWQoNikpO1xyXG59IiwiaW1wb3J0IHsgSGVscGVyIH0gZnJvbSAnLi4vaGVscGVyJ1xyXG5cclxuaW1wb3J0IHtcclxuICAgIHJlcXVlc3RBbmltRnJhbWUsXHJcbiAgICBjYW5jZWxBbmltRnJhbWUsXHJcbiAgICBpc0RlZixcclxuICAgIGlzVW5kZWYsXHJcbiAgICBpc0Z1bmNcclxufSBmcm9tICcuLi91dGlsL3V0aWwnXHJcblxyXG5pbXBvcnQge1xyXG4gICAgYWRkQ2xhc3MsXHJcbiAgICByZW1vdmVDbGFzc1xyXG59IGZyb20gJy4uL3V0aWwvY3NzLXV0aWwnXHJcblxyXG5pbXBvcnQge1xyXG4gICAgZ2V0Um90YXRlZFBvaW50LFxyXG4gICAgUkFEXHJcbn0gZnJvbSAnLi9jb21tb24nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWJqZWN0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbCwgT2JzZXJ2YWJsZSkge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jb25zdHJ1Y3RvciA9PT0gU3ViamVjdCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29uc3RydWN0IFN1YmplY3QgaW5zdGFuY2VzIGRpcmVjdGx5Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmVsID0gZWw7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlID0gbnVsbDtcclxuICAgICAgICB0aGlzLk9iID0gT2JzZXJ2YWJsZTtcclxuXHJcbiAgICAgICAgdGhpcy5fb25Nb3VzZURvd24gPSB0aGlzLl9vbk1vdXNlRG93bi5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX29uVG91Y2hTdGFydCA9IHRoaXMuX29uVG91Y2hTdGFydC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX29uTW91c2VNb3ZlID0gdGhpcy5fb25Nb3VzZU1vdmUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9vblRvdWNoTW92ZSA9IHRoaXMuX29uVG91Y2hNb3ZlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fb25Nb3VzZVVwID0gdGhpcy5fb25Nb3VzZVVwLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fb25Ub3VjaEVuZCA9IHRoaXMuX29uVG91Y2hFbmQuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBlbmFibGUob3B0aW9ucykge1xyXG5cclxuICAgICAgICBpZiAoaXNVbmRlZih0aGlzLnN0b3JhZ2UpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWQob3B0aW9ucyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2luaXQodGhpcy5lbCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgd2FybignQWxyZWFkeSBlbmFibGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRpc2FibGUoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgc3RvcmFnZSxcclxuICAgICAgICAgICAgZWxcclxuICAgICAgICB9ID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKGlzVW5kZWYoc3RvcmFnZSkpIHJldHVybjtcclxuXHJcbiAgICAgICAgcmVtb3ZlQ2xhc3MoZWwsICdkZy1kcmFnJyk7XHJcbiAgICAgICAgdGhpcy5fZGVzdHJveSgpOyBcclxuXHJcbiAgICAgICAgZGVsZXRlIHRoaXMuc3RvcmFnZTsgIFxyXG4gICAgfVxyXG5cclxuICAgIF9sb2FkKG9wdGlvbnMpIHtcclxuICAgICAgICBsb2FkT3B0aW9ucy5jYWxsKHRoaXMsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIF9kcmF3KCkge1xyXG5cclxuICAgICAgICBjb25zdCBjdHggPSB0aGlzO1xyXG4gICAgXHJcbiAgICAgICAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcclxuICAgIFxyXG4gICAgICAgICAgICBjb25zdCBzdG9yZSA9IGN0eC5zdG9yYWdlO1xyXG4gICAgXHJcbiAgICAgICAgICAgIHN0b3JlLmZyYW1lID0gcmVxdWVzdEFuaW1GcmFtZShhbmltYXRlKTtcclxuICAgIFxyXG4gICAgICAgICAgICBpZiAoIXN0b3JlLmRvRHJhdykgcmV0dXJuO1xyXG4gICAgICAgICAgICBzdG9yZS5kb0RyYXcgPSBmYWxzZTtcclxuICAgIFxyXG4gICAgICAgICAgICBsZXQgeyBcclxuICAgICAgICAgICAgICAgIGhhbmRsZSxcclxuICAgICAgICAgICAgICAgIGhhbmRsZXMsXHJcbiAgICAgICAgICAgICAgICBjeCxcclxuICAgICAgICAgICAgICAgIGN5LFxyXG4gICAgICAgICAgICAgICAgY2gsXHJcbiAgICAgICAgICAgICAgICBjdyxcclxuICAgICAgICAgICAgICAgIHJlZmFuZyxcclxuICAgICAgICAgICAgICAgIHByZXNzYW5nLFxyXG4gICAgICAgICAgICAgICAgcGFnZVgsXHJcbiAgICAgICAgICAgICAgICBwYWdlWSxcclxuICAgICAgICAgICAgICAgIGNlbnRlcixcclxuICAgICAgICAgICAgICAgIHNuYXAsXHJcbiAgICAgICAgICAgICAgICBwYXJlbnRTY2FsZSxcclxuICAgICAgICAgICAgICAgIGRvRHJhZyxcclxuICAgICAgICAgICAgICAgIGRvUmVzaXplLFxyXG4gICAgICAgICAgICAgICAgZG9Sb3RhdGVcclxuICAgICAgICAgICAgfSA9IHN0b3JlO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHNjYWxlWCA9IHBhcmVudFNjYWxlWzBdLFxyXG4gICAgICAgICAgICAgICAgc2NhbGVZID0gcGFyZW50U2NhbGVbMV07XHJcbiAgICBcclxuICAgICAgICAgICAgbGV0IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgbW92ZTogbW92ZUVhY2gsIFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc2l6ZTogcmVzaXplRWFjaCwgXHJcbiAgICAgICAgICAgICAgICAgICAgcm90YXRlOiByb3RhdGVFYWNoXHJcbiAgICAgICAgICAgICAgICB9ID0gc3RvcmUuZWFjaDtcclxuICAgIFxyXG4gICAgICAgICAgICBpZiAoZG9SZXNpemUpIHtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgbGV0IHJldlgsIHJldlksIHgsIHksIHBvcztcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgbGV0IHdpZHRoID0gbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPSBudWxsO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlLmlzKGhhbmRsZXMuYnIpIHx8IGhhbmRsZS5pcyhoYW5kbGVzLm1yKSkge1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zID0gZ2V0Um90YXRlZFBvaW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjeCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlWCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZmFuZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBwYWdlWSA9IHBvcy50b3A7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZVggPSBwb3MubGVmdDtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHkgPSAocGFnZVkgLSBjeSkgLyBzY2FsZVk7XHJcbiAgICAgICAgICAgICAgICAgICAgeCA9IChwYWdlWCAtIGN4KSAvIHNjYWxlWDtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkb3kgPSBoYW5kbGUuaXMoaGFuZGxlcy5icik7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZG95KSB7IGhlaWdodCA9IHkgKyBjaDsgfVxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoID0geCArIGN3O1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcmV2WCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldlkgPSBmYWxzZTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChoYW5kbGUuaXMoaGFuZGxlcy50bCkgfHwgaGFuZGxlLmlzKGhhbmRsZXMubWwpKSB7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBwb3MgPSBnZXRSb3RhdGVkUG9pbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN4LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3ksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlWCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VZLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmYW5nLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBwYWdlWSA9IHBvcy50b3A7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZVggPSBwb3MubGVmdDtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHkgPSAtIChwYWdlWSAtIGN5KSAvIHNjYWxlWTtcclxuICAgICAgICAgICAgICAgICAgICB4ID0gLSAocGFnZVggLSBjeCkgLyBzY2FsZVg7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZG95ID0gaGFuZGxlLmlzKGhhbmRsZXMudGwpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGggPSB4ICsgY3c7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRveSkgeyBoZWlnaHQgPSB5ICsgY2g7IH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHJldlggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldlkgPSB0cnVlO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGhhbmRsZS5pcyhoYW5kbGVzLnRyKSB8fCBoYW5kbGUuaXMoaGFuZGxlcy50YykpIHtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkb3ggPSBoYW5kbGUuaXMoaGFuZGxlcy50cik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRveSA9IGhhbmRsZS5pcyhoYW5kbGVzLnRjKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHBvcyA9IGdldFJvdGF0ZWRQb2ludChcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3gsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjeSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VYLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZhbmcsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3gsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBwYWdlWSA9IHBvcy50b3A7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZVggPSBwb3MubGVmdDtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHkgPSAtIChwYWdlWSAtIGN5KSAvIHNjYWxlWTtcclxuICAgICAgICAgICAgICAgICAgICB4ID0gLSAocGFnZVggLSBjeCkgLyBzY2FsZVg7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZG94KSB7IHkgPSAteTsgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0geSArIGNoO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkb3gpIHsgd2lkdGggPSB4ICsgY3c7IH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHJldlggPSBkb3k7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV2WSA9IHRydWU7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFuZGxlLmlzKGhhbmRsZXMuYmwpIHx8IGhhbmRsZS5pcyhoYW5kbGVzLmJjKSkge1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRveCA9IGhhbmRsZS5pcyhoYW5kbGVzLmJsKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHBvcyA9IGdldFJvdGF0ZWRQb2ludChcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3gsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjeSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VYLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZhbmcsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRveFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBwYWdlWSA9IHBvcy50b3A7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZVggPSBwb3MubGVmdDtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHkgPSAocGFnZVkgLSBjeSkgLyBzY2FsZVk7XHJcbiAgICAgICAgICAgICAgICAgICAgeCA9IC0gKHBhZ2VYIC0gY3gpIC8gc2NhbGVYO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0geSArIGNoO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkb3gpIHsgd2lkdGggPSB4ICsgY3c7IH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHJldlggPSBkb3g7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV2WSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBjdHguX3Jlc2l6ZShcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgcmV2WCxcclxuICAgICAgICAgICAgICAgICAgICByZXZZLFxyXG4gICAgICAgICAgICAgICAgICAgIHgsXHJcbiAgICAgICAgICAgICAgICAgICAgeVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc2l6ZUVhY2gpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgY3R4Lk9iLm5vdGlmeSgnb25yZXNpemUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdHgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogeCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXZYOiByZXZYLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2WTogcmV2WSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNuYXA6IHNuYXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICBpZiAoZG9EcmFnKSB7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpZmZUb3AgPSAocGFnZVkgLSBjeSkgLyBzY2FsZVksIFxyXG4gICAgICAgICAgICAgICAgICAgIGRpZmZMZWZ0ID0gKHBhZ2VYIC0gY3gpIC8gc2NhbGVYOyBcclxuXHJcbiAgICAgICAgICAgICAgICBjdHguX2RyYWcoXHJcbiAgICAgICAgICAgICAgICAgICAgZGlmZlRvcCwgXHJcbiAgICAgICAgICAgICAgICAgICAgZGlmZkxlZnQsXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBpZiAobW92ZUVhY2gpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdHguT2Iubm90aWZ5KCdvbm1vdmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdHgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpZmZUb3AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWZmTGVmdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIGlmIChkb1JvdGF0ZSkge1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCByYWRpYW5zID0gTWF0aC5hdGFuMihcclxuICAgICAgICAgICAgICAgICAgICBwYWdlWSAtIGNlbnRlci55LCBcclxuICAgICAgICAgICAgICAgICAgICBwYWdlWCAtIGNlbnRlci54XHJcbiAgICAgICAgICAgICAgICApIC0gcHJlc3Nhbmc7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGN0eC5fcm90YXRlKFxyXG4gICAgICAgICAgICAgICAgICAgIHJhZGlhbnNcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGlmIChyb3RhdGVFYWNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4Lk9iLm5vdGlmeSgnb25yb3RhdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdHgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhZGlhbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYW5pbWF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIF9zdGFydChlKSB7XHJcblxyXG4gICAgICAgIGlmIChlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbikge1xyXG4gICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGNvbnN0IHN0b3JlID0gdGhpcy5zdG9yYWdlOyBcclxuICAgICAgICBjb25zdCBjb21wdXRlZCA9IHRoaXMuX2NvbXB1dGUoZSk7XHJcblxyXG4gICAgICAgIHN0b3JlLnBhZ2VYID0gZS5wYWdlWDtcclxuICAgICAgICBzdG9yZS5wYWdlWSA9IGUucGFnZVk7XHJcbiAgICAgICAgc3RvcmUuY3ggPSBlLnBhZ2VYO1xyXG4gICAgICAgIHN0b3JlLmN5ID0gZS5wYWdlWTtcclxuICAgICAgICBzdG9yZS5jdHJsS2V5ID0gZS5jdHJsS2V5O1xyXG5cclxuICAgICAgICBPYmplY3Qua2V5cyhjb21wdXRlZCkuZm9yRWFjaChwcm9wID0+IHtcclxuICAgICAgICAgICAgc3RvcmVbcHJvcF0gPSBjb21wdXRlZFtwcm9wXTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBvblJpZ2h0RWRnZSxcclxuICAgICAgICAgICAgb25Cb3R0b21FZGdlLFxyXG4gICAgICAgICAgICBvblRvcEVkZ2UsXHJcbiAgICAgICAgICAgIG9uTGVmdEVkZ2UsXHJcbiAgICAgICAgICAgIGhhbmRsZSxcclxuICAgICAgICAgICAgZmFjdG9yLFxyXG4gICAgICAgICAgICByZXZYLFxyXG4gICAgICAgICAgICByZXZZXHJcbiAgICAgICAgfSA9IGNvbXB1dGVkO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgZG9SZXNpemUgPSBvblJpZ2h0RWRnZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkJvdHRvbUVkZ2UgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Ub3BFZGdlIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTGVmdEVkZ2U7XHJcblxyXG4gICAgICAgIGNvbnN0IGRvUm90YXRlID0gaGFuZGxlLmlzKHN0b3JlLmhhbmRsZXMucm90YXRvcik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc3RvcmUuZG9SZXNpemUgPSBkb1Jlc2l6ZTtcclxuICAgICAgICBzdG9yZS5kb0RyYWcgPSAhZG9Sb3RhdGUgJiYgIWRvUmVzaXplO1xyXG4gICAgICAgIHN0b3JlLmRvUm90YXRlID0gZG9Sb3RhdGU7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLk9iKSB7XHJcbiAgICAgICAgICAgIHRoaXMuT2Iubm90aWZ5KFxyXG4gICAgICAgICAgICAgICAgJ29ucmVmcmVzaHN0YXRlJyxcclxuICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmFjdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIHJldlgsXHJcbiAgICAgICAgICAgICAgICAgICAgcmV2WSxcclxuICAgICAgICAgICAgICAgICAgICBvblRvcEVkZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgb25MZWZ0RWRnZSxcclxuICAgICAgICAgICAgICAgICAgICBvblJpZ2h0RWRnZSxcclxuICAgICAgICAgICAgICAgICAgICBvbkJvdHRvbUVkZ2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2RyYXcoKTtcclxuICAgIH1cclxuXHJcbiAgICBfbW92aW5nKGUpIHtcclxuXHJcbiAgICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBzdG9yZSA9IHRoaXMuc3RvcmFnZTtcclxuICAgICAgICBzdG9yZS5wYWdlWCA9IGUucGFnZVg7XHJcbiAgICAgICAgc3RvcmUucGFnZVkgPSBlLnBhZ2VZO1xyXG4gICAgICAgIHN0b3JlLmRvRHJhdyA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIF9lbmQoZSkge1xyXG5cclxuICAgICAgICBpZiAoZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24pIHtcclxuICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHN0b3JlID0gdGhpcy5zdG9yYWdlO1xyXG5cclxuICAgICAgICBjb25zdCBhY3Rpb24gPSBzdG9yZS5kb1Jlc2l6ZSA/ICdyZXNpemUnIDogKHN0b3JlLmRvRHJhZyA/ICdkcmFnJyA6ICdyb3RhdGUnKTtcclxuXHJcbiAgICAgICAgc3RvcmUuZG9SZXNpemUgPSBmYWxzZTtcclxuICAgICAgICBzdG9yZS5kb0RyYWcgPSBmYWxzZTtcclxuICAgICAgICBzdG9yZS5kb1JvdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHN0b3JlLmRvRHJhdyA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLl9hcHBseShhY3Rpb24pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5PYikge1xyXG4gICAgICAgICAgICB0aGlzLk9iLm5vdGlmeShcclxuICAgICAgICAgICAgICAgICdvbmFwcGx5JyxcclxuICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICBhY3Rpb25cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhbmNlbEFuaW1GcmFtZShzdG9yZS5mcmFtZSk7XHJcbiAgICAgICAgc3RvcmUuZHJvcC5jYWxsKHRoaXMsIGUpO1xyXG4gICAgfVxyXG5cclxuICAgIF9vbk1vdXNlRG93bihlKSB7XHJcbiAgICAgICAgdGhpcy5fc3RhcnQoZSk7XHJcbiAgICAgICAgSGVscGVyKGRvY3VtZW50KS5vbignbW91c2Vtb3ZlJywgdGhpcy5fb25Nb3VzZU1vdmUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5vbignbW91c2V1cCcsIHRoaXMuX29uTW91c2VVcCk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uVG91Y2hTdGFydChlKSB7XHJcbiAgICAgICAgdGhpcy5fc3RhcnQoZS50b3VjaGVzWzBdKTtcclxuICAgICAgICBIZWxwZXIoZG9jdW1lbnQpLm9uKCd0b3VjaG1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm9uKCd0b3VjaGVuZCcsIHRoaXMuX29uVG91Y2hFbmQpO1xyXG4gICAgfVxyXG5cclxuICAgIF9vbk1vdXNlTW92ZShlKSB7XHJcbiAgICAgICAgdGhpcy5fbW92aW5nKGUsIHRoaXMuZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIF9vblRvdWNoTW92ZShlKSB7XHJcbiAgICAgICAgdGhpcy5fbW92aW5nKGUudG91Y2hlc1swXSwgdGhpcy5lbCk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uTW91c2VVcChlKSB7XHJcbiAgICAgICAgdGhpcy5fZW5kKGUsIHRoaXMuZWwpO1xyXG4gICAgICAgIEhlbHBlcihkb2N1bWVudCkub2ZmKCdtb3VzZW1vdmUnLCB0aGlzLl9vbk1vdXNlTW92ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm9mZignbW91c2V1cCcsIHRoaXMuX29uTW91c2VVcCk7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgX29uVG91Y2hFbmQoZSkge1xyXG4gICAgICAgIGlmIChlLnRvdWNoZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VuZChlLmNoYW5nZWRUb3VjaGVzWzBdLCB0aGlzLmVsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgSGVscGVyKGRvY3VtZW50KS5vZmYoJ3RvdWNobW92ZScsIHRoaXMuX29uVG91Y2hNb3ZlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAub2ZmKCd0b3VjaGVuZCcsIHRoaXMuX29uVG91Y2hFbmQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTW92ZShkYXRhKSB7XHJcblxyXG4gICAgICAgIHRoaXMuX2RyYWcoXHJcbiAgICAgICAgICAgIGRhdGEuZGlmZlRvcCwgXHJcbiAgICAgICAgICAgIGRhdGEuZGlmZkxlZnRcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUm90YXRlKGRhdGEpIHtcclxuXHJcbiAgICAgICAgdGhpcy5fcm90YXRlKFxyXG4gICAgICAgICAgICBkYXRhLnJhZGlhbnNcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmVzaXplKGRhdGEpIHtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IHcgPSBkYXRhLndpZHRoICE9PSBudWxsID8gdGhpcy5zdG9yYWdlLmN3ICsgZGF0YS54IDogbnVsbDtcclxuICAgICAgICBjb25zdCBoID0gZGF0YS5oZWlnaHQgIT09IG51bGwgPyB0aGlzLnN0b3JhZ2UuY2ggKyBkYXRhLnkgOiBudWxsO1xyXG5cclxuICAgICAgIHRoaXMuX3Jlc2l6ZShcclxuICAgICAgICAgICAgdyxcclxuICAgICAgICAgICAgaCxcclxuICAgICAgICAgICAgZGF0YS5yZXZYLFxyXG4gICAgICAgICAgICBkYXRhLnJldllcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQXBwbHkoYWN0aW9uTmFtZSkge1xyXG4gICAgICAgIHRoaXMuX2FwcGx5KGFjdGlvbk5hbWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkT3B0aW9ucyhvcHRpb25zKSB7XHJcblxyXG4gICAgYWRkQ2xhc3ModGhpcy5lbCwgJ2RnLWRyYWcnKTtcclxuXHJcbiAgICBsZXQgc25hcCA9IHtcclxuICAgICAgICB4OiAxMCxcclxuICAgICAgICB5OiAxMCxcclxuICAgICAgICBhbmdsZTogMTAgKiBSQURcclxuICAgIH07XHJcblxyXG4gICAgbGV0IGVhY2ggPSB7XHJcbiAgICAgICAgbW92ZTogZmFsc2UsXHJcbiAgICAgICAgcmVzaXplOiBmYWxzZSxcclxuICAgICAgICByb3RhdGU6IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzRGVmKG9wdGlvbnMpKSB7XHJcblxyXG4gICAgICAgIGlmIChpc0RlZihvcHRpb25zLnNuYXApKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB7IHgsIHksIGFuZ2xlIH0gPSBvcHRpb25zLnNuYXA7XHJcblxyXG4gICAgICAgICAgICBzbmFwLnggPSBpc1VuZGVmKHgpID8gMTAgOiB4O1xyXG4gICAgICAgICAgICBzbmFwLnkgPSBpc1VuZGVmKHkpID8gMTAgOiB5O1xyXG4gICAgICAgICAgICBzbmFwLmFuZ2xlID0gaXNVbmRlZihhbmdsZSkgPyAxMCAqIFJBRCA6IGFuZ2xlICogUkFEO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAoaXNEZWYob3B0aW9ucy5lYWNoKSkge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgeyBtb3ZlLCByZXNpemUsIHJvdGF0ZSB9ID0gb3B0aW9ucy5lYWNoO1xyXG5cclxuICAgICAgICAgICAgZWFjaC5tb3ZlID0gbW92ZSB8fCBmYWxzZTtcclxuICAgICAgICAgICAgZWFjaC5yZXNpemUgPSByZXNpemUgfHwgZmFsc2U7XHJcbiAgICAgICAgICAgIGVhY2gucm90YXRlID0gcm90YXRlIHx8IGZhbHNlOyBcclxuICAgICAgICB9ICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IE9iID0gdGhpcy5PYjtcclxuXHJcbiAgICBpZiAoZWFjaC5tb3ZlIHx8IGVhY2gucmVzaXplIHx8IGVhY2gucm90YXRlKSB7XHJcbiAgICAgICAgT2Iuc3Vic2NyaWJlKCdvbnJlZnJlc2hzdGF0ZScsIHRoaXMpO1xyXG4gICAgICAgIE9iLnN1YnNjcmliZSgnb25hcHBseScsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlYWNoLm1vdmUpIHtcclxuICAgICAgICBPYi5zdWJzY3JpYmUoJ29ubW92ZScsIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgaWYgKGVhY2gucmVzaXplKSB7XHJcbiAgICAgICAgT2Iuc3Vic2NyaWJlKCdvbnJlc2l6ZScsIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgaWYgKGVhY2gucm90YXRlKSB7XHJcbiAgICAgICAgT2Iuc3Vic2NyaWJlKCdvbnJvdGF0ZScsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc3RvcmFnZSA9IHtcclxuICAgICAgICBkcm9wOiBvcHRpb25zICYmIGlzRnVuYyhvcHRpb25zLmRyb3ApIFxyXG4gICAgICAgICAgICAgICAgPyBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5kcm9wKGUsIHRoaXMuZWwpO1xyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgIDogZnVuY3Rpb24oKSB7fSxcclxuICAgICAgICBzbmFwLFxyXG4gICAgICAgIGVhY2hcclxuICAgIH07XHJcbn0iLCJpbXBvcnQgeyBIZWxwZXIgfSBmcm9tICcuLi9oZWxwZXInXHJcbmltcG9ydCBTdWJqZWN0IGZyb20gJy4vc3ViamVjdCdcclxuXHJcbmltcG9ydCB7IFxyXG4gICAgYWRkQ2xhc3MsXHJcbiAgICBnZXRUcmFuc2Zvcm0sXHJcbiAgICBwYXJzZU1hdHJpeCxcclxuICAgIGdldE9mZnNldFxyXG59IGZyb20gJy4uL3V0aWwvY3NzLXV0aWwnXHJcblxyXG5pbXBvcnQge1xyXG4gICAgc25hcFRvR3JpZCxcclxuICAgIHNuYXBDYW5kaWRhdGUsXHJcbiAgICByb3RhdGVkVG9wTGVmdCxcclxuICAgIHRvUFgsXHJcbiAgICBmcm9tUFgsXHJcbiAgICBnZXRVbml0RGltZW5zaW9uLFxyXG4gICAgZmxvYXRUb0ZpeGVkXHJcbn0gZnJvbSAnLi9jb21tb24nXHJcblxyXG5jb25zdCBicmFja2V0cyA9ICc8ZGl2IGNsYXNzPVwiZGctaGRsIGRnLXJvdGF0b3JcIj48L2Rpdj5cXFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkZy1oZGwgZGctaGRsLXQgZGctaGRsLWwgZGctaGRsLXRsXCI+PC9kaXY+XFxcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGctaGRsIGRnLWhkbC10IGRnLWhkbC1yIGRnLWhkbC10clwiPjwvZGl2PlxcXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRnLWhkbCBkZy1oZGwtYiBkZy1oZGwtciBkZy1oZGwtYnJcIj48L2Rpdj5cXFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkZy1oZGwgZGctaGRsLWIgZGctaGRsLWwgZGctaGRsLWJsXCI+PC9kaXY+XFxcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGctaGRsIGRnLWhkbC10IGRnLWhkbC1jIGRnLWhkbC10Y1wiPjwvZGl2PlxcXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRnLWhkbCBkZy1oZGwtYiBkZy1oZGwtYyBkZy1oZGwtYmNcIj48L2Rpdj5cXFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkZy1oZGwgZGctaGRsLW0gZGctaGRsLWwgZGctaGRsLW1sXCI+PC9kaXY+XFxcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGctaGRsIGRnLWhkbC1tIGRnLWhkbC1yIGRnLWhkbC1tclwiPjwvZGl2Pic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmFnZ2FibGUgZXh0ZW5kcyBTdWJqZWN0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucywgT2JzZXJ2YWJsZSkge1xyXG4gICAgICAgIHN1cGVyKGVsLCBPYnNlcnZhYmxlKTtcclxuICAgICAgICB0aGlzLmVuYWJsZShvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBfaW5pdChpdGVtLCBvcHRpb25zKSB7XHJcbiAgICAgICAgX2luaXQuY2FsbCh0aGlzLCBpdGVtLCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBfZGVzdHJveShpdGVtKSB7XHJcbiAgICAgICAgX2Rlc3Ryb3kuY2FsbCh0aGlzLCBpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBfZHJhZygpIHtcclxuICAgICAgICBwcm9jZXNzTW92ZS5jYWxsKHRoaXMsIC4uLmFyZ3VtZW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgX3JvdGF0ZSgpIHtcclxuICAgICAgICBwcm9jZXNzUm90YXRlLmNhbGwodGhpcywgLi4uYXJndW1lbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICBfcmVzaXplKCkge1xyXG4gICAgICAgIHByb2Nlc3NSZXNpemUuY2FsbCh0aGlzLCAuLi5hcmd1bWVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIF9jb21wdXRlKCkge1xyXG4gICAgICAgIHJldHVybiBfY29tcHV0ZS5jYWxsKHRoaXMsIC4uLmFyZ3VtZW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgX2FwcGx5KCkge1xyXG5cclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIHN0b3JhZ2UsXHJcbiAgICAgICAgICAgIGVsXHJcbiAgICAgICAgfSA9IHRoaXM7XHJcblxyXG4gICAgICAgIGNvbnN0IF9lbCA9IEhlbHBlcihlbCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgY2FjaGVkLFxyXG4gICAgICAgICAgICBwYXJlbnQsXHJcbiAgICAgICAgICAgIGRpbWVucyxcclxuICAgICAgICAgICAgY29udHJvbHNcclxuICAgICAgICB9ID0gc3RvcmFnZTtcclxuXHJcbiAgICAgICAgaWYgKCFjYWNoZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgbWF0cml4ID0gWy4uLmNhY2hlZF07XHJcblxyXG4gICAgICAgIGNvbnN0IGRpZmZMZWZ0ID0gbWF0cml4WzRdO1xyXG4gICAgICAgIGNvbnN0IGRpZmZUb3AgPSBtYXRyaXhbNV07XHJcblxyXG4gICAgICAgIG1hdHJpeFs0XSA9IDA7XHJcbiAgICAgICAgbWF0cml4WzVdID0gMDtcclxuXHJcbiAgICAgICAgY29uc3QgY3NzID0gbWF0cml4VG9DU1MobWF0cml4KTtcclxuXHJcbiAgICAgICAgY29uc3QgcFcgPSBwYXJlbnQuY3NzKCd3aWR0aCcpLFxyXG4gICAgICAgICAgICAgICAgcEggPSBwYXJlbnQuY3NzKCdoZWlnaHQnKTtcclxuXHJcbiAgICAgICAgY29uc3QgbGVmdCA9IHBhcnNlRmxvYXQoXHJcbiAgICAgICAgICAgIHRvUFgoX2VsLmNzcygnbGVmdCcpLCBwVylcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHRvcCA9IHBhcnNlRmxvYXQoXHJcbiAgICAgICAgICAgIHRvUFgoX2VsLmNzcygndG9wJyksIHBIKVxyXG4gICAgICAgICk7ICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIGNzcy5sZWZ0ID0gZnJvbVBYKFxyXG4gICAgICAgICAgICBsZWZ0ICsgZGlmZkxlZnQgKyAncHgnLCBcclxuICAgICAgICAgICAgcFcsXHJcbiAgICAgICAgICAgIGRpbWVucy5sZWZ0XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY3NzLnRvcCA9IGZyb21QWChcclxuICAgICAgICAgICAgdG9wICsgZGlmZlRvcCArICdweCcsIFxyXG4gICAgICAgICAgICBwSCxcclxuICAgICAgICAgICAgZGltZW5zLnRvcFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIF9lbC5jc3MoY3NzKTtcclxuICAgICAgICBIZWxwZXIoY29udHJvbHMpLmNzcyhjc3MpO1xyXG5cclxuICAgICAgICB0aGlzLnN0b3JhZ2UuY2FjaGVkID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBvblJlZnJlc2hTdGF0ZShkYXRhKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHN0b3JlID0gdGhpcy5zdG9yYWdlO1xyXG5cclxuICAgICAgICBjb25zdCByZWNhbGMgPSByZWZyZXNoU3RhdGUuY2FsbCh0aGlzLFxyXG4gICAgICAgICAgICBkYXRhLmZhY3RvciwgXHJcbiAgICAgICAgICAgIGRhdGEucmV2WCwgXHJcbiAgICAgICAgICAgIGRhdGEucmV2WVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIE9iamVjdC5rZXlzKHJlY2FsYykuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgICBzdG9yZVtrZXldID0gcmVjYWxjW2tleV07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9pbml0KHNlbCkge1xyXG5cclxuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBhZGRDbGFzcyh3cmFwcGVyLCAnZGctd3JhcHBlcicpO1xyXG4gICAgc2VsLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIHNlbCk7XHJcblxyXG4gICAgY29uc3QgY29udGFpbmVyID0gd3JhcHBlcjtcclxuICAgIGNvbnN0IF9zZWwgPSBIZWxwZXIoc2VsKTtcclxuXHJcbiAgICBjb25zdCB3ID0gX3NlbC5jc3MoJ3dpZHRoJyksXHJcbiAgICAgICAgaCA9IF9zZWwuY3NzKCdoZWlnaHQnKSxcclxuICAgICAgICB0ID0gX3NlbC5jc3MoJ3RvcCcpLFxyXG4gICAgICAgIGwgPSBfc2VsLmNzcygnbGVmdCcpO1xyXG5cclxuICAgIGNvbnN0IF9wYXJlbnQgPSBIZWxwZXIoY29udGFpbmVyLnBhcmVudE5vZGUpO1xyXG5cclxuICAgIGNvbnN0IGNzcyA9IHtcclxuICAgICAgICB0b3A6IHQsXHJcbiAgICAgICAgbGVmdDogbCxcclxuICAgICAgICB3aWR0aDogdG9QWCh3LCBfcGFyZW50LmNzcygnd2lkdGgnKSksXHJcbiAgICAgICAgaGVpZ2h0OiB0b1BYKGgsIF9wYXJlbnQuY3NzKCdoZWlnaHQnKSksXHJcbiAgICAgICAgdHJhbnNmb3JtOiBnZXRUcmFuc2Zvcm0oX3NlbClcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY29udHJvbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRyb2xzLmlubmVySFRNTCA9IGJyYWNrZXRzO1xyXG5cclxuICAgIGFkZENsYXNzKGNvbnRyb2xzLCAnZGctY29udHJvbHMnKTtcclxuXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udHJvbHMpO1xyXG5cclxuICAgIGNvbnN0IF9jb250cm9scyA9IEhlbHBlcihjb250cm9scyk7XHJcbiAgICBfY29udHJvbHMuY3NzKGNzcyk7XHJcblxyXG4gICAgY29uc3QgX2NvbnRhaW5lciA9IEhlbHBlcihjb250YWluZXIpO1xyXG5cclxuICAgIE9iamVjdC5hc3NpZ24odGhpcy5zdG9yYWdlLCB7XHJcbiAgICAgICAgY29udHJvbHM6IGNvbnRyb2xzLFxyXG4gICAgICAgIGhhbmRsZXM6IHtcclxuICAgICAgICAgICAgdGw6IF9jb250YWluZXIuZmluZCgnLmRnLWhkbC10bCcpLFxyXG4gICAgICAgICAgICB0cjogX2NvbnRhaW5lci5maW5kKCcuZGctaGRsLXRyJyksXHJcbiAgICAgICAgICAgIGJyOiBfY29udGFpbmVyLmZpbmQoJy5kZy1oZGwtYnInKSxcclxuICAgICAgICAgICAgYmw6IF9jb250YWluZXIuZmluZCgnLmRnLWhkbC1ibCcpLFxyXG4gICAgICAgICAgICB0YzogX2NvbnRhaW5lci5maW5kKCcuZGctaGRsLXRjJyksXHJcbiAgICAgICAgICAgIGJjOiBfY29udGFpbmVyLmZpbmQoJy5kZy1oZGwtYmMnKSxcclxuICAgICAgICAgICAgbWw6IF9jb250YWluZXIuZmluZCgnLmRnLWhkbC1tbCcpLFxyXG4gICAgICAgICAgICBtcjogX2NvbnRhaW5lci5maW5kKCcuZGctaGRsLW1yJyksXHJcbiAgICAgICAgICAgIHJvdGF0b3I6IF9jb250YWluZXIuZmluZCgnLmRnLXJvdGF0b3InKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGFyZW50OiBfcGFyZW50XHJcbiAgICB9KTtcclxuXHJcbiAgICBfY29udHJvbHMub24oJ21vdXNlZG93bicsIHRoaXMuX29uTW91c2VEb3duKVxyXG4gICAgICAgICAgICAub24oJ3RvdWNoc3RhcnQnLCB0aGlzLl9vblRvdWNoU3RhcnQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfZGVzdHJveSgpIHtcclxuXHJcbiAgICBjb25zdCB7IGNvbnRyb2xzIH0gPSB0aGlzLnN0b3JhZ2U7XHJcblxyXG4gICAgSGVscGVyKGNvbnRyb2xzKS5vZmYoJ21vdXNlZG93bicsIHRoaXMuX29uTW91c2VEb3duKVxyXG4gICAgICAgICAgICAgICAgICAgIC5vZmYoJ3RvdWNoc3RhcnQnLCB0aGlzLl9vblRvdWNoU3RhcnQpO1xyXG5cclxuICAgIHRoaXMuZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjb250cm9scy5wYXJlbnROb2RlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NvbXB1dGUoZSkge1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICBlbCxcclxuICAgICAgICBzdG9yYWdlXHJcbiAgICB9ID0gdGhpcztcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgaGFuZGxlcyxcclxuICAgICAgICBjb250cm9sczogY3RybHMsXHJcbiAgICAgICAgcGFyZW50LFxyXG4gICAgICAgIHNuYXBcclxuICAgIH0gPSBzdG9yYWdlO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZSA9IEhlbHBlcihlLnRhcmdldCk7XHJcblxyXG4gICAgbGV0IGZhY3RvciA9IDE7XHJcblxyXG4gICAgLy9yZXZlcnNlIGF4aXNcclxuICAgIGNvbnN0IHJldlggPSBoYW5kbGUuaXMoaGFuZGxlcy50bCkgfHwgXHJcbiAgICAgICAgICAgICAgICBoYW5kbGUuaXMoaGFuZGxlcy5tbCkgfHwgXHJcbiAgICAgICAgICAgICAgICBoYW5kbGUuaXMoaGFuZGxlcy5ibCkgfHwgXHJcbiAgICAgICAgICAgICAgICBoYW5kbGUuaXMoaGFuZGxlcy50Yyk7XHJcblxyXG4gICAgY29uc3QgcmV2WSA9IGhhbmRsZS5pcyhoYW5kbGVzLnRsKSB8fCBcclxuICAgICAgICAgICAgICAgIGhhbmRsZS5pcyhoYW5kbGVzLnRyKSB8fCBcclxuICAgICAgICAgICAgICAgIGhhbmRsZS5pcyhoYW5kbGVzLnRjKSB8fCBcclxuICAgICAgICAgICAgICAgIGhhbmRsZS5pcyhoYW5kbGVzLm1sKTtcclxuXHJcbiAgICAvL3JldmVyc2UgYW5nbGVcclxuICAgIGlmIChoYW5kbGUuaXMoaGFuZGxlcy50cikgfHwgXHJcbiAgICAgICAgaGFuZGxlLmlzKGhhbmRsZXMuYmwpXHJcbiAgICApIHtcclxuICAgICAgICBmYWN0b3IgPSAtMTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0bF9vZmYgPSBnZXRPZmZzZXQoaGFuZGxlcy50bFswXSksXHJcbiAgICAgICAgdHJfb2ZmID0gZ2V0T2Zmc2V0KGhhbmRsZXMudHJbMF0pO1xyXG5cclxuICAgIGNvbnN0IHJlZmFuZyA9IE1hdGguYXRhbjIoXHJcbiAgICAgICAgdHJfb2ZmLnRvcCAtIHRsX29mZi50b3AsIFxyXG4gICAgICAgIHRyX29mZi5sZWZ0IC0gdGxfb2ZmLmxlZnRcclxuICAgICkgKiBmYWN0b3I7XHJcblxyXG4gICAgY29uc3QgY3cgPSBwYXJzZUZsb2F0KFxyXG4gICAgICAgIHRvUFgoY3RybHMuc3R5bGUud2lkdGgsIHBhcmVudC5jc3MoJ3dpZHRoJykpXHJcbiAgICApO1xyXG4gICAgY29uc3QgY2ggPSBwYXJzZUZsb2F0KFxyXG4gICAgICAgIHRvUFgoY3RybHMuc3R5bGUuaGVpZ2h0LCBwYXJlbnQuY3NzKCdoZWlnaHQnKSlcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgdHJhbnNmb3JtID0gcGFyc2VNYXRyaXgoSGVscGVyKGN0cmxzKSk7XHJcblxyXG4gICAgLy9nZXR0aW5nIGN1cnJlbnQgY29vcmRpbmF0ZXMgY29uc2lkZXJpbmcgcm90YXRpb24gYW5nbGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgY29uc3QgY29vcmRzID0gcm90YXRlZFRvcExlZnQoXHJcbiAgICAgICAgdHJhbnNmb3JtWzRdLFxyXG4gICAgICAgIHRyYW5zZm9ybVs1XSxcclxuICAgICAgICBjdyxcclxuICAgICAgICBjaCxcclxuICAgICAgICByZWZhbmcsXHJcbiAgICAgICAgcmV2WCxcclxuICAgICAgICByZXZZXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IG9mZnNldF8gPSBnZXRPZmZzZXQoY3RybHMpO1xyXG5cclxuICAgIGNvbnN0IGNlbnRlcl94ID0gb2Zmc2V0Xy5sZWZ0ICsgY3cgLyAyLFxyXG4gICAgICAgIGNlbnRlcl95ID0gb2Zmc2V0Xy50b3AgKyBjaCAvIDI7XHJcblxyXG4gICAgY29uc3QgcHJlc3NhbmcgPSBNYXRoLmF0YW4yKFxyXG4gICAgICAgIGUucGFnZVkgLSBjZW50ZXJfeSwgXHJcbiAgICAgICAgZS5wYWdlWCAtIGNlbnRlcl94XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IF9lbCA9IEhlbHBlcihlbCk7XHJcbiAgICBjb25zdCBzdHlsZUxpc3QgPSBlbC5zdHlsZTtcclxuXHJcbiAgICBjb25zdCBkaW1lbnMgPSB7XHJcbiAgICAgICAgdG9wOiBnZXRVbml0RGltZW5zaW9uKHN0eWxlTGlzdC50b3AgfHwgX2VsLmNzcygndG9wJykpLFxyXG4gICAgICAgIGxlZnQ6IGdldFVuaXREaW1lbnNpb24oc3R5bGVMaXN0LmxlZnQgfHwgX2VsLmNzcygnbGVmdCcpKSxcclxuICAgICAgICB3aWR0aDogZ2V0VW5pdERpbWVuc2lvbihzdHlsZUxpc3Qud2lkdGggfHwgX2VsLmNzcygnd2lkdGgnKSksXHJcbiAgICAgICAgaGVpZ2h0OiBnZXRVbml0RGltZW5zaW9uKHN0eWxlTGlzdC5oZWlnaHQgfHwgX2VsLmNzcygnaGVpZ2h0JykpXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHBhcmVudFRyYW5zZm9ybSA9IHBhcnNlTWF0cml4KHBhcmVudCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwYXJlbnRTY2FsZTogW3BhcmVudFRyYW5zZm9ybVswXSwgcGFyZW50VHJhbnNmb3JtWzNdXSxcclxuICAgICAgICB0cmFuc2Zvcm0sXHJcbiAgICAgICAgY3csXHJcbiAgICAgICAgY2gsXHJcbiAgICAgICAgY2VudGVyOiB7XHJcbiAgICAgICAgICAgIHg6IGNlbnRlcl94LFxyXG4gICAgICAgICAgICB5OiBjZW50ZXJfeVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGVmdDogc25hcENhbmRpZGF0ZSh0cmFuc2Zvcm1bNF0sIHNuYXAueCksXHJcbiAgICAgICAgdG9wOiBzbmFwQ2FuZGlkYXRlKHRyYW5zZm9ybVs1XSwgc25hcC55KSxcclxuICAgICAgICBjb29yZFk6IGNvb3Jkcy50b3AsXHJcbiAgICAgICAgY29vcmRYOiBjb29yZHMubGVmdCxcclxuICAgICAgICBmYWN0b3IsXHJcbiAgICAgICAgcHJlc3NhbmcsXHJcbiAgICAgICAgcmVmYW5nLFxyXG4gICAgICAgIHJldlgsXHJcbiAgICAgICAgcmV2WSxcclxuICAgICAgICBoYW5kbGUsXHJcbiAgICAgICAgb25Ub3BFZGdlOiBoYW5kbGUuaXMoaGFuZGxlcy50bCkgfHwgaGFuZGxlLmlzKGhhbmRsZXMudGMpIHx8IGhhbmRsZS5pcyhoYW5kbGVzLnRyKSxcclxuICAgICAgICBvbkxlZnRFZGdlOiBoYW5kbGUuaXMoaGFuZGxlcy50bCkgfHwgaGFuZGxlLmlzKGhhbmRsZXMubWwpIHx8IGhhbmRsZS5pcyhoYW5kbGVzLmJsKSxcclxuICAgICAgICBvblJpZ2h0RWRnZTogaGFuZGxlLmlzKGhhbmRsZXMudHIpIHx8IGhhbmRsZS5pcyhoYW5kbGVzLm1yKSB8fCBoYW5kbGUuaXMoaGFuZGxlcy5iciksXHJcbiAgICAgICAgb25Cb3R0b21FZGdlOiBoYW5kbGUuaXMoaGFuZGxlcy5icikgfHwgaGFuZGxlLmlzKGhhbmRsZXMuYmMpIHx8IGhhbmRsZS5pcyhoYW5kbGVzLmJsKSxcclxuICAgICAgICBkaW1lbnNcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVmcmVzaFN0YXRlKGZhY3RvciwgcmV2WCwgcmV2WSkge1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICBjb250cm9sczogY3RybHMsXHJcbiAgICAgICAgaGFuZGxlcyxcclxuICAgICAgICBwYXJlbnQsXHJcbiAgICAgICAgc25hcFxyXG4gICAgfSA9IHRoaXMuc3RvcmFnZTtcclxuXHJcbiAgICBjb25zdCB0bF9vZmYgPSBnZXRPZmZzZXQoaGFuZGxlcy50bFswXSksXHJcbiAgICAgICAgdHJfb2ZmID0gZ2V0T2Zmc2V0KGhhbmRsZXMudHJbMF0pO1xyXG5cclxuICAgIGNvbnN0IHJlZmFuZyA9IE1hdGguYXRhbjIoXHJcbiAgICAgICAgdHJfb2ZmLnRvcCAtIHRsX29mZi50b3AsXHJcbiAgICAgICAgdHJfb2ZmLmxlZnQgLSB0bF9vZmYubGVmdFxyXG4gICAgKSAqIGZhY3RvcjtcclxuXHJcbiAgICBjb25zdCBjdyA9IHBhcnNlRmxvYXQoXHJcbiAgICAgICAgdG9QWChjdHJscy5zdHlsZS53aWR0aCwgcGFyZW50LmNzcygnd2lkdGgnKSlcclxuICAgICk7XHJcbiAgICBjb25zdCBjaCA9IHBhcnNlRmxvYXQoXHJcbiAgICAgICAgdG9QWChjdHJscy5zdHlsZS5oZWlnaHQsIHBhcmVudC5jc3MoJ2hlaWdodCcpKVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSBwYXJzZU1hdHJpeChIZWxwZXIoY3RybHMpKTtcclxuXHJcbiAgICAvL2dldHRpbmcgY3VycmVudCBjb29yZGluYXRlcyBjb25zaWRlcmluZyByb3RhdGlvbiBhbmdsZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICBjb25zdCBjb29yZHMgPSByb3RhdGVkVG9wTGVmdChcclxuICAgICAgICB0cmFuc2Zvcm1bNF0sXHJcbiAgICAgICAgdHJhbnNmb3JtWzVdLFxyXG4gICAgICAgIGN3LFxyXG4gICAgICAgIGNoLFxyXG4gICAgICAgIHJlZmFuZyxcclxuICAgICAgICByZXZYLFxyXG4gICAgICAgIHJldllcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgX3NlbCA9IEhlbHBlcih0aGlzLmVsKTtcclxuICAgIGNvbnN0IHN0eWxlTGlzdCA9IHRoaXMuZWwuc3R5bGU7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcclxuICAgICAgICBwYXJlbnRUcmFuc2Zvcm06IHBhcnNlTWF0cml4KHBhcmVudCksXHJcbiAgICAgICAgbGVmdDogc25hcENhbmRpZGF0ZSh0cmFuc2Zvcm1bNF0sIHNuYXAueCksXHJcbiAgICAgICAgdG9wOiBzbmFwQ2FuZGlkYXRlKHRyYW5zZm9ybVs1XSwgc25hcC55KSxcclxuICAgICAgICBjb29yZFg6IGNvb3Jkcy5sZWZ0LFxyXG4gICAgICAgIGNvb3JkWTogY29vcmRzLnRvcCxcclxuICAgICAgICByZWZhbmc6IHJlZmFuZyxcclxuICAgICAgICBjdzogY3csXHJcbiAgICAgICAgY2g6IGNoLFxyXG4gICAgICAgIGRpbWVuczoge1xyXG4gICAgICAgICAgICB0b3A6IGdldFVuaXREaW1lbnNpb24oc3R5bGVMaXN0LnRvcCB8fCBfc2VsLmNzcygndG9wJykpLFxyXG4gICAgICAgICAgICBsZWZ0OiBnZXRVbml0RGltZW5zaW9uKHN0eWxlTGlzdC5sZWZ0IHx8IF9zZWwuY3NzKCdsZWZ0JykpLFxyXG4gICAgICAgICAgICB3aWR0aDogZ2V0VW5pdERpbWVuc2lvbihzdHlsZUxpc3Qud2lkdGggfHwgX3NlbC5jc3MoJ3dpZHRoJykpLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGdldFVuaXREaW1lbnNpb24oc3R5bGVMaXN0LmhlaWdodCB8fCBfc2VsLmNzcygnaGVpZ2h0JykpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9jZXNzUmVzaXplKFxyXG4gICAgd2lkdGgsXHJcbiAgICBoZWlnaHQsXHJcbiAgICByZXZYLCBcclxuICAgIHJldllcclxuKSB7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGVsLFxyXG4gICAgICAgIHN0b3JhZ2VcclxuICAgIH0gPSB0aGlzO1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICBjb250cm9scyxcclxuICAgICAgICBzbmFwLFxyXG4gICAgICAgIGxlZnQsXHJcbiAgICAgICAgdG9wLFxyXG4gICAgICAgIGNvb3JkWCxcclxuICAgICAgICBjb29yZFksXHJcbiAgICAgICAgcmVmYW5nLFxyXG4gICAgICAgIGRpbWVucyxcclxuICAgICAgICBwYXJlbnQsXHJcbiAgICAgICAgdHJhbnNmb3JtXHJcbiAgICB9ID0gc3RvcmFnZTtcclxuXHJcbiAgICBjb25zdCB7IHN0eWxlIH0gPSBjb250cm9scztcclxuXHJcbiAgICBpZiAod2lkdGggIT09IG51bGwpIHtcclxuICAgICAgICBzdHlsZS53aWR0aCA9IGAke3NuYXBUb0dyaWQod2lkdGgsIHNuYXAueCl9cHhgO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChoZWlnaHQgIT09IG51bGwpIHtcclxuICAgICAgICBzdHlsZS5oZWlnaHQgPSBgJHtzbmFwVG9HcmlkKGhlaWdodCwgc25hcC55KX1weGA7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29vcmRzID0gcm90YXRlZFRvcExlZnQoXHJcbiAgICAgICAgbGVmdCxcclxuICAgICAgICB0b3AsXHJcbiAgICAgICAgc3R5bGUud2lkdGgsXHJcbiAgICAgICAgc3R5bGUuaGVpZ2h0LFxyXG4gICAgICAgIHJlZmFuZyxcclxuICAgICAgICByZXZYLFxyXG4gICAgICAgIHJldllcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgcmVzdWx0WSA9IHRvcCAtIChjb29yZHMudG9wIC0gY29vcmRZKSxcclxuICAgICAgICByZXN1bHRYID0gbGVmdCAtIChjb29yZHMubGVmdCAtIGNvb3JkWCk7XHJcblxyXG4gICAgY29uc3QgbWF0cml4ID0gWy4uLnRyYW5zZm9ybV07XHJcblxyXG4gICAgbWF0cml4WzRdID0gcmVzdWx0WDtcclxuICAgIG1hdHJpeFs1XSA9IHJlc3VsdFk7XHJcbiAgICBcclxuICAgIGNvbnN0IGNzcyA9IG1hdHJpeFRvQ1NTKG1hdHJpeCk7XHJcblxyXG4gICAgSGVscGVyKGNvbnRyb2xzKS5jc3MoY3NzKTtcclxuXHJcbiAgICBjc3Mud2lkdGggPSBmcm9tUFgoXHJcbiAgICAgICAgc3R5bGUud2lkdGgsIFxyXG4gICAgICAgIHBhcmVudC5jc3MoJ3dpZHRoJyksIFxyXG4gICAgICAgIGRpbWVucy53aWR0aFxyXG4gICAgKTtcclxuXHJcbiAgICBjc3MuaGVpZ2h0ID0gZnJvbVBYKFxyXG4gICAgICAgIHN0eWxlLmhlaWdodCwgXHJcbiAgICAgICAgcGFyZW50LmNzcygnaGVpZ2h0JyksIFxyXG4gICAgICAgIGRpbWVucy5oZWlnaHRcclxuICAgICk7XHJcblxyXG4gICAgSGVscGVyKGVsKS5jc3MoY3NzKTtcclxuXHJcbiAgICBzdG9yYWdlLmNhY2hlZCA9IG1hdHJpeDtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJvY2Vzc01vdmUoXHJcbiAgICB0b3AsXHJcbiAgICBsZWZ0XHJcbikge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGVsLFxyXG4gICAgICAgIHN0b3JhZ2VcclxuICAgIH0gPSB0aGlzO1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICBjb250cm9scyxcclxuICAgICAgICB0cmFuc2Zvcm0sXHJcbiAgICAgICAgc25hcFxyXG4gICAgfSA9IHN0b3JhZ2U7XHJcblxyXG4gICAgY29uc3QgbWF0cml4ID0gWy4uLnRyYW5zZm9ybV07XHJcblxyXG4gICAgbWF0cml4WzRdID0gc25hcFRvR3JpZCh0cmFuc2Zvcm1bNF0gKyBsZWZ0LCBzbmFwLngpO1xyXG4gICAgbWF0cml4WzVdID0gc25hcFRvR3JpZCh0cmFuc2Zvcm1bNV0gKyB0b3AsIHNuYXAueSk7XHJcbiAgICAgICAgXHJcbiAgICBjb25zdCBjc3MgPSBtYXRyaXhUb0NTUyhtYXRyaXgpO1xyXG5cclxuICAgIEhlbHBlcihjb250cm9scykuY3NzKGNzcyk7XHJcbiAgICBIZWxwZXIoZWwpLmNzcyhjc3MpO1xyXG5cclxuICAgIHN0b3JhZ2UuY2FjaGVkID0gbWF0cml4O1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9jZXNzUm90YXRlKHJhZGlhbnMpIHtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgZWwsXHJcbiAgICAgICAgc3RvcmFnZVxyXG4gICAgfSA9IHRoaXM7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGNvbnRyb2xzLFxyXG4gICAgICAgIHRyYW5zZm9ybSxcclxuICAgICAgICByZWZhbmcsXHJcbiAgICAgICAgc25hcFxyXG4gICAgfSA9IHN0b3JhZ2U7XHJcblxyXG4gICAgY29uc3QgbWF0cml4ID0gWy4uLnRyYW5zZm9ybV07XHJcblxyXG4gICAgY29uc3QgYW5nbGUgPSBzbmFwVG9HcmlkKHJlZmFuZyArIHJhZGlhbnMsIHNuYXAuYW5nbGUpO1xyXG5cclxuICAgIC8vcm90YXRlKFhkZWcpID0gbWF0cml4KGNvcyhYKSwgc2luKFgpLCAtc2luKFgpLCBjb3MoWCksIDAsIDApO1xyXG4gICAgbWF0cml4WzBdID0gZmxvYXRUb0ZpeGVkKE1hdGguY29zKGFuZ2xlKSk7XHJcbiAgICBtYXRyaXhbMV0gPSBmbG9hdFRvRml4ZWQoTWF0aC5zaW4oYW5nbGUpKTtcclxuICAgIG1hdHJpeFsyXSA9IC0gZmxvYXRUb0ZpeGVkKE1hdGguc2luKGFuZ2xlKSk7XHJcbiAgICBtYXRyaXhbM10gPSBmbG9hdFRvRml4ZWQoTWF0aC5jb3MoYW5nbGUpKTtcclxuXHJcbiAgICBjb25zdCBjc3MgPSBtYXRyaXhUb0NTUyhtYXRyaXgpO1xyXG5cclxuICAgIEhlbHBlcihjb250cm9scykuY3NzKGNzcyk7XHJcbiAgICBIZWxwZXIoZWwpLmNzcyhjc3MpO1xyXG5cclxuICAgIHN0b3JhZ2UuY2FjaGVkID0gbWF0cml4O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXRyaXhUb0NTUyhhcnIpIHtcclxuXHJcbiAgICBjb25zdCBzdHlsZSA9IGBtYXRyaXgoJHthcnIuam9pbigpfSlgO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzdHlsZSxcclxuICAgICAgICB3ZWJraXRUcmFuZm9ybTogc3R5bGUsXHJcbiAgICAgICAgbW96VHJhbnNmb3JtOiBzdHlsZSxcclxuICAgICAgICBtc1RyYW5zZm9ybTogc3R5bGUsXHJcbiAgICAgICAgb3RyYW5zZm9ybTogc3R5bGUgICAgICAgICAgICAgICAgICAgICBcclxuICAgIH1cclxufSIsImltcG9ydCB7XHJcbiAgICByZWNhbGNQb2ludFxyXG59IGZyb20gJy4uL2NvbW1vbidcclxuXHJcbmNvbnN0IGRSRSA9IC8oW2FjaGxtcXN0dnpdKShbXmFjaGxtcXN0dnpdKikvZ2k7XHJcbmNvbnN0IHNlcFJFID0gL1xccyosXFxzKnxcXHMrL2c7XHJcblxyXG5mdW5jdGlvbiBwYXJzZVBhdGgocGF0aCkgIHtcclxuXHJcbiAgICBsZXQgbWF0Y2ggPSBkUkUubGFzdEluZGV4ID0gMDtcclxuXHJcbiAgICBjb25zdCBzZXJpYWxpemVkID0gW107XHJcblxyXG4gICAgd2hpbGUgKChtYXRjaCA9IGRSRS5leGVjKHBhdGgpKSkge1xyXG5cclxuICAgICAgICBjb25zdCBjbWQgPSBtYXRjaFsxXTtcclxuICAgICAgICBjb25zdCB1cENtZCA9IGNtZC50b1VwcGVyQ2FzZSgpO1xyXG5cclxuICAgICAgICBzZXJpYWxpemVkLnB1c2goe1xyXG4gICAgICAgICAgICByZWxhdGl2ZTogY21kICE9PSB1cENtZCxcclxuICAgICAgICAgICAga2V5OiB1cENtZCxcclxuICAgICAgICAgICAgY21kOiBjbWQsXHJcbiAgICAgICAgICAgIHZhbHVlOiBtYXRjaFsyXS50cmltKCkuc3BsaXQoc2VwUkUpLm1hcCh2YWwgPT4geyBcclxuICAgICAgICAgICAgICAgIGlmICghaXNOYU4odmFsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBOdW1iZXIodmFsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc2VyaWFsaXplZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1vdmVQYXRoKHBhcmFtcykge1xyXG5cclxuICAgIGNvbnN0IHsgcGF0aCwgeCwgeSB9ID0gcGFyYW1zO1xyXG5cclxuICAgIGNvbnN0IHNlcmlhbGl6ZWQgPSBwYXJzZVBhdGgocGF0aCk7XHJcblxyXG4gICAgbGV0IHN0ciA9ICcnO1xyXG5cclxuICAgIGxldCBmaXJzdENvbW1hbmQgPSB0cnVlO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBzZXJpYWxpemVkLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBzZXJpYWxpemVkW2ldO1xyXG5cclxuICAgICAgICBjb25zdCB7IFxyXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVzLFxyXG4gICAgICAgICAgICBrZXk6IGNtZCxcclxuICAgICAgICAgICAgcmVsYXRpdmVcclxuICAgICAgICB9ID0gaXRlbTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChjbWQpIHtcclxuICAgICAgICAgICAgY2FzZSAnTSc6XHJcbiAgICAgICAgICAgICAgICBpZiAocmVsYXRpdmUgJiYgIWZpcnN0Q29tbWFuZCkgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXNbMF0gPSB2YWx1ZXNbMF0gKyB4O1xyXG4gICAgICAgICAgICAgICAgdmFsdWVzWzFdID0gdmFsdWVzWzFdICsgeTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdBJzpcclxuICAgICAgICAgICAgICAgIGlmIChyZWxhdGl2ZSkgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXNbNV0gPSB2YWx1ZXNbNV0gKyB4O1xyXG4gICAgICAgICAgICAgICAgdmFsdWVzWzZdID0gdmFsdWVzWzZdICsgeTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdDJzpcclxuICAgICAgICAgICAgICAgIGlmIChyZWxhdGl2ZSkgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXNbMF0gPSB2YWx1ZXNbMF0gKyB4O1xyXG4gICAgICAgICAgICAgICAgdmFsdWVzWzFdID0gdmFsdWVzWzFdICsgeTtcclxuICAgICAgICAgICAgICAgIHZhbHVlc1syXSA9IHZhbHVlc1syXSArIHg7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXNbM10gPSB2YWx1ZXNbM10gKyB5O1xyXG4gICAgICAgICAgICAgICAgdmFsdWVzWzRdID0gdmFsdWVzWzRdICsgeDtcclxuICAgICAgICAgICAgICAgIHZhbHVlc1s1XSA9IHZhbHVlc1s1XSArIHk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnSCc6XHJcbiAgICAgICAgICAgICAgICBpZiAocmVsYXRpdmUpIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgdmFsdWVzWzBdID0gdmFsdWVzWzBdICsgeDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdWJzpcclxuICAgICAgICAgICAgICAgIGlmIChyZWxhdGl2ZSkgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXNbMF0gPSB2YWx1ZXNbMF0gKyB5O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ0wnOlxyXG4gICAgICAgICAgICBjYXNlICdUJzpcclxuICAgICAgICAgICAgICAgIGlmIChyZWxhdGl2ZSkgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXNbMF0gPSB2YWx1ZXNbMF0gKyB4O1xyXG4gICAgICAgICAgICAgICAgdmFsdWVzWzFdID0gdmFsdWVzWzFdICsgeTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSAnUSc6XHJcbiAgICAgICAgICAgIGNhc2UgJ1MnOlxyXG4gICAgICAgICAgICAgICAgaWYgKHJlbGF0aXZlKSBicmVhaztcclxuICAgICAgICAgICAgICAgIHZhbHVlc1swXSA9IHZhbHVlc1swXSArIHg7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXNbMV0gPSB2YWx1ZXNbMV0gKyB5O1xyXG4gICAgICAgICAgICAgICAgdmFsdWVzWzJdID0gdmFsdWVzWzJdICsgeDtcclxuICAgICAgICAgICAgICAgIHZhbHVlc1szXSA9IHZhbHVlc1szXSArIHk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnWic6XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXNbMF0gPSAnJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RyICs9IGl0ZW0uY21kICsgaXRlbS52YWx1ZS5qb2luKCcsJykgKyAnICc7XHJcbiAgICAgICAgZmlyc3RDb21tYW5kID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN0cjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc2l6ZVBhdGgocGFyYW1zKSB7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGJCb3gsXHJcbiAgICAgICAgcGF0aCxcclxuICAgICAgICBiYXNlRGF0YSxcclxuICAgICAgICBkeCxcclxuICAgICAgICBkeSxcclxuICAgICAgICByZXZYLFxyXG4gICAgICAgIHJldlksXHJcbiAgICAgICAgZml4ZWRYLFxyXG4gICAgICAgIGZpeGVkWVxyXG4gICAgfSA9IHBhcmFtcztcclxuXHJcbiAgICBjb25zdCBzZXJpYWxpemVkID0gcGFyc2VQYXRoKHBhdGgpO1xyXG5cclxuICAgIGNvbnN0IHsgXHJcbiAgICAgICAgd2lkdGg6IGJveFcsXHJcbiAgICAgICAgaGVpZ2h0OiBib3hIXHJcbiAgICB9ID0gYkJveDtcclxuXHJcbiAgICBsZXQgc3RyID0gJyc7XHJcbiAgICBjb25zdCByZXMgPSBbXTtcclxuXHJcbiAgICBsZXQgZmlyc3RDb21tYW5kID0gdHJ1ZTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gc2VyaWFsaXplZC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG5cclxuICAgICAgICBjb25zdCBpdGVtID0gc2VyaWFsaXplZFtpXTtcclxuXHJcbiAgICAgICAgY29uc3QgeyBcclxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlcyxcclxuICAgICAgICAgICAga2V5OiBjbWQsXHJcbiAgICAgICAgICAgIHJlbGF0aXZlXHJcbiAgICAgICAgfSA9IGl0ZW07XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIHN3aXRjaCAoY21kKSB7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdBJzoge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vQSByeCByeSB4LWF4aXMtcm90YXRpb24gbGFyZ2UtYXJjLWZsYWcgc3dlZXAtZmxhZyB4IHlcclxuICAgICAgICAgICAgICAgIGNvbnN0IFsgcngsIHJ5LCB4X2F4aXNfcm90LCBsYXJnZV9hcmNfZmxhZywgc3dlZXBfZmxhZywgeCwgeSBdID0gdmFsdWVzO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGZhY3RvclggPSBnZXRGYWN0b3IocmV2WCksXHJcbiAgICAgICAgICAgICAgICAgICAgZmFjdG9yWSA9IGdldEZhY3RvcihyZXZZKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3UnggPSByeCArIGR4ICogZmFjdG9yWCAqIChyeCAvIGJveFcpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5ld1J5ID0gIHJ5ICsgZHkgKiBmYWN0b3JZICogKHJ5IC8gYm94SCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHBhcmFtcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIG5ld1J4LFxyXG4gICAgICAgICAgICAgICAgICAgIG5ld1J5LFxyXG4gICAgICAgICAgICAgICAgICAgIHhfYXhpc19yb3QsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFyZ2VfYXJjX2ZsYWcsXHJcbiAgICAgICAgICAgICAgICAgICAgc3dlZXBfZmxhZ1xyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVsYXRpdmUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFJlbGF0aXZlQ29vcmQoeCwgZHggKiBmYWN0b3JYLCBib3hXKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmVsYXRpdmVDb29yZCh5LCBkeSAqIGZhY3RvclksIGJveEgpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsWCA9IHNldENvb3JkKHgsIGR4LCBmaXhlZFgsIGJveFcpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxZID0gc2V0Q29vcmQoeSwgZHksIGZpeGVkWSwgYm94SCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgcmVzWCwgcmVzWSB9ID0gcmVjYWxjUG9pbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiB2YWxYLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiB2YWxZLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5iYXNlRGF0YVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzWCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzWVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzLnB1c2gocGFyYW1zKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FzZSAnQyc6IHtcclxuXHJcbiAgICAgICAgICAgICAgICAvL0MgeDEgeTEsIHgyIHkyLCB4IHkgKG9yIGMgZHgxIGR5MSwgZHgyIGR5MiwgZHggZHkpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBbIHgxLCB5MSwgeDIsIHkyLCB4LCB5IF0gPSB2YWx1ZXM7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlbGF0aXZlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZhY3RvclggPSBnZXRGYWN0b3IocmV2WCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhY3RvclkgPSBnZXRGYWN0b3IocmV2WSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5wdXNoKFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmVsYXRpdmVDb29yZCh4MSwgZHggKiBmYWN0b3JYLCBib3hXKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmVsYXRpdmVDb29yZCh5MSwgZHkgKiBmYWN0b3JZLCBib3hIKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmVsYXRpdmVDb29yZCh4MiwgZHggKiBmYWN0b3JYLCBib3hXKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmVsYXRpdmVDb29yZCh5MiwgZHkgKiBmYWN0b3JZLCBib3hIKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmVsYXRpdmVDb29yZCh4LCBkeCAqIGZhY3RvclgsIGJveFcpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRSZWxhdGl2ZUNvb3JkKHksIGR5ICogZmFjdG9yWSwgYm94SClcclxuICAgICAgICAgICAgICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmYWN0b3JYMSA9IHJldlggJiYgeDEgPiBmaXhlZFggfHwgIXJldlggJiYgeDEgPCBmaXhlZFggPyAtMSA6IDEsICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWN0b3JZMSA9IHJldlkgJiYgeTEgPiBmaXhlZFkgfHwgIXJldlkgJiYgeTEgPCBmaXhlZFkgPyAtMSA6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhY3RvclgyID0gcmV2WCAmJiB4MiA+IGZpeGVkWCB8fCAhcmV2WCAmJiB4MiA8IGZpeGVkWCA/IC0xIDogMSwgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhY3RvclkyID0gcmV2WSAmJiB5MiA+IGZpeGVkWSB8fCAhcmV2WSAmJiB5MiA8IGZpeGVkWSA/IC0xIDogMTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyByZXNYOiByZXNYMSwgcmVzWTogcmVzWTEgfSA9IHJlY2FsY1BvaW50KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogc2V0Q29vcmQoeDEsIGR4ICogZmFjdG9yWDEsIGZpeGVkWCwgYm94VyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHNldENvb3JkKHkxLCBkeSAqIGZhY3RvclkxLCBmaXhlZFksIGJveEgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5iYXNlRGF0YVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHJlc1g6IHJlc1gyLCByZXNZOiByZXNZMiB9ID0gcmVjYWxjUG9pbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBzZXRDb29yZCh4MiwgZHggKiBmYWN0b3JYMiwgZml4ZWRYLCBib3hXKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogc2V0Q29vcmQoeTIsIGR5ICogZmFjdG9yWTIsIGZpeGVkWSwgYm94SCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmJhc2VEYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgcmVzWDogcmVzWDMsIHJlc1k6IHJlc1kzIH0gPSByZWNhbGNQb2ludCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNldENvb3JkKHgsIGR4LCBmaXhlZFgsIGJveFcpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBzZXRDb29yZCh5LCBkeSwgZml4ZWRZLCBib3hIKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uYmFzZURhdGFcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnB1c2goW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNYMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzWTEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc1gyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNZMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzWDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc1kzXHJcbiAgICAgICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FzZSAnSCc6IHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVsYXRpdmUpIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZhY3RvclggPSBnZXRGYWN0b3IocmV2WCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnB1c2goW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRSZWxhdGl2ZUNvb3JkKHZhbHVlc1swXSwgZHggKiBmYWN0b3JYLCBib3hXKVxyXG4gICAgICAgICAgICAgICAgICAgIF0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgcmVzWCB9ID0gcmVjYWxjUG9pbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBzZXRDb29yZCh2YWx1ZXNbMF0sIGR4LCBmaXhlZFgsIGJveFcpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5iYXNlRGF0YVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXMucHVzaChbcmVzWF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ1YnOiB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlbGF0aXZlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZhY3RvclkgPSBnZXRGYWN0b3IocmV2WSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5wdXNoKFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmVsYXRpdmVDb29yZCh2YWx1ZXNbMF0sIGR5ICogZmFjdG9yWSwgYm94SClcclxuICAgICAgICAgICAgICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHJlc1kgfSA9IHJlY2FsY1BvaW50KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogc2V0Q29vcmQodmFsdWVzWzBdLCBkeSwgZml4ZWRZLCBib3hIKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uYmFzZURhdGFcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnB1c2goW3Jlc1ldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYXNlICdUJzpcclxuICAgICAgICAgICAgY2FzZSAnTCc6IHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVsYXRpdmUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmFjdG9yWCA9IGdldEZhY3RvcihyZXZYKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFjdG9yWSA9IGdldEZhY3RvcihyZXZZKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnB1c2goW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRSZWxhdGl2ZUNvb3JkKHZhbHVlc1swXSwgZHggKiBmYWN0b3JYLCBib3hXKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFJlbGF0aXZlQ29vcmQodmFsdWVzWzFdLCBkeSAqIGZhY3RvclksIGJveEgpXHJcbiAgICAgICAgICAgICAgICAgICAgXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyByZXNYLCByZXNZIH0gPSByZWNhbGNQb2ludCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNldENvb3JkKHZhbHVlc1swXSwgZHgsIGZpeGVkWCwgYm94VyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHNldENvb3JkKHZhbHVlc1sxXSwgZHksIGZpeGVkWSwgYm94SCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmJhc2VEYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5wdXNoKFtyZXNYLCByZXNZXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FzZSAnTSc6IHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBNIHggeSAob3IgZHggZHkpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBbIHgsIHkgXSA9IHZhbHVlcztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVsYXRpdmUgJiYgIWZpcnN0Q29tbWFuZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmYWN0b3JYID0gZ2V0RmFjdG9yKHJldlgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWN0b3JZID0gZ2V0RmFjdG9yKHJldlkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXMucHVzaChbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFJlbGF0aXZlQ29vcmQoeCwgZHggKiBmYWN0b3JYLCBib3hXKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFJlbGF0aXZlQ29vcmQoeSwgZHkgKiBmYWN0b3JZLCBib3hIKVxyXG4gICAgICAgICAgICAgICAgICAgIF0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgcmVzWCwgcmVzWSB9ID0gcmVjYWxjUG9pbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBzZXRDb29yZCh4LCBkeCwgZml4ZWRYLCBib3hXKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogc2V0Q29vcmQoeSwgZHksIGZpeGVkWSwgYm94SCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmJhc2VEYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5wdXNoKFtyZXNYLCByZXNZXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ1EnOiB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9RIHgxIHkxLCB4IHkgKG9yIHEgZHgxIGR5MSwgZHggZHkpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBbeDEsIHkxLCB4LCB5XSA9IHZhbHVlcztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVsYXRpdmUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmFjdG9yWCA9IGdldEZhY3RvcihyZXZYKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFjdG9yWSA9IGdldEZhY3RvcihyZXZZKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnB1c2goW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRSZWxhdGl2ZUNvb3JkKHgxLCBkeCAqIGZhY3RvclgsIGJveFcpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmVsYXRpdmVDb29yZCh5MSwgZHkgKiBmYWN0b3JZLCBib3hIKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFJlbGF0aXZlQ29vcmQoeCwgZHggKiBmYWN0b3JYLCBib3hXKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFJlbGF0aXZlQ29vcmQoeSwgZHkgKiBmYWN0b3JZLCBib3hIKVxyXG4gICAgICAgICAgICAgICAgICAgIF0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZhY3RvclggPSByZXZYICYmIHgxID4gZml4ZWRYIHx8ICFyZXZYICYmIHgxIDwgZml4ZWRYID8gLTEgOiAxLCAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFjdG9yWSA9IHJldlkgJiYgeTEgPiBmaXhlZFkgfHwgIXJldlkgJiYgeTEgPCBmaXhlZFkgPyAtMSA6IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgcmVzWDogcmVzWDEsIHJlc1k6IHJlc1kxIH0gPSByZWNhbGNQb2ludCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNldENvb3JkKHgxLCBkeCAqIGZhY3RvclgsIGZpeGVkWCwgYm94VyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHNldENvb3JkKHkxLCBkeSAqIGZhY3RvclksIGZpeGVkWSwgYm94SCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmJhc2VEYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgcmVzWDogcmVzWDIsIHJlc1k6IHJlc1kyIH0gPSByZWNhbGNQb2ludCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNldENvb3JkKHgsIGR4LCBmaXhlZFgsIGJveFcpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBzZXRDb29yZCh5LCBkeSwgZml4ZWRZLCBib3hIKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uYmFzZURhdGFcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnB1c2goW3Jlc1gxLCByZXNZMSwgcmVzWDIsIHJlc1kyXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYXNlICdTJzoge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vUyB4MiB5MiwgeCB5IChvciBzIGR4MiBkeTIsIGR4IGR5KVxyXG4gICAgICAgICAgICAgICAgY29uc3QgWyB4MiwgeTIsIHgsIHkgXSA9IHZhbHVlcztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVsYXRpdmUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmFjdG9yWCA9IGdldEZhY3RvcihyZXZYKSwgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhY3RvclkgPSBnZXRGYWN0b3IocmV2WSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5wdXNoKFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmVsYXRpdmVDb29yZCh4MiwgZHggKiBmYWN0b3JYLCBib3hXKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmVsYXRpdmVDb29yZCh5MiwgZHkgKiBmYWN0b3JZLCBib3hIKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmVsYXRpdmVDb29yZCh4LCBkeCAqIGZhY3RvclgsIGJveFcpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRSZWxhdGl2ZUNvb3JkKHksIGR5ICogZmFjdG9yWSwgYm94SClcclxuICAgICAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZhY3RvclggPSByZXZYICYmIHgyID4gZml4ZWRYIHx8ICFyZXZYICYmIHgyIDwgZml4ZWRYID8gLTEgOiAxLCAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFjdG9yWSA9IHJldlkgJiYgeTIgPiBmaXhlZFkgfHwgIXJldlkgJiYgeTIgPCBmaXhlZFkgPyAtMSA6IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgcmVzWCA6IHJlc1gxLCByZXNZOiByZXNZMSB9ID0gcmVjYWxjUG9pbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBzZXRDb29yZCh4MiwgZHggKiBmYWN0b3JYLCBmaXhlZFgsIGJveFcpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBzZXRDb29yZCh5MiwgZHkgKiBmYWN0b3JZLCBmaXhlZFksIGJveEgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5iYXNlRGF0YVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHJlc1ggOiByZXNYMiwgcmVzWTogcmVzWTIgfSA9IHJlY2FsY1BvaW50KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogc2V0Q29vcmQoeCwgZHgsIGZpeGVkWCwgYm94VyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHNldENvb3JkKHksIGR5LCBmaXhlZFksIGJveEgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5iYXNlRGF0YVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXMucHVzaChbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc1gxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNZMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzWDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc1kyXHJcbiAgICAgICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FzZSAnWic6IHtcclxuICAgICAgICAgICAgICAgIHJlcy5wdXNoKFsnJ10pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0ciArPSBpdGVtLmNtZCArIHJlc1tpXS5qb2luKCcsJykgKyAnICc7XHJcblxyXG4gICAgICAgIGZpcnN0Q29tbWFuZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRDb29yZCh2YWx1ZSwgZGlmZiwgZml4ZWQsIGRpc3QpIHtcclxuICAgIHJldHVybiB2YWx1ZSArIGRpZmYgKiAoTWF0aC5hYnModmFsdWUgLSBmaXhlZCkgLyBkaXN0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0UmVsYXRpdmVDb29yZCh2YWx1ZSwgZGlmZiwgZGlzdCkge1xyXG4gICAgcmV0dXJuIHZhbHVlICsgZGlmZiAqICh2YWx1ZSAvIGRpc3QpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmFjdG9yKGIpIHtcclxuICAgIHJldHVybiBiID09PSB0cnVlID8gLTEgOiAxO1xyXG59IiwiaW1wb3J0IHsgSGVscGVyIH0gZnJvbSAnLi4vLi4vaGVscGVyJ1xyXG5pbXBvcnQgU3ViamVjdCBmcm9tICcuLi9zdWJqZWN0J1xyXG5cclxuaW1wb3J0IHsgXHJcbiAgICBwYXJzZVRyYW5zZm9ybSxcclxuICAgIGdldE9mZnNldFxyXG59IGZyb20gJy4uLy4uL3V0aWwvY3NzLXV0aWwnXHJcblxyXG5pbXBvcnQge1xyXG4gICAgREVHLFxyXG4gICAgc25hcFRvR3JpZCxcclxuICAgIHNuYXBDYW5kaWRhdGUsXHJcbiAgICByb3RhdGVkVG9wTGVmdCxcclxuICAgIHJlY2FsY1BvaW50XHJcbn0gZnJvbSAnLi4vY29tbW9uJ1xyXG5cclxuaW1wb3J0IHtcclxuICAgIG1vdmVQYXRoLFxyXG4gICAgcmVzaXplUGF0aCxcclxuICAgIHNldENvb3JkLFxyXG4gICAgZ2V0RmFjdG9yXHJcbn0gZnJvbSAnLi9wYXRoJ1xyXG5pbXBvcnQgeyBpc1VuZGVmIH0gZnJvbSAnLi4vLi4vdXRpbC91dGlsJztcclxuXHJcbmNvbnN0IE1JTl9TSVpFID0gMjsgXHJcbmNvbnN0IFJPVF9PRkZTRVQgPSAyNTtcclxuY29uc3QgZmxvYXRSRSA9IC9bKy1dP1xcZCsoXFwuXFxkKyk/L2c7IFxyXG5jb25zdCB0cmFuc2xhdGVSRSA9IC90cmFuc2xhdGVcXCguKlxcKSguKil0cmFuc2xhdGVcXCguKlxcKXwkLztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWdnYWJsZVNWRyBleHRlbmRzIFN1YmplY3Qge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zLCBPYnNlcnZhYmxlKSB7XHJcbiAgICAgICAgc3VwZXIoZWwsIE9ic2VydmFibGUpO1xyXG4gICAgICAgIHRoaXMuZW5hYmxlKG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIF9pbml0KGl0ZW0sIG9wdGlvbnMpIHtcclxuICAgICAgICBfaW5pdC5jYWxsKHRoaXMsIGl0ZW0sIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIF9kZXN0cm95KGl0ZW0pIHtcclxuICAgICAgICBfZGVzdHJveS5jYWxsKHRoaXMsIGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9kcmFnKCkge1xyXG4gICAgICAgIHByb2Nlc3NNb3ZlLmNhbGwodGhpcywgLi4uYXJndW1lbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICBfcm90YXRlKCkge1xyXG4gICAgICAgIHByb2Nlc3NSb3RhdGUuY2FsbCh0aGlzLCAuLi5hcmd1bWVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZXNpemUoKSB7XHJcbiAgICAgICAgcHJvY2Vzc1Jlc2l6ZS5jYWxsKHRoaXMsIC4uLmFyZ3VtZW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgX2NvbXB1dGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9jb21wdXRlLmNhbGwodGhpcywgLi4uYXJndW1lbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICBfYXBwbHkoYWN0aW9uTmFtZSkge1xyXG5cclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGJveCwgXHJcbiAgICAgICAgICAgIGhhbmRsZXMsXHJcbiAgICAgICAgICAgIHJlZmFuZyxcclxuICAgICAgICAgICAgZmFjdG9yLFxyXG4gICAgICAgICAgICB3cmFwcGVyLFxyXG4gICAgICAgICAgICBjYWNoZWQsXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybVxyXG4gICAgICAgIH0gPSB0aGlzLnN0b3JhZ2U7XHJcblxyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZSA9IHBhcnNlVHJhbnNmb3JtKHdyYXBwZXIuZ2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nKSB8fCAndHJhbnNsYXRlKDAgMCknKS50cmFuc2xhdGU7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgeCwgeSwgd2lkdGg6IG5ld1dpZHRoLCBoZWlnaHQ6IG5ld0hlaWdodCB9ID0gYm94LmdldEJCb3goKTtcclxuXHJcbiAgICAgICAgY29uc3QgZHggPSB0cmFuc2xhdGVbMF0sXHJcbiAgICAgICAgICAgIGR5ID0gdHJhbnNsYXRlWzFdLFxyXG4gICAgICAgICAgICByZXN1bHRYID0geCArIGR4LFxyXG4gICAgICAgICAgICByZXN1bHRZID0geSArIGR5O1xyXG5cclxuICAgICAgICBjb25zdCBjZW50ZXJYID0gcmVzdWx0WCArIG5ld1dpZHRoIC8gMixcclxuICAgICAgICAgICAgY2VudGVyWSA9IHJlc3VsdFkgKyBuZXdIZWlnaHQgLyAyO1xyXG5cclxuICAgICAgICBpZiAoYWN0aW9uTmFtZSAhPT0gJ3JvdGF0ZScpIHtcclxuXHJcbiAgICAgICAgICAgIGFwcGx5VHJhbnNmb3JtVG9IYW5kbGVzKGJveCwgaGFuZGxlcywge1xyXG4gICAgICAgICAgICAgICAgeDogcmVzdWx0WCxcclxuICAgICAgICAgICAgICAgIHk6IHJlc3VsdFksXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogbmV3V2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IG5ld0hlaWdodCxcclxuICAgICAgICAgICAgICAgIGFuZ2xlOiByZWZhbmcgKiBmYWN0b3JcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYWN0aW9uTmFtZSA9PT0gJ2RyYWcnKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoZHggPT09IDAgJiYgZHkgPT09IDApIHJldHVybjtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB3cmFwcGVyLnJlbW92ZUF0dHJpYnV0ZSgndHJhbnNmb3JtJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBlbHMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2cnKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbC5jaGlsZE5vZGVzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ubm9kZVR5cGUgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbC5yZW1vdmVBdHRyaWJ1dGUoJ3RyYW5zZm9ybScpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZWxzLnB1c2godGhpcy5lbCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGVscy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhcHBseVRyYW5zbGF0ZShlbGVtZW50LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgeDogZHgsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogZHksXHJcbiAgICAgICAgICAgICAgICAgICAgYW5nbGU6IHJlZmFuZyAqIGZhY3RvciAqIERFRyxcclxuICAgICAgICAgICAgICAgICAgICBjZW50ZXJYLFxyXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcllcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGFjdGlvbk5hbWUgPT09ICdyZXNpemUnKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNVbmRlZihjYWNoZWQpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjb25zdCBlbHMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgICAgIHJldlgsIFxyXG4gICAgICAgICAgICAgICAgcmV2WSxcclxuICAgICAgICAgICAgICAgIHNjYWxlWCxcclxuICAgICAgICAgICAgICAgIHNjYWxlWSxcclxuICAgICAgICAgICAgICAgIGRpZmZYLFxyXG4gICAgICAgICAgICAgICAgZGlmZllcclxuICAgICAgICAgICAgfSA9IGNhY2hlZDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgaXNHcm91cCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnZycpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWwuY2hpbGROb2Rlcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLm5vZGVUeXBlID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVscy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaXNHcm91cCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbHMucHVzaCh0aGlzLmVsKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZWxzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBhcHBseVJlc2l6ZShlbGVtZW50LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NhbGVYLFxyXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlWSxcclxuICAgICAgICAgICAgICAgICAgICBkaWZmWDogZGlmZlggKiBnZXRGYWN0b3IocmV2WCksXHJcbiAgICAgICAgICAgICAgICAgICAgZGlmZlk6IGRpZmZZICogZ2V0RmFjdG9yKHJldlkpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJldlgsXHJcbiAgICAgICAgICAgICAgICAgICAgcmV2WSxcclxuICAgICAgICAgICAgICAgICAgICBhbmdsZTogcmVmYW5nICogZmFjdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIGZhY3RvcixcclxuICAgICAgICAgICAgICAgICAgICBjZW50ZXJYLFxyXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlclksICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGJCb3g6IGlzR3JvdXAgPT09IHRydWUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRyYW5zZm9ybS5iQm94IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBlbGVtZW50LmdldEJCb3goKSxcclxuICAgICAgICAgICAgICAgICAgICBzdG9yZTogdGhpcy5zdG9yYWdlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2UuY2FjaGVkID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25SZWZyZXNoU3RhdGUoZGF0YSkge1xyXG5cclxuICAgICAgICBjb25zdCBzdG9yZSA9IHRoaXMuc3RvcmFnZTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVjYWxjID0gcmVmcmVzaFN0YXRlLmNhbGwoXHJcbiAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgIGRhdGFcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICAgIHN0b3JlW2tleV0gPSBkYXRhW2tleV07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIE9iamVjdC5rZXlzKHJlY2FsYykuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgICBzdG9yZVtrZXldID0gcmVjYWxjW2tleV07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9pbml0KHNlbCkge1xyXG5cclxuICAgIGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVTVkcoJ2cnKTtcclxuICAgIHNlbC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICB3aWR0aDogdywgXHJcbiAgICAgICAgaGVpZ2h0OiBoLCBcclxuICAgICAgICB4LCBcclxuICAgICAgICB5XHJcbiAgICB9ID0gc2VsLmdldEJCb3goKTtcclxuXHJcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSBzZWwuZ2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nKSB8fCAndHJhbnNsYXRlKDAgMCknO1xyXG5cclxuICAgIGNvbnN0IGJveCA9IGNyZWF0ZVNWRygncmVjdCcpO1xyXG5cclxuICAgIGNvbnN0IGF0dHJzID0gW1xyXG4gICAgICAgIFsnd2lkdGgnLCB3XSxcclxuICAgICAgICBbJ2hlaWdodCcsIGhdLFxyXG4gICAgICAgIFsneCcsIHhdLFxyXG4gICAgICAgIFsneScsIHldLFxyXG4gICAgICAgIFsnZmlsbCcsICd0cmFuc3BhcmVudCddLFxyXG4gICAgICAgIFsnc3Ryb2tlJywgJyMwMGE4ZmYnXSxcclxuICAgICAgICBbJ3N0cm9rZS1kYXNoYXJyYXknLCAnMyAzJ10sXHJcbiAgICAgICAgWyd0cmFuc2Zvcm0nLCB0cmFuc2Zvcm1dXHJcbiAgICBdO1xyXG5cclxuICAgIGF0dHJzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgYm94LnNldEF0dHJpYnV0ZShpdGVtWzBdLCBpdGVtWzFdKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBncm91cCA9IGNyZWF0ZVNWRygnZycpO1xyXG4gICAgICAgIGdyb3VwLmFwcGVuZENoaWxkKGJveCk7XHJcblxyXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChncm91cCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlcyA9IHtcclxuICAgICAgICB0bDogW3gsIHldLFxyXG4gICAgICAgIHRyOiBbeCArIHcsIHldLFxyXG4gICAgICAgIGJyOiBbeCArIHcsIHkgKyBoXSxcclxuICAgICAgICBibDogW3gsIHkgKyBoXSxcclxuICAgICAgICB0YzogW3ggKyB3IC8gMiwgeV0sXHJcbiAgICAgICAgYmM6IFt4ICsgdyAvIDIsIHkgKyBoXSxcclxuICAgICAgICBtbDogW3gsIHkgKyBoIC8gMl0sXHJcbiAgICAgICAgbXI6IFt4ICsgdywgeSArIGggLyAyXSxcclxuICAgICAgICByb3RhdG9yOiBbeCArIHcgLyAyLCB5IC0gUk9UX09GRlNFVF1cclxuICAgIH07XHJcblxyXG4gICAgT2JqZWN0LmtleXMoaGFuZGxlcykuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBoYW5kbGVzW2tleV07XHJcbiAgICAgICAgaGFuZGxlc1trZXldID0gY3JlYXRlSGFuZGxlcihkYXRhWzBdLCBkYXRhWzFdLCB0cmFuc2Zvcm0pO1xyXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgICAgIGNyZWF0ZVNWRygnZycpLmFwcGVuZENoaWxkKGhhbmRsZXNba2V5XSkucGFyZW50Tm9kZVxyXG4gICAgICAgICk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMuc3RvcmFnZSwge1xyXG4gICAgICAgIHdyYXBwZXIsXHJcbiAgICAgICAgYm94LFxyXG4gICAgICAgIGhhbmRsZXMsXHJcbiAgICAgICAgcGFyZW50OiB3cmFwcGVyLnBhcmVudE5vZGVcclxuICAgIH0pO1xyXG5cclxuICAgIEhlbHBlcih3cmFwcGVyKS5vbignbW91c2Vkb3duJywgdGhpcy5fb25Nb3VzZURvd24pXHJcbiAgICAgICAgICAgICAgICAgICAgLm9uKCd0b3VjaHN0YXJ0JywgdGhpcy5fb25Ub3VjaFN0YXJ0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NvbXB1dGUoZSkge1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICBib3gsXHJcbiAgICAgICAgaGFuZGxlcyxcclxuICAgICAgICBzbmFwLFxyXG4gICAgICAgIHBhcmVudFxyXG4gICAgfSA9IHRoaXMuc3RvcmFnZTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGUgPSBIZWxwZXIoZS50YXJnZXQpO1xyXG5cclxuICAgIGxldCBmYWN0b3IgPSAxO1xyXG5cclxuICAgIC8vcmV2ZXJzZSBheGlzXHJcbiAgICBjb25zdCByZXZYID0gaGFuZGxlLmlzKGhhbmRsZXMudGwpIHx8XHJcbiAgICAgICAgICAgICAgICBoYW5kbGUuaXMoaGFuZGxlcy5tbCkgfHxcclxuICAgICAgICAgICAgICAgIGhhbmRsZS5pcyhoYW5kbGVzLmJsKSB8fFxyXG4gICAgICAgICAgICAgICAgaGFuZGxlLmlzKGhhbmRsZXMudGMpO1xyXG5cclxuICAgIGNvbnN0IHJldlkgPSBoYW5kbGUuaXMoaGFuZGxlcy50bCkgfHwgXHJcbiAgICAgICAgICAgICAgICBoYW5kbGUuaXMoaGFuZGxlcy50cikgfHwgXHJcbiAgICAgICAgICAgICAgICBoYW5kbGUuaXMoaGFuZGxlcy50YykgfHwgXHJcbiAgICAgICAgICAgICAgICBoYW5kbGUuaXMoaGFuZGxlcy5tbCk7XHJcblxyXG4gICAgLy9yZXZlcnNlIGFuZ2xlXHJcbiAgICBpZiAoaGFuZGxlLmlzKGhhbmRsZXMudHIpIHx8IFxyXG4gICAgICAgIGhhbmRsZS5pcyhoYW5kbGVzLmJsKVxyXG4gICAgKSB7IFxyXG4gICAgICAgIGZhY3RvciA9IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRsX29mZiA9IGdldE9mZnNldChoYW5kbGVzLnRsKSxcclxuICAgICAgICB0cl9vZmYgPSBnZXRPZmZzZXQoaGFuZGxlcy50cik7XHJcbiAgICAgICAgXHJcbiAgICBjb25zdCByZWZhbmcgPSBNYXRoLmF0YW4yKFxyXG4gICAgICAgIHRyX29mZi50b3AgLSB0bF9vZmYudG9wLCBcclxuICAgICAgICB0cl9vZmYubGVmdCAtIHRsX29mZi5sZWZ0XHJcbiAgICApICogZmFjdG9yO1xyXG5cclxuICAgIGNvbnN0IGJCb3ggPSBib3guZ2V0QkJveCgpO1xyXG5cclxuICAgIGNvbnN0IHsgd2lkdGg6IGN3LCBoZWlnaHQ6IGNoLCB4OiBjX2xlZnQsIHk6IGNfdG9wIH0gPSBiQm94O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgIGNvbnN0IGNvb3JkcyA9IHJvdGF0ZWRUb3BMZWZ0KFxyXG4gICAgICAgIGNfbGVmdCxcclxuICAgICAgICBjX3RvcCxcclxuICAgICAgICBjdyxcclxuICAgICAgICBjaCxcclxuICAgICAgICByZWZhbmcsXHJcbiAgICAgICAgcmV2WCxcclxuICAgICAgICByZXZZXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGJveE9mZnNldCA9IGdldE9mZnNldChib3gpO1xyXG5cclxuICAgIGNvbnN0IGNlbnRlcl94ID0gYm94T2Zmc2V0LmxlZnQgKyBjdyAvIDIsXHJcbiAgICAgICAgY2VudGVyX3kgPSBib3hPZmZzZXQudG9wICsgY2ggLyAyO1xyXG5cclxuICAgIGNvbnN0IHByZXNzYW5nID0gTWF0aC5hdGFuMihcclxuICAgICAgICBlLnBhZ2VZIC0gY2VudGVyX3ksXHJcbiAgICAgICAgZS5wYWdlWCAtIGNlbnRlcl94XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IG9uVG9wRWRnZSA9IGhhbmRsZS5pcyhoYW5kbGVzLnRsKSB8fCBoYW5kbGUuaXMoaGFuZGxlcy50YykgfHwgaGFuZGxlLmlzKGhhbmRsZXMudHIpLFxyXG4gICAgICAgIG9uTGVmdEVkZ2UgPSBoYW5kbGUuaXMoaGFuZGxlcy50bCkgfHwgaGFuZGxlLmlzKGhhbmRsZXMubWwpIHx8IGhhbmRsZS5pcyhoYW5kbGVzLmJsKSxcclxuICAgICAgICBvblJpZ2h0RWRnZSA9IGhhbmRsZS5pcyhoYW5kbGVzLnRyKSB8fCBoYW5kbGUuaXMoaGFuZGxlcy5tcikgfHwgaGFuZGxlLmlzKGhhbmRsZXMuYnIpLFxyXG4gICAgICAgIG9uQm90dG9tRWRnZSA9IGhhbmRsZS5pcyhoYW5kbGVzLmJyKSB8fCBoYW5kbGUuaXMoaGFuZGxlcy5iYykgfHwgaGFuZGxlLmlzKGhhbmRsZXMuYmwpO1xyXG5cclxuICAgIGNvbnN0IHRyYW5zZm9ybSA9IHtcclxuICAgICAgICBvcmlnOiB0aGlzLmVsLmdldEF0dHJpYnV0ZSgndHJhbnNmb3JtJyksXHJcbiAgICAgICAgdmFsdWU6IGJveC5nZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScpLFxyXG4gICAgICAgIHNjYWxlWDogcmV2WCA/IGN3ICsgY19sZWZ0IDogY19sZWZ0LFxyXG4gICAgICAgIHNjYWxlWTogcmV2WSA/IGNoICsgY190b3AgOiBjX3RvcCxcclxuICAgICAgICBiQm94XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHJhbnNmb3JtLFxyXG4gICAgICAgIHBhcmVudFNjYWxlOiBwYXJzZVRyYW5zZm9ybShwYXJlbnQuZ2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nKSB8fCAnc2NhbGUoMSAxKScpLnNjYWxlLFxyXG4gICAgICAgIGN3LFxyXG4gICAgICAgIGNoLFxyXG4gICAgICAgIGNlbnRlcjoge1xyXG4gICAgICAgICAgICB4OiBib3hPZmZzZXQubGVmdCArIGN3IC8gMixcclxuICAgICAgICAgICAgeTogYm94T2Zmc2V0LnRvcCArIGNoIC8gMixcclxuICAgICAgICAgICAgbGVmdDogY19sZWZ0ICsgY3cgLyAyLFxyXG4gICAgICAgICAgICB0b3A6IGNfdG9wICsgY2ggLyAyXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsZWZ0OiBzbmFwQ2FuZGlkYXRlKGNfbGVmdCwgc25hcC54KSxcclxuICAgICAgICB0b3A6IHNuYXBDYW5kaWRhdGUoY190b3AsIHNuYXAueSksXHJcbiAgICAgICAgY29vcmRYOiBjb29yZHMubGVmdCxcclxuICAgICAgICBjb29yZFk6IGNvb3Jkcy50b3AsXHJcbiAgICAgICAgZmFjdG9yLFxyXG4gICAgICAgIHByZXNzYW5nLFxyXG4gICAgICAgIHJlZmFuZyxcclxuICAgICAgICByZXZYLFxyXG4gICAgICAgIHJldlksXHJcbiAgICAgICAgaGFuZGxlLFxyXG4gICAgICAgIG9uVG9wRWRnZSxcclxuICAgICAgICBvbkxlZnRFZGdlLFxyXG4gICAgICAgIG9uUmlnaHRFZGdlLFxyXG4gICAgICAgIG9uQm90dG9tRWRnZVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBfZGVzdHJveSgpIHtcclxuXHJcbiAgICBjb25zdCB7IHdyYXBwZXIgfSA9IHRoaXMuc3RvcmFnZTtcclxuXHJcbiAgICBIZWxwZXIod3JhcHBlcikub2ZmKCdtb3VzZWRvd24nLCB0aGlzLl9vbk1vdXNlRG93bilcclxuICAgICAgICAgICAgICAgICAgICAub2ZmKCd0b3VjaHN0YXJ0JywgdGhpcy5fb25Ub3VjaFN0YXJ0KTtcclxuXHJcbiAgICB0aGlzLmVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQod3JhcHBlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZnJlc2hTdGF0ZShwYXJhbXMpIHtcclxuXHJcbiAgICBjb25zdCB7IFxyXG4gICAgICAgIGZhY3RvciwgXHJcbiAgICAgICAgcmV2WCwgXHJcbiAgICAgICAgcmV2WSxcclxuICAgIH0gPSBwYXJhbXM7XHJcblxyXG4gICAgY29uc3QgeyBcclxuICAgICAgICBib3gsXHJcbiAgICAgICAgaGFuZGxlcyxcclxuICAgICAgICBzbmFwXHJcbiAgICB9ID0gdGhpcy5zdG9yYWdlO1xyXG5cclxuICAgIGNvbnN0IHRsX29mZiA9IGdldE9mZnNldChoYW5kbGVzLnRsKSxcclxuICAgICAgICB0cl9vZmYgPSBnZXRPZmZzZXQoaGFuZGxlcy50cik7XHJcblxyXG4gICAgbGV0IHJlZmFuZyA9IE1hdGguYXRhbjIoXHJcbiAgICAgICAgdHJfb2ZmLnkgLSB0bF9vZmYueSwgXHJcbiAgICAgICAgdHJfb2ZmLnggLSB0bF9vZmYueFxyXG4gICAgKSAqIGZhY3RvcjtcclxuXHJcbiAgICBjb25zdCBiQm94ID0gYm94LmdldEJCb3goKTtcclxuXHJcbiAgICBjb25zdCB7IHdpZHRoOiBjdywgaGVpZ2h0OiBjaCwgeDogY19sZWZ0LCB5OiBjX3RvcCB9ID0gYkJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgY29uc3QgY29vcmRzID0gcm90YXRlZFRvcExlZnQoXHJcbiAgICAgICAgY19sZWZ0LFxyXG4gICAgICAgIGNfdG9wLFxyXG4gICAgICAgIGN3LFxyXG4gICAgICAgIGNoLFxyXG4gICAgICAgIHJlZmFuZyxcclxuICAgICAgICByZXZYLFxyXG4gICAgICAgIHJldllcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgYm94T2Zmc2V0ID0gZ2V0T2Zmc2V0KGJveCk7XHJcblxyXG4gICAgY29uc3QgdHJhbnNmb3JtID0ge1xyXG4gICAgICAgIG9yaWc6IHRoaXMuZWwuZ2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nKSxcclxuICAgICAgICB2YWx1ZTogYm94LmdldEF0dHJpYnV0ZSgndHJhbnNmb3JtJyksXHJcbiAgICAgICAgc2NhbGVYOiByZXZYID8gY3cgKyBjX2xlZnQgOiBjX2xlZnQsXHJcbiAgICAgICAgc2NhbGVZOiByZXZZID8gY2ggKyBjX3RvcCA6IGNfdG9wLFxyXG4gICAgICAgIGJCb3hcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0cmFuc2Zvcm0sXHJcbiAgICAgICAgY3csXHJcbiAgICAgICAgY2gsXHJcbiAgICAgICAgY2VudGVyOiB7XHJcbiAgICAgICAgICAgIHg6IGJveE9mZnNldC5sZWZ0ICsgY3cgLyAyLFxyXG4gICAgICAgICAgICB5OiBib3hPZmZzZXQudG9wICsgY2ggLyAyLFxyXG4gICAgICAgICAgICBsZWZ0OiBjX2xlZnQgKyBjdyAvIDIsXHJcbiAgICAgICAgICAgIHRvcDogY190b3AgKyBjaCAvIDJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxlZnQ6IHNuYXBDYW5kaWRhdGUoY19sZWZ0LCBzbmFwLngpLFxyXG4gICAgICAgIHRvcDogc25hcENhbmRpZGF0ZShjX3RvcCwgc25hcC55KSxcclxuICAgICAgICBjb29yZFg6IGNvb3Jkcy5sZWZ0LFxyXG4gICAgICAgIGNvb3JkWTogY29vcmRzLnRvcCxcclxuICAgICAgICBmYWN0b3IsXHJcbiAgICAgICAgcmVmYW5nXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2Nlc3NSZXNpemUoXHJcbiAgICB3aWR0aCxcclxuICAgIGhlaWdodCxcclxuICAgIHJldlgsIFxyXG4gICAgcmV2WVxyXG4pIHtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgYm94LFxyXG4gICAgICAgIGhhbmRsZXMsXHJcbiAgICAgICAgc25hcCxcclxuICAgICAgICBsZWZ0LFxyXG4gICAgICAgIHRvcCxcclxuICAgICAgICBjb29yZFgsXHJcbiAgICAgICAgY29vcmRZLFxyXG4gICAgICAgIHJlZmFuZyxcclxuICAgICAgICBmYWN0b3IsXHJcbiAgICAgICAgY3csXHJcbiAgICAgICAgY2gsXHJcbiAgICAgICAgdHJhbnNmb3JtXHJcbiAgICB9ID0gdGhpcy5zdG9yYWdlO1xyXG4gICAgICAgIFxyXG4gICAgY29uc3Qgc2VsID0gdGhpcy5lbDtcclxuICAgICAgICBcclxuICAgIGxldCBuZXdXaWR0aCA9IE51bWJlcihib3guZ2V0QXR0cmlidXRlKCd3aWR0aCcpKSxcclxuICAgICAgICBuZXdIZWlnaHQgPSBOdW1iZXIoYm94LmdldEF0dHJpYnV0ZSgnaGVpZ2h0JykpO1xyXG5cclxuICAgIGlmICh3aWR0aCAhPT0gbnVsbCkge1xyXG4gICAgICAgIG5ld1dpZHRoID0gc25hcFRvR3JpZCh3aWR0aCwgc25hcC54KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaGVpZ2h0ICE9PSBudWxsKSB7XHJcbiAgICAgICAgbmV3SGVpZ2h0ID0gc25hcFRvR3JpZChoZWlnaHQsIHNuYXAueSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKE1hdGguYWJzKG5ld1dpZHRoKSA8IE1JTl9TSVpFIHx8IE1hdGguYWJzKG5ld0hlaWdodCkgPCBNSU5fU0laRSkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGNvb3JkcyA9IHJvdGF0ZWRUb3BMZWZ0KFxyXG4gICAgICAgIGxlZnQsXHJcbiAgICAgICAgdG9wLFxyXG4gICAgICAgIG5ld1dpZHRoLFxyXG4gICAgICAgIG5ld0hlaWdodCxcclxuICAgICAgICByZWZhbmcsXHJcbiAgICAgICAgcmV2WCxcclxuICAgICAgICByZXZZXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdFkgPSB0b3AgLSAoY29vcmRzLnRvcCAtIGNvb3JkWSksXHJcbiAgICAgICAgcmVzdWx0WCA9IGxlZnQgLSAoY29vcmRzLmxlZnQgLSBjb29yZFgpO1xyXG5cclxuICAgIGFwcGx5VHJhbnNmb3JtVG9IYW5kbGVzKGJveCwgaGFuZGxlcywge1xyXG4gICAgICAgIHg6IHJlc3VsdFgsXHJcbiAgICAgICAgeTogcmVzdWx0WSxcclxuICAgICAgICB3aWR0aDogbmV3V2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiBuZXdIZWlnaHQsXHJcbiAgICAgICAgYW5nbGU6IHJlZmFuZyAqIGZhY3RvclxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc2NhbGVYID0gbmV3V2lkdGggLyBjdyxcclxuICAgICAgICBzY2FsZVkgPSBuZXdIZWlnaHQgLyBjaDtcclxuXHJcbiAgICB0aGlzLnN0b3JhZ2UuY2FjaGVkID0ge1xyXG4gICAgICAgIHNjYWxlWDogc2NhbGVYLFxyXG4gICAgICAgIHNjYWxlWTogc2NhbGVZLFxyXG4gICAgICAgIGRpZmZYOiBuZXdXaWR0aCAtIGN3LFxyXG4gICAgICAgIGRpZmZZOiBuZXdIZWlnaHQgLSBjaCxcclxuICAgICAgICByZXZYOiByZXZYLFxyXG4gICAgICAgIHJldlk6IHJldllcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgeyBzY2FsZVg6IHB0WCwgc2NhbGVZOiBwdFkgfSA9IHRyYW5zZm9ybTtcclxuXHJcbiAgICBjb25zdCBzY2FsZVN0cmluZyA9IGB0cmFuc2xhdGUoJHtwdFh9ICR7cHRZfSkgc2NhbGUoJHtzY2FsZVh9ICR7c2NhbGVZfSkgdHJhbnNsYXRlKCR7LXB0WH0gJHstcHRZfSlgO1xyXG5cclxuICAgIGlmIChzZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnZycpIHtcclxuICAgICAgICBzZWwuY2hpbGROb2Rlcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQubm9kZVR5cGUgIT09IDEpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG9sZFRyYW5zZm9ybSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nKSB8fCAnJztcclxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgICAgICAndHJhbnNmb3JtJywgXHJcbiAgICAgICAgICAgICAgICBvbGRUcmFuc2Zvcm0ucmVwbGFjZSh0cmFuc2xhdGVSRSwgc2NhbGVTdHJpbmcpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IG9sZFRyYW5zZm9ybSA9IHNlbC5nZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScpIHx8ICcnO1xyXG4gICAgICAgIHNlbC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgICd0cmFuc2Zvcm0nLCBcclxuICAgICAgICAgICAgb2xkVHJhbnNmb3JtLnJlcGxhY2UodHJhbnNsYXRlUkUsIHNjYWxlU3RyaW5nKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2Nlc3NNb3ZlKFxyXG4gICAgdG9wLFxyXG4gICAgbGVmdFxyXG4pIHtcclxuICAgIGxldCB7XHJcbiAgICAgICAgc25hcCxcclxuICAgICAgICB0cmFuc2Zvcm0sXHJcbiAgICAgICAgd3JhcHBlclxyXG4gICAgfSA9IHRoaXMuc3RvcmFnZTtcclxuXHJcbiAgICBjb25zdCBvcmlnaW5UcmFuc2Zvcm0gPSB0cmFuc2Zvcm0ub3JpZyB8fCAnJztcclxuICAgIFxyXG4gICAgY29uc3QgeCA9IHNuYXBUb0dyaWQobGVmdCwgc25hcC54KSxcclxuICAgICAgICB5ID0gc25hcFRvR3JpZCh0b3AsIHNuYXAueSk7XHJcblxyXG4gICAgY29uc3QgdHJhbnNmb3JtU3RyaW5nID0gYHRyYW5zbGF0ZSgke3h9ICR7eX0pYDtcclxuICAgIGNvbnN0IG5ld1RyYW5zZm9ybSA9IG9yaWdpblRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGVcXCguK1xcKXxeLywgdHJhbnNmb3JtU3RyaW5nKTtcclxuXHJcbiAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZSgndHJhbnNmb3JtJywgdHJhbnNmb3JtU3RyaW5nKTtcclxuICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nLCBuZXdUcmFuc2Zvcm0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9jZXNzUm90YXRlKHJhZGlhbnMpIHtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgcmVmYW5nLFxyXG4gICAgICAgIHNuYXAsXHJcbiAgICAgICAgY2VudGVyLFxyXG4gICAgICAgIGJveCxcclxuICAgICAgICBoYW5kbGVzXHJcbiAgICB9ID0gdGhpcy5zdG9yYWdlO1xyXG5cclxuICAgIGNvbnN0IGFuZ2xlID0gc25hcFRvR3JpZChyZWZhbmcgKyByYWRpYW5zLCBzbmFwLmFuZ2xlKTtcclxuXHJcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSBgcm90YXRlKCR7YW5nbGUgKiBERUd9ICR7Y2VudGVyLmxlZnR9ICR7Y2VudGVyLnRvcH0pYDtcclxuXHJcbiAgICBib3guc2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nLCB0cmFuc2Zvcm0pO1xyXG5cclxuICAgIE9iamVjdC5rZXlzKGhhbmRsZXMpLmZvckVhY2goaGRsID0+IHtcclxuICAgICAgICBoYW5kbGVzW2hkbF0uc2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nLCB0cmFuc2Zvcm0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHRoaXMuZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnZycpIHtcclxuICAgICAgICB0aGlzLmVsLmNoaWxkTm9kZXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5ub2RlVHlwZSAhPT0gMSkgcmV0dXJuO1xyXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndHJhbnNmb3JtJywgdHJhbnNmb3JtKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScsIHRyYW5zZm9ybSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVNWRyhuYW1lKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsIG5hbWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVIYW5kbGVyKGwsIHQsIHRyYW5zZm9ybSkge1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZXIgPSBjcmVhdGVTVkcoJ2NpcmNsZScpO1xyXG4gICAgXHJcbiAgICBjb25zdCBpdGVtcyA9IHtcclxuICAgICAgICBjeDogbCxcclxuICAgICAgICBjeTogdCxcclxuICAgICAgICByOiA2LFxyXG4gICAgICAgIGZpbGw6ICd3aGl0ZScsXHJcbiAgICAgICAgc3Ryb2tlOiAnIzAwYThmZicsXHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm1cclxuICAgIH07XHJcblxyXG4gICAgT2JqZWN0LmtleXMoaXRlbXMpLm1hcChrZXkgPT4ge1xyXG4gICAgICAgIGhhbmRsZXIuc2V0QXR0cmlidXRlKGtleSwgaXRlbXNba2V5XSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gaGFuZGxlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlUcmFuc2xhdGUoZWxlbWVudCwgZGF0YSkge1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICB4LFxyXG4gICAgICAgIHksXHJcbiAgICAgICAgYW5nbGUsXHJcbiAgICAgICAgY2VudGVyWCxcclxuICAgICAgICBjZW50ZXJZXHJcbiAgICB9ID0gZGF0YTtcclxuXHJcbiAgICBjb25zdCBhdHRycyA9IFtcclxuICAgICAgICBbJ3RyYW5zZm9ybScsIGByb3RhdGUoJHthbmdsZX0gJHtjZW50ZXJYfSAke2NlbnRlcll9KWBdXHJcbiAgICBdO1xyXG5cclxuICAgIHN3aXRjaChlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSkge1xyXG5cclxuICAgICAgICBjYXNlICd0ZXh0JzpcclxuICAgICAgICBjYXNlICdyZWN0Jzoge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCByZXNYID0gTnVtYmVyKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd4JykpICsgeCxcclxuICAgICAgICAgICAgICAgICAgICByZXNZID0gTnVtYmVyKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd5JykpICsgeTtcclxuXHJcbiAgICAgICAgICAgICAgICBhdHRycy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIFsneCcsIHJlc1hdLFxyXG4gICAgICAgICAgICAgICAgICAgIFsneScsIHJlc1ldXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICdjaXJjbGUnOlxyXG4gICAgICAgIGNhc2UgJ2VsbGlwc2UnOiB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHJlc1ggPSBOdW1iZXIoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2N4JykpICsgeCxcclxuICAgICAgICAgICAgICAgICAgICByZXNZID0gTnVtYmVyKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdjeScpKSArIHk7XHJcblxyXG4gICAgICAgICAgICAgICAgYXR0cnMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICBbJ2N4JywgcmVzWF0sXHJcbiAgICAgICAgICAgICAgICAgICAgWydjeScsIHJlc1ldXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNhc2UgJ2xpbmUnOiB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHJlc1gxID0gTnVtYmVyKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd4MScpKSArIHgsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzWTEgPSBOdW1iZXIoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3kxJykpICsgeSxcclxuICAgICAgICAgICAgICAgICAgICByZXNYMiA9IE51bWJlcihlbGVtZW50LmdldEF0dHJpYnV0ZSgneDInKSkgKyB4LFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc1kyID0gTnVtYmVyKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd5MicpKSArIHk7XHJcblxyXG4gICAgICAgICAgICAgICAgYXR0cnMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICBbJ3gxJywgcmVzWDFdLFxyXG4gICAgICAgICAgICAgICAgICAgIFsneTEnLCByZXNZMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgWyd4MicsIHJlc1gyXSxcclxuICAgICAgICAgICAgICAgICAgICBbJ3kyJywgcmVzWTJdXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICdwb2x5Z29uJzpcclxuICAgICAgICBjYXNlICdwb2x5bGluZSc6IHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb2ludHMgPSBwYXJzZVBvaW50cyhlbGVtZW50LmdldEF0dHJpYnV0ZSgncG9pbnRzJykpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcG9pbnRzLm1hcChpdGVtID0+IHsgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1bMF0gPSBOdW1iZXIoaXRlbVswXSkgKyB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1bMV0gPSBOdW1iZXIoaXRlbVsxXSkgKyB5O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5qb2luKCcgJyk7XHJcbiAgICAgICAgICAgICAgICB9KS5qb2luKCcgJyk7IFxyXG5cclxuICAgICAgICAgICAgICAgIGF0dHJzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgWydwb2ludHMnLCByZXN1bHRdXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNhc2UgJ3BhdGgnOiB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcGF0aCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgYXR0cnMucHVzaChbJ2QnLCBtb3ZlUGF0aChcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGgsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgeVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0cnMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShpdGVtWzBdLCBpdGVtWzFdKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVJlc2l6ZShlbGVtZW50LCBkYXRhKSB7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIHNjYWxlWCxcclxuICAgICAgICBzY2FsZVksXHJcbiAgICAgICAgZGlmZlgsXHJcbiAgICAgICAgZGlmZlksXHJcbiAgICAgICAgcmV2WCxcclxuICAgICAgICByZXZZLFxyXG4gICAgICAgIGFuZ2xlLFxyXG4gICAgICAgIGNlbnRlclgsXHJcbiAgICAgICAgY2VudGVyWSxcclxuICAgICAgICBiQm94LFxyXG4gICAgICAgIHN0b3JlXHJcbiAgICB9ID0gZGF0YTtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgb25SaWdodEVkZ2UsXHJcbiAgICAgICAgb25MZWZ0RWRnZSxcclxuICAgICAgICBvblRvcEVkZ2UsXHJcbiAgICAgICAgb25Cb3R0b21FZGdlLFxyXG4gICAgICAgIGNlbnRlclxyXG4gICAgfSA9IHN0b3JlO1xyXG5cclxuICAgIGNvbnN0IHsgXHJcbiAgICAgICAgeDogYm94WCwgXHJcbiAgICAgICAgeTogYm94WSwgXHJcbiAgICAgICAgd2lkdGg6IGJveFcsIFxyXG4gICAgICAgIGhlaWdodDogYm94SFxyXG4gICAgfSA9IGJCb3g7XHJcblxyXG4gICAgbGV0IGZpeGVkWCA9IDAsIFxyXG4gICAgICAgIGZpeGVkWSA9IDA7XHJcbiAgICBcclxuICAgIGlmIChvblJpZ2h0RWRnZSkge1xyXG4gICAgICAgIGZpeGVkWCA9IGJveFg7XHJcbiAgICB9IFxyXG4gICAgaWYgKG9uTGVmdEVkZ2UpIHtcclxuICAgICAgICBmaXhlZFggPSBib3hYICsgYm94VztcclxuICAgIH0gXHJcbiAgICBpZiAob25Ub3BFZGdlKSB7XHJcbiAgICAgICAgZml4ZWRZID0gYm94WSArIGJveEg7XHJcbiAgICB9IFxyXG4gICAgaWYgKG9uQm90dG9tRWRnZSkge1xyXG4gICAgICAgIGZpeGVkWSA9IGJveFk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYmFzZURhdGEgPSB7XHJcbiAgICAgICAgY2VudGVyWDogY2VudGVyLmxlZnQsXHJcbiAgICAgICAgY2VudGVyWTogY2VudGVyLnRvcCxcclxuICAgICAgICBuZXdDZW50ZXJYOiBjZW50ZXJYLFxyXG4gICAgICAgIG5ld0NlbnRlclk6IGNlbnRlclksXHJcbiAgICAgICAgYW5nbGU6IGFuZ2xlXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGF0dHJzID0gW1xyXG4gICAgICAgIFsndHJhbnNmb3JtJywgYHJvdGF0ZSgke2FuZ2xlICogREVHfSAke2NlbnRlclh9ICR7Y2VudGVyWX0pYF1cclxuICAgIF07XHJcblxyXG4gICAgc3dpdGNoKGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpKSB7XHJcblxyXG4gICAgICAgIGNhc2UgJ3RleHQnOiB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB4ID0gTnVtYmVyKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd4JykpLFxyXG4gICAgICAgICAgICAgICAgeSA9IE51bWJlcihlbGVtZW50LmdldEF0dHJpYnV0ZSgneScpKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHsgcmVzWCwgcmVzWSB9ID0gcmVjYWxjUG9pbnQoe1xyXG4gICAgICAgICAgICAgICAgeDogc2V0Q29vcmQoeCwgZGlmZlgsIGZpeGVkWCwgYm94VyksXHJcbiAgICAgICAgICAgICAgICB5OiBzZXRDb29yZCh5LCBkaWZmWSwgZml4ZWRZLCBib3hIKSxcclxuICAgICAgICAgICAgICAgIC4uLmJhc2VEYXRhXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgYXR0cnMucHVzaChcclxuICAgICAgICAgICAgICAgIFsneCcsIHJlc1ggKyAoc2NhbGVYIDwgMCA/IGJveFcgOiAwKV0sXHJcbiAgICAgICAgICAgICAgICBbJ3knLCByZXNZICsgKHNjYWxlWSA8IDAgPyBib3hIIDogMCldXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICdjaXJjbGUnOiB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgciA9IE51bWJlcihlbGVtZW50LmdldEF0dHJpYnV0ZSgncicpKSxcclxuICAgICAgICAgICAgICAgICAgICBjeCA9IE51bWJlcihlbGVtZW50LmdldEF0dHJpYnV0ZSgnY3gnKSksXHJcbiAgICAgICAgICAgICAgICAgICAgY3kgPSBOdW1iZXIoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2N5JykpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5ld1IgPSByICogKE1hdGguYWJzKHNjYWxlWCkgKyBNYXRoLmFicyhzY2FsZVkpKSAvIDI7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgeyByZXNYLCByZXNZIH0gPSByZWNhbGNQb2ludCh7XHJcbiAgICAgICAgICAgICAgICAgICAgeDogc2V0Q29vcmQoY3gsIGRpZmZYLCBmaXhlZFgsIGJveFcpLFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IHNldENvb3JkKGN5LCBkaWZmWSwgZml4ZWRZLCBib3hIKSxcclxuICAgICAgICAgICAgICAgICAgICAuLi5iYXNlRGF0YVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYXR0cnMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICBbJ3InLCBuZXdSXSxcclxuICAgICAgICAgICAgICAgICAgICBbJ2N4JywgcmVzWF0sXHJcbiAgICAgICAgICAgICAgICAgICAgWydjeScsIHJlc1ldXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICdyZWN0Jzoge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gTnVtYmVyKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd3aWR0aCcpKSxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPSBOdW1iZXIoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2hlaWdodCcpKSxcclxuICAgICAgICAgICAgICAgICAgICB4ID0gTnVtYmVyKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd4JykpLFxyXG4gICAgICAgICAgICAgICAgICAgIHkgPSBOdW1iZXIoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3knKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgeyByZXNYLCByZXNZIH0gPSByZWNhbGNQb2ludCh7XHJcbiAgICAgICAgICAgICAgICAgICAgeDogc2V0Q29vcmQoeCwgZGlmZlgsIGZpeGVkWCwgYm94VyksXHJcbiAgICAgICAgICAgICAgICAgICAgeTogc2V0Q29vcmQoeSwgZGlmZlksIGZpeGVkWSwgYm94SCksXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uYmFzZURhdGFcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1dpZHRoID0gd2lkdGggKiBNYXRoLmFicyhzY2FsZVgpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5ld0hlaWdodCA9IGhlaWdodCAqIE1hdGguYWJzKHNjYWxlWSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYXR0cnMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICBbJ3gnLCByZXNYIC0gKHNjYWxlWCA8IDAgPyBuZXdXaWR0aCA6IDApXSxcclxuICAgICAgICAgICAgICAgICAgICBbJ3knLCByZXNZIC0gKHNjYWxlWSA8IDAgPyBuZXdIZWlnaHQgOiAwKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgWyd3aWR0aCcsIG5ld1dpZHRoXSxcclxuICAgICAgICAgICAgICAgICAgICBbJ2hlaWdodCcsIG5ld0hlaWdodF1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICBcclxuICAgICAgICBjYXNlICdlbGxpcHNlJzoge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJ4ID0gTnVtYmVyKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdyeCcpKSxcclxuICAgICAgICAgICAgICAgICAgICByeSA9IE51bWJlcihlbGVtZW50LmdldEF0dHJpYnV0ZSgncnknKSksXHJcbiAgICAgICAgICAgICAgICAgICAgY3ggPSBOdW1iZXIoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2N4JykpLFxyXG4gICAgICAgICAgICAgICAgICAgIGN5ID0gTnVtYmVyKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdjeScpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IHJlc1gsIHJlc1kgfSA9IHJlY2FsY1BvaW50KHtcclxuICAgICAgICAgICAgICAgICAgICB4OiBzZXRDb29yZChjeCwgZGlmZlgsIGZpeGVkWCwgYm94VyksXHJcbiAgICAgICAgICAgICAgICAgICAgeTogc2V0Q29vcmQoY3ksIGRpZmZZLCBmaXhlZFksIGJveEgpLFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLmJhc2VEYXRhXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBhdHRycy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIFsncngnLCByeCAqIE1hdGguYWJzKHNjYWxlWCldLFxyXG4gICAgICAgICAgICAgICAgICAgIFsncnknLCByeSAqIE1hdGguYWJzKHNjYWxlWSldLFxyXG4gICAgICAgICAgICAgICAgICAgIFsnY3gnLCByZXNYXSxcclxuICAgICAgICAgICAgICAgICAgICBbJ2N5JywgcmVzWV1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2FzZSAnbGluZSc6IHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNYMSA9IE51bWJlcihlbGVtZW50LmdldEF0dHJpYnV0ZSgneDEnKSksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzWTEgPSBOdW1iZXIoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3kxJykpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc1gyID0gTnVtYmVyKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd4MicpKSxcclxuICAgICAgICAgICAgICAgICAgICByZXNZMiA9IE51bWJlcihlbGVtZW50LmdldEF0dHJpYnV0ZSgneTInKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgeyByZXNYIDogcmVzWDFfLCByZXNZOiByZXNZMV8gIH0gPSByZWNhbGNQb2ludCh7XHJcbiAgICAgICAgICAgICAgICAgICAgeDogc2V0Q29vcmQocmVzWDEsIGRpZmZYLCBmaXhlZFgsIGJveFcpLFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IHNldENvb3JkKHJlc1kxLCBkaWZmWSwgZml4ZWRZLCBib3hIKSxcclxuICAgICAgICAgICAgICAgICAgICAuLi5iYXNlRGF0YVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgeyByZXNYIDogcmVzWDJfLCByZXNZOiByZXNZMl8gIH0gPSByZWNhbGNQb2ludCh7XHJcbiAgICAgICAgICAgICAgICAgICAgeDogc2V0Q29vcmQocmVzWDIsIGRpZmZYLCBmaXhlZFgsIGJveFcpLFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IHNldENvb3JkKHJlc1kyLCBkaWZmWSwgZml4ZWRZLCBib3hIKSxcclxuICAgICAgICAgICAgICAgICAgICAuLi5iYXNlRGF0YVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYXR0cnMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICBbJ3gxJywgcmVzWDFfXSxcclxuICAgICAgICAgICAgICAgICAgICBbJ3kxJywgcmVzWTFfXSxcclxuICAgICAgICAgICAgICAgICAgICBbJ3gyJywgcmVzWDJfXSxcclxuICAgICAgICAgICAgICAgICAgICBbJ3kyJywgcmVzWTJfXVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAncG9seWdvbic6XHJcbiAgICAgICAgY2FzZSAncG9seWxpbmUnOiB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9pbnRzID0gcGFyc2VQb2ludHMoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3BvaW50cycpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHBvaW50cy5tYXAoaXRlbSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgcmVzWCwgcmVzWSB9ID0gcmVjYWxjUG9pbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBzZXRDb29yZChOdW1iZXIoaXRlbVswXSksIGRpZmZYLCBmaXhlZFgsIGJveFcpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBzZXRDb29yZChOdW1iZXIoaXRlbVsxXSksIGRpZmZZLCBmaXhlZFksIGJveEgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5iYXNlRGF0YVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpdGVtWzBdID0gcmVzWDtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtWzFdID0gcmVzWTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uam9pbignICcpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0pLmpvaW4oJyAnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBhdHRycy5wdXNoKFsncG9pbnRzJywgcmVzdWx0XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2FzZSAncGF0aCc6IHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXRoID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2QnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBhdHRycy5wdXNoKFsnZCcsIHJlc2l6ZVBhdGgoXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiQm94LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHg6IGRpZmZYLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHk6IGRpZmZZLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXZYLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXZZLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXhlZFgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpeGVkWVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDoge31cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0cnMuZm9yRWFjaChhdHRyID0+IHtcclxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyWzBdLCBhdHRyWzFdKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVRyYW5zZm9ybVRvSGFuZGxlcyhib3gsIGhhbmRsZXMsIGRhdGEpIHtcclxuXHJcbiAgICBsZXQgeyB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBhbmdsZSB9ID0gZGF0YTtcclxuXHJcbiAgICBjb25zdCBoYWxmV2lkdGggPSB3aWR0aCAvIDIsXHJcbiAgICAgICAgaGFsZkhlaWdodCA9IGhlaWdodCAvIDI7XHJcblxyXG4gICAgY29uc3QgbmV3VHJhbnNmb3JtID0gYHJvdGF0ZSgke2FuZ2xlICogREVHfSAke3ggKyBoYWxmV2lkdGh9ICR7eSArIGhhbGZIZWlnaHR9KWA7XHJcblxyXG4gICAgY29uc3QgYXR0cnMgPSB7XHJcbiAgICAgICAgdGw6IFt4LCB5XSxcclxuICAgICAgICBtbDogW3gsIHkgKyBoYWxmSGVpZ2h0XSxcclxuICAgICAgICBibDogW3gsIHkgKyBoZWlnaHRdLFxyXG4gICAgICAgIHRjOiBbeCArIGhhbGZXaWR0aCwgeV0sXHJcbiAgICAgICAgdHI6IFt4ICsgd2lkdGgsIHldLFxyXG4gICAgICAgIG1yOiBbeCArIHdpZHRoLCB5ICsgaGFsZkhlaWdodF0sXHJcbiAgICAgICAgYnI6IFt4ICsgd2lkdGgsIHkgKyBoZWlnaHRdLFxyXG4gICAgICAgIGJjOiBbeCArIGhhbGZXaWR0aCwgeSArIGhlaWdodF0sXHJcbiAgICAgICAgcm90YXRvcjogW3ggKyBoYWxmV2lkdGgsIHkgLSBST1RfT0ZGU0VUICsgKGhlaWdodCA8IDAgPyBoZWlnaHQgOiAwKV1cclxuICAgIH07XHJcblxyXG4gICAgeCA9IHggKyAod2lkdGggPCAwID8gd2lkdGggOiAwKTtcclxuICAgIHkgPSB5ICsgKGhlaWdodCA8IDAgPyBoZWlnaHQgOiAwKTtcclxuXHJcbiAgICBjb25zdCBib3hBdHRycyA9IHtcclxuICAgICAgICB4OiB4LFxyXG4gICAgICAgIHk6IHksXHJcbiAgICAgICAgd2lkdGg6IE1hdGguYWJzKHdpZHRoKSxcclxuICAgICAgICBoZWlnaHQ6IE1hdGguYWJzKGhlaWdodCksXHJcbiAgICAgICAgdHJhbnNmb3JtOiBuZXdUcmFuc2Zvcm1cclxuICAgIH07XHJcblxyXG4gICAgT2JqZWN0LmtleXMoYm94QXR0cnMpLmZvckVhY2goYXR0ciA9PiB7XHJcbiAgICAgICAgYm94LnNldEF0dHJpYnV0ZShhdHRyLCBib3hBdHRyc1thdHRyXSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBPYmplY3Qua2V5cyhoYW5kbGVzKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGRsID0gaGFuZGxlc1trZXldO1xyXG4gICAgICAgIGhkbC5zZXRBdHRyaWJ1dGUoJ2N4JywgYXR0cnNba2V5XVswXSk7XHJcbiAgICAgICAgaGRsLnNldEF0dHJpYnV0ZSgnY3knLCBhdHRyc1trZXldWzFdKTtcclxuICAgICAgICBoZGwuc2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nLCBuZXdUcmFuc2Zvcm0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlUG9pbnRzKHB0cykge1xyXG4gICAgcmV0dXJuIHB0cy5tYXRjaChmbG9hdFJFKS5yZWR1Y2UoKHJlc3VsdCwgdmFsdWUsIGluZGV4LCBhcnJheSkgPT4ge1xyXG4gICAgICAgIGlmIChpbmRleCAlIDIgPT09IDApIHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2goYXJyYXkuc2xpY2UoaW5kZXgsIGluZGV4ICsgMikpO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDsgXHJcbiAgICB9LCBbXSk7XHJcbn0iLCJpbXBvcnQgT2JzZXJ2YWJsZSBmcm9tICcuLi9vYnNlcnZlci9PYnNlcnZlcidcclxuaW1wb3J0IERyYWdnYWJsZSBmcm9tICcuL2h0bWwnXHJcbmltcG9ydCBEcmFnZ2FibGVTVkcgZnJvbSAnLi9zdmcvaW5kZXgnXHJcblxyXG5pbXBvcnQge1xyXG4gICAgYXJyTWFwXHJcbn0gZnJvbSAnLi4vdXRpbC91dGlsJ1xyXG5cclxuLy8gZmFjdG9yeSBtZXRob2QgZm9yIGNyZWF0aW5nIGRyYWdnYWJsZSBlbGVtZW50c1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZHJhZyhvcHRpb25zKSB7XHJcbiAgICBpZiAodGhpcy5sZW5ndGgpIHtcclxuICAgICAgICBjb25zdCBPYiA9IG5ldyBPYnNlcnZhYmxlKCk7XHJcbiAgICAgICAgcmV0dXJuIGFyck1hcC5jYWxsKHRoaXMsIGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpZiAoIShpdGVtIGluc3RhbmNlb2YgU1ZHRWxlbWVudCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRHJhZ2dhYmxlKGl0ZW0sIG9wdGlvbnMsIE9iKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRHJhZ2dhYmxlU1ZHKGl0ZW0sIG9wdGlvbnMsIE9iKTtcclxuICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBIZWxwZXIgfSBmcm9tICcuLi9oZWxwZXInXHJcblxyXG5pbXBvcnQge1xyXG4gICAgcmVxdWVzdEFuaW1GcmFtZSxcclxuICAgIGNhbmNlbEFuaW1GcmFtZSxcclxuICAgIHdhcm4sXHJcbiAgICBpc0RlZixcclxuICAgIGlzVW5kZWYsXHJcbiAgICBpc0Z1bmNcclxufSBmcm9tICcuLi91dGlsL3V0aWwnXHJcblxyXG5pbXBvcnQge1xyXG4gICBnZXRPZmZzZXRcclxufSBmcm9tICcuLi91dGlsL2Nzcy11dGlsJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsb25lIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xyXG5cclxuICAgICAgICB0aGlzLmVsID0gZWw7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuICAgICAgICB0aGlzLnN0b3JhZ2UgPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLl9vbk1vdXNlRG93biA9IHRoaXMuX29uTW91c2VEb3duLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fb25Ub3VjaFN0YXJ0ID0gdGhpcy5fb25Ub3VjaFN0YXJ0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fb25Nb3VzZU1vdmUgPSB0aGlzLl9vbk1vdXNlTW92ZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX29uVG91Y2hNb3ZlID0gdGhpcy5fb25Ub3VjaE1vdmUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9vbk1vdXNlVXAgPSB0aGlzLl9vbk1vdXNlVXAuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9vblRvdWNoRW5kID0gdGhpcy5fb25Ub3VjaEVuZC5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLmVuYWJsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGVuYWJsZSgpIHtcclxuICAgICAgICBpZiAoaXNVbmRlZih0aGlzLnN0b3JhZ2UpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luaXQoKTtcclxuICAgICAgICB9ICBlbHNlIHtcclxuICAgICAgICAgICAgd2FybignQWxyZWFkeSBlbmFibGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRpc2FibGUoKSB7XHJcbiAgICAgICAgX2Rlc3Ryb3kuY2FsbCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBfaW5pdCgpIHtcclxuICAgICAgICBfaW5pdC5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIF9kcmF3KGVsKSB7XHJcbiAgICAgICAgX2RyYXcuY2FsbCh0aGlzLCBlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uTW91c2VEb3duKGUpIHtcclxuICAgICAgICBfc3RhcnQuY2FsbCh0aGlzLCBlKTtcclxuICAgICAgICBIZWxwZXIoZG9jdW1lbnQpLm9uKCdtb3VzZW1vdmUnLCB0aGlzLl9vbk1vdXNlTW92ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm9uKCdtb3VzZXVwJywgdGhpcy5fb25Nb3VzZVVwKTtcclxuICAgIH1cclxuXHJcbiAgICBfb25Nb3VzZU1vdmUoZSkge1xyXG4gICAgICAgIF9tb3ZlLmNhbGwodGhpcywgZSk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uTW91c2VVcChlKSB7XHJcbiAgICAgICAgX2VuZC5jYWxsKHRoaXMsIGUpO1xyXG4gICAgICAgIEhlbHBlcihkb2N1bWVudCkub2ZmKCdtb3VzZW1vdmUnLCB0aGlzLl9vbk1vdXNlTW92ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm9mZignbW91c2V1cCcsIHRoaXMuX29uTW91c2VVcCk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uVG91Y2hTdGFydChlKSB7XHJcbiAgICAgICAgX3N0YXJ0LmNhbGwodGhpcywgZS50b3VjaGVzWzBdKTtcclxuICAgICAgICBIZWxwZXIoZG9jdW1lbnQpLm9uKCd0b3VjaG1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm9uKCd0b3VjaGVuZCcsIHRoaXMuX29uVG91Y2hFbmQpO1xyXG4gICAgfVxyXG5cclxuICAgIF9vblRvdWNoTW92ZShlKSB7XHJcbiAgICAgICAgX21vdmUuY2FsbCh0aGlzLCBlLnRvdWNoZXNbMF0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9vblRvdWNoRW5kKGUpIHtcclxuXHJcbiAgICAgICAgaWYgKGUudG91Y2hlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgX2VuZC5jYWxsKHRoaXMsIGUuY2hhbmdlZFRvdWNoZXNbMF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBIZWxwZXIoZG9jdW1lbnQpLm9mZigndG91Y2htb3ZlJywgdGhpcy5fb25Ub3VjaE1vdmUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5vZmYoJ3RvdWNoZW5kJywgdGhpcy5fb25Ub3VjaEVuZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9pbml0KCkge1xyXG5cclxuICAgIGNvbnN0IGN0eCA9IHRoaXM7XHJcblxyXG4gICAgY29uc3Qgc2VsID0gY3R4LmVsO1xyXG4gICAgY29uc3QgX3NlbCA9IEhlbHBlcihzZWwpO1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICBzdHlsZSxcclxuICAgICAgICBkcm9wLFxyXG4gICAgICAgIGFwcGVuZFRvLFxyXG4gICAgICAgIHN0YWNrXHJcbiAgICB9ID0gY3R4Lm9wdGlvbnM7XHJcblxyXG4gICAgbGV0IGNzcyA9IHtcclxuICAgICAgICB3aWR0aDogX3NlbC5jc3MoJ3dpZHRoJyksXHJcbiAgICAgICAgaGVpZ2h0OiBfc2VsLmNzcygnaGVpZ2h0JyksXHJcbiAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcclxuICAgIH07XHJcblxyXG4gICAgaWYgKGlzVW5kZWYoc3R5bGUpKSB7XHJcbiAgICAgICAgY3NzLmJvcmRlciA9ICcjMzJCNUZFIDFweCBkYXNoZWQnO1xyXG4gICAgICAgIGNzcy5iYWNrZ3JvdW5kID0gJ3RyYW5zcGFyZW50JztcclxuICAgICAgICBjc3MudHJhbnNmb3JtID0gJ25vbmUnO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygc3R5bGUgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgY3NzID0geyAuLi5zdHlsZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBvbkRyb3AgPSBmdW5jdGlvbigpIHt9O1xyXG5cclxuICAgIGlmIChpc0Z1bmMoZHJvcCkpIHtcclxuICAgICAgICBvbkRyb3AgPSBmdW5jdGlvbihldnQpIHtcclxuICAgICAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICAgICAgY2xvbmUsXHJcbiAgICAgICAgICAgICAgICBzdGFja1xyXG4gICAgICAgICAgICB9ID0gdGhpcy5zdG9yYWdlO1xyXG5cclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmIChpc0RlZihzdGFjaykpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IG9iamVjdHNDb2xsaWRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvbmUsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBkcm9wLmNhbGwodGhpcywgZXZ0LCB0aGlzLmVsLCBjbG9uZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3RvcmFnZSA9IHtcclxuICAgICAgICBvbkRyb3AsXHJcbiAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxyXG4gICAgICAgIGNzcyxcclxuICAgICAgICBwYXJlbnQ6IEhlbHBlcihhcHBlbmRUbyB8fCAnYm9keScpWzBdLFxyXG4gICAgICAgIHN0YWNrOiBIZWxwZXIoc3RhY2spWzBdXHJcbiAgICB9O1xyXG5cclxuICAgIGN0eC5zdG9yYWdlID0gc3RvcmFnZTtcclxuXHJcbiAgICBfc2VsLm9uKCdtb3VzZWRvd24nLCB0aGlzLl9vbk1vdXNlRG93bilcclxuICAgICAgICAub24oJ3RvdWNoc3RhcnQnLCB0aGlzLl9vblRvdWNoU3RhcnQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfc3RhcnQoZSkge1xyXG5cclxuICAgIGlmIChlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbikge1xyXG4gICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IHsgXHJcbiAgICAgICAgc3RvcmFnZSxcclxuICAgICAgICBlbDogc2VsXHJcbiAgICB9ID0gdGhpcztcclxuXHJcbiAgICBjb25zdCB7IFxyXG4gICAgICAgIG9wdGlvbnMsXHJcbiAgICAgICAgcGFyZW50LFxyXG4gICAgICAgIGNzc1xyXG4gICAgfSA9IHN0b3JhZ2U7IFxyXG5cclxuICAgIGNvbnN0IGNsb25lID0gb3B0aW9ucy5zdHlsZSA9PT0gJ2Nsb25lJyBcclxuICAgICAgICAgICAgICAgICAgICA/IHNlbC5jbG9uZU5vZGUodHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGNvbnN0IG9mZnNldCA9IGdldE9mZnNldChwYXJlbnQpO1xyXG5cclxuICAgIGNzcy5sZWZ0ID0gYCR7KGUucGFnZVggLSBvZmZzZXQubGVmdCl9cHhgO1xyXG4gICAgY3NzLnRvcCA9IGAkeyhlLnBhZ2VZIC0gb2Zmc2V0LnRvcCl9cHhgO1xyXG5cclxuICAgIEhlbHBlcihjbG9uZSkuY3NzKGNzcyk7XHJcblxyXG4gICAgc3RvcmFnZS5wYWdlWCA9IGUucGFnZVg7XHJcbiAgICBzdG9yYWdlLnBhZ2VZID0gZS5wYWdlWTtcclxuICAgIHN0b3JhZ2UuY3ggPSBlLnBhZ2VYO1xyXG4gICAgc3RvcmFnZS5jeSA9IGUucGFnZVk7XHJcbiAgICBzdG9yYWdlLmNsb25lID0gY2xvbmU7XHJcblxyXG4gICAgSGVscGVyKHBhcmVudClbMF0uYXBwZW5kQ2hpbGQoY2xvbmUpO1xyXG4gICAgdGhpcy5fZHJhdyhjbG9uZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9tb3ZlKGUpIHtcclxuXHJcbiAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IHN0b3JhZ2UgfSA9IHRoaXM7XHJcblxyXG4gICAgc3RvcmFnZS5wYWdlWCA9IGUucGFnZVg7XHJcbiAgICBzdG9yYWdlLnBhZ2VZID0gZS5wYWdlWTtcclxuICAgIHN0b3JhZ2UuZG9EcmF3ID0gdHJ1ZTtcclxuICAgIHN0b3JhZ2UuZG9Nb3ZlID0gdHJ1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2VuZChlKSB7XHJcblxyXG4gICAgaWYgKGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKSB7XHJcbiAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IFxyXG4gICAgICAgIHN0b3JhZ2VcclxuICAgIH0gPSB0aGlzO1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICBjbG9uZSxcclxuICAgICAgICBmcmFtZUlkLFxyXG4gICAgICAgIG9uRHJvcFxyXG4gICAgfSA9IHN0b3JhZ2U7XHJcblxyXG4gICAgc3RvcmFnZS5kb0RyYXcgPSBmYWxzZTtcclxuICAgIGNhbmNlbEFuaW1GcmFtZShmcmFtZUlkKTtcclxuXHJcbiAgICBpZiAoaXNVbmRlZihjbG9uZSkpIHJldHVybjtcclxuXHJcbiAgICBvbkRyb3AuY2FsbCh0aGlzLCBlKTtcclxuICAgIGNsb25lLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2xvbmUpO1xyXG5cclxuICAgIGRlbGV0ZSBzdG9yYWdlLmNsb25lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfZHJhdyhjbG9uZSkge1xyXG5cclxuICAgIGNvbnN0IGN0eCA9IHRoaXM7XHJcblxyXG4gICAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgeyBzdG9yYWdlIH0gPSBjdHg7XHJcblxyXG4gICAgICAgIHN0b3JhZ2UuZnJhbWVJZCA9IHJlcXVlc3RBbmltRnJhbWUoYW5pbWF0ZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgZG9EcmF3LFxyXG4gICAgICAgICAgICBwYWdlWCxcclxuICAgICAgICAgICAgcGFnZVksXHJcbiAgICAgICAgICAgIGN4LFxyXG4gICAgICAgICAgICBjeVxyXG4gICAgICAgIH0gPSBzdG9yYWdlO1xyXG5cclxuICAgICAgICBpZiAoIWRvRHJhdykgcmV0dXJuO1xyXG4gICAgICAgIHN0b3JhZ2UuZG9EcmF3ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZSA9IGB0cmFuc2xhdGUoJHtwYWdlWCAtIGN4fXB4LCAke3BhZ2VZIC0gY3l9cHgpYDtcclxuXHJcbiAgICAgICAgSGVscGVyKGNsb25lKS5jc3Moe1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSxcclxuICAgICAgICAgICAgd2Via2l0VHJhbmZvcm06IHRyYW5zbGF0ZSxcclxuICAgICAgICAgICAgbW96VHJhbnNmb3JtOiB0cmFuc2xhdGUsXHJcbiAgICAgICAgICAgIG1zVHJhbnNmb3JtOiB0cmFuc2xhdGUsXHJcbiAgICAgICAgICAgIG90cmFuc2Zvcm06IHRyYW5zbGF0ZSBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhbmltYXRlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9kZXN0cm95KCkge1xyXG5cclxuICAgIGlmIChpc1VuZGVmKHRoaXMuc3RvcmFnZSkpIHJldHVybjtcclxuICAgIEhlbHBlcih0aGlzLmVsKS5vZmYoJ21vdXNlZG93bicsIHRoaXMuX29uTW91c2VEb3duKVxyXG4gICAgICAgICAgICAgICAgICAgIC5vZmYoJ3RvdWNoc3RhcnQnLCB0aGlzLl9vblRvdWNoU3RhcnQpO1xyXG4gICAgZGVsZXRlIHRoaXMuc3RvcmFnZTtcclxufVxyXG5cclxuZnVuY3Rpb24gb2JqZWN0c0NvbGxpZGUoYSwgYikge1xyXG5cclxuICAgIGNvbnN0IHsgdG9wOiBhVG9wLCBsZWZ0OiBhTGVmdCB9ID0gZ2V0T2Zmc2V0KGEpLFxyXG4gICAgICAgIHsgdG9wOiBiVG9wLCBsZWZ0OiBiTGVmdCB9ID0gZ2V0T2Zmc2V0KGIpLFxyXG4gICAgICAgIF9iID0gSGVscGVyKGIpO1xyXG5cclxuICAgIHJldHVybiAhKFxyXG4gICAgICAgIChhVG9wIDwgYlRvcCkgfHxcclxuICAgICAgICAoYVRvcCA+IChiVG9wICsgX2IuY3NzKCdoZWlnaHQnKSkpIHx8XHJcbiAgICAgICAgKGFMZWZ0IDwgYkxlZnQpIHx8XHJcbiAgICAgICAgKGFMZWZ0ID4gKGJMZWZ0ICsgX2IuY3NzKCd3aWR0aCcpKSlcclxuICAgIClcclxufSIsImltcG9ydCB7XHJcbiAgICBhcnJNYXBcclxufSBmcm9tICcuLi91dGlsL3V0aWwnXHJcblxyXG5pbXBvcnQgQ2xvbmUgZnJvbSAnLi9jbG9uZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbG9uZShvcHRpb25zKSB7XHJcbiAgICBpZiAodGhpcy5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gYXJyTWFwLmNhbGwodGhpcywgaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ2xvbmUoaXRlbSwgb3B0aW9ucyk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSIsIi8qIEBsaWNlbnNlXHJcbiAqIE1vdmUvUm90YXRlL1Jlc2l6ZSB0b29sXHJcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSwgMjAxOC0yMDE5XHJcbiAqIG5pY2hvbGxhc2NhcnRlckBnbWFpbC5jb21cclxuKi9cclxuXHJcbmltcG9ydCAnLi4vc3R5bGUvc3VianguY3NzJ1xyXG5pbXBvcnQgX2RyYWcgZnJvbSAnLi9jb3JlL3RyYW5zZm9ybS9pbmRleCdcclxuaW1wb3J0IF9jbG9uZSBmcm9tICcuL2NvcmUvY2xvbmUvaW5kZXgnXHJcbmltcG9ydCB7IEhlbHBlcl8gfSBmcm9tICcuL2NvcmUvaGVscGVyJ1xyXG5cclxuY2xhc3MgU3VianggZXh0ZW5kcyBIZWxwZXJfIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcclxuICAgICAgICBzdXBlcihwYXJhbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYWcobWV0aG9kKSB7XHJcbiAgICAgICAgcmV0dXJuIF9kcmFnLmNhbGwodGhpcywgbWV0aG9kKTtcclxuICAgIH1cclxuICAgIGNsb25lKG1ldGhvZCkge1xyXG4gICAgICAgIHJldHVybiBfY2xvbmUuY2FsbCh0aGlzLCBtZXRob2QpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihwYXJhbXMpIHtcclxuICAgIHJldHVybiBuZXcgU3ViangocGFyYW1zKTtcclxufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS01LTIhLi9zdWJqeC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMSEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTUtMiEuL3N1Ymp4LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMSEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTUtMiEuL3N1Ymp4LmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=