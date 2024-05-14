// function to make text bigger
function bigger(){
    document.getElementById("user-text").style.fontSize = "24pt";
}

function toggleStyles(){
    // variable to hold the selected radio button
    let checked = "";
    
    // variable to hold user text element
    let userText = document.getElementById("user-text");

    // check which radio button has been selected
    if(document.getElementById("fancy-shmancy").checked){
        checked = "fancy-shmancy"
    }

    else if(document.getElementById("boring-betty").checked){
        checked = "boring-betty";
    }

    // style the text according to the selected radio button
    if(checked == "fancy-shmancy"){
        userText.style.fontWeight = "bold";
        userText.style.color = "blue";
        userText.style.textDecoration = "underline";
    }

    else if(checked == "boring-betty"){
        userText.style.fontWeight = "normal";
        userText.style.color = "black";
        userText.style.textDecoration = "none";
    }
}

function moo(){
    // variable to hold user text element
    let userTextElement = document.getElementById("user-text");
    let userText = userTextElement.value;

    // convert value to uppercase
    userText = userText.toUpperCase();

    // split the user text by period and then append the word '- Moo' to all parts
    let userTextArray = userText.split(".");
    
    // join sentenced by suffix '-Moo'
    userText = userTextArray.join("-Moo.");

    // set the updated user text
    userTextElement.value = userText;
}
