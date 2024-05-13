//Leap Year Checker
const year = 2024;
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

if (isLeapYear(year)) {
    console.log(`${year} is a leap year!`);
} else {
    console.log(`${year} is not a leap year.`);
}


// Ticket Pricing

function calculateTicketPrice(age) {
    if (age <= 12) {
        return 10;
    } else if (age >= 13 && age <= 17) {
        return 15;
    } else {
        return 20;
    }
}

// Example usage:
const age = parseInt(prompt("Enter your age: "));
const ticketPrice = calculateTicketPrice(age);
console.log(`The ticket price for someone aged ${age} is $${ticketPrice}.`);


// weather clothing adviser

function adviseClothing(temperature, isRaining) {
    if (temperature < 50) {
        if (isRaining) {
            return "Wear a heavy coat and carry an umbrella.";
        } else {
            return "Wear a heavy coat.";
        }
    } else if (temperature < 70) {
        if (isRaining) {
            return "Wear a light jacket and carry an umbrella.";
        } else {
            return "Wear a light jacket.";
        }
    } else {
        if (isRaining) {
            return "Carry an umbrella.";
        } else {
            return "You're good to go!";
        }
    }
}

// Example usage:
const temperature = parseFloat(prompt("Enter the current temperature (in Fahrenheit): "));
const rainInput = prompt("Is it raining? (yes/no)").toLowerCase();
const isRaining = rainInput === "yes";

const clothingAdvice = adviseClothing(temperature, isRaining);
console.log("Recommendation:", clothingAdvice);
