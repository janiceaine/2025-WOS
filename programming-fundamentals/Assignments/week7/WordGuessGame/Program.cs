class Program
{
    static void Main()
    {
        Console.WriteLine("🎮 Welcome to the Top Rated WORD GUESS GAME! 🎮");

        var secretWordList = new List<string>()
        {
            "book",
            "trail",
            "amphibian",
            "vocals",
            "window",
        };
        var rand = new Random();
        string secretWord = secretWordList[rand.Next(secretWordList.Count)];
        var wordChars = new List<char>(secretWord);

        Console.Write($"Guess the Word: ");
        string guessedWord = Console.ReadLine() ?? "";

        if (guessedWord == secretWord)
        {
            Console.WriteLine($"🏆 Congratulations, You win! 🏆");
        }
        else
        {
            Console.WriteLine($"That is not the word. 😢");
            Console.WriteLine(
                "\r\nYou are now tasked with guessing the correct word by spelling it out letter by letter.\r\nLet the Games begin!"
            );

            var correctGuesses = new List<char>();
            var incorrectGuesses = new List<char>();
            int guessLimit = 7;
            int incorrectGuessCount = 0;

            // Initialize correct guesses with underscores
            for (int i = 0; i < wordChars.Count; i++)
                correctGuesses.Add('_');

            while (!IsWordGuessed(correctGuesses) && incorrectGuessCount < guessLimit)
            {
                DisplayGameState(correctGuesses, incorrectGuesses, incorrectGuessCount, guessLimit);

                char inputChar = GetPlayerGuess();

                if (CheckLetter(inputChar, wordChars, correctGuesses))
                {
                    Console.WriteLine($"Correct Guess! Look at you!");
                }
                else
                {
                    incorrectGuesses.Add(inputChar);
                    incorrectGuessCount++;
                    Console.WriteLine($"Incorrect Guess! Do better!");
                }
            }

            if (!IsWordGuessed(correctGuesses))
            {
                Console.WriteLine("Sorry, You lost, Try again after taking a walk!");
                Console.WriteLine($"Correct word was: {secretWord}");
            }
            else
            {
                Console.WriteLine($"CONGRATULATIONS! 🏆 HERE IS OUR WORLD CHAMPION!");
            }
        }
    }

    // Display current game state
    static void DisplayGameState(
        List<char> correctGuesses,
        List<char> incorrectGuesses,
        int incorrectGuessCount,
        int guessLimit
    )
    {
        Console.WriteLine($"\nCorrect Guesses: {String.Join("", correctGuesses)}");
        Console.WriteLine($"Incorrect Guesses: {incorrectGuessCount} / {guessLimit}");
        Console.WriteLine($"Incorrect Letters: [{String.Join(", ", incorrectGuesses)}]");
    }

    // Prompting the player and get a valid single character guess
    static char GetPlayerGuess()
    {
        Console.WriteLine($"Guess a Letter: ");
        string input = Console.ReadLine() ?? "";

        while (input.Length != 1)
        {
            Console.WriteLine("Invalid input!");
            input = Console.ReadLine() ?? "";
        }

        return char.ToLower(char.Parse(input));
    }

    // Checking if the guessed letter is in the word
    static bool CheckLetter(char inputChar, List<char> wordChars, List<char> correctGuesses)
    {
        bool correct = false;
        for (int i = 0; i < wordChars.Count; i++)
        {
            if (inputChar == wordChars[i])
            {
                correctGuesses[i] = wordChars[i];
                correct = true;
            }
        }
        return correct;
    }

    // Checking if the dashes are all fiiled
    static bool IsWordGuessed(List<char> correctGuesses)
    {
        return !correctGuesses.Contains('_');
    }
}
// Collaborated and consulted Ms. Janis.
