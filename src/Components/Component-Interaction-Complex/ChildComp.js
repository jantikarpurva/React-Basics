import React from "react";
class ChildComp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            cMsg : ''
        }
        
    }

    updateChildState = (e) => {
        this.setState({
            cMsg : e.target.value
        })
        this.props.receiveInParent(e.target.value)
    }



    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card bg-light">
                                <div className="card-body">
                                    <h1>Child</h1>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <form action="">
                                                <div className="form-group">
                                                    <input
                                                        value={this.state.cMsg}
                                                        onChange={this.updateChildState}
                                                        type="text" className="form-control"/>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <p className="lead">Message from parent : {this.props.pMsg}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}
export default ChildComp;