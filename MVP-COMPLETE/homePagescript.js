// Function to submit user input
function submitInput() {
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim()) {
        alert('Input Submitted: ' + userInput);
        document.getElementById('userInput').value = ''; // Clear input
    } else {
        alert('Please enter a valid input');
    }
}

