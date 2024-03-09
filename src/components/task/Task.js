import React from 'react';
import { formatDistanceToNow } from 'date-fns';

class Task extends React.Component {
  constructor({ item }) {
    super();
    this.label = item.label;
    this.created = item.created;
    this.id = item.id;
  }

  state = {
    dateFns: null,
  };

  onDate = () => {
    setTimeout(() => {
      this.setState({
        dateFns: formatDistanceToNow(this.created, {
          includeSeconds: true,
        }),
      });
    }, 15 * 1000);
  };

  render() {
    let completed = this.props.item.completed;
    let className = '';

    let { dateFns } = this.state;

    if (completed) {
      className = 'completed';
    }

    if (!dateFns)
      dateFns = formatDistanceToNow(this.created, {
        includeSeconds: true,
      });

    let wrapper = this.onDate;
    wrapper();

    return (
      <li className={className}>
        <div className="view">
          <input
            id={this.id}
            className="toggle"
            type="checkbox"
            checked={this.props.item.completed}
            onChange={this.props.onChangeItemStatus}
          />
          <label for={this.id}>
            <span className="description">{this.label}</span>
            <span className="created">{dateFns}</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy" onClick={this.props.onDeleted}></button>
        </div>
      </li>
    );
  }
}

export default Task;
