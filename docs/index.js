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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("function logout() {\r\n    fetch('https://mealmagic.onrender.com/logout', {\r\n      method: 'POST',\r\n    })\r\n    .then(response => {\r\n      if (response.ok) {\r\n        console.log('Logout successful');\r\n        // Store the logout indicator in localStorage\r\n        localStorage.setItem('isLoggedOut', 'true');\r\n        // Redirect the user to the login page\r\n        window.location.href = \"login.html\";\r\n      } else {\r\n        console.log('Logout failed');\r\n      }\r\n    })\r\n    .catch(error => {\r\n      console.error('Error during logout:', error);\r\n    });\r\n}\r\n\r\n// Get the logout button by its ID\r\nconst logoutButton = document.getElementById('logoutButton');\r\n\r\n\r\nlogoutButton.addEventListener('click', logout);\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;