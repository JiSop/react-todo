import React, { useState } from 'react';
import './App.css';

import TodoInput from "./component/TodoInput";
import TodoTab from "./component/TodoTab";
import TodoList from "./component/TodoList";
import TodoFooter from "./component/TodoFooter";
import TodoTemplate from "./component/TodoTemplate";

const App = () => {
  const [ todos, setTodos ] = useState( [] );
  const [ tabState, setTabState ] = useState( 'All' );

  return (
    <TodoTemplate>
      <TodoInput
        todos={ todos }
        setTodos={ setTodos }
      />
      <TodoTab
        tabState={ tabState }
        setTabState={ setTabState }
      />
      <TodoList
        tabState={ tabState }
        todos={ todos }
        setTodos={ setTodos }
      />
      <TodoFooter
        todos={ todos }
        setTodos={ setTodos }
      />
    </TodoTemplate>
  );
};

export default App;
