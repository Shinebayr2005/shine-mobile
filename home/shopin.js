const xborg = document.querySelector(".xborg-buy");

function xborgs() {
  const diamond = parseInt(document.querySelector(".dimond-value").value);
  const s = parseInt(document.querySelector(".xborg-buy").value);

  if (d > s) {
    const newDiamondValue = diamondo - s;
    document.querySelector(".diamond-value").value = newDiamondValue;
    document.querySelector(".diamond-value-display").innerText = newDiamondValue;
  }
    for (let d = 0; d < diamond.length; d++) {
        const diamondo = diamond[d];
        diamondo.addEventListener("chamge", diamondochange);
        
        
    }
    function diamondochange(event){
        const diamondo = event.target
        if(isNaN(diamondo.value) || diamondo.value <= 0){
            diamondo.value = 1
        }
    }
};

xborg.addEventListener("click", xborgs);

    