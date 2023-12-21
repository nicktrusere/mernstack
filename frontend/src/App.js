import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Login from './pages/Login';
import Register from './pages/Register';
import User from './pages/User';
//import { useState, useEffect } from "react"; 
//import Axios from "axios";

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/' element={<Register />} />
            <Route path='/' element={<User />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App;
