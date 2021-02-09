// Setup variables

var inset = false;
var xPosition;
var yPosition;
var shadowBlur;
var shadowSpread;
var pickedColor = "#0000007c";

var cssOutput;

// Take values from input and set variables
function updateInput() {
    inset = document.getElementById("inset").checked;
    xPosition = document.getElementById("xpos").value;
    yPosition = document.getElementById("ypos").value;
    shadowBlur = document.getElementById("blur").value;
    shadowSpread = document.getElementById("spread").value;

    if (inset == false) {
        cssOutput = xPosition + "px " + yPosition + "px " + shadowBlur + "px " + shadowSpread + "px "+ pickedColor;
    }
    if (inset == true) {
        cssOutput = "inset " + xPosition + "px " + yPosition + "px " + shadowBlur + "px " + shadowSpread + "px "+ pickedColor;
    }

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

// Color Picker Functionality

// Create a new Picker instance and set the parent element.
// By default, the color picker is a popup which appears when you click the parent.
var parent = document.querySelector('#picker');
var picker = new Picker({
    parent: parent, 
    color: '#0000007c'
});


// You can do what you want with the chosen color using two callbacks: onChange and onDone.
picker.onChange = function (color) {
    parent.style.background = color.rgbaString;
    pickedColor = color.hex;

    updateInput();
};

