import React from "react";

class AddTodo extends React.Component {

    state = {
        title: ''
    }

    handleOnchange = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleAddTodo = () => {

        if (!this.state.title) {
            alert('Missing Title')
            return
        }
        let todo = {
            id: Math.floor(Math.random() * 1001),
            title: this.state.title
        }
        this.setState({
            title: ''
        })
        this.props.addTodo(todo)
    }

    render() {
        let { title } = this.state
        return (
            <div className="todo-add">
                <input type="text"
                    value={title}
                    onChange={(event) => this.handleOnchange(event)}>
                </input>
                <button
                    type="button"
                    onClick={() => this.handleAddTodo()}
                >Add</button>
            </div>
        )
    }
}
export default AddTodo