import React from "react";
class CompC extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                            <div className="card bg-light">
                                <div className="card-body">
                                    <h3>Comp C</h3>
                                    <p className="lead">Data : {this.props.appMessage}</p>
                                </div>
                            </div>
            </React.Fragment>
        );
    }
}
export default CompC;