// Methods/Fub=nctions require a return type
using System.Diagnostics.Contracts;

static void SayHello() //PascalCase
{
    Console.WriteLine("Hello how are you doing today?");
}
SayHello();

static void SayHelloWithName(string firstName) //parameters are camelCase
{
    Console.WriteLine($"Hello, {firstName}, how are you doing today?");
}
SayHelloWithName("Kermit");

// static int GiveMeAnInt(int number)
// {
//     return number;
// }
// var pi = 3.14;
// Console.WriteLine(GiveMeAnInt(pi)); // compiler error

// call function without  named parameters must be in same order as defined declaration
static void SayHelloWithTwoParameters(string firstName, string lastName)
{
    Console.WriteLine($"Hello, {firstName} {lastName}, how are you doing today?");
}
SayHelloWithTwoParameters("Harry", "Potter");

// call function with named parameters, order does not mattter
SayHelloWithTwoParameters(firstName: "Whitney", lastName: "Houston");

//Default values
static void SayHelloWithDefault(string firstName = "buddy")
{
    Console.WriteLine($"Hey, {firstName}!");
}

// we can call it without providing any arguements and the default value will be used...
SayHelloWithDefault();

//...or we can call it with an arguement and that arguements value will be used
SayHelloWithDefault("Beyonce");

// Return
static string SayHelloWithReturn(string firstName = "buddy")
{
    return $"Hey {firstName}!";
}
string greeting;
greeting = SayHelloWithReturn();
Console.WriteLine(greeting);

string? inputLine;
do
{
    Console.WriteLine("Type something: ");
    inputLine = Console.ReadLine();
    if (inputLine != null && inputLine.Trim().Length > 0)
    {
        Console.WriteLine($"You wrote: {inputLine}");
    }
    else
    {
        Console.WriteLine("Invalid input.");
    }
} while (inputLine == null || inputLine.Trim().Length == 0);

Console.WriteLine("Type a number: ");
string NumberInput = Console.ReadLine() ?? "";

// TryParse takes two parameters: the item to be parsed and a variable you would like to output (out) to if it is successful
if (int.TryParse(NumberInput, out int parsedValue))
{
    // Notice how we used parsed value instead of a NumberInput
    Console.WriteLine($"The intger was {parsedValue}");
    Console.WriteLine(10 + parsedValue);
}

string aNumber = "7";
int converted = Convert.ToInt32(aNumber);
Console.WriteLine(14 + converted); // should print 21
string aDecimal = "3.14";
double convertDec = Convert.ToDouble(aDecimal);
Console.WriteLine(1.8 + convertDec); // should printt 4.94
