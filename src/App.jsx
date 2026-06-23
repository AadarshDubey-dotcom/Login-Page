import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Page/Login'
import Signup from './Page/Signup'


function App() {


  return (
    <>  
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
