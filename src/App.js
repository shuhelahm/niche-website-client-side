import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Explore from './components/Explore/Explore';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import Reviews from './components/Reviews/Reviews';
import AboutUs from './components/AboutUs/AboutUs';
import Pay from './components/Pay/Pay';
import MyOrders from './components/MyOrders/MyOrders';
import AddReviews from './components/AddReviews/AddReviews';
import { Placeholder } from 'react-bootstrap';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';

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
          <Route path='/dashboard'>
            <Dashboard></Dashboard>
          </Route>
          <Route path='/products'>
            <Products></Products>
          </Route>
          <Route path='/reviews'>
            <Reviews></Reviews>
          </Route>
          <Route path='/aboutus'>
            <AboutUs></AboutUs>
          </Route>
          <Route path='/pay'>
            <Pay></Pay>
          </Route>
          <Route path='/addreviews'>
            <AddReviews></AddReviews>
          </Route>
          <Route path='product/placeorder/:id'>
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route path='/myorders'>
            <MyOrders></MyOrders>
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
