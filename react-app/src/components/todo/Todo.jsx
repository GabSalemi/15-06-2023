import "./index.css"
import { todos } from "../../data/todoData.js"

const Todo = (props) => {
    
  
    const addDone = (e) => {
        
        const thisTodo = todos.find((element) => (element.title === e.target.textContent))

            thisTodo.completed === true ? thisTodo.completed = false : thisTodo.completed = true

            return 
        
        
    }


    return (
            <div className="todo__element" key={props.id} onClick={addDone}>
                    <h3 className={props.time}>{props.text}</h3>
                    {props.state === true ? <div className="done"></div> : null}
            </div>)
         
}

export default Todo