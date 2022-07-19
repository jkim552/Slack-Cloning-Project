import React, { useState } from 'react'
import { Box, CssBaseline, AppBar, Toolbar, Typography, Divider, Drawer, List, IconButton, TextField, Button } from '@mui/material'
import AccountIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { useAuth } from '../../contexts/AuthContext';
import styles from './Sidebar.module.css'
import { useNavigate } from 'react-router-dom';

const Sidebar = (props) => {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    setError('')
    try {
      await logout()
      alert('logout')
      navigate("/")
    } catch {
      setError('Failed to log out')
      alert(error)
    }
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${props.width}px)`, ml: `${props.width}px` }}
      >
        <Toolbar className={styles.box}>
          <form>
            <TextField
              id="search-bar"
              className="text"
              variant="outlined"
              placeholder="Search..."
              size="small"
            />
            <IconButton disabled aria-label="search">
              <SearchIcon style={{ fill: "gray" }} />
            </IconButton>
          </form>

          <Button color="inherit" onClick={handleLogout}>logout</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: props.width,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: props.width,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Typography variant="h2">Slack</Typography>
        <Divider />
        <List>
          <IconButton onClick={() => navigate('/profile')}>
            <AccountIcon /> {currentUser.email}
          </IconButton>
        </List>
        <Divider />

      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
      </Box>
    </Box>
  )
}

export default Sidebar