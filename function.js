var numSquares = 6;
var colors = colorArray(numSquares) ;
var correctColor = colors[randColor(numSquares)] ;
var squares = document.querySelectorAll(".square");
var displayColor = document.querySelector("span");
var winDisplay = document.querySelector("#win-or-lose")
var easyBtn = document.querySelector(".easyBtn");
var hardBtn = document.querySelector(".hardBtn");
var reset = document.getElementById("reset");
var h1 = document.querySelector("h1");

reset.addEventListener("click" , function(){
	 colors = colorArray(6) ;
	 //pick new corect color
	  correctColor = colors[randColor(6)] ;
	 //assign everysquare with new colors
	  for(var i=0 ; i < squares.length ; i++){
 	      squares[i].style.backgroundColor = colors[i];
 		}
	 //change displayCOlor to new picked color
	 displayColor.textContent = correctColor;
	 reset.textContent = "New Colors";
	 h1.style.backgroundColor = "steelblue";
	 winDisplay.textContent = "";
});

easyBtn.addEventListener("click" , function(){
	numSquares = 3;
	colors = colorArray(numSquares) ;
	h1.style.backgroundColor = "steelblue";
	 easyBtn.classList.add("selected");
	 hardBtn.classList.remove("selected");
	 correctColor = colors[randColor(numSquares)] ;
	 displayColor.textContent = correctColor ;
	  winDisplay.textContent = "";
	 for(var i =0 ; i < squares.length ; i++ ){
	 	if(colors[i]) {
	 		squares[i].style.backgroundColor = colors[i];
	 	}
	 	else {
	 		squares[i].style.display = "none" ;
	 	}
	 }

});

hardBtn.addEventListener("click" , function(){
	numSquares = 6;
	colors = colorArray(numSquares) ;
	h1.style.backgroundColor = "steelblue";
	 easyBtn.classList.remove("selected");
	 hardBtn.classList.add("selected");
	  winDisplay.textContent = "";
	 correctColor = colors[randColor(numSquares)] ;
	 displayColor.textContent = correctColor ;
	 for(var i =0 ; i < squares.length ; i++ ){
	 	if(colors[i]) {
	 		squares[i].style.backgroundColor = colors[i];
	 		squares[i].style.display = "block" ;
	 	}
	 }

});

displayColor.textContent = correctColor ;

 for(var i=0 ; i < squares.length ; i++){
 	squares[i].style.backgroundColor = colors[i];
 }

 				
 for(var i=0 ; i < squares.length ; i++){
 	squares[i].addEventListener("click" , function(){
 		var pickedColor = this.style.backgroundColor ;
 		if(pickedColor === correctColor ){
		 	for(var i=0 ; i < squares.length ; i++) {
		 		squares[i].style.backgroundColor = correctColor;
		 	}
		 	reset.textContent = "Play Again?";
		 	winDisplay.textContent = "Correct , You win!";
		 	h1.style.backgroundColor = correctColor;
 		}
 		else {
 			this.style.backgroundColor = "#232323" ;
 			winDisplay.textContent = "Try Again";
 		}
 	});
 }

function colorArray(num) {
	var arr = [];
	for(var i=0 ; i < num ; i++){
		arr[i] = colorPicker();
	}
	return arr;
}

function colorPicker() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")" ;
}

function randColor(num) {
	return Math.floor(Math.random() * num)
}

