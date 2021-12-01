const n = 5;

let base = "";

for (let i = 5; i >= 1; i -=1) {
    let space = "";
    for (let indexSpace = 1; indexSpace <= (i - 1); indexSpace += 1) {
        space += " ";
    }
    base += "*";
    console.log(space + base);
}