let container=document.querySelector(".sec-container");
function login() {
    container.style.transform="scale(1)";
    setTimeout(()=>{   
    container.style.transform="rotateY(0)"
        },50);
 }
function signup() {
    container.style.transform="scale(1)";
    setTimeout(()=>{
        container.style.transform="rotateY(180deg)"
    },50);
 }
function removeCard() {
    container.style.transform="scale(0)"
 }