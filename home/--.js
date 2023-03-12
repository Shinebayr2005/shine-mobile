const xborg = document.querySelector(".xborg-buy");

function xborgs() {
  var diamondo = parseInt(document.querySelector(".dimond-value").value);
  var s = parseInt(document.querySelector(".diamonds").value);

  if (d > s) {
    var newDiamondValue = diamondo - s;
    document.querySelector(".diamond-value").value = newDiamondValue;
    document.querySelector(".diamond-value-display").innerText = newDiamondValue;
  }
}

xborg.addEventListener("click", xborgs);
