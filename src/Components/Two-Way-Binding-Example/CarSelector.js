import React from "react";
class CarSelector extends React.Component{
    constructor(props) {
        super(props);
    this.state = {
        selectedCar : ''
    }
    }

    updateOption = (e) => {
        this.setState({selectedCar : e.target.value});
    }

    render() {
        return (
            <React.Fragment>
                <div className="container mt-5">
                    <div className="card">
                            <div className="card-header">
                                <h1>Select a card</h1>
                            </div>
                        <pre>{JSON.stringify(this.state)}</pre>
                        <div className="card-body">
                            <form action="">
                                <div className="form-group">
                                    <select
                                        name="" id="" className="form-control"
                                        onChange={this.updateOption}>
                                        <option value="">Selecr a car </option>
                                        <option value="Alto">Alto</option>
                                        <option value="Balleno">Balleno</option>
                                        <option value="Celtp">Celtp</option>
                                        <option value="Audi">Audi</option>
                                        <option value="BMW">BMW</option>
                                        <option value="Jaugar">Jaugar</option>
                                        <option value="Cooper">Cooper</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <h1>{this.state.selectedCar}</h1>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

export default CarSelector;