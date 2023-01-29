import Dashboard from "pages/Dashboard";
import Home from "pages/Home";
import Register from "pages/Register";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Routes = () => {
    return (
      <BrowserRouter>
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/dashboard">
                <Dashboard />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
        </Switch>
        
      
      </BrowserRouter>
    );
  };
  
  export default Routes;