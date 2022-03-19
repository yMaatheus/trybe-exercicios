const fetch = require('node-fetch');

function randomNumber() {
    return Math.random() * 100;
}

function toUpper(str) {
    return str.toUpperCase();
}

function firstChar(str) {
    return str.charAt(0);
}

function concatStrings(str1, str2) {
    return str1.concat(str2);
}

async function fetchDogPicture() {
    const url = 'https://dog.ceo/api/breeds/image/random';

    const response = await fetch(url);
    const data = await response.json();
    return data;
}

module.exports = { randomNumber, toUpper, firstChar, concatStrings, fetchDogPicture };