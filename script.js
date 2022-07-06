let place = document.getElementById('place')
let date = document.getElementById('date')
let amount = document.getElementById('amount')
let btn = document.getElementById('add-btn')
let trow = document.getElementById('t-ble')


btn.addEventListener('click', () => {


    let data1 = place.value
    let data2 = date.value
    let data3 = amount.value
    if (data1  && data2 && data3) {
        trow.innerHTML += `<tr >
        <td id="td-1">${data1}</td>
        <td id="td-2">${data2}</td>
        <td id="td-3">${data3}</td>
        </tr>

        `
    clearInput()    
    } else {
        alert('please fill in the input fields')
    }
})