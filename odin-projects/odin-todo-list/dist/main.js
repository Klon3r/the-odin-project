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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Nova+Mono&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n    background-color: lightgrey;\n}\n\n#root {\n    margin: auto;\n    padding-top: 100px;\n    width: calc(80vw);\n}\n\n#header {\n    display: flex;\n    border-top: 2px solid black;\n    border-right: 2px solid black;\n    border-left: 2px solid black; \n    border-bottom: 1px solid black;\n    justify-content: center;\n    font-family: 'Nova Mono', monospace;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n    background-color: #D7C0D0;\n}\n\n#header > h2 {\n    margin: 10px;\n}\n\n#container {\n    /* border: 1px solid black; */\n    border-left:2px solid black;\n    border-right:2px solid black;\n    border-bottom: 2px solid black;\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n}\n\n#project {\n    border-right: 1px solid black;\n    font-family: 'Roboto', sans-serif;\n    background-color: #e2dde1;\n    border-bottom-left-radius: 10px;\n}\n\n#content {\n    padding-left: 1em;\n    display: flex;\n    flex-direction: column;\n    font-family: 'Roboto', sans-serif;\n    background-color: whitesmoke;\n    border-bottom-right-radius: 10px;\n}\n\n.project-title-list:hover {\n    cursor: pointer;\n    color: rgb(90, 90, 90);\n    transform: scale(1.01);\n}\n\n#project-title-div > h3 {\n    margin: 2px;\n    text-align: center;\n}\n\n#project-list-div {\n    padding-left: 0px;\n}\n\n#project-list-div > h4 {\n    margin: 5px;\n}\n\n#project-button-div {\n    display: flex;\n    justify-content: space-between;\n    padding-right: 5px;\n    margin: 5px;\n}\n\n#project-button-div > button {\n    font-family: 'Josefin Sans', sans-serif;\n    border: 1px solid grey;\n    border-radius: 4px;\n}\n\n#project-button-div > button:hover {\n    cursor: pointer;\n}\n\n#note-button {\n    font-family: 'Josefin Sans', sans-serif;\n    border: 1px solid grey;\n    border-radius: 4px;\n    padding: 3px;\n}\n\n#note-title-div > h3 {\n    margin: 2px;\n}\n\n#note-title-div {\n    display: flex;\n    margin-right: 10px;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid black;\n    margin-top: 10px;\n}\n\n#note-obj-div > h4 {\n    margin: 2px;\n}\n\n#note-obj-div {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n#note-delete-button {\n    margin-right: 5px;\n    width: 20px;\n}\n\n#note-delete-button:hover {\n    cursor: pointer;\n    transform: scale(110%);\n}\n\n#note-edit-button {\n    width: 20px;\n}\n\n#note-edit-button:hover {\n    cursor: pointer;\n    transform: scale(110%);\n}\n\n#note-info-div p {\n    margin: 2px;\n    font-size: 0.9rem;\n}\n\n#note-info-div p:hover {\n    cursor: pointer;\n    transform: scale(1.01);\n}\n\n#note-info-div {\n    /* background-color: lightgrey; */\n    background-color:thistle;\n    margin: 10px;\n    padding: 5px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-radius: 5px;\n    box-shadow: 2px 2px 2px black;\n}\n\n#note-info-div:hover {\n    /* background-color: rgb(223, 223, 223); */\n    background-color: rgb(223, 210, 223);\n}\n\n.checked-true {\n    text-decoration: line-through;\n}\n\n#note-info-div.checked-true {\n    background-color: lightgreen;\n}\n\n#project-dialog > h3,\n#note-dialog > h3,\n#note-edit-div > h3 {\n    font-family: 'Nova Mono', monospace;\n    margin: 0px;\n    margin-bottom: 5px;\n    justify-content: center;\n    text-align: center;\n    padding-bottom: 10px;\n}\n\n#project-dialog > label, #project-dialog > input, #project-dialog-button-div  > button,\n#note-dialog-div > label, #note-add-button-div > input, #note-add-button-div > button,\n#note-edit-dialog > label, #note-edit-div > input,  #note-edit-div > button {\n    font-family: 'Roboto', sans-serif;\n}\n\n#project-dialog-button-div,\n#note-add-button-div,\n#note-edit-button-div {\n    display: flex;\n    justify-content: space-between;\n    padding-top: 20px;\n}\n\n#project-dialog-button-div > button, \n#note-add-button-div > button,\n#note-edit-button-div > button  {\n    box-shadow: 2px 2px 2px black;\n}\n\n#project-dialog, #note-dialog,\n#note-edit-dialog {\n    background-color: #D7C0D0;\n    border-radius: 10px;\n    border: 2px solid black;\n}\n\n#note-desc-label, \n#note-edit-label {\n    font-weight: 900;\n    padding-right: 5px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/class.js":
/*!**********************!*\
  !*** ./src/class.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ noteClass)\n/* harmony export */ });\nclass noteClass {\n    constructor(project, desc, checked) {\n        this.project = project;\n        this.desc = desc;\n        this.checked = checked;\n    }\n\n    setNoteToStorage(key) {\n        const existingNotesJSON = localStorage.getItem(key);\n        let existingNotes = existingNotesJSON ? JSON.parse(existingNotesJSON) : {};\n\n        if(!existingNotes[this.project]) {\n            existingNotes[this.project] = []\n        }\n\n        existingNotes[this.project].push({\n            todo: this.desc,\n            checked: this.checked\n        })\n\n        localStorage.setItem(key, JSON.stringify(existingNotes))\n    }\n}\n\n//# sourceURL=webpack://odin-todo-list/./src/class.js?");

