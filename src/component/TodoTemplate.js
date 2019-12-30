import React from 'react';

const TodoTemplate = ({ children }) => {
  return (
    <div className="container">
      <h1 className="title">React Todo v2</h1>
      <div className="ver">Hook</div>
      <div>{ children }</div>
    </div>
  );
};

export default TodoTemplate;