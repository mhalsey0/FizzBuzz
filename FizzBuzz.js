//Basic math game for Code:You

let count = 0;

function counter(count) {
    if(count <= 15) {
        count += 1;
    }
}

function fizzBuzz(number) {
    if( number % 3 === 0 && number % 5 === 0) {
        console.log("FIZZBUZZ");
    } else if(number % 3 === 0) {
            console.log("Fizz");
        } else if(number % 5 === 0) {
                console.log("Buzz");
            }
            else {
                console.log(number);
            }
        }

fizzBuzz(counter)
