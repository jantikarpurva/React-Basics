import React from "react";
class RegisterForm extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            user : {
                username : '',
                email : '',
                password : '',
                gender : '',
                terms : false
            }
        }
    }

    updateInput = (e) => {
        if(e.target.type === "checkbox"){
            this.setState({
                user : {
                    ...this.state.user,
                    terms : e.target.checked
                }
            });
        }
        else{
            this.setState({
                user : {
                    ...this.state.user,
                    [e.target.name] : e.target.value
                }
            });
        }
    }

    RegisterHere = (e) =>{
        e.preventDefault(); // to let page not refresh
        console.log(this.state.user);
    }
    render() {
        return (
           <React.Fragment>
               <div className="container mt-5">
                   <pre>{JSON.stringify(this.state.user)}</pre>
                   <div className="row">
                       <div className="col-md-6">
                           <div className="card text-white">
                               <div className="card-header text-center bg-primary">
                                   <h1>Register Here</h1>
                               </div>
                               <div className="card-body bg-info">
                                   <form action="" onSubmit={this.RegisterHere}>
                                       <div className="form-group">
                                           <input onChange={this.updateInput} type="text" className="form-control" placeholder="User name" name="username"/>
                                       </div>
                                       <div className="form-group">
                                           <input onChange={this.updateInput} type="email" className="form-control" placeholder="Email" name="email" />
                                       </div>
                                       <div className="form-group">
                                           <input onChange={this.updateInput} type="password" className="form-control" placeholder="Password" name="password"/>
                                       </div>
                                       <div className="form-group">
                                           <select onChange={this.updateInput} id="" className="form-control" name="gender">
                                               <option value="">Gender</option>
                                               <option value="female">Female</option>
                                               <option value="male">Male</option>
                                               <option value="other">Other</option>
                                           </select>
                                       </div>
                                       <div className="form-group">
                                           <div className="form-check">
                                               <input onChange={this.updateInput} className="form-check-input" type="checkbox" value="" id="defaultCheck1" name="terms"/>
                                                   <label className="form-check-label" htmlFor="defaultCheck1">
                                                       Accept terms and conditions.
                                                   </label>
                                           </div>
                                       </div>
                                       <hr/>
                                       <div className="text-center">
                                           <input type="submit" className="btn btn-sm btn-danger"/>
                                       </div>
                                   </form>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </React.Fragment>
        );
    }

}

export default RegisterForm;