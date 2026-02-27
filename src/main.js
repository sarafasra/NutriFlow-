import { getRecipes } from "./api/recipeProvider.js";
const app = document.getElementById("app") ;
function  displayRecipes(recipes) {
    app.innerHTML = "";
   for(let i= 0;i<recipes.length;i++){

      let color = "";
     
if(recipes[i].caloriesPerServing < 400){
    color = "green";
}else if (recipes[i].caloriesPerServing >= 400  && recipes[i].caloriesPerServing < 800 ){
    color = "orange";
}else {
  color = "red";
}
       const card = document.createElement("div");
   

        card.innerHTML +=`
           <img src="${recipes[i].image}" />
           <h3>${recipes[i].name}</h3>
           <h2 style = "color :${color}"> ${recipes[i].caloriesPerServing} kcal</h2>
           
            <p>${recipes[i].prepTimeMinutes} min</p>

     `;    
       app.appendChild(card);    
    }

   }

async function init() {
  const recipes = await getRecipes();
  displayRecipes(recipes);
}

init();


