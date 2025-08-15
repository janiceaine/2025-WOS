function increasedLikes(id) {
    let likeNumber = document.querySelector(id); // Select the element with the given id
    if (!likeNumber) {
        console.error(`Element with id ${id} not found.`); // Check if the element exists
        return;
    }
    if (isNaN(likeNumber.textContent)) {
        console.error(`Content of element with id ${id} is not a number.`); // Check if the content is a number
        return;
    }
    console.log('Incrementing likes for:', id); // Log the id being incremented
    
    // Increment the like number
    likeNumber.textContent++; // Increment the text content of the element
    console.log(`New like count for ${id}:`, likeNumber.textContent); // Log the new like count
}





