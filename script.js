const button = document.getElementById('button');
const number = document.getElementById('number');
const times = document.getElementById('times');

button.addEventListener('click', () => {
    number.innerText++
    if (number.innerText == 1) {
        times.innerText = " time."
    } else {
        times.innerText = " times."
    }
})