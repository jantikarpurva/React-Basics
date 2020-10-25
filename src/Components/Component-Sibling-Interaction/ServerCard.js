import React from "react";
class ServerCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            serverData : '',
            clientData : ''
        }
    }

    updateServerData = (e) => {
        this.setState({
            ...this.state,
            serverData : e.target.value
        })
    }

    serverToApp = (e) => {
        e.preventDefault();
        this.props.fromServer(this.state.serverData);
    }

    render() {
        return (
            <React.Fragment>
               <div className="card">
                   <div className="card-header bg-warning text-center text-white">
                       <h5>Server card</h5>
                   </div>
                   <div className="card-body p-4">
                       <div className="text-center">
                           <h4>Type your data in here</h4>
                       </div>
                       <form action="" className="mt-2" onSubmit={this.serverToApp}>
                           <div className="form-group">
                               <input
                                   value={this.state.serverData}
                                   onChange={this.updateServerData}
                                   type="text" className="form-control"/>
                           </div>
                           <div className="form-group text-center">
                               <input type="submit" className="form-control btn btn-sm btn-warning w-25" value="send"/>
                           </div>
                       </form>
                   </div>
                   <div className="card-footer text-center p-2">
                       <h5>Data from client : {this.props.clientData} </h5>
                   </div>
               </div>
            </React.Fragment>
        );
    }

}
export default ServerCard;