export default class Todo {
  constructor(data) {
    this.id = data._id;
    this.completed = data.completed || false
    this.description = data.descritpion
  }


  get Template(){
    return `
    <input class="form-check-input" type="checkbox" value="" id="${this.id}" name="${this.id}" ${this.Comp} onclick= "app.todoController.toggleTodoStatus('${this.id}')">
    <label for="${this.id}">${this.description}</label> 
    <button type="button" class="btn btn-danger" onclick ="app.todoController.removeTodo('${this.id}')">Delete</button>
    `
  }

  get Comp() {
    if(this.completed){
      return 'checked'
    }
    return ''
  }
}