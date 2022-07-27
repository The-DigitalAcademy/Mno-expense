
let expenses = []; 
let monthlyIncom = 0; 
let expenseTotal = 0; 
let balance = 0;


let monthlySalaryBudget = document.getElementById("monthly_Salary_budget");
let incomeInput = document.getElementById("income_input");
let updateBudgetButton = document.getElementById("update_budget_button");
let nameInput = document.getElementById("name_input");
let amountInput = document.getElementById("amount_input");
let addExpenseButton = document.getElementById("add_expense_button");
let expenseList = document.getElementById("expense_list"); // DIV
let totalExpenses = document.getElementById("total_expenses");
let remainingBalance = document.getElementById("remaining_balance");


function updateBudget(event) {
    event.preventDefault();
    console.log("updateBudget fired!");
    monthlyIncom = parseInt(incomeInput.value);
    monthlySalaryBudget.innerText = "R" + monthlyIncom;
    updateBalance();
}


updateBudgetButton.onclick = updateBudget;


function updateBalance() {
    balance = monthlyIncom - expenseTotal;
    remainingBalance.innerText = "R" + balance;
    if (balance < 0) {
        
        remainingBalance.classList.remove("gray");
        remainingBalance.classList.add("rebeccapurple");
    } else {
        
        remainingBalance.classList.remove("rebeccapurple");
        remainingBalance.classList.add("gray");
    }
}


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
