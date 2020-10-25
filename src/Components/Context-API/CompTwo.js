import React from "react";
import CompThree from "./CompThree";
class CompTwo extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className="card bg-success mt-2">
                    <div className="card-body">
                        <h4>Comp Two</h4>
                        <p className="lead">Data : </p>
                        <CompThree/>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}
export default CompTwo;