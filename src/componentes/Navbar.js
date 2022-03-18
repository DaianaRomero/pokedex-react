import React from 'react';
import logo from '../img/pokeapi.png';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Link,
  NavLink
} from "react-router-dom";
import Error404 from './Error404';
import Inicio from './Inicio';
import Login from './Login';


export function Navbar() {
  const signOut = () => {
    localStorage.removeItem("token");
  };
  return (

   
        <header>
          
             <h1 className='h1-pokeapi'><img className='img-pokeapi' src={logo}></img></h1> 
          
          
             
              <button className='nav-1'> <NavLink className='nav-11'  to="/inicio">Inicio</NavLink><img src="https://img.icons8.com/windows/32/000000/pokeball.png"/></button>
              <button className='nav-2'> <NavLink  to="/pokemon">Pokemon</NavLink><img src="https://img.icons8.com/ios-glyphs/30/000000/pokemon--v2.png"/></button>
              <button className='nav-3'><NavLink to="/login" onClick={() => signOut()}>Cerrar sesión</NavLink><img src="https://img.icons8.com/fluency-systems-regular/30/000000/guest-male.png"/></button>

         
        </header>
         
    
  )
}

export default Navbar;