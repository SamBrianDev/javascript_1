'use strict';
let on = document.getElementById("on");
let off = document.getElementById("off");
let shut = document.getElementById("shut");
let middleOn = document.getElementById("middleOn");
let timeDifference = document.getElementById("timeDifference");
let statusButton = document.getElementById("statusButton");
let middleImage = document.getElementById("middleImage");
let record = document.getElementById("record");
let recordButton = document.getElementById("recordButton");
let timeOne;
let timeTwo;
let timeIntermediate;
let timeSeconds;
let fastestTime;
let timeOneCheck = false;
let middleOnCheck = false;
let fastestCheck = false;
let recordButtonCheck = true;
let recordContentCheck = false;
let middleCount = 0;

const middleImageArray = [];
/*First in array [0] must be "unset" for this specific array to work
To add more images to the array, count further from the last image*/
middleImageArray[0] = "unset";
middleImageArray[1] = "https://static.wikia.nocookie.net/fallout/images/f/f1/Goodsprings.jpg";
middleImageArray[2] = "https://static.wikia.nocookie.net/fallout/images/9/99/Primm.png";
/*Console logged for length array
-1, because arrays start at 0*/
window.console.log(middleImageArray.length - 1);
//Console logged for current count, this should be 0
window.console.log("Count check: " + middleCount + ". Should this not be 0, something is not right");
on.addEventListener('click', ()=> {
    document.body.style.backgroundImage = "url('https://staticdelivery.nexusmods.com/images/130/3370112-1345082978.jpeg')";
    //Changing text color to black
    document.body.style.color = "#000000";
    //First click
    if ( timeOneCheck == false ) {
        //First time, set the first timestamp
        timeOne = Date.now();
        //Log first timestamp
        window.console.log(timeOne);
        //Check that the first click has been made
        timeOneCheck = true;
    }
    //Any click onwards
    else {
        //Calculate difference in time between the last two clicks
        timeTwo = Date.now() - timeOne;
        //Calculate time difference into seconds
        timeSeconds = timeTwo / 1000;
        //Log difference in time in milliseconds
        window.console.log(timeTwo);
        //Log difference in time in seconds
        window.console.log(timeSeconds + " seconds");
        //Set third time to be used for the first
        timeIntermediate = Date.now();
        timeOne = timeIntermediate;
        document.getElementById("timeDifference").innerHTML = timeSeconds + " secondes verlopen";
        /*Checking fastest recorded time
        Takes the first calculated time as starting record*/
        if ( fastestCheck == false ) {
            //Sets first time difference as first, fastest record
            fastestTime = timeTwo;
            //Displays first, fastest record
            document.getElementById("record").innerHTML = "Snelste tijd: " + fastestTime + " millisecondes";
            //Sets check to true
            fastestCheck = true;
            recordButtonCheck = true;
        }
        else {
            //Checks every other time difference
            if ( timeTwo < fastestTime ) {
                //If faster, it becomes the new record
                fastestTime = timeTwo;
                //Displays fastest time in milliseconds
                document.getElementById("record").innerHTML = "Snelste tijd: " + fastestTime + " millisecondes";
            }
        }
    }
    document.getElementById("statusButton").innerHTML = "On";
})
off.addEventListener('click', ()=> {
    //Places URL of image in the background-image
    document.body.style.backgroundImage = "url('https://staticdelivery.nexusmods.com/images/130/960216-1288923381.jpg')";
    //Changing text color to white
    document.body.style.color = "#ffffff";
    //First click
    if ( timeOneCheck == false ) {
        //First time, set the first timestamp
        timeOne = Date.now();
        //Log first timestamp
        window.console.log(timeOne);
        //Check that the first click has been made
        timeOneCheck = true;
    }
    //Any click onwards
    else {
        //Calculate difference in time between the last two clicks
        timeTwo = Date.now() - timeOne;
        //Calculate time difference into seconds
        timeSeconds = timeTwo / 1000;
        //Log difference in time in milliseconds
        window.console.log(timeTwo);
        //Log difference in time in seconds
        window.console.log(timeSeconds + " seconds");
        //Set third time to be used for the first
        timeIntermediate = Date.now();
        timeOne = timeIntermediate;
        document.getElementById("timeDifference").innerHTML = timeSeconds + " secondes verlopen";
        /*Checking fastest recorded time
        Takes the first calculated time as starting record*/
        if ( fastestCheck == false ) {
            //Sets first time difference as first, fastest record
            fastestTime = timeTwo;
            //Displays first, fastest record
            document.getElementById("record").innerHTML = "Snelste tijd: " + fastestTime + " millisecondes";
            //Sets check to true
            fastestCheck = true;
            recordButtonCheck = true;
        }
        else {
            //Checks every other time difference
            if ( timeTwo < fastestTime ) {
                //If faster, it becomes the new record
                fastestTime = timeTwo;
                //Displays fastest time in milliseconds
                document.getElementById("record").innerHTML = "Snelste tijd: " + fastestTime + " millisecondes";
            }
        }
    }
    document.getElementById("statusButton").innerHTML = "Off";
})
shut.addEventListener('click', ()=> {
    //Sets backgroundImage/background-image to "unset"
    document.body.style.backgroundImage = "unset";
    //Changing text color to black
    document.body.style.color = "#000000";
    //First click
    if ( timeOneCheck == false ) {
        //First time, set the first timestamp
        timeOne = Date.now();
        //Log first timestamp
        window.console.log(timeOne);
        //Check that the first click has been made
        timeOneCheck = true;
    }
    //Any click onwards
    else {
        //Calculate difference in time between the last two clicks
        timeTwo = Date.now() - timeOne;
        //Calculate time difference into seconds
        timeSeconds = timeTwo / 1000;
        //Log difference in time in milliseconds
        window.console.log(timeTwo);
        //Log difference in time in seconds
        window.console.log(timeSeconds + " seconds");
        //Set third time to be used for the first
        timeIntermediate = Date.now();
        //Sets new, first time to current time
        timeOne = timeIntermediate;
        //Displays the amount of time passed between two clicks in seconds
        document.getElementById("timeDifference").innerHTML = timeSeconds + " secondes verlopen";
        /*Checking fastest recorded time
        Takes the first calculated time as starting record*/
        if ( fastestCheck == false ) {
            //Sets first time difference as first, fastest record
            fastestTime = timeTwo;
            //Displays first, fastest record
            document.getElementById("record").innerHTML = "Snelste tijd: " + fastestTime + " millisecondes";
            //Sets check to true
            fastestCheck = true;
            recordButtonCheck = true;
        }
        else {
            //Checks every other time difference
            if ( timeTwo < fastestTime ) {
                //If faster, it becomes the new record
                fastestTime = timeTwo;
                //Displays fastest time in milliseconds
                document.getElementById("record").innerHTML = "Snelste tijd: " + fastestTime + " millisecondes";
            }
        }
    }
    document.getElementById("statusButton").innerHTML = "Shut";
})
//Toggles another image roughly at the center
middleOn.addEventListener('click', ()=> {
    /*Counts through array for which image to show
    -1, because arrays start at 0*/
    if ( middleCount < middleImageArray.length - 1 ) {
        //Counts up by 1
        middleCount++;
        //Puts in URL of image
        document.getElementById("middleImage").style.backgroundImage = "url('" + middleImageArray[middleCount] + "')";
        //Logs current count
        window.console.log("Current count: " + middleCount);
    }
    /*Once the last image is reached, the count goes to 0 and no image is shown
    -1, because arrays start at 0*/
    else if ( middleCount == middleImageArray.length - 1 ) {
        //Resets count to 0
        middleCount = 0;
        //Sets backgroundImage/background-image to "unset"
        document.getElementById("middleImage").style.backgroundImage = middleImageArray[middleCount];
        //Logs current count
        window.console.log("Current count: " + middleCount);
        //Logs count reset
        window.console.log("Count has been reset to 0");
    }
})
/*Toggles fastest record display
This button is useless while no record is recorded*/
recordButton.addEventListener('click', ()=> {
    if ( recordContentCheck == false ) {
        window.console.log("There is no record to display. This button is currently useless.");
    }
    else {
        if ( recordButtonCheck == false ) {
            //Turns on record display
            document.getElementById("record").style.display = "block";
            //Sets check to true
            recordButtonCheck = true;
        }
        else {
            //Turns off record display
            document.getElementById("record").style.display = "none";
            //Sets check to false
            recordButtonCheck = false;
        }
    }
})