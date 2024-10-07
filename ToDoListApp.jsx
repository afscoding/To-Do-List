import React, { useState } from "react";
import styles from "./ToDoListAppStyles.module.css";

function ToDoListApp() {
  const [tasks, setTasks] = useState([
    "EAt breackfast",
    "walk the dog",
    "........................................................................................Hello",
    "bye👋",
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      addTask();
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      // THE FORMULA IS: [[index], [index-1]] = [[index-1], [index]]
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];

      setTasks(updatedTasks);
    }
  }

  function moveTaskdown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      // THE FORMULA IS: [[index], [index-1]] = [[index-1], [index]]
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];

      setTasks(updatedTasks);
    }
  }

  return (
    <section id="ToDoList" className={styles.container}>
      <div className={styles.toDoListContainer}>
        <h1>TO DO LIST</h1>
        <div className={styles.inputAdd}>
          <input
            type="text"
            value={newTask}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Enter a task..."
            className={styles.inputText}
          />
          <button onClick={addTask} className={styles.addButton}>
            Add
          </button>
        </div>

        <ol>
          {tasks.map((task, index) => (
            <li key={index} className={styles.toDoListContainerLi}>
              <div className={styles.listDeleteBtnMoveBtn}>
                <span className={styles.textList}>{task}</span>
                <div className={styles.deletMoveButtons}>
                  <button
                    className={styles.deleteButton}
                    onClick={() => deleteTask(index)}
                  >
                    Delete
                  </button>

                  <button
                    className={styles.moveButton}
                    onClick={() => moveTaskUp(index)}
                  >
                    Move Up 👆
                  </button>

                  <button
                    className={styles.moveButton}
                    onClick={() => moveTaskdown(index)}
                  >
                    Move Down 👇
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default ToDoListApp;
