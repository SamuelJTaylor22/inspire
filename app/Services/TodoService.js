import { ProxyState } from "../AppState.js";
import { api } from "../Services/AxiosService.js";
import Todo from "../models/Todo.js";

// TODO you will need to change 'YOURNAME' to your actual name or all requests will be rejected
let url = 'sam/todos/'


class TodoService {
  async getTodos() {
    console.log("Getting the Todo List");
    let res = await api.get(url);
    let newdata = res.data.data.map(t =>new Todo(t))
    console.log(newdata)
    ProxyState.todos = newdata
  }

  async addTodo(todo) {
    let res = await api.post(url, todo);
    this.getTodos()
  }

  async toggleTodoStatus(todoId) {
    let todo = ProxyState.todos.find(todo => todo.id == todoId);
   
    if(todo){
      (todo.completed ? todo.completed = false : todo.completed = true) 
    }
    else{
      throw new Error("No todo found")
    }
    
    let res = await api.put(url + todoId, todo);
    //TODO how do you trigger this change
  }

  async removeTodo(todoId) {
  await api.delete(`${url}${todoId}`)
  ProxyState.todos = ProxyState.todos.filter(t => t.id !== todoId)
  }
}

const todoService = new TodoService();
export default todoService;