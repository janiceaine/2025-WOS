/*
    Objects in JvaScript are like objectds in real life, with characteristics and properties.
    - Characteristics are called properties
    - Actions are methods. methods are functions that belong to an object.
    - Objects are a collection of key-value pairs.
    - Objects can be created using object literal notation or the Object constructor.
    - Objects can be nested, meaning an object can contain other objects.
    - Objects can be used to store and organize data in a structured way.
    - Objects can be accessed using dot notation or bracket notation.
    - Objects can be used to model real-world entities and their relationships.

    *idomatic* - the way we do things in JavaScript
*/

// Creating an Object using Object Literal Notation (key-value pairs)

let ball = {
    color: 'red',
    shape: 'round',
    canBounce: true,
    bounce: function() {// Anonymous function
        if (this.canBounce) {
            console.log('bouncing..');
        } else {
            console.log('no can do bro');
    
        }
    }
};
console.log(ball);

/* Get */
// dot notation
console.log(ball.shape);

// bracket notation
console.log(ball['shape']);

let key = 'shape';
console.log(ball.key);
console.log(ball[key]);


/* Set */
// dot notation
ball.color = 'blue';
console.log(ball.color);

// bracket notation
ball['canBounce'] = false;

/* invoke a method */
ball.bounce(); // using dot notation to invoke the method

ball['bounce'](); // using bracket notation to invoke the method


