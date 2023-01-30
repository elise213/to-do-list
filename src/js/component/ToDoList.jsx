import React, { useState } from "react";

// useState to initialize the to-do list

const ToDoList = () => {
  const [toDoList, setTodos] = useState([
    { id: 1, name: "clean", completed: false },
    { id: 2, name: "dance", completed: false },
    { id: 3, name: "work", completed: false },
  ]);

  // useState to show or hide the delete button
  const [show, setShow] = useState(false);

  // function for the delete button onClick using filter
  function deleteTask(i) {
    setTodos((currentValue) =>
      currentValue.filter((item, index) => index !== i)
    );
  }

  // function to add item to the to-do list
  function addItem(event) {
    event.preventDefault();
    let task = {
      id: Math.floor(Date.now() / 1000),
      name: event.target.toDo.value,
      completed: false,
    };
    setTodos([...toDoList, task]);
    event.target.toDo.value = "";
  }

  // what the component returns
  return (
    <div>
      <h1>To-do</h1>

      <div className="toDoWrapper">

        {/* input form for new to-do items */}
        <div className="input">
          <form onSubmit={addItem}>
            <input
              type="text"
              name="toDo"
              placeholder={
                toDoList[0]
                  ? "What else needs to be done?"
                  : "No tasks. Add a task."
              }
            />
          </form>
        </div>

        {/* list of to-do items */}
        <ul>
          {toDoList.map((todo, i) => {
            return (
              <li
                key={i}
                className="toDoItem"
                // hide or show delete button
                onMouseOver={() => setShow(true)}
                onMouseOut={() => setShow(false)}
              >
                <div className="content">
                  <p>{todo.name}</p>
                  <button
                    className={show ? "d-block" : "d-none"}
                    onClick={() => deleteTask(i)}
                  >
                    X
                  </button>
                </div>
              </li>
            );
          })}

          <div className="counter">
            <p>{`${toDoList.length}` + " items left"}</p>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
