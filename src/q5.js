/*
    Task 1:
    - Link the file `external.js` to this file.
    - To test if the linking works, open q5-output.html using VScode's Live Server extension. It should print "Hello World!"
*/

// Task 1: Add code here. 
// Link the file `external.js` to this file. 
import print from './external.js';

// This calls print() from `external.js`, causing "Hello World!" to be printed in the page. 
// Do not change the code below. 
document.querySelector("#test").innerHTML = print();