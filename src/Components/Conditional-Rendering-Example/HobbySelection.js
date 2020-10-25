import React from "react";
class HobbySelection extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            hobby : {
                tutting : false,
                whack : false,
                shuffle : false
            }
        }
    }

    updateInput = (e) => {
        this.setState({
            hobby : {
                ...this.state.hobby,
                [e.target.name] : e.target.checked
            }
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="container bg-light mt-5">
                    <pre>{JSON.stringify(this.state)}</pre>
                    <div className="row p-5">
                        <div className="col-md-4">
                            <form action="">
                                <div className="form-check">
                                    <input
                                        name="tutting"
                                        onChange={this.updateInput}
                                        className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                        <label className="form-check-label" htmlFor="defaultCheck1">
                                            Tutting
                                        </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        name="whack"
                                        onChange={this.updateInput}
                                        className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                        <label className="form-check-label" htmlFor="defaultCheck1">
                                            Whack
                                        </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        name="shuffle"
                                        onChange={this.updateInput}
                                        className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                        <label className="form-check-label" htmlFor="defaultCheck1">
                                            Shuffle
                                        </label>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-8">
                            {
                                this.state.hobby.tutting ?
                                    <React.Fragment>
                                        <div className="card mt-1">
                                            <div className="card-header">
                                                <h1>Tutting</h1>
                                            </div>
                                            <div className="card-body">
                                                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur doloremque eaque exercitationem, expedita inventore iste iure nostrum odit veritatis voluptatem.</p>
                                            </div>
                                            <div className="card-footer">
                                                <button className="btn btn-sm btn-danger text-white">Read more</button>
                                            </div>
                                        </div>
                                </React.Fragment>
                                : null
                            }
                            {
                                this.state.hobby.whack ?
                                    <React.Fragment>
                                        <div className="card mt-1">
                                            <div className="card-header">
                                                <h1>Whack</h1>
                                            </div>
                                            <div className="card-body">
                                                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur doloremque eaque exercitationem, expedita inventore iste iure nostrum odit veritatis voluptatem.</p>
                                            </div>
                                            <div className="card-footer">
                                                <button className="btn btn-sm btn-danger text-white">Read more</button>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                    : null
                            }
                            {
                                this.state.hobby.shuffle ?
                                    <React.Fragment>
                                        <div className="card mt-1">
                                            <div className="card-header">
                                                <h1>Shuffle</h1>
                                            </div>
                                            <div className="card-body">
                                                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur doloremque eaque exercitationem, expedita inventore iste iure nostrum odit veritatis voluptatem.</p>
                                            </div>
                                            <div className="card-footer">
                                                <button className="btn btn-sm btn-danger text-white">Read more</button>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                    : null
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

export default HobbySelection;