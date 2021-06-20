import {Switch, BrowserRouter, Route} from 'react-router-dom';
// import { Navbar } from './components/Navbar';
import {HomePage} from './pages/HomePage/HomePage';
import {OurCoffeePage} from './pages/OurCoffee/OurCoffeePage';
import {PleasurePage} from './pages/PleasurePage/PleasurePage';
import {GoodDetail} from './pages/GoodDetail/GoodDetail';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/coffee" exact component={OurCoffeePage} />
        <Route path="/goods" exact component={PleasurePage} />
        <Route path="/details/:id" component={GoodDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;