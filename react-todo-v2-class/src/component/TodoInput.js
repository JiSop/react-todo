import React, { Component } from 'react';

class TodoInput extends Component {
  render() {
    return (
      <form onSubmit={ this.props.onSubmitForm }>
        <input className="input-todo" placeholder="What needs to be done?"
               value={ this.props.inputVal }
               onChange={ this.props.onChangeInput }
               autoFocus
        />
      </form>
    );
  };
}

export default TodoInput;