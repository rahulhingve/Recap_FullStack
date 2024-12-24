// An object in JavaScript is a data structure used to store related data collections. It stores data as key-value pairs, where each key is a unique identifier for the associated value. Objects are dynamic, which means the properties can be added, modified, or deleted at runtime.

// There are two primary ways to create an object in JavaScript: Object Literal and Object Constructor.
//Objects in js  old and new methods

var user = {
    id:1,
    name:"rahul",
    age  :"sweet 17",
    ageNumber :17,
    height :6.2,
    
}
// calling data with console.log
// console.log("id is  : "+user.id);
// console.log("name is : "+user.name);
// console.log("age is : "+user.age);
// console.log("age in number : "+user.ageNumber);
// console.log("height is : "+user.height);

const alldata  = JSON.stringify(user)




// console.log(alldata);
// console.log(user);


// what is constructors ?

// Object Constructor Functions
// Sometimes we need to create many objects of the same type.
// To create an object type we use an object constructor function.
// It is considered good practice to name constructor functions with an upper-case first letter.

//  simple constructors 
// function Person(name,location,age,color){
//     this.name = name,
//     this.location = location,
//     this.age = age,
//     this.color = color

// }


//special method 
function Person(name,location,age,color){
    this.name = name,
    this.location = location,
    this.age = age,
    this.color = color

}

const rahul = new Person('rahul', 'hyd', 23,'red');

console.log(rahul) // for calling whole object
console.log(rahul.name)
console.log(rahul.location)
console.log(rahul.age)
console.log(rahul.color)
console.log(rahul.hasOwnProperty("username"))
//i found a new method for calling the obj property
console.log(rahul["name"])

for (let key in rahul){
    console.log(key+": "+rahul[key])
}