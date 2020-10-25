import React from "react";
class ClientCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            clientData : '',
            serverData : ''
        }
    }

    updateClientData = (e) => {
        this.setState({
            ...this.state,
            clientData : e.target.value
        })
    }

    clientToApp = (e) => {
        e.preventDefault();
        this.props.fromClient(this.state.clientData);
    }

    render() {
        return (

            <React.Fragment>
               <div className="card">
                   <div className="card-header bg-primary text-center text-white">
                       <h5>Client card</h5>
                   </div>
                   <div className="card-body p-4">
                       <div className="text-center">
                           <h4>Type your data in here</h4>
                       </div>
                       <form action="" className="mt-2" onSubmit={this.clientToApp}>
                           <div className="form-group">
                               <input
                                   value={this.state.clientData}
                                   onChange={this.updateClientData}
                                   type="text" className="form-control"/>
                           </div>
                           <div className="form-group text-center">
                               <input type="submit" className="form-control btn btn-sm btn-primary w-25" value="send"/>
                           </div>
                       </form>
                   </div>
                   <div className="card-footer text-center p-2">
                       <h5>Data from server : {this.props.serverData}</h5>
                   </div>
               </div>
            </React.Fragment>
        );
    }

}
export default ClientCard;