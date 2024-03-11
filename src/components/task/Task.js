import React from 'react'
import { formatDistanceToNow } from 'date-fns'

class Task extends React.Component {
  //часть конструктора написана по стандартам ES2015
  constructor({ item }) {
    super()
    this.created = item.created
    this.id = item.id
    this.state = {
      dateFns: null,
      isChanging: false,
    }
    this.onDate = this.onDate.bind(this)
  }

  //смотрим сколько реально ушло времени на задачу (обновление каждые 15 сек)
  onDate() {
    setTimeout(() => {
      this.setState({
        dateFns: formatDistanceToNow(this.created, {
          includeSeconds: true,
        }),
      })
    }, 15 * 1000)
  }

  //Реагируем на клик по значку editing, смотрим на значение editing у компонента
  onChanging = () => {
    this.setState((state) => {
      return {
        isChanging: !state.isChanging,
      }
    })
  }
  //реагируем на enter и обновляем значение item.label в компоненте TaskForm
  setNewTaskValue = (e) => {
    if (e.code === 'Enter') {
      this.props.onUpdateTaskValue(this.props.item, e.target.value)
      this.onChanging()
    } else {
      return
    }
  }

  render() {
    let completed = this.props.item.completed
    let className = ''

    let { dateFns } = this.state

    if (completed) {
      className = 'completed'
    }

    if (this.state.isChanging && !completed) {
      className = 'editing'
    }

    //форматирование даты через библиотеку
    if (!dateFns)
      dateFns = formatDistanceToNow(this.created, {
        includeSeconds: true,
      })

    this.onDate() //создаем таймер и вызываем таймер каждые 30 сек

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
          <label htmlFor={this.id}>
            <span className="description">{this.props.item.label}</span>
            <span className="created">{dateFns}</span>
          </label>
          <button className="icon icon-edit" onClick={this.onChanging}></button>
          <button className="icon icon-destroy" onClick={this.props.onDeleted}></button>
        </div>
        {this.state.isChanging && (
          <input
            type="text"
            className="edit"
            placeholder="Введи в меня... изменения в таск"
            onKeyUp={this.setNewTaskValue}
          />
        )}
      </li>
    )
  }
}

export default Task
