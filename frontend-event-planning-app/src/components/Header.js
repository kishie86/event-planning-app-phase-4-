import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {AppBar, IconButton, Toolbar} from '@material-ui/core'
import SortIcon from '@material-ui/icons/Sort'


const useStyles = makeStyles((theme)=> ({
    root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200vh',
    },

    appbar: {
        background: 'none',
        fontFamily: 'Nunito',
    }, 

    appbarTitle: {
        flexGrow: "1",
       

    },

    appbarWrapper: {
        width: "80%",
        margin: '0 auto',
    },

    icon: {
        color: "#fff",
        fontSize: "2rem",
        
    },

    colorText: {
        color: '#F0F8FF',
    }

}))
  function Header() {
      const classes = useStyles()
      return ( 
      <div className = {classes.root}>
        <AppBar className = {classes.appbar} elevation ={0}>
            <Toolbar className = {classes.appbarWrapper}>
            <h1 className={classes.appBarTitle}>Flati<span className= {classes.colorText}>-Event Planning</span></h1>
            <IconButton>
                <SortIcon className={classes.icon}/>
            </IconButton>
            </Toolbar>
        </AppBar> 
     
        <div>
            <h1 className={classes.colorText}>
             Welcome to <span>the best planning Experience<br/> of your life!</span>
            </h1>
        </div>
        </div>
      
      )
  }
    export default Header