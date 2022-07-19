import React, {useState} from 'react'
import { AppBar, Box, Toolbar, Typography, Button, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import { useAuth } from '../../contexts/AuthContext'

const Navbar = () => {
  const [error, setError] = useState("")
  const { logout } = useAuth()

  const handleLogout = async () => {
    setError('')
    try {
      await logout()
    } catch {
      setError('Failed to log out')
      alert(error)
    }
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
          <Button color='inherit'>
            <Link to="/signup" className={styles.link}>sign up</Link>
          </Button>
          <Button color='inherit'>
            <Link to="/login" className={styles.link}>log in</Link>
          </Button>
          <Button color='inherit' onClick={handleLogout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar