using System.Globalization;

namespace ClassesExercise.Classes;

public class BankAccount
{
    public string? Owner { get; set; }
    public double Balance { get; set; }
    public double InterestRate { get; set; }

    public BankAccount(string owner, double interestRate, double balance = 0)
    {
        Owner = owner;
        InterestRate = interestRate;
        Balance = balance;
    }

    public override string ToString()
    {
        var balance = Balance.ToString("C", CultureInfo.CurrentCulture);
        return $"Owner: {Owner}, Balance: {balance}";
    }

    public void Deposit(double amount)
    {
        if (amount > 0)
        {
            var formattedAmount = amount.ToString("C", CultureInfo.CurrentCulture);
            Console.WriteLine($"Depositing {formattedAmount} to account.");
            Balance += amount;
        }
        else
        {
            throw new ArgumentOutOfRangeException(
                nameof(amount),
                "deposit amount must be Positive."
            );
        }
    }

    public void WithDraw(double amount)
    {
        if (Balance >= amount)
        {
            var formattedAmount = amount.ToString("C", CultureInfo.CurrentCulture);
            Console.WriteLine($"Withdrawing {formattedAmount} from account.");
            Balance -= amount;
        }
        else
        {
            Balance -= 5;
            throw new ArgumentOutOfRangeException(
                nameof(amount),
                "Insufficient funds: Charging a $5 fee."
            );
        }
    }

    public void YieldInterest()
    {
        if (Balance > 0)
        {
            Balance += Balance * InterestRate;
        }
        else
        {
            Console.WriteLine("Insufficient funds: No interest yielded.");
        }
    }
}
