function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const recipeId = getQueryParam("name");
const recipe = recipes[recipeId];

if (recipe) {
    document.getElementById("recipe-name").textContent = recipe.name;

    document.getElementById("cooking-time").textContent = recipe.cookingTime;

    const ingredientsList = document.getElementById("ingredients-list");
    recipe.ingredients.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ingredientsList.appendChild(li);
    });

    const procedureList = document.getElementById("procedure-list");
    recipe.procedure.forEach(step => {
        const li = document.createElement("li");
        li.textContent = step;
        procedureList.appendChild(li);
    });
} else {
    document.body.innerHTML = "<h1>Recipe not found.</h1>";
}