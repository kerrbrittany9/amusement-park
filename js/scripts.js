$(document).ready(function() {
  var height = parseFloat(prompt("How tall are you?"));

  if (height > 5) {
    $('#rides').addClass("blue-background");
  } else if (height === 5) {
    alert("Now don't go crazy!");
    $('#rides').addClass("blue-background");
  } else {
    $('#under-5').addClass("red-background");
  }
});
