//  console.log("Isuru");
//  console.log("Hello world");
//  console.log('Welcome JavaScript');

//  alert('hi!!!!!!!');
//  document.write('baba');

//  document.write('<br>');
//  document.write('<h1>baba1</h1>');


// document.write('<h3>Isuru <br>chathuranga <br>Battaramulla <br>32</h3> ');
 
// function myName() {
//     console.log('Isuru Chathuranga');
// }
// myName();

// const myNamee = (name, addr) => {
//     console.log("my name is " + name);
//     console.log("my addr is "+addr);
// }
// myNamee("isuru", "Battaramulla");

// function NumberEqual(number1, number2) {
//     const equal = number1 + number2;
//     // console.log(equal);
//     return equal;
// }
// const value = NumberEqual(1555, 20);
// console.log(value);


// const numEqual = (num1,num2,num3,num4) => {
//     const equal = num1 + num2 + num3 + num4;
//     const avg = equal / 4;
//     return avg;
// }
// const value = numEqual(25, 50, 55, 30);

// console.log(value);

// flow controlers

// if (true) {
//     var num1 = 10;
//     var num2 = 22;
//     console.log(num1>=num2);
    
// } else {
//     console.log("false");
// }

// const mark = 89;

// if (80 < mark) {
//     if (mark == 90) {
//         console.log("marks=90");
//     } else {
//         console.log ("other");
//     }
//    }
// else if (50<mark){
//     console.log("B");
// }
// else {
//     console.log("C");
// }
// const swi="AFSD"
// switch (swi) {
//     case "ACPT":
//         console.log("ACPT"); break;
//     case "AFSD":
//         console.log("Print AFSD"); break;
//     default:
//         console.log("Not Known");


// }
// loop
// for (let i=0; i<10; i++){
//     console.log(i);    
// }
// const arr = ["A", "B", "C", "D", "E","F", "J", "H","I","J"];

// console.log(arr[4]);

// for (let o=0; o<arr.length; o++){
//     console.log(arr[o]);
// }

// const w = 0;
// while (w<10) {
//     console.log("AFCT");
//     w++
// }

// let p = 0;
// do {
//     console.log(p);
//     p++
// } while (p < 10);

// for (let q = 0; q < 10; q++){
//     console.log(q);
//     if (q == 7) {
//         break;
//     }
// }

// const fruits = ["banana", "papaya", "orange", "apple", "mango"];

// const fruit = fruits.pop();
// console.log(fruit);

// fruits.push("Kiwi");
// console.log(fruits);

// const fruitt = fruits.shift();
// console.log(fruits.shift());
// fruits.unshift("grapes");
// console.log(fruits);

// object

// const person = {
//     name: "isuruww", addr: "Battaramulla", age: "23",
//     run: function () {console.log("run")},
//     walk : function(){console.log("walk")},
//     }
// const name1 = person.addr
// person.run();
// person.walk();


function marks() {
    const mark=parseInt (document.getElementById('marks').value)

    if (mark >= 90) {
       
        document.getElementById('displayMarks').innerText = "A";
    } else if(mark>=65){
        document.getElementById('displayMarks').innerText = "B";
    }else if(mark>=45){
        document.getElementById('displayMarks').innerText = "C";
    } else if (mark >= 35) {
        document.getElementById('displayMarks').innerText = "S";
    }
        else {
            document.getElementById('displayMarks').innerText = "F";
        }
    
}

function sameName() {
    const fname = document.getElementById('name1').value
    const lname = document.getElementById('name2').value

    if (fname == lname) {
        document.getElementById('display1').innerText = "sameName"
    } else {
        document.getElementById('display1').innerText="fail"
    }
}


function num() {
    const num1 = document.getElementById('num1').value
    const num2 = document.getElementById('num2').value
    if (num1 < num2) {
        document.getElementById('display2').innerText=num2
    }
    else if (num1 === num2) {
        Document.getElementById('display2').innerText="same numbers"
       
    } else {
        document.getElementById('display2').innerText='Num1 is greaterthan num2'    }
}


///////////////////////////////////
function fullName() {
    const num5 = document.getElementById("num-5").value
    
    if (num5 == "intern") {
        Document.getElementById('display5').innerText='Intern Software Engineer'
    }
    else if (num5 == 'ase') {
        Document.getElementById('display5').innerText='Associate Software Engineer'
    }
    else if (num5 == "se") {
        Document.getElementById('display5').innerText='Software Engineer'
    }
    else if (num5 == "sse") {
        Document.getElementById('display5').innerText='Senior Software Engineer'
    }
    else if (num5 == "alt") {
        Document.getElementById('display5').innerText='Assistent Tech Lead'
    }
    else if (num5 == "tl") {
        Document.getElementById('display5').innerText='Tech Lead'
    } else {
        Document.getElementById('display5').innerText='error...!'
    }
}

// function fullName() {
  
//     const pos = document.getElementById("num5").value
  
//     switch(pos){
//         case "intern":
//             Document.getElementById('display55').innerText = "Intern Software Engineer";
//             break;
//         case "ase":
//             Document.getElementById('display55').innerText = "Associate SE";
//             break;
//         case "se":
//             Document.getElementById('display55').innerText = "Software Eng";
//             break;
//         case "atl":
//             Document.getElementById('display55').innerText = "assistemt tech lead";
//             break;
//         case "tl":
//             Document.getElementById('display55').innerText = "tech lead";
//             break;
//         default:
//             Document.getElementById('display55').innerText= "fail....!";
//             break;
//     }
  
// }

// function numpos() {
//     const textq = documet.getElementById('num-5').value
//     let tex = " ";
//     if (textq == "as") {
//         document.getElementById('display5').innerText="babe"
//     } else {
//         document.getElementById('display5').innerText="andy"
//     }
// }



/////////////////////////////////////////////////////////////


const nameArray=[];
function arrayNum() {
    const userInput = document.getElementById('num-6').value
    nameArray.push(userInput);
    // document.getElementById('num-6').value = '';
    document.getElementById('display-6').innerText = nameArray;
        
}
function print() {
    document.getElementById('display-6').innerText = nameArray;
}




////////////////////////uname and password///////

function submitbtn() {
    const uName = "izu";
    const pw = "123";
   const userName= document.getElementById("uname").value;
   const password= document.getElementById("pw").value;
    if (uName.toLocaleLowerCase() == userName.toLocaleLowerCase() && pw.toLocaleLowerCase() == password.toLocaleLowerCase()) {
        document.getElementById('display-result').innerText="success"
    } else {
        document.getElementById('display-result').innerText="fail"
    }
    
}