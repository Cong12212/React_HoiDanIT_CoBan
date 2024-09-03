import React from "react";
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';
class ListTodo extends React.Component {


    state = {
        listTodo: [
            { id: 'Todo 1', title: 'Doing Homework' },
            { id: 'Todo 2', title: 'Play Game' },
            { id: 'Todo 3', title: 'Fix Bug' },
        ],
        editTodo: {}
    }

    addTodo = (todo) => {
        this.setState({
            listTodo: [...this.state.listTodo, todo]
        })
        toast.success("Add Complete")
    }

    handleDeleteTodo = (todo) => {
        console.log('deleteTodo', todo)
        let currentTodo = this.state.listTodo;
        currentTodo = currentTodo.filter(item => item.id != todo.id)
        this.setState({
            listTodo: currentTodo
        })
        toast.success('Delete Success')

    }

    handleEditTodo = (todo) => {

        let { editTodo, listTodo } = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0;
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let listTodoCopy = [...listTodo];

            let objIndex = listTodoCopy.findIndex(item => item.id == todo.id);

            listTodoCopy[objIndex].title = editTodo.title;

            this.setState({
                listTodo: listTodoCopy,
                editTodo: {}
            })
            toast.success('Edit Success')
            return;

        }
        this.setState({
            editTodo: todo
        })
    }

    onChangeHandleEditTodo = (event) => {
        let editToDoCopy = { ...this.state.editTodo }
        editToDoCopy.title = event.target.value
        this.setState({
            editTodo: editToDoCopy
        })
    }

    render() {
        let { listTodo, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        console.log('CheckProp in todo', this.props)
        return (<>
            <div className="todo-list">
                <AddTodo addTodo={this.addTodo} />
                <div className="list-todo-content">
                    {listTodo && listTodo.length > 0 && listTodo.map((item, index) => {
                        return (
                            <div className="todo-child" key={item.id}>
                                {isEmptyObj === true ?
                                    <span>{index + 1}-{item.title} &nbsp; </span>
                                    :
                                    <>
                                        {editTodo.id === item.id ?
                                            <span>{index + 1}-<input
                                                value={editTodo.title}
                                                onChange={(event) => this.onChangeHandleEditTodo(event)}
                                            ></input></span>
                                            :
                                            <span>{index + 1}-{item.title} &nbsp; </span>
                                        }
                                    </>
                                }

                                <button onClick={() => this.handleEditTodo(item)}>
                                    {isEmptyObj === false && editTodo.id === item.id ?

                                        'Save' : 'Edit'}
                                </button> &nbsp;
                                <button onClick={() => this.handleDeleteTodo(item)}>Delete</button>
                            </div>

                        )
                    })}

                </div>
            </div >
        </>

        )
    }

}

export default ListTodo;