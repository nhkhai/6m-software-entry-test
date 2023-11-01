/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if x and y is not numeric.
    - print the swapped values in the console

    Task 2
    - invoke the function "swap"
*/

function swap(x, y)
{
    // Task 1: Add code here. 
	// Check if x and y are numeric. NaN is also rejected. 
	if ((typeof x !== 'number') || (typeof y !== 'number') || (Number.isNaN(x)) || (Number.isNaN(y)))
	// If NaN is accepted, use the following line instead. 
	// if ((typeof x !== 'number') || (typeof y !== 'number')) 
	{
		// x and y must be numeric. 
		// Return -1 if x and y is not numeric. 
        return -1;
    }
	
	// Swap the value of x and y using only x and y as variables. 
    x = x + y;
    y = x - y;
    x = x - y;

    // Print the swapped values in the console. 
    console.log(x, y);
	
	// Alternatively, the value can be directly swapped without other processing in the console log print. 
	// console.log(y, x);
}

// Task 2: Add code here. 
// Invoke the function "swap". 
// Invoke with sample inputs. 
//swap('A', -1.5);
swap(0.5, -1.8);

module.exports = swap;