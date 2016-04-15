// Exercise 1: Write a function called printPositives that takes an array and uses its forEach method to print only the positive numbers.

var arr1 = [1,-2,3,-23,6,7,-71];

function onlyPositives(num) {
    if (num > 0) {
        console.log(num);
    }
}

arr1.forEach(onlyPositives);
