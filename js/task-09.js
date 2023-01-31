const button = document.querySelector("button.change-color");
const spanColor = document.querySelector("span.color");

button.addEventListener('click', callback); 

function callback() {
    const result = getRandomHexColor()
      document.body.style.backgroundColor = result
      spanColor.textContent = result
  }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
