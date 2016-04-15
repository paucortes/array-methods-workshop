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

// Write a function called filterArray that takes an array AND a function as arguments. Your filter function should return a new array that contains only the elements where the passed function returns a truthy value.
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
