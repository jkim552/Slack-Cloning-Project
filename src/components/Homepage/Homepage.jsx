import React, { useState } from 'react'
import { Box, Typography, Divider, TextField, Button, Grid, Card } from '@mui/material'
import Sidebar from '../Sidebar/Sidebar'
import styles from './Home.module.css'
import { useAuth } from '../../contexts/AuthContext'

const Homepage = () => {
  const sidebarWidth = 300;
  const [inputValue, setInputValue] = useState("")
  const [chats, setChats] = useState([])
  const { currentUser } = useAuth()

  const handleSend = () => {
    if (!inputValue) {
      alert("Please enter any text")
      return
    }
    setChats(prev => [...prev, inputValue])
    setInputValue("")
  }

  return (
    <div>
      <Sidebar width={sidebarWidth} />
      <Box className={styles.box}>
        <Grid
          container
          direction="column"
          justifyContent="flex-end"
        >
          {chats.map(item =>
            <Card
              className={styles.chatBox}
              sx={{ display: 'flex' }}
            >
              <Typography variant='h6'>{item}</Typography>
              <p>create by {currentUser.email}</p>
              <Button>Delete</Button>
            </Card>
          )}
        </Grid>
        <Divider />
        <Box className={styles.inputArea}>
          <TextField
            variant='outlined' fullWidth multiline
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button onClick={handleSend}>Send</Button>
        </Box>
      </Box>
    </div>
  )
}

export default Homepage