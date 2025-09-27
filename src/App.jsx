import { useState } from 'react'

import Login from './pages/login'
import SignUpPage from './pages/signup'
import HomePage from './pages/homePage'
import './App.css'
import Productcard from './components/productcard'

function App() {
 
  return (
    
    <>
    <div className='w-full h-screen bg-red-100 flex justify-center items-center'>  
    <HomePage/>
    <Login/>
    <SignUpPage/>
    
     </div>
    
    
      
    </>
  )
}

export default App
