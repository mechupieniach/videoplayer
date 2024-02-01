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

/***/ "./src/module1.ts":
/*!************************!*\
  !*** ./src/module1.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.createRecordList = exports.createButton = exports.createVideoElement = exports.createContainer = void 0;\nconst createContainer = () => {\n    const container = document.getElementById('container');\n    container.className = 'container';\n    return container;\n};\nexports.createContainer = createContainer;\nconst createVideoElement = () => {\n    const videoElement = document.createElement('video');\n    videoElement.src = './coolvideo.mp4';\n    return videoElement;\n};\nexports.createVideoElement = createVideoElement;\nconst createButton = (info, type) => {\n    const Button = document.createElement('button');\n    Button.innerHTML = info;\n    Button.type = type;\n    return Button;\n};\nexports.createButton = createButton;\nconst createRecordList = () => {\n    const recordList = document.createElement('ul');\n    recordList.innerHTML = 'Live description:';\n    return recordList;\n};\nexports.createRecordList = createRecordList;\n\n\n//# sourceURL=webpack://videoplayer/./src/module1.ts?");

/***/ }),

/***/ "./src/module2.ts":
/*!************************!*\
  !*** ./src/module2.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.createVolumeInput = exports.createLabel = exports.createProgressInput = void 0;\nconst createProgressInput = () => {\n    const progressInput = document.createElement('input');\n    progressInput.type = 'range';\n    progressInput.min = '0';\n    progressInput.max = '100';\n    progressInput.value = '0';\n    return progressInput;\n};\nexports.createProgressInput = createProgressInput;\nconst createLabel = (label, element) => {\n    const labelElement = document.createElement('label');\n    labelElement.innerHTML = label;\n    labelElement.appendChild(element);\n    return labelElement;\n};\nexports.createLabel = createLabel;\nconst createVolumeInput = () => {\n    const volumeInput = document.createElement('input');\n    volumeInput.type = 'range';\n    volumeInput.min = '0';\n    volumeInput.max = '100';\n    volumeInput.value = '0';\n    return volumeInput;\n};\nexports.createVolumeInput = createVolumeInput;\n\n\n//# sourceURL=webpack://videoplayer/./src/module2.ts?");

/***/ }),

/***/ "./src/module3.ts":
/*!************************!*\
  !*** ./src/module3.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.createControls = exports.createDescription = exports.CreateCurrentTime = exports.createForm = void 0;\nconst createForm = () => {\n    const formElement = document.createElement('form');\n    return formElement;\n};\nexports.createForm = createForm;\nconst CreateCurrentTime = () => {\n    const currentTime = document.createElement('input');\n    currentTime.readOnly;\n    currentTime.value = \"00:00:00\";\n    return currentTime;\n};\nexports.CreateCurrentTime = CreateCurrentTime;\nconst createDescription = () => {\n    const description = document.createElement('input');\n    description.type = 'text';\n    description.placeholder = 'describe';\n    return description;\n};\nexports.createDescription = createDescription;\nconst createControls = () => {\n    const controls = document.createElement('div');\n    controls.className = 'controls';\n    return controls;\n};\nexports.createControls = createControls;\n\n\n//# sourceURL=webpack://videoplayer/./src/module3.ts?");

/***/ }),

/***/ "./videoplayer.ts":
/*!************************!*\
  !*** ./videoplayer.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst M1 = __importStar(__webpack_require__(/*! ./src/module1 */ \"./src/module1.ts\"));\nconst M2 = __importStar(__webpack_require__(/*! ./src/module2 */ \"./src/module2.ts\"));\nconst M3 = __importStar(__webpack_require__(/*! ./src/module3 */ \"./src/module3.ts\"));\nconst container = M1.createContainer();\nconst videoElement = M1.createVideoElement();\nconst pauseButton = M1.createButton('pause', 'button');\nconst stopButton = M1.createButton('stop', 'button');\nconst playButton = M1.createButton('play', 'button');\nconst recordList = M1.createRecordList();\nconst volumeInput = M2.createVolumeInput();\nconst progressInput = M2.createProgressInput();\nconst labelForVolume = M2.createLabel('Volume', volumeInput);\nconst labelForProgress = M2.createLabel('Progress', progressInput);\nconst formElement = M3.createForm();\nconst currentTime = M3.CreateCurrentTime();\nconst description = M3.createDescription();\nconst submitButton = M1.createButton('submit', 'submit');\nconst labelForTime = M2.createLabel('Current Time', currentTime);\nconst labelForDesc = M2.createLabel('Description', description);\nconst controls = M3.createControls();\nlet volumeLevel = 0;\nconst controlsArray = [playButton, pauseButton, stopButton, labelForVolume, labelForProgress];\ncontrolsArray.forEach((Element) => {\n    controls.appendChild(Element);\n});\nconst formArray = [labelForTime, labelForDesc, submitButton];\nformArray.forEach((Element) => {\n    formElement.appendChild(Element);\n});\nconst Video = document.createElement('div');\nVideo.appendChild(videoElement);\nVideo.appendChild(controls);\nconst livechat = document.createElement('div');\nlivechat.appendChild(formElement);\nlivechat.appendChild(recordList);\ncontainer === null || container === void 0 ? void 0 : container.appendChild(Video);\ncontainer === null || container === void 0 ? void 0 : container.appendChild(livechat);\nconst onTimeChange = (event) => {\n    const eventElement = event.target;\n    if (eventElement) {\n        currentTime.value = getFormattedTime(eventElement.currentTime);\n    }\n};\nconst play = () => __awaiter(void 0, void 0, void 0, function* () {\n    videoElement.addEventListener(\"timeupdate\", onTimeChange);\n    videoElement.play();\n});\nconst pause = () => {\n    videoElement.pause();\n};\nconst stopVideo = () => {\n    videoElement.pause();\n    videoElement.currentTime = 0;\n    currentTime.value = '00:00:00';\n    videoElement.removeEventListener(\"timeupdate\", onTimeChange);\n};\nvolumeInput.addEventListener('change', (event) => {\n    const { target } = event;\n    volumeLevel = target.value;\n    videoElement.volume = +volumeLevel / 100;\n});\nconst change = () => {\n    const time = progressInput.value / 100 * videoElement.duration;\n    videoElement.currentTime = time;\n};\nconst getFormattedTime = (time) => {\n    const seconds = Math.floor(time);\n    const minutes = seconds / 60 < 1 ? 0 : Math.floor(seconds / 60);\n    const hours = minutes / 60 < 1 ? 0 : Math.floor(minutes / 60);\n    return `${hours < 10 ? \"0\" + hours : hours}`\n        + `:${minutes % 60 < 10 ? \"0\" + minutes % 60 : minutes % 60}`\n        + `:${seconds % 60 < 10 ? \"0\" + seconds % 60 : seconds % 60}`;\n};\nconst addList = (event) => {\n    event.preventDefault();\n    let record = currentTime.value + \" : \" + description.value;\n    let li = document.createElement(\"li\");\n    li.innerHTML = record;\n    description.value = '';\n    recordList.children.length === 0\n        ?\n            recordList.appendChild(li)\n        :\n            recordList.insertBefore(li, recordList.children[0]);\n    console.log(description.value);\n};\nformElement.addEventListener('submit', addList);\nplayButton.addEventListener('click', play);\npauseButton.addEventListener('click', pause);\nstopButton.addEventListener('click', stopVideo);\nprogressInput.addEventListener('click', change);\n\n\n//# sourceURL=webpack://videoplayer/./videoplayer.ts?");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./videoplayer.ts");
/******/ 	
/******/ })()
;