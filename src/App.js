import * as React from "react";
import { Box, Button, DialogActions, Typography, Dialog, useMediaQuery, CssBaseline, Grid2 } from "@mui/material";
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
          padding: '24px 24px 0px 24px'
        },
      }}
    >

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant={isMobile ? "subtitle1" : "h6"}
            gutterBottom
            sx={{ display: "flex", alignItems: "center",fontWeight:600 }}
          >
            <CheckCircleRoundedIcon
              sx={{ color: green[500], marginRight: 2 }}
              fontSize={ "medium"}
            />
            Subject
          </Typography>
          <CloseIcon fontSize={isMobile ? "medium" : "large"} />
        </Box>
      <Grid2 container spacing={2} alignItems={'center'}>
        <Grid2 size={{xs: 12, md: 6, lg: 6}} >
          <Typography variant="subtitle2" gutterBottom fontSize={isMobile ? "1rem" : "1.25rem"}>
            Add a subject line for this campaign
          </Typography>
            <EmailInput />
        </Grid2>

        <Grid2 size={{xs: 12, md: 6, lg: 6}}>
            <EmailPreview />
        </Grid2>
      </Grid2>
      <Box sx={{ padding: isMobile ? 1 : 2 }} flex={1}>
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
