document.addEventListener("DOMContentLoaded", () => {
    let recipes = [
        {
            id: 1,
            name: "Spaghetti Carbonara",
            ingredients: "Spaghetti, eggs, pancetta, parmesan, pepper",
            instructions: "Cook spaghetti. Mix eggs with cheese. Fry pancetta. Combine all with pasta."
        },
        {
            id: 2,
            name: "Chicken Curry",
            ingredients: "Chicken, curry powder, coconut milk, onions, garlic, ginger",
            instructions: "Fry onions, garlic, ginger. Add chicken and curry powder. Pour coconut milk and simmer."
        }
    ];

    const recipesContainer = document.getElementById('recipes');
    const recipeForm = document.getElementById('recipe-form');

    function displayRecipes() {
        recipesContainer.innerHTML = '';
        recipes.forEach((recipe, index) => {
            const recipeDiv = document.createElement('div');
            recipeDiv.className = 'recipe';
            recipeDiv.innerHTML = `
                <h3>${recipe.name}</h3>
                <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
                <p><strong>Instructions:</strong> ${recipe.instructions}</p>
                <button class="delete-btn" data-id="${recipe.id}">Delete</button>
            `;
            recipesContainer.appendChild(recipeDiv);
        });
        attachDeleteEventListeners();
    }

    recipeForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('recipe-name').value;
        const ingredients = document.getElementById('recipe-ingredients').value;
        const instructions = document.getElementById('recipe-instructions').value;

        const newRecipe = {
            id: recipes.length + 1, // Assign a new ID
            name: name,
            ingredients: ingredients,
            instructions: instructions
        };

        recipes.push(newRecipe);
        displayRecipes();

        recipeForm.reset();
    });

    // Attach event listeners to the delete buttons
    function attachDeleteEventListeners() {
        const deleteButtons = document.querySelectorAll('.delete-btn');
        deleteButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const recipeId = parseInt(e.target.dataset.id);
                deleteRecipe(recipeId);
            });
        });
    }

    // Function to delete a recipe
    function deleteRecipe(id) {
        recipes = recipes.filter(recipe => recipe.id !== id);
        displayRecipes();
    }

    displayRecipes();
});