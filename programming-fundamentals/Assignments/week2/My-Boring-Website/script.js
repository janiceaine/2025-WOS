/**
 * 
 * @param {HTMLDivElement} head 
 */
function changeBgColor(head) { // This function changes the background color of the header to gold
    head.style.backgroundColor = "gold";
}

/**
 * 
 * @param {HTMLDivElement} head 
 */
function revertBgColor(head) { // This function reverts the background color of the header to its original color
    head.style.backgroundColor = "rgb(55, 56, 56)";
}



function changeHeaderText() { // This function changes the header text and color when the mouse hovers over it
    const heading = document.querySelector("#header");
    heading.textContent = "Let's Goooooo!!";
    heading.style.color = "blue";
  }
  header.addEventListener("mouseover", changeHeaderText);

function revertHeaderText() { // This function reverts the header text and color when the mouse moves out
    const heading = document.querySelector("#header");
    heading.textContent = "My Boring Website";
    heading.style.color = "white";
  }
  header.addEventListener("mouseout", revertHeaderText);



function changeAsideText() { // This function changes the text of the sidebar when the mouse hovers over it
    const element = document.querySelector("#sidebar");
    element.textContent = "Fun Fact";
  }
  sidebar.addEventListener("mouseover", changeAsideText);

function changeArticleText() { // This function changes the text of the article when the mouse hovers over it
    const info = document.querySelector("#article");
    info.textContent = 'Chewbacca in "Star Wars" is based on George Lucas dog, an Alaskan Malamute named "Indiana," who also inspired "Indiana Jones."/';
  }
  article.addEventListener("mouseover", changeArticleText);



function changeBgMain() { // This function changes the background color of the main content when clicked
    const mainBg = document.querySelector("#mainContent");
    mainBg.style.backgroundColor = "blue";
  }
  mainContent.addEventListener("click", changeBgMain);




function changeTitleText() { // This function changes the title text and color when clicked
    const element1 = document.querySelector("#title");
    element1.textContent = "A Brilliant Azure Sky.";
    element1.style.color = "yellow";
  }
  title.addEventListener("click", changeTitleText);

function changeDescriptionText() { // This function changes the description text and color when clicked
    const info1 = document.querySelector("#description");
    info1.textContent = "Colossal, tempestuous clouds churned and roiled with an almost palpable energy. The sun, a blazing orb of pure power, scorched the very air, casting razor-sharp shadows that danced and writhed across the parched earth below. Every fiber of the ground vibrated with an unseen force, a primal pulse that resonated deep within.";
    info1.style.color = "white";
  }
  description.addEventListener("click", changeDescriptionText);



function changeEmoji() { // This function changes the emojis to fun faces when the mouse hovers over them
    const elem = document.querySelector("#emojis");
    elem.textContent = "😆 🥳 🤪";
  }
  emojis.addEventListener("mouseover", changeEmoji);

function revertEmoji() { // This function reverts the emojis to their original state when the mouse moves out
    const elements = document.querySelector("#emojis");
    elements.textContent = "😑 😑 😑";
  }
  emojis.addEventListener("mouseout", revertEmoji);


// const emojis = document.querySelectorAll(".emoticon");

// emojis.forEach((emoji, index) => {
//   emoji.addEventListener("mouseover", () => {
//     const funFaces = ["😆", "🥳", "🤪"];
//     emoji.textContent = funFaces[index];
//   });

//   emoji.addEventListener("mouseout", () => {
//     emoji.textContent = "😑";
//   });
// });
/* This code correspondes with the emojis code in HTML. It chanegs each emoji singularily when the cursor moves over it */


function removeButton(btn) { // This function removes the button when clicked
    btn.remove();
}
