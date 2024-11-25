import React, { useState } from 'react';
import TodoItem from './TodoItem';
import { v4 as uuidv4 } from 'uuid';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodoText, setNewTodoText] = useState('');
  const maxLength = 20; // Максимальная длина задачи

  const addTodo = () => {
    const trimmedText = newTodoText.trim();
    if (trimmedText.length > 0 && trimmedText.length <= maxLength) {
      const newTodo = {
        id: uuidv4(),
        text: trimmedText,
        completed: false, // Добавляем поле completed
      };
      setTodos([...todos, newTodo]);
      setNewTodoText('');
    } else {
      alert(`Длина задачи должна быть от 1 до ${maxLength} символов.`);
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div>
      <h1>Список задач</h1>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Введите задачу..."
        />
        <button className="btn btn-primary mt-2" onClick={addTodo}>Добавить</button>
      </div>
      <ul className="list-group">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={deleteTodo}
            onToggle={toggleComplete} // Передаем функцию для переключения статуса
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

