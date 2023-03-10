
const links = {
  input: document.querySelector("input"),
  containerBox: document.querySelector("div#boxes"),
  create: document.querySelector("button[data-create]"),
  destroy: document.querySelector("button[data-destroy]"),
};
links.create.addEventListener("click", createBoxes);
links.destroy.addEventListener("click", destroyBoxes);



function createBoxes(amount) {
  amount = Number(links.input.value);
  const amountBoxes = [];
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    let boxSize = 30 + (i * 10);
    box.style.height = `${boxSize}px`;
    box.style.width = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();

    amountBoxes.push(box);
  }

  links.containerBox.append(...amountBoxes);
}

function destroyBoxes() {
  links.containerBox.textContent = '';
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}