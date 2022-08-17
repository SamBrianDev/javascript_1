'use strict';
let calculate = document.getElementById("calculate");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");

equal.addEventListener('click', function() {
    /*To check if both inputs are filled in
    Should one or both have no input, the calculations won't happen*/
    document.getElementById("error").innerHTML = "";
    let input1check;
    let input2check;
    //Input 1 check
    if ( input1.value.length == 0 ) {
        //Input 1 empty
        console.log("Input 1 is empty");
        //Input 1 error
        document.getElementById("error").innerHTML += "Input 1 is leeg<br>";
        input1check =  false;
    }
    else{
        //Input 1 filled in
        input1check = true;
    }
    //Input 2 check
    if ( input2.value.length == 0 ) {
        //Input 2 empty
        console.log("Input 2 is empty");
        //Input 2 error
        document.getElementById("error").innerHTML += "Input 2 is leeg<br>";
        input2check = false;
    }
    else {
        //Check if imput 2 is 0
        if ( input2.value == 0) {
            //Input 2 is 0
            input2check = false;
            document.getElementById("error").innerHTML += "Kan niet verdelen door 0. Probeer opnieuw.<br>";
        }
        else {
            //Input 2 filled in and not 0
            input2check = true;
        }
    }
    //Check both inputs
    if ( input1check == true & input2check == true ) {
        let input1 = document.getElementById("input1").value;
        let input2 = document.getElementById("input2").value;
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
