/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: Helvetica, Arial, sans-serif;\n  color: #f5f5f5;\n}\n\nbody {\n  height: 100vh;\n  background: rgb(29, 113, 242);\n  background: linear-gradient(\n    180deg,\n    rgba(29, 113, 242, 1) 0%,\n    rgba(28, 156, 246, 1) 40%,\n    rgba(25, 195, 251, 1) 100%\n  );\n}\n\n#main-grid-container {\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 1fr 3fr 1fr;\n  grid-template-rows: 1fr 8fr 1fr;\n}\n\nheader {\n  grid-area: 1 / 1 / 2 / -1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.searchbar-container {\n  border-radius: 8px;\n  width: 15%;\n}\n\n#searchbar {\n  border-radius: 8px;\n  width: 100%;\n  height: 30px;\n  color: black;\n  outline: none;\n  border: none;\n  padding: 0px 10px;\n}\n\n.switch-btn {\n  width: 180px;\n  height: 50px;\n  border: 2px solid white;\n  margin: 50px auto;\n  padding: 8px;\n  border-radius: 50px;\n  box-shadow: 0 0 4px white;\n  text-align: center;\n  align-content: center;\n  cursor: pointer;\n}\n\n.switch-btn:hover {\n  background-color: rgb(29, 113, 242);\n}\n\n.switch-btn:active {\n  background-color: rgba(28, 156, 246, 1);\n}\n\naside.left {\n  grid-area: 2 / 1 / span 1 / span 1;\n  font-size: 1.5rem;\n}\n\n.aside-left-row,\n.aside-right-row {\n  border: 1px solid white;\n  border-radius: 8px;\n  margin: 20px;\n  padding: 6px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  box-shadow: 0 0 6px white;\n}\n\n.aside-left-value {\n  font-size: 2.5rem;\n}\n\nmain {\n  grid-area: 2 / 2 / span 1 / span 1;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n}\n\n.main-info {\n  border: 1px solid white;\n  border-radius: 8px;\n  margin-top: 100px;\n  font-size: 2rem;\n  width: 50%;\n  height: fit-content;\n  text-align: center;\n  padding: 8px;\n  box-shadow: 0 0 10px white;\n}\n\n.main-info > div {\n  margin: 10px;\n}\n\n.row-one {\n  font-size: 2.5rem;\n}\n\n.row-one > .region {\n  font-size: 1.5rem;\n}\n\n.row-two {\n  font-size: 5rem;\n}\n\n.row-three {\n  font-size: 1.8rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.row-four > span {\n  font-size: 1.5rem;\n  margin: 0 8px;\n}\n\n.row-five {\n  display: flex;\n  flex-direction: row;\n  font-size: 1.2rem;\n  align-items: center;\n  justify-content: center;\n}\n\n.row-five > div {\n  margin: 16px;\n}\n\naside.right {\n  grid-area: 2 / 3 / span 1 / span 1;\n  font-size: 1.5rem;\n}\n\n.tomorrow-title-container,\n.day-two-title-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.local-time,\n.local-date {\n  font-size: 1.5rem;\n}\n\n.tomorrow-degrees,\n.day-two-degrees {\n  text-align: center;\n}\n\n.tomorrow-max,\n.day-two-max {\n  font-size: 3rem;\n}\n\n.tomorrow-min,\n.day-two-min {\n  font-size: 2rem;\n}\n\nfooter {\n  background-color: white;\n  grid-area: 3 / 1 / -1 / -1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 50px;\n  margin-top: auto;\n}\n\n.footer-elements-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.odin-icon {\n  border-radius: 50%;\n  flex: 1;\n  height: 38px;\n  flex-wrap: wrap;\n}\n\n.footer-text {\n  font-size: 1.2rem;\n  justify-content: flex-start;\n  margin: 10px;\n  color: black;\n  flex: 1;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/DOM-elements.js":
/*!*****************************!*\
  !*** ./src/DOM-elements.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// create a variable for the searchbar\nconst searchbar = document.getElementById('searchbar')\n\n// create a variable for each indicator from the aside.left element\nconst feelsLike = document.querySelector('.feels-like-degrees')\nconst humidity = document.querySelector('.humidity-percentage')\nconst rainChances = document.querySelector('.rain-chances-percentage')\nconst windSpeed = document.querySelector('.wind-speed-number')\nconst uvIndex = document.querySelector('.uv-index')\nconst localTime = document.querySelector('.local-time')\nconst localDate = document.querySelector('.local-date')\n\n// create a variable for each indicator from the main element\nconst regionName = document.querySelector('.region')\nconst cityName = document.querySelector('.location-name')\nconst currentDegrees = document.querySelector('.location-degrees')\nconst currentConditionIcon = document.querySelector('.main-weather-icon')\nconst currentConditionText = document.querySelector('.main-weather-text')\nconst todaysMax = document.querySelector('.todays-max')\nconst todaysMin = document.querySelector('.todays-min')\nconst todaysSunrise = document.querySelector('.todays-sunrise')\nconst todaysSunset = document.querySelector('.todays-sunset')\n\n// create a variable for each indicator from the aside.right element\nconst tomorrowTitle = document.querySelector('.tomorrow-title')\nconst tomorrowConditionIcon = document.querySelector('.tomorrow-icon')\nconst tomorrowMax = document.querySelector('.tomorrow-max')\nconst tomorrowMin = document.querySelector('.tomorrow-min')\n\nconst dayTwoTitle = document.querySelector('.day-two-title')\nconst dayTwoConditionIcon = document.querySelector('.day-two-icon')\nconst dayTwoMax = document.querySelector('.day-two-max')\nconst dayTwoMin = document.querySelector('.day-two-min')\n\n// create a variable for the 'unit switch' btn\nconst switchBtn = document.querySelector('.switch-btn')\n\nconst domElements = {\n  searchbar,\n  feelsLike,\n  humidity,\n  rainChances,\n  windSpeed,\n  uvIndex,\n  localTime,\n  localDate,\n  regionName,\n  cityName,\n  currentDegrees,\n  currentConditionIcon,\n  currentConditionText,\n  todaysMax,\n  todaysMin,\n  todaysSunrise,\n  todaysSunset,\n  tomorrowTitle,\n  tomorrowConditionIcon,\n  tomorrowMax,\n  tomorrowMin,\n  dayTwoTitle,\n  dayTwoConditionIcon,\n  dayTwoMax,\n  dayTwoMin,\n  switchBtn\n}\n\n// Export the object\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domElements);\n\n\n//# sourceURL=webpack://weather-app/./src/DOM-elements.js?");

/***/ }),

