import React from "react";
class TextApp extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            maxCount : 100,
            charCount : 100
        }
    }

    updateCount = (e) => {
        this.setState({
           ...this.state,
           charCount : 100 - e.target.value.length
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="card mt-5">
                        <div className="card-header">
                            <h1>Type your story here</h1>
                        </div>
                        <div className="card-body">
                            <form action="">
                                <div className="form-group">
                                    <textarea
                                        maxLength={this.state.maxCount}
                                        onChange={this.updateCount}
                                        name="sms"
                                        id="" cols="30"
                                        rows="6" className="form-control"
                                        placeholder="Type 100 words"></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <h1>Character count : {this.state.charCount} </h1>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default TextApp;