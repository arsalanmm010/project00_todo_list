import { useState } from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import { BiEdit, BiSave } from "react-icons/bi";

export default function Main() {
  const [tasks, setTasks] = useState([]);
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

    setTasks((prev) => [...prev, task]);
    setNewTask("");
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  const handleEditTask = (taskId) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, isEditing: true } : task
      )
    );
  };

  const handleUpdateTask = (taskId, updatedText) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, text: updatedText } : task
      )
    );
  };

  const handleSaveTask = (taskId) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, isEditing: false } : task
      )
    );
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
