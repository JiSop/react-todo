import React from 'react';
import './App.css';

import TodoTemplate from "./component/TodoTemplate";
import TodosContainer from "./containers/TodosContainer";

const App = () => {
  return (
    <TodoTemplate>
      <TodosContainer />
    </TodoTemplate>
  );
};

export default App;
