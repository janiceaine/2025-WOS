/*
1. Declare and Initialize Temperatures Array:
- Declare an int array called dailyTemperatures.
- Initialize this array with at least 7 integer temperatures (representing days of the week). Make sure some temperatures are warm (e.g., above 70°F) and some are cold (e.g., below 50°F).
- Example:

int[] dailyTemperatures = { 72, 65, 80, 45, 58, 70, 50 };
*/

int[] dailyTemperatures = [72, 65, 80, 45, 58, 70, 50];

/*
2. Calculate and Print Total and Average Temperature:
- Use a for loop to iterate through the dailyTemperatures array.
- Inside the loop, add each temperature to a running total variable.
- After the loop, calculate the average temperature. Remember to consider type casting if we're dividing integers to get a decimal result!
- Use Console.WriteLine with string interpolation to print both the total sum of all temperatures and the average temperature.
Example Output:

Total Temperature: 440
Average Temperature: 62.85
*/
int totalTemp = 0;
foreach (int temperature in dailyTemperatures)
{
    totalTemp += temperature;
}

int averageTemp = totalTemp / dailyTemperatures.Length;

Console.WriteLine($"Total Temperature: " + totalTemp + " \nAverage Temperature: " + averageTemp);

/*
3. Count Warm and Cold Days:
- Declare two int variables: warmDaysCount and coldDaysCount, initialized to 0.
- We'll define a "warm day" as a temperature of 70°F or higher, and a "cold day" as anything below 70°F.
- Use a foreach loop to iterate through the dailyTemperatures array.
- Inside the loop, use an if statement to check if the current temperature is a warm day.
- - If it's warm, increment warmDaysCount. Otherwise, increment coldDaysCount.
- After the loop, print both warmDaysCount and coldDaysCount using Console.WriteLine and string interpolation.
- Example Output:

Number of Warm Days: 3
Number of Cold Days: 4
*/

int warmDaysCount = 0;
int coldDaysCount = 0;

foreach (int temperature in dailyTemperatures)
{
    if (temperature >= 70)
    {
        warmDaysCount++;
    }
    else
    {
        coldDaysCount++;
    }
}
Console.WriteLine($"Number of Warm Days: {warmDaysCount} \nNumber of Cold Days: {coldDaysCount}");

/*
4. Display Temperatures with Status:
- Use another for loop to iterate through the dailyTemperatures array.
- For each temperature, use Console.WriteLine and string interpolation to print the temperature along with its status ("Warm Day" or "Cold Day").
- Example Output:

Day 1 Temperature: 72°F - Warm Day
Day 2 Temperature: 65°F - Cold Day
Day 3 Temperature: 80°F - Warm Day
... and so on
*/
for (int i = 0; i <= dailyTemperatures.Length - 1; i++)
{
    int dayCount = i;
    dayCount++;

    if (dailyTemperatures[i] >= 70)
    {
        Console.WriteLine($"Day {dayCount} Temperature: {dailyTemperatures[i]} - Warm Day");
    }
    else
    {
        Console.WriteLine($"Day {dayCount} Temperature: {dailyTemperatures[i]} - Cold Day");
    }
}

// Collaborated with Ursula
