import React, { useState, createContext }from 'react';

function createBulkTodos() {
  const arr = [];
  for (let i = 1; i < 2500; i++) {
    arr.push(
      {
        id: i,
        content: `할일 ${i}`,
        completed: false
      }
    );
  }
  return arr;
}

const TodosContext = createContext( {
  state: {
    todos: [],
    tabState: 'All',
  },
  action: {
    setTodos: () => {},
    setTabState: () => {},
  },
} );

const TodosProvider = ({ children }) => {
  const [ todos, setTodos ] = useState( createBulkTodos );
  const [ tabState, setTabState ] = useState( 'All' );

  const value = {
    state: { todos, tabState },
    action: { setTodos, setTabState },
  };

  return (
    <TodosContext.Provider value={ value }>
      { children }
    </TodosContext.Provider>
  );
};

// const { Consumer: TodosConsumer } = TodosContext;
// export { TodosConsumer };

export { TodosProvider };
export default TodosContext;
