import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './component/Footer/Footer'

function App() {
  return (

   <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>

  )
}

export default App
