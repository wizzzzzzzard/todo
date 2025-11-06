import { useState } from 'react';
import TodoList from './TodoList';

export default function TodoForm() {
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      // add todo logic here
      setNewTodo('');
    }
  };

  return (
    <form className="flex flex-col">
      <input type="text" className="py-2 pl-10 text-sm text-gray-700" placeholder="Add new todo" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={addTodo}>Add Todo</button>
    </form>
  );
}