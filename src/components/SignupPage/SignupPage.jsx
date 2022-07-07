import React from 'react'
import { Box, Avatar, Button, Grid, Paper, TextField, Typography, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel, Checkbox }
  from '@mui/material'
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import styles from './Signup.module.css'

const Signup = () => {
  return (
    <Grid>
      <Paper className={styles.paper} elevation={20}>
        <Grid align='center'>
          <Avatar style={{ backgroundColor: '#1bbd72' }}>
            <AddIcon />
          </Avatar>
          <h2>Sign up</h2>
          <Typography variant='caption'>Please fill this form to create account</Typography>
        </Grid>
        <form className={styles.form}>
          <TextField variant="standard" fullWidth label='Name' />
          <FormControl style={{ marginTop: 10 }}>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              style={{ display: 'initial' }}
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="gender"
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
          <TextField
            variant="standard"
            fullWidth label='Email'
            placeholder='example123@xxx.com'
          />
          <TextField variant="standard" fullWidth label='Password' />
          <TextField variant="standard" fullWidth label='Confirm password' />
          <FormControlLabel
            control={<Checkbox name="checkedA" />}
            label="I accept the terms and conditions"
          />
          <Button className={styles.signupBtn} type='submit' variant='contained' color='primary'>
            Sign Up
          </Button>
        </form>
      </Paper>
    </Grid>
  )
}

export default Signup