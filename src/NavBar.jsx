import { React, useState } from 'react'
import { NavLink } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Logo from './Images/Amazon_logo4.jpg';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import  {useStateValue}  from './StateProvider';
function NavBar() {
    // const [state,dispatch]= useStateValue();
    const [{ basket ,user}]= useStateValue();
    // console.log(basket)
    return (
        <>
            <nav className="navbar sticky-top z4  p-0 m-0 navbaro navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/"><img style={{ width: '87px' }} src={Logo} alt="logo" /></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex mx-auto w-75 ">
                            <input className="form-control input_class" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn button_class  text-white" type="submit"><SearchIcon style={{ color: 'black' }} /></button>
                        </form>
                        <ul className="navbar-nav  p-0 me-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-auto">
                                <NavLink exact className="nav-link  " aria-current="page" to="/login"><span className='nav_items SignOut_flex'>Hello,{!user?null: <span> <p className="nav_items3">{user}</p> </span>}</span><br /><span className='nav_items2'>{!user?<p className='SignIn_Padding'>SignIn</p>: <p className='SignOut_Padding text-center'>SignOut</p>}</span></NavLink>
                            </li>
                            <li className="nav-item mx-auto">
                                <NavLink className="nav-link" to="#"><span className='nav_items'>Return</span><br /><span className='nav_items2'>&Orders</span></NavLink>
                            </li>
                            <li className="nav-item mx-auto">
                                <NavLink className="nav-link" to="#"><span className='nav_items'>Your</span><br /><span className='nav_items2'>Prime</span></NavLink>
                            </li>
                            <li className="nav-item pt-2 mx-auto">
                                <NavLink className="nav-link" to="/basket"><ShoppingBasketIcon /></NavLink>
                            </li>
                            <li className='text-warning mx-auto'>
                                {basket?.length}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default NavBar
