
import { useState } from "react";
import "./App.css";
// import Header from "./components/header";
// import ToDoList from "./components/ToDoList";

// function App() {
//   return (
//     <>
//       <Header />
//       <ToDoList />
//     </>
//   );
// }

// export default App;

function ToDoList() {
  const [todoList,setToDoList]= useState([
    { id: 1, name: "study for unit test", isComplete: true},
    { id: 2, name: "do your assignment", isComplete: true},
    { id: 3, name: "make a word document", isComplete: true},
    { id: 4, name: "make a slides", isComplete: true},
    { id: 5, name: "visit office", isComplete: true},
  ]);
  const [inputValue, setInputValue] = useState("");
  
  const addTask = () => {
    if (inputValue.trim() === "") return;

    const newTask = {
      id: Math.max(...todoList.map((t) => t.id), 0) + 1,
      name: inputValue,
      isComplete: false,
    };
    setToDoList([...todoList, newTask]);
    setInputValue("");
  };
  
  return (
    <>
      <div className="task-input-container">
        <input
          className="task-input"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addTask()}
          placeholder="Enter a new task"
        />
        <button className="add-task-btn" onClick={addTask}>
          Add Task
        </button>
      </div>
      <ul>
        {todoList.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}

function Header() {
  return <h1>ToDo List</h1>;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Click here</button>

      <h1>Count: {count}</h1>

      <Header />
      <ToDoList />
    </>
  );
}

export default App;
