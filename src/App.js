import React from 'react';
import logo from './logo.svg';
import './App.css';
import MessageCard from "./Components/Props-and-States/MessageCard";
import StudentCard from "./Components/Props-and-States/StudentCard";
import GreetCard from "./Components/Props-and-States/GreetCard";
import ProductItem from "./Components/Event-Binding-Example/ProductItem";
import WelcomeMsg from "./Components/Two-Way-Binding-Example/WelcomeMsg";
import CarSelector from "./Components/Two-Way-Binding-Example/CarSelector";
import TextApp from "./Components/Two-Way-Binding-Example/TextApp";
import RegisterForm from "./Components/Form-binding-Example/RegisterForm";
import UserAuth from "./Components/Form-binding-Example/UserAuth";
import HobbySelection from "./Components/Conditional-Rendering-Example/HobbySelection";
import UserCard from "./Components/Map-Function-Example/UserCard";
import IncrementButton from "./Components/Event-Binding-Example/IncrementButton";
import CustomerTable from "./Components/Map-Function-Example/CustomerTable";
import ParentComponent from "./Components/Component-Interaction-Basic/ParentComponent";
import ParentComp from "./Components/Component-Interaction-Complex/ParentComp";
import ClientCard from "./Components/Component-Sibling-Interaction/ClientCard";
import ServerCard from "./Components/Component-Sibling-Interaction/ServerCard";
import CompA from "./Components/Props-Drilling-Problem/CompA";
import CompOne from "./Components/Context-API/CompOne";
import MessageContext from "./Components/Context-API/MessageContext";
import DigitalWatch from "./Components/Life-Cycle-Functions/DigitalWatch";
import UserDetailCard from "./Components/HTTP-Example/UserDetailCard";
import SingleUserCard from "./Components/HTTP-Example/SingleUserCard";


class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            appMessage : 'Hello this is from app',
            clientData :'',
            serverData : ''
        }

    }

    /*fromClient = (data) => {
        this.setState({
            ...this.state,
            clientData : data
        })
    }

    fromServer = (data) => {
        this.setState({
            ...this.state,
            serverData : data
        })
    }*/
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-dark bg-primary">
                    React Basics
                </nav>
                {/*
          <h5>Example of passing props</h5>
        <MessageCard name="Purva" age="22" desg="software eng"/>
        <MessageCard name="Pratima" age="49" desg="software eng"/>
        <h5>Example of state </h5>
        <StudentCard/>
        <h5>Example of changing state</h5>
        <GreetCard/>
        <h5>Example of event binding</h5>
        <ProductItem/>
        <IncrementButton/>
        <h5>Example of two way binding</h5>
        <WelcomeMsg/>
        <CarSelector/>
        <TextApp/>
        <h5>Example of form binding</h5>
        <RegisterForm/>
        <UserAuth/>
        <h5>Example of conditional rendering</h5>
        <HobbySelection/>
        <h5>Example of map function</h5>
        <UserCard/>
        <CustomerTable/>
        <h5>Example of component Interaction</h5>
        <ParentComponent/>
        <ParentComp/>
        <h5>Example of sibling component Interaction</h5>
          */}
                {/*<div className="container mt-3">
                    <div className="row">
                        <div className="col text-center">
                            <h6>
                                Data in APP : client - {this.state.clientData} server - {this.state.serverData}
                            </h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <ClientCard fromClient={this.fromClient} serverData={this.state.serverData}/>
                        </div>
                        <div className="col-md-6">
                            <ServerCard fromServer={this.fromServer} clientData={this.state.clientData}/>
                        </div>
                    </div>
                </div>*/}

                {/*<h5>Example of props drilling problem</h5>
                <p className="lead"> Data in APP : {this.state.appMessage} </p>
                <CompA appMessage={this.state.appMessage}/>*/}

                {/*<h5>Example of context API</h5>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <MessageContext.Provider value={this.state.appMessage}>
                                <CompOne/>
                            </MessageContext.Provider>
                        </div>
                    </div>
                </div>*/}

                {/*<h5>Example of Life Cycle Functions</h5>
                <DigitalWatch/>
                <UserDetailCard/>
                */}

                <SingleUserCard/>


                <div className="mb-5"></div>
            </React.Fragment>

        );
    }

}

export default App;
