import React from "react";
import MessageContext from "./MessageContext";
class CompThree extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className="card bg-info mt-2">
                    <div className="card-body">
                        <h4>Comp Three</h4>
                        <MessageContext.Consumer>
                            {
                                (value) => {
                                    return(<p className="lead">Data : {value} </p>);
                                }
                            }
                        </MessageContext.Consumer>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}
export default CompThree;