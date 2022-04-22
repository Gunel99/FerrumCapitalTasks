// Question 2: What are Closures in JavaScript?

function add() {
    let number = 15; // 'number' is a global scope variable for 'increaseNumber()'
    // but it is a local scope variable for 'add()'

    function increaseNumber() {
        console.log(number + 1);
    }

    increaseNumber();
}

add(); 

// We know that, in javascript, if functions haven't been called yet, 
// they don't keep the place in a stack. So, firstly, the 13th line works, add() is called,
// then 3rd line works, codes are read line-by-line. In the 4th line, a 'number' variable which
// its value is 15, is created. After it, the 10th line works, 'increaseNumber()' is called,
// and so, 'increaseNumber()' is read in the 6th line. In 7th line 'number + 1' = 15 + 1 = 16
// and in the 7th line, the process finished and answer 16.