const form = document.querySelector(".login-form");

form.addEventListener("submit", callback);

function callback(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Все поля должны быть заполнены!!! Так сказал Репета!!!");
    }

    console.log(`{Email: ${email.value}, Password: ${password.value}}`);
    event.currentTarget.reset();
}
