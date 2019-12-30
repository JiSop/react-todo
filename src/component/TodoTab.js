import React, { Component } from 'react';

class TodoTab extends Component {
  render() {
    return (
      <ul className="nav">
        { this.props.tabs.map( tab => (
          <li className={ this.props.tabActiveStatus === tab ? 'active' : '' }
              key={ tab }
              onClick={ () => { this.props.activeTab( tab ) } }
          >
            { tab }
          </li>
        ) ) }
      </ul>
    );
  }
}

export default TodoTab;