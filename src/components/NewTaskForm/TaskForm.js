import TaskFormHeader from "../TaskFormHeader/TaskFormHeader";
import TaskFormMain from "../TaskFormMain/TaskFormMain";
import Footer from '../Footer/Footer.js';
import './TaskForm.css'
import React from 'react'



class TaskForm extends React.Component {
    constructor() {
        super()
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    state = {
        todoData: [
            this.createItem('Drink coffee'),
            this.createItem('Learn Javascript'),
            this.createItem('learn React')
        ],

    }

    createItem(label) {
        return {
            label: label,
            created: new Date(),
            id: (Math.random() * Math.random()).toFixed(3) * 1000,
            completed: false,
        }
    }

    deleteItem(id) {
        this.setState( state => {
            let idx = state.todoData.findIndex( (el) => el.id === id);
            let todoData = [...this.state.todoData.slice(0, idx), ...this.state.todoData.slice(idx+1)]
            return {
                todoData: todoData
            }
        })
    }

    addItem = (label) => {
       this.setState( state => {
            let newItem = this.createItem(label)
            let oldTodoData = [...state.todoData];
            let newTodoData = [
                ...oldTodoData,
                newItem
            ];
            return state.todoData = newTodoData
        }) 
    }

    changeItemStatus = ({id}) => {
        this.setState( state => {
            let idx = state.todoData.findIndex( (el) => el.id === id);
            let oldElem = state.todoData[idx];
            let newElem =   {...oldElem, 
                            completed: !oldElem.completed}
            return {
                todoData: [...this.state.todoData.slice(0, idx),
                          newElem,
                          ...this.state.todoData.slice(idx+1)]
            }
        })
    }

    sortByCompleted = () => {
        this.setState({sortedByEnd: true})
    }

    sortByActive = () => {
        this.setState({sortedByEnd: false})
    }

    showAllTasks = () => {
        this.setState({sortedByEnd: 'all'})
    }

    sortAllCompletedTasks = () => {
        this.setState(state => {
            let newArr = state.todoData.filter( elem => {
                if(elem.completed) return false
                else return true

            })
            return {
                todoData: newArr
            }
        })
    }

    render() {
        let itemsLeft = this.state.todoData.filter(el => !el.completed).length
        let allTasks = this.state.todoData
        if(this.state.sortedByEnd === true) {
            allTasks = this.state.todoData.filter(el => el.completed === true)
        } else if (this.state.sortedByEnd === false) {
            allTasks = this.state.todoData.filter(el => el.completed === false)
        } else if(this.state.sortedByEnd === 'all') {
            allTasks = this.state.todoData
        }
        return (
            <section className='todoapp'>
                <TaskFormHeader addItem={this.addItem}></TaskFormHeader>
                <TaskFormMain   todoData = {allTasks} 
                                onDeleted= {this.deleteItem}
                                onChangeItemStatus={this.changeItemStatus}>
                </TaskFormMain>
                <Footer onSortByCompleted = {this.sortByCompleted}
                        onSortByActive = {this.sortByActive}
                        onShowAllTasks = {this.showAllTasks}
                        onSortAllCompletedTasks={this.sortAllCompletedTasks}
                        itemsLeft={itemsLeft}></Footer>
            </section>
        )
    }
}

export default TaskForm;