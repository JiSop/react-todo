import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "HTML", completed: false },
      { id: 2, content: "CSS", completed: true },
      { id: 3, content: "Javascript", completed: false }
    ],
    inputVal: "",
    tabs: [ "All", "Active", "Completed" ],
    tabActiveStatus: "All"
  };

  get getActiveTodos() {
    return this.state.todos.filter( todo => todo.completed === false );
  }

  get genCompletedTodos() {
    return this.state.todos.length - this.getActiveTodos.length;
  }

  genId = () => {
    return this.state.todos.length
      ? Math.max( ...this.state.todos.map( todo => todo.id ) ) + 1
      : 1;
  };

  onChangeInput = e => {
    this.setState( { inputVal: e.target.value } );
    console.log( this.state.inputVal );
  };

  onSubmitForm = e => {
    e.preventDefault();
    if ( !this.state.inputVal.trim() ) return;
    this.setState( {
      todos: [
        ...this.state.todos,
        { id: this.genId(), content: this.state.inputVal, completed: false }
      ]
    } );
    this.setState( { inputVal: "" } );
  };

  removeTodo = id => {
    this.setState( {
      todos: this.state.todos.filter( todo => todo.id !== id )
    } );
  };

  toggleChk = id => {
    this.setState( {
      todos: this.state.todos.map( todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    } );
  };

  activeTab = tab => {
    this.setState( { tabActiveStatus: tab } );
  };

  chkAllCompletedTodos = e => {
    this.setState( {
      todos: this.state.todos.map( todo => ( {
        ...todo,
        completed: e.target.checked
      } ) )
    } );
  };

  removeCompletedTodos = () => {
    this.setState( { todos: this.getActiveTodos } );
  };

  render() {
    return (
      <>
        <div className="container">
          <h1 className="title">React Todo v1</h1>
          <div className="ver">Class</div>

          <form onSubmit={ this.onSubmitForm }>
            <input
              className="input-todo"
              placeholder="What needs to be done?"
              value={ this.state.inputVal }
              onChange={ this.onChangeInput }
              autoFocus
            />
          </form>

          <ul className="nav">
            { this.state.tabs.map( tab => (
              <li
                className={ this.state.tabActiveStatus === tab ? "active" : "" }
                onClick={ () => {
                  this.activeTab( tab );
                } }
              >
                { tab }
              </li>
            ) ) }
          </ul>

          <ul className="todos">
            { this.state.todos
              .filter( todo => {
                if ( this.state.tabActiveStatus === "Active" ) {
                  return !todo.completed;
                }
                if ( this.state.tabActiveStatus === "Completed" ) {
                  return todo.completed;
                }
                return true;
              } )
              .map( todo => {
                return (
                  <li className="todo-item" key={ todo.id } id={ todo.id }>
                    <input
                      className="custom-checkbox"
                      type="checkbox"
                      id={ `ck-${ todo.id }` }
                      checked={ todo.completed }
                      onChange={ () => {
                        this.toggleChk( todo.id );
                      } }
                    />
                    <label htmlFor={ `ck-${ todo.id }` }>{ todo.content }</label>
                    <i
                      className="remove-todo far fa-times-circle"
                      onClick={ () => {
                        this.removeTodo( todo.id );
                      } }
                    />
                  </li>
                );
              } ) }
          </ul>

          <div className="footer">
            <div className="complete-all">
              <input
                className="custom-checkbox"
                type="checkbox"
                id="ck-complete-all"
                onChange={ this.chkAllCompletedTodos }
              />
              <label htmlFor="ck-complete-all">Mark all as complete</label>
            </div>
            <div className="clear-completed">
              <button className="btn" onClick={ this.removeCompletedTodos }>
                Clear completed (
                <span className="completed-todos">
                  { this.genCompletedTodos }
                </span>
                )
              </button>
              <strong className="active-todos">
                { " " }
                { this.getActiveTodos.length }{ " " }
              </strong>
              items left
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
