//Basic math game for Code:You

let count = 0;

function counter(count) {
    if(count <= 15) {
        count += 1;
    }
}

function fizzBuzz(counter) {
    if( count % 3 === 0 && count % 5 === 0) {
        console.log("FIZZBUZZ");
    } else if(count % 3 === 0) {
            console.log("Fizz");
        } else if(count % 5 === 0) {
                console.log("Buzz");
            }
            else {
                console.log(counter);
            }
        }