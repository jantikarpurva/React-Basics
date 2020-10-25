import React from "react";
class UserAuth extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn : false
        }
    }

    login = () => {
        this.setState({
            isLoggedIn : true
        });
    }

    logout = () => {
        this.setState({
            isLoggedIn : false
        })
    }
    render() {
        return (
            <React.Fragment>
                <div className="container mt-5">
                    <pre>{JSON.stringify(this.state)}</pre>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h1>Register here</h1>
                                </div>
                                <div className="card-body">
                                    {
                                        !this.state.isLoggedIn ?
                                            <button className="btn btn-danger" onClick={this.login}>Login</button> :
                                            <button className="btn btn-danger" onClick={this.logout}>Logout</button>
                                    }

                                    {
                                        this.state.isLoggedIn ?
                                            <p className="h3">Welcome user</p> :
                                            <p className="h3">Welcome guest please login</p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

export default UserAuth;