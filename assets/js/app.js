// Setup variables

var inset = false;
var xPosition;
var yPosition;
var shadowBlur;
var shadowSpread;
var opacity;

var cssOutput;

// Take values from input and set variables
function updateInput() {
    inset = document.getElementById("inset").checked;
    console.log(inset);

    xPosition = document.getElementById("xpos").value;
    yPosition = document.getElementById("ypos").value;
    shadowBlur = document.getElementById("blur").value;
    shadowSpread = document.getElementById("spread").value;
    opacity = document.getElementById("opacity").value;

    if (inset == false) {
        cssOutput = xPosition + "px " + yPosition + "px " + shadowBlur + "px " + shadowSpread + "px rgba(0, 0, 0, " + opacity + ")"
    }
    if (inset == true) {
        cssOutput = "inset " + xPosition + "px " + yPosition + "px " + shadowBlur + "px " + shadowSpread + "px rgba(0, 0, 0, " + opacity + ")"
    }

    console.log(cssOutput);

    updateBox();
    updateOutput();
}

// Update CSS on the preview box
function updateBox() {
    document.getElementById("box").style.boxShadow = cssOutput;
}
// Update CSS code output
function updateOutput() {
    document.getElementById("cssCode").innerText = cssOutput;
    document.getElementById("webkit-cssCode").innerText = cssOutput;
    document.getElementById("moz-cssCode").innerText = cssOutput;
}