import React from "react";
class UserCard extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            users : [
                {
                    userId : "RN123",
                    name : "Purva",
                    age : 23,
                    gender: "female",
                    hobby : "Dance"
                },
                {
                    userId : "RN456",
                    name : "Pratima",
                    age : 49,
                    gender: "female",
                    hobby : "Cooking"
                },
                {
                    userId : "RN789",
                    name : "Praveen",
                    age : 58,
                    gender: "male",
                    hobby : "News"
                }
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-6">
                            {
                                this.state.users.map(user => {
                                    return(
                                        <div key={user.userId} className="card mt-1">
                                            <div className="card-body">
                                                <div className="container bg-success p-4">
                                                    <ul className="list-group">
                                                        <li className="list-group-item list-group-item-success">
                                                            User Id : {user.userId}
                                                        </li>
                                                        <li className="list-group-item list-group-item-success">
                                                            Name : {user.name}
                                                        </li>
                                                        <li className="list-group-item list-group-item-success">
                                                            Age : {user.age}
                                                        </li>
                                                        <li className="list-group-item list-group-item-success">
                                                            Gender : {user.gender}
                                                        </li>
                                                        <li className="list-group-item list-group-item-success">
                                                            Hobby : {user.hobby}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

export default UserCard;