let input =document.getElementById("input");
let icon= document.getElementById("icon");
function change(){
    if(input.type=="password"){
        input.type="text";
        icon.classList.add("fa-eye");
    }else{
        input.type="password";
        icon.classList.remove("fa-eye")
    }
    }