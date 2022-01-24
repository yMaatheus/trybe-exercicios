function decode(str) {
    let exit = "";
    for (const char of str) {
        if (char === "1") {
            exit += "a";
            continue;
        } else if (char === "2") {
            exit += "e";
            continue;
        } else if (char === "3") {
            exit += "i";
            continue;
        } else if (char === "4") {
            exit += "o";
            continue;
        } else if (char === "5") {
            exit += "u";
            continue;
        }
        exit += char;
    }
    return exit;
}

module.exports = decode;