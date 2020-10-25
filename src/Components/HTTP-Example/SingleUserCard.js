import React from "react";
import Axios from "axios";
class SingleUserCard extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            users : '',
            error : ''
        }
    }

    componentDidMount() {
        Axios.get('https://gist.githubusercontent.com/jantikarpurva/9920546c0c6fd7f563246c5471466400/raw/f9206e7a0fcc1fcca95143fd2197bad0e920a1a2/Customers.json').then(
            (response) => {
                this.setState({
                    ...this.state,
                    users : response.data
                })
            }
        ).catch(
            (error) => {
                this.setState({
                    ...this.state,
                    error : error
                })
            }
        )
    }

    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col text-center">
                            <p className="display-4">User Details</p>
                        </div>
                    </div>
                    <div className="row">

                        {
                            this.state.users.length > 0 ?

                                <React.Fragment>
                                    {
                                        this.state.users.map(user => {
                                            return(
                                                <div className="card m-2 card-width" key={user.login.uuid}>
                                                    <div className="card-header bg-secondary">
                                                        <div className="p-5">

                                                        </div>
                                                    </div>
                                                    <div className="card-body text-center">
                                                        <img src={user.picture.large} alt="" className="rounded-circle img-contact img-thumbnail"/>
                                                        <div className="list-group mt-1">
                                                            <div className="list-group-item list-group-item-light">
                                                                <p className="lead">{user.name.title} {user.name.first} {user.name.last}</p>
                                                            </div>
                                                            <div className="list-group-item list-group-item-light">
                                                                <p className="lead">{user.email}</p>
                                                            </div>
                                                            <div className="list-group-item list-group-item-light">
                                                                <p className="lead">{user.login.username}</p>
                                                            </div>
                                                            <div className="list-group-item list-group-item-light">
                                                                <p className="lead">{user.name.title} {user.name.first} {user.name.last}</p>
                                                            </div>
                                                            <div className="list-group-item list-group-item-light">
                                                                <p className="lead">{user.location.city}, {user.location.country}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </React.Fragment>

                                : null
                        }
                    </div>
                </div>
            </React.Fragment>
        );
    }

}
export default SingleUserCard;