// DOM

// First way of accessing an element
// add 'defer' after script source name
// console.log(document.querySelector('h1'))   // preferred

// Second way of accessing an element
// console.log(document.getElementById('title'))


// we can use JS to change HTML in the document:
// document.querySelector('#title').innerHTML = 'DonLLEO99'
// you can also add onto HTML using '+=':
// document.querySelector('#title').innerHTML += 'DonLLEO99'

// we can also use JS to change CSS
document.querySelector('#title').style.fontSize = '42px'


// function changeTitleToRed() {
//     document.querySelector('#title').style.color = 'red'
// }

// function to make a dark mode button
function toggleDarkMode() {
    document.querySelector('body').classList.toggle("dark-theme")
}