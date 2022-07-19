let place = document.getElementById('input')
let amount = document.getElementById('amount')
let btn = document.getElementById('add-btn')
let trow = document.getElementById('t-ble')

function inputState() {
    input = document.getElementById('input').value;
    amount = document.getElementById('amount').value;
}

function addBtn() {
    inputState();

    console.log(input);
}

function displayData() {}

displayData();