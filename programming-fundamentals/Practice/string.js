// 1. Letter by Letter
let word = "supercalifragilisticexpialidocious";
for (letter of word) {
  console.log(letter); // Print each letter of the word
}

// 2. Count the letter A
let phrase =
  "During our amazing Alaska adventure, Aaliyah and i saw a vast array of captivating animals.";
count = 0;
for (letter of phrase) {
  // iterating through each character of the string from beginning to end
  if (letter === "a" || letter === "A") {
    // checking for a or A
    count++; // counts number of a or A found
  }
}
console.log(count);

// 3. Yell It!
let quietMessage = "look out behind you";
let allCaps = quietMessage.toUpperCase();
console.log(allCaps);

// 4. Check the Keyword "secret"
let sentence1 = "It was a secret that only a select few were privy to.";
let sentence2 = "The hidden compartment contained valuable documents.";
let sentence3 =
  "Secret operations were carried out under the cover of darkness.";
let sentence4 =
  "The old woman quietly mumbled, 'Those cretins will never find my hidden treasure.'";

function checkKeyWord(str) {
   let words = str.toLowerCase();
   if (words.includes('secret')) {
      console.log('Keyword Found');
   } else {
      console.log('Keyword missing');
   }
}

checkKeyWord(sentence1);
checkKeyWord(sentence2);
checkKeyWord(sentence3);
checkKeyWord(sentence4);


// 5. Shorten a tweet
let tweet1 = "Just enjoyed a fantastic coffee!";
let tweet2 = "Learning JavaScript is fun!";
let tweet3 =
  "The weather today is absolutely beautiful, perfect for a walk in the park.";
let tweet4 =
  "Excited to announce that our team has successfully launched the new project! It took a lot of hard work and dedication, and we're incredibly proud of what we've accomplished. More details coming soon, stay tuned for updates and behind-the-scenes content.";

function tweetLog(tweet) {
   if (tweet.length <= 20) {
      console.log(tweet);
   } else {
      console.log(tweet.slice(0, 17) + "...")
   }
}
tweetLog(tweet1);
tweetLog(tweet2);
tweetLog(tweet3);
tweetLog(tweet4);


// 6. Sentense with Template Literal
let name = "YourName";
let favoriteFood = "tacos";
let numPets = 2;

console.log(`My name is ${name}. I love ${favoriteFood}. I have ${numPets}.`);
