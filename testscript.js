myItem = document.getElementById("firsttest");//we're grabbing an element by it's id, "firsttest" in this case, and renaming it myItem in the JS file
theButton = document.getElementById("thebutton");
otherItem = document.getElementById("buttontest");
theButton2 = document.getElementById("thebutton2");
otherItem2 = document.getElementById("buttontest2");
textEntry = document.getElementById("myinput");
theButton3 = document.getElementById("thebutton3");
otherItem3 = document.getElementById("buttontest3");
theImgDiv = document.getElementById("card");
theImage = document.getElementById("muldrotha");
theBigImage = document.getElementById("largeview");
cardShown = false;

myItem.addEventListener("click", onClick);//we're telling myItem to "listen" for an event, "click" in this instance, and naming that event onClick
myItem.addEventListener("mouseout", onMouseOut);
theButton.addEventListener("click", onButtonClick);
theButton2.addEventListener("click", onButtonClick2);
textEntry.addEventListener("change", onChange);
theButton3.addEventListener("click", onButtonClick3);
theImgDiv.addEventListener("click", makeBigImage);
theBigImage.addEventListener("click", hideBigImage);
theBigImage.innerHTML = "";
document.addEventListener("keyup", onKeyUp);


function onKeyUp(event) {
    hideBigImage();
    console.log("key released is " + event.code);
}

function hideBigImage() {
    theBigImage.classList.add("dontshow"); 
    theBigImage.innerHTML = "";
}

function makeBigImage() {
   
    if (theBigImage.innerHTML == "") {
        bigimage = document.createElement("img");
        bigimage.src = "images/Muldrotha.jpg";
        theBigImage.appendChild(bigimage); 
        theBigImage.classList.remove("dontshow"); 
    }
}

function expandImage() {
    if (theImgDiv.style.position == "") {
        theImgDiv.style.position = "absolute";
        theImgDiv.style.top = "300";
        theImgDiv.style.left = "300";
        theImage.style.width = "auto";
        theImage.src = "images/Muldrotha.jpg";
    } 
    else { 
        theImgDiv.style.position = "";
        theImage.style.width = "50";
    }
}

function onClick() {
    if (cardShown == false) {
        theImgDiv.style.display = "block";
        ourText.innerHTML = "I clicked the button";
        cardShown = true;
    } else {
        theImgDiv.style.display = "none";
        ourText.innerHTML = "<em>Stopped showing the card</em>"
        cardShown = false;
    }
    
}

    


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

function onButtonClick3(){
    otherItem3.style.fontSize = "3em";
}