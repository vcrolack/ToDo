import React from 'react';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import {TodoSearch} from './TodoSearch'
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: false},
  { text: 'Tomar el curso de intro a React', completed: false},
  { text: 'Llorar con la llorona', completed: false},
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos)
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >=1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];

    newTodos[todoIndex].completed = true;
    setTodos(newTodos);

    /*todos[todoIndex] = {
      text: todos[todoIndex].text,
      completed: true,
    }; */
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <>
    <h1>TODO MACHINE</h1>
    <h3>Organiza tu día con estilo</h3>
    <TodoCounter
      total={totalTodos}
      completed={completedTodos}
    />
    <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
    />
    <TodoList>
      {searchedTodos.map(todo => (
        <TodoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodos(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
        />
      ))}
    </TodoList>
    <CreateTodoButton/>
  </>
  );
}

export default App;
