import React from 'react'
class Footer extends React.Component {
  constructor({ onSortByCompleted, onSortByActive, onShowAllTasks, onSortAllCompletedTasks }) {
    super()
    this.onSortByCompleted = onSortByCompleted
    this.onSortByActive = onSortByActive
    this.onShowAllTasks = onShowAllTasks
    this.onSortAllCompletedTasks = onSortAllCompletedTasks
  }

  render() {
    return (
      <footer className="footer">
        <span className="todo-count">{this.props.itemsLeft} items left</span>
        <ul className="filters">
          <li>
            <button onClick={this.onShowAllTasks}>All</button>
          </li>
          <li>
            <button onClick={this.onSortByActive}>Active</button>
          </li>
          <li>
            <button onClick={this.onSortByCompleted}>Completed</button>
          </li>
        </ul>
        <button className="clear-completed" onClick={this.onSortAllCompletedTasks}>
          Clear completed
        </button>
      </footer>
    )
  }
}

export default Footer
