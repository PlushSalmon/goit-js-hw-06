const links = {
    input: document.querySelector("#font-size-control"),
    font: document.querySelector("#text"),
};

links.input.addEventListener('input', callback);

function callback(event) {
    const chenghInput = event.currentTarget.value
    links.font.style.fontSize = `${chenghInput}px`
}
