function TodoController() {
	// new up the TodoService that has already been configured for your use
	var todoService = new TodoService()
	// You will need four methods
	// getTodos should request your api/todos and give an array of todos to your callback fn
	// addTodo takes in a todo and posts it to the server
	// toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
	// removeTodo takes in a todoId and sends a delete request to the server
	// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again

	// Use this getTodos function as your callback for all other edits
	function getTodos() {
		//FYI DONT EDIT ME :)
		todoService.getTodos(draw)
	}
	getTodos()

	function draw(todos) {
		//WHAT IS MY PURPOSE?
		//BUILD YOUR TODO TEMPLATE HERE
		var todoElem = document.getElementById('todo-list')
		var template = `Remaining items: ${todoService.todoCount()}<br>`
		//DONT FORGET TO LOOP
		for (var i = 0; i < todos.length; i++) {
			var todo = todos[i];
			var checked = todo.status == "disabled" ? "checked" : ""
			checked == "checked" ? strike = "strike" : strike = ""
			// ***Start here = maybe add a span after the input template line with an id
			//   to style the text? Come back after getting the deletes to work.
			// var style = todo.status == "disabled" ? `style='color: blue'` : `style='color: yellow'`
			// var index = i; // Should match index of each todo in array (Use for delete)
			template += `
				<input type="checkbox"  onchange="app.controllers.todoController.toggleTodoStatus(event)" name="${i}" value="${i}" ${checked}><span class='${strike}'>${todo.todo}</span><button class="icon-button icon-button-trash pull-right" onclick='app.controllers.todoController.removeTodo(${i})'><span class='fa fa-trash-o'></span></button><br>
			`
			// <input type="checkbox"  onchange="app.controllers.todoController.toggleTodoStatus(event)" name="${i}" value="${i}" ${checked}><span class='${strike}'>${todo.todo}</span><a href='javascript:;' onclick='app.controllers.todoController.removeTodo(${i})'><span class='fa fa-trash-o'></span></a><br>
			// <p>${todo.todo}${index}</p>			
		}
		// template += `<button type="submit">Delete finished Todo items</button>`
		todoElem.innerHTML = template
	}

	this.addTodoFromForm = function (e) {
		e.preventDefault() // <-- hey this time its a freebie don't forget this
		// TAKE THE INFORMATION FORM THE FORM
		var form = e.target
		var todo = {
			// DONT FORGET TO BUILD YOUR TODO OBJECT
			todo: form.todo.value,
			status: "enabled"
		}
		form.todo.value = ""
		console.log(todo)

		//PASSES THE NEW TODO TO YOUR SERVICE
		//DON'T FORGET TO REDRAW THE SCREEN WITH THE NEW TODO
		//YOU SHOULDN'T NEED TO CHANGE THIS
		todoService.addTodo(todo, getTodos)
		//^^^^^^^ EXAMPLE OF HOW TO GET YOUR TOODOS AFTER AN EDIT
	}

	this.toggleTodoStatus = function (event) {
		// console.log(event)
		var todoId = event.target.value
		// console.log(event.target)
		// console.log(todoId)
		// asks the service to edit the todo status
		// todoId = todoId.value
		// console.log(todoId)
		todoService.toggleTodoStatus(todoId, getTodos)
		// YEP THATS IT FOR ME
	}

	this.removeTodo = function (index) { //needs index? take in todo and find by value?
		event.preventDefault() //event passed only so I could prevent default
		todoService.removeTodo(index, getTodos)

		// ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus
	}

	// IF YOU WANT YOUR TODO LIST TO DRAW WHEN THE PAGE FIRST LOADS WHAT SHOULD YOU CALL HERE???

}
