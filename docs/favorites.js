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

/***/ "./src/favorites.js":
/*!**************************!*\
  !*** ./src/favorites.js ***!
  \**************************/
/***/ (() => {

eval("// Reference to the HTML element for displaying favorite recipes\r\nconst favoriteRecipeContainer = document.getElementById('favoriteRecipeContainer');\r\n\r\n// Load favorite recipes on page load\r\nwindow.addEventListener('load', () => {\r\n  loadFavorites();\r\n});\r\n\r\n// Function to display favorite recipes\r\nfunction loadFavorites() {\r\n  favoriteRecipeContainer.innerHTML = ''; // Clear the current content\r\n\r\n    // Load favorite recipes from local storage\r\n  favorites = JSON.parse(localStorage.getItem('favorites')) || [];\r\n\r\n  // Display each favorite recipe\r\n  favorites.forEach(recipe => {\r\n    displayFavoriteRecipe(recipe);\r\n  });\r\n}\r\n\r\n// Function to display a favorite recipe\r\nfunction displayFavoriteRecipe(recipe) {\r\n    // Create the favorite recipe card\r\n    const favoriteRecipeCard = document.createElement('div');\r\n    favoriteRecipeCard.classList.add('recipe'); \r\n  \r\n    // Create a link element for the recipe details page\r\n    const recipeLink = document.createElement('a');\r\n    recipeLink.href = recipe.sourceUrl; \r\n    recipeLink.target = \"_blank\"; \r\n  \r\n    // Set recipe image\r\n    const recipeImage = document.createElement('img');\r\n    recipeImage.src = recipe.image; \r\n    recipeImage.alt = recipe.title; \r\n    recipeLink.appendChild(recipeImage);\r\n  \r\n    // Set recipe title as the link's text content\r\n    const recipeTitle = document.createElement('h3');\r\n    recipeTitle.textContent = recipe.title;\r\n    recipeLink.appendChild(recipeTitle);\r\n  \r\n    // Add recipe link to the card\r\n    favoriteRecipeCard.appendChild(recipeLink);\r\n  \r\n    // \"Remove from Favorites\" button\r\n    const removeFromFavoritesButton = document.createElement('button');\r\n    removeFromFavoritesButton.textContent = 'Remove';\r\n    removeFromFavoritesButton.addEventListener('click', () => removeFromFavorites(recipe.id));\r\n    favoriteRecipeCard.appendChild(removeFromFavoritesButton);\r\n  \r\n    // Add the favorite recipe card to the container\r\n    favoriteRecipeContainer.appendChild(favoriteRecipeCard);\r\n  }\r\n  \r\n  \r\n  \r\n// Function to remove a recipe from favorites\r\n  function removeFromFavorites(recipeId) {\r\n    favorites = favorites.filter(recipe => recipe.id !== recipeId);\r\n    localStorage.setItem('favorites', JSON.stringify(favorites));\r\n    loadFavorites(); \r\n  }\r\n  \r\n\r\n  function loadFavorites() {\r\n    favoriteRecipeContainer.innerHTML = ''; // Clear \r\n  \r\n    // Load favorite recipes from local storage\r\n    favorites = JSON.parse(localStorage.getItem('favorites')) || [];\r\n  \r\n    // Display each favorite recipe\r\n    favorites.forEach(recipe => {\r\n      displayFavoriteRecipe(recipe);\r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/favorites.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/favorites.js"]();
/******/ 	
/******/ })()
;