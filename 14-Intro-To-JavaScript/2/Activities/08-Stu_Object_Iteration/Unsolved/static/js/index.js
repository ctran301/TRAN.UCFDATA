// Array of recipe objects
var recipes = [
  { dish: "Fried fish", spice: "Dorrigo" },
  { dish: "Crab Rangoon", spice: "Akudjura" },
  { dish: "Pickled Okra", spice: "Chili pepper" },
  { dish: "Macaroni salad", spice: "Pepper" },
  { dish: "Apple butter", spice: "Avens" },
  { dish: "Pepperoni Pizza", spice: "Asafoetida" },
  { dish: "Hog fry", spice: "Peppermint" },
  { dish: "Corn chowder", spice: "Akudjura" },
  { dish: "Home fries", spice: "Celery leaf" },
  { dish: "Hot chicken", spice: "Boldo" }];

console.log(recipes);

// @TODO: YOUR CODE HERE
var dishes = []
var spices = []

Object.entries({
  dish:"Hot chicken", spice: "Boldo"})
  .forEach((test => console.log(test));
console.log("EndChris Test")

var dishesMapped = recipies.map(recipe => {return recipe.dish});
var dishesMapped = recipies.map(recipe => {recipe.spice});



function selectedPlayer(name) {
  return name.madeTeam === true
}

var selectedTeam = team_roster.filter(selectedPlayer);

console.log(selectedTeam);