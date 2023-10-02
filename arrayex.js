// let arr = [1, 4, 9, 16]

// let newArr = arr.map((element) => {
//     console.log(element)
//     return undefined;
// })

// let newArr = arr.map(element => undefined)

// console.log(newArr)




/**
 * Turn each element in an arr of dollars into cents
 * 
 * @example
 * [1, 0, 5, 10] -> [100, 0, 500, 1000]
 */

let dollars = [1, 5, 10, 3]

// let cents = dollars.map((element) => {  // less efficient
//     return element * 100;
// })

// let cents = dollars.map(element => element * 100) // more efficient

// console.log(cents)

/**
 * Now do it w/o using the .map() method
 * Use a for loop
 */

let cents = []  // create new empty arr

for (let i = 0; i < dollars.length; i++) {
    cents.push(dollars[i] * 100)
}

console.log(cents)