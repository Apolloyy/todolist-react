import { PlusCircle } from "lucide-react";
import { useState } from "react";
import "./App.css";
import Task from "./components/task.jsx";

function App() {
  const [text, setText] = useState("");
  const [task, setTask] = useState([]);
  const [id, setId] = useState(0);

  const taskAdd = () => {
    if (text) {
      setId(id + 1);
      setTask([...task, { id, name: text, complete: false }]);
      setText("");
    }
  };

  const taskCheck = (Id) => {
    const newTask = task.map((item) =>
      item.id === Id ? { ...item, complete: !item.complete } : item
    );
    setTask(newTask);
  };

  const taskRemove = (Id) => {
    setTask(task.filter((task) => task.id !== Id));
    setText("");
  };

  return (
    <>
      <div className="container">
        <div className="form-group">
          <h1>Todo List React</h1>
          <form action="">
            <input
              type="text"
              placeholder="Adicione tarefas"
              maxLength={20}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <PlusCircle size={40} onClick={taskAdd} />
          </form>
        </div>
        {task.map((item) => (
          <Task
            key={item.id}
            id={item.id}
            name={item.name}
            checked={taskCheck}
            remove={taskRemove}
            complete={item.complete}
          />
        ))}
      </div>
    </>
  );
}

export default App;
