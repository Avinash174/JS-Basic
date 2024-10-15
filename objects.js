// object

  circle1={
    radius:1,
    location:{
        x:1,
        y:1
    },
    inVisible:true,
    draw:function(){
        console.log('I can draw');

    }
 };

 // Factory Function 

 function createPerson(name, age) {
    return {
        name: name,
        age: age,
        greet() {
            console.log(`\n\nHello, my name is ${this.name} and I am ${this.age} years old.\n\n\n`);
        }
    };
}

const person1 = createPerson('Alice', 25);
const person2 = createPerson('Bob', 30);

person1.greet(); // Hello, my name is Alice and I am 25 years old.
person2.greet(); // Hello, my name is Bob and I am 30 years old.

// constructor function

function Circle(radius){
    this.radius;
    this.draw=function(){
        console.log('draw');
    }
}
// Dynamic Nature Of Objects

 const circle={

    radius:1,
};

circle.color ='yellow';
circle.draw=function(){}

delete circle.draw;

console.log(circle)






 
