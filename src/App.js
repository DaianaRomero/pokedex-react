import Footer from './componentes/Footer';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PrivateRoute from './componentes/PrivateRoute';
import Pokemon from './componentes/Pokemon';
import Login from './componentes/Login';
import Inicio from './componentes/Inicio';
import Error404 from './componentes/Error404';



function App() {
  return (
    <div className="App">
     
      <Router>
        <Switch>
          <Route
            path="/login"
            exact
            component={Login}
          />
          <PrivateRoute
            path={"/inicio"}
            exact
            component={Inicio}
          />
          <PrivateRoute
            path={"/pokemon"}
            exact
            component={Pokemon}
          />
          <Route
            path="/"
            exact
            component={Inicio}
          />
          <Route
            path="*"
            
            component={Error404}
          />
        </Switch>
      </Router>

      
    </div>
  );
}

export default App;
