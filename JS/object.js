const myObject = {
    property: 'Value!',
    otherProperty: 77,
    "obnoxious property": function() {
        //do stuff!
    }
}


function PrintStuff (myDocuments) {
this.documents = myDocuments;
}

//=> add print () method to PrintStuff prototype property so that other instacnes (objects) can inherit it: 
PrintStuff.prototype.print = function() {
console.log(this.documents);
}

// Create a new object with the PrintStuff () constructor, thus allowing this new object to inherit PrintStuff's properties and methods. 

let newObj = new.PrintStuff ("I am a new Object and I can print.");

//newObj inherited all the properties and methods, including the print method, from the PrintStuff function. Now newObj can call print directly, even though I never created a print () method on it. 
newObj.print (); // I am a new Object and I can print.

//----------------------------

function Account () {
}
//This is the use of the Account constructor to create the userAccount object.

let userAccount = new Account ();

//--------------------
//The constructor in this example is Object () 

let myObj = new Object ();

//And if you later want to find the myObj constructor:
console.log(myObj.constructor); // Object() 

//Another example: Account () is the constructor 
let userAccount = new Account ();

//Find the userAccount object's constructor
console.log(userAccount.constructor); // Account()

//----------------------------
//The userAccount object inherits from Object and as such its prototype attribute is Object.prototype.

let userAccount = new Object ();

//This demonstrates the use of an object literal to create the userAccount object; the userAccount object inherits from Object; therefore, its prototype attribute is Object.prototype just as the userAccount object does above. 

let userAccount = {name: "Mike"}

//----------------------------
function Account() {
}

let userAccount = new Account ()

//userAccount initialized with the Account () constructor and as such its prototype attribute (or prototype object) is Account.prototype. 
