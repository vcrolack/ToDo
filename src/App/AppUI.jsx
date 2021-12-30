import React from "react";
import { TodoContext } from "../TodoContext/todoContext";
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

function AppUI () {
  const {
    error,
    loading,
    searchedTodos,
    completeTodos,
    openModal,
    setOpenModal,
    deleteTodo} = React.useContext(TodoContext);

  return (
    <>
    <h1>TODO MACHINE</h1>
    <h3>Organiza tu día con estilo</h3>
    <TodoCounter/>
    <TodoSearch/>
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
      <TodoForm/>
    </Modal>
  )}

  <CreateTodoButton
    setOpenModal={setOpenModal}
  />
  </>
  );
}

export {AppUI};