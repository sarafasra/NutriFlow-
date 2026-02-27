import { getRecipes } from "./api/recipeProvider.js";
const app = document.getElementById("app") ;
function  displayRecipes(recipes) {
    app.innerHTML = "";
    recipes.forEach((recipe)=>{
       const card = document.createElement("div");
    card.classList.add("card");

        card.innerHTML =`
           <img src="${recipe.image}" />
           <h3> ${recipe.name}</h3>
            <p>${recipe.prepTimeMinutes} min</p>
     `;    
       app.appendChild(card);    
    }

    )
}
async function init() {
  const recipes = await getRecipes();
  displayRecipes(recipes);
}

init();
