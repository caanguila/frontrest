import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Login} from "./components/Login";
import {SignUp} from "./components/SignUp";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Confirmation} from "./components/Confirmation";
import {Menu} from "./components/Menu";
import {Order} from "./components/Order";
import {Admin} from "./components/Admin";
import {NavbarRest} from "./components/Navbar";
import {DetailAdmin} from "./components/DetailAdmin";


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
                    <Route path="/DetailAdmin" component={DetailAdmin}/>
                </main>
            </div>
        </Router>
    );
}

export default App;
