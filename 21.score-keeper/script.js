
// Declaring Global Scope Variables
var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var p1Score = 0;
var p2Score = 0;
var limit = document.querySelector('input[name="max"]');

// Add Event Listener to Number Input and Display Max Playing Limit
limit.addEventListener("change", function() {
  document.querySelector("#limit").textContent = limit.value;
 

});

// Listen for Clicks on Player One and Update Span
p1Button.addEventListener("click", function() {
  p1Score++;
  document.querySelector("#p1Display").textContent = p1Score;
  checkLimit(limit.value, p1Score, document.querySelector("#p1Display"));
});

// Listen for Clicks on Player One and Update Span
p2Button.addEventListener("click", function() {
  p2Score++;
  document.querySelector("#p2Display").textContent = p2Score;
  checkLimit(limit.value, p2Score, document.querySelector("#p2Display"));
});

// Check if Max Limit has been reached or not
function checkLimit(limit, score, display) {
  if (score == limit) {
    display.style.color = "green";
    p1Button.disabled = true;
    p2Button.disabled = true;
    limit.disabled = true;
  }
}

// Listen for click on Reset button and reset all states to default
resetButton.addEventListener("click", function() {
  limit.value = "5";
  document.querySelector("#p1Display").textContent = "0";
  p1Score.value = "0";
  document.querySelector("#p2Display").textContent = "0";
  p2Score.value = "0";
  document.querySelector("#limit").textContent = "5";
  document.querySelector("#p1Display").style.color = "black";
  document.querySelector("#p2Display").style.color = "black";
  p1Button.disabled = false;
  p2Button.disabled = false;
  limit.disabled = false;
});
