import "./index.css"
import { useState } from "react"
import Todo from "../todo/Todo.jsx"
import { todos } from "../../data/todoData.js"

const TodoLists = ({timing}) => {
    const [todoList, setTodoList] = useState(todos)
    
    let filter = timing
    let lista = todoList.filter((singleTodo) => singleTodo.timing === filter)

    return (
      <div className="todoContainer" id={timing}>
           {lista.map((todo) => (
          <Todo id={todo.id} time={todo.timing} text={todo.title} state={todo.completed}/>
      ))}
      </div>
         )
}

export default TodoLists