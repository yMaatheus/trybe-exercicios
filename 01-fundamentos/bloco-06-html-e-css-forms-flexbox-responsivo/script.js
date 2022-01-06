const submitButton = document.querySelector(".button-submit");
const clearButton = document.querySelector(".button-clear");
const states = ["AC - Acre", "AL - Alagoas", "AP - Amapá", "AM - Amazonas", "BA - Bahia", "CE - Ceará", "DF - Distrito Federal",
    "ES - Espírito Santo", "GO - Goías", "MA - Maranhão", "MT - Mato Grosso", "MS - Mato Grosso do Sul", "MG - Minas Gerais", "PA - Pará",
    "PB - Paraíba", "PR - Paraná", "PE - Pernambuco", "PI - Piauí", "RJ - Rio de Janeiro", "RN - Rio Grande do Norte", "RS - Rio Grande do Sul",
    "RO - Rondônia", "RR - Roraíma", "SC - Santa Catarina", "SP - São Paulo", "SE - Sergipe", "TO - Tocantins"];

function loadStates() {
    const stateInput = document.querySelector("#input-state");
    for (let state of states) {
        const option = document.createElement("option");
        option.value = state;
        option.text = state;
        stateInput.appendChild(option);
    }
}

function submit(event) {
    event.preventDefault();
    if (!validateName()) {
        alert("Nome inválido.");
    }
    if (!validateEmail()) {
        alert("Email inválido.");
    }
    if (!validateCpf()) {
        alert("Cpf inválido.");
    }
    if (!validateAddress()) {
        alert("Endereço inválido.");
    }
    if (!validateCity()) {
        alert("Cidade inválida.")
    }
    if (!validateHouse()) {
        alert("Tipo de imóvel inválido.")
    }
}

function validateName() {
    const name = document.querySelector("[name=name]");
    const length = name.value.length;
    if (isNull(name) || validateLength(length, 0, 40)) {
        return false;
    }
    return true;
}

function validateEmail() {
    const email = document.querySelector("[name=email]");
    const length = email.value.length;
    const value = email.value;
    if (isNull(email) || validateLength(length, 0, 50) || !value.includes("@")) {
        return false;
    }
    return true;
}

function validateCpf() {
    const cpf = document.querySelector("[name=cpf]");
    const length = cpf.value.length;
    if (isNull(cpf) || validateLength(length, 0, 11)) {
        return false;
    }
    return true;
}

function validateAddress() {
    const address = document.querySelector("[name=address]");
    const length = address.value.length;
    if (isNull(address) || validateLength(length, 0, 200)) {
        return false;
    }
    return true;
}

function validateCity() {
    const city = document.querySelector("[name=city]");
    const length = city.value.length;
    if (isNull(address) || validateLength(length, 0, 28)) {
        return false;
    }
    return true;
}

function validateHouse() {
    const house = document.querySelector("[name=house]");
    if (isNull(house) || house.value === "") {
        return false;
    }
    return true;
}

function isNull(arg) {
    if (arg === null || arg.value === null) {
        return true;
    }
    return false;
}

function validateLength(length, min, max) {
    if (length <= min || length > max) {
        return true;
    }
    return false;
}

function clear() {

}

window.onload = function () {
    loadStates();

    submitButton.addEventListener('click', submit);
    clearButton.addEventListener('click', clear)
}