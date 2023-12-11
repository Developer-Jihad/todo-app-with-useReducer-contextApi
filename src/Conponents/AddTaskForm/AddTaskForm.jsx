import { useContext } from "react";
import "./AddTaskForm.css";
import { FaPlus } from "react-icons/fa";
import TaskItem from "../TaskItem/TaskItem";
import { TodoContext } from "../../context/TodoContex";

export default function AddTaskForm() {
  const { state, dispatch } = useContext(TodoContext);
  const handleInputChange = (e) => {
    e.preventDefault();
    dispatch({ type: "HANDLE_INPUTS", payload: e.target.value });
  };

  // Handler function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      id: Date.now(),
      text: state.inputValue,
      completed: false,
    };

    dispatch({ type: "ADD_TODOS", payload: todo });
  };

  return (
    <>
      <div className="todo-app">
        <div>
          <h1 className="title">🎯 My To-Do App ...</h1>
          <form className="main-form" onSubmit={handleSubmit}>
            <label>
              <input 
                required
                className="main-input"
                placeholder="Add your Task"
                type="text"
                value={state.inputValue}
                onChange={handleInputChange}
              />
            </label>

            <button className="submit-btn" type="submit">
              <FaPlus />
            </button>
          </form>
        </div>
        <br />
        <div className="task-container">
          {state.todos.map((todo) => (
            <TaskItem
              key={todo.id}
              dispatch = {dispatch}
              state = {state}
              todo={ todo }
            />
          ))}
        </div>
        <br />
      </div>
    </>
  );
}
