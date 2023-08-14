/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/login.js":
/*!**********************!*\
  !*** ./src/login.js ***!
  \**********************/
/***/ (() => {

eval("document.getElementById('loginform').addEventListener(\"submit\", event => {\r\n    event.preventDefault()\r\n\r\n    let user = {}\r\n    user.email = document.getElementById(\"inputEmail\").value;\r\n    user.password = document.getElementById(\"inputPassword\").value;\r\n\r\n    //Check for login\r\n    // getData(\"http://localhost:3000/login\", \"POST\", user).then(result => {\r\n    getData(\"https://mealmagic.onrender.com/login\", \"POST\", user).then(result => {\r\n\r\n        sessionStorage.setItem('user', JSON.stringify(result.data))\r\n        window.location.href = \"home.html\"\r\n    })\r\n})\r\n\r\nasync function getData(url, method, data) {\r\n    let resp = await fetch(url, {\r\n        method: method,\r\n        headers: {\r\n            'Content-Type': \"application/json\"\r\n        },\r\n        body: JSON.stringify(data)\r\n    });\r\n    return await resp.json();\r\n}\n\n//# sourceURL=webpack:///./src/login.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/login.js"]();
/******/ 	
/******/ })()
;