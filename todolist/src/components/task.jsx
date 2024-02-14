import { CheckCircle2, XCircle } from "lucide-react";
import React from "react";
import "./task.css";

function Task({ id, name, remove, checked, complete }) {
  return (
    <div className="task">
      <p className="text" style={{ color: complete ? "#71d91c" : "#fff" }}>
        {name}
      </p>
      <div className="icons">
        <CheckCircle2 onClick={() => checked(id)} />
        <XCircle onClick={() => remove(id)} />
      </div>
    </div>
  );
}

export default Task;
