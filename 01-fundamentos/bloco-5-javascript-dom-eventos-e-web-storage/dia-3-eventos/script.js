function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

for (let day of dezDaysList) {
    createDay(day);
}

function createDay(day) {
    const ulDays = document.querySelector('#days');
    const li = document.createElement("li");
    li.innerText = day;
    li.classList.add("day");
    if (day === 24 || day === 25 || day === 31) {
        li.classList.add("holiday");
    }
    if (day === 4 || day === 11 || day === 18 || day === 25) {
        li.classList.add("friday");
    }
    ulDays.appendChild(li);
}

const buttonsContainer = document.querySelector(".buttons-container");

const buttonHolidays = createButton("Feriados", "btn-holiday");
buttonHolidays.addEventListener("click", changeBackgroundColorHolidays);
buttonsContainer.appendChild(buttonHolidays);

const buttonFridays = createButton("Sexta-feira", "btn-friday"); 
buttonsContainer.appendChild(buttonFridays);

function changeBackgroundColorHolidays(event) {
    const holidays = document.querySelectorAll(".holiday");
    for (let holiday of holidays) {
        if (holiday.style.backgroundColor === "green") {
            holiday.style.backgroundColor = "rgb(238,238,238)";
            holiday.style.color = "#777";
            continue;
        }
        holiday.style.backgroundColor = "green";
        holiday.style.color = "white";
    }
}

function createButton(buttonName, buttonId) {
    const button = document.createElement("button");
    button.innerText = buttonName;
    if (buttonId != null) {
        button.id = buttonId;
    }
    return button;
}