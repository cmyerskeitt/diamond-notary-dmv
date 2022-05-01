import React from "react"
import Navbar from "./components/Navbar"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Pricing from './components/pages/Pricing'
import './App.css'


const App = () => {
  return (
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route exact path='/contact' element={<Contact/>}/>
            <Route exact path='/pricing' element={<Pricing />}/>
          </Routes>
        </Router>
  );
}

export default App;


