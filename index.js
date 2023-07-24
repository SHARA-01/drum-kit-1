var length = document.querySelectorAll('.drum').length;

for(var i=0; i<length; i++){
	document.querySelectorAll('.drum')[i].addEventListener("click", function () {
	
	
	var btn = this.innerHTML;

	soud(bnt);
	buttionanimation(bnt);
	btnanime(btn);
	
})
}

var body= document.getElementsByTagName('body');
console.log(body);

//   this is for burrion press
document.addEventListener("keypress",function(event) {

		soud(event.key); 
		btnanime(event.key);

})

// for deteting keyboard key

function soud(key) {
	
	switch(key){

	case "w":
		var audio = new Audio("sounds/tom-1.mp3");
		audio.play();
		body.style.background = "linear-gradient "
		break;

	case "a":
		var tom2 = new Audio("sounds/tom-2.mp3");
		tom2.play();
		break;
case "s":
		var tom3 = new Audio("sounds/tom-3.mp3");
		tom3.play();
		break;
case "d":
		var tom4 = new Audio("sounds/tom-4.mp3");
		tom4.play();
		break;
case "j":
		var snare = new Audio("sounds/snare.mp3");
		snare.play();
		break;
case "k":
		var crash = new Audio("sounds/crash.mp3");
		crash.play();
		break;
case "l":
		var kick = new Audio("sounds/kick-bass.mp3");
		kick.play();
		break;

	default:
		console.log(btn);
	}
}


function btnanime(cutkey) {

	var active = document.querySelector('.'+ cutkey);
	
	active.classList.add("pressed");

	setTimeout(function() {
		active.classList.remove("pressed")
	},100);
}