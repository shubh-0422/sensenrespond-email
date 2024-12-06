import * as React from "react";
import Box from "@mui/material/Box";
import { green, purple } from "@mui/material/colors";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import { Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import EmailInput from "./components/EmailInput"; // Replace with your actual component
import EmailPreview from "./components/EmailPreview"; // Replace with your actual component
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: purple[300],
    },
  },
  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
  },
});

const EmailDialog = () => {
  return (
    <Dialog open={true} maxWidth="md" fullWidth sx={{ borderRadius: 3 }}>
      <Box sx={{ padding: 2 }} flex={1}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{ display: "flex", alignItems: "center" }}
          >
            <CheckCircleRoundedIcon
              sx={{ color: green[500], marginRight: 2 }}
              fontSize="large"
            />
            Subject
          </Typography>
          <CloseIcon fontSize="large" />
        </Box>
        <Box paddingLeft={7}>
          <Typography variant="h6" gutterBottom>
            Add a subject line for this campaign
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              paddingTop: 4,
              flexWrap: "wrap", // Allow items to wrap if needed
            }}
          >
            <EmailInput />
            <EmailPreview />
          </Box>
        </Box>
        <DialogActions>
          <Button
            disabled={false}
            size="large"
            sx={{
              borderRadius: 3,
            }}
          >
            Cancel
          </Button>
          <Button
            disabled={true}
            variant="contained"
            size="large"
            sx={{
              borderRadius: 3,
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <EmailDialog />
    </ThemeProvider>
  );
};

export default App;
