import { useState } from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import { BiEdit, BiSave } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  deleteTask,
  editTask,
  saveTask,
  updateTask,
} from "../redux/actions/index";
import "../sass/index.scss";

export default function Main() {
  const { tasks } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState("");

  function handleChange(e) {
    setNewTask(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newTask) return alert("Please enter a task");

    const task = {
      id: Date.now(),
      text: newTask,
      isEditing: false, // Add isEditing property to track edit state
    };

    dispatch(addTask(task));
    setNewTask("");
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleEditTask = (taskId) => {
    dispatch(editTask(taskId));
  };

  const handleUpdateTask = (taskId, updatedText) => {
    dispatch(updateTask(taskId, updatedText));
  };

  const handleSaveTask = (taskId) => {
    const task = tasks.find((task) => task.id === taskId);

    if (!task.text) {
      alert("Please enter a task");
      return;
    }

    dispatch(saveTask(taskId));
  };

  return (
    <div className="main">
      <h1 className="main-h">Your ToDo List</h1>
      <div className="form-div">
        <form className="form" onSubmit={handleSubmit}>
          <input
            className="form-input"
            type="text"
            placeholder="Enter a task"
            value={newTask}
            onChange={handleChange}
          />
          <button type="submit" className="form-b">
            Submit
          </button>
        </form>
        <ol className="list">
          {tasks.map((task) => (
            <li key={task.id} className="list-item">
              {task.isEditing ? (
                <>
                  <input
                    className="update-input"
                    type="text"
                    value={task.text}
                    onChange={(e) => handleUpdateTask(task.id, e.target.value)}
                  />
                  <button
                    className="save-button butt"
                    onClick={() => handleSaveTask(task.id)}
                  >
                    <BiSave />
                  </button>
                </>
              ) : (
                <>
                  {task.text}
                  <button
                    className="edit-button butt"
                    onClick={() => handleEditTask(task.id)}
                  >
                    <BiEdit />
                  </button>
                </>
              )}
              <button
                className="delete-button"
                onClick={() => handleDeleteTask(task.id)}
              >
                <RiDeleteBin2Line />
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
