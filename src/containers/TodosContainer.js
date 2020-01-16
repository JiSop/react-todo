import React from 'react';
import { connect } from 'react-redux';
import { changeInput, insert, toggle, remove, toggleAll, removeCompleted, activeTab } from '../modules/todos';
import TodoInput from "../component/TodoInput";
import TodoTab from "../component/TodoTab";
import TodoList from "../component/TodoList";
import TodoFooter from "../component/TodoFooter";

const TodosContainer = ( { input, todos, tabState, changeInput, insert, toggle, remove, toggleAll, removeCompleted, activeTab } ) => {
  return (
    <>
      <TodoInput
        input={ input }
        onChangeInput={ changeInput }
        onInsert={ insert }
      />
      <TodoTab
        onActiveTab={ activeTab }
        tabState={ tabState }
      />
      <TodoList
        todos={ todos }
        tabState={ tabState }
        onToggle={ toggle }
        onRemove={ remove }
      />
      <TodoFooter
        todos={ todos }
        onToggleAll={ toggleAll }
        onRemoveCompleted={ removeCompleted }
      />
    </>
  );
};

export default connect( ( { todos } ) => (
    {
      input: todos.input,
      todos: todos.todos,
      tabState: todos.tabState,
    }
  ),
  {
    changeInput,
    insert,
    toggle,
    remove,
    toggleAll,
    removeCompleted,
    activeTab
  },
)( TodosContainer );