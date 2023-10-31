const textElement = document.getElementById('text');
const cursorElement = document.getElementById('cursor');
const textToWrite = "Organic Food Is Good For Health";
let index = 0;

function writeText() {
    if (index < textToWrite.length) {
        textElement.textContent += textToWrite.charAt(index);
        index++;
        setTimeout(writeText, 50); // Adjust the delay (in milliseconds) between characters
    } else {
        // Remove the cursor when the text is fully written
        cursorElement.style.display = "none";
    }
}

writeText();
