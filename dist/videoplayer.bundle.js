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

/***/ "./videoplayer.ts":
/*!************************!*\
  !*** ./videoplayer.ts ***!
  \************************/
/***/ (function() {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nconst container = document.getElementById('container');\ncontainer.className = 'container';\nconst videoElement = document.createElement('video');\nvideoElement.src = './coolvideo.mp4';\nlet volumeLevel = 0;\nconst volumeInput = document.createElement('input');\nvolumeInput.type = 'range';\nvolumeInput.min = '0';\nvolumeInput.max = '100';\nvolumeInput.value = '0';\nconst labelVolume = document.createElement('label');\nconst progressInput = document.createElement('input');\nprogressInput.type = 'range';\nprogressInput.min = '0';\nprogressInput.max = '100';\nprogressInput.value = '0';\ncontainer === null || container === void 0 ? void 0 : container.appendChild(videoElement);\nconst pauseButton = document.createElement('button');\npauseButton.innerHTML = 'pause';\nconst stopButton = document.createElement('button');\nstopButton.innerHTML = 'stop';\nconst playButton = document.createElement('button');\nplayButton.innerHTML = 'play';\nconst controls = document.createElement('div');\ncontrols.appendChild(playButton);\ncontrols.appendChild(pauseButton);\ncontrols.appendChild(stopButton);\ncontrols.appendChild(volumeInput);\ncontrols.appendChild(progressInput);\ncontainer === null || container === void 0 ? void 0 : container.appendChild(controls);\nconst formElement = document.createElement('form');\nconst currentTime = document.createElement('input');\ncurrentTime.readOnly;\ncurrentTime.value = \"00:00:00\";\nconst description = document.createElement('input');\ndescription.type = 'text';\ndescription.placeholder = 'describe';\nconst submitButton = document.createElement('button');\nsubmitButton.type = 'submit';\nsubmitButton.innerHTML = 'submit';\nformElement.appendChild(currentTime);\nformElement.appendChild(description);\nformElement.appendChild(submitButton);\ncontainer === null || container === void 0 ? void 0 : container.appendChild(formElement);\nconst recordList = document.createElement('ul');\nrecordList.innerHTML = 'Live description:';\ncontainer === null || container === void 0 ? void 0 : container.appendChild(recordList);\nconst onTimeChange = (event) => {\n    const eventElement = event.target;\n    if (eventElement) {\n        currentTime.value = getFormattedTime(eventElement.currentTime);\n    }\n};\nconst play = () => __awaiter(void 0, void 0, void 0, function* () {\n    videoElement.addEventListener(\"timeupdate\", onTimeChange);\n    videoElement.play();\n});\nconst pause = () => {\n    console.log('pauza');\n    videoElement.pause();\n};\nconst stopVideo = () => {\n    console.log('stop');\n    videoElement.pause();\n    videoElement.currentTime = 0;\n    currentTime.value = '00:00:00';\n    videoElement.removeEventListener(\"timeupdate\", onTimeChange);\n};\nvolumeInput.addEventListener('change', (event) => {\n    const { target } = event;\n    volumeLevel = target.value;\n    videoElement.volume = +volumeLevel / 100;\n});\nconst change = () => {\n    const time = progressInput.value / 100 * videoElement.duration;\n    videoElement.currentTime = time;\n};\nconst getFormattedTime = (time) => {\n    const seconds = Math.floor(time);\n    const minutes = seconds / 60 < 1 ? 0 : Math.floor(seconds / 60);\n    const hours = minutes / 60 < 1 ? 0 : Math.floor(minutes / 60);\n    return `${hours < 10 ? \"0\" + hours : hours}`\n        + `:${minutes % 60 < 10 ? \"0\" + minutes % 60 : minutes % 60}`\n        + `:${seconds % 60 < 10 ? \"0\" + seconds % 60 : seconds % 60}`;\n};\nlet list = [];\nconst addList = (event) => {\n    event.preventDefault();\n    let record = currentTime.value + \" : \" + description.value;\n    description.value = '';\n    let li = document.createElement(\"li\");\n    li.innerHTML = record;\n    recordList.children.length === 0\n        ?\n            recordList.appendChild(li)\n        :\n            recordList.insertBefore(li, recordList.children[0]);\n};\nformElement.addEventListener('submit', addList);\nplayButton.addEventListener('click', play);\npauseButton.addEventListener('click', pause);\nstopButton.addEventListener('click', stopVideo);\nprogressInput.addEventListener('click', change);\n\n\n//# sourceURL=webpack://videoplayer/./videoplayer.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./videoplayer.ts"]();
/******/ 	
/******/ })()
;