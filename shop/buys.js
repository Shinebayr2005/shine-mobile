const xborgs = document.querySelector(".xborg-buy");
const xborgmain = document.querySelector(".xborg-maind");
const xbtns = document.querySelector(".buy-x")

function xborg() {
    if (xborgmain.style.visibility === "hidden") {
        xborgmain.style.visibility = "visible";
    } else {
        xborgmain.style.visibility = "visible";
    }
    console.log("onclick");
}
xborgs.addEventListener("click", xborg);


const laylas = document.querySelector(".layla-buy");
const laylamain = document.querySelector(".layla-maind");


function layla() {
    if (laylamain.style.visibility === "hidden") {
        laylamain.style.visibility = "visible";
    } else {
        laylamain.style.visibility = "visible";
    }
    console.log("onclick");

}

laylas.addEventListener("click", layla);


const francos = document.querySelector(".franco-buy");
const francomain = document.querySelector(".franco-maind");

function franco() {
    if (francomain.style.visibility === "hidden") {
        francomain.style.visibility = "visible";
    } else {
        francomain.style.visibility = "visible";
    }
    console.log("onclick");
}



francos.addEventListener("click", franco);


const karinas = document.querySelector(".karina-buy");
const karinamain = document.querySelector(".karina-maind");

function karina() {
    if (karinamain.style.visibility === "hidden") {
        karinamain.style.visibility = "visible";
    } else {
        karinamain.style.visibility = "visible";
    }
    console.log("onclick");
}



karinas.addEventListener("click", karina);



const angelas = document.querySelector(".angela-buy");
const angelamain = document.querySelector(".angela-maind");

function angela() {
    if (angelamain.style.visibility === "hidden") {
        angelamain.style.visibility = "visible";
    } else {
        angelamain.style.visibility = "visible";
    }
    console.log("onclick");
}



angelas.addEventListener("click", angela);



const thamuzs = document.querySelector(".thamuz-buy");
const thamuzmain = document.querySelector(".thamuz-maind");

function thamuz() {
    if (thamuzmain.style.visibility === "hidden") {
        thamuzmain.style.visibility = "visible";
    } else {
        thamuzmain.style.visibility = "visible";
    }
    console.log("onclick");
}



thamuzs.addEventListener("click", thamuz);



const moskovs = document.querySelector(".moskov-buy");
const moskovmain = document.querySelector(".moskov-maind");

function moskov() {
    if (moskovmain.style.visibility === "hidden") {
        moskovmain.style.visibility = "visible";
    } else {
        moskovmain.style.visibility = "visible";
    }
    console.log("onclick");
}



moskovs.addEventListener("click", moskov);



const khufras = document.querySelector(".khufra-buy");
const khuframain = document.querySelector(".khufra-maind");

function khufra() {
    if (khuframain.style.visibility === "hidden") {
        khuframain.style.visibility = "visible";
    } else {
        khuframain.style.visibility = "visible";
    }
    console.log("onclick");
}



khufras.addEventListener("click", khufra);




const hanzos = document.querySelector(".hanzo-buy");
const hanzomain = document.querySelector(".hanzo-maind");

function hanzo() {
    if (hanzomain.style.visibility === "hidden") {
        hanzomain.style.visibility = "visible";
    } else {
        hanzomain.style.visibility = "visible";
    }
    console.log("onclick");
}



hanzos.addEventListener("click", hanzo);




const vexanas = document.querySelector(".vexana-buy");
const vexanamain = document.querySelector(".vexana-maind");

function vexana() {
    if (vexanamain.style.visibility === "hidden") {
        vexanamain.style.visibility = "visible";
    } else{
        vexanamain.style.visibility = "visible";
    }
    console.log("onclick");
}

vexanas.addEventListener("click", vexana);


function buyx() {
    if (xborgmain.style.visibility = "hidden"){
        laylamain.style.visibility = "hidden";
        francomain.style.visibility = "hidden";
        karinamain.style.visibility = "hidden";
        angelamain.style.visibility = "hidden";
        thamuzmain.style.visibility = "hidden";
        moskovmain.style.visibility = "hidden";
        khuframain.style.visibility = "hidden";
        hanzomain.style.visibility = "hidden";
        vexanamain.style.visibility = "hidden";
    } else {
        xborgmain.style.visibility = "visible";
        laylamain.style.visibility = "visible";
        francomain.style.visibility = "visible";
        karinamain.style.visibility = "visible";
        angelamain.style.visibility = "visible";
        thamuzmain.style.visibility = "visible";
        moskovmain.style.visibility = "visible";
        khuframain.style.visibility = "visible";
        hanzomain.style.visibility = "visible";
        vexanamain.style.visibility = "visible";
    }
    console.log("onclick");
}
xbtns.addEventListener("click", buyx);