using BankAccountAPP.Classes;

var bankAccount = new BankAccount(5000);

Console.WriteLine(bankAccount);

bankAccount.Deposit(250);
Console.WriteLine(bankAccount);

bankAccount.Withdraw(3000);
Console.WriteLine(bankAccount);

bankAccount.Deposit(-400);
Console.WriteLine(bankAccount);

bankAccount.Withdraw(6000);
Console.WriteLine(bankAccount);


// bankAccount._balance = 1000000; not accessible due to protection level