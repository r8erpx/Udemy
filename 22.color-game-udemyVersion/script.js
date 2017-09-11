var colors = ["rgb(66, 134, 244)", "rgb(96, 209, 175)", "rgb(190, 38, 214)", "rgb(178, 95, 12)", "rgb(239, 108, 79)", "rgb(239, 215, 79)"];

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;

for(var i = 0; i<squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor){
            console.log("Correct");
        } else {
            console.log("Wrong");
        }
    });
}