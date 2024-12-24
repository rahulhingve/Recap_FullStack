
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


//  simple constructors 
// function Person(name,location,age,color){
//     this.name = name,
//     this.location = location,
//     this.age = age,
//     this.color = color

// }


//speacial method 
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
console.log(rahul.color
    
)