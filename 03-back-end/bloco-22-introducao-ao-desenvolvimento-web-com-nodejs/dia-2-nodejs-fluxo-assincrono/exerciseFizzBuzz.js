const fizzBuzz = (number) => {
    return new Promise((resolve, reject) => {
        let result = '';
        if (number % 3 === 0) {
            result += 'Fizz';
        }
        if (number % 5 === 0) {
            result += 'Buzz';
        }
        if (!result) {
            reject(number);
        }
        resolve(result);
    })
}

fizzBuzz(15).then((result) => console.log(result)).catch((err) => console.log(err));