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

const mark = 25;

if (80<mark) {
    
    console.log('A');
    
}
else if (50<mark){
    console.log("B");
}
else {
    console.log("C");
}