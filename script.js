const button = document.querySelector(".button input");
const nav = document.querySelector("nav ol");

button.addEventListener("click",function(){
    nav.classList.toggle("mobile");
});