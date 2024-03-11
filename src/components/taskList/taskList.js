import './taskList.css'
import React from 'react'

import Task from '../task/Task.js'

class TaskList extends React.Component {
  constructor({ onDeleted }) {
    super()
    this.onDeleted = onDeleted
  }

  render() {
    let { todoData } = this.props
    let elements = todoData.map((item) => {
      return (
        <Task
          item={item}
          key={item.id}
          onDeleted={() => this.onDeleted(item.id)}
          onChangeItemStatus={() => this.props.onChangeItemStatus(item)}
        />
      )
    })

    return <ul className="todo-list">{elements}</ul>
  }
}

export default TaskList
