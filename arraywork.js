/** Write a for-loop that loops through 1-20
 * if num is divisible by 3, print "Frontend"
 * if num is divisible by 5, print "Simplified"
 * if num is divisible by 3 AND 5, print "Frontend Simplified"
 * if num is NOT divisible by either 3 or 5, print the num
 * 
 * example:
 * 1 -> 1
 * 2 -> 2
 * 3 -> "Frontend"
 * 4 -> 4
 * 5 -> "Simplified"
 * ...
 * 15 -> "Frontend Simplified"
 * ...
 * 20 -> "Simplified"
 */

// for (let i = 1; i <= 20; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(`${i} -> Frontend Simplified`)
//     } else if (i % 3 === 0) {
//         console.log(`${i} -> Frontend`)
//     } else if (i % 5 === 0) {
//         console.log(`${i} -> Simplified`)
//     } else {
//         console.log(`${i} -> ${i}`)
//     }
// }




/** Print out every char from the str:
 * "Frontend Simplified"
 * 
 * @example
 * 'F'
 * 'r'
 * 'o'
 * ...
 * 'e'
 * 'd'
 */

// const str = "Frontend Simplified"

// for (let i = 0; i < str.length; i++) {
//     console.log(str[i])
// }




/** Create a func that converts Celsius to Fahrenheit
 * 
 * F = C * 1.8 + 32
 * 
 * @example
 * convertCelsiusToFahrenheit(0) -> 32
 */

/* first way to define */
// function convertCelsiusToFahrenheit(celsius) {  // provide parameter 'celsius'
//     return celsius * 1.8 + 32
// }

/* second way to define */
// const convertCelsiusToFahrenheit = (celsius) => { // arrow function
//     return celsius * 1.8 + 32
// }

// console.log(convertCelsiusToFahrenheit(30));
// console.log(convertCelsiusToFahrenheit(12));
// console.log(convertCelsiusToFahrenheit(76));




// let arr = [20, 30, 40, 50, 100]

// console.log(arr[0]) // first element in arr
// console.log(arr[arr.length - 1]) // last element in arr

// arr.push(200)   // update arr

// callback function syntax

// let newArr = arr.filter((element) => {
//     console.log(element)
//     if (element < 50) {
//         return true
//     }
// })

/**
 * turn those 6 lines of code into only 1
 */

// let newArr = arr.filter(element => element < 50)

// console.log(newArr)

// console.log(arr)




/**
 * Filter out all the 'FAIL' elements in an arr
 * 
 * @example
 * ['A+', 'A', 'FAIL'] -> ['A+', 'A']
 * ['FAIL'] -> []
 */

let grades = ['A+', 'A', 'FAIL']

let passingGrades = grades.filter(element => element !== 'FAIL') // more efficient

// let passingGrades = grades.filter((element) => { // less efficient
//     if (element != 'FAIL') {
//         return true
//     }
// })

console.log(passingGrades)

// you can iterate through an arr the same as a str using a simple for loop
for (let i = 0; i < grades.length; i++) {
    console.log(grades[i])
}

/**
 * Filter 'FAIL' elements w/o using .filter method
 */

// create new empty arr
let goodGrades = []

for (let i = 0; i < grades.length; i++) {
    if (grades[i] !== 'FAIL') {
        goodGrades.push(grades[i]);
    }
}

console.log(goodGrades);