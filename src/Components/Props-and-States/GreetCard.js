import React from "react";
class GreetCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            msg : 'Hello'
        }
    }

    greet = () => {
        this.setState({
            msg : 'Good evening'
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="container mt-5">
                    <h1>{this.state.msg}</h1>
                    <button className="btn btn-danger" onClick={this.greet} >Click me</button>
                </div>
            </React.Fragment>
        );
    }
}

export default GreetCard;