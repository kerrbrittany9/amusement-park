$(document).ready(function() {
  var height = parseFloat(prompt("How tall are you?"));

  if (height > 5) {
    $('#rides').addClass("pink-background");
  } else if (height === 5) {
    alert("Now don't go crazy!");
    $('#rides').addClass("pink-background");
  } else {
    $('#under-5').addClass("salmon-background");
  }
});
