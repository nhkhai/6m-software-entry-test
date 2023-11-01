/*
    Task 1: 
    - Implement a Child class that extends the Parent.
    - Add a constructor to the Child class can calls super().
    - Implement a new function addNewAbilities(newAbility) in the Child class where the new ability will be added to the Parent's #abilities array.     
*/

class Parent
{
    abilities = []

    constructor()
	{
        this.abilities.push("Parenting");
        this.abilities.push("Role modeling");
    }

    showAbilities()
	{
        console.log("These are the abilities:")
		
        for(const a of this.abilities)
		{
            console.log(a);
        }
    }
}

const p = new Parent();

p.showAbilities(); // Observe that this function prints "Parenting" and "Role modeling". 

// Task 1: Add code here. 
// Implement a Child class that extends the Parent. 
class Child extends Parent
{
	// Add a constructor to the Child class can calls super(). 
	constructor() 
	{
		super(Parent);
	}
	
	// Implement a new function addNewAbilities(newAbility) in the Child class where the new ability will be added to the Parent's abilities array. 
	addNewAbilities(newAbility)
	{
		this.abilities.push(newAbility);
	}
}

const c = new Child();

// There seems to be a typo here in the original code. Modified to call the correct function name specified in the Task 1 instead. 
//c.addNewAbility("Dancing");
c.addNewAbilities("Dancing");
c.showAbilities(); // This function should print "Parenting", "Role modeling" and "Dancing". 