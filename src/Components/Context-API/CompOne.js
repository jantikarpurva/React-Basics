import React from "react";
import CompTwo from "./CompTwo";
class CompOne extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className="card bg-warning mt-2">
                    <div className="card-body">
                        <h4>Comp one</h4>
                        <p className="lead">Data : </p>
                        <CompTwo/>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}
export default CompOne;