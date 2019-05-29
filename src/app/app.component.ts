import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todoArray=[];
  class: string = "table"

  addTodo(value){
    event.preventDefault()
    this.todoArray.push(value)
    // console.log(this.todoArray)
  }
  deleteTodo(value){
    console.log("delete item", value)
    let deleteItem = this.todoArray.indexOf(value)
    this.todoArray.splice(deleteItem,1)
  }
  todoSubmit(value:any){
    console.log(value)
     }
}
