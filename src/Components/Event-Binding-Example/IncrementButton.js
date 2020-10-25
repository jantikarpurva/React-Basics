import React from "react";
class IncrementButton extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            counter : 0,
            user : [
                {
                name : "Purva",
                Age : 23,
                Hobby : "Whacking"
                },
                {
                    name : "Pratima",
                    Age : 49,
                    Hobby : "Cooking"
                },
                {
                    name : "Praveen",
                    Age : 60,
                    Hobby : "News watching"
                }
            ]
        }
    }

    Increment = () => {
        if(this.state.counter < this.state.user.length){
            this.setState({...this.state,
                counter : this.state.counter + 1
            })
        }
        else{
            this.setState({...this.state,
                counter : 0
            })
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className="container mt-5">
                    <pre>{JSON.stringify(this.state.counter)}</pre>
                    <div className="row">
                        <div className="col-md-6">
                            <button className="btn btn-sm btn-danger" onClick={this.Increment}>Click</button>
                            {
                                (this.state.counter < this.state.user.length) ?

                                    <div className="card">
                                        <div className="card-body">
                                            <h1>{this.state.user[this.state.counter].name}</h1>
                                        </div>
                                    </div> :
                                    <h1>Entries Done</h1>
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

export default IncrementButton;