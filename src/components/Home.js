import React from 'react'
import {useNavigate, useLocation} from 'react-router-dom'

const Home = () => {

    const history=useNavigate();
    const location = useLocation();
    const handleLogout = ()=>{
        history("/")
    }
  return (
    <div className='homepage'>
        <div className='card-container-homepage'>
            <h1>Hello {location.state.name} and welcome to home page</h1>
            <h1>Email: {location.state.email}</h1>
            <button type='submit' onClick={handleLogout}>Logout</button>
        </div>
      
    </div>
  )
}

export default Home
