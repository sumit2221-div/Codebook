import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './conponent'
import { Outlet} from 'react-router-dom'



function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
    <div className='absolute top-0 left-0 flex flex-wrap w-screen h-screen bg-gray-400'>
    <div className='block w-full h-full'>
    <Header/>
     
      <main className='w-screen h-screen bg-gray-400'>
        <Outlet />
      </main>
      <Footer />
    </div>
  </div>
) : null
}

export default App