
function sameName() {
   const name1= document.getElementById('name1').value
    const name2=document.getElementById('name2').value
}

if (name1 == name2) {
   
    document.getElementById('display1').innerText = "Success"

}else {
    document.getElementById('display1').innerText = "Fail....!"
    
}

function num() {
    const num1 = parseInt(document.getElementById('num1').value) 
    const num2 = parseInt(document.getElementById('num2').value) 
    console.log(num1<num2);
    
}
if (num1 < num2) {
    document.getElementById('displayNum').innerText=num2
} else if(num1==num2){
    document.getElementById('displayNum').innerText="Same number"
}else {
    document.getElementById('displayNum').innerText=num1
}



// if (num1 == num2) {
    
//     document.getElementById('displayNum').innerHTML="Same number"
// } else {
//     document.getElementById('displayNum').innerHTML="fail"
// }

function num3() {
    const num3 = documenton.getElementById('num3').value;
    console.log(num3);
}

for (let i = 0; i < num3.length; i++)
{
   sum=sum+parseInt(num3[i])
}
document.getElementById('displayNum3').innerText = sum
console.log(document.getElementById('displayNum3').innerText = sum)
console.log();