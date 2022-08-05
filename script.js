// input variables
let amount;
let transactionName;

// table rows
let tableRows;

// keeps data for the table
let tableData = [];

// varables
let income = 0;
let expense = 0;
let total = 0;

function isValid(value) {
    if (!value) {
        return false;
    }
    return true;
    }

    // add income function
    function addIncome() {
    getUserInput();

    if (isValid(amount) && isValid(transactionName)) {
        tableData.push({
        id: tableData.length + 1,
        transaction: transactionName,
        type: 'Income',
        amount,
        });

        calculate();
        clearUserInput();
    } else {
        alert('All input are required');
    }

    displayTableData();
    }

    // add expense function
    function addExpense() {
    getUserInput();

    if (isValid(amount) && isValid(transactionName)) {
        tableData.push({
        id: tableData.length + 1,
        transaction: transactionName,
        type: 'Expense',
        amount,
        });

        calculate();
        clearUserInput();
    } else {
        alert('All input are required');
    }

    displayTableData();
    }

    // put input data into variables
    function getUserInput() {
    amount = Number(document.getElementById('amount').value);
    transactionName = document.getElementById('transaction').value;
    }

    // clear input data
    function clearUserInput() {
    document.getElementById('amount').value = '';
    document.getElementById('transaction').value = '';
    }

    // display table data
    function displayTableData() {
    let totalIncome = document.getElementById('totalIncome');
    let totalExpence = document.getElementById('totalExpence');
    let totalMoney = document.getElementById('totalMoney');
    tableRows = document.getElementById('tableRows');

    tableRows.innerHTML = `<tr class="tableHead">
    <th>Number</th>
    <th>Detail</th>
    <th>Type</th>
    <th>Money</th>
    <th>Event</th>
    </tr>`;

    for (let i = 0; i < tableData.length; i++) {
        tableRows.innerHTML += `
        <tr>
                <td>${tableData[i].id}</td>
                <td>${tableData[i].transaction}</td>
                <td>${tableData[i].type}</td>
                <td>R${tableData[i].amount}</td>
                <td><button class="remove" onClick="removeTransaction(${i})">Remove</button></td>
                </tr>
        `;
    }

    totalIncome.innerHTML = income;
    totalExpence.innerHTML = expense;
    totalMoney.innerHTML = total;
    }

    // calculate totals
    function calculate() {
    income = 0;
    expense = 0;
    total = 0;

    for (let i = 0; i < tableData.length; i++) {
        if (tableData[i].type == 'Income') {
        income += tableData[i].amount;
        }
        if (tableData[i].type == 'Expense') {
        expense += tableData[i].amount;
        }
    }

    total = income - expense;
    }

    // remove from the table
    function removeTransaction(index) {
    if (
        window.confirm(
        `Remove:  ${tableData[index].id + ': ' + tableData[index].transaction} ?`
        )
    ) {
        tableData.splice(index, 1);
        calculate();
        displayTableData();
    }
}

displayTableData();
