import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import Header from './Header'


const useStyles = makeStyles((theme)=> ({
  root: {
    // minHeight: '100vh',
    // backgroundImage: `url(${process.env.PUBLIC_URL + 'EventVenueBackground.jpg'})`,
    // backgroundRepeat: 'no-repeat',
    // backgroudSize:'cover',
  },
}))
function Home() {
  const classes = useStyles()
    return (
    <div className={classes.root}>
      
      <CssBaseline />
      <Header />
    </div> 
    )
  }

  export default Home;