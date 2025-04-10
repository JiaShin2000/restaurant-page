import finedineImg from "./fine-dine.jpg";

export function loadHome() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const homeImage = document.createElement("img");
  homeImage.src = finedineImg;

  const homeHeading = document.createElement("h1");
  homeHeading.textContent = "FINE DINING";

  const homeParagraph = document.createElement("p");
  homeParagraph.innerHTML =
    "Welcome to <strong>Lumière</strong>, an exquisite fine dining experience where elegance meets culinary artistry. Our meticulously crafted menu features a selection of the finest dishes, prepared with the freshest, locally sourced ingredients. <br/><br/>From intimate dinners to celebratory occasions, we offer an atmosphere of refined sophistication paired with impeccable service. Indulge in a dining experience that tantalizes the senses and creates unforgettable memories.";

  return [homeImage, homeHeading, homeParagraph];
}
