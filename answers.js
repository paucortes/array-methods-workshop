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

/*Exercise 8
Write a function called countChars that takes a string, and returns an object where the keys are letters, and the value is the number of times that letter appears.
For example, with input "hello world", the output should be:
{
  "h": 1,
  "e": 1,
  "l": 3,
  "o": 2,
  "w": 1,
  "r": 1,
  "d": 1
}
NOTE: Unlike arrays, objects don’t have any ordering on them. When you print your object on the console, your keys may be displayed in a different order, and it does not matter.*/

function countChars(string) {
    var splitString = string.toLowerCase().split("");
    return splitString.reduce(function(obj, next) {
        if (!obj[next]) {
            obj[next] = 1;
        } else {
            obj[next]++;
        }
        return obj;
        }, {});
}

// console.log(countChars("See how many of each letters are in the string"));

/*Exercise 9
Starting on week 3 of the bootcamp, we will be learning about databases. Databases are useful for saving data for long periods of time.
Contrary to a JavaScript program, where all the data disappears when the program terminates, databases keep their data "forever".
In this exercise, we’re going to imagine that we are storing people information in a database, and that we queried our database to retrieve a list of people.
Our database returns to us an array of people objects, and each of them has a unique ID that the database uses to refer to it.
Here’s what our person data could look like:
[
  {
    "id": "KeXoYg92is",
    "firstName": "John",
    "lastName": "Smith",
    "email": "john@smith.com"
  },
  {
    "id": "NkALmSWtUp",
    "firstName": "Donald",
    "lastName": "Duck",
    "email": "don@disney.com"
  },
  {
    "id": "m7LPbJYSUg",
    "firstName": "John",
    "lastName": "Vader",
    "email": "vader@darkside.com"
  }
]
For this exercise, we want to use Array.prototype.reduce to transform our array of people into an object, keyed with the unique ID.
The end result should look like this:
{
  "KeXoYg92is": {
    "id": "KeXoYg92is",
    "firstName": "John",
    "lastName": "Smith",
    "email": "john@smith.com"
  },
  "NkALmSWtUp": {
    "id": "NkALmSWtUp",
    "firstName": "Donald",
    "lastName": "Duck",
    "email": "don@disney.com"
  },
  "m7LPbJYSUg": {
    "id": "m7LPbJYSUg",
    "firstName": "John",
    "lastName": "Vader",
    "email": "vader@darkside.com"
  }
}
This object could be useful if we are often looking up people by their unique ID.
Write a function called peopleById that takes an array of people and returns an object where each person is keyed by their unique ID.
You have effectively created what we call an index, not unlike the one you have in your phonebook.*/

var arrayOfPeople = [{
    "id": "KeXoYg92is",
    "firstName": "John",
    "lastName": "Smith",
    "email": "john@smith.com"},
    {
    "id": "NkALmSWtUp",
    "firstName": "Donald",
    "lastName": "Duck",
    "email": "don@disney.com"},
    {
    "id": "m7LPbJYSUg",
    "firstName": "John",
    "lastName": "Vader",
    "email": "vader@darkside.com"}];

function peopleById(array) {
    return array.reduce(function(obj, curr) {
        obj[curr.id] = curr;
        return obj;
    }, {});
}

// console.log(peopleById(arrayOfPeople));

/*Exercise 10
Expanding on the previous exercise, this time we are going to create an index on first names. Notice how in the previous exercise, each ID was unique. In this case, two people have the same first name.
We want to create a function called peopleByFirstName that will take an array of people and return something that looks like this:
{
  "John": [
    {
      "id": "KeXoYg92is",
      "firstName": "John",
      "lastName": "Smith",
      "email": "john@smith.com"
    },
    {
      "id": "m7LPbJYSUg",
      "firstName": "John",
      "lastName": "Vader",
      "email": "vader@darkside.com"
    }
  ],
  "Donald": [
    {
      "id": "NkALmSWtUp",
      "firstName": "Donald",
      "lastName": "Duck",
      "email": "don@disney.com"
    }
  ]
}
You have effectively created an index on first name. This lets you find all people called, say, “John” without having to look through the whole results.*/

var arrayOfPeople2 = [{
    "id": "KeXoYg92is",
    "firstName": "John",
    "lastName": "Smith",
    "email": "john@smith.com"},
    {
    "id": "NkALmSWtUp",
    "firstName": "Donald",
    "lastName": "Duck",
    "email": "don@disney.com"},
    {
    "id": "m7LPbJYSUg",
    "firstName": "John",
    "lastName": "Vader",
    "email": "vader@darkside.com"}];

function peopleByFirstName(array) {
    return array.reduce(function(obj, curr) {
        if (!obj[curr.firstName]) {
            obj[curr.firstName] = [];
            obj[curr.firstName].push(curr);
        } else {
            obj[curr.firstName].push(curr);
        }
        return obj;
    }, {});
}

// console.log(peopleByFirstName(arrayOfPeople2));