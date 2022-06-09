import "./App.css";
import Home from "./Pages/Home/Home";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Pizza from "./Pages/Pizza/Pizza";
import Sweet from "./Pages/Sweet/Sweet";
import FullMenu from "./Pages/FullMenu/FullMenu";
import Cart from "./Pages/Cart/Cart";

function App() {
  
  return (
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />  
          <Route path='/pizzaMenu' component={Pizza} />
          <Route path='/sweetMenu' component={Sweet} />
          <Route path='/fullMenu' component={FullMenu} />
          <Route path='/cart' component={Cart} />
        </Switch>
        </Router>
  );
}

export default App;
