import React from 'react';

const TodoTemplate = ({ children }) => {
  return (
    <div className="container">
      <h1 className="title">React Todo v3</h1>
      <div className="ver">Hook with ContextAPI</div>
      <>{ children }</>
    </div>
  );
};

export default TodoTemplate;