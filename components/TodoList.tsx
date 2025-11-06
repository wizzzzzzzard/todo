import { useState } from 'react';

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const removeTodo = (index: number) => {
    setTodos(todos.filter((todo, i) => i !== index));
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index} className="flex justify-between mb-2">
          <span>{todo}</span>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => removeTodo(index)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}