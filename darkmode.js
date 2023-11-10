let body = document.body;
let mode = document.getElementById("mode");

function darkMode(){
    // console.log('darkmode di klik');
    body.classList.toggle("dark");
    mode.classList.toggle("ri-sun-fill");
}