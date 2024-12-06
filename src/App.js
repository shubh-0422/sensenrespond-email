import * as React from "react";
import { Box, Button, DialogActions, Typography, Dialog, useMediaQuery, CssBaseline } from "@mui/material";
import { green, purple } from "@mui/material/colors";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import EmailInput from "./components/EmailInput";
import EmailPreview from "./components/EmailPreview";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useTheme } from "@mui/system";

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
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("sm"));

  return (
    <Dialog
      open={true}
      maxWidth="md"
      fullWidth
      sx={{
        borderRadius: isMobile ? 0 : 3,
        "& .MuiPaper-root": {
          margin: isMobile ? 0 : undefined,
        },
      }}
    >
      <Box sx={{ padding: isMobile ? 1 : 2 }} flex={1}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant={isMobile ? "h6" : "h5"}
            gutterBottom
            sx={{ display: "flex", alignItems: "center" }}
          >
            <CheckCircleRoundedIcon
              sx={{ color: green[500], marginRight: 2 }}
              fontSize={isMobile ? "medium" : "large"}
            />
            Subject
          </Typography>
          <CloseIcon fontSize={isMobile ? "medium" : "large"} />
        </Box>
        <Box paddingLeft={isMobile ? 2 : 7} paddingRight={isMobile ? 2 : 0}>
          <Typography variant="h6" gutterBottom fontSize={isMobile ? "1rem" : "1.25rem"}>
            Add a subject line for this campaign
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: "flex-start",
              paddingTop: 4,
              flexWrap: isMobile ? "nowrap" : "wrap",
              gap: isMobile ? 8 : 0,
            }}
          >
            <EmailInput />
            <EmailPreview />
          </Box>
        </Box>
        <DialogActions
          sx={{
            flexDirection: isMobile ? "column" : "row",
            columnGapGap: isMobile ? 2 : 0,
          }}
        >
          <Button
            disabled={false}
            size="large"
            fullWidth={isMobile}
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
            fullWidth={isMobile}
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
