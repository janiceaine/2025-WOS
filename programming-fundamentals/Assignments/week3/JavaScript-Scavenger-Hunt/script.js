console.log("Connected!"); // This line is to check if the script is connected properly

let heading = document.querySelector('h1'); // Selects the first h1 element in the document
console.log(heading);


let paragraphs = document.querySelectorAll('p'); // Selects all p elements in the document
console.log(paragraphs);


let selectButton = document.querySelector('#contact-button'); // Selects the button with the id 'contact-button'


function countparagraphs () { // Function to count the number of paragraphs
    let count = 0;
    for (p of paragraphs) { // Iterates through each paragraph element
        count++; // Increments the count for each paragraph
    }
    return count;
}
console.log('Number of paragraphs:', countparagraphs()); // Logs the number of paragraphs to the console


function paragraphsText() { // Function to get the text content of all paragraphs
    let allParagraphText = '';
    for (p of paragraphs) { // Iterates through each paragraph element
        allParagraphText += p.innerText + ' '; // Appends the text content of each paragraph to the string
    }
    return allParagraphText.trim();
}
console.log('All paragraph text:', paragraphsText()); // Logs the concatenated text of all paragraphs to the console


function classElemHighlight() { // Function to find all elements with the class 'highlight'
    let elements = [];
    let classElements = document.querySelectorAll('.highlight');
    for (let elem of classElements) { // Iterates through each element with the class 'highlight'
        elements.push(elem); // Adds each element to the array
    }
    return elements;
}
console.log('Elements with class "highlight":', classElemHighlight()); // Logs all elements with the class 'highlight' to the console



let firstSelectElem = document.querySelector('section'); // Selects the first section element in the document
console.log(firstSelectElem);

let AllSelectElem = document.querySelectorAll('section'); // Selects all section elements in the document
console.log(AllSelectElem);

console.log('The first section element returns only the first section elements while the second section element returns all section elements.');


let spanDIvs = document.querySelectorAll("div span"); // Selects all span elements that are direct children of div elements
console.log(spanDIvs);


let directChild = document.querySelector('nav > ul'); // Selects the direct child ul of the nav element
console.log(directChild);


let adjacentSibling = document.querySelector('p + button'); // Selects the first button that is an adjacent sibling of a paragraph
console.log(adjacentSibling.innerText);


let generalSiblings = document.querySelectorAll('h2 ~ p'); // Selects all paragraphs that are siblings of h2 elements


let mixedSelectors = document.querySelector('aside section p.highlight'); // Selects the first p element with the class 'highlight' that is a descendant of an aside section
console.log(mixedSelectors);

let chainSelectors = document.querySelectorAll('aside .note'); // Selects all elements with the class 'note' that are descendants of an aside element
chainSelectors.forEach(chainSelector => { // Iterates through each selected element
    console.log(chainSelector.innerText);
});