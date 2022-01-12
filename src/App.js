import React,{ useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Chekout from './components/checkout/Chekout';
import Login from './components/login/Login';
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './Firebase'
import { useStateValue } from './StateProvider';
import Payement from './components/payement/Payement';


function App() {


  const[state,dispatch]=useStateValue()

  useEffect(()=>{

    onAuthStateChanged(auth,(currentUser)=>{

      console.log("this is current user", currentUser)

      if(currentUser){
        dispatch({
          type:"SET_USER",
          user:currentUser,
        })
      }else{
        dispatch({
          type:"SET_USER",
          user:null,
        })
      }
    })


  },[])

  return (
    <div>
      <Router>
        <Header />

        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login/>}/>
          <Route path="/checkout" element={<Chekout/>}/> 
          <Route path="/payement" element={<Payement />} />
         
         
        </Routes>
       
        
      </Router>
      
    </div>
  );
}

export default App;
