document.addEventListener('DOMContentLoaded', function () {
    dataLoader()
})

const form = document.querySelector('.add-form')
const tBody = document.querySelector('tbody')
const date = document.getElementById('date')
const expense = document.getElementById('expense')
const income = document.getElementById('income')
const amount = document.getElementById('amount')
const inputs = document.querySelectorAll('input')
const errorMsg = document.querySelector('.error-message')

form.addEventListener('submit', addExpe)