import React from 'react'

import {
    Nav, 
    NavLink, 
    Bars, 
    NavMenu, 
    NavBtn, 
    NavBtnLink
} from './NavBarElements';

class NavBar extends React.Component{


    render(){

    return(
        <>
        <Nav>
            <NavLink to="/">
                <h1>Libby's Event</h1>
            </NavLink>
            <Bars/>
            <NavMenu>
                <NavLink to="/about" activeStyle>
                About
                </NavLink>
                <NavLink to="/OurEvents" activeStyle>
                Our Events
                </NavLink>
                <NavLink to="/HostProfile" activeStyle>
                Host Profile
                </NavLink>
                
                <NavLink to="/Contact-Us" activeStyle>
                Contact Us
                </NavLink>
                <NavLink to="/Sign-Up" activeStyle>
                Sign Up
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/signin">Sign In</NavBtnLink>
                </NavBtn>
    
            </Nav>
        </>
    )
}
}

export default NavBar