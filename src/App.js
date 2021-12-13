import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
         <Home/>
        {/* <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/about'>
            <About/>
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
          <Route exact path='/pricing'>
            <Pricing/>
          </Route>
        </Switch> */}
      </Router>
    </div>
  );
}

export default App;
