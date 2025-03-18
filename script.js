let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let zero = document.getElementById('zero');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let multiply = document.getElementById('multiply');
let divide = document.getElementById('divide');
let equal = document.getElementById('equal');
let ac = document.getElementById('ac');
let result = document.getElementById('result');
let flag = false; // Indicates if the last input was an operator
let userInput = ''; // Stores the full expression

// Function to handle number input
function handleNumberInput(value) {
    if (flag) {
        result.innerHTML = value; // Replace display with the new number
        flag = false; // Reset the flag
    } else if (result.innerHTML.length < 10) {
        if (result.innerHTML === '0') {
            result.innerHTML = value; // Replace initial 0
        } else {
            result.innerHTML += value; // Append the number
        }
    }
    userInput += value; // Add the number to the expression
}

// Function to handle operator input
function handleOperatorInput(operator) {
    if (userInput === '') return; // Prevent operators as the first input

    if (!flag) {
        userInput += operator; // Append operator
        flag = true; // Mark that an operator was pressed
    } else {
        userInput = userInput.slice(0, -1) + operator; // Replace last operator
    }
    result.innerHTML = operator; // Show operator
}

// Event listeners for numbers
one.addEventListener('click', () => handleNumberInput('1'));
two.addEventListener('click', () => handleNumberInput('2'));
three.addEventListener('click', () => handleNumberInput('3'));
four.addEventListener('click', () => handleNumberInput('4'));
five.addEventListener('click', () => handleNumberInput('5'));
six.addEventListener('click', () => handleNumberInput('6'));
seven.addEventListener('click', () => handleNumberInput('7'));
eight.addEventListener('click', () => handleNumberInput('8'));
nine.addEventListener('click', () => handleNumberInput('9'));
zero.addEventListener('click', () => handleNumberInput('0'));

// Event listeners for operators
plus.addEventListener('click', () => handleOperatorInput('+'));
minus.addEventListener('click', () => handleOperatorInput('-'));
multiply.addEventListener('click', () => handleOperatorInput('*'));
divide.addEventListener('click', () => handleOperatorInput('/'));

// Event listener for the equal button
equal.addEventListener('click', () => {
    if (userInput !== '' && !isNaN(userInput.slice(-1))) {
        try {
            let output = eval(userInput); // Evaluate the expression
            result.innerHTML = output; // Display the result
            userInput = output.toString(); // Store the result for further calculations
            flag = false; // Allow new input
        } catch (error) {
            result.innerHTML = 'Error'; // Handle invalid expressions
            userInput = ''; // Reset the expression
        }
    } else {
        result.innerHTML = 'Error'; // Handle invalid input
        userInput = ''; // Reset the expression
    }
});

// Event listener for the AC button
ac.addEventListener('click', () => {
    result.innerHTML = '0'; // Reset the display
    userInput = ''; // Clear the expression
    flag = false; // Reset the flag
});
