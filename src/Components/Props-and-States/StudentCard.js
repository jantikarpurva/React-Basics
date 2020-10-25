import React from "react";
import img1 from "../../Assests/Images/img1.jpg"
class StudentCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: 'Purva Jantikar',
            age: 23,
            course: 'Eng',
            college: 'RNSIT',
            address: 'Bangalore',
            image: img1
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="container mt-5">
                    <div className="card bg-primary">
                        <div className="card-body p-2">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={this.state.image} alt=""/>
                                </div>
                                <div className="col-md-8">
                                    <p className="lead text-dark bg-white p-1">Name : {this.state.name}</p>
                                    <p className="lead text-dark bg-white p-1">Age : {this.state.age}</p>
                                    <p className="lead text-dark bg-white p-1">Course : {this.state.course}</p>
                                    <p className="lead text-dark bg-white p-1">College : {this.state.college}</p>
                                    <p className="lead text-dark bg-white p-1">Address : {this.state.address}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

export default StudentCard;