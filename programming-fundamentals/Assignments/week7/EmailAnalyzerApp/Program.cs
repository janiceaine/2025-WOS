/*
    1. Sample Email Subjects Array:
        Declare a string[] array called emailSubjects.
        Initialize this array with these 20 email subjects:

*/

string[] emailSubjects =
{
    "Regarding your recent order #123456789 - Delivery Update and Tracking Information",
    "Question about billing and invoice for last month's services",
    "[IMPORTANT] Your account security alert: Unusual activity detected - URGENT action required",
    "Meeting rescheduled to 3 PM EST - please confirm ASAP",
    "Follow-up on support ticket #7890 regarding software installation issue",
    "Weekly Report for Q2 Performance Review - urgent attention needed by EOD",
    "Quick question about the new feature",
    "Feedback on new feature rollout - please provide your thoughts",
    "Your subscription renewal notice for premium services",
    "Product inquiry - need info soon on model XYZ",
    "ASAP: Critical bug fix deployment details",
    "Request for vacation approval",
    "Urgent: System maintenance notification",
    "Reminder: Project deadline approaching",
    "Customer complaint regarding service outage - ASAP response",
    "New policy update for remote work guidelines - please read",
    "Your monthly usage report is now available",
    "URGENT: Database migration schedule confirmed",
    "Inquiry about partnership opportunities",
    "General feedback and suggestions for improvement",
};

/*
    2. Loop and Analyze Each Subject:
        1. Use a loop (for or foreach is suitable here) to iterate through each string in your emailSubjects array.
        2. Inside the loop, for each subject:
            a. Character Count:
                - Get the character count of the current subject line.
                - Print the subject along with its character count using string interpolation.
                - Example Output: Subject: "Weekly Report" (13 Characters)
            b. Long Subject Line Counter:
                - Keep track of how many subjects are longer than 50 characters.
                - After the loop, print the total count of long subject lines.
                - Example Output: Long Subject Line Count: 6
            c. Longest Subject Line Tracker:
                - Keep track of the longest subject line encountered so far.
                - After the loop, print the full text of the longest subject line and its character count.
                - Example Output: Longest Subject Line: Re: Budget Meeting Notes – Now With Supercalifragilisticexpialidocious-Level Detail (87 characters)
*/
int numOfSubj = 0;
string longestSubj = emailSubjects[0];
foreach (string email in emailSubjects)
{
    int charCount = email.Length;
    Console.WriteLine($"Subject: \"{email}\" ({charCount} Characters)");
    if (charCount > 50)
    {
        numOfSubj++;
    }

    if (email.Length > longestSubj.Length)
    {
        longestSubj = email;
    }
}

Console.WriteLine($"Long Subject Line Count: {numOfSubj}");
Console.WriteLine($"Longest Subject Line: {longestSubj} ({longestSubj.Length} characters)");

/*
    3. Use Console.WriteLine() with String Interpolation:</strong >
        - Ensure all output to the console uses Console.WriteLine() and string interpolation ($).
*/
