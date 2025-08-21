using System.Text;

class MorseTranslator
{
    static void Main()
    {
        // Declaring the dictionary
        var morseCodeMap = new Dictionary<char, string>()
        {
            { 'A', ".-" },
            { 'B', "-..." },
            { 'C', "-.-." },
            { 'D', "-.." },
            { 'E', "." },
            { 'F', "..-." },
            { 'G', "--." },
            { 'H', "...." },
            { 'I', ".." },
            { 'J', ".---" },
            { 'K', "-.-" },
            { 'L', ".-.." },
            { 'M', "--" },
            { 'N', "-." },
            { 'O', "---" },
            { 'P', ".--." },
            { 'Q', "--.-" },
            { 'R', ".-." },
            { 'S', "..." },
            { 'T', "-" },
            { 'U', "..-" },
            { 'V', "...-" },
            { 'W', ".--" },
            { 'X', "-..-" },
            { 'Y', "-.--" },
            { 'Z', "--.." },
            { ' ', " / " },
        };

        // Prompting user for input
        Console.WriteLine($"Enter a word or phrase to translate to Morse code: ");
        string word = (Console.ReadLine() ?? "").ToUpper();
        string input = word;

        //Printing the morsecode
        string morseTranslator = TranslateToMorse(morseCodeMap, input);
        Console.WriteLine($"Morse Code : {morseTranslator}");

        static string TranslateToMorse(Dictionary<char, string> morseCodeMap, string input)
        {
            // To lookup its corresponding morse code string
            var s = new StringBuilder(); // Using string builder inorder to change the input string
            foreach (char letter in input)
            {
                if (morseCodeMap.TryGetValue(letter, out string? morseCode)) // Translating the input character letter into morse code
                {
                    s.Append(morseCode + " "); // Adding the morse code to the string with a space
                }
                else
                {
                    s.Append("? "); // Unkknown values will be printed out as '?' with a space
                }
            }

            // the morse code translation, as a string with no white spaces
            return s.ToString().Trim();
        }
    }
}
