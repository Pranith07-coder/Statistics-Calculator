// Loading Indicator
function showLoading() {
    const loadingIndicator = document.getElementById('loading');
    loadingIndicator.style.display = 'block'; // Show loading indicator
}

function hideLoading() {
    const loadingIndicator = document.getElementById('loading');
    loadingIndicator.style.display = 'none'; // Hide loading indicator
}

// Validation and Calculation History
let history = [];

function validateInput(input) {
    if (isNaN(input) || input === '') {
        alert('Please enter a valid number.');
        return false;
    }
    return true;
}

function addToHistory(calculation) {
    history.push(calculation);
    updateHistoryDisplay();
}

function updateHistoryDisplay() {
    const historyContainer = document.getElementById('history');
    historyContainer.innerHTML = history.map(item => `<li>${item}</li>`).join('');
}

// Example function for performing a calculation (modify as needed)
function performCalculation() {
    const input = document.getElementById('calculatorInput').value;
    
    if (validateInput(input)) {
        showLoading();
        
        // Simulate a calculation (replace with actual logic)
        const result = input * 2; // Example calculation
        addToHistory(`Input: ${input}, Result: ${result}`);
        
        hideLoading();
    }
}
