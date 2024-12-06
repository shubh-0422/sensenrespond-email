import * as React from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { Box,Typography, Divider, Button } from "@mui/material";

const TextInput = ({ Inital, label, value, onChange, noInitial }) => {
  const [isFocused, setIsFocused] = React.useState(false); // Manage focus state
  const [isHovered, setIsHovered] = React.useState(false); // Manage hover state

  // Event handlers for focus and blur
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };

  // Event handlers for hover
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Box sx={{display:"flex",alignItems:"flex-start",flexDirection:"column"}}>
      <OutlinedInput
       multiline
       maxRows={2}
        fullWidth
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter} // Detect hover
        onMouseLeave={handleMouseLeave} // Detect mouse leave
        id="outlined-adornment"
        startAdornment={
          !noInitial && (
            <InputAdornment
              position="start"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Typography
                variant="h6"
                mx={2}
                sx={{ color: "black" }} // Set the color to black for Inital
              >
                {Inital}
              </Typography>
              <Divider
                orientation="vertical"
                sx={{
                  height: 62,
                  m: 1,
                  borderColor:
                    isFocused || isHovered ? "primary.main" : "divider", // Change color on focus or hover
                  borderWidth: 1.5, // Thicker divider
                  transition: "border-color 0.2s, border-width 0.3s", // Smooth transition for color and thickness
                }}
              />
            </InputAdornment>
          )
        }
        endAdornment={
          <InputAdornment position="end">
            <IconButton edge="end" size="large">
              <PermIdentityIcon sx={{ color:"primary.main" }} />
            </IconButton>
          </InputAdornment>
        }
        aria-describedby="outlined-helper-text"
        inputProps={{
          "aria-label": label,
        }}
        sx={{  overflow: "hidden",
            resize: "none",
          marginBottom: 2,
          borderRadius: 3,
          display: "flex", // Align button and input in one row
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "primary.main",
            borderWidth: 1.5,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "primary.main",
            borderWidth: 1.5, // Border color when focused
          },
        }}
      />
      {!noInitial && (
        <Button
          variant="outlined"
          size="large"
          sx={{
            alignSelf:"flex-end",
            borderRadius: 4,
            marginBottom: 2,
            // marginLeft: 2, // Add space between input and button
            color: "black", // Default text color black
            borderColor: "#e0e0e0", // Default border color black
            textTransform: "none", // Prevents uppercase conversion
            "&:hover": {
              color: "primary.main", 
              borderColor: "primary.main", // Border color turns to primary
            },
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Use AI
          </Typography>
        </Button>
      )}
    </Box>
  );
};

export default TextInput;
