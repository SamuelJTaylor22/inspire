export default class Todo {
  constructor(data) {
    this.id = data._id;
    this.completed = data.completed || false
    this.description = data.description
  }


  get Template(){
    return `<li class="my-1">
    <input class="form-check-input" type="checkbox" value="" id="${this.id}" name="${this.id}" ${this.Comp} onclick= "app.todoController.toggleTodoStatus('${this.id}')">
    <label for="${this.id}">${this.description}</label> 
    <button type="button" class="btn btn-danger" onclick ="app.todoController.removeTodo('${this.id}')">Delete</button>
    </li>
    `
  }

  get Comp() {
    if(this.completed){
      return 'checked'
    }
    return ''
  }
}