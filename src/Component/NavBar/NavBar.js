import React, { Component } from 'react'
import { Avatar, Grid } from '@mui/material';
import klogo from "../../images/logo.png"
import "./NavBar.css";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import { useAuth0 } from '@auth0/auth0-react';

function NavBar() {
    const { user, isAuthenticated, logout } = useAuth0();
    return (
        isAuthenticated &&
        <div>
            <Grid container className='navbar__main'>
                <Grid item xs ={3}>
                    <div className='navbar__leftbar'>
                        <img className='navbar_logo' src={klogo}  width="40px" height="40px" alt='logo'/>
                        <input className='navbar__searchBar'
                        placeholder='Search Kwetter'
                        type='text'/>
                    </div>
                </Grid>
                <Grid item xs ={6}>
                    <div className='navbar__container'>
                        <div className='navbar__tabs'>
                            <GridViewOutlinedIcon alt='timeline'/>

                        </div>
                        <div className='navbar__tabs'>
                            <WhatshotOutlinedIcon alt='trends'/>
                        </div>        
                        <div className='navbar__tabs'>
                            <NotificationsOutlinedIcon alt='notifications'/>
                        </div>                     
                    </div>
                </Grid>                
                <Grid item xs ={3}>
                    <div className='navbar__right'>
                        <div className='navbar__righttab'>
                            
                            <Avatar className='navbar__rightimg' src={user.picture}/>
                            <div className='navbar__profilename'>{user.nickname}</div>
                            <button className='navbar__logoutbtn' onClick={() => logout({ returnTo: window.location.origin })}>Log out</button>
                        </div>
                    </div>  
                </Grid>
            </Grid>    
        </div> 
        );
}

export default NavBar;

