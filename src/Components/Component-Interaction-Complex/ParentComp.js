import React from "react";
import ChildComp from "./ChildComp";
class ParentComp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            pMsg : '',
            cMsg : ''
        }
        
    }

    updateParentState = (e) => {
        this.setState({
            pMsg : e.target.value
        })
    }

    receiveInParent = (data) => {
        this.setState({
            ...this.state,
            cMsg : data
        })
    }
    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card bg-secondary">
                                <div className="card-body">
                                    <h1>Parent</h1>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <form action="">
                                                <div className="form-group">
                                                    <input
                                                        value={this.state.pMsg}
                                                        onChange={this.updateParentState}
                                                        type="text" className="form-control"/>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <p className="lead">Message from child : {this.state.cMsg}</p>
                                    <ChildComp pMsg={this.state.pMsg} receiveInParent={this.receiveInParent}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}
export default ParentComp;