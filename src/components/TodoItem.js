import React from 'react';

const TodoItem = ({ todo, onDelete, onToggle }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </span>
      <button className="btn btn-danger" onClick={() => onDelete(todo.id)}>
        Удалить
      </button>
    </li>
  );
};

export default TodoItem;

