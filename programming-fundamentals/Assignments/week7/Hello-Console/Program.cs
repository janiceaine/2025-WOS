Console.WriteLine($"What's your name?");
string? Name = Console.ReadLine();
Console.WriteLine($"Hello, " + Name + "!");

Console.WriteLine($"There are " + Name?.Length + " characters in your name.");

DateTime currentTime = DateTime.Now;

Console.WriteLine($"Today is {currentTime.ToString("dddd, MMMM dd, yyyy")}");
Console.WriteLine($"The current time is {currentTime.ToString("h:mm tt")}");
Console.WriteLine(@"""Be excellent to eachother."" – Bill and Ted");


// Collaborated with Ms. Ursula
