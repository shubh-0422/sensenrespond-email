import React from "react";
import { Box, Avatar, Typography } from "@mui/material";
import { blue, grey } from "@mui/material/colors";

const EmailCard = ({ noInitial, initial, title, subTitle, previewText, time, isblue }) => {
  const isEnabled = initial === "A";

  return (
    <Box
      sx={{
        borderRadius: 2,
        opacity: isEnabled ? 1 : 0.6,
        pointerEvents: isEnabled ? "auto" : "none",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 1,
          alignItems: "flex-start",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <Avatar 
          sx={{width: 32, height: 32 ,
            bgcolor: isblue ? blue[500] : "primary.main",
          }}
          aria-label="recipe"
        >
          {!noInitial ? initial : ""}
        </Avatar>
        <Box flex={1}sx={{ minHeight:"3rem", maxWidth:"12rem",overflowY:"hidden"}}>
          <Typography
            margin={0}
            sx={{
              fontWeight: 800,
              fontSize: "0.9rem",
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
              fontSize: "0.7rem", maxWidth:"10rem",overflowX:"hidden"}}>
         
            {subTitle.slice(0,30)}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 600,
              color: isEnabled ? "text.primary" : grey[600],
              fontSize: "0.6rem",maxWidth:"10rem",overflowX:"hidden"}}>
         
            {previewText.slice(0,22)}
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{
            fontWeight: 800,
            fontSize: "0.9rem",
            color: isEnabled ? "text.primary" : "text.disabled",
          }}
        >
          {time}
        </Typography>
      </Box>
    </Box>
  );
};

export default EmailCard;
