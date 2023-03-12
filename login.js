const logine = document.querySelector(".login-btn");


function login(){
    const enterEmail = document.querySelector(".emaile").value;
    const enterPass = document.querySelector(".passe").value;


    const getEmail= localStorage.getItem("userEmail");
    const getPass= localStorage.getItem("userPass");

    if(enterEmail == getEmail){
        if(enterPass == getPass){
            location.href="../index.html"
        }
        else{
            alert("Wrong Email or Password?")
        }
    }
    if(enterEmail==0){
        if(enterPass==0){
            alert("Enter Email or Password?")
        }
        else{
            alert("Wrong Email or Password?")
        }
    }
}
logine.addEventListener("click",login)