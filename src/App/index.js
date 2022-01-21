import React from 'react';
import { useTodos } from './useTodos';
import { TodoHeader } from "../TodoHeader/TodoHeader";
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoItem } from '../TodoItem/TodoItem';
import {TodoSearch} from '../TodoSearch/TodoSearch'
import { TodoList } from '../TodoList/TodoList';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { Modal } from "../modal/modal";
import { TodoForm } from "../TodoForm/TodoForm";
import {TodosError} from '../TodosError/TodosError';
import {TodosLoading} from '../TodosLoading/TodosLoading';
import {EmptyTodos} from '../EmptyTodos/EmptyTodos';




function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodos,
    openModal,
    setOpenModal,
    deleteTodo,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
  } = useTodos();


  return (
    <>
    <h1>TODO MACHINE</h1>
    <h3>Organiza tu día con estilo</h3>
    <TodoHeader>
      <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
    </TodoHeader>

    <TodoList>
    {loading && new Array(5).fill(1).map((a, i) => <TodosLoading key={i}/>)}
    {error && <TodosError error={error} />}
    {(!loading && !searchedTodos.length) && <EmptyTodos/>}

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

  {!!openModal && (
    <Modal>
      <TodoForm
        addTodo={addTodo}
        setOpenModal={setOpenModal}
      />
    </Modal>
  )}

  <CreateTodoButton
    setOpenModal={setOpenModal}
    openModal={openModal}
  />
  </>
  );
}

export default App;
