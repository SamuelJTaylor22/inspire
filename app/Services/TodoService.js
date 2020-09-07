import { ProxyState } from "../AppState.js";
import { api } from "../Services/AxiosService.js";
import Todo from "../Models/Todo.js";

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
   
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    let res = await api.put(url + todoId, todo);
    //TODO how do you trigger this change
  }

  async removeTodo(todoId) {
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, how do you update the state
  }
}

const todoService = new TodoService();
export default todoService;