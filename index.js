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
  header1.textContent = input.value;
  const users = document.querySelector("#users");
  users.innerHTML += "<p>" + input.value + "</p>";
  input.value = "";
}

form.addEventListener("submit", setHeader);

headerButton.addEventListener("click", changeHeader);
