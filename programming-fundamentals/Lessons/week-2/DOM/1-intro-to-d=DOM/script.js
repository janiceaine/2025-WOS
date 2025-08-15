console.log('all hooked up');

function whatIsThis(elem) {
    console.log(elem); 
}

function hide(elem) {
    elem.remove();
}

function darkMode() {
    document.body.style.backgroundColor = '#252525';
    document.body.style.color = 'whitesmoke';
}

const heading = document.querySelector('h1');
console.log({ heading });

/**
 * 
 * @param {Html} elem 
 */
function orangeText(elem) {
    elem.style.color = 'orange';
}

function orangeText2(elem) {
    heading.style.color = 'rebeccapurple';
}
