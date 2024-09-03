import React from "react";
import axios from 'axios';
import './ListUsers.scss'
import { useNavigate, useParams } from 'react-router-dom';


function withRouter(Component) {
    return (props) => {
        const navigate = useNavigate();
        const params = useParams();
        // console.log('>>> check prop', params)
        // console.log('>>> check prop', navigate)
        return <Component {...props} navigate={navigate} params={params} />;
    };
}

class ListUsers extends React.Component {


    state = ({
        ListUsers
    })

    componentDidMount() {
        axios.get('https://reqres.in/api/users?page=1')
            .then(res => {
                console.log('>>> ', res.data.data)
                this.setState({
                    ListUsers: res.data.data
                })
            })

    }

    handleViewDetailUser = (user) => {
        this.props.navigate(`/user/${user.id}`);
    }

    render() {
        let { ListUsers } = this.state
        return (
            <>
                <div className="list-user-container">
                    This is all Tech

                    <div className="list-user">
                        {ListUsers && ListUsers.length > 0 && ListUsers.map((item, index) => {
                            return (
                                <div className="child"
                                    onClick={() => this.handleViewDetailUser(item)}>
                                    {index + 1} - {item.last_name} {item.first_name}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </>
        )
    }

}
export default withRouter(ListUsers);