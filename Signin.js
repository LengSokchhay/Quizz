window.onload = function(){
    document.getElementById("Sign Up").onclick = function(){ 
    var email = document.getElementsByName("email").value;
    var pass = document.getElementsByName("psw").value;
    var Rpass = document.getElementsByName("psw-repeat").value;
    console.log(email);
    console.log(pass);
    console.log(Rpass);
    localStorage.setItem("EMAL",email);
    localStorage.setItem("PASS",pass);
    localStorage.setItem("RPass",Rpass);

    document.getElementById("rs").onclick = location.href = 'Homepage.html';
    
    return;
}
}