document.addEventListener('DOMContentLoaded', function() {
    let calculateButton = document.getElementById('calculate');

    calculateButton.addEventListener('click', function() {
        calculateBMI();
    });

    function calculateBMI() {
        let weight = parseFloat(document.getElementById('weight').value);
        let height = parseFloat(document.getElementById('height').value);
        let age = parseInt(document.getElementById('age').value);
        let gender = document.getElementById('gender').value;

        if (!isNaN(weight) && !isNaN(height) && !isNaN(age)) {
            let bmi = (weight / Math.pow(height / 100, 2)).toFixed(2);
            let status = getHealthStatus(bmi, age, gender);
            displayResult(bmi, status);
        } else {
            alert('Please enter valid values for weight, height, and age.');
        }
    }

    function getHealthStatus(bmi, age, gender) {
        // You can customize the health status based on BMI, age, and gender.
        // This is just a simple example.
        let status = '';

        if (bmi < 18.5) {
            status = 'Underweight, please eat more and gym';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            status = 'Summer body you say';
        } else if (bmi >= 25 && bmi < 29.9) {
            status = "Overweight, please eat less and gym";
        } else {
            status = 'Get help!';
        }

        // Adjust status based on age and gender
        if (gender === 'female' && age >= 50) {
            status += ' (Considered high risk for women over 50)';
        }

        return status;
    }

    function displayResult(bmi, status) {
        let resultElement = document.getElementById('result');
        let statusElement = document.getElementById('status');

        resultElement.textContent = 'Your BMI is: ' + bmi;
        statusElement.textContent = 'Health Status: ' + status;
    }
});