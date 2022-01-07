const states = ["AC - Acre", "AL - Alagoas", "AP - Amapá", "AM - Amazonas", "BA - Bahia", "CE - Ceará", "DF - Distrito Federal",
    "ES - Espírito Santo", "GO - Goías", "MA - Maranhão", "MT - Mato Grosso", "MS - Mato Grosso do Sul", "MG - Minas Gerais", "PA - Pará",
    "PB - Paraíba", "PR - Paraná", "PE - Pernambuco", "PI - Piauí", "RJ - Rio de Janeiro", "RN - Rio Grande do Norte", "RS - Rio Grande do Sul",
    "RO - Rondônia", "RR - Roraíma", "SC - Santa Catarina", "SP - São Paulo", "SE - Sergipe", "TO - Tocantins"];
const inputs = {
    name: {
        input: document.querySelector("[name=name]"),
        max: 40,
    },
    email: {
        input: document.querySelector("[name=email]"),
        max: 50,
    },
    cpf: {
        input: document.querySelector("[name=cpf]"),
        max: 11,
    },
    address: {
        input: document.querySelector("[name=address]"),
        max: 200,
    },
    city: {
        input: document.querySelector("[name=city]"),
        max: 28,
    },
    house: {
        input: document.querySelector("[name=house]"),
    },
    curriculum: {
        input: document.querySelector("[name=curriculum]"),
        max: 1000,
    },
    role: {
        input: document.querySelector("[name=role]"),
        max: 40,
    },
    description: {
        input: document.querySelector("[name=desc]"),
        max: 500,
    },
    startDate: {
        input: document.querySelector("[name=date]"),
        errorMessage: "",
    },
}

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

    const div = document.querySelector("#exit-form");
    let valid = true;

    clearChilds(div);

    for (const key in inputs) {
        const obj = inputs[key];
        if (key == "email") {
            if (!validateEmail()) {
                appendLine(div, key + " inválido.");
                valid = false;
                break;
            }
            continue;
        }
        if (key == "house") {
            if (!validateHouse()) {
                appendLine(div, key + " inválido.");
                valid = false;
                break;
            }
            continue;
        }
        if (key == "startDate") {
            if (!validateStartDate()) {
                appendLine(div, obj.errorMessage);
                valid = false;
                break;
            }
            continue;
        }
        if (!isValid(obj)) {
            appendLine(div, key + " inválido.");
            valid = false;
            break;
        }
    }

    if (valid) {
        for (const key in inputs) {
            const obj = inputs[key];
            appendLine(div, key + ": " + obj.input.value);
        }
    }
}

function isValid(obj) {
    const input = obj.input;
    const max = obj.max;
    const value = input.value;
    const length = value.length;
    if (isNull(input) || !isValidLength(length, max)) {
        return false;
    }
    return true;
}

function validateEmail() {
    const obj = inputs.email;
    const max = obj.max;
    const input = obj.input;
    const value = input.value;
    const length = input.length;
    if (isNull(input) || !isValidLength(length, max) || !value.includes("@")) {
        return false;
    }
    return true;
}

function validateHouse() {
    const input = inputs.house.input;
    if (isNull(input) || input.value === "") {
        return false;
    }
    return true;
}

function validateStartDate() {
    const date = inputs.startDate;
    const input = date.input;
    const value = input.value;
    const length = value.length;
    if (isNull(input) || !isValidLength(length)) {
        date.errorMessage = "Data de início não foi preenchida.";
        return false;
    }
    const df = value.split("/");
    const day = df[0];
    const month = df[1];
    const year = df[2];

    if (!(df.length === 3 && day.length == 2 && month.length === 2 && year.length === 4)) {
        date.errorMessage = "Formato da data de início é inválida.";
        return false;
    }

    if (!(day > 0 && day <= 31)) {
        date.errorMessage = "O dia da data de inicio é inválido.";
        return false;
    }

    if (!(month > 0 && month <= 12)) {
        date.errorMessage = "O mês da data de inicio é inválido.";
        return false;
    }

    if (year < 0) {
        date.errorMessage = "O ano da data de inicio é inválido.";
        return false;
    }
    return true;
}

function appendLine(father, str) {
    const p = document.createElement("p");
    p.innerHTML = str;
    father.appendChild(p);
}

function isNull(arg) {
    if (arg === null || arg.value === null) {
        return true;
    }
    return false;
}

function isValidLength(length, max) {
    if (length <= 0 || length > max) {
        return false;
    }
    return true;
}

function clearChilds(arg) {
    for (let i = arg.childNodes.length -1; i >= 0; i--) {
        const child = arg.childNodes[i];
        child.remove();
    }
}

function clear() {
    const div = document.querySelector("#exit-form");
    clearChilds(div);
    const form = document.querySelector("#form");
    form.reset();
}

function formatDate(event) {
    const target = event.target;
    const key = event.key;
    const value = target.value;
    const length = value.length;
    if (isNaN(key) || event.key === " ") {
        event.preventDefault();
    }
    if (length === 2 || length === 5) {
        target.value = value.concat("/");
    }
}

window.onload = function () {
    loadStates();

    const submitButton = document.querySelector(".button-submit");
    submitButton.addEventListener('click', submit);

    const clearButton = document.querySelector(".button-clear");
    clearButton.addEventListener('click', clear)

    const inputDate = document.querySelector("#input-date");
    inputDate.addEventListener("keypress", formatDate);
}