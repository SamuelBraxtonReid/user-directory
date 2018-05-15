const headerButton = document.querySelector("#changeHeader");
const header1 = document.querySelector("#first");
const header2 = document.querySelector("#second");
const input = document.querySelector("#headerInput");
const submitButton = document.querySelector("#submit");

console.log(input);

function changeText(ev) {
  const paragraph = document.querySelector("p.greeting");
  if (ev.target.textContent === "Fear Me") {
    ev.target.textContent = "Love Me";
    paragraph.textContent = "I am feared";
  } else if (ev.target.textContent === "Love Me") {
    ev.target.textContent = "Fear Me";
    paragraph.textContent = "I am loved";
  } 
}

function changeHeader() {
  const headerText = header2.textContent;
  if (headerText === "User Directory") {
    header2.textContent = "TEST";
  } else {
    header2.textContent = "User Directory";
  }
}

function setHeader(ev) {
  header1.textContent = input.value;
  input.value = "";
}

submitButton.addEventListener("click", setHeader);

headerButton.addEventListener("click", changeHeader);
