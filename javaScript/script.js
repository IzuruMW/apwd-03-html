 console.log("Isuru");
 console.log("Hello world");
 console.log('Welcome JavaScript');

//  alert('hi!!!!!!!');
 document.write('baba');

 document.write('<br>');
 document.write('<h1>baba1</h1>');


document.write('<h3>Isuru <br>chathuranga <br>Battaramulla <br>32</h3> ');
 
function myName() {
    console.log('Isuru Chathuranga');
}
myName();

const myNamee = (name, addr) => {
    console.log("my name is " + name);
    console.log("my addr is "+addr);
}
myNamee("isuru", "Battaramulla");

// function NumberEqual(number1, number2) {
//     const equal = number1 + number2;
//     // console.log(equal);
//     return equal;
// }
// const value = NumberEqual(1555, 20);
// console.log(value);


const numEqual = (num1,num2,num3,num4) => {
    const equal = num1 + num2 + num3 + num4;
    const avg = equal / 4;
    return avg;
}
const value = numEqual(25, 50, 55, 30);

console.log(value);

// flow controlers

if (true) {
    var num1 = 10;
    var num2 = 22;
    console.log(num1>=num2);
    
} else {
    console.log("false");
}

const mark = 89;

if (80 < mark) {
    if (mark == 90) {
        console.log("marks=90");
    } else {
        console.log ("other");
    }
   }
else if (50<mark){
    console.log("B");
}
else {
    console.log("C");
}
const swi="AFSD"
switch (swi) {
    case "ACPT":
        console.log("ACPT"); break;
    case "AFSD":
        console.log("Print AFSD"); break;
    default:
        console.log("Not Known");


}
// loop
for (let i=0; i<10; i++){
    console.log(i);    
}
const arr = ["A", "B", "C", "D", "E","F", "J", "H","I","J"];

console.log(arr[4]);

for (let o=0; o<arr.length; o++){
    console.log(arr[o]);
}

// const w = 0;
// while (w<10) {
//     console.log("AFCT");
//     w++
// }

let p = 0;
do {
    console.log(p);
    p++
} while (p < 10);

for (let q = 0; q < 10; q++){
    console.log(q);
    if (q == 7) {
        break;
    }
}

const fruits = ["banana", "papaya", "orange", "apple", "mango"];

const fruit = fruits.pop();
console.log(fruit);

// fruits.push("Kiwi");
// console.log(fruits);

// const fruitt = fruits.shift();
console.log(fruits.shift());
fruits.unshift("grapes");
console.log(fruits);

// object

const person = {
    name: "isuruww", addr: "Battaramulla", age: "23",
    run: function () {console.log("run")},
    walk : function(){console.log("walk")},
    }
const name1 = person.addr
person.run();
person.walk();