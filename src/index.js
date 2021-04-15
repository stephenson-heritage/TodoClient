import 'core-js/stable';
import 'regenerator-runtime/runtime';

import './css/styles.css';
import TodoView from './hbs/TodoItemsTemplate.hbs';
import TodoItems from './hbs/todoItems.hbs';

import Todos from './js/todoApi';

let app = document.getElementById('app');
app.innerHTML = TodoView(
	{
		"now": new Date().toISOString()
	});

let todos = new Todos('https://localhost:5001/api/');

todos.getTodos().then((list) => {
	let itemsList = document.getElementById('items');
	console.log(list);
	itemsList.innerHTML = TodoItems(list);
});


let setup = function () {

}

let completeBtns = document.querySelectorAll("task-complete button");
completeBtns.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		let id = e.target.dataset.id;

		console.log(id);
	})
});


document.getElementById("add").addEventListener("click", () => {
	let elName = document.getElementById("name");
	let elDue = document.getElementById("due");
	let data = {
		"name": elName.value,
		"due": elDue.value
	};
	todos.addTodo(data);
	elName.value = "";
	elDue.value = new Date().toISOString();
});

