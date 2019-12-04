import React from 'react';
import './App.css';

import TodoInput from "./component/TodoInput";
import TodoTab from "./component/TodoTab";
import TodoList from "./component/TodoList";
import TodoFooter from "./component/TodoFooter";
import TodoTemplate from "./component/TodoTemplate";
import { TodosProvider } from "./context/TodosContext";

const App = () => {
  return (
    <TodoTemplate>
      <TodosProvider>
        <TodoInput/>
        <TodoTab/>
        <TodoList/>
        <TodoFooter/>
      </TodosProvider>
    </TodoTemplate>
  );
};

export default App;
