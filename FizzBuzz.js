//WebDev JS Activity #2
// FizzBuzz Numbers

for (let num = 1; num <= 100; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz");
        // Prints the word "Fizz" for numbers divisible by 3
    } else if (num % 3 === 0) {
        console.log("Fizz");
        // Prints the word "Buzz" for numbers divisible by 5
    } else if (num % 5 === 0) {
        console.log("Buzz");
        // Prints the word "FizzBuzz" for numbers divisible by both 3 and 5
    } else {
        console.log(num);
    }
    // If the conditions are not met, prints only the number
}