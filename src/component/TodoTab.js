import React from 'react';

const TodoTab = ({ tabState, setTabState }) => {
  const tabs = [ 'All', 'Active', 'Completed' ];

  const activeTab = tab => {
    setTabState( tab );
  };

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

export default TodoTab;