import React from 'react';
import { TodoContext } from '../TodoContext/todoContext';
import './TodoSearch.css';



function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };
  return (
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      onChange={onSearchValueChange}
      value={searchValue}
    />
  );
}

export { TodoSearch };