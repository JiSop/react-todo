import React, { useContext, useCallback } from 'react';
import TodosContext from "../context/TodosContext";

const TodoTab = () => {
  const tabs = [ 'All', 'Active', 'Completed' ];
  const { state, action } = useContext( TodosContext );
  const { tabState } = state;
  const { setTabState } = action;

  const activeTab = useCallback(tab => {
    setTabState( tab );
  }, [ setTabState ] );

  return (
    <ul className="nav">
      { tabs.map( tab => (
        <li
          key={ tab }
          className={ tabState === tab ? "active" : "" }
          onClick={ () => activeTab( tab ) }
        >
          { tab }
        </li>
      ) ) }
    </ul>
  );
};

export default React.memo( TodoTab );