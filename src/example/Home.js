import React from "react";
import { useNavigate } from "react-router"
import { connect } from "react-redux";

class Home extends React.Component {
    componentDidMount() {
        this.timer = setTimeout(() => {
            window.location.href = '/todo'; // Replace '/target-page' with the actual path you want to navigate to
        }, 1000000); // 3-second delay
    }

    componentWillUnmount() {
        clearTimeout(this.timer); // Clear the timeout if the component unmounts to avoid memory leaks
    }

    handleDeleteUser = (user) => {
        this.props.deleteUserRedux(user);
    }

    handleCreateUser = () => {
        console.log('check add user')
        this.props.addUserRedux()
    }

    render() {
        console.log('check dataRedux', this.props.dataRedux)

        let listUser = this.props.dataRedux;
        return (
            <>
                <div>Hello Home</div>
                <div>
                    {listUser && listUser.length > 0 &&
                        listUser.map((item, index) => {
                            return (
                                <div>
                                    {index + 1} - {item.name} <span onClick={() => this.handleDeleteUser(item)}>x</span>
                                </div>
                            )
                        })}
                    <button onClick={() => this.handleCreateUser()}>Add new</button>
                </div>
            </>
        )
    }

}

const mapStateToProps = (state) => {
    return { dataRedux: state.user }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: () => dispatch({ type: 'ADD_USER' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);