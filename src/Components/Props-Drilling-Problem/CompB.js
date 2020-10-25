import React from "react";
import CompC from "./CompC";
class CompB extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>

                            <div className="card bg-secondary">
                                <div className="card-body">
                                    <h3>Comp B</h3>
                                    <p className="lead">Data :{this.props.appMessage}</p>
                                    <CompC appMessage={this.props.appMessage}/>
                                </div>
                            </div>

            </React.Fragment>
        );
    }
}
export default CompB;