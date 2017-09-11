//Random Number Generator
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Defining Global Variables
var colors = new Array();
var squares = document.querySelectorAll(".square");

//Generate 6 Random RGB colors and apply to each square
for (var i = 0; i < squares.length; i++) {
  colors.push(
    "rgb(" +
      randomNumber(0, 255) +
      ", " +
      randomNumber(0, 255) +
      ", " +
      randomNumber(0, 255) +
      ")"
  );
  squares[i].style.backgroundColor = colors[i];
  console.log(i + " : " + colors[i]);
}

// Randomly select a square and assign it to H1 Span
var selected = squares[randomNumber(0,squares.length-1)];
var selectedColor = selected.style.backgroundColor;
document.getElementById("selected").textContent = selectedColor;

for(var i =0; i<squares.length; i++){
    squares[i].addEventListener("click", correctCheck);
};

 function correctCheck(){
    if(this.style.backgroundColor === selectedColor){
        console.log("Correct");
    } else{
        this.style.backgroundColor = "rgb(25, 25, 25)";
    }
 };