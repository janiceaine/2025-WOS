/*
JavaScript Primitive Datatypes

    numbers
    boolean
    string
    null
    undefined
*/

/*

JavaScript Reference Datatypes

    object
    array
*/

// Variable declaration
//var age = 12;
// const age = 12;
// we shall use 'let' to declare variables that can change later
// '=' is the assignment operator

// let age = 12; - age is a variable that holds the value 12
// let AGE = 12; - AGE is different from age, it is a constant variable that holds the value 12

/* 

Variable naming rules and Conventions 

RULES:
- Variable names cannot start with a number
- No spaces allowed
- Don't use keywords (like var, let, const, function, etc.)
- Use only letters, numbers, underscores (_), and dollar signs ($)


CONVENTIONS:
 - Constants are all uppercase
 - Meaningful descriptive names
 - Use camelCase for variable names

*/

/*
The number datatype
JavaScript does not delineate between integers and floats, both are treated as numbers.
- Every number in JS is a number Dataype
*/ 

let age = 12;
console.log(typeof age); // number

let pi = 3.14;
console.log(typeof pi); // number


/*

Mathematical Operaters
+ Addition
- Subtraction
* Multiplication
/ Division
% Modulus (remainder of division)
** Exponentiation (power of)
++ Increment (adds 1 to the variable)
-- Decrement (subtracts 1 from the variable)
+= Addition assignment (adds the right operand to the left operand and assigns the result to the left
operand)
-= Subtraction assignment (subtracts the right operand from the left operand and assigns the result to
the left operand)
*= Multiplication assignment (multiplies the right operand with the left operand and assigns the result
to the left operand)
/= Division assignment (divides the left operand by the right operand and assigns the result to theleft
operand)
%= Modulus assignment (takes the modulus using two operands and assigns the result to the left operand
**= Exponentiation assignment (raises the left operand to the power of the right operand and
assigns the result to the left operand)

*/


/*

Boolean 
true or false

*/

let isLogged = true;


/*

String
A sequence of characters enclosed in single or double quotes.

*/

let firstName = "Janice";
let lastName = 'Aine';
let empty = '';

console.log(typeof empty); // string
console.log(false == 0); // true
console.log(false === 0); // false  
console.log(false == ''); // true
console.log(false === ''); // false



/*
Null
A special value that represents the intentional absence of any object value.
let emptyValue = null;
console.log(typeof emptyValue); // object
It is assigned to a variable to indicate that it has no value (absence of value).
*/

/*
Undefined
A variable that has been declared but has not yet been assigned a value is of type undefined.
let notAssigned;
console.log(typeof notAssigned); // undefined
It is the default value of a variable that has been declared but not assigned a value.
*/






