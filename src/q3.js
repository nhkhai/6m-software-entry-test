/*
    Task 1:
    - Add a new property "breed" with the value "Poodle"

    Task 2: 
    - Implement a for-in to loop through the keys in "dog" object and print it with console.log()
*/

// Task 1: Add code here. 
// Add a new property "breed" with the value "Poodle". 
dog['breed'] = "Poodle";

// Task 2: Add code here. 
// Implement a for-in to loop through the keys in "dog" object and print it with console.log(). 
for (var property in dog)
{
	// Print the key only. 
	console.log(dog[property]);
	
	// Alternatively, if the property Key and it's associated value can be printed using this instead. 
    //console.log(dog[property], property);
}