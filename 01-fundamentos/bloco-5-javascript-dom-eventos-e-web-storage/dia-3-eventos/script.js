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

function createButton(buttonName, buttonId) {
    const button = document.createElement("button");
    button.innerText = buttonName;
    if (buttonId != null) {
        button.id = buttonId;
    }
    return button;
}

const buttonHolidays = createButton("Feriados", "btn-holiday");
buttonHolidays.addEventListener("click", changeBackgroundColorHolidays);
buttonsContainer.appendChild(buttonHolidays);

const buttonFridays = createButton("Sexta-feira", "btn-friday"); 
buttonFridays.addEventListener("click", changeColorFridays);
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

function changeColorFridays(event) {
    const fridays = document.querySelectorAll(".friday");
    for (let friday of fridays) {
        if (friday.style.backgroundColor === "yellow") {
            friday.style.backgroundColor = "rgb(238,238,238)";
            friday.style.color = "#777";
            continue;
        }
        friday.style.backgroundColor = "yellow";
        friday.style.color = "red";
    }
}

const days = document.querySelectorAll(".day");

function zoom(event) {
    event.target.style.fontSize = "30px";
    event.target.style.fontWeight = "300px";
}

function unZoom(event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
}

for (let day of days) {
    day.addEventListener("mouseenter", zoom);
    day.addEventListener("mouseleave", unZoom);
    day.addEventListener("click", changeColorDayFOrTaskSelect);
}

const myTasks = document.querySelector(".my-tasks");

function addTask(taskName) {
    const span = document.createElement("span");
    span.innerText = taskName;
    myTasks.appendChild(span);
}

addTask("cozinhar");

function createDivTask(cor) {
    const div = document.createElement("div");
    div.classList.add("task");
    div.style.backgroundColor = cor;
    return div;
}

const divTask = createDivTask("green");
divTask.addEventListener("click", function(event) {
    if (event.target.className === "task") {
        event.target.className = "task selected";
    } else {
        event.target.className = "task";
    }
});
myTasks.appendChild(divTask);

function changeColorDayFOrTaskSelect(event) {
    const selectedTask = document.getElementsByClassName("task selected")[0];
    
    if (selectedTask === undefined || selectedTask === null) {
        return;
    }

    const taskColor = selectedTask.style.backgroundColor;
    const eventTargetColor = event.target.style.color;

    if (eventTargetColor !== taskColor) {
        event.target.style.color = "green";
    } else {
        event.target.style.color = 'rgb(119,119,119)';
    }
}

const input = document.querySelector("#task-input");

const addButton = document.querySelector("#btn-add");
addButton.addEventListener("click", addClickTask);

input.addEventListener("keydown", pressEnterAddTask);

function addClickTask() {
    const taskList = document.querySelector(".task-list");
    
    if (input.value === "") {
        alert("Escreva um texto primeiro para adicionar a lista!");
        return;
    }

    const li = document.createElement("li");

    li.innerText = input.value;
    input.value = "";

    taskList.appendChild(li);
}

function pressEnterAddTask(event) {
    if (event.key === "Enter") {
        addButton.click();
    }
}