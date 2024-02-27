import TaskFormHeader from "../TaskFormHeader/TaskFormHeader";
import TaskFormMain from "../TaskFormMain/TaskFormMain";
import './TaskForm.css'


let TaskForm = () => {
    return (
        <section className='todoapp'>
            <TaskFormHeader></TaskFormHeader>
            <TaskFormMain></TaskFormMain>
        </section>
    )
}

export default TaskForm;