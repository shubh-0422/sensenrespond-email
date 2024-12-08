import React from "react";
import { Box, Typography ,useMediaQuery} from "@mui/material";
import { useTheme } from "@mui/system";
import { useSelector } from "react-redux";
import ImageIphone from "./../assets/a-removebg-preview.png";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EmailCard from "./EmailCard";

const emails = [
  {
    id: 1,
    initial: "B",
    title: "Brevo Academy",
    subTitle: "Free email marketing course",
    previewText: "Learn how to create an email marketing strategy.",
    time: "01:00 PM",
  },
  {
    id: 2,
    initial: "Z",
    title: "Brevo Editor",
    subTitle: "Try the new drag & drop editor",
    previewText: "Learn how to save time & build beautiful emails in a flash.",
    time: "04:00 PM",
  },
];

const EmailPreview = () => {
  const { subjectA, subjectB, previewText } = useSelector((state) => state.email);
  const headerIconStyles = { fontSize: "large" };
  const wrapperStyles = { display: "flex", justifyContent: "space-between", marginBottom: '0.5rem '};
  
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("sm"));

  return (
    <Box flex={1} sx={{ position: "relative" }}>
      <img
        src={ImageIphone}
        alt="Custom Icon"
        style={{
          width: '100%',
          height: "auto",
        }}
      />
      <Box
        id="email-details"
        sx={{
          position: "absolute", 
          zIndex: 2, 
          top: '5rem',
          left: '3.5rem',
          width: '75%'
        }}
      >
        <Box sx={{...wrapperStyles, alignItems:"baseline" }}>
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
          {emails.map((item) => (
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
      </Box>
      <Typography sx={{fontSize:"0.7rem"}} color="gray" textAlign={'center'}>
            Actual email preview may vary depending on the email client.
          </Typography>
    </Box>
  );
};

export default EmailPreview;
