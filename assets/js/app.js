// Create default state for shadow object
var shadow = {
    inset: false,
    x: 0,
    y: 0,
    blur: 0,
    spread: 0,
    color: "#0000007c"
}

// Set default button text
var copyButton = document.getElementById("copy");
defaultCopyBtn();
function defaultCopyBtn() {
    copyButton.innerText = "Copy to Clipboard";
};

// Take values from input and set variables
function getInput() {
    var cssOutput;
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
    updateBox(cssOutput);
    updateOutput(cssOutput);
}

// Update CSS on the preview box
function updateBox(css) {
    document.getElementById("box").style.boxShadow = css;
}
// Update CSS code output
function updateOutput(css) {
    document.getElementById("cssCode").innerText = css;
    document.getElementById("webkit-cssCode").innerText = css;
    document.getElementById("moz-cssCode").innerText = css;
}

// Copy the contents of output-text onto the system clipboad
// & indicate success by changing the button text for 3 seconds
function copyToClipBoard() {
    var textToCopy = document.getElementById("output-text");
    window.navigator.clipboard.writeText(textToCopy.innerText);
    copyButton.innerText = "Copied!";
    var buttonState = setInterval(function(){
        defaultCopyBtn();
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
    getInput();
};

