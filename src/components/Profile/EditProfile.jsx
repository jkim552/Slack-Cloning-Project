import React, { useRef, useState } from "react";
import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  Box,
  Alert
} from "@mui/material";

import AddIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import styles from "./EditProfile.module.css";

const EditProfile = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { currentUser, updateEmail, updatePassword } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError('Passwords do not match')
    }
    if (emailRef.current.value !== currentUser.email) {
      await updateEmail(emailRef.current.value)
    }
    else { setError('Nothing to update') }

    if (passwordRef.current.value) {
      await updatePassword(passwordRef.current.value)
    }

    try {
      setError('')
      setLoading(true)
      alert('successfully update')
      navigate("/profile")
    } catch {
      setError('Failed to update profile')
    }
    setLoading(false)
  }

  return (
    <div>
      <Grid>
        <Paper className={styles.paper} elevation={20}>
          <Grid align="center">
            <Avatar style={{ backgroundColor: "#1bbd72" }}>
              <AddIcon />
            </Avatar>
            <h2>Update Profile</h2>
          </Grid>
          {error && <Alert severity="error">{error}</Alert>}
          <form className={styles.form} onSubmit={handleSubmit}>
            <TextField
              required
              variant="standard"
              type="email"
              fullWidth
              label="Email"
              inputRef={emailRef}
              defaultValue={currentUser.email}
            />
            <TextField
              variant="standard"
              fullWidth
              label="Password"
              inputRef={passwordRef}
              placeholder="Leave blank to keep same"
            />
            <TextField
              variant="standard"
              fullWidth
              label="Confirm password"
              inputRef={confirmPasswordRef}
              placeholder="Leave blank to keep the same"
            />

            <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
              <Button
                disabled={loading}
                className={styles.updateBtn}
                type="submit"
                variant="contained"
                color="primary"
              >
                Update
              </Button>
              <Button
                className={styles.cancelBtn}
                variant="contained" color="error"
                onClick={() => navigate("/profile")}
              >
                Cancel
              </Button>
            </Box>
          </form>
        </Paper>
      </Grid>
    </div>
  );
};

export default EditProfile;
