let input = document.getElementById("input-task");
let addBtn = document.getElementById('add-task-button');
let list = document.getElementById('task-list');
let tasks = new Map();
let nextID = Number(localStorage.getItem("nextID"));

if(!nextID.isNumber){
    nextID = 0;
}

load();

addBtn.addEventListener('click', function () {
    let name = input.value;
    if (name === "") {
        alert('you must write something');
    } else {
        let t = createTask(nextID, name, false);
        nextID++;
        list.appendChild(t);
        record();
    }
});

list.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        let lis = e.target.parentNode;
        //tasks.remove(lis.id);
        list.removeChild(lis);
        record();
    }
    if (e.target.tagName === 'INPUT') {
        let id = Number(e.target.id);
        let name = e.target.text;
        let checked = e.target.checked;
        //console.log(checked);
        tasks.set(id, [name, checked]);
        record();
    }
});

function createTask(id, name, checked){
    let t = document.createElement("li")
    t.id = id;
    tasks.set(id, [name, false]);
    let c = checked ? "checked=\'checked\'" : ""
    t.innerHTML +=
        "<input type=\"checkbox\" class=\"check\" "+c+"/>" +
        "<span class=\"task\">" + name + "</span>" +
        "<button class=\"delete-btn\">delete</button>";

    return t;
}

function record() {
    //console.log(tasks);
    //console.log(nextID);
    localStorage.setItem("list", list.innerHTML);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("nextID", nextID);
}

function load() {
    list.innerHTML = localStorage.getItem("list") || [];
    /*let t = JSON.parse(localStorage.getItem("tasks")) || [];
    console.log(t);
    for (const task in t) {
        //createTask();
    }*/
}