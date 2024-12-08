import React from "react";
import { Box, Typography ,useMediaQuery} from "@mui/material";
import { useTheme } from "@mui/system";
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
    previewText: "Learn how to create an email marketing strategy.",
    time: "Sep 6",
  },
  {
    id: 2,
    initial: "Z",
    title: "Brevo Editor",
    subTitle: "Try the new drag & drop editor",
    previewText: "Learn how to save time & build beautiful emails in a flash.",
    time: "Sep 5",
  },
];

const EmailPreview = () => {
  const { subjectA, subjectB, previewText } = useSelector((state) => state.email);
  const headerIconStyles = { fontSize: "large" };
  const wrapperStyles = { display: "flex", justifyContent: "space-between"};
  
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("sm"));

  return (
    <Box flex={1} sx={{ position: "relative" }}>
      <img
        src={ImageIphone}
        alt="Custom Icon"
        style={{
          minWidth: "24rem", 
          height: "auto",  
          objectFit: "contain",
          position: "absolute", 
          top: "-2.5rem",left: isMobile?"-2rem":"3rem", zIndex: 1, 
        }}
      />
      <Box
        id="email-details"
        sx={{
          px: 0,
          mx: 0,
          paddingY: 2,
          position: "relative", 
          zIndex: 2, 
          top:  isMobile?"2rem":"1rem",left: isMobile?"1rem":"6rem", 
          maxWidth:"18rem"
        }}
      >
        <Box sx={{...wrapperStyles,alignItems:"baseline" }}>
          <KeyboardBackspaceIcon sx={headerIconStyles} />
          <Typography variant="subtitle1" fontWeight={700}>
            Index
          </Typography>
          <MoreVertIcon sx={headerIconStyles} />
        </Box>
        <EmailCard
          initial="A"
          title="The Green Yoga"
          subTitle={subjectA}
          previewText={previewText}
          time="05:45 PM"
        />
        <EmailCard
          initial="B"
          isblue
          title="The Green Yoga"
          subTitle={subjectB}
          previewText={previewText}
          time="05:45 PM"
        />
          {dummyData.map((item) => (
            <EmailCard
              key={item.id}
              isblue={item.id % 2 === 0}
              noInitial
              initial={item.initial}
              title={item.title}
              subTitle={item.subTitle}
              previewText={item.previewText}
              time={item.time}
            />
          ))}
        <Box sx={{ padding: 0,margin:0}}>
          <Typography sx={{fontSize:"0.7rem"}} color="gray">
            Actual email preview may vary depending on the email client.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default EmailPreview;
