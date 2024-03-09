const resizer = require("image-resizer-lib")

document.addEventListener("DOMContentLoaded", (event) => {
    let button = document.getElementById('submit')
    let counter = document.getElementById('counter')
    let reset = document.getElementById('reset')
    button.addEventListener('click', () => {
        console.log('clicked');
        counter.textContent = number++;
    })

})