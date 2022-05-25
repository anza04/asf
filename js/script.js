var biglietto = document.getElementById("biglietto");
var video = document.getElementById("video");
var nav = document.getElementById("nav")

biglietto.addEventListener("click", ()=>{
    document.getElementsByTagName("video")[0].play();
    video.style.display="block";
    nav.style.height="8vh";
})

video.addEventListener("click", ()=>{
    document.getElementsByTagName("video")[0].pause();
    video.style.display="none";
    nav.style.height="7vh";
})