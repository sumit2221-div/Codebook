import React from 'react'
import {useDispatch} from 'react-redux'
import authservice from '../../appwrite/auth'
import {logout} from '../../store/authslice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authservice.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button
    className='px-6 py-2 duration-200 rounded-full inline-bock hover:bg-white hover:text-black'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn