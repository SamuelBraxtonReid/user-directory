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
  header1.textContent = name.value;
  const users = document.querySelector("#users");
  users.innerHTML += `<p>${name.value}, ${age.value}</p>`;
  name.value = "";
  age.value = "";
}

form.addEventListener("submit", setHeader);

headerButton.addEventListener("click", changeHeader);
