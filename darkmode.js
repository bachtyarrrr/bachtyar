let body = document.body;
let mode = document.getElementById("mode");
// let img = document.getElementById("img");

function darkMode(){
    // console.log('darkmode di klik');
    body.classList.toggle("dark");
    if (body.classList.contains("dark")){
        document.getElementById("img").src="images/logo-light.png";
        document.getElementById("img-footer").src="images/logo-light.png";
    } else {
        document.getElementById("img").src="images/logo.png";
        document.getElementById("img-footer").src="images/logo.png";
    }
    mode.classList.toggle("ri-sun-fill");
}