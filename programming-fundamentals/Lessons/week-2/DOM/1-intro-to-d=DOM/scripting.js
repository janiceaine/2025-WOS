// What is an Object?

//An Object has properties and methods
// "state and behavior"

const guitar = {
    brand: 'Fender',
    model: 'Telecaster',
    color: 'Blonde',
    strum: function () {
        console.log('strumming');
        
    }
};

console.log(guitar);

console.log(guitar.model);
console.log(guitar['model']);

guitar.color = red;
console.log(guitar.color);

guitar.strum();
guitar['strum']();



