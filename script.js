// Exercise 1: maxOfTwoNumbers

// In this exercise, create a function named maxOfTwoNumbers. It should take two numbers as inputs and return the larger number. If they're equal, return either one.

// Exercise 1 has been completed for you:
// */

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));
  

/*
Exercise 2: maxOfThree

Define a function, maxOfThree, it should accept three numbers and return the largest among them.

Complete Exercise 2 in the space below:
*/

const maxOfThree = (x, y, z) => {
  if (x >= y ) {
  return x;
  } else if (y >= z ) {
    return y;
  } else {
    return z;
    }
  }

  console.log('Exercise 2 Result:', maxOfThree(5, 24, 91));

/*
Exercise 3: Insert at the Beginning

Write a function named isCharAVowel that takes a single character as an argument. It should return true if the character is a vowel, and false otherwise.

Complete Exercise 3 in the space below:
*/

//constant variable function declaration in JavaScript, named isCharAVowel,
const isCharAVowel = (char) => {
//The if statement checks if the variable char is strictly equal to any of the following characters: 'r', 'a', 'v', 'e', 'n', or 's'.This code checks if a variable 'char' matches any of the specified characters - 'r', 'a', 'v', 'e', 'n', and 's'. The condition is considered true if any of the comparisons are correct. The '===' operator is used for strict equality.
  if (char === 'r' || char === 'a' || char === 'v' || char === 'e' || char === 'n' || char === 's') {
    return true;
  } else {
    return false;
  }
}

console.log('Exercise 3 Result:', isCharAVowel('a'));

/*
Exercise 4: sumArray

Create a function called sumArray. It should take an array of numbers and return the total sum. For example, sumArray([2, 4, 5]) should return 11.

Complete Exercise 4 in the space below:
*/

//function "sumArray"

const sumArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

//It calculates the total sum of all numbers in an array. You call the function by passing an array of numbers as an argument. The result will be logged to the console.

console.log('Exercise 4 Result:', sumArray([1, 7, 92]));

//After the loop is done, the function returns the "sum" variable, which holds the total sum of all the elements in the array.

/*
Exercise 5: multiplyArray

Define a function called multiplyArray. It should take an array of numbers and return the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40.

Complete Exercise 5 in the space below:
*/

const multiplyArray = (arr) => {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
}

console.log('Exercise 5 Result:', multiplyArray([1, 2, 52]));


//To simplfy use reduce method (), produce iteration, and current iteraction. Example: 
// const multiplyArray = arr => arr.reduce((product, current) => product * current, 1);
// console.log('Exercise 5 Result:', multiplyArray([1, 2, 52]));

/*
Exercise 6: reverseString

Define a function called reverseString. It should take a string and return it with its characters in reverse order. For example, reverseString('rockstar'); would return the string "ratskcor".

Complete Exercise 6 in the space below:
*/
//To reverse a string, create an empty variable called 'reversed'. It will use thevariable to store the reversed string. Then, It will use a for loop to go through the string from the end to the beginning. 

//In each iteration,the current character to the 'reversed' variable using the += operator. The  'reversed' operator adds the right operand to the left operand and assigns the result to the left operand. It keeps doing this until it has gone through all the characters in the string.

//After the loop is done, we return the reversed string. This string has the same characters as the original string, but in reverse order.

const reverseString = (str) => {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
} 

console.log('Exercise 6 Result:', reverseString('Knicks'));


/*
Exercise 7: longestStringInArray

Define a function called longestStringInArray. It should accept an array of strings and return the length of the longest string in the array.

Complete Exercise 7 in the space below:
*///The function takes an array as input and returns the length of the longest element in it. It initializes a variable called longestLength to 0 and iterates over each element in the array. For each element, it checks if its length is greater than the current longestLength and updates longestLength if it is. Finally, it returns the longestLength.

const longestStringInArray = (arr) => {
  let longestLength = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestLength) {
      longestLength = arr[i].length;
    }
  }
  return longestLength;
}
console.log('Exercise 7 Result:', longestStringInArray(['Karate', 'Muay Thai', 'Judo'])); 

/*
Exercise 8: stringsLongerThan

Write a function called stringsLongerThan. It takes an array of strings and a number, returning all strings longer than the given number. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3) would return ['hello', 'morning'].

Complete Exercise 8 in the space below:
*/
const stringsLongerThan = (arr, num) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > num) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log('Exercise 8 Result:', stringsLongerThan(['siR', 'Kendrick Lamar', 'Benny The Butcher', 'Kaytranada', 'Killer Mike'], 10));

/*
Exercise 9: numArgs

Challenge yourself with numArgs. This function should return the count of arguments passed to it when called.

Complete Exercise 9 in the space below:
*/
const numArgs = (...args) => {
  return args.length;
}
console.log('exercise 9 result:', numArgs(1,3,5,7,9 ));