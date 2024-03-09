import React from 'react';

import TaskList from '../taskList/taskList.js';

class TaskFormMain extends React.Component {
  constructor({ onDeleted }) {
    super();
    this.onDeleted = onDeleted;
  }

  render() {
    let { todoData } = this.props;

    return (
      <section className="main">
        <TaskList
          todoData={todoData}
          onDeleted={this.onDeleted}
          onChangeItemStatus={this.props.onChangeItemStatus}
        ></TaskList>
      </section>
    );
  }
}

export default TaskFormMain;
