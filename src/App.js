import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Explore from './components/Explore/Explore';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/explore'>
            <Explore></Explore>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
          <Route path='/home/#products'>
            <Products></Products>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="**">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
