console.log("PIXELPUNKS CLASSIC GAMES!");

const searchInput = document.querySelector("#search-input");

function searchAlert() { // shows an alert containing the value of the search input
  const searchTerm = searchInput.value;
  alert(`Searching for ${searchTerm}...`);
}

function cartItems(id) { // increases the cart number when any of the 'Add to cart' buttons or the cart icon button is clicked is clicked for specific hero
  const itemCountSpan = document.querySelector(id);

  itemCountSpan.innerText++;
}



const images = ["./images/blasterrex.webp", "./images/blasterrex-2.webp"];
let currentIndex = 0;

const imageElement = document.querySelector("#images");

function showImage(index) { // displays the image based on the index
  imageElement.src = images[index];
  imageElement.alt = `blasterrex-${index + 1}`;
}

function nextImage() { // shows the next image in the array when the right arrow is clicked
  currentIndex = 1;
  showImage(currentIndex);
}

function prevImage() { // shows the previous image in the array when the left arrow is clicked
  currentIndex = 0;
  showImage(currentIndex);
}
