import React, { Component } from 'react';
import './App.css';

import TodoInput from "./component/TodoInput";
import TodoTab from "./component/TodoTab";
import TodoList from "./component/TodoList";
import TodoFooter from "./component/TodoFooter";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'HTML', completed: false },
      { id: 2, content: 'CSS', completed: true },
      { id: 3, content: 'Javascript', completed: false }
    ],
    inputVal: ``,
    tabs: [
      'All',
      'Active',
      'Completed'
    ],
    tabActiveStatus: 'All'
  };

  get getActiveTodos() {
    return this.state.todos.filter( todo => todo.completed === false );
  }

  get genCompletedTodos() {
    return this.state.todos.length - this.getActiveTodos.length;
  }

  genId = () => {
    return this.state.todos.length ? Math.max( ...this.state.todos.map( todo => todo.id ) ) + 1 : 1;
  };

  onChangeInput = ( e ) => {
    this.setState( { inputVal: e.target.value } );
  };

  onSubmitForm = ( e ) => {
    e.preventDefault();
    if ( !( this.state.inputVal.trim() ) ) return;
    this.setState( prevState => {
      return {
        todos: [ ...prevState.todos, {
          id: this.genId(),
          content: this.state.inputVal,
          completed: false
        } ],
        inputVal: ``
      };
    } );
  };

  removeTodo = ( id ) => {
    this.setState( prevState => {
      return {
        todos: prevState.todos.filter( todo => todo.id !== id )
      };
    } );
  };

  toggleChk = ( id ) => {
    this.setState( prevState => {
      return {
        todos: prevState.todos.map( todo => ( todo.id === id ? { ...todo, completed: !todo.completed } : todo ) ),
      };
    } );
  };

  activeTab = ( tab ) => {
    this.setState( { tabActiveStatus: tab } );
  };

  chkAllCompletedTodos = ( e ) => {
    const checked = e.target.checked;
    this.setState( prevState => {
      return {
        todos: prevState.todos.map( todo => ( { ...todo, completed: checked } ) ),
      };
    } );
  };

  removeCompletedTodos = () => {
    this.setState( { todos: this.getActiveTodos } );
  };

  render() {
    return (
      <>
        <div className="container">
          <h1 className="title">React Todo v2</h1>
          <div className="ver">Class</div>

          <TodoInput inputVal={ this.state.inputVal }
                     onChangeInput={ this.onChangeInput }
                     onSubmitForm={ this.onSubmitForm }
          />

          <TodoTab tabs={ this.state.tabs }
                   tabActiveStatus={ this.state.tabActiveStatus }
                   activeTab={ this.activeTab }
          />

          <TodoList todos={ this.state.todos }
                    tabActiveStatus={ this.state.tabActiveStatus }
                    toggleChk={ this.toggleChk }
                    removeTodo={ this.removeTodo }
          />

          <TodoFooter chkAllCompletedTodos={ this.chkAllCompletedTodos }
                      removeCompletedTodos={ this.removeCompletedTodos }
                      genCompletedTodos={ this.genCompletedTodos }
                      getActiveTodos={ this.getActiveTodos }
          />
        </div>
      </>
    )
  };
}

export default App;
