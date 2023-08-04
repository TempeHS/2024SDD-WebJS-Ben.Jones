// alert("Hello, world"); //Output to windows alert box
//console.log("Hello, world"); //Output to the console (Open dev tools and look at the console)

// START

// SET myArray [51,1,27,3,4,5,60,7,86,9]

let myArray [51,1,27,3,4,5,60,7,86,9];

// SET tempArray[0,0,0,0,0,0,0,0,0,0]

let tempArray[];

// LOOP COUNT from 0 to length of myArray
    // myArray[length of myArray - (COUNT + 1)] = tempArray[COUNT]
    // INCREMENT COUNT
    // END LOOP

for (i=0; i < myArray.length(); i++) {
    myArray[myArray.length() - (i + 1)] = tempArray[i]
}


// set myArray to tempArray
// PRINT myArray

// END

document.getElementById("ScriptThisDIV").innerHTML = myArray; //Output to the DOM (Document Object Module) with the id="ScriptThisDIV"


