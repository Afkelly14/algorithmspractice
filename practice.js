// // // The Western Suburbs Croquet Club has two categories, Senior and open. They would
// // // like your help with an application form that will tell prospecttive
// // // members which category they will be placed.Club

// // // To be a senior member, you must be at least 55 years old and have a handicap
// // // greater than 7. In this club, handicaps range from -2 to +26. The better the player,
// // // the lower the handicap.

// // /*

// //     Input will consist of a list of lists. One for persons age, one for their
// // handicap

// //     Output will consist of a list of string values, open or senior

// // */

// // //Inputs
// // // [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// // //Outputs
// //     // ["Open", "Open", "Senior", "Open"]
// // //Notes:
// //     // > 55+, handicap > 7
// //     // figure out if inputs are greater than above information
// //     // map over information

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

// // // Create a function that returns the sum of the two lowest positive numbers
// // // given an array of minimum 4 positive integers.

// // // [19, 5, 42, 2, 77]
// // // Go through the array and find the two lowest, then add together

let numbers = [19, 5, 42, 2, 77];

const sumTwoSmallestNumbers = (numbers) => {
  const [firstNumber, secondNumber] = numbers.sort((a, b) => a - b);
  return firstNumber + secondNumber;
};

console.log(sumTwoSmallestNumbers(numbers));

// // // given a string, replace every letter with its position in the alphabet
// // // a = 1
// // /*
// //  1. take the alphabet, map it to numbers
// //  a b c d e f g h i j  k  l  m  n  o  p  q  r  s  t  u  v  w  x  y  z
// //  1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26
// // */
// // //alphabetPosition("The sunset sets at twelve o'clock")
// // //split the array into each letter, map over the letters

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

const alphabetPosition = (text) => {
  return text
    .toLowerCase()
    .replace(/[^a-zA-Z]/g, "")
    .split("")
    .map((letter) => alphabet.indexOf(letter) + 1);
};

console.log(alphabetPosition("The sunset sets at twelve o'clock"));

// // /*
// // Return the number(count) of vowels in the given string
// // */

function getCount(str) {
  let vowelsCount = 0;

  for (const letter of str) {
    if (letter.match(/[aeiou]/g)) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}
console.log(getCount("abracadabra"));

// // /*
// // given a string, reverse it
// // */

// // /*
// // convert to an array, reverse it, turn it back into a string
// // */
const revString = (str) => {
  const arr = str.split("");
  arr.reverse();
  str = arr.join("");
  console.log(str);
};

revString("apple");

// // /*
// // find palindromes
// // */

// // /* reverse the string, check if original string & reverse match
// // */

let Palindrome = (str) => {
  let isPalindrome = str.split("").reverse().join("");
  console.log(str === isPalindrome);
};

Palindrome("jhudnlkmd");

// // /* find the character that appears the most and how many times it appears
// // */

// // /*
// // Notes:
// // key- value pair. Create an object, check if whats in the object is in the string
// // increase the value if its exists
// // Loop through the object
// // */

let maxChar = (str) => {
  let obj = {};

  for (let char of str) !obj[char] ? (obj[char] = 1) : obj[char]++;

  let maxNum = 0;
  let maximumChar = "";

  for (let char in obj) {
    if (obj[char] >= maxNum) {
      maxNum = obj[char];
      maximumChar = char;
    }
  }
  console.log(`${maximumChar} appears ${maxNum} times`);
};

maxChar("heLLLoo$$3p");

function sumUp(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result = result + i;
  }
  return result;
}

console.log(sumUp(4));

// //adding numbers in an array
function sumNumbers(numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}

console.log(sumNumbers([10, 5, 9, 250]));

//add something to the beginning and end of an array
let myArray = ["a", "b", "c", "d"];
myArray.push("end");
myArray.unshift("start");

console.log(myArray);

//Given an array of integers nums and an integer target, return indices of
//the two numbers such that they add up to target.

/* Notes:
1. push them into an object
2. for loop through the object
3. Compare values to see if they equal target
*/
// let nums = [2,7,11,15];
// let target = 9;

// var twoSum = function(nums, target) {
//     let obj = {};

//     for(let i = 0; i < nums.length; i++) {
//         if(obj[num[i] >= 0]) {
//             return [obj[nums[i]], i];
//         }
//         obj[target - nums[i]];
//     }
// }

// twoSum();

//reverse an integer
//parsefloat = converts an integer to a string
//Math.sign will return a positive or negative - same as it was entered

const reversedNum = (num) =>
  parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num);

console.log(reversedNum(123))


