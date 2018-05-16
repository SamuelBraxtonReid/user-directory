function renderList(elements) {
  const list = document.createElement("ul");
  for (let i = 0; i < elements.length; i++) {
    if (elements[i][1] === "text") {
      list.appendChild(renderListItem(elements[i][0]));
    } else if (elements[i][1] === "color") {
      list.appendChild(renderColor(elements[i][0]));
    }
  }
  return list;
}

function renderListItem(text) {
  const item = document.createElement("li");
  item.textContent = text;
  return item;
}

function renderColor(color) {
  const colorDiv = document.createElement("div");
  colorDiv.style.background = color;
  colorDiv.style.width = "6rem";
  colorDiv.style.height = "3rem";
  return colorDiv;
}

const handleSubmit = function(ev) {

  ev.preventDefault();

  const fe = document.querySelector("#userForm").elements;

  const name = fe.nameInput;
  const age = fe.ageInput;
  const color = fe.colorInput;

  const elements = [];

  elements.push([`Name: ${name.value}`,"text"]);
  elements.push([`Age: ${age.value}`,"text"]);
  elements.push([color.value,"color"]);

  const list = renderList(elements);

  document.querySelector("#users").appendChild(list);
  
  name.value = "";
  age.value = "";

};

document.querySelector("#userForm").addEventListener("submit", handleSubmit);
