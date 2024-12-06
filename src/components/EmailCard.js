import React from "react";
import { Box, Avatar, Typography } from "@mui/material";
import {  blue, grey } from "@mui/material/colors";

const EmailCard = ({ noInitial, initial, title, subTitle, previewText, time, isblue }) => {
  const isEnabled = initial === "A"; // Determine if the card should be enabled

  return (
    <Box
      sx={{
        borderRadius: 2,
        px: 2,
        mx: 2,
        // backgroundColor: isEnabled ? "#fff" : grey[200], // Change background color
        opacity: isEnabled ? 1 : 0.6, // Add opacity for a disabled look
        pointerEvents: isEnabled ? "auto" : "none", // Disable interactions if not enabled
      }}
    >
      {/* <Box
        sx={{
         
        }}
      > */}
        <Box sx={{ display: "flex", gap: 1,alignItems:"flex-start" ,justifyContent:"space-between"
        , mb: 2,}}>
          <Avatar
            sx={{
              bgcolor:  (isblue ? blue[500] : "primary.main") ,
            }}
            aria-label="recipe"
          >
            {!noInitial ? initial : ""}
          </Avatar>
          <Box flex={1}>
            <Typography
            margin={0}
              variant="body1"
              sx={{
                fontWeight: 800,
                fontSize: "1.2rem",
                color: isEnabled ? "text.primary" : "text.disabled",
              }}
            >
              {title}
            </Typography>
            <Typography
            
            margin={0}
              variant="body1"
              sx={{
                fontWeight: 700,
                color: isEnabled ? "text.primary" : grey[600],
                fontSize: "1rem",
              }}
            >
              {subTitle}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 600,
                color: isEnabled ? "text.primary" : grey[600],
                fontSize: "0.8rem",
              }}
            >
              {previewText}
            </Typography>
          </Box>
          <Typography
          variant="body1"
          sx={{
            fontWeight: 800,
            fontSize: "1.2rem",
            color: isEnabled ? "text.primary" : "text.disabled",
          }}
        >
          {time}
        </Typography>
        </Box>
       
      </Box>
    // </Box>
  );
};

export default EmailCard;
