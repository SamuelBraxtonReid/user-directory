const headerButton = document.querySelector("#changeHeader");
const header1 = document.querySelector("#first");
const header2 = document.querySelector("#second");
const input = document.querySelector("#headerInput");
const form = document.querySelector("#userForm");

function changeHeader() {
  const headerText = header2.textContent;
  if (headerText === "User Directory") {
    header2.textContent = "TEST";
  } else {
    header2.textContent = "User Directory";
  }
}

const setHeader = function(ev) {
  ev.preventDefault();
  const name = document.querySelector("#nameInput");
  const age = document.querySelector("#ageInput");
  const color = document.querySelector("#colorInput");
  const users = document.querySelector("#users");
  header1.textContent = name.value;
  const element = document.createElement("ul");
  const nameItem = document.createElement("li");
  nameItem.textContent = `Name: ${name.value}`;
  const ageItem = document.createElement("li");
  ageItem.textContent = `Age: ${age.value}`;
  element.appendChild(nameItem);
  element.appendChild(ageItem);
  element.style.background = color.value;
  element.style.color = "#000000";
  users.appendChild(element);
  name.value = "";
  age.value = "";
}

form.addEventListener("submit", setHeader);

headerButton.addEventListener("click", changeHeader);
