let place = document.getElementById('input')
let amount = document.getElementById('amount')
let btn = document.getElementById('add-btn')
let trow = document.getElementById('t-ble')



    let data1 = input.value
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

function clearInput() {
    place.value = null
    date.value = null
    amount.value = null
}