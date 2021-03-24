import Register from "./Components/Register";
import Login from "./Components/Login";
import Home from "./Components/Home";
import {Route,Switch} from "react-router"
import { HashRouter as Router } from 'react-router-dom'



function App() {
  return (
    <>
     <Router basename={process.env.PUBLIC_URL}>
    <Switch>
    <Route exact path="/" component={Register} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/home" component={Home} />
    </Switch>
    </Router>
    </>
  );
}

export default App;
