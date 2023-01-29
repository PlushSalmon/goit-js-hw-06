const list = document.querySelectorAll(".item")
const listLength = list.length
console.log(`Number of categories: ${listLength}`);

// const categ = document.querySelectorAll("h2")
// for (let element of categ) {
//     console.log(`Category: ${element.textContent}`);
// }

for (const element of list) {
    console.log(`Category: ${element.querySelector("h2").textContent}`);
    const final = element.querySelector("ul").children.length
    console.log(`Elements: ${final}`);
}
