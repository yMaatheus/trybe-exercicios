const states = ["AC - Acre", "AL - Alagoas", "AP - Amapá", "AM - Amazonas", "BA - Bahia", "CE - Ceará", "DF - Distrito Federal",
    "ES - Espírito Santo", "GO - Goías", "MA - Maranhão", "MT - Mato Grosso", "MS - Mato Grosso do Sul", "MG - Minas Gerais", "PA - Pará",
    "PB - Paraíba", "PR - Paraná", "PE - Pernambuco", "PI - Piauí", "RJ - Rio de Janeiro", "RN - Rio Grande do Norte", "RS - Rio Grande do Sul",
    "RO - Rondônia", "RR - Roraíma", "SC - Santa Catarina", "SP - São Paulo", "SE - Sergipe", "TO - Tocantins"];
const inputs = {
    name: {
        id: "#input-name",
        maxLength: 40,
        requireErrorMessage: "Informe seu Nome.",
    },
    email: {
        id: "#input-email",
        maxLength: 50,
        requireErrorMessage: "Informe seu Email.",
        invalidErrorMessage: "Email inválido.",
    },
    cpf: {
        id: "#input-cpf",
        maxLength: 11,
        requireErrorMessage: "Informe seu CPF.",
        numberErrorMessage: "Informe apenas numeros.",
    },
    address: {
        id: "#input-address",
        maxLength: 200,
        requireErrorMessage: "Informe seu endereço.",
    },
    city: {
        id: "#input-city",
        maxLength: 28,
        requireErrorMessage: "Informe sua cidade.",
    },
    state: {
        id: "#input-state",
        requireErrorMessage: "Estado não foi selecionado.",
    },
    house: {
        id: "#house-radio-group",
        requireErrorMessage: "Selecione um tipo de imóvel."
    },
    curriculum: {
        id: "#textarea-curriculum",
        maxLength: 1000,
        requireErrorMessage: 'Informe um resumo do seu Curriculo.',
    },
    role: {
        id: "#input-role",
        maxLength: 40,
        requireErrorMessage: 'Informe seu cargo anterior.',
    },
    desc: {
        id: "#input-desc",
        maxLength: 500,
        requireErrorMessage: 'Informe uma descrição do seu cargo anterior.',
    },
    date: {
        id: "#input-date",
        requireErrorMessage: 'Informe uma data.',
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

function appendLine(father, str) {
    const p = document.createElement("p");
    p.innerHTML = str;
    father.appendChild(p);
}

function clearChilds(arg) {
    for (let i = arg.childNodes.length - 1; i >= 0; i--) {
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

window.onload = function () {
    loadStates();

    const clearButton = document.querySelector(".button-clear");
    clearButton.addEventListener('click', clear)

    const inputDate = document.querySelector("#input-date");
    inputDate.DatePickerX.init({
        format: "dd/mm/yyyy",
        weekDayLabels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
        shortMonthLabels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        singleMonthLabels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        titleFormatDay: "dd MM, yyyy",
        todayButtonLabel: "Hoje",
        clearButtonLabel: "Limpar",
    });

    const validate = new JustValidate('#form');

    validate.addField(inputs.name.id, [{
        rule: 'required',
        errorMessage: inputs.name.requireErrorMessage,
    }, {
        rule: 'maxLength',
        value: inputs.name.maxLength,
    }]).addField(inputs.email.id, [{
        rule: 'required',
        errorMessage: inputs.email.requireErrorMessage,
    }, {
        rule: 'email',
        errorMessage: inputs.email.invalidErrorMessage,
    }, {
        rule: 'maxLength',
        value: inputs.email.maxLength,
    }]).addField(inputs.cpf.id, [{
        rule: 'required',
        errorMessage: inputs.cpf.requireErrorMessage,
    }, {
        rule: 'maxLength',
        value: inputs.cpf.maxLength,
    }, {
        rule: 'number',
        errorMessage: inputs.cpf.numberErrorMessage,
    }]).addField(inputs.address.id, [{
        rule: 'required',
        errorMessage: inputs.address.requireErrorMessage,
    }, {
        rule: 'maxLength',
        value: inputs.address.maxLength,
    }]).addField(inputs.city.id, [{
        rule: 'required',
        errorMessage: inputs.city.requireErrorMessage,
    }, {
        rule: 'maxLength',
        value: inputs.city.maxLength,
    }]).addField(inputs.state.id, [{
        rule: 'required',
        errorMessage: inputs.state.requireErrorMessage,
    }]).addRequiredGroup(inputs.house.id, inputs.house.requireErrorMessage).addField(inputs.curriculum.id, [{
        rule: 'required',
        errorMessage: inputs.curriculum.requireErrorMessage,
    }, {
        rule: 'maxLength',
        value: inputs.curriculum.maxLength,
    }]).addField(inputs.role.id, [{
        rule: 'required',
        errorMessage: inputs.role.requireErrorMessage,
    }, {
        rule: 'maxLength',
        value: inputs.role.maxLength,
    }]).addField(inputs.desc.id, [{
        rule: 'required',
        errorMessage: inputs.desc.requireErrorMessage,
    }, {
        rule: 'maxLength',
        value: inputs.desc.maxLength,
    }]).addField(inputs.date.id, [{
        rule: 'required',
        errorMessage: inputs.date.requireErrorMessage,
    }]).onSuccess((event) => {
        // console.log('Validação aprovada e enviada.', event);
        const div = document.querySelector("#exit-form");
        clearChilds(div);

        for (const key in inputs) {
            appendLine(div, key + ": " + document.querySelector("[name=" + key + "]").value);
        }
    });
}