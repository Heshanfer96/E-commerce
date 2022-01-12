import React from 'react'
import logo from '../../images/amazone-lpgo.jpg'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { signOut }  from 'firebase/auth';
import { auth } from '../../Firebase'

function Header() {

    // const[state,dispatch]=useStateValue();
    const[{basket,user},dispatch]=useStateValue()

    const Signoutuser=()=>{
        if(user){
            signOut(auth)
        }
    }

    return (
        <div className='header'>
            <div className="header_image">
                <Link to='/'>
                <img className='header_logo' src={logo} alt="logo" />
                </Link>
            </div>
            <div className="heade_search">
                <input className='header_serch_input' placeholder='Search iteams here' type="text" />
                <SearchIcon className='search_icone'/>
            </div>
            <div className="nav_iteams">

                <Link to={!user && '/login'}>
                    <div onClick={Signoutuser} className="nav_iteam_options">
                        <span className="nav_iteam_optionline1">{user ? user?.email : "Guest"}</span><br />
                        <span className="nav_iteam_optionline2">{user ? "Sign OUT" : "Sign In"}</span>
                    </div>
                </Link>
               
                <div className="nav_iteam_options">
                    <span className="nav_iteam_optionline1">Returns</span><br />
                    <span className="nav_iteam_optionline2">@ Orders</span>
                </div>
                <div className="nav_iteam_options">
                    <span className="nav_iteam_optionline1">your</span><br />
                    <span className="nav_iteam_optionline2">Prime</span>
                </div>
                <Link to='/checkout'>
                <div className="nav_iteam_cart">
                    <LocalMallIcon className='navbar_cart_logo'/>
                    <span className='navbar_cart_iteamCount'>{basket?.length}</span>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
