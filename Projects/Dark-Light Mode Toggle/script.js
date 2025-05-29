let body = document.querySelector("body");
let toggleBtn = document.getElementById("toggleBtn");
let currentMode = "light"; //dark

toggleBtn.addEventListener("click", function () {
  if (currentMode === "light") {
    currentMode = "dark";
    body.style.backgroundColor = "black";
    toggleBtn.innerText = "Light Mode";
    toggleBtn.style.backgroundColor = "white";
    toggleBtn.style.color = "black";
  } else {
    currentMode = "light";
    body.style.backgroundColor = "white";
    toggleBtn.innerText = "Dark Mode";
    toggleBtn.style.backgroundColor = "black";
    toggleBtn.style.color = "white";
  }
});
