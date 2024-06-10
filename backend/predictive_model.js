const fs = require('fs');

function preprocessData(data) {
    data.forEach(entry => {

        entry.price = parseFloat(entry.price.replace(/[^0-9.-]+/g,"").replace(/,/g, ""));

        entry.address = entry.address.split(',').map(item => item.trim());
    });
    return data;
}

function removeDuplicates(array, keyAttributes) {
    const uniqueMap = new Map();
    for (const item of array) {
        const key = keyAttributes.map(attr => item[attr]).join('|');
        if (!uniqueMap.has(key)) {
            uniqueMap.set(key, item);
        }
    }
    return Array.from(uniqueMap.values());
}

function trainModel(X_train, y_train) {
    const n = X_train.length;

    let sumX = 0, sumY = 0, sumXY = 0, sumXX = 0;
    let validCount = 0; 

    for (let i = 0; i < n; i++) {
        if (!isNaN(X_train[i]) && !isNaN(y_train[i])) { 
            sumX += X_train[i];
            sumY += y_train[i];
            sumXY += X_train[i] * y_train[i];
            sumXX += X_train[i] * X_train[i];
            validCount++;
            console.log('sumXY:', sumXY, 'y_train[i]:', y_train[i]);
        }
    }

    if (validCount === 0) {
        console.error('No valid pairs of X_train and y_train found.');
        return { slope: NaN, intercept: NaN }; 
    }

    const slope = (validCount * sumXY - sumX * sumY) / ((validCount * sumXX - sumX * sumX) + 1);
    const intercept = (sumY - slope * sumX) / validCount;

    return { slope, intercept };
}

function euclideanDistance(x1, x2) {
    let sum = 0;
    for (let i = 0; i < x1.length; i++) {
        sum += Math.pow(x1[i] - x2[i], 2);
    }
    return Math.sqrt(sum);
}

function knnRegression(X_train, y_train, X_new, k) {
    const n = X_train.length;

    if (n === 0) {
        console.error('No training data available.');
        return NaN; 
    }

    if (k > n) {
        console.warn('Number of neighbors (k) is greater than the number of training samples. Setting k to the number of training samples.');
        k = n;
    }

    const distances = [];

    for (let i = 0; i < n; i++) {
        const distance = euclideanDistance(X_train[i], X_new);
        distances.push({ index: i, distance });
    }

    distances.sort((a, b) => a.distance - b.distance);

    let sum = 0;
    for (let i = 0; i < k; i++) {
        const neighborIndex = distances[i].index;
        sum += y_train[neighborIndex];
    }

    return sum / k;
}

function preprocessYData(y_train) {
    return y_train.map(price => {

        if (typeof price === 'string') {

            return parseFloat(price.replace(/[^0-9.-]+/g,"").replace(/,/g, ""));
        } else {

            return NaN;
        }
    }).filter(price => !isNaN(price)); 
}

function meanSquaredError(y_true, y_pred) {
    const n = y_true.length;
    let sumSquaredError = 0;
    for (let i = 0; i < n; i++) {
        sumSquaredError += Math.pow(y_true[i] - y_pred[i], 2);
    }
    return sumSquaredError / n;
}

function main() {
    const scrapedData = JSON.parse(fs.readFileSync('scraped_data.json', 'utf8'));
    const housingData = removeDuplicates(scrapedData, ['title', 'category']);

    const preprocessedData = preprocessData(housingData);
    const preprocessedYData = preprocessYData(preprocessedData.map(entry => entry.price));

    const X_train = preprocessedData.map(entry => [entry.bedrooms, entry.square, entry.bathrooms]); 
    const y_train = preprocessedYData; 

    const X_new = [2, 120, 2]; 
    const k = 5; 

    const algorithmPredictedPrice = calculatePriceAlgorithm(X_new);

    if (!isNaN(algorithmPredictedPrice)) {
        console.log("Algorithm Predicted Price:", algorithmPredictedPrice);
    } else {

        const modelPredictedPrice = knnRegression(X_train, y_train, X_new, k);
        if (!isNaN(modelPredictedPrice)) {
            console.log("Model Predicted Price:", modelPredictedPrice);
        } else {
            console.log("Unable to predict price.");
        }
    }
}
// Function to calculate price using advanced mathematical algorithm with scaling and adjusted random fluctuations
function calculatePriceAlgorithm(features) {
    const [bedrooms, square, bathrooms] = features;
    
    // Define base values for each feature
    const baseValues = {
        bedrooms: 50000, // Base value for bedrooms
        square: 500,     // Base value for square meters
        bathrooms: 200   // Base value for bathrooms
    };
    
    // Apply mathematical functions to modify the base values
    const modifiedValues = {
        bedrooms: Math.pow(baseValues.bedrooms, bedrooms),
        square: Math.log(square) * baseValues.square,
        bathrooms: Math.sqrt(bathrooms) * baseValues.bathrooms
    };
    
    // Introduce random fluctuations to the modified values with adjusted range
    const randomFluctuations = {
        bedrooms: modifiedValues.bedrooms * (Math.random() * 0.05 + 0.975), // Random fluctuation between 0.975 and 1.025
        square: modifiedValues.square * (Math.random() * 0.05 + 0.975),     // Random fluctuation between 0.975 and 1.025
        bathrooms: modifiedValues.bathrooms * (Math.random() * 0.05 + 0.975) // Random fluctuation between 0.975 and 1.025
    };

    // Calculate price based on the modified values
    const price = randomFluctuations.bedrooms + randomFluctuations.square + randomFluctuations.bathrooms;
    
    return price;
}


main()