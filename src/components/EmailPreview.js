import React from "react";
import { Box, Typography } from "@mui/material";
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

  // Reusable styles
  const headerIconStyles = { fontSize: "large" };
  const wrapperStyles = { display: "flex", justifyContent: "space-between", px: 2, mb: 2 };

  return (
    <Box marginLeft={10} flex={1} marginTop={2}>
      {/* Background Image */}
      <img
        src={ImageIphone}
        alt="Custom Icon"
        style={{
          maxWidth: "280%",
          minWidth: "30rem",
          height: "auto",
          margin: "10px 0",
          objectFit: "contain",
          position: "absolute",
          top: "90px",
          right: "0",
        }}
      />

      <Box sx={{ paddingTop: 4 }}>
        {/* Header Section */}
        <Box sx={wrapperStyles}>
          <KeyboardBackspaceIcon sx={headerIconStyles} />
          <Typography variant="h6" fontWeight={700}>
            Index
          </Typography>
          <MoreVertIcon sx={headerIconStyles} />
        </Box>

        {/* Featured Emails */}
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

        {/* Render Dummy Data */}
        <Box sx={{ zIndex: 100 }}>
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
        </Box>

        {/* Footer Note */}
        <Box sx={{ paddingTop: 5, paddingBottom: 2 }}>
          <Typography variant="body2" color="gray">
            Actual email preview may vary depending on the email client.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default EmailPreview;
