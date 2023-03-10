const mobile = document.querySelector(".mobile");

function render(){
    character.forEach( el => {
        mobile.innerHTML += `
        <div class="price">
            <img class="ximgs" src="${el.image}" alt="" height="200px" width="100%">
             <p class="roles"><img class="roleimg" src="${el.img}" >${el.role}</p>
            <p class="names">${el.name}</p>
            
        </div>
        `
    });
    console.log("hello");
}

render();