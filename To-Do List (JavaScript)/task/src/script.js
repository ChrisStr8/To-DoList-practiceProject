let btn = document.getElementById('add-task-button');
let input = document.getElementById("input-task");
let tl = document.getElementById("task-list");

tl.innerHTML = localStorage.getItem("tasks") || [];
//let tasks = [];
//let nextID = Number(localStorage.getItem("nextID"));

/*if(nextID===null){
    nextID = 0;
    console.log('test');
}*/

btn.onclick = function(){
    let name = input.value;
    let t = createTask(name, false);
    tl.appendChild(t);
    //tasks.push([nextID, name, false]);
    //nextID++;
    localStorage.setItem("tasks", tl.innerHTML);
    //localStorage.setItem("nextID", nextID);
    //reloadTasks();
}

function createTask(name, checked){
    let t = document.createElement("li")
    //t.id = nextID;
    let c = checked ? "checked=\'checked\'" : ""
    t.innerHTML +=
        "<input type=\"checkbox\" class=\"check\" "+c+"/>" +
        "<span class=\"task\">" + name + " </span>" +
        "<button class=\"delete-btn\">delete</button>";

    return t;
}

/*function reloadTasks() {
    tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    console.log("reload "+tasks);
    for (const task in tasks) {

    }
}*/