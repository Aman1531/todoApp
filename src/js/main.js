// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

var db = JSON.parse(localStorage.getItem("db"))

const input = document.getElementById("endDate");
const today = new Date();

// Format the date as YYYY-MM-DD
const dateString = today.toISOString().split('T')[0];

// Set the value of the input element
input.value = dateString;

const itemAdd = document.getElementById('itemAdd');

function displayLists() {
var ul = document.getElementById("todoList")
db.map((item) => {
    var li = document.createElement("li");

if (item.status == "To Do") { 
li.appendChild(document.createTextNode(item.title));
ul.appendChild(li);
}
});
};
window.onload = displayLists()
itemAdd.addEventListener("click", function(e){
    
    let index = 0
    if(db)
    index = db.length
    const item = {
        index: index,
title:document.getElementById("title").value,
description: document.getElementById("desc").value,
enddate:document.getElementById('endDate').value,
priority:document.getElementById('priority').value,
status:"To Do"
}
if(index)
db.push(item)
else
db = [item]

localStorage.setItem("db",JSON.stringify(db))
console.log(localStorage.getItem("db"))
});
