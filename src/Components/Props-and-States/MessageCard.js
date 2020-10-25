import React from "react";

class MessageCard extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        let {name, age, desg} = this.props;
        return (
            <React.Fragment>

                <div className="card m-4">
                    <div className="card-body bg-light">
                        <ol className="list-group p-2">
                            <li className="list-group-item">Name : {name}</li>
                            <li className="list-group-item">Age : {age}</li>
                            <li className="list-group-item">Designation : {desg}</li>
                        </ol>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

export default MessageCard;