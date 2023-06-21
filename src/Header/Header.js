import React from 'react';
import logo2 from "../images/logo2.png";

const Header=()=>{
  
return(
    <>
    <div className='logo1'>
      <img  src={logo2}alt="logo2"className="logo"/>
    </div>
    <div className='header'>
    <h2>Movie App</h2>
    </div>
    <div className='Navbar'>
          <div><h5>Home</h5></div>
          <div><h5>About</h5></div>
          <div><h5>Services</h5></div>
          <div><h5>contact</h5></div>
          <div><h5>Policy</h5></div>
      </div>
  
     </>
)
  
}

export default Header;