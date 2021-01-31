import React from 'react';
import {AppBar, Toolbar, IconBar, Badge, MenuItem, Menu, Typography, IconButton } from '@material-ui/core';
import { ShoppingCart }  from '@material-ui/icons'

import logo from '../../assets/stacy.png'
import useStyles from './styles';



const NavBar = () => {
    const classes = useStyles();
    return (
        <>
            <AppBar position = "fixed" className={classes.AppBar}> 
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Shop" height="25px" className={classes.img} />
                        
                        shop
                        <div className={classes.grow}/>
                        <div className={classes.button}>
                        <IconButton aria-label="Show Cart Items" color="inherit">
                            <Badge badgeContent={3} color="secondary" ></Badge>
                            <ShoppingCart />
                        </IconButton>

                        </div>
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar
