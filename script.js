function randomColor() {
// all hexidecimal colors are 0-9 and A-F, split them to begin randomization  
    var hexValues = '0123456789ABCDEF'.split('');
 // Define color with the hexidecimal starting symbol #  
    var startColor = '#';
 // create for loop to randomize
 // make sure to keep it at 6 letters/numbers as it is the max for hexadecimal colors  
    for (var i = 0; i < 6; i++ ) {
        startColor += hexValues[Math.round(Math.random() * 15)];
    }
    return startColor;
}

$(function() {
  $(".inverseDiv").each(function() {
    var color = randomColor();
    $(this).css("background-color", color);
    $(this).data('color', color);
  });
});

$(document).ready(function() {
  $('#myButton').click(function invertColor() {
    $(".inverseDiv").each(function() {
      var color = $(this).data('color');
      color = color.substring(1); // remove #
      color = parseInt(color, 16); // convert to integer
      color = 0xFFFFFF ^ color; // invert three bytes
      color = color.toString(16); // convert to hex
      color = ("000000" + color).slice(-6); // pad with leading zeros
      color = "#" + color; // prepend #      
      $(this).css("background-color", color);
      $(this).data('color', color);
    });



  });
});
