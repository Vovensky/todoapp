import React from "react";


class TaskFormHeader extends React.Component {
    cons

    state = {
        inputValue: '',
    }

    onChange =(e) => {
        this.setState({inputValue: e.target.value})
    }

    dispatchEvent = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.inputValue);
        this.setState({inputValue: ''})
    }

    render () {

        let {inputValue} = this.state;
        return (
            <header>
                <form onSubmit={this.dispatchEvent}
                    >
                    <h1 >Todos</h1>
                    <input className='new-todo' 
                            placeholder="What needs to be done"
                            value={inputValue}
                            onChange={this.onChange}
                            />
                </form>
            </header>
        )
    }

}

export default TaskFormHeader;