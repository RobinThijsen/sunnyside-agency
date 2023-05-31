let burger = document.getElementById("burger");
let nav = document.getElementById("nav");

burger.addEventListener("click", function(){ 
	if (nav.classList.contains("display")) {
		nav.classList.remove("display");
	} else {
		nav.classList.add("display");
	}
});