/***/ }),

/***/ "./src/dialog.js":
/*!***********************!*\
  !*** ./src/dialog.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createNoteDialog: () => (/* binding */ createNoteDialog),\n/* harmony export */   createNoteEditDialog: () => (/* binding */ createNoteEditDialog),\n/* harmony export */   createProjectDialog: () => (/* binding */ createProjectDialog),\n/* harmony export */   showEditDialog: () => (/* binding */ showEditDialog),\n/* harmony export */   showNoteDialog: () => (/* binding */ showNoteDialog),\n/* harmony export */   showProjectDialog: () => (/* binding */ showProjectDialog)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _note__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./note */ \"./src/note.js\");\n\n\n\nfunction createProjectDialog() {\n    const projectDialog = document.createElement('dialog');\n    projectDialog.id = 'project-dialog'\n    document.body.appendChild(projectDialog);\n\n    addInputProjectDialog()\n}\n\nfunction showProjectDialog() {\n    const projectDialog = document.getElementById('project-dialog');\n    const projectTitle = document.getElementById('project-title-input');\n    projectTitle.value = '';\n    projectDialog.showModal();\n}\n\nfunction closeProjectDialog() {\n    const projectDialog = document.getElementById('project-dialog');\n    projectDialog.close();\n}\n\nfunction addInputProjectDialog() {\n    const projectDialog = document.getElementById('project-dialog');\n    const projectTitleTop = document.createElement('h3');\n    const projectTitle = document.createElement('input');\n    const projectTitleLabel = document.createElement('label');\n    const projectDialogDiv = document.createElement('div');\n    const projectButtonDiv = document.createElement('div');\n    const projectDialogAddButton = document.createElement('button');\n    const projectDialogCancelButton = document.createElement('button');\n\n    projectTitle.id = 'project-title-input'\n    projectButtonDiv.id = 'project-dialog-button-div'\n    projectTitle.type = \"text\";\n    projectTitleLabel.textContent = \"List Name: \"\n    projectDialogAddButton.innerText = \"Add\";\n    projectDialogCancelButton.innerText = \"Cancel\";\n    projectTitleTop.innerText = \"-List Name-\"\n\n    projectDialogAddButton.addEventListener('click', () => { ;(0,_project__WEBPACK_IMPORTED_MODULE_0__.addProject)( projectTitle.value ); closeProjectDialog(); });\n    projectDialogCancelButton.addEventListener('click', () => { closeProjectDialog()});\n\n\n    projectDialog.appendChild(projectTitleTop);\n    projectDialog.appendChild(projectTitleLabel)\n    projectDialog.appendChild(projectTitle);\n    projectDialog.appendChild(projectDialogDiv);\n    projectButtonDiv.appendChild(projectDialogCancelButton)\n    projectButtonDiv.appendChild(projectDialogAddButton);\n    projectDialog.appendChild(projectButtonDiv);\n}\n\nfunction createNoteDialog() {\n    const noteDialog = document.createElement('dialog');\n    noteDialog.id = 'note-dialog'\n    document.body.appendChild(noteDialog);\n    addInputNoteDialog()\n}\n\nfunction showNoteDialog() {\n    const noteDialog = document.getElementById('note-dialog');\n    const noteDesc = document.getElementById('note-desc-input');\n\n    noteDesc.value = '';\n    noteDialog.showModal();\n}\n\nfunction addInputNoteDialog() {\n    const noteDialog = document.getElementById('note-dialog');\n    const noteTitle = document.createElement('h3');\n    const noteDialogDiv = document.createElement('div');\n    const noteDesc = document.createElement('input');\n    const noteDescLabel = document.createElement('label');\n    const noteButtonDiv = document.createElement('div');\n    const noteDialogAddButton = document.createElement('button');\n    const noteDialogCancelButton = document.createElement('button');\n\n    noteDesc.id = 'note-desc-input';\n    noteDialogDiv.id = 'note-dialog-div';\n    noteButtonDiv.id = 'note-add-button-div';\n    noteDescLabel.id = 'note-desc-label'\n    noteDescLabel.textContent = \"Todo: \"\n    noteDesc.type = 'text';\n    noteTitle.innerText = \"-Note-\";\n    noteDialogAddButton.innerText = 'Add';\n    noteDialogCancelButton.innerText = 'Cancel';\n\n    noteDialogAddButton.addEventListener('click', () => { (0,_note__WEBPACK_IMPORTED_MODULE_1__.addNote)(noteDesc.value); closeNoteDialog() })\n    noteDialogCancelButton.addEventListener('click', () => { closeNoteDialog() })\n    \n    noteDialog.appendChild(noteTitle);\n    noteDialogDiv.appendChild(noteDescLabel);\n    noteDialogDiv.appendChild(noteDesc);\n    noteDialog.appendChild(noteDialogDiv);\n\n    // button \n    noteButtonDiv.appendChild(noteDialogCancelButton);   \n    noteButtonDiv.appendChild(noteDialogAddButton);\n    noteDialog.appendChild(noteButtonDiv);\n\n}\n\nfunction closeNoteDialog() {\n    const noteDialog = document.getElementById('note-dialog');\n    noteDialog.close();\n}\n\nfunction createNoteEditDialog() {\n    const noteEditDialog = document.createElement('dialog');\n    noteEditDialog.id = 'note-edit-dialog';\n    document.body.appendChild(noteEditDialog);\n    addInputNoteEditDialog();\n}\n\nfunction addInputNoteEditDialog() {\n    const noteEditDialog = document.getElementById('note-edit-dialog');\n    const noteEditDiv = document.createElement('div');\n    const noteEditTitle = document.createElement('h3');\n    const noteEditLabel = document.createElement('label');\n    const noteEditInput = document.createElement('input');\n    const noteButtonDiv = document.createElement('div');\n    const noteEditAddButton = document.createElement('button');\n    const noteEditCancelButton = document.createElement('button');\n    const noteOldDesc = document.createElement('div');\n    const noteLocationCounterDiv = document.createElement('div');\n\n    noteEditDiv.id = 'note-edit-div';\n    noteButtonDiv.id = 'note-edit-button-div';\n    noteEditInput.id = 'note-edit-input';\n    noteOldDesc.id = 'note-old-desc'\n    noteEditLabel.id = 'note-edit-label';\n    noteLocationCounterDiv.id = 'note-location-counter-div';\n    \n    noteEditInput.type = 'text';\n\n    noteEditTitle.innerText = '-Title-';\n    noteEditLabel.textContent = 'Edit: '\n    noteEditAddButton.innerText = \"Save\"\n    noteEditCancelButton.innerText = \"Cancel\"\n\n    noteEditAddButton.addEventListener('click', () => { ;(0,_note__WEBPACK_IMPORTED_MODULE_1__.editNoteFromStorage)(noteOldDesc.value, noteEditInput.value, noteLocationCounterDiv.value); closeEditDialog()});\n    noteEditCancelButton.addEventListener('click', () => { closeEditDialog(); });\n\n    noteEditDiv.appendChild(noteEditTitle);\n    noteEditDiv.appendChild(noteEditLabel);\n    noteEditDiv.appendChild(noteEditInput);\n    noteEditDiv.appendChild(noteOldDesc);\n    noteEditDiv.appendChild(noteLocationCounterDiv)\n    noteButtonDiv.appendChild(noteEditCancelButton);\n    noteButtonDiv.appendChild(noteEditAddButton);\n    noteEditDiv.appendChild(noteButtonDiv);\n    noteEditDialog.appendChild(noteEditDiv);\n}\n\nfunction showEditDialog(desc, locationIndex) {\n    const editDialog = document.getElementById('note-edit-dialog');\n    const noteDesc = document.getElementById('note-edit-input');\n    const noteOldDesc = document.getElementById('note-old-desc');\n    const noteLocationCounter = document.getElementById('note-location-counter-div');\n\n    noteDesc.value = desc;\n    noteOldDesc.value = desc;\n    noteLocationCounter.value = locationIndex;\n\n    editDialog.showModal();\n}\n\nfunction closeEditDialog() {\n    const editDialog = document.getElementById('note-edit-dialog');\n    editDialog.close();\n}\n\n\n\n//# sourceURL=webpack://odin-todo-list/./src/dialog.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addHeaderTitle: () => (/* binding */ addHeaderTitle),\n/* harmony export */   addProjectButton: () => (/* binding */ addProjectButton)\n/* harmony export */ });\n/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dialog */ \"./src/dialog.js\");\n\n\nfunction addHeaderTitle() {\n    const header = document.getElementById('header');\n    const headerTitle = document.createElement('h2');\n\n    headerTitle.innerText = \"// TODO LIST\"\n\n    header.appendChild(headerTitle);\n}\n\nfunction addProjectButton() {\n    const projectButtonDiv = document.getElementById('project-button-div');\n    const newButton = document.createElement('button');\n\n    newButton.innerText = \"+\"\n    newButton.id = 'project-new-button';\n\n    newButton.addEventListener('click', () => { (0,_dialog__WEBPACK_IMPORTED_MODULE_0__.showProjectDialog)(); } )\n\n    projectButtonDiv.appendChild(newButton)\n}\n\n//# sourceURL=webpack://odin-todo-list/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog */ \"./src/dialog.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./class */ \"./src/class.js\");\n\n\n\n\n\n\nfunction init() {\n    const root = document.createElement('div');\n    const header = document.createElement('div');\n    const container = document.createElement('div');\n    const project = document.createElement('div');\n    const projectTitleDiv = document.createElement('div');\n    const projectTitleHeading = document.createElement('h3');\n    const projectListDiv = document.createElement('div');\n    const projectButtonDiv = document.createElement('div');\n    const content = document.createElement('div');\n\n    root.id = 'root';\n    container.id = 'container';\n    project.id = 'project';\n    projectTitleDiv.id = 'project-title-div';\n    projectButtonDiv.id = 'project-button-div';\n    projectListDiv.id = 'project-list-div'\n    header.id = 'header';\n    content.id = 'content';\n    \n    document.body.appendChild(root);\n    root.appendChild(header);\n    root.appendChild(container);\n    container.appendChild(project);\n    project.appendChild(projectTitleDiv);\n    projectTitleDiv.appendChild(projectTitleHeading);\n    project.appendChild(projectListDiv);\n    project.appendChild(projectButtonDiv);\n    container.appendChild(content)\n\n    ;(0,_dom__WEBPACK_IMPORTED_MODULE_1__.addHeaderTitle)();\n    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.addProjectButton)();\n    (0,_dialog__WEBPACK_IMPORTED_MODULE_2__.createProjectDialog)()\n    ;(0,_dialog__WEBPACK_IMPORTED_MODULE_2__.createNoteDialog)();\n    (0,_dialog__WEBPACK_IMPORTED_MODULE_2__.createNoteEditDialog)();\n    checkLocalStorage();\n\n}\n\nfunction checkLocalStorage() {\n    if(localStorage.length === 0) {\n        (0,_project__WEBPACK_IMPORTED_MODULE_3__.addProject)(\"Today\");\n        (0,_project__WEBPACK_IMPORTED_MODULE_3__.addProject)(\"Tomorrow\");\n        (0,_project__WEBPACK_IMPORTED_MODULE_3__.addProject)(\"Food to Buy\");\n        initLocalStorage(\"Today\", \"Brush Teeth\", false);\n        initLocalStorage(\"Today\", \"Go shopping for food\", false);\n        initLocalStorage(\"Today\", \"Go wash my car\", true);\n        initLocalStorage(\"Today\", \"Buy inflatable pool\", false);\n        initLocalStorage(\"Today\", \"Keep on progressing through TheOdinProject!\", true);\n        initLocalStorage(\"Tomorrow\", \"Book a doctors appointment\", true);\n        initLocalStorage(\"Tomorrow\", \"Read a book\", false);\n        initLocalStorage(\"Tomorrow\", \"Take a nap\", false);\n        initLocalStorage(\"Food to Buy\", \"3 x Avocado\", false);\n        initLocalStorage(\"Food to Buy\", \"4 x Apples\", false);\n        initLocalStorage(\"Food to Buy\", \"2 x Chicken Breast\", false);\n        initLocalStorage(\"Food to Buy\", \"3 x Mince\", false);\n        initLocalStorage(\"Food to Buy\", \"1 x Rice\", false);\n        initLocalStorage(\"Food to Buy\", \"10 x Potato Chips\", false);\n    }\n}\n\nfunction initLocalStorage(key, desc, checked){\n    const note = new _class__WEBPACK_IMPORTED_MODULE_4__[\"default\"](key, desc, checked);\n    note.setNoteToStorage(key);\n}\n\ninit();\n(0,_project__WEBPACK_IMPORTED_MODULE_3__.reloadProjectSidebar)();\n\n//# sourceURL=webpack://odin-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/note.js":
