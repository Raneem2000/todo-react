import React, { useState } from 'react';
import { Checkbox, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Todo({ todo, toggleComplete, removeTodo }) {
  const [isChecked, setIsChecked] = useState(todo.completed);

  const handleCheckBoxClick = () => {
    toggleComplete(todo.id);
    setIsChecked(!isChecked);
  }

  const handleRemoveClick = () => {
    removeTodo(todo.id);
  }

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Checkbox
        checked={isChecked}
        onClick={handleCheckBoxClick}
        color="primary"
        className={isChecked ? "checked" : ""}
      />
      <Typography
        variant="body1"
        sx={{
          ml: 1,
          flex: 1,
          textDecoration: isChecked ? "line-through" : "none",
        }}
      >
        {todo.task}
      </Typography>
      <IconButton edge="end" aria-label="delete" onClick={handleRemoveClick}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
}
