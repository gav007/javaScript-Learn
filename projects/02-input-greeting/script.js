// 02 - Input Greeting
// Goal: read from a text box and validate the input.

const nameInput = document.querySelector("#nameInput");
const greetBtn = document.querySelector("#greetBtn");
const output = document.querySelector("#output");

greetBtn.addEventListener("click", function () {
  // .value gets what the user typed into the input.
  // .trim() removes empty spaces at the start and end.
  const name = nameInput.value.trim();

  // TODO 1: if name is empty, show "Please enter a name."
  if (name == "") {
    output.textContent = "Enter your name please";
  } else {
    output.textContent = `Hello there ${name}`;
  }

  // TODO 2: otherwise, show a greeting using a template string.
  // Example: `Story ${name}, JavaScript is moving now.`
});

// TODO 3 stretch: add a keydown event so Enter also creates the greeting.
