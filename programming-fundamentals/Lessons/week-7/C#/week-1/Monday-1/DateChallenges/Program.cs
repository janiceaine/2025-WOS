Console.WriteLine("--- Current Date and Time Examples ---");

// Get the current date and time
DateTime currentTime = DateTime.Now;

// Example 1: Default ToString() output (varies by region)
Console.WriteLine($"Default: {currentTime}");

// Example 2: Short date format (e.g., 7/2/2025)
Console.WriteLine($"Short Date: {currentTime.ToString("d")}");

// Example 3: Long date format (e.g., Wednesday, July 2, 2025)
Console.WriteLine($"Long Date: {currentTime.ToString("D")}");

// Example 4: Custom format (YYYY-MM-DD HH:MM:SS)
Console.WriteLine($"Custom Format 1: {currentTime.ToString("yyyy-MM-dd HH:mm:ss")}");

// Example 5: Custom format with AM/PM (MM/DD/YYYY HH:MM AM/PM)
Console.WriteLine($"Custom Format 2: {currentTime.ToString("MM/dd/yyyy hh:mm tt")}");

// Example 6: Just the time (e.g., 1:44 PM)
Console.WriteLine($"Just Time: {currentTime.ToString("t")}");

DateTime thePast = new DateTime(2025, 7, 2, 13, 44, 30, 123);

// Challenge 1:
// Print the current date in the format: Wednesday, 02 July 2025.
Console.WriteLine($"Challenge 1: {thePast.ToString("dddd, dd MMMM yyyy")}");

// Challenge 2:
// Print the current time in 24-hour format (e.g., 13:44).
Console.WriteLine($"Challenge 2: {thePast.ToString("HH:mm:ss")}");

// Challenge 3:
// Print the current date and time, including milliseconds (e.g., 2025-07-02 13:44:30.123).
Console.WriteLine($"Challenge 3: {thePast.ToString("yyyy-MM-dd HH:mm:ss.fff")}");

// Challenge 4:
// Print the current date and time in a sortable format (ISO 8601, e.g., 2025-07-02T13:44:30).
Console.WriteLine($"Challenge 4: {thePast.ToString("yyyy-MM-dd'T'HH:mm:ss")}");
