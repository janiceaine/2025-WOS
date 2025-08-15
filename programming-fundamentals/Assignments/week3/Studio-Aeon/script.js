const joinButton = document.querySelector('.join-btn');
const emailValueInput = document.querySelector('#email-input');

function removeJoinButton() { // Removes Join Button when clicked
    joinButton.remove();
}
console.log('Join Button removed');



function emailValue() { // function for preorder email alert
    const emailInput = emailValueInput.value; 

    // Checkinng if input is empty
    if (!emailInput) {
      alert("Please enter your email before preordering.");
      emailValueInput.focus(); // Put cursor back in the field
      return; // Stop the function here
    }

    // Checking for basic email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert(`Your Preorder Email: ${emailInput}`);   
}
console.log('Returns alert with input email');



function amps(id) { // increases the number of likes when AMP button is clicked for specific hero  
    const ampsCountSpan = document.querySelector(id);

    ampsCountSpan.innerText++;
}
console.log('Amp count increased');




