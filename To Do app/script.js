var toDoList = [];
var v = 0;


//Call when Enter is pressed
const inpt = document.getElementById("input");
inpt.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("myBtn").click();
    }
  });



function addEvent(){
    var input = document.getElementById("input").value;
    
    if(!input) {
        return alert('Please enter Event to Continue');
    }

    toDoList.push(input);
    alert(`Do you want to Add Event ${toDoList[v++]}`);

    document.getElementById("input").value = "";

    //to display the results that are stored in arrays created a function
    print();
}


function print(){
    
    data = "<tr><th>To-Do List</th><th>Status</th><tr>";

    for(let p in toDoList){
        data += `<tr><td>${toDoList[p]}</td><td><button onclick='remove()'><i class="fa fa-trash-o" style="font-size:30px"></i></i>
        </button></td><tr>`;
    }

    document.getElementById("result").innerHTML = data;
}

function remove(input){
    const index = toDoList.findIndex(function(value){
        return value.input == input;
    });

    toDoList.splice(index, 1);
    alert('Event removed ' , input);
    print();
}