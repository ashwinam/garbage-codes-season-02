// Select elements

const upArrow = document.querySelector('#up-arrow');
const downArrow = document.querySelector('#down-arrow');
const number = document.querySelector('#number').innerText
let currentValue = parseInt(number);

upArrow.addEventListener("click", function () {
    currentValue++;
    document.querySelector('#number').innerText = currentValue;
    document.querySelector('#number').style.color = 'green';
    upArrow.style.fill = 'green';
    downArrow.style.fill = "black";
})

downArrow.addEventListener("click", function () {
    currentValue--;
    document.querySelector('#number').innerText = currentValue;
    document.querySelector('#number').style.color = 'red';
    downArrow.style.fill = "red";
    upArrow.style.fill = 'black';
})