console.log('All wired up!');

const nameInputValue = document.querySelector('#username'); // Get the input element for the username
const classSelectedValue = document.querySelector('#class'); // Get the select element for the class


function enterChat() {
    const nameInput = nameInputValue.value; // Get the value of the username input
    const classSelected = classSelectedValue.value; // Get the value of the selected class

    alert(`${nameInput} the ${classSelected} enters the realm!`) // Alert the user with their name and class
};




