import React from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { Box, Typography, Divider, Button } from "@mui/material";

const TextInput = ({
  Inital = "A",
  label = "Input",
  value = "",
  onChange,
  noInitial = false,
}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const dividerStyles = {
    height: 62,
    m: 1,
    borderColor: isFocused || isHovered ? "primary.main" : "divider",
    borderWidth: 1.5,
    transition: "border-color 0.2s, border-width 0.3s",
  };

  return (
    <Box
      sx={{
        display: "flex",
        flex:1,
        alignItems: "flex-start",
        flexDirection: "column",
      }}
    >
      <OutlinedInput
        multiline
        maxRows={2}
        fullWidth
        size="small"
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        id="outlined-adornment"
        startAdornment={
          !noInitial && (
            <InputAdornment
              position="start"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Typography variant="subtitle1" mx={2} sx={{ color: "black" }}>
                {Inital}
              </Typography>
              <Divider orientation="vertical" sx={dividerStyles} />
            </InputAdornment>
          )
        }
        endAdornment={
          <InputAdornment position="end">
            <IconButton edge="end" size="medium">
              <PermIdentityIcon sx={{ color: "primary.main" }} />
            </IconButton>
          </InputAdornment>
        }
        inputProps={{ "aria-label": label }}
        sx={{
          overflow: "hidden",
          resize: "none",
          marginBottom: 2,
          borderRadius: 3,
          display: "flex",
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "primary.main",
            borderWidth: 1.5,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "primary.main",
            borderWidth: 1.5,
          },
        }}
      />
      {!noInitial && (
        <Button
          variant="outlined"
          size="medium"
          sx={{
            alignSelf: "flex-end",
            borderRadius: 4,
            marginBottom: 2,
            color: "black",
            borderColor: "#e0e0e0",
            textTransform: "none",
            "&:hover": {
              color: "primary.main",
              borderColor: "primary.main",
            },
          }}
        >
          <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
            Use AI
          </Typography>
        </Button>
      )}
    </Box>
  );
};

export default TextInput;
