import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Login} from "../Login";
import {SignUp} from "../SignUp";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Confirmation} from "../Confirmation";
import {Menu} from "../Menu";
import {Order} from "../Order";
import {Admin} from "../Admin";
import {NavbarRest} from "../Navbar";
import {HistoryDetail} from "../HistoryDetail";


function App() {
    return (
        <Router>
            <div className={'app'}>
                <NavbarRest/>
                <main role="main" className="container">
                    <Route exact path="/" component={Login}/>
                    <Route path="/SignUp" component={SignUp}/>
                    <Route path="/Confirmation" component={Confirmation}/>
                    <Route path="/Menu" component={Menu}/>
                    <Route path="/Order" component={Order}/>
                    <Route path="/Admin" component={Admin}/>
                    <Route path="/History" component={HistoryDetail}/>
                </main>
            </div>
        </Router>
    );
}

export default App;
