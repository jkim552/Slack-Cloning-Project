import SignupPage from "./SignupPage/SignupPage";
import LoginPage from './LoginPage/LoginPage'
import { Box, Button } from '@mui/material'
import app from '../firebase'
import { useState } from "react";

function App() {
  const [isSignup, setIsSignup] = useState(true)

  return (
    <div className="App">
      <Box textAlign='center' >
        <Button onClick={() => setIsSignup((prev) => !prev)}>Sign UP / Sign IN</Button>
      </Box>
      {isSignup ? <SignupPage /> : <LoginPage />}
    </div>
  );
}

export default App;
