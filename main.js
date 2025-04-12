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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Reset & Base */\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\r\n  color: #333;\r\n}\r\n\r\nhtml {\r\n  overflow-y: scroll;\r\n}\r\n\r\nbody {\r\n  background-color: #f0f0f0;\r\n  line-height: 1.6;\r\n}\r\n\r\n/* Navigation */\r\nheader {\r\n  background-color: #fff;\r\n  padding: 20px 0;\r\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 10;\r\n}\r\n\r\nnav {\r\n  width: 80%;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 40px;\r\n}\r\n\r\nnav .logo {\r\n  margin-right: auto;\r\n  cursor: pointer;\r\n  transition: transform 0.3s ease;\r\n}\r\n\r\nnav .logo:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\nnav a {\r\n  text-decoration: none;\r\n  font-weight: 600;\r\n  font-size: 1.1rem;\r\n  padding: 8px 12px;\r\n  transition: color 0.3s, border-bottom 0.3s;\r\n  border-bottom: 2px solid transparent;\r\n}\r\n\r\nnav a:hover {\r\n  color: #aa0000;\r\n  border-bottom: 2px solid #aa0000;\r\n}\r\n\r\n/* Main Content Area */\r\n#content {\r\n  max-width: 1000px;\r\n  margin: 60px auto;\r\n  padding: 0 20px;\r\n  text-align: center;\r\n  opacity: 1;\r\n  transition: opacity 0.5s ease-in-out;\r\n}\r\n\r\n#content.hidden {\r\n  opacity: 0;\r\n}\r\n\r\n/* Hero Image */\r\n#content img {\r\n  width: 100%;\r\n  max-height: 500px;\r\n  object-fit: cover;\r\n  border-radius: 16px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n/* Headings */\r\n#content h1 {\r\n  font-family: \"Cormorant Garamond\", serif;\r\n  font-size: 2.8rem;\r\n  font-weight: bold;\r\n  margin-bottom: 20px;\r\n  color: #222;\r\n}\r\n\r\n#content h2 {\r\n  font-family: \"Cormorant Garamond\", serif;\r\n  font-size: 2rem;\r\n  font-weight: bold;\r\n  margin-top: 10px;\r\n  color: #222;\r\n}\r\n\r\n/* Paragraphs */\r\n#content p {\r\n  font-size: 1.1rem;\r\n  max-width: 700px;\r\n  margin: 0 auto;\r\n  color: #444;\r\n}\r\n\r\n#content li {\r\n  list-style: none;\r\n}\r\n\r\n/* Responsive */\r\n@media (max-width: 768px) {\r\n  nav {\r\n    flex-direction: column;\r\n    gap: 10px;\r\n  }\r\n\r\n  #content h1 {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  #content img {\r\n    max-height: 300px;\r\n  }\r\n}\r\n\r\nfooter {\r\n  margin-top: auto;\r\n  display: flex;\r\n  background-color: transparent;\r\n  color: #333333;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 10px;\r\n  width: 100%;\r\n}\r\n\r\nfooter a {\r\n  display: flex;\r\n  align-items: center; /* Aligns items vertically */\r\n  text-decoration: underline;\r\n  background-color: transparent;\r\n  color: #333333;\r\n  font-size: 1.2rem;\r\n  gap: 8px;\r\n  font-family: \"Cormorant Garamond\", serif;\r\n  font-weight: bolder;\r\n}\r\n\r\nfooter a:hover {\r\n  animation: float 3s ease-in-out infinite;\r\n  color: #aa0000;\r\n}\r\n\r\n.github-logo {\r\n  display: inline-block;\r\n  background: none;\r\n  border: 1px solid transparent;\r\n  border-radius: 50%;\r\n  max-width: 28px;\r\n  max-height: 28px;\r\n\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n@keyframes flicker {\r\n  0% {\r\n    box-shadow: 0 0 10px #4da8da, 0 0 20px #4da8da, 0 0 30px #4da8da;\r\n  }\r\n  50% {\r\n    box-shadow: 0 0 20px #4da8da, 0 0 30px #4da8da, 0 0 40px #4da8da;\r\n  }\r\n  100% {\r\n    box-shadow: 0 0 15px #4da8da, 0 0 25px #4da8da, 0 0 35px #4da8da;\r\n  }\r\n}\r\n\r\n@keyframes flickerText {\r\n  0% {\r\n    text-shadow: 0 0 10px #4da8da, 0 0 20px #4da8da, 0 0 30px #4da8da;\r\n  }\r\n  50% {\r\n    text-shadow: 0 0 20px #4da8da, 0 0 30px #4da8da, 0 0 40px #4da8da;\r\n  }\r\n  100% {\r\n    text-shadow: 0 0 15px #4da8da, 0 0 25px #4da8da, 0 0 35px #4da8da;\r\n  }\r\n}\r\n\r\n@keyframes float {\r\n  0%,\r\n  100% {\r\n    transform: translateY(0);\r\n  }\r\n  50% {\r\n    transform: translateY(-3px);\r\n  }\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   aboutHeading: () => (/* binding */ aboutHeading),\n/* harmony export */   aboutParagraph: () => (/* binding */ aboutParagraph)\n/* harmony export */ });\nconst aboutHeading = document.createElement(\"h1\");\r\naboutHeading.textContent = \"ABOUT US\";\r\n\r\nconst aboutParagraph = document.createElement(\"p\");\r\naboutParagraph.innerHTML =\r\n  \"At <strong>Lumière</strong>, we are passionate about creating unforgettable dining experiences that blend exceptional flavors with impeccable service. Our philosophy is rooted in the belief that fine dining is more than just a meal—it’s an experience that engages the senses, tells a story, and fosters connection. <br/><br/>Nestled in the heart of Kuala Lumpur, our restaurant brings together the finest locally sourced ingredients and global culinary techniques to craft dishes that are both innovative and timeless. Whether you’re celebrating a special occasion or enjoying an intimate meal, we invite you to indulge in a journey of taste, texture, and elegance. <br/><br/>Our team of highly skilled chefs and staff are dedicated to offering you a seamless dining experience, where every detail matters. From the first course to the last, we ensure that every bite is a masterpiece, paired with world-class wines and personalized service. <br/><br/>Join us at <strong>Lumière</strong>, where every meal is an opportunity to celebrate life’s finest moments.\";\r\n\n\n//# sourceURL=webpack:///./src/about.js?");