/*!*********************!*\
  !*** ./src/note.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNote: () => (/* binding */ addNote),\n/* harmony export */   clearNoteContent: () => (/* binding */ clearNoteContent),\n/* harmony export */   editNoteFromStorage: () => (/* binding */ editNoteFromStorage),\n/* harmony export */   noteInit: () => (/* binding */ noteInit)\n/* harmony export */ });\n/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dialog */ \"./src/dialog.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./class */ \"./src/class.js\");\n/* harmony import */ var _img_bin_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/bin.png */ \"./src/img/bin.png\");\n/* harmony import */ var _img_edit_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/edit.png */ \"./src/img/edit.png\");\n\n\n\n\n\n\nfunction noteInit(projectId) {\n    clearNoteContent()\n\n    const getProjectListDiv = document.getElementById('project-button-div');\n\n    const content = document.getElementById('content')\n    const noteTitleDiv = document.createElement('div');\n    const noteContentDiv = document.createElement('div');\n    const noteButtonDiv = document.createElement('div');\n\n    const projectDeleteButton = document.createElement('button');\n    projectDeleteButton.addEventListener('click', () => {(0,_project__WEBPACK_IMPORTED_MODULE_1__.deleteProject)(projectId)})\n\n    noteTitleDiv.id = 'note-title-div';\n    noteContentDiv.id = 'note-content-div';\n    noteButtonDiv.id = 'note-button-div';\n    projectDeleteButton.id = 'project-delete-button'\n\n    projectDeleteButton.innerText = \"Delete List\"\n\n    content.appendChild(noteTitleDiv);\n    content.appendChild(noteContentDiv);\n    content.appendChild(noteButtonDiv);\n    \n    getProjectListDiv.appendChild(projectDeleteButton);\n    \n    createNoteTitle(projectId);\n    createNoteAddButton();\n    reloadNoteContent(projectId);\n}\n\nfunction clearNoteContent() {\n    document.querySelectorAll('#note-title-div').forEach(e => e.remove());\n    document.querySelectorAll('#note-content-div').forEach(e => e.remove());\n    document.querySelectorAll('#note-button-div').forEach(e => e.remove());\n    document.querySelectorAll('#project-delete-button').forEach(e => e.remove())\n}\n\nfunction createNoteTitle(projectId) {\n    const noteTitleDiv = document.getElementById('note-title-div');\n    const noteTitle = document.createElement('h3');\n\n    noteTitle.id = 'note-title';\n    noteTitle.innerText = `-Notes for ${projectId}-`;\n    noteTitle.value = projectId;\n\n    noteTitleDiv.appendChild(noteTitle);\n}\n\nfunction createNoteAddButton() {\n    const noteButtonDiv = document.getElementById('note-title-div');\n    const noteButton = document.createElement('button');\n\n    noteButton.id = 'note-button';\n    noteButton.innerText = 'Add Note';\n\n    noteButton.addEventListener('click', () => { (0,_dialog__WEBPACK_IMPORTED_MODULE_0__.showNoteDialog)();})\n\n    noteButtonDiv.appendChild(noteButton);\n}\n\nfunction addNote(desc) {\n    const findProjectKey = document.getElementById('note-title');\n    const note = new _class__WEBPACK_IMPORTED_MODULE_2__[\"default\"](findProjectKey.value, desc, false);\n    // set storage with note\n    note.setNoteToStorage(findProjectKey.value);\n    setTimeout(() => {\n        reloadNoteContent(findProjectKey.value);\n    }, 10)\n}\n\nfunction reloadNoteContent(projectId) {\n    const findProjectKey = document.getElementById('note-title');\n    const noteDiv = document.getElementById('note-content-div');\n\n    // Clear existing content\n    noteDiv.innerHTML = '';\n\n    const noteObjJSON = localStorage.getItem(findProjectKey.value);\n    let noteObj = noteObjJSON ? JSON.parse(noteObjJSON) : {};\n    \n    if (noteObj[projectId]) {\n        const projectNotes = noteObj[projectId];\n        for (let i = 0; i < projectNotes.length; i++) {\n            const desc = projectNotes[i].todo;\n            const checked = projectNotes[i].checked;\n            updateNoteContent(desc, checked, i);\n        }\n    }\n}\n\nfunction updateNoteContent(desc, checked, locationIndex) {\n    const noteDiv = document.getElementById('note-content-div');\n    const noteInfoDiv = document.createElement('div');\n    const noteDesc = document.createElement('p');\n    const findProjectKey = document.getElementById('note-title');\n    const noteButtonDiv = document.createElement('div');\n    const deleteButton = document.createElement('img');\n    const editButton = document.createElement('img');\n\n    noteInfoDiv.id = 'note-info-div';\n    noteButtonDiv.id = 'note-button-div';\n    deleteButton.id = 'note-delete-button'\n    editButton.id = 'note-edit-button';\n    // noteButtonDiv.className = 'note-content';\n\n    noteDesc.innerText = `${desc}`;\n    deleteButton.src = _img_bin_png__WEBPACK_IMPORTED_MODULE_3__;\n    editButton.src = _img_edit_png__WEBPACK_IMPORTED_MODULE_4__;\n\n    noteDesc.className = noteDescChecked(checked);\n    noteInfoDiv.className = noteDescChecked(checked);\n\n    deleteButton.addEventListener(\"click\", () => { deleteNoteFromStorage(findProjectKey.value ,desc, reloadNoteContent, locationIndex)} );\n    editButton.addEventListener(\"click\", () => {(0,_dialog__WEBPACK_IMPORTED_MODULE_0__.showEditDialog)(desc, locationIndex);});\n    noteDesc.addEventListener(\"click\", () => {changeCheckedNoteFromStorage(desc, checked, locationIndex)});\n    \n    noteInfoDiv.appendChild(noteDesc);\n    noteInfoDiv.appendChild(noteButtonDiv)\n    noteButtonDiv.appendChild(editButton);\n    noteButtonDiv.appendChild(deleteButton);\n    noteDiv.appendChild(noteInfoDiv);\n}\n\nfunction deleteNoteFromStorage(key, desc, callback, locationIndex) {\n    const noteJSON = JSON.parse(localStorage.getItem(key));\n    \n    for (let item in noteJSON) {\n        const currentNoteArray = noteJSON[item];\n        for (let i = 0; i < currentNoteArray.length; i++) {\n            const currentNote = currentNoteArray[i];\n            const index = i;\n            \n            // Remove note from array\n            if (currentNote.todo === desc && locationIndex == index) {\n                currentNoteArray.splice(i, 1);\n            }\n\n            // If the array is empty, remove the key\n            if (currentNoteArray.length === 0) {\n                delete noteJSON[item];\n            }            \n        }\n    }\n\n    localStorage.setItem(key, JSON.stringify(noteJSON));\n\n    // Set a slight delay before reloading\n    setTimeout(() => {\n        callback(key);\n    }, 100)\n}\n\nfunction editNoteFromStorage(oldDesc, newDesc, locationIndex) {\n    console.log(`COUNTER LOCATION: ${locationIndex}`)\n    const findProjectKey = document.getElementById('note-title');\n    const noteJSON = JSON.parse(localStorage.getItem(findProjectKey.value));\n\n    // Check if noteJSON is not null\n    if(noteJSON) {\n        for(let item in noteJSON) {\n            const currentNoteArray = noteJSON[item];\n\n            for (let i = 0; i < currentNoteArray.length; i++) {\n                const note = currentNoteArray[i].todo;\n                if(note === oldDesc && i === locationIndex) {\n                    currentNoteArray[i].todo = newDesc;\n                    localStorage.setItem(findProjectKey.value, JSON.stringify(noteJSON));\n                    reloadNoteContent(findProjectKey.value);\n                }\n            }\n        }\n    }\n}\n\nfunction changeCheckedNoteFromStorage(desc, checked, locationIndex) {\n    const findProjectKey = document.getElementById('note-title');\n    const noteJSON = JSON.parse(localStorage.getItem(findProjectKey.value));\n\n    // Check if noteJSON is not null\n    if(noteJSON) {\n        for(let item in noteJSON) {\n            const currentNoteArray = noteJSON[item];\n\n            for(let i = 0; i < currentNoteArray.length; i++){\n                const note = currentNoteArray[i].todo;\n                if(note === desc && i === locationIndex) {\n                    console.log(note)\n                    if(checked === false) {\n                        currentNoteArray[i].checked = true;\n                    } else {\n                        currentNoteArray[i].checked = false;\n                    }\n\n                    localStorage.setItem(findProjectKey.value, JSON.stringify(noteJSON));\n                    reloadNoteContent(findProjectKey.value);\n                }\n            }            \n        }\n    }\n}\n\nfunction noteDescChecked(checked) {\n    if(checked === false) {\n        return 'checked-false';\n    } else {\n        return 'checked-true';\n    }\n}\n\n//# sourceURL=webpack://odin-todo-list/./src/note.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProject: () => (/* binding */ addProject),\n/* harmony export */   deleteProject: () => (/* binding */ deleteProject),\n/* harmony export */   reloadProjectSidebar: () => (/* binding */ reloadProjectSidebar)\n/* harmony export */ });\n/* harmony import */ var _note__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./note */ \"./src/note.js\");\n\n\n\nfunction addProject(title) {\n    localStorage.setItem(title, \"\")\n    reloadProjectSidebar();\n}\n\nfunction reloadProjectSidebar() {\n    const project = document.getElementById('project-list-div');\n    project.innerHTML = '';\n\n    // loop through local storage\n    for (const [key] of Object.entries(localStorage)) {\n        const projectNames = document.createElement('h4');\n        projectNames.id = key;\n        projectNames.className = \"project-title-list\"\n        projectNames.innerText = key;\n\n        projectNames.addEventListener('click', () => { (0,_note__WEBPACK_IMPORTED_MODULE_0__.noteInit)(projectNames.id);})\n\n        project.appendChild(projectNames)\n     }\n}\n\nfunction deleteProject(projectId) {\n    localStorage.removeItem(projectId);\n    reloadProjectSidebar();\n    (0,_note__WEBPACK_IMPORTED_MODULE_0__.clearNoteContent)()\n}\n\n//# sourceURL=webpack://odin-todo-list/./src/project.js?");

/***/ }),

/***/ "./src/img/bin.png":
/*!*************************!*\
  !*** ./src/img/bin.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/a6fd29509719f079bfd7.png\";\n\n//# sourceURL=webpack://odin-todo-list/./src/img/bin.png?");

/***/ }),

/***/ "./src/img/edit.png":
/*!**************************!*\
  !*** ./src/img/edit.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/e42c3c63c6b97a10746d.png\";\n\n//# sourceURL=webpack://odin-todo-list/./src/img/edit.png?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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