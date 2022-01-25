function encode(str) {
    let exit = "";
    for (const char of str) {
        if (char === "a") {
            exit += "1";
            continue;
        } else if (char === "e") {
            exit += "2";
            continue;
        } else if (char === "i") {
            exit += "3";
            continue;
        } else if (char === "o") {
            exit += "4";
            continue;
        } else if (char === "u") {
            exit += "5";
            continue;
        }
        exit += char;
    }
    return exit;
}

module.exports = encode;