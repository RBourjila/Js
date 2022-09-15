// Exercice Burger
const burger = [
  "pain",
  "chedar",
  "steak",
  "cornichon",
  "ketchup",
  "salade",
  "tomate",
  "ognion",
];
burger[0] = "pain";
burger[1] = "chedar";
burger[2] = "steak";
burger[3] = "cornichon";
burger[4] = "ketchup";
burger[5] = "salade";
burger[6] = "tomate";
burger[7] = "ognion";

//1. Faire un burger végétarien (sans viande)
const burgerVegetarian =
  burger[0] +
  " " +
  burger[1] +
  " " +
  burger[3] +
  " " +
  burger[4] +
  " " +
  burger[5] +
  " " +
  burger[6] +
  " " +
  burger[7];
console.log("Ingrédient du burger végétarien : " + burgerVegetarian);

//Faire un burger végan (pas de produit animal)
const burgerVegan =
  burger[0] +
  " " +
  burger[3] +
  " " +
  burger[4] +
  " " +
  burger[5] +
  " " +
  burger[6] +
  " " +
  burger[7];
console.log("Ingrédient du burger vegan : " + burgerVegan);

// Faire un burger carnivore (pas de légumes)
const burgerCarnivore =
  burger[0] + " " + burger[1] + " " + burger[2] + " " + burger[4];
console.log("Ingrédient du burger Carnivore : " + burgerCarnivore);

//Faire un burger personnalisé
const burgerMe =
  burger[0] +
  " " +
  burger[1] +
  " " +
  burger[2] +
  " " +
  burger[5] +
  " " +
  burger[6] +
  " " +
  burger[7];
console.log("Mon burger : " + burgerMe);

// Faire un systeme de commande de burger à la demande

let text;
let yourBurger = prompt("Choice your burger");
switch (yourBurger) {
  case "le végétarien":
    text = "Vegetarian burger good choice !";
    break;

  case "le vegan":
    text = "Vegan burger you dont like eat animals don't you? :) ";
    break;
  case "le carnivore":
    text = "Carnivor burger i like it !";
    break;

  case "personnalisé":
    text = "Hey don't steal my burger, are you a thief? :( ";
    break;
  default:
    text = "I didnt know this burger ! Let me try !";
}
console.log(text);
