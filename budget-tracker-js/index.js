const calculate_button = document.querySelector('#addBudgetButton');
const add_expense_button = document.querySelector('#addExpenseButton');
var budget_input = document.querySelector('#budgetInput');
var expense_value_input = document.querySelector('#expenseValue');
var expense_name_input = document.querySelector('#expenseName');
const main_table_body = document.querySelector('#main-table-body');


var overall_expenses = document.querySelector('#overallExpenses')
var overall_budget = document.querySelector('#overallBudget');
console.log(expense_value_input);
var balance = document.querySelector('#balance');

var overallExpensesValue = overall_expenses.value;

// Main table UI
class MainTableUI {

    static updateBudget(newBudget){
        overall_budget.textContent = newBudget;
    }

    static updateExpenses(newExpenses){
        overallExpensesValue += newExpenses
        overall_expenses.textContent = overallExpensesValue;
    }

    static updateBalance(){
        balance.value = 
    }

}

// Add Budget
calculate_button.addEventListener('click', function() {

    const budgetValue = budget_input.value;
    // Validate Budget is number
    if(validateNumber(budget_input)){
        // add the budgetvalue to the main table
        //overall_budget.textContent = budgetValue;
        MainTableUI.updateBudget(budgetValue);
        MainTableUI.updateBalance();
    }

});

// Add Expense
add_expense_button.addEventListener('click', function(){

    const expenseValue = expense_value_input.value;
    const expenseName = expense_name_input.value;

    if(validateNumber(expense_value_input) && expenseName != ''){
        MainTableUI.updateExpenses(expenseValue);
        MainTableUI.updateBalance();
        clearField(expense_name_input);
    }
})

// Validate the budget is a number
function validateNumber(num) {
    if(numAsFloat = parseFloat(num.value)){
        // clear the budget input section
        clearField(num);
        return true;
    } else {
        alert("please enter a valid number");
        // clear the budget input section
        clearField(num);
        return false;
    }
}

function clearField(field){
    field.value = '';
}
