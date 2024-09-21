let currentBalance = 1000.00;
let savingsBalance = 5000.00;

function openTransactionForm(accountType) {
    document.getElementById('transaction-form').style.display = 'flex';
    document.getElementById('account').value = accountType;
}

function closeTransactionForm() {
    document.getElementById('transaction-form').style.display = 'none';
}

function addTransaction() {
    const accountType = document.getElementById('account').value;
    const type = document.getElementById('type').value;
    const amount = parseFloat(document.getElementById('amount').value);
    
    if (type === "Deposit") {
        if (accountType === "Current") {
            currentBalance += amount;
        } else {
            savingsBalance += amount;
        }
    } else {
        if (accountType === "Current") {
            currentBalance -= amount;
        } else {
            savingsBalance -= amount;
        }
    }

    updateBalances();
    addTransactionToList(accountType, type, amount);
    closeTransactionForm();
}

function updateBalances() {
    document.getElementById('current-balance').innerText = currentBalance.toFixed(2);
    document.getElementById('savings-balance').innerText = savingsBalance.toFixed(2);
}

function addTransactionToList(accountType, type, amount) {
    const transactionList = document.getElementById('transaction-list');
    const li = document.createElement('li');
    li.textContent = `${type}: $${amount.toFixed(2)} from ${accountType} on ${new Date().toLocaleDateString()}`;
    transactionList.prepend(li);
}