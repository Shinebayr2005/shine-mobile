const shop = document.querySelector(".shop-main");

function render(){
    character.forEach( el => {
        shop.innerHTML += `
        <div class="price">
            <img class="ximgs" src="${el.image}" alt="" height="200px" width="100%">
            <p class="names">${el.name}</p>
            <button onclick="${el.onclick}" class="${el.btnbuy}"> <p class="diamonds">${el.diamond}</p></button>
        </div>
        `
    });
    console.log("hello");
}

render();