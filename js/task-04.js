let counterValue = 0;
const minus = document.querySelector('button[data-action="decrement"]');
const plus = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");
console.log(minus);
console.log(plus);

minus.addEventListener('click', () => {
    counterValue -= 1;
    value.textContent = counterValue;
});

plus.addEventListener("click", () => {
    counterValue += 1;
    value.textContent = counterValue;
})

