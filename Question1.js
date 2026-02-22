function createBankAccount(initialBalance = 0){
    let balance = initialBalance;
    let transactionHistory = [];

    if(initialBalance < 0) {
        balance = 0;
        transactionHistory.push("INvalid initial balance. set to 0.");
    }

    function deposit(amount){
        if(typeof amount !== "number" || amount <= 0){
            return "Deposit amount must be a Positive number.";
        }
        balance += amount;
        transactionHistory.push(`Deposited: ${amount}`);
        return `Deposit successful. Current balance: ${balance}`;
    }

    function withdraw(amount){
        if(typeof amount !== 'number' || amount <= 0) {
            return "Withdrawal amount must be a positive number.";
        }
        if(amount > balance){
            return "Insufficient funds.";
        }
        balance -= amount;
        transactionHistory.push(`Withdrew: ${amount}`);
        return `Withdrawal successful. Current balance: ${balance}`;
    }
    function getBalance(){
        return balance;
    }
    function getTransactionHistory(){
        return [...transactionHistory];
    }
    return{
        deposit,
        withdraw,
        getBalance,
        getTransactionHistory
    };
}

const account = createBankAccount(100);

console.log(account.deposit(50));
console.log(account.withdraw(30));
console.log(account.withdraw(500));
console.log(account.deposit(-20));
console.log(account.getBalance());
console.log(account.getTransactionHistory());