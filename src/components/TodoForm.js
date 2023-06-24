import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import PlusIcon from "@mui/icons-material/Add";


const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  const handleInputChange = (e) => {
    setTodo({ ...todo, task: e.target.value });
  };

  const handleForm = (e) => {
    e.preventDefault();
    addTodo({
      ...todo,
      id: Math.random(),
    });
    setTodo({ ...todo, task: "" });
  };

  return (
    
    <form className="todo-form" onSubmit={handleForm}>
      <TextField
        label="Add a new job"
        id="margin-dense"
        margin="dense"
        type="text"
        value={todo.task}
        onChange={handleInputChange}
      />
      <Button type="submit" variant="contained" color="secondary"sx={{ margin: "15px 0 0 2px" }} >
        <PlusIcon color="primary" />
      </Button>
    </form>
  );
};

export default TodoForm;
