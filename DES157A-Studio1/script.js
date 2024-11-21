(function main() {
    "use strict";
    console.log("reading js");
    // const madlib = document.querySelector("#madlib");
    const myform = document.querySelector("#myform");
    //const overlay = document.querySelector("#overlay");
    //const madlibOutput = document.querySelector("#madlib-output");
    //const closeOverlay = document.querySelector("#close-overlay");

    myform.addEventListener("submit", function (event) {
        console.log("collecting words");
        event.preventDefault();
        const noun1 = document.querySelector("#noun1").value;
        const place = document.querySelector("#place").value;
        const verb1 = document.querySelector("#verb1").value;
        const num = document.querySelector("#num").value;
        const noun2 = document.querySelector("#noun2").value;
        const adj1 = document.querySelector("#adj1").value;
        const verb2 = document.querySelector("#verb2").value;
        const adj = document.querySelector("#adj").value;
        const noun3 = document.querySelector("#noun3").value;

        if (!noun1) {
            alert("Please provide a noun");
            document.querySelector("#noun1").focus();
        } else if (!place) {
            alert("Please provide a place");
            document.querySelector("#noun1").focus();
        } else if (!verb1) {
            alert("Please provide a verb");
            document.querySelector("#verb1").focus();
        } else if (!num) {
            alert("Please provide a number");
            document.querySelector("#num").focus();
        } else if (!noun2) {
            alert("Please provide a noun");
            document.querySelector("#noun2").focus();
        } else if (!adj1) {
            alert("Please provide an adjective");
            document.querySelector("#adj1").focus();
        } else if (!verb2) {
            alert("Please provide a past tense verb");
            document.querySelector("#verb2").focus();
        } else if (!adj) {
            alert("Please provide an adjective");
            document.querySelector("#adj").focus();
        } else if (!noun3) {
            alert("Please provide a noun");
            document.querySelector("#noun3").focus();
        } else {
            /*const mytext = `There once was a ${noun1} who lived in ${place}. Every night, he would go out to ${verb1} 
            until ${num} in the morning. One night, he heard a strange noise. He turned around and saw a ${noun2}! 
            He was ${adj1}, so he ${verb2}. He ${verb2} until he grew ${adj} and was forced to turn and look at the ${noun2}.
            When he looked closer, he realized that it wasn’t a ${noun2} at all! It was a ${noun3}. 
            He felt silly for being ${adj1}, and walked home, where he crawled into bed and went to sleep.`;*/
            const mytext = `There once was a ${noun1} who lived in ${place}. Every night, he would go out to ${verb1} until ${num} in the morning. <br><br>` +
            `One night, he heard a strange noise. He turned around and saw a ${noun2}! He was ${adj1}, so he ${verb2}. He ${verb2} until he grew ${adj} and was forced to turn and look at the ${noun2}.<br><br>` +
            `When he looked closer, he realized that it wasn’t a ${noun2} at all! It was a ${noun3}. He felt silly for being ${adj1}, and walked home, where he crawled into bed and went to sleep.`;
            document.getElementById('overlay').className = 'showing';
            document.getElementById('content').innerHTML = mytext;
        }
    });

    document.querySelector('.close').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('overlay').className = 'hidden';
    });
    document.addEventListener('keydown', function(event){
        if (event.key == 'Escape') {
            document.getElementById('overlay').className = 'hidden';
        }
    });
})();