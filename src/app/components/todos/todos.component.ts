import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service'
import { Todo } from '../../models/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];

  constructor(private todoService:TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todo:Todo) {
    // Delete on the UI
    // The filter returns on the todos that do not meet the criteria of todo.id (basically meaning only returning the todo that was selected)
    this.todos = this.todos.filter(t => t.id !== todo.id);

    // Delete on server
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo:Todo) {
    // Send Request
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    })

    //Add to UI


  }

}
