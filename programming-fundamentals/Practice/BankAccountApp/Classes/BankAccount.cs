using System;
using System.Runtime.InteropServices;

namespace BankAccountAPP.Classes;

public class BankAccount
{
    private decimal _balance;

    public string? AccountNumber { get; private set; }

    public decimal Balance { get; }

    public BankAccount(decimal initialBalance)
    {
        AccountNumber = Guid.NewGuid().ToString();
        _balance = initialBalance;

        Console.WriteLine(
            $"Account: {AccountNumber} created with initial balance: {initialBalance:C}.\n"
        );
    }

    // Default string representation of the BankAccount object
    public override string ToString()
    {
        return $"Account balance: {_balance}";
    }

    public void Deposit(decimal amount)
    {
        if (amount > 0)
        {
            _balance += amount;
            Console.WriteLine($"Deposited {amount:C}. New balance: {_balance:C}\n");
            LogTransaction("Deposit", amount);
        }
        else
        {
            Console.WriteLine($"Deposit amount must be positive. Rejected deposit: {amount:C}\n");
        }
    }

    public void Withdraw(decimal amount)
    {
        if (amount > 0 && amount < _balance)
        {
            _balance -= amount;
            Console.WriteLine($"Withdrew {amount:C}. New balance: {_balance:C}\n");
            LogTransaction("Withdraw", amount);
        }
        else
        {
            Console.WriteLine(
                $"Insufficient funds, withdraw amount must be positive and less than account balance.\n"
            );
        }
    }

    private void LogTransaction(string type, decimal amount)
    {
        Console.WriteLine($"[LOG] {type} of {amount:C} executed on account {AccountNumber}\n");
    }
}
