// Define initial values
let expenses = []; // array of object
let monthlyIncom = 0; // number
let expenseTotal = 0; // number
let balance = 0; // number

// Get references to HTML elements
let monthlyBudget = document.getElementById("monthly_budget");
let incomeInput = document.getElementById("income_input");
let updateBudgetButton = document.getElementById("update_budget_button");
let nameInput = document.getElementById("name_input");
let amountInput = document.getElementById("amount_input");
let addExpenseButton = document.getElementById("add_expense_button");
let expenseList = document.getElementById("expense_list"); // DIV
let totalExpenses = document.getElementById("total_expenses");
let remainingBalance = document.getElementById("remaining_balance");

// Build a function that will store the user input
// from the update budget form and display it in the app
function updateBudget(event) {
    event.preventDefault();
    console.log("updateBudget fired!");
    monthlyIncom = parseInt(incomeInput.value); // parse string to number
    monthlyBudget.innerText = "R" + monthlyIncom;
    updateBalance();
}

// Add updateBudget function to updateBudget button
updateBudgetButton.onclick = updateBudget;

// Build a helper function that calculates the remaining balance
function updateBalance() {
    balance = monthlyIncom - expenseTotal;
    remainingBalance.innerText = "R" + balance;
    if (balance < 0) {
        // we 're in the rebeccapurple!
        remainingBalance.classList.remove("gray");
        remainingBalance.classList.add("rebeccapurple");
    } else {
        // we're in the gray!
        remainingBalance.classList.remove("rebeccapurple");
        remainingBalance.classList.add("gray");
    }
}

// Build a function that will add a new expense
// to the expense array and display it in the app
function addExpense(event) {
    console.log("addExpense fired!");
    event.preventDefault();
    let name = nameInput.value;
    let amount = parseInt(amountInput.value);
    let expense = {
        name: name,
        amount: amount
    };
    expenses.push(expense);
    // Add the new expense to the app
    let newExpense = document.createElement("p");
    newExpense.innerText = expense.name + ": R" + expense.amount;
    expenseList.appendChild(newExpense);
    updateExpenseTotal();
}

addExpenseButton.onclick = addExpense;

function updateExpenseTotal() {
    expenseTotal = 0;
    for(let i = 0; i < expenses.length; i++) {
        expenseTotal = expenseTotal + expenses[i].amount;
    }
    totalExpenses.innerText = "R" + expenseTotal;
    updateBalance();
}
