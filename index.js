function renderList(elements) {
  const list = document.createElement("ul");
  for (let i = 0; i < elements.length; i++) {
    list.appendChild(renderListItem(elements[i]));
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
  elements.push(`Name: ${name.value}`);
  elements.push(`Age: ${age.value}`);
  
  const list = renderList(elements);

  list.appendChild(renderColor(color.value));

  document.querySelector("#users").appendChild(list);
  
  name.value = "";
  age.value = "";

};

document.querySelector("#userForm").addEventListener("submit", handleSubmit);
