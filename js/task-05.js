const links = {
    input: document.querySelector("input#name-input"),
    span: document.querySelector("span#name-output"),
}

links.input.addEventListener('input', callback)

function callback(event) {
    links.span.textContent = event.currentTarget.value
    if (event.currentTarget.value === "") {
        links.span.textContent = "Anonymous";
    }
}