/***/ "./src/cred.js":
/*!*********************!*\
  !*** ./src/cred.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   API_KEY: () => (/* binding */ API_KEY)\n/* harmony export */ });\nconst API_KEY = '253fe95b6f2942c3b3f153054231511'\n\n\n//# sourceURL=webpack://weather-app/./src/cred.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _cred_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cred.js */ \"./src/cred.js\");\n/* harmony import */ var _DOM_elements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM-elements.js */ \"./src/DOM-elements.js\");\n\n\n\n\n// create the variables needed to initialize\nlet userInput = 'sevilla'\nlet displayCelsius = true\nlet degreesUnit = '°C'\nconst weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']\n\n_DOM_elements_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].switchBtn.addEventListener('pointerdown', () => {\n  displayCelsius = !displayCelsius\n  degreesUnit = displayCelsius ? '°C' : '°F'\n  _DOM_elements_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].switchBtn.innerText = `switch to ${degreesUnit}`\n  getForecast()\n})\n\nasync function getForecast () {\n  const FORECAST_URL = `https://api.weatherapi.com/v1/forecast.json?key=${_cred_js__WEBPACK_IMPORTED_MODULE_1__.API_KEY}&q=${userInput}&days=4`\n\n  try {\n    const response = await fetch(FORECAST_URL)\n\n    if (response.status === 200) {\n      const data = await response.json()\n\n      // create a variable that decides what unit to display\n      const temperatureUnit = displayCelsius ? 'c' : 'f'\n\n      // indicators that display degrees\n      _DOM_elements_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].feelsLike.innerText = Math.round(data.current[`feelslike_${temperatureUnit}`]) + degreesUnit\n      _DOM_elements_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].currentDegrees.innerText = Math.round(data.current[`temp_${temperatureUnit}`]) + degreesUnit\n      _DOM_elements_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].todaysMax.innerText = 'Max: ' + Math.round(data.forecast.forecastday[0].day[`maxtemp_${temperatureUnit}`]) + degreesUnit\n      _DOM_elements_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].todaysMin.innerText = 'Min: ' + Math.round(data.forecast.forecastday[0].day[`mintemp_${temperatureUnit}`]) + degreesUnit\n\n      // left aside indicators\n      _DOM_elements_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].humidity.innerText = data.current.humidity + ' %'\n      _DOM_elements_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].rainChances.innerText = data.forecast.forecastday[0].day.daily_chance_of_rain\n      _DOM_elements_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].windSpeed.innerText = Math.round(data.current.wind_kph) + ' km/h'\n      _DOM_elements_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].uvIndex.innerText = data.forecast.forecastday[0].day.uv\n\n      // set date & time in desired format\n      const localTimeUnformatted = new Date(data.location.localtime)\n      const localDateFormatted = `${localTimeUnformatted.getDate()}-${localTimeUnformatted.getMonth() + 1}-${localTimeUnformatted.getFullYear()}`\n      const localTimeFormatted = `${localTimeUnformatted.getHours()}:${(localTimeUnformatted.getMinutes() < 10 ? '0' : '') + localTimeUnformatted.getMinutes()}`\n\n      _DOM_elements_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].localDate.innerText = localDateFormatted\n      _DOM_elements_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].localTime.innerText = localTimeFormatted\n\n      // main indicators\n      _DOM_elements_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].regionName.innerText = data.location.region\n      _DOM_elements_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].cityName.innerText = data.location.name\n      _DOM_elements_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].currentConditionIcon.src = data.current.condition.icon\n      _DOM_elements_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].currentConditionText.innerText = data.current.condition.text\n      _DOM_elements_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].todaysSunrise.innerText = 'Sunrise: ' + data.forecast.forecastday[0].astro.sunrise\n      _DOM_elements_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].todaysSunset.innerText = 'Sunset: ' + data.forecast.forecastday[0].astro.sunset\n\n      // right aside indicators\n      _DOM_elements_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].switchBtn.innerText = `switch to ${displayCelsius ? '°F' : '°C'}`\n\n      // create a variable for the next two days and display the day of the week for each of them\n      const day1Date = new Date(`${data.forecast.forecastday[1].date}`)\n      _DOM_elements_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].tomorrowTitle.innerText = weekdays[day1Date.getDay()]\n      _DOM_elements_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].tomorrowConditionIcon.src = data.forecast.forecastday[1].day.condition.icon\n\n      const dayTwoDate = new Date(`${data.forecast.forecastday[2].date}`)\n      _DOM_elements_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].dayTwoTitle.innerText = weekdays[dayTwoDate.getDay()]\n      _DOM_elements_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].dayTwoConditionIcon.src = data.forecast.forecastday[2].day.condition.icon\n\n      // display the max & min temperatures for the next two days\n      _DOM_elements_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].tomorrowMax.innerText = Math.round(data.forecast.forecastday[1].day[`maxtemp_${temperatureUnit}`]) + degreesUnit\n      _DOM_elements_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].tomorrowMin.innerText = Math.round(data.forecast.forecastday[1].day[`mintemp_${temperatureUnit}`]) + degreesUnit\n      _DOM_elements_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].dayTwoMax.innerText = Math.round(data.forecast.forecastday[2].day[`maxtemp_${temperatureUnit}`]) + degreesUnit\n      _DOM_elements_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].dayTwoMin.innerText = Math.round(data.forecast.forecastday[2].day[`mintemp_${temperatureUnit}`]) + degreesUnit\n    } else {\n      console.log('There was a problem with the request.')\n      alert('Please enter a valid location.')\n    }\n  } catch (error) {\n    console.log('Error', error)\n  }\n}\n\n_DOM_elements_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].searchbar.addEventListener('keypress', (e) => {\n  if (e.key === 'Enter') {\n    userInput = _DOM_elements_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].searchbar.value\n    getForecast()\n    console.log('The search term was ' + userInput)\n    _DOM_elements_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].searchbar.value = ''\n  }\n})\n\ngetForecast()\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;