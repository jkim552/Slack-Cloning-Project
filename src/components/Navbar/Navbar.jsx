import React from 'react'
import { AppBar, Box, Toolbar, Typography, Button, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import { getAuth, signOut } from 'firebase/auth'

const Navbar = () => {
  const logOut = async () => {
    const auth = getAuth()
    signOut(auth).then(()=>{
      alert("logout successfully")
    }).catch((err) => {
      // error
    })
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='sticky'>
        <Toolbar className={styles.box}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} >
            <Link to="/" className={styles.link}>Slack</Link>
          </Typography>
          <Button color='inherit'><Link to="login" className={styles.link}>Login</Link></Button>
          <Button color='inherit'><Link to="signup" className={styles.link}>Signup</Link></Button>
          <Button color='inherit' onClick={logOut}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar