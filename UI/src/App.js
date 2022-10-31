import React from 'react'
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import Home from './pages/Home'
import Login from'./pages/login'
import Register from './pages/Register'
const App=()=>{
    return(
        <div>
            
            <BrowserRouter>
            <Link to='/login'>
            
            Login
            </Link>
           &nbsp; &nbsp; &nbsp;
            <Link to='/register'>
            Register
            </Link>
            <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/home" element={<Home/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App
