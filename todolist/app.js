angular.module('todoApp', [])
    .controller('TodoListController', function() {
        var todoList = this;

        todoList.title="Todo";

        todoList.todos = [
            {text:"Lavar la ropa", done:true},
            {text:"Limpiar el piso", done:false}
        ]

        todoList.addTodo = function() {
            let nuevo = {"text":todoList.todoText, "done":false};
            todoList.todos.push(nuevo);
            todoList.todoText = "";
        }

        todoList.archivar = function() {
            let antes = todoList.todos;
            todoList.todos = [];
            angular.forEach(antes, function(todo) {
                if (!todo.done)
                    todoList.todos.push(todo);
            })
        }

        todoList.pendientes = function() {
            var count = 0;
            angular.forEach(todoList.todos, function(item) {
                count += item.done?0:1;
            });
            return count;
        }
    });