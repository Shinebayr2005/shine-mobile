const main = document.querySelector(".buy-main");

function render(){
    characters.forEach( e => {
        main.innerHTML += `
        <div class="${e.hidden}">
                        
                <img class="buy-img" src="${e.linkimg}" alt="">
            <div>
                    <p class="buy-name">${e.names}</p>
                    <p class="${e.sstory}">${e.story}</p>
                <div class="buy-btn-x">
                    <button onclick="${e.buyd}" class="${e.btn}">buy</button>
                    <button  onclick="buyx()"  class="buy-x">  cancel </button>
                </div>
                        
            </div>
        </div>
        `
    });
    console.log("hello");
}

render();