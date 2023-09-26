import React from "react";
import { Box, Typography, Button, TextField, Grid, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Support = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="Support" subtitle="Get Help and Support Here" />

      <Box mt={3}>
        <Typography variant="h5" fontWeight="bold" color={colors.primary[600]}>
          Contact Information
        </Typography>
        <Typography variant="body1">
          If you need assistance or have any questions, you can contact our
          support team at support@example.com or call us at +1-800-123-4567.
        </Typography>
      </Box>

      <Box mt={3}>
        <Typography variant="h5" fontWeight="bold" color={colors.primary[600]}>
          FAQs
        </Typography>
        {/* Example FAQ List */}
        <ul>
          <li>
            <Typography variant="body1">
              <strong>Q: How do I reset my password?</strong>
            </Typography>
            <Typography variant="body2">
              To reset your password, go to the login page and click on the
              "Forgot Password" link. Follow the instructions provided to reset
              your password.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <strong>Q: Can I change my email address?</strong>
            </Typography>
            <Typography variant="body2">
              Yes, you can change your email address in your account settings.
              Go to the "Profile" section and update your email address.
            </Typography>
          </li>
          {/* Add more FAQ items */}
        </ul>
      </Box>

      <Box mt={3}>
        <Typography variant="h5" fontWeight="bold" color={colors.primary[600]}>
          Troubleshooting
        </Typography>
        {/* Example Troubleshooting Steps */}
        <ol>
          <li>
            <Typography variant="body1">
              <strong>Step 1: Clear Browser Cache</strong>
            </Typography>
            <Typography variant="body2">
              Clear your browser's cache and cookies to resolve most common
              issues related to login and website functionality.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <strong>Step 2: Update Your Browser</strong>
            </Typography>
            <Typography variant="body2">
              Ensure that your browser is up-to-date. Outdated browsers may
              cause compatibility problems.
            </Typography>
          </li>
          {/* Add more troubleshooting steps */}
        </ol>
      </Box>

      <Box mt={3}>
        <Typography variant="h5" fontWeight="bold" color={colors.primary[600]}>
          Submit a Support Request
        </Typography>
        <Typography variant="body1">
          If you couldn't find a solution to your problem, you can submit a
          support request using the form below:
        </Typography>

        {/* Support Request Form */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="name"
              label="Your Name"
              name="name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Your Email"
              name="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              multiline
              rows={4}
              id="message"
              label="Describe Your Issue"
              name="message"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              // Handle support request submission here
            >
              Submit Request
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Support;
