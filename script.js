// for menubar

let menu = document.querySelector(".menu-bar");
let navbar=document.querySelector(".navbar")

menu.addEventListener("click", () => {
    menu.classList.toggle("fa-times")
    navbar.classList.toggle('active');
})
window.onscroll = () => {
    menu.classList.remove('fa-times')
    navbar.classList.remove('active');
}

let abc = localStorage.getItem("code")
if (abc == "secret") {
   
}
else {
    window.location.href = "login.html";
}

const isLoggedIn = localStorage.getItem("fname");
         
document.addEventListener("DOMContentLoaded", function () {
   const loginButton = document.getElementById("userLogIn");
   const signUpButton = document.getElementById("userSignUp");

   if (isLoggedIn) {
      // User is logged in, hide login and sign-up buttons, show logout button
      loginButton.style.display = "none";
      signUpButton.style.display = "none";
   } 
});


