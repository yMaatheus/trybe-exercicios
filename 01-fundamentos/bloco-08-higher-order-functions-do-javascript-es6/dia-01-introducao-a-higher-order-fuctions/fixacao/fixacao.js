function acordar() {
    return 'Acordando!!!';
}

function cafe() {
    return 'Bora tomar café!!';
}

function dormir() {
    return 'Partiu dormir';
}

function doingThings(func) {
    return func();
}

console.log(doingThings(dormir));