/***/ }),

/***/ "./src/fine-dine.jpg":
/*!***************************!*\
  !*** ./src/fine-dine.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"59d59b87de0f4ccd26a9.jpg\";\n\n//# sourceURL=webpack:///./src/fine-dine.jpg?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHome: () => (/* binding */ loadHome)\n/* harmony export */ });\n/* harmony import */ var _fine_dine_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fine-dine.jpg */ \"./src/fine-dine.jpg\");\n\r\n\r\nfunction loadHome() {\r\n  const content = document.getElementById(\"content\");\r\n  content.innerHTML = \"\";\r\n\r\n  const homeImage = document.createElement(\"img\");\r\n  homeImage.src = _fine_dine_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n\r\n  const homeHeading = document.createElement(\"h1\");\r\n  homeHeading.textContent = \"FINE DINING\";\r\n\r\n  const homeParagraph = document.createElement(\"p\");\r\n  homeParagraph.innerHTML =\r\n    \"Welcome to <strong>Lumière</strong>, an exquisite fine dining experience where elegance meets culinary artistry. Our meticulously crafted menu features a selection of the finest dishes, prepared with the freshest, locally sourced ingredients. <br/><br/>From intimate dinners to celebratory occasions, we offer an atmosphere of refined sophistication paired with impeccable service. Indulge in a dining experience that tantalizes the senses and creates unforgettable memories.\";\r\n\r\n  return [homeImage, homeHeading, homeParagraph];\r\n}\r\n\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\r\n\r\n\r\n\r\n\r\nconst homeBtn = document.querySelector(\".home\");\r\nconst menuBtn = document.querySelector(\".menu\");\r\nconst aboutBtn = document.querySelector(\".about\");\r\nconst logo = document.querySelector(\".logo\");\r\nconst content = document.getElementById(\"content\");\r\n\r\n// Function to load content with smooth transitions\r\nfunction loadContent(elements = []) {\r\n  // Fade out the current content\r\n  content.classList.add(\"hidden\");\r\n\r\n  // Wait for the fade-out to complete, then replace content\r\n  setTimeout(() => {\r\n    content.innerHTML = \"\"; // Clear the current content\r\n    elements.forEach((item) => content.append(item));\r\n    content.classList.remove(\"hidden\"); // Fade in the new content\r\n  }, 300); // Match the duration of the fade-out\r\n}\r\n\r\nfunction loadHomeContent() {\r\n  const homeElements = (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.loadHome)();\r\n  loadContent(homeElements);\r\n}\r\n\r\nloadHomeContent();\r\n\r\nlogo.addEventListener(\"click\", () => {\r\n  loadHomeContent();\r\n});\r\n\r\nhomeBtn.addEventListener(\"click\", () => {\r\n  loadHomeContent();\r\n});\r\n\r\nmenuBtn.addEventListener(\"click\", () => {\r\n  loadContent([_menu_js__WEBPACK_IMPORTED_MODULE_2__.menuHeading, _menu_js__WEBPACK_IMPORTED_MODULE_2__.fullMenu]);\r\n});\r\n\r\naboutBtn.addEventListener(\"click\", () => {\r\n  loadContent([_about_js__WEBPACK_IMPORTED_MODULE_3__.aboutHeading, _about_js__WEBPACK_IMPORTED_MODULE_3__.aboutParagraph]);\r\n});\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fullMenu: () => (/* binding */ fullMenu),\n/* harmony export */   listAppetizers: () => (/* binding */ listAppetizers),\n/* harmony export */   listDesserts: () => (/* binding */ listDesserts),\n/* harmony export */   listMain: () => (/* binding */ listMain),\n/* harmony export */   menuHeading: () => (/* binding */ menuHeading)\n/* harmony export */ });\nconst menuHeading = document.createElement(\"h1\");\r\nmenuHeading.textContent = \"MENU\";\r\n\r\nconst appetizersHeading = document.createElement(\"h2\");\r\nappetizersHeading.textContent = \"Appetizers / Starters\";\r\n\r\nconst listAppetizers = document.createElement(\"ul\");\r\nconst appetizers = [\r\n  \"Foie Gras Torchon\",\r\n  \"Tuna Tartare\",\r\n  \"Lobster Bisque\",\r\n  \"Caviar\",\r\n  \"Duck Breast Carpaccio\",\r\n  \"Beef Tartare\",\r\n  \"Chilled Oysters\",\r\n];\r\n\r\nappetizers.forEach((item) => {\r\n  const li = document.createElement(\"li\");\r\n  li.textContent = item;\r\n  listAppetizers.appendChild(li);\r\n});\r\n\r\nconst mainHeading = document.createElement(\"h2\");\r\nmainHeading.textContent = \"Main Courses / Entrées\";\r\n\r\nconst listMain = document.createElement(\"ul\");\r\nconst mains = [\r\n  \"Wagyu Beef Tenderloin\",\r\n  \"Pan-Seared Sea Bass\",\r\n  \"Filet Mignon\",\r\n  \"Lobster Newberg\",\r\n  \"Rack of Lamb\",\r\n  \"Roast Peking Duck\",\r\n  \"Baked Salmon with Champagne Beurre Blanc\",\r\n];\r\n\r\nmains.forEach((item) => {\r\n  const li = document.createElement(\"li\");\r\n  li.textContent = item;\r\n  listMain.appendChild(li);\r\n});\r\n\r\nconst dessertsHeading = document.createElement(\"h2\");\r\ndessertsHeading.textContent = \"Desserts\";\r\n\r\nconst listDesserts = document.createElement(\"ul\");\r\nconst desserts = [\r\n  \"Crème Brûlée\",\r\n  \"Chocolate Soufflé\",\r\n  \"Tiramisu\",\r\n  \"Raspberry Sorbet\",\r\n  \"Pistachio Macaron with Raspberry Coulis\",\r\n  \"Grand Marnier Crêpes Suzette\",\r\n];\r\n\r\ndesserts.forEach((item) => {\r\n  const li = document.createElement(\"li\");\r\n  li.textContent = item;\r\n  listDesserts.appendChild(li);\r\n});\r\n\r\nconst fullMenu = document.createElement(\"div\");\r\nfullMenu.appendChild(appetizersHeading);\r\nfullMenu.appendChild(listAppetizers);\r\nfullMenu.appendChild(mainHeading);\r\nfullMenu.appendChild(listMain);\r\nfullMenu.appendChild(dessertsHeading);\r\nfullMenu.appendChild(listDesserts);\r\n\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/styles.css?");

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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
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