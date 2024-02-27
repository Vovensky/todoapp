import './taskList.css';

import Task from '../task/Task.js'

const TaskList = () => {
    let arr = [
        {className: 'completed', description: 'Completed task', created: 'created 17 seconds ago'},
        {className: 'editing', description: 'Editing task', created: 'created 17 seconds ago'},
        {className: '', description: 'Active task', created: 'created 5 minutes ago'},
    ];


    let elements = arr.map( (item) => {
        return <Task {...item}/>
    })
    return (
        <ul className='todo-list'>
            {elements}
        </ul>
    )
}

export default TaskList;