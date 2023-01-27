function openPrompt(){
    let value= prompt("Enter Your Name");
    if(value!=null){
        alert("Welcome! "+value);
    }
}
let changedBG= false;

function changeBackground() {
    if(!changedBG){
        document.body.style.backgroundColor = "yellow";
        changedBG= !changedBG;
    }
    else{
        document.body.style.backgroundColor="aqua";
        changedBG= !changedBG;

    }
}
let changeH= false;
function changeHeading(){
    setTimeout(changeHeader,5000);
}
function changeHeader(){
    let element= document.getElementById("heading");
    if(!changeH){
        element.innerHTML="Evolution Of Artificial Human";
        changeH= !changeH;
    }else{
        element.innerHTML="Chatbots: Boon OR Ban";
        changeH= !changeH;
    }
}
function updateDate(){
    let currentDate= new Date();
    document.getElementById("counter").innerHTML=currentDate.toLocaleString();
}
setInterval(updateDate,1000);
 