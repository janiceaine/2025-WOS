using System.ComponentModel.DataAnnotations;

var shoppingList = new List<string>(); // An empty list to hold strings
var ages = new List<int>(); // An empty list to hold integers
var letters = new List<char>(); // An empty list to hold char

var fruits = new List<string>() { "Apple", "Banana", "Cherry" };
var primeNumbers = new List<int>() { 2, 3, 5, 7, 11 };

fruits.Add("Grapes");
fruits.Insert(1, "Pear");
fruits.Remove("Cherry");

foreach (var fruit in fruits)
{
    Console.WriteLine(fruit);
}

var numbers = new List<int>() { 10, 20, 30, 40, 50 };

Console.WriteLine($"First number: {numbers[0]}"); // Output: 10
Console.WriteLine($"Last number: {numbers[numbers.Count - 1]}"); // Output: 50 or use ^1 instead of -1

numbers[1] = 25; // Modify an element
Console.WriteLine($"Modified second number: {numbers[1]}"); // Output: 25

Console.WriteLine($"Total numbers in list: {numbers.Count}"); // Output: 5

// Attempting to access an index out of bounds will cause a runtime error (ArgumentOutOfRangeException)
// Console.WriteLine(numbers[5]); // This would crash our program!
