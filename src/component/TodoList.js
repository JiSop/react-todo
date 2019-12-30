import React, { Component } from "react";

class TodoList extends Component {
  render() {
    return (
      <ul className="todo-list">
        { this.props.todos.filter( todo => {
          if ( this.props.tabActiveStatus === 'Active' ) {
            return !todo.completed;
          }
          if ( this.props.tabActiveStatus === 'Completed' ) {
            return todo.completed;
          }
          return true;
        } ).map( todo => {
          return (
            <li className="todo-item" key={ todo.id + todo.content } id={ todo.id }>
              <input className="custom-checkbox" type="checkbox" id={ `ck-${ todo.id }` }
                     checked={ todo.completed }
                     onChange={ () => { this.props.toggleChk( todo.id ) } }
              />
              <label htmlFor={ `ck-${ todo.id }` }>
                { todo.content }
              </label>
              <i className="remove-todo far fa-times-circle"
                 onClick={ () => { this.props.removeTodo( todo.id ) } }
              >
              </i>
            </li>
          );
        } ) }
      </ul>
    );
  }
}

export default TodoList;