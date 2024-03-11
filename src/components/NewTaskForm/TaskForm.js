import React from 'react'

import TaskFormHeader from '../TaskFormHeader/TaskFormHeader'
import TaskFormMain from '../TaskFormMain/TaskFormMain'
import Footer from '../Footer/Footer.js'
import './TaskForm.css'

class TaskForm extends React.Component {
  constructor() {
    super()
    this.deleteItem = this.deleteItem.bind(this)
    this.addItem = this.addItem.bind(this)
    this.state = {
      todoData: [this.createItem('Drink coffee'), this.createItem('Learn Javascript'), this.createItem('learn React')],
      sortedByEnd: 'all',
    }
    this.changeItemStatus = this.changeItemStatus.bind(this)
    this.sortByCompleted = this.sortByCompleted.bind(this)
    this.sortByActive = this.sortByActive.bind(this)
    this.showAllTasks = this.showAllTasks.bind(this)
    this.sortAllCompletedTasks = this.sortAllCompletedTasks.bind(this)
  }

  createItem(label) {
    return {
      label: label,
      created: new Date(),
      id: (Math.random() * Math.random()).toFixed(3) * 1000 * Math.random(),
      completed: false,
    }
  }

  deleteItem(item) {
    this.setState((state) => {
      let idx = this.findIdx(state.todoData, item)
      let todoData = [...this.state.todoData.slice(0, idx), ...this.state.todoData.slice(idx + 1)]
      return {
        todoData: todoData,
      }
    })
  }

  addItem(label) {
    this.setState((state) => {
      let newItem = this.createItem(label)
      let oldTodoData = [...state.todoData]
      let newTodoData = [...oldTodoData, newItem]
      return (state.todoData = newTodoData)
    })
  }

  changeItemStatus(item) {
    this.setState((state) => {
      let idx = this.findIdx(state.todoData, item)
      let oldElem = state.todoData[idx]
      let newElem = { ...oldElem, completed: !oldElem.completed }
      return {
        todoData: [...this.state.todoData.slice(0, idx), newElem, ...this.state.todoData.slice(idx + 1)],
      }
    })
  }

  updateTaskValue = (item, eventTargetValue) => {
    this.setState((state) => {
      let idx = this.findIdx(state.todoData, item)
      let oldItem = state.todoData[idx]
      let newItem = { ...oldItem, label: eventTargetValue }
      return {
        todoData: [...this.state.todoData.slice(0, idx), newItem, ...this.state.todoData.slice(idx + 1)],
      }
    })
  }

  findIdx(stateArr, item) {
    let idx = stateArr.findIndex((el) => el.id === item.id)
    return idx
  }

  sortByCompleted() {
    this.setState({ sortedByEnd: true })
  }

  sortByActive() {
    this.setState({ sortedByEnd: false })
  }

  showAllTasks() {
    this.setState({ sortedByEnd: 'all' })
  }

  sortAllCompletedTasks() {
    this.setState((state) => {
      let newArr = state.todoData.filter((elem) => {
        if (elem.completed) return false
        else return true
      })
      return {
        todoData: newArr,
      }
    })
  }

  sortTasks() {
    if (this.state.sortedByEnd === true) {
      return this.state.todoData.filter((el) => el.completed === true)
    } else if (this.state.sortedByEnd === false) {
      return this.state.todoData.filter((el) => el.completed === false)
    } else if (this.state.sortedByEnd === 'all') {
      return this.state.todoData
    }
  }

  render() {
    const itemsLeft = this.state.todoData.filter((el) => !el.completed).length
    let allTasks = this.sortTasks()
    return (
      <section className="todoapp">
        <TaskFormHeader addItem={this.addItem}></TaskFormHeader>
        <TaskFormMain
          todoData={allTasks}
          onDeleted={this.deleteItem}
          onChangeItemStatus={this.changeItemStatus}
          onUpdateTaskValue={this.updateTaskValue}
        ></TaskFormMain>
        <Footer
          onSortByCompleted={this.sortByCompleted}
          onSortByActive={this.sortByActive}
          onShowAllTasks={this.showAllTasks}
          onSortAllCompletedTasks={this.sortAllCompletedTasks}
          itemsLeft={itemsLeft}
        ></Footer>
      </section>
    )
  }
}

export default TaskForm
