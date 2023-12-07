const student= [];
function save() {
    const name = document.getElementById('name').value;
    const add = document.getElementById('add').value;
    const age = document.getElementById('age').value;
    const cont = document.getElementById('cont').value;
   
    const obj={
        name: name,
        address: add,
        age: age,
        cont:cont,
        
    }
    student.push(obj);
    getUser()
}
const getUser=()=>{
    let data = " ";
    for (let i = 0; i < student.length; i++){
        data += `<div class="card p-2 m-2" style="width: 18rem;">
        <h6 class="card-subtitle m-1 text-body-secondary"> First Name: ${student[i].name}</h6>
        <h6 class="card-subtitle m-1 text-body-secondary"> Address:${student[i].address}</h6>
        <h6 class="card-subtitle m-1 text-body-secondary"> Age:${student[i].age}</h6>
        <h6 class="card-subtitle m-1 text-body-secondary"> Content:${student[i].cont}</h6>
        <button onclick="deleteUser(${i})" type="button" class="btn btn-danger m-1" >Delete</button>

    </div>`
    }
    document.getElementById('display').innerHTML=data
}
getUser()

const deleteUser = (id) => {
    student.splice(id, 1);
    getUser()
}


// document.getElementById('name').innerText = name;
// document.getElementById('add').innerText = add;
// document.getElementById('age').innerText = age;
// document.getElementById('cont').innerText = cont;