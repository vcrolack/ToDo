import React from 'react';
import { TodoContext } from '../TodoContext/todoContext';
import './CreateTodoButton.css';

function CreateTodoButton() {
  const {
    setOpenModal,
    openModal,
  } = React.useContext(TodoContext)
  
  const onClickButton = () => {
    setOpenModal(!openModal);
  }


  return (
    <button
      className="CreateTodoButton"
      onClick={onClickButton}
    >+</button>
  );
}

export { CreateTodoButton };