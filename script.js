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