// API key declaration
const apiKey = 'ca4f5f3814034176897c6a3861ce159d';

// References to HTML elements
const generateButton = document.getElementById('generateButton');
const sortSelect = document.getElementById('sortSelect');
const recipeContainer = document.getElementById('recipeContainer');
// //$$$
// const filterSelect = document.getElementById('filterSelect');
// // const favoriteRecipeContainer = document.getElementById('favoriteRecipeContainer');
// //$$$
// filterSelect.addEventListener('change', applyFilter);

window.addEventListener('load', () => {
  generateRecipes();
  loadFavorites(); // Load favorite recipes on page load
});

let recipes = [];
let favorites = [];

// Generate recipes on "Generate Meal Plan" button click
generateButton.addEventListener('click', generateRecipes);

// Function to generate recipes
function generateRecipes() {
  // Clear existing recipes
  recipeContainer.innerHTML = '';
  recipes = [];

  // Make API call to fetch recipes
  fetch(`https://api.spoonacular.com/recipes/random?number=20&apiKey=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      recipes = data.recipes;
      displayRecipes(recipes);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function displayRecipes(recipes) {
    const uniqueRecipes = Array.from(new Set(recipes.map(recipe => recipe.id))).map(id => {
      return recipes.find(recipe => recipe.id === id);
    });
  
    uniqueRecipes.forEach(recipe => {
      // Create recipe card
      const recipeCard = document.createElement('div');
      recipeCard.classList.add('recipe');
  
      // Create a link element for the recipe details page
      const recipeLink = document.createElement('a');
      recipeLink.href = recipe.sourceUrl; // Use the recipe's source URL
      recipeLink.target = "_blank"; // Open link in a new tab
  
      // Set recipe image
      const recipeImage = document.createElement('img');
      recipeImage.src = recipe.image; // Use the recipe's image URL
      recipeImage.alt = recipe.title; // Set alt text
      recipeLink.appendChild(recipeImage);
  
      // Set recipe title as the link's text content
      const recipeTitle = document.createElement('h3');
      recipeTitle.textContent = recipe.title;
      recipeLink.appendChild(recipeTitle);
  
      // Add recipe link to the container
      recipeCard.appendChild(recipeLink);
  
      // "Add to Favorites" button
      const addToFavoritesButton = document.createElement('button');
      addToFavoritesButton.textContent = 'Add to Favorites';
      addToFavoritesButton.addEventListener('click', () => addToFavorites(recipe.id));
      recipeCard.appendChild(addToFavoritesButton);
  
      recipeContainer.appendChild(recipeCard);
    });
  }
  

function addToFavorites(recipeId) {
  const favoriteRecipe = recipes.find(recipe => recipe.id === recipeId);
  if (favoriteRecipe) {
    favorites.push(favoriteRecipe);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
}

// Function to load favorite recipes
function loadFavorites() {
  // Load favorite recipes from local storage
  favorites = JSON.parse(localStorage.getItem('favorites')) || [];
}

//$$$
// function applyFilter() {
//   const filterValue = filterSelect.value;

//   if (filterValue === 'all') {
//     displayRecipes(recipes);
//   } else if (filterValue === 'favorites') {
//     const favoriteRecipes = recipes.filter(recipe => favorites.some(favorite => favorite.id === recipe.id));
//     displayRecipes(favoriteRecipes);
//   }
// }
