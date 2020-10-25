import React from "react";
import ChildComponent from "./ChildComponent";
class ParentComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            parentMessage : 'Hello i am parent message',
            childMessage : ''
        }
    }

    receiveData = (data) => {
        this.setState({
            ...this.state,
            childMessage : data
        })
    }
    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h4>Parent component</h4>
                                    <p className="lead">Message : {this.state.childMessage} </p>
                                    <ChildComponent parentMessage={this.state.parentMessage} receiveParent={this.receiveData}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}
export default ParentComponent;