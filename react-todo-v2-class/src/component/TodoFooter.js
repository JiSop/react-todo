import React, { Component } from 'react';

class TodoFooter extends Component {
  render() {
    return (
      <div className="footer">
        <div className="complete-all">
          <input className="custom-checkbox" type="checkbox" id="ck-complete-all"
                 onChange={ this.props.chkAllCompletedTodos }
          />
          <label htmlFor="ck-complete-all">Mark all as complete</label>
        </div>
        <div className="clear-completed">
          <button className="btn"
                  onClick={ this.props.removeCompletedTodos }
          >
            Clear completed
            (<span className="completed-todos">{ this.props.genCompletedTodos }</span>)
          </button>
          <strong className="active-todos"> { this.props.getActiveTodos.length }</strong> items left
        </div>
      </div>
    );
  }
}

export default TodoFooter;