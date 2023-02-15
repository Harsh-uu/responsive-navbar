const menuButton = document.getElementsByClassName("menu")[0];
const list = document.getElementsByClassName("navList")[0];
let isOpen = false;
menuButton.addEventListener("click", () => {
  if (isOpen) {
    list.setAttribute("class", "navList close");
    isOpen = false;
    menuButton.innerHTML = "open";
  } else {
      list.setAttribute("class", "navList");
      menuButton.innerHTML = "close";
      isOpen = true;
  }
});
