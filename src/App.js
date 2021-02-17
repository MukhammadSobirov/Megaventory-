import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Home from "./Pages/Home";
import Details from "./Pages/Details";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route exact path='/:id'>
                    <Details />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
