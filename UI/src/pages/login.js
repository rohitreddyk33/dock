
import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate=useNavigate()
  function loginUser(event) {
    event.preventDefault()
    fetch('http://localhost:7070/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email, password
      }),
    }).then(res =>{
      return res.json();
    }).then(res =>{
      if(res.status==='ok'){
        localStorage.setItem('user',JSON.stringify(res))
      }
      
      navigate('/home')
    }) 
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginUser}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
        <input type="submit" value="login" />
      </form>
    </div>

  )
}

export default Login;
