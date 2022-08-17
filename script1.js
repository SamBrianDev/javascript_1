'use strict';
let calculate = document.getElementById("calculate");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");

equal.addEventListener('click', function() {
    /*To check if both inputs are filled in
    Should one or both have no input, the calculations won't happen*/
    document.getElementById("error").innerHTML = "";
    let input1Check;
    let input2Check;
    let input1NumberCheck;
    let input2NumberCheck;
    //Input 1 check
    if ( input1.value.length == 0 ) {
        //Input 1 empty
        console.log("Input 1 is empty");
        //Input 1 error
        document.getElementById("error").innerHTML += "Input 1 is leeg<br>";
        input1Check =  false;
    }
    else{
        //Input 1 filled in
        input1Check = true;
    }
    //Input 2 check
    if ( input2.value.length == 0 ) {
        //Input 2 empty
        console.log("Input 2 is empty");
        //Input 2 error
        document.getElementById("error").innerHTML += "Input 2 is leeg<br>";
        input2Check = false;
    }
    else {
        //Check if imput 2 is 0
        if ( input2.value == 0) {
            //Input 2 is 0
            input2Check = false;
            document.getElementById("error").innerHTML += "Kan niet verdelen door 0. Probeer opnieuw.<br>";
        }
        else {
            //Input 2 filled in and not 0
            input2Check = true;
        }
    }
    //Check both inputs
    if ( input1Check == true & input2Check == true ) {
        let input1 = document.getElementById("input1").value;
        //Checks if input 1 is a number
        if ( isNaN(input1) ) {
            //If input 1 is a letter
            input1NumberCheck = false;
            window.console.log("Input 1 is not a number");
            document.getElementById("error").innerHTML += "Input 1 kan alleen cijfers bevatten";
        }
        else {
            //If input 1 is a number
            input1NumberCheck = true;
            window.console.log("Input 1 is a number");
        }
        let input2 = document.getElementById("input2").value;
        //Checks if input 2 is a number
        if ( isNaN(input2) ) {
            //If input 2 is a letter
            input2NumberCheck = false;
            indow.console.log("Input 2 is not a number");
            document.getElementById("error").innerHTML += "Input 2 kan alleen cijfers bevatten";
        }
        else {
            //If input 2 is a number
            input2NumberCheck = true;
            window.console.log("Input 2 is a number");
        }

        if (input1NumberCheck == true && input2NumberCheck == true ) {
            //Change value inputs into floats
            input1 = parseFloat(input1);
            input2 = parseFloat(input2);

            //Values for following functions
            telOp(input1, input2);
            telAf(input1, input2);
            vermedigvuldigen(input1, input2);
            verdeel (input1, input2)
            kwadraat (input1, input2);
        }
        else {
            window.console.log("One or both inputs contain a letter, please make the correct adjustments before continuing")
        }
    }
    else {
        console.log("Error, one or both input fields are empty or you are trying to divide through zero. Please make sure both are filled in before trying again.");
    }
})
//Function for calculations
function telOp(input1, input2) {
    let answer = input1 + input2;
    //Put down answer
    optellen.innerHTML = answer;
    //Place answer in log
    console.log(input1 + " + " + input2 + " = " + answer);
}
function telAf(input1, input2) {
    let answer = input1 - input2;
    aftrekken.innerHTML = answer;
    console.log(input1 + " - " + input2 + " = " + answer);
}
function vermedigvuldigen(input1, input2) {
    let answer = input1 * input2;
    vermedigvuldig.innerHTML = answer;
    console.log(input1 + " * " + input2 + " = " + answer);
}
function verdeel(input1, input2) {
    let answer = input1 / input2;
    delen.innerHTML = answer;
    console.log(input1 + " / " + input2 + " = " + answer);
}
function kwadraat(input1, input2) {
    let answer = input1 ** input2;
    kwadraten.innerHTML = answer;
    console.log(input1 + " ^ " + input2 + " = " + answer);
}
