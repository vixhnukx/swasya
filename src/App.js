import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Pages/Home/Home'
import Vision from './components/Pages/Vision/Vision'
import Services from './components/Pages/Services/Services'
import Register from './components/Pages/Register/Register'
import Doctor from './components/Pages/Doctors/Doctor'
function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Services/>
      <Vision/>
      <Doctor/>
      <Register/>
      <Footer/>
    </div>
  )
}

export default App