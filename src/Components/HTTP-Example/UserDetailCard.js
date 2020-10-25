import React from "react";
import Axios from "axios";
class UserDetailCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            user : [],
            error :''
        }

    }

    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/users').then(
            (response) => {
                this.setState({
                    ...this.state,
                    user : response.data
                })
            }
        ).catch(
            (error) => {
                this.setState({
                    ...this.state,
                    error : error
                })
            }
        );
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <h3>User List</h3>
                        </div>
                    </div>
                    <div className="row">
                        <table className="table table-striped table-info table-bordered">
                            <thead className="bg-dark text-center text-white">
                            <th>id</th>
                            <th>name</th>
                            <th>email</th>
                            <th>company</th>
                            <th>city</th>
                            </thead>
                            <tbody>
                            {
                                this.state.user.length > 0 ? <React.Fragment>
                                    {
                                        this.state.user.map(u => {
                                            return(
                                                <tr key={u.id} className="text-center">
                                                    <td>{u.id}</td>
                                                    <td>{u.name}</td>
                                                    <td>{u.email}</td>
                                                    <td>{u.company.name}</td>
                                                    <td>{u.address.city}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </React.Fragment> : <h3 className="text-center">
                                    No records
                                </h3>
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}
export default UserDetailCard;