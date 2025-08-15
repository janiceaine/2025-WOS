/*

Arrays in JavaScript


*/

let colors = ['red', ' blue', 'yellow', 'green', 'purple'];
console.log(typeof colors);


/*

GET VALUES


*/
console.log(colors[3]);


/*

SET VALUES

*/
colors[1] = 'pink'; // change blue to pink by assigning a new value to the index
console.log(colors); // now it should print 'pink'

colors[10] = 'white'; // add a new value at index 10
console.log(colors);

console.log(colors[7]); // this will print undefined because there is no value at index 7
