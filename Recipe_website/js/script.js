function viewRecipe(recipeName) {
  window.location.href = `view_recipe.html?name=${recipeName}`;
}
function searchRecipes() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const container = document.getElementById("recipes_container");
  const popularSection = document.querySelector(".Popular-section");

  container.innerHTML = "";
  if (input.trim() === "") {
    container.style.display = "none";
    popularSection.style.display = "flex";
    return;
  }

  container.style.display = "flex";
  popularSection.style.display = "none";

  let found = false;

  for (const key in recipes) {
    const recipe = recipes[key];
    if (recipe.name.toLowerCase().includes(input)) {
      found = true;

      const card = document.createElement("div");
      card.className = "recipe-card";
      card.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.name}" style="width:100%; height:120px; border-radius:8px;">
        <h3>${recipe.name}</h3>
        <button onclick="viewRecipe('${key}')">View Recipe</button>
      `;
      container.appendChild(card);
    }
  }

  if (!found) {
    container.innerHTML = `<p style="color: white;">No matching recipes found.</p>`;
  }
}






 


  
