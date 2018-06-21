function colorForName() {
  var name = document.getElementById("user-name");
  var result = document.getElementById("result");
  if (name.value.length != 0) {
    var t_name = name.value;
    var store = new Array([[]]);
    var color = rndColor();
    store.push(t_name[color]);

    result.style.backgroundColor = color;
  } else {
    window.alert("You must type a name");
    name.focus();
  }
}

function rndColor() {
  //Hex code for the color selected
  var bColor = "#";
  //All the possible values
  var cValues = "0123456789ABCDEF";
  //Create a random color given a set of values
  for (index = 0; index < 6; index++) {
    bColor += cValues[Math.floor(Math.random() * 16)];
  }
  return bColor;
}
