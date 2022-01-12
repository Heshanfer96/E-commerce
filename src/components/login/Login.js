import React,{ useState } from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../images/amazone-lpgo.jpg'
import { auth } from '../../Firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'

function Login() {

    const navigate = useNavigate()
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    const Login =(e)=>{
        e.preventDefault()
        signInWithEmailAndPassword(auth,email,password).then(auth=>{
            navigate("/")
        }).catch(error=> alert(error.message))
    }

    const Register=(e)=>{
        e.preventDefault()
        createUserWithEmailAndPassword(auth,email,password).then(auth=>{
            navigate('/')
        }).catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
            <img className='company_logo' src={logo} alt="logo" />
            </Link>
            <div className="login_form">
                <h1 className='loginform_title'>sign-in</h1>

                <form action="">
                    <h4>E-mail</h4>
                    <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                    <h4>Password</h4>
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />
                    <button className='login_btn' type='submit'onClick={Login}>Log-In</button>
                </form>

                <p className='login_paragraph'>By sign in , you agree to the website Conditions of Use and Privacy Notice.if you dont have an account please click below button and sign up free</p>

                <button className='sign_up_btn' type='submit' onClick={Register}> click here to sign-up</button>
            </div>
            
        </div>
    )
}

export default Login
