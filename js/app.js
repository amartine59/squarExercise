//Trade a name for a color
function nameForColor() {
  var name = document.getElementById("user-name");
  var result = document.getElementById("result");
  var store = [];
  var usersList = JSON.parse(localStorage.getItem("users"));
  if (usersList) {
    store = usersList;
  }
  if (name.value.trim() != "") {
    //If it exist use the color created previously
    if (userExist(name.value)) {
      var color = getColor(name.value);
      result.style.backgroundColor = color;
      clearTextBox();
    } else {
      var color = randomColor();
      //Setting the values to the object
      var user = {
        username: name.value.toLowerCase(),
        usercolor: color
      };
      console.log(user.username);
      store.push(user);
      //Store the array localy
      localStorage.setItem("users", JSON.stringify(store));
      result.style.backgroundColor = color;
      clearTextBox();
    }
  } else {
    window.alert("You must type a name");
    name.focus();
  }
}
//Generates a random Color
function randomColor() {
  //Base string for the Hex color
  var baseColor = "#";
  //All the possible values
  var colorValues = "0123456789ABCDEF";
  for (index = 0; index < 6; index++) {
    baseColor += colorValues[Math.floor(Math.random() * 16)];
  }
  return baseColor;
}
//Checks if the name already exists[Therefore the color]
function userExist(name) {
  var userArray = localStorage.getItem("users");
  if (!userArray) {
    return false;
  }
  userArray = JSON.parse(userArray);
  if (userArray.length != 0) {
    for (j = 0; j < userArray.length; j++) {
      if (name == userArray[j].username) {
        return true;
      }
    }
    return false;
  }
  return false;
}
//Get the color of an existing user
function getColor(name) {
  var userArray = localStorage.getItem("users");
  userArray = JSON.parse(userArray);
  if (userArray.length != 0) {
    for (k = 0; k < userArray.length; k++) {
      if (name == userArray[k].username) {
        let color = userArray[k].usercolor;
        return color;
      }
    }
  }
}
function clearTextBox() {
  document.getElementById("user-name").value = "";
}
