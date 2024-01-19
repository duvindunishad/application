import React, {useState} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {

  const history = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e){
      e.preventDefault();
      try {
        if(!email || !password){
          alert("username, email and password are required");
          return;
        }
        const data = {name, email, password};
        await axios.post("http://localhost:8000/", data)
        .then(res =>{
          if(res.data === "exist"){
            history("/home", {state:{name:name, email:email}});
          }else if (res.data === "notexist"){
            alert("user has not signup");
          }
        })
        .catch(e =>{
          alert("wrong details");
          console.log(e);
        });
      } catch (e) {
        alert("Login failed");
        console.log(e);
      }
    }

  return (
    <div className='container'>
      <Navbar/>
      <div className='login-container'>
        <h1>Login</h1>
        <form action='POST' className='login-form'>
          <input type='name' onChange={(e)=> { setName(e.target.value)}} placeholder='Name' name='' id=''></input>
          <input type='email' onChange={(e)=> { setEmail(e.target.value)}} placeholder='Email' name='' id=''></input>
          <input type='password' onChange={(e)=> { setPassword(e.target.value)}} placeholder='Password' name='' id=''></input>

          <button onClick={submit}>Login</button>
        </form>
        <div className='or-divider'>
          <p>OR</p>
        </div>
        <Link to="./Signup" className='signup-link'>Signup Page</Link>
      </div>
      <Footer/>
    </div>
  )
}

export default Login
