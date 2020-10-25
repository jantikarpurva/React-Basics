import React from "react";
class DigitalWatch extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            currentTime : new Date().toLocaleTimeString()
        }

    }

    componentDidMount() {
        this.updateTime = setInterval(()=>{
            this.setState({currentTime : new Date().toLocaleTimeString()})
        },1000)
    }
    componentWillUnmount() {
        clearInterval(this.updateTime);
    }

    render() {
        return (
          <React.Fragment>
                <div className="container mt-2">
                    <div className="row">

                        <div className="col-md-6 m-auto">
                            <div className="card">
                                <div className="card-header bg-secondary text-white text-center">
                                    <h3>Digital Watch</h3>
                                </div>
                                <div className="card-body bg-light">
                                    <h3 className="display-3 text-center">{this.state.currentTime}</h3>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
          </React.Fragment>
        );
    }

}
export default DigitalWatch;