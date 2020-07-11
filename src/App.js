import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Footer from './components/Footer';
import FormLogin from './LoginForm';



function App() {
  return (
    <Router>
      <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path = "/" component={Home}/>
            <Route exact path = "/cart" component={Cart}/>
            <Route exact path = "/login" component={FormLogin}/>
          </Switch>
          <Footer/>
          
        
      </div>
    </Router>
    
  );
}

export default App;
