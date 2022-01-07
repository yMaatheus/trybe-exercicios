/*
To be done:

- Caso todos os dados sejam válidos, monte uma <div> com o consolidado dos dados que foram inseridos no formulário.
- Caso haja algum dado inválido, mostre em uma <div> uma mensagem de erro. Se o erro for na Data de Início , a mensagem deve ser contextualizada.
- Crie um botão Limpar que limpa todos os campos do formulário e a <div> com seu currículo também.

*/
const submitButton = document.querySelector(".button-submit");
const clearButton = document.querySelector(".button-clear");
const states = ["AC - Acre", "AL - Alagoas", "AP - Amapá", "AM - Amazonas", "BA - Bahia", "CE - Ceará", "DF - Distrito Federal",
    "ES - Espírito Santo", "GO - Goías", "MA - Maranhão", "MT - Mato Grosso", "MS - Mato Grosso do Sul", "MG - Minas Gerais", "PA - Pará",
    "PB - Paraíba", "PR - Paraná", "PE - Pernambuco", "PI - Piauí", "RJ - Rio de Janeiro", "RN - Rio Grande do Norte", "RS - Rio Grande do Sul",
    "RO - Rondônia", "RR - Roraíma", "SC - Santa Catarina", "SP - São Paulo", "SE - Sergipe", "TO - Tocantins"];
const inputs = {
    name: {
        input: document.querySelector("[name=name]"),
        isValid: false,
        max: 40,
    },
    email: {
        input: document.querySelector("[name=email]"),
        isValid: false,
        max: 50,
    },
    cpf: {
        input: document.querySelector("[name=cpf]"),
        isValid: false,
        max: 11,
    },
    address: {
        input: document.querySelector("[name=address]"),
        isValid: false,
        max: 200,
    },
    city: {
        input: document.querySelector("[name=city]"),
        isValid: false,
        max: 28,
    },
    house: {
        input: document.querySelector("[name=house]"),
        isValid: false,
    },
    curriculum: {
        input: document.querySelector("[name=curriculum]"),
        isValid: false,
        max: 1000,
    },
    role: {
        input: document.querySelector("[name=role]"),
        isValid: false,
        max: 40,
    },
    description: {
        input: document.querySelector("[name=description]"),
        isValid: false,
        max: 500,
    },
    startDate: {
        input: document.querySelector("[name=startDate]"),
        isValid: false,
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

    // const name = validate("name", 0, 40);
    // const email = validateEmail();
    // const cpf = validate("cpf", 0, 11);
    // const address = validate("address", 0, 200);
    // const city = validate("city", 0, 28);
    // const house = validateHouse();
    // const curriculum = validate("curriculum", 0, 1000);
    // const role = validate("role", 0, 40);
    // const description = validate("desc", 0, 500);
    // const startDate = validateStartDate();

    const div = document.querySelector("#exit-form");
    let valid = true;

    for (const key in inputs) {
        const obj = inputs[key];
        if (key == "email") {
            continue;
        }
        if (key == "house") {
            continue;
        }
        if (key == "startDate") {
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
            appendLine(div, obj.value);
        }
    }
}

function isValid(obj) {
    const input = obj.input;
    const value = input.value;
    const length = value.length;
    if (isNull(input) || !isValidLength(length, input.max)) {
        return false;
    }
    return true;
}

function validateEmail() {
    const email = document.querySelector("[name=email]");
    const value = email.value;
    const length = value.length;
    if (isNull(email) || validateLength(length, 50) || !value.includes("@")) {
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

function validateStartDate() {
    const date = document.querySelector("[name=date]");
    const value = date.value;
    const length = value.length;
    if (isNull(date) || validateLength(length)) {
        return "Data de início não foi preenchida.";
    }
    const df = value.split("/");
    const day = df[0];
    const month = df[1];
    const year = df[2];

    if (!(df.length === 3 && day.length == 2 && month.length === 2 && year.length === 4)) {
        return "Formato da data de início é inválida.";
    }

    if (!(day > 0 && day <= 31)) {
        return "O dia da data de inicio é inválido.";
    }

    if (!(month > 0 && month <= 12)) {
        return "O mês da data de inicio é inválido.";
    }

    if (year < 0) {
        return "O ano da data de inicio é inválido.";
    }
    return date.value;
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

function clear() {

}

window.onload = function () {
    loadStates();

    submitButton.addEventListener('click', submit);
    clearButton.addEventListener('click', clear)
}