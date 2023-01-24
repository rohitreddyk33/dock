

import {React,useState} from 'react'

function Register() {
  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')



  async function registerUser(event){
    event.preventDefault()
  const response=await fetch('http://node-service.default.svc.cluster.local:7070/api/register',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({
        name,email,password
      }),
    })
    const data=await response.json()
    console.log(data)
    

  }
  return (
   <div>
    <h1>register</h1>
    <form onSubmit={registerUser}>
      <input type ="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="name"/>
      <input type ="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email"/>
      <input type ="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password"/>
      <input type="submit" value="register"/>
    </form>
   </div>

  )
  }

export default Register;
