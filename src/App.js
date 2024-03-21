import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo, selectTodos } from './todosSlice';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const [todoText, setTodoText] = useState('');

  const completedCount = todos.filter(todo => todo.completed).length;

  const handleInputChange = (event) => {
    setTodoText(event.target.value);
  };

  const handleAddTodo = () => {
    if (todoText.trim() !== '') {
      dispatch(addTodo(todoText));
      setTodoText('');
    }
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className='container p-5 d-flex flex-column justify-content-center border rounded mt-5 w-75'>
      <h1 className='text-center'>My ToDo list</h1>
      <div>
        
      </div>

      <div class="input-group mb-3 w-50 m-auto">
        <input 
        type="text" 
        class="form-control" 
        placeholder="Enter your todo" 
        aria-label="Enter your todo" 
        aria-describedby="button-addon2" 
        onChange={handleInputChange}
        value={todoText}
        />

        <button class="btn btn-primary" type="button" id="button-addon2" onClick={handleAddTodo}>Add ToDo</button>
      </div>
      <div>
        {todos.map((todo) => (
          <div key={todo.id} className='d-flex w-50 m-auto justify-content-between align-items-center border p-2'
          style={{ backgroundColor: todo.completed ? '#AFE1AF' : 'transparent' }} >
            <div className='d-flex'>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
            />
            <span className='p-2' >
              {todo.text}
            </span>
            </div>
            <button className='btn btn-danger' onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </div>
        ))}

        <div className="w-50 m-auto pt-2">Total Completed Items: {completedCount}</div>
      </div>
    </div>
  );
}

export default App;