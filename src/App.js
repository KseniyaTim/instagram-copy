import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import './App.css';
// import Center from './Components/Center/Center';
import RouteMaster from './Routes/Routes'
import { HOME_PATH } from './consts/routes';
import { Switch, Route, Redirect } from "react-router-dom"

function App() {


  return (
    <div className="App">
      <Header />
      <Switch>
        {RouteMaster.map((routeElement, index) => (
          <Route
          key={index}
          path={routeElement.path}
          render={() => <routeElement.component />}
          />
        ))}
        <Redirect from='*' to={HOME_PATH}/>
      </Switch>
      <Navbar />
    </div>
  );
}

export default App;
