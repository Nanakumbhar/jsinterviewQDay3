//Q.1 What is the use of setTimeout

// Ans=>setTimeout  is a commonly used function in JavaScript. It sets a timer (a countdown set in milliseconds)
//  for the execution of a callback function, calling the function upon completion of the timer.
// it takes two argumentsone one is function and other is time
// eg .
setTimeout(()=>{console.log("kumbhar")},2000)

// output "kumbhar" (after 2 second)



//Q.2 What is an event loop and call stack
// Ans=>The Call Stack Event loop is useful for sequential code execution. For example,
//  if you have a function that has several nested loops with different event listeners and then you want to be 
// able to call one of those functions from another function, the Call Stack Event loop allows for this.

//  to make js asynchronous, setTimeout,Fetch, console.

// eg . 
 console.log ('hello');
         setTimeout(() => {
            console.log('kk')
         }, 3000);

         console.log('hello')

// Q .3 What are arrow functions?

// Ans=> Arrow function is the newest feature introduced ES6 version of js , to write simple and 
        //   manageable that is easy to debug and underrstand.

        // eg. 
        let arrowFunction = ()=>{
            console.log("Arrow Function")
        }
        arrowFunction()

//   Q .4 What is a Temporal Dead Zone?

// Ans=>  if you are accessing any vareable berore its declaration and that variable is defined using 
//    let and const ,then you will be getting reference error because the variable is in temporal dead zone.

// eg . console.log(a);
//  let a = 'hellow'
       
// to avoid TDZ ,try to access the variable after its declearation and initialization.  

//Q.5 What is hoisting?

// Ans=>Hoisting is a JavaScript mechanism where variables and function declarations are moved 
//      to the top of their scope before code execution.

console.log(foo);
var foo = 'foo';
// It might surprise you that this code outputs undefined and doesn't fail or throw an error – even
//  though foo gets assigned after we console.log it!

// This is because the JavaScript interpreter splits the declaration and assignment of functions and 
// variables: it "hoists" your declarations to the top of their containing scope before execution.

// This process is called hoisting, and it allows us to use foo before its declaration in our example above.


//Q.6 What is the DOM?

// Ans=>DOM stands for Document Object Model. It is a programming interface that allows us to create,
//  change, or remove elements from the document. We can also add events to these elements to make our
//   page more dynamic.
// Dom is tree like structure 
// The DOM views an HTML document as a tree of nodes. A node represents an HTML element.



//Q.7 Difference between undefined vs not defined vs NaN

// Ans=>undefined: It is a JavaScript keyword that has a special meaning. Everything which gets 
// a space in memory will contain undefined until we assign a value to that memory space.

// Example 1: The global execution context will be created and in the memory allocation phase,
//  the var a will get space in memory, and JavaScript will assign undefined to it. During the
//   thread of execution, the JavaScript will encounter the first line console.log(a) and as we
//   haven’t assigned the value for a, undefined will be printed on the console. In the next line,
//    we have assigned 5 to a, hence the variable a is no more undefined. Now it contains the value 5. 
//    So next time whenever we access the variable a, it won’t be evaluated as undefined. So it will print
//     the actual value of a.
// console.log(a);
// var a = 5;
// console.log(a)

// Output (In console):

// undefined
// 5


// not defined: In JavaScript, it is one of the reference errors that JavaScript will throw when 
// someone accesses the variable which is not inside the memory heap.

// Example 2: First of all, global execution context will be created and in the memory allocation phase,
// the variable “a” will get space in memory, and by default, JavaScript assigns undefined to “a”.
//  During the thread of execution, the “console.log(a)” will be printed as undefined. 
// In the next line, we have assigned 5 to variable a. In the console, 5 will be printed. 
// At the last line when JavaScript encounters the “console.log(b)” it searches for “b”
//  inside the memory heap of execution context but it is not available, the JS engine 
// will throw the “Reference Error” with a message of “b is not defined“. The JavaScript
//  will stop execution when it encounters a reference error.

// console.log(a);
// var a = 5;
// console.log(a);
// console.log(b);

// output => uncough ReferenceError is not defined


// NaN: means Not an Number , it is also data type ,It represents a value which is not a valid number.
//  It can be used to check whether a number entered is a valid number or not a number. To assign a
//  variable to NaN value, we can use one of the two following ways. var a = NaN var a = Number.NaN
