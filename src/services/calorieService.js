let badgeColor = "";
if(recipes.caloriesPerServing < 400){
    badgeColor = "green";
}else if (recipes.caloriesPerServing <= 800){
    badgeColor = "orange";
}else {
  badgeColor = "red";
}