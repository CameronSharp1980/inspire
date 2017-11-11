function TodoService() {
	// A local copy of your todos
	var todoList = []
	var baseUrl = 'https://inspire-server.herokuapp.com/api/todos/CameronSharp'

	function logError(err) {
		console.error('UMM SOMETHING BROKE: ', err)
		//CAN YOU NOTIFY THE USER IF SOMETHING BREAKS? 
		//do this without breaking the controller/service responsibilities
	}

	this.getTodos = function (draw) {
		$.get(baseUrl)
			.then(function (res) { // <-- WHY IS THIS IMPORTANT????
				todoList = res
				console.log("Local todoList[] : ", todoList)
				draw(res)
			})
			.fail(logError)
	}

	this.addTodo = function (todo, callWhenDone) {
		// WHAT IS THIS FOR???
		$.post(baseUrl, todo)
			.then(function (res) { // <-- WHAT DO YOU DO AFTER CREATING A NEW TODO?
				callWhenDone()
			})
			.fail(logError)
	}

	this.toggleTodoStatus = function (todoId, callWhenDone) {
		// MAKE SURE WE THINK THIS ONE THROUGH
		//STEP 1: Find the todo by its index **HINT** todoList
		// PASSED IN INDEX ALREADY
		//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed
		if (todoList[todoId].status == 'enabled') {
			todoList[todoId].status = 'disabled'
		} else {
			todoList[todoId].status = 'enabled'
		}
		//STEP 3: Here is that weird Ajax request because $.put doesn't exist
		$.ajax({
			method: 'PUT',
			contentType: 'application/json',
			url: baseUrl + '/' + todoId,
			data: JSON.stringify(todoList[todoId])
		})
			.then(function (res) {
				//DO YOU WANT TO DO ANYTHING WITH THIS?
				callWhenDone()
			})
			.fail(logError)
	}

	this.removeTodo = function () {
		// Umm this one is on you to write.... It's also unique, like the ajax call above. The method is a DELETE

	}

}
