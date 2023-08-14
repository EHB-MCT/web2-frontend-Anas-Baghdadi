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

/***/ "./src/meals.js":
/*!**********************!*\
  !*** ./src/meals.js ***!
  \**********************/
/***/ (() => {

eval("const mealForm = document.getElementById('mealForm');\r\nconst mealList = document.getElementById('mealList');\r\n\r\nfunction displayMeals(meals) {\r\n    mealList.innerHTML = '';\r\n    meals.forEach((meal) => {\r\n        const mealElement = document.createElement('div');\r\n        mealElement.innerHTML = `\r\n      <h3>${meal.name}</h3>\r\n      <p>${meal.description}</p>\r\n      <p>Calories: ${meal.calories}</p>\r\n      <button onclick=\"editMeal('${meal._id}')\">Edit</button>\r\n      <button onclick=\"deleteMeal('${meal._id}')\">Delete</button>\r\n    `;\r\n        mealList.appendChild(mealElement);\r\n    });\r\n}\r\n\r\nfunction getMeals() {\r\n    // fetch('http://localhost:5000/meals')\r\n    fetch('https://mealmagic.onrender.com/meals')\r\n      .then((response) => {\r\n        if (!response.ok) {\r\n          throw new Error('Network response was not ok');\r\n        }\r\n        return response.json();\r\n      })\r\n      .then((data) => {\r\n        displayMeals(data);\r\n      })\r\n      .catch((error) => {\r\n        console.error('Error during fetching meals', error);\r\n      });\r\n}\r\n  \r\n  getMeals();\r\n\r\n\r\n\r\n// Function for adding POST request to add meal\r\nmealForm.addEventListener('submit', (event) => {\r\n    event.preventDefault();\r\n\r\n    const formData = new FormData(mealForm);\r\n    const mealData = {\r\n        name: formData.get('name'),\r\n        description: formData.get('description'),\r\n        calories: parseInt(formData.get('calories')),\r\n    };\r\n\r\n    fetch('https://mealmagic.onrender.com/meals', {\r\n            method: 'POST',\r\n            headers: {\r\n                'Content-Type': 'application/json',\r\n            },\r\n            body: JSON.stringify(mealData),\r\n        })\r\n        .then((response) => response.json())\r\n        .then((data) => {\r\n            console.log('Meal added', data);\r\n            //Update the user interface by fetching the meals again\r\n            getMeals();\r\n            // Reset the form\r\n            mealForm.reset();\r\n        })\r\n        .catch((error) => {\r\n            console.error('Error during fetching meals', error);\r\n        });\r\n});\r\n\r\n//  Function to send a DELETE request to delete a meal\r\nfunction deleteMeal(mealId) {\r\n    fetch(`https://mealmagic.onrender.com/meals${mealId}`, {\r\n            method: 'DELETE',\r\n        })\r\n        .then(() => {\r\n            console.log('Meal deleted');\r\n            // Update the user interface by fetching the meals again\r\n            getMeals();\r\n        })\r\n        .catch((error) => {\r\n            console.error('Error during fetching meals', error);\r\n        });\r\n}\r\n\r\n// Function to send a GET request to retrieve meal details by its ID\r\nfunction getMealDetails(mealId) {\r\n    // fetch(`http://localhost:5000/meals/${mealId}`)\r\n    fetch(`https://mealmagic.onrender.com/meals${mealId}`)\r\n        .then((response) => response.json())\r\n        .then((meal) => {\r\n            \r\n            // Use the retrieved meal details to populate the form fields\r\n            document.getElementById('nameUpdate').value = meal.name;\r\n            document.getElementById('descriptionUpdate').value = meal.description;\r\n            document.getElementById('caloriesUpdate').value = meal.calories;\r\n        })\r\n        .catch((error) => {\r\n            console.error('Error retrieving meal for update:', error);\r\n        });\r\n}\r\n\r\n// Function to send a PUT request to update a meal\r\nfunction editMeal(mealId) {\r\n    // Retrieve meal details using a GET request by its ID\r\n    getMealDetails(mealId);\r\n\r\n    // Display the update form \r\n    const updateForm = document.createElement('form');\r\n    updateForm.innerHTML = `\r\n        <label for=\"name\">Name:</label>\r\n        <input type=\"text\" id=\"nameUpdate\" required>\r\n        <label for=\"description\">Description:</label>\r\n        <input type=\"text\" id=\"descriptionUpdate\">\r\n        <label for=\"calories\">Calories:</label>\r\n        <input type=\"number\" id=\"caloriesUpdate\" required>\r\n        <button type=\"submit\">Update Meal</button>\r\n      `;\r\n\r\n    // Listen for the submission event of the update form\r\n    updateForm.addEventListener('submit', (event) => {\r\n        event.preventDefault();\r\n\r\n        const updatedMealData = {\r\n            name: document.getElementById('nameUpdate').value,\r\n            description: document.getElementById('descriptionUpdate').value,\r\n            calories: parseInt(document.getElementById('caloriesUpdate').value),\r\n        };\r\n\r\n        // Send the PUT request to update the meal\r\n        fetch(`https://mealmagic.onrender.com/meals${mealId}`, {\r\n                method: 'PUT',\r\n                headers: {\r\n                    'Content-Type': 'application/json',\r\n                },\r\n                body: JSON.stringify(updatedMealData),\r\n            })\r\n            .then((response) => response.json())\r\n            .then((updatedMeal) => {\r\n                console.log('Meal updated', updatedMeal);\r\n                // Update the user interface by fetching the meals again\r\n                getMeals();\r\n            })\r\n            .catch((error) => {\r\n                console.error('Error updating meal', error);\r\n            });\r\n    });\r\n\r\n    // Add the update form to the page\r\n    mealList.appendChild(updateForm);\r\n}\n\n//# sourceURL=webpack:///./src/meals.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/meals.js"]();
/******/ 	
/******/ })()
;