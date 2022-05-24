var biglietto = document.getElementById("biglietto");
var video = document.getElementById("video");
var nav = document.getElementById("nav")

biglietto.addEventListener("click", ()=>{
    console.log("ciao");
    video.style.display="block";
    nav.style.height="8vh";
})

video.addEventListener("click", ()=>{
    video.style.display="none";
    nav.style.height="7vh";
})