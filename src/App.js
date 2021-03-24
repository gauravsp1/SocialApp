import Register from "./Components/Register";
import Login from "./Components/Login";
import Home from "./Components/Home";
import {Route,Switch} from "react-router"


function App() {
  return (
    <>
     
    <Switch>
    <Route exact path="/" component={Register} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/home" component={Home} />
    </Switch>
    </>
  );
}

export default App;
