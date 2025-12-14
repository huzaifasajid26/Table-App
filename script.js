let heading = document.querySelector("h1");
let div = document.querySelector("div");

const userInput = Number(prompt("Enter a number 1 to 50"));

if (userInput > 0 && userInput < 51) {
  heading.innerText = "Table of " + userInput;

  for (let i = 1; i < 11; i++) {
    const idxValue = i;

    let content = document.createElement("p");

    content.classList.add("content");

    content.innerText =
      userInput + " x " + idxValue + " = " + idxValue * userInput;

    div.appendChild(content);
  }
} else {
  alert("please write a number between 1 to 50");
}
