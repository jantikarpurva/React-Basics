import React from "react";
import {customerData} from "./CustomerData"
class CustomerTable extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            user : customerData
        }
    }

    render() {
        return (
            <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                       <table className="table table-bordered table-striped table-secondary">
                            <thead className="bg-dark text-white text-center">
                            <th>Name</th>
                            <th>Image</th>
                            <th>Age</th>
                            <th>Phone</th>
                            <th>City</th>
                            <th>Country</th>
                            </thead>
                           <tbody>
                           {
                               this.state.user.map(user => {
                                   return(
                                       <tr key={user.login.uuid} className="text-center">
                                           <td>{user.name.first} {user.name.last}</td>
                                           <td><img src={user.picture.thumbnail} alt=""/></td>
                                           <td>{user.dob.age}</td>
                                           <td>{user.phone}</td>
                                           <td>{user.location.city}</td>
                                           <td>{user.location.country}</td>
                                       </tr>
                                   )
                               })
                               
                           }
                           </tbody>
                       </table>
                    </div>
                </div>
            </div>
            </React.Fragment>
        );
    }

}
export default CustomerTable;