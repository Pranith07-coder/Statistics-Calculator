function restrictInput(event) {
    const charCode = event.which ? event.which : event.keyCode;


    if (charCode !== 44 && (charCode < 48 || charCode > 57)) {
        event.preventDefault();
    }
}


function validateInput() {
    const inputField = document.getElementById('dataInput');
    inputField.value = inputField.value.replace(/[^0-9,]/g, '');
}

function calculateStats() {
    const input = document.getElementById('dataInput').value;
    const data = input.split(',').map(Number).filter(num => !isNaN(num));

    if (data.length === 0) {
        alert("Please enter valid numbers.");
        return;
    }

    const mean = calculateMean(data);
    const median = calculateMedian(data);
    const mode = calculateMode(data);
    const stdDev = calculateStandardDeviation(data, mean);
    const sampleStdDev = calculateSampleStandardDeviation(data, mean);
    const sampleVariance = calculateSampleVariance(data, mean);
    const geometricMean = calculateGeometricMean(data);
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min;
    const count = data.length;
    const sum = data.reduce((a, b) => a + b, 0);
    const variance = calculateVariance(data, mean);

    document.getElementById('mean').innerText = `Mean: ${mean.toFixed(2)}`;
    document.getElementById('median').innerText = `Median: ${median.toFixed(2)}`;
    document.getElementById('mode').innerText = `Mode: ${mode.join(', ')}`;
    document.getElementById('stdDev').innerText = `Standard Deviation: ${stdDev.toFixed(2)}`;
    document.getElementById('sampleStdDev').innerText = `Sample Standard Deviation: ${sampleStdDev.toFixed(2)}`;
    document.getElementById('sampleVariance').innerText = `Sample Variance: ${sampleVariance.toFixed(2)}`;
    document.getElementById('geometricMean').innerText = `Geometric Mean: ${geometricMean.toFixed(2)}`;
    document.getElementById('min').innerText = `Minimum: ${min}`;
    document.getElementById('max').innerText = `Maximum: ${max}`;
    document.getElementById('range').innerText = `Range: ${range}`;
    document.getElementById('count').innerText = `Count: ${count}`;
    document.getElementById('sum').innerText = `Sum: ${sum}`;
    document.getElementById('variance').innerText = `Variance: ${variance.toFixed(2)}`;



    document.getElementById('results').classList.remove('hidden');
}


function calculateMean(data) {
    const sum = data.reduce((a, b) => a + b, 0);
    return sum / data.length;
}


function calculateMedian(data) {
    const sorted = [...data].sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
    } else {
        return sorted[middle];
    }
}


function calculateMode(data) {
    const frequency = {};
    data.forEach(num => frequency[num] = (frequency[num] || 0) + 1);

    let maxFreq = 0;
    let modes = [];

    for (const [num, freq] of Object.entries(frequency)) {
        if (freq > maxFreq) {
            maxFreq = freq;
            modes = [Number(num)];
        } else if (freq === maxFreq) {
            modes.push(Number(num));
        }
    }

    return modes;
}


function calculateVariance(data, mean) {
    return data.reduce((sum, num) => sum + Math.pow(num - mean, 2), 0) / data.length;
}


function calculateStandardDeviation(data, mean) {
    const variance = calculateVariance(data, mean);
    return Math.sqrt(variance);
}


function calculateSampleVariance(data, mean) {
    return data.reduce((sum, num) => sum + Math.pow(num - mean, 2), 0) / (data.length - 1);
}


function calculateSampleStandardDeviation(data, mean) {
    const sampleVariance = calculateSampleVariance(data, mean);
    return Math.sqrt(sampleVariance);
}


function calculateGeometricMean(data) {
    const product = data.reduce((acc, num) => acc * num, 1);
    return Math.pow(product, 1 / data.length);
}