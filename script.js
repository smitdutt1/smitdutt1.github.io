var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById('gradient');



function setgrade() {
    body.style.background = "linear-gradient(to right," 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
    
    css.textContent = body.style.background + ";";


}
//for color 1
color1.addEventListener("input",setgrade);
//for color 2
color2.addEventListener("input",setgrade);
