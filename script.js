let input = document.getElementById('input')
let amount = document.getElementById('amount')
let btn = document.getElementById('add-btn')
let trow = document.getElementById('t-ble')

function inputState() {
    input = document.getElementById('input').value;
    amount = Number (document.getElementById('amount').value);
}

function addBtn() {
    inputState();

    console.log(input,amount);
}

function displayData() {}

displayData();