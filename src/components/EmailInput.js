import React from "react";
import { TextField, Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  updateSubjectA,
  updateSubjectB,
  updatePreviewText,
} from "./../redux/emailSlice";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import TextInput from "./TextInput";
const EmailInput = () => {
  const dispatch = useDispatch();
  const { subjectA, subjectB, previewText } = useSelector(
    (state) => state.email
  );

  return (
    <Box>
      <Typography
        variant="h6"
        gutterBottom
        sx={{ display: "flex", alignItems: "center",fontWeight:700 }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          Subject Line
          <span style={{ color: "red", marginLeft: 2 }}>*</span>
        </Box>
        <HelpOutlineIcon sx={{ marginLeft: 1 }} color="primary" />
      </Typography>
     
        <TextInput
          label="Subject Line A"
          value={subjectA}
          onChange={(e) => dispatch(updateSubjectA(e.target.value))}
          Inital={"A"}
        />
        <TextInput
          label="Subject Line B"
          value={subjectB}
          onChange={(e) => dispatch(updateSubjectB(e.target.value))}
          Inital={"B"}
        />
        
        <Typography
        variant="h6"
        gutterBottom
        sx={{ display: "flex", alignItems: "center",fontWeight:700 }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          Preview Text
        </Box>
        <HelpOutlineIcon sx={{ marginLeft: 1 }} color="primary" />
      </Typography>
     
        <TextInput
          label="Subject Line A"
          value={previewText}
          onChange={(e) => dispatch(updatePreviewText(e.target.value))}
          noInitial
        />
      
    </Box>
  );
};

export default EmailInput;
