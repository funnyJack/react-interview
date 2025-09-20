import {
    BrowserRouter as Router, Switch, Route, Redirect
} from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./components/Menu";

function App() {
    return (
        <div>
            <Router>
                <Menu/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Redirect to="/"/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
