using System.ComponentModel;
using ClassesExercise.Classes;

var bankAccount = new BankAccount("Gregory", .1);

Console.WriteLine(bankAccount);

// Deposit into account
bankAccount.Deposit(100);

try
{
    bankAccount.Deposit(-100);
}
catch (ArgumentOutOfRangeException error)
{
    Console.WriteLine(error.Message);
}
Console.WriteLine(bankAccount);

// Calling the ToString() method
Console.WriteLine(bankAccount);

//Testing with a negative deposit amount
bankAccount.Deposit(-100);

Console.WriteLine(bankAccount);

//withdra from the account
bankAccount.WithDraw(50);

// Console.WriteLine(bankAccount);

// //Testing with insufficient funds
// bankAccount.WithDraw(200);
try
{
    bankAccount.WithDraw(200);
}
catch (ArgumentOutOfRangeException e)
{
    Console.WriteLine(e.ToString());
}

Console.WriteLine(bankAccount);

// // Yield interest
// bankAccount.YieldInterest();

// Console.WriteLine(bankAccount);

// // Testing with a zero balance
// bankAccount.WithDraw(49.50);

// Console.WriteLine(bankAccount);

// bankAccount.YieldInterest();

// Console.WriteLine(bankAccount);
