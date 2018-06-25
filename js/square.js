//For the error change the border to #cc0000
//For the result change the border to rgb(127,255,0)
function verifyShape() {
  var Tside = document.getElementById("top-side").value;
  var Bside = document.getElementById("bottom-side").value;
  var Lside = document.getElementById("left-side").value;
  var Rside = document.getElementById("right-side").value;
  var result = "";
  resetResultAndErrorBox();

  if (
    Tside.toString().trim() != "" &&
    Bside.toString().trim() != "" &&
    Lside.toString().trim() != "" &&
    Rside.toString().trim() != ""
  ) {
    if (Tside > 0 && Bside > 0 && Lside > 0 && Rside > 0) {
      var result = squareOrRectangle(Tside, Bside, Lside, Rside);

      if (result.trim() == "") {
        return;
      }
      displayResult(result);
    } else {
      var error = "Negative nor zero values are allowed";
      displayError(error);
    }
  } else {
    var error = "You must fill all the empty boxes";
    displayError(error);
  }
}

function squareOrRectangle(Tside, Bside, Lside, Rside) {
  var stringResult = "";
  var error = "";
  if (Tside == Bside && Lside == Rside && Tside == Lside) {
    stringResult = "It's a square ";
    return stringResult;
  }
  if (Tside == Bside && Lside == Rside && Tside != Lside) {
    if (Tside > Lside) {
      stringResult = "It's a rectangle who's width is bigger than its height";
      return stringResult;
    } else if (Tside < Lside) {
      stringResult = "It's a rectangle who's height is bigger than its width ";
      return stringResult;
    }
  }
  //Why are the values wrong?
  if (Tside != Bside && Lside == Rside) {
    error = "The top side value and the bottom one do not match";
    displayError(error);
    return stringResult;
  } else if (Tside == Bside && Lside != Rside) {
    error = "The left side value and the right one do not match";
    displayError(error);
    return stringResult;
  } else if (Tside != Bside && Lside != Rside) {
    error =
      "The top side value and the bottom one do not match <br/> The left side value and the right one do not match";
    displayError(error);
    return stringResult;
  }
}

//Displays an error if the values entered are not right
function displayError(error) {
  document.getElementById("error-box").style.borderColor = "#cc0000";
  document.getElementById("error-box").innerHTML = error;
}

//Display the given string on the result box
function displayResult(result) {
  document.getElementById("result-box").style.borderColor = "rgb(50,205,50)";
  document.getElementById("result-box").innerHTML = result;
}

function resetResultAndErrorBox() {
  document.getElementById("error-box").style.borderColor = "rgb(255, 255, 255)";
  document.getElementById("error-box").innerHTML = "";
  document.getElementById("result-box").style.borderColor =
    "rgb(255, 255, 255)";
  document.getElementById("result-box").innerHTML = "";
}
