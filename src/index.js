import "./styles.css";
import { loadHome } from "./home.js";
import { menuHeading, fullMenu } from "./menu.js";
import { aboutHeading, aboutParagraph } from "./about.js";

const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const aboutBtn = document.querySelector(".about");
const logo = document.querySelector(".logo");
const content = document.getElementById("content");
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const closeBtn = document.querySelector(".close-menu");

// Function to load content with smooth transitions
function loadContent(elements = []) {
  // Fade out the current content
  content.classList.add("hidden");

  // Wait for the fade-out to complete, then replace content
  setTimeout(() => {
    content.innerHTML = ""; // Clear the current content
    elements.forEach((item) => content.append(item));
    content.classList.remove("hidden"); // Fade in the new content
  }, 300); // Match the duration of the fade-out
}

function loadHomeContent() {
  const homeElements = loadHome();
  loadContent(homeElements);
}

loadHomeContent();

logo.addEventListener("click", () => {
  loadHomeContent();
});

homeBtn.addEventListener("click", () => {
  loadHomeContent();
});

menuBtn.addEventListener("click", () => {
  loadContent([menuHeading, fullMenu]);
});

aboutBtn.addEventListener("click", () => {
  loadContent([aboutHeading, aboutParagraph]);
});

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("active");
    burger.classList.remove("active");
  });
});

closeBtn.addEventListener("click", () => {
  navLinks.classList.remove("active");
  burger.classList.remove("active");
});
