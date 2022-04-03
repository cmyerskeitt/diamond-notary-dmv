import React from "react"
import Navbar from "./components/Navbar"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.css'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Pricing from './components/pages/Pricing'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        {/* <Home/> */}
        <About/>
        {/* <Contact/>
        <Pricing/> */}

        {/* <Switch>
          <Route exact path='/' >
            <Home />
          </Route>
          <Route path='/about' >
            <About/>
          </Route>
          <Route exact path='/contact' >
            <Contact />
          </Route>
          <Route exact path='/pricing' >
            <Pricing />
          </Route>
        </Switch> */}
      </Router>
    </div>
  );
}

export default App;



// import Home from './components/pages/Home';
// import About from './components/pages/About';
// import Contact from './components/pages/Contact';
// import Pricing from './components/pages/Pricing'