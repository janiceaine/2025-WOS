1;
const greet = (name) => "Hello " + name + "!";

2;
const add = (x, y) => x + y;

3;
const getAnswer = () => 42;

4;
const squareAndAddTen = (n) => n * n + 10;

5;
const isEven = (n) => n % 2 === 0;

6;
const describeColor = (color) => {
  return `${color.toUpperCase()} has ${color.length} letters.`;
};

7(Bonus);
const makeGreeter = (greeting) => (name) => {
  return `${greeting}, ${name}!`;
};
