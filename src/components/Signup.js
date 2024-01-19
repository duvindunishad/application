import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link , useNavigate} from 'react-router-dom'
import axios from 'axios'

const Signup = () => {

    const history = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e){
        e.preventDefault();
        try{
            const res = await axios.post("http://localhost:8000/signup",{name, email, password});

            if(!name || !email || !password){
                alert("Please enter name, email and password");
                return;
            }
            else if(res.data === "exist"){
                alert("User already exists")
            }
            else if(res.data === "notexist"){
                history("/", {state:{id:email}});
                alert("user signed up successfully")
            }
        }
        catch(error){
            alert("wrong details");
            console.log(error);
        }
    }
    return (
        <div className='container'>
          <Navbar/>
          <div className='signup-container'>
            <h1>Signup</h1>
            <form action='POST' className='signup-form'>
              <input type='name' onChange={(e) => setName(e.target.value)} placeholder='Name' name='' id=''></input>
              <input type='email' onChange={(e) => setEmail(e.target.value)} placeholder='Email' name='' id=''></input>
              <input type='password' onChange={(e) => setPassword(e.target.value)} placeholder='Password' name='' id=''></input>
    
              <button type='submit' onClick={submit}>Signup</button>
            </form>
            <div className='or-divider'>
              <p>OR</p>
            </div>
            <Link to="/" className='login-link'>Signup Page</Link>
          </div>
          <Footer/>
        </div>
      )
}

export default Signup
