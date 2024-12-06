import * as React from "react";
import Box from "@mui/material/Box";
import { green } from "@mui/material/colors";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import { Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import EmailInput from "./components/EmailInput"; // Replace with your actual component
import EmailPreview from "./components/EmailPreview"; // Replace with your actual component
import ImageIphone from "./assets/a-removebg-preview.png"; // Path to image

const EmailLayout = () => {
  return (
    <Dialog open={true} maxWidth="md" fullWidth  sx={{borderRadius:3}}>
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
        <Box paddingLeft={7} >
          <Typography variant="h6" gutterBottom>
            Add a subject line for this campaign
          </Typography>
          <Box
            noValidate
            component="form"
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
               // Ensure proper spacing
               paddingTop:4, 
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

export default EmailLayout;
