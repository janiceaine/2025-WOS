/*
    let func = (arg1, arg2, ..., argN) => expression;

    same as: 

    let func = function (arg1, arg2, ..., argN) {
        return expression;
    };

    traditional function declaration
        function add1(num) {
            return num + 1;
        }

    function expression
        const add1 = function(num) {
            return num + 1;
        };

    converting to an Arrow function
        1. const add1 = (num) => num + 1; // if you have ne line
        2. const add1 = num => num + 1; // if you have one arguement there is no need for paranthesis
        3. const add1 = (num) => { // when only the function keyword is removed
                return num + 1;
            };
        4. const add1 = num => { // multi-line body
                num += 1;
                return num;
            };

        5. zero or multiple parameters (paranthesis required)
            const add = (x, y) => x + y; 
            const add1 = () => 42;

    The cleaner version is called "Syntactic Sugar";
        const add1 = num => num + 1;

    

*/

muliplyHere = (x, y) => x * y;

