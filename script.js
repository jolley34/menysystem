const menu = document.querySelector(".menu");
const item = document.querySelectorAll(".item");
const dropdown = document.querySelector(".dropdown");
const closemenu = document.querySelector(".closemenu");
const openmenu = document.querySelector(".openmenu");

function toggleMenu() {
  if (menu.classList.contains("showdropdown")) {
    menu.classList.remove("showdropdown");
    closemenu.style.display = "none";
    openmenu.style.display = "block";
  } else {
    menu.classList.add("showdropdown");
    closemenu.style.display = "block";
    openmenu.style.display = "none";
  }
}

dropdown.addEventListener("click", toggleMenu);
