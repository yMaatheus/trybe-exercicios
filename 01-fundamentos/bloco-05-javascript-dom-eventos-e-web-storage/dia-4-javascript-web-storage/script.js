const body = document.body;
const inputBackgroundColor = document.querySelector("#background-color");
const inputTextColor = document.querySelector("#text-color");
const inputTextSize = document.querySelector("#font-size");
const inputLineHeight = document.querySelector("#line-height");
const inputFontFamily = document.querySelector("#font-family");


inputBackgroundColor.addEventListener("keypress", changeBackgroundColor);
inputTextColor.addEventListener("keypress", changeTextColor);
inputTextSize.addEventListener("keypress", changeTextSize);
inputLineHeight.addEventListener("keypress", changeLineHeight);
inputFontFamily.addEventListener("keypress", changeFontFamily);

function changeBackgroundColor(event) {
    if (!isEnterKey(event)) {
        return;
    }
    body.style.backgroundColor = inputBackgroundColor.value;
    resetInput(inputBackgroundColor);
}

function changeTextColor(event) {
    if (!isEnterKey(event)) {
        return;
    }
    body.style.color = inputTextColor.value;
    resetInput(inputTextColor);
}

function changeTextSize(event) {
    if (!isEnterKey(event)) {
        return;
    }
    body.style.fontSize = inputTextSize.value;
    resetInput(inputTextSize);
}

function changeLineHeight(event) {
    if (!isEnterKey(event)) {
        return;
    }
    body.style.lineHeight = inputLineHeight.value;
    resetInput(inputLineHeight);
}

function changeFontFamily(event) {
    if (!isEnterKey(event)) {
        return;
    }
    body.style.fontFamily = inputFontFamily.value;
    resetInput(inputFontFamily);
}

function isEnterKey(event) {
    if (event.which == 13) {
        return true;
    }
    return false;
}

function resetInput(input) {
    input.value = "";
}