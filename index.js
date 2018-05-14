const button = document.querySelector("button.greeting");

function changeText() {
  const paragraph = document.querySelector("p.greeting");
  paragraph.textContent = "I am feared";
}

button.addEventListener("click", changeText);
