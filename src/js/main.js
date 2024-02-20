// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'


var db = null;

const today = new Date();

// Format the date as YYYY-MM-DD
const dateString = today.toISOString().split('T')[0];

// Set the value of the input element


function displayLists() {
    if(!localStorage.getItem("db"))
    localStorage.setItem("db",JSON.stringify([]))
  db = JSON.parse(localStorage.getItem("db"))

var todo = document.getElementById("todo")
var doing = document.getElementById("doing")
var done = document.getElementById("done")

db.map((item) => {
    var list = todo
    if (item.status == 1)
    list = doing
    if(item.status == 2)
    list = done
console.log(item.priority)
    var li = document.createElement("li");
    li.className="list-group-item" 
    li.innerHTML =  '<div class="d-flex w-100 justify-content-between">\
<h5 class="mb-1">'+item.title+'</h5>\
<small>'+item.enddate+'</small>\
</div><p class="mb-1">'+item.description+'</p>\
<a href="#addItem" class="btn btn-link" data-bs-toggle="modal" data-id='+ item.id + ' data-title='+ item.title  + ' data-desc= "' + btoa(item.description) + '" data-enddate='+ item.enddate + ' data-priority=' + item.priority + ' data-status='+ item.status +'>\
<i class="bi bi-pen"></i></a>';

list.appendChild(li);

});
};
window.onload = displayLists()

const itemAdd = document.getElementById('item-save');

itemAdd.addEventListener("click",(e) => console.log('save'));

function save(e)  {
    let index = -1
    let id = document.getElementById('id').value
    if(id == -1)
    id = db.length
    else
    index = db.findIndex(item => item.id == id)

    const item = {
        id: id,
title:document.getElementById("title").value,
description: document.getElementById("desc").value,
enddate:document.getElementById('enddate').value,
priority:document.getElementById('priority').value,
status:document.getElementById('status').value
}
console.log(item)
if(item.title && item.description && item.enddate)
if(index == -1)
db.push(item)
else
db[index] = item

localStorage.setItem("db",JSON.stringify(db))
location.reload();


}

const editModal = document.getElementById('addItem')
editModal.addEventListener("show.bs.modal", function(e){
    let t = e.relatedTarget.dataset
    if ("id" in t) {
        console.log(t)
        document.getElementById('id').value = t.id
        document.getElementById('title').value = t.title
        document.getElementById('desc').value = atob(t.desc)
        document.getElementById('enddate').value = t.enddate
        document.getElementById('priority').value = t.priority
        document.getElementById('status').value = t.status
    }else
    {
        document.getElementById('title').value = ""
        document.getElementById('desc').value = ""
        document.getElementById('enddate').value = dateString 
        document.getElementById('priority').value = 0
        document.getElementById('status').value = 0

    }
        
});
editModal.addEventListener("hide.bs.modal", save);
