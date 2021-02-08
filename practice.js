// The Western Suburbs Croquet Club has two categories, Senior and open. They would
// like your help with an application form that will tell prospecttive
// members which category they will be placed.Club

// To be a senior member, you must be at least 55 years old and have a handicap
// greater than 7. In this club, handicaps range from -2 to +26. The better the player,
// the lower the handicap.

/* 

    Input will consist of a list of lists. One for persons age, one for their
handicap 

    Output will consist of a list of string values, open or senior

*/

//Inputs
// [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
//Outputs
    // ["Open", "Open", "Senior", "Open"]
//Notes:
    // > 55+, handicap > 7
    // figure out if inputs are greater than above information
    // map over information

// let data = [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]

// const openOrSenior = (data) => {
//    return data.map((info) => {
//     if(info[0] >= 55 && info[1] > 7) {
//         return "Senior"
//     } else {
//         return "Open"
//     }
//     }
//     )}

// openOrSenior();




// Create a function that returns the sum of the two lowest positive numbers
// given an array of minimum 4 positive integers. 

// [19, 5, 42, 2, 77]
// Go through the array and find the two lowest, then add together

let numbers = [19, 5, 42, 2, 77]

const sumTwoSmallestNumbers = (numbers) => {
    const [firstNumber, secondNumber] = numbers.sort((a, b) => a - b);
    return firstNumber + secondNumber;
}

console.log(sumTwoSmallestNumbers(numbers));