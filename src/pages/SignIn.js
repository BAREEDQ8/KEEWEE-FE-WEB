import React from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Avatar,
  CssBaseline,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const SignIn = () => {
  const handleSignIn = () => {};

  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <CssBaseline />
      <Paper
        elevation={6}
        style={{
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "15px",
        }}
      >
        <Avatar
          style={{
            backgroundColor: "#3f51b5",
            marginBottom: "1rem",
            width: "80px",
            height: "80px",
          }}
        >
          <LockOutlinedIcon style={{ fontSize: 40 }} />{" "}
        </Avatar>
        <Typography component="h1" variant="h3" style={{ fontWeight: "bold" }}>
          Sign In
        </Typography>
        <form style={{ width: "100%", marginTop: "1rem" }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{
              marginTop: "1rem",
              borderRadius: "18px",
            }}
            onClick={handleSignIn}
          >
            Sign In
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default SignIn;
