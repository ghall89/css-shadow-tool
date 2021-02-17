// Setup variables

var shadow = {
    inset: false,
    x: 0,
    y: 0,
    blur: 0,
    spread: 0,
    color: "#0000007c"
}

var cssOutput;

// Take values from input and set variables
function updateInput() {
    shadow.inset = document.getElementById("inset").checked;
    shadow.x = document.getElementById("xpos").value;
    shadow.y = document.getElementById("ypos").value;
    shadow.blur = document.getElementById("blur").value;
    shadow.spread = document.getElementById("spread").value;

    if (shadow.inset == false) {
        cssOutput = shadow.x + "px " + shadow.y + "px " + shadow.blur + "px " + shadow.spread + "px "+ shadow.color;
    }
    if (shadow.inset == true) {
        cssOutput = "inset " + shadow.x + "px " + shadow.y + "px " + shadow.blur + "px " + shadow.spread + "px "+ shadow.color;
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

function copyToClipBoard() {
    var textToCopy = document.getElementById("output-text");
    var copyButton = document.getElementById("copy");

    window.navigator.clipboard.writeText(textToCopy.innerText);
    copyButton.innerText = "Copied!";
    
    var buttonState = setInterval(function(){
        copyButton.innerText = "Copy to Clipboard";
    }, 3000);

}

// Color Picker Functionality

var parent = document.querySelector('#picker');
var picker = new Picker({
    parent: parent, 
    color: '#0000007c',
    editor: false,
    popup: 'top',
});


// You can do what you want with the chosen color using two callbacks: onChange and onDone.
picker.onChange = function (color) {
    parent.style.background = color.rgbaString;
    shadow.color = color.hex;

    updateInput();
};

