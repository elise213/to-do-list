import React from 'react'

const ToDoList = () => {

    const [todos, setTodos] = React.useState([
        {"id": 1, "name": "clean", "completed": false},
        {"id": 2, "name": "dance", "completed": false},
        {"id": 3, "name": "drink", "completed": false}
    ])

    function completeTask 

  return (
    <div>
       <h1>To-dos</h1> 
       <div className="toDoWrapper"> 
       <form>
        
        <input type="text" name="todo" placeholder={todos[0] ? "addtodo": "notodo, addtodo"}/>
        </form>
       </div>
       <ul>
        {todos.map((todo, i) => {
            return (
                <li key={i} className="todo-item" onMouseOver={() => showdelete} onMouseOut={() => hidedelete}>
                    <p>{todo.name}</p>
                </li>
       
            )
            })}
       </ul>
    </div>
  )
}

export default ToDoList