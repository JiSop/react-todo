import React from 'react';

const TodoTab = ( { onActiveTab, tabState } ) => {

  const tabs = [ 'All', 'Active', 'Completed' ];

  return (
    <ul className="nav">
      { tabs.map( tab => (
        <li
          key={ tab }
          className={ tabState === tab ? "active" : "" }
          onClick={ () => onActiveTab( tab ) }
        >
          { tab }
        </li>
      ) ) }
    </ul>
  );
};

export default React.memo( TodoTab );