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

/***/ "./src/plan.js":
/*!*********************!*\
  !*** ./src/plan.js ***!
  \*********************/
/***/ (() => {

eval("const apiKey = 'ca4f5f3814034176897c6a3861ce159d';\r\nconst timeFrame = 'day';\r\n\r\ndocument.getElementById('generateButton').addEventListener('click', () => {\r\n  const targetCalories = document.getElementById('caloriesInput').value;\r\n\r\n  fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=${apiKey}&timeFrame=${timeFrame}&targetCalories=${targetCalories}`)\r\n    .then(response => response.json())\r\n    .then(data => {\r\n      const meals = data.meals;\r\n\r\n      const mealContainer = document.getElementById('mealContainer');\r\n      mealContainer.innerHTML = ''; // Clear previous meal plan\r\n\r\n      meals.forEach(meal => {\r\n        const mealDiv = document.createElement('div');\r\n\r\n        const titleElement = document.createElement('h2');\r\n        titleElement.textContent = meal.title;\r\n        mealDiv.appendChild(titleElement);\r\n\r\n\r\n        if (meal.nutrients && meal.nutrients.calories !== undefined) {\r\n        \r\n          // add calories of meal\r\n          const caloriesElement = document.createElement('p');\r\n          caloriesElement.textContent = `Calories: ${meal.nutrients.calories}`;\r\n          mealDiv.appendChild(caloriesElement);\r\n        }\r\n\r\n        const recipeCard = document.createElement('div');\r\n        recipeCard.classList.add('recipe-card');\r\n\r\n\r\n        // add image of meal if its available\r\n        if (meal.imageType) {\r\n          const imageElement = document.createElement('img');\r\n          imageElement.src = `https://spoonacular.com/recipeImages/${meal.id}-312x231.${meal.imageType}`;\r\n          mealDiv.appendChild(imageElement);\r\n        }\r\n\r\n        // add prep time \r\n        const readyInMinutesElement = document.createElement('p');\r\n        readyInMinutesElement.textContent = `Ready in ${meal.readyInMinutes} minutes`;\r\n        mealDiv.appendChild(readyInMinutesElement);\r\n\r\n        // add portions of the meal\r\n        const servingsElement = document.createElement('p');\r\n        servingsElement.textContent = `Servings: ${meal.servings}`;\r\n        mealDiv.appendChild(servingsElement);\r\n\r\n        // add link to the recipe\r\n        const recipeLinkElement = document.createElement('a');\r\n        recipeLinkElement.href = meal.sourceUrl;\r\n        recipeLinkElement.textContent = 'See the full recipe';\r\n        recipeLinkElement.target = '_blank'; // add link in new tab\r\n        recipeLinkElement.classList.add('recipe-link');\r\n        mealDiv.appendChild(recipeLinkElement);\r\n\r\n        mealContainer.appendChild(mealDiv);\r\n      });\r\n    })\r\n    .catch(error => {\r\n      console.log(error);\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack:///./src/plan.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/plan.js"]();
/******/ 	
/******/ })()
;