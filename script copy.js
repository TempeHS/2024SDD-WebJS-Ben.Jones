// alert("Hello, world"); //Output to windows alert box
//console.log("Hello, world"); //Output to the console (Open dev tools and look at the console)

// START

// SET number
// Input Number

let myNumber =  prompt("Is is a prime number");

// SET result to "It is a prime Number"
let result = "It is a prime number";


// LOOP COUNT  from 2 to number
for (let i = 2; i < myNumber; i++) {
    
    // SET testResult = number / COUNT
    let testResult = myNumber / i;

    // IF round my number == testresult
    if (Math.round(testResult) == testResult) {

        // SET result to "It is NOT a prime Number"
        result = "It is NOT a prime number";
    }

    //INCREMENT COUNT
}

// PRINT result
document.getElementById("ScriptThisDIV").innerHTML = result; //Output to the DOM (Document Object Module) with the id="ScriptThisDIV"

// END
