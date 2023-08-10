const mealForm = document.getElementById('mealForm');
const mealList = document.getElementById('mealList');

function displayMeals(meals) {
    mealList.innerHTML = '';
    meals.forEach((meal) => {
        const mealElement = document.createElement('div');
        mealElement.innerHTML = `
      <h3>${meal.name}</h3>
      <p>${meal.description}</p>
      <p>Calories: ${meal.calories}</p>
      <button onclick="editMeal('${meal._id}')">Edit</button>
      <button onclick="deleteMeal('${meal._id}')">Delete</button>
    `;
        mealList.appendChild(mealElement);
    });
}

function getMeals() {
    fetch('http://localhost:5000/meals')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        displayMeals(data);
      })
      .catch((error) => {
        console.error('Error during fetching meals', error);
      });
}
  
  getMeals();



// Function for adding POST request to add meal
mealForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(mealForm);
    const mealData = {
        name: formData.get('name'),
        description: formData.get('description'),
        calories: parseInt(formData.get('calories')),
    };

    fetch('http://localhost:5000/meals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(mealData),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Meal added', data);
            //Update the user interface by fetching the meals again
            getMeals();
            // Reset the form
            mealForm.reset();
        })
        .catch((error) => {
            console.error('Error during fetching meals', error);
        });
});

//  Function to send a DELETE request to delete a meal
function deleteMeal(mealId) {
    fetch(`http://localhost:5000/meals/${mealId}`, {
            method: 'DELETE',
        })
        .then(() => {
            console.log('Meal deleted');
            // Update the user interface by fetching the meals again
            getMeals();
        })
        .catch((error) => {
            console.error('Error during fetching meals', error);
        });
}

// Function to send a GET request to retrieve meal details by its ID
function getMealDetails(mealId) {
    fetch(`http://localhost:5000/meals/${mealId}`)
        .then((response) => response.json())
        .then((meal) => {
            
            // Use the retrieved meal details to populate the form fields
            document.getElementById('nameUpdate').value = meal.name;
            document.getElementById('descriptionUpdate').value = meal.description;
            document.getElementById('caloriesUpdate').value = meal.calories;
        })
        .catch((error) => {
            console.error('Error retrieving meal for update:', error);
        });
}

// Function to send a PUT request to update a meal
function editMeal(mealId) {
    // Retrieve meal details using a GET request by its ID
    getMealDetails(mealId);

    // Display the update form 
    const updateForm = document.createElement('form');
    updateForm.innerHTML = `
        <label for="name">Name:</label>
        <input type="text" id="nameUpdate" required>
        <label for="description">Description:</label>
        <input type="text" id="descriptionUpdate">
        <label for="calories">Calories:</label>
        <input type="number" id="caloriesUpdate" required>
        <button type="submit">Update Meal</button>
      `;

    // Listen for the submission event of the update form
    updateForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const updatedMealData = {
            name: document.getElementById('nameUpdate').value,
            description: document.getElementById('descriptionUpdate').value,
            calories: parseInt(document.getElementById('caloriesUpdate').value),
        };

        // Send the PUT request to update the meal
        fetch(`http://localhost:5000/meals/${mealId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedMealData),
            })
            .then((response) => response.json())
            .then((updatedMeal) => {
                console.log('Meal updated', updatedMeal);
                // Update the user interface by fetching the meals again
                getMeals();
            })
            .catch((error) => {
                console.error('Error updating meal', error);
            });
    });

    // Add the update form to the page
    mealList.appendChild(updateForm);
}