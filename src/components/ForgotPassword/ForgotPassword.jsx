import React, { useRef, useState } from "react";
import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Alert,
  Typography,
} from "@mui/material";
import styles from './ForgotPassword.module.css'
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
    } catch {
      setError("Failed to reset password");
    }
    setLoading(false);
  }

  return (
    <div>
      <Grid align="center">
        <Paper className={styles.paper} elevation={20}>
          <Grid align="center">
            <Avatar style={{ backgroundColor: "#1bbd72" }}></Avatar>
            <h2>Reset Password</h2>
          </Grid>
          {error ? <Alert severity="error">{error}</Alert> :
          <Alert severity="success">Check your inbox for reset instructions!</Alert>}
          <form className={styles.form} onSubmit={handleSubmit}>
            <TextField
              required
              variant="outlined"
              type="email"
              fullWidth
              label="Email"
              inputRef={emailRef}
            />
            <Button
              disabled={loading}
              className={styles.btn}
              type="submit"
              variant="contained"
              color="primary"
            >
              Reset Password
            </Button>
          </form>
          <Link className={styles.backBtn} to="/login">Back to login page</Link>
        </Paper>
      </Grid>
    </div>
  );
};

export default ForgotPassword;
