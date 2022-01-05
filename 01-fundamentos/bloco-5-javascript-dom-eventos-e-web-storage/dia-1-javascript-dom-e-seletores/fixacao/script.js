document.getElementById("header-container").style.backgroundColor = "rgb(2, 176, 105)";

document.querySelector(".emergency-tasks").style.backgroundColor = "rgb(255, 159, 132)";

const emergencyTasks = document.querySelectorAll(".emergency-tasks div h3");
emergencyTasks[0].style.backgroundColor = "purple";
emergencyTasks[1].style.backgroundColor = "purple";

document.querySelector(".no-emergency-tasks").style.backgroundColor = "rgb(249, 219, 94)";
const noEmergencyTasks = document.querySelectorAll(".no-emergency-tasks div h3");
noEmergencyTasks[0].style.backgroundColor = "black";
noEmergencyTasks[1].style.backgroundColor = "black";

document.getElementById("footer-container").style.backgroundColor = "rgb(0, 53, 51)";