// Loops :- For , while , Do-While, For...in, For...of

// Repetion The Action N Number Of Time


// for - loop

for(let i=0;i<5;i++){
    console.log('it is for loop',i);
}

console.log('\n');
// While Loop
let i=5;
while(i<5){

    console.log("This Is A While Loop");
    i++;

}

console.log('\n');

// Do-While Loop

do{
    console.log('Do-While Loop',i);
    i++;

}while(i<0);


// for - in loop

const person ={
    name:'Mosh',
    age:'43'
};

for (let key in person){
    console.log('age is: ',person.age);
}

// for of loop 



