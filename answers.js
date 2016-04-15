// Exercise 1: Write a function called printPositives that takes an array and uses its forEach method to print only the positive numbers.

var arr1 = [1,-2,3,-23,6,7,-71];

function onlyPositives(num) {
    if (num >= 0) {
        console.log(num);
    }
}

// arr1.forEach(onlyPositives);

// Exercise 2: Similar to the previous exercise, write a function called getPositives that takes an array and uses its filter method to return a new array with only the positive numbers

var arr2 = [1,-2,3,-23,6,7,-71];

function getPositives(num) {
    return num >= 0;
}

var filteredArr2 = arr2.filter(getPositives);
// console.log(filteredArr2);

// Exercise 3: Write a function called filterArray that takes an array AND a function as arguments. Your filter function should return a new array that contains only the elements where the passed function returns a truthy value.
// NOTE: You are allowed to use Array.prototype.filter to answer this question.
// NOTE 2: This is a bit of a trick question, the answer is a one-liner :)

var arr3 = [3, "hello", 0, false, undefined];

function onlyTruthy(something) {
    if(something){
        return something;
    }
}

function filterArray(arr, func) {
    return arr.filter(func);
}
// console.log(filterArray(arr3, onlyTruthy));

// Exercise 4: Write a function called longestWord that takes a string as argument, and returns the longest word in the string. You should use Array.prototype.reduce to do your work.
// Hint: You can use String.prototype.split to split the string into an array of words.


function longestWord(string) {
    var splitWords = string.split(" ");
    return splitWords.reduce(function(prev, next) {
        if (prev.length < next.length) {
            prev = next;
        }
        return prev;
})}

// console.log(longestWord("Let's see how this workjrkfrbgs"));

/*Exercise 5: Write a function called countVowels that takes a string and returns the number of vowels in the string. You should use Array.prototype.reduce to do your work.
Hint: You can use String.prototype.split again. There is a way to use it to split a string by character. Try to Google it :)
Hint 2: You can create an array of vowels and use Array.prototype.indexOf to check if the current letter is a vowel.*/

function countVowels(string) {
    var splitChars = string.split("");
    var vowelCounter = 0;
    return splitChars.reduce(function(prev, next) {
        if (next === "a" || next === "e" || next === "i" || next === "o" || next === "u") {
            vowelCounter += 1;
        }
        return vowelCounter;
    });
}

// console.log(countVowels("This should count how many vowels are in the string"));

/*Exercise 6
Write a function called highLow that takes an array of numbers, and returns an object with a property highest containing the highest number, and a property lowest containing the lowest number, using Array.prototype.reduce.
For example, starting with [1, -10, 20, 40, 5], your function should return {highest: 40, lowest: -10}.
Hint: Javascript has a special value called Infinity, which is higher than any other number. See if you can initialize your reduce accumulator with Infinity and -Infinity :)*/

var arr6 = [1, -10, 20, 40, 5];

function highLow(arrayOfNumbers) {
    return arrayOfNumbers.reduce(function(obj, next) {
        if (next > obj.highest) {
            obj.highest = next;
        }
        if (next < obj.lowest) {
            obj.lowest = next;
        }
        return obj;
    }, {highest: -Infinity , lowest: Infinity});
}

// console.log(highLow(arr6));

/*Exercise 7
Expanding on exercise 6, write a function called highLowTwo that takes an array of numbers, and returns the higest, second highest, lowest, and second lowest numbers.
For example, starting with [1, -10, 20, 40, 5], your function should return:
{  "highest": 40,
  "secondHighest": 20,
  "lowest": -10,
  "secondLowest": 5
}
*/

function highLowTwo(arrayOfNumbers) {
    return arrayOfNumbers.reduce(function(obj, next) {
        if (next > obj.highest) {
            obj.secondHighest = obj.highest;
            obj.highest = next;
        }
        if (next < obj.lowest) {
            obj.secondLowest = obj.lowest;
            obj.lowest = next;
        }
        return obj;
    }, {highest: -Infinity , secondHighest: -Infinity , lowest: Infinity , secondLowest: Infinity});
}

// console.log(highLowTwo(arr6));