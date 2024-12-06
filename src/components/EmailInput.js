import React from "react";
import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  updateSubjectA,
  updateSubjectB,
  updatePreviewText,
} from "./../redux/emailSlice";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { red } from "@mui/material/colors";
import TextInput from "./TextInput";

const EmailInput = () => {
  const dispatch = useDispatch();
  const { subjectA, subjectB, previewText } = useSelector(
    (state) => state.email
  );

  const renderInputSection = (title, icon, inputs) => (
    <Box mb={3}>
      <Typography
        variant="subtitle1"
        gutterBottom
        sx={{ display: "flex", alignItems: "center", fontWeight: 700 }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {title}
          {title==="Subject Line"&&<span style={{marginLeft:"0.3rem",color:red[700]}}>*</span>}
          {icon && (
            <HelpOutlineIcon
              sx={{ marginLeft: 0.5 }}
              color="primary"
              fontSize="
          medium"
            />
          )}
        </Box>
      </Typography>
      {inputs}
    </Box>
  );

  return (
    <Box>
      {renderInputSection(
        "Subject Line",
        true,
        <>
          <TextInput
            label="Subject Line A"
            value={subjectA}
            onChange={(e) => dispatch(updateSubjectA(e.target.value))}
            Inital="A"
          />
          <TextInput
            label="Subject Line B"
            value={subjectB}
            onChange={(e) => dispatch(updateSubjectB(e.target.value))}
            Inital="B"
          />
        </>
      )}
      {renderInputSection(
        "Preview Text",
        true,
        <TextInput
          label="Preview Text"
          value={previewText}
          onChange={(e) => dispatch(updatePreviewText(e.target.value))}
          noInitial
        />
      )}
    </Box>
  );
};

export default EmailInput;
