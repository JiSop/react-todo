import React from 'react';

const TodoTemplate = ({ children }) => {
  return (
    <div className="container">
      <h1 className="title">React Todo v4</h1>
      <div className="ver">Hook with Redux</div>
      <>{ children }</>
    </div>
  );
};

export default TodoTemplate;