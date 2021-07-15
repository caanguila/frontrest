import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {NavbarRest} from "./components/Navbar";
import {Login} from "./components/Login";
import {SignUp} from "./components/SignUp";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Confirmation} from "./components/Confirmation";
import {Menu} from "./components/Menu";
import {Order} from "./components/Order";


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
                </main>
            </div>
        </Router>
    );
}

export default App;
