// import React from "react";
// import { withRouter } from 'react-router-dom'

// class DetailUser extends React.Component {

//     render() {
//         console.log('check prop', this.props)
//         return (
//             <div>Hello detail user</div>
//         )
//     }
// }

// export default withRouter(DetailUser);
import React from "react";
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";

function withRouter(Component) {
    return (props) => {
        const navigate = useNavigate();
        const params = useParams();
        // console.log('>>> check prop', params)
        // console.log('>>> check prop', navigate)
        return <Component {...props} navigate={navigate} params={params} />;
    };
}

class DetailUser extends React.Component {

    state = {
        user: {}
    }

    async componentDidMount() {
        if (this.props.params) {
            let id = this.props.params.id;
            let res = await axios.get(`https://reqres.in/api/users/${id}`)

            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {}
            })
            console.log('>>> check user', this.state.user)
        }
    }

    handleBackButton = () => {
        this.props.navigate('/user')
    }


    render() {
        let { user } = this.state;
        let isEmptyObj = Object.keys(user).length === 0;
        return (
            <>
                <div>Hello detail user id: {this.props.params.id}</div>

                {isEmptyObj === false &&
                    <>
                        <div>User's name: {user.first_name} - {user.last_name}</div>
                        <div>User's email: {user.email}</div>
                        <div>
                            <img src={user.avatar} />
                        </div>
                        <div>
                            <button type="button" onClick={() => this.handleBackButton()}>Back</button>
                        </div>
                    </>}
            </>
        );
    }
}

export default withRouter(DetailUser);
