$(document).ready(function() {
  var height = parseFloat(prompt("How tall are you?"));

  if (height > 5) {
    $('#rides').show();
  } else if (height === 5) {
    alert("Now don't go crazy!");
    $('#rides').show();
  } else {
    $('#under-5').show();
  }
});
