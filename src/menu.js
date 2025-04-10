export const menuHeading = document.createElement("h1");
menuHeading.textContent = "MENU";

const appetizersHeading = document.createElement("h2");
appetizersHeading.textContent = "Appetizers / Starters";

export const listAppetizers = document.createElement("ul");
const appetizers = [
  "Foie Gras Torchon",
  "Tuna Tartare",
  "Lobster Bisque",
  "Caviar",
  "Duck Breast Carpaccio",
  "Beef Tartare",
  "Chilled Oysters",
];

appetizers.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  listAppetizers.appendChild(li);
});

const mainHeading = document.createElement("h2");
mainHeading.textContent = "Main Courses / Entrées";

export const listMain = document.createElement("ul");
const mains = [
  "Wagyu Beef Tenderloin",
  "Pan-Seared Sea Bass",
  "Filet Mignon",
  "Lobster Newberg",
  "Rack of Lamb",
  "Roast Peking Duck",
  "Baked Salmon with Champagne Beurre Blanc",
];

mains.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  listMain.appendChild(li);
});

const dessertsHeading = document.createElement("h2");
dessertsHeading.textContent = "Desserts";

export const listDesserts = document.createElement("ul");
const desserts = [
  "Crème Brûlée",
  "Chocolate Soufflé",
  "Tiramisu",
  "Raspberry Sorbet",
  "Pistachio Macaron with Raspberry Coulis",
  "Grand Marnier Crêpes Suzette",
];

desserts.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  listDesserts.appendChild(li);
});

export const fullMenu = document.createElement("div");
fullMenu.appendChild(appetizersHeading);
fullMenu.appendChild(listAppetizers);
fullMenu.appendChild(mainHeading);
fullMenu.appendChild(listMain);
fullMenu.appendChild(dessertsHeading);
fullMenu.appendChild(listDesserts);
