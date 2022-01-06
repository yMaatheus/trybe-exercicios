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
    if (!validateCurriculum()) {
        alert("Curriculo inválido.");
    }
    if (!validateRole()) {
        alert("Cargo inválido.");
    }
    if (!validateDescription()) {
        alert("Descrição inválida.");
    }
    validateStartDate();
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
    const value = email.value;
    const length = value.length;
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
    if (isNull(city) || validateLength(length, 0, 28)) {
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

function validateCurriculum() {
    const curriculum = document.querySelector("[name=curriculum]");
    const length = curriculum.value.length;
    if (isNull(curriculum) || validateLength(length, 0, 1000)) {
        return false;
    }
    return true;
}

function validateRole() {
    const role = document.querySelector("[name=role]");
    const length = role.value.length;
    if (isNull(role) || validateLength(length, 0, 40)) {
        return false;
    }
    return true;
}

function validateDescription() {
    const desc = document.querySelector("[name=desc]");
    const length = desc.value.length;
    if (isNull(desc) || validateLength(length, 0, 40)) {
        return false;
    }
    return true;
}

function validateStartDate() {
    const date = document.querySelector("[name=date]");
    const value = date.value;
    const length = value.length;
    if (isNull(date) || validateLength(length, 0)) {
        alert("Data de início inválida");
        return;
    }
    const df = value.split("/");
    const day = df[0];
    const month = df[1];
    const year = df[2];

    if (!(df.length === 3 && day.length == 2 && month.length === 2 && year.length === 4)) {
        alert("Formato da data de início é inválida.");
        return;
    }

    if (!(day > 0 && day <= 31)) {
        alert("O dia da data de inicio é inválido.")
        return;
    }

    if (!(month > 0 && month <= 12)) {
        alert("O mês da data de inicio é inválido.");
        return;
    }

    if (year < 0) {
        alert("O ano da data de inicio é inválido.")
        return;
    }
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