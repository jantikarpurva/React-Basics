// Form binding
import React from "react";
class WelcomeMsg extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username : 'Purva'
        }
    }

    updateInput = (e) => {
        this.setState({username : e.target.value});
    }

    render() {
        return (
            <React.Fragment>
                <form action="">
                    <div className="form-group mt-5">
                        <input
                            value={this.state.username}
                            onChange={this.updateInput}
                            type="text" className="form-control"/>
                    </div>
                    <h1>{this.state.username}</h1>
                </form>
            </React.Fragment>
        );
    }

}

export default WelcomeMsg;