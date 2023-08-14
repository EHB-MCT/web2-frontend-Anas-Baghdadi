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

/***/ "./src/register.js":
/*!*************************!*\
  !*** ./src/register.js ***!
  \*************************/
/***/ (() => {

eval("document.getElementById('registerForm').addEventListener(\"submit\", event => {\r\n    event.preventDefault()\r\n  \r\n    let user = {}\r\n    user.username = document.getElementById(\"inputUsername\").value;\r\n    user.email = document.getElementById(\"inputEmail\").value;\r\n    user.password = document.getElementById(\"inputPassword\").value;\r\n    user.password2 = document.getElementById(\"inputPassword2\").value;\r\n  \r\n    //check the passwords\r\n    if(user.password == user.password2){\r\n        // //Register the user\r\n        // getData(\"http://localhost:3000/register\", \"POST\", user).then(data => {\r\n        getData(\"https://mealmagic.onrender.com/register\", \"POST\", user).then(data => {\r\n            alert(data.message)\r\n        })\r\n        // getData(\"http://localhost:3000/register\", \"POST\", user).then(result => {\r\n        getData(\"https://mealmagic.onrender.com/register\", \"POST\", user).then(result => {\r\n  \r\n        window.location.href = \"login.html\"\r\n    })\r\n    }else{\r\n        alert(\"Passwords do not match\")\r\n    }\r\n  \r\n  })\r\n  \r\n  async function getData(url, method, data){\r\n    let resp = await fetch(url, {\r\n        method: method,\r\n        headers: {\r\n            'Content-Type': \"application/json\"\r\n        },\r\n        body: JSON.stringify(data)\r\n    });\r\n    return await resp.json();\r\n  }\n\n//# sourceURL=webpack:///./src/register.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/register.js"]();
/******/ 	
/******/ })()
;