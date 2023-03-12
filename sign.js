const signin = document.querySelector(".sign-btn");


function sign(){
    const email = document.querySelector(".email").value;
    const pass = document.querySelector(".pass").value;
    const name = document.querySelector(".name").value;


    localStorage.setItem("userEmail",email);
    localStorage.setItem("userPass",pass);
    localStorage.setItem("userName",name);

    if(email==0){
        if(pass==0){
            alert("Enter Email or Password?");
        }
        else{
            alert("Enter Email or Password?");
        }
        
    }
    else{
        
        location.href="./login.html"
    }
}
signin.addEventListener("click",sign)