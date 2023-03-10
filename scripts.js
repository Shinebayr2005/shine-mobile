const lanes = document.querySelector(".main-lane");
const mapbtn = document.querySelector(".map-btn");
const xbtn = document.querySelector(".x-btn");

function myFunction() {
    if (lanes.style.visibility === "hidden") {
        lanes.style.visibility = "visible";
    } else {
        lanes.style.visibility = "visible";
    }
    console.log("onclick");
}


function xbutton() {
    lanes.style.visibility = "hidden"
     
    console.log("onclick");
}


xbtn.addEventListener("click", xbutton);
mapbtn.addEventListener("click", myFunction);




   
    


 
    
