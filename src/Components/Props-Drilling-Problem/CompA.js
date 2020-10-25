import React from "react";
import CompB from "./CompB";
class CompA extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                <div className="container mt-2">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card bg-info">
                                <div className="card-body">
                                    <h3>Comp A</h3>
                                    <p className="lead">Data : {this.props.appMessage}</p>
                                    <CompB appMessage = {this.props.appMessage}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default CompA;