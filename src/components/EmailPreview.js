import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import ImageIphone from "./../assets/a-removebg-preview.png";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EmailCard from "./EmailCard";
const dummyData = [
 
  {
    id: 1,
    initial: "B",
    title: "Brevo Academy",
    subTitle: "Free email marketing course",
    previewText: "learn how to create an email marketing strategy.",
    time: "Sep 6",
  },
  {
    id: 2,
    initial: "Z",
    title: "Brevo Editor",
    subTitle: "Try the new drag & dropeditor",
    previewText: "Learn how to save time& build beautiful emails in a flash.",
    time: "Sep 5",
  },
];

const EmailPreview = () => {
  const { subjectA, subjectB, previewText } = useSelector(
    (state) => state.email
  );

  return (
    <Box marginLeft={10} flex={1} marginTop={2}>
      <img
        src={ImageIphone} // Path to your SVG file
        alt="Custom Icon"
        style={{
          maxWidth: "280%",
          minWidth: "30rem", // Limit max width
          height: "auto",
          margin: "10px 0",
          objectFit: "contain",
          position: "absolute",
          top: "90px",
          right: "0",
        }}
      />
      <Box sx={{paddingTop:4}}>
      <Box sx={{ display: "flex", justifyContent: "space-between", px: 2,mb:2 }}>
        <KeyboardBackspaceIcon fontSize="large" />
        <Typography variant="h6" fontWeight={700}>
          index
        </Typography>
        <MoreVertIcon fontSize="large" />
      </Box>
      <EmailCard
        initial={"A"}
        title={"The Green Yoga"}
        subTitle={subjectA}
        previewText={previewText}
        time={"05:45 PM"}
      />
      <EmailCard
        initial={"B"}
        isblue
        title={"The Green Yoga"}
        subTitle={subjectB}
        previewText={previewText}
        time={"05:45 PM"}
      />

      <Box container spacing={2} sx={{ zIndex: 100 }}>
        {dummyData.map((item,ind) => (
          <EmailCard
            key={item.id}
            isblue={item.id%2===0}
            noInitial
            initial={item.initial}
            title={item.title}
            subTitle={item.subTitle}
            previewText={item.previewText}
            time={item.time}
          />
        ))}
      </Box>
      <Box py={5}>
      <div style={{ color: "gray", fontSize: "1rem" }}>Actual email preview may vary depending on the email client.</div>
      </Box>
      </Box>
    </Box>
  );
};

export default EmailPreview;
