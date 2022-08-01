
    let expenses = [];
    let monthlyIncome = 0;
    let expenseTotal = 0; 
    let balance = 0;

    let monthlyBudget = document.getElementById("monthly_budget");
    let incomeInput = document.getElementById("income_input");
    let updateBudgetButton = document.getElementById("update_budget_button");
    let nameInput = document.getElementById("name_input");
    let amountInput = document.getElementById("amount_input");
    let addExpenseButton = document.getElementById("add_expense_button");
    let expenseList = document.getElementById("expense_list");
    let totalExpenses = document.getElementById("total_expenses");
    let remainingBalance = document.getElementById("remaining_balance");

    function updateBudget(event) {
        event.preventDefault();
        console.log("updateBudget fired!");
        monthlyIncome = parseInt(incomeInput.value);
        monthlyBudget.innerText = "R" + monthlyIncome;
        updateBalance();
    }

    updateBudgetButton.onclick = updateBudget;

    function updateBalance() {
        balance = monthlyIncome - expenseTotal;
        remainingBalance.innerText = "R" + balance;
        if (balance < 0) {
        
            remainingBalance.classList.remove("green");
            remainingBalance.classList.add("red");
        } else {
        
            remainingBalance.classList.remove("red");
            remainingBalance.classList.add("green");
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
    
        let newExpense = document.createElement("R");
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