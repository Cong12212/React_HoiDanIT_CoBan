import React from "react";

class AddComponent extends React.Component {
    state = {
        title: '',
        salary: '',
    }

    handleOnchangeFirstName = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleOnchangeLastName = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleOnclickSubmit = (event) => {
        event.preventDefault()

        if (!this.state.title || !this.state.salary) {
            alert('missing requied')
            return;
        }
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary + '$',
        })
        this.setState({
            title: '',
            salary: ''
        })
    }




    render() {
        return (
            <>
                <div>
                    <form action="/action_page.php">
                        <label htmlFor="fname">Job's Title:</label><br />
                        <input type="text"
                            value={this.state.title}
                            onChange={(event) => this.handleOnchangeFirstName(event)}
                        /><br />
                        <label htmlFor="lname">Salary:</label><br />
                        <input type="text"
                            value={this.state.salary}
                            onChange={(event) => this.handleOnchangeLastName(event)
                            } /><br />
                        <input type="submit" value="Submit"
                            onClick={(event) => this.handleOnclickSubmit(event)}
                        />
                    </form>
                </div>
            </>
        )
    }

}
export default AddComponent