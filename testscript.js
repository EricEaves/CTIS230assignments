myItem = document.getElementById("firsttest");//we're grabbing an element by it's id, "firsttest" in this case, and renaming it myItem in the JS file
theButton = document.getElementById("thebutton");
otherItem = document.getElementById("buttontest");
theButton2 = document.getElementById("thebutton2");
otherItem2 = document.getElementById("buttontest2");
textEntry = document.getElementById("myinput");


myItem.addEventListener("click", onClick);//we're telling myItem to "listen" for an event, "click" in this instance, and naming that event onClick
myItem.addEventListener("mouseout", onMouseOut);
theButton.addEventListener("click", onButtonClick);
theButton2.addEventListener("click", onButtonClick2);
textEntry.addEventListener("change", onChange);

function onClick() {
    myItem.style.color = "green"; //we're now telling onClick that when it is clicked to change myItem's color to green
    myItem.style.fontSize = "1.5em";
    myItem.style.fontWeight = "bolder";
}

function onMouseOut() {
    myItem.style.color = "";
    myItem.style.fontSize = "";
    myItem.style.fontWeight = "";
}

function onButtonClick(){
    otherItem.style.color = "red";
}

function onButtonClick2(){
    otherItem2.style.fontSize = "1.3em";
}

function onChange(){
    newText = myinput.value;
    otherItem.innerHTML = newText;
}