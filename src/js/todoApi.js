export default class {
	constructor(baseUrl) {
		this.baseUrl = baseUrl;
	}

	async getTodos() {
		let raw = await fetch(this.baseUrl + 'todoitem/', {
			mode: 'cors',
			cache: 'no-cache',
			method: 'GET'
		});
		let pdata = await raw.json();
		return pdata;
	}


	// 	{
	// 	"todoItemId": 3,
	// 		"isComplete": false
	// }

	async setComplete(id, complete = true) {
		let payload = {
			"todoItemId": id,
			"isComplete": complete
		};
		await fetch(this.baseUrl + `todoitem/${id}`, {
			method: "PATCH",
			headers: {
				"accept": "application/json",
				"Content-Type": "application/json"
			},
			body: JSON.stringify(payload)
		});
		return;
	}

	async remove(id) {
		await fetch(this.baseUrl + `todoitem/${id}`, {
			method: "DELETE"
		});
		return;
	}

	async addTodo(todo) {
		let req = await fetch(this.baseUrl + 'todoitem/', {
			method: "POST",
			headers: {
				"accept": "application/json",
				"Content-Type": "application/json"
			},
			body: JSON.stringify(todo)
		}
		);

		let res = await req.json();

		return res;
	}
}
