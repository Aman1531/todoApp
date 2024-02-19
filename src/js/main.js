// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

const input = document.getElementById("endDate");
const today = new Date();

// Format the date as YYYY-MM-DD
const dateString = today.toISOString().split('T')[0];

// Set the value of the input element
input.value = dateString;

const itemAdd = document.getElementById('itemAdd');

itemAdd.addEventListener("click", function(e){
    localStorage.clear();

    const item = {
title:document.getElementById("title").value,
description: document.getElementById("desc").value,
enddate:document.getElementById('endDate').value,
priority:document.getElementById('priority').value,
status:"To Do"
}
localStorage.setItem("db",JSON.stringify(item))
console.log(localStorage.getItem("db"))
});
