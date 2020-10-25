import React from "react";
class ChildComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            childMessage : 'Hello i am child message'
        }
    }

    sendData = () => {
        this.props.receiveParent(this.state.childMessage);
    }
    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h4>Child component</h4>
                                    <p className="lead">Message  : {this.props.parentMessage}</p>
                                    <button className="btn btn-danger btn-sm" onClick={this.sendData}>Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}
export default ChildComponent;