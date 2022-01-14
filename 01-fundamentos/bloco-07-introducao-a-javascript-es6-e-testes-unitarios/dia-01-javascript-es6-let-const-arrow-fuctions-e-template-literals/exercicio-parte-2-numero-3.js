//Exercicio 3:
const button = document.querySelector("#button");
button.addEventListener("click", () => {
    const value = parseInt(button.innerHTML) + 1;
    button.innerHTML = value;
});